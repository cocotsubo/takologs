import { ALL_EMOJIS, EMOJI_CATS, EMOJI_COUNT } from "@/lib/emoji-data";
import { useI18n } from "@/lib/i18n";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

function firstGrapheme(raw: string) {
  const s = raw.trim();
  if (!s) return "";
  try {
    const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return [...seg.segment(s)][0]?.segment ?? s;
  } catch {
    return [...s][0] ?? "";
  }
}

export function EmojiPicker({
  value,
  onChange,
  compact,
}: {
  value: string;
  onChange: (emoji: string) => void;
  compact?: boolean;
}) {
  const { t, locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(EMOJI_CATS[0]?.id ?? "smileys");
  const [custom, setCustom] = useState(value);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => setCustom(value), [value]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const n = e.target as Node;
      if (btnRef.current?.contains(n) || panelRef.current?.contains(n)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    const id = window.setTimeout(() => searchRef.current?.focus(), 40);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(id);
    };
  }, [open]);

  const pick = (e: string) => {
    onChange(e);
    setCustom(e);
    setOpen(false);
  };

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return null;
    const fromCat = EMOJI_CATS.filter((c) => t(c.labelKey).toLowerCase().includes(needle)).flatMap(
      (c) => c.items,
    );
    const fromGlyph = ALL_EMOJIS.filter((e) => e.includes(q.trim()));
    const seen = new Set<string>();
    const out: string[] = [];
    for (const e of [...fromGlyph, ...fromCat]) {
      if (seen.has(e)) continue;
      seen.add(e);
      out.push(e);
      if (out.length >= 240) break;
    }
    return out;
  }, [q, t]);

  const active = EMOJI_CATS.find((c) => c.id === cat) ?? EMOJI_CATS[0];
  const grid = filtered ?? active?.items ?? [];

  const overlay =
    open && typeof document !== "undefined"
      ? createPortal(
          <div className="fixed inset-0 z-[220] flex items-end sm:items-center justify-center p-3" role="presentation" style={{ position: "fixed", zIndex: 220 }}>
            <button
              type="button"
              className="absolute inset-0 bg-sand-900/25 dark:bg-black/50"
              aria-label={t("common.close")}
              onClick={() => setOpen(false)}
            />
            <div
              ref={panelRef}
              className="relative w-[min(22rem,calc(100vw-1.25rem))] glass-modal rounded-3xl p-3 shadow-2xl animate-spring-in max-h-[min(78vh,34rem)] flex flex-col"
              style={{ zIndex: 221 }}
              role="dialog"
              aria-label={t("add.emoji")}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-2 px-1">
                <p className="text-xs font-heading font-bold text-sand-800 dark:text-sand-100">
                  {t("add.emoji")} · {EMOJI_COUNT}
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full p-1.5 text-sand-400 hover:text-sand-700"
                  aria-label={t("common.close")}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-2 rounded-full glass px-3 py-2 mb-2">
                <Search className="h-3.5 w-3.5 text-sand-400 shrink-0" />
                <input
                  ref={searchRef}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={locale === "en" ? "Search or paste" : "Rechercher ou coller"}
                  className="w-full bg-transparent outline-none text-sm text-sand-900 dark:text-sand-50"
                />
              </div>
              {!filtered ? (
                <div className="flex gap-1 overflow-x-auto pb-2 -mx-1 px-1">
                  {EMOJI_CATS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCat(c.id)}
                      title={t(c.labelKey)}
                      className={`h-8 min-w-8 px-2 rounded-full text-base shrink-0 ${
                        cat === c.id ? "bg-clay-500 text-white" : "glass"
                      }`}
                    >
                      {c.glyph}
                    </button>
                  ))}
                </div>
              ) : null}
              <div className="min-h-0 flex-1 overflow-y-auto grid grid-cols-8 gap-0.5 pr-0.5">
                {grid.map((e) => (
                  <button
                    key={e}
                    type="button"
                    onClick={() => pick(e)}
                    className={`h-9 w-full rounded-lg text-xl hover:bg-sand-200/70 dark:hover:bg-white/10 ${
                      value === e ? "bg-clay-500/25 ring-1 ring-clay-500" : ""
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
              <input
                value={custom}
                onChange={(e) => {
                  const g = firstGrapheme(e.target.value);
                  setCustom(e.target.value);
                  if (g) onChange(g);
                }}
                placeholder={locale === "en" ? "Or type any emoji" : "Ou tape n’importe quel emoji"}
                className="mt-2 w-full rounded-xl glass px-3 py-2 text-base outline-none text-sand-900 dark:text-sand-50"
                aria-label={t("add.emoji")}
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
        className={`rounded-xl glass flex items-center justify-center hover:scale-105 transition-transform relative z-[1] ${
          compact ? "h-10 w-10 text-xl" : "h-11 w-11 text-2xl"
        }`}
        title={t("substance.editEmoji")}
        aria-label={t("substance.editEmoji")}
        aria-expanded={open}
      >
        {value || "🐙"}
      </button>
      {overlay}
    </>
  );
}
