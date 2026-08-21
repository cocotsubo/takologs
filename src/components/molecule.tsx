import { useEffect, useState } from "react";

function parseColor(css: string): [number, number, number] {
  const m = css.match(/(\d+)[,\s/]+(\d+)[,\s/]+(\d+)/);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
  return [232, 220, 200];
}

function knockout(img: HTMLImageElement, rgb: [number, number, number]): string {
  const w = img.naturalWidth || img.width;
  const h = img.naturalHeight || img.height;
  if (!w || !h) return "";
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  if (!ctx) return "";
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, w, h);
  const px = data.data;
  const n = w * h;

  const at = (x: number, y: number) => {
    const i = (y * w + x) * 4;
    return [px[i], px[i + 1], px[i + 2], px[i + 3]] as const;
  };
  const corners: number[][] = [
    [2, 2],
    [w - 3, 2],
    [2, h - 3],
    [w - 3, h - 3],
    [w >> 1, 2],
    [2, h >> 1],
  ];
  let br = 0;
  let bg = 0;
  let bb = 0;
  let bc = 0;
  for (const [x, y] of corners) {
    const [r, g, b, a] = at(Math.max(0, x), Math.max(0, y));
    if (a < 8) continue;
    br += r;
    bg += g;
    bb += b;
    bc += 1;
  }
  if (!bc) {
    br = 245;
    bg = 245;
    bb = 245;
  } else {
    br /= bc;
    bg /= bc;
    bb /= bc;
  }

  const dist = (r: number, g: number, b: number) =>
    Math.abs(r - br) + Math.abs(g - bg) + Math.abs(b - bb);

  const ink = new Uint8Array(n);
  const dark = new Uint8Array(n);
  for (let p = 0, i = 0; p < n; p++, i += 4) {
    const r = px[i];
    const g = px[i + 1];
    const b = px[i + 2];
    const a = px[i + 3];
    if (a < 12) continue;
    const d = dist(r, g, b);
    if (d > 42) {
      ink[p] = 1;
      const lum = (r + g + b) / 3;
      const chroma = Math.max(r, g, b) - Math.min(r, g, b);
      if (lum < 140 && chroma < 70) dark[p] = 1;
    }
  }

  const dil = new Uint8Array(ink);
  const radius = 1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (!dark[y * w + x]) continue;
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (dx * dx + dy * dy > radius * radius) continue;
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && ny >= 0 && nx < w && ny < h) dil[ny * w + nx] = 1;
        }
      }
    }
  }

  for (let p = 0, i = 0; p < n; p++, i += 4) {
    if (dil[p]) {
      px[i] = rgb[0];
      px[i + 1] = rgb[1];
      px[i + 2] = rgb[2];
      px[i + 3] = 255;
    } else {
      px[i] = 0;
      px[i + 1] = 0;
      px[i + 2] = 0;
      px[i + 3] = 0;
    }
  }
  ctx.putImageData(data, 0, 0);
  return c.toDataURL("image/png");
}

function pubchemPng(query: string) {
  return `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(query)}/PNG?record_type=2d&image_size=1000x620`;
}

function loadImage(url: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("img"));
    img.src = url;
  });
}

export function Molecule({
  name,
  aliases = [],
}: {
  name: string;
  aliases?: string[];
}) {
  const [src, setSrc] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const [fail, setFail] = useState(false);

  useEffect(() => {
    let gone = false;
    setSrc(null);
    setShow(false);
    setFail(false);

    const queries = [name, ...aliases].filter(Boolean);
    const sample = document.createElement("span");
    sample.className = "text-sand-900 dark:text-sand-50";
    document.body.appendChild(sample);
    const rgb = parseColor(getComputedStyle(sample).color);
    sample.remove();

    (async () => {
      for (const q of queries) {
        try {
          const img = await loadImage(pubchemPng(q));
          if (gone) return;
          const out = knockout(img, rgb);
          if (out) {
            setSrc(out);
            return;
          }
        } catch {
          /* try next name */
        }
      }
      if (!gone) setFail(true);
    })();

    return () => {
      gone = true;
    };
  }, [name, aliases.join("|")]);

  if (fail && !src) return null;

  return (
    <div className={`mol-stage ${show ? "mol-in" : ""}`}>
      {src ? (
        <img
          src={src}
          alt=""
          className="mol-img mx-auto max-h-64 w-auto"
          onLoad={() => setShow(true)}
        />
      ) : (
        <div className="h-52" />
      )}
    </div>
  );
}
