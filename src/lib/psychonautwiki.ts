import enCopy from "@/data/substance-en.json";
import type { Locale } from "@/lib/i18n";
import { pwExtract, pwList, pwLocaleText, pwUnit } from "@/lib/pw-i18n";
import type { Substance } from "@/lib/substances";

const GQL_URL = "https://api.psychonautwiki.org/";
const MW_URL = "https://psychonautwiki.org/w/api.php";
const CACHE = "takologs-pw-v1:";
const TTL = 1000 * 60 * 60;

const GQL = `query ($q: String) {
  substances(query: $q) {
    name
    url
    commonNames
    systematicName
    addictionPotential
    toxicity
    crossTolerances
    class { chemical psychoactive }
    tolerance { full half zero }
    dangerousInteractions { name }
    unsafeInteractions { name }
    uncertainInteractions { name }
    images { image thumb }
    roas {
      name
      dose {
        units
        threshold
        light { min max }
        common { min max }
        strong { min max }
        heavy
      }
      duration {
        onset { min max units }
        comeup { min max units }
        peak { min max units }
        offset { min max units }
        total { min max units }
        afterglow { min max units }
      }
      bioavailability { min max }
    }
    reagents {
      results {
        isPositive
        description
        reagent { name shortName }
        startColors { name }
        endColors { name }
      }
    }
  }
}`;

export type PwRange = { min?: number | null; max?: number | null; units?: string | null };
export type PwRoa = {
  name: string;
  dose?: {
    units?: string | null;
    threshold?: number | null;
    light?: PwRange | null;
    common?: PwRange | null;
    strong?: PwRange | null;
    heavy?: number | null;
  } | null;
  duration?: {
    onset?: PwRange | null;
    comeup?: PwRange | null;
    peak?: PwRange | null;
    offset?: PwRange | null;
    total?: PwRange | null;
    afterglow?: PwRange | null;
  } | null;
  bioavailability?: { min?: number | null; max?: number | null } | null;
};
export type PwReagent = {
  isPositive: boolean;
  description: string;
  reagent: { name: string; shortName: string };
  startColors: { name: string }[];
  endColors: { name: string }[];
};
export type PwData = {
  name: string;
  url: string;
  commonNames: string[];
  systematicName?: string | null;
  addictionPotential?: string | null;
  toxicity: string[];
  crossTolerances: string[];
  chemical: string[];
  psychoactive: string[];
  tolerance: { full?: string | null; half?: string | null; zero?: string | null };
  dangerous: string[];
  unsafe: string[];
  uncertain: string[];
  images: { image: string; thumb: string }[];
  roas: PwRoa[];
  reagents: PwReagent[];
  extract: string;
  queried: string;
};

type GqlSub = {
  name: string;
  url?: string | null;
  commonNames?: string[] | null;
  systematicName?: string | null;
  addictionPotential?: string | null;
  toxicity?: string[] | null;
  crossTolerances?: string[] | null;
  class?: { chemical?: string[] | null; psychoactive?: string[] | null } | null;
  tolerance?: { full?: string | null; half?: string | null; zero?: string | null } | null;
  dangerousInteractions?: { name: string }[] | null;
  unsafeInteractions?: { name: string }[] | null;
  uncertainInteractions?: { name: string }[] | null;
  images?: { image?: string | null; thumb?: string | null }[] | null;
  roas?: PwRoa[] | null;
  reagents?: { results?: PwReagent[] | null } | null;
};

const EN = enCopy as unknown as Record<string, { name?: string }>;
const mem = new Map<string, { t: number; data: PwData | null }>();

function queriesFor(s: Substance): string[] {
  const out: string[] = [];
  const push = (v?: string) => {
    const n = (v ?? "").trim();
    if (n && !out.some((x) => x.toLowerCase() === n.toLowerCase())) out.push(n);
  };
  push(EN[s.slug]?.name);
  push(s.name);
  for (const a of s.aliases) push(a);
  push(s.slug.replace(/-/g, " "));
  return out.slice(0, 6);
}

function pick(list: GqlSub[], q: string[]): GqlSub | undefined {
  const low = q.map((x) => x.toLowerCase());
  return (
    list.find((s) => low.includes(s.name.toLowerCase())) ||
    list.find((s) => (s.commonNames ?? []).some((n) => low.includes(n.toLowerCase()))) ||
    list[0]
  );
}

function photos(imgs: GqlSub["images"]): { image: string; thumb: string }[] {
  const skip = /lock-|child\.svg|eye\.svg|user\.svg|volume|gears|infinity|harmchart|harmcaused|affinities|\.svg/i;
  return (imgs ?? [])
    .map((i) => ({ image: i.image ?? "", thumb: i.thumb || i.image || "" }))
    .filter((i) => i.image && !skip.test(i.image) && /\.(jpe?g|png|gif|webp)(\?|$)/i.test(i.image))
    .slice(0, 8);
}

function namesOf(rows?: { name: string }[] | null) {
  return (rows ?? []).map((r) => r.name).filter(Boolean);
}

function normalize(raw: GqlSub, extract: string, queried: string): PwData {
  return {
    name: raw.name,
    url: raw.url || `https://psychonautwiki.org/wiki/${encodeURIComponent(raw.name.replace(/ /g, "_"))}`,
    commonNames: raw.commonNames ?? [],
    systematicName: raw.systematicName,
    addictionPotential: raw.addictionPotential,
    toxicity: raw.toxicity ?? [],
    crossTolerances: raw.crossTolerances ?? [],
    chemical: raw.class?.chemical ?? [],
    psychoactive: raw.class?.psychoactive ?? [],
    tolerance: raw.tolerance ?? {},
    dangerous: namesOf(raw.dangerousInteractions),
    unsafe: namesOf(raw.unsafeInteractions),
    uncertain: namesOf(raw.uncertainInteractions),
    images: photos(raw.images),
    roas: raw.roas ?? [],
    reagents: (raw.reagents?.results ?? []).filter((r) => r.isPositive),
    extract,
    queried,
  };
}

function phpUrls() {
  if (typeof window === "undefined") return [] as string[];
  const origin = window.location.origin;
  const dir = window.location.pathname.replace(/\/[^/]*$/, "/") || "/";
  return [...new Set([new URL("pw-api.php", origin + "/").href, new URL("pw-api.php", origin + dir).href, "pw-api.php"])];
}

async function postJson(url: string, body: unknown) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(String(res.status));
  return res.json();
}

async function graphql(q: string): Promise<GqlSub[]> {
  const payload = { query: GQL, variables: { q } };
  try {
    const json = (await postJson(GQL_URL, payload)) as { data?: { substances?: GqlSub[] } };
    const list = json.data?.substances;
    if (Array.isArray(list) && list.length) return list;
  } catch {
    /* proxy */
  }
  for (const url of phpUrls()) {
    try {
      const json = (await postJson(url, { kind: "graphql", ...payload })) as {
        data?: { substances?: GqlSub[] };
      };
      const list = json.data?.substances;
      if (Array.isArray(list) && list.length) return list;
    } catch {
      /* next */
    }
  }
  return [];
}

async function wikiExtract(title: string): Promise<string> {
  const params = new URLSearchParams({
    action: "query",
    prop: "extracts",
    exintro: "1",
    explaintext: "1",
    redirects: "1",
    titles: title,
    format: "json",
    origin: "*",
  });
  try {
    const res = await fetch(`${MW_URL}?${params}`);
    if (res.ok) {
      const json = (await res.json()) as {
        query?: { pages?: Record<string, { extract?: string }> };
      };
      const page = Object.values(json.query?.pages ?? {})[0];
      const text = (page?.extract ?? "").replace(/\s+/g, " ").trim();
      if (text.length > 40) return text;
    }
  } catch {
    /* proxy */
  }
  for (const url of phpUrls()) {
    try {
      const json = (await postJson(url, { kind: "extract", title })) as { extract?: string };
      if (json.extract && json.extract.length > 40) return json.extract;
    } catch {
      /* next */
    }
  }
  return "";
}

function cached(key: string): PwData | null | undefined {
  const hit = mem.get(key);
  if (hit && Date.now() - hit.t < TTL) return hit.data;
  if (typeof sessionStorage === "undefined") return undefined;
  try {
    const raw = sessionStorage.getItem(CACHE + key);
    if (!raw) return undefined;
    const row = JSON.parse(raw) as { t: number; data: PwData | null };
    if (Date.now() - row.t > TTL) return undefined;
    mem.set(key, row);
    return row.data;
  } catch {
    return undefined;
  }
}

function store(key: string, data: PwData | null) {
  const row = { t: Date.now(), data };
  mem.set(key, row);
  try {
    sessionStorage.setItem(CACHE + key, JSON.stringify(row));
  } catch {
    /* quota */
  }
}

export async function fetchPwSubstance(s: Substance): Promise<PwData | null> {
  const key = s.slug;
  const hit = cached(key);
  if (hit !== undefined) return hit;
  const qs = queriesFor(s);
  let raw: GqlSub | undefined;
  let used = qs[0] ?? s.name;
  for (const q of qs) {
    const list = await graphql(q);
    raw = pick(list, qs);
    if (raw) {
      used = q;
      break;
    }
  }
  if (!raw) {
    store(key, null);
    return null;
  }
  const extract = await wikiExtract(raw.name);
  const data = normalize(raw, extract, used);
  store(key, data);
  return data;
}

export function formatPwRange(r?: PwRange | null, fallbackUnit?: string | null, locale: Locale = "en") {
  if (!r) return "—";
  const unit = pwUnit(r.units || fallbackUnit || "", locale);
  const a = r.min;
  const b = r.max;
  if (a == null && b == null) return "—";
  if (a != null && b != null && a !== b) return `${a}–${b} ${unit}`.trim();
  return `${a ?? b} ${unit}`.trim();
}

export function formatPwDose(n?: number | null, unit?: string | null, locale: Locale = "en") {
  if (n == null) return "—";
  return `${n} ${pwUnit(unit, locale)}`.trim();
}

export function pwDigest(data: PwData, locale: "fr" | "en") {
  const fr = locale !== "en";
  const lines = [
    `${data.name}${data.commonNames.length ? ` (${data.commonNames.slice(0, 4).join(", ")})` : ""}`,
    pwExtract(data.extract, locale).slice(0, 280),
    data.addictionPotential
      ? fr
        ? `Addiction : ${pwLocaleText(data.addictionPotential, locale)}`
        : `Addiction: ${data.addictionPotential}`
      : "",
    data.tolerance.full
      ? fr
        ? `Tolérance complète : ${pwLocaleText(data.tolerance.full, locale)}`
        : `Full tolerance: ${data.tolerance.full}`
      : "",
    data.dangerous.length
      ? fr
        ? `Dangereux avec : ${pwList(data.dangerous, locale).join(", ")}`
        : `Dangerous with: ${data.dangerous.join(", ")}`
      : "",
  ];
  return lines.filter(Boolean).join("\n");
}
