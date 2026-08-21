import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { LogIn, NotebookPen } from "lucide-react";
import { LogEditor } from "@/components/log-editor";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/logs/$id")({ component: LogDetail });

export function LogDetail() {
  const { id } = useParams({ strict: false }) as { id: string };
  const { user, isPending } = useCurrentUserState();
  const { t } = useI18n();
  if (isPending) {
    return (
      <div className="px-4 py-20 text-center text-sand-500">{t("common.loading")}</div>
    );
  }
  if (!user) {
    return (
      <div className="px-4 py-16 pb-24 text-center">
        <div className="mx-auto max-w-md glass-strong rounded-3xl p-8">
          <NotebookPen className="h-12 w-12 text-clay-500 mx-auto" />
          <h1 className="mt-4 font-heading text-2xl font-bold text-sand-900 dark:text-sand-50">
            {t("login.privateJournal")}
          </h1>
          <p className="mt-2 text-sm text-sand-600 dark:text-sand-300">
            {t("logs.signInBody")}
          </p>
          <Link
            to="/login"
            search={{ next: `/logs/${id}` }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-5 py-2.5 text-sm font-semibold"
          >
            {t("common.signIn")} <LogIn className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }
  return <LogEditor id={id} />;
}
