import { useMemo, useState, type MouseEvent, type TouchEvent } from "react";
import { Clock } from "lucide-react";
import type { Experience, Ingestion } from "@/lib/journal";
import { useI18n } from "@/lib/i18n";
import { usePrefs } from "@/lib/prefs";
import {
  durationCurve,
  findSubstanceByName,
} from "@/lib/substances";

type Row = {
  ing: Ingestion;
  day: string;
  startMin: number;
  durMin: number;
  color: string;
  title: string;
};

function dayKey(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function minutesOfDay(iso: string) {
  const d = new Date(iso);
  return d.getHours() * 60 + d.getMinutes();
}

export function TimelinePanel({ experiences }: { experiences: Experience[] }) {
  const { t, dateTag } = useI18n();
  const { resolveEmoji, resolveColor, resolveName } = usePrefs();
  const [dayFilter, setDayFilter] = useState<string>("");

  const rows = useMemo<Row[]>(() => {
    const out: Row[] = [];
    for (const exp of experiences) {
      for (const ing of exp.ingestions) {
        const sub = findSubstanceByName(ing.substanceName);
        const dur = sub ? durationCurve(sub).total : 240;
        out.push({
          ing,
          day: dayKey(ing.ingestionTime),
          startMin: minutesOfDay(ing.ingestionTime),
          durMin: dur,
          color: resolveColor(
            sub?.slug ?? ing.slug,
            ing.substanceName,
            sub?.color ?? ing.color ?? "#b07a45",
          ),
          title: exp.title,
        });
      }
    }
    return out.sort(
      (a, b) =>
        b.day.localeCompare(a.day) || a.startMin - b.startMin,
    );
  }, [experiences, resolveColor]);

  const days = useMemo(() => {
    const map = new Map<string, Row[]>();
    for (const r of rows) {
      if (dayFilter && r.day !== dayFilter) continue;
      const list = map.get(r.day) ?? [];
      list.push(r);
      map.set(r.day, list);
    }
    return Array.from(map.entries());
  }, [rows, dayFilter]);

  const uniqueDays = useMemo(
    () => Array.from(new Set(rows.map((r) => r.day))),
    [rows],
  );

  if (rows.length === 0) {
    return (
      <div className="glass rounded-2xl p-10 text-center text-sm text-sand-500">
        {t("timeline.empty")}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p className="text-sm text-sand-500 dark:text-sand-400 flex items-center gap-1.5">
          <Clock className="h-4 w-4" /> {t("timeline.subtitle")}
        </p>
        <select
          value={dayFilter}
          onChange={(e) => setDayFilter(e.target.value)}
          className="rounded-full glass px-3 py-2 text-sm text-sand-900 dark:text-sand-50 outline-none"
        >
          <option value="">{t("timeline.allDays")}</option>
          {uniqueDays.map((d) => (
            <option key={d} value={d}>
              {new Date(d + "T00:00:00").toLocaleDateString(dateTag, {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
            </option>
          ))}
        </select>
      </div>

      {days.map(([day, list]) => (
        <DayTrack
          key={day}
          day={day}
          rows={list}
          dateTag={dateTag}
          emojiOf={(ing) => {
            const known = findSubstanceByName(ing.substanceName);
            return resolveEmoji(
              ing.slug ?? known?.slug,
              ing.substanceName,
              known?.emoji ?? "•",
            );
          }}
          labelOf={(ing) => resolveName(ing.slug, ing.substanceName)}
        />
      ))}
    </div>
  );
}

function DayTrack({
  day,
  rows,
  dateTag,
  emojiOf,
  labelOf,
}: {
  day: string;
  rows: Row[];
  dateTag: string;
  emojiOf: (ing: Ingestion) => string;
  labelOf: (ing: Ingestion) => string;
}) {
  const { t } = useI18n();
  const label = new Date(day + "T00:00:00").toLocaleDateString(dateTag, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const hours = [0, 6, 12, 18, 24];
  const [scrub, setScrub] = useState<{ t: number; left: number; top: number } | null>(null);
  const pick = (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const cx =
      "touches" in e && e.touches[0]
        ? e.touches[0].clientX
        : (e as MouseEvent).clientX;
    setScrub({
      t: Math.min(1, Math.max(0, (cx - r.left) / r.width)),
      left: cx,
      top: Math.max(12, r.top - 8),
    });
  };
  const min = scrub == null ? null : Math.round(scrub.t * 1440);
  const clock =
    min == null
      ? null
      : `${String(Math.floor(min / 60) % 24).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`;
  const atMin = min == null ? [] : rows.filter((r) => min >= r.startMin && min <= r.startMin + r.durMin);
  const now = new Date();
  const todayKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const isToday = day === todayKey;
  const nowPct = isToday
    ? ((now.getHours() * 60 + now.getMinutes()) / 1440) * 100
    : null;
  const target =
    min == null
      ? null
      : new Date(now.getFullYear(), now.getMonth(), now.getDate(), Math.floor(min / 60), min % 60);
  const deltaMs = target ? target.getTime() - Date.now() : 0;
  const fr = dateTag.toLowerCase().startsWith("fr");
  const delta =
    min == null
      ? ""
      : (() => {
          const m = Math.round(Math.abs(deltaMs) / 60000);
          const lab = m < 60 ? `${m} min` : `${Math.floor(m / 60)} h`;
          if (deltaMs >= 0) return fr ? `dans ${lab}` : `in ${lab}`;
          return fr ? `il y a ${lab}` : `${lab} ago`;
        })();

  const tip =
    clock && scrub ? (
          <div
            className="rounded-2xl glass-strong glass-modal px-3 py-2 text-[11px] font-heading font-bold pointer-events-none min-w-[8rem] max-w-[16rem] shadow-xl"
            style={{
              position: "absolute",
              left: `${scrub.t * 100}%`,
              top: 0,
              transform: "translate(-50%, -100%)",
              zIndex: 20,
            }}
          >
            <p>
              {clock} · {delta}
            </p>
            {atMin.length ? (
              <ul className="mt-1.5 space-y-1 font-sans font-semibold">
                {atMin.slice(0, 5).map((r) => (
                  <li
                    key={r.ing.id}
                    className="flex items-center gap-1.5 truncate"
                    style={{ color: r.color }}
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full shrink-0 ring-1 ring-black/10"
                      style={{ background: r.color }}
                    />
                    {emojiOf(r.ing)} {labelOf(r.ing)}
                    {r.ing.dose != null ? ` ${r.ing.dose}${r.ing.doseUnit}` : ""}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
    ) : null;

  return (
    <div className="glass rounded-2xl p-4">
      <p className="font-heading font-bold text-sand-900 dark:text-sand-50 capitalize mb-3">
        {label}
      </p>
      <div
        className="relative cursor-crosshair"
        onMouseMove={pick}
        onClick={pick}
        onTouchStart={pick}
        onTouchMove={pick}
        onMouseLeave={() => setScrub(null)}
      >
        <div className="flex justify-between text-[10px] font-semibold text-sand-400 mb-1">
          {hours.map((h) => (
            <span key={h}>{h}h</span>
          ))}
        </div>
        <div className="relative space-y-1.5">
          <div className="absolute inset-0 pointer-events-none flex justify-between">
            {hours.map((h) => (
              <div
                key={h}
                className="w-px h-full bg-sand-300/50 dark:bg-sand-700/40"
              />
            ))}
          </div>
          {nowPct != null ? (
            <div
              className="absolute top-0 bottom-0 w-px bg-clay-500 z-[1] pointer-events-none"
              style={{ left: `${nowPct}%` }}
            />
          ) : null}
          {scrub ? (
            <div
              className="absolute top-0 bottom-0 w-px bg-sand-800/50 dark:bg-sand-100/50 z-[1] pointer-events-none"
              style={{ left: `${scrub.t * 100}%` }}
            />
          ) : null}
          {rows.map((r) => {
            const left = (r.startMin / 1440) * 100;
            const width = Math.max(1.6, (r.durMin / 1440) * 100);
            const clipped = Math.min(width, 100 - left);
            const start = new Date(r.ing.ingestionTime).toLocaleTimeString(dateTag, {
              hour: "2-digit",
              minute: "2-digit",
            });
            const endMin = Math.min(1440, r.startMin + r.durMin);
            const endH = `${String(Math.floor(endMin / 60) % 24).padStart(2, "0")}:${String(endMin % 60).padStart(2, "0")}`;
            const hot = min != null && min >= r.startMin && min <= r.startMin + r.durMin;
            return (
              <div key={r.ing.id} className="relative h-9">
                <div
                  className="absolute top-0.5 h-8 rounded-full px-2 flex items-center gap-1.5 text-[11px] font-semibold text-white shadow-sm overflow-hidden"
                  style={{
                    left: `${left}%`,
                    width: `${clipped}%`,
                    background: r.color,
                    outline: hot ? "2px solid white" : undefined,
                    opacity: scrub && !hot ? 0.45 : 1,
                  }}
                  title={`${labelOf(r.ing)} · ${start} → ${endH}`}
                >
                  <span>{emojiOf(r.ing)}</span>
                  <span className="truncate">
                    {labelOf(r.ing)}
                    {r.ing.dose != null ? ` ${r.ing.dose}${r.ing.doseUnit}` : ""}
                    <span className="opacity-80"> · {start}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {tip}
        <p className="mt-2 text-[11px] text-sand-400">
          {t("timeline.barsHint")}
        </p>
      </div>
    </div>
  );
}
