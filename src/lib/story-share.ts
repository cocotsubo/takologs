import type { Ingestion } from "@/lib/journal";
import {
  durationCurve,
  findSubstanceByName,
  offsetCurveFill,
  offsetCurvePath,
  type Curve,
} from "@/lib/substances";
import { canvasToJpeg } from "@/lib/pdf";
import { doseAmplitude, fitAmplitudes } from "@/lib/dose";

const FALLBACK: Curve = { onset: 30, peakStart: 90, peakEnd: 150, total: 240 };

export type StoryRow = {
  name: string;
  emoji: string;
  unit: string;
  total: number | null;
  count: number;
  color: string;
};

export type StoryWarning = {
  a: string;
  b: string;
  note: string;
  level: "dangerous" | "caution";
};

function caption(locale: string) {
  return locale.startsWith("en")
    ? "Log your use — install this app."
    : "Pour enregistrer ta consommation, installe cette appli.";
}

function hsl(h: number, s: number, l: number, a = 1) {
  return a < 1 ? `hsla(${h}, ${s}%, ${l}%, ${a})` : `hsl(${h}, ${s}%, ${l}%)`;
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function drawHex(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, color: string) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.lineJoin = "round";
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.28, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx - r * 0.08, cy - r * 0.08, r * 0.08, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.restore();
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxW: number,
  lineH: number,
  maxLines: number,
) {
  const words = text.split(/\s+/).filter(Boolean);
  let line = "";
  let n = 0;
  const drawLine = (s: string) => {
    ctx.fillText(s, x, y + n * lineH);
    n += 1;
  };
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxW && line) {
      drawLine(line);
      line = w;
      if (n >= maxLines) return n;
    } else line = test;
  }
  if (n < maxLines && line) drawLine(line);
  return n;
}

function trimNum(n: number) {
  return Number.isInteger(n) ? String(n) : String(Math.round(n * 10) / 10);
}

function fmtTime(ms: number, locale: string) {
  return new Date(ms).toLocaleTimeString(locale.startsWith("en") ? "en-GB" : "fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function withAlpha(color: string, a: number) {
  if (color.startsWith("#") && color.length === 7) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  }
  return color;
}

function monoShade(i: number, dark: boolean) {
  const pal = dark
    ? ["#f5f5f5", "#d4d4d4", "#a3a3a3", "#737373", "#525252"]
    : ["#111111", "#3f3f3f", "#575757", "#737373", "#8a8a8a"];
  return pal[i % pal.length];
}

function theme(opts: { hue: number; dark: boolean; color?: string }) {
  const mono =
    opts.hue < 0 ||
    (typeof document !== "undefined" && document.documentElement.classList.contains("mono"));
  const dark = opts.dark;
  if (mono) {
    return {
      hue: 0,
      sat: 0,
      dark,
      bg: dark ? "#0a0a0a" : "#f4f4f4",
      fg: dark ? "#f5f5f5" : "#111111",
      muted: dark ? "#a3a3a3" : "#525252",
      accent: dark ? "#f0f0f0" : "#111111",
      card: dark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.78)",
    };
  }
  const hue = opts.hue;
  const sat = 42;
  return {
    hue,
    sat,
    dark,
    bg: dark ? hsl(hue, Math.max(sat - 14, 8), 7) : hsl(hue, Math.max(sat, 28), 93),
    fg: dark ? hsl(hue, 28, 94) : hsl(hue, 22, 12),
    muted: dark ? hsl(hue, 18, 62) : hsl(hue, 14, 38),
    accent: opts.color || hsl(hue, 72, dark ? 58 : 48),
    card: dark ? hsl(hue, Math.max(sat - 8, 10), 12, 0.72) : hsl(hue, 40, 98, 0.78),
  };
}

export async function canvasPng(canvas: HTMLCanvasElement): Promise<Blob> {
  return await new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("png"))), "image/png");
  });
}

export async function renderExperienceStory(opts: {
  title: string;
  date: Date;
  locale: string;
  ingestions: Ingestion[];
  rows: StoryRow[];
  hue: number;
  dark: boolean;
  warnings?: StoryWarning[];
}): Promise<Blob> {
  await document.fonts.ready.catch(() => undefined);
  const W = 1080;
  const H = 1920;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  const T = theme(opts);
  const en = opts.locale.startsWith("en");
  ctx.fillStyle = T.bg;
  ctx.fillRect(0, 0, W, H);
  ctx.globalAlpha = 0.14;
  for (let i = 0; i < 14; i++) {
    drawHex(ctx, 70 + ((i * 211) % 940), 120 + ((i * 173) % 1680), 28 + (i % 5) * 10, T.accent);
  }
  ctx.globalAlpha = 0.08;
  ctx.strokeStyle = T.accent;
  ctx.lineWidth = 1.4;
  for (let i = 0; i < 8; i++) {
    const x1 = 40 + ((i * 127) % 1000);
    const y1 = 80 + ((i * 191) % 1800);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + 180, y1 + 90);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  drawHex(ctx, W / 2, 168, 48, T.accent);
  ctx.font = '800 54px "Josefin Sans", Avenir, sans-serif';
  ctx.fillStyle = T.accent;
  ctx.fillText("TakoLogs", W / 2, 250);
  const when = opts.date.toLocaleDateString(en ? "en-GB" : "fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  ctx.font = '600 26px "Josefin Sans", Avenir, sans-serif';
  ctx.fillStyle = T.muted;
  ctx.fillText(when.charAt(0).toUpperCase() + when.slice(1), W / 2, 310);
  ctx.font = '800 44px "Josefin Sans", Avenir, sans-serif';
  ctx.fillStyle = T.fg;
  wrapText(ctx, opts.title.trim() || when, W / 2, 360, W - 160, 50, 2);

  const danger = (opts.warnings ?? []).filter((w) => w.level === "dangerous").slice(0, 3);
  const caution = (opts.warnings ?? []).filter((w) => w.level === "caution").slice(0, 2);
  if (danger.length || caution.length) {
    ctx.textAlign = "right";
    ctx.font = "52px sans-serif";
    ctx.fillText(danger.length ? "⚠️" : "⚡", W - 64, 86);
    ctx.font = "700 16px Avenir, sans-serif";
    ctx.fillStyle = danger.length ? "#c9493f" : "#b07a20";
    [...danger, ...caution].slice(0, 4).forEach((w, i) => {
      ctx.fillText(`${w.a} + ${w.b}`, W - 64, 122 + i * 22);
    });
    ctx.textAlign = "center";
  }

  const chrono = [...opts.ingestions].sort(
    (a, b) => new Date(a.ingestionTime).getTime() - new Date(b.ingestionTime).getTime(),
  );
  let y = 470;
  const show = chrono.slice(0, 8);
  const cardH = 86;
  const gap = 18;
  for (const ing of show) {
    const row = opts.rows.find((r) => r.name === ing.substanceName);
    const sub = findSubstanceByName(ing.substanceName);
    const color =
      T.sat === 0
        ? monoShade(show.indexOf(ing), T.dark)
        : row?.color || ing.color || sub?.color || T.accent;
    const emoji = row?.emoji || sub?.emoji || "•";
    roundRect(ctx, 80, y, W - 160, cardH, 28);
    ctx.fillStyle = T.card;
    ctx.fill();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(128, y + cardH / 2, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.textAlign = "left";
    ctx.font = "36px sans-serif";
    ctx.fillText(emoji, 156, y + 32);
    ctx.font = '800 28px "Josefin Sans", sans-serif';
    ctx.fillStyle = T.fg;
    ctx.fillText(ing.substanceName, 210, y + 32);
    ctx.font = "600 20px Avenir, sans-serif";
    ctx.fillStyle = T.muted;
    const dose = ing.dose != null ? `${trimNum(ing.dose)} ${ing.doseUnit}` : "—";
    ctx.fillText(`${fmtTime(new Date(ing.ingestionTime).getTime(), opts.locale)}  ·  ${dose}  ·  ${ing.route}`, 210, y + 62);
    y += cardH + gap;
  }
  if (chrono.length > show.length) {
    ctx.textAlign = "center";
    ctx.fillStyle = T.muted;
    ctx.font = "600 20px Avenir, sans-serif";
    ctx.fillText(`+${chrono.length - show.length}`, W / 2, y + 8);
    y += 28;
  }

  const graphTop = Math.min(y + 12, 1320);
  const graphH = Math.max(240, Math.min(380, 1680 - graphTop - 140));
  roundRect(ctx, 90, graphTop, W - 180, graphH + 56, 36);
  ctx.fillStyle = T.card;
  ctx.fill();
  ctx.textAlign = "center";
  ctx.font = '700 30px "Josefin Sans", sans-serif';
  ctx.fillStyle = T.fg;
  ctx.fillText("Timeline", W / 2, graphTop + 36);
  const ings = opts.ingestions;
  if (ings.length > 0) {
    const times = ings.map((i) => new Date(i.ingestionTime).getTime());
    const startMs = Math.min(...times);
    const raw = ings.map((ing) => {
      const sub = findSubstanceByName(ing.substanceName);
      const p = sub ? durationCurve(sub) : FALLBACK;
      const offsetMin = Math.max(0, (new Date(ing.ingestionTime).getTime() - startMs) / 60000);
      const color =
        T.sat === 0
          ? monoShade(ings.indexOf(ing), T.dark)
          : opts.rows.find((r) => r.name === ing.substanceName)?.color ||
            ing.color ||
            sub?.color ||
            T.accent;
      return {
        p,
        offsetMin,
        color,
        rawAmp: doseAmplitude(sub, ing.dose, ing.doseUnit, ing.route),
      };
    });
    const fitted = fitAmplitudes(raw.map((c) => c.rawAmp), 0.88);
    const items = raw.map((c, i) => ({ ...c, amp: fitted[i] }));
    const span = Math.max(...items.map((c) => c.offsetMin + c.p.total), 60);
    const gw = 900;
    const gh = Math.max(180, graphH - 70);
    ctx.save();
    ctx.translate(90, graphTop + 58);
    ctx.beginPath();
    ctx.rect(0, 0, gw, gh);
    ctx.clip();
    for (const c of items) {
      ctx.fillStyle = withAlpha(c.color, 0.28);
      ctx.fill(new Path2D(offsetCurveFill(c.p, c.offsetMin, span, gw, gh, 60, c.amp)));
      ctx.strokeStyle = c.color;
      ctx.lineWidth = 11;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.stroke(new Path2D(offsetCurvePath(c.p, c.offsetMin, span, gw, gh, 60, c.amp)));
    }
    ctx.restore();
    ctx.fillStyle = T.muted;
    ctx.font = "22px Avenir, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(fmtTime(startMs, opts.locale), 110, graphTop + graphH + 40);
    ctx.textAlign = "right";
    ctx.fillText(fmtTime(startMs + span * 60000, opts.locale), W - 110, graphTop + graphH + 40);
  }
  ctx.textAlign = "center";
  ctx.font = '800 34px "Josefin Sans", sans-serif';
  ctx.fillStyle = T.accent;
  ctx.fillText("takohelp.com", W / 2, H - 160);
  ctx.font = "600 24px Avenir, sans-serif";
  ctx.fillStyle = T.muted;
  ctx.fillText(caption(opts.locale), W / 2, H - 112);
  ctx.textAlign = "left";
  return canvasPng(canvas);
}

export async function renderSubstanceStory(opts: {
  name: string;
  emoji: string;
  color: string;
  category: string;
  summary: string;
  dose?: string;
  duration?: string;
  hue: number;
  dark: boolean;
  locale?: string;
  aliases?: string[];
  chemicalClass?: string;
  psychoactiveClass?: string;
  effects?: { positive: string[]; neutral: string[]; negative: string[] };
  interactions?: { dangerous: string[]; caution: string[] };
  riskNotes?: string[];
  longCopy?: string;
  doses?: { route: string; threshold: number; light: number; common: number; strong: number; heavy: number; unit: string }[];
  pharmacology?: string;
  toxicity?: string;
  legal?: string;
}): Promise<Blob> {
  await document.fonts.ready.catch(() => undefined);
  const W = 1080;
  const H = 1920;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  const T = theme({ hue: opts.hue, dark: opts.dark });
  const loc = opts.locale || (typeof document !== "undefined" ? document.documentElement.lang : "fr");
  const en = loc.startsWith("en");
  ctx.fillStyle = T.bg;
  ctx.fillRect(0, 0, W, H);
  ctx.globalAlpha = 0.08;
  for (let i = 0; i < 8; i++) {
    drawHex(ctx, 80 + ((i * 191) % 920), 160 + ((i * 211) % 1500), 40 + (i % 3) * 14, T.accent);
  }
  ctx.globalAlpha = 1;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  drawHex(ctx, W / 2, 148, 48, T.accent);
  let y = 228;
  ctx.font = '800 44px "Josefin Sans", sans-serif';
  ctx.fillStyle = T.accent;
  ctx.fillText("TakoLogs", W / 2, y);
  y += 88;
  ctx.font = "84px sans-serif";
  ctx.fillText(opts.emoji, W / 2, y);
  y += 72;
  ctx.font = '800 56px "Josefin Sans", sans-serif';
  ctx.fillStyle = T.fg;
  y += wrapText(ctx, opts.name, W / 2, y, W - 160, 62, 2) * 62 + 10;
  ctx.font = "800 26px Avenir, sans-serif";
  ctx.fillStyle = T.accent;
  ctx.fillText(opts.category, W / 2, y);
  y += 34;
  const meta = [opts.chemicalClass, opts.psychoactiveClass].filter(Boolean).join(" · ");
  if (meta) {
    ctx.font = "600 22px Avenir, sans-serif";
    ctx.fillStyle = T.muted;
    ctx.fillText(meta, W / 2, y);
    y += 30;
  }
  if (opts.aliases?.length) {
    ctx.font = "600 20px Avenir, sans-serif";
    ctx.fillStyle = T.muted;
    y += wrapText(
      ctx,
      (en ? "aka " : "aussi ") + opts.aliases.slice(0, 6).join(" · "),
      W / 2,
      y,
      W - 160,
      26,
      1,
    ) * 26 + 8;
  }

  y += 8;
  const body = opts.longCopy || opts.summary;
  ctx.font = "600 26px Avenir, sans-serif";
  ctx.fillStyle = T.fg;
  y += wrapText(ctx, body, W / 2, y, W - 160, 34, 6) * 34 + 28;

  if (opts.doses?.[0]) {
    const d = opts.doses[0];
    const boxX = 72;
    const boxW = W - 144;
    roundRect(ctx, boxX, y, boxW, 156, 28);
    ctx.fillStyle = T.card;
    ctx.fill();
    ctx.fillStyle = T.accent;
    ctx.font = '800 24px "Josefin Sans", sans-serif';
    ctx.fillText(en ? `Doses · ${d.route}` : `Dosages · ${d.route}`, W / 2, y + 38);
    const cells = [
      [en ? "Thr." : "Seuil", d.threshold],
      [en ? "Light" : "Léger", d.light],
      [en ? "Common" : "Commun", d.common],
      [en ? "Strong" : "Fort", d.strong],
      [en ? "Heavy" : "Lourd", d.heavy],
    ];
    const colW = boxW / cells.length;
    cells.forEach((c, i) => {
      const cx = boxX + colW * (i + 0.5);
      ctx.fillStyle = T.muted;
      ctx.font = "700 16px Avenir, sans-serif";
      ctx.fillText(String(c[0]), cx, y + 78);
      ctx.fillStyle = T.fg;
      ctx.font = '800 26px "Josefin Sans", sans-serif';
      ctx.fillText(`${c[1]} ${d.unit}`, cx, y + 118);
    });
    y += 176;
  }

  if (opts.duration) {
    ctx.fillStyle = T.accent;
    ctx.font = "700 24px Avenir, sans-serif";
    y += wrapText(ctx, opts.duration, W / 2, y, W - 160, 32, 2) * 32 + 24;
  }

  const fx = opts.effects;
  if (fx) {
    const cols = [
      [en ? "+" : "+", fx.positive, T.sat === 0 ? T.accent : "#3d8a5f"],
      [en ? "~" : "~", fx.neutral, T.muted],
      [en ? "−" : "−", fx.negative, T.sat === 0 ? T.fg : "#c9493f"],
    ] as const;
    cols.forEach((col, i) => {
      const x = 90 + i * 310;
      roundRect(ctx, x, y, 290, 220, 22);
      ctx.fillStyle = T.card;
      ctx.fill();
      ctx.fillStyle = col[2];
      ctx.font = '800 22px "Josefin Sans", sans-serif';
      ctx.fillText(col[0], x + 145, y + 28);
      ctx.font = "600 18px Avenir, sans-serif";
      ctx.fillStyle = T.fg;
      col[1].slice(0, 5).forEach((line, k) => {
        wrapText(ctx, line, x + 145, y + 62 + k * 30, 260, 22, 1);
      });
    });
    y += 244;
  }

  const extra = [
    opts.pharmacology ? [en ? "Pharmacology" : "Pharmacologie", opts.pharmacology] : null,
    opts.toxicity ? [en ? "Toxicity" : "Toxicité", opts.toxicity] : null,
    opts.legal ? [en ? "Legal" : "Légal", opts.legal] : null,
  ].filter(Boolean) as [string, string][];
  for (const [title, body] of extra) {
    if (y > H - 280) break;
    ctx.fillStyle = T.accent;
    ctx.font = '800 22px "Josefin Sans", sans-serif';
    ctx.fillText(title, W / 2, y);
    y += 28;
    ctx.fillStyle = T.fg;
    ctx.font = "600 22px Avenir, sans-serif";
    wrapText(ctx, body, W / 2, y, W - 160, 28, 3);
    y += 28 * 3 + 16;
  }

  const dang = opts.interactions?.dangerous?.slice(0, 3) ?? [];
  if (dang.length) {
    ctx.textAlign = "right";
    ctx.font = "54px sans-serif";
    ctx.fillText("⚠️", W - 70, 86);
    ctx.font = "600 16px Avenir, sans-serif";
    ctx.fillStyle = "#c9493f";
    dang.forEach((n, i) => ctx.fillText(n, W - 70, 120 + i * 22));
    ctx.textAlign = "center";
  }

  ctx.font = '800 34px "Josefin Sans", sans-serif';
  ctx.fillStyle = T.accent;
  ctx.fillText("takohelp.com", W / 2, H - 150);
  ctx.font = "600 22px Avenir, sans-serif";
  ctx.fillStyle = T.muted;
  ctx.fillText(caption(loc), W / 2, H - 108);
  ctx.font = "600 18px Avenir, sans-serif";
  ctx.fillText(en ? "Source: PsychonautWiki" : "Source : PsychonautWiki", W / 2, H - 72);
  return canvasPng(canvas);
}

export async function renderA4Sheet(
  draw: (ctx: CanvasRenderingContext2D, W: number, H: number) => void,
): Promise<Blob> {
  const W = 1240;
  const H = 1754;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  draw(ctx, W, H);
  return canvasToJpeg(canvas);
}

export function paintPdfChrome(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  opts: { hue: number; dark: boolean; title: string; subtitle?: string },
) {
  const T = theme(opts);
  ctx.fillStyle = T.bg;
  ctx.fillRect(0, 0, W, H);
  drawHex(ctx, 90, 80, 28, T.accent);
  ctx.font = '800 36px "Josefin Sans", sans-serif';
  ctx.fillStyle = T.accent;
  ctx.textBaseline = "middle";
  ctx.fillText("TakoLogs", 136, 80);
  ctx.font = '700 42px "Josefin Sans", sans-serif';
  ctx.fillStyle = T.fg;
  ctx.fillText(opts.title, 64, 160);
  if (opts.subtitle) {
    ctx.font = "600 22px Avenir, sans-serif";
    ctx.fillStyle = T.muted;
    ctx.fillText(opts.subtitle, 64, 210);
  }
  ctx.font = '700 22px "Josefin Sans", sans-serif';
  ctx.fillStyle = T.accent;
  ctx.textAlign = "center";
  ctx.fillText("takohelp.com", W / 2, H - 70);
  ctx.font = "600 16px Avenir, sans-serif";
  ctx.fillStyle = T.muted;
  ctx.fillText("Pour enregistrer ta consommation, installe cette appli.", W / 2, H - 42);
  ctx.textAlign = "left";
  return T;
}

export async function shareStoryFile(blob: Blob, filename: string, text: string) {
  const file = new File([blob], filename, { type: "image/png" });
  const nav = navigator as Navigator & {
    canShare?: (d: { files?: File[] }) => boolean;
    share?: (d: ShareData) => Promise<void>;
  };
  try {
    if (nav.canShare?.({ files: [file] })) {
      await nav.share({ files: [file], title: "TakoLogs", text });
      return "shared";
    }
    if (nav.share) {
      await nav.share({ files: [file], title: "TakoLogs", text });
      return "shared";
    }
  } catch (err) {
    if ((err as { name?: string }).name === "AbortError") return "abort";
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 4000);
  return "download";
}
