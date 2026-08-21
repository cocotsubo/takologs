import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  Brain,
  Clock,
  ExternalLink,
  FileDown,
  Plus,
  Sparkles,
  Star,
} from "lucide-react";
import { CategoryBadge, DurationCurve, Section } from "@/components/ui-bits";
import { Molecule } from "@/components/molecule";
import { EmojiPicker } from "@/components/emoji-picker";
import { useAddToJournal } from "@/components/journal-context";
import { useI18n } from "@/lib/i18n";
import { usePrefs } from "@/lib/prefs";
import { localizedSubstance } from "@/lib/substance-i18n";
import { substanceDoc } from "@/lib/substance-docs";
import { downloadSubstancePdf, shareSubstanceStory } from "@/lib/export-docs";
import { doseAmplitude } from "@/lib/dose";
import { translateInteraction } from "@/lib/copy-extra";
import {
  DOSE_KEYS,
  durationCurve,
  formatMins,
  getSubstance,
  harmTotal,
  neurotransmitters,
} from "@/lib/substances";

export const Route = createFileRoute("/substance/$slug")({
  component: SubstancePage,
});

const TONE = {
  good: { color: "#3d8a5f", bg: "rgba(61,138,95,0.12)" },
  neutral: { color: "#a87c45", bg: "rgba(168,124,69,0.12)" },
  bad: { color: "#c9493f", bg: "rgba(201,73,63,0.12)" },
};

export function SubstancePage() {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const raw = getSubstance(slug);
  const { requestAdd } = useAddToJournal();
  const { t, locale } = useI18n();
  const { resolveEmoji, setEmoji, isFavorite, toggleFavorite, resolveColor, resolveName, lastDoseFor } = usePrefs();
  const e = raw ? localizedSubstance(raw, locale) : undefined;
  if (!raw || !e) {
    return (
      <div className="px-4 py-16 text-center">
        <p className="text-sand-600 dark:text-sand-300">{t("substance.notFound")}</p>
        <Link to="/substances" className="mt-4 inline-block text-clay-500 font-semibold">
          {t("common.back")}
        </Link>
      </div>
    );
  }
  const last = lastDoseFor(raw.name, raw.slug);
  const curve = durationCurve(e);
  const add = () => requestAdd(e.slug);
  const emoji = resolveEmoji(e.slug, e.name, e.emoji);
  const color = resolveColor(e.slug, e.name, e.color);
  const label = resolveName(e.slug, raw.name) === raw.name ? e.name : resolveName(e.slug, raw.name);
  const doc = substanceDoc(raw, locale);

  return (
    <div className="px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <Link
          to="/substances"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-sand-600 dark:text-sand-300 hover:text-clay-500 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> {t("nav.substances")}
        </Link>
        <div className="glass-strong rounded-3xl p-6 sm:p-8 animate-fade-up relative overflow-hidden">
          <div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-30"
            style={{ background: color }}
          />
          <div className="relative flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="flex-1 min-w-0">
              <CategoryBadge category={e.category} />
              <h1 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-sand-900 dark:text-sand-50 flex items-center gap-3">
                <EmojiPicker
                  value={emoji}
                  onChange={(v) => setEmoji(e.slug, v)}
                />
                {label}
              </h1>
              {e.aliases.length > 0 ? (
                <p className="mt-1 text-sm text-sand-500 dark:text-sand-400">
                  {t("substance.aka", { names: e.aliases.join(" · ") })}
                </p>
              ) : null}
              <p className="mt-1 text-xs font-semibold text-sand-400 dark:text-sand-500">
                {e.chemicalClass} · {e.psychoactiveClass}
              </p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
            <button
              type="button"
              onClick={add}
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-4 py-2.5 text-sm font-semibold shadow-lg shadow-clay-500/25 hover:scale-105 active:scale-95 transition-transform"
            >
              <Plus className="h-4 w-4" /> {t("substance.addToLog")}
            </button>
            <button
              type="button"
              onClick={() => toggleFavorite(e.slug)}
              className="inline-flex items-center justify-center gap-1 rounded-full glass px-3 py-2 text-sm font-semibold"
            >
              <Star className={`h-4 w-4 ${isFavorite(e.slug) ? "fill-clay-500 text-clay-500" : ""}`} />
              {t("add.favorites")}
            </button>
            <button
              type="button"
              onClick={() =>
                void shareSubstanceStory(e, emoji, color, label, t(`cat.${e.category}`))
              }
              className="inline-flex items-center justify-center gap-1 rounded-full glass px-3 py-2 text-sm font-semibold"
            >
              <Sparkles className="h-4 w-4" /> {t("share.btn")}
            </button>
            <button
              type="button"
              onClick={() =>
                void downloadSubstancePdf(e, emoji, color, label, t(`cat.${e.category}`))
              }
              className="inline-flex items-center justify-center gap-1 rounded-full glass px-3 py-2 text-sm font-semibold"
            >
              <FileDown className="h-4 w-4" /> PDF
            </button>
            <a
              href={`https://psychonautwiki.org/wiki/${encodeURIComponent(e.name.replace(/ /g, "_"))}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1 rounded-full glass px-3 py-2 text-sm font-semibold"
            >
              <ExternalLink className="h-4 w-4" /> PsychonautWiki
            </a>
            </div>
          </div>
          <p className="mt-5 text-sand-700 dark:text-sand-200 leading-relaxed">{doc.summary}</p>
          {e.doses[0] ? (
            <p className="mt-3 text-sm font-semibold text-sand-700 dark:text-sand-200">
              {t("substance.typicalDose", {
                n: e.doses[0].common,
                unit: e.doses[0].unit,
                route:
                  t(`route.${e.doses[0].route}`) === `route.${e.doses[0].route}`
                    ? e.doses[0].route
                    : t(`route.${e.doses[0].route}`),
              })}
              {" · "}
              {t("substance.durationLine", {
                onset: formatMins(curve.onset),
                peak: formatMins((curve.peakStart + curve.peakEnd) / 2),
                total: formatMins(curve.total),
              })}
            </p>
          ) : null}
          <p className="mt-2 text-[11px] font-semibold text-sand-400">
            {t("substance.wikiSource")} · psychonautwiki.org
          </p>
        </div>

        <Section title={t("substance.subjective")}>
          <p className="text-sm text-sand-700 dark:text-sand-200 leading-relaxed">{doc.subjective}</p>
        </Section>
        <Section title={t("substance.pharmacology")}>
          <p className="text-sm text-sand-700 dark:text-sand-200 leading-relaxed">{doc.pharmacology}</p>
        </Section>
        <Section title={t("substance.chemistry")}>
          <p className="text-sm text-sand-700 dark:text-sand-200 leading-relaxed">{doc.chemistry}</p>
        </Section>
        <Section title={t("substance.history")}>
          <p className="text-sm text-sand-700 dark:text-sand-200 leading-relaxed">{doc.history}</p>
        </Section>
        <Section title={t("substance.toxicity")}>
          <p className="text-sm text-sand-700 dark:text-sand-200 leading-relaxed">{doc.toxicity}</p>
        </Section>
        <Section title={t("substance.legal")}>
          <p className="text-sm text-sand-700 dark:text-sand-200 leading-relaxed">{doc.legal}</p>
        </Section>

        <Section title={t("substance.duration")} icon={<Clock className="h-5 w-5 text-clay-500" />}>
          <DurationCurve
            sub={e}
            color={color}
            amp={Math.min(0.9, doseAmplitude(raw, last?.dose, last?.unit ?? "", last?.route ?? ""))}
            className="w-full h-24"
            width={640}
            height={96}
          />
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[
              [t("substance.onset"), formatMins(curve.onset)],
              [t("substance.peak"), formatMins((curve.peakStart + curve.peakEnd) / 2)],
              [t("substance.total"), formatMins(curve.total)],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-sand-200/60 dark:bg-sand-800/60 p-3">
                <p className="text-[11px] font-semibold text-sand-500 dark:text-sand-400">
                  {label}
                </p>
                <p className="mt-1 font-heading font-bold text-sand-900 dark:text-sand-50">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t("substance.dosages")}>
          {e.doses.map((n) => (
            <div key={n.route} className="space-y-3">
              <p className="text-sm font-semibold text-sand-700 dark:text-sand-200">
                {t(`route.${n.route}`) === `route.${n.route}` ? n.route : t(`route.${n.route}`)}
              </p>
              <div className="grid grid-cols-5 gap-2">
                {DOSE_KEYS.map((s, o) => (
                  <div
                    key={s}
                    className="rounded-xl p-2 text-center"
                    style={{
                      background: `${e.color}${Math.round(((o + 1) / 5) * 96)
                        .toString(16)
                        .padStart(2, "0")}`,
                    }}
                  >
                    <p className="text-[10px] font-semibold text-white/90">{t(`dose.${s}`)}</p>
                    <p className="text-xs font-bold text-white mt-0.5">
                      {n[s] != null ? `${n[s]} ${n.unit}` : "—"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="mt-4 flex items-start gap-2 text-xs text-sand-500 dark:text-sand-400">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
            {t("substance.doseDisclaimer")}
          </p>
        </Section>

        <Section title={t("substance.effects")} icon={<Sparkles className="h-5 w-5 text-clay-500" />}>
          <div className="grid sm:grid-cols-3 gap-4">
            {(
              [
                [t("effects.good"), e.effects.positive, "good"],
                [t("effects.neutral"), e.effects.neutral, "neutral"],
                [t("effects.bad"), e.effects.negative, "bad"],
              ] as const
            ).map(([title, items, tone]) => (
              <div key={title} className="rounded-xl p-3" style={{ background: TONE[tone].bg }}>
                <p className="text-sm font-bold mb-2" style={{ color: TONE[tone].color }}>
                  {title}
                </p>
                <ul className="space-y-1 text-sm text-sand-700 dark:text-sand-200">
                  {items.map((n) => (
                    <li key={n}>• {n}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {e.neurotransmitters.length > 0 ? (
          <Section title={t("substance.neuro")} icon={<Brain className="h-5 w-5 text-clay-500" />}>
            <div className="flex flex-wrap gap-2">
              {e.neurotransmitters.map((n) => {
                const s = neurotransmitters[n];
                if (!s) return null;
                const label = t(`nt.${n}`);
                return (
                  <Link
                    key={n}
                    to="/neuro"
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-transform hover:scale-105"
                    style={{ background: `${s.color}22`, color: s.color }}
                  >
                    <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                    {label.startsWith("nt.") ? s.label : label}
                  </Link>
                );
              })}
            </div>
          </Section>
        ) : null}

        <Section title={t("substance.molecule")}>
          <Molecule name={e.name} aliases={e.aliases} />
        </Section>

        {e.interactions.dangerous.length > 0 || e.interactions.caution.length > 0 ? (
          <Section title={t("substance.interactions")} icon={<AlertTriangle className="h-5 w-5 text-clay-500" />}>
            {e.interactions.dangerous.length > 0 ? (
              <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-4">
                <p className="flex items-center gap-2 text-sm font-bold text-red-600 dark:text-red-400">
                  <AlertTriangle className="h-4 w-4" /> {t("substance.dangerous")}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                  {e.interactions.dangerous.map((n) => (
                    <li key={n}>• {translateInteraction(n, locale)}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {e.interactions.caution.length > 0 ? (
              <div className="mt-3 rounded-xl border border-amber-400/30 bg-amber-500/10 p-4">
                <p className="flex items-center gap-2 text-sm font-bold text-amber-600 dark:text-amber-400">
                  <AlertTriangle className="h-4 w-4" /> {t("substance.caution")}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
                  {e.interactions.caution.map((n) => (
                    <li key={n}>• {translateInteraction(n, locale)}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Section>
        ) : null}

        <Section title={t("substance.harmRel")}>
          <div className="grid grid-cols-4 gap-3 text-center">
            {(
              [
                [t("substance.global"), harmTotal(e)],
                [t("harm.physical"), e.harm.physical],
                [t("harm.dependence"), e.harm.dependence],
                [t("harm.social"), e.harm.social],
              ] as const
            ).map(([label, v]) => (
              <div key={label}>
                <p className="text-[11px] font-semibold text-sand-500 dark:text-sand-400">
                  {label}
                </p>
                <p className="font-heading text-2xl font-bold text-clay-500">{v}</p>
                <div className="mt-1 h-1.5 rounded-full bg-sand-200/60 dark:bg-sand-800/60 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-clay-500"
                    style={{ width: `${Math.min(100, v)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {e.riskNotes.length > 0 ? (
          <Section title={t("substance.risks")}>
            <ul className="space-y-2 text-sm text-sand-700 dark:text-sand-200">
              {e.riskNotes.map((n) => (
                <li key={n} className="flex gap-2">
                  <span className="text-clay-500">•</span>
                  {n}
                </li>
              ))}
            </ul>
          </Section>
        ) : null}
      </div>
    </div>
  );
}
