import { renderResetEmail, resetSubject } from "@/lib/reset-mail";
import { hashPass, loadUsers, saveUsers } from "@/lib/user-store";

const TOKEN_KEY = "takologs-reset-tokens";
const OUTBOX_KEY = "takologs-mail-outbox";
const SIGNUP_HITS = "takologs-signup-hits";

export type ResetToken = {
  token: string;
  email: string;
  exp: number;
  kind: "reset" | "confirm";
  nextHash?: string;
};

export type OutboxMail = {
  id: string;
  to: string;
  subject: string;
  html: string;
  at: number;
};

function randomToken() {
  const a = new Uint8Array(24);
  crypto.getRandomValues(a);
  return [...a].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function readTokens(): ResetToken[] {
  try {
    const raw = localStorage.getItem(TOKEN_KEY);
    const list = raw ? (JSON.parse(raw) as ResetToken[]) : [];
    const now = Date.now();
    return Array.isArray(list) ? list.filter((t) => t.exp > now) : [];
  } catch {
    return [];
  }
}

function writeTokens(list: ResetToken[]) {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(list));
}

export function readOutbox(): OutboxMail[] {
  try {
    const raw = localStorage.getItem(OUTBOX_KEY);
    const list = raw ? (JSON.parse(raw) as OutboxMail[]) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export function consumeOutbox(id: string) {
  const next = readOutbox().filter((m) => m.id !== id);
  localStorage.setItem(OUTBOX_KEY, JSON.stringify(next));
}

export function queueOutbox(mail: OutboxMail) {
  const box = [mail, ...readOutbox()].slice(0, 8);
  localStorage.setItem(OUTBOX_KEY, JSON.stringify(box));
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("takologs-mail", { detail: mail }));
  }
}

function resetLink(token: string) {
  const ftp = import.meta.env.VITE_FTP === "1";
  if (typeof window === "undefined") return `/reset?token=${token}`;
  if (ftp) {
    const base = window.location.href.split("#")[0];
    return `${base}#/reset?token=${encodeURIComponent(token)}`;
  }
  return `${window.location.origin}/reset?token=${encodeURIComponent(token)}`;
}

export async function requestPasswordReset(opts: {
  email: string;
  locale: "fr" | "en";
  kind?: "reset" | "confirm";
  nextPassword?: string;
}) {
  const email = opts.email.trim().toLowerCase();
  const users = loadUsers();
  const exists = users.some((u) => u.email.toLowerCase() === email);
  if (exists) {
    const token = randomToken();
    const list = readTokens().filter((t) => t.email !== email);
    list.push({
      token,
      email,
      exp: Date.now() + 60 * 60 * 1000,
      kind: opts.kind ?? "reset",
      nextHash: opts.nextPassword ? hashPass(email, opts.nextPassword) : undefined,
    });
    writeTokens(list);
    const kind = opts.kind ?? "reset";
    const html = renderResetEmail({ locale: opts.locale, link: resetLink(token), kind });
    const subject = resetSubject(opts.locale, kind);
    const mail: OutboxMail = {
      id: token.slice(0, 12),
      to: email,
      subject,
      html,
      at: Date.now(),
    };
    queueOutbox(mail);
    const { deliverMail } = await import("@/lib/mail-brand");
    await deliverMail({ to: email, subject, html });
  }
  return { ok: true as const };
}

export function applyResetToken(token: string, newPassword?: string) {
  const list = readTokens();
  const row = list.find((t) => t.token === token);
  if (!row) return { ok: false as const, error: "expired" };
  const users = loadUsers();
  const u = users.find((x) => x.email.toLowerCase() === row.email.toLowerCase());
  if (!u) return { ok: false as const, error: "invalid" };
  if (row.nextHash) {
    u.pass = row.nextHash;
  } else {
    if (!newPassword || newPassword.length < 6) return { ok: false as const, error: "password" };
    u.pass = hashPass(u.email, newPassword);
  }
  saveUsers(users);
  writeTokens(list.filter((t) => t.token !== token));
  return { ok: true as const, email: u.email };
}

export function signupAllowed() {
  try {
    const raw = sessionStorage.getItem(SIGNUP_HITS);
    const hits = raw ? (JSON.parse(raw) as number[]) : [];
    const now = Date.now();
    const recent = hits.filter((t) => now - t < 6 * 60 * 60 * 1000);
    if (recent.length >= 8) return false;
    recent.push(now);
    sessionStorage.setItem(SIGNUP_HITS, JSON.stringify(recent));
    return true;
  } catch {
    return true;
  }
}
