import { ExternalLink, Music, Pause, Play, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  enrichTrack,
  parseTrackUrl,
  searchAppleMusic,
  type ExperienceTrack,
} from "@/lib/music";
import { useI18n } from "@/lib/i18n";

export function TrackCard({ tr }: { tr: ExperienceTrack }) {
  const { t } = useI18n();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [on, setOn] = useState(false);
  const [embed, setEmbed] = useState(false);
  const [track, setTrack] = useState(tr);

  useEffect(() => {
    setTrack(tr);
    let cancelled = false;
    void enrichTrack(tr).then((next) => {
      if (!cancelled) setTrack(next);
    });
    return () => {
      cancelled = true;
      audioRef.current?.pause();
    };
  }, [tr.id, tr.url, tr.previewUrl]);

  const toggle = () => {
    if (track.previewUrl) {
      if (!audioRef.current) audioRef.current = new Audio(track.previewUrl);
      if (on) {
        audioRef.current.pause();
        setOn(false);
      } else {
        void audioRef.current.play().then(() => setOn(true)).catch(() => setEmbed(true));
        audioRef.current.onended = () => setOn(false);
      }
      return;
    }
    setEmbed((v) => !v);
    setOn((v) => !v);
  };

  const src =
    track.provider === "youtube"
      ? `${track.embedUrl}?autoplay=1`
      : track.provider === "spotify"
        ? `${track.embedUrl}?utm_source=generator&theme=0`
        : track.embedUrl;

  return (
    <div className="rounded-2xl glass-strong p-3 space-y-2">
      <div className="flex items-center gap-3">
        {track.artwork ? (
          <img src={track.artwork} alt="" className="h-16 w-16 rounded-xl object-cover" />
        ) : (
          <span className="h-16 w-16 rounded-xl bg-clay-500/20 grid place-items-center text-2xl">🎵</span>
        )}
        <div className="min-w-0 flex-1">
          <p className="font-heading font-bold truncate text-sand-900 dark:text-sand-50">{track.title}</p>
          {track.artist ? <p className="text-xs text-sand-500 truncate">{track.artist}</p> : null}
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={toggle}
              className="inline-flex items-center gap-1.5 rounded-full bg-clay-500 text-white px-3 py-1.5 text-xs font-semibold"
            >
              {on ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              {on ? t("music.pause") : t("music.play")}
            </button>
            <a
              href={track.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold text-clay-500"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {t("music.openApple")}
            </a>
          </div>
        </div>
      </div>
      {embed && !track.previewUrl ? (
        <div className="overflow-hidden rounded-xl">
          <iframe
            title={track.title}
            src={src}
            allow="autoplay; encrypted-media"
            className="w-full h-44 border-0"
          />
        </div>
      ) : null}
    </div>
  );
}

export function ExperienceMusic({
  tracks,
  onChange,
}: {
  tracks: ExperienceTrack[];
  onChange: (next: ExperienceTrack[]) => void;
}) {
  const { t } = useI18n();
  const [q, setQ] = useState("");
  const [hits, setHits] = useState<ExperienceTrack[]>([]);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const parsed = parseTrackUrl(q);
    if (parsed) {
      setHits([]);
      return;
    }
    if (q.trim().length < 2) {
      setHits([]);
      return;
    }
    let cancelled = false;
    setBusy(true);
    const id = window.setTimeout(() => {
      void searchAppleMusic(q)
        .then((rows) => {
          if (!cancelled) setHits(rows);
        })
        .finally(() => {
          if (!cancelled) setBusy(false);
        });
    }, 320);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
  }, [q]);

  const add = (tr: ExperienceTrack) => {
    onChange([...tracks.filter((x) => x.url !== tr.url), tr].slice(0, 4));
    setQ("");
    setHits([]);
  };

  const paste = () => {
    const tr = parseTrackUrl(q);
    if (tr) add(tr);
  };

  return (
    <div>
      <p className="text-xs font-semibold text-sand-600 dark:text-sand-300 mb-1.5 inline-flex items-center gap-1.5">
        <Music className="h-3.5 w-3.5" /> {t("music.label")}
      </p>
      <div className="flex items-center gap-2 rounded-xl glass px-3 py-2">
        <Search className="h-4 w-4 text-sand-500 shrink-0" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              paste();
            }
          }}
          placeholder={t("music.ph")}
          className="w-full bg-transparent outline-none text-base text-sand-900 dark:text-sand-50"
        />
        {parseTrackUrl(q) ? (
          <button type="button" onClick={paste} className="shrink-0 text-xs font-semibold text-clay-500">
            {t("music.add")}
          </button>
        ) : null}
      </div>
      <p className="mt-1 text-[11px] text-sand-400">{t("music.hint")}</p>
      {busy ? <p className="mt-1 text-[11px] text-sand-400">{t("music.searching")}</p> : null}
      {hits.length > 0 ? (
        <ul className="mt-2 space-y-1 max-h-48 overflow-y-auto">
          {hits.map((h) => (
            <li key={h.id}>
              <button
                type="button"
                onClick={() => add(h)}
                className="w-full flex items-center gap-2 rounded-xl glass px-2 py-1.5 text-left hover:bg-clay-500/10"
              >
                {h.artwork ? (
                  <img src={h.artwork} alt="" className="h-9 w-9 rounded-lg object-cover" />
                ) : (
                  <span className="h-9 w-9 rounded-lg glass grid place-items-center">🎵</span>
                )}
                <span className="min-w-0">
                  <span className="block text-sm font-semibold truncate text-sand-900 dark:text-sand-50">
                    {h.title}
                  </span>
                  {h.artist ? (
                    <span className="block text-[11px] text-sand-500 truncate">{h.artist}</span>
                  ) : null}
                </span>
                <span className="ml-auto text-[10px] font-bold uppercase text-clay-500">Apple</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-3 space-y-3">
        {tracks.map((tr) => (
          <div key={tr.id} className="relative">
            <button
              type="button"
              onClick={() => onChange(tracks.filter((x) => x.id !== tr.id))}
              className="absolute top-2 right-2 z-10 rounded-full bg-black/50 text-white p-1"
              aria-label={t("common.close")}
            >
              <X className="h-3.5 w-3.5" />
            </button>
            {tr.provider === "apple" ? (
              <TrackCard tr={tr} />
            ) : (
              <div className="rounded-2xl overflow-hidden glass">
                <p className="px-3 pt-2 pb-1 text-xs font-semibold truncate text-sand-700 dark:text-sand-200">
                  {tr.artist ? `${tr.title} — ${tr.artist}` : tr.title}
                </p>
                <iframe
                  src={tr.embedUrl}
                  title={tr.title}
                  className="w-full border-0"
                  style={{ height: tr.provider === "youtube" ? 180 : 152 }}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
