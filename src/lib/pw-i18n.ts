import type { Locale } from "@/lib/i18n";

const PHRASES: [RegExp, string][] = [
  [/non-addictive with a low abuse potential/gi, "non addictif, faible potentiel d’abus"],
  [/mildly addictive with a low potential for abuse/gi, "légèrement addictif, faible potentiel d’abus"],
  [/moderately addictive with a high potential for abuse/gi, "modérément addictif, fort potentiel d’abus"],
  [/extremely addictive with a high potential for abuse/gi, "extrêmement addictif, fort potentiel d’abus"],
  [/highly addictive with a high potential for abuse/gi, "très addictif, fort potentiel d’abus"],
  [/addictive with a moderate potential for abuse/gi, "addictif, potentiel d’abus modéré"],
  [/not habit-forming/gi, "ne crée pas d’habitude"],
  [/extremely low toxicity relative to dose/gi, "toxicité extrêmement faible par rapport à la dose"],
  [/low toxicity relative to dose/gi, "faible toxicité par rapport à la dose"],
  [/exact toxic dosage is unknown/gi, "dose toxique exacte inconnue"],
  [/toxic dose is unknown/gi, "dose toxique inconnue"],
  [/almost immediately after ingestion/gi, "presque immédiatement après l’ingestion"],
  [/immediately after ingestion/gi, "immédiatement après l’ingestion"],
  [/with prolonged and repeated use/gi, "avec un usage prolongé et répété"],
  [/with repeated use/gi, "avec un usage répété"],
  [/1 month/gi, "1 mois"],
  [/2\.5 months/gi, "2,5 mois"],
  [/5 days/gi, "5 jours"],
  [/serotonin releasers?/gi, "libérateurs de sérotonine"],
];

const EXTRACT_PHRASES: [RegExp, string][] = [
  [
    /Lysergic acid diethylamide \(also known as Lysergide, LSD-25, LSD, L, Lucy, and Acid\)/gi,
    "Le diéthylamide de l’acide lysergique (aussi appelé lysergide, LSD-25, LSD, L, Lucy et acide)",
  ],
  [
    /is a classical psychedelic substance of the lysergamide class/gi,
    "est une substance psychédélique classique de la classe des lysergamides",
  ],
  [
    /It is perhaps the most researched and culturally influential psychedelic substance, as well as the prototypal lysergamide/gi,
    "C’est sans doute la substance psychédélique la plus étudiée et la plus influente culturellement, ainsi que le lysergamide prototypique",
  ],
  [
    /The mechanism of action is not fully known, although serotonin binding activity is thought to be involved/gi,
    "Le mécanisme d’action n’est pas entièrement connu, bien que la liaison à la sérotonine soit probablement impliquée",
  ],
  [
    /The psychoactive effects of LSD were first discovered in 1943 by Albert Hofmann at Sandoz Laboratories \(Switzerland\)/gi,
    "Les effets psychoactifs du LSD ont été découverts en 1943 par Albert Hofmann aux laboratoires Sandoz (Suisse)",
  ],
  [
    /In the 1950s, it was widely distributed by Sandoz as an experimental drug for psychotherapy and scientific research/gi,
    "Dans les années 1950, il a été largement distribué par Sandoz comme médicament expérimental pour la psychothérapie et la recherche scientifique",
  ],
  [
    /during this era, it provoked considerable interest from the intellectual establishment/gi,
    "à cette époque, il a suscité un vif intérêt de l’establishment intellectuel",
  ],
  [
    /and was even the subject of a clandestine investigation by the U\.S\. Central Intelligence Agency \(CIA\) for potential applications in "mind control"/gi,
    "et a même fait l’objet d’une enquête clandestine de la CIA pour d’éventuelles applications de « contrôle mental »",
  ],
  [
    /Recreational LSD use became a central, highly-visible aspect of the 1960s youth counterculture movement, eventually paving the way for international prohibition in 1971/gi,
    "L’usage récréatif du LSD est devenu un aspect central et très visible de la contre-culture des années 1960, ouvrant la voie à une prohibition internationale en 1971",
  ],
  [/is a /g, " est un "],
  [/is an /g, " est un "],
];

const SHORT_WORDS: [RegExp, string][] = [
  [/\bpsychedelics\b/gi, "psychédéliques"],
  [/\bpsychedelic\b/gi, "psychédélique"],
  [/\bstimulants\b/gi, "stimulants"],
  [/\bstimulant\b/gi, "stimulant"],
  [/\bentactogens\b/gi, "entactogènes"],
  [/\bentactogen\b/gi, "entactogène"],
  [/\bempathogens\b/gi, "empathogènes"],
  [/\bdissociatives\b/gi, "dissociatifs"],
  [/\bdissociative\b/gi, "dissociatif"],
  [/\bdepressants\b/gi, "dépresseurs"],
  [/\bopioid(?:s)?\b/gi, "opioïde"],
  [/\bcannabinoid(?:s)?\b/gi, "cannabinoïde"],
  [/\bbenzodiazepines\b/gi, "benzodiazépines"],
  [/\bamphetamine(?:s)?\b/gi, "amphétamine"],
  [/\btryptamine(?:s)?\b/gi, "tryptamine"],
  [/\bphenethylamine(?:s)?\b/gi, "phényléthylamine"],
  [/\blysergamides\b/gi, "lysermamides"],
  [/\blysergamide\b/gi, "lysermamide"],
  [/\bcathinones\b/gi, "cathinones"],
  [/\bcathinone\b/gi, "cathinone"],
  [/\btricyclic antidepressants\b/gi, "antidépresseurs tricycliques"],
  [/\bdeliriants\b/gi, "delirants"],
  [/\bsubstituted\b/gi, "substitué"],
  [/\bMAOIs?\b/g, "IMAO"],
  [/\bSSRIs?\b/g, "ISRS"],
  [/\bLithium\b/g, "lithium"],
  [/\bAlcohol\b/g, "alcool"],
  [/\bTramadol\b/g, "tramadol"],
];

const ROA: Record<string, string> = {
  oral: "orale",
  sublingual: "sublinguale",
  buccal: "buccale",
  insufflated: "insufflée",
  insufflation: "insufflée",
  inhaled: "inhalée",
  inhalation: "inhalée",
  smoked: "fumée",
  vaporized: "vaporisée",
  vapourized: "vaporisée",
  intravenous: "intraveineuse",
  intramuscular: "intramusculaire",
  subcutaneous: "sous-cutanée",
  rectal: "rectale",
  transdermal: "transdermique",
  topical: "topique",
  plugged: "rectale",
  intranasal: "insufflée",
};

const UNITS: Record<string, string> = {
  seconds: "secondes",
  second: "seconde",
  minutes: "minutes",
  minute: "minute",
  hours: "heures",
  hour: "heure",
  days: "jours",
  day: "jour",
  weeks: "semaines",
  months: "mois",
};

function apply(text: string, pairs: [RegExp, string][]) {
  let out = text;
  for (const [re, to] of pairs) out = out.replace(re, to);
  return out.replace(/\s{2,}/g, " ").replace(/\s+([,.;:])/g, "$1").trim();
}

export function pwLocaleText(text: string | null | undefined, locale: Locale): string {
  if (!text) return "";
  if (locale !== "fr") return text;
  return apply(apply(text, PHRASES), SHORT_WORDS);
}

export function pwExtract(text: string | null | undefined, locale: Locale): string {
  if (!text) return "";
  if (locale !== "fr") return text;
  return apply(apply(apply(text, EXTRACT_PHRASES), PHRASES), SHORT_WORDS);
}

export function pwRoaName(name: string, locale: Locale): string {
  if (locale !== "fr") return name;
  return ROA[name.toLowerCase()] ?? name;
}

export function pwUnit(unit: string | null | undefined, locale: Locale): string {
  if (!unit) return "";
  if (locale !== "fr") return unit;
  return UNITS[unit.toLowerCase()] ?? unit;
}

export function pwList(items: string[], locale: Locale): string[] {
  return items.map((x) => pwLocaleText(x, locale));
}

export const SECTION_EMOJI: Record<string, { emoji: string; color: string }> = {
  extract: { emoji: "📖", color: "#c4a06a" },
  names: { emoji: "🏷️", color: "#d4a24a" },
  class: { emoji: "🧪", color: "#5aa8c4" },
  roa: { emoji: "💉", color: "#c45a6a" },
  tolerance: { emoji: "📉", color: "#6a8ac4" },
  addiction: { emoji: "⛓️", color: "#8a6ac4" },
  toxicity: { emoji: "☠️", color: "#c45a5a" },
  interactions: { emoji: "⚡", color: "#c47a3a" },
  reagents: { emoji: "🧫", color: "#3aa87a" },
  photos: { emoji: "📷", color: "#6a6a8a" },
  subjective: { emoji: "🌈", color: "#c45a9a" },
  pharmacology: { emoji: "🧬", color: "#5a9ac4" },
  chemistry: { emoji: "⚗️", color: "#5ab48a" },
  history: { emoji: "📜", color: "#c49a5a" },
  legal: { emoji: "⚖️", color: "#7a7a90" },
  appearance: { emoji: "👁️", color: "#8a6ac4" },
  hr: { emoji: "🛟", color: "#3a9a7a" },
  afterglow: { emoji: "🌅", color: "#e08a4a" },
  duration: { emoji: "⏱️", color: "#c9704f" },
  dosages: { emoji: "💊", color: "#c45a6a" },
  effects: { emoji: "✨", color: "#c4a06a" },
  neuro: { emoji: "🧠", color: "#6a8ac4" },
  molecule: { emoji: "⬡", color: "#5a8a9a" },
  harmRel: { emoji: "🛟", color: "#3a9a7a" },
  risks: { emoji: "🚨", color: "#c44a4a" },
};
