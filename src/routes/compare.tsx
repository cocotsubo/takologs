import { createFileRoute } from "@tanstack/react-router";
import { GitCompare, Plus, X } from "lucide-react";
import { useMemo, useState } from "react";
import { MultiCurve, PageHero } from "@/components/ui-bits";
import { useI18n } from "@/lib/i18n";
import { localizedName, localizedSubstance } from "@/lib/substance-i18n";
import {
  DOSE_KEYS,
  durationCurve,
  formatMins,
  getSubstance,
  harmTotal,
  searchSubstances,
  substances,
} from "@/lib/substances";

export const Route = createFileRoute("/compare")({ component: ComparePage });

export function ComparePage() {
  const { t, locale } = useI18n();
  const [ids, setIds] = useState<string[]>(["lsd", "mdma"]);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const selected = ids.map(getSubstance).filter(Boolean);
  const candidates = useMemo(
    () =>
      searchSubstances(q).filter((u) => !ids.includes(u.slug)).slice(0, 12),
    [q, ids],
  );
  const toggle = (slug: string) =>
    setIds((h) =>
      h.includes(slug) ? h.filter((y) => y !== slug) : h.length < 4 ? [...h, slug] : h,
    );

  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <PageHero
          kicker={t("compare.kicker")}
          icon={<GitCompare className="h-3.5 w-3.5" />}
          title={t("compare.title")}
          subtitle={t("compare.subtitle")}
        />
        <div className="mt-8 flex flex-wrap gap-2 justify-center items-center">
          {selected.map((u) => (
            <div
              key={u!.slug}
              className="flex items-center gap-2 rounded-full glass pl-3 pr-1.5 py-1.5"
            >
              <span className="h-2 w-2 rounded-full" style={{ background: u!.color }} />
              <span className="text-sm font-semibold text-sand-800 dark:text-sand-100">
                {localizedName(u!, locale, u!.name)}
              </span>
              <button
                type="button"
                onClick={() => toggle(u!.slug)}
                className="rounded-full p-1 hover:bg-sand-300/40 dark:hover:bg-sand-700/40"
              >
                <X className="h-3.5 w-3.5 text-sand-500" />
              </button>
            </div>
          ))}
          {ids.length < 4 ? (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-full bg-clay-500 text-white px-3 py-1.5 text-sm font-semibold hover:scale-105 transition-transform"
            >
              <Plus className="h-3.5 w-3.5" /> {t("compare.add")}
            </button>
          ) : null}
        </div>
        {open ? (
          <div className="mt-4 mx-auto max-w-md glass-strong rounded-2xl p-3">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("substances.searchPh")}
              className="w-full bg-transparent outline-none text-sm px-2 py-2 text-sand-900 dark:text-sand-50"
              autoFocus
            />
            <div className="max-h-56 overflow-y-auto mt-1">
              {candidates.map((u) => (
                <button
                  key={u.slug}
                  type="button"
                  onClick={() => {
                    toggle(u.slug);
                    setOpen(false);
                    setQ("");
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-sand-200/50 dark:hover:bg-sand-800/40 text-sm font-semibold text-sand-800 dark:text-sand-100"
                >
                  {u.emoji} {localizedName(u, locale, u.name)}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {selected.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center mt-8">
            <p className="text-sand-600 dark:text-sand-300">
              {t("compare.need")}
            </p>
          </div>
        ) : (
          <>
            <div className="mt-8 glass rounded-2xl p-5 sm:p-6 animate-fade-up">
              <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50 mb-4">
                Courbes d'expérience
              </h2>
              <MultiCurve subs={selected as NonNullable<(typeof selected)[number]>[]} />
              <div className="mt-3 flex flex-wrap gap-3 justify-center">
                {selected.map((u) => (
                  <div
                    key={u!.slug}
                    className="flex items-center gap-1.5 text-xs font-semibold text-sand-600 dark:text-sand-300"
                  >
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: u!.color }} />
                    {u!.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-3 text-sand-500 dark:text-sand-400 font-semibold">
                      Critère
                    </th>
                    {selected.map((u) => (
                      <th
                        key={u!.slug}
                        className="p-3 text-sand-900 dark:text-sand-50 font-heading"
                      >
                        {u!.emoji} {u!.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-300/30 dark:divide-sand-700/30">
                  <tr>
                    <td className="p-3 font-semibold text-sand-600 dark:text-sand-300">{t("compare.class")}</td>
                    {selected.map((u) => (
                      <td key={u!.slug} className="p-3">
                        {localizedSubstance(u!, locale).psychoactiveClass}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-sand-600 dark:text-sand-300">
                      {t("substance.total")}
                    </td>
                    {selected.map((u) => (
                      <td key={u!.slug} className="p-3">
                        {formatMins(durationCurve(u!).total)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-sand-600 dark:text-sand-300">
                      {t("dose.common")}
                    </td>
                    {selected.map((u) => {
                      const d = u!.doses[0];
                      return (
                        <td key={u!.slug} className="p-3">
                          {d ? `${d.common} ${d.unit}` : "—"}
                        </td>
                      );
                    })}
                  </tr>
                  {DOSE_KEYS.map((k) => (
                    <tr key={k}>
                      <td className="p-3 font-semibold text-sand-600 dark:text-sand-300">
                        {t(`dose.${k}`)}
                      </td>
                      {selected.map((u) => {
                        const d = u!.doses[0];
                        return (
                          <td key={u!.slug} className="p-3">
                            {d ? `${d[k]} ${d.unit}` : "—"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr>
                    <td className="p-3 font-semibold text-sand-600 dark:text-sand-300">
                      Score dommages
                    </td>
                    {selected.map((u) => (
                      <td key={u!.slug} className="p-3 font-heading font-bold text-clay-500">
                        {harmTotal(u!)}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-xs text-sand-400">
              {substances.length} substances dans la base — jusqu'à 4 en comparaison.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
