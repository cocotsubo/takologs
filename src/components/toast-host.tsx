import { useEffect, useState } from "react";
import type { ToastPayload } from "@/lib/notify";

type Item = ToastPayload & { id: number };

export function ToastHost() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const on = (e: Event) => {
      const d = (e as CustomEvent<ToastPayload>).detail;
      if (!d?.title) return;
      const id = Date.now() + Math.random();
      setItems((prev) => [...prev, { ...d, id }].slice(-4));
      window.setTimeout(() => {
        setItems((prev) => prev.filter((x) => x.id !== id));
      }, 5200);
    };
    window.addEventListener("takologs-toast", on);
    return () => window.removeEventListener("takologs-toast", on);
  }, []);
  if (!items.length) return null;
  return (
    <div className="fixed top-20 inset-x-0 z-[90] flex flex-col items-center gap-2 px-4 pointer-events-none">
      {items.map((it) => (
        <div
          key={it.id}
          className={`pointer-events-auto w-full max-w-sm glass-strong glass-modal rounded-2xl px-4 py-3 shadow-lg animate-spring-in ${
            it.kind === "mix" || it.kind === "sos" || it.kind === "lab" || it.kind === "lethal"
              ? "border border-red-500/50"
              : ""
          }`}
        >
          <p className="font-heading font-bold text-sand-900 dark:text-sand-50">{it.title}</p>
          {it.body ? (
            <p className="text-xs text-sand-500 mt-0.5">{it.body}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
