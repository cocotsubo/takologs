/** Canonical ingestion routes, aligned with i18n keys. */

export const CANONICAL_ROUTES = [
  "Orale",
  "Insufflée",
  "Fumée",
  "Vaporisée",
  "Inhalée",
  "Sublinguale",
  "Buccale",
  "Intraveineuse",
  "Intramusculaire",
  "Sous-cutanée",
  "Rectale",
  "Transdermique",
] as const;

export type CanonicalRoute = (typeof CANONICAL_ROUTES)[number];

const ALIASES: Record<string, CanonicalRoute> = {
  oral: "Orale",
  orale: "Orale",
  po: "Orale",
  insufflated: "Insufflée",
  insufflee: "Insufflée",
  insufflée: "Insufflée",
  intranasale: "Insufflée",
  nasal: "Insufflée",
  snort: "Insufflée",
  snorted: "Insufflée",
  smoked: "Fumée",
  fumee: "Fumée",
  fumée: "Fumée",
  smoke: "Fumée",
  vaporized: "Vaporisée",
  vaporised: "Vaporisée",
  vaporisee: "Vaporisée",
  vaporisée: "Vaporisée",
  vaped: "Vaporisée",
  inhaled: "Inhalée",
  inhalee: "Inhalée",
  inhalée: "Inhalée",
  inhalation: "Inhalée",
  sublingual: "Sublinguale",
  buccal: "Buccale",
  intravenous: "Intraveineuse",
  iv: "Intraveineuse",
  "i.v": "Intraveineuse",
  "i.v.": "Intraveineuse",
  iuv: "Intraveineuse",
  intramuscular: "Intramusculaire",
  im: "Intramusculaire",
  "i.m": "Intramusculaire",
  subcutaneous: "Sous-cutanée",
  sc: "Sous-cutanée",
  "s.c": "Sous-cutanée",
  rectal: "Rectale",
  rectale: "Rectale",
  boof: "Rectale",
  transdermal: "Transdermique",
  patch: "Transdermique",
};

function key(raw: unknown): string {
  return String(raw ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9.]+/g, "")
    .trim();
}

export function canonicalRoute(raw: unknown, fallback: CanonicalRoute = "Orale"): CanonicalRoute {
  const k = key(raw);
  if (!k) return fallback;
  if (ALIASES[k]) return ALIASES[k];
  if (k === "iv" || k.startsWith("iv") || k.includes("intravein") || k.includes("intravenous")) {
    return "Intraveineuse";
  }
  if (k.includes("intramusc")) return "Intramusculaire";
  if (k.includes("insuffl") || k.includes("intranas")) return "Insufflée";
  const hit = CANONICAL_ROUTES.find((r) => key(r) === k);
  return hit ?? fallback;
}
