import { bpmY, heartPointsOnSpan } from "@/components/heart-rate";
import { CurveZoomButton } from "@/components/curve-zoom";
import { doseAmplitude, fitAmplitudes } from "@/lib/dose";
import { SHULGIN_SCALE, type HeartRatePoint, type Ingestion, type ShulginPoint } from "@/lib/journal";
import { usePrefs } from "@/lib/prefs";
import {
  durationCurve,
  findSubstanceByName,
  intensityAt,
  offsetCurveFill,
  offsetCurvePath,
  type Curve,
} from "@/lib/substances";
import { useEffect, useMemo, useState, type MouseEvent, type TouchEvent } from "react";

const FALLBACK: Curve = {
  onset: 30,
  peakStart: 90,
  peakEnd: 150,
  total: 240,
};

const SHULGIN_Y: Record<string, number> = {
  "−": 0.88,
  "-": 0.88,
  "+/−": 0.72,
  "+/-": 0.72,
  "+": 0.58,
  "++": 0.42,
  "+++": 0.26,
  "++++": 0.12,
};

function yOf(level: string, h: number) {
  return (SHULGIN_Y[level] ?? 0.5) * h;
}

function fmtDelta(ms: number, fr: boolean) {
  const sign = ms >= 0 ? 1 : -1;
  const abs = Math.abs(ms);
  const m = Math.round(abs / 60000);
  const label =
    m < 1
      ? fr
        ? "maintenant"
        : "now"
      : m < 60
        ? `${m} min`
        : `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, "0")}`;
  if (m < 1) return label;
  if (sign > 0) return fr ? `dans ${label}` : `in ${label}`;
  return fr ? `il y a ${label}` : `${label} ago`;
}

function clientXY(e: MouseEvent<SVGSVGElement> | TouchEvent<SVGSVGElement>) {
  const src =
    "touches" in e && e.touches[0]
      ? e.touches[0]
      : "changedTouches" in e && (e as TouchEvent).changedTouches[0]
        ? (e as TouchEvent).changedTouches[0]
        : (e as MouseEvent);
  return { cx: src.clientX, cy: src.clientY };
}

export function ExperienceCurves({
  ingestions,
  dateTag,
  compact = false,
  showNow = false,
  shulgin,
  shulginLog,
  heartRate,
}: {
  ingestions: Ingestion[];
  dateTag: string;
  compact?: boolean;
  showNow?: boolean;
  shulgin?: string | null;
  shulginLog?: ShulginPoint[];
  heartRate?: HeartRatePoint[] | null;
}) {
  const [now, setNow] = useState(() => Date.now());
  const [scrub, setScrub] = useState<{
    x: number;
    y: number;
    min: number;
    left: number;
    top: number;
  } | null>(null);
  const fr = dateTag.toLowerCase().startsWith("fr");
  const { resolveColor, resolveName, resolveEmoji } = usePrefs();

  useEffect(() => {
    if (!showNow) return;
    const id = window.setInterval(() => setNow(Date.now()), 15_000);
    return () => window.clearInterval(id);
  }, [showNow]);

  const { items, span, startMs, h } = useMemo(() => {
    const h = compact ? 110 : 200;
    if (ingestions.length === 0) {
      return {
        items: [] as { ing: Ingestion; p: Curve; offsetMin: number; color: string; amp: number }[],
        span: 240,
        startMs: Date.now(),
        h,
      };
    }
    const times = ingestions.map((i) => new Date(i.ingestionTime).getTime());
    const startMs = Math.min(...times);
    const raw = ingestions.map((ing) => {
      const sub = findSubstanceByName(ing.substanceName);
      const p = sub ? durationCurve(sub) : FALLBACK;
      const offsetMin = Math.max(
        0,
        (new Date(ing.ingestionTime).getTime() - startMs) / 60000,
      );
      return {
        ing,
        p,
        offsetMin,
        rawAmp: doseAmplitude(sub, ing.dose, ing.doseUnit, ing.route),
        color: resolveColor(ing.slug, ing.substanceName, ing.color ?? sub?.color ?? "#b07a45"),
      };
    });
    const fitted = fitAmplitudes(raw.map((c) => c.rawAmp), 0.88);
    const items = raw.map((c, i) => ({ ...c, amp: fitted[i] }));
    const span = Math.max(...items.map((c) => c.offsetMin + c.p.total), 60);
    return { items, span, startMs, h };
  }, [ingestions, compact, resolveColor]);

  const points = useMemo(() => {
    const src = [...(shulginLog ?? [])];
    if (src.length === 0 && shulgin) {
      src.push({ time: new Date(startMs).toISOString(), level: shulgin });
    }
    return src
      .map((p) => {
        const min = (new Date(p.time).getTime() - startMs) / 60000;
        return { ...p, min };
      })
      .filter((p) => p.min >= -10 && p.min <= span + 20);
  }, [shulginLog, shulgin, startMs, span]);

  const beats = useMemo(
    () => heartPointsOnSpan(heartRate ?? [], startMs, span),
    [heartRate, startMs, span],
  );

  if (items.length === 0) return null;

  const w = 800;
  const fmt = (ms: number) =>
    new Date(ms).toLocaleTimeString(dateTag, {
      hour: "2-digit",
      minute: "2-digit",
    });
  const nowMin = (now - startMs) / 60000;
  const nowX = Math.min(w, Math.max(0, (nowMin / span) * w));
  const nowInRange = showNow && nowMin >= -5 && nowMin <= span + 5;

  const pick = (e: MouseEvent<SVGSVGElement> | TouchEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const { cx, cy } = clientXY(e);
    const x = Math.min(w, Math.max(0, ((cx - r.left) / r.width) * w));
    const y = Math.min(h, Math.max(0, ((cy - r.top) / r.height) * h));
    setScrub({
      x,
      y,
      min: (x / w) * span,
      left: cx,
      top: Math.max(12, r.top - 8),
    });
  };

  const scrubMs = scrub ? startMs + scrub.min * 60000 : null;
  const hits = scrub
    ? items
        .map((c) => {
          const t = scrub.min - c.offsetMin;
          const v = intensityAt(c.p, t) * c.amp;
          const curveY = h - 6 - v * (h - 12);
          return { ...c, v, dist: Math.abs(curveY - scrub.y), curveY };
        })
        .filter((c) => c.v > 0.01)
        .sort((a, b) => a.dist - b.dist)
    : [];
  const primary = hits[0];
  const nearBeat = scrub
    ? beats
        .map((b) => ({ ...b, dist: Math.abs(b.min - scrub.min) }))
        .sort((a, b) => a.dist - b.dist)[0]
    : null;
  const showBeat = nearBeat && nearBeat.dist < 12;

  const tip =
    scrub && scrubMs != null ? (
          <div
            className="rounded-2xl glass-strong glass-modal px-3 py-2 text-[11px] font-heading font-bold text-sand-800 dark:text-sand-50 pointer-events-none min-w-[9rem] max-w-[16rem] shadow-xl"
            style={{
              position: "absolute",
              left: `${(scrub.x / w) * 100}%`,
              top: 8,
              transform: "translate(-50%, 0)",
              zIndex: 20,
            }}
          >
            <p>
              {fmt(scrubMs)} · {fmtDelta(scrubMs - now, fr)}
            </p>
            {showBeat ? (
              <p className="mt-1 text-rose-500 font-bold">♥ {nearBeat.bpm} bpm</p>
            ) : null}
            {hits.length ? (
              <ul className="mt-1.5 space-y-1 font-sans font-semibold">
                {hits.slice(0, 5).map((c) => (
                  <li
                    key={c.ing.id}
                    className="flex items-center gap-1.5 truncate"
                    style={{ color: c.color }}
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full shrink-0 ring-1 ring-black/10"
                      style={{ background: c.color }}
                    />
                    <span className="truncate">
                      {resolveEmoji(c.ing.slug, c.ing.substanceName, "•")}{" "}
                      {resolveName(c.ing.slug, c.ing.substanceName)}
                      {c.ing.dose != null ? ` · ${c.ing.dose}${c.ing.doseUnit}` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
    ) : null;

  return (
    <div className={compact ? "px-1 pb-1" : "rounded-xl glass p-4"}>
      <div className="relative">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className={`w-full cursor-crosshair ${compact ? "h-28" : "h-auto"}`}
          preserveAspectRatio="none"
          onMouseMove={pick}
          onClick={pick}
          onTouchStart={pick}
          onTouchMove={pick}
          onMouseLeave={() => setScrub(null)}
        >
          {SHULGIN_SCALE.map((lvl) => (
            <g key={lvl}>
              <line
                x1="0"
                y1={yOf(lvl, h)}
                x2={w}
                y2={yOf(lvl, h)}
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 8"
                className="text-sand-300 dark:text-sand-700"
                opacity="0.35"
              />
              <text
                x="6"
                y={yOf(lvl, h) - 4}
                fill="currentColor"
                fontSize="11"
                className="text-sand-400"
                opacity="0.8"
              >
                {lvl}
              </text>
            </g>
          ))}
          {items.map((c) => {
            const on = primary?.ing.id === c.ing.id;
            return (
              <g key={c.ing.id}>
                <path
                  d={offsetCurveFill(c.p, c.offsetMin, span, w, h, 60, c.amp)}
                  fill={c.color}
                  opacity={on ? 0.32 : 0.14}
                />
                <path
                  d={offsetCurvePath(c.p, c.offsetMin, span, w, h, 60, c.amp)}
                  fill="none"
                  stroke={c.color}
                  strokeWidth={on ? (compact ? 5.4 : 6.4) : compact ? 4 : 4.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={primary && !on ? 0.35 : 1}
                />
              </g>
            );
          })}
          {points.length > 1 ? (
            <polyline
              fill="none"
              stroke="hsl(var(--accent-h) var(--clay-s) var(--clay-l))"
              strokeWidth="3.2"
              strokeDasharray="5 4"
              points={points
                .map((p) => `${(p.min / span) * w},${yOf(p.level, h)}`)
                .join(" ")}
            />
          ) : null}
          {points.map((p, i) => {
            const x = (p.min / span) * w;
            const y = yOf(p.level, h);
            return (
              <g key={`${p.time}-${i}`}>
                <circle
                  cx={x}
                  cy={y}
                  r={compact ? 5 : 7}
                  fill="hsl(var(--accent-h) var(--clay-s) var(--clay-l))"
                  stroke="white"
                  strokeWidth="3.2"
                />
                <text
                  x={x + 10}
                  y={y - 8}
                  fill="hsl(var(--accent-h) var(--clay-s) var(--clay-l))"
                  fontSize={compact ? 12 : 14}
                  fontWeight="700"
                >
                  {p.level}
                </text>
              </g>
            );
          })}
          {beats.length > 1 ? (
            <polyline
              fill="none"
              stroke="currentColor"
              className="text-rose-500"
              strokeWidth="3.2"
              strokeLinejoin="round"
              strokeLinecap="round"
              points={beats
                .map((b) => `${(b.min / span) * w},${bpmY(b.bpm, h)}`)
                .join(" ")}
            />
          ) : null}
          {beats.map((b, i) => {
            const x = (b.min / span) * w;
            const y = bpmY(b.bpm, h);
            return (
              <g key={`hr-${b.time}-${i}`}>
                <circle
                  cx={x}
                  cy={y}
                  r={compact ? 4 : 5.5}
                  fill="currentColor"
                  className="text-rose-500"
                  stroke="white"
                  strokeWidth="3.2"
                />
                {!compact ? (
                  <text
                    x={x + 8}
                    y={y - 8}
                    fill="currentColor"
                    className="text-rose-500"
                    fontSize="12"
                    fontWeight="700"
                  >
                    {b.bpm}
                  </text>
                ) : null}
              </g>
            );
          })}
          {nowInRange ? (
            <g>
              <line
                x1={nowX}
                y1="0"
                x2={nowX}
                y2={h}
                stroke="hsl(var(--accent-h) var(--clay-s) var(--clay-l))"
                strokeWidth="3.2"
                strokeDasharray="4 4"
              />
              <circle
                cx={nowX}
                cy="6"
                r="4"
                fill="hsl(var(--accent-h) var(--clay-s) var(--clay-l))"
              />
            </g>
          ) : null}
          {scrub ? (
            <g>
              <line
                x1={scrub.x}
                y1="0"
                x2={scrub.x}
                y2={h}
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-sand-700 dark:text-sand-200"
              />
              {hits.map((c, i) => (
                <circle
                  key={c.ing.id}
                  cx={scrub.x}
                  cy={c.curveY}
                  r={i === 0 ? 6 : 4}
                  fill={c.color}
                  stroke="white"
                  strokeWidth="3.2"
                />
              ))}
              {primary ? (
                <text
                  x={scrub.x > w * 0.62 ? scrub.x - 10 : scrub.x + 12}
                  y={Math.max(16, primary.curveY - 8)}
                  textAnchor={scrub.x > w * 0.62 ? "end" : "start"}
                  fill={primary.color}
                  fontSize={compact ? 13 : 16}
                  fontWeight="800"
                  stroke="white"
                  strokeWidth="3"
                  paintOrder="stroke"
                  style={{ paintOrder: "stroke" }}
                >
                  {resolveEmoji(primary.ing.slug, primary.ing.substanceName, "•")}{" "}
                  {resolveName(primary.ing.slug, primary.ing.substanceName)}
                </text>
              ) : null}
            </g>
          ) : null}
        </svg>
        {tip}
        <div className="absolute right-1 top-1 z-10">
          <CurveZoomButton
            ingestions={ingestions}
            dateTag={dateTag}
            shulgin={shulgin}
            shulginLog={shulginLog}
            heartRate={heartRate}
          />
        </div>
      </div>
      <div className="mt-1 flex justify-between text-[10px] font-semibold text-sand-400 dark:text-sand-500">
        <span>{fmt(startMs)}</span>
        {nowInRange ? (
          <span className="text-clay-500">{fmt(now)}</span>
        ) : (
          <span>{fmt(startMs + (span / 2) * 60000)}</span>
        )}
        <span>{fmt(startMs + span * 60000)}</span>
      </div>
    </div>
  );
}
