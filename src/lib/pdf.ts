/** Minimal PDF wrapping one JPEG image per A4 page. */

function u8(s: string) {
  return new TextEncoder().encode(s);
}

function concat(parts: Uint8Array[]) {
  const n = parts.reduce((a, b) => a + b.length, 0);
  const out = new Uint8Array(n);
  let o = 0;
  for (const p of parts) {
    out.set(p, o);
    o += p.length;
  }
  return out;
}

export async function imagesToPdf(blobs: Blob[]): Promise<Blob> {
  const jpegs: Uint8Array[] = [];
  for (const b of blobs) {
    const buf = new Uint8Array(await b.arrayBuffer());
    jpegs.push(buf);
  }
  const W = 595;
  const H = 842;
  const chunks: Uint8Array[] = [];
  const offsets: number[] = [0];
  let pos = 0;
  const push = (part: string | Uint8Array) => {
    const bytes = typeof part === "string" ? u8(part) : part;
    chunks.push(bytes);
    pos += bytes.length;
  };
  push("%PDF-1.4\n");
  const objAt: number[] = [];
  const mark = () => {
    objAt.push(pos);
  };
  mark();
  push(`1 0 obj << /Type /Catalog /Pages 2 0 R >>\nendobj\n`);
  mark();
  const kids = jpegs.map((_, i) => `${3 + i * 3} 0 R`).join(" ");
  push(`2 0 obj << /Type /Pages /Kids [${kids}] /Count ${jpegs.length} >>\nendobj\n`);
  jpegs.forEach((jpg, i) => {
    const page = 3 + i * 3;
    const img = page + 1;
    const cont = page + 2;
    const content = `q ${W} 0 0 ${H} 0 0 cm /Im${i} Do Q\n`;
    mark();
    push(
      `${page} 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /XObject << /Im${i} ${img} 0 R >> >> /Contents ${cont} 0 R >>\nendobj\n`,
    );
    mark();
    push(
      `${img} 0 obj << /Type /XObject /Subtype /Image /Width 1240 /Height 1754 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpg.length} >>\nstream\n`,
    );
    push(jpg);
    push(`\nendstream\nendobj\n`);
    mark();
    push(`${cont} 0 obj << /Length ${content.length} >>\nstream\n${content}endstream\nendobj\n`);
  });
  const xrefPos = pos;
  push(`xref\n0 ${3 + jpegs.length * 3}\n`);
  push(`0000000000 65535 f \n`);
  for (const o of objAt) {
    push(`${String(o).padStart(10, "0")} 00000 n \n`);
  }
  push(
    `trailer << /Size ${3 + jpegs.length * 3} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`,
  );
  return new Blob([concat(chunks)], { type: "application/pdf" });
}

export async function canvasToJpeg(canvas: HTMLCanvasElement, quality = 0.86): Promise<Blob> {
  return await new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("jpeg"))), "image/jpeg", quality);
  });
}

export function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 4000);
}
