import type { Experience, Ingestion } from "@/lib/journal";
import { classifyDose, type DoseClass } from "@/lib/dose";
import {
  durationCurve,
  findSubstanceByName,
} from "@/lib/substances";
import { canonicalRoute } from "@/lib/routes";

export type TimeSpan = "7d" | "30d" | "90d" | "6m" | "1y" | "all";

export const TIME_SPANS: TimeSpan[] = ["7d", "30d", "90d", "6m", "1y", "all"];

export function spanStart(span: TimeSpan, now = new Date()): Date | null {
  if (span === "all") return null;
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  if (span === "7d") d.setDate(d.getDate() - 6);
  else if (span === "30d") d.setDate(d.getDate() - 29);
  else if (span === "90d") d.setDate(d.getDate() - 89);
  else if (span === "6m") d.setMonth(d.getMonth() - 6);
  else if (span === "1y") d.setFullYear(d.getFullYear() - 1);
  return d;
}

export type FlatIngestion = Ingestion & {
  experienceTitle: string;
};

export function flattenIngestions(exps: Experience[]): FlatIngestion[] {
  return exps.flatMap((e) =>
    e.ingestions.map((i) => ({
      ...i,
      route: canonicalRoute(i.route),
      experienceTitle: e.title,
    })),
  );
}

function inSpan(iso: string, start: Date | null) {
  if (!start) return true;
  return new Date(iso).getTime() >= start.getTime();
}

export type RankRow = {
  name: string;
  slug?: string | null;
  color?: string | null;
  count: number;
  doseTotal: number | null;
  unit: string;
  last: string;
};

export type SeriesPoint = { key: string; label: string; count: number };

export type HeatCell = { date: string; count: number; color?: string | null };

export type ActiveNow = {
  ing: FlatIngestion;
  endsAt: Date;
  progress: number;
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function dayKey(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function monthKey(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
}

function weekKey(d: Date) {
  const t = new Date(d);
  t.setHours(0, 0, 0, 0);
  t.setDate(t.getDate() - ((t.getDay() + 6) % 7));
  return dayKey(t);
}

export function activeIngestions(exps: Experience[], now = new Date()): ActiveNow[] {
  const activeNow: ActiveNow[] = [];
  for (const i of flattenIngestions(exps)) {
    const sub = findSubstanceByName(i.substanceName);
    const totalMin = sub ? durationCurve(sub).total : 240;
    const startAt = new Date(i.ingestionTime).getTime();
    const ends = startAt + totalMin * 60000;
    if (now.getTime() >= startAt && now.getTime() < ends) {
      activeNow.push({
        ing: i,
        endsAt: new Date(ends),
        progress: (now.getTime() - startAt) / (ends - startAt),
      });
    }
  }
  return activeNow;
}

export function computeStats(
  exps: Experience[],
  opts: {
    span: TimeSpan;
    substance?: string | null;
    route?: string | null;
    locale: string;
  },
) {
  const start = spanStart(opts.span);
  const all = flattenIngestions(exps).filter((i) =>
    inSpan(i.ingestionTime, start),
  );
  const subst = opts.substance?.trim().toLowerCase() ?? "";
  const route = opts.route?.trim() ?? "";
  let rows = subst
    ? all.filter((i) => i.substanceName.toLowerCase() === subst)
    : all;
  if (route) rows = rows.filter((i) => i.route === route);

  const names = new Set(rows.map((i) => i.substanceName.toLowerCase()));
  const days = new Set(rows.map((i) => i.ingestionTime.slice(0, 10)));

  const rankMap = new Map<string, RankRow>();
  for (const i of rows) {
    const key = i.substanceName.toLowerCase();
    const cur = rankMap.get(key);
    if (!cur) {
      rankMap.set(key, {
        name: i.substanceName,
        slug: i.slug,
        color: i.color,
        count: 1,
        doseTotal: i.dose,
        unit: i.doseUnit,
        last: i.ingestionTime,
      });
    } else {
      cur.count += 1;
      if (i.dose != null && (cur.unit === i.doseUnit || !cur.doseTotal)) {
        cur.doseTotal = (cur.doseTotal ?? 0) + i.dose;
        cur.unit = i.doseUnit;
      }
      if (i.ingestionTime > cur.last) cur.last = i.ingestionTime;
      if (i.color) cur.color = i.color;
    }
  }
  const ranking = Array.from(rankMap.values()).sort((a, b) => b.count - a.count);

  const now = new Date();
  const group: "day" | "week" | "month" =
    opts.span === "7d" || opts.span === "30d"
      ? "day"
      : opts.span === "90d" || opts.span === "6m"
        ? "week"
        : "month";

  const seriesMap = new Map<string, number>();
  const from = start
    ? new Date(start)
    : rows.length
      ? new Date(
          rows.reduce(
            (min, i) => (i.ingestionTime < min ? i.ingestionTime : min),
            rows[0].ingestionTime,
          ),
        )
      : new Date(now.getFullYear(), now.getMonth(), now.getDate() - 13);
  from.setHours(0, 0, 0, 0);

  if (group === "day") {
    const cursor = new Date(from);
    while (cursor <= now) {
      seriesMap.set(dayKey(cursor), 0);
      cursor.setDate(cursor.getDate() + 1);
    }
  } else if (group === "week") {
    const cursor = new Date(from);
    cursor.setDate(cursor.getDate() - ((cursor.getDay() + 6) % 7));
    while (cursor <= now) {
      seriesMap.set(weekKey(cursor), 0);
      cursor.setDate(cursor.getDate() + 7);
    }
  } else {
    const cursor = new Date(from.getFullYear(), from.getMonth(), 1);
    while (cursor <= now) {
      seriesMap.set(monthKey(cursor), 0);
      cursor.setMonth(cursor.getMonth() + 1);
    }
  }

  for (const i of rows) {
    const d = new Date(i.ingestionTime);
    const k = group === "day" ? dayKey(d) : group === "week" ? weekKey(d) : monthKey(d);
    seriesMap.set(k, (seriesMap.get(k) ?? 0) + 1);
  }

  const series: SeriesPoint[] = Array.from(seriesMap.entries()).map(([key, count]) => {
    let label = key.slice(5);
    if (group === "month") {
      const [y, m] = key.split("-");
      label = new Date(Number(y), Number(m) - 1, 1).toLocaleDateString(opts.locale, {
        month: "short",
        year: "2-digit",
      });
    } else {
      const d = new Date(key + "T00:00:00");
      label = d.toLocaleDateString(opts.locale, { day: "numeric", month: "short" });
    }
    return { key, label, count };
  });

  const heatStart = new Date(now);
  heatStart.setDate(heatStart.getDate() - 119);
  heatStart.setHours(0, 0, 0, 0);
  const heatCounts = new Map<string, number>();
  const heatVotes = new Map<string, Map<string, number>>();
  for (const i of all) {
    const k = dayKey(new Date(i.ingestionTime));
    heatCounts.set(k, (heatCounts.get(k) ?? 0) + 1);
    const col = i.color || findSubstanceByName(i.substanceName)?.color || "#b07a45";
    const votes = heatVotes.get(k) ?? new Map<string, number>();
    votes.set(col, (votes.get(col) ?? 0) + 1);
    heatVotes.set(k, votes);
  }
  const topColor = (k: string) => {
    const votes = heatVotes.get(k);
    if (!votes) return null;
    return [...votes.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
  };
  const heatmap: HeatCell[] = [];
  const cursor = new Date(heatStart);
  while (cursor <= now) {
    const k = dayKey(cursor);
    heatmap.push({
      date: k,
      count: heatCounts.get(k) ?? 0,
      color: topColor(k),
    });
    cursor.setDate(cursor.getDate() + 1);
  }

  const weekday = Array.from({ length: 7 }, (_, i) => ({ day: i, count: 0 }));
  const hour = Array.from({ length: 24 }, (_, i) => ({ hour: i, count: 0 }));
  for (const i of rows) {
    const d = new Date(i.ingestionTime);
    weekday[(d.getDay() + 6) % 7].count += 1;
    hour[d.getHours()].count += 1;
  }

  const routeMap = new Map<string, number>();
  for (const i of rows) {
    routeMap.set(i.route, (routeMap.get(i.route) ?? 0) + 1);
  }
  const routes = Array.from(routeMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  const classMap = new Map<DoseClass, number>();
  for (const i of rows) {
    const sub = findSubstanceByName(i.substanceName);
    const cls = classifyDose(sub, i.dose, i.doseUnit, i.route);
    if (cls) classMap.set(cls, (classMap.get(cls) ?? 0) + 1);
  }
  const doseClasses = (["threshold", "light", "common", "strong", "heavy"] as DoseClass[]).map(
    (id) => ({ id, count: classMap.get(id) ?? 0 }),
  );

  const lastAt = rows.length
    ? rows.reduce(
        (max, i) => (i.ingestionTime > max ? i.ingestionTime : max),
        rows[0].ingestionTime,
      )
    : null;
  const daysSinceLast = lastAt
    ? Math.floor((now.getTime() - new Date(lastAt).getTime()) / 86400000)
    : null;

  const usedNames = Array.from(
    new Set(flattenIngestions(exps).map((i) => i.substanceName)),
  ).sort((a, b) => a.localeCompare(b));

  const usedRoutes = Array.from(
    new Set(flattenIngestions(exps).map((i) => i.route)),
  ).sort((a, b) => a.localeCompare(b, "fr"));

  return {
    rows,
    ingestions: rows.length,
    unique: names.size,
    daysActive: days.size,
    avgPerDay: days.size ? rows.length / days.size : 0,
    ranking,
    series,
    heatmap,
    weekday,
    hour,
    routes,
    usedRoutes,
    doseClasses,
    daysSinceLast,
    lastAt,
    activeNow: activeIngestions(exps, now),
    usedNames,
    maxHeat: Math.max(1, ...heatmap.map((c) => c.count)),
  };
}
