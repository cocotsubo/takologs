import {
  addIngestion,
  listExperiences,
  loadJournal,
  upsertExperience,
} from "@/lib/journal-api";
import { defaultExperienceTitleFromDate, type IngestionInput } from "@/lib/journal";
import { comboWarnings } from "@/lib/interactions";
import { computeStats } from "@/lib/stats";
import { findSubstanceByName, searchSubstances } from "@/lib/substances";
import { interpretMessage } from "@/lib/chat-parse";
import { actionDoses, type ChatAction, type ChatReply } from "@/lib/chat-types";

function localDay(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export async function journalDigest(locale: "fr" | "en") {
  try {
    const data = await loadJournal();
    const exps = data.experiences.slice(0, 12);
    const stats = computeStats(data.experiences, { span: "all", locale });
    const lines = exps.map((e) => {
      const ings = e.ingestions
        .map((i) => `${i.dose ?? "?"}${i.doseUnit} ${i.substanceName}`)
        .join(", ");
      return `- ${e.title} (${e.experienceDate.slice(0, 10)}): ${ings || "∅"}`;
    });
    const rank = stats.ranking
      .slice(0, 8)
      .map((r) => `${r.name} ×${r.count}`)
      .join(", ");
    return [
      locale === "fr" ? "Journal de l’utilisateur :" : "User journal:",
      `${stats.ingestions} prises · ${data.experiences.length} expériences · ${stats.unique} substances`,
      rank ? `Top: ${rank}` : "",
      lines.join("\n"),
    ]
      .filter(Boolean)
      .join("\n");
  } catch {
    return locale === "fr" ? "Journal indisponible." : "Journal unavailable.";
  }
}

export async function applyThemeAction(action: ChatAction) {
  if (typeof window === "undefined") return;
  if (action.hue != null) {
    window.dispatchEvent(new CustomEvent("takologs-set-hue", { detail: action.hue }));
  }
  if (action.theme) {
    window.dispatchEvent(new CustomEvent("takologs-set-theme", { detail: action.theme }));
  }
}

async function runAdds(action: ChatAction, locale: "fr" | "en") {
  const items = actionDoses(action);
  if (!items.length) throw new Error("empty");
  const list = await listExperiences();
  const today = localDay();
  const iso = new Date().toISOString();
  let expId: string;
  if (action.title?.trim()) {
    expId = String(
      await upsertExperience({
        data: {
          title: action.title.trim(),
          experienceDate: iso,
          notes: "",
        },
      }),
    );
  } else {
    const sameDay = list.find((e) => localDay(new Date(e.experienceDate)) === today);
    if (sameDay) expId = sameDay.id;
    else {
      expId = String(
        await upsertExperience({
          data: {
            title: defaultExperienceTitleFromDate(iso, locale === "fr" ? "fr-FR" : "en-GB"),
            experienceDate: iso,
            notes: "",
          },
        }),
      );
    }
  }
  const names: string[] = [];
  for (const it of items) {
    const s = findSubstanceByName(it.substanceName) ?? searchSubstances(it.substanceName)[0];
    const ingestion: IngestionInput = {
      substanceName: s?.name ?? it.substanceName,
      slug: s?.slug ?? null,
      route: it.route || s?.doses[0]?.route || "Orale",
      dose: it.dose,
      doseUnit: it.unit || s?.doses[0]?.unit || "mg",
      color: s?.color ?? null,
      ingestionTime: new Date().toISOString(),
      notes: "",
    };
    names.push(`${ingestion.dose ?? "?"} ${ingestion.doseUnit} ${ingestion.substanceName}`);
    await addIngestion({ data: { experienceId: expId, ingestion } });
  }
  const warns = comboWarnings(items.map((i) => i.substanceName));
  return { expId, names, warns };
}

async function statsText(q: string, locale: "fr" | "en") {
  const data = await loadJournal();
  const stats = computeStats(data.experiences, { span: "all", locale });
  const top = stats.ranking
    .slice(0, 8)
    .map((r) => `• ${r.name} — ${r.count}×` + (r.doseTotal != null ? ` (${r.doseTotal}${r.unit})` : ""))
    .join("\n");
  const last = data.experiences[0];
  const lastLine = last
    ? `${last.title} (${last.ingestions.map((i) => i.substanceName).join(", ") || "∅"})`
    : locale === "fr"
      ? "aucune"
      : "none";
  if (locale === "fr") {
    return `Journal : ${data.experiences.length} expériences, ${stats.ingestions} prises, ${stats.unique} substances.\nDernière : ${lastLine}\nClassement :\n${top || "—"}`;
  }
  return `Journal: ${data.experiences.length} experiences, ${stats.ingestions} ingestions, ${stats.unique} substances.\nLatest: ${lastLine}\nRanking:\n${top || "—"}`;
}

export async function executeChatAction(
  action: ChatAction,
  locale: "fr" | "en",
  q = "",
): Promise<ChatReply> {
  if (action.kind === "theme") {
    applyThemeAction(action);
    const bits = [
      action.hue != null ? (action.hue < 0 ? "mono" : `hue ${action.hue}`) : "",
      action.theme ?? "",
    ].filter(Boolean);
    return {
      ok: true,
      handled: true,
      source: "local",
      text:
        locale === "fr"
          ? `Thème mis à jour (${bits.join(", ")}).`
          : `Theme updated (${bits.join(", ")}).`,
      action,
    };
  }
  if (action.kind === "navigate" && action.path) {
    return {
      ok: true,
      handled: true,
      source: "local",
      path: action.path,
      text:
        locale === "fr"
          ? `J’ouvre ${action.path}.`
          : `Opening ${action.path}.`,
      action,
    };
  }
  if (action.kind === "stats") {
    const text = await statsText(q, locale);
    return { ok: true, handled: true, source: "local", text, action };
  }
  if (action.kind === "add") {
    const { expId, names, warns } = await runAdds(action, locale);
    const warn =
      warns.length > 0
        ? (locale === "fr" ? "\nAttention : " : "\nCaution: ") +
          warns.map((w) => `${w.a} + ${w.b}`).join(", ")
        : "";
    const titleBit = action.title ? (locale === "fr" ? ` dans « ${action.title} »` : ` in “${action.title}”`) : "";
    return {
      ok: true,
      handled: true,
      source: "local",
      logId: expId,
      action,
      text:
        locale === "fr"
          ? `C’est enregistré : ${names.join(", ")}${titleBit}.${warn}`
          : `Saved: ${names.join(", ")}${titleBit}.${warn}`,
    };
  }
  return { ok: false, handled: false, text: "", source: "local" };
}

export async function runLocalAgent(q: string, locale: "fr" | "en"): Promise<ChatReply> {
  const action = interpretMessage(q);
  if (!action) return { ok: false, handled: false, text: "", source: "local" };
  return executeChatAction(action, locale, q);
}
