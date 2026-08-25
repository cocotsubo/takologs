import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/ui-bits";
import { useI18n } from "@/lib/i18n";
import { harmTotal, substances, type Substance } from "@/lib/substances";
import { localizedName } from "@/lib/substance-i18n";

export const Route = createFileRoute("/harm-scale")({ component: HarmPage });

type SortKey = "total" | "physical" | "dependence" | "social";

function valueOf(s: Substance, k: SortKey) {
  return k === "total" ? harmTotal(s) : s.harm[k];
}

export function HarmPage() {
  const { t, locale } = useI18n();
  const [key, setKey] = useState<SortKey>("total");
  const [dir, setDir] = useState<"desc" | "asc">("desc");
  const list = useMemo(() => {
    return [...substances].sort((a, b) => {
      const d = valueOf(a, key);
      const u = valueOf(b, key);
      return dir === "desc" ? u - d : d - u;
    });
  }, [key, dir]);

  const labels: Record<SortKey, string> = {
    total: t("harm.total"),
    physical: t("harm.physical"),
    dependence: t("harm.dependence"),
    social: t("harm.social"),
  };

  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <PageHero
          kicker={t("harm.kicker")}
          icon={<BarChart3 className="h-3.5 w-3.5" />}
          title={t("harm.title")}
          subtitle={t("harm.subtitle")}
        />
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {(Object.keys(labels) as SortKey[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => {
                if (key === k) setDir((d) => (d === "desc" ? "asc" : "desc"));
                else {
                  setKey(k);
                  setDir("desc");
                }
              }}
              className={`rounded-full px-3.5 py-1.5 text-sm font-semibold ${
                key === k ? "bg-clay-500 text-white" : "glass text-sand-700 dark:text-sand-200"
              }`}
            >
              {labels[k]} {key === k ? (dir === "desc" ? "↓" : "↑") : ""}
            </button>
          ))}
        </div>
        <div className="mt-6 space-y-1.5">
          {list.slice(0, 80).map((s, i) => {
            const v = valueOf(s, key);
            return (
              <Link
                key={s.slug}
                to="/substance/$slug"
                params={{ slug: s.slug }}
                className="glass rounded-xl px-3 py-2.5 flex items-center gap-3 hover:scale-[1.01] transition-transform"
              >
                <span className="w-6 text-xs font-bold text-sand-400">{i + 1}</span>
                <span className="text-lg w-8 text-center">{s.emoji}</span>
                <span className="flex-1 min-w-0 font-semibold text-sand-900 dark:text-sand-50 truncate">
                  {localizedName(s, locale, s.name)}
                </span>
                <div className="w-28 sm:w-40 h-2 rounded-full bg-sand-200/60 dark:bg-sand-800/60 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${Math.min(100, v)}%`, background: s.color }}
                  />
                </div>
                <span className="w-8 text-right font-heading font-bold text-clay-500">{v}</span>
              </Link>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs text-sand-400 dark:text-sand-500">
          Inspiré des travaux de Nutt et al. sur les dommages relatifs. Les scores TakoLogs
          sont indicatifs.
        </p>
      </div>
    </div>
  );
}
