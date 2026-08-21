import { durableGet, durableSet } from "@/lib/durable-store";

export type Visit = {
  t: number;
  path: string;
  ref: string;
  vid: string;
  ua: string;
};

const VISIT_KEY = "takologs-visits";
const VID_KEY = "takologs-vid";
const MAX = 8000;

function readList(): Visit[] {
  try {
    const raw = durableGet(VISIT_KEY);
    const list = raw ? (JSON.parse(raw) as Visit[]) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function writeList(list: Visit[]) {
  durableSet(VISIT_KEY, JSON.stringify(list.slice(-MAX)));
}

export function visitorId() {
  if (typeof window === "undefined") return "ssr";
  try {
    let id = localStorage.getItem(VID_KEY);
    if (!id) {
      id = crypto.randomUUID?.() ?? `v-${Date.now()}`;
      localStorage.setItem(VID_KEY, id);
    }
    return id;
  } catch {
    return "anon";
  }
}

function deviceOf(ua: string) {
  if (/iPhone|iPad|Android|Mobile/i.test(ua)) return "mobile";
  if (/Macintosh|Windows|Linux/i.test(ua)) return "desktop";
  return "other";
}

export function trackPage(path: string) {
  if (typeof window === "undefined") return;
  if (path.startsWith("/admin")) return;
  const visit: Visit = {
    t: Date.now(),
    path: path || "/",
    ref: document.referrer || "",
    vid: visitorId(),
    ua: navigator.userAgent || "",
  };
  const list = readList();
  const last = list[list.length - 1];
  if (last && last.path === visit.path && visit.t - last.t < 4000 && last.vid === visit.vid) {
    return;
  }
  list.push(visit);
  writeList(list);
  void pingServer("track", visit);
}

export function loadVisits(): Visit[] {
  return readList();
}

export function visitStats(days = 14) {
  const list = readList();
  const now = Date.now();
  const dayMs = 86400000;
  const start7 = now - 7 * dayMs;
  const startN = now - days * dayMs;
  const today0 = new Date();
  today0.setHours(0, 0, 0, 0);
  const todayStart = today0.getTime();

  const pages = new Map<string, number>();
  const refs = new Map<string, number>();
  const devices = new Map<string, number>();
  const byDay: { key: string; n: number }[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(todayStart - i * dayMs);
    const key = d.toISOString().slice(0, 10);
    byDay.push({ key, n: 0 });
  }
  const dayIndex = new Map(byDay.map((d, i) => [d.key, i]));
  const uniques = new Set<string>();
  const uniques7 = new Set<string>();
  let today = 0;
  let last7 = 0;

  for (const v of list) {
    if (v.t >= todayStart) today += 1;
    if (v.t >= start7) {
      last7 += 1;
      uniques7.add(v.vid);
    }
    if (v.t >= startN) {
      uniques.add(v.vid);
      pages.set(v.path, (pages.get(v.path) ?? 0) + 1);
      const host = hostOf(v.ref);
      if (host) refs.set(host, (refs.get(host) ?? 0) + 1);
      const dev = deviceOf(v.ua);
      devices.set(dev, (devices.get(dev) ?? 0) + 1);
      const key = new Date(v.t).toISOString().slice(0, 10);
      const i = dayIndex.get(key);
      if (i != null) byDay[i].n += 1;
    }
  }

  const top = (m: Map<string, number>, n = 8) =>
    [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, n);

  return {
    today,
    last7,
    uniques: uniques.size,
    uniques7: uniques7.size,
    total: list.length,
    byDay,
    pages: top(pages),
    refs: top(refs),
    devices: top(devices),
  };
}

function hostOf(ref: string) {
  if (!ref) return "";
  try {
    return new URL(ref).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export async function pingServer(action: string, payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    const url = new URL("admin-api.php", window.location.href).toString();
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, ...payload }),
      keepalive: true,
    });
  } catch {
    /* offline / no PHP */
  }
}
