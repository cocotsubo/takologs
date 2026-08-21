import { loadXaiKey } from "@/lib/xai-config";
import type { ChatMsg, ChatReply } from "@/lib/chat-types";
import { extractChatAction, humanizeChatText } from "@/lib/chat-parse";

function systemPrompt(locale: "fr" | "en", digest?: string) {
  const fr = locale !== "en";
  return [
    fr
      ? "Tu es TakoAI, assistant de TakoLogs. Tu réponds à N’IMPORTE QUELLE question (science, quotidien, blagues, le site, les substances) en plus du journal."
      : "You are TakoAI, TakoLogs assistant. You answer ANY question (science, everyday, jokes, the site, substances) as well as the journal.",
    fr
      ? "Pas de conseil médical, jamais d’incitation. Réponds en français naturel, concis. Pas de JSON ni de fences markdown."
      : "No medical advice, never encourage use. Natural English, concise. No JSON or markdown fences.",
    digest || "",
  ].join("\n");
}

function phpEndpoints() {
  if (typeof window === "undefined") return ["ai-send.php"];
  const origin = window.location.origin;
  const dir = window.location.pathname.replace(/\/[^/]*$/, "/") || "/";
  const out = [
    new URL("ai-send.php", origin + "/").href,
    new URL("ai-send.php", origin + dir).href,
    "/ai-send.php",
    "ai-send.php",
    "./ai-send.php",
  ];
  return [...new Set(out)];
}

export async function grokFromBrowser(opts: {
  messages: ChatMsg[];
  locale: "fr" | "en";
  digest?: string;
}): Promise<ChatReply | undefined> {
  const override = loadXaiKey();
  const payload = {
    apiKey: override.startsWith("xai-") ? override : "",
    model: "grok-3",
    messages: [
      { role: "system", content: systemPrompt(opts.locale, opts.digest) },
      ...opts.messages.slice(-12).map((m) => ({ role: m.role, content: m.content })),
    ],
  };
  const urls = phpEndpoints();
  for (const url of urls) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) continue;
      const body = (await res.json()) as {
        choices?: { message?: { content?: string } }[];
      };
      const text = (body.choices?.[0]?.message?.content ?? "").trim();
      if (!text) continue;
      const action = extractChatAction(text);
      return {
        ok: true,
        handled: false,
        source: "grok",
        text: humanizeChatText(text, opts.locale, action),
        action,
      };
    } catch {
      /* next */
    }
  }
  return undefined;
}
