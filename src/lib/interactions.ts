import {
  categories,
  findSubstanceByName,
  normName,
  type Substance,
} from "./substances";

export type PairWarning = {
  a: string;
  b: string;
  other?: string;
  level: "dangerous" | "caution";
  note: string;
};

function mentionMatchesSub(mention: string, sub: Substance) {
  const a = normName(mention);
  return [sub.name, ...sub.aliases, categories[sub.category]?.label].some(
    (s) => s && a.includes(normName(s)),
  );
}

function mentionMatchesName(mention: string, name: string) {
  const a = normName(mention);
  const n = normName(name);
  if (!n || n.length < 3) return false;
  return a.includes(n);
}

export function pairInteraction(
  nameA: string,
  nameB: string,
): { other: string; level: "dangerous" | "caution"; note: string } | null {
  if (normName(nameA) === normName(nameB)) return null;
  const a = findSubstanceByName(nameA);
  const b = findSubstanceByName(nameB);
  let found: { other: string; level: "dangerous" | "caution"; note: string } | null =
    null;
  const set = (
    level: "dangerous" | "caution",
    note: string,
    other: string,
  ) => {
    if (found?.level === "dangerous") return;
    if (!found || level === "dangerous") found = { other, level, note };
  };
  if (a) {
    a.interactions.dangerous.forEach((note) => {
      if (b ? mentionMatchesSub(note, b) : mentionMatchesName(note, nameB))
        set("dangerous", note, nameB);
    });
    a.interactions.caution.forEach((note) => {
      if (b ? mentionMatchesSub(note, b) : mentionMatchesName(note, nameB))
        set("caution", note, nameB);
    });
  }
  if (b) {
    b.interactions.dangerous.forEach((note) => {
      if (a ? mentionMatchesSub(note, a) : mentionMatchesName(note, nameA))
        set("dangerous", note, nameB);
    });
    b.interactions.caution.forEach((note) => {
      if (a ? mentionMatchesSub(note, a) : mentionMatchesName(note, nameA))
        set("caution", note, nameB);
    });
  }
  return found;
}

const CLASS_RULES: { a: string; b: string; level: "dangerous" | "caution"; note: string }[] = [
  {
    a: "opioid",
    b: "depressant",
    level: "dangerous",
    note: "Opioïde + dépresseur : risque élevé de dépression respiratoire.",
  },
  {
    a: "opioid",
    b: "opioid",
    level: "dangerous",
    note: "Deux opioïdes : risque d'overdose et de dépression respiratoire.",
  },
  {
    a: "depressant",
    b: "depressant",
    level: "dangerous",
    note: "Deux dépresseurs (GABAergiques, alcool…) : risque de perte de conscience.",
  },
  {
    a: "stimulant",
    b: "depressant",
    level: "caution",
    note: "Stimulant + dépresseur : le stimulant masque la sédation, overdose au rebond.",
  },
  {
    a: "stimulant",
    b: "stimulant",
    level: "caution",
    note: "Deux stimulants : charge cardiovasculaire et risque de surchauffe.",
  },
  {
    a: "empathogen",
    b: "stimulant",
    level: "caution",
    note: "Empathogène + stimulant : hyperthermie, tension, hyponatrémie.",
  },
  {
    a: "psychedelic",
    b: "stimulant",
    level: "caution",
    note: "Psychédélique + stimulant : anxiété, tension, bad trip plus probable.",
  },
  {
    a: "dissociative",
    b: "depressant",
    level: "dangerous",
    note: "Dissociatif + dépresseur : risque de blackout et d'étouffement.",
  },
];

function classPair(
  nameA: string,
  nameB: string,
): { other: string; level: "dangerous" | "caution"; note: string } | null {
  const a = findSubstanceByName(nameA);
  const b = findSubstanceByName(nameB);
  if (!a || !b) return null;
  let found: { other: string; level: "dangerous" | "caution"; note: string } | null = null;
  for (const r of CLASS_RULES) {
    const match =
      (a.category === r.a && b.category === r.b) ||
      (a.category === r.b && b.category === r.a);
    if (!match) continue;
    if (!found || r.level === "dangerous") {
      found = { other: nameB, level: r.level, note: r.note };
    }
  }
  return found;
}

export function warningsAgainst(name: string, others: string[]): PairWarning[] {
  const seen = new Set<string>();
  const out: PairWarning[] = [];
  for (const other of others) {
    const key = normName(other);
    if (!key || seen.has(key) || key === normName(name)) continue;
    seen.add(key);
    const w = pairInteraction(name, other) ?? classPair(name, other);
    if (w) out.push({ a: name, b: other, ...w });
  }
  return out.sort((x, y) =>
    x.level === y.level ? 0 : x.level === "dangerous" ? -1 : 1,
  );
}

export function comboWarnings(names: string[]): PairWarning[] {
  const unique = Array.from(
    new Set(names.map((n) => n.trim()).filter(Boolean)),
  );
  const seen = new Set<string>();
  const out: PairWarning[] = [];
  for (let i = 0; i < unique.length; i++) {
    for (let j = i + 1; j < unique.length; j++) {
      const a = unique[i];
      const b = unique[j];
      const key = [normName(a), normName(b)].sort().join("|");
      if (seen.has(key)) continue;
      seen.add(key);
      const w = pairInteraction(a, b) ?? classPair(a, b);
      if (w) out.push({ a, b, level: w.level, note: w.note });
    }
  }
  return out.sort((x, y) =>
    x.level === y.level ? 0 : x.level === "dangerous" ? -1 : 1,
  );
}
