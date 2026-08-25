import {
  MAIL_BODY,
  MAIL_HEAD,
  MAIL_INK,
  MAIL_MUTED,
  MAIL_SAND,
  deliverMail,
  mailCta,
  wrapBrandedMail,
} from "@/lib/mail-brand";

function siteLink() {
  if (typeof window === "undefined") return "https://takohelp.com/";
  const ftp = import.meta.env.VITE_FTP === "1";
  if (ftp) return `${window.location.href.split("#")[0]}#/`;
  return `${window.location.origin}/`;
}

function shotUrl(file: string) {
  if (typeof window === "undefined") return `https://takohelp.com/mail/${file}`;
  const origin = window.location.origin;
  if (!origin || origin.startsWith("file:")) return `https://takohelp.com/mail/${file}`;
  const base = origin.replace(/\/$/, "");
  return `${base}/mail/${file}`;
}

function block(opts: {
  kicker: string;
  title: string;
  body: string;
  shot: string;
  alt: string;
  highlight?: boolean;
}) {
  return `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 22px;">
      <tr>
        <td>
          <p style="margin:0 0 4px;font-family:${MAIL_HEAD};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${MAIL_SAND};font-weight:700;">${opts.kicker}</p>
          <h2 style="margin:0 0 8px;font-family:${MAIL_HEAD};font-size:20px;line-height:1.25;color:${opts.highlight ? MAIL_SAND : MAIL_INK};font-weight:700;">${opts.title}</h2>
          <p style="margin:0 0 12px;font-family:${MAIL_BODY};font-size:15px;line-height:1.6;color:${MAIL_MUTED};">${opts.body}</p>
          <img src="${opts.shot}" alt="${opts.alt}" width="496" style="display:block;width:100%;max-width:496px;height:auto;border-radius:18px;border:1px solid #e4d5b8;" />
        </td>
      </tr>
    </table>`;
}

export function renderWelcomeEmail(opts: { locale: "fr" | "en"; newsletter: boolean }) {
  const fr = opts.locale !== "en";
  const title = fr ? "Bienvenue sur TakoLogs" : "Welcome to TakoLogs";
  const lead = fr
    ? "Ton journal privé est prêt. Voici, écran par écran, ce que TakoLogs sait faire — avec TakoAI au centre."
    : "Your private journal is ready. Here’s TakoLogs, screen by screen — with TakoAI at the centre.";
  const sections = fr
    ? [
        {
          kicker: "Assistant",
          title: "TakoAI",
          body: "La barre « Demander à TakoAI quelque chose » (⌘K) n’est pas qu’une recherche. Pose une question, change la couleur du site, demande tes stats, ou dicte une action : « ajoute 100 mg de MDMA à ma dernière expérience ». TakoAI lit le journal et exécute.",
          shot: shotUrl("takoai.jpg"),
          alt: "TakoAI — barre de recherche et chat",
          highlight: true,
        },
        {
          kicker: "Journal",
          title: "Logs & timeline",
          body: "Chaque expérience porte la date du jour. Le + ajoute à la session en cours (sauf si c’est un autre jour). Doses, ressenti, échelle de Shulgin, médias, courbe montée / pic / descente, et interactions dangereuses entre substances.",
          shot: shotUrl("journal.jpg"),
          alt: "Journal — expérience du jour et courbe",
        },
        {
          kicker: "Savoir",
          title: "Fiches substances",
          body: "Dosages (seuil → lourd), durées vérifiées sur PsychonautWiki, neurotransmetteurs animés, structure moléculaire, favoris, emoji et couleur perso. Un lien vers la fiche PsychonautWiki pour aller plus loin.",
          shot: shotUrl("fiches.jpg"),
          alt: "Fiche substance MDMA",
        },
        {
          kicker: "Veille",
          title: "Alertes labo",
          body: "Les dernières analyses (Druglab, SINTES et autres labos) sur une année, avec les emojis des substances concernées. Un coup d’œil avant de consommer.",
          shot: shotUrl("alertes.jpg"),
          alt: "Page Alertes",
        },
        {
          kicker: "Réduction des risques",
          title: "Combinaisons, notifs, import",
          body: "Alertes de combo, pause après 3 prises, notifications de montée / pic / descente, import du journal PsychonautWiki (.JSON). Tes données restent sur l’appareil.",
          shot: shotUrl("rdr.jpg"),
          alt: "Réduction des risques",
        },
      ]
    : [
        {
          kicker: "Assistant",
          title: "TakoAI",
          body: "The “Ask TakoAI something” bar (⌘K) is not just search. Ask a question, change the theme, pull stats, or run an action: “add 100 mg of MDMA to my last experience”. TakoAI can read the journal and do it.",
          shot: shotUrl("takoai.jpg"),
          alt: "TakoAI search and chat",
          highlight: true,
        },
        {
          kicker: "Journal",
          title: "Logs & timeline",
          body: "Each experience is named with today’s date. + adds to the current session (unless it’s another day). Doses, feelings, Shulgin scale, media, onset/peak/offset curve, and dangerous interactions.",
          shot: shotUrl("journal.jpg"),
          alt: "Journal — today’s session and curve",
        },
        {
          kicker: "Knowledge",
          title: "Substance sheets",
          body: "Dose classes, PsychonautWiki-checked durations, animated neurotransmitters, molecular structure, favourites, custom emoji and color, plus a PsychonautWiki link.",
          shot: shotUrl("fiches.jpg"),
          alt: "MDMA substance sheet",
        },
        {
          kicker: "Watch",
          title: "Lab alerts",
          body: "Latest analyses (Druglab, SINTES and other labs) over a full year, with substance emojis. A glance before you consume.",
          shot: shotUrl("alertes.jpg"),
          alt: "Alerts page",
        },
        {
          kicker: "Harm reduction",
          title: "Combos, notifications, import",
          body: "Combo warnings, a pause after 3 ingestions, onset/peak/offset notifications, PsychonautWiki Journal import (.JSON). Data stays on-device.",
          shot: shotUrl("rdr.jpg"),
          alt: "Harm reduction",
        },
      ];

  const news = opts.newsletter
    ? fr
      ? "Tu es inscrit·e à la newsletter : actus RdR, alertes et nouveautés TakoAI, sans spam."
      : "You’re on the newsletter: harm-reduction news, alerts and TakoAI updates — no spam."
    : "";
  const cta = fr ? "Ouvrir TakoLogs et parler à TakoAI" : "Open TakoLogs and talk to TakoAI";
  const inner = `
    <p style="font-family:${MAIL_BODY};font-size:16px;line-height:1.6;color:${MAIL_MUTED};text-align:center;margin:18px 4px 28px;">${lead}</p>
    ${sections.map((s) => block(s)).join("")}
    ${news ? `<p style="font-family:${MAIL_BODY};font-size:14px;line-height:1.55;color:${MAIL_SAND};text-align:center;margin:8px 8px 6px;">${news}</p>` : ""}
    <p style="text-align:center;margin:24px 0 12px;">${mailCta(siteLink(), cta)}</p>
  `;
  return wrapBrandedMail({
    lang: fr ? "fr" : "en",
    title,
    inner,
    preheader: fr
      ? "TakoAI, journal, fiches, alertes — le tour du site, en images."
      : "TakoAI, journal, sheets, alerts — a visual tour.",
  });
}

export function welcomeSubject(locale: "fr" | "en") {
  return locale === "en" ? "Welcome to TakoLogs — meet TakoAI" : "Bienvenue sur TakoLogs — découvre TakoAI";
}

export async function sendWelcomeEmail(opts: {
  email: string;
  locale: "fr" | "en";
  newsletter: boolean;
}) {
  const to = opts.email.trim().toLowerCase();
  const html = renderWelcomeEmail(opts);
  const subject = welcomeSubject(opts.locale);
  try {
    const { queueOutbox } = await import("@/lib/password-reset");
    queueOutbox({
      id: `w-${Date.now().toString(36)}`,
      to,
      subject,
      html,
      at: Date.now(),
    });
  } catch {
    /* ignore */
  }
  return deliverMail({ to, subject, html });
}

export async function subscribeNewsletter(email: string, locale: "fr" | "en") {
  const key = email.trim().toLowerCase();
  if (!key.includes("@")) return { ok: false as const, error: "email" };
  try {
    const raw = localStorage.getItem("takologs-newsletter-list");
    const list = raw ? (JSON.parse(raw) as string[]) : [];
    const next = Array.from(new Set([key, ...(Array.isArray(list) ? list : [])]));
    localStorage.setItem("takologs-newsletter-list", JSON.stringify(next));
    const { loadUsers, saveUsers } = await import("@/lib/user-store");
    const users = loadUsers();
    const u = users.find((x) => x.email === key);
    if (u) {
      u.newsletter = true;
      saveUsers(users);
    }
  } catch {
    /* ignore */
  }
  return sendWelcomeEmail({ email: key, locale, newsletter: true });
}
