import { useEffect, useRef, useState, type ReactNode } from "react";

export function SearchHalo({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: 280, h: 52 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const sync = () => {
      const r = el.getBoundingClientRect();
      if (r.width > 8 && r.height > 8) setBox({ w: r.width, h: r.height });
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const pad = 3;
  const w = box.w + pad * 2;
  const h = box.h + pad * 2;
  const rx = box.h / 2;

  return (
    <div ref={ref} className="search-halo">
      <svg
        className="search-halo-svg"
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        aria-hidden
      >
        <rect
          className="search-halo-track"
          x={pad}
          y={pad}
          width={box.w}
          height={box.h}
          rx={rx}
          ry={rx}
          pathLength={1}
        />
        <rect
          className="search-halo-run"
          x={pad}
          y={pad}
          width={box.w}
          height={box.h}
          rx={rx}
          ry={rx}
          pathLength={1}
        />
      </svg>
      {children}
    </div>
  );
}
