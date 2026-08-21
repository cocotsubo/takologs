import enCopy from "@/data/substance-en.json";
import type { Substance } from "@/lib/substances";
import type { Locale } from "@/lib/i18n";

type EnCopy = {
  name: string;
  psychoactiveClass: string;
  chemicalClass: string;
  summary: string;
  effects: { positive: string[]; neutral: string[]; negative: string[] };
  riskNotes: string[];
  aliases: string[];
};

const EN = enCopy as unknown as Record<string, EnCopy>;

export function localizedSubstance(s: Substance, locale: Locale): Substance {
  if (locale !== "en") return s;
  const e = EN[s.slug];
  if (!e) return s;
  return {
    ...s,
    name: e.name || s.name,
    psychoactiveClass: e.psychoactiveClass || s.psychoactiveClass,
    chemicalClass: e.chemicalClass || s.chemicalClass,
    summary: e.summary || s.summary,
    effects: e.effects?.positive?.length ? e.effects : s.effects,
    riskNotes: e.riskNotes?.length ? e.riskNotes : s.riskNotes,
    aliases: Array.from(new Set([...(e.aliases || []), ...s.aliases])),
  };
}

export function localizedName(s: Substance | undefined, locale: Locale, fallback: string) {
  if (!s) return fallback;
  if (locale !== "en") return s.name;
  return EN[s.slug]?.name || s.name;
}

export function displaySubstanceName(
  s: Substance,
  locale: Locale,
  custom?: string,
) {
  if (custom && custom.trim() && custom !== s.name) return custom;
  return localizedName(s, locale, s.name);
}
