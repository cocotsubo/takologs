import { RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

const ALPH = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function code() {
  return Array.from({ length: 5 }, () => ALPH[Math.floor(Math.random() * ALPH.length)]).join("");
}

function paint(canvas: HTMLCanvasElement, text: string, hue: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = `hsl(${hue} 42% 92%)`;
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 18; i++) {
    ctx.strokeStyle = `hsla(${hue} 40% 40% / ${0.12 + Math.random() * 0.2})`;
    ctx.beginPath();
    ctx.moveTo(Math.random() * w, Math.random() * h);
    ctx.lineTo(Math.random() * w, Math.random() * h);
    ctx.stroke();
  }
  ctx.font = '700 28px "Josefin Sans", Avenir, sans-serif';
  ctx.textBaseline = "middle";
  const gap = w / (text.length + 1);
  for (let i = 0; i < text.length; i++) {
    ctx.save();
    const x = gap * (i + 1);
    const y = h / 2 + (Math.random() - 0.5) * 8;
    ctx.translate(x, y);
    ctx.rotate((Math.random() - 0.5) * 0.4);
    ctx.fillStyle = `hsl(${hue} 42% ${28 + Math.random() * 14}%)`;
    ctx.fillText(text[i], -10, 0);
    ctx.restore();
  }
}

export function HumanCaptcha({
  onValid,
}: {
  onValid: (ok: boolean) => void;
}) {
  const { t } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [secret, setSecret] = useState(code);
  const [value, setValue] = useState("");
  const started = useRef(Date.now());

  const redraw = (next = secret) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const hue = Number(
      getComputedStyle(document.documentElement).getPropertyValue("--accent-h").trim() || 36,
    );
    paint(canvas, next, Number.isFinite(hue) ? hue : 36);
  };

  useEffect(() => {
    redraw();
  }, [secret]);

  useEffect(() => {
    const check = () => onValid(value.trim().toUpperCase() === secret && Date.now() - started.current > 900);
    check();
    const id = window.setTimeout(check, 950);
    return () => window.clearTimeout(id);
  }, [value, secret, onValid]);

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-sand-600 dark:text-sand-300">{t("login.captcha")}</p>
      <div className="flex items-center gap-2">
        <canvas
          ref={canvasRef}
          width={180}
          height={56}
          className="rounded-xl border border-sand-300/50 dark:border-sand-700/40 bg-sand-100"
          aria-hidden
        />
        <button
          type="button"
          onClick={() => {
            const n = code();
            setSecret(n);
            setValue("");
            started.current = Date.now();
            onValid(false);
          }}
          className="rounded-full glass p-2 text-sand-600"
          aria-label={t("common.reset")}
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value.toUpperCase())}
        placeholder={t("login.captchaPh")}
        className="w-full rounded-xl glass px-3 py-2.5 text-base tracking-[0.35em] uppercase outline-none text-sand-900 dark:text-sand-50"
        autoComplete="off"
        autoCapitalize="characters"
        spellCheck={false}
        required
      />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />
    </div>
  );
}
