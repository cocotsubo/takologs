import { findSubstanceByName, type Substance } from "@/lib/substances";

const LETHAL =
  /fentanyl|carfentan|nitazene|sufentanil|alfentanil|remifentanil|ohmefentanyl|furanylfentanyl|ocfentanil|isotonitazene|protonitazene|metonitazene/i;

export function isLethalLowDose(nameOrSlug: string, sub?: Substance | undefined) {
  const blob = `${nameOrSlug} ${sub?.slug ?? ""} ${sub?.name ?? ""} ${(sub?.aliases ?? []).join(" ")}`;
  return LETHAL.test(blob);
}

export function lethalFromQuery(q: string) {
  return LETHAL.test(q);
}

export function lookUpLethal(name: string) {
  const sub = findSubstanceByName(name);
  return isLethalLowDose(name, sub);
}
