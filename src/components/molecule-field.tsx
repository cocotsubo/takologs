import { useEffect, useRef } from "react";
import { MOL_GRAPHS, type GraphAtom } from "@/lib/mol-graphs";

const NS = "http://www.w3.org/2000/svg";

type Atom = GraphAtom & { r: number };
type Mol = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  scale: number;
  atoms: Atom[];
  bonds: [number, number][];
  pulse: number;
  node: SVGGElement;
};

function radiusFor(el: string) {
  if (el === "C") return 5.2;
  if (el === "N" || el === "O") return 6.2;
  if (el === "P" || el === "S") return 7;
  if (el === "Cl" || el === "Br") return 7.4;
  return 5.6;
}

function el<K extends keyof SVGElementTagNameMap>(name: K, attrs: Record<string, string> = {}) {
  const n = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  return n;
}

function makeMol(g: (typeof MOL_GRAPHS)[number], w: number, h: number, i: number): Mol {
  const scale = 1.55 + (i % 4) * 0.22;
  const speed = 0.018 + Math.random() * 0.016;
  const ang = Math.random() * Math.PI * 2;
  const group = el("g", { class: "mol-g" });
  for (const [ia, ib] of g.bonds) {
    const a = g.atoms[ia];
    const b = g.atoms[ib];
    group.appendChild(
      el("line", {
        x1: String(a.x),
        y1: String(a.y),
        x2: String(b.x),
        y2: String(b.y),
        class: "mol-bond",
      }),
    );
  }
  for (const a of g.atoms) {
    const wrap = el("g", { transform: `translate(${a.x} ${a.y})` });
    wrap.appendChild(el("circle", { r: String(radiusFor(a.el) + 1.2), class: "mol-atom" }));
    const label = el("text", {
      class: "mol-letter",
      "text-anchor": "middle",
      "dominant-baseline": "middle",
      y: "0.5",
    });
    label.textContent = a.el;
    wrap.appendChild(label);
    group.appendChild(wrap);
  }
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(ang) * speed,
    vy: Math.sin(ang) * speed,
    rot: Math.random() * Math.PI * 2,
    vr: (Math.random() - 0.5) * 0.0009,
    scale,
    pulse: Math.random() * Math.PI * 2,
    atoms: g.atoms.map((a) => ({ ...a, r: radiusFor(a.el) })),
    bonds: g.bonds,
    node: group,
  };
}

export function MoleculeField() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("tako-reduced-motion");

    let w = 0;
    let h = 0;
    let mols: Mol[] = [];
    let links: SVGLineElement[] = [];
    let raf = 0;
    let boost = 0;
    let lastScroll = window.scrollY;
    let running = true;

    const linksG = el("g", { class: "mol-links" });
    const molsG = el("g", { class: "mol-graphs" });
    svg.appendChild(linksG);
    svg.appendChild(molsG);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      svg.setAttribute("width", String(w));
      svg.setAttribute("height", String(h));
      const count = w < 640 ? 6 : w < 1024 ? 10 : 14;
      molsG.replaceChildren();
      linksG.replaceChildren();
      const pool = [...MOL_GRAPHS].sort(() => Math.random() - 0.5);
      mols = Array.from({ length: count }, (_, i) => makeMol(pool[i % pool.length], w, h, i));
      mols.forEach((m) => molsG.appendChild(m.node));
      links = [];
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const line = el("line", { class: "mol-link" });
          linksG.appendChild(line);
          links.push(line);
        }
      }
    };

    const draw = () => {
      if (!running) return;
      if (document.hidden) {
        raf = requestAnimationFrame(draw);
        return;
      }
      let li = 0;
      for (let i = 0; i < mols.length; i++) {
        const a = mols[i];
        if (!reduced) {
          a.x += a.vx * (1 + boost * 0.45);
          a.y += a.vy * (1 + boost * 0.45);
          a.rot += a.vr * (1 + boost * 0.35);
          a.pulse += 0.01 + boost * 0.008;
          a.vx *= 0.997;
          a.vy *= 0.997;
          const spd = Math.hypot(a.vx, a.vy);
          if (spd < 0.022) {
            a.vx += (Math.random() - 0.5) * 0.01;
            a.vy += (Math.random() - 0.5) * 0.01;
          } else if (spd > 0.08) {
            a.vx *= 0.96;
            a.vy *= 0.96;
          }
          if (a.x < -110) a.x = w + 110;
          if (a.x > w + 110) a.x = -110;
          if (a.y < -110) a.y = h + 110;
          if (a.y > h + 110) a.y = -110;
        }
        const glow = 0.55 + Math.sin(a.pulse) * 0.12 + boost * 0.08;
        a.node.setAttribute("opacity", String(glow));
        a.node.setAttribute(
          "transform",
          `translate(${a.x} ${a.y}) rotate(${(a.rot * 180) / Math.PI}) scale(${a.scale})`,
        );
        for (let j = i + 1; j < mols.length; j++) {
          const b = mols[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 1;
          const line = links[li++];
          if (!line) continue;
          if (dist < 260) {
            const t = 1 - dist / 260;
            line.setAttribute("x1", String(a.x));
            line.setAttribute("y1", String(a.y));
            line.setAttribute("x2", String(b.x));
            line.setAttribute("y2", String(b.y));
            line.setAttribute("opacity", String(0.08 + t * 0.22));
            if (!reduced) {
              const f = ((dist - 160) / 160) * 0.006;
              a.vx += dx * f;
              a.vy += dy * f;
              b.vx -= dx * f;
              b.vy -= dy * f;
            }
          } else {
            line.setAttribute("opacity", "0");
          }
        }
      }
      boost *= 0.94;
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const dy = Math.abs(y - lastScroll);
      lastScroll = y;
      boost = Math.min(1.6, boost + dy * 0.018 + 0.28);
    };

    const boot = window.setTimeout(() => {
      resize();
      draw();
    }, 40);
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      running = false;
      window.clearTimeout(boot);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      svg.replaceChildren();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="mol-field"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    />
  );
}
