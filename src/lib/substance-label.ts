import { findSubstanceByName, substances } from "@/lib/substances";

export function emojiForSubstanceText(
  text: string,
  resolve?: (slug: string | undefined, name: string, fallback: string) => string,
): string {
  const raw = text.trim();
  if (!raw) return raw;
  const chunks = raw.split(/\s*(?:\+|\/|,|→|->)\s*/).filter(Boolean);
  const painted = chunks.map((chunk) => {
    const doseFree = chunk.replace(/\b\d+(?:[.,]\d+)?\s*(mg|µg|ug|g|ml|µg)\b/gi, "").trim();
    const sub =
      findSubstanceByName(doseFree) ||
      findSubstanceByName(chunk) ||
      substances.find(
        (s) =>
          chunk.toLowerCase().includes(s.name.toLowerCase()) ||
          s.aliases.some((a) => chunk.toLowerCase().includes(a.toLowerCase())),
      );
    if (!sub) return chunk;
    const em = resolve ? resolve(sub.slug, sub.name, sub.emoji) : sub.emoji;
    return em && !chunk.includes(em) ? `${em} ${chunk}` : chunk;
  });
  if (raw.includes("→")) return painted.join(" → ");
  if (raw.includes("+")) return painted.join(" + ");
  if (raw.includes("/")) return painted.join(" / ");
  return painted.join(", ");
}
