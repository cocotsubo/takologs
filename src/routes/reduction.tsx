import { createFileRoute } from "@tanstack/react-router";
import {
  Droplets,
  FlaskConical,
  HeartHandshake,
  Phone,
  ShieldAlert,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/ui-bits";
import { useI18n } from "@/lib/i18n";
import resourcesFr from "@/data/resources.json";
import resourcesEn from "@/data/resources-en.json";

export const Route = createFileRoute("/reduction")({ component: ReductionPage });

const TIP_ICONS = [FlaskConical, Droplets, Users, ShieldAlert];

export function ReductionPage() {
  const { t, locale } = useI18n();
  const resources = locale === "en" ? resourcesEn : resourcesFr;
  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <PageHero
          kicker={t("reduction.kicker")}
          icon={<HeartHandshake className="h-3.5 w-3.5" />}
          title={t("reduction.title")}
          subtitle={t("reduction.subtitle")}
        />
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-red-500/15 to-clay-500/15 border border-red-400/30 p-5 animate-fade-up">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-500 p-3">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="font-heading text-lg font-bold text-red-700 dark:text-red-300">
                {t("reduction.emergency")}
              </p>
              <p className="text-sm text-red-700 dark:text-red-300">
                {locale === "fr" ? t("reduction.emergencyFr") : t("reduction.emergencyEn")}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {resources.tips.map((t, i) => {
            const Icon = TIP_ICONS[i] ?? ShieldAlert;
            return (
              <div
                key={t.title}
                style={{ animationDelay: `${i * 60}ms` }}
                className="glass card-hover rounded-2xl p-5 animate-fade-up"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-clay-500/15 p-2.5 text-clay-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-sand-900 dark:text-sand-50">
                    {t.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-sand-600 dark:text-sand-300 leading-relaxed">
                  {t.text}
                </p>
              </div>
            );
          })}
        </div>
        {resources.groups.map((g) => (
          <div key={g.title} className="mt-8">
            <h2 className="font-heading text-xl font-bold text-sand-900 dark:text-sand-50 mb-4">
              {g.title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {g.items.map((a, n) => (
                <div
                  key={a.name}
                  style={{ animationDelay: `${n * 30}ms` }}
                  className="glass card-hover rounded-2xl p-4 animate-fade-up flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-bold text-sand-900 dark:text-sand-50 truncate">
                      {a.name}
                    </h3>
                    <p className="text-sm text-sand-600 dark:text-sand-300">{a.desc}</p>
                    {"hours" in a && a.hours ? (
                      <p className="text-xs text-sand-400 mt-1">{a.hours}</p>
                    ) : null}
                  </div>
                  <div className="shrink-0 text-right">
                    {"phone" in a && a.phone ? (
                      <a
                        href={`tel:${String(a.phone).replace(/\s/g, "")}`}
                        className="block font-heading font-bold text-clay-500"
                      >
                        {a.phone}
                      </a>
                    ) : null}
                    {"url" in a && a.url ? (
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-sand-500 hover:text-clay-500"
                      >
                        {t("reduction.site")}
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="mt-10 text-center text-xs text-sand-400 dark:text-sand-500">
          {t("reduction.disclaimer")}
        </p>
      </div>
    </div>
  );
}
