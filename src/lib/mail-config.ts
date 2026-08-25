const KEY = "takologs-resend";

export type MailConfig = {
  apiKey: string;
  from: string;
};

export const DEFAULT_MAIL_FROM = "TakoLogs <noreply@mail.takohelp.com>";

export function loadMailConfig(): MailConfig {
  try {
    const raw = localStorage.getItem(KEY);
    const c = raw ? (JSON.parse(raw) as MailConfig) : null;
    return {
      apiKey: typeof c?.apiKey === "string" && c.apiKey.trim() ? c.apiKey : "re_FpC8UF4k_M1YadrZmVCvQT9B8dBqhHGqH",
      from: typeof c?.from === "string" && c.from.trim() ? c.from : DEFAULT_MAIL_FROM,
    };
  } catch {
    return { apiKey: "", from: DEFAULT_MAIL_FROM };
  }
}

export function saveMailConfig(cfg: MailConfig) {
  localStorage.setItem(
    KEY,
    JSON.stringify({
      apiKey: cfg.apiKey.trim(),
      from: cfg.from.trim() || DEFAULT_MAIL_FROM,
    }),
  );
}
