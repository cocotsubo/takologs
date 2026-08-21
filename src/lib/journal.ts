import type { ExperienceTrack } from "@/lib/music";

export type { ExperienceTrack };

export type Ingestion = {
  id: string;
  experienceId: string;
  substanceName: string;
  slug?: string | null;
  route: string;
  dose: number | null;
  doseUnit: string;
  color?: string | null;
  ingestionTime: string;
  notes: string;
};

export type ShulginPoint = { time: string; level: string };

export type HeartRatePoint = { time: string; bpm: number };

export type ExperienceMedia = {
  id: string;
  name: string;
  dataUrl: string;
  kind: "image" | "video";
};

export type TimedNote = {
  id: string;
  time: string;
  text: string;
  color: string;
  emoji: string;
};

export type Experience = {
  id: string;
  title: string;
  experienceDate: string;
  notes: string;
  feeling: number | null;
  shulgin?: string | null;
  shulginLog?: ShulginPoint[];
  heartRate?: HeartRatePoint[];
  media?: ExperienceMedia[];
  tracks?: ExperienceTrack[];
  timedNotes?: TimedNote[];
  ingestions: Ingestion[];
};

export type Tolerance = {
  id: string;
  substanceName: string;
  lastTakenDate: string;
  resetDays: number;
};

export type DraftIngestion = {
  substanceName: string;
  slug?: string;
  route: string;
  dose: number | null;
  doseUnit: string;
  color?: string;
  ingestionTime?: string;
  notes?: string;
};

export type IngestionInput = {
  substanceName: string;
  slug?: string | null;
  route: string;
  dose: number | null;
  doseUnit: string;
  color?: string | null;
  ingestionTime: string;
  notes: string;
};

const DRAFT_KEY = "takologs-draft-ingestion";

export const INGESTION_ROUTES = [
  "Orale",
  "Insufflée",
  "Fumée",
  "Vaporisée",
  "Inhalée",
  "Sublinguale",
  "Buccale",
  "Intraveineuse",
  "Intramusculaire",
  "Sous-cutanée",
  "Rectale",
  "Transdermique",
] as const;

export const INGESTION_COLORS = [
  "#c9704f",
  "#c99a2e",
  "#5b8a72",
  "#6f86c9",
  "#b1573a",
  "#7fa15a",
  "#c95f8e",
  "#8a6239",
  "#4f7fc9",
  "#a9824c",
  "#8a5fc9",
  "#c94f4f",
];

export const FEELING_SCALE = [
  { n: 1, emoji: "😫" },
  { n: 2, emoji: "😕" },
  { n: 3, emoji: "😐" },
  { n: 4, emoji: "🙂" },
  { n: 5, emoji: "🤩" },
] as const;

export const SHULGIN_SCALE = ["−", "+/−", "+", "++", "+++", "++++"] as const;

export function latestHeartRate(
  list?: HeartRatePoint[] | null,
): HeartRatePoint | null {
  if (!list?.length) return null;
  return list
    .slice()
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())[0] ?? null;
}

export function heartTone(bpm: number): "ok" | "warn" | "high" | "low" {
  if (!Number.isFinite(bpm)) return "ok";
  if (bpm <= 45) return "low";
  if (bpm >= 140) return "high";
  if (bpm < 55 || bpm > 110) return "warn";
  return "ok";
}

export function localDateTimeInput(d = new Date()) {
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);
}

export function toLocalInput(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return localDateTimeInput();
  return localDateTimeInput(d);
}

export function fromLocalInput(value: string) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

export function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function setDraft(d: DraftIngestion) {
  if (typeof window === "undefined") return;
  localStorage.setItem(DRAFT_KEY, JSON.stringify(d));
}

export function peekDraft(): DraftIngestion | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? (JSON.parse(raw) as DraftIngestion) : null;
  } catch {
    return null;
  }
}

export function consumeDraft(): DraftIngestion | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    localStorage.removeItem(DRAFT_KEY);
    return raw ? (JSON.parse(raw) as DraftIngestion) : null;
  } catch {
    return null;
  }
}

export function journalStats(exps: Experience[]) {
  const names = exps.flatMap((e) => e.ingestions.map((i) => i.substanceName));
  const unique = new Set(names.map((n) => n.toLowerCase()));
  const last14: { key: string; count: number }[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const count = exps.reduce((acc, e) => {
      return (
        acc +
        e.ingestions.filter((ing) => ing.ingestionTime.slice(0, 10) === key)
          .length
      );
    }, 0);
    last14.push({ key, count });
  }
  return {
    entries: names.length,
    unique: unique.size,
    experiences: exps.length,
    last14,
  };
}

export const OPEN_ADD_EVENT = "takologs-open-add";
const OPEN_ON_LOAD = "takologs-open-add-on-load";

export function requestOpenAddModal() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_ADD_EVENT));
}

export function flagOpenAddOnLoad() {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(OPEN_ON_LOAD, "1");
}

export function peekOpenAddOnLoad() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(OPEN_ON_LOAD) === "1";
}

export function consumeOpenAddOnLoad() {
  if (typeof window === "undefined") return false;
  const v = sessionStorage.getItem(OPEN_ON_LOAD);
  sessionStorage.removeItem(OPEN_ON_LOAD);
  return v === "1";
}

export function defaultExperienceTitleFromDate(
  isoOrDate: string | Date,
  locale: string,
) {
  const d = typeof isoOrDate === "string" ? new Date(isoOrDate) : isoOrDate;
  if (Number.isNaN(d.getTime())) return "";
  const tag = locale.startsWith("en") ? "en-GB" : locale;
  const raw = d.toLocaleDateString(tag, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

export function mostUsedNames(exps: Experience[]) {
  const counts = new Map<string, number>();
  for (const e of exps) {
    for (const i of e.ingestions) {
      const k = i.substanceName.toLowerCase();
      counts.set(k, (counts.get(k) ?? 0) + 1);
    }
  }
  return counts;
}

export function experiencesToCsv(exps: Experience[]) {
  const header = [
    "experience_id",
    "title",
    "experience_date",
    "feeling",
    "experience_notes",
    "substance",
    "dose",
    "unit",
    "route",
    "ingestion_time",
    "ingestion_notes",
    "shulgin",
  ];
  const lines = [header.join(",")];
  const esc = (v: string | number | null | undefined) => {
    const s = v == null ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  for (const e of exps) {
    if (e.ingestions.length === 0) {
      lines.push(
        [
          e.id,
          e.title,
          e.experienceDate,
          e.feeling ?? "",
          e.notes,
          "",
          "",
          "",
          "",
          "",
          "",
          e.shulgin ?? "",
        ]
          .map(esc)
          .join(","),
      );
      continue;
    }
    for (const i of e.ingestions) {
      lines.push(
        [
          e.id,
          e.title,
          e.experienceDate,
          e.feeling ?? "",
          e.notes,
          i.substanceName,
          i.dose ?? "",
          i.doseUnit,
          i.route,
          i.ingestionTime,
          i.notes,
          e.shulgin ?? "",
        ]
          .map(esc)
          .join(","),
      );
    }
  }
  return lines.join("\n");
}
