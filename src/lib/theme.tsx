import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { applyTakoFavicon } from "@/components/tako-logo";

export const HUE_KEY = "takologs-accent-hue";
export const THEME_KEY = "takologs-theme";
export const DEFAULT_HUE = 36;

export const ACCENT_PRESETS = [
  { name: "Sable", hue: 36 },
  { name: "Terracotta", hue: 18 },
  { name: "Rose poudré", hue: 350 },
  { name: "Mauve", hue: 280 },
  { name: "Indigo", hue: 235 },
  { name: "Lagon", hue: 200 },
  { name: "Sauge", hue: 150 },
  { name: "Olive", hue: 80 },
  { name: "Noir & blanc", hue: -1 },
] as const;

export type ThemePref = "auto" | "light" | "dark";
export type ThemeMode = "light" | "dark";

function wrapHue(n: number) {
  if (!Number.isFinite(n)) return DEFAULT_HUE;
  if (n < 0) return -1;
  return Math.round(((n % 360) + 360) % 360);
}

export function isMonoTheme() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("mono");
}

export function currentHue() {
  if (typeof document === "undefined") return DEFAULT_HUE;
  if (isMonoTheme()) return -1;
  const n = Number(
    getComputedStyle(document.documentElement).getPropertyValue("--accent-h").trim(),
  );
  return Number.isFinite(n) ? n : DEFAULT_HUE;
}

export function applyAccent(hue: number) {
  const h = wrapHue(hue);
  const root = document.documentElement;
  const mono = h < 0;
  root.classList.toggle("mono", mono);
  if (mono) {
    root.style.setProperty("--accent-h", "0");
    root.style.setProperty("--clay-s", "0%");
    root.style.setProperty("--logo-hue-rotate", "0deg");
  } else {
    root.style.setProperty("--accent-h", String(h));
    root.style.removeProperty("--clay-s");
    root.style.setProperty("--logo-hue-rotate", `${h - DEFAULT_HUE}deg`);
  }
  const dark = root.classList.contains("dark");
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute(
      "content",
      mono
        ? dark
          ? "#141414"
          : "#ebebeb"
        : dark
          ? `hsl(${h} 28% 8%)`
          : `hsl(${h} 52% 91%)`,
    );
  }
  applyTakoFavicon(mono ? 0 : h);
  try {
    localStorage.setItem(HUE_KEY, String(h));
  } catch {
    /* ignore */
  }
  return h;
}

function autoMode(): ThemeMode {
  const h = new Date().getHours();
  return h >= 19 || h < 7 ? "dark" : "light";
}

export function applyThemeClass(mode: ThemeMode) {
  document.documentElement.classList.toggle("dark", mode === "dark");
  const h = wrapHue(
    Number(document.documentElement.style.getPropertyValue("--accent-h")) ||
      DEFAULT_HUE,
  );
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute(
      "content",
      mode === "dark" ? `hsl(${h} 28% 8%)` : `hsl(${h} 52% 91%)`,
    );
  }
}

const AccentCtx = createContext<{
  hue: number;
  setHue: (h: number) => void;
  reset: () => void;
} | null>(null);

const ThemeCtx = createContext<{
  pref: ThemePref;
  mode: ThemeMode;
  setPref: (p: ThemePref) => void;
  cycle: () => void;
} | null>(null);

export function ThemeProviders({ children }: { children: ReactNode }) {
  const [hue, setHueState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_HUE;
    const raw = localStorage.getItem(HUE_KEY);
    const n = raw != null ? parseInt(raw, 10) : NaN;
    return Number.isFinite(n) ? wrapHue(n) : DEFAULT_HUE;
  });

  const [pref, setPrefState] = useState<ThemePref>(() => {
    if (typeof window === "undefined") return "auto";
    const v = localStorage.getItem(THEME_KEY);
    return v === "light" || v === "dark" || v === "auto" ? v : "auto";
  });
  const [mode, setMode] = useState<ThemeMode>(() =>
    pref === "auto" ? autoMode() : pref,
  );

  useEffect(() => {
    applyAccent(hue);
  }, [hue]);

  useEffect(() => {
    const onHue = (e: Event) => {
      const h = (e as CustomEvent<number>).detail;
      if (typeof h === "number") setHueState(applyAccent(h));
    };
    const onTheme = (e: Event) => {
      const p = (e as CustomEvent<ThemePref>).detail;
      if (p === "light" || p === "dark" || p === "auto") {
        setPrefState(p);
        try {
          localStorage.setItem(THEME_KEY, p);
        } catch {
          /* ignore */
        }
      }
    };
    window.addEventListener("takologs-set-hue", onHue);
    window.addEventListener("takologs-set-theme", onTheme);
    return () => {
      window.removeEventListener("takologs-set-hue", onHue);
      window.removeEventListener("takologs-set-theme", onTheme);
    };
  }, []);

  useEffect(() => {
    const next = pref === "auto" ? autoMode() : pref;
    setMode(next);
    applyThemeClass(next);
  }, [pref]);

  useEffect(() => {
    if (pref !== "auto") return;
    const id = window.setInterval(() => {
      const next = autoMode();
      setMode(next);
      applyThemeClass(next);
    }, 60_000);
    return () => window.clearInterval(id);
  }, [pref]);

  const setHue = useCallback((h: number) => {
    setHueState(applyAccent(h));
  }, []);
  const reset = useCallback(() => setHue(DEFAULT_HUE), [setHue]);

  const setPref = useCallback((p: ThemePref) => {
    setPrefState(p);
    try {
      localStorage.setItem(THEME_KEY, p);
    } catch {
      /* ignore */
    }
  }, []);
  const cycle = useCallback(() => {
    setPref(pref === "auto" ? "light" : pref === "light" ? "dark" : "auto");
  }, [pref, setPref]);

  const accentValue = useMemo(
    () => ({ hue, setHue, reset }),
    [hue, setHue, reset],
  );
  const themeValue = useMemo(
    () => ({ pref, mode, setPref, cycle }),
    [pref, mode, setPref, cycle],
  );

  return (
    <ThemeCtx.Provider value={themeValue}>
      <AccentCtx.Provider value={accentValue}>{children}</AccentCtx.Provider>
    </ThemeCtx.Provider>
  );
}

export function useAccent() {
  const ctx = useContext(AccentCtx);
  if (!ctx) throw new Error("useAccent must be used within ThemeProviders");
  return ctx;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProviders");
  return ctx;
}

export const THEME_BOOT_SCRIPT = `(function(){try{var h=localStorage.getItem("${HUE_KEY}")||"${DEFAULT_HUE}";var n=parseInt(h,10);if(!isFinite(n))n=${DEFAULT_HUE};var r=document.documentElement;var mono=n<0;r.classList.toggle("mono",mono);if(mono){r.style.setProperty("--accent-h","0");r.style.setProperty("--clay-s","0%");r.style.setProperty("--logo-hue-rotate","0deg");}else{n=((n%360)+360)%360;r.style.setProperty("--accent-h",String(n));r.style.setProperty("--logo-hue-rotate",(n-${DEFAULT_HUE})+"deg");}var t=localStorage.getItem("${THEME_KEY}")||"auto";var hr=new Date().getHours();var dark=t==="dark"||(t!=="light"&&(hr>=19||hr<7));r.classList.toggle("dark",dark);}catch(e){}})();`;
