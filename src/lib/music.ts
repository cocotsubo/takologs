import { uuid } from "@/lib/uuid";

export type TrackProvider = "youtube" | "spotify" | "apple";

export type ExperienceTrack = {
  id: string;
  provider: TrackProvider;
  url: string;
  embedUrl: string;
  title: string;
  artist?: string;
  artwork?: string;
  previewUrl?: string;
};

function ytId(url: string) {
  const m =
    url.match(/[?&]v=([a-zA-Z0-9_-]{11})/) ||
    url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/) ||
    url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/) ||
    url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
  return m?.[1] ?? null;
}

function spotifyParts(url: string) {
  const m = url.match(
    /(?:open\.spotify\.com\/(?:intl-[a-z]+\/)?|spotify:)(track|album|playlist|episode)[/:]([a-zA-Z0-9]+)/i,
  );
  return m ? { kind: m[1].toLowerCase(), id: m[2] } : null;
}

export function parseTrackUrl(raw: string): ExperienceTrack | null {
  const url = raw.trim();
  if (!url) return null;
  const yt = ytId(url);
  if (yt) {
    return {
      id: uuid(),
      provider: "youtube",
      url: `https://www.youtube.com/watch?v=${yt}`,
      embedUrl: `https://www.youtube.com/embed/${yt}`,
      title: "YouTube",
    };
  }
  const sp = spotifyParts(url);
  if (sp) {
    return {
      id: uuid(),
      provider: "spotify",
      url: `https://open.spotify.com/${sp.kind}/${sp.id}`,
      embedUrl: `https://open.spotify.com/embed/${sp.kind}/${sp.id}`,
      title: `Spotify ${sp.kind}`,
    };
  }
  if (/music\.apple\.com\//i.test(url)) {
    const embed = url.replace("://music.apple.com/", "://embed.music.apple.com/");
    return {
      id: uuid(),
      provider: "apple",
      url,
      embedUrl: embed,
      title: "Apple Music",
    };
  }
  return null;
}

type ItunesHit = {
  trackName?: string;
  artistName?: string;
  artworkUrl100?: string;
  trackViewUrl?: string;
  collectionViewUrl?: string;
  previewUrl?: string;
};

export async function searchAppleMusic(q: string): Promise<ExperienceTrack[]> {
  const term = q.trim();
  if (term.length < 2) return [];
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=8`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = (await res.json()) as { results?: ItunesHit[] };
  return (data.results ?? [])
    .filter((r) => r.trackViewUrl || r.collectionViewUrl)
    .map((r) => {
      const link = r.trackViewUrl || r.collectionViewUrl || "";
      const parsed = parseTrackUrl(link);
      return {
        id: uuid(),
        provider: "apple" as const,
        url: link,
        embedUrl: parsed?.embedUrl || link.replace("://music.apple.com/", "://embed.music.apple.com/"),
        title: r.trackName || "Apple Music",
        artist: r.artistName,
        artwork: r.artworkUrl100?.replace("100x100", "200x200"),
        previewUrl: r.previewUrl,
      };
    });
}

export async function enrichTrack(tr: ExperienceTrack): Promise<ExperienceTrack> {
  if (tr.previewUrl) return tr;
  const q = [tr.artist, tr.title].filter((x) => x && x !== "Apple Music" && x !== "YouTube" && !x.startsWith("Spotify")).join(" ");
  const term = q.trim() || tr.title;
  if (tr.provider === "apple" || term.length > 1) {
    try {
      const hits = await searchAppleMusic(term);
      const hit = hits.find((h) => h.previewUrl) ?? hits[0];
      if (hit?.previewUrl) {
        return {
          ...tr,
          previewUrl: hit.previewUrl,
          artwork: tr.artwork || hit.artwork,
          title: tr.title === "Apple Music" || !tr.title ? hit.title : tr.title,
          artist: tr.artist || hit.artist,
        };
      }
    } catch {
      /* ignore */
    }
  }
  return tr;
}
