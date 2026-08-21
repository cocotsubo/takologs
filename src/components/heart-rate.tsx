import { HeartPulse, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import {
  fromLocalInput,
  heartTone,
  latestHeartRate,
  localDateTimeInput,
  type HeartRatePoint,
} from "@/lib/journal";
import { warnHeartRate } from "@/lib/notify";

const TONE: Record<ReturnType<typeof heartTone>, string> = {
  ok: "text-clay-500",
  warn: "text-amber-600 dark:text-amber-400",
  high: "text-red-500",
  low: "text-sky-500",
};

export function HeartRateBadge({
  points,
  className = "",
}: {
  points?: HeartRatePoint[] | null;
  className?: string;
}) {
  const { t } = useI18n();
  const latest = latestHeartRate(points);
  if (!latest) return null;
  const tone = heartTone(latest.bpm);
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-heading font-bold ${TONE[tone]} ${className}`}
      title={t("heart.label")}
    >
      <HeartPulse className="h-3.5 w-3.5" />
      {t("heart.latest", { n: latest.bpm })}
    </span>
  );
}

export function HeartRatePanel({
  points,
  onChange,
}: {
  points: HeartRatePoint[];
  onChange: (next: HeartRatePoint[]) => void;
}) {
  const { t, dateTag } = useI18n();
  const [bpm, setBpm] = useState("");
  const [time, setTime] = useState(localDateTimeInput);
  const latest = latestHeartRate(points);

  const add = () => {
    const n = Math.round(Number(bpm.replace(",", ".")));
    if (!Number.isFinite(n) || n < 20 || n > 250) return;
    const next = [
      ...points,
      { time: fromLocalInput(time), bpm: n },
    ].sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
    onChange(next);
    warnHeartRate(n, {
      high: t("heart.high", { n }),
      highBody: t("heart.highBody"),
      low: t("heart.low", { n }),
      lowBody: t("heart.lowBody"),
    });
    setBpm("");
    setTime(localDateTimeInput());
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <p className="text-xs font-semibold text-sand-600 dark:text-sand-300 inline-flex items-center gap-1.5">
          <HeartPulse className="h-3.5 w-3.5 text-rose-500" />
          {t("heart.label")}
        </p>
        {latest ? (
          <span className={`text-xs font-heading font-bold ${TONE[heartTone(latest.bpm)]}`}>
            {t("heart.latest", { n: latest.bpm })}
          </span>
        ) : null}
      </div>
      <div className="flex flex-wrap items-end gap-2">
        <label className="text-[11px] font-semibold text-sand-500">
          {t("heart.bpm")}
          <input
            type="number"
            inputMode="numeric"
            min={20}
            max={250}
            value={bpm}
            onChange={(e) => setBpm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                add();
              }
            }}
            placeholder={t("heart.ph")}
            className="mt-1 block w-20 bg-transparent rounded-xl glass px-3 py-2 text-sm font-heading font-bold text-sand-900 dark:text-sand-50 outline-none focus:ring-2 focus:ring-clay-500/40"
          />
        </label>
        <label className="text-[11px] font-semibold text-sand-500">
          {t("heart.time")}
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-1 block bg-transparent rounded-xl glass px-3 py-2 text-sm text-sand-900 dark:text-sand-50 outline-none focus:ring-2 focus:ring-clay-500/40"
          />
        </label>
        <button
          type="button"
          onClick={add}
          disabled={!bpm}
          className="inline-flex items-center gap-1.5 rounded-full bg-clay-500 text-white px-3 py-2 text-sm font-semibold hover:scale-105 transition-transform disabled:opacity-50"
        >
          <Plus className="h-3.5 w-3.5" /> {t("heart.add")}
        </button>
      </div>
      <p className="mt-1.5 text-[11px] text-sand-400">{t("heart.hint")}</p>
      {points.length === 0 ? (
        <p className="mt-2 text-xs text-sand-400">{t("heart.empty")}</p>
      ) : (
        <ul className="mt-2 space-y-1">
          {[...points]
            .slice()
            .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
            .map((p, i) => {
              const tone = heartTone(p.bpm);
              const when = new Date(p.time);
              return (
                <li
                  key={`${p.time}-${i}`}
                  className="flex items-center justify-between gap-2 rounded-xl glass px-3 py-1.5"
                >
                  <span className="text-xs text-sand-600 dark:text-sand-300">
                    {when.toLocaleTimeString(dateTag, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    <span className="opacity-50 ml-1.5">
                      {when.toLocaleDateString(dateTag, {
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                  </span>
                  <span className={`text-sm font-heading font-bold ${TONE[tone]}`}>
                    {p.bpm} {t("heart.bpm")}
                  </span>
                  <button
                    type="button"
                    onClick={() => onChange(points.filter((x) => x !== p))}
                    className="rounded-full p-1 text-sand-400 hover:text-red-500"
                    aria-label={t("common.delete")}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}

export function heartPointsOnSpan(
  points: HeartRatePoint[] | undefined,
  startMs: number,
  spanMin: number,
) {
  if (!points?.length) return [];
  return points
    .map((p) => {
      const min = (new Date(p.time).getTime() - startMs) / 60000;
      return { ...p, min };
    })
    .filter((p) => p.min >= -15 && p.min <= spanMin + 20);
}

export function bpmY(bpm: number, h: number) {
  const lo = 40;
  const hi = 180;
  const t = (Math.min(hi, Math.max(lo, bpm)) - lo) / (hi - lo);
  return h - 8 - t * (h - 16);
}
