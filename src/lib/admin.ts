import { durableGet, durableSet } from "@/lib/durable-store";
import { hashPass, loadUsers, saveUsers, type StoredUser } from "@/lib/user-store";
import { pingServer } from "@/lib/analytics";

const HASH_KEY = "takologs-admin-hash";
const SESSION_KEY = "takologs-admin-ok";
const SEO_KEY = "takologs-seo";
const SITE_KEY = "takologs-site";
export const ADMIN_EVENT = "takologs-admin";

export type SeoSettings = {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage: string;
  robots: string;
};

export type SiteSettings = {
  announcement: string;
  maintenance: boolean;
  plausible: string;
};

export const DEFAULT_SEO: SeoSettings = {
  title: "TakoLogs — Savoir, réduction des risques & journal",
  description:
    "TakoLogs : fiches de substances, journal d’expériences, alertes labo, TakoAI et réduction des risques.",
  keywords: "réduction des risques, substances, journal, psychonaut, TakoLogs",
  canonical: "https://takohelp.com/",
  ogImage: "https://takohelp.com/og.jpg",
  robots: "index,follow",
};

export const DEFAULT_SITE: SiteSettings = {
  announcement: "",
  maintenance: false,
  plausible: "",
};

function emit() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(ADMIN_EVENT));
}

export function adminHash() {
  return durableGet(HASH_KEY) || "";
}

export function hasAdminPassword() {
  return Boolean(adminHash());
}

export function isAdminAuthed() {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export function setAdminPassword(password: string) {
  const h = hashPass("admin", password);
  durableSet(HASH_KEY, h);
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* ignore */
  }
  void pingServer("setup", { hash: h });
  emit();
}

export function adminLogin(password: string) {
  const h = adminHash();
  if (!h) return false;
  if (hashPass("admin", password) !== h) return false;
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* ignore */
  }
  emit();
  return true;
}

export function adminLogout() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    /* ignore */
  }
  emit();
}

export function loadSeo(): SeoSettings {
  try {
    const raw = durableGet(SEO_KEY);
    return raw ? { ...DEFAULT_SEO, ...(JSON.parse(raw) as SeoSettings) } : { ...DEFAULT_SEO };
  } catch {
    return { ...DEFAULT_SEO };
  }
}

export function saveSeo(s: SeoSettings) {
  durableSet(SEO_KEY, JSON.stringify(s));
  applySeo(s);
  void pingServer("save_seo", s as unknown as Record<string, unknown>);
  emit();
}

export function loadSite(): SiteSettings {
  try {
    const raw = durableGet(SITE_KEY);
    return raw ? { ...DEFAULT_SITE, ...(JSON.parse(raw) as SiteSettings) } : { ...DEFAULT_SITE };
  } catch {
    return { ...DEFAULT_SITE };
  }
}

export function saveSite(s: SiteSettings) {
  durableSet(SITE_KEY, JSON.stringify(s));
  void pingServer("save_site", s as unknown as Record<string, unknown>);
  emit();
}

export function applySeo(s: SeoSettings) {
  if (typeof document === "undefined") return;
  document.title = s.title;
  upsertMeta("description", s.description);
  upsertMeta("keywords", s.keywords);
  upsertMeta("robots", s.robots);
  upsertMeta("og:title", s.title, "property");
  upsertMeta("og:description", s.description, "property");
  upsertMeta("og:image", s.ogImage, "property");
  upsertLink("canonical", s.canonical);
}

function upsertMeta(name: string, content: string, attr: "name" | "property" = "name") {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function syncUserToServer(u: StoredUser) {
  void pingServer("signup", {
    id: u.id,
    email: u.email,
    name: u.name,
    newsletter: Boolean(u.newsletter),
    createdAt: u.createdAt ?? Date.now(),
    lastLogin: u.lastLogin ?? 0,
    notes: u.notes ?? "",
    banned: Boolean(u.banned),
  });
}

export function usersCsv(users: StoredUser[]) {
  const head = "id,name,email,newsletter,createdAt,lastLogin,banned,notes";
  const rows = users.map((u) =>
    [
      u.id,
      csv(u.name),
      csv(u.email),
      u.newsletter ? "1" : "0",
      u.createdAt ? new Date(u.createdAt).toISOString() : "",
      u.lastLogin ? new Date(u.lastLogin).toISOString() : "",
      u.banned ? "1" : "0",
      csv(u.notes || ""),
    ].join(","),
  );
  return [head, ...rows].join("\n");
}

function csv(s: string) {
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export function downloadText(name: string, text: string, type = "text/plain") {
  const blob = new Blob([text], { type });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

export function sitemapXml(origin: string) {
  const paths = [
    "/",
    "/substances",
    "/compare",
    "/effects",
    "/neuro",
    "/harm-scale",
    "/reduction",
    "/experiences",
    "/alerts",
    "/logs",
    "/legal",
  ];
  const urls = paths
    .map(
      (p) =>
        `  <url><loc>${origin.replace(/\/$/, "")}${p}</loc><changefreq>weekly</changefreq></url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function robotsTxt(origin: string) {
  return `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /login\nDisallow: /profile\nSitemap: ${origin.replace(/\/$/, "")}/sitemap.xml\n`;
}

export { loadUsers, saveUsers };
