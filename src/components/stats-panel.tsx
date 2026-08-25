import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Clock, Filter, Flame } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { usePrefs } from "@/lib/prefs";
import { computeStats, TIME_SPANS, type TimeSpan } from "@/lib/stats";
import { DOSE_CLASS_COLOR } from "@/lib/dose";
import type { Experience } from "@/lib/journal";
import { findSubstanceByName } from "@/lib/substances";

export function StatsPanel({ experiences }: { experiences: Experience[] }) {
  const { t, dateTag, locale } = useI18n();
  const { resolveEmoji, resolveColor, resolveName } = usePrefs();
  const [span, setSpan] = useState<TimeSpan>("30d");
  const [substance, setSubstance] = useState<string>("");
  const [route, setRoute] = useState<string>("");
  const [q, setQ] = useState("");

  const stats = useMemo(
    () =>
      computeStats(experiences, {
        span,
        substance: substance || null,
        route: route || null,
        locale: dateTag,
      }),
    [experiences, span, substance, route, dateTag],
  );

  const filteredNames = useMemo(() => {
    const e = q.trim().toLowerCase();
    return stats.usedNames.filter((n) => !e || n.toLowerCase().includes(e));
  }, [stats.usedNames, q]);

  const maxRank = Math.max(1, ...stats.ranking.map((r) => r.count));
  const maxWeek = Math.max(1, ...stats.weekday.map((d) => d.count));
  const maxHour = Math.max(1, ...stats.hour.map((d) => d.count));
  const maxClass = Math.max(1, ...stats.doseClasses.map((d) => d.count));
  const barFill = "hsl(var(--accent-h) 42% 48%)";
  const weekdayLabels =
    locale === "fr"
      ? ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
      : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const kpis = [
    [t("stats.ingestions"), stats.ingestions],
    [t("stats.substances"), stats.unique],
    [t("stats.daysActive"), stats.daysActive],
    [t("stats.avgPerDay"), stats.avgPerDay ? stats.avgPerDay.toFixed(1) : "0"],
    [
      t("stats.daysSince"),
      stats.daysSinceLast == null
        ? "—"
        : stats.daysSinceLast === 0
          ? t("stats.today")
          : t("stats.lastAgo", { n: stats.daysSinceLast }),
    ],
  ] as const;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-1.5">
        {TIME_SPANS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSpan(s)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
              span === s
                ? "bg-clay-500 text-white shadow-lg shadow-clay-500/25"
                : "glass text-sand-700 dark:text-sand-200"
            }`}
          >
            {t(
              `stats.span${s === "7d" ? "7" : s === "30d" ? "30" : s === "90d" ? "90" : s === "6m" ? "6m" : s === "1y" ? "1y" : "All"}`,
            )}
          </button>
        ))}
      </div>

      <div className="glass rounded-2xl p-3">
        <label className="flex items-center gap-2 text-xs font-semibold text-sand-600 dark:text-sand-300">
          <Filter className="h-3.5 w-3.5" />
          {t("stats.filterSubstance")}
        </label>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("stats.allSubstances")}
          className="mt-2 w-full rounded-xl glass px-3 py-2.5 text-base text-sand-900 dark:text-sand-50 outline-none"
        />
        <div className="mt-2 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
          <button
            type="button"
            onClick={() => setSubstance("")}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
              !substance ? "bg-clay-500 text-white" : "glass text-sand-600 dark:text-sand-300"
            }`}
          >
            {t("common.all")}
          </button>
          {filteredNames.map((n) => {
            const known = findSubstanceByName(n);
            const emoji = resolveEmoji(known?.slug, n, known?.emoji ?? "•");
            return (
              <button
                key={n}
                type="button"
                onClick={() => setSubstance(substance === n ? "" : n)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  substance === n
                    ? "bg-clay-500 text-white"
                    : "glass text-sand-700 dark:text-sand-200"
                }`}
              >
                {emoji} {resolveName(known?.slug, n)}
              </button>
            );
          })}
        </div>
        {stats.usedRoutes.length > 1 ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setRoute("")}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                !route ? "bg-clay-500 text-white" : "glass text-sand-600 dark:text-sand-300"
              }`}
            >
              {t("stats.allRoutes")}
            </button>
            {stats.usedRoutes.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRoute(route === r ? "" : r)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  route === r
                    ? "bg-clay-500 text-white"
                    : "glass text-sand-700 dark:text-sand-200"
                }`}
              >
                {t(`route.${r}`) === `route.${r}` ? r : t(`route.${r}`)}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {kpis.map(([label, v]) => (
          <div key={label} className="glass rounded-2xl p-4 text-center">
            <p className="font-heading text-xl sm:text-2xl font-bold text-clay-500">{v}</p>
            <p className="text-xs text-sand-500 dark:text-sand-400 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {stats.activeNow.length > 0 ? (
        <div className="glass rounded-2xl p-4">
          <p className="text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3 flex items-center gap-1.5">
            <Flame className="h-3.5 w-3.5 text-clay-500" /> {t("stats.activeNow")}
          </p>
          <div className="space-y-2">
            {stats.activeNow.map((a) => {
              const known = findSubstanceByName(a.ing.substanceName);
              const emoji = resolveEmoji(
                a.ing.slug,
                a.ing.substanceName,
                known?.emoji ?? "•",
              );
              return (
                <div key={a.ing.id} className="rounded-xl glass p-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-sand-900 dark:text-sand-50">
                      {emoji} {resolveName(a.ing.slug, a.ing.substanceName)}
                      {a.ing.dose != null ? ` · ${a.ing.dose}${a.ing.doseUnit}` : ""}
                    </p>
                    <p className="text-xs text-sand-500">
                      {t("stats.until", {
                        time: a.endsAt.toLocaleTimeString(dateTag, {
                          hour: "2-digit",
                          minute: "2-digit",
                        }),
                      })}
                    </p>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-sand-200/60 dark:bg-sand-800/60 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-clay-500"
                      style={{ width: `${Math.min(100, a.progress * 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      {stats.ingestions === 0 ? (
        <div className="glass rounded-2xl p-10 text-center text-sm text-sand-500">
          {t("stats.empty")}
        </div>
      ) : (
        <>
          {stats.doseClasses.some((d) => d.count > 0) ? (
            <div className="glass rounded-2xl p-4">
              <p className="text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3">
                {t("stats.doseClass")}
              </p>
              <div className="flex items-end gap-2 h-24">
                {stats.doseClasses.map((d) => (
                  <div key={d.id} className="flex-1 flex flex-col items-center justify-end h-full">
                    <span className="text-[10px] font-bold text-sand-500 mb-1">{d.count}</span>
                    <div
                      className="w-full rounded-t"
                      style={{
                        height: `${Math.max(d.count ? 10 : 4, (d.count / maxClass) * 100)}%`,
                        background: DOSE_CLASS_COLOR[d.id],
                        opacity: d.count ? 1 : 0.25,
                      }}
                    />
                    <span className="text-[10px] text-sand-400 mt-1">{t(`dose.${d.id}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="glass rounded-2xl p-4">
            <p className="text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3">
              {t("stats.overTime")}
            </p>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.series} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
                  <XAxis
                    dataKey="label"
                    tick={{ fontSize: 10, fill: "currentColor" }}
                    interval="preserveStartEnd"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis allowDecimals={false} hide />
                  <Tooltip
                    cursor={{ fill: "hsl(var(--accent-h) 42% 48% / 0.12)" }}
                    contentStyle={{
                      background: "var(--glass-bg-strong)",
                      border: "1px solid var(--glass-border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="count" fill={barFill} radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass rounded-2xl p-4">
            <p className="text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3">
              {t("stats.ranking")}
            </p>
            <div className="space-y-2">
              {stats.ranking.slice(0, 12).map((r) => {
                const known = findSubstanceByName(r.name);
                const emoji = resolveEmoji(r.slug, r.name, known?.emoji ?? "•");
                const days = Math.floor(
                  (Date.now() - new Date(r.last).getTime()) / 86400000,
                );
                return (
                  <div key={r.name}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="font-semibold text-sand-900 dark:text-sand-50 truncate">
                        {emoji} {resolveName(r.slug, r.name)}
                      </span>
                      <span className="text-xs text-sand-500 shrink-0 ml-2">
                        {t("stats.uses", { n: r.count })}
                        {r.doseTotal != null ? ` · ${r.doseTotal}${r.unit}` : ""}
                        {" · "}
                        {days === 0 ? t("stats.today") : t("stats.lastAgo", { n: days })}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-sand-200/50 dark:bg-sand-800/50 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(r.count / maxRank) * 100}%`,
                          background: resolveColor(r.slug, r.name, r.color ?? barFill),
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass rounded-2xl p-4">
            <p className="text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3">
              {t("stats.heatmap")}
            </p>
            <Heatmap cells={stats.heatmap} max={stats.maxHeat} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-4">
              <p className="text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3">
                {t("stats.weekday")}
              </p>
              <div className="flex items-end gap-1.5 h-24">
                {stats.weekday.map((d, i) => (
                  <div key={d.day} className="flex-1 flex flex-col items-center justify-end h-full">
                    <div
                      className="w-full rounded-t bg-clay-500"
                      style={{ height: `${Math.max(6, (d.count / maxWeek) * 100)}%` }}
                    />
                    <span className="text-[10px] text-sand-400 mt-1">{weekdayLabels[i]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3 flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {t("stats.hour")}
              </p>
              <div className="flex items-end gap-px h-24">
                {stats.hour.map((d) => (
                  <div
                    key={d.hour}
                    className="flex-1 rounded-t bg-clay-500"
                    style={{
                      height: `${Math.max(d.count ? 8 : 3, (d.count / maxHour) * 100)}%`,
                      opacity: d.count ? 1 : 0.25,
                    }}
                    title={`${d.hour}h · ${d.count}`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-sand-400 mt-1">
                <span>0h</span>
                <span>12h</span>
                <span>23h</span>
              </div>
            </div>
          </div>

          {stats.routes.length > 0 ? (
            <div className="glass rounded-2xl p-4">
              <p className="text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3">
                {t("stats.routes")}
              </p>
              <div className="flex flex-wrap gap-2">
                {stats.routes.map((r) => (
                  <span
                    key={r.name}
                    className="rounded-full glass px-3 py-1.5 text-xs font-semibold text-sand-700 dark:text-sand-200"
                  >
                    {t(`route.${r.name}`) === `route.${r.name}`
                      ? r.name
                      : t(`route.${r.name}`)}{" "}
                    · {r.count}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

function Heatmap({
  cells,
  max,
}: {
  cells: { date: string; count: number; color?: string | null }[];
  max: number;
}) {
  const { dateTag, locale } = useI18n();
  const labels =
    locale === "fr"
      ? ["L", "M", "M", "J", "V", "S", "D"]
      : ["M", "T", "W", "T", "F", "S", "S"];
  const first = cells[0] ? new Date(cells[0].date + "T00:00:00") : new Date();
  const offset = (first.getDay() + 6) % 7;
  const padded = [...Array.from({ length: offset }, () => null), ...cells];
  const weeks = Math.ceil(padded.length / 7);
  const months: { label: string; col: number }[] = [];
  padded.forEach((c, i) => {
    if (!c) return;
    const d = new Date(c.date + "T00:00:00");
    if (d.getDate() <= 7 && i % 7 === 0) {
      months.push({
        label: d.toLocaleDateString(dateTag, { month: "short" }),
        col: Math.floor(i / 7),
      });
    }
  });
  const hexAlpha = (hex: string, a: number) => {
    const h = hex.replace("#", "");
    if (h.length !== 6) return hex;
    const n = Math.round(Math.min(1, Math.max(0.2, a)) * 255)
      .toString(16)
      .padStart(2, "0");
    return `#${h}${n}`;
  };
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-1 text-[10px] text-sand-400 mb-1 pl-5">
        {Array.from({ length: weeks }, (_, w) => {
          const m = months.find((x) => x.col === w);
          return (
            <span key={w} className="flex-1 min-w-[10px] truncate">
              {m?.label ?? ""}
            </span>
          );
        })}
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-1 text-[9px] text-sand-400 pt-0.5">
          {labels.map((l, i) => (
            <span key={`${l}-${i}`} className="h-[10px] leading-[10px]">
              {i % 2 === 0 ? l : ""}
            </span>
          ))}
        </div>
        <div
          className="grid gap-1 flex-1"
          style={{
            gridTemplateRows: "repeat(7, minmax(0, 1fr))",
            gridAutoFlow: "column",
            gridAutoColumns: "minmax(10px, 1fr)",
          }}
        >
          {padded.map((c, i) => (
            <div
              key={c?.date ?? `e-${i}`}
              title={
                c
                  ? `${new Date(c.date + "T00:00:00").toLocaleDateString(dateTag, {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })} · ${c.count}`
                  : undefined
              }
              className="aspect-square rounded-[3px]"
              style={{
                background: !c
                  ? "transparent"
                  : c.count === 0
                    ? "hsl(var(--accent-h) 20% 50% / 0.1)"
                    : c.color
                      ? hexAlpha(c.color, 0.28 + (c.count / max) * 0.72)
                      : `hsl(var(--accent-h) 42% 48% / ${0.25 + (c.count / max) * 0.75})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
