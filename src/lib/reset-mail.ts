import { MAIL_BODY, MAIL_MUTED, mailCta, wrapBrandedMail } from "@/lib/mail-brand";

export function renderResetEmail(opts: {
  locale: "fr" | "en";
  link: string;
  kind: "reset" | "confirm";
}) {
  const fr = opts.locale !== "en";
  const title =
    opts.kind === "confirm"
      ? fr
        ? "Confirmez le changement de mot de passe"
        : "Confirm your password change"
      : fr
        ? "Réinitialisez votre mot de passe"
        : "Reset your password";
  const lead =
    opts.kind === "confirm"
      ? fr
        ? "Une demande de changement de mot de passe a été faite sur votre compte TakoLogs. Validez-la avec le bouton ci-dessous. Si ce n’était pas vous, ignorez ce message."
        : "A password change was requested on your TakoLogs account. Confirm it with the button below. If this wasn’t you, ignore this message."
      : fr
        ? "Vous avez demandé à réinitialiser votre mot de passe TakoLogs. Le lien expire dans une heure."
        : "You asked to reset your TakoLogs password. This link expires in one hour.";
  const cta = fr ? "Valider et choisir un mot de passe" : "Confirm and set a password";
  const inner = `
    <p style="font-family:${MAIL_BODY};font-size:16px;line-height:1.6;color:${MAIL_MUTED};text-align:center;margin:18px 0;">${lead}</p>
    <p style="text-align:center;margin:22px 0 8px;">${mailCta(opts.link, cta)}</p>
    <p style="font-family:${MAIL_BODY};font-size:12px;color:${MAIL_MUTED};text-align:center;word-break:break-all;">${opts.link}</p>
  `;
  return wrapBrandedMail({ lang: fr ? "fr" : "en", title, inner, preheader: lead });
}

export function resetSubject(locale: "fr" | "en", kind: "reset" | "confirm") {
  if (kind === "confirm") {
    return locale === "en" ? "Confirm your TakoLogs password" : "Confirmez votre mot de passe TakoLogs";
  }
  return locale === "en" ? "Reset your TakoLogs password" : "Réinitialisez votre mot de passe TakoLogs";
}
