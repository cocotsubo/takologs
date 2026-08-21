import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  ChevronDown,
  LogIn,
  LogOut,
  Menu,
  Moon,
  Plus,
  Bot,
  Sun,
  SunMoon,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ACCENT_PRESETS, useAccent, useTheme } from "@/lib/theme";
import { authEnabled, signOut } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { useAddToJournal } from "@/components/journal-context";
import { TakoLogo } from "@/components/tako-logo";
import { requestOpenSearch } from "@/components/search-palette";
import { MoleculeField } from "@/components/molecule-field";
import { MailOutboxHost } from "@/components/mail-outbox";
import { CookieBanner } from "@/components/cookie-banner";
import { InboxBell } from "@/components/inbox-bell";
import { ActiveBanner } from "@/components/active-banner";
import { flagOpenAddOnLoad, requestOpenAddModal } from "@/lib/journal";
import { useI18n } from "@/lib/i18n";
import { usePrefs } from "@/lib/prefs";
import { MOBILE_NAV, MORE_NAV, NAV, PRIMARY_NAV } from "@/lib/nav";
import { APP_VERSION } from "@/lib/version";

function AppearanceMenu() {
  const { pref, mode, setPref } = useTheme();
  const { hue, setHue, reset } = useAccent();
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => setReady(true), []);
  const Icon = !ready || pref === "auto" ? SunMoon : mode === "dark" ? Moon : Sun;
  const label =
    pref === "auto"
      ? t("common.auto")
      : mode === "dark"
        ? t("common.dark")
        : t("common.light");
  const swatch = hue < 0 ? "#8a8a8a" : `hsl(${hue} 45% 54%)`;

  useEffect(() => {
    if (!open) return;
    const down = (e: MouseEvent) => {
      const node = e.target as Node;
      if (btnRef.current?.contains(node) || panelRef.current?.contains(node)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", down);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", down);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const overlay =
    open && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            role="presentation"
          >
            <button
              type="button"
              className="absolute inset-0 bg-sand-900/20 dark:bg-black/40 cursor-default"
              aria-label={t("common.close")}
              onClick={() => setOpen(false)}
            />
            <div
              ref={panelRef}
              className="relative w-[min(18rem,calc(100vw-2rem))] glass-strong glass-modal rounded-3xl p-4 shadow-2xl animate-spring-in mx-auto"
              style={{ zIndex: 201 }}
              role="dialog"
              aria-modal="true"
              aria-label={t("profile.appearance")}
            >
              <p className="text-xs font-heading font-bold text-sand-800 dark:text-sand-100 mb-2">
                {t("common.theme")}
              </p>
              <div className="grid grid-cols-3 gap-1.5 mb-4">
                {(
                  [
                    ["auto", SunMoon, t("common.auto")],
                    ["light", Sun, t("common.light")],
                    ["dark", Moon, t("common.dark")],
                  ] as const
                ).map(([id, ModeIcon, text]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setPref(id)}
                    className={`inline-flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-[11px] font-heading font-semibold transition-transform hover:scale-[1.03] ${
                      pref === id
                        ? "bg-clay-500 text-white shadow-md shadow-clay-500/25"
                        : "glass text-sand-700 dark:text-sand-200"
                    }`}
                  >
                    <ModeIcon className="h-4 w-4" />
                    {text}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-heading font-bold text-sand-800 dark:text-sand-100">
                  {t("common.color")}
                </span>
                <button
                  type="button"
                  onClick={reset}
                  className="text-[11px] font-semibold text-sand-500 hover:text-clay-500"
                >
                  {t("common.reset")}
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2 mb-3">
                {ACCENT_PRESETS.map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setHue(p.hue)}
                    title={p.name}
                    aria-label={p.name}
                    className={`h-7 w-7 rounded-full ring-2 transition-transform hover:scale-110 overflow-hidden ${
                      hue === p.hue
                        ? "ring-sand-900 dark:ring-sand-50"
                        : "ring-transparent"
                    }`}
                    style={
                      p.hue < 0
                        ? {
                            background:
                              "linear-gradient(90deg, #111 50%, #f4f4f4 50%)",
                          }
                        : { backgroundColor: `hsl(${p.hue} 45% 54%)` }
                    }
                  />
                ))}
              </div>
              <label className="block text-[11px] font-semibold text-sand-600 dark:text-sand-300 mb-1.5">
                {t("common.customHue")}
              </label>
              <input
                type="range"
                min={0}
                max={359}
                value={hue < 0 ? 0 : hue}
                onChange={(e) => setHue(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-clay-500"
                style={{
                  background:
                    "linear-gradient(to right, hsl(0 45% 54%), hsl(60 45% 54%), hsl(120 45% 54%), hsl(180 45% 54%), hsl(240 45% 54%), hsl(300 45% 54%), hsl(360 45% 54%))",
                }}
                aria-label={t("common.customHue")}
              />
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative rounded-full glass p-2.5 text-sand-700 dark:text-sand-200 hover:scale-105 active:scale-95 transition-transform"
        title={`${t("profile.appearance")} · ${label}`}
        aria-label={`${t("profile.appearance")} ${label}`}
        aria-expanded={open}
        style={{ boxShadow: `0 0 0 2px ${swatch}` }}
      >
        <Icon className="h-4 w-4" />
      </button>
      {overlay}
    </>
  );
}

function MoreMenu({ active }: { active: (path: string) => boolean }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const moreOn = MORE_NAV.some((p) => active(p));

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-all ${
          moreOn
            ? "bg-clay-500 text-white shadow-lg shadow-clay-500/25"
            : "text-sand-700 dark:text-sand-200 hover:bg-sand-200/60 dark:hover:bg-sand-800/40"
        }`}
      >
        {t("nav.more")}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <div
          className="w-52 glass-strong rounded-2xl p-1.5"
          style={{ position: "absolute", left: 0, top: "100%", marginTop: 8, zIndex: 50 }}
        >
          {MORE_NAV.map((path) => {
            const item = NAV.find((n) => n.path === path);
            if (!item) return null;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold ${
                  active(item.path)
                    ? "bg-clay-500 text-white"
                    : "text-sand-700 dark:text-sand-200 hover:bg-sand-200/50 dark:hover:bg-sand-800/40"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {t(item.labelKey)}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function AuthSlot() {
  const { user, isPending } = useCurrentUserState();
  const { t } = useI18n();
  const [ready, setReady] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready || isPending) {
    return <div className="hidden sm:block h-9 w-9 rounded-full glass animate-pulse" />;
  }
  if (!user) {
    return (
      <Link
        to="/login"
        search={{ next: "/logs" }}
        className="hidden sm:flex items-center gap-1.5 rounded-full bg-sand-900 dark:bg-sand-50 px-3 py-2 text-sm font-semibold text-sand-50 dark:text-sand-900 hover:scale-105 transition-transform"
      >
        <LogIn className="h-4 w-4" />
        <span className="hidden lg:inline">{t("common.signIn")}</span>
      </Link>
    );
  }
  if (!authEnabled) return null;
  return (
    <button
      type="button"
      disabled={signingOut}
      onClick={() => {
        setSigningOut(true);
        void signOut().catch(() => setSigningOut(false));
      }}
      className="hidden sm:flex items-center rounded-full glass p-2.5 text-sand-700 dark:text-sand-200 hover:scale-105 transition-transform disabled:opacity-60"
      title={t("common.signOut")}
    >
      <LogOut className="h-4 w-4" />
    </button>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const { openNewLog } = useAddToJournal();
  const { t } = useI18n();
  const { displayName, avatar } = usePrefs();
  const { user } = useCurrentUserState();
  const photo = avatar || user?.profileImageUrl || "";
  const top = pathname.split("/").filter(Boolean)[0] ?? "";
  const active = (path: string) =>
    path === "/" ? top === "" : pathname === path || pathname.startsWith(`${path}/`);
  const onLogin = pathname === "/login" || pathname === "/reset";
  const onProfile = pathname === "/profile";
  const onLogEditor =
    pathname === "/logs/new" || /^\/logs\/[^/]+$/.test(pathname);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        flagOpenAddOnLoad();
        if (onLogEditor) requestOpenAddModal();
        openNewLog();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onLogEditor, openNewLog]);

  return (
    <>
      <div className="app-bg" />
      <MoleculeField />
      <MailOutboxHost />
      <CookieBanner />
      <header className="sticky top-0 z-40 relative overflow-visible">
        <div className="app-header pb-1">
        <div className="mx-auto max-w-6xl liquid-nav rounded-2xl px-3 py-2 flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0 group"
            onClick={() => setMenu(false)}
          >
            <TakoLogo className="h-8 w-8 logo-tinted shrink-0 transition-transform group-hover:rotate-6 group-hover:scale-110" />
            <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-sand-900 dark:text-sand-50">
              Tako<span className="text-clay-500">Logs</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-0.5 mx-auto">
            {PRIMARY_NAV.map((path) => {
              const u = NAV.find((n) => n.path === path);
              if (!u) return null;
              return (
                <Link
                  key={u.path}
                  to={u.path}
                  className={`rounded-full px-3 py-2 text-sm font-heading font-semibold transition-all duration-300 ${
                    active(u.path)
                      ? "bg-clay-500 text-white shadow-lg shadow-clay-500/25"
                      : "text-sand-700 dark:text-sand-200 hover:bg-sand-200/60 dark:hover:bg-sand-800/40"
                  }`}
                >
                  {t(u.labelKey)}
                </Link>
              );
            })}
            <MoreMenu active={active} />
          </nav>
          <div className="flex items-center gap-1 ml-auto lg:ml-0">
            <button
              type="button"
              onClick={() => requestOpenSearch()}
              className="rounded-full glass p-2.5 text-sand-700 dark:text-sand-200 hover:scale-105 transition-transform"
              aria-label={t("home.searchPh")}
              title={`${t("home.searchPh")} (⌘K)`}
            >
              <Bot className="h-4 w-4" />
            </button>
            <InboxBell />
            <AppearanceMenu />
            <Link
              to="/profile"
              className={`hidden sm:flex items-center gap-1.5 rounded-full glass px-2.5 py-2 text-sm font-semibold hover:scale-105 transition-transform ${
                active("/profile")
                  ? "bg-clay-500 text-white"
                  : "text-sand-700 dark:text-sand-200"
              }`}
              title={t("nav.profile")}
            >
              {avatar ? (
                <img src={avatar} alt="" className="h-5 w-5 rounded-full object-cover" />
              ) : (
                <UserRound className="h-4 w-4" />
              )}
              {displayName ? (
                <span className="max-w-[6rem] truncate hidden xl:inline font-heading">{displayName}</span>
              ) : null}
            </Link>
            <AuthSlot />
            <button
              type="button"
              onClick={() => setMenu((u) => !u)}
              className="lg:hidden rounded-full glass p-2.5 text-sand-800 dark:text-sand-100"
              aria-label="Menu"
            >
              {menu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menu ? (
          <div className="lg:hidden mx-auto max-w-6xl mt-2 liquid-nav rounded-2xl p-2 animate-fade-up">
            <div className="grid grid-cols-2 gap-1.5">
              {NAV.map((u) => (
                <Link
                  key={u.path}
                  to={u.path}
                  onClick={() => setMenu(false)}
                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-left transition-all ${
                    active(u.path)
                      ? "bg-clay-500 text-white"
                      : "text-sand-700 dark:text-sand-200 hover:bg-sand-200/50 dark:hover:bg-sand-800/40"
                  }`}
                >
                  <u.icon className="h-4 w-4" />
                  {t(u.labelKey)}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
        </div>
      </header>
      <ActiveBanner />
      <main className="relative pb-[calc(11rem+env(safe-area-inset-bottom))] lg:pb-10">
        <div className="page-slide">{children}</div>
        <footer className="mt-16 px-4 pb-4 text-center text-xs text-sand-500 space-y-1">
          <p className="font-heading">TakoLogs v{APP_VERSION}</p>
          <p className="flex flex-wrap gap-3 justify-center">
            <Link to="/legal" className="hover:text-clay-500">
              {t("footer.legal")}
            </Link>
            <Link to="/legal" hash="privacy" className="hover:text-clay-500">
              {t("footer.privacy")}
            </Link>
            <Link to="/legal" hash="cookies" className="hover:text-clay-500">
              {t("footer.cookies")}
            </Link>
            <Link to="/downloads" className="hover:text-clay-500">
              {t("footer.downloads")}
            </Link>
          </p>
        </footer>
      </main>
      {!onLogin && !onLogEditor && !onProfile ? (
        <button
          type="button"
          aria-label={t("fab.add")}
          title={t("fab.add")}
          onClick={() => {
            flagOpenAddOnLoad();
            if (onLogEditor) requestOpenAddModal();
            openNewLog();
          }}
          className="fixed right-4 z-[45] h-12 w-12 rounded-full bg-clay-500 text-white flex items-center justify-center shadow-lg shadow-clay-500/40 hover:scale-105 active:scale-95 transition-transform bottom-[calc(5.75rem+env(safe-area-inset-bottom))] sm:bottom-5"
        >
          <Plus className="h-6 w-6" strokeWidth={2.5} />
        </button>
      ) : null}
      <nav
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 pointer-events-none"
        hidden={onLogin}
      >
        <div
          className="relative px-5"
          style={{ paddingBottom: "max(1.35rem, env(safe-area-inset-bottom))" }}
        >
        <div className="mx-auto max-w-sm liquid-dock rounded-[2rem] px-2.5 py-2 flex items-center justify-between pointer-events-auto">
          {MOBILE_NAV.map((path) => {
            const item = NAV.find((n) => n.path === path);
            if (!item) return null;
            const on = active(item.path);
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => {
                  void navigate({ to: item.path });
                  setMenu(false);
                }}
                className={`flex flex-col items-center gap-0.5 rounded-full px-3.5 py-1.5 text-[11px] font-heading font-semibold transition-all duration-300 min-w-[3.75rem] ${
                  on ? "text-clay-500 bg-white/35 dark:bg-white/10 scale-105" : "text-sand-600 dark:text-sand-300"
                }`}
              >
              {item.path === "/profile" && photo ? (
                <img
                  src={photo}
                  alt=""
                  className={`h-6 w-6 rounded-full object-cover shadow-sm ${
                    on ? "ring-2 ring-clay-500 scale-110" : "ring-1 ring-white/25"
                  } transition-transform duration-300`}
                />
              ) : (
                <item.icon
                  className={`h-5 w-5 ${on ? "scale-110" : ""} transition-transform duration-300`}
                />
              )}
              {t(item.labelKey)}
              </button>
            );
          })}
        </div>
        </div>
      </nav>
    </>
  );
}
