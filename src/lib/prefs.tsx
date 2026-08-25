import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { normName } from "@/lib/names";
import type { Substance } from "@/lib/substances";
import type { Experience, Ingestion } from "@/lib/journal";

const EMOJI_KEY = "takologs-emojis";
const DOSE_KEY = "takologs-last-doses";
const USAGE_KEY = "takologs-usage";
const NAME_KEY = "takologs-display-name";
const MOTION_KEY = "takologs-reduce-motion";
const FAV_KEY = "takologs-favorites";
const AVATAR_KEY = "takologs-avatar";
const COLOR_KEY = "takologs-colors";
const ALIAS_KEY = "takologs-aliases";

export type LastDose = {
  dose: number | null;
  unit: string;
  route: string;
  name: string;
  slug?: string | null;
};

type EmojiMap = Record<string, string>;
type ColorMap = Record<string, string>;
type DoseMap = Record<string, LastDose>;
type UsageMap = Record<string, number>;

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}

function usageKey(name: string, slug?: string | null) {
  return (slug && slug.trim()) || normName(name);
}

type PrefsCtx = {
  emojis: EmojiMap;
  setEmoji: (key: string, emoji: string) => void;
  clearEmojis: () => void;
  resolveEmoji: (slug: string | null | undefined, name: string, fallback: string) => string;
  colors: ColorMap;
  setColor: (key: string, color: string) => void;
  resolveColor: (slug: string | null | undefined, name: string, fallback: string) => string;
  aliases: ColorMap;
  setAlias: (key: string, label: string) => void;
  resolveName: (slug: string | null | undefined, name: string) => string;
  lastDoses: DoseMap;
  usage: UsageMap;
  recordIngestion: (ing: {
    substanceName: string;
    slug?: string | null;
    dose: number | null;
    doseUnit: string;
    route: string;
  }) => void;
  syncFromExperiences: (exps: Experience[]) => void;
  lastDoseFor: (name: string, slug?: string | null) => LastDose | undefined;
  usageFor: (name: string, slug?: string | null) => number;
  displayName: string;
  setDisplayName: (n: string) => void;
  reduceMotion: boolean;
  setReduceMotion: (v: boolean) => void;
  favorites: string[];
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  avatar: string;
  setAvatar: (url: string) => void;
};

const Ctx = createContext<PrefsCtx | null>(null);

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [emojis, setEmojis] = useState<EmojiMap>(() => readJson(EMOJI_KEY, {}));
  const [colors, setColors] = useState<ColorMap>(() => readJson(COLOR_KEY, {}));
  const [aliases, setAliases] = useState<ColorMap>(() => readJson(ALIAS_KEY, {}));
  const [lastDoses, setLastDoses] = useState<DoseMap>(() => readJson(DOSE_KEY, {}));
  const [usage, setUsage] = useState<UsageMap>(() => readJson(USAGE_KEY, {}));
  const [favorites, setFavorites] = useState<string[]>(() => readJson(FAV_KEY, []));
  const [displayName, setDisplayNameState] = useState(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem(NAME_KEY) ?? "";
  });
  const [reduceMotion, setReduceMotionState] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(MOTION_KEY) === "1";
  });
  const [avatar, setAvatarState] = useState(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem(AVATAR_KEY) ?? "";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("tako-reduced-motion", reduceMotion);
  }, [reduceMotion]);

  const setEmoji = useCallback((key: string, emoji: string) => {
    setEmojis((prev) => {
      const next = { ...prev };
      const k = key.trim();
      if (!k) return prev;
      if (!emoji.trim()) delete next[k];
      else next[k] = emoji.trim();
      writeJson(EMOJI_KEY, next);
      return next;
    });
  }, []);

  const clearEmojis = useCallback(() => {
    setEmojis({});
    writeJson(EMOJI_KEY, {});
  }, []);

  const resolveEmoji = useCallback(
    (slug: string | null | undefined, name: string, fallback: string) => {
      if (slug && emojis[slug]) return emojis[slug];
      const nk = normName(name);
      if (emojis[nk]) return emojis[nk];
      if (emojis[name]) return emojis[name];
      return fallback;
    },
    [emojis],
  );

  const resolveColor = useCallback(
    (slug: string | null | undefined, name: string, fallback: string) => {
      if (slug && colors[slug]) return colors[slug];
      const nk = normName(name);
      if (colors[nk]) return colors[nk];
      if (colors[name]) return colors[name];
      return fallback;
    },
    [colors],
  );

  const setColor = useCallback((key: string, color: string) => {
    setColors((prev) => {
      const next = { ...prev };
      const k = key.trim();
      if (!k) return prev;
      if (!color.trim()) delete next[k];
      else next[k] = color.trim();
      writeJson(COLOR_KEY, next);
      return next;
    });
  }, []);

  const setAlias = useCallback((key: string, label: string) => {
    setAliases((prev) => {
      const next = { ...prev };
      const k = key.trim();
      if (!k) return prev;
      if (!label.trim()) delete next[k];
      else next[k] = label.trim();
      writeJson(ALIAS_KEY, next);
      return next;
    });
  }, []);

  const resolveName = useCallback(
    (slug: string | null | undefined, name: string) => {
      if (slug && aliases[slug]) return aliases[slug];
      const nk = normName(name);
      if (aliases[nk]) return aliases[nk];
      if (aliases[name]) return aliases[name];
      for (const [k, v] of Object.entries(aliases)) {
        if (normName(k) === nk || (slug && k === slug)) return v;
      }
      return name;
    },
    [aliases],
  );

  const recordIngestion = useCallback(
    (ing: {
      substanceName: string;
      slug?: string | null;
      dose: number | null;
      doseUnit: string;
      route: string;
    }) => {
      const k = usageKey(ing.substanceName, ing.slug);
      setLastDoses((prev) => {
        const next = {
          ...prev,
          [k]: {
            dose: ing.dose,
            unit: ing.doseUnit,
            route: ing.route,
            name: ing.substanceName,
            slug: ing.slug,
          },
        };
        writeJson(DOSE_KEY, next);
        return next;
      });
      setUsage((prev) => {
        const next = { ...prev, [k]: (prev[k] ?? 0) + 1 };
        writeJson(USAGE_KEY, next);
        return next;
      });
    },
    [],
  );

  const syncFromExperiences = useCallback((exps: Experience[]) => {
    const nextUsage: UsageMap = {};
    const nextLast: DoseMap = {};
    const ings: Ingestion[] = exps
      .flatMap((e) => e.ingestions)
      .slice()
      .sort(
        (a, b) =>
          new Date(a.ingestionTime).getTime() - new Date(b.ingestionTime).getTime(),
      );
    for (const ing of ings) {
      const k = usageKey(ing.substanceName, ing.slug);
      nextUsage[k] = (nextUsage[k] ?? 0) + 1;
      nextLast[k] = {
        dose: ing.dose,
        unit: ing.doseUnit,
        route: ing.route,
        name: ing.substanceName,
        slug: ing.slug,
      };
    }
    setUsage(nextUsage);
    setLastDoses(nextLast);
    writeJson(USAGE_KEY, nextUsage);
    writeJson(DOSE_KEY, nextLast);
  }, []);

  const lastDoseFor = useCallback(
    (name: string, slug?: string | null) => {
      const k = usageKey(name, slug);
      return lastDoses[k] ?? lastDoses[normName(name)];
    },
    [lastDoses],
  );

  const usageFor = useCallback(
    (name: string, slug?: string | null) => {
      const k = usageKey(name, slug);
      return usage[k] ?? usage[normName(name)] ?? 0;
    },
    [usage],
  );

  const setDisplayName = useCallback((n: string) => {
    setDisplayNameState(n);
    try {
      localStorage.setItem(NAME_KEY, n);
    } catch {
      /* ignore */
    }
  }, []);

  const setReduceMotion = useCallback((v: boolean) => {
    setReduceMotionState(v);
    try {
      localStorage.setItem(MOTION_KEY, v ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, []);

  const toggleFavorite = useCallback((slug: string) => {
    setFavorites((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      writeJson(FAV_KEY, next);
      return next;
    });
  }, []);

  const setAvatar = useCallback((url: string) => {
    setAvatarState(url);
    try {
      if (url) localStorage.setItem(AVATAR_KEY, url);
      else localStorage.removeItem(AVATAR_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const isFavorite = useCallback(
    (slug: string) => favorites.includes(slug),
    [favorites],
  );

  const value = useMemo<PrefsCtx>(
    () => ({
      emojis,
      setEmoji,
      clearEmojis,
      resolveEmoji,
      colors,
      setColor,
      resolveColor,
      aliases,
      setAlias,
      resolveName,
      lastDoses,
      usage,
      recordIngestion,
      syncFromExperiences,
      lastDoseFor,
      usageFor,
      displayName,
      setDisplayName,
      reduceMotion,
      setReduceMotion,
      favorites,
      toggleFavorite,
      isFavorite,
      avatar,
      setAvatar,
    }),
    [
      emojis,
      setEmoji,
      clearEmojis,
      resolveEmoji,
      colors,
      setColor,
      resolveColor,
      aliases,
      setAlias,
      resolveName,
      lastDoses,
      usage,
      recordIngestion,
      syncFromExperiences,
      lastDoseFor,
      usageFor,
      displayName,
      setDisplayName,
      reduceMotion,
      setReduceMotion,
      favorites,
      toggleFavorite,
      isFavorite,
      avatar,
      setAvatar,
    ],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function usePrefs() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("usePrefs must be used within PrefsProvider");
  return ctx;
}

export function useSubstanceEmoji(sub: Pick<Substance, "slug" | "name" | "emoji">) {
  const { resolveEmoji } = usePrefs();
  return resolveEmoji(sub.slug, sub.name, sub.emoji);
}
