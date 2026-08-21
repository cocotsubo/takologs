import { AddSubstanceModal } from "@/components/add-substance-modal";
import { TimedNotes } from "@/components/timed-notes";
import { CurveZoomButton } from "@/components/curve-zoom";
import { ExperienceCurves } from "@/components/experience-curves";
import { ExperienceMusic } from "@/components/experience-music";
import { CollapsibleSession } from "@/components/collapsible-session";
import { HeartRatePanel } from "@/components/heart-rate";
import { RiskDialog } from "@/components/risk-modals";
import { ShareStoryButton } from "@/components/share-story";
import { comboWarnings } from "@/lib/interactions";
import { exceedsHeavy } from "@/lib/dose";
import { defaultExperienceTitle, useI18n } from "@/lib/i18n";
import {
  FEELING_SCALE,
  SHULGIN_SCALE,
  consumeDraft,
  consumeOpenAddOnLoad,
  fromLocalInput,
  localDateTimeInput,
  OPEN_ADD_EVENT,
  peekDraft,
  peekOpenAddOnLoad,
  toLocalInput,
  type Experience,
  type ExperienceMedia,
  type ExperienceTrack,
  type HeartRatePoint,
  type Ingestion,
  type IngestionInput,
  type ShulginPoint,
  type TimedNote,
} from "@/lib/journal";
import {
  addIngestion,
  deleteIngestion,
  getExperience,
  updateIngestion,
  upsertExperience,
} from "@/lib/journal-api";
import { isLethalLowDose } from "@/lib/risk";
import { usePrefs } from "@/lib/prefs";
import { findSubstanceByName } from "@/lib/substances";
import { uuid } from "@/lib/uuid";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  Clock,
  Pencil,
  Plus,
  Save,
  Trash2,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

type Props = { id?: string };

export function LogEditor({ id }: Props) {
  const navigate = useNavigate();
  const { t, locale, dateTag } = useI18n();
  const { resolveEmoji, resolveColor, resolveName } = usePrefs();
  const isNew = !id;
  const [loaded, setLoaded] = useState(isNew);
  const [missing, setMissing] = useState(false);
  const [expId, setExpId] = useState<string | null>(id ?? null);
  const [title, setTitle] = useState(() => defaultExperienceTitle("fr"));
  const [titleTouched, setTitleTouched] = useState(false);
  const [date, setDate] = useState(localDateTimeInput);
  const [notes, setNotes] = useState("");
  const [feeling, setFeeling] = useState<number | null>(null);
  const [shulgin, setShulgin] = useState<string | null>(null);
  const [shulginLog, setShulginLog] = useState<ShulginPoint[]>([]);
  const [heartRate, setHeartRate] = useState<HeartRatePoint[]>([]);
  const [media, setMedia] = useState<ExperienceMedia[]>([]);
  const [tracks, setTracks] = useState<ExperienceTrack[]>([]);
  const [timedNotes, setTimedNotes] = useState<TimedNote[]>([]);
  const [ings, setIngs] = useState<Ingestion[]>([]);
  const [saving, setSaving] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [draft, setDraftState] = useState<ReturnType<typeof peekDraft>>(null);
  const [editing, setEditing] = useState<Ingestion | null>(null);
  const [addError, setAddError] = useState<string | null>(null);
  const [risk, setRisk] = useState<{ kind: "lethal" | "mix" | "heavy"; name?: string; extra?: string } | null>(null);

  const hydrate = useCallback(
    (exp: Experience) => {
      setExpId(exp.id);
      setTitle(exp.title);
      setDate(toLocalInput(exp.experienceDate));
      setNotes(exp.notes);
      setFeeling(exp.feeling ?? null);
      setShulgin(exp.shulgin ?? null);
      setShulginLog(exp.shulginLog ?? []);
      setHeartRate(exp.heartRate ?? []);
      setMedia(exp.media ?? []);
      setTracks(exp.tracks ?? []);
      setTimedNotes(exp.timedNotes ?? []);
      setIngs(exp.ingestions);
    },
    [],
  );

  useEffect(() => {
    if (isNew) {
      setLoaded(true);
      const d = peekDraft();
      if (d || peekOpenAddOnLoad()) {
        setDraftState(d);
        setShowAdd(true);
      }
      return;
    }
    let cancelled = false;
    void getExperience({ data: id }).then((exp) => {
      if (cancelled) return;
      if (!exp) {
        setMissing(true);
        setLoaded(true);
        return;
      }
      hydrate(exp);
      const d = peekDraft();
      if (d || peekOpenAddOnLoad()) {
        setDraftState(d);
        setShowAdd(true);
      }
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, [id, isNew, hydrate]);

  useEffect(() => {
    if (isNew && !titleTouched) {
      setTitle(defaultExperienceTitle(locale));
    }
  }, [locale, isNew, titleTouched]);

  useEffect(() => {
    const onOpen = () => {
      setDraftState(peekDraft());
      setShowAdd(true);
    };
    window.addEventListener(OPEN_ADD_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_ADD_EVENT, onOpen);
  }, []);

  const persistMeta = async (patch?: {
    shulgin?: string | null;
    shulginLog?: ShulginPoint[];
    heartRate?: HeartRatePoint[];
  }) => {
    setSaving(true);
    try {
      const savedId = await upsertExperience({
        data: {
          id: expId ?? undefined,
          title: title.trim() || defaultExperienceTitle(locale, new Date(fromLocalInput(date))),
          experienceDate: fromLocalInput(date),
          notes,
          feeling,
          shulgin: patch?.shulgin !== undefined ? patch.shulgin : shulgin,
          shulginLog: patch?.shulginLog ?? shulginLog,
          heartRate: patch?.heartRate ?? heartRate,
          media,
          tracks,
          timedNotes,
        },
      });
      setExpId(savedId);
      return savedId;
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    if (!expId) return;
    const timer = window.setTimeout(() => {
      void upsertExperience({
        data: {
          id: expId,
          title: title.trim() || defaultExperienceTitle(locale, new Date(fromLocalInput(date))),
          experienceDate: fromLocalInput(date),
          notes,
          feeling,
          shulgin,
          shulginLog,
          heartRate,
          media,
          tracks,
          timedNotes,
        },
      });
    }, 500);
    return () => window.clearTimeout(timer);
  }, [expId, shulgin, shulginLog, heartRate, media, tracks, timedNotes, feeling, notes, title, date, locale]);

  const handleAdd = async (input: IngestionInput) => {
    setAddError(null);
    try {
      const savedId = await persistMeta();
      if (!savedId) throw new Error("save failed");
      const row = await addIngestion({
        data: { experienceId: savedId, ingestion: input },
      });
      if (row) setIngs((prev) => [...prev, row]);
      consumeDraft();
      consumeOpenAddOnLoad();
      setDraftState(null);
      setShowAdd(false);
      const sub = findSubstanceByName(input.substanceName);
      if (isLethalLowDose(input.substanceName, sub)) {
        setRisk({ kind: "lethal", name: input.substanceName });
      } else {
        const mix = comboWarnings([...ings.map((i) => i.substanceName), input.substanceName]).filter(
          (w) => w.level === "dangerous",
        );
        if (mix.length) {
          setRisk({
            kind: "mix",
            extra: mix.map((m) => `${m.a} + ${m.b}`).join(", "),
          });
        } else if (exceedsHeavy(sub, input.dose, input.doseUnit, input.route)) {
          setRisk({ kind: "heavy", name: input.substanceName });
        }
      }
      if (isNew) {
        void navigate({ to: "/logs/$id", params: { id: savedId }, replace: true });
      }
    } catch (err) {
      setAddError(err instanceof Error ? err.message : String(err));
    }
  };

  const handleEdit = async (input: IngestionInput) => {
    if (!editing) return;
    const row = await updateIngestion({
      data: { id: editing.id, ingestion: input },
    });
    if (row) setIngs((prev) => prev.map((i) => (i.id === row.id ? row : i)));
    setEditing(null);
  };

  const handleRemove = async (ingId: string) => {
    await deleteIngestion({ data: ingId });
    setIngs((prev) => prev.filter((i) => i.id !== ingId));
  };

  const totals = useMemo(() => {
    const map = new Map<
      string,
      { name: string; unit: string; total: number; count: number; color?: string | null }
    >();
    ings.forEach((i) => {
      if (i.dose == null) return;
      const key = `${i.substanceName}__${i.doseUnit}`;
      const cur = map.get(key);
      if (cur) {
        cur.total += i.dose;
        cur.count += 1;
      } else {
        map.set(key, {
          name: i.substanceName,
          unit: i.doseUnit,
          total: i.dose,
          count: 1,
          color: i.color,
        });
      }
    });
    return Array.from(map.values());
  }, [ings]);

  const running = useMemo(() => {
    const acc = new Map<string, number>();
    const out = new Map<string, number>();
    ings.forEach((i) => {
      if (i.dose == null) return;
      const key = `${i.substanceName}__${i.doseUnit}`;
      const n = (acc.get(key) ?? 0) + i.dose;
      acc.set(key, n);
      out.set(i.id, n);
    });
    return out;
  }, [ings]);

  const multiKeys = useMemo(
    () => new Set(totals.filter((row) => row.count > 1).map((row) => `${row.name}__${row.unit}`)),
    [totals],
  );

  const warns = useMemo(
    () => comboWarnings(ings.map((i) => i.substanceName)),
    [ings],
  );

  if (!loaded) {
    return (
      <div className="px-4 py-20 text-center text-sand-500">{t("common.loading")}</div>
    );
  }
  if (missing) {
    return (
      <div className="px-4 py-16 text-center">
        <p className="text-sand-500">{t("editor.missing")}</p>
        <Link to="/logs" className="mt-3 inline-block text-clay-500 font-semibold">
          {t("editor.back")}
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 pb-24">
      <div className="mx-auto max-w-3xl space-y-5">
        <Link
          to="/logs"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-sand-600 dark:text-sand-300 hover:text-clay-500 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> {t("nav.logs")}
        </Link>

        <div className="glass rounded-2xl p-5 animate-fade-up">
          <div className="flex items-center justify-between mb-4 gap-2">
            <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">
              {t("editor.substances")}
            </h2>
            <div className="flex items-center gap-2">
              <CurveZoomButton
                ingestions={ings}
                dateTag={dateTag}
                shulgin={shulgin}
                shulginLog={shulginLog}
                heartRate={heartRate}
              />
              <ShareStoryButton
                title={title}
                date={new Date(fromLocalInput(date))}
                ingestions={ings}
              />
              <button
              type="button"
              onClick={() => {
                setDraftState(null);
                setShowAdd(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-full bg-clay-500 text-white px-3 py-1.5 text-sm font-semibold hover:scale-105 transition-transform"
            >
              <Plus className="h-3.5 w-3.5" /> {t("common.add")}
            </button>
            </div>
          </div>
          {ings.length === 0 ? (
            <p className="text-center text-sm text-sand-500 py-8">
              {t("editor.none")}
            </p>
          ) : (
            <>
              <CollapsibleSession>
              <ExperienceCurves
                ingestions={ings}
                dateTag={dateTag}
                showNow
                shulgin={shulgin}
                shulginLog={shulginLog}
                heartRate={heartRate}
              />
              <div className="mt-3">
                <ExperienceMusic tracks={tracks} onChange={setTracks} />
              </div>
              </CollapsibleSession>
              {totals.some((row) => row.count > 1) ? (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {totals
                    .filter((row) => row.count > 1)
                    .map((row) => (
                      <span
                        key={`${row.name}__${row.unit}`}
                        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold"
                        style={{
                          background: `${row.color ?? "#b07a45"}22`,
                          color: row.color ?? "#b07a45",
                        }}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: row.color ?? "#b07a45" }}
                        />
                        {resolveName(null, row.name)} · {row.total} {row.unit} cumulés ({row.count} prises)
                      </span>
                    ))}
                </div>
              ) : null}
              <div className="mt-4 space-y-2">
                {ings.map((ing) => (
                  <IngestionRow
                    key={ing.id}
                    ing={ing}
                    cumulative={
                      multiKeys.has(`${ing.substanceName}__${ing.doseUnit}`)
                        ? running.get(ing.id)
                        : undefined
                    }
                    onEdit={() => setEditing(ing)}
                    onRemove={() => void handleRemove(ing.id)}
                    emoji={resolveEmoji(
                      ing.slug,
                      ing.substanceName,
                      findSubstanceByName(ing.substanceName)?.emoji ?? "•",
                    )}
                    dateTag={dateTag}
                    tint={resolveColor(
                      ing.slug,
                      ing.substanceName,
                      ing.color ||
                        findSubstanceByName(ing.substanceName)?.color ||
                        "#b07a45",
                    )}
                    label={resolveName(ing.slug, ing.substanceName)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {warns.length > 0 ? <ComboBanner warnings={warns} t={t} /> : null}
        {ings.length >= 2 && warns.length === 0 ? (
          <div className="glass rounded-2xl p-4 text-sm text-sand-500">
            {t("editor.comboNone")}
          </div>
        ) : null}
        {ings.length >= 3 ? (
          <div className="glass-strong rounded-2xl p-4 border border-amber-400/40 animate-fade-up">
            <p className="text-sm font-heading font-bold text-amber-700 dark:text-amber-300">
              {t("care.title")}
            </p>
            <p className="mt-1 text-sm text-sand-600 dark:text-sand-300">{t("care.banner")}</p>
          </div>
        ) : null}

        <div className="glass-strong rounded-2xl p-5 animate-fade-up space-y-3">
          <label className="block text-xs font-semibold text-sand-600 dark:text-sand-300">
            {t("editor.title")}
            <input
              value={title}
              onChange={(e) => {
                setTitleTouched(true);
                setTitle(e.target.value);
              }}
              className="mt-1 w-full bg-transparent rounded-xl glass px-3 py-2.5 text-base font-heading font-bold text-sand-900 dark:text-sand-50 outline-none focus:ring-2 focus:ring-clay-500/40"
            />
          </label>
          <label className="block text-xs font-semibold text-sand-600 dark:text-sand-300">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {t("editor.date")}
            </span>
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full bg-transparent rounded-xl glass px-3 py-2.5 text-sm text-sand-900 dark:text-sand-50 outline-none focus:ring-2 focus:ring-clay-500/40"
            />
          </label>
          <label className="block text-xs font-semibold text-sand-600 dark:text-sand-300">
            {t("editor.notes")}
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder={t("editor.notesPh")}
              className="mt-1 w-full bg-transparent rounded-xl glass px-3 py-2.5 text-sm text-sand-900 dark:text-sand-50 outline-none focus:ring-2 focus:ring-clay-500/40 resize-none"
            />
          </label>
          <TimedNotes notes={timedNotes} onChange={setTimedNotes} />
          <div>
            <p className="text-xs font-semibold text-sand-600 dark:text-sand-300 mb-1.5">
              {t("feeling.label")}
            </p>
            <div className="flex gap-1.5">
              {FEELING_SCALE.map((f) => (
                <button
                  key={f.n}
                  type="button"
                  onClick={() => setFeeling(feeling === f.n ? null : f.n)}
                  className={`h-10 w-10 rounded-full text-lg glass ${
                    feeling === f.n ? "ring-2 ring-clay-500 scale-110" : "opacity-70"
                  }`}
                  title={`${t("feeling.label")} ${f.n}`}
                >
                  {f.emoji}
                </button>
              ))}
            </div>
          </div>
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
                    const next = [
                      ...shulginLog,
                      { time: new Date().toISOString(), level: s },
                    ];
                    setShulgin(s);
                    setShulginLog(next);
                    void persistMeta({ shulgin: s, shulginLog: next });
                  }}
                  className={`rounded-full px-2.5 py-1 text-sm font-heading font-bold glass ${
                    shulgin === s ? "bg-clay-500 text-white" : ""
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="mt-1 text-[11px] text-sand-400">{t("shulgin.hint")}</p>
          </div>
          <HeartRatePanel
            points={heartRate}
            onChange={(next) => {
              setHeartRate(next);
              void persistMeta({ heartRate: next });
            }}
          />
          <div>
            <p className="text-xs font-semibold text-sand-600 dark:text-sand-300 mb-1.5">
              {t("media.label")}
            </p>
            <label className="inline-flex items-center gap-2 rounded-full glass px-3 py-2 text-sm font-semibold cursor-pointer">
              {t("media.add")}
              <input
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  e.target.value = "";
                  if (!file) return;
                  if (file.size > 4_000_000) {
                    setAddError("Fichier trop lourd (max 4 Mo).");
                    return;
                  }
                  const reader = new FileReader();
                  reader.onload = () => {
                    const dataUrl = String(reader.result ?? "");
                    setMedia((prev) => [
                      ...prev.slice(0, 5),
                      {
                        id: uuid(),
                        name: file.name,
                        dataUrl,
                        kind: file.type.startsWith("video") ? "video" : "image",
                      },
                    ]);
                  };
                  reader.readAsDataURL(file);
                }}
              />
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {media.map((m) =>
                m.kind === "video" ? (
                  <video key={m.id} src={m.dataUrl} className="h-20 rounded-xl" controls />
                ) : (
                  <img key={m.id} src={m.dataUrl} alt="" className="h-20 rounded-xl object-cover" />
                ),
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              void persistMeta().then((savedId) => {
                if (isNew && savedId) {
                  void navigate({
                    to: "/logs/$id",
                    params: { id: savedId },
                    replace: true,
                  });
                }
              });
            }}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-full bg-sand-800 dark:bg-sand-100 text-sand-50 dark:text-sand-900 px-4 py-2 text-sm font-semibold hover:scale-105 transition-transform disabled:opacity-60"
          >
            <Save className="h-4 w-4" /> {t("editor.save")}
          </button>
        </div>
      </div>

      {showAdd ? (
        <AddSubstanceModal
          onClose={() => {
            setShowAdd(false);
            consumeDraft();
            consumeOpenAddOnLoad();
            setDraftState(null);
          }}
          onSave={handleAdd}
          onShulgin={(v) => {
            setShulgin(v);
            if (v) {
              setShulginLog((prev) => [
                ...prev,
                { time: new Date().toISOString(), level: v },
              ]);
            }
          }}
          currentShulgin={shulgin}
          ingestionCount={ings.length}
          defaultDate={localDateTimeInput()}
          draft={draft}
          initial={null}
          existingNames={ings.map((i) => i.substanceName)}
          error={addError}
        />
      ) : null}
      {editing ? (
        <AddSubstanceModal
          onClose={() => setEditing(null)}
          onSave={handleEdit}
          onShulgin={(v) => {
            setShulgin(v);
            if (v) {
              setShulginLog((prev) => [
                ...prev,
                { time: new Date().toISOString(), level: v },
              ]);
            }
          }}
          currentShulgin={shulgin}
          ingestionCount={ings.length}
          defaultDate={date}
          draft={null}
          initial={editing}
          existingNames={ings
            .filter((i) => i.id !== editing.id)
            .map((i) => i.substanceName)}
        />
      ) : null}
      {risk ? (
        <RiskDialog
          kind={risk.kind}
          name={risk.name}
          extra={risk.extra}
          onClose={() => setRisk(null)}
        />
      ) : null}
    </div>
  );
}

function ComboBanner({
  warnings,
  t,
}: {
  warnings: ReturnType<typeof comboWarnings>;
  t: (key: string, vars?: Record<string, string | number>) => string;
}) {
  const danger = warnings.filter((w) => w.level === "dangerous");
  const caution = warnings.filter((w) => w.level === "caution");
  return (
    <div className="glass-strong rounded-2xl p-5 animate-fade-up border border-red-500/30">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="h-5 w-5 text-red-500 shrink-0" />
        <h2 className="font-heading text-lg font-bold text-sand-900 dark:text-sand-50">
          {t("editor.combo")}
        </h2>
      </div>
      <div className="space-y-2">
        {danger.map((n, i) => (
          <div
            key={`d-${i}`}
            className="flex items-start gap-2.5 rounded-xl bg-red-500/10 border border-red-500/30 p-3"
          >
            <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-red-600 dark:text-red-400">
                {t("editor.comboDanger", { a: n.a, b: n.b })}
              </p>
              <p className="text-xs text-red-600/80 dark:text-red-400/80 mt-0.5">
                {n.note}
              </p>
            </div>
          </div>
        ))}
        {caution.map((n, i) => (
          <div
            key={`c-${i}`}
            className="flex items-start gap-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 p-3"
          >
            <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-700 dark:text-amber-400">
                {t("editor.comboCaution", { a: n.a, b: n.b })}
              </p>
              <p className="text-xs text-amber-700/80 dark:text-amber-400/80 mt-0.5">
                {n.note}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-sand-500 dark:text-sand-400">
        {t("editor.comboFoot")}
      </p>
    </div>
  );
}

function IngestionRow({
  ing,
  onRemove,
  onEdit,
  cumulative,
  emoji,
  dateTag,
  tint,
  label,
}: {
  ing: Ingestion;
  onRemove: () => void;
  onEdit: () => void;
  cumulative?: number;
  emoji: string;
  dateTag: string;
  tint: string;
  label: string;
}) {
  const t = useI18n().t;
  const time = new Date(ing.ingestionTime).toLocaleTimeString(dateTag, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div
      className="glass glass-tint flex items-center justify-between gap-3 rounded-xl p-3"
      style={{ ["--tint" as string]: tint }}
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-lg shrink-0">{emoji}</span>
        <div className="min-w-0">
          <p className="font-heading font-bold text-sand-900 dark:text-sand-50 truncate">
            {label}
          </p>
          <p className="text-xs text-sand-500">
            {ing.dose != null ? `${ing.dose} ${ing.doseUnit}` : "—"} · {ing.route} · {time}
            {cumulative != null ? ` · Σ ${cumulative} ${ing.doseUnit}` : ""}
          </p>
          {ing.notes ? (
            <p className="text-xs text-sand-500 mt-0.5 truncate">{ing.notes}</p>
          ) : null}
        </div>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <button
          type="button"
          onClick={onEdit}
          className="rounded-full p-2 text-sand-500 hover:text-clay-500"
          aria-label={t("common.edit")}
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onRemove}
          className="rounded-full p-2 text-sand-500 hover:text-red-500"
          aria-label={t("common.delete")}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
