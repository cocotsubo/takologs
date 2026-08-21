import { AlertTriangle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function RiskDialog({
  kind,
  name,
  extra,
  onClose,
}: {
  kind: "lethal" | "mix" | "heavy";
  name?: string;
  extra?: string;
  onClose: () => void;
}) {
  const { t } = useI18n();
  const title =
    kind === "lethal" ? t("risk.lethalTitle") : kind === "mix" ? t("risk.mixTitle") : t("risk.heavyTitle");
  const body =
    kind === "lethal"
      ? t("risk.lethalBody", { name: name || "—" })
      : kind === "mix"
        ? t("risk.mixBody", { pair: extra || "" })
        : t("risk.heavyBody", { name: name || "—" });
  return (
    <div
      className="fixed inset-0 z-[120] bg-sand-200/55 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className="w-full max-w-md glass-strong glass-modal rounded-3xl p-5 space-y-3"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-heading text-lg font-bold text-red-700 dark:text-red-300 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" /> {title}
        </p>
        <p className="text-sm text-sand-800 dark:text-sand-100 leading-relaxed">{body}</p>
        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-full bg-clay-500 text-white py-2.5 text-sm font-semibold"
        >
          {t("risk.ok")}
        </button>
      </div>
    </div>
  );
}
