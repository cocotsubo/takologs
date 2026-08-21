import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain } from "lucide-react";
import { useState } from "react";
import { PageHero, SubstanceCard } from "@/components/ui-bits";
import { useI18n } from "@/lib/i18n";
import { neurotransmitters, substances } from "@/lib/substances";

export const Route = createFileRoute("/neuro")({ component: NeuroPage });

export function NeuroPage() {
  const { t } = useI18n();
  const [nt, setNt] = useState<string>("serotonin");
  const info = neurotransmitters[nt];
  const related = substances.filter((s) => s.neurotransmitters.includes(nt));

  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <PageHero
          kicker={t("neuro.kicker")}
          icon={<Brain className="h-3.5 w-3.5" />}
          title={t("neuro.title")}
          subtitle={t("neuro.subtitle")}
        />
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {Object.entries(neurotransmitters).map(([id, n]) => (
            <button
              key={id}
              type="button"
              onClick={() => setNt(id)}
              className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition-transform hover:scale-105 ${
                nt === id ? "text-white shadow-lg" : "glass text-sand-700 dark:text-sand-200"
              }`}
              style={nt === id ? { background: n.color } : undefined}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: n.color }} />
              {(() => {
                const lab = t(`nt.${id}`);
                return lab.startsWith("nt.") ? n.label : lab;
              })()}
            </button>
          ))}
        </div>
        {info ? (
          <div
            className="mt-8 glass-strong rounded-3xl p-6 sm:p-8 animate-fade-up"
            style={{ borderColor: `${info.color}55` }}
          >
            <h2 className="font-heading text-2xl font-bold" style={{ color: info.color }}>
              {(() => {
                const lab = t(`nt.${nt}`);
                return lab.startsWith("nt.") ? info.label : lab;
              })()}
            </h2>
            <p className="mt-2 text-sand-700 dark:text-sand-200 leading-relaxed">
              {(() => {
                const role = t(`nt.${nt}Role`);
                return role.startsWith("nt.") ? info.role : role;
              })()}
            </p>
            <svg viewBox="0 0 320 90" className="mt-6 w-full h-24">
              <defs>
                <linearGradient id="ntg" x1="0" x2="1">
                  <stop offset="0%" stopColor={info.color} stopOpacity="0.2" />
                  <stop offset="100%" stopColor={info.color} />
                </linearGradient>
              </defs>
              <path
                d="M10 45 C 80 10, 120 80, 160 45 S 250 10, 310 45"
                fill="none"
                stroke={info.color}
                strokeWidth="3"
                opacity="0.5"
              />
              <circle r="6" fill={info.color}>
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  path="M10 45 C 80 10, 120 80, 160 45 S 250 10, 310 45"
                />
              </circle>
              <circle r="4" fill={info.color} opacity="0.7">
                <animateMotion
                  dur="2.8s"
                  begin="0.9s"
                  repeatCount="indefinite"
                  path="M10 45 C 80 10, 120 80, 160 45 S 250 10, 310 45"
                />
              </circle>
              <text x="12" y="82" fontSize="11" fill="currentColor">
                axon
              </text>
              <text x="250" y="82" fontSize="11" fill="currentColor">
                synapse
              </text>
            </svg>
          </div>
        ) : null}
        <h3 className="mt-10 font-heading text-xl font-bold text-sand-900 dark:text-sand-50">
          {t("neuro.related")}
          <span className="ml-2 text-sm font-semibold text-sand-400">{related.length}</span>
        </h3>
        <div className="mt-4 grid sm:grid-cols-2 gap-4 items-start">
          {related.slice(0, 24).map((s) => (
            <SubstanceCard key={s.slug} sub={s} />
          ))}
        </div>
        {related.length === 0 ? (
          <p className="mt-6 text-center text-sand-500">{t("neuro.empty")}</p>
        ) : (
          <p className="mt-6 text-center">
            <Link to="/substances" className="text-clay-500 font-semibold text-sm">
              {t("neuro.library")}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
