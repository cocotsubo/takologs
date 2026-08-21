import { useEffect, useState } from "react";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { listExperiences } from "@/lib/journal-api";
import type { Experience } from "@/lib/journal";
import { NowSession } from "@/components/now-session";

const COARSE_MIN = 16 * 60;

export function ActiveBanner() {
  const { user } = useCurrentUserState();
  const [exps, setExps] = useState<Experience[]>([]);

  useEffect(() => {
    let cancelled = false;
    const tick = async () => {
      try {
        const list = await listExperiences();
        const now = Date.now();
        const relevant = list.filter((e) =>
          e.ingestions.some((ing) => {
            const start = new Date(ing.ingestionTime).getTime();
            return now >= start && now < start + COARSE_MIN * 60000;
          }),
        );
        if (!cancelled) setExps(relevant);
      } catch {
        if (!cancelled) setExps([]);
      }
    };
    void tick();
    const id = window.setInterval(tick, 60_000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, [user?.id]);

  if (exps.length === 0) return null;

  return <NowSession experiences={exps} />;
}
