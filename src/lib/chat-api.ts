import { createServerFn } from "@tanstack/react-start";
import type { ChatAction, ChatMsg, ChatReply } from "@/lib/chat-types";
import { extractChatAction, humanizeChatText } from "@/lib/chat-parse";
import {
  durationCurve,
  findSubstanceByName,
  formatMins,
  getSubstance,
  searchSubstances,
  substances,
} from "@/lib/substances";

export type { ChatAction, ChatMsg, ChatReply } from "@/lib/chat-types";

const TOOLS = [
  {
    type: "function" as const,
    function: {
      name: "lookup_substance",
      description:
        "Look up a psychoactive substance in the TakoLogs encyclopedia (doses, duration, interactions, harm).",
      parameters: {
        type: "object",
        properties: { query: { type: "string" } },
        required: ["query"],
      },
    },
  },
  {
    type: "function" as const,
    function: {
      name: "add_to_journal",
      description:
        "Add one or more doses to the journal. Use items for several substances. Optional title creates/names the experience.",
      parameters: {
        type: "object",
        properties: {
          title: { type: "string" },
          items: {
            type: "array",
            items: {
              type: "object",
              properties: {
                substance: { type: "string" },
                dose: { type: "number" },
                unit: { type: "string" },
                route: { type: "string" },
              },
              required: ["substance"],
            },
          },
          substance: { type: "string" },
          dose: { type: "number" },
          unit: { type: "string" },
          route: { type: "string" },
        },
      },
    },
  },
  {
    type: "function" as const,
    function: {
      name: "set_theme",
      description: "Change the site accent hue (0-360, or -1 for mono) and/or light/dark/auto mode.",
      parameters: {
        type: "object",
        properties: {
          hue: { type: "number" },
          theme: { type: "string", enum: ["light", "dark", "auto"] },
        },
      },
    },
  },
  {
    type: "function" as const,
    function: {
      name: "open_page",
      description: "Open a TakoLogs page.",
      parameters: {
        type: "object",
        properties: { path: { type: "string" } },
        required: ["path"],
      },
    },
  },
];

function catalog() {
  return substances
    .map((s) => s.name)
    .slice(0, 340)
    .join(", ");
}

function lookupCard(query: string) {
  const s = findSubstanceByName(query) ?? getSubstance(query) ?? searchSubstances(query)[0];
  if (!s) return JSON.stringify({ error: "not found", query });
  const d = s.doses[0];
  const c = durationCurve(s);
  return JSON.stringify({
    name: s.name,
    slug: s.slug,
    aliases: s.aliases.slice(0, 6),
    class: s.psychoactiveClass,
    chemical: s.chemicalClass,
    summary: s.summary,
    dose: d
      ? {
          route: d.route,
          unit: d.unit,
          threshold: d.threshold,
          light: d.light,
          common: d.common,
          strong: d.strong,
          heavy: d.heavy,
        }
      : null,
    duration: {
      onset: formatMins(c.onset),
      peak: `${formatMins(c.peakStart)}–${formatMins(c.peakEnd)}`,
      total: formatMins(c.total),
    },
    dangerous: s.interactions.dangerous,
    caution: s.interactions.caution,
    harm: s.harm,
    risks: s.riskNotes.slice(0, 5),
    effects: {
      positive: s.effects.positive.slice(0, 6),
      negative: s.effects.negative.slice(0, 6),
    },
  });
}

function systemPrompt(locale: "fr" | "en", digest?: string) {
  const fr = locale === "fr";
  return [
    fr
      ? "Tu es TakoAI, assistant de TakoLogs. Tu réponds à N’IMPORTE QUELLE question (science, quotidien, blagues, le site, les substances) en plus du journal."
      : "You are TakoAI, TakoLogs assistant. You answer ANY question (science, everyday, jokes, the site, substances) as well as the journal.",
    fr
      ? "Pas de conseil médical, jamais d’incitation. Réponds en français naturel, concis. JAMAIS de JSON ni de fences markdown."
      : "No medical advice, never encourage use. Natural English, concise. NEVER JSON or markdown fences.",
    fr
      ? "Pour plusieurs prises, un seul appel add_to_journal avec items[]. Pour une couleur de site, set_theme. Pour ouvrir une page, open_page. Tu peux commenter les stats du journal fourni."
      : "For several doses, one add_to_journal call with items[]. For site color, set_theme. To open a page, open_page. You may comment on the journal snapshot.",
    digest ? digest : "",
    `Substances : ${catalog()}`,
  ].join("\n");
}

type GrokMsg = {
  role: string;
  content?: string | null;
  tool_call_id?: string;
  tool_calls?: {
    id: string;
    type: string;
    function: { name: string; arguments: string };
  }[];
};

async function grok(
  apiKey: string,
  messages: GrokMsg[],
): Promise<{ message: GrokMsg; error?: string }> {
  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-4.5",
      temperature: 0.35,
      max_tokens: 700,
      messages,
      tools: TOOLS,
      tool_choice: "auto",
    }),
  });
  if (!res.ok) {
    return { message: { role: "assistant", content: "" }, error: `xAI ${res.status}` };
  }
  const body = (await res.json()) as { choices?: { message: GrokMsg }[] };
  return { message: body.choices?.[0]?.message ?? { role: "assistant", content: "" } };
}

function parseAction(args: string): ChatAction | undefined {
  return extractChatAction(args);
}

export const sendChat = createServerFn({ method: "POST" })
  .validator((data: { messages: ChatMsg[]; locale: "fr" | "en"; digest?: string }) => data)
  .handler(async ({ data }): Promise<ChatReply> => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false, text: "", error: "unavailable", source: "local" };
    }
    const history: GrokMsg[] = [
      { role: "system", content: systemPrompt(data.locale === "en" ? "en" : "fr", data.digest) },
      ...data.messages.slice(-12).map((m) => ({ role: m.role, content: m.content })),
    ];
    let action: ChatAction | undefined;
    let { message, error } = await grok(apiKey, history);
    if (error) return { ok: false, text: "", error, source: "grok" };

    for (let i = 0; i < 2 && message.tool_calls?.length; i++) {
      history.push(message);
      for (const call of message.tool_calls) {
        const name = call.function.name;
        let content = "";
        if (name === "lookup_substance") {
          let query = "";
          try {
            query = String((JSON.parse(call.function.arguments) as { query?: string }).query ?? "");
          } catch {
            query = call.function.arguments;
          }
          content = lookupCard(query);
        } else if (name === "add_to_journal" || name === "set_theme" || name === "open_page") {
          const parsed =
            parseAction(call.function.arguments) ??
            extractChatAction(JSON.stringify({ name, arguments: call.function.arguments }));
          if (name === "add_to_journal" && parsed?.kind === "add") action = parsed;
          else if (name === "set_theme" && parsed?.kind === "theme") action = parsed;
          else if (name === "open_page" && parsed?.kind === "navigate") action = parsed;
          else if (name !== "add_to_journal" && parsed) action = parsed;
          content = JSON.stringify({ ok: true, queued: true, kind: action?.kind });
        } else {
          content = JSON.stringify({ error: "unknown tool" });
        }
        history.push({
          role: "tool",
          content,
          tool_call_id: call.id,
        } as GrokMsg);
      }
      const next = await grok(apiKey, history);
      if (next.error) break;
      message = next.message;
    }

    const text = (message.content ?? "").trim();
    const dumped = extractChatAction(text);
    const finalAction = action ?? dumped;
    const shown = humanizeChatText(text, data.locale === "en" ? "en" : "fr", finalAction);
    return {
      ok: true,
      text: shown,
      action: finalAction,
      source: "grok",
    };
  });

export const sendVision = createServerFn({ method: "POST" })
  .validator((data: { image: string; locale: "fr" | "en" }) => data)
  .handler(async ({ data }): Promise<{ ok: boolean; text: string }> => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false, text: "" };
    const fr = data.locale !== "en";
    const prompt = fr
      ? "Photo d’une consommation (poudre, cristaux, cachet, buvard, gélule). Estime la substance probable et une QUANTITÉ APPROXIMATIVE en mg. Réponds d’abord une ligne JSON {\"substance\":\"nom\",\"dose\":80,\"unit\":\"mg\",\"confidence\":\"low|mid|high\"} puis 2 phrases. Approximation visuelle, pas une balance. Si tu ne reconnais pas, dose null."
      : "Photo of a dose (powder, crystals, pill, blotter, capsule). Guess the substance and an APPROXIMATE amount in mg. First a JSON line {\"substance\":\"name\",\"dose\":80,\"unit\":\"mg\",\"confidence\":\"low|mid|high\"} then 2 sentences. Visual guess, not a scale. If unknown, dose null.";
    const models = ["grok-2-vision-1212", "grok-4-0709", "grok-4"];
    for (const model of models) {
      try {
        const res = await fetch("https://api.x.ai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model,
            temperature: 0.2,
            max_tokens: 400,
            messages: [
              {
                role: "user",
                content: [
                  { type: "text", text: prompt },
                  { type: "image_url", image_url: { url: data.image } },
                ],
              },
            ],
          }),
        });
        if (!res.ok) continue;
        const body = (await res.json()) as {
          choices?: { message?: { content?: string } }[];
        };
        const text = (body.choices?.[0]?.message?.content ?? "").trim();
        if (text) return { ok: true, text };
      } catch {
        /* next model */
      }
    }
    return { ok: false, text: "" };
  });
