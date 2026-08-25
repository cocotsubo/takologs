import { Link } from "@tanstack/react-router";
import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

const KEY = "takologs-cookies";

export function CookieBanner() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v !== "accept" && v !== "refuse") setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const choose = (v: "accept" | "refuse") => {
    try {
      localStorage.setItem(KEY, v);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <div className="fixed inset-0 z-[95] bg-sand-200/60 dark:bg-black/55 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-md glass-strong glass-modal rounded-3xl p-5 space-y-3 animate-spring-in">
        <p className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50 flex items-center gap-2">
          <Cookie className="h-5 w-5 text-clay-500" /> {t("cookies.title")}
        </p>
        <p className="text-sm text-sand-700 dark:text-sand-200 leading-relaxed">
          {t("cookies.body")}{" "}
          <Link
            to="/legal"
            hash="cookies"
            className="font-semibold text-clay-500 underline underline-offset-2"
            onClick={() => setShow(false)}
          >
            {t("cookies.policy")}
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-2 pt-1">
          <button
            type="button"
            onClick={() => choose("accept")}
            className="flex-1 rounded-full bg-clay-500 text-white py-2.5 text-sm font-semibold"
          >
            {t("cookies.accept")}
          </button>
          <button
            type="button"
            onClick={() => choose("refuse")}
            className="flex-1 rounded-full glass py-2.5 text-sm font-semibold text-sand-800 dark:text-sand-100"
          >
            {t("cookies.refuse")}
          </button>
        </div>
      </div>
    </div>
  );
}
