import { createFileRoute } from "@tanstack/react-router";
import { Bot, FlaskConical } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SearchHalo } from "@/components/search-halo";
import { requestOpenSearch } from "@/components/search-palette";
import { CategoryChip, PageHero, SubstanceCard } from "@/components/ui-bits";
import { useAddToJournal } from "@/components/journal-context";
import { CATEGORY_ORDER, substances } from "@/lib/substances";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/substances")({ component: SubstancesPage });

export function SubstancesPage() {
  const [cat, setCat] = useState("all");
  const { requestAdd } = useAddToJournal();
  const { t } = useI18n();
  const list = useMemo(() => {
    return cat === "all" ? substances : substances.filter((u) => u.category === cat);
  }, [cat]);
  const [shown, setShown] = useState(24);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShown(24);
  }, [cat]);

  useEffect(() => {
    const el = moreRef.current;
    if (!el || shown >= list.length) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setShown((n) => Math.min(list.length, n + 24));
      },
      { rootMargin: "800px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown, list.length]);

  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <PageHero
          kicker={t("substances.kicker")}
          icon={<FlaskConical className="h-3.5 w-3.5" />}
          title={t("substances.title")}
          subtitle={t("substances.subtitle")}
        />
        <div className="mt-8 mx-auto max-w-2xl">
          <SearchHalo>
            <button
              type="button"
              onClick={() => requestOpenSearch()}
              className="w-full glass-strong rounded-full p-2 pl-4 flex items-center gap-3 text-left hover:scale-[1.01] transition-transform"
            >
              <Bot className="h-5 w-5 text-clay-500 shrink-0" />
              <span className="flex-1 py-2.5 text-base text-sand-400 dark:text-sand-500">
                {t("home.searchPh")}
              </span>
            </button>
          </SearchHalo>
          <p className="mt-2 text-center text-xs text-sand-500">{t("home.count", { n: list.length })}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          <CategoryChip id="all" active={cat === "all"} onClick={() => setCat("all")} />
          {CATEGORY_ORDER.map((d) => (
            <CategoryChip key={d} id={d} active={cat === d} onClick={() => setCat(d)} />
          ))}
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {list.slice(0, shown).map((s) => (
            <SubstanceCard key={s.slug} sub={s} onAdd={() => requestAdd(s.slug)} />
          ))}
        </div>
        {shown < list.length ? <div ref={moreRef} className="h-10" /> : null}
      </div>
    </div>
  );
}
