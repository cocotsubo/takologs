import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bell,
  Camera,
  Download,
  Globe,
  LogIn,
  LogOut,
  Moon,
  Palette,
  Sparkles,
  Sun,
  SunMoon,
  Upload,
  UserRound,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { EmojiPicker } from "@/components/emoji-picker";
import { PasswordInput } from "@/components/password-input";
import { PageHero } from "@/components/ui-bits";
import { loadMailConfig, saveMailConfig, DEFAULT_MAIL_FROM } from "@/lib/mail-config";
import { loadXaiKey, saveXaiKey } from "@/lib/xai-config";
import { renderResetEmail, resetSubject } from "@/lib/reset-mail";
import { authEnabled, signOut, authClient } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { useI18n, type LangPref } from "@/lib/i18n";
import { loadJournal, importJournalDump } from "@/lib/journal-api";
import { experiencesToCsv, INGESTION_COLORS, type Experience } from "@/lib/journal";
import { normalizeJournalImport } from "@/lib/pw-import";
import { usePrefs } from "@/lib/prefs";
import { notifyEnabled, requestNotify, sendTestNotify, setNotifyEnabled } from "@/lib/notify";
import { ACCENT_PRESETS, useAccent, useTheme } from "@/lib/theme";
import { findSubstanceByName, getSubstance, searchSubstances } from "@/lib/substances";

export const Route = createFileRoute("/profile")({ component: ProfilePage });

export function ProfilePage() {
  const { t, pref, setPref, locale } = useI18n();
  const { hue, setHue, reset } = useAccent();
  const { pref: themePref, setPref: setTheme } = useTheme();
  const { user } = useCurrentUserState();
  const {
    emojis,
    setEmoji,
    clearEmojis,
    displayName,
    setDisplayName,
    reduceMotion,
    setReduceMotion,
    favorites,
    toggleFavorite,
    resolveEmoji,
    resolveColor,
    setColor,
    colors,
    aliases,
    setAlias,
    resolveName,
    avatar,
    setAvatar,
  } = usePrefs();
  const [msg, setMsg] = useState<string | null>(null);
  const [signingOut, setSigningOut] = useState(false);
  const [pw, setPw] = useState({ current: "", next: "" });
  const [notifyOn, setNotifyOn] = useState(() =>
    typeof window === "undefined" ? false : notifyEnabled(),
  );
  const [emailEdit, setEmailEdit] = useState("");
  const [mailCfg, setMailCfg] = useState(() =>
    typeof window === "undefined"
      ? { apiKey: "", from: DEFAULT_MAIL_FROM }
      : loadMailConfig(),
  );
  const [mailTo, setMailTo] = useState("");
  const [mailBusy, setMailBusy] = useState(false);
  const [xaiKey, setXaiKey] = useState(() =>
    typeof window === "undefined" ? "" : loadXaiKey(),
  );
  const [skinQ, setSkinQ] = useState("");
  const [skinPick, setSkinPick] = useState<string>("");
  const [emojiQ, setEmojiQ] = useState("");
  const [emojiPick, setEmojiPick] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!mailTo && user?.primaryEmail) setMailTo(user.primaryEmail);
  }, [user, mailTo]);

  const sendTestMail = () => {
    const to = (mailTo || user?.primaryEmail || "").trim();
    saveMailConfig(mailCfg);
    if (!mailCfg.apiKey.startsWith("re_")) {
      setMsg(t("accountExtra.resendNeed"));
      return;
    }
    if (!to.includes("@")) {
      setMsg(t("login.emailPh"));
      return;
    }
    setMailBusy(true);
    setMsg(null);
    void import("@/lib/mail-api")
      .then(({ sendAppMail }) =>
        sendAppMail({
          data: {
            to,
            subject: resetSubject(locale === "en" ? "en" : "fr", "reset"),
            html: renderResetEmail({
              locale: locale === "en" ? "en" : "fr",
              link: `${window.location.origin}${window.location.pathname}#/reset?token=test`,
              kind: "reset",
            }),
            apiKey: mailCfg.apiKey,
            from: mailCfg.from || DEFAULT_MAIL_FROM,
          },
        }),
      )
      .then((r) => {
        setMsg(
          r.ok
            ? t("accountExtra.resendTestOk")
            : `${t("accountExtra.resendFail")}${r.error ? ` (${r.error})` : ""}`,
        );
      })
      .finally(() => setMailBusy(false));
  };

  const emojiEntries = Object.entries(emojis).filter(([, v]) => v);

  const exportJournal = async () => {
    try {
      const data = await loadJournal();
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `takologs-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setMsg(t("login.privateBody"));
    }
  };

  const exportCsv = async () => {
    try {
      const data = await loadJournal();
      const csv = experiencesToCsv(data.experiences);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `takologs-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setMsg(t("login.privateBody"));
    }
  };

  const importJournal = async (file: File) => {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as unknown;
      const experiences = normalizeJournalImport(parsed);
      const res = await importJournalDump({ data: { experiences } });
      setMsg(t("profile.importOk", { n: res.imported }));
    } catch {
      setMsg(t("login.errGeneric"));
    }
  };

  return (
    <div className="px-4 py-10 pb-28">
      <div className="mx-auto max-w-2xl space-y-6">
        <PageHero
          kicker={t("nav.profile")}
          icon={<UserRound className="h-3.5 w-3.5" />}
          title={t("profile.title")}
          subtitle={t("profile.subtitle")}
        />

        <Link
          to="/admin"
          className="glass-strong rounded-2xl p-4 flex items-center justify-between gap-3 hover:scale-[1.01] transition-transform"
        >
          <span>
            <span className="font-heading font-bold text-sand-900 dark:text-sand-50 block">{t("admin.title")}</span>
            <span className="text-xs text-sand-500">{t("admin.subtitle")}</span>
          </span>
          <span className="text-clay-500 text-sm font-semibold">→</span>
        </Link>

        {msg ? (
          <p className="relative z-50 rounded-2xl bg-clay-500/15 text-clay-600 dark:text-clay-400 px-4 py-3 text-sm font-semibold">
            {msg}
          </p>
        ) : null}

        <form
          className="relative z-50 rounded-2xl p-5 space-y-3 bg-sand-50 dark:bg-sand-900 isolate"
          onSubmit={(e) => {
            e.preventDefault();
            sendTestMail();
          }}
        >
          <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">
            {t("accountExtra.resendTitle")}
          </h2>
          <p className="text-xs text-sand-500 dark:text-sand-400">
            {t("accountExtra.resendHint")}{" "}
            <a
              href="https://resend.com/api-keys"
              target="_blank"
              rel="noreferrer"
              className="text-clay-500 font-semibold"
            >
              resend.com/api-keys
            </a>
          </p>
          <PasswordInput
            value={mailCfg.apiKey}
            onChange={(v) => {
              const next = { ...mailCfg, apiKey: v };
              setMailCfg(next);
              saveMailConfig(next);
            }}
            placeholder="re_…"
            autoComplete="off"
          />
          <input
            value={mailCfg.from}
            onChange={(e) => {
              const next = { ...mailCfg, from: e.target.value };
              setMailCfg(next);
              saveMailConfig(next);
            }}
            placeholder={t("accountExtra.resendFrom")}
            className="relative z-50 w-full rounded-xl px-3 py-3 text-base outline-none bg-sand-100 dark:bg-sand-800 text-sand-900 dark:text-sand-50"
          />
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            value={mailTo}
            onChange={(e) => setMailTo(e.target.value)}
            placeholder={user?.primaryEmail || t("login.emailPh")}
            className="relative z-50 w-full rounded-xl px-3 py-3 text-base outline-none bg-sand-100 dark:bg-sand-800 text-sand-900 dark:text-sand-50"
          />
          <button
            type="submit"
            disabled={mailBusy}
            className="relative z-50 w-full min-h-12 rounded-full bg-clay-500 text-white px-3 py-3 text-sm font-semibold pointer-events-auto disabled:opacity-60"
          >
            {mailBusy ? t("common.loading") : t("accountExtra.resendTest")}
          </button>
        </form>

        <section className="relative z-50 rounded-2xl p-5 space-y-3 bg-sand-50 dark:bg-sand-900 isolate">
          <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">
            {t("accountExtra.xaiTitle")}
          </h2>
          <p className="text-xs text-sand-500 dark:text-sand-400">
            {t("accountExtra.xaiHint")}{" "}
            <a
              href="https://console.x.ai"
              target="_blank"
              rel="noreferrer"
              className="text-clay-500 font-semibold"
            >
              console.x.ai
            </a>
          </p>
          <PasswordInput
            value={xaiKey}
            onChange={(v) => {
              setXaiKey(v);
              saveXaiKey(v);
            }}
            placeholder="xai-…"
            autoComplete="off"
          />
        </section>

        <section className="glass-strong rounded-2xl p-5 space-y-4">
          <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50 flex items-center gap-2">
            <Globe className="h-4 w-4 text-clay-500" /> {t("common.language")}
          </h2>
          <p className="text-xs text-sand-500 dark:text-sand-400">
            {t("profile.regionNote")}
          </p>
          <div className="flex flex-wrap gap-2">
            {(["auto", "fr", "en"] as LangPref[]).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPref(p)}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold ${
                  pref === p
                    ? "bg-clay-500 text-white"
                    : "glass text-sand-700 dark:text-sand-200"
                }`}
              >
                {p === "auto"
                  ? t("common.detectRegion")
                  : p === "fr"
                    ? t("common.french")
                    : t("common.english")}
              </button>
            ))}
          </div>
          <p className="text-xs text-sand-400">
            {locale === "fr" ? "Français" : "English"}
          </p>
        </section>

        <section className="glass-strong rounded-2xl p-5 space-y-4">
          <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50 flex items-center gap-2">
            <Palette className="h-4 w-4 text-clay-500" /> {t("profile.appearance")}
          </h2>
          <p className="text-xs font-semibold text-sand-600 dark:text-sand-300">
            {t("common.theme")}
          </p>
          <div className="flex flex-wrap gap-2">
            {(
              [
                ["auto", SunMoon, t("common.auto")],
                ["light", Sun, t("common.light")],
                ["dark", Moon, t("common.dark")],
              ] as const
            ).map(([id, Icon, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setTheme(id)}
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold ${
                  themePref === id
                    ? "bg-clay-500 text-white"
                    : "glass text-sand-700 dark:text-sand-200"
                }`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-sand-600 dark:text-sand-300">
              {t("common.color")}
            </p>
            <button
              type="button"
              onClick={reset}
              className="text-xs font-semibold text-sand-500 hover:text-clay-500"
            >
              {t("common.reset")}
            </button>
          </div>
          <div className="grid grid-cols-8 gap-2">
            {ACCENT_PRESETS.map((p) => (
              <button
                key={p.name}
                type="button"
                onClick={() => setHue(p.hue)}
                title={p.name}
                className={`h-8 w-8 rounded-full ring-2 ${
                  hue === p.hue
                    ? "ring-sand-900 dark:ring-sand-50"
                    : "ring-transparent"
                }`}
                style={{
                  background:
                    p.hue < 0
                      ? "linear-gradient(90deg, #111 50%, #f4f4f4 50%)"
                      : `hsl(${p.hue} 45% 54%)`,
                }}
              />
            ))}
          </div>
          <input
            type="range"
            min={0}
            max={359}
            value={hue}
            onChange={(e) => setHue(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background:
                "linear-gradient(to right, hsl(0 45% 54%), hsl(60 45% 54%), hsl(120 45% 54%), hsl(180 45% 54%), hsl(240 45% 54%), hsl(300 45% 54%), hsl(360 45% 54%))",
            }}
            aria-label={t("common.customHue")}
          />
          <label className="flex items-center justify-between gap-3 text-sm font-semibold text-sand-700 dark:text-sand-200">
            <span>
              {t("profile.motion")}
              <span className="block text-xs font-normal text-sand-500 mt-0.5">
                {t("profile.motionHint")}
              </span>
            </span>
            <input
              type="checkbox"
              checked={reduceMotion}
              onChange={(e) => setReduceMotion(e.target.checked)}
              className="h-5 w-5 accent-clay-500"
            />
          </label>
        </section>

        <section className="glass-strong rounded-2xl p-5 space-y-3">
          <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">
            {t("profile.account")}
          </h2>
          <label className="block text-xs font-semibold text-sand-600 dark:text-sand-300">
            {t("profile.displayName")}
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder={t("profile.displayNamePh")}
              className="mt-1 w-full rounded-xl glass px-3 py-2.5 text-base text-sand-900 dark:text-sand-50 outline-none"
            />
          </label>
          <div className="rounded-2xl border border-clay-500/35 bg-clay-500/10 p-4">
            <p className="font-heading text-sm font-bold text-sand-900 dark:text-sand-50">
              {t("accountExtra.photo")}
            </p>
            <p className="mt-0.5 text-xs text-sand-500">{t("accountExtra.photoHint")}</p>
            <div className="mt-3 flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 rounded-full bg-sand-200 dark:bg-sand-800 overflow-hidden ring-2 ring-clay-500/50">
                {avatar ? (
                  <img src={avatar} alt="" className="h-full w-full object-cover" />
                ) : (
                  <UserRound className="absolute inset-0 m-auto h-9 w-9 text-sand-400" />
                )}
              </div>
              <label className="inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-4 py-2.5 text-sm font-semibold cursor-pointer hover:scale-105 transition-transform">
                <Camera className="h-4 w-4" />
                {t("accountExtra.photoChange")}
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    e.target.value = "";
                    if (!f || f.size > 1_200_000) return;
                    const r = new FileReader();
                    r.onload = () => setAvatar(String(r.result ?? ""));
                    r.readAsDataURL(f);
                  }}
                />
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-sand-700 dark:text-sand-200">
              {t("notify.enable")}
              <span className="block text-xs font-normal text-sand-500 mt-0.5">
                {t("notify.hint")}
              </span>
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={notifyOn}
              onClick={() => {
                if (notifyOn) {
                  setNotifyEnabled(false);
                  setNotifyOn(false);
                  return;
                }
                void requestNotify().then((ok) => setNotifyOn(ok));
              }}
              className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
                notifyOn ? "bg-clay-500" : "bg-sand-300 dark:bg-sand-700"
              }`}
            >
              <span
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                  notifyOn ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
          <button
            type="button"
            onClick={() => void sendTestNotify()}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-clay-500 text-white py-2.5 text-sm font-semibold hover:scale-[1.01] active:scale-95 transition-transform"
          >
            <Bell className="h-4 w-4" />
            {t("notify.testBtn")}
          </button>
          {user ? (
            <form
              className="space-y-2"
              onSubmit={(e) => {
                e.preventDefault();
                const fn = (
                  authClient as {
                    changePassword?: (d: {
                      currentPassword: string;
                      newPassword: string;
                    }) => Promise<{ error?: { message?: string } | null }>;
                  }
                ).changePassword;
                if (!fn) {
                  setMsg(t("login.errGeneric"));
                  return;
                }
                void fn({
                  currentPassword: pw.current,
                  newPassword: pw.next,
                }).then((res) => {
                  if (res?.error) setMsg(res.error.message || t("login.errGeneric"));
                  else {
                    setMsg(t("login.resetSent"));
                    setPw({ current: "", next: "" });
                  }
                });
              }}
            >
              <p className="text-xs font-semibold text-sand-600">{t("accountExtra.password")}</p>
              <PasswordInput
                value={pw.current}
                onChange={(v) => setPw({ ...pw, current: v })}
                placeholder={t("accountExtra.current")}
                autoComplete="current-password"
              />
              <PasswordInput
                value={pw.next}
                onChange={(v) => setPw({ ...pw, next: v })}
                placeholder={t("accountExtra.next")}
                minLength={6}
                autoComplete="new-password"
              />
              <button
                type="submit"
                className="rounded-full glass px-3 py-2 text-sm font-semibold"
              >
                {t("common.save")}
              </button>
            </form>
          ) : null}
          {user ? (
            <form
              className="space-y-2"
              onSubmit={(e) => {
                e.preventDefault();
                const fn = (
                  authClient as unknown as {
                    changeEmail?: (d: {
                      email?: string;
                      newEmail?: string;
                    }) => Promise<{ error?: { message?: string } | null }>;
                  }
                ).changeEmail;
                if (!fn || !emailEdit.trim()) return;
                void fn({ email: emailEdit, newEmail: emailEdit }).then((res) => {
                  if (res?.error) setMsg(res.error.message || t("login.errGeneric"));
                  else setMsg(t("accountExtra.changed"));
                });
              }}
            >
              <input
                type="email"
                placeholder={t("accountExtra.email")}
                value={emailEdit}
                onChange={(e) => setEmailEdit(e.target.value)}
                className="w-full rounded-xl glass px-3 py-2.5 text-base outline-none"
              />
              <button type="submit" className="rounded-full glass px-3 py-2 text-sm font-semibold">
                {t("common.save")}
              </button>
            </form>
          ) : null}
          <button
            type="button"
            onClick={() => {
              if (!confirm(t("accountExtra.resetHint"))) return;
              const keys = Object.keys(localStorage).filter((k) =>
                k.startsWith("takologs"),
              );
              keys.forEach((k) => localStorage.removeItem(k));
              window.location.assign("#/");
              window.location.reload();
            }}
            className="rounded-full bg-red-500/15 text-red-700 dark:text-red-300 px-3 py-2 text-sm font-semibold"
          >
            {t("accountExtra.resetApp")}
          </button>
          {user ? (
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-sand-600 dark:text-sand-300">
                {t("profile.signedInAs", {
                  name: user.displayName || user.primaryEmail || "TakoLogs",
                })}
              </p>
              {authEnabled ? (
                <button
                  type="button"
                  disabled={signingOut}
                  onClick={() => {
                    setSigningOut(true);
                    void signOut().catch(() => setSigningOut(false));
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-2 text-sm font-semibold"
                >
                  <LogOut className="h-4 w-4" /> {t("common.signOut")}
                </button>
              ) : null}
            </div>
          ) : (
            <Link
              to="/login"
              search={{ next: "/profile" }}
              className="inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-4 py-2.5 text-sm font-semibold"
            >
              <LogIn className="h-4 w-4" /> {t("common.signIn")}
            </Link>
          )}
        </section>

        <section className="glass-strong rounded-2xl p-5 space-y-3">
          <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-clay-500" /> {t("profile.emojis")}
          </h2>
          <p className="text-xs text-sand-500">{t("profile.emojisHint")}</p>
          <input
            value={emojiQ}
            onChange={(e) => setEmojiQ(e.target.value)}
            placeholder={t("add.searchPh")}
            className="w-full rounded-xl glass px-3 py-2.5 text-base outline-none"
            aria-label={t("profile.emojis")}
          />
          {emojiQ.trim() ? (
            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
              {searchSubstances(emojiQ).slice(0, 12).map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => {
                    setEmojiPick(s.slug);
                    setEmojiQ(s.name);
                  }}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    emojiPick === s.slug ? "bg-clay-500 text-white" : "glass"
                  }`}
                >
                  {resolveEmoji(s.slug, s.name, s.emoji)} {resolveName(s.slug, s.name)}
                </button>
              ))}
            </div>
          ) : null}
          {(() => {
            const s = getSubstance(emojiPick) || findSubstanceByName(emojiQ);
            if (!s) return null;
            const em = resolveEmoji(s.slug, s.name, s.emoji);
            return (
              <div className="flex items-center gap-3 rounded-xl glass px-3 py-2">
                <EmojiPicker value={em} onChange={(v) => setEmoji(s.slug, v)} />
                <span className="text-sm font-semibold text-sand-900 dark:text-sand-50">
                  {resolveName(s.slug, s.name)}
                </span>
              </div>
            );
          })()}
          {emojiEntries.length === 0 ? (
            !emojiPick && !emojiQ.trim() ? (
              <p className="text-sm text-sand-400">{t("profile.noEmojis")}</p>
            ) : null
          ) : (
            <div className="space-y-2">
              {emojiEntries.map(([key, emoji]) => {
                const known = findSubstanceByName(key) || getSubstance(key);
                if (known && (known.slug === emojiPick || known.name === emojiQ.trim())) return null;
                return (
                  <div
                    key={key}
                    className="flex items-center gap-2 rounded-xl glass px-3 py-2"
                  >
                    <EmojiPicker
                      value={emoji}
                      onChange={(e) => setEmoji(key, e)}
                      compact
                    />
                    <span className="text-sm font-semibold text-sand-900 dark:text-sand-50">
                      {known ? resolveName(known.slug, known.name) : key}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
          {emojiEntries.length > 0 ? (
            <button
              type="button"
              onClick={clearEmojis}
              className="text-xs font-semibold text-sand-500 hover:text-red-500"
            >
              {t("profile.clearEmojis")}
            </button>
          ) : null}
        </section>

        <section className="glass-strong rounded-2xl p-5 space-y-3">
          <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">
            {t("profile.skins")}
          </h2>
          <p className="text-xs text-sand-500">{t("profile.skinsHint")}</p>
          <input
            value={skinQ}
            onChange={(e) => setSkinQ(e.target.value)}
            placeholder={t("substances.searchPh")}
            className="w-full rounded-xl glass px-3 py-2.5 text-base outline-none"
          />
          {skinQ.trim() ? (
            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
              {searchSubstances(skinQ).slice(0, 12).map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => {
                    setSkinPick(s.slug);
                    setSkinQ(s.name);
                  }}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    skinPick === s.slug ? "bg-clay-500 text-white" : "glass"
                  }`}
                >
                  {resolveEmoji(s.slug, s.name, s.emoji)} {resolveName(s.slug, s.name)}
                </button>
              ))}
            </div>
          ) : null}
          {(() => {
            const s = getSubstance(skinPick) || findSubstanceByName(skinQ);
            if (!s) return null;
            const col = resolveColor(s.slug, s.name, s.color);
            const em = resolveEmoji(s.slug, s.name, s.emoji);
            const nm = resolveName(s.slug, s.name);
            return (
              <div className="rounded-2xl glass p-3 space-y-3">
                <p className="font-heading font-bold" style={{ color: col }}>
                  {em} {nm}
                </p>
                <label className="block text-xs text-sand-500">
                  {t("profile.editName")}
                  <input
                    value={aliases[s.slug] ?? ""}
                    onChange={(e) => setAlias(s.slug, e.target.value)}
                    placeholder={s.name}
                    className="mt-1 w-full rounded-xl glass px-3 py-2 text-sm outline-none text-sand-900 dark:text-sand-50"
                  />
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-sand-500">{t("profile.editEmoji")}</span>
                  <EmojiPicker value={em} onChange={(v) => setEmoji(s.slug, v)} compact />
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  {INGESTION_COLORS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColor(s.slug, c)}
                      className={`h-7 w-7 rounded-full ring-2 ${
                        col === c ? "ring-sand-900 dark:ring-sand-50" : "ring-transparent"
                      }`}
                      style={{ background: c }}
                    />
                  ))}
                  <input
                    type="color"
                    value={col}
                    onChange={(e) => setColor(s.slug, e.target.value)}
                    className="h-7 w-9 cursor-pointer bg-transparent"
                    aria-label={t("add.color")}
                  />
                </div>
              </div>
            );
          })()}
          {Object.keys(colors).length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {Object.entries(colors).map(([k, c]) => {
                const known = getSubstance(k) || findSubstanceByName(k);
                return (
                  <span
                    key={k}
                    className="rounded-full px-2.5 py-1 text-xs font-semibold"
                    style={{ background: `${c}22`, color: c }}
                  >
                    {resolveEmoji(k, known?.name ?? k, known?.emoji ?? "•")} {resolveName(k, known?.name ?? k)}
                  </span>
                );
              })}
            </div>
          ) : null}
        </section>

        <section className="glass-strong rounded-2xl p-5 space-y-3">
          <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">
            {t("profile.favorites")}
          </h2>
          {favorites.length === 0 ? (
            <p className="text-sm text-sand-400">{t("profile.noFavorites")}</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {favorites.map((slug) => {
                const known = getSubstance(slug);
                return (
                  <button
                    key={slug}
                    type="button"
                    onClick={() => toggleFavorite(slug)}
                    className="rounded-full glass px-3 py-1.5 text-sm font-semibold"
                  >
                    {resolveEmoji(slug, known?.name ?? slug, known?.emoji ?? "⭐")}{" "}
                    {resolveName(slug, known?.name ?? slug)}
                  </button>
                );
              })}
            </div>
          )}
        </section>

        <section className="glass-strong rounded-2xl p-5 space-y-3">
          <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">
            {t("profile.data")}
          </h2>
          <p className="text-xs text-sand-500 dark:text-sand-400">
            {t("profile.dataHint")}
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => void exportJournal()}
              className="inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-4 py-2.5 text-sm font-semibold"
            >
              <Download className="h-4 w-4" /> {t("profile.export")}
            </button>
            <button
              type="button"
              onClick={() => void exportCsv()}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2.5 text-sm font-semibold text-sand-700 dark:text-sand-200"
            >
              <Download className="h-4 w-4" /> {t("profile.csv")}
            </button>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2.5 text-sm font-semibold text-sand-700 dark:text-sand-200"
            >
              <Upload className="h-4 w-4" /> {t("profile.import")}
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void importJournal(f);
                e.target.value = "";
              }}
            />
          </div>
          {msg ? (
            <p className="text-sm text-sand-600 dark:text-sand-300">{msg}</p>
          ) : null}
        </section>
      </div>
    </div>
  );
}
