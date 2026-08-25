import {
  addIngestion,
  listExperiences,
  upsertExperience,
} from "@/lib/journal-api";
import { defaultExperienceTitleFromDate, type IngestionInput } from "@/lib/journal";
import {
  durationCurve,
  findSubstanceByName,
  formatMins,
  searchSubstances,
  type Substance,
} from "@/lib/substances";
import { comboWarnings } from "@/lib/interactions";
import { helpText, isHelpIntent } from "@/lib/chat-help";
import { executeChatAction, journalDigest } from "@/lib/chat-agent";

export type AssistantAction = {
  kind: "add";
  substance: Substance;
  dose: number | null;
  unit: string;
  route: string;
};

export type AssistantResult = {
  answer: string;
  action?: AssistantAction;
};

function localDay(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function strip(q: string) {
  return q
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-'’]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const STOP = new Set(
  "je tu il elle on nous vous ils elles le la les un une des de du da ne pas plus que qui dont ou et au aux en y ce cet cette ces mon ma mes ton ta tes son sa ses notre votre leur leurs pour dans sur par avec sans sous vers chez que quoi comment combien quand est sont suis es faire fait fais met mets mettre site nez sang bleu bleue the and for but not you are was put make".split(
    " ",
  ),
);

function findInText(q: string): Substance | undefined {
  const words = q
    .split(/[^a-z0-9àâäéèêëïîôùûüç+-]+/i)
    .map((w) => w.trim())
    .filter((w) => w.length > 2 && !STOP.has(w.toLowerCase()));
  const ranked = words.slice().sort((a, b) => b.length - a.length);
  for (const w of ranked) {
    const s = findSubstanceByName(w);
    if (!s) continue;
    if (w.length <= 3 && s.name.toLowerCase() !== w.toLowerCase() && !s.aliases.some((a) => a.toLowerCase() === w.toLowerCase())) {
      continue;
    }
    return s;
  }
  const hits = searchSubstances(q).filter((s) => {
    const n = s.name.toLowerCase();
    const low = q.toLowerCase();
    if (n.length <= 3) return new RegExp(`\\b${n}\\b`, "i").test(low);
    return low.includes(n) || s.aliases.some((a) => a.length > 3 && low.includes(a.toLowerCase()));
  });
  return hits[0];
}

function parseDose(q: string): { dose: number | null; unit: string } {
  const m = q.match(/(\d+(?:[.,]\d+)?)\s*(µg|ug|mcg|mg|g|ml|µg)/i);
  if (!m) return { dose: null, unit: "mg" };
  const dose = Number(m[1].replace(",", "."));
  let unit = m[2].toLowerCase();
  if (unit === "ug" || unit === "mcg") unit = "µg";
  return { dose, unit };
}

function isAction(q: string) {
  return /\b(ajoute|ajouter|add|logge[rz]?|prend|prendre|took|ingère|ingere)\b/i.test(q);
}

function isQuestion(q: string) {
  return (
    /[?]/.test(q) ||
    /^(quoi|que|quel|quelle|comment|combien|quand|c est quoi|c'est quoi|what|how|when|dose|duree|durée|danger|interact)/i.test(
      q.trim(),
    )
  );
}

function describe(s: Substance, locale: string) {
  const c = durationCurve(s);
  const d0 = s.doses[0];
  const dose = d0
    ? `${d0.common}${d0.unit} (${d0.route})`
    : locale === "fr"
      ? "dose non renseignée"
      : "dose unknown";
  const dur = `${formatMins(c.onset)} → ${formatMins(c.total)}`;
  if (locale === "fr") {
    return `${s.emoji} **${s.name}** — ${s.psychoactiveClass}. Dose courante ${dose}. Durée ${dur}. ${s.summary}`;
  }
  return `${s.emoji} **${s.name}** — ${s.psychoactiveClass}. Common dose ${dose}. Duration ${dur}. ${s.summary}`;
}

export async function askAssistant(raw: string, locale: "fr" | "en"): Promise<AssistantResult> {
  const q = raw.trim();
  if (!q) {
    return { answer: helpText(locale) };
  }
  if (isHelpIntent(q)) {
    return { answer: helpText(locale) };
  }
  const s = findInText(q);
  const { dose, unit } = parseDose(q);

  if (isAction(q) && s) {
    const last = (await listExperiences())[0];
    const route = s.doses[0]?.route ?? "Orale";
    const n = dose ?? s.doses[0]?.common ?? null;
    const u = dose != null ? unit : s.doses[0]?.unit ?? "mg";
    const target =
      last && localDay(new Date(last.experienceDate)) === localDay()
        ? last.title
        : locale === "fr"
          ? "une nouvelle expérience (aujourd’hui)"
          : "a new experience (today)";
    return {
      answer:
        locale === "fr"
          ? `Je peux ajouter ${n ?? "une prise"} ${u} de ${s.name} à ${target}.`
          : `I can add ${n ?? "a dose"} ${u} of ${s.name} to ${target}.`,
      action: {
        kind: "add",
        substance: s,
        dose: n,
        unit: u,
        route,
      },
    };
  }

  if (s) {
    const low = strip(q);
    if (/interact|combi|melange|mix|danger avec/.test(low)) {
      const others = searchSubstances(q).filter((x) => x.slug !== s.slug).slice(0, 3);
      const names = [s.name, ...others.map((o) => o.name)];
      const warns = comboWarnings(names);
      const lines = warns.length
        ? warns.map((w) => `• ${w.a} + ${w.b} — ${w.level}`).join("\n")
        : locale === "fr"
          ? "Pas d’interaction critique listée pour ce couple dans la base."
          : "No critical interaction listed for this pair.";
      return { answer: `${describe(s, locale)}\n\n${lines}` };
    }
    if (/dure|duration|combien de temps|how long|onset|pic|peak/.test(low)) {
      const c = durationCurve(s);
      return {
        answer:
          locale === "fr"
            ? `${s.emoji} ${s.name} : montée ~${formatMins(c.onset)}, pic ${formatMins(c.peakStart)}–${formatMins(c.peakEnd)}, total ~${formatMins(c.total)}.`
            : `${s.emoji} ${s.name}: onset ~${formatMins(c.onset)}, peak ${formatMins(c.peakStart)}–${formatMins(c.peakEnd)}, total ~${formatMins(c.total)}.`,
      };
    }
    if (/dose|combien|threshold|common|fort/.test(low) && s.doses[0]) {
      const d = s.doses[0];
      return {
        answer:
          locale === "fr"
            ? `${s.emoji} ${s.name} (${d.route}) : seuil ${d.threshold}${d.unit}, léger ${d.light}, commun ${d.common}, fort ${d.strong}, lourd ${d.heavy}.`
            : `${s.emoji} ${s.name} (${d.route}): threshold ${d.threshold}${d.unit}, light ${d.light}, common ${d.common}, strong ${d.strong}, heavy ${d.heavy}.`,
      };
    }
    const pw = await pwNote(s, locale);
    return { answer: describe(s, locale) + pw };
  }

  const digest = await journalDigest(locale).catch(() => "");
  const hint = helpText(locale);
  return {
    answer:
      locale === "fr"
        ? `Je n’ai pas de fiche exacte pour « ${q} », mais je peux quand même t’aider.\n\n${hint}\n\n${digest}`
        : `I don’t have an exact match for “${q}”, but I can still help.\n\n${hint}\n\n${digest}`,
  };
}


async function pwNote(s: Substance, locale: string) {
  try {
    const { fetchPwSubstance, pwDigest } = await import("@/lib/psychonautwiki");
    const row = await Promise.race([
      fetchPwSubstance(s),
      new Promise<null>((r) => setTimeout(() => r(null), 2200)),
    ]);
    if (!row) return "";
    return "\n\n" + pwDigest(row, locale === "en" ? "en" : "fr");
  } catch {
    return "";
  }
}

export async function runAssistantAction(action: AssistantAction, locale: "fr" | "en") {
  const list = await listExperiences();
  const today = localDay();
  let exp = list.find((e) => localDay(new Date(e.experienceDate)) === today) ?? list[0];
  if (!exp || localDay(new Date(exp.experienceDate)) !== today) {
    const iso = new Date().toISOString();
    const id = await upsertExperience({
      data: {
        title: defaultExperienceTitleFromDate(iso, locale === "fr" ? "fr-FR" : "en-GB"),
        experienceDate: iso,
        notes: "",
      },
    });
    exp = { id: String(id), title: "", experienceDate: iso, notes: "", feeling: null, ingestions: [] };
  }
  const ingestion: IngestionInput = {
    substanceName: action.substance.name,
    slug: action.substance.slug,
    route: action.route,
    dose: action.dose,
    doseUnit: action.unit,
    color: action.substance.color,
    ingestionTime: new Date().toISOString(),
    notes: "",
  };
  await addIngestion({ data: { experienceId: exp.id, ingestion } });
  return exp.id;
}

export async function runChatAdd(
  action: {
    substanceName?: string;
    dose?: number | null;
    unit?: string;
    route?: string;
    items?: { substanceName: string; dose: number | null; unit: string; route: string }[];
    title?: string;
  },
  locale: "fr" | "en",
) {
  const r = await executeChatAction(
    {
      kind: "add",
      ...action,
      substanceName: action.substanceName,
      dose: action.dose,
      unit: action.unit,
      route: action.route,
      items: action.items,
      title: action.title,
    },
    locale,
  );
  if (!r.logId) throw new Error(r.error || "add failed");
  return r.logId;
}
