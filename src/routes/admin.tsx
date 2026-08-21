import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  Copy,
  Download,
  Globe,
  LineChart,
  Megaphone,
  Search,
  Settings2,
  Shield,
  Trash2,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PasswordInput } from "@/components/password-input";
import { PageHero } from "@/components/ui-bits";
import {
  ADMIN_EVENT,
  adminLogin,
  adminLogout,
  applySeo,
  DEFAULT_SEO,
  downloadText,
  hasAdminPassword,
  isAdminAuthed,
  loadSeo,
  loadSite,
  robotsTxt,
  saveSeo,
  saveSite,
  setAdminPassword,
  sitemapXml,
  usersCsv,
  type SeoSettings,
  type SiteSettings,
} from "@/lib/admin";
import { visitStats } from "@/lib/analytics";
import { hashPass, loadUsers, saveUsers, type StoredUser } from "@/lib/user-store";
import { useI18n } from "@/lib/i18n";
import { APP_VERSION } from "@/lib/version";

export const Route = createFileRoute("/admin")({ component: AdminPage });

type Tab = "stats" | "users" | "site" | "seo";

function fmt(ts?: number) {
  if (!ts) return "—";
  return new Date(ts).toLocaleString();
}

export function AdminPage() {
  const { t, locale } = useI18n();
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [setup, setSetup] = useState(false);
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [err, setErr] = useState("");
  const [tab, setTab] = useState<Tab>("stats");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setReady(true);
    setAuthed(isAdminAuthed());
    setSetup(!hasAdminPassword());
    const on = () => setAuthed(isAdminAuthed());
    window.addEventListener(ADMIN_EVENT, on);
    return () => window.removeEventListener(ADMIN_EVENT, on);
  }, []);

  if (!ready) return null;

  if (!authed) {
    return (
      <div className="px-4 py-10 pb-28">
        <div className="mx-auto max-w-md space-y-6">
          <PageHero
            kicker={t("admin.kicker")}
            icon={<Shield className="h-3.5 w-3.5" />}
            title={setup ? t("admin.setupTitle") : t("admin.loginTitle")}
            subtitle={setup ? t("admin.setupBody") : t("admin.loginBody")}
          />
          <form
            className="glass-strong rounded-2xl p-5 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setErr("");
              if (setup) {
                if (pw.length < 6) {
                  setErr(t("login.errPassword"));
                  return;
                }
                if (pw !== pw2) {
                  setErr(t("admin.mismatch"));
                  return;
                }
                setAdminPassword(pw);
                setAuthed(true);
                setSetup(false);
                return;
              }
              if (!adminLogin(pw)) {
                setErr(t("admin.wrongPass"));
                return;
              }
              setAuthed(true);
            }}
          >
            <PasswordInput
              value={pw}
              onChange={setPw}
              placeholder={t("admin.password")}
              autoComplete={setup ? "new-password" : "current-password"}
              minLength={6}
              required
            />
            {setup ? (
              <PasswordInput
                value={pw2}
                onChange={setPw2}
                placeholder={t("admin.confirm")}
                autoComplete="new-password"
                minLength={6}
                required
              />
            ) : null}
            {err ? <p className="text-sm font-semibold text-red-600 dark:text-red-300">{err}</p> : null}
            <button
              type="submit"
              className="w-full rounded-full bg-clay-500 text-white py-3 text-sm font-semibold"
            >
              {setup ? t("admin.create") : t("admin.enter")}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs: { id: Tab; label: string; icon: typeof Users }[] = [
    { id: "stats", label: t("admin.tabStats"), icon: LineChart },
    { id: "users", label: t("admin.tabUsers"), icon: Users },
    { id: "site", label: t("admin.tabSite"), icon: Settings2 },
    { id: "seo", label: t("admin.tabSeo"), icon: Globe },
  ];

  return (
    <div className="px-4 py-10 pb-28">
      <div className="mx-auto max-w-5xl space-y-6">
        <PageHero
          kicker={`TakoLogs v${APP_VERSION}`}
          icon={<Shield className="h-3.5 w-3.5" />}
          title={t("admin.title")}
          subtitle={t("admin.subtitle")}
        />
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {tabs.map((tb) => (
              <button
                key={tb.id}
                type="button"
                onClick={() => setTab(tb.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold transition-all ${
                  tab === tb.id
                    ? "bg-clay-500 text-white"
                    : "glass text-sand-700 dark:text-sand-200"
                }`}
              >
                <tb.icon className="h-3.5 w-3.5" />
                {tb.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              adminLogout();
              setAuthed(false);
              setPw("");
            }}
            className="rounded-full glass px-3 py-2 text-xs font-semibold"
          >
            {t("admin.logout")}
          </button>
        </div>
        {tab === "stats" ? <StatsPane locale={locale} t={t} /> : null}
        {tab === "users" ? <UsersPane t={t} onChange={() => setTick((n) => n + 1)} tick={tick} /> : null}
        {tab === "site" ? <SitePane t={t} /> : null}
        {tab === "seo" ? <SeoPane t={t} /> : null}
      </div>
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="glass-strong rounded-2xl p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-sand-500">{label}</p>
      <p className="mt-1 font-heading text-3xl font-bold text-sand-900 dark:text-sand-50">{value}</p>
    </div>
  );
}

function StatsPane({ t, locale }: { t: (k: string) => string; locale: string }) {
  const s = useMemo(() => visitStats(14), []);
  const users = loadUsers();
  const news = users.filter((u) => u.newsletter).length;
  const max = Math.max(1, ...s.byDay.map((d) => d.n));
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        <Kpi label={t("admin.visitsToday")} value={s.today} />
        <Kpi label={t("admin.visits7")} value={s.last7} />
        <Kpi label={t("admin.uniques")} value={s.uniques7} />
        <Kpi label={t("admin.users")} value={users.length} />
        <Kpi label={t("admin.newsletter")} value={news} />
      </div>
      <section className="glass-strong rounded-2xl p-5">
        <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-clay-500" /> {t("admin.days")}
        </h2>
        {s.total === 0 ? (
          <p className="mt-3 text-sm text-sand-500">{t("admin.noVisits")}</p>
        ) : (
          <div className="mt-4 flex items-end gap-1 h-36">
            {s.byDay.map((d) => (
              <div key={d.key} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                <span className="text-[10px] font-semibold text-sand-500">{d.n || ""}</span>
                <div
                  className="w-full rounded-t-md bg-clay-500/80 min-h-0.5"
                  style={{ height: `${Math.max(4, (d.n / max) * 100)}%` }}
                  title={`${d.key}: ${d.n}`}
                />
                <span className="text-[9px] text-sand-400">
                  {new Date(d.key).toLocaleDateString(locale === "en" ? "en-GB" : "fr-FR", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
      <div className="grid md:grid-cols-3 gap-3">
        <ListCard title={t("admin.topPages")} rows={s.pages} />
        <ListCard title={t("admin.referrers")} rows={s.refs.length ? s.refs : [["direct", s.total]]} />
        <ListCard title={t("admin.devices")} rows={s.devices} />
      </div>
    </div>
  );
}

function ListCard({ title, rows }: { title: string; rows: [string, number][] }) {
  return (
    <section className="glass-strong rounded-2xl p-4">
      <h3 className="font-heading font-bold text-sand-900 dark:text-sand-50">{title}</h3>
      <ul className="mt-2 space-y-1.5 text-sm">
        {rows.length === 0 ? (
          <li className="text-sand-500">—</li>
        ) : (
          rows.map(([k, n]) => (
            <li key={k} className="flex justify-between gap-2">
              <span className="truncate text-sand-700 dark:text-sand-200">{k}</span>
              <span className="font-semibold text-clay-500">{n}</span>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

function UsersPane({ t, tick, onChange }: { t: (k: string) => string; tick: number; onChange: () => void }) {
  const [q, setQ] = useState("");
  const [edit, setEdit] = useState<StoredUser | null>(null);
  const users = useMemo(() => loadUsers(), [tick]);
  const filtered = users.filter((u) => {
    const s = q.trim().toLowerCase();
    if (!s) return true;
    return u.email.includes(s) || u.name.toLowerCase().includes(s);
  });

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <label className="flex-1 min-w-[12rem] glass rounded-full px-3 py-2 flex items-center gap-2">
          <Search className="h-4 w-4 text-sand-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("admin.searchUser")}
            className="w-full bg-transparent outline-none text-sm text-sand-900 dark:text-sand-50"
          />
        </label>
        <button
          type="button"
          className="rounded-full glass px-3 py-2 text-xs font-semibold inline-flex items-center gap-1"
          onClick={() => downloadText("takologs-users.csv", usersCsv(users), "text/csv")}
        >
          <Download className="h-3.5 w-3.5" /> CSV
        </button>
        <button
          type="button"
          className="rounded-full glass px-3 py-2 text-xs font-semibold"
          onClick={() =>
            downloadText("takologs-users.json", JSON.stringify(users, null, 2), "application/json")
          }
        >
          JSON
        </button>
      </div>
      {filtered.length === 0 ? (
        <p className="glass-strong rounded-2xl p-5 text-sm text-sand-500">{t("admin.emptyUsers")}</p>
      ) : (
        <div className="space-y-2">
          {filtered.map((u) => (
            <article key={u.id} className="glass-strong rounded-2xl p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-heading font-bold text-sand-900 dark:text-sand-50">
                    {u.name}{" "}
                    {u.banned ? (
                      <span className="text-xs font-semibold text-red-500">{t("admin.banned")}</span>
                    ) : null}
                  </p>
                  <p className="text-sm text-sand-600 dark:text-sand-300">{u.email}</p>
                  <p className="text-[11px] text-sand-400 mt-1">
                    {t("admin.created")}: {fmt(u.createdAt)} · {t("admin.lastSeen")}: {fmt(u.lastLogin)}
                    {u.newsletter ? ` · ${t("admin.newsletter")}` : ""}
                  </p>
                </div>
                <button
                  type="button"
                  className="rounded-full glass px-3 py-1.5 text-xs font-semibold"
                  onClick={() => setEdit({ ...u })}
                >
                  {t("common.edit")}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
      {edit ? (
        <UserEditor
          user={edit}
          t={t}
          onClose={() => setEdit(null)}
          onSave={(next, del) => {
            const list = loadUsers();
            if (del) {
              saveUsers(list.filter((x) => x.id !== next.id));
            } else {
              saveUsers(list.map((x) => (x.id === next.id ? next : x)));
            }
            setEdit(null);
            onChange();
          }}
        />
      ) : null}
    </div>
  );
}

function UserEditor({
  user,
  t,
  onClose,
  onSave,
}: {
  user: StoredUser;
  t: (k: string) => string;
  onClose: () => void;
  onSave: (u: StoredUser, del?: boolean) => void;
}) {
  const [u, setU] = useState(user);
  const [npw, setNpw] = useState("");
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-sand-950/40">
      <form
        className="glass-strong rounded-3xl p-5 w-full max-w-md space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          const next = { ...u };
          if (npw.length >= 6) next.pass = hashPass(next.email, npw);
          onSave(next);
        }}
      >
        <h3 className="font-heading text-xl font-bold text-sand-900 dark:text-sand-50">{t("common.edit")}</h3>
        <label className="block text-xs font-semibold text-sand-500">
          {t("admin.name")}
          <input
            className="mt-1 w-full rounded-xl glass px-3 py-2.5 text-base outline-none text-sand-900 dark:text-sand-50"
            value={u.name}
            onChange={(e) => setU({ ...u, name: e.target.value })}
          />
        </label>
        <label className="block text-xs font-semibold text-sand-500">
          {t("admin.email")}
          <input
            type="email"
            className="mt-1 w-full rounded-xl glass px-3 py-2.5 text-base outline-none text-sand-900 dark:text-sand-50"
            value={u.email}
            onChange={(e) => setU({ ...u, email: e.target.value.trim().toLowerCase() })}
          />
        </label>
        <label className="block text-xs font-semibold text-sand-500">
          {t("admin.notes")}
          <textarea
            className="mt-1 w-full rounded-xl glass px-3 py-2.5 text-sm outline-none text-sand-900 dark:text-sand-50 min-h-[4rem]"
            value={u.notes || ""}
            onChange={(e) => setU({ ...u, notes: e.target.value })}
          />
        </label>
        <label className="block text-xs font-semibold text-sand-500">
          {t("admin.newPassword")}
          <PasswordInput value={npw} onChange={setNpw} placeholder="••••••" minLength={6} />
        </label>
        <label className="flex items-center gap-2 text-sm font-semibold text-sand-700 dark:text-sand-200">
          <input
            type="checkbox"
            checked={Boolean(u.newsletter)}
            onChange={(e) => setU({ ...u, newsletter: e.target.checked })}
          />
          {t("admin.newsletter")}
        </label>
        <label className="flex items-center gap-2 text-sm font-semibold text-sand-700 dark:text-sand-200">
          <input
            type="checkbox"
            checked={Boolean(u.banned)}
            onChange={(e) => setU({ ...u, banned: e.target.checked })}
          />
          {t("admin.banned")}
        </label>
        <div className="flex flex-wrap gap-2 pt-2">
          <button type="submit" className="rounded-full bg-clay-500 text-white px-4 py-2 text-sm font-semibold">
            {t("admin.saveUser")}
          </button>
          <button type="button" onClick={onClose} className="rounded-full glass px-4 py-2 text-sm font-semibold">
            {t("common.cancel")}
          </button>
          <button
            type="button"
            className="ml-auto rounded-full bg-red-500/15 text-red-700 dark:text-red-300 px-4 py-2 text-sm font-semibold inline-flex items-center gap-1"
            onClick={() => {
              if (confirm(t("admin.confirmDelete").replace("{email}", u.email))) onSave(u, true);
            }}
          >
            <Trash2 className="h-3.5 w-3.5" /> {t("admin.deleteUser")}
          </button>
        </div>
      </form>
    </div>
  );
}

function SitePane({ t }: { t: (k: string) => string }) {
  const [site, setSite] = useState<SiteSettings>(() => loadSite());
  const [msg, setMsg] = useState("");
  return (
    <div className="space-y-3">
      <section className="glass-strong rounded-2xl p-5 space-y-3">
        <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50 flex items-center gap-2">
          <Megaphone className="h-4 w-4 text-clay-500" /> {t("admin.announcement")}
        </h2>
        <p className="text-xs text-sand-500">{t("admin.announcementHint")}</p>
        <textarea
          className="w-full rounded-xl glass px-3 py-2.5 text-sm outline-none text-sand-900 dark:text-sand-50 min-h-[5rem]"
          value={site.announcement}
          onChange={(e) => setSite({ ...site, announcement: e.target.value })}
        />
        <label className="flex items-center gap-2 text-sm font-semibold">
          <input
            type="checkbox"
            checked={site.maintenance}
            onChange={(e) => setSite({ ...site, maintenance: e.target.checked })}
          />
          {t("admin.maintenance")}
        </label>
        <p className="text-xs text-sand-500">{t("admin.maintenanceHint")}</p>
        <button
          type="button"
          className="rounded-full bg-clay-500 text-white px-4 py-2 text-sm font-semibold"
          onClick={() => {
            saveSite(site);
            setMsg(t("common.save"));
          }}
        >
          {t("common.save")}
        </button>
        {msg ? <p className="text-sm font-semibold text-clay-500">{msg}</p> : null}
      </section>
      <section className="glass-strong rounded-2xl p-5 space-y-3">
        <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">{t("admin.version")}</h2>
        <p className="font-heading text-2xl font-bold">v{APP_VERSION}</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-full glass px-3 py-2 text-xs font-semibold"
            onClick={() => {
              void navigator.serviceWorker?.getRegistrations().then((rs) => rs.forEach((r) => r.unregister()));
              caches?.keys?.().then((ks) => ks.forEach((k) => caches.delete(k)));
              setMsg(t("admin.purged"));
            }}
          >
            {t("admin.purgeSw")}
          </button>
          <Link to="/changelog" className="rounded-full glass px-3 py-2 text-xs font-semibold">
            Changelog
          </Link>
          <Link to="/downloads" className="rounded-full glass px-3 py-2 text-xs font-semibold">
            {t("footer.downloads")}
          </Link>
        </div>
      </section>
    </div>
  );
}

function SeoPane({ t }: { t: (k: string) => string }) {
  const [seo, setSeo] = useState<SeoSettings>(() => loadSeo());
  const [utm, setUtm] = useState({ url: "https://takohelp.com/", source: "instagram", medium: "social", campaign: "story" });
  const [copied, setCopied] = useState("");
  const origin = seo.canonical.replace(/\/$/, "") || "https://takohelp.com";
  const built = (() => {
    try {
      const u = new URL(utm.url);
      u.searchParams.set("utm_source", utm.source);
      u.searchParams.set("utm_medium", utm.medium);
      u.searchParams.set("utm_campaign", utm.campaign);
      return u.toString();
    } catch {
      return utm.url;
    }
  })();
  const jsonld = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "TakoLogs",
      url: origin,
      description: seo.description,
      applicationCategory: "HealthApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    },
    null,
    2,
  );
  const social = `${seo.title}\n${seo.description}\n${origin}`;

  function copy(text: string, id: string) {
    void navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(""), 1500);
  }

  return (
    <div className="space-y-3">
      <section className="glass-strong rounded-2xl p-5 space-y-3">
        <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">{t("admin.seoTitle")}</h2>
        {(
          [
            ["title", t("admin.seoTitle")],
            ["description", t("admin.seoDesc")],
            ["keywords", t("admin.seoKeys")],
            ["canonical", t("admin.seoCanon")],
            ["ogImage", t("admin.og")],
            ["robots", "robots"],
          ] as const
        ).map(([key, label]) => (
          <label key={key} className="block text-xs font-semibold text-sand-500">
            {label}
            {key === "description" ? (
              <textarea
                className="mt-1 w-full rounded-xl glass px-3 py-2.5 text-sm outline-none text-sand-900 dark:text-sand-50"
                value={seo[key]}
                onChange={(e) => setSeo({ ...seo, [key]: e.target.value })}
              />
            ) : (
              <input
                className="mt-1 w-full rounded-xl glass px-3 py-2.5 text-sm outline-none text-sand-900 dark:text-sand-50"
                value={seo[key]}
                onChange={(e) => setSeo({ ...seo, [key]: e.target.value })}
              />
            )}
          </label>
        ))}
        <button
          type="button"
          className="rounded-full bg-clay-500 text-white px-4 py-2 text-sm font-semibold"
          onClick={() => {
            saveSeo(seo);
            applySeo(seo);
          }}
        >
          {t("admin.applySeo")}
        </button>
        <div className="rounded-xl bg-white dark:bg-sand-950 p-4 border border-sand-200/60 dark:border-sand-800">
          <p className="text-[11px] text-sand-400 mb-1">{t("admin.previewGoogle")}</p>
          <p className="text-[#1a0dab] dark:text-sky-300 text-lg leading-tight truncate">{seo.title}</p>
          <p className="text-[#006621] dark:text-emerald-400 text-xs truncate">{seo.canonical}</p>
          <p className="text-sm text-sand-600 dark:text-sand-300 mt-1">{seo.description}</p>
        </div>
      </section>
      <section className="glass-strong rounded-2xl p-5 space-y-3">
        <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">{t("admin.utm")}</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {(
            [
              ["url", "URL"],
              ["source", t("admin.utmSource")],
              ["medium", t("admin.utmMedium")],
              ["campaign", t("admin.utmCampaign")],
            ] as const
          ).map(([k, label]) => (
            <label key={k} className="text-xs font-semibold text-sand-500">
              {label}
              <input
                className="mt-1 w-full rounded-xl glass px-3 py-2 text-sm outline-none text-sand-900 dark:text-sand-50"
                value={utm[k]}
                onChange={(e) => setUtm({ ...utm, [k]: e.target.value })}
              />
            </label>
          ))}
        </div>
        <p className="text-xs break-all text-sand-600 dark:text-sand-300">{built}</p>
        <button
          type="button"
          className="rounded-full glass px-3 py-2 text-xs font-semibold inline-flex items-center gap-1"
          onClick={() => copy(built, "utm")}
        >
          <Copy className="h-3.5 w-3.5" /> {copied === "utm" ? t("admin.copied") : t("admin.copy")}
        </button>
      </section>
      <section className="glass-strong rounded-2xl p-5 space-y-3">
        <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">{t("admin.social")}</h2>
        <pre className="text-xs whitespace-pre-wrap text-sand-700 dark:text-sand-200">{social}</pre>
        <button
          type="button"
          className="rounded-full glass px-3 py-2 text-xs font-semibold"
          onClick={() => copy(social, "so")}
        >
          {copied === "so" ? t("admin.copied") : t("admin.copy")}
        </button>
        <h3 className="font-heading font-bold pt-2">{t("admin.jsonld")}</h3>
        <pre className="text-[11px] overflow-auto max-h-40 text-sand-600 dark:text-sand-300">{jsonld}</pre>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-full glass px-3 py-2 text-xs font-semibold"
            onClick={() => downloadText("sitemap.xml", sitemapXml(origin), "application/xml")}
          >
            {t("admin.sitemap")}
          </button>
          <button
            type="button"
            className="rounded-full glass px-3 py-2 text-xs font-semibold"
            onClick={() => downloadText("robots.txt", robotsTxt(origin))}
          >
            {t("admin.robots")}
          </button>
          <button
            type="button"
            className="rounded-full glass px-3 py-2 text-xs font-semibold"
            onClick={() => {
              const news = loadUsers().filter((u) => u.newsletter);
              downloadText("newsletter.csv", usersCsv(news), "text/csv");
            }}
          >
            {t("admin.newsletterExport")}
          </button>
          <a
            href="https://search.google.com/search-console"
            target="_blank"
            rel="noreferrer"
            className="rounded-full glass px-3 py-2 text-xs font-semibold"
          >
            {t("admin.gsc")}
          </a>
        </div>
      </section>
      <button
        type="button"
        className="text-[11px] text-sand-400"
        onClick={() => {
          setSeo({ ...DEFAULT_SEO });
          saveSeo({ ...DEFAULT_SEO });
        }}
      >
        {t("common.reset")}
      </button>
    </div>
  );
}
