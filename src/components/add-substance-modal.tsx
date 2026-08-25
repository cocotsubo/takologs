import { AlertTriangle, Plus, Save, Star, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { EmojiPicker } from "@/components/emoji-picker";
import {
  INGESTION_COLORS,
  INGESTION_ROUTES,
  SHULGIN_SCALE,
  localDateTimeInput,
  type DraftIngestion,
  type Ingestion,
  type IngestionInput,
} from "@/lib/journal";
import { warningsAgainst } from "@/lib/interactions";
import { useI18n } from "@/lib/i18n";
import { displaySubstanceName } from "@/lib/substance-i18n";
import { usePrefs } from "@/lib/prefs";
import { classifyDose, doseTableFor, exceedsHeavy, DOSE_CLASS_COLOR } from "@/lib/dose";
import {
  durationCurve,
  findSubstanceByName,
  formatMins,
  searchSubstances,
  substances,
  DOSE_KEYS,
  type Substance,
} from "@/lib/substances";

type Props = {
  onClose: () => void;
  onSave: (input: IngestionInput) => void | Promise<void>;
  defaultDate: string;
  draft?: DraftIngestion | null;
  initial?: Ingestion | null;
  existingNames: string[];
  error?: string | null;
  onShulgin?: (v: string | null) => void;
  currentShulgin?: string | null;
  ingestionCount?: number;
};

function useVisualBox() {
  const [box, setBox] = useState({ top: 0, height: 800 });
  useEffect(() => {
    const sync = () => {
      const vv = window.visualViewport;
      setBox({
        top: vv?.offsetTop ?? 0,
        height: vv?.height ?? window.innerHeight,
      });
    };
    sync();
    window.visualViewport?.addEventListener("resize", sync);
    window.visualViewport?.addEventListener("scroll", sync);
    window.addEventListener("resize", sync);
    return () => {
      window.visualViewport?.removeEventListener("resize", sync);
      window.visualViewport?.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);
  return box;
}

export function AddSubstanceModal({
  onClose,
  onSave,
  defaultDate,
  draft,
  initial,
  existingNames,
  error,
  onShulgin,
  currentShulgin,
  ingestionCount = 0,
}: Props) {
  const { t, locale } = useI18n();
  const box = useVisualBox();
  const { usageFor, lastDoseFor, resolveEmoji, resolveColor, resolveName, setEmoji, recordIngestion, isFavorite, toggleFavorite } = usePrefs();
  const editing = !!initial;
  const [name, setName] = useState(
    initial?.substanceName ?? draft?.substanceName ?? "",
  );
  const [route, setRoute] = useState(initial?.route ?? draft?.route ?? "Orale");
  const [dose, setDose] = useState(
    initial?.dose != null
      ? String(initial.dose)
      : draft?.dose != null
        ? String(draft.dose)
        : "",
  );
  const [unit, setUnit] = useState(
    initial?.doseUnit ?? draft?.doseUnit ?? "mg",
  );
  const [time, setTime] = useState(
    initial
      ? localDateTimeInput(new Date(initial.ingestionTime))
      : (draft?.ingestionTime ?? defaultDate),
  );
  const [notes, setNotes] = useState(initial?.notes ?? draft?.notes ?? "");
  const [color, setColor] = useState(
    initial?.color ?? draft?.color ?? "#c9a15a",
  );
  const [q, setQ] = useState("");
  const [picking, setPicking] = useState(!draft && !initial);
  const [dangerOpen, setDangerOpen] = useState(false);
  const [emoji, setEmojiLocal] = useState(() =>
    resolveEmoji(
      initial?.slug ?? draft?.slug,
      initial?.substanceName ?? draft?.substanceName ?? "",
      findSubstanceByName(initial?.substanceName ?? draft?.substanceName ?? "")?.emoji ?? "🐙",
    ),
  );
  const [shulginPick, setShulginPick] = useState<string | null>(currentShulgin ?? null);

  const rankedCatalog = useMemo(() => {
    const list = q.trim() ? searchSubstances(q) : [...substances];
    return list
      .map((s) => ({
        s,
        used: usageFor(s.name, s.slug),
        fav: isFavorite(s.slug),
      }))
      .sort((a, b) => {
        if (!q.trim()) {
          if (a.fav !== b.fav) return a.fav ? -1 : 1;
          if (b.used !== a.used) return b.used - a.used;
        }
        return 0;
      })
      .slice(0, 40);
  }, [q, usageFor, isFavorite]);

  const frequent = useMemo(() => {
    if (q.trim()) return [];
    return rankedCatalog.filter((x) => x.used > 0 && !x.fav).slice(0, 8);
  }, [q, rankedCatalog]);

  const favs = useMemo(() => {
    if (q.trim()) return [];
    return rankedCatalog.filter((x) => x.fav);
  }, [q, rankedCatalog]);

  const rest = useMemo(() => {
    if (q.trim()) return rankedCatalog;
    const skip = new Set([
      ...frequent.map((x) => x.s.slug),
      ...favs.map((x) => x.s.slug),
    ]);
    return rankedCatalog.filter((x) => !skip.has(x.s.slug));
  }, [q, rankedCatalog, frequent, favs]);

  const pairWarn = useMemo(
    () => (name.trim() ? warningsAgainst(name.trim(), existingNames) : []),
    [name, existingNames],
  );
  const dangerous = pairWarn.filter((w) => w.level === "dangerous");
  const caution = pairWarn.filter((w) => w.level === "caution");
  const known = findSubstanceByName(name);
  const curve = known ? durationCurve(known) : null;
  const last = lastDoseFor(name, known?.slug ?? draft?.slug ?? initial?.slug);
  const table = doseTableFor(known, route, unit);
  const doseNum = dose.trim() ? Number(dose) : null;
  const currentClass = classifyDose(known, doseNum, unit, route);
  const tooHeavy = exceedsHeavy(known, doseNum, unit, route);

  const applySubstance = (s: Substance) => {
    const lastUsed = lastDoseFor(s.name, s.slug);
    setName(s.name);
    setRoute(lastUsed?.route ?? s.doses[0]?.route ?? "Orale");
    setUnit(lastUsed?.unit ?? s.doses[0]?.unit ?? "mg");
    const prefill =
      lastUsed?.dose != null
        ? String(lastUsed.dose)
        : s.doses[0]?.common != null
          ? String(s.doses[0].common)
          : "";
    setDose(prefill);
    setColor(resolveColor(s.slug, s.name, s.color));
    setEmojiLocal(resolveEmoji(s.slug, s.name, s.emoji));
    setPicking(false);
  };

  const useCustom = () => {
    const v = q.trim();
    if (!v) return;
    setName(v);
    setColor(
      INGESTION_COLORS[Math.floor(Math.random() * INGESTION_COLORS.length)],
    );
    const lastUsed = lastDoseFor(v);
    if (lastUsed) {
      setRoute(lastUsed.route);
      setUnit(lastUsed.unit);
      if (lastUsed.dose != null) setDose(String(lastUsed.dose));
    }
    setEmojiLocal(resolveEmoji(null, v, "🧪"));
    setPicking(false);
  };

  const payload = (): IngestionInput => ({
    substanceName: name.trim(),
    slug: known?.slug ?? null,
    route,
    dose: dose.trim() ? Number(dose) : null,
    doseUnit: unit,
    color,
    ingestionTime: new Date(time).toISOString(),
    notes,
  });

  const commit = () => {
    if (!name.trim()) return;
    const data = payload();
    const key = known?.slug ?? name.trim().toLowerCase();
    setEmoji(key, emoji);
    if (onShulgin) onShulgin(shulginPick);
    recordIngestion(data);
    void onSave(data);
  };

  const trySave = () => {
    if (!name.trim()) return;
    if (dangerous.length > 0) {
      setDangerOpen(true);
      return;
    }
    commit();
  };

  const renderHit = (s: Substance, used: number) => (
    <div
      key={s.slug}
      className="w-full flex items-center gap-1 rounded-xl glass glass-tint"
      style={{ ["--tint" as string]: resolveColor(s.slug, s.name, s.color) }}
    >
      <button
        type="button"
        onClick={() => applySubstance(s)}
        className="flex-1 flex items-center gap-3 p-2.5 text-left min-w-0"
      >
        <span className="text-lg w-7 text-center shrink-0">
          {resolveEmoji(s.slug, s.name, s.emoji)}
        </span>
        <span className="text-sm font-semibold text-sand-900 dark:text-sand-50 min-w-0 truncate">
          {displaySubstanceName(s, locale, resolveName(s.slug, s.name))}
        </span>
        {used > 0 ? (
          <span className="ml-auto text-[10px] font-bold text-clay-500 shrink-0">
            {t("add.usedN", { n: used })}
          </span>
        ) : (
          <span
            className="ml-auto h-2 w-2 rounded-full shrink-0"
            style={{ background: s.color }}
          />
        )}
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(s.slug);
        }}
        className="shrink-0 p-2 text-sand-400 hover:text-clay-500"
        aria-label={t("add.favorites")}
      >
        <Star
          className={`h-4 w-4 ${isFavorite(s.slug) ? "fill-clay-500 text-clay-500" : ""}`}
        />
      </button>
    </div>
  );

  return createPortal(
    <div
      className="fixed z-[90] flex justify-center items-stretch sm:items-center bg-sand-200/55 dark:bg-black/55 backdrop-blur-sm animate-fade-in"
      style={{
        top: box.top,
        left: 0,
        width: "100%",
        height: box.height,
        paddingTop: box.top < 12 ? "max(0.55rem, env(safe-area-inset-top, 0px))" : "0.5rem",
        paddingBottom: "max(0.5rem, env(safe-area-inset-bottom, 0px))",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
      }}
      onClick={onClose}
    >
      <div
        className="glass-strong glass-modal rounded-2xl p-4 w-full max-w-md flex flex-col min-h-0 h-full sm:h-auto sm:max-h-full animate-fade-up"
        style={{ maxHeight: "100%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3 shrink-0">
          <h3 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">
            {editing ? t("add.edit") : t("add.title")}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 hover:bg-sand-300/40"
            aria-label={t("common.close")}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {picking ? (
          <div className="flex flex-col min-h-0 flex-1 gap-3">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("add.searchPh")}
              className="w-full shrink-0 rounded-xl glass px-3 py-2.5 text-base text-sand-900 dark:text-sand-50 outline-none"
              autoFocus
            />
            <div className="overflow-y-auto flex-1 min-h-0 space-y-1.5 overscroll-contain">
              {favs.length > 0 ? (
                <>
                  <p className="px-1 text-[11px] font-semibold uppercase tracking-wide text-sand-400">
                    {t("add.favorites")}
                  </p>
                  {favs.map((x) => renderHit(x.s, x.used))}
                </>
              ) : null}
              {frequent.length > 0 ? (
                <>
                  <p className="px-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-sand-400">
                    {t("add.frequent")}
                  </p>
                  {frequent.map((x) => renderHit(x.s, x.used))}
                  <p className="px-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-sand-400">
                    {t("add.catalog")}
                  </p>
                </>
              ) : null}
              {rest.map((x) => renderHit(x.s, x.used))}
              {rankedCatalog.length === 0 ? (
                <p className="px-1 py-2 text-xs text-sand-500 dark:text-sand-400">
                  {t("add.none")}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={useCustom}
              disabled={!q.trim()}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-dashed border-sand-400/60 dark:border-sand-600/60 py-2.5 text-sm font-semibold text-sand-600 dark:text-sand-300 hover:border-clay-500 hover:text-clay-500 transition-colors disabled:opacity-40"
            >
              <Plus className="h-4 w-4" />
              {q.trim() ? t("add.custom", { q: q.trim() }) : t("add.customHint")}
            </button>
          </div>
        ) : (
          <>
          <div className="space-y-3 overflow-y-auto overflow-x-visible flex-1 min-h-0 overscroll-contain">
            <div className="flex items-center gap-2 rounded-xl glass px-3 py-2.5">
              <EmojiPicker
                value={emoji}
                onChange={(e) => {
                  setEmojiLocal(e);
                  setEmoji(known?.slug ?? name.trim().toLowerCase(), e);
                }}
                compact
              />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("add.name")}
                className="min-w-0 flex-1 bg-transparent text-base font-semibold text-sand-900 dark:text-sand-50 outline-none"
              />
              <button
                type="button"
                onClick={() => setPicking(true)}
                className="ml-auto shrink-0 text-xs text-clay-500 font-semibold"
              >
                {t("add.pickDb")}
              </button>
            </div>

            {pairWarn.length > 0 ? (
              <div className="space-y-1.5">
                {dangerous.map((w, i) => (
                  <div
                    key={`d-${i}`}
                    className="flex items-start gap-2 rounded-xl bg-red-500/10 border border-red-500/30 p-2.5"
                  >
                    <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-red-600 dark:text-red-400">
                      <span className="font-bold">
                        {t("add.dangerWith", { other: w.other ?? "" })}
                      </span>
                      {" — "}
                      {w.note}
                    </p>
                  </div>
                ))}
                {caution.map((w, i) => (
                  <div
                    key={`c-${i}`}
                    className="flex items-start gap-2 rounded-xl bg-amber-500/10 border border-amber-500/30 p-2.5"
                  >
                    <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-700 dark:text-amber-400">
                      <span className="font-bold">
                        {t("add.cautionWith", { other: w.other ?? "" })}
                      </span>
                      {" — "}
                      {w.note}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            <div>
              <label className="text-xs font-semibold text-sand-600 dark:text-sand-300">
                {t("add.color")}
              </label>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type="color"
                  value={/^#[0-9a-fA-F]{6}$/.test(color) ? color : "#c9a15a"}
                  onChange={(e) => setColor(e.target.value)}
                  className="h-9 w-11 shrink-0 cursor-pointer rounded-lg border border-sand-300/60 dark:border-sand-600/60 bg-transparent p-0.5"
                />
                <input
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="flex-1 rounded-xl glass px-3 py-2 text-base text-sand-900 dark:text-sand-50 outline-none"
                />
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {INGESTION_COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className="h-6 w-6 rounded-full transition-transform hover:scale-110"
                    style={{
                      background: c,
                      outline:
                        color.toLowerCase() === c.toLowerCase()
                          ? "2px solid currentColor"
                          : "none",
                      outlineOffset: 2,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="block text-xs font-semibold text-sand-600 dark:text-sand-300">
                {t("add.route")}
                <select
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  className="mt-1 w-full rounded-xl glass px-3 py-2 text-base text-sand-900 dark:text-sand-50 outline-none"
                >
                  {INGESTION_ROUTES.map((r) => (
                    <option key={r} value={r}>
                      {t(`route.${r}`)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-xs font-semibold text-sand-600 dark:text-sand-300">
                {t("add.time")}
                <input
                  type="datetime-local"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="mt-1 w-full rounded-xl glass px-3 py-2 text-base text-sand-900 dark:text-sand-50 outline-none"
                />
              </label>
              <label className="block text-xs font-semibold text-sand-600 dark:text-sand-300">
                {t("add.dose")}
                <input
                  type="number"
                  inputMode="decimal"
                  value={dose}
                  onChange={(e) => setDose(e.target.value)}
                  placeholder="20"
                  className="mt-1 w-full rounded-xl glass px-3 py-2 text-base text-sand-900 dark:text-sand-50 outline-none"
                />
              </label>
              <label className="block text-xs font-semibold text-sand-600 dark:text-sand-300">
                {t("add.unit")}
                <input
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="mt-1 w-full rounded-xl glass px-3 py-2 text-base text-sand-900 dark:text-sand-50 outline-none"
                />
              </label>
            </div>

            {table ? (
              <div>
                <p className="text-xs font-semibold text-sand-600 dark:text-sand-300 mb-1.5">
                  {t("add.pickClass")}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {DOSE_KEYS.map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => {
                        setDose(String(table[k]));
                        setUnit(table.unit);
                      }}
                      className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                      style={{
                        background:
                          currentClass === k
                            ? DOSE_CLASS_COLOR[k]
                            : `${DOSE_CLASS_COLOR[k]}22`,
                        color: currentClass === k ? "#fff" : DOSE_CLASS_COLOR[k],
                      }}
                    >
                      {t(`dose.${k}`)} · {table[k]}
                      {table.unit}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {tooHeavy && table ? (
              <div className="flex items-start gap-2 rounded-xl bg-red-500/10 border border-red-500/30 p-2.5">
                <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs text-red-600 dark:text-red-400">
                  {t("add.exceedsHeavy", { n: table.heavy, unit: table.unit })}
                </p>
              </div>
            ) : null}

            {error ? (
              <div className="flex items-start gap-2 rounded-xl bg-red-500/10 border border-red-500/30 p-2.5">
                <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
              </div>
            ) : null}

            <div>
              <p className="text-xs font-semibold text-sand-600 dark:text-sand-300 mb-1.5">
                {t("shulgin.label")}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SHULGIN_SCALE.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      const next = shulginPick === s ? null : s;
                      setShulginPick(next);
                      onShulgin?.(next);
                    }}
                    className={`rounded-full px-2.5 py-1 text-sm font-heading font-bold glass ${
                      shulginPick === s ? "bg-clay-500 text-white" : ""
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {ingestionCount >= 2 ? (
              <div className="rounded-xl bg-amber-500/12 border border-amber-500/30 p-3 text-xs text-amber-800 dark:text-amber-200">
                {t("care.banner")}
              </div>
            ) : null}

            <label className="block text-xs font-semibold text-sand-600 dark:text-sand-300">
              {t("add.notes")}
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder={t("add.notesPh")}
                className="mt-1 w-full rounded-xl glass px-3 py-2 text-base text-sand-900 dark:text-sand-50 outline-none resize-none"
              />
            </label>

            {known && curve ? (
              <p className="text-xs text-sand-500 dark:text-sand-400">
                {last?.dose != null
                  ? t("add.lastDose", { n: last.dose, unit: last.unit })
                  : t("add.commonDose", {
                      n: known.doses[0]?.common ?? "—",
                      unit: known.doses[0]?.unit ?? "",
                    })}{" "}
                · {t("add.onset", { n: formatMins(curve.onset) })} ·{" "}
                {t("add.duration", { n: formatMins(curve.total) })}
              </p>
            ) : last?.dose != null ? (
              <p className="text-xs text-sand-500 dark:text-sand-400">
                {t("add.lastDose", { n: last.dose, unit: last.unit })}
              </p>
            ) : null}

          </div>
            <button
              type="button"
              onClick={trySave}
              className="mt-3 shrink-0 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-clay-500 text-white py-3 text-sm font-bold shadow-lg shadow-clay-500/25 hover:scale-[1.02] active:scale-95 transition-transform"
            >
              {editing ? (
                <>
                  <Save className="h-4 w-4" /> {t("add.save")}
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" /> {t("add.add")}
                </>
              )}
            </button>
          </>
        )}
      </div>

      {dangerOpen ? (
        <div
          className="absolute inset-0 z-[95] flex items-center justify-center p-4 modal-dim backdrop-blur-sm animate-fade-in"
          onClick={() => setDangerOpen(false)}
        >
          <div
            className="glass-modal rounded-2xl p-5 w-full max-w-sm border border-red-500/40 animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-6 w-6 text-red-500 shrink-0" />
              <h3 className="font-heading text-lg font-bold text-red-600 dark:text-red-400">
                {t("add.dangerTitle")}
              </h3>
            </div>
            <div className="space-y-2 mb-4">
              {dangerous.map((w, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-red-500/10 border border-red-500/30 p-3"
                >
                  <p className="text-sm font-bold text-red-600 dark:text-red-400">
                    {name.trim()} + {w.other}
                  </p>
                  <p className="text-xs text-red-600/80 dark:text-red-400/80 mt-0.5">
                    {w.note}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-sand-600 dark:text-sand-300 mb-4">
              {t("add.dangerBody")}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setDangerOpen(false)}
                className="flex-1 rounded-xl glass py-2.5 text-sm font-semibold text-sand-700 dark:text-sand-200"
              >
                {t("common.cancel")}
              </button>
              <button
                type="button"
                onClick={() => {
                  setDangerOpen(false);
                  commit();
                }}
                className="flex-1 rounded-xl bg-red-500 text-white py-2.5 text-sm font-bold hover:scale-[1.02] active:scale-95 transition-transform"
              >
                {t("add.addAnyway")}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>,
    document.body,
  );
}
