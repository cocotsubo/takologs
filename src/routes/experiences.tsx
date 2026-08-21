import { createFileRoute, Link } from "@tanstack/react-router";
import { MessagesSquare, Plus, X } from "lucide-react";
import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { PageHero } from "@/components/ui-bits";
import { useI18n } from "@/lib/i18n";
import { uuid } from "@/lib/uuid";
import reports from "@/data/reports.json";

type Report = {
  id: string;
  slug: string;
  substance: string;
  source: string;
  year: number;
  title: string;
  author: string;
  excerpt: string;
  body?: string;
  effects?: string;
  url?: string;
};

const USER_KEY = "takologs-user-reports";

function readMine(): Report[] {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as Report[]) : [];
  } catch {
    return [];
  }
}

export const Route = createFileRoute("/experiences")({ component: ExperiencesPage });

export function ExperiencesPage() {
  const { t } = useI18n();
  const [q, setQ] = useState("");
  const [src, setSrc] = useState("all");
  const [mine, setMine] = useState<Report[]>(() =>
    typeof window === "undefined" ? [] : readMine(),
  );
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState<Report | null>(null);
  const [form, setForm] = useState({ title: "", substance: "", excerpt: "" });

  const all = useMemo(() => [...mine, ...(reports as Report[])], [mine]);
  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return all.filter((r) => {
      if (src !== "all" && r.source !== src) return false;
      if (!query) return true;
      return `${r.title} ${r.substance} ${r.excerpt} ${r.source}`.toLowerCase().includes(query);
    });
  }, [all, q, src]);

  const publish = () => {
    if (!form.title.trim() || !form.excerpt.trim()) return;
    const row: Report = {
      id: uuid(),
      slug: form.substance.toLowerCase().replace(/\s+/g, "-"),
      substance: form.substance || "Autre",
      source: "Vous",
      year: new Date().getFullYear(),
      title: form.title.trim(),
      author: "Vous",
      excerpt: form.excerpt.trim(),
    };
    const next = [row, ...mine];
    setMine(next);
    localStorage.setItem(USER_KEY, JSON.stringify(next));
    setForm({ title: "", substance: "", excerpt: "" });
    setOpen(false);
  };

  return (
    <div className="px-4 py-10 pb-28">
      <div className="mx-auto max-w-3xl space-y-5">
        <PageHero
          kicker={t("nav.experiences")}
          icon={<MessagesSquare className="h-3.5 w-3.5" />}
          title={t("reports.title")}
          subtitle={t("reports.subtitle")}
        />
        <div className="flex flex-wrap gap-2">
          {["all", "Erowid", "Psychoactif", "Vous"].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSrc(s)}
              className={`rounded-full px-3 py-1.5 text-sm font-heading font-semibold ${
                src === s ? "bg-clay-500 text-white" : "glass"
              }`}
            >
              {s === "all" ? t("common.all") : s}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="ml-auto rounded-full bg-clay-500 text-white px-3 py-1.5 text-sm font-semibold inline-flex items-center gap-1"
          >
            <Plus className="h-4 w-4" /> {t("reports.add")}
          </button>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("common.searchPlaceholder")}
          className="w-full rounded-2xl glass px-4 py-3 text-base outline-none"
        />
        {open ? (
          <div className="glass-strong rounded-2xl p-4 space-y-2 animate-fade-up">
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder={t("reports.placeholder")}
              className="w-full rounded-xl glass px-3 py-2.5 text-base font-heading font-bold outline-none"
            />
            <input
              value={form.substance}
              onChange={(e) => setForm({ ...form, substance: e.target.value })}
              placeholder={t("nav.substances")}
              className="w-full rounded-xl glass px-3 py-2.5 text-base outline-none"
            />
            <textarea
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              placeholder={t("reports.bodyPh")}
              rows={4}
              className="w-full rounded-xl glass px-3 py-2.5 text-base outline-none resize-none"
            />
            <button
              type="button"
              onClick={publish}
              className="rounded-full bg-clay-500 text-white px-4 py-2 text-sm font-semibold"
            >
              {t("common.save")}
            </button>
          </div>
        ) : null}
        <div className="space-y-3">
          {list.map((r) => (
            <article
              key={r.id}
              role="button"
              tabIndex={0}
              onClick={() => setDetail(r)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setDetail(r);
              }}
              className="glass-strong rounded-2xl p-4 card-hover text-left cursor-pointer"
            >
              <p className="text-[11px] font-heading font-semibold text-clay-500">
                {r.source} · {r.year} · {r.substance}
              </p>
              <h2 className="mt-1 font-heading font-bold text-sand-900 dark:text-sand-50">
                {r.title}
              </h2>
              <p className="mt-2 text-sm text-sand-600 dark:text-sand-300 leading-relaxed line-clamp-3">
                {r.excerpt}
              </p>
            </article>
          ))}
        </div>
        {detail && typeof document !== "undefined"
          ? createPortal(
          <div
            className="fixed inset-0 z-[90] bg-sand-200/55 dark:bg-black/50 backdrop-blur-sm px-4 flex items-center justify-center"
            style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
            onClick={() => setDetail(null)}
          >
            <div
              className="w-full max-w-lg max-h-[78vh] overflow-y-auto glass-strong glass-modal rounded-3xl p-5 animate-spring-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-heading font-semibold text-clay-500">
                    {detail.source} · {detail.year} · {detail.author}
                  </p>
                  <h2 className="mt-1 font-heading text-xl font-bold text-sand-900 dark:text-sand-50">
                    {detail.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setDetail(null)}
                  className="rounded-full glass p-2"
                  aria-label={t("common.close")}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-4 text-sm leading-relaxed whitespace-pre-wrap text-sand-700 dark:text-sand-200">
                {detail.body || detail.excerpt}
              </p>
              {detail.slug ? (
                <Link
                  to="/substance/$slug"
                  params={{ slug: detail.slug }}
                  className="mt-4 inline-block text-sm font-semibold text-clay-500"
                  onClick={() => setDetail(null)}
                >
                  {detail.substance}
                </Link>
              ) : null}
              {detail.url ? (
                <a
                  href={detail.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-xs text-sand-400"
                >
                  {detail.url}
                </a>
              ) : null}
            </div>
          </div>,
          document.body,
        )
          : null}
      </div>
    </div>
  );
}
