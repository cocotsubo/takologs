import { Mail, X } from "lucide-react";
import { useEffect, useState } from "react";
import { consumeOutbox, type OutboxMail } from "@/lib/password-reset";
import { useI18n } from "@/lib/i18n";

export function MailOutboxHost() {
  const { t } = useI18n();
  const [mail, setMail] = useState<OutboxMail | null>(null);

  useEffect(() => {
    const on = (e: Event) => {
      const m = (e as CustomEvent<OutboxMail>).detail;
      if (m) setMail(m);
    };
    window.addEventListener("takologs-mail", on);
    return () => window.removeEventListener("takologs-mail", on);
  }, []);

  if (!mail) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm p-4 flex items-center justify-center">
      <div className="w-full max-w-lg glass-strong rounded-3xl overflow-hidden max-h-[88vh] flex flex-col">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-sand-300/30">
          <Mail className="h-4 w-4 text-clay-500" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-heading font-semibold text-clay-500 truncate">{mail.subject}</p>
            <p className="text-[11px] text-sand-500 truncate">{mail.to}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              consumeOutbox(mail.id);
              setMail(null);
            }}
            className="rounded-full p-1.5 text-sand-400"
            aria-label={t("common.close")}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <iframe title={mail.subject} srcDoc={mail.html} className="w-full flex-1 min-h-[22rem] bg-white" />
      </div>
    </div>
  );
}
