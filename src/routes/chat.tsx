import { createFileRoute } from "@tanstack/react-router";
import { Bot } from "lucide-react";
import { ChatPagePanel } from "@/components/chatbot";
import { PageHero } from "@/components/ui-bits";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/chat")({ component: ChatPage });

export function ChatPage() {
  const { t } = useI18n();
  return (
    <div className="px-4 py-10 pb-28">
      <div className="mx-auto max-w-2xl space-y-4">
        <PageHero
          kicker={t("chat.kicker")}
          icon={<Bot className="h-3.5 w-3.5" />}
          title={t("chat.title")}
          subtitle={t("chat.subtitle")}
        />
        <div className="glass-strong rounded-[1.75rem] p-4 sm:p-5">
          <ChatPagePanel />
        </div>
      </div>
    </div>
  );
}
