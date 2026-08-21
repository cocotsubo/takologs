import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PasswordInput } from "@/components/password-input";
import { TakoLogo } from "@/components/tako-logo";
import { applyResetToken } from "@/lib/password-reset";
import { useI18n } from "@/lib/i18n";

type Search = { token?: string };

export const Route = createFileRoute("/reset")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    token: typeof s.token === "string" ? s.token : "",
  }),
  component: ResetPage,
});

export function ResetPage() {
  const { t } = useI18n();
  const { token } = useSearch({ strict: false }) as Search;
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!token) return;
    const r = applyResetToken(token);
    if (r.ok) {
      setDone(true);
      const id = window.setTimeout(() => void navigate({ to: "/login" }), 1400);
      return () => window.clearTimeout(id);
    }
  }, [token, navigate]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      setError(t("login.resetExpired"));
      return;
    }
    setBusy(true);
    const r = applyResetToken(token, password);
    setBusy(false);
    if (!r.ok) {
      setError(r.error === "password" ? t("login.errPassword") : t("login.resetExpired"));
      return;
    }
    void navigate({ to: "/login" });
  };

  return (
    <div className="px-4 py-16 pb-24 flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md">
        <div className="text-center">
          <TakoLogo className="h-16 w-16 mx-auto logo-tinted" />
          <h1 className="mt-4 font-heading text-3xl font-bold text-sand-900 dark:text-sand-50">
            {t("login.reset")}
          </h1>
          <p className="mt-2 text-sm text-sand-600 dark:text-sand-300">
            {done ? t("login.resetSent") : t("login.resetConfirm")}
          </p>
        </div>
        {done ? null : (
        <form onSubmit={submit} className="mt-8 glass-strong rounded-3xl p-6 space-y-4">
          <PasswordInput
            value={password}
            onChange={setPassword}
            placeholder={t("login.passwordPh")}
            required
            minLength={6}
            autoComplete="new-password"
          />
          {error ? (
            <p className="rounded-xl bg-red-500/15 px-4 py-3 text-sm text-red-700 dark:text-red-300">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={busy || !token}
            className="w-full rounded-xl bg-clay-500 text-white py-3 text-sm font-bold disabled:opacity-60"
          >
            {t("login.reset")}
          </button>
          <Link to="/login" className="block text-center text-sm text-clay-500">
            {t("login.switchLogin")}
          </Link>
        </form>
        )}
      </div>
    </div>
  );
}
