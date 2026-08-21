import { askAssistant } from "@/lib/assistant";
import { executeChatAction, journalDigest } from "@/lib/chat-agent";
import { helpText, isHelpIntent } from "@/lib/chat-help";
import { interpretMessage } from "@/lib/chat-parse";
import type { ChatReply } from "@/lib/chat-types";
import { searchSubstances } from "@/lib/substances";

export { helpText, isHelpIntent } from "@/lib/chat-help";

function fold(q: string) {
  return q
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-'’]/g, " ")
    .replace(/[?!.,;:]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function answerOffline(q: string, locale: "fr" | "en"): Promise<ChatReply> {
  const fr = locale !== "en";
  if (isHelpIntent(q)) {
    return { ok: true, handled: true, source: "local", text: helpText(locale) };
  }
  const action = interpretMessage(q);
  if (action) return executeChatAction(action, locale, q);

  const low = fold(q);

  if (/alerte|druglab|sintes/.test(low)) {
    return {
      ok: true,
      handled: true,
      source: "local",
      path: "/alerts",
      text: fr ? "J’ouvre les alertes labo." : "Opening lab alerts.",
    };
  }

  if (/newsletter|mail de bienvenue/.test(low)) {
    return {
      ok: true,
      handled: true,
      source: "local",
      path: "/",
      text: fr
        ? "La carte Newsletter est sur l’accueil. Indique ton e-mail pour le mail de bienvenue."
        : "The newsletter card is on the home page. Enter your email for the welcome mail.",
    };
  }

  if (/import|psychonautwiki journal|\.json/.test(low)) {
    return {
      ok: true,
      handled: true,
      source: "local",
      path: "/",
      text: fr
        ? "Accueil → carte Import PsychonautWiki Journal, ou Profil → Importer un journal (.json)."
        : "Home → PsychonautWiki Journal import card, or Profile → Import journal (.json).",
    };
  }

  const asked = await askAssistant(q, locale);
  let text = asked.answer.replace(/\*\*/g, "").trim();
  const hits = searchSubstances(q).slice(0, 5);
  if (hits.length && !hits.some((s) => text.toLowerCase().includes(s.name.toLowerCase()))) {
    const list = hits.map((s) => `• ${s.emoji} ${s.name} — ${s.psychoactiveClass}`).join("\n");
    text = `${text}\n\n${fr ? "Correspondances :" : "Matches:"}\n${list}`;
  }
  if (/\b(stat|combien|resume|résumé|journal)\b/i.test(q)) {
    text += "\n\n" + (await journalDigest(locale));
  }
  return { ok: true, handled: true, source: "local", text: text || helpText(locale) };
}

export function withTimeout<T>(p: Promise<T>, ms: number): Promise<T | undefined> {
  return new Promise((resolve) => {
    const t = setTimeout(() => resolve(undefined), ms);
    p.then((v) => {
      clearTimeout(t);
      resolve(v);
    }).catch(() => {
      clearTimeout(t);
      resolve(undefined);
    });
  });
}
