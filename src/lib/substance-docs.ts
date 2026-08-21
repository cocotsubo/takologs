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


export function substanceExtras(s: Substance, locale: Locale) {
  const fr = locale !== "en";
  const dep = s.harm.dependence;
  const tolerance = fr
    ? `Score de dépendance relatif : ${dep}/100. ${dep >= 50 ? "Tolérance et sevrage possibles — ne pas stopper brutalement un usage régulier (avis médical)." : "Tolérance souvent plus lente ; rester prudent sur la fréquence et les mélanges."}`
    : `Relative dependence score: ${dep}/100. ${dep >= 50 ? "Tolerance and withdrawal possible — do not stop regular use abruptly (seek medical advice)." : "Tolerance is often slower; still watch frequency and mixes."}`;
  const appearance = fr
    ? `Classe chimique : ${s.chemicalClass}. L’apparence (poudre, comprimé, gélule, buvard, liquide) ne dit rien de la composition. Un test réactif oriente, une analyse labo confirme.`
    : `Chemical class: ${s.chemicalClass}. Appearance (powder, tablet, capsule, blotter, liquid) says nothing about composition. A reagent test hints; lab analysis confirms.`;
  const roas = s.doses
    .map((d) =>
      fr
        ? `${d.route} — seuil ${d.threshold} ${d.unit}, courant ${d.common}, fort ${d.strong}, lourd ${d.heavy}`
        : `${d.route} — threshold ${d.threshold} ${d.unit}, common ${d.common}, strong ${d.strong}, heavy ${d.heavy}`,
    )
    .join("\n");
  const hrBy: Record<string, [string, string]> = {
    stimulant: [
      "Eau par petites gorgées, pauses, pas de redose en boucle, surveiller cœur et chaleur. Un sitter si haute dose.",
      "Sip water, take breaks, no redose loops, watch heart and heat. A sitter at high doses.",
    ],
    psychedelic: [
      "Set & setting, sitter de confiance, dose basse, pas d’IMAO ni de lithium. Prévoir le lendemain calme.",
      "Set & setting, trusted sitter, low dose, no MAOIs or lithium. Keep the next day quiet.",
    ],
    empathogen: [
      "Espacer les prises (plusieurs semaines), s’hydrater sans forcer, électrolytes, pas de redose tardive.",
      "Space doses (weeks), hydrate without overdoing it, electrolytes, no late redoses.",
    ],
    depressant: [
      "Jamais d’alcool ni d’opioïdes en mélange. Ne pas conduire. Sevrage benzo/GABAergique : avis médical.",
      "Never mix with alcohol or opioids. Do not drive. GABA withdrawal: medical advice.",
    ],
    opioid: [
      "Risque de dépression respiratoire, surtout en mélange. Naloxone si possible. Tester une petite dose.",
      "Respiratory depression risk, especially mixed. Naloxone if possible. Test a small dose.",
    ],
    dissociative: [
      "Chutes et « k-hole » : endroit sûr, sitter. Espacer pour la vessie (kétamine).",
      "Falls and k-hole: safe space, sitter. Space doses for bladder (ketamine).",
    ],
    cannabinoid: [
      "Commencer bas, surtout edibles (délai). Anxiété : environnement calme, poivre noir / CBD selon les cas.",
      "Start low, especially edibles (delay). Anxiety: calm setting; black pepper / CBD in some cases.",
    ],
    medication: [
      "Traitement prescrit : ne pas modifier la posologie seul. Interactions (IMAO, alcool, QT) à vérifier avec un professionnel.",
      "Prescribed medicine: do not change the dose alone. Check interactions (MAOIs, alcohol, QT) with a professional.",
    ],
  };
  const pair = hrBy[String(s.category)] ?? [
    "Dose basse, une substance à la fois, sitter, tester le produit si possible.",
    "Low dose, one substance at a time, sitter, test the product if you can.",
  ];
  const after = s.duration.afterMin
    ? fr
      ? `Après-coup typique ${s.duration.afterMin[0]}–${s.duration.afterMin[1]} min. Prévoir repos, nourriture, hydratation.`
      : `Typical afterglow ${s.duration.afterMin[0]}–${s.duration.afterMin[1]} min. Plan rest, food, hydration.`
    : fr
      ? "L’après-coup dépend de la dose, du sommeil et des mélanges."
      : "After-effects depend on dose, sleep and mixes.";
  return { tolerance, appearance, roas, hr: fr ? pair[0] : pair[1], after };
}
