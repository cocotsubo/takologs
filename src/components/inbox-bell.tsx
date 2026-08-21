import { Bell, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { clearInbox, markInboxRead, readInbox, unreadCount, type InboxItem } from "@/lib/notify";
import { useI18n } from "@/lib/i18n";

const KIND_DOT: Record<string, string> = {
  mix: "bg-red-500",
  sos: "bg-red-600",
  lab: "bg-amber-500",
  lethal: "bg-red-600",
  care: "bg-orange-500",
  hydrate: "bg-sky-500",
  idle: "bg-amber-400",
  drive: "bg-clay-500",
  rest: "bg-sand-500",
  sitter: "bg-violet-500",
  phase: "bg-clay-400",
  heart: "bg-rose-500",
};

export function InboxBell() {
  const { t, locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<InboxItem[]>([]);
  const [n, setN] = useState(0);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const refresh = () => {
    setItems(readInbox());
    setN(unreadCount());
  };

  useEffect(() => {
    refresh();
    const on = () => refresh();
    window.addEventListener("takologs-inbox", on);
    window.addEventListener("takologs-toast", on);
    return () => {
      window.removeEventListener("takologs-inbox", on);
      window.removeEventListener("takologs-toast", on);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    markInboxRead();
    setN(0);
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

  const tag = locale === "en" ? "en-GB" : "fr-FR";

  const overlay =
    open && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            role="presentation"
          >
            <button
              type="button"
              className="absolute inset-0 bg-sand-900/25 dark:bg-black/50 cursor-default"
              aria-label={t("common.close")}
              onClick={() => setOpen(false)}
            />
            <div
              ref={panelRef}
              className="relative w-[min(22rem,calc(100vw-2rem))] glass-strong glass-modal rounded-3xl p-3 max-h-[min(70vh,28rem)] overflow-y-auto shadow-2xl animate-spring-in mx-auto"
              style={{ zIndex: 201 }}
              role="dialog"
              aria-modal="true"
              aria-label={t("inbox.title")}
            >
              <div className="flex items-center justify-between px-2 py-1.5">
                <p className="text-sm font-heading font-bold text-sand-800 dark:text-sand-100">
                  {t("inbox.title")}
                </p>
                <div className="flex items-center gap-2">
                  {items.length ? (
                    <button
                      type="button"
                      onClick={() => {
                        clearInbox();
                        setItems([]);
                      }}
                      className="text-[11px] font-semibold text-sand-500 hover:text-clay-500"
                    >
                      {t("inbox.clear")}
                    </button>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-full glass p-1.5 text-sand-500 hover:text-sand-800 dark:hover:text-sand-100"
                    aria-label={t("common.close")}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
              {items.length === 0 ? (
                <p className="px-2 py-10 text-center text-sm text-sand-500">{t("inbox.empty")}</p>
              ) : (
                items.slice(0, 30).map((it) => (
                  <div
                    key={it.id}
                    className="rounded-xl px-3 py-2 hover:bg-sand-200/40 dark:hover:bg-white/5 flex gap-2"
                  >
                    <span
                      className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${KIND_DOT[it.kind] || "bg-sand-400"}`}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-sand-900 dark:text-sand-50">{it.title}</p>
                      {it.body ? (
                        <p className="text-xs text-sand-600 dark:text-sand-300 mt-0.5">{it.body}</p>
                      ) : null}
                      <p className="text-[10px] text-sand-400 mt-1">
                        {new Date(it.at).toLocaleString(tag, {
                          hour: "2-digit",
                          minute: "2-digit",
                          day: "numeric",
                          month: "short",
                        })}
                      </p>
                    </div>
                  </div>
                ))
              )}
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
        className="relative rounded-full glass p-2.5 text-sand-700 dark:text-sand-200 hover:scale-105 transition-transform"
        aria-label={t("inbox.title")}
        title={t("inbox.title")}
        aria-expanded={open}
      >
        <Bell className="h-4 w-4" />
        {n > 0 ? (
          <span className="absolute -top-0.5 -right-0.5 min-w-[1.05rem] h-[1.05rem] px-1 rounded-full bg-clay-500 text-white text-[10px] font-bold grid place-items-center">
            {n > 9 ? "9+" : n}
          </span>
        ) : null}
      </button>
      {overlay}
    </>
  );
}
