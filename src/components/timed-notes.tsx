import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { EmojiPicker } from "@/components/emoji-picker";
import { localDateTimeInput, type TimedNote } from "@/lib/journal";
import { uuid } from "@/lib/uuid";
import { useI18n } from "@/lib/i18n";

const COLORS = ["#c9704f", "#c99a2e", "#3d8a5f", "#5b74d4", "#c45a9a", "#c9493f", "#4a8f7a"];

export function TimedNotes({
  notes,
  onChange,
}: {
  notes: TimedNote[];
  onChange: (next: TimedNote[]) => void;
}) {
  const { t, dateTag } = useI18n();
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState("📝");
  const [color, setColor] = useState(COLORS[0]);
  const [time, setTime] = useState(localDateTimeInput);

  const add = () => {
    const body = text.trim();
    if (!body) return;
    const iso = new Date(time).toISOString();
    onChange(
      [...notes, { id: uuid(), time: iso, text: body, color, emoji }].sort(
        (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime(),
      ),
    );
    setText("");
  };

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-sand-600 dark:text-sand-300">{t("editor.timedNotes")}</p>
      <div className="space-y-2">
        {notes.map((n) => (
          <div
            key={n.id}
            className="flex items-start gap-2 rounded-xl p-2.5"
            style={{ background: `${n.color}22`, borderLeft: `3px solid ${n.color}` }}
          >
            <span className="text-lg leading-none">{n.emoji}</span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold" style={{ color: n.color }}>
                {new Date(n.time).toLocaleString(dateTag, {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "numeric",
                  month: "short",
                })}
              </p>
              <p className="text-sm text-sand-800 dark:text-sand-100 whitespace-pre-wrap">{n.text}</p>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-full p-1 text-sand-400 hover:text-red-500"
              onClick={() => onChange(notes.filter((x) => x.id !== n.id))}
              aria-label={t("common.delete")}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
      <div className="glass rounded-2xl p-3 space-y-2">
        <div className="flex items-center gap-2">
          <EmojiPicker value={emoji} onChange={setEmoji} />
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="flex-1 rounded-xl glass px-2 py-2 text-xs outline-none text-sand-900 dark:text-sand-50"
          />
        </div>
        <div className="flex gap-1.5">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              className="h-6 w-6 rounded-full border-2"
              style={{
                background: c,
                borderColor: color === c ? "white" : "transparent",
                boxShadow: color === c ? `0 0 0 2px ${c}` : undefined,
              }}
            />
          ))}
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={2}
          placeholder={t("editor.timedNotesPh")}
          className="w-full rounded-xl glass px-3 py-2 text-sm outline-none resize-none text-sand-900 dark:text-sand-50"
        />
        <button
          type="button"
          onClick={add}
          className="inline-flex items-center gap-1 rounded-full bg-clay-500 text-white px-3 py-1.5 text-xs font-semibold"
        >
          <Plus className="h-3.5 w-3.5" /> {t("editor.addNote")}
        </button>
      </div>
    </div>
  );
}
