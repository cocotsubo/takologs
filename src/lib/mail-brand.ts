import { takoLogoSvgHex } from "@/components/tako-logo";

export const MAIL_BG = "#efe6d4";
export const MAIL_CARD = "#f8f3ea";
export const MAIL_INK = "#5c4a2c";
export const MAIL_MUTED = "#7a6343";
export const MAIL_SAND = "#6b5840";
export const MAIL_CREAM = "#f8f3ea";
export const MAIL_LINE = "#e4d5b8";
export const MAIL_HEAD = "'Josefin Sans', 'Avenir Next', Avenir, sans-serif";
export const MAIL_BODY = "'Avenir Next', Avenir, 'Nunito Sans', Georgia, sans-serif";

export function wrapBrandedMail(opts: {
  lang: "fr" | "en";
  title: string;
  preheader?: string;
  inner: string;
}) {
  const logo = takoLogoSvgHex(MAIL_SAND, "#3d3224");
  const bye =
    opts.lang === "en"
      ? "The TakoLogs team — harm reduction, private journal."
      : "L’équipe TakoLogs — réduction des risques, journal privé.";
  return `<!doctype html>
<html lang="${opts.lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Nunito+Sans:wght@400;600&display=swap" rel="stylesheet" />
  <title>${opts.title}</title>
</head>
<body style="margin:0;padding:0;background:${MAIL_BG};color:${MAIL_INK};font-family:${MAIL_BODY};">
  ${opts.preheader ? `<div style="display:none;max-height:0;overflow:hidden">${opts.preheader}</div>` : ""}
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${MAIL_BG};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellspacing="0" cellpadding="0" style="max-width:560px;width:100%;background:${MAIL_CARD};border-radius:28px;overflow:hidden;border:1px solid ${MAIL_LINE};">
          <tr>
            <td style="padding:32px 32px 8px;text-align:center;">
              <div style="width:72px;height:72px;margin:0 auto 10px;">${logo}</div>
              <p style="margin:0;font-family:${MAIL_HEAD};font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:${MAIL_SAND};font-weight:700;">TakoLogs</p>
              <h1 style="margin:14px 0 0;font-family:${MAIL_HEAD};font-size:28px;line-height:1.2;color:${MAIL_INK};font-weight:700;">${opts.title}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 8px;">${opts.inner}</td>
          </tr>
          <tr>
            <td style="padding:8px 32px 28px;font-family:${MAIL_BODY};font-size:12px;color:${MAIL_MUTED};text-align:center;border-top:1px solid ${MAIL_LINE};">
              <p style="margin:18px 0 0;">${bye}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function mailCta(href: string, label: string) {
  return `<a href="${href}" style="display:inline-block;background:${MAIL_SAND};color:${MAIL_CREAM};text-decoration:none;font-family:${MAIL_HEAD};font-weight:700;font-size:16px;padding:14px 28px;border-radius:999px;">${label}</a>`;
}

export async function deliverMail(opts: { to: string; subject: string; html: string }) {
  try {
    const { loadMailConfig, DEFAULT_MAIL_FROM } = await import("@/lib/mail-config");
    const cfg = loadMailConfig();
    const { sendAppMail } = await import("@/lib/mail-api");
    return await sendAppMail({
      data: {
        to: opts.to,
        subject: opts.subject,
        html: opts.html,
        apiKey: cfg.apiKey || undefined,
        from: cfg.from || DEFAULT_MAIL_FROM,
      },
    });
  } catch {
    return { ok: false as const, error: "send" };
  }
}
