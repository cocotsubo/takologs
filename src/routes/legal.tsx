import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { PageHero } from "@/components/ui-bits";
import { useI18n } from "@/lib/i18n";
import { APP_VERSION } from "@/lib/version";

export const Route = createFileRoute("/legal")({ component: LegalPage });

export function LegalPage() {
  const { t } = useI18n();
  return (
    <div className="px-4 py-10 pb-28">
      <div className="mx-auto max-w-3xl space-y-6">
        <PageHero
          kicker={`TakoLogs v${APP_VERSION}`}
          icon={<Shield className="h-3.5 w-3.5" />}
          title={t("legal.title")}
          subtitle={t("legal.subtitle")}
        />
        <section id="mentions" className="glass-strong rounded-2xl p-5 space-y-3 text-sm leading-relaxed text-sand-700 dark:text-sand-200">
          <h2 className="font-heading text-xl font-bold text-sand-900 dark:text-sand-50">
            {t("legal.mentionsTitle")}
          </h2>
          <p>{t("legal.mentions1")}</p>
          <p>{t("legal.mentions2")}</p>
          <p>{t("legal.mentions3")}</p>
          <p>{t("legal.mentions4")}</p>
          <p>{t("legal.mentions5")}</p>
        </section>
        <section id="privacy" className="glass-strong rounded-2xl p-5 space-y-3 text-sm leading-relaxed text-sand-700 dark:text-sand-200">
          <h2 className="font-heading text-xl font-bold text-sand-900 dark:text-sand-50">
            {t("legal.privacyTitle")}
          </h2>
          <p>{t("legal.privacy1")}</p>
          <p>{t("legal.privacy2")}</p>
          <p>{t("legal.privacy3")}</p>
          <p>{t("legal.privacy4")}</p>
          <p>{t("legal.privacy5")}</p>
          <p>{t("legal.privacy6")}</p>
        </section>
        <section id="cookies" className="glass-strong rounded-2xl p-5 space-y-3 text-sm leading-relaxed text-sand-700 dark:text-sand-200">
          <h2 className="font-heading text-xl font-bold text-sand-900 dark:text-sand-50">
            {t("cookies.policyTitle")}
          </h2>
          <p>{t("cookies.p1")}</p>
          <p>{t("cookies.p2")}</p>
          <p>{t("cookies.p3")}</p>
        </section>
      </div>
    </div>
  );
}
