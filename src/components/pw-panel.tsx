import { ExternalLink, FlaskConical, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Section } from "@/components/ui-bits";
import { useI18n } from "@/lib/i18n";
import {
  fetchPwSubstance,
  formatPwDose,
  formatPwRange,
  type PwData,
} from "@/lib/psychonautwiki";
import { pwExtract, pwList, pwLocaleText, pwRoaName, SECTION_EMOJI } from "@/lib/pw-i18n";
import type { Substance } from "@/lib/substances";

export function PwPanel({ sub }: { sub: Substance }) {
  const { t, locale } = useI18n();
  const [data, setData] = useState<PwData | null>(null);
  const [state, setState] = useState<"load" | "ok" | "fail">("load");

  useEffect(() => {
    let live = true;
    setState("load");
    void fetchPwSubstance(sub)
      .then((row) => {
        if (!live) return;
        setData(row);
        setState(row ? "ok" : "fail");
      })
      .catch(() => {
        if (!live) return;
        setData(null);
        setState("fail");
      });
    return () => {
      live = false;
    };
  }, [sub.slug]);

  if (state === "load") {
    return (
      <div className="glass-strong rounded-2xl p-4 flex items-center gap-2 text-sm text-sand-600 dark:text-sand-300">
        <Loader2 className="h-4 w-4 animate-spin text-clay-500" /> {t("pw.loading")}
      </div>
    );
  }
  if (state === "fail" || !data) {
    return <p className="text-xs text-sand-500">{t("pw.fail")}</p>;
  }

  const extract = pwExtract(data.extract, locale);
  const chemical = pwList(data.chemical, locale);
  const psycho = pwList(data.psychoactive, locale);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[11px] font-semibold text-clay-600 dark:text-clay-400">
          <FlaskConical className="h-3.5 w-3.5" /> {t("pw.live")}
        </span>
        <a
          href={data.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-clay-500"
        >
          {t("pw.wiki")} <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {extract ? (
        <Section title={t("pw.extract")} emoji={SECTION_EMOJI.extract.emoji} color={SECTION_EMOJI.extract.color}>
          <p className="text-sm text-sand-700 dark:text-sand-200 leading-relaxed">{extract}</p>
        </Section>
      ) : null}

      {data.commonNames.length > 0 ? (
        <Section title={t("pw.names")} emoji={SECTION_EMOJI.names.emoji} color={SECTION_EMOJI.names.color}>
          <p className="text-sm text-sand-700 dark:text-sand-200">{data.commonNames.join(" · ")}</p>
        </Section>
      ) : null}

      {chemical.length || psycho.length ? (
        <Section title={t("pw.class")} emoji={SECTION_EMOJI.class.emoji} color={SECTION_EMOJI.class.color}>
          <p className="text-sm text-sand-700 dark:text-sand-200">
            {chemical.length ? (
              <>
                <span className="font-semibold">{t("pw.chem")}:</span> {chemical.join(", ")}
              </>
            ) : null}
            {chemical.length && psycho.length ? " · " : null}
            {psycho.length ? (
              <>
                <span className="font-semibold">{t("pw.psycho")}:</span> {psycho.join(", ")}
              </>
            ) : null}
          </p>
          {data.systematicName ? (
            <p className="mt-1 text-xs text-sand-500 font-mono">{data.systematicName}</p>
          ) : null}
        </Section>
      ) : null}

      {data.roas.length ? (
        <Section title={t("pw.roa")} emoji={SECTION_EMOJI.roa.emoji} color={SECTION_EMOJI.roa.color}>
          <div className="space-y-4">
            {data.roas.map((r) => {
              const u = r.dose?.units ?? "";
              return (
                <div key={r.name}>
                  <p className="text-sm font-semibold capitalize text-sand-800 dark:text-sand-100">
                    {pwRoaName(r.name, locale)}
                  </p>
                  <div className="mt-2 grid grid-cols-5 gap-1.5 text-center">
                    {(
                      [
                        [t("pw.threshold"), formatPwDose(r.dose?.threshold, u, locale)],
                        [t("pw.light"), formatPwRange(r.dose?.light, u, locale)],
                        [t("pw.common"), formatPwRange(r.dose?.common, u, locale)],
                        [t("pw.strong"), formatPwRange(r.dose?.strong, u, locale)],
                        [t("pw.heavy"), formatPwDose(r.dose?.heavy, u, locale)],
                      ] as const
                    ).map(([lab, val]) => (
                      <div key={lab} className="rounded-xl glass p-2">
                        <p className="text-[10px] font-semibold text-sand-500">{lab}</p>
                        <p className="text-[11px] font-bold text-sand-900 dark:text-sand-50 mt-0.5">{val}</p>
                      </div>
                    ))}
                  </div>
                  {r.duration ? (
                    <div className="mt-2 grid grid-cols-3 sm:grid-cols-6 gap-1.5 text-center">
                      {(
                        [
                          ["onset", r.duration.onset],
                          ["comeup", r.duration.comeup],
                          ["peak", r.duration.peak],
                          ["offset", r.duration.offset],
                          ["total", r.duration.total],
                          ["afterglow", r.duration.afterglow],
                        ] as const
                      ).map(([k, val]) =>
                        val ? (
                          <div key={k} className="rounded-xl glass p-2">
                            <p className="text-[10px] font-semibold text-sand-500">{t(`pw.${k}`)}</p>
                            <p className="text-[11px] font-bold text-sand-900 dark:text-sand-50 mt-0.5">
                              {formatPwRange(val, undefined, locale)}
                            </p>
                          </div>
                        ) : null,
                      )}
                    </div>
                  ) : null}
                  {r.bioavailability?.min != null ? (
                    <p className="mt-1 text-[11px] text-sand-500">
                      {t("pw.bio")}:{" "}
                      {formatPwRange(
                        { min: r.bioavailability.min, max: r.bioavailability.max, units: "%" },
                        "%",
                        locale,
                      )}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Section>
      ) : null}

      {data.tolerance.full || data.tolerance.half || data.tolerance.zero || data.addictionPotential ? (
        <Section title={t("pw.tolerance")} emoji={SECTION_EMOJI.tolerance.emoji} color={SECTION_EMOJI.tolerance.color}>
          <ul className="text-sm text-sand-700 dark:text-sand-200 space-y-1">
            {data.addictionPotential ? (
              <li>
                <span className="font-semibold">{t("pw.addiction")}:</span> {pwLocaleText(data.addictionPotential, locale)}
              </li>
            ) : null}
            {data.tolerance.full ? (
              <li>
                <span className="font-semibold">{t("pw.full")}:</span> {pwLocaleText(data.tolerance.full, locale)}
              </li>
            ) : null}
            {data.tolerance.half ? (
              <li>
                <span className="font-semibold">{t("pw.half")}:</span> {pwLocaleText(data.tolerance.half, locale)}
              </li>
            ) : null}
            {data.tolerance.zero ? (
              <li>
                <span className="font-semibold">{t("pw.zero")}:</span> {pwLocaleText(data.tolerance.zero, locale)}
              </li>
            ) : null}
            {data.crossTolerances.length ? (
              <li>
                <span className="font-semibold">{t("pw.cross")}:</span> {pwList(data.crossTolerances, locale).join(", ")}
              </li>
            ) : null}
          </ul>
        </Section>
      ) : null}

      {data.toxicity.length ? (
        <Section title={t("pw.toxicity")} emoji={SECTION_EMOJI.toxicity.emoji} color={SECTION_EMOJI.toxicity.color}>
          <ul className="text-sm text-sand-700 dark:text-sand-200 space-y-1">
            {pwList(data.toxicity, locale).map((x) => (
              <li key={x}>• {x}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {data.dangerous.length || data.unsafe.length || data.uncertain.length ? (
        <Section title={t("pw.interactions")} emoji={SECTION_EMOJI.interactions.emoji} color={SECTION_EMOJI.interactions.color}>
          {data.dangerous.length ? (
            <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-3">
              <p className="text-xs font-bold text-red-600 dark:text-red-400">{t("pw.dangerous")}</p>
              <p className="text-sm text-red-700 dark:text-red-300 mt-1">{pwList(data.dangerous, locale).join(" · ")}</p>
            </div>
          ) : null}
          {data.unsafe.length ? (
            <div className="mt-2 rounded-xl border border-amber-400/30 bg-amber-500/10 p-3">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-400">{t("pw.unsafe")}</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 mt-1">{pwList(data.unsafe, locale).join(" · ")}</p>
            </div>
          ) : null}
          {data.uncertain.length ? (
            <div className="mt-2 rounded-xl glass p-3">
              <p className="text-xs font-bold text-sand-600 dark:text-sand-300">{t("pw.uncertain")}</p>
              <p className="text-sm text-sand-700 dark:text-sand-200 mt-1">{pwList(data.uncertain, locale).join(" · ")}</p>
            </div>
          ) : null}
        </Section>
      ) : null}

      {data.reagents.length ? (
        <Section title={t("pw.reagents")} emoji={SECTION_EMOJI.reagents.emoji} color={SECTION_EMOJI.reagents.color}>
          <div className="flex flex-wrap gap-2">
            {data.reagents.map((r) => (
              <span
                key={r.reagent.name}
                className="rounded-full glass px-3 py-1 text-xs font-semibold text-sand-800 dark:text-sand-100"
                title={pwLocaleText(r.description, locale)}
              >
                {r.reagent.shortName || r.reagent.name}
                {r.startColors[0]?.name ? ` · ${r.startColors[0].name}` : ""}
              </span>
            ))}
          </div>
        </Section>
      ) : null}

      {data.images.length ? (
        <Section title={t("pw.photos")} emoji={SECTION_EMOJI.photos.emoji} color={SECTION_EMOJI.photos.color}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {data.images.map((img) => (
              <a key={img.image} href={img.image} target="_blank" rel="noreferrer" className="block">
                <img
                  src={img.thumb || img.image}
                  alt={data.name}
                  className="h-24 w-full object-cover rounded-xl"
                  loading="lazy"
                  crossOrigin="anonymous"
                />
              </a>
            ))}
          </div>
        </Section>
      ) : null}

      <p className="text-[11px] text-sand-400">{t("pw.source")}</p>
    </div>
  );
}
