import type { Locale } from "@/lib/i18n";
import { durationCurve, formatMins, type Substance } from "@/lib/substances";
import pwDocs from "@/data/pw-docs.json";

export type SubstanceDoc = {
  summary: string;
  subjective: string;
  pharmacology: string;
  chemistry: string;
  history: string;
  toxicity: string;
  legal: string;
};

const DOCS = pwDocs as Record<string, { fr: SubstanceDoc; en: SubstanceDoc }>;

export function substanceDoc(s: Substance, locale: Locale): SubstanceDoc {
  const row = DOCS[s.slug]?.[locale] ?? DOCS[s.slug]?.fr;
  if (row) return row;
  const d0 = s.doses[0];
  const dose = d0
    ? locale === "en"
      ? `Common ${d0.route.toLowerCase()} dose around ${d0.common} ${d0.unit}.`
      : `Dose ${d0.route.toLowerCase()} courante autour de ${d0.common} ${d0.unit}.`
    : "";
  return {
    summary: s.summary,
    subjective: (s.effects.positive.slice(0, 4).join(", ") || s.summary) + (dose ? ` ${dose}` : ""),
    pharmacology: `${s.psychoactiveClass} · ${s.neurotransmitters.join(", ")}`,
    chemistry: `${s.chemicalClass}`,
    history: locale === "en" ? "See PsychonautWiki for history." : "Voir PsychonautWiki pour l’histoire.",
    toxicity: s.riskNotes.slice(0, 3).join(" "),
    legal:
      locale === "en"
        ? "Status varies by country. This is not legal advice."
        : "Statut variable selon le pays. Ceci n’est pas un conseil juridique.",
  };
}

function range(pair: [number, number], locale: Locale) {
  const a = formatMins(pair[0]);
  const b = formatMins(pair[1]);
  return a === b ? a : locale === "en" ? `${a}–${b}` : `${a} – ${b}`;
}

export function substanceLongCopy(s: Substance, locale: Locale): string {
  const d = substanceDoc(s, locale);
  const curve = durationCurve(s);
  const dur =
    locale === "en"
      ? `Onset ~${formatMins(curve.onset)}, peak ~${formatMins((curve.peakStart + curve.peakEnd) / 2)}, total ~${formatMins(curve.total)} (PW onset ${range(s.duration.onsetMin, locale)}, total ${range(s.duration.totalMin, locale)}).`
      : `Montée ~${formatMins(curve.onset)}, pic ~${formatMins((curve.peakStart + curve.peakEnd) / 2)}, durée ~${formatMins(curve.total)} (PW montée ${range(s.duration.onsetMin, locale)}, total ${range(s.duration.totalMin, locale)}).`;
  return [d.summary, d.subjective, d.pharmacology, dur, d.toxicity].filter(Boolean).join(" ");
}

export function substanceStorySummary(s: Substance, locale: Locale): string {
  const d = substanceDoc(s, locale);
  return [d.summary, d.subjective].join(" ");
}
