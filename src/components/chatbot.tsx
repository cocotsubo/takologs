import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Bot, Camera, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { helpText, isHelpIntent } from "@/lib/chat-help";
import { executeChatAction, journalDigest, runLocalAgent } from "@/lib/chat-agent";
import { sendChat } from "@/lib/chat-api";
import { answerOffline, withTimeout } from "@/lib/chat-offline";
import { grokFromBrowser } from "@/lib/grok-browser";
import { extractChatAction, humanizeChatText, looksLikeAdd, looksLikeNav, looksLikeTheme } from "@/lib/chat-parse";
import type { ChatAction, ChatMsg, ChatReply } from "@/lib/chat-types";
import { actionDoses } from "@/lib/chat-types";
import { estimateDosePhoto } from "@/lib/dose-vision";
import { useI18n } from "@/lib/i18n";
import { pushToast } from "@/lib/notify";

export const OPEN_CHAT_EVENT = "takologs-open-chat";
const STORE = "takologs-chat";

export function requestOpenChat() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("takologs-open-search", { detail: "" }));
}

type Bubble = ChatMsg & { action?: ChatAction; source?: string; logId?: string; image?: string };

function readStore(): Bubble[] {
  try {
    const raw = sessionStorage.getItem(STORE);
    return raw ? (JSON.parse(raw) as Bubble[]) : [];
  } catch {
    return [];
  }
}

async function askGrok(messages: ChatMsg[], locale: "fr" | "en"): Promise<ChatReply> {
  const last = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
  if (isHelpIntent(last)) {
    return { ok: true, handled: true, source: "local", text: helpText(locale) };
  }
  const local = await runLocalAgent(last, locale);
  const localAdd = local.handled && local.action?.kind === "add" && looksLikeAdd(last);
  if (localAdd) return local;
  if (local.handled && local.action && local.action.kind !== "stats" && local.action.kind !== "add") return local;
  try {
    const digest = await journalDigest(locale);
    const grok = await withTimeout(grokFromBrowser({ messages, locale, digest }), 22000);
    const r =
      grok?.ok && grok.text
        ? grok
        : import.meta.env.VITE_FTP
          ? undefined
          : await withTimeout(sendChat({ data: { messages, locale, digest } }), 12000);
    if (r?.ok && (r.text || r.action)) {
      let action = r.action ?? extractChatAction(r.text);
      if (action?.kind === "add" && !looksLikeAdd(last)) action = undefined;
      if (action?.kind === "theme" && !looksLikeTheme(last)) action = undefined;
      if (action?.kind === "navigate" && !looksLikeNav(last)) action = undefined;
      const allowed =
        action &&
        ((action.kind === "add" && looksLikeAdd(last)) ||
          (action.kind === "theme" && looksLikeTheme(last)) ||
          (action.kind === "navigate" && looksLikeNav(last)));
      if (allowed && action) {
        const done = await executeChatAction(action, locale, last);
        if (done.handled) {
          return { ...done, text: done.text || humanizeChatText(r.text, locale, action) };
        }
      }
      const text = humanizeChatText(r.text, locale, action);
      if (text.trim()) {
        return {
          ...r,
          action: action?.kind === "add" && !looksLikeAdd(last) ? undefined : action,
          text,
        };
      }
    }
  } catch {
    /* static host / no Grok */
  }
  if (local.handled) return local;
  return answerOffline(last, locale);
}

export function Thread({
  messages,
  busy,
  onRun,
  running,
  onOpenLog,
}: {
  messages: Bubble[];
  busy: boolean;
  onRun: (a: ChatAction) => void;
  running: boolean;
  onOpenLog?: (id: string) => void;
}) {
  const { t } = useI18n();
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);
  return (
    <div className="flex-1 overflow-y-auto space-y-3 pr-1">
      {messages.length === 0 ? (
        <div className="text-center py-8 px-4">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-clay-500/15 text-clay-500 flex items-center justify-center">
            <Bot className="h-6 w-6" />
          </div>
          <p className="mt-3 font-heading font-bold text-sand-900 dark:text-sand-50">
            {t("chat.hello")}
          </p>
          <p className="mt-1 text-sm text-sand-500">{t("chat.helloBody")}</p>
        </div>
      ) : null}
      {messages.map((m, i) => (
        <div
          key={`${m.role}-${i}`}
          className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
              m.role === "user"
                ? "bg-clay-500 text-white rounded-br-md"
                : "glass text-sand-800 dark:text-sand-100 rounded-bl-md"
            }`}
          >
            {m.image ? (
              <img
                src={m.image}
                alt=""
                className="mb-2 max-h-36 w-full rounded-xl object-cover"
              />
            ) : null}
            {m.content}
            {m.action && !m.logId ? (
              <button
                type="button"
                disabled={running}
                onClick={() => onRun(m.action!)}
                className="mt-2 w-full rounded-full bg-clay-500 text-white py-1.5 text-xs font-semibold disabled:opacity-60"
              >
                {t("ai.run")} · {m.action.dose ?? ""} {m.action.unit} {m.action.substanceName}
              </button>
            ) : null}
            {m.logId && onOpenLog ? (
              <button
                type="button"
                onClick={() => onOpenLog(m.logId!)}
                className="mt-2 w-full rounded-full bg-clay-500 text-white py-1.5 text-xs font-semibold"
              >
                {t("chat.seeLog")}
              </button>
            ) : null}
          </div>
        </div>
      ))}
      {busy ? <p className="text-xs text-sand-400 px-1">{t("common.loading")}</p> : null}
      <div ref={endRef} />
    </div>
  );
}

function Composer({
  onSend,
  onPhoto,
  disabled,
  suggestions,
}: {
  onSend: (t: string) => void;
  onPhoto?: (f: Blob) => void;
  disabled: boolean;
  suggestions: string[];
}) {
  const { t } = useI18n();
  const [q, setQ] = useState("");
  const camRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      {suggestions.length ? (
        <div className="flex flex-wrap gap-1.5 mb-2">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onSend(s)}
              className="rounded-full glass px-3 py-1.5 text-xs font-semibold text-sand-700 dark:text-sand-200"
            >
              {s}
            </button>
          ))}
        </div>
      ) : null}
      <form
        className="flex items-end gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const v = q.trim();
          if (!v || disabled) return;
          setQ("");
          onSend(v);
        }}
      >
        {onPhoto ? (
          <>
            <button
              type="button"
              disabled={disabled}
              onClick={() => camRef.current?.click()}
              className="h-11 w-11 rounded-full glass flex items-center justify-center text-clay-500 disabled:opacity-40"
              aria-label={t("chat.photo")}
              title={t("chat.photo")}
            >
              <Camera className="h-4 w-4" />
            </button>
            <input
              ref={camRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="sr-only"
              onChange={(e) => {
                const f = e.target.files?.[0];
                e.target.value = "";
                if (f) onPhoto(f);
              }}
            />
          </>
        ) : null}
        <textarea
          value={q}
          rows={1}
          disabled={disabled}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              const v = q.trim();
              if (!v || disabled) return;
              setQ("");
              onSend(v);
            }
          }}
          placeholder={t("chat.placeholder")}
          className="flex-1 resize-none rounded-2xl glass px-3.5 py-2.5 text-sm outline-none text-sand-900 dark:text-sand-50 max-h-28"
        />
        <button
          type="submit"
          disabled={disabled || !q.trim()}
          className="h-11 w-11 rounded-full bg-clay-500 text-white flex items-center justify-center disabled:opacity-40 hover:scale-105 transition-transform"
          aria-label={t("chat.send")}
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
      <p className="mt-1.5 text-[10px] text-sand-400">{t("chat.disclaimer")}</p>
      {onPhoto ? <p className="text-[10px] text-sand-400">{t("chat.photoHint")}</p> : null}
    </div>
  );
}

export function useChat() {
  const { locale, t } = useI18n();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Bubble[]>(() =>
    typeof window === "undefined" ? [] : readStore(),
  );
  const [busy, setBusy] = useState(false);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    try {
      sessionStorage.setItem(
        STORE,
        JSON.stringify(messages.slice(-24).map(({ image, ...m }) => m)),
      );
    } catch {
      /* ignore */
    }
  }, [messages]);

  const send = async (text: string) => {
    const user: Bubble = { role: "user", content: text };
    const next = [...messages, user];
    setMessages(next);
    setBusy(true);
    try {
      const loc = locale === "en" ? "en" : "fr";
      const r = await askGrok(
        next.map(({ role, content }) => ({ role, content })),
        loc,
      );
      const content = (r.text || t("chat.empty")).trim() || t("chat.empty");
      const action = r.handled ? undefined : r.action;
      if (r.path) void navigate({ to: r.path as "/" });
      if (r.handled && r.logId) {
        const doses = r.action ? actionDoses(r.action) : [];
        pushToast({
          title: t("ai.done"),
          body: doses.map((d) => `${d.dose ?? ""} ${d.unit} ${d.substanceName}`.trim()).join(", "),
        });
      }
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content, action, logId: r.logId, source: r.source },
      ]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: t("chat.error") }]);
    } finally {
      setBusy(false);
    }
  };

  const sendPhoto = async (file: Blob) => {
    const loc = locale === "en" ? "en" : "fr";
    const user: Bubble = {
      role: "user",
      content: t("chat.photo"),
    };
    setMessages((prev) => [...prev, user]);
    setBusy(true);
    try {
      const r = await estimateDosePhoto(file, loc);
      setMessages((prev) => {
        const next = [...prev];
        for (let i = next.length - 1; i >= 0; i--) {
          if (next[i].role === "user") {
            next[i] = { ...next[i], image: r.preview };
            break;
          }
        }
        next.push({ role: "assistant", content: r.text, action: r.action, source: "grok" });
        return next;
      });
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: t("chat.photoFail") }]);
    } finally {
      setBusy(false);
    }
  };

  const run = async (action: ChatAction) => {
    setRunning(true);
    try {
      const loc = locale === "en" ? "en" : "fr";
      const r = await executeChatAction(action, loc);
      if (r.logId) pushToast({ title: t("ai.done") });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: r.text || t("ai.done"), logId: r.logId, source: r.source },
      ]);
    } finally {
      setRunning(false);
    }
  };

  const openLog = (id: string) => {
    void navigate({ to: "/logs/$id", params: { id } });
  };

  const clear = () => {
    setMessages([]);
    try {
      sessionStorage.removeItem(STORE);
    } catch {
      /* ignore */
    }
  };

  return { messages, busy, running, send, sendPhoto, run, openLog, clear };
}

export function ChatPagePanel() {
  const { t } = useI18n();
  const chat = useChat();
  const suggestions = [t("chat.s1"), t("chat.s2"), t("chat.s3")];
  return (
    <div className="flex flex-col min-h-[28rem] max-h-[70vh]">
      <div className="flex justify-end mb-2">
        <button type="button" onClick={chat.clear} className="text-xs font-semibold text-sand-400">
          {t("chat.clear")}
        </button>
      </div>
      <Thread
        messages={chat.messages}
        busy={chat.busy}
        onRun={chat.run}
        running={chat.running}
        onOpenLog={chat.openLog}
      />
      <Composer
        onSend={chat.send}
        onPhoto={chat.sendPhoto}
        disabled={chat.busy}
        suggestions={chat.messages.length ? [] : suggestions}
      />
    </div>
  );
}

export function ChatDock() {
  const { t } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const chat = useChat();
  const suggestions = [t("chat.s1"), t("chat.s2"), t("chat.s3")];
  const hidden =
    pathname === "/login" || pathname === "/chat" || pathname === "/profile" || pathname === "/reset";
  if (hidden) return null;
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden"
        aria-hidden
      >
        <Sparkles className="h-4 w-4" />
      </button>
      {open ? (
        <div className="fixed inset-0 z-[100] bg-black/40 flex items-end sm:items-center justify-center p-3">
          <div className="w-full max-w-lg glass-strong glass-modal rounded-3xl p-4 max-h-[80vh] flex flex-col">
            <div className="flex justify-between mb-2">
              <p className="font-heading font-bold">{t("chat.title")}</p>
              <button type="button" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
              </button>
            </div>
            <ChatPagePanel />
          </div>
        </div>
      ) : null}
    </>
  );
}
