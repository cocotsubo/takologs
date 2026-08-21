import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, Bot, HeartPulse, Mail, Shield, Sparkles, Upload } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SearchHalo } from "@/components/search-halo";
import { CategoryChip, SubstanceCard } from "@/components/ui-bits";
import { useAddToJournal } from "@/components/journal-context";
import { requestOpenSearch } from "@/components/search-palette";
import { CATEGORY_ORDER, substances } from "@/lib/substances";
import { useI18n } from "@/lib/i18n";
import { usePrefs } from "@/lib/prefs";
import { listExperiences, importJournalDump } from "@/lib/journal-api";
import { normalizeJournalImport } from "@/lib/pw-import";
import { pushToast } from "@/lib/notify";
import { subscribeNewsletter } from "@/lib/welcome-mail";
import { emojiForSubstanceText } from "@/lib/substance-label";
import { APP_VERSION } from "@/lib/version";
import { CHANGELOG } from "@/lib/changelog";
import alerts from "@/data/alerts.json";

export const Route = createFileRoute("/")({ component: Home });

export function Home() {
  const [cat, setCat] = useState("all");
  const { requestAdd } = useAddToJournal();
  const { t } = useI18n();
  const results = useMemo(
    () => (cat === "all" ? substances : substances.filter((u) => u.category === cat)),
    [cat],
  );

  const add = (slug: string) => requestAdd(slug);

  return (
    <div className="space-y-8 pb-6">
      <section className="px-4 pt-6 sm:pt-10">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-sand-700 dark:text-sand-200">
            <Shield className="h-3.5 w-3.5 text-clay-500" />
            {t("home.kicker")}
          </span>
          <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-sand-900 dark:text-sand-50 leading-[1.1]">
            {t("home.title1")}
            <br />
            <span className="bg-gradient-to-r from-clay-500 via-sand-600 to-clay-400 bg-clip-text text-transparent">
              {t("home.title2")}
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-sand-700 dark:text-sand-300">
            {t("home.subtitle")}
          </p>
          <div className="mx-auto mt-5 max-w-2xl">
            <SearchHalo>
            <button
              type="button"
              onClick={() => requestOpenSearch()}
              className="w-full glass-strong rounded-full p-2 pl-4 flex items-center gap-3 text-left hover:scale-[1.01] transition-transform"
            >
              <Bot className="h-5 w-5 text-clay-500 shrink-0" />
              <span className="flex-1 py-2.5 text-base text-sand-400 dark:text-sand-500">
                {t("home.searchPh")}
              </span>
              <span className="hidden sm:inline rounded-full glass px-3 py-1 text-[11px] font-semibold text-sand-400 mr-1">
                ⌘K
              </span>
            </button>
            </SearchHalo>
            <p className="mt-2 text-xs text-sand-500 dark:text-sand-400">
              {t("home.count", { n: results.length, total: substances.length })}
            </p>
          </div>
        </div>
      </section>

      <HomeInsights />

      <section className="px-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2 justify-center">
            <CategoryChip id="all" active={cat === "all"} onClick={() => setCat("all")} />
            {CATEGORY_ORDER.map((d) => (
              <CategoryChip
                key={d}
                id={d}
                active={cat === d}
                onClick={() => setCat(d)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {results.slice(0, 6).map((s) => (
            <SubstanceCard key={s.slug} sub={s} onAdd={() => add(s.slug)} />
          ))}
        </div>
        <div className="text-center mt-5">
          <Link
            to="/substances"
            className="inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-clay-500/25 hover:scale-105 transition-transform"
          >
            <Sparkles className="h-4 w-4" />
            {t("home.seeAll", { n: substances.length })}
          </Link>
        </div>
      </section>
    </div>
  );
}

function HomeInsights() {
  const { t, dateTag, locale } = useI18n();
  const { resolveEmoji } = usePrefs();
  const [nExp, setNExp] = useState(0);
  const [newsEmail, setNewsEmail] = useState("");
  const [newsBusy, setNewsBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const latest = (alerts as { id: string; date: string; expected: string; found: string; lab: string; level: string }[])
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))[0];

  const refreshCount = () => {
    void listExperiences()
      .then((list) => setNExp(list.length))
      .catch(() => {});
  };

  useEffect(() => {
    refreshCount();
  }, []);

  const onPwFile = async (file: File) => {
    try {
      const parsed = JSON.parse(await file.text()) as unknown;
      const experiences = normalizeJournalImport(parsed);
      const res = await importJournalDump({ data: { experiences } });
      pushToast({ title: t("profile.importOk", { n: res.imported }) });
      refreshCount();
    } catch {
      pushToast({ title: t("login.errGeneric") });
    }
  };

  return (
    <section className="px-4">
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <Link to="/alerts" className="glass-strong rounded-2xl p-4 card-hover block">
          <p className="text-[11px] font-heading font-semibold text-clay-500 inline-flex items-center gap-1">
            <Bell className="h-3.5 w-3.5" /> {t("home.cardsAlerts")}
          </p>
          {latest ? (
            <>
              <p className="mt-2 font-heading font-bold text-sand-900 dark:text-sand-50">
                {emojiForSubstanceText(latest.expected, resolveEmoji)} →{" "}
                {emojiForSubstanceText(latest.found, resolveEmoji)}
              </p>
              <p className="mt-1 text-xs text-sand-500">
                {latest.lab} · {new Date(latest.date).toLocaleDateString(dateTag, { day: "numeric", month: "short" })}
              </p>
            </>
          ) : (
            <p className="mt-2 text-sm text-sand-500">{t("home.cardsAlertsMore")}</p>
          )}
          <p className="mt-2 text-[11px] font-semibold text-clay-500">{t("home.cardsAlertsMore")}</p>
        </Link>
        <Link to="/logs" className="glass-strong rounded-2xl p-4 card-hover block">
          <p className="text-[11px] font-heading font-semibold text-clay-500 inline-flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5" /> {t("home.cardsStats")}
          </p>
          <p className="mt-2 font-heading text-2xl font-bold text-sand-900 dark:text-sand-50">
            {nExp === 0 ? t("home.cardsStatsEmpty") : t("home.cardsStatsN", { n: nExp })}
          </p>
          <p className="mt-2 text-[11px] font-semibold text-clay-500">{t("home.openLogs")}</p>
        </Link>
        <Link to="/reduction" className="glass-strong rounded-2xl p-4 card-hover block">
          <p className="text-[11px] font-heading font-semibold text-clay-500 inline-flex items-center gap-1">
            <HeartPulse className="h-3.5 w-3.5" /> {t("home.cardsHarm")}
          </p>
          <p className="mt-2 text-sm text-sand-700 dark:text-sand-200">{t("home.cardsHarmBody")}</p>
        </Link>
        <div className="glass-strong rounded-2xl p-4 card-hover">
          <p className="text-[11px] font-heading font-semibold text-clay-500 inline-flex items-center gap-1">
            <Upload className="h-3.5 w-3.5" /> {t("home.pwImport")}
          </p>
          <p className="mt-2 text-sm text-sand-700 dark:text-sand-200">{t("home.pwImportBody")}</p>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-clay-500 text-white px-3 py-1.5 text-xs font-semibold"
          >
            <Upload className="h-3.5 w-3.5" /> {t("profile.import")}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              e.target.value = "";
              if (f) void onPwFile(f);
            }}
          />
        </div>
        <Link to="/changelog" className="glass-strong rounded-2xl p-4 card-hover block">
          <p className="text-[11px] font-heading font-semibold text-clay-500 inline-flex items-center gap-1">
            <Shield className="h-3.5 w-3.5" /> {t("home.cardsUpdates")}
          </p>
          <p className="mt-2 font-heading text-2xl font-bold text-sand-900 dark:text-sand-50">
            v{APP_VERSION}
          </p>
          <p className="mt-1 text-sm text-sand-700 dark:text-sand-200">
            {CHANGELOG[CHANGELOG.length - 1]?.title} — {CHANGELOG[CHANGELOG.length - 1]?.items[0]}
          </p>
          <p className="mt-2 text-[11px] font-semibold text-clay-500">{t("changelog.open")}</p>
        </Link>
        <form
          className="rounded-2xl p-4 glass-strong card-hover"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            const mail = newsEmail.trim();
            if (!mail.includes("@")) {
              pushToast({ title: t("login.emailPh") });
              return;
            }
            setNewsBusy(true);
            void subscribeNewsletter(mail, locale === "en" ? "en" : "fr").then((r) => {
              setNewsBusy(false);
              if (r.ok) {
                setNewsEmail("");
                pushToast({ title: t("home.newsOk") });
              } else {
                pushToast({ title: t("home.newsFail") });
              }
            });
          }}
        >
          <p className="text-[11px] font-heading font-semibold text-clay-500 inline-flex items-center gap-1">
            <Mail className="h-3.5 w-3.5" /> {t("home.newsTitle")}
          </p>
          <p className="mt-2 text-sm text-sand-700 dark:text-sand-200">{t("home.newsBody")}</p>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            value={newsEmail}
            onChange={(e) => setNewsEmail(e.target.value)}
            placeholder={t("login.emailPh")}
            className="mt-3 w-full rounded-full glass px-4 py-3 text-base outline-none text-sand-900 dark:text-sand-50"
          />
          <button
            type="submit"
            disabled={newsBusy}
            className="mt-2 w-full rounded-full bg-clay-500 text-white px-3 py-2.5 text-sm font-semibold disabled:opacity-60"
          >
            {t("home.newsCta")}
          </button>
        </form>
      </div>
    </section>
  );
}
