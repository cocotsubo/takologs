import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { ArrowRight, Mail, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import {
  GROK_PROVIDERS,
  authClient,
  authEnabled,
  signIn,
} from "@/lib/auth/client";
import { TakoLogo } from "@/components/tako-logo";
import { PasswordInput } from "@/components/password-input";
import { HumanCaptcha } from "@/components/human-captcha";
import { requestPasswordReset } from "@/lib/password-reset";
import { sendWelcomeEmail } from "@/lib/welcome-mail";
import { useI18n } from "@/lib/i18n";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

type LoginSearch = { next?: string };

export const Route = createFileRoute("/login")({
  validateSearch: (s: Record<string, unknown>): LoginSearch => ({
    next:
      typeof s.next === "string" && s.next.startsWith("/") && !s.next.startsWith("//")
        ? s.next
        : undefined,
  }),
  component: Login,
});

function mapAuthError(message: string | undefined, t: (k: string) => string) {
  const e = (message ?? "").toLowerCase();
  if (!e) return t("login.errGeneric");
  if (e.includes("invalid") || e.includes("credential")) return t("login.errCreds");
  if (e.includes("already registered") || e.includes("already been registered"))
    return t("login.errExists");
  if (e.includes("password")) return t("login.errPassword");
  if (e.includes("rate")) return t("login.errRate");
  return message || t("login.errGeneric");
}

export function Login() {
  const { t, locale } = useI18n();
  const { next } = useSearch({ strict: false }) as LoginSearch;
  const dest = next || "/logs";
  const { user, isPending } = useCurrentUserState();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup" | "forgot">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [human, setHuman] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  useEffect(() => {
    if (!isPending && user) void navigate({ to: dest });
  }, [isPending, user, dest, navigate]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (mode === "signup" && !human) {
      setError(t("login.captchaNeed"));
      return;
    }
    const trap = new FormData(e.currentTarget).get("company");
    if (typeof trap === "string" && trap.trim()) return;
    setBusy(true);
    try {
      if (mode === "forgot") {
        await requestPasswordReset({
          email,
          locale: locale === "en" ? "en" : "fr",
          kind: "reset",
        });
        setSent(true);
        return;
      }
      if (mode === "signup") {
        const name = email.split("@")[0] || "TakoLogs";
        const { error: err } = await authClient.signUp.email({
          email,
          password,
          name,
        });
        if (err) {
          setError(mapAuthError(err.message, t));
          return;
        }
        try {
          const { loadUsers, saveUsers } = await import("@/lib/user-store");
          const users = loadUsers();
          const u = users.find((x) => x.email === email.trim().toLowerCase());
          if (u) {
            u.newsletter = newsletter;
            saveUsers(users);
          }
        } catch {
          /* preview auth has no local user store */
        }
        void sendWelcomeEmail({
          email,
          locale: locale === "en" ? "en" : "fr",
          newsletter,
        });
        const { error: signErr } = await authClient.signIn.email({
          email,
          password,
        });
        if (signErr) {
          setError(mapAuthError(signErr.message, t));
          return;
        }
      } else {
        const { error: err } = await authClient.signIn.email({
          email,
          password,
        });
        if (err) {
          setError(mapAuthError(err.message, t));
          return;
        }
      }
      void navigate({ to: dest as never });
    } catch (err) {
      setError(err instanceof Error ? mapAuthError(err.message, t) : t("login.errUnexpected"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="px-4 py-16 pb-24 flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md">
        <div className="text-center animate-fade-up">
          <TakoLogo className="h-16 w-16 mx-auto logo-tinted" />
          <h1 className="mt-4 font-heading text-3xl font-bold text-sand-900 dark:text-sand-50">
            {mode === "forgot"
              ? t("login.reset")
              : mode === "login"
                ? t("login.login")
                : t("login.signup")}
          </h1>
          <p className="mt-2 text-sm text-sand-600 dark:text-sand-300">
            {mode === "forgot"
              ? t("login.resetBody")
              : mode === "login"
                ? t("login.loginBody")
                : t("login.signupBody")}
          </p>
        </div>

        {authEnabled ? (
          <>
            {sent && mode === "forgot" ? (
              <div className="mt-8 glass-strong rounded-3xl p-6 text-center space-y-3">
                <p className="text-sm text-sand-700 dark:text-sand-200">{t("login.resetSent")}</p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setMode("login");
                  }}
                  className="text-sm font-semibold text-clay-500"
                >
                  {t("login.switchLogin")}
                </button>
              </div>
            ) : (
            <form
              onSubmit={(e) => void submit(e)}
              className="relative z-20 mt-8 glass-strong rounded-3xl p-6 space-y-4 animate-fade-up pointer-events-auto"
            >
              <label className="block text-xs font-semibold text-sand-600 dark:text-sand-300">
                {t("login.email")}
                <div className="mt-1.5 flex items-center gap-2 rounded-xl glass px-3 py-3">
                  <Mail className="h-4 w-4 text-sand-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("login.emailPh")}
                    className="w-full bg-transparent outline-none text-base text-sand-900 dark:text-sand-50 placeholder:text-sand-400"
                    autoComplete="email"
                  />
                </div>
              </label>
              {mode !== "forgot" ? (
              <label className="block text-xs font-semibold text-sand-600 dark:text-sand-300">
                {t("login.password")}
                <PasswordInput
                  value={password}
                  onChange={setPassword}
                  placeholder={t("login.passwordPh")}
                  required
                  minLength={6}
                  autoComplete={
                    mode === "login" ? "current-password" : "new-password"
                  }
                />
              </label>
              ) : null}
              {mode === "signup" ? <HumanCaptcha onValid={setHuman} /> : null}
              {mode === "signup" ? (
                <label className="flex items-start gap-2 text-sm text-sand-700 dark:text-sand-200">
                  <input
                    type="checkbox"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-clay-500"
                  />
                  <span>{t("login.newsletter")}</span>
                </label>
              ) : null}
              {error ? (
                <div className="rounded-xl bg-red-500/15 border border-red-400/30 px-4 py-3 text-sm text-red-700 dark:text-red-300">
                  {error}
                </div>
              ) : null}
              <button
                type="submit"
                disabled={busy}
                className="relative z-30 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-clay-500 text-white py-3 text-sm font-bold shadow-lg shadow-clay-500/25 hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-60 pointer-events-auto"
              >
                {busy
                  ? t("common.loading")
                  : mode === "login"
                    ? t("login.submitLogin")
                    : mode === "forgot"
                      ? t("login.reset")
                      : t("login.submitSignup")}
                {!busy ? <ArrowRight className="h-4 w-4" /> : null}
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode(mode === "login" ? "signup" : "login");
                  setError(null);
                  setHuman(false);
                }}
                className="w-full text-center text-sm text-sand-600 dark:text-sand-300 hover:text-clay-500 transition-colors"
              >
                {mode === "login" ? t("login.switchSignup") : t("login.switchLogin")}
              </button>
              {mode === "login" ? (
                <button
                  type="button"
                  onClick={() => {
                    setMode("forgot");
                    setError(null);
                    setBusy(false);
                  }}
                  className="relative z-30 w-full text-center text-sm font-semibold text-clay-500 pointer-events-auto py-2"
                >
                  {t("login.forgot")}
                </button>
              ) : mode === "forgot" ? (
                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    setError(null);
                    setBusy(false);
                  }}
                  className="w-full text-center text-sm text-sand-600 dark:text-sand-300"
                >
                  {t("login.switchLogin")}
                </button>
              ) : null}
            </form>
            )}

            {GROK_PROVIDERS.length > 0 ? (
            <>
            <div className="mt-5 flex items-center gap-3 text-xs text-sand-400">
              <span className="flex-1 h-px bg-sand-300/50 dark:bg-sand-700/50" />
              {t("login.or")}
              <span className="flex-1 h-px bg-sand-300/50 dark:bg-sand-700/50" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {GROK_PROVIDERS.map((p) => (
                <button
                  key={p.providerId}
                  type="button"
                  onClick={() => void signIn(p.providerId, { callbackURL: dest })}
                  className="rounded-xl glass py-2.5 text-sm font-semibold text-sand-800 dark:text-sand-100 hover:scale-[1.02] transition-transform"
                >
                  {p.label}
                </button>
              ))}
            </div>
            </>
            ) : null}
          </>
        ) : (
          <p className="mt-8 text-center text-sm text-sand-500">
            {t("login.disabled")}
          </p>
        )}

        <p className="mt-4 text-center text-xs text-sand-400 dark:text-sand-500">
          <Shield className="inline h-3 w-3" /> {t("login.private")}
        </p>
      </div>
    </div>
  );
}
