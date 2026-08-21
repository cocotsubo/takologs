import type { Experience } from "@/lib/journal";
import { comboWarnings } from "@/lib/interactions";
import { downloadBlob, imagesToPdf } from "@/lib/pdf";
import { substanceDoc, substanceLongCopy, substanceStorySummary } from "@/lib/substance-docs";
import {
  durationCurve,
  findSubstanceByName,
  formatMins,
  type Substance,
} from "@/lib/substances";
import {
  paintPdfChrome,
  renderA4Sheet,
  renderExperienceStory,
  renderSubstanceStory,
  shareStoryFile,
  type StoryRow,
} from "@/lib/story-share";

import { currentHue } from "@/lib/theme";

function darkNow() {
  return document.documentElement.classList.contains("dark");
}

export async function shareExperienceStory(
  title: string,
  date: Date,
  locale: string,
  ingestions: Experience["ingestions"],
  rows: StoryRow[],
) {
  const blob = await renderExperienceStory({
    title,
    date,
    locale,
    ingestions,
    rows,
    hue: currentHue(),
    dark: darkNow(),
    warnings: comboWarnings(ingestions.map((i) => i.substanceName)).map((w) => ({
      a: w.a,
      b: w.b,
      note: w.note,
      level: w.level,
    })),
  });
  return shareStoryFile(blob, `takologs-${date.toISOString().slice(0, 10)}.png`, `${title} — TakoLogs`);
}

export async function shareSubstanceStory(sub: Substance, emoji: string, color: string, label: string, cat: string) {
  const d0 = sub.doses[0];
  const c = durationCurve(sub);
  const locale = typeof document !== "undefined" ? document.documentElement.lang : "fr";
  const en = locale.startsWith("en");
  const blob = await renderSubstanceStory({
    name: label,
    emoji,
    color,
    category: cat,
    summary: substanceStorySummary(sub, en ? "en" : "fr"),
    longCopy: substanceLongCopy(sub, en ? "en" : "fr"),
    dose: d0
      ? en
        ? `Common ${d0.common}${d0.unit} (${d0.route}) · threshold ${d0.threshold} · strong ${d0.strong}`
        : `Dose courante ${d0.common}${d0.unit} (${d0.route}) · seuil ${d0.threshold} · fort ${d0.strong}`
      : undefined,
    duration: en
      ? `Onset ~${formatMins(c.onset)} · peak ~${formatMins((c.peakStart + c.peakEnd) / 2)} · total ~${formatMins(c.total)}`
      : `Montée ~${formatMins(c.onset)} · pic ~${formatMins((c.peakStart + c.peakEnd) / 2)} · total ~${formatMins(c.total)}`,
    hue: currentHue(),
    dark: darkNow(),
    locale,
    aliases: sub.aliases,
    chemicalClass: sub.chemicalClass,
    psychoactiveClass: sub.psychoactiveClass,
    effects: sub.effects,
    interactions: sub.interactions,
    riskNotes: sub.riskNotes,
    doses: sub.doses,
    pharmacology: substanceDoc(sub, en ? "en" : "fr").pharmacology,
    toxicity: substanceDoc(sub, en ? "en" : "fr").toxicity,
    legal: substanceDoc(sub, en ? "en" : "fr").legal,
  });
  return shareStoryFile(blob, `takologs-${sub.slug}.png`, `${label} — TakoLogs`);
}

function wrapPdf(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxW: number,
  lineH: number,
  maxLines: number,
) {
  const words = text.split(/\s+/);
  let line = "";
  let n = 0;
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxW && line) {
      ctx.fillText(line, x, y + n * lineH);
      line = w;
      n += 1;
      if (n >= maxLines) return y + n * lineH;
    } else line = test;
  }
  if (n < maxLines && line) {
    ctx.fillText(line, x, y + n * lineH);
    n += 1;
  }
  return y + n * lineH;
}

export async function downloadSubstancePdf(sub: Substance, emoji: string, color: string, label: string, cat: string) {
  const locale = typeof document !== "undefined" ? document.documentElement.lang : "fr";
  const en = locale.startsWith("en");
  const c = durationCurve(sub);
  const long = substanceLongCopy(sub, en ? "en" : "fr");
  const page1 = await renderA4Sheet((ctx, W, H) => {
    const T = paintPdfChrome(ctx, W, H, {
      hue: currentHue(),
      dark: darkNow(),
      title: `${emoji} ${label}`,
      subtitle: `${cat} · ${sub.chemicalClass} · ${sub.psychoactiveClass}`,
    });
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(W - 90, 80, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.textAlign = "left";
    ctx.fillStyle = T.muted;
    ctx.font = "600 20px Avenir, sans-serif";
    let y = 250;
    if (sub.aliases.length) {
      ctx.fillText((en ? "Also known as: " : "Aussi appelé : ") + sub.aliases.join(" · "), 64, y);
      y += 36;
    }
    ctx.fillStyle = T.fg;
    ctx.font = "600 22px Avenir, sans-serif";
    y = wrapPdf(ctx, long, 64, y, W - 128, 30, 12) + 20;
    ctx.fillStyle = T.accent;
    ctx.font = '800 24px "Josefin Sans", sans-serif';
    ctx.fillText(en ? "Duration (PsychonautWiki)" : "Durée (PsychonautWiki)", 64, y);
    y += 32;
    ctx.fillStyle = T.fg;
    ctx.font = "600 20px Avenir, sans-serif";
    ctx.fillText(
      en
        ? `Onset ~${formatMins(c.onset)} · peak ~${formatMins((c.peakStart + c.peakEnd) / 2)} · total ~${formatMins(c.total)}`
        : `Montée ~${formatMins(c.onset)} · pic ~${formatMins((c.peakStart + c.peakEnd) / 2)} · total ~${formatMins(c.total)}`,
      64,
      y,
    );
    y += 28;
    ctx.fillStyle = T.muted;
    ctx.fillText(
      en
        ? `Ranges: onset ${sub.duration.onsetMin[0]}–${sub.duration.onsetMin[1]} min · total ${sub.duration.totalMin[0]}–${sub.duration.totalMin[1]} min`
        : `Fourchettes : montée ${sub.duration.onsetMin[0]}–${sub.duration.onsetMin[1]} min · total ${sub.duration.totalMin[0]}–${sub.duration.totalMin[1]} min`,
      64,
      y,
    );
    y += 44;
    ctx.fillStyle = T.accent;
    ctx.font = '800 24px "Josefin Sans", sans-serif';
    ctx.fillText(en ? "Dosage table" : "Tableau des doses", 64, y);
    y += 34;
    for (const d of sub.doses) {
      ctx.fillStyle = T.fg;
      ctx.font = "700 20px Avenir, sans-serif";
      ctx.fillText(d.route, 64, y);
      y += 28;
      ctx.font = "600 18px Avenir, sans-serif";
      ctx.fillText(
        en
          ? `threshold ${d.threshold} · light ${d.light} · common ${d.common} · strong ${d.strong} · heavy ${d.heavy} ${d.unit}`
          : `seuil ${d.threshold} · léger ${d.light} · commun ${d.common} · fort ${d.strong} · lourd ${d.heavy} ${d.unit}`,
        64,
        y,
      );
      y += 32;
    }
    y += 8;
    ctx.fillStyle = T.accent;
    ctx.font = '800 24px "Josefin Sans", sans-serif';
    ctx.fillText(en ? "Effects" : "Effets", 64, y);
    y += 30;
    const cols: [string, string[], string][] = [
      [en ? "Positive" : "Positifs", sub.effects.positive, "#3d8a5f"],
      [en ? "Neutral" : "Neutres", sub.effects.neutral, T.muted],
      [en ? "Negative" : "Négatifs", sub.effects.negative, "#c9493f"],
    ];
    cols.forEach((col, i) => {
      const x = 64 + i * 380;
      ctx.fillStyle = col[2];
      ctx.font = "700 18px Avenir, sans-serif";
      ctx.fillText(col[0], x, y);
      ctx.fillStyle = T.fg;
      ctx.font = "600 16px Avenir, sans-serif";
      col[1].slice(0, 8).forEach((line, k) => ctx.fillText(`• ${line}`, x, y + 24 + k * 22));
    });
  });
  const page2 = await renderA4Sheet((ctx, W, H) => {
    const T = paintPdfChrome(ctx, W, H, {
      hue: currentHue(),
      dark: darkNow(),
      title: `${emoji} ${label}`,
      subtitle: en ? "Risks, interactions, harm · PsychonautWiki" : "Risques, interactions, dommages · PsychonautWiki",
    });
    ctx.textAlign = "left";
    let y = 250;
    ctx.fillStyle = "#c9493f";
    ctx.font = '800 24px "Josefin Sans", sans-serif';
    ctx.fillText(en ? "Dangerous interactions" : "Interactions dangereuses", 64, y);
    y += 30;
    ctx.fillStyle = T.fg;
    ctx.font = "600 18px Avenir, sans-serif";
    (sub.interactions.dangerous.length ? sub.interactions.dangerous : [en ? "None listed" : "Aucune listée"]).forEach(
      (n) => {
        ctx.fillText(`• ${n}`, 64, y);
        y += 24;
      },
    );
    y += 16;
    ctx.fillStyle = "#b07a20";
    ctx.font = '800 24px "Josefin Sans", sans-serif';
    ctx.fillText(en ? "Caution" : "À surveiller", 64, y);
    y += 30;
    ctx.fillStyle = T.fg;
    ctx.font = "600 18px Avenir, sans-serif";
    (sub.interactions.caution.length ? sub.interactions.caution : [en ? "None listed" : "Aucune listée"]).forEach((n) => {
      ctx.fillText(`• ${n}`, 64, y);
      y += 24;
    });
    y += 20;
    ctx.fillStyle = T.accent;
    ctx.font = '800 24px "Josefin Sans", sans-serif';
    ctx.fillText(en ? "Watchpoints" : "Points de vigilance", 64, y);
    y += 30;
    ctx.fillStyle = T.fg;
    ctx.font = "600 18px Avenir, sans-serif";
    sub.riskNotes.forEach((n) => {
      y = wrapPdf(ctx, `• ${n}`, 64, y, W - 128, 24, 4) + 8;
    });
    y += 16;
    ctx.fillStyle = T.accent;
    ctx.font = '800 24px "Josefin Sans", sans-serif';
    ctx.fillText(en ? "Relative harm (0–100)" : "Dommages relatifs (0–100)", 64, y);
    y += 34;
    ctx.fillStyle = T.fg;
    ctx.font = "700 20px Avenir, sans-serif";
    ctx.fillText(
      en
        ? `Physical ${sub.harm.physical} · Dependence ${sub.harm.dependence} · Social ${sub.harm.social}`
        : `Physique ${sub.harm.physical} · Dépendance ${sub.harm.dependence} · Social ${sub.harm.social}`,
      64,
      y,
    );
    y += 40;
    if (sub.neurotransmitters.length) {
      ctx.fillStyle = T.accent;
      ctx.font = '800 24px "Josefin Sans", sans-serif';
      ctx.fillText(en ? "Neurotransmitters" : "Neurotransmetteurs", 64, y);
      y += 30;
      ctx.fillStyle = T.fg;
      ctx.font = "600 18px Avenir, sans-serif";
      ctx.fillText(sub.neurotransmitters.join(" · "), 64, y);
      y += 40;
    }
    ctx.fillStyle = T.muted;
    ctx.font = "600 16px Avenir, sans-serif";
    wrapPdf(
      ctx,
      en
        ? "Figures are PsychonautWiki estimates and vary with purity, tolerance and the individual. TakoLogs does not encourage use. Always start low, test your product, and never use alone with risky substances."
        : "Les chiffres sont des estimations PsychonautWiki et varient selon la pureté, la tolérance et l’individu. TakoLogs n’encourage pas la consommation. Commencez toujours bas, testez le produit, ne consommez pas seul une substance à risque.",
      64,
      y,
      W - 128,
      24,
      6,
    );
  });
  const doc = substanceDoc(sub, en ? "en" : "fr");
  const page3 = await renderA4Sheet((ctx, W, H) => {
    const T = paintPdfChrome(ctx, W, H, {
      hue: currentHue(),
      dark: darkNow(),
      title: `${emoji} ${label}`,
      subtitle: en ? "Pharmacology, chemistry, history, law · PsychonautWiki" : "Pharmacologie, chimie, histoire, droit · PsychonautWiki",
    });
    ctx.textAlign = "left";
    let y = 250;
    const blocks: [string, string][] = en
      ? [
          ["Subjective effects", doc.subjective],
          ["Pharmacology", doc.pharmacology],
          ["Chemistry", doc.chemistry],
          ["History and culture", doc.history],
          ["Toxicity", doc.toxicity],
          ["Legal status", doc.legal],
        ]
      : [
          ["Effets subjectifs", doc.subjective],
          ["Pharmacologie", doc.pharmacology],
          ["Chimie", doc.chemistry],
          ["Histoire et culture", doc.history],
          ["Toxicité", doc.toxicity],
          ["Statut légal", doc.legal],
        ];
    for (const [title, body] of blocks) {
      ctx.fillStyle = T.accent;
      ctx.font = '800 22px "Josefin Sans", sans-serif';
      ctx.fillText(title, 64, y);
      y += 28;
      ctx.fillStyle = T.fg;
      ctx.font = "600 18px Avenir, sans-serif";
      y = wrapPdf(ctx, body, 64, y, W - 128, 26, 8) + 22;
      if (y > H - 120) break;
    }
  });
  const pdf = await imagesToPdf([page1, page2, page3]);
  downloadBlob(pdf, `takologs-${sub.slug}.pdf`);
}

export async function downloadExperiencePdf(exp: Experience, locale: string, rows: StoryRow[]) {
  const date = new Date(exp.experienceDate);
  const when = date.toLocaleDateString(locale.startsWith("en") ? "en-GB" : "fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const warns = comboWarnings(exp.ingestions.map((i) => i.substanceName));
  const jpeg = await renderA4Sheet((ctx, W) => {
    const T = paintPdfChrome(ctx, W, 1754, {
      hue: currentHue(),
      dark: darkNow(),
      title: exp.title,
      subtitle: when.charAt(0).toUpperCase() + when.slice(1),
    });
    let y = 270;
    ctx.font = "700 22px Avenir, sans-serif";
    for (const row of rows) {
      ctx.fillStyle = row.color;
      ctx.beginPath();
      ctx.arc(80, y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = T.fg;
      const dose = row.total != null ? `${row.total} ${row.unit}` : `${row.count}×`;
      ctx.fillText(`${row.emoji} ${row.name}  —  ${dose}`, 100, y);
      y += 36;
    }
    if (warns.length) {
      y += 12;
      ctx.fillStyle = "#c9493f";
      ctx.fillText("Interactions", 64, y);
      y += 30;
      ctx.font = "600 18px Avenir, sans-serif";
      warns.slice(0, 6).forEach((w) => {
        ctx.fillText(`• ${w.a} + ${w.b} — ${w.note}`, 64, y);
        y += 26;
      });
    }
    if (exp.notes) {
      y += 16;
      ctx.fillStyle = T.muted;
      ctx.font = "600 18px Avenir, sans-serif";
      ctx.fillText(exp.notes.slice(0, 600), 64, y);
    }
    exp.ingestions.forEach((i) => {
      y += 28;
      if (y > 1600) return;
      const known = findSubstanceByName(i.substanceName);
      ctx.fillStyle = T.fg;
      ctx.font = "600 16px Avenir, sans-serif";
      ctx.fillText(
        `${new Date(i.ingestionTime).toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" })}  ${i.dose ?? "?"} ${i.doseUnit}  ${i.substanceName}  (${i.route})${known ? "" : ""}`,
        64,
        y,
      );
    });
  });
  const pdf = await imagesToPdf([jpeg]);
  downloadBlob(pdf, `takologs-${date.toISOString().slice(0, 10)}.pdf`);
}
