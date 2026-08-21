import { createFileRoute } from "@tanstack/react-router";
import { Bell } from "lucide-react";
import { PageHero } from "@/components/ui-bits";
import { useI18n } from "@/lib/i18n";
import { usePrefs } from "@/lib/prefs";
import { emojiForSubstanceText } from "@/lib/substance-label";
import alerts from "@/data/alerts.json";

type Alert = {
  id: string;
  date: string;
  lab: string;
  city: string;
  expected: string;
  found: string;
  level: string;
  summary: string;
  url: string;
};

const TONE: Record<string, string> = {
  critical: "bg-red-500/20 text-red-700 dark:text-red-300",
  high: "bg-orange-500/20 text-orange-800 dark:text-orange-200",
  warn: "bg-amber-500/20 text-amber-800 dark:text-amber-200",
  info: "bg-clay-500/15 text-clay-600 dark:text-clay-400",
};

export const Route = createFileRoute("/alerts")({ component: AlertsPage });

export function AlertsPage() {
  const { t, dateTag } = useI18n();
  const { resolveEmoji } = usePrefs();
  const list = (alerts as Alert[]).slice().sort((a, b) => b.date.localeCompare(a.date));
  const label = (s: string) => emojiForSubstanceText(s, resolveEmoji);
  return (
    <div className="px-4 py-10 pb-28">
      <div className="mx-auto max-w-3xl space-y-5">
        <PageHero
          kicker={t("nav.alerts")}
          icon={<Bell className="h-3.5 w-3.5" />}
          title={t("alerts.title")}
          subtitle={t("alerts.subtitle")}
        />
        {list.length === 0 ? (
          <p className="text-sm text-sand-500">{t("alerts.empty")}</p>
        ) : (
          <div className="space-y-3">
            {list.map((a) => (
              <a
                key={a.id}
                href={a.url}
                target="_blank"
                rel="noreferrer"
                className="block glass-strong rounded-2xl p-4 card-hover"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-heading font-bold ${TONE[a.level] ?? TONE.info}`}>
                    {a.lab}
                  </span>
                  <span className="text-[11px] text-sand-500">
                    {new Date(a.date).toLocaleDateString(dateTag, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                    {a.city ? ` · ${a.city}` : ""}
                  </span>
                </div>
                <p className="mt-2 font-heading font-bold text-sand-900 dark:text-sand-50">
                  {label(a.expected)} → {label(a.found)}
                </p>
                <p className="mt-1 text-sm text-sand-600 dark:text-sand-300">{a.summary}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
