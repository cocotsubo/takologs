import { Link, useNavigate } from "@tanstack/react-router";
import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { listExperiences } from "@/lib/journal-api";
import { useI18n } from "@/lib/i18n";
import { usePrefs } from "@/lib/prefs";
import {
  isSameDay,
  setDraft,
  type Experience,
} from "@/lib/journal";
import { getSubstance } from "@/lib/substances";

type JournalCtx = {
  requestAdd: (slug: string) => void;
  openNewLog: () => void;
};

const Ctx = createContext<JournalCtx | null>(null);

export function useAddToJournal() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAddToJournal must be used within JournalProvider");
  return ctx;
}

export function JournalProvider({ children }: { children: ReactNode }) {
  const { user } = useCurrentUserState();
  const navigate = useNavigate();
  const [picker, setPicker] = useState<Experience[] | null>(null);
  const { t, dateTag } = useI18n();
  const { syncFromExperiences, lastDoseFor } = usePrefs();

  const goLogin = (next: string) => {
    void navigate({ to: "/login", search: { next } });
  };

  const requestAdd = useCallback(
    (slug: string) => {
      const c = getSubstance(slug);
      if (!c) return;
      const last = lastDoseFor(c.name, c.slug);
      setDraft({
        substanceName: c.name,
        slug: c.slug,
        route: last?.route ?? c.doses[0]?.route ?? "Orale",
        dose: last?.dose ?? c.doses[0]?.common ?? null,
        doseUnit: last?.unit ?? c.doses[0]?.unit ?? "mg",
        color: c.color,
      });
      if (!user) {
        goLogin("/logs/new");
        return;
      }
      void (async () => {
        try {
          const list = await listExperiences();
          syncFromExperiences(list);
          if (list.length === 0) {
            void navigate({ to: "/logs/new" });
            return;
          }
          const latest = list[0];
          if (isSameDay(new Date(latest.experienceDate), new Date())) {
            void navigate({ to: "/logs/$id", params: { id: latest.id } });
            return;
          }
          setPicker(list.slice(0, 10));
        } catch {
          void navigate({ to: "/logs/new" });
        }
      })();
    },
    [user, navigate, syncFromExperiences, lastDoseFor],
  );

  const openNewLog = useCallback(() => {
    if (!user) {
      goLogin("/logs/new");
      return;
    }
    void (async () => {
      try {
        const list = await listExperiences();
        syncFromExperiences(list);
        const latest = list[0];
        if (latest && isSameDay(new Date(latest.experienceDate), new Date())) {
          void navigate({ to: "/logs/$id", params: { id: latest.id } });
          return;
        }
      } catch {
        /* fall through */
      }
      void navigate({ to: "/logs/new" });
    })();
  }, [user, navigate, syncFromExperiences]);

  const choose = (id: "new" | string) => {
    setPicker(null);
    if (id === "new") void navigate({ to: "/logs/new" });
    else void navigate({ to: "/logs/$id", params: { id } });
  };

  return (
    <Ctx.Provider value={{ requestAdd, openNewLog }}>
      {children}
      {picker ? (
        <div
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4 bg-sand-200/55 dark:bg-black/55 backdrop-blur-sm animate-fade-in"
          onClick={() => setPicker(null)}
        >
          <div
            className="glass-strong glass-modal rounded-2xl p-5 w-full max-w-sm animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">
                {t("picker.title")}
              </h3>
              <button
                type="button"
                onClick={() => setPicker(null)}
                className="text-sand-400 hover:text-sand-600 dark:hover:text-sand-200"
                aria-label={t("common.close")}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-sand-500 dark:text-sand-400 mb-4">
              {t("picker.body")}
            </p>
            <label className="text-xs font-semibold text-sand-600 dark:text-sand-300">
              {t("picker.existing")}
              <select
                defaultValue=""
                onChange={(e) => {
                  if (e.target.value) choose(e.target.value);
                }}
                className="mt-1 mb-3 w-full rounded-xl glass px-3 py-2.5 text-sm text-sand-900 dark:text-sand-50 outline-none"
              >
                <option value="" disabled>
                  {t("picker.choose")}
                </option>
                {picker.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.title} —{" "}
                    {new Date(e.experienceDate).toLocaleDateString(dateTag)}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={() => choose("new")}
              className="w-full rounded-xl bg-clay-500 text-white py-2.5 text-sm font-bold"
            >
              {t("picker.new")}
            </button>
            <Link
              to="/logs"
              onClick={() => setPicker(null)}
              className="mt-3 block text-center text-xs text-sand-500 hover:text-clay-500"
            >
              {t("picker.seeAll")}
            </Link>
          </div>
        </div>
      ) : null}
    </Ctx.Provider>
  );
}
