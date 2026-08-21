import substancesJson from "../data/substances.json"; // PW-backed catalogue
import categoriesJson from "../data/categories.json";
import neuroJson from "../data/neurotransmitters.json";
import substanceEnJson from "../data/substance-en.json";
import { normName } from "@/lib/names";

export { normName };

export type CategoryId = keyof typeof categoriesJson;

export type Dose = {
  route: string;
  threshold: number;
  light: number;
  common: number;
  strong: number;
  heavy: number;
  unit: string;
};

export type Substance = {
  slug: string;
  name: string;
  aliases: string[];
  category: CategoryId | string;
  chemicalClass: string;
  psychoactiveClass: string;
  summary: string;
  doses: Dose[];
  duration: {
    onsetMin: [number, number];
    peakMin: [number, number];
    totalMin: [number, number];
    afterMin?: [number, number];
  };
  effects: {
    positive: string[];
    neutral: string[];
    negative: string[];
  };
  neurotransmitters: string[];
  interactions: { dangerous: string[]; caution: string[] };
  harm: { physical: number; dependence: number; social: number };
  riskNotes: string[];
  color: string;
  emoji: string;
};

const DURATION_FIX: Record<string, Substance["duration"]> = {
  mephedrone: { onsetMin: [10, 20], peakMin: [30, 90], totalMin: [90, 240] },
  "3-mmc": { onsetMin: [10, 25], peakMin: [40, 90], totalMin: [120, 240] },
  "n-ethylpentedrone": { onsetMin: [5, 15], peakMin: [15, 40], totalMin: [60, 150] },
  hexen: { onsetMin: [5, 15], peakMin: [15, 40], totalMin: [45, 120] },
  "a-pvp": { onsetMin: [2, 10], peakMin: [10, 30], totalMin: [30, 90] },
  "a-php": { onsetMin: [5, 15], peakMin: [20, 45], totalMin: [60, 180] },
  nicotine: { onsetMin: [0, 2], peakMin: [2, 8], totalMin: [20, 45] },
};

export const substances = (substancesJson as Substance[]).map((s) => {
  const fix = DURATION_FIX[s.slug];
  return fix ? { ...s, duration: fix } : s;
});
export const categories = categoriesJson as Record<
  string,
  { label: string; color: string; tint: string; emoji: string }
>;
export const neurotransmitters = neuroJson as Record<
  string,
  { label: string; color: string; role: string }
>;

export const CATEGORY_ORDER = [
  "psychedelic",
  "empathogen",
  "stimulant",
  "cannabinoid",
  "dissociative",
  "depressant",
  "opioid",
  "deliriant",
  "nootropic",
  "misc",
] as const;

export function getSubstance(slug: string) {
  return substances.find((s) => s.slug === slug);
}

const EN_NAMES = substanceEnJson as Record<string, { name?: string; aliases?: string[] }>;

export function findSubstanceByName(name: string) {
  const e = normName(name);
  if (!e) return undefined;
  return substances.find((s) => {
    const en = EN_NAMES[s.slug];
    return (
      normName(s.name) === e ||
      s.aliases.some((a) => normName(a) === e) ||
      (en?.name && normName(en.name) === e) ||
      (en?.aliases ?? []).some((a) => normName(a) === e)
    );
  });
}

function matchScore(s: Substance, q: string) {
  const e = q.trim().toLowerCase();
  if (!e) return 0;
  const en = EN_NAMES[s.slug];
  const aliases = [
    ...s.aliases.map((a) => a.toLowerCase()),
    ...(en?.aliases ?? []).map((a) => a.toLowerCase()),
  ];
  const name = s.name.toLowerCase();
  const enName = (en?.name ?? "").toLowerCase();
  if (name === e || enName === e) return 0;
  if (name.startsWith(e) || (enName && enName.startsWith(e))) return 1;
  if (aliases.some((a) => a === e)) return 2;
  if (name.includes(e) || (enName && enName.includes(e))) return 3;
  if (aliases.some((a) => a.startsWith(e))) return 4;
  if (aliases.some((a) => a.includes(e))) return 5;
  const blob = [s.chemicalClass, s.psychoactiveClass, categories[s.category]?.label]
    .join(" ")
    .toLowerCase();
  if (blob.includes(e)) return 6;
  return -1;
}

export function searchSubstances(q: string) {
  const e = q.trim().toLowerCase();
  if (!e) return substances;
  return substances
    .map((s) => ({ s, score: matchScore(s, e) }))
    .filter((x) => x.score !== -1)
    .sort((a, b) => a.score - b.score)
    .map((x) => x.s);
}

export function harmTotal(s: Substance) {
  return Math.round((s.harm.physical + s.harm.dependence + s.harm.social) / 3);
}

export function formatMins(t: number) {
  if (t < 60) return `${Math.round(t)} min`;
  const h = Math.floor(t / 60);
  const m = Math.round(t % 60);
  return m === 0 ? `${h} h` : `${h} h ${m}`;
}

export function avgPair(pair: [number, number]) {
  return (pair[0] + pair[1]) / 2;
}

export type Curve = {
  onset: number;
  peakStart: number;
  peakEnd: number;
  total: number;
};

export function durationCurve(s: Substance): Curve {
  const onset = avgPair(s.duration.onsetMin);
  const peakStart = avgPair(s.duration.peakMin);
  const peakEnd = Math.min(
    Math.max(peakStart + 1, avgPair([s.duration.peakMin[1], s.duration.totalMin[0]])),
    avgPair(s.duration.totalMin),
  );
  const total = avgPair(s.duration.totalMin);
  return { onset, peakStart, peakEnd, total };
}

function ease(n: number) {
  return n * n * (3 - 2 * n);
}

export function intensityAt(c: Curve, t: number) {
  if (t <= 0 || t >= c.total) return 0;
  if (t < c.onset) return 0.06 * (t / Math.max(c.onset, 1));
  if (t < c.peakStart) {
    const n = (t - c.onset) / Math.max(c.peakStart - c.onset, 1);
    return 0.06 + 0.94 * ease(n);
  }
  if (t <= c.peakEnd) return 1;
  const a = (t - c.peakEnd) / Math.max(c.total - c.peakEnd, 1);
  return Math.max(0, 1 - ease(a));
}

export function curvePath(c: Curve, w: number, h: number, steps = 48, amp = 1) {
  const padY = 6;
  const a = Math.max(0.12, amp);
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * c.total;
    const x = (i / steps) * w;
    const y = h - padY - intensityAt(c, t) * a * (h - padY * 2);
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

export function offsetCurvePath(
  c: Curve,
  offsetMin: number,
  span: number,
  w: number,
  h: number,
  steps = 60,
  amp = 1,
) {
  const padY = 6;
  const a = Math.max(0.12, amp);
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * c.total;
    const x = ((offsetMin + t) / span) * w;
    const y = h - padY - intensityAt(c, t) * a * (h - padY * 2);
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

export function offsetCurveFill(
  c: Curve,
  offsetMin: number,
  span: number,
  w: number,
  h: number,
  steps = 60,
  amp = 1,
) {
  const d = offsetCurvePath(c, offsetMin, span, w, h, steps, amp);
  const x0 = (offsetMin / span) * w;
  const x1 = ((offsetMin + c.total) / span) * w;
  return `${d} L ${x1.toFixed(1)},${h} L ${x0.toFixed(1)},${h} Z`;
}

export const DOSE_KEYS = [
  "threshold",
  "light",
  "common",
  "strong",
  "heavy",
] as const;
export const DOSE_LABELS: Record<(typeof DOSE_KEYS)[number], string> = {
  threshold: "Seuil",
  light: "Légère",
  common: "Commune",
  strong: "Forte",
  heavy: "Lourde",
};

export type EffectTone = "good" | "neutral" | "bad";

export function buildEffectsIndex() {
  const map = new Map<string, { tone: EffectTone; subs: Set<string> }>();
  for (const s of substances) {
    (
      [
        ["good", s.effects.positive],
        ["neutral", s.effects.neutral],
        ["bad", s.effects.negative],
      ] as const
    ).forEach(([tone, items]) => {
      items.forEach((n) => {
        const k = n.toLowerCase();
        if (!map.has(k)) map.set(k, { tone, subs: new Set() });
        map.get(k)!.subs.add(s.slug);
      });
    });
  }
  return Array.from(map.entries())
    .map(([k, v]) => ({
      effect: k.charAt(0).toUpperCase() + k.slice(1),
      tone: v.tone,
      subs: Array.from(v.subs),
    }))
    .sort((a, b) => b.subs.length - a.subs.length);
}

export function categoryEmoji(id: string) {
  const raw = categories[id]?.emoji ?? "";
  if (/^U[0-9a-fA-F]{4,6}$/.test(raw)) {
    return String.fromCodePoint(parseInt(raw.slice(1), 16));
  }
  return raw || "•";
}

export function categoryColor(id: string) {
  return categories[id]?.color ?? "#a87c45";
}

export function categoryTint(id: string) {
  return categories[id]?.tint ?? "rgba(168,124,69,0.16)";
}
