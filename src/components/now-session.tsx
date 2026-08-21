import { ExperienceCurves } from "@/components/experience-curves";
import { TrackCard } from "@/components/experience-music";
import { CollapsibleSession } from "@/components/collapsible-session";
import { HeartRateBadge } from "@/components/heart-rate";
import type { Experience } from "@/lib/journal";
import { useI18n } from "@/lib/i18n";
import { scheduleIngestionNotices } from "@/lib/notify";
import { usePrefs } from "@/lib/prefs";
import { activeIngestions } from "@/lib/stats";
import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";
import { useEffect } from "react";

export function NowSession({ experiences }: { experiences: Experience[] }) {
  const { t, dateTag } = useI18n();
  const { resolveEmoji, resolveName } = usePrefs();
  const active = activeIngestions(experiences);
  const byExp = new Map<string, number>();
  for (const a of active) {
    const id = a.ing.experienceId;
    const t0 = new Date(a.ing.ingestionTime).getTime();
    byExp.set(id, Math.max(byExp.get(id) ?? 0, t0));
  }
  const currentId = [...byExp.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
  const current = experiences.find((e) => e.id === currentId);
  const ingestions = current?.ingestions ?? active.map((a) => a.ing);

  useEffect(() => {
    const run = () =>
      scheduleIngestionNotices(
        ingestions,
        {
          onset: t("notify.onset"),
          peak: t("notify.peak"),
          offset: t("notify.offset"),
          onsetBody: t("notify.onsetBody"),
          peakBody: t("notify.peakBody"),
          offsetBody: t("notify.offsetBody"),
          care3: t("notify.care3"),
          care3Body: t("notify.care3Body"),
          care6: t("notify.care6"),
          care6Body: t("notify.care6Body"),
          care9: t("notify.care9"),
          care9Body: t("notify.care9Body"),
          care12: t("notify.care12"),
          care12Body: t("notify.care12Body"),
          hydrate: t("notify.hydrate"),
          hydrateBody: t("notify.hydrateBody"),
          idle: t("notify.idle"),
          idleBody: t("notify.idleBody"),
          mix: t("notify.mix"),
          mixBody: t("notify.mixBody"),
          lab: t("notify.lab"),
          labBody: t("notify.labBody"),
          drive: t("notify.drive"),
          driveBody: t("notify.driveBody"),
          rest: t("notify.rest"),
          restBody: t("notify.restBody"),
          sitter: t("notify.sitter"),
          sitterBody: t("notify.sitterBody"),
          redose: t("notify.redose"),
          redoseBody: t("notify.redoseBody"),
        },
        current?.id,
      );
    run();
    window.addEventListener("takologs-notify-changed", run);
    return () => window.removeEventListener("takologs-notify-changed", run);
  }, [t, current?.id, ingestions.length, active.length]);

  if (active.length === 0) return null;

  return (
    <div className="mx-auto max-w-6xl px-3 mt-2">
      <div className="glass rounded-2xl px-3 py-2">
        <div className="flex items-center gap-2 overflow-x-auto">
          <Flame className="h-3.5 w-3.5 text-clay-500 shrink-0" />
          {active.map((a) => (
            <span
              key={a.ing.id}
              className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-clay-500/15 px-2 py-0.5 text-xs font-semibold text-sand-800 dark:text-sand-100"
            >
              {resolveEmoji(a.ing.slug, a.ing.substanceName, "•")} {resolveName(a.ing.slug, a.ing.substanceName)}
              <span className="opacity-60">
                {t("active.until", {
                  time: a.endsAt.toLocaleTimeString(dateTag, {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                })}
              </span>
            </span>
          ))}
          <HeartRateBadge points={current?.heartRate} className="shrink-0" />
          {current ? (
            <Link
              to="/logs/$id"
              params={{ id: current.id }}
              className="ml-auto shrink-0 text-[11px] font-semibold text-clay-500 hover:underline"
            >
              {current.shulgin ? `${current.shulgin} · ` : ""}
              {current.title}
            </Link>
          ) : null}
        </div>
        <div className="mt-2">
          <CollapsibleSession>
            {experiences
              .filter(
                (e) =>
                  (e.tracks?.length ?? 0) > 0 &&
                  active.some((a) => a.ing.experienceId === e.id),
              )
              .map((e) => (
                <div key={`music-${e.id}`} className="space-y-2 mb-2">
                  {(e.tracks ?? []).map((tr) => (
                    <TrackCard key={tr.id} tr={tr} />
                  ))}
                </div>
              ))}
            <ExperienceCurves
              ingestions={ingestions}
              dateTag={dateTag}
              showNow
              shulgin={current?.shulgin}
              shulginLog={current?.shulginLog}
              heartRate={current?.heartRate}
            />
          </CollapsibleSession>
        </div>
      </div>
    </div>
  );
}
