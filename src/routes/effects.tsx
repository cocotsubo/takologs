import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/ui-bits";
import { useI18n } from "@/lib/i18n";
import { getSubstance, substances, type EffectTone } from "@/lib/substances";
import { localizedName, localizedSubstance } from "@/lib/substance-i18n";
import { translateEffect } from "@/lib/copy-extra";

export const Route = createFileRoute("/effects")({ component: EffectsPage });

const TONE: Record<EffectTone, { color: string; bg: string }> = {
  good: { color: "#3d8a5f", bg: "rgba(61,138,95,0.12)" },
  neutral: { color: "#a87c45", bg: "rgba(168,124,69,0.12)" },
  bad: { color: "#c9493f", bg: "rgba(201,73,63,0.12)" },
};

export function EffectsPage() {
  const { t, locale } = useI18n();
  const [q, setQ] = useState("");
  const [tone, setTone] = useState<"all" | EffectTone>("all");
  const index = useMemo(() => {
    const map = new Map<string, { tone: EffectTone; subs: Set<string> }>();
    for (const s of substances) {
      const loc = localizedSubstance(s, locale);
      (
        [
          ["good", loc.effects.positive],
          ["neutral", loc.effects.neutral],
          ["bad", loc.effects.negative],
        ] as const
      ).forEach(([tn, items]) => {
        items.forEach((n) => {
          const label = translateEffect(n, locale);
          const k = label.toLowerCase();
          if (!map.has(k)) map.set(k, { tone: tn, subs: new Set() });
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
  }, [locale]);
  const list = useMemo(
    () =>
      index.filter(
        (r) =>
          (tone === "all" || r.tone === tone) &&
          r.effect.toLowerCase().includes(q.toLowerCase()),
      ),
    [q, tone, index],
  );

  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <PageHero
          kicker={t("effects.kicker")}
          icon={<Sparkles className="h-3.5 w-3.5" />}
          title={t("effects.title")}
          subtitle={t("effects.subtitle")}
        />
        <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="flex items-center gap-2 rounded-xl glass px-3 py-2 w-full sm:max-w-xs">
            <Search className="h-4 w-4 text-sand-500" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("common.search")}
              className="w-full bg-transparent outline-none text-sm text-sand-900 dark:text-sand-50"
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {(["all", "good", "neutral", "bad"] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setTone(k)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  tone === k ? "bg-clay-500 text-white" : "glass text-sand-700 dark:text-sand-200"
                }`}
              >
                {k === "all" ? t("common.all") : t(`effects.${k}`)}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 space-y-2.5">
          {list.slice(0, 80).map((r, i) => (
            <div
              key={r.effect}
              style={{ animationDelay: `${Math.min(i * 20, 400)}ms` }}
              className="glass card-hover rounded-xl p-4 animate-fade-up"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="text-[11px] font-bold rounded-full px-2 py-0.5"
                    style={{ color: TONE[r.tone].color, background: TONE[r.tone].bg }}
                  >
                    {t(`effects.${r.tone}`)}
                  </span>
                  <h3 className="font-heading font-bold text-sand-900 dark:text-sand-50 truncate">
                    {r.effect}
                  </h3>
                </div>
                <span className="text-xs text-sand-500 shrink-0">{r.subs.length}</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {r.subs.slice(0, 10).map((slug) => {
                  const s = getSubstance(slug);
                  if (!s) return null;
                  return (
                    <Link
                      key={slug}
                      to="/substance/$slug"
                      params={{ slug }}
                      className="text-xs font-semibold rounded-full px-2 py-0.5"
                      style={{ background: `${s.color}22`, color: s.color }}
                    >
                      {localizedName(s, locale, s.name)}
                    </Link>
                  );
                })}
                {r.subs.length > 10 ? (
                  <span className="text-xs text-sand-400">+{r.subs.length - 10}</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
