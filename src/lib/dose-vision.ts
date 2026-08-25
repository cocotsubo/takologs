import { findSubstanceByName, searchSubstances } from "@/lib/substances";
import type { ChatAction } from "@/lib/chat-types";
import { loadXaiKey } from "@/lib/xai-config";

function compress(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      const max = 960;
      let w = img.width;
      let h = img.height;
      if (w > max || h > max) {
        const s = max / Math.max(w, h);
        w = Math.round(w * s);
        h = Math.round(h * s);
      }
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("canvas"));
        return;
      }
      ctx.drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL("image/jpeg", 0.72));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("image"));
    };
    img.src = url;
  });
}

function parseEstimate(text: string): { substance?: string; dose?: number; unit?: string } {
  const json = text.match(/\{[\s\S]{0,400}\}/);
  if (json) {
    try {
      const o = JSON.parse(json[0]) as {
        substance?: string;
        dose?: number;
        doseMg?: number;
        unit?: string;
      };
      const dose = o.dose ?? o.doseMg;
      return {
        substance: o.substance,
        dose: typeof dose === "number" ? dose : undefined,
        unit: o.unit || "mg",
      };
    } catch {
      /* fall through */
    }
  }
  const line = text.match(
    /(?:substance|produit)\s*[:=]\s*([A-Za-z0-9À-ÿ +\-]{2,40}).{0,40}?(?:dose|qty|quantit[eé])\s*[:=]\s*([\d.,]+)\s*(mg|g|µg|ug|ml)?/i,
  );
  if (line) {
    return {
      substance: line[1].trim(),
      dose: Number(line[2].replace(",", ".")),
      unit: line[3] || "mg",
    };
  }
  const short = text.match(/([\d.,]+)\s*(mg|g|µg)\s+(?:de\s+|of\s+)?([A-Za-z0-9À-ÿ +\-]{2,30})/i);
  if (short) {
    return {
      substance: short[3].trim(),
      dose: Number(short[1].replace(",", ".")),
      unit: short[2],
    };
  }
  return {};
}

async function callVision(dataUrl: string, locale: "fr" | "en"): Promise<string> {
  const fr = locale !== "en";
  const prompt = fr
    ? "Photo d’une consommation (poudre, cristaux, cachet, buvard, gélule). Estime la substance probable (parmi les psychoactifs courants) et une QUANTITÉ APPROXIMATIVE en mg. Réponds d’abord une ligne JSON {\"substance\":\"nom\",\"dose\":80,\"unit\":\"mg\",\"confidence\":\"low|mid|high\"} puis 2 phrases : approximation visuelle, pas une balance. Si tu ne reconnais pas, dose null. Pas de conseil d’usage."
    : "Photo of a dose (powder, crystals, pill, blotter, capsule). Guess the likely substance and an APPROXIMATE amount in mg. First a JSON line {\"substance\":\"name\",\"dose\":80,\"unit\":\"mg\",\"confidence\":\"low|mid|high\"} then 2 sentences: visual guess, not a scale. If unknown, dose null. No use advice.";
  const messages = [
    {
      role: "user",
      content: [
        { type: "text", text: prompt },
        { type: "image_url", image_url: { url: dataUrl } },
      ],
    },
  ];
  const override = loadXaiKey();
  const payload = {
    apiKey: override.startsWith("xai-") ? override : "",
    model: "grok-2-vision-1212",
    messages,
  };

  try {
    const mod = await import("@/lib/chat-api");
    if (typeof mod.sendVision === "function") {
      const r = await mod.sendVision({ data: { image: dataUrl, locale } });
      if (r?.ok && r.text) return r.text;
    }
  } catch {
    /* FTP stub or SSR */
  }

  const urls = ["ai-send.php", "./ai-send.php", "/ai-send.php"];
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
      if (text) return text;
    } catch {
      /* next */
    }
  }
  return "";
}


export type PhotoEstimate = {
  text: string;
  preview: string;
  action?: ChatAction;
};

export async function estimateDosePhoto(
  file: Blob,
  locale: "fr" | "en",
): Promise<PhotoEstimate> {
  const preview = await compress(file);
  const raw = await callVision(preview, locale);
  const parsed = parseEstimate(raw);
  const sub =
    parsed.substance
      ? findSubstanceByName(parsed.substance) ??
        (parsed.substance.length >= 3 ? searchSubstances(parsed.substance)[0] : undefined)
      : undefined;
  const dose =
    parsed.dose != null && Number.isFinite(parsed.dose) ? Math.round(parsed.dose) : null;
  const unit = parsed.unit || sub?.doses[0]?.unit || "mg";
  const fr = locale !== "en";
  let text = raw
    .replace(/\{[\s\S]*?\}/, "")
    .replace(/```[\s\S]*?```/g, "")
    .trim();
  if (!text) {
    text = fr
      ? "Je n’arrive pas à lire cette photo. Décris la substance et la quantité (ex. « 80 mg de MDMA »)."
      : "I can’t read this photo. Describe the substance and amount (e.g. “80 mg of MDMA”).";
  } else if (dose != null && sub) {
    text = fr
      ? `Approximation visuelle : ${dose} ${unit} de ${sub.name}.\nCe n’est pas une pesée — une balance de 0,001 g reste la référence.\n${text}`
      : `Visual guess: ${dose} ${unit} of ${sub.name}.\nNot a scale reading — a 0.001 g scale is the reference.\n${text}`;
  }
  const action: ChatAction | undefined = sub
    ? {
        kind: "add",
        substanceName: sub.name,
        dose,
        unit,
        route: sub.doses[0]?.route || "Orale",
      }
    : undefined;
  return { text, preview, action };
}
