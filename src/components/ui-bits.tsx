import { Link } from "@tanstack/react-router";
import { FileDown, Share2 } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode, type TouchEvent } from "react";
import {
  categories,
  categoryEmoji,
  categoryTint,
  curvePath,
  durationCurve,
  intensityAt,
  type Substance,
} from "@/lib/substances";
import { useI18n } from "@/lib/i18n";
import { usePrefs } from "@/lib/prefs";
import { localizedSubstance } from "@/lib/substance-i18n";
import { downloadSubstancePdf, shareSubstanceStory } from "@/lib/export-docs";
import { doseAmplitude } from "@/lib/dose";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${on ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function CategoryBadge({ category }: { category: string }) {
  const c = categories[category];
  const { t } = useI18n();
  if (!c) return null;
  const label = t(`cat.${category}`);
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
      style={{ background: c.tint, color: c.color }}
    >
      <span>{categoryEmoji(category)}</span>
      {label.startsWith("cat.") ? c.label : label}
    </span>
  );
}

export function CategoryChip({
  id,
  active,
  onClick,
  label,
}: {
  id: string;
  active: boolean;
  onClick: () => void;
  label?: string;
}) {
  const { t } = useI18n();
  const c = categories[id];
  const text = label ?? (id === "all" ? t("common.all") : t(`cat.${id}`));
  const emoji = id === "all" ? "✨" : categoryEmoji(id);
  const color = c?.color ?? "#c9704f";
  const tint = c?.tint ?? categoryTint("misc");
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-1.5"
      style={
        active
          ? { background: color, color: "#fff", boxShadow: `0 8px 20px ${color}44` }
          : { background: tint, color, border: `1px solid ${color}33` }
      }
    >
      <span>{emoji}</span>
      {text.startsWith("cat.") ? c?.label ?? id : text}
    </button>
  );
}

export function DurationCurve({
  sub,
  className,
  width = 200,
  height = 56,
  color,
  amp = 1,
}: {
  sub: Substance;
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  amp?: number;
}) {
  const c = durationCurve(sub);
  const d = curvePath(c, width, height, 48, amp);
  const fill = `${d} L${width},${height} L0,${height} Z`;
  const gid = `g-${sub.slug}-${width}`;
  const stroke = color ?? sub.color;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.45" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d={fill} fill={`url(#${gid})`} />
      <path d={d} fill="none" stroke={stroke} strokeWidth="3.8" strokeLinecap="round" />
    </svg>
  );
}

export function MultiCurve({
  subs,
  width = 640,
  height = 160,
}: {
  subs: Substance[];
  width?: number;
  height?: number;
}) {
  const { resolveColor, resolveName, resolveEmoji } = usePrefs();
  const [scrub, setScrub] = useState<{
    x: number;
    y: number;
    left: number;
    top: number;
  } | null>(null);
  const maxTotal = Math.max(...subs.map((s) => durationCurve(s).total), 1);

  const pick = (e: MouseEvent<SVGSVGElement> | TouchEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const src =
      "touches" in e && e.touches[0]
        ? e.touches[0]
        : (e as MouseEvent);
    const x = Math.min(width, Math.max(0, ((src.clientX - r.left) / r.width) * width));
    const y = Math.min(height, Math.max(0, ((src.clientY - r.top) / r.height) * height));
    setScrub({
      x,
      y,
      left: src.clientX,
      top: Math.max(12, r.top - 8),
    });
  };

  const hits = scrub
    ? subs
        .map((s) => {
          const c = durationCurve(s);
          const scaled = { ...c, total: maxTotal, peakEnd: Math.min(c.peakEnd, maxTotal) };
          const t = (scrub.x / width) * maxTotal;
          const v = intensityAt(scaled, t);
          const curveY = height - 4 - v * (height - 8);
          const color = resolveColor(s.slug, s.name, s.color);
          return { s, v, dist: Math.abs(curveY - scrub.y), curveY, color };
        })
        .filter((c) => c.v > 0.01)
        .sort((a, b) => a.dist - b.dist)
    : [];
  const primary = hits[0];

  const tip =
    scrub ? (
          <div
            className="rounded-2xl glass-strong glass-modal px-3 py-2 text-[11px] font-heading font-bold pointer-events-none min-w-[8rem] max-w-[16rem] shadow-xl"
            style={{
              position: "absolute",
              left: `${(scrub.x / width) * 100}%`,
              top: 8,
              transform: "translate(-50%, 0)",
              zIndex: 20,
            }}
          >
            {hits.length ? (
              <ul className="space-y-1 font-sans font-semibold">
                {hits.slice(0, 5).map((c) => (
                  <li
                    key={c.s.slug}
                    className="flex items-center gap-1.5 truncate"
                    style={{ color: c.color }}
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full shrink-0 ring-1 ring-black/10"
                      style={{ background: c.color }}
                    />
                    {resolveEmoji(c.s.slug, c.s.name, c.s.emoji)}{" "}
                    {resolveName(c.s.slug, c.s.name)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sand-500 font-sans font-semibold">—</p>
            )}
          </div>
    ) : null;

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-40 cursor-crosshair"
        preserveAspectRatio="none"
        onMouseMove={pick}
        onClick={pick}
        onTouchStart={pick}
        onTouchMove={pick}
        onMouseLeave={() => setScrub(null)}
      >
        {subs.map((s) => {
          const c = durationCurve(s);
          const scaled = { ...c, total: maxTotal, peakEnd: Math.min(c.peakEnd, maxTotal) };
          const d = curvePath(scaled, width, height, 64);
          const color = resolveColor(s.slug, s.name, s.color);
          const on = primary?.s.slug === s.slug;
          return (
            <path
              key={s.slug}
              d={d}
              fill="none"
              stroke={color}
              strokeWidth={on ? 6.2 : 4.4}
              strokeLinecap="round"
              opacity={primary && !on ? 0.35 : 1}
            />
          );
        })}
        {scrub ? (
          <g>
            <line
              x1={scrub.x}
              y1="0"
              x2={scrub.x}
              y2={height}
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-sand-700 dark:text-sand-200"
            />
            {hits.map((c, i) => (
              <circle
                key={c.s.slug}
                cx={scrub.x}
                cy={c.curveY}
                r={i === 0 ? 6 : 4}
                fill={c.color}
                stroke="white"
                strokeWidth="2"
              />
            ))}
            {primary ? (
              <text
                x={scrub.x > width * 0.62 ? scrub.x - 10 : scrub.x + 12}
                y={Math.max(16, primary.curveY - 8)}
                textAnchor={scrub.x > width * 0.62 ? "end" : "start"}
                fill={primary.color}
                fontSize="16"
                fontWeight="800"
                stroke="white"
                strokeWidth="3"
                paintOrder="stroke"
              >
                {resolveEmoji(primary.s.slug, primary.s.name, primary.s.emoji)}{" "}
                {resolveName(primary.s.slug, primary.s.name)}
              </text>
            ) : null}
          </g>
        ) : null}
      </svg>
      {tip}
    </div>
  );
}

export function SubstanceCard({
  sub,
  onAdd,
}: {
  sub: Substance;
  onAdd?: () => void;
}) {
  const { t, locale } = useI18n();
  const { resolveEmoji, resolveColor, resolveName, lastDoseFor } = usePrefs();
  const view = localizedSubstance(sub, locale);
  const emoji = resolveEmoji(view.slug, view.name, view.emoji);
  const color = resolveColor(view.slug, view.name, view.color);
  const label = resolveName(view.slug, sub.name) === sub.name ? view.name : resolveName(view.slug, sub.name);
  const last = lastDoseFor(sub.name, sub.slug);
  return (
    <Reveal>
      <Link
        to="/substance/$slug"
        params={{ slug: sub.slug }}
        className="glass glass-tint card-hover sub-card rounded-2xl p-4 block text-left"
        style={{ ["--tint" as string]: color }}
      >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <CategoryBadge category={sub.category} />
          <h3 className="mt-2 font-heading text-lg font-bold text-sand-900 dark:text-sand-50 truncate">
            <span className="mr-1.5">{emoji}</span>
            {label}
          </h3>
          <p className="mt-1 text-xs text-sand-500 dark:text-sand-400 line-clamp-2">
            {view.summary}
          </p>
          {last?.dose != null ? (
            <p className="mt-1.5 text-[11px] font-semibold" style={{ color }}>
              {t("add.lastDose", { n: last.dose, unit: last.unit })}
            </p>
          ) : null}
        </div>
        {onAdd ? (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAdd();
            }}
            className="shrink-0 rounded-full text-white text-xs font-semibold px-3 py-1.5 hover:scale-105 transition-transform"
            style={{ background: color }}
          >
            {t("home.addLogs")}
          </button>
        ) : null}
      </div>
      <DurationCurve
        sub={sub}
        color={color}
        amp={Math.min(0.9, doseAmplitude(sub, last?.dose, last?.unit ?? "", last?.route ?? ""))}
        className="mt-3 h-10 w-full"
      />
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void shareSubstanceStory(
              sub,
              emoji,
              color,
              label,
              t(`cat.${sub.category}`),
            );
          }}
          className="inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[11px] font-semibold"
        >
          <Share2 className="h-3 w-3" /> {t("share.btn")}
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void downloadSubstancePdf(
              sub,
              emoji,
              color,
              label,
              t(`cat.${sub.category}`),
            );
          }}
          className="inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[11px] font-semibold"
        >
          <FileDown className="h-3 w-3" /> PDF
        </button>
      </div>
      </Link>
    </Reveal>
  );
}

export function PageHero({
  kicker,
  icon,
  title,
  subtitle,
}: {
  kicker: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center animate-fade-up">
      <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-sand-700 dark:text-sand-200">
        <span className="text-clay-500">{icon}</span>
        {kicker}
      </div>
      <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-bold text-sand-900 dark:text-sand-50">
        {title}
      </h1>
      <p className="mt-3 text-sand-600 dark:text-sand-300 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

export function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <section className="glass rounded-2xl p-5 sm:p-6">
      <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50 mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h2>
      {children}
    </section>
    </Reveal>
  );
}
