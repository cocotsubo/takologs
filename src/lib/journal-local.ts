import {
  defaultExperienceTitleFromDate,
  type Experience,
  type Ingestion,
  type IngestionInput,
  type Tolerance,
} from "./journal";
import { durableGet, durableSet } from "@/lib/durable-store";
import { uuid } from "./uuid";

const LEGACY_KEY = "takologs-ftp-journal";

type DB = { experiences: Experience[]; tolerance: Tolerance[] };

function sessionId(): string | null {
  try {
    const raw = localStorage.getItem("takologs-ftp-session") ?? durableGet("takologs-ftp-session");
    if (!raw) return null;
    const u = JSON.parse(raw) as { id?: string };
    return u.id || null;
  } catch {
    return null;
  }
}

function storageKey() {
  const id = sessionId();
  return id ? `${LEGACY_KEY}:${id}` : LEGACY_KEY;
}

function unwrap<T>(x: T | { data: T }): T {
  if (x && typeof x === "object" && "data" in (x as object)) {
    return (x as { data: T }).data;
  }
  return x as T;
}

function empty(): DB {
  return { experiences: [], tolerance: [] };
}

function read(): DB {
  try {
    const key = storageKey();
    let raw = durableGet(key);
    if (!raw && key !== LEGACY_KEY) {
      const legacy = durableGet(LEGACY_KEY);
      if (legacy) {
        durableSet(key, legacy);
        raw = legacy;
      }
    }
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as DB;
    return {
      experiences: Array.isArray(parsed.experiences) ? parsed.experiences : [],
      tolerance: Array.isArray(parsed.tolerance) ? parsed.tolerance : [],
    };
  } catch {
    return empty();
  }
}

function write(db: DB) {
  durableSet(storageKey(), JSON.stringify(db));
}

function localDay(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function rebuildTolerance(db: DB) {
  const last = new Map<string, { name: string; date: string }>();
  for (const exp of db.experiences) {
    for (const ing of exp.ingestions) {
      const day = localDay(ing.ingestionTime);
      const key = ing.substanceName.trim().toLowerCase();
      if (!key) continue;
      const cur = last.get(key);
      if (!cur || day > cur.date) last.set(key, { name: ing.substanceName, date: day });
    }
  }
  const kept = new Map(db.tolerance.map((t) => [t.substanceName.toLowerCase(), t]));
  const next: Tolerance[] = [];
  for (const [key, row] of last) {
    const prev = kept.get(key);
    next.push({
      id: prev?.id ?? uuid(),
      substanceName: prev?.substanceName ?? row.name,
      lastTakenDate: row.date,
      resetDays: prev?.resetDays ?? 14,
    });
  }
  next.sort((a, b) => b.lastTakenDate.localeCompare(a.lastTakenDate));
  db.tolerance = next;
}

function bump(db: DB, name: string, when: string) {
  const day = localDay(when);
  const i = db.tolerance.findIndex(
    (t) => t.substanceName.toLowerCase() === name.toLowerCase(),
  );
  if (i >= 0) {
    if (day >= db.tolerance[i].lastTakenDate) {
      db.tolerance[i] = { ...db.tolerance[i], lastTakenDate: day };
    }
  } else {
    db.tolerance.unshift({
      id: uuid(),
      substanceName: name,
      lastTakenDate: day,
      resetDays: 14,
    });
  }
}

export async function listExperiences() {
  const db = read();
  return db.experiences
    .slice()
    .sort(
      (a, b) =>
        new Date(b.experienceDate).getTime() - new Date(a.experienceDate).getTime(),
    );
}

export async function loadJournal() {
  const db = read();
  rebuildTolerance(db);
  write(db);
  const experiences = db.experiences
    .slice()
    .sort(
      (a, b) =>
        new Date(b.experienceDate).getTime() - new Date(a.experienceDate).getTime(),
    );
  return { experiences, tolerance: db.tolerance };
}

export async function getExperience(arg: string | { data: string }) {
  const id = unwrap(arg);
  return read().experiences.find((e) => e.id === id) ?? null;
}

export async function upsertExperience(arg: {
  data: {
    id?: string;
    title: string;
    experienceDate: string;
    notes: string;
    feeling?: number | null;
    shulgin?: string | null;
    shulginLog?: Experience["shulginLog"];
    media?: Experience["media"];
    tracks?: Experience["tracks"];
    heartRate?: Experience["heartRate"];
  };
}) {
  const data = unwrap(arg);
  const db = read();
  const title =
    data.title.trim() ||
    defaultExperienceTitleFromDate(data.experienceDate, "fr-FR");
  const feeling =
    data.feeling != null && data.feeling >= 1 && data.feeling <= 5
      ? Math.round(data.feeling)
      : null;
  if (data.id) {
    const i = db.experiences.findIndex((e) => e.id === data.id);
    if (i >= 0) {
      db.experiences[i] = {
        ...db.experiences[i],
        title,
        experienceDate: data.experienceDate,
        notes: data.notes,
        feeling,
        shulgin: "shulgin" in data ? data.shulgin ?? null : db.experiences[i].shulgin ?? null,
        shulginLog:
          data.shulginLog !== undefined
            ? data.shulginLog
            : db.experiences[i].shulginLog,
        media: data.media !== undefined ? data.media : db.experiences[i].media,
        tracks: data.tracks !== undefined ? data.tracks : db.experiences[i].tracks,
        heartRate:
          data.heartRate !== undefined
            ? data.heartRate
            : db.experiences[i].heartRate,
      };
      write(db);
      return data.id;
    }
  }
  const id = data.id || uuid();
  db.experiences.unshift({
    id,
    title,
    experienceDate: data.experienceDate,
    notes: data.notes,
    feeling,
    shulgin: data.shulgin ?? null,
    shulginLog: data.shulginLog ?? [],
    media: data.media ?? [],
    tracks: data.tracks ?? [],
    heartRate: data.heartRate ?? [],
    ingestions: [],
  });
  write(db);
  return id;
}

export async function deleteExperience(arg: string | { data: string }) {
  const id = unwrap(arg);
  const db = read();
  db.experiences = db.experiences.filter((e) => e.id !== id);
  rebuildTolerance(db);
  write(db);
}

export async function addIngestion(arg: {
  data: { experienceId: string; ingestion: IngestionInput };
}) {
  const { experienceId, ingestion } = unwrap(arg);
  const db = read();
  const exp = db.experiences.find((e) => e.id === experienceId);
  if (!exp) return null;
  const row: Ingestion = {
    id: uuid(),
    experienceId,
    substanceName: ingestion.substanceName,
    slug: ingestion.slug ?? null,
    route: ingestion.route,
    dose: ingestion.dose,
    doseUnit: ingestion.doseUnit,
    color: ingestion.color ?? null,
    ingestionTime: ingestion.ingestionTime,
    notes: ingestion.notes ?? "",
  };
  exp.ingestions = [...exp.ingestions, row].sort(
    (a, b) =>
      new Date(a.ingestionTime).getTime() - new Date(b.ingestionTime).getTime(),
  );
  bump(db, row.substanceName, row.ingestionTime);
  write(db);
  return row;
}

export async function updateIngestion(arg: {
  data: { id: string; ingestion: IngestionInput };
}) {
  const { id, ingestion } = unwrap(arg);
  const db = read();
  for (const exp of db.experiences) {
    const i = exp.ingestions.findIndex((x) => x.id === id);
    if (i < 0) continue;
    const row: Ingestion = {
      ...exp.ingestions[i],
      substanceName: ingestion.substanceName,
      slug: ingestion.slug ?? null,
      route: ingestion.route,
      dose: ingestion.dose,
      doseUnit: ingestion.doseUnit,
      color: ingestion.color ?? null,
      ingestionTime: ingestion.ingestionTime,
      notes: ingestion.notes ?? "",
    };
    exp.ingestions[i] = row;
    bump(db, row.substanceName, row.ingestionTime);
    write(db);
    return row;
  }
  return null;
}

export async function deleteIngestion(arg: string | { data: string }) {
  const id = unwrap(arg);
  const db = read();
  for (const exp of db.experiences) {
    exp.ingestions = exp.ingestions.filter((x) => x.id !== id);
  }
  rebuildTolerance(db);
  write(db);
}

export async function updateToleranceDays(arg: {
  data: { id: string; days: number };
}) {
  const { id, days } = unwrap(arg);
  const db = read();
  const t = db.tolerance.find((x) => x.id === id);
  if (t) t.resetDays = Math.max(1, Math.round(days));
  write(db);
}

export async function importJournalDump(arg: { data: { experiences: Experience[] } }) {
  const { experiences } = unwrap(arg);
  const db = read();
  let imported = 0;
  for (const exp of (experiences ?? []).slice(0, 400)) {
    const id = uuid();
    const firstIng = (exp.ingestions ?? [])[0] as
      | (Ingestion & { time?: unknown })
      | undefined;
    const date =
      exp.experienceDate ||
      (firstIng?.ingestionTime ?? "") ||
      (typeof (exp as { creationDate?: unknown }).creationDate !== "undefined"
        ? String((exp as { creationDate?: unknown }).creationDate)
        : "") ||
      firstIng?.ingestionTime;
    const dateIso = (() => {
      if (date && !Number.isNaN(new Date(date).getTime()) && new Date(date).getFullYear() > 2000) {
        return new Date(date).toISOString();
      }
      const raw = exp as unknown as { creationDate?: unknown; sortDate?: unknown };
      const n = Number(raw.sortDate ?? raw.creationDate ?? 0);
      if (n > 1e11) return new Date(n).toISOString();
      if (n > 1e9) return new Date(n * 1000).toISOString();
      return firstIng?.ingestionTime || "";
    })();
    if (!dateIso) continue;
    const copy: Experience = {
      id,
      title:
        (exp.title ?? "").trim() ||
        defaultExperienceTitleFromDate(dateIso, "fr-FR"),
      experienceDate: dateIso,
      notes: exp.notes ?? "",
      feeling: exp.feeling ?? null,
      shulgin: exp.shulgin ?? null,
      shulginLog: exp.shulginLog ?? [],
      media: exp.media ?? [],
      tracks: exp.tracks ?? [],
      heartRate: exp.heartRate ?? [],
      ingestions: (exp.ingestions ?? []).slice(0, 250).map((ing) => {
        const raw = ing as Ingestion & { time?: unknown };
        let t = raw.ingestionTime || "";
        if (!t && raw.time != null) {
          const n = Number(raw.time);
          if (n > 1e11) t = new Date(n).toISOString();
          else if (n > 1e9) t = new Date(n * 1000).toISOString();
        }
        if (!t) t = dateIso;
        return {
          id: uuid(),
          experienceId: id,
          substanceName: raw.substanceName,
          slug: raw.slug ?? null,
          route: raw.route || "Orale",
          dose: raw.dose ?? null,
          doseUnit: raw.doseUnit || "mg",
          color: raw.color ?? null,
          ingestionTime: t,
          notes: raw.notes ?? "",
        };
      }),
    };
    for (const ing of copy.ingestions) bump(db, ing.substanceName, ing.ingestionTime);
    db.experiences.unshift(copy);
    imported += 1;
  }
  rebuildTolerance(db);
  write(db);
  return { imported };
}
