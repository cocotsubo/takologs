import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  FileDown,
  LogIn,
  NotebookPen,
  Plus,
  Trash2,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { comboWarnings } from "@/lib/interactions";
import { type Experience, type Tolerance } from "@/lib/journal";
import {
  deleteExperience,
  loadJournal,
  updateToleranceDays,
} from "@/lib/journal-api";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { useI18n } from "@/lib/i18n";
import { usePrefs } from "@/lib/prefs";
import { StatsPanel } from "@/components/stats-panel";
import { TimelinePanel } from "@/components/timeline-panel";
import { CollapsibleSession } from "@/components/collapsible-session";
import { HeartRateBadge } from "@/components/heart-rate";
import { findSubstanceByName } from "@/lib/substances";
import { downloadExperiencePdf } from "@/lib/export-docs";
import { FEELING_SCALE } from "@/lib/journal";

export const Route = createFileRoute("/logs/")({ component: LogsPage });

export function LogsPage() {
  const { user, isPending } = useCurrentUserState();
  const navigate = useNavigate();
  const { t, dateTag } = useI18n();
  const { syncFromExperiences, resolveEmoji, resolveName } = usePrefs();
  const [exps, setExps] = useState<Experience[]>([]);
  const [tol, setTol] = useState<Tolerance[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"journal" | "stats" | "tolerance">("journal");
  const [filter, setFilter] = useState("");
  const [timeMode, setTimeMode] = useState<"clock" | "ago" | "gap">("clock");

  const userId = user?.id;
  const refresh = useCallback(async () => {
    if (!userId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const data = await loadJournal();
      setExps(data.experiences);
      setTol(data.tolerance);
      syncFromExperiences(data.experiences);
    } catch {
      setExps([]);
      setTol([]);
    } finally {
      setLoading(false);
    }
  }, [userId, syncFromExperiences]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  if (isPending) {
    return (
      <div className="px-4 py-20 text-center text-sand-500">{t("common.loading")}</div>
    );
  }

  if (!user) {
    return (
      <div className="px-4 py-16 pb-24 text-center animate-fade-up">
        <div className="mx-auto max-w-md glass-strong rounded-3xl p-8">
          <NotebookPen className="h-12 w-12 text-clay-500 mx-auto" />
          <h1 className="mt-4 font-heading text-2xl font-bold text-sand-900 dark:text-sand-50">
            {t("logs.signInTitle")}
          </h1>
          <p className="mt-2 text-sm text-sand-600 dark:text-sand-300">
            {t("logs.signInBody")}
          </p>
          <Link
            to="/login"
            search={{ next: "/logs" }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-clay-500/25 hover:scale-105 transition-transform"
          >
            {t("common.signIn")} <LogIn className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 pb-24">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between animate-fade-up gap-3">
          <div>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-sand-900 dark:text-sand-50">
              {t("logs.title")}
            </h1>
            <p className="mt-1 text-sm text-sand-600 dark:text-sand-300">
              {t("logs.subtitle")}
            </p>
          </div>
          <Link
            to="/logs/new"
            className="inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-4 py-2.5 text-sm font-semibold shadow-lg shadow-clay-500/25 hover:scale-105 transition-transform"
          >
            <Plus className="h-4 w-4" /> {t("logs.new")}
          </Link>
        </div>

        <div className="mt-5 flex gap-1 p-1 glass rounded-full w-full sm:w-auto">
          {(["journal", "stats", "tolerance"] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`flex-1 sm:flex-none rounded-full px-4 py-1.5 text-sm font-semibold ${
                tab === id
                  ? "bg-clay-500 text-white"
                  : "text-sand-600 dark:text-sand-300"
              }`}
            >
              {id === "journal"
                ? t("logs.tabJournal")
                : id === "stats"
                  ? t("logs.tabStats")
                  : t("logs.tabTolerance")}
            </button>
          ))}
        </div>

        {tab === "stats" ? (
          <div className="mt-6 space-y-6">
            <StatsPanel experiences={exps} />
            <CollapsibleSession>
              <TimelinePanel experiences={exps} />
            </CollapsibleSession>
            {exps.length > 0 ? (
              <div className="space-y-3">
                <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">
                  {t("logs.tabJournal")}
                </h2>
                {exps.map((e, i) => (
                  <ExperienceCard
                    key={e.id}
                    exp={e}
                    index={i}
                    onDelete={() => {
                      if (!confirm(t("logs.deleteConfirm"))) return;
                      void deleteExperience({ data: e.id }).then(refresh);
                    }}
                    onOpen={() =>
                      void navigate({ to: "/logs/$id", params: { id: e.id } })
                    }
                    dateTag={dateTag}
                    t={t}
                    timeMode={timeMode}
                    emojiOf={(name, slug) =>
                      resolveEmoji(
                        slug,
                        name,
                        findSubstanceByName(name)?.emoji ?? "•",
                      )
                    }
                    labelOf={(name, slug) => resolveName(slug, name)}
                  />
                ))}
              </div>
            ) : null}
          </div>
        ) : tab === "tolerance" ? (
          <div className="mt-8">
            <h2 className="font-heading text-xl font-bold text-sand-900 dark:text-sand-50">
              {t("logs.tolerance")}
            </h2>
            <p className="text-sm text-sand-500 dark:text-sand-400 mt-1">
              {t("logs.toleranceHint")}
            </p>
            {tol.length === 0 ? (
              <p className="mt-4 text-sm text-sand-400">{t("logs.noTolerance")}</p>
            ) : (
              <div className="mt-4 space-y-3">
                {tol.map((item) => {
                  const last = new Date(item.lastTakenDate + "T00:00:00");
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const days = Math.floor(
                    (today.getTime() - last.getTime()) / 86400000,
                  );
                  const remaining = item.resetDays - days;
                  const passed = remaining <= 0;
                  const known = findSubstanceByName(item.substanceName);
                  const emoji = resolveEmoji(
                    known?.slug,
                    item.substanceName,
                    known?.emoji ?? "•",
                  );
                  return (
                    <div
                      key={item.id}
                      className={`glass rounded-2xl p-4 border-l-4 ${
                        passed ? "border-l-emerald-500" : "border-l-amber-500"
                      }`}
                    >
                      <p className="font-heading font-bold text-sand-900 dark:text-sand-50">
                        {emoji} {resolveName(known?.slug, item.substanceName)}
                      </p>
                      <p className="text-xs text-sand-500">
                        {t("logs.lastTaken", {
                          date: last.toLocaleDateString(dateTag, {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }),
                        })}
                      </p>
                      <span
                        className={`inline-block mt-2 text-xs font-bold rounded-full px-2.5 py-1 ${
                          passed
                            ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                            : "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                        }`}
                      >
                        {passed
                          ? t("logs.tolReset")
                          : t("logs.tolActive", { n: Math.max(0, remaining) })}
                      </span>
                      <div className="mt-3 h-2 rounded-full bg-sand-200/50 dark:bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${Math.min(100, Math.max(4, (days / Math.max(1, item.resetDays)) * 100))}%`,
                            background: passed ? "#3d8a5f" : "hsl(var(--accent-h) 42% 48%)",
                          }}
                        />
                      </div>
                      <p className="mt-1 text-[11px] text-sand-400">
                        {Math.min(days, item.resetDays)} / {item.resetDays} j
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <input
                          type="number"
                          min={1}
                          defaultValue={item.resetDays}
                          className="w-16 rounded-lg glass px-2 py-1 text-base"
                          onBlur={(e) => {
                            const v = parseInt(e.target.value, 10);
                            if (v >= 1) {
                              void updateToleranceDays({
                                data: { id: item.id, days: v },
                              }).then(() => refresh());
                            }
                          }}
                        />
                        <span className="text-xs text-sand-400">{t("logs.resetDays")}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : loading ? (
          <div className="mt-12 text-center text-sand-500">{t("common.loading")}</div>
        ) : exps.length === 0 ? (
          <div className="mt-12 glass rounded-2xl p-12 text-center animate-fade-in">
            <NotebookPen className="h-10 w-10 text-sand-400 mx-auto" />
            <p className="mt-4 text-sand-600 dark:text-sand-300">{t("logs.empty")}</p>
            <Link to="/logs/new" className="mt-4 inline-block text-clay-500 font-semibold">
              {t("logs.createFirst")}
            </Link>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            <input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder={t("logs.searchPh")}
              className="w-full rounded-full spotlight-glass px-4 py-2.5 text-base text-sand-900 dark:text-sand-50 outline-none"
            />
            <div className="flex flex-wrap gap-1.5">
              {(["clock", "ago", "gap"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setTimeMode(m)}
                  className={`rounded-full px-3 py-1 text-xs font-heading font-semibold ${
                    timeMode === m ? "bg-clay-500 text-white" : "glass"
                  }`}
                >
                  {m === "clock" ? "Heure" : m === "ago" ? "Depuis" : "Intervalle"}
                </button>
              ))}
            </div>
            {exps
              .filter((exp) => {
                const q = filter.trim().toLowerCase();
                if (!q) return true;
                return (
                  exp.title.toLowerCase().includes(q) ||
                  exp.notes.toLowerCase().includes(q) ||
                  exp.ingestions.some(
                    (i) =>
                      i.substanceName.toLowerCase().includes(q) ||
                      resolveName(i.slug, i.substanceName).toLowerCase().includes(q) ||
                      i.notes.toLowerCase().includes(q),
                  )
                );
              })
              .map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={i}
                dateTag={dateTag}
                t={t}
                emojiOf={(name, slug) => {
                  const known = findSubstanceByName(name);
                  return resolveEmoji(slug ?? known?.slug, name, known?.emoji ?? "•");
                }}
                labelOf={(name, slug) => resolveName(slug, name)}
                onDelete={async () => {
                  if (!confirm(t("logs.deleteConfirm"))) return;
                  await deleteExperience({ data: exp.id });
                  void refresh();
                }}
                onOpen={() => navigate({ to: "/logs/$id", params: { id: exp.id } })}
                timeMode={timeMode}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ExperienceCard({
  exp,
  index,
  onDelete,
  onOpen,
  dateTag,
  t,
  emojiOf,
  labelOf,
  timeMode,
}: {
  exp: Experience;
  index: number;
  onDelete: () => void;
  onOpen: () => void;
  dateTag: string;
  t: (key: string, vars?: Record<string, string | number>) => string;
  emojiOf: (name: string, slug?: string | null) => string;
  labelOf: (name: string, slug?: string | null) => string;
  timeMode: "clock" | "ago" | "gap";
}) {
  const date = new Date(exp.experienceDate).toLocaleDateString(dateTag, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const warns = comboWarnings(exp.ingestions.map((i) => i.substanceName));
  const danger = warns.some((w) => w.level === "dangerous");
  const caution = warns.some((w) => w.level === "caution");
  const totals = (() => {
    const map = new Map<
      string,
      {
        name: string;
        slug?: string | null;
        unit: string;
        total: number;
        count: number;
        color?: string | null;
        hasDose: boolean;
      }
    >();
    exp.ingestions.forEach((u) => {
      const key = `${u.substanceName}__${u.doseUnit}`;
      const y = map.get(key);
      if (y) {
        if (u.dose != null) {
          y.total += u.dose;
          y.hasDose = true;
        }
        y.count += 1;
      } else {
        map.set(key, {
          name: u.substanceName,
          slug: u.slug,
          unit: u.doseUnit,
          total: u.dose ?? 0,
          count: 1,
          color: u.color,
          hasDose: u.dose != null,
        });
      }
    });
    return Array.from(map.values());
  })();

  return (
    <div
      style={{ animationDelay: `${Math.min(index * 60, 300)}ms` }}
      className="glass card-hover rounded-2xl p-5 animate-fade-up"
    >
      <div className="flex items-start justify-between gap-3">
        <button type="button" onClick={onOpen} className="text-left min-w-0 flex-1">
          <div className="flex items-center gap-2 text-xs text-sand-500 dark:text-sand-400">
            <Calendar className="h-3.5 w-3.5" /> {date}
            {danger || caution ? (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  danger
                    ? "bg-red-500/15 text-red-600 dark:text-red-400"
                    : "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                }`}
              >
                <AlertTriangle className="h-3 w-3" />{" "}
                {danger ? t("logs.danger") : t("logs.caution")}
              </span>
            ) : null}
          </div>
          <h3 className="mt-1 font-heading text-lg font-bold text-sand-900 dark:text-sand-50 truncate">
            {exp.feeling
              ? `${FEELING_SCALE.find((f) => f.n === exp.feeling)?.emoji ?? ""} `
              : ""}
            {exp.title}
          </h3>
          <HeartRateBadge points={exp.heartRate} className="mt-1" />
          {totals.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {totals.map((d) => (
                <span
                  key={`${d.name}__${d.unit}`}
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
                  style={{
                    background: `${d.color ?? "#b07a45"}22`,
                    color: d.color ?? "#b07a45",
                  }}
                >
                  <span>{emojiOf(d.name, d.slug)}</span>
                  {labelOf(d.name, d.slug)}
                  {d.hasDose ? ` · ${d.total}${d.unit}` : ""}
                  {d.count > 1
                    ? ` (${d.count}${t("logs.times")}${d.hasDose ? ` ${t("logs.stacked")}` : ""})`
                    : ""}
                </span>
              ))}
            </div>
          ) : null}
          {exp.ingestions.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {exp.ingestions.map((ing, i) => {
                const d = new Date(ing.ingestionTime);
                let label = d.toLocaleTimeString(dateTag, {
                  hour: "2-digit",
                  minute: "2-digit",
                });
                if (timeMode === "ago") {
                  const m = Math.max(0, Math.round((Date.now() - d.getTime()) / 60000));
                  label =
                    m < 60
                      ? `${m} min`
                      : m < 1440
                        ? `${Math.round(m / 60)} h`
                        : `${Math.round(m / 1440)} j`;
                } else if (timeMode === "gap") {
                  const prev = exp.ingestions[i - 1];
                  if (prev) {
                    const g = Math.round(
                      (d.getTime() - new Date(prev.ingestionTime).getTime()) / 60000,
                    );
                    label = `+${g} min`;
                  }
                }
                return (
                  <span
                    key={ing.id}
                    className="text-[11px] rounded-full glass px-2 py-0.5 text-sand-600 dark:text-sand-300"
                  >
                    {emojiOf(ing.substanceName, ing.slug)} {labelOf(ing.substanceName, ing.slug)} · {label}
                  </span>
                );
              })}
            </div>
          ) : null}
        </button>
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => {
              void downloadExperiencePdf(
                exp,
                dateTag,
                totals.map((d) => ({
                  name: labelOf(d.name, d.slug),
                  emoji: emojiOf(d.name, d.slug),
                  unit: d.unit,
                  total: d.hasDose ? d.total : null,
                  count: d.count,
                  color: d.color ?? "#b07a45",
                })),
              );
            }}
            className="rounded-full p-2 text-sand-400 hover:text-clay-500"
            aria-label="PDF"
          >
            <FileDown className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="rounded-full p-2 text-sand-400 hover:text-red-500 hover:bg-red-500/10 transition-colors"
            aria-label={t("common.delete")}
          >
            <Trash2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onOpen}
            className="rounded-full p-2 text-sand-500 hover:text-clay-500"
            aria-label={t("logs.open")}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
