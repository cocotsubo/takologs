import { ChevronDown } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useI18n } from "@/lib/i18n";

const KEY = "takologs-session-open";

export function CollapsibleSession({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  const { t } = useI18n();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v === "0") setOpen(false);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = () => {
    setOpen((v) => {
      const next = !v;
      try {
        localStorage.setItem(KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  return (
    <div>
      <button
        type="button"
        onClick={toggle}
        className="w-full flex items-center justify-between gap-2 rounded-full glass px-3 py-1.5 text-xs font-heading font-semibold text-sand-700 dark:text-sand-200 hover:scale-[1.01] transition-transform"
        aria-expanded={open}
      >
        <span>{label ?? t("session.toggle")}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-500 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`session-roll ${open ? "is-open" : ""}`}>
        <div className="session-roll-inner">
          <div className="session-roll-face mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
