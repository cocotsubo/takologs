import { durableGet, durableRemove, durableSet } from "@/lib/durable-store";
import { uuid } from "@/lib/uuid";
import { hashPass, loadUsers, saveUsers, passwordMatches, findUserByEmail, upgradeUserPassword, type StoredUser } from "@/lib/user-store";
import { requestPasswordReset, applyResetToken, signupAllowed } from "@/lib/password-reset";

export const AUTH_EVENT = "takologs-ftp-auth";
const SESSION_KEY = "takologs-ftp-session";

export const authEnabled = true;
export const GROK_PROVIDERS: { providerId: string; idp: string; label: string }[] = [];

type SessionUser = {
  id: string;
  displayName: string | null;
  primaryEmail: string | null;
  profileImageUrl: string | null;
  isDevFallback: boolean;
};

function emit() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(AUTH_EVENT));
  }
}

export function readSessionUser(): SessionUser | null {
  try {
    const raw = durableGet(SESSION_KEY);
    if (!raw) return null;
    const u = JSON.parse(raw) as SessionUser;
    if (!u?.id) return null;
    return u;
  } catch {
    return null;
  }
}

function setSession(user: SessionUser | null) {
  if (user) durableSet(SESSION_KEY, JSON.stringify(user));
  else durableRemove(SESSION_KEY);
  emit();
}

export const authClient = {
  signUp: {
    email: async ({
      email,
      password,
      name,
      newsletter,
    }: {
      email: string;
      password: string;
      name?: string;
      newsletter?: boolean;
    }) => {
      if (!signupAllowed()) return { error: { message: "rate" } };
      const users = loadUsers();
      const key = email.trim().toLowerCase();
      if (users.some((u) => u.email === key)) {
        return { error: { message: "already registered" } };
      }
      if (password.length < 6) {
        return { error: { message: "password" } };
      }
      const user: StoredUser = {
        id: uuid(),
        email: key,
        name: name?.trim() || key.split("@")[0] || "TakoLogs",
        pass: hashPass(key, password),
        newsletter: Boolean(newsletter),
        createdAt: Date.now(),
      };
      users.push(user);
      saveUsers(users);
      try {
        const { syncUserToServer } = await import("@/lib/admin");
        syncUserToServer(user);
      } catch {
        /* ignore */
      }
      return { error: null };
    },
  },
  signIn: {
    email: async ({ email, password }: { email: string; password: string }) => {
      const key = email.trim().toLowerCase();
      const user = findUserByEmail(key);
      if (!user || !passwordMatches(user, password)) {
        return { error: { message: "invalid credentials" } };
      }
      if (user.banned) return { error: { message: "banned" } };
      upgradeUserPassword(user, password);
      try {
        const users = loadUsers();
        const row = users.find((x) => x.id === user.id || x.email === key);
        if (row) {
          row.lastLogin = Date.now();
          saveUsers(users);
        }
      } catch {
        /* ignore */
      }
      setSession({
        id: user.id,
        displayName: user.name,
        primaryEmail: key,
        profileImageUrl: null,
        isDevFallback: false,
      });
      return { error: null };
    },
  },
  changePassword: async ({
    currentPassword,
    newPassword,
  }: {
    currentPassword: string;
    newPassword: string;
  }) => {
    const session = readSessionUser();
    if (!session?.primaryEmail) return { error: { message: "invalid credentials" } };
    const key = session.primaryEmail.toLowerCase();
    const u = findUserByEmail(key);
    if (!u || !passwordMatches(u, currentPassword)) {
      return { error: { message: "invalid credentials" } };
    }
    if (newPassword.length < 6) return { error: { message: "password" } };
    await requestPasswordReset({
      email: key,
      locale: "fr",
      kind: "confirm",
      nextPassword: newPassword,
    });
    return { error: null, pendingMail: true };
  },
  requestPasswordReset: async ({ email, locale }: { email: string; locale?: "fr" | "en" }) => {
    await requestPasswordReset({ email, locale: locale === "en" ? "en" : "fr", kind: "reset" });
    return { error: null };
  },
  confirmPasswordReset: async ({ token, newPassword }: { token: string; newPassword?: string }) => {
    const r = applyResetToken(token, newPassword);
    if (!r.ok) return { error: { message: r.error } };
    return { error: null };
  },
  resetPassword: async ({ email }: { email: string; newPassword?: string }) => {
    await requestPasswordReset({ email, locale: "fr", kind: "reset" });
    return { error: null };
  },
  changeEmail: async ({ email }: { email: string }) => {
    const session = readSessionUser();
    if (!session) return { error: { message: "invalid credentials" } };
    const key = email.trim().toLowerCase();
    if (!key.includes("@")) return { error: { message: "invalid" } };
    const users = loadUsers();
    const u = users.find((x) => x.id === session.id);
    if (!u) return { error: { message: "invalid credentials" } };
    if (users.some((x) => x.email === key && x.id !== u.id)) {
      return { error: { message: "already registered" } };
    }
    u.email = key;
    saveUsers(users);
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ ...session, primaryEmail: key }),
    );
    emit();
    return { error: null };
  },
};

export async function signIn() {
  return { error: { message: "Provider indisponible hors HTTPS" } };
}

export async function signOut() {
  setSession(null);
}
