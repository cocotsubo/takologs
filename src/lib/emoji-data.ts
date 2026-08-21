/** Full-ish emoji keyboard: Unicode pictographs, grouped like iOS. */

export type EmojiCat = {
  id: string;
  labelKey: string;
  glyph: string;
  items: string[];
};

const RANGES: [string, string, number, number][] = [
  ["smileys", "😀", 0x1f600, 0x1f64f],
  ["smileys", "😀", 0x1f910, 0x1f92f],
  ["smileys", "😀", 0x1f970, 0x1f97f],
  ["people", "👋", 0x1f466, 0x1f487],
  ["people", "👋", 0x1f9b0, 0x1f9b9],
  ["people", "👋", 0x1f9d0, 0x1f9df],
  ["people", "👋", 0x1f9b8, 0x1f9ff],
  ["animals", "🐾", 0x1f400, 0x1f43f],
  ["animals", "🐾", 0x1f980, 0x1f9ae],
  ["food", "🍏", 0x1f32d, 0x1f37f],
  ["food", "🍏", 0x1f950, 0x1f96f],
  ["food", "🍏", 0x1f330, 0x1f346],
  ["nature", "🌿", 0x1f300, 0x1f32c],
  ["nature", "🌿", 0x1f347, 0x1f3ff],
  ["travel", "✈️", 0x1f680, 0x1f6ff],
  ["objects", "💊", 0x1f4a0, 0x1f4ff],
  ["objects", "💊", 0x1f9e0, 0x1f9ff],
  ["objects", "💊", 0x1f520, 0x1f53d],
  ["symbols", "💜", 0x2600, 0x26ff],
  ["symbols", "💜", 0x2700, 0x27bf],
  ["symbols", "💜", 0x1f7e0, 0x1f7eb],
  ["extra", "🪩", 0x1fa70, 0x1faff],
  ["extra", "🪩", 0x1f90c, 0x1f90f],
  ["extra", "🪩", 0x1f93c, 0x1f94f],
];

const EXTRAS = [
  "🐙", "🍄", "💊", "💉", "🚬", "⚗️", "🧪", "🧬", "🦠", "🧊",
  "❄️", "🔥", "🌈", "⚡", "💫", "✨", "❤️", "🧡", "💛", "💚",
  "💙", "💜", "🖤", "🤍", "🤎", "💔", "❤️‍🔥", "❤️‍🩹", "💯", "🧿",
  "🏳️‍🌈", "🏳️‍⚧️", "☠️", "⚠️", "🔞", "🆘", "⚕️", "☮️", "☯️", "⚛️",
  "🍁", "🍃", "🪴", "🌵", "🌸", "🌺", "🍫", "🍷", "🍺", "🥃",
  "🍵", "☕", "🫧", "💎", "🪨", "🧂", "🌿", "🌾", "🪸",
];

function isPicto(cp: number) {
  try {
    const s = String.fromCodePoint(cp);
    return /\p{Extended_Pictographic}/u.test(s) || /\p{Emoji_Presentation}/u.test(s);
  } catch {
    return false;
  }
}

function fromRange(a: number, b: number) {
  const out: string[] = [];
  for (let i = a; i <= b; i++) {
    if (!isPicto(i)) continue;
    out.push(String.fromCodePoint(i));
  }
  return out;
}

const seen = new Set<string>();
const byCat = new Map<string, { glyph: string; items: string[] }>();

for (const [id, glyph, a, b] of RANGES) {
  const cur = byCat.get(id) ?? { glyph, items: [] };
  for (const e of fromRange(a, b)) {
    if (seen.has(e)) continue;
    seen.add(e);
    cur.items.push(e);
  }
  byCat.set(id, cur);
}

for (const e of EXTRAS) {
  if (seen.has(e)) continue;
  seen.add(e);
  const cur = byCat.get("extra") ?? { glyph: "🪩", items: [] };
  cur.items.unshift(e);
  byCat.set("extra", cur);
}

const ORDER = ["smileys", "people", "animals", "food", "nature", "travel", "objects", "symbols", "extra"];

export const EMOJI_CATS: EmojiCat[] = ORDER.filter((id) => byCat.get(id)?.items.length).map((id) => {
  const c = byCat.get(id)!;
  return { id, labelKey: `emoji.${id}`, glyph: c.glyph, items: c.items };
});

export const ALL_EMOJIS = EMOJI_CATS.flatMap((c) => c.items);

export const EMOJI_COUNT = ALL_EMOJIS.length;
