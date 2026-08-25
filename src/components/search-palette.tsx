import { Link, useNavigate } from "@tanstack/react-router";
import { Bot, Camera, Search, Send, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SearchHalo } from "@/components/search-halo";
import { Thread, useChat } from "@/components/chatbot";
import { useI18n } from "@/lib/i18n";
import { usePrefs } from "@/lib/prefs";
import { searchSubstances } from "@/lib/substances";
import { displaySubstanceName } from "@/lib/substance-i18n";
import { isLethalLowDose, lethalFromQuery } from "@/lib/risk";
import { RiskDialog } from "@/components/risk-modals";
import { NAV, PRIMARY_NAV } from "@/lib/nav";

export const OPEN_SEARCH_EVENT = "takologs-open-search";

export function requestOpenSearch(prefill = "") {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_SEARCH_EVENT, { detail: prefill }));
}

export function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState("");

  useEffect(() => {
    const onOpen = (e: Event) => {
      const pre = (e as CustomEvent<string>).detail;
      setPrefill(typeof pre === "string" ? pre : "");
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPrefill("");
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener(OPEN_SEARCH_EVENT, onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(OPEN_SEARCH_EVENT, onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!open) return null;
  return <SearchPaletteOpen onClose={() => setOpen(false)} initial={prefill} />;
}

function SearchPaletteOpen({ onClose, initial }: { onClose: () => void; initial: string }) {
  const { t, locale } = useI18n();
  const { resolveEmoji, resolveName } = usePrefs();
  const navigate = useNavigate();
  const chat = useChat();
  const [q, setQ] = useState(initial);
  const [lethal, setLethal] = useState<string | null>(null);
  const dismissed = useRef("");
  const inputRef = useRef<HTMLInputElement>(null);
  const camRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const id = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => window.clearTimeout(id);
  }, []);

  const pages = useMemo(() => {
    const e = q.trim().toLowerCase();
    const source = e
      ? NAV
      : NAV.filter((n) => (PRIMARY_NAV as readonly string[]).includes(n.path) || n.path === "/profile" || n.path === "/chat");
    return source.filter((n) => {
      const label = t(n.labelKey).toLowerCase();
      return !e || label.includes(e) || n.path.includes(e);
    });
  }, [q, t]);

  const subs = useMemo(
    () => (q.trim() ? searchSubstances(q).slice(0, 6) : []),
    [q],
  );

  useEffect(() => {
    const hit = subs.find((s) => isLethalLowDose(s.slug, s));
    const name = hit?.name || (lethalFromQuery(q) ? q.trim() : "");
    if (name && dismissed.current !== name.toLowerCase()) setLethal(name);
  }, [q, subs]);

  const send = () => {
    const v = q.trim();
    if (!v || chat.busy) return;
    setQ("");
    void chat.send(v);
  };

  const suggestions = [t("chat.s1"), t("chat.s2"), t("chat.s3")];

  return (
    <div
      className="fixed inset-0 z-[110] bg-sand-100/70 dark:bg-black/55 backdrop-blur-[2px] animate-fade-in p-4 flex items-start justify-center"
      style={{ paddingTop: "max(8vh, calc(env(safe-area-inset-top, 0px) + 12px))" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg glass-strong glass-modal rounded-[2rem] p-3 animate-spring-in flex flex-col max-h-[min(82vh,720px)]"
        onClick={(e) => e.stopPropagation()}
      >
        <SearchHalo>
        <div className="flex items-center gap-2 rounded-full bg-sand-50 dark:bg-black/40 border border-sand-200/90 dark:border-white/10 px-4 py-3">
          <Bot className="h-5 w-5 text-clay-500 shrink-0" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder={t("home.searchPh")}
            className="w-full bg-transparent outline-none text-base text-sand-900 dark:text-sand-50 placeholder:text-sand-500"
          />
          <button
            type="button"
            onClick={() => camRef.current?.click()}
            disabled={chat.busy}
            className="rounded-full p-1.5 text-clay-500 disabled:text-sand-300"
            aria-label={t("chat.photo")}
            title={t("chat.photo")}
          >
            <Camera className="h-4 w-4" />
          </button>
          <input
            ref={camRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="sr-only"
            onChange={(e) => {
              const f = e.target.files?.[0];
              e.target.value = "";
              if (f) void chat.sendPhoto(f);
            }}
          />
          <button
            type="button"
            onClick={send}
            disabled={chat.busy || !q.trim()}
            className="rounded-full p-1.5 text-clay-500 disabled:text-sand-300"
            aria-label={t("chat.send")}
          >
            <Send className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-sand-400 hover:text-sand-700"
            aria-label={t("common.close")}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        </SearchHalo>

        <div className="mt-2 min-h-0 flex-1 overflow-y-auto">
          {chat.messages.length > 0 || chat.busy ? (
            <div className="mb-2 max-h-[38vh] overflow-y-auto px-1">
              <Thread
                messages={chat.messages}
                busy={chat.busy}
                onRun={chat.run}
                running={chat.running}
                onOpenLog={(id) => {
                  chat.openLog(id);
                  onClose();
                }}
              />
            </div>
          ) : !q.trim() ? (
            <div className="px-2 py-3">
              <p className="text-[11px] font-heading font-semibold text-clay-500 mb-2">
                TakoAI
              </p>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => void chat.send(s)}
                    className="rounded-full bg-sand-50 dark:bg-white/10 border border-sand-200/80 dark:border-white/10 px-3 py-1.5 text-xs font-semibold text-sand-800 dark:text-sand-100"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {pages.length > 0 && q.trim() ? (
            <div className="mb-1">
              <p className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-sand-500">
                {t("search.pages")}
              </p>
              {pages.slice(0, 4).map((p) => (
                <button
                  key={p.path}
                  type="button"
                  onClick={() => {
                    onClose();
                    void navigate({ to: p.path });
                  }}
                  className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-sand-200/50 dark:hover:bg-sand-800/40"
                >
                  <p.icon className="h-4 w-4 text-clay-500" />
                  <span className="text-sm font-semibold text-sand-900 dark:text-sand-50">
                    {t(p.labelKey)}
                  </span>
                </button>
              ))}
            </div>
          ) : null}

          {subs.length > 0 ? (
            <div>
              <p className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-sand-500">
                {t("search.substances")}
              </p>
              {subs.map((s) => (
                <Link
                  key={s.slug}
                  to="/substance/$slug"
                  params={{ slug: s.slug }}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-sand-200/50 dark:hover:bg-sand-800/40"
                >
                  <span className="text-lg">
                    {resolveEmoji(s.slug, s.name, s.emoji)}
                  </span>
                  <span className="text-sm font-semibold text-sand-900 dark:text-sand-50">
                    {displaySubstanceName(s, locale, resolveName(s.slug, s.name))}
                  </span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <p className="px-3 pt-2 pb-1 text-[11px] text-sand-600 dark:text-sand-400 flex items-center gap-1.5">
          <Search className="h-3 w-3" />
          {t("search.hint", {
            key:
              typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform)
                ? "⌘K"
                : "Ctrl+K",
          })}
        </p>
        <p className="px-3 pb-1 text-[10px] text-sand-500">{t("chat.photoHint")}</p>
      </div>
      {lethal ? (
        <RiskDialog
          kind="lethal"
          name={lethal}
          onClose={() => {
            dismissed.current = lethal.toLowerCase();
            setLethal(null);
          }}
        />
      ) : null}
    </div>
  );
}
