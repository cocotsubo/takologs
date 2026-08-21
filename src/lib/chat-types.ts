export type ChatRole = "user" | "assistant";
export type ChatMsg = { role: ChatRole; content: string };

export type ChatDose = {
  substanceName: string;
  dose: number | null;
  unit: string;
  route: string;
};

export type ChatAction = {
  kind: "add" | "theme" | "navigate" | "stats";
  substanceName?: string;
  dose?: number | null;
  unit?: string;
  route?: string;
  items?: ChatDose[];
  title?: string;
  hue?: number;
  theme?: "light" | "dark" | "auto";
  path?: string;
};

export type ChatReply = {
  ok: boolean;
  text: string;
  action?: ChatAction;
  error?: string;
  source?: "grok" | "local";
  logId?: string;
  handled?: boolean;
  path?: string;
};

export function actionDoses(a: ChatAction): ChatDose[] {
  if (a.items && a.items.length > 0) return a.items;
  if (a.substanceName) {
    return [
      {
        substanceName: a.substanceName,
        dose: a.dose ?? null,
        unit: a.unit ?? "mg",
        route: a.route ?? "Orale",
      },
    ];
  }
  return [];
}
