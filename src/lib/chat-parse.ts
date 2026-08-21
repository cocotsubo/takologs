import { findSubstanceByName, searchSubstances } from "@/lib/substances";
import type { ChatAction, ChatDose } from "@/lib/chat-types";

export function looksLikeAdd(q: string) {
  return /\b(ajoute[r]?|add|log|prend(?:re)?|took|note|ing[eè]re)\b/i.test(q);
}

export function looksLikeToolDump(text: string) {
  const t = text.toLowerCase();
  return (
    /add_to_journal|lookup_substance|set_theme/.test(t) ||
    /```(?:html|json|xml|tool)/i.test(text) ||
    /"name"\s*:\s*"add_to_journal"/.test(text)
  );
}

function routeOf(raw?: string) {
  const r = (raw ?? "").toLowerCase();
  if (/oral|orale|po/.test(r)) return "Orale";
  if (/nasal|sniff|intranas/.test(r)) return "Intranasale";
  if (/fum|smoke|vape/.test(r)) return "Fumée";
  if (/iv|intravein/.test(r)) return "IV";
  if (/im\b|intra.?musc/.test(r)) return "IM";
  if (/subling/.test(r)) return "Sublinguale";
  if (/rect/.test(r)) return "Rectale";
  return raw?.trim() || "Orale";
}

export function resolveDoseName(raw: string): ChatDose | undefined {
  const name = raw
    .replace(/^(de|d['’]|of|du|de la|des)\s+/i, "")
    .replace(/[,;]+$/g, "")
    .replace(/\s+(et|and)$/i, "")
    .trim();
  if (!name || name.length < 2) return undefined;
  const s = findSubstanceByName(name) ?? (name.length >= 3 ? searchSubstances(name)[0] : undefined);
  if (!s) return undefined;
  if (name.length < 4 && !s.name.toLowerCase().startsWith(name.toLowerCase()) && !s.aliases.some((a) => a.toLowerCase().startsWith(name.toLowerCase()))) {
    return undefined;
  }
  return {
    substanceName: s.name,
    dose: null,
    unit: s.doses[0]?.unit || "mg",
    route: s.doses[0]?.route || "Orale",
  };
}

function toDose(
  substance: string,
  dose?: number | string | null,
  unit?: string,
  route?: string,
): ChatDose | undefined {
  const base = resolveDoseName(substance);
  if (!base) return undefined;
  const n =
    typeof dose === "number"
      ? dose
      : dose != null && String(dose).trim()
        ? Number(String(dose).replace(",", "."))
        : null;
  return {
    ...base,
    dose: n != null && Number.isFinite(n) ? n : null,
    unit: unit || base.unit,
    route: routeOf(route || base.route),
  };
}

export function extractTitle(q: string): { title?: string; rest: string } {
  const m = q.match(
    /(?:dans |in )?(?:une |an )?(?:exp[eé]rience|experience|session|log)\s+(?:appel[ée]e|nomm[ée]e|named|called|titre|title)\s+[«"']?(.+?)[»"']?\s*$/i,
  );
  if (m) {
    return {
      title: m[1].trim().replace(/[«»"']+/g, ""),
      rest: q.slice(0, m.index).trim().replace(/[,;:\s]+$/, ""),
    };
  }
  const m2 = q.match(/titre\s*[:=]\s*[«"']?(.+?)[»"']?\s*$/i);
  if (m2) {
    return { title: m2[1].trim(), rest: q.slice(0, m2.index).trim() };
  }
  return { rest: q };
}

export function parseAddItems(q: string): { items: ChatDose[]; title?: string } {
  const { title, rest } = extractTitle(q);
  const doseRe = /(\d+(?:[.,]\d+)?)\s*(µg|ug|mcg|mg|g|ml)\b/gi;
  const hits = [...rest.matchAll(doseRe)];
  if (hits.length === 0) {
    if (!looksLikeAdd(q)) return { items: [], title };
    const only = resolveDoseName(rest.replace(/^(ajoute[r]?|add|log)\s+/i, ""));
    return { items: only ? [only] : [], title };
  }
  const items: ChatDose[] = [];
  for (let i = 0; i < hits.length; i++) {
    const m = hits[i];
    const start = (m.index ?? 0) + m[0].length;
    const end = i + 1 < hits.length ? (hits[i + 1].index ?? rest.length) : rest.length;
    let name = rest.slice(start, end);
    name = name.replace(/^(?:\s*(?:de|d['’]|of|du|de la)\s+)/i, "");
    name = name.replace(/[\s,;]+(?:et|and)?\s*$/i, "").trim();
    const d = toDose(name, m[1].replace(",", "."), m[2]);
    if (d) items.push(d);
  }
  return { items, title };
}

const COLOR_WORDS: { re: RegExp; hue: number }[] = [
  { re: /\b(sable|beige|sand|or|gold)\b/i, hue: 36 },
  { re: /\b(terracotta|orange|cuivre)\b/i, hue: 18 },
  { re: /\b(rose|pink|poudr\w*)\b/i, hue: 350 },
  { re: /\b(mauve|violet|purple|lilas)\b/i, hue: 280 },
  { re: /\b(indigo|bleu[- ]nuit)\b/i, hue: 235 },
  { re: /\b(lagon|cyan|bleu|bleue|blue)\b/i, hue: 200 },
  { re: /\b(sauge|vert|verte|green)\b/i, hue: 150 },
  { re: /\b(olive)\b/i, hue: 80 },
  { re: /\b(rouge|red)\b/i, hue: 8 },
  { re: /\b(mono|gris|grise|n&b|noir et blanc|monochrome)\b/i, hue: -1 },
];

export function looksLikeTheme(q: string) {
  const low = q.toLowerCase();
  if (
    /\b(couleur|color|th[eè]me|theme|accent|monochrome)\b/i.test(low) ||
    /\b(mets?|mettre|passe|change|put|make|switch)\b.{0,24}\b(site|th[eè]me|theme|couleur|color|bleu|blue|rouge|vert|rose|violet|sombre|clair|dark|light)\b/i.test(
      low,
    ) ||
    /\ben\s+(bleu|bleue|blue|rouge|vert|rose|violet|mauve|orange|sable|noir|blanc|gris)\b/i.test(low) ||
    /\b(mode\s+)?(sombre|nuit|dark|clair|jour|light)\b.{0,12}\b(mode|th[eè]me|theme|site)?/i.test(low) &&
      /\b(mode|th[eè]me|theme|site|passe|mets|mettre)\b/i.test(low)
  ) {
    return true;
  }
  return false;
}

export function looksLikeNav(q: string) {
  return /\b(ouvre|open|va sur|go to|affiche|montre|navig(?:ue)?)\b/i.test(q);
}

export function parseTheme(q: string): ChatAction | undefined {
  if (!looksLikeTheme(q)) return undefined;
  const low = q.toLowerCase();
  let theme: ChatAction["theme"];
  if (/\b(sombre|dark|nuit)\b/.test(low)) theme = "dark";
  else if (/\b(clair|light|jour)\b/.test(low)) theme = "light";
  else if (/\bauto\b/.test(low)) theme = "auto";
  let hue: number | undefined;
  const num = q.match(/\b(?:hue|degr[eé]s?|deg|°)\s*[:=]?\s*(\d{1,3})\b/i) || q.match(/\b(\d{1,3})\s*(?:°|deg|degr[eé]s?|hue)\b/i);
  if (num && Number(num[1]) <= 360) hue = Number(num[1]);
  for (const c of COLOR_WORDS) {
    if (c.re.test(q)) {
      hue = c.hue;
      break;
    }
  }
  if (hue == null && !theme) return undefined;
  return { kind: "theme", hue, theme };
}

export function parseNavigate(q: string): ChatAction | undefined {
  if (!looksLikeNav(q)) return undefined;
  const low = q.toLowerCase();
  const map: [RegExp, string][] = [
    [/log|journal/, "/logs"],
    [/profil|profile/, "/profile"],
    [/substance/, "/substances"],
    [/alerte/, "/alerts"],
    [/neuro/, "/neuro"],
    [/compar/, "/compare"],
    [/effet/, "/effects"],
    [/dommage|harm/, "/harm-scale"],
    [/r[eé]duction/, "/reduction"],
    [/exp[eé]rience/, "/experiences"],
    [/accueil|home/, "/"],
    [/tako|chat/, "/chat"],
  ];
  for (const [re, path] of map) {
    if (re.test(low)) return { kind: "navigate", path };
  }
  return undefined;
}

export function looksLikeStats(q: string) {
  return /\b(stat|statistique|résumé|resume|classement|combien de fois|heatmap|tolérance|tolerance|journal|mes logs|my stats)\b/i.test(
    q,
  );
}

function jsonBlobs(s: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let start = -1;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "{") {
      if (depth === 0) start = i;
      depth += 1;
    } else if (ch === "}") {
      depth -= 1;
      if (depth === 0 && start >= 0) {
        out.push(s.slice(start, i + 1));
        start = -1;
      }
    }
  }
  return out;
}

function dosesFromUnknown(o: Record<string, unknown>): ChatDose[] {
  const rawItems = o.items ?? o.ingestions ?? o.doses;
  if (Array.isArray(rawItems)) {
    return rawItems
      .map((it) => {
        const x = it as Record<string, unknown>;
        return toDose(
          String(x.substance ?? x.substanceName ?? x.name ?? ""),
          x.dose as number | string | null,
          String(x.unit ?? ""),
          String(x.route ?? ""),
        );
      })
      .filter((x): x is ChatDose => !!x);
  }
  const one = toDose(
    String(o.substance ?? o.substanceName ?? ""),
    o.dose as number | string | null,
    String(o.unit ?? ""),
    String(o.route ?? ""),
  );
  return one ? [one] : [];
}

export function extractChatAction(raw: string): ChatAction | undefined {
  if (!raw.trim()) return undefined;
  const stripped = raw
    .replace(/```(?:html|json|xml|tool|javascript|ts)?/gi, "")
    .replace(/```/g, "")
    .trim();

  for (const blob of jsonBlobs(stripped)) {
    try {
      const o = JSON.parse(blob) as Record<string, unknown>;
      let args: Record<string, unknown> = o;
      if (typeof o.arguments === "string") {
        try {
          args = JSON.parse(o.arguments) as Record<string, unknown>;
        } catch {
          args = o;
        }
      } else if (o.arguments && typeof o.arguments === "object") {
        args = o.arguments as Record<string, unknown>;
      }
      const name = String(o.name ?? o.tool ?? o.function ?? args.name ?? "");
      if (name === "set_theme") {
        return {
          kind: "theme",
          hue: typeof args.hue === "number" ? args.hue : undefined,
          theme: args.theme as ChatAction["theme"],
        };
      }
      if (name === "open_page") {
        return { kind: "navigate", path: String(args.path ?? o.path ?? "") };
      }
      if (name === "add_to_journal") {
        const items = dosesFromUnknown(args);
        if (items.length) {
          const first = items[0];
          return {
            kind: "add",
            items,
            title: args.title ? String(args.title) : undefined,
            substanceName: first.substanceName,
            dose: first.dose,
            unit: first.unit,
            route: first.route,
          };
        }
      }
    } catch {
      /* next */
    }
  }

  const parsed = parseAddItems(stripped);
  if (parsed.items.length && looksLikeAdd(stripped)) {
    const first = parsed.items[0];
    return {
      kind: "add",
      items: parsed.items,
      title: parsed.title,
      substanceName: first.substanceName,
      dose: first.dose,
      unit: first.unit,
      route: first.route,
    };
  }
  return parseTheme(stripped) ?? parseNavigate(stripped);
}

export function interpretMessage(q: string): ChatAction | undefined {
  const theme = parseTheme(q);
  if (theme) return theme;
  const nav = parseNavigate(q);
  if (nav) return nav;
  if (looksLikeStats(q) && !looksLikeAdd(q)) return { kind: "stats" };
  const parsed = parseAddItems(q);
  if (parsed.items.length && (looksLikeAdd(q) || parsed.items.length > 1 || parsed.title)) {
    const first = parsed.items[0];
    return {
      kind: "add",
      items: parsed.items,
      title: parsed.title,
      substanceName: first.substanceName,
      dose: first.dose,
      unit: first.unit,
      route: first.route,
    };
  }
  return undefined;
}

export function humanizeChatText(
  raw: string,
  locale: "fr" | "en",
  action?: ChatAction,
): string {
  const cleaned = raw
    .replace(/```(?:html|json|xml|tool|javascript|ts)?/gi, "")
    .replace(/```/g, "")
    .trim();
  if (action?.kind === "add" && (looksLikeToolDump(raw) || looksLikeToolDump(cleaned))) {
    const items = action.items?.length
      ? action.items
      : action.substanceName
        ? [
            {
              substanceName: action.substanceName,
              dose: action.dose ?? null,
              unit: action.unit ?? "mg",
              route: action.route ?? "Orale",
            },
          ]
        : [];
    const list = items
      .map((i) => `${i.dose ?? ""} ${i.unit} ${i.substanceName}`.trim())
      .join(", ");
    return locale === "fr"
      ? `C’est noté — ${list}${action.title ? ` dans « ${action.title} »` : ""}.`
      : `Got it — ${list}${action.title ? ` in “${action.title}”` : ""}.`;
  }
  if (looksLikeToolDump(cleaned) && !action) {
    return locale === "fr"
      ? "Je n’ai pas pu appliquer cette action. Reformule."
      : "I couldn’t apply that action. Try again.";
  }
  return cleaned.replace(/\*\*/g, "").trim();
}
