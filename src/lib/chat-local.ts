import { answerOffline } from "@/lib/chat-offline";
import { grokFromBrowser } from "@/lib/grok-browser";
import { journalDigest } from "@/lib/chat-agent";
import type { ChatMsg, ChatReply } from "@/lib/chat-types";

export async function sendChat(arg: {
  data: { messages: ChatMsg[]; locale: "fr" | "en"; digest?: string };
}): Promise<ChatReply> {
  const { messages, locale, digest } = arg.data;
  const last = [...messages].reverse().find((m) => m.role === "user");
  if (!last) return answerOffline("aide", locale);
  try {
    const snap = digest || (await journalDigest(locale));
    const grok = await grokFromBrowser({ messages, locale, digest: snap });
    if (grok?.ok && grok.text) return grok;
  } catch {
    /* no php / no key */
  }
  return answerOffline(last.content, locale);
}

export async function sendVision(_arg: {
  data: { image: string; locale: "fr" | "en" };
}): Promise<{ ok: boolean; text: string }> {
  return { ok: false, text: "" };
}
