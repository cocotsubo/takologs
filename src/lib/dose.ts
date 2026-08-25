import { DOSE_KEYS, type Dose, type Substance } from "@/lib/substances";
import { canonicalRoute } from "@/lib/routes";

export type DoseClass = (typeof DOSE_KEYS)[number];

export const DOSE_CLASS_COLOR: Record<DoseClass, string> = {
  threshold: "#8a8a7a",
  light: "#3d8a5f",
  common: "#4f7fc9",
  strong: "#c99a2e",
  heavy: "#c94f4f",
};

export function doseTableFor(
  sub: Substance | undefined,
  route: string,
  unit: string,
): Dose | undefined {
  if (!sub?.doses.length) return undefined;
  const r = canonicalRoute(route);
  return (
    sub.doses.find((d) => canonicalRoute(d.route) === r && d.unit === unit) ??
    sub.doses.find((d) => canonicalRoute(d.route) === r) ??
    sub.doses.find((d) => d.unit === unit) ??
    sub.doses[0]
  );
}

export function classifyDose(
  sub: Substance | undefined,
  dose: number | null | undefined,
  unit: string,
  route: string,
): DoseClass | null {
  if (dose == null || !Number.isFinite(dose) || dose <= 0) return null;
  const table = doseTableFor(sub, route, unit);
  if (!table) return null;
  if (dose >= table.heavy) return "heavy";
  if (dose >= table.strong) return "strong";
  if (dose >= table.common) return "common";
  if (dose >= table.light) return "light";
  if (dose >= table.threshold) return "threshold";
  return null;
}

export function exceedsHeavy(
  sub: Substance | undefined,
  dose: number | null | undefined,
  unit: string,
  route: string,
) {
  const table = doseTableFor(sub, route, unit);
  if (!table || dose == null) return false;
  return dose >= table.heavy;
}

export function doseAmplitude(
  sub: Substance | undefined,
  dose: number | null | undefined,
  unit: string,
  route: string,
): number {
  if (dose == null || !Number.isFinite(dose) || dose <= 0) return 0.45;
  const table = doseTableFor(sub, route, unit);
  if (!table) return 0.45;
  const ref = table.heavy || table.strong || table.common || dose;
  return Math.max(0.12, dose / ref);
}

export function fitAmplitudes(amps: number[], peak = 0.9) {
  const max = Math.max(...amps, 0.0001);
  const k = peak / max;
  return amps.map((a) => a * k);
}
