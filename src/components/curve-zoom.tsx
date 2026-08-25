import { bpmY, heartPointsOnSpan } from "@/components/heart-rate";
import { doseAmplitude, fitAmplitudes } from "@/lib/dose";
import { useI18n } from "@/lib/i18n";
import type { HeartRatePoint, Ingestion, ShulginPoint } from "@/lib/journal";
import { usePrefs } from "@/lib/prefs";
import {
  durationCurve,
  findSubstanceByName,
  intensityAt,
  offsetCurveFill,
  offsetCurvePath,
  type Curve,
} from "@/lib/substances";
import { Maximize2, Minus, Plus, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type MouseEvent, type PointerEvent, type TouchEvent, type WheelEvent } from "react";
import { createPortal } from "react-dom";

const FALLBACK: Curve = { onset: 30, peakStart: 90, peakEnd: 150, total: 240 };

const PHASE_FR = { onset: "Montée", peak: "Pic", offset: "Descente" };
const PHASE_EN = { onset: "Onset", peak: "Peak", offset: "Offset" };

function clientXY(e: MouseEvent<SVGSVGElement> | TouchEvent<SVGSVGElement>) {
  const src =
    "touches" in e && e.touches[0]
      ? e.touches[0]
      : "changedTouches" in e && (e as TouchEvent).changedTouches[0]
        ? (e as TouchEvent).changedTouches[0]
        : (e as MouseEvent);
  return { cx: src.clientX, cy: src.clientY };
}

export function CurveZoomButton(props: {
  ingestions: Ingestion[];
  dateTag: string;
  shulgin?: string | null;
  shulginLog?: ShulginPoint[];
  heartRate?: HeartRatePoint[] | null;
}) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  if (props.ingestions.length === 0) return null;
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold text-sand-700 dark:text-sand-200 hover:scale-105 transition-transform"
      >
        <Maximize2 className="h-3.5 w-3.5" /> {t("editor.zoom")}
      </button>
      {open ? <CurveZoomOverlay {...props} onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function CurveZoomOverlay({
  ingestions,
  dateTag,
  shulgin,
  shulginLog,
  heartRate,
  onClose,
}: {
  ingestions: Ingestion[];
  dateTag: string;
  shulgin?: string | null;
  shulginLog?: ShulginPoint[];
  heartRate?: HeartRatePoint[] | null;
  onClose: () => void;
}) {
  const { t } = useI18n();
  const fr = dateTag.toLowerCase().startsWith("fr");
  const phase = fr ? PHASE_FR : PHASE_EN;
  const { resolveColor, resolveName, resolveEmoji } = usePrefs();
  const [zoom, setZoom] = useState(2.2);
  const [scrub, setScrub] = useState<number | null>(null);
  const [scrollPct, setScrollPct] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; sl: number; moved: boolean } | null>(null);
  const skipClick = useRef(false);
  const zoomRef = useRef(zoom);
  zoomRef.current = zoom;
  const keepCenter = useRef<number | null>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const { items, span, startMs, h } = useMemo(() => {
    const h = 280;
    const times = ingestions.map((i) => new Date(i.ingestionTime).getTime());
    const startMs = Math.min(...times);
    const raw = ingestions.map((ing) => {
      const sub = findSubstanceByName(ing.substanceName);
      const p = sub ? durationCurve(sub) : FALLBACK;
      const offsetMin = Math.max(0, (new Date(ing.ingestionTime).getTime() - startMs) / 60000);
      return {
        ing,
        p,
        sub,
        offsetMin,
        rawAmp: doseAmplitude(sub, ing.dose, ing.doseUnit, ing.route),
        color: resolveColor(ing.slug, ing.substanceName, ing.color ?? sub?.color ?? "#b07a45"),
      };
    });
    const fitted = fitAmplitudes(raw.map((c) => c.rawAmp), 0.88);
    const items = raw.map((c, i) => ({ ...c, amp: fitted[i] }));
    const span = Math.max(...items.map((c) => c.offsetMin + c.p.total), 60);
    return { items, span, startMs, h };
  }, [ingestions, resolveColor]);

  const w = Math.max(720, Math.round(span * 8 * zoom));
  const fmt = (ms: number) =>
    new Date(ms).toLocaleTimeString(dateTag, { hour: "2-digit", minute: "2-digit" });

  const ticks: number[] = [];
  const step = span > 600 ? 60 : span > 240 ? 30 : 15;
  for (let m = 0; m <= span + 0.1; m += step) ticks.push(m);

  const applyZoom = (next: number) => {
    const el = scroller.current;
    const z = Math.min(8, Math.max(1, +next.toFixed(2)));
    if (el && el.scrollWidth > 0) {
      keepCenter.current = (el.scrollLeft + el.clientWidth / 2) / Math.max(1, el.scrollWidth);
    }
    setZoom(z);
  };

  useEffect(() => {
    const el = scroller.current;
    const c = keepCenter.current;
    if (!el) return;
    if (c != null) {
      keepCenter.current = null;
      el.scrollLeft = c * el.scrollWidth - el.clientWidth / 2;
    }
    const max = el.scrollWidth - el.clientWidth;
    setScrollPct(max > 0 ? (el.scrollLeft / max) * 100 : 0);
  }, [zoom, w]);

  const pick = (e: MouseEvent<SVGSVGElement> | TouchEvent<SVGSVGElement>) => {
    if (skipClick.current || drag.current?.moved) return;
    const r = e.currentTarget.getBoundingClientRect();
    const { cx } = clientXY(e);
    const x = Math.min(w, Math.max(0, ((cx - r.left) / r.width) * w));
    setScrub((x / w) * span);
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    drag.current = { x: e.clientX, sl: scroller.current?.scrollLeft ?? 0, moved: false };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || !scroller.current) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 6) drag.current.moved = true;
    scroller.current.scrollLeft = drag.current.sl - dx;
  };
  const onPointerUp = () => {
    skipClick.current = Boolean(drag.current?.moved);
    drag.current = null;
    window.setTimeout(() => {
      skipClick.current = false;
    }, 80);
  };

  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (e.ctrlKey || e.metaKey || Math.abs(e.deltaY) > 0) {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        applyZoom(zoomRef.current + (e.deltaY > 0 ? -0.25 : 0.25));
      }
    }
  };

  const onScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollPct(max > 0 ? (el.scrollLeft / max) * 100 : 0);
  };

  const setWindow = (pct: number) => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollLeft = (pct / 100) * Math.max(0, max);
    setScrollPct(pct);
  };

  const beats = heartPointsOnSpan(heartRate ?? [], startMs, span);
  const nowMin = (Date.now() - startMs) / 60000;

  const overlay = (
    <div
      className="fixed inset-0 z-[210] flex flex-col bg-white/90 dark:bg-black/80 backdrop-blur-md"
      style={{ position: "fixed", zIndex: 210 }}
    >
      <div className="flex items-center justify-between gap-2 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <p className="font-heading font-bold text-sand-900 dark:text-sand-50">{t("editor.zoomTitle")}</p>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => applyZoom(zoom - 0.5)}
            className="rounded-full glass p-2"
            aria-label="−"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="text-xs font-heading font-bold w-10 text-center">{zoom.toFixed(1)}×</span>
          <button
            type="button"
            onClick={() => applyZoom(zoom + 0.5)}
            className="rounded-full glass p-2"
            aria-label="+"
          >
            <Plus className="h-4 w-4" />
          </button>
          <button type="button" onClick={onClose} className="rounded-full glass p-2 ml-1" aria-label={t("common.close")}>
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="px-4 pb-2 text-[11px] text-sand-500">{t("editor.zoomHint")}</p>
      <div
        ref={scroller}
        className="flex-1 overflow-x-auto overflow-y-hidden px-3 pb-2 touch-pan-x"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onWheel={onWheel}
        onScroll={onScroll}
      >
        <svg
          viewBox={`0 0 ${w} ${h}`}
          width={w}
          height={h}
          className="cursor-grab active:cursor-grabbing block curve-zoom-svg"
          preserveAspectRatio="none"
          style={{ maxWidth: "none", width: w, minWidth: w, height: h }}
          onMouseMove={pick}
          onClick={pick}
          onTouchStart={pick}
        >
          {ticks.map((m) => {
            const x = (m / span) * w;
            return (
              <g key={m}>
                <line x1={x} y1="0" x2={x} y2={h} stroke="currentColor" className="text-sand-300 dark:text-sand-700" strokeWidth="1" />
                <text x={x + 4} y={h - 8} fill="currentColor" className="text-sand-500" fontSize="11">
                  {fmt(startMs + m * 60000)}
                </text>
              </g>
            );
          })}
          {items.map((c) => (
            <g key={c.ing.id}>
              <path d={offsetCurveFill(c.p, c.offsetMin, span, w, h, 80, c.amp)} fill={c.color} opacity="0.22" />
              <path
                d={offsetCurvePath(c.p, c.offsetMin, span, w, h, 80, c.amp)}
                fill="none"
                stroke="white"
                strokeWidth="12"
                strokeLinecap="round"
                className="dark:stroke-black"
              />
              <path
                d={offsetCurvePath(c.p, c.offsetMin, span, w, h, 80, c.amp)}
                fill="none"
                stroke={c.color}
                strokeWidth="6"
                strokeLinecap="round"
              />
              {(
                [
                  [c.offsetMin + c.p.onset, phase.onset],
                  [c.offsetMin + c.p.peakStart, phase.peak],
                  [c.offsetMin + c.p.total, phase.offset],
                ] as const
              ).map(([min, label]) => {
                const x = (min / span) * w;
                const v = intensityAt(c.p, min - c.offsetMin) * c.amp;
                const y = h - 6 - v * (h - 12);
                return (
                  <g key={`${c.ing.id}-${label}`}>
                    <circle cx={x} cy={y} r="5" fill={c.color} stroke="white" strokeWidth="2" />
                    <text
                      x={x + 8}
                      y={Math.max(16, y - 8)}
                      fill={c.color}
                      fontSize="13"
                      fontWeight="800"
                      stroke="white"
                      strokeWidth="3"
                      paintOrder="stroke"
                    >
                      {resolveEmoji(c.ing.slug, c.ing.substanceName, "•")} {label} · {fmt(startMs + min * 60000)}
                    </text>
                  </g>
                );
              })}
            </g>
          ))}
          {beats.map((b, i) => {
            const x = (b.min / span) * w;
            return (
              <g key={`hr-${i}`}>
                <circle cx={x} cy={bpmY(b.bpm, h)} r="4.5" fill="currentColor" className="text-rose-500" stroke="white" strokeWidth="2" />
                <text x={x + 7} y={bpmY(b.bpm, h) - 8} fill="currentColor" className="text-rose-500" fontSize="11" fontWeight="700">
                  {b.bpm}
                </text>
              </g>
            );
          })}
          {nowMin >= -5 && nowMin <= span + 5 ? (
            <line
              x1={(nowMin / span) * w}
              y1="0"
              x2={(nowMin / span) * w}
              y2={h}
              stroke="hsl(var(--accent-h) var(--clay-s) var(--clay-l))"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          ) : null}
          {scrub != null ? (
            <line
              x1={(scrub / span) * w}
              y1="0"
              x2={(scrub / span) * w}
              y2={h}
              stroke="currentColor"
              className="text-sand-800 dark:text-sand-100"
              strokeWidth="1.5"
            />
          ) : null}
        </svg>
      </div>
      {scrub != null ? (
        <div className="px-4 pb-2">
          <div className="glass-modal rounded-2xl px-3 py-2 text-sm font-heading font-bold text-sand-800 dark:text-sand-50">
            {fmt(startMs + scrub * 60000)}
            <ul className="mt-1 font-sans font-semibold text-xs space-y-0.5">
              {items.map((c) => {
                const tmin = scrub - c.offsetMin;
                const v = intensityAt(c.p, tmin);
                if (v < 0.02) return null;
                const phaseLabel =
                  tmin < c.p.onset ? phase.onset : tmin < c.p.peakEnd ? phase.peak : phase.offset;
                return (
                  <li key={c.ing.id} style={{ color: c.color }}>
                    {resolveEmoji(c.ing.slug, c.ing.substanceName, "•")} {resolveName(c.ing.slug, c.ing.substanceName)} · {phaseLabel}
                    {c.ing.dose != null ? ` · ${c.ing.dose}${c.ing.doseUnit}` : ""}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
      <div className="px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-1">
        <label className="block text-[10px] font-semibold text-sand-500 mb-1">{t("editor.zoomWindow")}</label>
        <input
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={scrollPct}
          onChange={(e) => setWindow(Number(e.target.value))}
          className="w-full accent-[hsl(var(--accent-h)_var(--clay-s)_var(--clay-l))] h-2"
          aria-label={t("editor.zoomWindow")}
        />
      </div>
    </div>
  );

  return typeof document !== "undefined" ? createPortal(overlay, document.body) : null;
}
