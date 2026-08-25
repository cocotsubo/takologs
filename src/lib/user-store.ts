import { durableGet, durableSet } from "@/lib/durable-store";

export type StoredUser = {
  id: string;
  email: string;
  name: string;
  pass: string;
  newsletter?: boolean;
  password?: string;
  createdAt?: number;
  lastLogin?: number;
  notes?: string;
  banned?: boolean;
};

const USER_KEYS = ["takologs-ftp-users", "takologs-users", "takologs-accounts"];

function fnv1a(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16);
}

export function hashPass(email: string, password: string) {
  return fnv1a(`${email.trim().toLowerCase()}\0${password}\0takologs`);
}

export function passwordMatches(user: StoredUser, password: string) {
  const email = (user.email || "").trim().toLowerCase();
  const current = hashPass(email, password);
  const stored = [user.pass, user.password].filter(Boolean) as string[];
  const candidates = [
    current,
    fnv1a(`${password}\0takologs`),
    fnv1a(`${email}\0${password}`),
    fnv1a(`${email}${password}takologs`),
    fnv1a(password),
    password,
  ];
  return stored.some((p) => candidates.includes(p) || p === password);
}

export function loadUsers(): StoredUser[] {
  const byEmail = new Map<string, StoredUser>();
  for (const key of USER_KEYS) {
    try {
      const raw = durableGet(key);
      const list = raw ? (JSON.parse(raw) as unknown) : [];
      if (!Array.isArray(list)) continue;
      for (const row of list) {
        if (!row || typeof row !== "object") continue;
        const u = row as Record<string, unknown>;
        const email = String(u.email ?? "").trim().toLowerCase();
        if (!email.includes("@")) continue;
        if (byEmail.has(email)) continue;
        byEmail.set(email, {
          id: String(u.id ?? email),
          email,
          name: String(u.name ?? email.split("@")[0] ?? "TakoLogs"),
          pass: String(u.pass ?? u.password ?? ""),
          newsletter: Boolean(u.newsletter),
          createdAt: typeof u.createdAt === "number" ? u.createdAt : undefined,
          lastLogin: typeof u.lastLogin === "number" ? u.lastLogin : undefined,
          notes: typeof u.notes === "string" ? u.notes : "",
          banned: Boolean(u.banned),
        });
      }
    } catch {
      /* ignore */
    }
  }
  return [...byEmail.values()];
}

export function saveUsers(list: StoredUser[]) {
  const clean = list.map((u) => ({
    id: u.id,
    email: u.email.trim().toLowerCase(),
    name: u.name,
    pass: u.pass,
    newsletter: u.newsletter,
    createdAt: u.createdAt,
    lastLogin: u.lastLogin,
    notes: u.notes,
    banned: u.banned,
  }));
  durableSet("takologs-ftp-users", JSON.stringify(clean));
}

export function findUserByEmail(email: string) {
  const key = email.trim().toLowerCase();
  return loadUsers().find((u) => u.email.toLowerCase() === key);
}

export function upgradeUserPassword(user: StoredUser, password: string) {
  const users = loadUsers();
  const u = users.find((x) => x.id === user.id || x.email === user.email.toLowerCase());
  if (!u) return;
  u.email = user.email.trim().toLowerCase();
  u.pass = hashPass(u.email, password);
  saveUsers(users);
}
