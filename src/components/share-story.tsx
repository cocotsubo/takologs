import { Share2 } from "lucide-react";
import { useState } from "react";
import type { Ingestion } from "@/lib/journal";
import { useI18n } from "@/lib/i18n";
import { usePrefs } from "@/lib/prefs";
import { comboWarnings } from "@/lib/interactions";
import { renderExperienceStory, shareStoryFile, type StoryRow } from "@/lib/story-share";
import { pushToast } from "@/lib/notify";

export function ShareStoryButton({
  title,
  date,
  ingestions,
}: {
  title: string;
  date: Date;
  ingestions: Ingestion[];
}) {
  const { t, locale } = useI18n();
  const { resolveEmoji, resolveName, resolveColor } = usePrefs();
  const [busy, setBusy] = useState(false);

  const onShare = async () => {
    if (busy) return;
    setBusy(true);
    try {
      const map = new Map<string, StoryRow>();
      for (const i of ingestions) {
        const key = `${i.substanceName}__${i.doseUnit}`;
        const color = resolveColor(i.slug, i.substanceName, i.color ?? "#b07a45");
        const cur = map.get(key);
        if (cur) {
          cur.total = (cur.total ?? 0) + (i.dose ?? 0);
          cur.count += 1;
        } else {
          map.set(key, {
            name: resolveName(i.slug, i.substanceName),
            emoji: resolveEmoji(i.slug, i.substanceName, "•"),
            unit: i.doseUnit,
            total: i.dose,
            count: 1,
            color,
          });
        }
      }
      const hueRaw = Number(
        getComputedStyle(document.documentElement).getPropertyValue("--accent-h").trim(),
      );
      const blob = await renderExperienceStory({
        title,
        date,
        locale,
        ingestions,
        rows: [...map.values()],
        hue: Number.isFinite(hueRaw) ? hueRaw : 36,
        dark: document.documentElement.classList.contains("dark"),
        warnings: comboWarnings(ingestions.map((i) => i.substanceName)).map((w) => ({
          a: w.a,
          b: w.b,
          note: w.note,
          level: w.level,
        })),
      });
      const day = date.toISOString().slice(0, 10);
      const result = await shareStoryFile(
        blob,
        `takologs-${day}.png`,
        `${title} — TakoLogs`,
      );
      if (result === "download") pushToast({ title: t("share.saved") });
    } catch {
      pushToast({ title: t("share.fail") });
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      type="button"
      onClick={() => void onShare()}
      disabled={busy}
      className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-sm font-semibold text-sand-800 dark:text-sand-100 hover:scale-105 transition-transform disabled:opacity-60"
    >
      <Share2 className="h-3.5 w-3.5" />
      {busy ? t("share.busy") : t("share.btn")}
    </button>
  );
}
