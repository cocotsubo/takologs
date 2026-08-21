import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui-bits";
import { CHANGELOG } from "@/lib/changelog";
import { useI18n } from "@/lib/i18n";
import { APP_VERSION } from "@/lib/version";

export const Route = createFileRoute("/changelog")({ component: ChangelogPage });

export function ChangelogPage() {
  const { t } = useI18n();
  const list = [...CHANGELOG].reverse();
  return (
    <div className="px-4 py-10 pb-28">
      <div className="mx-auto max-w-3xl space-y-4">
        <PageHero
          kicker={`v${APP_VERSION}`}
          icon={<Sparkles className="h-3.5 w-3.5" />}
          title={t("changelog.title")}
          subtitle={t("changelog.subtitle")}
        />
        {list.map((c) => (
          <article key={c.v} className="glass-strong rounded-2xl p-5">
            <p className="text-[11px] font-heading font-semibold text-clay-500">
              v{c.v} · {c.date}
            </p>
            <h2 className="font-heading text-xl font-bold text-sand-900 dark:text-sand-50 mt-1">
              {c.title}
            </h2>
            <ul className="mt-2 space-y-1 text-sm text-sand-700 dark:text-sand-200">
              {c.items.map((it) => (
                <li key={it}>• {it}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
