import { durationCurve, findSubstanceByName } from "@/lib/substances";
import { durableGet, durableSet } from "@/lib/durable-store";
import type { Ingestion } from "./journal";
import { comboWarnings } from "@/lib/interactions";
import alertsJson from "@/data/alerts.json";

const KEY = "takologs-notify";
const PLAN_KEY = "takologs-notify-plan";
const FIRED_KEY = "takologs-notify-fired";
const INBOX_KEY = "takologs-inbox";

export type ToastPayload = { title: string; body?: string; kind?: string };

export type InboxItem = {
  id: string;
  title: string;
  body?: string;
  at: number;
  kind: string;
  read: boolean;
};

type Planned = { id: string; at: number; title: string; body?: string; kind?: string };

type AlertRow = { expected?: string; found?: string; summary?: string; level?: string; lab?: string };

const ALERTS = alertsJson as AlertRow[];

export function isIosDevice() {
  if (typeof navigator === "undefined") return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

export function isStandalonePwa() {
  if (typeof window === "undefined") return false;
  const nav = navigator as Navigator & { standalone?: boolean };
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    nav.standalone === true
  );
}

export function notifyEnabled() {
  try {
    return durableGet(KEY) === "1" || localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export function setNotifyEnabled(v: boolean) {
  try {
    durableSet(KEY, v ? "1" : "0");
  } catch {
    /* ignore */
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("takologs-notify-changed"));
  }
}

export function pushToast(payload: ToastPayload) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("takologs-toast", { detail: payload }));
}

function loadPlan(): Planned[] {
  try {
    const raw = durableGet(PLAN_KEY);
    const list = raw ? (JSON.parse(raw) as Planned[]) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function savePlan(list: Planned[]) {
  durableSet(PLAN_KEY, JSON.stringify(list.slice(-80)));
}

function loadFired(): Set<string> {
  try {
    const raw = durableGet(FIRED_KEY);
    const list = raw ? (JSON.parse(raw) as string[]) : [];
    return new Set(Array.isArray(list) ? list : []);
  } catch {
    return new Set();
  }
}

function markFired(id: string) {
  const s = loadFired();
  s.add(id);
  durableSet(FIRED_KEY, JSON.stringify([...s].slice(-200)));
}

export function readInbox(): InboxItem[] {
  try {
    const raw = durableGet(INBOX_KEY) || (typeof localStorage !== "undefined" ? localStorage.getItem(INBOX_KEY) : null);
    const list = raw ? (JSON.parse(raw) as InboxItem[]) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function writeInbox(list: InboxItem[]) {
  durableSet(INBOX_KEY, JSON.stringify(list.slice(0, 80)));
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("takologs-inbox"));
  }
}

export function unreadCount() {
  return readInbox().filter((i) => !i.read).length;
}

export function markInboxRead() {
  writeInbox(readInbox().map((i) => ({ ...i, read: true })));
}

export function clearInbox() {
  writeInbox([]);
}

function pushInbox(item: Omit<InboxItem, "read" | "at"> & { at?: number }) {
  const row: InboxItem = {
    id: item.id,
    title: item.title,
    body: item.body,
    kind: item.kind,
    at: item.at ?? Date.now(),
    read: false,
  };
  const prev = readInbox().filter((x) => x.id !== row.id);
  writeInbox([row, ...prev]);
}

async function systemNotify(title: string, tag?: string, body?: string) {
  if (typeof window === "undefined") return;
  if (typeof Notification === "undefined") return;
  if (Notification.permission !== "granted") return;
  const text = body || "TakoLogs";
  const opts: NotificationOptions = {
    body: text,
    icon: new URL("./apple-touch-icon.png", window.location.href).href,
    badge: new URL("./icon-192.png", window.location.href).href,
    tag: tag || "takologs",
    silent: false,
  };
  try {
    const reg = await navigator.serviceWorker?.ready;
    if (reg?.showNotification) {
      await reg.showNotification(title, opts);
      return;
    }
  } catch {
    /* fall through */
  }
  try {
    const sw = navigator.serviceWorker?.controller;
    if (sw) {
      sw.postMessage({ type: "notify", title, body: text, tag: tag || "takologs" });
      return;
    }
  } catch {
    /* fall through */
  }
  try {
    new Notification(title, opts);
  } catch {
    /* iOS page Notification unsupported */
  }
}

function fire(title: string, tag?: string, body?: string, kind = "info") {
  pushInbox({ id: tag || `n-${Date.now()}`, title, body, kind });
  pushToast({ title, body: body || "TakoLogs", kind });
  if (notifyEnabled()) void systemNotify(title, tag, body);
}

export function warnHeartRate(
  bpm: number,
  copy: { high: string; highBody: string; low: string; lowBody: string },
) {
  if (!Number.isFinite(bpm)) return;
  if (bpm >= 140) {
    fire(copy.high, `hr-high-${Date.now()}`, copy.highBody, "heart");
  } else if (bpm <= 45) {
    fire(copy.low, `hr-low-${Date.now()}`, copy.lowBody, "heart");
  }
}

function clock(ms: number) {
  try {
    return new Date(ms).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

export async function sendTestNotify() {
  if (typeof window === "undefined") return false;
  if (!notifyEnabled() || (typeof Notification !== "undefined" && Notification.permission !== "granted")) {
    const ok = await requestNotify();
    if (!ok) return false;
  }
  const time = clock(Date.now());
  fire("TakoLogs — test", "takologs-test", `Envoyée à ${time}`);
  return true;
}

export async function requestNotify(): Promise<boolean> {
  if (typeof window === "undefined") return false;
  if (isIosDevice() && !isStandalonePwa()) {
    pushToast({
      title: "iPhone : ajoute TakoLogs à l’écran d’accueil (Partager), puis réactive les notifications.",
    });
    return false;
  }
  let perm: NotificationPermission = "default";
  try {
    if (typeof Notification !== "undefined" && Notification.requestPermission) {
      perm = await Notification.requestPermission();
    }
  } catch {
    perm = typeof Notification !== "undefined" ? Notification.permission : "denied";
  }
  if (perm !== "granted") {
    setNotifyEnabled(false);
    pushToast({
      title: isIosDevice()
        ? "iOS a refusé. Ouvre l’app depuis l’écran d’accueil, puis autorise les notifications."
        : "Notifications système refusées — les toasts in-app restent actifs.",
    });
    if (!isIosDevice()) {
      setNotifyEnabled(true);
      return true;
    }
    return false;
  }
  setNotifyEnabled(true);
  fire("TakoLogs — notifications activées", "takologs-test");
  flushDue();
  window.dispatchEvent(new Event("takologs-notify-changed"));
  return true;
}

const timeouts = new Map<string, number>();

function arm(p: Planned) {
  if (timeouts.has(p.id)) return;
  const wait = p.at - Date.now();
  if (wait <= 0) {
    fire(p.title, p.id, p.body, p.kind ?? "info");
    markFired(p.id);
    return;
  }
  const cap = Math.min(wait, 2_147_000_000);
  const tid = window.setTimeout(() => {
    timeouts.delete(p.id);
    flushDue();
  }, Math.max(400, cap));
  timeouts.set(p.id, tid);
}

export function flushDue() {
  const now = Date.now();
  const keep: Planned[] = [];
  for (const p of loadPlan()) {
    if (p.at <= now + 1500) {
      fire(p.title, p.id, p.body, p.kind);
      markFired(p.id);
    } else {
      keep.push(p);
      arm(p);
    }
  }
  savePlan(keep);
}

function labHit(name: string): AlertRow | undefined {
  const n = name.toLowerCase();
  const token = n.split(/[\s+/,-]+/).find((x) => x.length > 2) ?? n;
  return ALERTS.find((a) => {
    const exp = (a.expected || "").toLowerCase();
    if (!exp) return false;
    const match = n.includes(exp) || exp.includes(token);
    if (!match) return false;
    const found = (a.found || "").toLowerCase();
    if (a.level === "high" || a.level === "warn") return true;
    return found.length > 0 && !found.includes(exp);
  });
}

function isSitterCat(name: string) {
  const sub = findSubstanceByName(name);
  const cat = (sub?.category || "").toLowerCase();
  return cat === "psychedelic" || cat === "dissociative" || cat === "deliriant";
}

export function scheduleIngestionNotices(
  ings: Ingestion[],
  labels: {
    onset: string;
    peak: string;
    offset: string;
    onsetBody?: string;
    peakBody?: string;
    offsetBody?: string;
    care3?: string;
    care3Body?: string;
    care6?: string;
    care6Body?: string;
    care9?: string;
    care9Body?: string;
    care12?: string;
    care12Body?: string;
    hydrate?: string;
    hydrateBody?: string;
    idle?: string;
    idleBody?: string;
    mix?: string;
    mixBody?: string;
    lab?: string;
    labBody?: string;
    drive?: string;
    driveBody?: string;
    rest?: string;
    restBody?: string;
    sitter?: string;
    sitterBody?: string;
    redose?: string;
    redoseBody?: string;
  },
  expId?: string,
) {
  const now = Date.now();
  const plan = loadPlan();
  const fired = loadFired();
  const seen = new Set([...plan.map((p) => p.id), ...fired]);
  for (const ing of ings) {
    const sub = findSubstanceByName(ing.substanceName);
    const c = sub
      ? durationCurve(sub)
      : { onset: 20, peakStart: 60, peakEnd: 120, total: 180 };
    const start = new Date(ing.ingestionTime).getTime();
    if (!Number.isFinite(start)) continue;
    const rows: [number, string, string][] = [
      [
        start + c.onset * 60000,
        labels.onset.replace("{name}", ing.substanceName),
        (labels.onsetBody ?? "Début à {time}").replace("{time}", clock(start + c.onset * 60000)),
      ],
      [
        start + c.peakStart * 60000,
        labels.peak.replace("{name}", ing.substanceName),
        (labels.peakBody ?? "Pic à {time}").replace("{time}", clock(start + c.peakStart * 60000)),
      ],
      [
        start + c.peakEnd * 60000,
        labels.offset.replace("{name}", ing.substanceName),
        (labels.offsetBody ?? "Descente à {time}").replace("{time}", clock(start + c.peakEnd * 60000)),
      ],
    ];
    for (const [at, title, body] of rows) {
      const id = `${ing.id}-${at}`;
      if (seen.has(id) || at <= now + 2000) continue;
      seen.add(id);
      plan.push({ id, at, title, body, kind: "phase" });
    }
  }
  if (expId && ings.length) {
    const n = ings.length;
    const cares: [number, string, string, string][] = [];
    if (n >= 3 && labels.care3) cares.push([3, labels.care3, labels.care3Body ?? "", "care"]);
    if (n >= 6 && labels.care6) cares.push([6, labels.care6, labels.care6Body ?? "", "care"]);
    if (n >= 9 && labels.care9) cares.push([9, labels.care9, labels.care9Body ?? "", "care"]);
    if (n >= 12 && labels.care12) cares.push([12, labels.care12, labels.care12Body ?? "", "sos"]);
    for (const [th, title, body, kind] of cares) {
      const id = `care-${expId}-${th}`;
      if (seen.has(id)) continue;
      seen.add(id);
      plan.push({ id, at: now, title, body, kind });
    }
    const lastStart = Math.max(
      ...ings.map((i) => new Date(i.ingestionTime).getTime()).filter(Number.isFinite),
    );
    const sessionEnd = Math.max(
      ...ings.map((i) => {
        const sub = findSubstanceByName(i.substanceName);
        const total = (sub ? durationCurve(sub).total : 180) * 60000;
        return new Date(i.ingestionTime).getTime() + total;
      }),
    );
    const dropSession = (id: string) =>
      id.startsWith(`idle-${expId}-`) ||
      id.startsWith(`hydrate-${expId}-`) ||
      id.startsWith(`drive-${expId}-`) ||
      id.startsWith(`rest-${expId}-`);
    for (let i = plan.length - 1; i >= 0; i--) {
      if (dropSession(plan[i].id) && !fired.has(plan[i].id)) {
        seen.delete(plan[i].id);
        plan.splice(i, 1);
      }
    }
    if (labels.hydrate && sessionEnd > now) {
      for (let t = lastStart + 3_600_000; t <= sessionEnd && t < now + 12 * 3_600_000; t += 3_600_000) {
        const hour = Math.round((t - lastStart) / 3_600_000);
        const id = `hydrate-${expId}-${hour}`;
        if (seen.has(id) || t <= now + 2000) continue;
        seen.add(id);
        plan.push({
          id,
          at: t,
          title: labels.hydrate,
          body: labels.hydrateBody ?? "",
          kind: "hydrate",
        });
      }
    }
    if (labels.idle && sessionEnd > now) {
      const idleAt = lastStart + 3 * 3_600_000;
      const id = `idle-${expId}-${lastStart}`;
      if (!seen.has(id) && idleAt < sessionEnd + 60_000) {
        seen.add(id);
        plan.push({
          id,
          at: idleAt,
          title: labels.idle,
          body: labels.idleBody ?? "",
          kind: "idle",
        });
      }
    }
    if (labels.drive && sessionEnd > now + 2000) {
      const id = `drive-${expId}-${sessionEnd}`;
      if (!seen.has(id)) {
        seen.add(id);
        plan.push({
          id,
          at: sessionEnd,
          title: labels.drive,
          body: labels.driveBody ?? "",
          kind: "drive",
        });
      }
    }
    if (labels.rest && sessionEnd + 3_600_000 > now + 2000) {
      const id = `rest-${expId}-${sessionEnd}`;
      if (!seen.has(id)) {
        seen.add(id);
        plan.push({
          id,
          at: sessionEnd + 3_600_000,
          title: labels.rest,
          body: labels.restBody ?? "",
          kind: "rest",
        });
      }
    }
    if (labels.sitter) {
      const trip = ings.find((i) => isSitterCat(i.substanceName));
      if (trip) {
        const sub = findSubstanceByName(trip.substanceName);
        const onset = (sub ? durationCurve(sub).onset : 30) * 60000;
        const at = new Date(trip.ingestionTime).getTime() + onset;
        const id = `sitter-${expId}`;
        if (!seen.has(id) && at > now - 10 * 60_000) {
          seen.add(id);
          plan.push({
            id,
            at: Math.max(at, now),
            title: labels.sitter,
            body: labels.sitterBody ?? "",
            kind: "sitter",
          });
        }
      }
    }
    if (labels.redose) {
      const byName = new Map<string, Ingestion[]>();
      for (const ing of ings) {
        const k = ing.substanceName.toLowerCase();
        const list = byName.get(k) ?? [];
        list.push(ing);
        byName.set(k, list);
      }
      for (const [name, list] of byName) {
        if (list.length < 2) continue;
        const sorted = [...list].sort(
          (a, b) => new Date(a.ingestionTime).getTime() - new Date(b.ingestionTime).getTime(),
        );
        const prev = sorted[sorted.length - 2];
        const last = sorted[sorted.length - 1];
        const sub = findSubstanceByName(last.substanceName);
        const peak = (sub ? durationCurve(sub).peakStart : 60) * 60000;
        const gap =
          new Date(last.ingestionTime).getTime() - new Date(prev.ingestionTime).getTime();
        if (gap > peak) continue;
        const id = `redose-${expId}-${name}`;
        if (seen.has(id)) continue;
        seen.add(id);
        plan.push({
          id,
          at: now,
          title: labels.redose.replace("{name}", last.substanceName),
          body: (labels.redoseBody ?? "{name}").replace("{name}", last.substanceName),
          kind: "care",
        });
      }
    }
    const mixes = comboWarnings(ings.map((i) => i.substanceName)).filter((w) => w.level === "dangerous");
    if (mixes.length && labels.mix) {
      const id = `mix-${expId}-${mixes.map((m) => m.a + m.b).join("")}`;
      if (!seen.has(id)) {
        seen.add(id);
        plan.push({
          id,
          at: now,
          title: labels.mix,
          body: (labels.mixBody ?? "{pair}").replace(
            "{pair}",
            mixes.map((m) => `${m.a} + ${m.b}`).join(", "),
          ),
          kind: "mix",
        });
      }
    }
    if (labels.lab) {
      for (const ing of ings) {
        const hit = labHit(ing.substanceName);
        if (!hit) continue;
        const id = `lab-${expId}-${ing.substanceName}`;
        if (seen.has(id)) continue;
        seen.add(id);
        plan.push({
          id,
          at: now,
          title: labels.lab.replace("{name}", ing.substanceName),
          body: (labels.labBody ?? "{detail}")
            .replace("{name}", ing.substanceName)
            .replace("{detail}", hit.summary || `${hit.expected} → ${hit.found}`),
          kind: "lab",
        });
      }
    }
  }
  savePlan(plan);
  flushDue();
}

if (typeof window !== "undefined") {
  window.addEventListener("focus", flushDue);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") flushDue();
  });
  window.setInterval(flushDue, 30_000);
}
