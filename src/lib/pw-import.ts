import { defaultExperienceTitleFromDate, type Experience, type Ingestion } from "./journal";
import { canonicalRoute } from "./routes";
import { uuid } from "./uuid";

const PW_COLORS: Record<string, string> = {
  red: "#c9493f",
  fire_engine_red: "#d94b3d",
  orange: "#d9893b",
  aureate_gold: "#c9a15a",
  yellow: "#c9b04a",
  bronze: "#b07a45",
  khaki: "#9a8b4a",
  green: "#3d8a5f",
  sea_green: "#3d8a6e",
  mint: "#5aaa7a",
  teal: "#3d8a8a",
  cyan: "#4aa0b5",
  blue: "#4a6fa0",
  royal_blue: "#3d5a9a",
  indigo: "#5a4a9a",
  blue_violet: "#6a4aaa",
  purple: "#7a4a9a",
  magenta: "#9a4a8a",
  grayish_magenta: "#8a6a80",
  pink: "#c96a8a",
  rose_quartz: "#c98a9a",
  brown: "#8a5a3a",
  saddle_brown: "#7a4a28",
  gray: "#7a7a7a",
  grey: "#7a7a7a",
  white: "#cfcfcf",
  black: "#3a3a3a",
  night_azure: "#3d5a8a",
  deep_harbor_blue: "#2f4a6e",
  storm_slate_blue: "#5a6a8a",
};

const SHULGIN: Record<string, string> = {
  minus: "−",
  plusminus: "+/−",
  plus_minus: "+/−",
  plus: "+",
  twoplus: "++",
  threeplus: "+++",
  fourplus: "++++",
  plusfour: "++++",
};

function toEpochMs(v: unknown): number | null {
  if (v == null || v === "") return null;
  if (typeof v === "number" && Number.isFinite(v)) {
    if (v > 1e14) return Math.round(v / 1000);
    if (v > 1e11) return v;
    if (v > 1e9) return Math.round(v * 1000);
    return v;
  }
  if (typeof v === "string") {
    const n = Number(v.trim());
    if (Number.isFinite(n) && n > 1e9) return toEpochMs(n);
    const d = new Date(v);
    if (!Number.isNaN(d.getTime())) return d.getTime();
  }
  if (typeof v === "object") {
    const o = v as Record<string, unknown>;
    if (typeof o.time === "number") return toEpochMs(o.time);
    if (typeof o.seconds === "number") return toEpochMs(o.seconds);
    if (typeof o.millis === "number") return toEpochMs(o.millis);
  }
  return null;
}

function msToIso(v: unknown): string {
  const ms = toEpochMs(v);
  if (ms == null) return "";
  return new Date(ms).toISOString();
}

function mapRoute(raw: unknown): string {
  return canonicalRoute(raw);
}

function mapColor(raw: unknown): string | null {
  if (!raw) return null;
  const k = String(raw).toLowerCase().replace(/\s+/g, "_");
  return PW_COLORS[k] ?? null;
}

function mapShulgin(raw: unknown): string | null {
  if (!raw) return null;
  const k = String(raw).toLowerCase().replace(/[^a-z]/g, "");
  return SHULGIN[k] ?? String(raw);
}

type CustomUnit = {
  id: number;
  name: string;
  unit?: string;
  color?: string;
  doseComponents?: {
    substanceName?: string | null;
    dose?: number | null;
    substanceUnit?: string | null;
  }[];
};

function unitMap(units: CustomUnit[]) {
  const m = new Map<number, CustomUnit>();
  for (const u of units) m.set(u.id, u);
  return m;
}

export function isPwJournalDump(data: unknown): boolean {
  if (!data || typeof data !== "object") return false;
  const o = data as Record<string, unknown>;
  const exps = (o.experiences ?? o.journal ?? o.data) as unknown;
  const list = Array.isArray(exps)
    ? exps
    : Array.isArray(data)
      ? data
      : Array.isArray((o as { experiences?: unknown }).experiences)
        ? (o.experiences as unknown[])
        : null;
  if (!list || list.length === 0) return false;
  if (typeof o.exportSource === "string" || Array.isArray(o.customUnits)) return true;
  const first = list[0] as Record<string, unknown>;
  if (!first || typeof first !== "object") return false;
  if (typeof first.creationDate === "number" || typeof first.sortDate === "number") return true;
  if (Array.isArray(first.ingestions)) {
    const ing = (first.ingestions as Record<string, unknown>[])[0];
    if (ing && ("administrationRoute" in ing || "time" in ing || "customUnitId" in ing)) return true;
  }
  return false;
}

export function pwDumpToExperiences(data: unknown): Experience[] {
  const root = (data ?? {}) as Record<string, unknown>;
  const o = {
    experiences: (Array.isArray(root.experiences)
      ? root.experiences
      : Array.isArray(data)
        ? data
        : Array.isArray((root.journal as { experiences?: unknown[] } | undefined)?.experiences)
          ? (root.journal as { experiences: Record<string, unknown>[] }).experiences
          : []) as Record<string, unknown>[],
    customUnits: (root.customUnits ?? []) as CustomUnit[],
  };
  const units = unitMap(o.customUnits ?? []);
  const out: Experience[] = [];
  for (const raw of o.experiences ?? []) {
    const ingsRaw = Array.isArray(raw.ingestions) ? raw.ingestions : [];
    const id = uuid();
    const date =
      msToIso(raw.sortDate ?? raw.creationDate ?? raw.experienceDate) ||
      msToIso((ingsRaw[0] as { time?: unknown } | undefined)?.time);
    const title =
      String(raw.title ?? "").trim() ||
      (date ? defaultExperienceTitleFromDate(date, "fr-FR") : "Expérience");
    const timed = Array.isArray(raw.timedNotes) ? raw.timedNotes : [];
    const noteParts: string[] = [];
    if (raw.text) noteParts.push(String(raw.text));
    for (const n of timed) {
      const rec = n as { note?: string; time?: number };
      if (!rec.note) continue;
      const t = rec.time ? new Date(rec.time).toLocaleString("fr-FR") : "";
      noteParts.push(t ? `${t} — ${rec.note}` : rec.note);
    }
    const ratings = Array.isArray(raw.ratings) ? raw.ratings : [];
    const shulginLog = ratings
      .map((r) => {
        const rec = r as { option?: string; time?: number };
        const level = mapShulgin(rec.option);
        if (!level) return null;
        return { time: msToIso(rec.time), level };
      })
      .filter(Boolean) as { time: string; level: string }[];
    const shulgin = shulginLog.at(-1)?.level ?? null;
    const ingestions: Ingestion[] = [];
    for (const ing of ingsRaw.slice(0, 250)) {
      const rec = ing as {
        substanceName?: string | null;
        customUnitId?: number | null;
        dose?: number | null;
        units?: string | null;
        administrationRoute?: string;
        time?: number | string | null;
        ingestionTime?: string | null;
        notes?: string;
        color?: string;
      };
      const cu = rec.customUnitId != null ? units.get(rec.customUnitId) : undefined;
      const comp = cu?.doseComponents?.[0];
      let name = (rec.substanceName || "").trim();
      let dose = rec.dose ?? null;
      let unit = rec.units || "mg";
      if (!name && comp?.substanceName) {
        name = comp.substanceName;
        if (dose != null && comp.dose != null) dose = dose * comp.dose;
        unit = comp.substanceUnit || unit;
      }
      if (!name && cu?.name) {
        name = cu.name;
        unit = cu.unit || unit;
      }
      if (!name) name = "Inconnu";
      ingestions.push({
        id: uuid(),
        experienceId: id,
        substanceName: name,
        slug: null,
        route: mapRoute(rec.administrationRoute),
        dose,
        doseUnit: unit,
        color: mapColor(rec.color) ?? mapColor(cu?.color) ?? null,
        ingestionTime:
          msToIso(rec.time ?? rec.ingestionTime ?? raw.sortDate ?? raw.creationDate) || date,
        notes: rec.notes ?? "",
      });
    }
    ingestions.sort(
      (a, b) =>
        new Date(a.ingestionTime).getTime() - new Date(b.ingestionTime).getTime(),
    );
    out.push({
      id,
      title,
      experienceDate: ingestions[0]?.ingestionTime ?? date,
      notes: noteParts.join("\n\n"),
      feeling: shulginToFeeling(shulgin),
      shulgin,
      shulginLog,
      media: [],
      ingestions,
    });
  }
  return out;
}

function shulginToFeeling(s: string | null): number | null {
  if (!s) return null;
  if (s.includes("++++") || s === "+++") return 5;
  if (s === "++") return 4;
  if (s === "+") return 3;
  if (s.includes("/")) return 2;
  return 1;
}

export function normalizeJournalImport(data: unknown): Experience[] {
  if (isPwJournalDump(data)) return pwDumpToExperiences(data);
  if (Array.isArray(data)) return data as Experience[];
  if (data && typeof data === "object" && Array.isArray((data as { experiences?: unknown }).experiences)) {
    const exps = (data as { experiences: unknown[] }).experiences;
    if (exps[0] && typeof (exps[0] as { creationDate?: unknown }).creationDate === "number") {
      return pwDumpToExperiences(data);
    }
    return exps as Experience[];
  }
  return [];
}
