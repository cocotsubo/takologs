import { i as createServerFn } from "./ssr2.mjs";
import { C as searchSubstances, T as substances, c as extractChatAction, d as getSubstance, l as findSubstanceByName, p as humanizeChatText, s as durationCurve, u as formatMins } from "./chat-parse-Cfiiw-J0.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-api-BOEoly1Z.js
var TOOLS = [
	{
		type: "function",
		function: {
			name: "lookup_substance",
			description: "Look up a psychoactive substance in the TakoLogs encyclopedia (doses, duration, interactions, harm).",
			parameters: {
				type: "object",
				properties: { query: { type: "string" } },
				required: ["query"]
			}
		}
	},
	{
		type: "function",
		function: {
			name: "add_to_journal",
			description: "Add one or more doses to the journal. Use items for several substances. Optional title creates/names the experience.",
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
								route: { type: "string" }
							},
							required: ["substance"]
						}
					},
					substance: { type: "string" },
					dose: { type: "number" },
					unit: { type: "string" },
					route: { type: "string" }
				}
			}
		}
	},
	{
		type: "function",
		function: {
			name: "set_theme",
			description: "Change the site accent hue (0-360, or -1 for mono) and/or light/dark/auto mode.",
			parameters: {
				type: "object",
				properties: {
					hue: { type: "number" },
					theme: {
						type: "string",
						enum: [
							"light",
							"dark",
							"auto"
						]
					}
				}
			}
		}
	},
	{
		type: "function",
		function: {
			name: "open_page",
			description: "Open a TakoLogs page.",
			parameters: {
				type: "object",
				properties: { path: { type: "string" } },
				required: ["path"]
			}
		}
	}
];
function catalog() {
	return substances.map((s) => s.name).slice(0, 340).join(", ");
}
function lookupCard(query) {
	const s = findSubstanceByName(query) ?? getSubstance(query) ?? searchSubstances(query)[0];
	if (!s) return JSON.stringify({
		error: "not found",
		query
	});
	const d = s.doses[0];
	const c = durationCurve(s);
	return JSON.stringify({
		name: s.name,
		slug: s.slug,
		aliases: s.aliases.slice(0, 6),
		class: s.psychoactiveClass,
		chemical: s.chemicalClass,
		summary: s.summary,
		dose: d ? {
			route: d.route,
			unit: d.unit,
			threshold: d.threshold,
			light: d.light,
			common: d.common,
			strong: d.strong,
			heavy: d.heavy
		} : null,
		duration: {
			onset: formatMins(c.onset),
			peak: `${formatMins(c.peakStart)}–${formatMins(c.peakEnd)}`,
			total: formatMins(c.total)
		},
		dangerous: s.interactions.dangerous,
		caution: s.interactions.caution,
		harm: s.harm,
		risks: s.riskNotes.slice(0, 5),
		effects: {
			positive: s.effects.positive.slice(0, 6),
			negative: s.effects.negative.slice(0, 6)
		}
	});
}
function systemPrompt(locale, digest) {
	const fr = locale === "fr";
	return [
		fr ? "Tu es TakoAI, assistant de TakoLogs. Tu réponds à N’IMPORTE QUELLE question (science, quotidien, blagues, le site, les substances) en plus du journal." : "You are TakoAI, TakoLogs assistant. You answer ANY question (science, everyday, jokes, the site, substances) as well as the journal.",
		fr ? "Pas de conseil médical, jamais d’incitation. Réponds en français naturel, concis. JAMAIS de JSON ni de fences markdown." : "No medical advice, never encourage use. Natural English, concise. NEVER JSON or markdown fences.",
		fr ? "Pour plusieurs prises, un seul appel add_to_journal avec items[]. Pour une couleur de site, set_theme. Pour ouvrir une page, open_page. Tu peux commenter les stats du journal fourni." : "For several doses, one add_to_journal call with items[]. For site color, set_theme. To open a page, open_page. You may comment on the journal snapshot.",
		digest ? digest : "",
		`Substances : ${catalog()}`
	].join("\n");
}
async function grok(apiKey, messages) {
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			temperature: .35,
			max_tokens: 700,
			messages,
			tools: TOOLS,
			tool_choice: "auto"
		})
	});
	if (!res.ok) return {
		message: {
			role: "assistant",
			content: ""
		},
		error: `xAI ${res.status}`
	};
	return { message: (await res.json()).choices?.[0]?.message ?? {
		role: "assistant",
		content: ""
	} };
}
function parseAction(args) {
	return extractChatAction(args);
}
var sendChat_createServerFn_handler = createServerRpc({
	id: "43849ca4a7b0ca9d991d1061108ae5ff78d7cb5754cfae9259ce3b35bb5e4f45",
	name: "sendChat",
	filename: "src/lib/chat-api.ts"
}, (opts) => sendChat.__executeServer(opts));
var sendChat = createServerFn({ method: "POST" }).validator((data) => data).handler(sendChat_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		text: "",
		error: "unavailable",
		source: "local"
	};
	const history = [{
		role: "system",
		content: systemPrompt(data.locale === "en" ? "en" : "fr", data.digest)
	}, ...data.messages.slice(-12).map((m) => ({
		role: m.role,
		content: m.content
	}))];
	let action;
	let { message, error } = await grok(apiKey, history);
	if (error) return {
		ok: false,
		text: "",
		error,
		source: "grok"
	};
	for (let i = 0; i < 2 && message.tool_calls?.length; i++) {
		history.push(message);
		for (const call of message.tool_calls) {
			const name = call.function.name;
			let content = "";
			if (name === "lookup_substance") {
				let query = "";
				try {
					query = String(JSON.parse(call.function.arguments).query ?? "");
				} catch {
					query = call.function.arguments;
				}
				content = lookupCard(query);
			} else if (name === "add_to_journal" || name === "set_theme" || name === "open_page") {
				const parsed = parseAction(call.function.arguments) ?? extractChatAction(JSON.stringify({
					name,
					arguments: call.function.arguments
				}));
				if (name === "add_to_journal" && parsed?.kind === "add") action = parsed;
				else if (name === "set_theme" && parsed?.kind === "theme") action = parsed;
				else if (name === "open_page" && parsed?.kind === "navigate") action = parsed;
				else if (name !== "add_to_journal" && parsed) action = parsed;
				content = JSON.stringify({
					ok: true,
					queued: true,
					kind: action?.kind
				});
			} else content = JSON.stringify({ error: "unknown tool" });
			history.push({
				role: "tool",
				content,
				tool_call_id: call.id
			});
		}
		const next = await grok(apiKey, history);
		if (next.error) break;
		message = next.message;
	}
	const text = (message.content ?? "").trim();
	const dumped = extractChatAction(text);
	const finalAction = action ?? dumped;
	return {
		ok: true,
		text: humanizeChatText(text, data.locale === "en" ? "en" : "fr", finalAction),
		action: finalAction,
		source: "grok"
	};
});
//#endregion
export { sendChat_createServerFn_handler };
