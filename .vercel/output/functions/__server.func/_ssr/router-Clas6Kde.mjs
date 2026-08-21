import { o as __toESM } from "../_runtime.mjs";
import { C as useRouter, S as useParams, W as require_react, _ as createFileRoute, b as useNavigate, d as HeadContent, f as useRouterState, g as lazyRouteComponent, h as Outlet, l as require_react_dom, m as createRouter, u as Scripts, v as createRootRoute, w as require_jsx_runtime, x as useSearch, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as __exportAll } from "./ssr.mjs";
import { i as createServerFn, o as getServerFnById, t as TSS_SERVER_FUNCTION } from "./ssr2.mjs";
import { C as searchSubstances, S as offsetCurvePath, T as substances, _ as looksLikeNav, a as categoryTint, b as normName, c as extractChatAction, d as getSubstance, f as harmTotal, g as looksLikeAdd, h as interpretMessage, i as categoryEmoji, l as findSubstanceByName, m as intensityAt, n as DOSE_KEYS, o as curvePath, p as humanizeChatText, r as categories, s as durationCurve, t as CATEGORY_ORDER, u as formatMins, v as looksLikeTheme, w as substance_en_default, x as offsetCurveFill, y as neurotransmitters } from "./chat-parse-Cfiiw-J0.mjs";
import { L as string, N as number, P as object, R as union, j as literal } from "../_libs/@better-auth/core+[...].mjs";
import { i as signOut, r as signIn, t as authClient } from "./client-CVqXY6bk.mjs";
import { S as toLocalInput, _ as localDateTimeInput, a as SHULGIN_SCALE, b as requestOpenAddModal, c as consumeOpenAddOnLoad, d as experiencesToCsv, f as flagOpenAddOnLoad, g as isSameDay, i as OPEN_ADD_EVENT, l as defaultExperienceTitleFromDate, n as INGESTION_COLORS, o as authMiddleware, p as fromLocalInput, r as INGESTION_ROUTES, s as consumeDraft, t as FEELING_SCALE, v as peekDraft, x as setDraft, y as peekOpenAddOnLoad } from "./middleware-llC-sRUd.mjs";
import { n as auth, t as GROK_PROVIDERS } from "./server-BFNbDbk1.mjs";
import { $ as Brain, A as LogOut, B as Flame, C as Palette, D as MessagesSquare, E as Moon, F as HeartHandshake, G as Droplets, H as Eye, I as Globe, J as Clock, K as Download, L as GitCompare, M as Lock, N as House, O as Menu, P as HeartPulse, Q as Calendar, R as Funnel, S as Pause, T as Music, U as EyeOff, V as FileDown, W as ExternalLink, X as ChartColumn, Y as ChevronDown, Z as Camera, _ as RefreshCw, a as TriangleAlert, b as Phone, c as SunMoon, d as Shield, et as Bot, f as ShieldAlert, g as Save, h as Search, i as Upload, j as LogIn, k as Mail, l as Star, m as Send, n as Users, nt as ArrowRight, o as Trash2, p as Share2, q as Cookie, r as UserRound, rt as ArrowLeft, s as Sun, t as X, tt as Bell, u as Sparkles, v as Plus, w as NotebookPen, x as Pencil, y as Play, z as FlaskConical } from "../_libs/lucide-react.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, o as Tooltip, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mail-brand-CK94CkS1.js
var import_jsx_runtime = require_jsx_runtime();
/** Shared geometry — benzene nucleus, dilated pupil, bond-tentacles. */
var HEX = [
	[32, 11],
	[45, 18.5],
	[45, 33.5],
	[32, 41],
	[19, 33.5],
	[19, 18.5]
];
var HEX_D = HEX.map(([x, y]) => `${x},${y}`).join(" ");
var HALO_D = [
	[32, 6.2],
	[48.9, 16],
	[48.9, 36],
	[32, 45.8],
	[15.1, 36],
	[15.1, 16]
].map(([x, y]) => `${x},${y}`).join(" ");
function Mark({ fill, pupil, shine = "#fff" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: HALO_D,
			fill: "none",
			stroke: fill,
			strokeWidth: "1.15",
			opacity: "0.32",
			strokeLinejoin: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M32 41 C30 49 27 54 23.5 60.5",
			fill: "none",
			stroke: fill,
			strokeWidth: "2.2",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M19 33.5 C11 39 8 47 6.5 56.5",
			fill: "none",
			stroke: fill,
			strokeWidth: "2.2",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M45 33.5 C53 39 56 47 57.5 56.5",
			fill: "none",
			stroke: fill,
			strokeWidth: "2.2",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M19 18.5 C11 14 8 18 5.5 26",
			fill: "none",
			stroke: fill,
			strokeWidth: "2",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M45 18.5 C53 14 56 18 58.5 26",
			fill: "none",
			stroke: fill,
			strokeWidth: "2",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "23.5",
			cy: "60.5",
			r: "2.15",
			fill
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "6.5",
			cy: "56.5",
			r: "2.15",
			fill
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "57.5",
			cy: "56.5",
			r: "2.15",
			fill
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "5.5",
			cy: "26",
			r: "2",
			fill
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "58.5",
			cy: "26",
			r: "2",
			fill
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: HEX_D,
			fill: "none",
			stroke: fill,
			strokeWidth: "2.45",
			strokeLinejoin: "round"
		}),
		HEX.map(([x, y]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: x,
			cy: y,
			r: "2.55",
			fill
		}, `${x}-${y}`)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "32",
			cy: "26",
			r: "8.1",
			fill: shine
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "32",
			cy: "26",
			r: "6.15",
			fill: "none",
			stroke: fill,
			strokeWidth: "1.15",
			opacity: "0.55"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "32",
			cy: "26",
			r: "4.35",
			fill
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "32",
			cy: "26",
			r: "2.25",
			fill: pupil
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "30.35",
			cy: "24.2",
			r: "1.05",
			fill: shine
		})
	] });
}
function takoFaviconSvg(_hue) {
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#c4a06a"/>${faviconMarkup("#ffffff", "#3a2a1c")}</svg>`;
}
function takoLogoSvgHex(fill, pupil) {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 64 64" role="img" aria-label="TakoLogs">${faviconMarkup(fill, pupil)}</svg>`;
}
function faviconMarkup(fill, pupil) {
	return `
    <polygon points="${HALO_D}" fill="none" stroke="${fill}" stroke-width="2.2" opacity="0.5" stroke-linejoin="round"/>
    <path d="M32 41 C30 49 27 54 23.5 60.5" fill="none" stroke="${fill}" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M19 33.5 C11 39 8 47 6.5 56.5" fill="none" stroke="${fill}" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M45 33.5 C53 39 56 47 57.5 56.5" fill="none" stroke="${fill}" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M19 18.5 C11 14 8 18 5.5 26" fill="none" stroke="${fill}" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M45 18.5 C53 14 56 18 58.5 26" fill="none" stroke="${fill}" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="23.5" cy="60.5" r="3.1" fill="${fill}"/>
    <circle cx="6.5" cy="56.5" r="3.1" fill="${fill}"/>
    <circle cx="57.5" cy="56.5" r="3.1" fill="${fill}"/>
    <circle cx="5.5" cy="26" r="2.9" fill="${fill}"/>
    <circle cx="58.5" cy="26" r="2.9" fill="${fill}"/>
    <polygon points="${HEX_D}" fill="none" stroke="${fill}" stroke-width="3.6" stroke-linejoin="round"/>
    ${HEX.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.2" fill="${fill}"/>`).join("")}
    <circle cx="32" cy="26" r="9.2" fill="#fff"/>
    <circle cx="32" cy="26" r="6.4" fill="none" stroke="${fill}" stroke-width="1.8" opacity="0.7"/>
    <circle cx="32" cy="26" r="4.8" fill="${fill}"/>
    <circle cx="32" cy="26" r="2.4" fill="${pupil}"/>
    <circle cx="30.2" cy="24.1" r="1.15" fill="#fff"/>
  `.replace(/\s+/g, " ");
}
function applyTakoFavicon(_hue) {
	if (typeof document === "undefined") return;
	const svg = takoFaviconSvg();
	const href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
	let link = document.querySelector("link[rel=\"icon\"][data-tako=\"1\"]");
	if (!link) {
		link = document.createElement("link");
		link.rel = "icon";
		link.type = "image/svg+xml";
		link.dataset.tako = "1";
		document.head.appendChild(link);
	}
	link.href = href;
	document.querySelectorAll("link[rel=\"icon\"]:not([data-tako])").forEach((el) => el.remove());
	const img = new Image();
	img.onload = () => {
		const c = document.createElement("canvas");
		c.width = 180;
		c.height = 180;
		const ctx = c.getContext("2d");
		if (!ctx) return;
		ctx.drawImage(img, 0, 0, 180, 180);
		const png = c.toDataURL("image/png");
		document.querySelectorAll("link[rel=\"apple-touch-icon\"]").forEach((el) => {
			el.href = png;
		});
	};
	img.src = href;
}
function TakoLogo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 64 64",
		width: "32",
		height: "32",
		className,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
			fill: "currentColor",
			pupil: "hsl(var(--accent-h) 38% 16%)"
		})
	});
}
var mail_brand_exports = /* @__PURE__ */ __exportAll({
	MAIL_BG: () => MAIL_BG,
	MAIL_BODY: () => MAIL_BODY,
	MAIL_CARD: () => MAIL_CARD,
	MAIL_CREAM: () => MAIL_CREAM,
	MAIL_HEAD: () => MAIL_HEAD,
	MAIL_INK: () => MAIL_INK,
	MAIL_LINE: () => MAIL_LINE,
	MAIL_MUTED: () => MAIL_MUTED,
	MAIL_SAND: () => MAIL_SAND,
	deliverMail: () => deliverMail,
	mailCta: () => mailCta,
	wrapBrandedMail: () => wrapBrandedMail
});
var MAIL_BG = "#efe6d4";
var MAIL_CARD = "#f8f3ea";
var MAIL_INK = "#5c4a2c";
var MAIL_MUTED = "#7a6343";
var MAIL_SAND = "#6b5840";
var MAIL_CREAM = "#f8f3ea";
var MAIL_LINE = "#e4d5b8";
var MAIL_HEAD = "'Josefin Sans', 'Avenir Next', Avenir, sans-serif";
var MAIL_BODY = "'Avenir Next', Avenir, 'Nunito Sans', Georgia, sans-serif";
function wrapBrandedMail(opts) {
	const logo = takoLogoSvgHex(MAIL_SAND, "#3d3224");
	const bye = opts.lang === "en" ? "The TakoLogs team — harm reduction, private journal." : "L’équipe TakoLogs — réduction des risques, journal privé.";
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
function mailCta(href, label) {
	return `<a href="${href}" style="display:inline-block;background:${MAIL_SAND};color:${MAIL_CREAM};text-decoration:none;font-family:${MAIL_HEAD};font-weight:700;font-size:16px;padding:14px 28px;border-radius:999px;">${label}</a>`;
}
async function deliverMail(opts) {
	try {
		const { loadMailConfig, DEFAULT_MAIL_FROM } = await import("./mail-config-CHrz4aTf.mjs");
		const cfg = loadMailConfig();
		const { sendAppMail } = await import("./mail-api-BjIfhYAx.mjs");
		return await sendAppMail({ data: {
			to: opts.to,
			subject: opts.subject,
			html: opts.html,
			apiKey: cfg.apiKey || void 0,
			from: cfg.from || DEFAULT_MAIL_FROM
		} });
	} catch {
		return {
			ok: false,
			error: "send"
		};
	}
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/durable-store-B-Jaqy2R.js
var DB_NAME = "takologs-durable";
var STORE$1 = "kv";
var COOKIE = "takologs_sess";
function idb() {
	return new Promise((resolve) => {
		if (typeof indexedDB === "undefined") return resolve(null);
		const req = indexedDB.open(DB_NAME, 1);
		req.onupgradeneeded = () => {
			const db = req.result;
			if (!db.objectStoreNames.contains(STORE$1)) db.createObjectStore(STORE$1);
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => resolve(null);
	});
}
async function idbSet(key, value) {
	const db = await idb();
	if (!db) return;
	await new Promise((resolve) => {
		const tx = db.transaction(STORE$1, "readwrite");
		tx.objectStore(STORE$1).put(value, key);
		tx.oncomplete = () => resolve();
		tx.onerror = () => resolve();
	});
}
function cookieGet(name) {
	if (typeof document === "undefined") return null;
	const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
	return m ? decodeURIComponent(m[1]) : null;
}
function cookieSet(name, value) {
	if (typeof document === "undefined") return;
	document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=31536000; Path=/; SameSite=Lax`;
}
function durableGet(key) {
	try {
		const ls = localStorage.getItem(key);
		if (ls) return ls;
	} catch {}
	if (key.includes("session")) return cookieGet(COOKIE);
	return null;
}
function durableSet(key, value) {
	try {
		localStorage.setItem(key, value);
	} catch {}
	idbSet(key, value);
	if (key.includes("session")) cookieSet(COOKIE, value);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Clas6Kde.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var EMOJI_KEY = "takologs-emojis";
var DOSE_KEY = "takologs-last-doses";
var USAGE_KEY = "takologs-usage";
var NAME_KEY = "takologs-display-name";
var MOTION_KEY = "takologs-reduce-motion";
var FAV_KEY = "takologs-favorites";
var AVATAR_KEY = "takologs-avatar";
var COLOR_KEY = "takologs-colors";
var ALIAS_KEY = "takologs-aliases";
function readJson(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = localStorage.getItem(key);
		if (!raw) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}
function writeJson(key, value) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
function usageKey(name, slug) {
	return slug && slug.trim() || normName(name);
}
var Ctx$2 = (0, import_react.createContext)(null);
function PrefsProvider({ children }) {
	const [emojis, setEmojis] = (0, import_react.useState)(() => readJson(EMOJI_KEY, {}));
	const [colors, setColors] = (0, import_react.useState)(() => readJson(COLOR_KEY, {}));
	const [aliases, setAliases] = (0, import_react.useState)(() => readJson(ALIAS_KEY, {}));
	const [lastDoses, setLastDoses] = (0, import_react.useState)(() => readJson(DOSE_KEY, {}));
	const [usage, setUsage] = (0, import_react.useState)(() => readJson(USAGE_KEY, {}));
	const [favorites, setFavorites] = (0, import_react.useState)(() => readJson(FAV_KEY, []));
	const [displayName, setDisplayNameState] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return "";
		return localStorage.getItem(NAME_KEY) ?? "";
	});
	const [reduceMotion, setReduceMotionState] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return false;
		return localStorage.getItem(MOTION_KEY) === "1";
	});
	const [avatar, setAvatarState] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return "";
		return localStorage.getItem(AVATAR_KEY) ?? "";
	});
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("tako-reduced-motion", reduceMotion);
	}, [reduceMotion]);
	const setEmoji = (0, import_react.useCallback)((key, emoji) => {
		setEmojis((prev) => {
			const next = { ...prev };
			const k = key.trim();
			if (!k) return prev;
			if (!emoji.trim()) delete next[k];
			else next[k] = emoji.trim();
			writeJson(EMOJI_KEY, next);
			return next;
		});
	}, []);
	const clearEmojis = (0, import_react.useCallback)(() => {
		setEmojis({});
		writeJson(EMOJI_KEY, {});
	}, []);
	const resolveEmoji = (0, import_react.useCallback)((slug, name, fallback) => {
		if (slug && emojis[slug]) return emojis[slug];
		const nk = normName(name);
		if (emojis[nk]) return emojis[nk];
		if (emojis[name]) return emojis[name];
		return fallback;
	}, [emojis]);
	const resolveColor = (0, import_react.useCallback)((slug, name, fallback) => {
		if (slug && colors[slug]) return colors[slug];
		const nk = normName(name);
		if (colors[nk]) return colors[nk];
		if (colors[name]) return colors[name];
		return fallback;
	}, [colors]);
	const setColor = (0, import_react.useCallback)((key, color) => {
		setColors((prev) => {
			const next = { ...prev };
			const k = key.trim();
			if (!k) return prev;
			if (!color.trim()) delete next[k];
			else next[k] = color.trim();
			writeJson(COLOR_KEY, next);
			return next;
		});
	}, []);
	const setAlias = (0, import_react.useCallback)((key, label) => {
		setAliases((prev) => {
			const next = { ...prev };
			const k = key.trim();
			if (!k) return prev;
			if (!label.trim()) delete next[k];
			else next[k] = label.trim();
			writeJson(ALIAS_KEY, next);
			return next;
		});
	}, []);
	const resolveName = (0, import_react.useCallback)((slug, name) => {
		if (slug && aliases[slug]) return aliases[slug];
		const nk = normName(name);
		if (aliases[nk]) return aliases[nk];
		if (aliases[name]) return aliases[name];
		for (const [k, v] of Object.entries(aliases)) if (normName(k) === nk || slug && k === slug) return v;
		return name;
	}, [aliases]);
	const recordIngestion = (0, import_react.useCallback)((ing) => {
		const k = usageKey(ing.substanceName, ing.slug);
		setLastDoses((prev) => {
			const next = {
				...prev,
				[k]: {
					dose: ing.dose,
					unit: ing.doseUnit,
					route: ing.route,
					name: ing.substanceName,
					slug: ing.slug
				}
			};
			writeJson(DOSE_KEY, next);
			return next;
		});
		setUsage((prev) => {
			const next = {
				...prev,
				[k]: (prev[k] ?? 0) + 1
			};
			writeJson(USAGE_KEY, next);
			return next;
		});
	}, []);
	const syncFromExperiences = (0, import_react.useCallback)((exps) => {
		const nextUsage = {};
		const nextLast = {};
		const ings = exps.flatMap((e) => e.ingestions).slice().sort((a, b) => new Date(a.ingestionTime).getTime() - new Date(b.ingestionTime).getTime());
		for (const ing of ings) {
			const k = usageKey(ing.substanceName, ing.slug);
			nextUsage[k] = (nextUsage[k] ?? 0) + 1;
			nextLast[k] = {
				dose: ing.dose,
				unit: ing.doseUnit,
				route: ing.route,
				name: ing.substanceName,
				slug: ing.slug
			};
		}
		setUsage(nextUsage);
		setLastDoses(nextLast);
		writeJson(USAGE_KEY, nextUsage);
		writeJson(DOSE_KEY, nextLast);
	}, []);
	const lastDoseFor = (0, import_react.useCallback)((name, slug) => {
		const k = usageKey(name, slug);
		return lastDoses[k] ?? lastDoses[normName(name)];
	}, [lastDoses]);
	const usageFor = (0, import_react.useCallback)((name, slug) => {
		const k = usageKey(name, slug);
		return usage[k] ?? usage[normName(name)] ?? 0;
	}, [usage]);
	const setDisplayName = (0, import_react.useCallback)((n) => {
		setDisplayNameState(n);
		try {
			localStorage.setItem(NAME_KEY, n);
		} catch {}
	}, []);
	const setReduceMotion = (0, import_react.useCallback)((v) => {
		setReduceMotionState(v);
		try {
			localStorage.setItem(MOTION_KEY, v ? "1" : "0");
		} catch {}
	}, []);
	const toggleFavorite = (0, import_react.useCallback)((slug) => {
		setFavorites((prev) => {
			const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
			writeJson(FAV_KEY, next);
			return next;
		});
	}, []);
	const setAvatar = (0, import_react.useCallback)((url) => {
		setAvatarState(url);
		try {
			if (url) localStorage.setItem(AVATAR_KEY, url);
			else localStorage.removeItem(AVATAR_KEY);
		} catch {}
	}, []);
	const isFavorite = (0, import_react.useCallback)((slug) => favorites.includes(slug), [favorites]);
	const value = (0, import_react.useMemo)(() => ({
		emojis,
		setEmoji,
		clearEmojis,
		resolveEmoji,
		colors,
		setColor,
		resolveColor,
		aliases,
		setAlias,
		resolveName,
		lastDoses,
		usage,
		recordIngestion,
		syncFromExperiences,
		lastDoseFor,
		usageFor,
		displayName,
		setDisplayName,
		reduceMotion,
		setReduceMotion,
		favorites,
		toggleFavorite,
		isFavorite,
		avatar,
		setAvatar
	}), [
		emojis,
		setEmoji,
		clearEmojis,
		resolveEmoji,
		colors,
		setColor,
		resolveColor,
		aliases,
		setAlias,
		resolveName,
		lastDoses,
		usage,
		recordIngestion,
		syncFromExperiences,
		lastDoseFor,
		usageFor,
		displayName,
		setDisplayName,
		reduceMotion,
		setReduceMotion,
		favorites,
		toggleFavorite,
		isFavorite,
		avatar,
		setAvatar
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx$2.Provider, {
		value,
		children
	});
}
function usePrefs() {
	const ctx = (0, import_react.useContext)(Ctx$2);
	if (!ctx) throw new Error("usePrefs must be used within PrefsProvider");
	return ctx;
}
var DOSE_CLASS_COLOR = {
	threshold: "#8a8a7a",
	light: "#3d8a5f",
	common: "#4f7fc9",
	strong: "#c99a2e",
	heavy: "#c94f4f"
};
function doseTableFor(sub, route, unit) {
	if (!sub?.doses.length) return void 0;
	return sub.doses.find((d) => d.route === route && d.unit === unit) ?? sub.doses.find((d) => d.route === route) ?? sub.doses.find((d) => d.unit === unit) ?? sub.doses[0];
}
function classifyDose(sub, dose, unit, route) {
	if (dose == null || !Number.isFinite(dose) || dose <= 0) return null;
	const table = doseTableFor(sub, route, unit);
	if (!table) return null;
	if (dose >= table.heavy) return "heavy";
	if (dose >= table.strong) return "strong";
	if (dose >= table.common) return "common";
	if (dose >= table.light) return "light";
	if (dose >= table.threshold) return "threshold";
	return null;
}
function exceedsHeavy(sub, dose, unit, route) {
	const table = doseTableFor(sub, route, unit);
	if (!table || dose == null) return false;
	return dose >= table.heavy;
}
/** Peak height of a timeline curve, 0.22–1.18, scaled from the substance dose table. */
function doseAmplitude(sub, dose, unit, route) {
	if (dose == null || !Number.isFinite(dose) || dose <= 0) return .7;
	const table = doseTableFor(sub, route, unit);
	if (!table) return .7;
	const ref = table.strong || table.common || table.heavy || dose;
	const t = dose / Math.max(ref, 1e-6);
	return Math.min(1.18, Math.max(.22, t ** .7 * .9 + .2));
}
var FALLBACK$1 = {
	onset: 30,
	peakStart: 90,
	peakEnd: 150,
	total: 240
};
var SHULGIN_Y = {
	"−": .88,
	"-": .88,
	"+/−": .72,
	"+/-": .72,
	"+": .58,
	"++": .42,
	"+++": .26,
	"++++": .12
};
function yOf(level, h) {
	return (SHULGIN_Y[level] ?? .5) * h;
}
function fmtDelta(ms, fr) {
	const sign = ms >= 0 ? 1 : -1;
	const m = Math.round(Math.abs(ms) / 6e4);
	const label = m < 1 ? fr ? "maintenant" : "now" : m < 60 ? `${m} min` : `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, "0")}`;
	if (m < 1) return label;
	if (sign > 0) return fr ? `dans ${label}` : `in ${label}`;
	return fr ? `il y a ${label}` : `${label} ago`;
}
function clientXY(e) {
	const src = "touches" in e && e.touches[0] ? e.touches[0] : "changedTouches" in e && e.changedTouches[0] ? e.changedTouches[0] : e;
	return {
		cx: src.clientX,
		cy: src.clientY
	};
}
function ExperienceCurves({ ingestions, dateTag, compact = false, showNow = false, shulgin, shulginLog }) {
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	const [scrub, setScrub] = (0, import_react.useState)(null);
	const fr = dateTag.toLowerCase().startsWith("fr");
	const { resolveColor, resolveName, resolveEmoji } = usePrefs();
	(0, import_react.useEffect)(() => {
		if (!showNow) return;
		const id = window.setInterval(() => setNow(Date.now()), 15e3);
		return () => window.clearInterval(id);
	}, [showNow]);
	const { items, span, startMs, h } = (0, import_react.useMemo)(() => {
		const h = compact ? 110 : 200;
		if (ingestions.length === 0) return {
			items: [],
			span: 240,
			startMs: Date.now(),
			h
		};
		const times = ingestions.map((i) => new Date(i.ingestionTime).getTime());
		const startMs = Math.min(...times);
		const items = ingestions.map((ing) => {
			const sub = findSubstanceByName(ing.substanceName);
			return {
				ing,
				p: sub ? durationCurve(sub) : FALLBACK$1,
				offsetMin: Math.max(0, (new Date(ing.ingestionTime).getTime() - startMs) / 6e4),
				amp: doseAmplitude(sub, ing.dose, ing.doseUnit, ing.route),
				color: resolveColor(ing.slug, ing.substanceName, ing.color ?? sub?.color ?? "#b07a45")
			};
		});
		return {
			items,
			span: Math.max(...items.map((c) => c.offsetMin + c.p.total), 60),
			startMs,
			h
		};
	}, [
		ingestions,
		compact,
		resolveColor
	]);
	const points = (0, import_react.useMemo)(() => {
		const src = [...shulginLog ?? []];
		if (src.length === 0 && shulgin) src.push({
			time: new Date(startMs).toISOString(),
			level: shulgin
		});
		return src.map((p) => {
			const min = (new Date(p.time).getTime() - startMs) / 6e4;
			return {
				...p,
				min
			};
		}).filter((p) => p.min >= -10 && p.min <= span + 20);
	}, [
		shulginLog,
		shulgin,
		startMs,
		span
	]);
	if (items.length === 0) return null;
	const w = 800;
	const fmt = (ms) => new Date(ms).toLocaleTimeString(dateTag, {
		hour: "2-digit",
		minute: "2-digit"
	});
	const nowMin = (now - startMs) / 6e4;
	const nowX = Math.min(w, Math.max(0, nowMin / span * w));
	const nowInRange = showNow && nowMin >= -5 && nowMin <= span + 5;
	const pick = (e) => {
		const r = e.currentTarget.getBoundingClientRect();
		const { cx, cy } = clientXY(e);
		const x = Math.min(w, Math.max(0, (cx - r.left) / r.width * w));
		const y = Math.min(h, Math.max(0, (cy - r.top) / r.height * h));
		setScrub({
			x,
			y,
			min: x / w * span,
			left: cx,
			top: Math.max(12, r.top - 8)
		});
	};
	const scrubMs = scrub ? startMs + scrub.min * 6e4 : null;
	const hits = scrub ? items.map((c) => {
		const t = scrub.min - c.offsetMin;
		const v = intensityAt(c.p, t) * Math.min(1.2, Math.max(.15, c.amp));
		const curveY = h - 4 - v * (h - 8);
		return {
			...c,
			v,
			dist: Math.abs(curveY - scrub.y),
			curveY
		};
	}).filter((c) => c.v > .01).sort((a, b) => a.dist - b.dist) : [];
	const primary = hits[0];
	const tip = scrub && scrubMs != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl glass-strong glass-modal px-3 py-2 text-[11px] font-heading font-bold text-sand-800 dark:text-sand-50 pointer-events-none min-w-[9rem] max-w-[16rem] shadow-xl",
		style: {
			position: "absolute",
			left: `${scrub.x / w * 100}%`,
			top: 8,
			transform: "translate(-50%, 0)",
			zIndex: 20
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			fmt(scrubMs),
			" · ",
			fmtDelta(scrubMs - now, fr)
		] }), hits.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-1.5 space-y-1 font-sans font-semibold",
			children: hits.slice(0, 5).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-1.5 truncate",
				style: { color: c.color },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-2.5 w-2.5 rounded-full shrink-0 ring-1 ring-black/10",
					style: { background: c.color }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "truncate",
					children: [
						resolveEmoji(c.ing.slug, c.ing.substanceName, "•"),
						" ",
						resolveName(c.ing.slug, c.ing.substanceName),
						c.ing.dose != null ? ` · ${c.ing.dose}${c.ing.doseUnit}` : ""
					]
				})]
			}, c.ing.id))
		}) : null]
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: compact ? "px-1 pb-1" : "rounded-xl glass p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: `0 0 ${w} ${h}`,
				className: `w-full cursor-crosshair ${compact ? "h-28" : "h-auto"}`,
				preserveAspectRatio: "none",
				onMouseMove: pick,
				onClick: pick,
				onTouchStart: pick,
				onTouchMove: pick,
				onMouseLeave: () => setScrub(null),
				children: [
					SHULGIN_SCALE.map((lvl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "0",
						y1: yOf(lvl, h),
						x2: w,
						y2: yOf(lvl, h),
						stroke: "currentColor",
						strokeWidth: "1",
						strokeDasharray: "3 8",
						className: "text-sand-300 dark:text-sand-700",
						opacity: "0.35"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "6",
						y: yOf(lvl, h) - 4,
						fill: "currentColor",
						fontSize: "11",
						className: "text-sand-400",
						opacity: "0.8",
						children: lvl
					})] }, lvl)),
					items.map((c) => {
						const on = primary?.ing.id === c.ing.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: offsetCurveFill(c.p, c.offsetMin, span, w, h, 60, c.amp),
							fill: c.color,
							opacity: on ? .32 : .14
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: offsetCurvePath(c.p, c.offsetMin, span, w, h, 60, c.amp),
							fill: "none",
							stroke: c.color,
							strokeWidth: on ? compact ? 3.6 : 4.2 : compact ? 2.2 : 2.5,
							strokeLinecap: "round",
							strokeLinejoin: "round",
							opacity: primary && !on ? .35 : 1
						})] }, c.ing.id);
					}),
					points.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
						fill: "none",
						stroke: "hsl(var(--accent-h) var(--clay-s) var(--clay-l))",
						strokeWidth: "2",
						strokeDasharray: "5 4",
						points: points.map((p) => `${p.min / span * w},${yOf(p.level, h)}`).join(" ")
					}) : null,
					points.map((p, i) => {
						const x = p.min / span * w;
						const y = yOf(p.level, h);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: x,
							cy: y,
							r: compact ? 5 : 7,
							fill: "hsl(var(--accent-h) var(--clay-s) var(--clay-l))",
							stroke: "white",
							strokeWidth: "2"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: x + 10,
							y: y - 8,
							fill: "hsl(var(--accent-h) var(--clay-s) var(--clay-l))",
							fontSize: compact ? 12 : 14,
							fontWeight: "700",
							children: p.level
						})] }, `${p.time}-${i}`);
					}),
					nowInRange ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: nowX,
						y1: "0",
						x2: nowX,
						y2: h,
						stroke: "hsl(var(--accent-h) var(--clay-s) var(--clay-l))",
						strokeWidth: "2",
						strokeDasharray: "4 4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: nowX,
						cy: "6",
						r: "4",
						fill: "hsl(var(--accent-h) var(--clay-s) var(--clay-l))"
					})] }) : null,
					scrub ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: scrub.x,
							y1: "0",
							x2: scrub.x,
							y2: h,
							stroke: "currentColor",
							strokeWidth: "1.5",
							className: "text-sand-700 dark:text-sand-200"
						}),
						hits.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: scrub.x,
							cy: c.curveY,
							r: i === 0 ? 6 : 4,
							fill: c.color,
							stroke: "white",
							strokeWidth: "2"
						}, c.ing.id)),
						primary ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
							x: scrub.x > w * .62 ? scrub.x - 10 : scrub.x + 12,
							y: Math.max(16, primary.curveY - 8),
							textAnchor: scrub.x > w * .62 ? "end" : "start",
							fill: primary.color,
							fontSize: compact ? 13 : 16,
							fontWeight: "800",
							stroke: "white",
							strokeWidth: "3",
							paintOrder: "stroke",
							style: { paintOrder: "stroke" },
							children: [
								resolveEmoji(primary.ing.slug, primary.ing.substanceName, "•"),
								" ",
								resolveName(primary.ing.slug, primary.ing.substanceName)
							]
						}) : null
					] }) : null
				]
			}), tip]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-1 flex justify-between text-[10px] font-semibold text-sand-400 dark:text-sand-500",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fmt(startMs) }),
				nowInRange ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-clay-500",
					children: fmt(now)
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fmt(startMs + span / 2 * 6e4) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fmt(startMs + span * 6e4) })
			]
		})]
	});
}
/** UUID that still works on HTTP (Safari hides crypto.randomUUID). */
function uuid() {
	const c = globalThis.crypto;
	if (c && typeof c.randomUUID === "function") return c.randomUUID();
	if (c && typeof c.getRandomValues === "function") {
		const buf = /* @__PURE__ */ new Uint8Array(16);
		c.getRandomValues(buf);
		buf[6] = buf[6] & 15 | 64;
		buf[8] = buf[8] & 63 | 128;
		const hex = Array.from(buf, (b) => b.toString(16).padStart(2, "0")).join("");
		return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
	}
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ch) => {
		const r = Math.random() * 16 | 0;
		return (ch === "x" ? r : r & 3 | 8).toString(16);
	});
}
function ytId(url) {
	return (url.match(/[?&]v=([a-zA-Z0-9_-]{11})/) || url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/) || url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/) || url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/))?.[1] ?? null;
}
function spotifyParts(url) {
	const m = url.match(/(?:open\.spotify\.com\/(?:intl-[a-z]+\/)?|spotify:)(track|album|playlist|episode)[/:]([a-zA-Z0-9]+)/i);
	return m ? {
		kind: m[1].toLowerCase(),
		id: m[2]
	} : null;
}
function parseTrackUrl(raw) {
	const url = raw.trim();
	if (!url) return null;
	const yt = ytId(url);
	if (yt) return {
		id: uuid(),
		provider: "youtube",
		url: `https://www.youtube.com/watch?v=${yt}`,
		embedUrl: `https://www.youtube.com/embed/${yt}`,
		title: "YouTube"
	};
	const sp = spotifyParts(url);
	if (sp) return {
		id: uuid(),
		provider: "spotify",
		url: `https://open.spotify.com/${sp.kind}/${sp.id}`,
		embedUrl: `https://open.spotify.com/embed/${sp.kind}/${sp.id}`,
		title: `Spotify ${sp.kind}`
	};
	if (/music\.apple\.com\//i.test(url)) {
		const embed = url.replace("://music.apple.com/", "://embed.music.apple.com/");
		return {
			id: uuid(),
			provider: "apple",
			url,
			embedUrl: embed,
			title: "Apple Music"
		};
	}
	return null;
}
async function searchAppleMusic(q) {
	const term = q.trim();
	if (term.length < 2) return [];
	const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=8`;
	const res = await fetch(url);
	if (!res.ok) return [];
	return ((await res.json()).results ?? []).filter((r) => r.trackViewUrl || r.collectionViewUrl).map((r) => {
		const link = r.trackViewUrl || r.collectionViewUrl || "";
		const parsed = parseTrackUrl(link);
		return {
			id: uuid(),
			provider: "apple",
			url: link,
			embedUrl: parsed?.embedUrl || link.replace("://music.apple.com/", "://embed.music.apple.com/"),
			title: r.trackName || "Apple Music",
			artist: r.artistName,
			artwork: r.artworkUrl100?.replace("100x100", "200x200"),
			previewUrl: r.previewUrl
		};
	});
}
async function enrichTrack(tr) {
	if (tr.previewUrl) return tr;
	const term = [tr.artist, tr.title].filter((x) => x && x !== "Apple Music" && x !== "YouTube" && !x.startsWith("Spotify")).join(" ").trim() || tr.title;
	if (tr.provider === "apple" || term.length > 1) try {
		const hits = await searchAppleMusic(term);
		const hit = hits.find((h) => h.previewUrl) ?? hits[0];
		if (hit?.previewUrl) return {
			...tr,
			previewUrl: hit.previewUrl,
			artwork: tr.artwork || hit.artwork,
			title: tr.title === "Apple Music" || !tr.title ? hit.title : tr.title,
			artist: tr.artist || hit.artist
		};
	} catch {}
	return tr;
}
var LANG_KEY = "takologs-lang";
var dicts = {
	fr: {
		nav: {
			home: "Accueil",
			substances: "Substances",
			compare: "Comparateur",
			effects: "Effets",
			neuro: "Neuro",
			harm: "Dommages",
			reduction: "Réduction des risques",
			logs: "Logs",
			profile: "Profil",
			more: "Plus",
			experiences: "Expériences",
			alerts: "Alertes",
			chat: "Tako"
		},
		common: {
			search: "Rechercher",
			searchPlaceholder: "Demander à TakoAI quelque chose",
			all: "Toutes",
			save: "Enregistrer",
			cancel: "Annuler",
			close: "Fermer",
			loading: "Chargement…",
			add: "Ajouter",
			edit: "Modifier",
			delete: "Supprimer",
			back: "Retour",
			reset: "Réinitialiser",
			signIn: "Connexion",
			signOut: "Se déconnecter",
			theme: "Thème",
			auto: "Auto",
			light: "Clair",
			dark: "Sombre",
			color: "Couleur du site",
			customHue: "Teinte personnalisée",
			language: "Langue",
			french: "Français",
			english: "English",
			detectRegion: "Automatique (région)",
			results: "{n} résultat",
			results_plural: "{n} résultats"
		},
		cat: {
			psychedelic: "Psychédélique",
			stimulant: "Stimulant",
			depressant: "Dépresseur",
			dissociative: "Dissociatif",
			opioid: "Opioïde",
			cannabinoid: "Cannabinoïde",
			empathogen: "Empathogène",
			deliriant: "Délirant",
			nootropic: "Nootropique",
			misc: "Divers"
		},
		route: {
			Orale: "Orale",
			Insufflée: "Insufflée",
			Vaporisée: "Vaporisée",
			Sublinguale: "Sublinguale",
			Inhalée: "Inhalée",
			Intraveineuse: "Intraveineuse",
			Rectale: "Rectale",
			Transdermique: "Transdermique"
		},
		dose: {
			threshold: "Seuil",
			light: "Légère",
			common: "Commune",
			strong: "Forte",
			heavy: "Lourde",
			unit: "Unité",
			label: "Dose"
		},
		home: {
			kicker: "Encyclopédie · Journal",
			title1: "Les substances,",
			title2: "en clair.",
			subtitle: "Dosages, interactions et un journal privé.",
			searchPh: "Demander à TakoAI quelque chose",
			none: "Aucune substance ne correspond à « {q} ».",
			count: "{n} substances",
			count_plural: "{n} substances · {total} au total",
			seeAll: "Voir les {n} substances",
			addLogs: "+ Logs",
			cardsAlerts: "Alertes labo",
			cardsAlertsMore: "Voir toutes les alertes",
			cardsStats: "Votre journal",
			cardsStatsN: "{n} expériences",
			cardsStatsEmpty: "Aucune entrée pour l’instant",
			cardsHarm: "Réduction des risques",
			cardsHarmBody: "Testez, dosez bas, hydratez-vous, ne mélangez pas à l’aveugle.",
			cardsUpdates: "Mises à jour",
			cardsUpdatesBody: "Historique des versions et nouveautés.",
			openLogs: "Ouvrir les logs",
			pwImport: "Import PsychonautWiki Journal",
			pwImportBody: "Dans l’app : Réglages → Exporter le journal (.json). Déposez ce fichier ici pour récupérer vos expériences.",
			newsTitle: "Newsletter",
			newsBody: "Alertes, TakoAI et nouveautés — un e-mail de bienvenue t’attend.",
			newsCta: "S’abonner",
			newsOk: "Inscription envoyée. Vérifie ta boîte mail.",
			newsFail: "Envoi impossible. Vérifie Resend dans Profil, ou le domaine mail.takohelp.com."
		},
		substances: {
			kicker: "Bibliothèque",
			title: "Toutes les substances",
			subtitle: "Filtres par classe, recherche par nom, alias ou famille chimique.",
			searchPh: "Rechercher…"
		},
		substance: {
			notFound: "Substance introuvable.",
			aka: "Aussi appelé : {names}",
			addToLog: "Ajouter aux logs",
			molecule: "Structure moléculaire",
			editEmoji: "Choisir un emoji",
			dosages: "Dosages",
			duration: "Durée",
			effects: "Effets",
			interactions: "Interactions",
			harm: "Dommages",
			neuro: "Neurotransmetteurs",
			onset: "Montée",
			peak: "Pic",
			total: "Durée totale",
			after: "Après-coup",
			dangerous: "Dangereux",
			caution: "À surveiller",
			risks: "Points de vigilance",
			harmRel: "Dommages relatifs",
			global: "Global"
		},
		compare: {
			kicker: "Comparateur",
			title: "Comparez les substances",
			subtitle: "Dosages, durées, risques et courbes côte à côte.",
			add: "Ajouter",
			max: "4 substances max.",
			class: "Classe",
			need: "Ajoutez au moins une substance pour comparer."
		},
		effects: {
			kicker: "Index des effets",
			title: "Effets par substance",
			subtitle: "Chaque effet listé avec les substances qui le produisent le plus fréquemment.",
			good: "Positif",
			neutral: "Neutre",
			bad: "Négatif"
		},
		neuro: {
			kicker: "Neurotransmetteurs",
			title: "Comment ça agit",
			subtitle: "Chaque famille de substances cible des systèmes cérébraux distincts.",
			related: "Substances associées",
			empty: "Aucune substance indexée pour ce système.",
			library: "Voir toute la bibliothèque →"
		},
		nt: {
			serotonin: "Sérotonine (5-HT)",
			serotoninRole: "Humeur, perception, empathie",
			dopamine: "Dopamine",
			dopamineRole: "Motivation, récompense, énergie",
			norepinephrine: "Noradrénaline",
			norepinephrineRole: "Éveil, vigilance, rythme cardiaque",
			gaba: "GABA",
			gabaRole: "Calme, sédation, anxiolyse",
			glutamate: "Glutamate (NMDA)",
			glutamateRole: "Apprentissage, dissociation",
			opioid: "Récepteurs opioïdes",
			opioidRole: "Analgésie, euphorie, respiration",
			cannabinoid: "Récepteurs CB1",
			cannabinoidRole: "Appétit, détente, mémoire",
			acetylcholine: "Acétylcholine",
			acetylcholineRole: "Mémoire, muscles, délire"
		},
		harm: {
			kicker: "Échelle des dommages",
			title: "Comparer les risques",
			subtitle: "Scores relatifs (0–100) : physique, dépendance, social. Ce n'est pas un classement moral.",
			total: "Score global",
			physical: "Physique",
			dependence: "Dépendance",
			social: "Social"
		},
		reduction: {
			kicker: "Réduction des risques",
			title: "Rester en sécurité",
			subtitle: "Numéros d'urgence, lignes d'écoute et bonnes pratiques. En cas d'urgence vitale, appelez les secours.",
			emergency: "Urgence vitale ?",
			emergencyFr: "Composez le 15 (SAMU) ou le 112. En cas de surdose opioïde, administrez la naloxone si disponible.",
			emergencyEn: "Call your local emergency number (112 in Europe, 911 in the US, 999 in the UK). If an opioid overdose is suspected, administer naloxone if available.",
			site: "Site →",
			disclaimer: "TakoLogs est une ressource informative et n'encourage pas la consommation. Les informations ne remplacent pas un avis médical."
		},
		logs: {
			title: "Logs",
			subtitle: "Votre journal d’expériences privé",
			signInTitle: "Vos Logs",
			signInBody: "Connectez-vous pour garder un journal privé de vos expériences, avec courbes de montée et descente.",
			new: "Nouvelle",
			entries: "Prises",
			unique: "Substances",
			experiences: "Expériences",
			activity14: "Activité (14 jours)",
			empty: "Aucune expérience enregistrée.",
			createFirst: "Créer la première →",
			tolerance: "Tolérance",
			toleranceHint: "Indique si la tolérance à une substance est revenue à son niveau de base.",
			noTolerance: "Aucune donnée pour le moment.",
			lastTaken: "Dernière prise : {date}",
			tolReset: "Tolérance revenue",
			tolActive: "Tolérance active ({n} j)",
			resetDays: "jours de reset",
			tabJournal: "Journal",
			tabStats: "Statistiques",
			tabTolerance: "Tolérance",
			tabTimeline: "Timeline",
			searchPh: "Filtrer le journal…",
			feeling: "Ressenti",
			deleteConfirm: "Supprimer cette expérience et toutes ses ingestions ?",
			danger: "Danger",
			caution: "Attention",
			open: "Ouvrir",
			stacked: "cumulé",
			times: "×"
		},
		stats: {
			title: "Statistiques",
			subtitle: "Filtres de période et de substance, comme dans PsychonautWiki Journal.",
			span7: "7 j",
			span30: "30 j",
			span90: "90 j",
			span6m: "6 mois",
			span1y: "1 an",
			spanAll: "Tout",
			filterSubstance: "Filtrer une substance",
			allSubstances: "Toutes les substances",
			ingestions: "Prises",
			daysActive: "Jours actifs",
			avgPerDay: "Moy. / jour actif",
			substances: "Substances",
			overTime: "Prises dans le temps",
			ranking: "Classement",
			heatmap: "Calendrier",
			weekday: "Par jour de la semaine",
			hour: "Par heure",
			routes: "Voies",
			doses: "Doses cumulées",
			activeNow: "En cours",
			noneActive: "Aucune substance encore active.",
			until: "jusqu’à {time}",
			empty: "Pas encore de données sur cette période.",
			lastAgo: "Il y a {n} j",
			today: "Aujourd’hui",
			uses: "{n} prise",
			uses_plural: "{n} prises",
			daysSince: "Depuis la dernière",
			doseClass: "Classes de dose",
			filterRoute: "Voie",
			allRoutes: "Toutes les voies"
		},
		editor: {
			title: "Titre",
			date: "Date & heure",
			notes: "Notes",
			notesPh: "Contexte, ressenti, environnement…",
			substances: "Substances & courbe",
			none: "Aucune substance. Ajoutez-en pour générer la courbe.",
			save: "Enregistrer",
			missing: "Expérience introuvable.",
			back: "Retour au journal",
			combo: "Avertissements d’association",
			comboDanger: "{a} + {b} — association dangereuse",
			comboCaution: "{a} + {b} — à surveiller",
			comboFoot: "Ces indications proviennent de la base de substances du site et ne remplacent pas un avis médical.",
			comboNone: "Pas d’interaction critique identifiée entre ces substances — restez prudents.",
			stacked: "{name} · {total} {unit} cumulés ({n} prises)",
			cumul: "cumul {n} {unit}"
		},
		add: {
			title: "Ajouter une substance",
			edit: "Modifier la substance",
			searchPh: "Rechercher une substance…",
			frequent: "Les plus utilisées",
			catalog: "Toutes les substances",
			none: "Aucun résultat dans la base.",
			custom: "Utiliser « {q} » (substance personnalisée)",
			customHint: "Tapez un nom pour créer une substance personnalisée",
			pickDb: "Choisir dans la base",
			name: "Nom de la substance",
			color: "Couleur",
			emoji: "Emoji",
			route: "Voie",
			time: "Heure de prise",
			dose: "Dose",
			unit: "Unité",
			notes: "Notes",
			notesPh: "Ressenti spécifique à cette prise…",
			commonDose: "Dose commune : {n} {unit}",
			lastDose: "Dernière dose : {n} {unit}",
			onset: "Montée ~{n}",
			duration: "Durée ~{n}",
			add: "Ajouter à l’expérience",
			save: "Enregistrer les modifications",
			dangerTitle: "Association dangereuse",
			dangerWith: "Dangereux avec {other}",
			cautionWith: "À surveiller avec {other}",
			dangerBody: "Cette combinaison est signalée comme potentiellement dangereuse. En cas de symptômes inquiétants, contactez immédiatement les secours.",
			addAnyway: "Ajouter quand même",
			usedN: "{n}×",
			favorites: "Favoris",
			lastUsedChip: "Dernière : {n} {unit}",
			exceedsHeavy: "Cette dose atteint ou dépasse la dose lourde ({n} {unit}).",
			pickClass: "Classe de dose"
		},
		picker: {
			title: "Ajouter à quelle expérience ?",
			body: "Votre dernière expérience date d’un autre jour. Choisissez où ajouter cette prise.",
			existing: "Expérience existante",
			choose: "Choisir…",
			new: "Nouvelle expérience",
			seeAll: "Voir tous les logs"
		},
		profile: {
			title: "Profil",
			subtitle: "Apparence, langue, emojis et données du journal.",
			appearance: "Apparence",
			account: "Compte",
			signedInAs: "Connecté en tant que {name}",
			notSigned: "Vous n’êtes pas connecté.",
			displayName: "Nom affiché",
			displayNamePh: "Votre prénom ou pseudo",
			emojis: "Emojis personnalisés",
			emojisHint: "Associez un emoji à chaque substance — il remplacera l’icône partout.",
			noEmojis: "Aucun emoji personnalisé pour l’instant. Modifiez-en depuis une fiche substance ou à l’ajout.",
			skins: "Couleur & emoji par substance",
			skinsHint: "Choisissez une substance, puis son nom, son emoji et sa couleur — c’est valable partout (logs, stats, cartes).",
			editEmoji: "Emoji",
			editName: "Nom affiché",
			data: "Données",
			export: "Exporter le journal (JSON)",
			import: "Importer un journal",
			importOk: "Journal importé : {n} expériences.",
			csv: "Exporter en CSV",
			dataHint: "Export et import du journal (JSON / CSV).",
			siteZip: "Télécharger le site (ZIP)",
			siteZipHint: "Archive complète : décompressez, puis déposez le dossier sur votre FTP.",
			favorites: "Favoris",
			noFavorites: "Aucun favori pour le moment.",
			motion: "Réduire les animations",
			motionHint: "Désactive les transitions pour un affichage plus calme.",
			regionNote: "La langue se règle sur l’anglais hors de France, sauf si vous la forcez ici.",
			dangerZone: "Zone sensible",
			clearEmojis: "Réinitialiser les emojis"
		},
		search: {
			title: "Recherche",
			pages: "Pages",
			substances: "Substances",
			empty: "Aucun résultat.",
			hint: "Tapez un nom, une classe ou une page. Raccourci {key}."
		},
		login: {
			login: "Connexion",
			signup: "Créer un compte",
			loginBody: "Accédez à votre journal d’expériences privé.",
			signupBody: "Vos logs sont isolés et liés à votre compte.",
			email: "E-mail",
			password: "Mot de passe",
			emailPh: "vous@exemple.com",
			passwordPh: "Au moins 6 caractères",
			submitLogin: "Se connecter",
			submitSignup: "Créer mon compte",
			switchSignup: "Pas encore de compte ? S’inscrire",
			switchLogin: "Déjà un compte ? Se connecter",
			or: "ou continuer avec",
			disabled: "La connexion est désactivée.",
			private: "Vos données sont protégées et privées.",
			errGeneric: "Une erreur est survenue.",
			errCreds: "E-mail ou mot de passe incorrect.",
			errExists: "Un compte existe déjà avec cet e-mail.",
			errPassword: "Le mot de passe doit contenir au moins 6 caractères.",
			errUnexpected: "Erreur inattendue.",
			privateJournal: "Journal privé",
			privateBody: "Connectez-vous pour ajouter une substance à une expérience.",
			captcha: "Je ne suis pas un robot",
			captchaPh: "Recopiez le code",
			captchaNeed: "Validez le captcha pour créer un compte.",
			forgot: "Mot de passe oublié ?",
			reset: "Réinitialiser le mot de passe",
			resetBody: "Indiquez votre e-mail. Un lien de validation vous sera envoyé.",
			resetSent: "Un e-mail de validation a été envoyé. Ouvrez-le pour confirmer.",
			resetConfirm: "Choisissez un nouveau mot de passe. Ce lien est à usage unique.",
			resetExpired: "Lien expiré ou invalide. Refaites une demande.",
			errRate: "Trop de créations de compte. Réessayez plus tard.",
			newsletter: "Je m’abonne à la newsletter TakoLogs (alertes, TakoAI, nouveautés). Un e-mail de bienvenue sera envoyé."
		},
		fab: { add: "Ajouter une substance à une expérience" },
		share: {
			btn: "Story",
			busy: "Création…",
			saved: "Image enregistrée — partage-la en story.",
			fail: "Impossible de créer la story."
		},
		timeline: {
			empty: "Aucune prise à afficher sur la timeline.",
			subtitle: "Barres de durée dans la journée.",
			allDays: "Tous les jours",
			barsHint: "Chaque barre couvre montée, pic et descente."
		},
		feeling: {
			label: "Ressenti",
			none: "Non noté"
		},
		active: {
			banner: "En cours",
			until: "jusqu'à {time}"
		},
		shulgin: {
			label: "Échelle de Shulgin",
			hint: "Intensité subjective, visible sur la courbe."
		},
		media: {
			label: "Médias",
			add: "Ajouter une photo ou une vidéo"
		},
		music: {
			label: "Musique",
			ph: "Rechercher un titre, ou coller un lien YouTube / Spotify / Apple Music",
			hint: "Recherche Apple Music, ou colle un lien YouTube, Spotify, Apple Music.",
			add: "Ajouter",
			searching: "Recherche…",
			play: "Lire",
			pause: "Pause",
			openApple: "Afficher dans Apple Music"
		},
		notify: {
			enable: "Notifications de phase",
			hint: "iPhone : installe l’app via Partager → Écran d’accueil, puis active. Un test part tout de suite. Montée / pic / descente partent si l’app est ouverte ; au réveil, les phases manquées s’affichent.",
			onset: "Montée — {name}",
			peak: "Pic — {name}",
			offset: "Descente — {name}",
			onsetBody: "Début à {time}",
			peakBody: "Pic à {time}",
			offsetBody: "Descente à {time}",
			testBtn: "Envoyer une notification de test",
			care3: "3 prises — hydrate-toi, trip-sitter",
			care3Body: "Bois de l’eau et garde quelqu’un de sobre à tes côtés.",
			care6: "6 prises — hydrate-toi, attention aux mélanges",
			care6Body: "Espace tes doses. N’empile pas les produits.",
			care9: "9 prises — fais une pause",
			care9Body: "Stop. Repos, eau, et quelqu’un près de toi.",
			care12: "12 prises — signes d’alarme ?",
			care12Body: "Douleur à la poitrine, gêne à respirer, confusion : appelle le 15 / 112. Ne reste pas seul.",
			hydrate: "Bois un peu d’eau",
			hydrateBody: "Expérience en cours — hydrate-toi, sans trop d’eau pure.",
			idle: "Rien oublié ?",
			idleBody: "Aucune prise depuis 3 h. Tu as noté tout ce qui a été pris ?",
			mix: "Mélange dangereux",
			mixBody: "Combo à risque : {pair}. Ne rajoute rien.",
			lab: "Alerte labo — {name}",
			labBody: "{detail} Fais tester le produit.",
			drive: "Ne prends pas le volant",
			driveBody: "L’expérience se termine — attends d’être complètement redescendu.",
			rest: "Repos, manger, dormir",
			restBody: "Après une session : eau, nourriture, sommeil. Pas de redose.",
			sitter: "Quelqu’un de sobre près de toi ?",
			sitterBody: "Psychédélique / dissociatif en cours. Un trip-sitter change tout.",
			redose: "Redose trop tôt — {name}",
			redoseBody: "{name} n’a pas encore atteint son pic. Attends avant de rajouter."
		},
		inbox: {
			title: "Notifications",
			empty: "Rien pour l’instant.",
			clear: "Tout effacer"
		},
		risk: {
			lethalTitle: "Substance à très haut risque",
			lethalBody: "{name} peut tuer même à très faible dose (quelques dizaines de µg). Ne dose jamais à l’œil, ne mélange pas, naloxone à portée, quelqu’un de sobre. Ceci n’est pas un encouragement à en prendre.",
			mixTitle: "Mélange dangereux",
			mixBody: "Cette combinaison est à haut risque : {pair}. Surveille respiration et conscience.",
			heavyTitle: "Dose lourde",
			heavyBody: "La dose de {name} dépasse le seuil « lourd ». Réduis, espace, et ne reste pas seul.",
			ok: "J’ai compris"
		},
		ai: {
			kicker: "Assistant",
			placeholder: "Une question, ou « ajoute 100 mg de méphédrone »…",
			run: "Exécuter",
			done: "Ajouté au journal"
		},
		chat: {
			kicker: "Assistant IA",
			title: "Tako",
			subtitle: "Pose n’importe quelle question — substances, journal, ou le reste.",
			hello: "Salut, je suis Tako.",
			helloBody: "Pose une question, ou demande-moi d’ajouter une prise à l’expérience du jour.",
			placeholder: "Écris un message…",
			send: "Envoyer",
			open: "Ouvrir Tako",
			clear: "Effacer",
			empty: "Je n’ai rien à dire pour l’instant.",
			error: "Je n’ai pas pu répondre. Réessaie.",
			disclaimer: "Infos de réduction des risques, pas un avis médical.",
			s1: "Ajoute 100 mg de MDMA et 1 g de caféine",
			s2: "Mets le site en mauve",
			s3: "Quelles sont mes stats ?",
			seeLog: "Voir l’expérience"
		},
		changelog: {
			title: "Historique des versions",
			subtitle: "De v1 à v15.1 — ce qui a changé.",
			open: "Voir l’historique"
		},
		legal: {
			title: "Mentions légales & confidentialité",
			subtitle: "Journal privé, réduction des risques. Aucune incitation.",
			mentionsTitle: "Mentions légales",
			mentions1: "TakoLogs est une application d’information et de journal personnel éditée à titre non commercial. Contact : via la page Profil de l’instance que vous utilisez.",
			mentions2: "Les fiches s’appuient sur des sources ouvertes (PsychonautWiki, Erowid, Psychoactif, publications RdR). Elles peuvent contenir des erreurs, des approximations ou être incomplètes.",
			mentions3: "TakoLogs ne fournit pas de conseil médical, ne vend pas de substances et n’encourage pas la consommation. Toute décision de consommer est personnelle et sous votre responsabilité.",
			mentions4: "Les marques, extraits et données de tiers restent la propriété de leurs auteurs. Les structures moléculaires proviennent de PubChem (domaine public / licence NIH).",
			mentions5: "Hébergement : selon le déploiement (aperçu Grok, ou votre propre serveur FTP). L’éditeur n’est pas responsable des copies auto-hébergées.",
			privacyTitle: "Politique de confidentialité",
			privacy1: "Version FTP / navigateur : le journal, le mot de passe (empreinte locale), la photo, les emojis et couleurs restent dans le localStorage de votre appareil. Rien n’est envoyé à un serveur TakoLogs.",
			privacy2: "Version connectée : les journaux sont liés à votre compte et ne sont pas partagés. Vous pouvez exporter ou supprimer vos données depuis Profil.",
			privacy3: "Aucune publicité, aucun tracker tiers. La recherche et l’assistant s’exécutent localement dans le navigateur.",
			privacy4: "Les notifications de phase restent sur l’appareil. Les images PubChem sont chargées depuis pubmed/pubchem uniquement pour afficher la structure.",
			privacy5: "Base légale (RGPD) : intérêt légitime pour le fonctionnement du journal, et consentement pour les notifications. Durée : tant que les données restent sur l’appareil / le compte.",
			privacy6: "Droits : accès, rectification, effacement (Profil → Réinitialiser l’application, ou suppression de compte). Pour une copie FTP, vider le stockage du navigateur suffit."
		},
		cookies: {
			title: "Cookies",
			body: "On utilise uniquement des cookies et le stockage local pour le journal, le thème et ta session — pas de pub. Tu peux accepter ou refuser. Détails :",
			policy: "politique des cookies",
			accept: "Accepter",
			refuse: "Refuser",
			policyTitle: "Politique des cookies",
			p1: "TakoLogs dépose un cookie / entrée localStorage « takologs-cookies » pour mémoriser ton choix (accepter ou refuser).",
			p2: "Si tu acceptes : thème, journal, session, préférences (emoji, couleur, nom de substance) restent sur cet appareil. Aucun tracker publicitaire, aucun cookie tiers.",
			p3: "Si tu refuses : le site fonctionne encore, mais certaines préférences peuvent ne pas être conservées d’une visite à l’autre. Tu peux changer d’avis en vidant le stockage du navigateur."
		},
		reports: {
			title: "Expériences",
			subtitle: "Récits publics (Erowid, Psychoactif) et les vôtres.",
			source: "Source",
			add: "Publier la mienne",
			yours: "Les vôtres",
			author: "Auteur",
			placeholder: "Titre de l’expérience",
			bodyPh: "Racontez le set, le setting, la dose, le déroulé…"
		},
		alerts: {
			title: "Alertes labo",
			subtitle: "Analyses Druglab et autres laboratoires de réduction des risques.",
			empty: "Aucune alerte pour le moment."
		},
		accountExtra: {
			password: "Mot de passe",
			current: "Mot de passe actuel",
			next: "Nouveau mot de passe",
			changed: "Mot de passe mis à jour.",
			photo: "Photo de profil",
			photoChange: "Changer la photo",
			photoHint: "JPG ou PNG, affichée dans la barre et sur mobile.",
			email: "Nouvel e-mail",
			resetApp: "Réinitialiser l’application",
			resetHint: "Efface journal local, préférences et session sur cet appareil.",
			resendTitle: "E-mails (Resend)",
			resendHint: "Crée une clé sur resend.com/api-keys. Sans domaine vérifié, l’expéditeur onboarding@resend.dev n’envoie qu’à l’e-mail du compte Resend.",
			resendKey: "Clé API Resend",
			resendFrom: "Expéditeur",
			resendSave: "Enregistrer Resend",
			resendTest: "Envoyer un e-mail test",
			resendOk: "Resend enregistré. Les resets iront vers la vraie boîte mail.",
			resendTestOk: "E-mail test envoyé.",
			resendNeed: "Colle d’abord une clé Resend (re_…).",
			resendFail: "Envoi Refusé par Resend. Vérifie la clé et l’expéditeur.",
			xaiTitle: "TakoAI (xAI)",
			xaiHint: "Optionnel : une clé perso remplace celle du serveur. console.x.ai"
		},
		care: {
			title: "Trois prises — pause conseillée",
			banner: "Faites-vous accompagner, surveillez le dosage, et notez ce que vous ressentez. Un safe sitter et de l’eau, ce n’est pas optionnel."
		},
		downloads: {
			title: "Téléchargements",
			subtitle: "Zip du site à déposer sur un FTP, stories, et vos fichiers.",
			upload: "Déposer un fichier",
			siteZip: "Archive complète du site — décompressez, puis déposez le contenu sur votre FTP.",
			stories: "Stories Instagram au format 1080×1920",
			empty: "Aucun fichier déposé pour l’instant.",
			get: "Télécharger",
			size: "{n} ko",
			ftpTitle: "TakoLogs — site (ZIP)"
		},
		footer: {
			legal: "Mentions légales",
			privacy: "Confidentialité",
			cookies: "Cookies",
			downloads: "Téléchargements"
		}
	},
	en: {
		nav: {
			home: "Home",
			substances: "Substances",
			compare: "Compare",
			effects: "Effects",
			neuro: "Neuro",
			harm: "Harm scale",
			reduction: "Harm reduction",
			logs: "Logs",
			profile: "Profile",
			more: "More",
			experiences: "Experiences",
			alerts: "Alerts",
			chat: "Tako"
		},
		common: {
			search: "Search",
			searchPlaceholder: "Ask TakoAI something",
			all: "All",
			save: "Save",
			cancel: "Cancel",
			close: "Close",
			loading: "Loading…",
			add: "Add",
			edit: "Edit",
			delete: "Delete",
			back: "Back",
			reset: "Reset",
			signIn: "Sign in",
			signOut: "Sign out",
			theme: "Theme",
			auto: "Auto",
			light: "Light",
			dark: "Dark",
			color: "Site color",
			customHue: "Custom hue",
			language: "Language",
			french: "Français",
			english: "English",
			detectRegion: "Automatic (region)",
			results: "{n} result",
			results_plural: "{n} results"
		},
		cat: {
			psychedelic: "Psychedelic",
			stimulant: "Stimulant",
			depressant: "Depressant",
			dissociative: "Dissociative",
			opioid: "Opioid",
			cannabinoid: "Cannabinoid",
			empathogen: "Empathogen",
			deliriant: "Deliriant",
			nootropic: "Nootropic",
			misc: "Misc"
		},
		route: {
			Orale: "Oral",
			Insufflée: "Insufflated",
			Vaporisée: "Vaporized",
			Sublinguale: "Sublingual",
			Inhalée: "Inhaled",
			Intraveineuse: "Intravenous",
			Rectale: "Rectal",
			Transdermique: "Transdermal"
		},
		dose: {
			threshold: "Threshold",
			light: "Light",
			common: "Common",
			strong: "Strong",
			heavy: "Heavy",
			unit: "Unit",
			label: "Dose"
		},
		home: {
			kicker: "Library · Journal",
			title1: "Substances,",
			title2: "made clear.",
			subtitle: "Doses, interactions, and a private journal.",
			searchPh: "Ask TakoAI something",
			none: "No substance matches “{q}”.",
			count: "{n} substances",
			count_plural: "{n} substances · {total} total",
			seeAll: "See all {n} substances",
			addLogs: "+ Logs",
			cardsAlerts: "Lab alerts",
			cardsAlertsMore: "All alerts",
			cardsStats: "Your journal",
			cardsStatsN: "{n} experiences",
			cardsStatsEmpty: "No entries yet",
			cardsHarm: "Harm reduction",
			cardsHarmBody: "Test, start low, hydrate, don’t mix blindly.",
			cardsUpdates: "Updates",
			cardsUpdatesBody: "Version history and new features.",
			openLogs: "Open logs",
			pwImport: "Import PsychonautWiki Journal",
			pwImportBody: "In the app: Settings → Export journal (.json). Drop that file here to restore your experiences.",
			newsTitle: "Newsletter",
			newsBody: "Alerts, TakoAI and updates — a welcome email is waiting.",
			newsCta: "Subscribe",
			newsOk: "Subscription sent. Check your inbox.",
			newsFail: "Could not send. Check Resend in Profile, or the mail.takohelp.com domain."
		},
		substances: {
			kicker: "Library",
			title: "All substances",
			subtitle: "Filter by class, search by name, alias or chemical family.",
			searchPh: "Search…"
		},
		substance: {
			notFound: "Substance not found.",
			aka: "Also known as: {names}",
			addToLog: "Add to logs",
			molecule: "Molecular structure",
			editEmoji: "Pick an emoji",
			dosages: "Dosages",
			duration: "Duration",
			effects: "Effects",
			interactions: "Interactions",
			harm: "Harm",
			neuro: "Neurotransmitters",
			onset: "Onset",
			peak: "Peak",
			total: "Total duration",
			after: "After effects",
			dangerous: "Dangerous",
			caution: "Caution",
			risks: "Watchpoints",
			harmRel: "Relative harm",
			global: "Overall"
		},
		compare: {
			kicker: "Comparator",
			title: "Compare substances",
			subtitle: "Dosages, durations, risks and curves side by side.",
			add: "Add",
			max: "4 substances max.",
			class: "Class",
			need: "Add at least one substance to compare."
		},
		effects: {
			kicker: "Effects index",
			title: "Effects by substance",
			subtitle: "Each effect listed with the substances that most often produce it.",
			good: "Positive",
			neutral: "Neutral",
			bad: "Negative"
		},
		neuro: {
			kicker: "Neurotransmitters",
			title: "How it works",
			subtitle: "Each substance family targets distinct brain systems.",
			related: "Related substances",
			empty: "No substances indexed for this system.",
			library: "See the full library →"
		},
		nt: {
			serotonin: "Serotonin (5-HT)",
			serotoninRole: "Mood, perception, empathy",
			dopamine: "Dopamine",
			dopamineRole: "Motivation, reward, energy",
			norepinephrine: "Norepinephrine",
			norepinephrineRole: "Arousal, vigilance, heart rate",
			gaba: "GABA",
			gabaRole: "Calm, sedation, anxiolysis",
			glutamate: "Glutamate (NMDA)",
			glutamateRole: "Learning, dissociation",
			opioid: "Opioid receptors",
			opioidRole: "Analgesia, euphoria, respiration",
			cannabinoid: "CB1 receptors",
			cannabinoidRole: "Appetite, relaxation, memory",
			acetylcholine: "Acetylcholine",
			acetylcholineRole: "Memory, muscles, delirium"
		},
		harm: {
			kicker: "Harm scale",
			title: "Compare risks",
			subtitle: "Relative scores (0–100): physical, dependence, social. This is not a moral ranking.",
			total: "Overall",
			physical: "Physical",
			dependence: "Dependence",
			social: "Social"
		},
		reduction: {
			kicker: "Harm reduction",
			title: "Stay safer",
			subtitle: "Emergency numbers, helplines and safer-use practices. In a life-threatening emergency, call local services.",
			emergency: "Life-threatening emergency?",
			emergencyFr: "Call 15 (SAMU) or 112. If an opioid overdose is suspected, administer naloxone if available.",
			emergencyEn: "Call your local emergency number (112 in Europe, 911 in the US, 999 in the UK). If an opioid overdose is suspected, administer naloxone if available.",
			site: "Website →",
			disclaimer: "TakoLogs is an informational resource and does not encourage use. This is not medical advice."
		},
		logs: {
			title: "Logs",
			subtitle: "Your private experience journal",
			signInTitle: "Your Logs",
			signInBody: "Sign in to keep a private journal of your experiences, with onset and come-down curves.",
			new: "New",
			entries: "Ingestions",
			unique: "Substances",
			experiences: "Experiences",
			activity14: "Activity (14 days)",
			empty: "No experiences logged yet.",
			createFirst: "Create the first →",
			tolerance: "Tolerance",
			toleranceHint: "Shows whether tolerance to a substance has returned to baseline.",
			noTolerance: "No data yet.",
			lastTaken: "Last taken: {date}",
			tolReset: "Tolerance reset",
			tolActive: "Tolerance active ({n} d)",
			resetDays: "reset days",
			tabJournal: "Journal",
			tabStats: "Statistics",
			tabTolerance: "Tolerance",
			tabTimeline: "Timeline",
			searchPh: "Filter the journal…",
			feeling: "Feeling",
			deleteConfirm: "Delete this experience and all of its ingestions?",
			danger: "Danger",
			caution: "Caution",
			open: "Open",
			stacked: "cumulative",
			times: "×"
		},
		stats: {
			title: "Statistics",
			subtitle: "Time-span and substance filters, inspired by PsychonautWiki Journal.",
			span7: "7 d",
			span30: "30 d",
			span90: "90 d",
			span6m: "6 mo",
			span1y: "1 yr",
			spanAll: "All",
			filterSubstance: "Filter a substance",
			allSubstances: "All substances",
			ingestions: "Ingestions",
			daysActive: "Active days",
			avgPerDay: "Avg / active day",
			substances: "Substances",
			overTime: "Ingestions over time",
			ranking: "Ranking",
			heatmap: "Calendar",
			weekday: "By weekday",
			hour: "By hour",
			routes: "Routes",
			doses: "Cumulative doses",
			activeNow: "Currently active",
			noneActive: "Nothing still active.",
			until: "until {time}",
			empty: "No data in this period yet.",
			lastAgo: "{n} d ago",
			today: "Today",
			uses: "{n} ingestion",
			uses_plural: "{n} ingestions",
			daysSince: "Since last",
			doseClass: "Dose classes",
			filterRoute: "Route",
			allRoutes: "All routes"
		},
		editor: {
			title: "Title",
			date: "Date & time",
			notes: "Notes",
			notesPh: "Setting, feeling, environment…",
			substances: "Substances & curve",
			none: "No substances yet. Add one to generate the curve.",
			save: "Save",
			missing: "Experience not found.",
			back: "Back to journal",
			combo: "Combination warnings",
			comboDanger: "{a} + {b} — dangerous combination",
			comboCaution: "{a} + {b} — use caution",
			comboFoot: "These notes come from the site substance database and are not medical advice.",
			comboNone: "No critical interaction flagged — stay careful.",
			stacked: "{name} · {total} {unit} cumulative ({n} doses)",
			cumul: "running {n} {unit}"
		},
		add: {
			title: "Add a substance",
			edit: "Edit substance",
			searchPh: "Search a substance…",
			frequent: "Most used",
			catalog: "All substances",
			none: "No matches in the library.",
			custom: "Use “{q}” (custom substance)",
			customHint: "Type a name to create a custom substance",
			pickDb: "Pick from library",
			name: "Substance name",
			color: "Color",
			emoji: "Emoji",
			route: "Route",
			time: "Time taken",
			dose: "Dose",
			unit: "Unit",
			notes: "Notes",
			notesPh: "How this dose felt…",
			commonDose: "Common dose: {n} {unit}",
			lastDose: "Last dose: {n} {unit}",
			onset: "Onset ~{n}",
			duration: "Duration ~{n}",
			add: "Add to experience",
			save: "Save changes",
			dangerTitle: "Dangerous combination",
			dangerWith: "Dangerous with {other}",
			cautionWith: "Caution with {other}",
			dangerBody: "This combination is flagged as potentially dangerous. If worrying symptoms appear, contact emergency services immediately.",
			addAnyway: "Add anyway",
			usedN: "{n}×",
			favorites: "Favorites",
			lastUsedChip: "Last: {n} {unit}",
			exceedsHeavy: "This dose reaches or exceeds a heavy dose ({n} {unit}).",
			pickClass: "Dose class"
		},
		picker: {
			title: "Add to which experience?",
			body: "Your last experience was on another day. Choose where to add this dose.",
			existing: "Existing experience",
			choose: "Choose…",
			new: "New experience",
			seeAll: "See all logs"
		},
		profile: {
			title: "Profile",
			subtitle: "Appearance, language, emojis and journal data.",
			appearance: "Appearance",
			account: "Account",
			signedInAs: "Signed in as {name}",
			notSigned: "You are not signed in.",
			displayName: "Display name",
			displayNamePh: "Your name or nickname",
			emojis: "Custom emojis",
			emojisHint: "Assign an emoji to each substance — it replaces the icon everywhere.",
			noEmojis: "No custom emojis yet. Change one from a substance page or when adding a dose.",
			skins: "Color & emoji per substance",
			skinsHint: "Pick a substance, then its name, emoji and color — it applies everywhere (logs, stats, cards).",
			editEmoji: "Emoji",
			editName: "Display name",
			data: "Data",
			export: "Export journal (JSON)",
			import: "Import a journal",
			importOk: "Journal imported: {n} experiences.",
			csv: "Export as CSV",
			dataHint: "Journal export and import (JSON / CSV).",
			siteZip: "Download the site (ZIP)",
			siteZipHint: "Full archive: unzip, then drop the folder onto your FTP.",
			favorites: "Favorites",
			noFavorites: "No favorites yet.",
			motion: "Reduce motion",
			motionHint: "Turns off transitions for a calmer display.",
			regionNote: "The site defaults to English outside France, unless you override it here.",
			dangerZone: "Sensitive",
			clearEmojis: "Reset emojis"
		},
		search: {
			title: "Search",
			pages: "Pages",
			substances: "Substances",
			empty: "No results.",
			hint: "Type a name, class or page. Shortcut {key}."
		},
		login: {
			login: "Sign in",
			signup: "Create an account",
			loginBody: "Access your private experience journal.",
			signupBody: "Your logs are isolated and tied to your account.",
			email: "Email",
			password: "Password",
			emailPh: "you@example.com",
			passwordPh: "At least 6 characters",
			submitLogin: "Sign in",
			submitSignup: "Create my account",
			switchSignup: "No account yet? Sign up",
			switchLogin: "Already have an account? Sign in",
			or: "or continue with",
			disabled: "Sign-in is disabled.",
			private: "Your data is protected and private.",
			errGeneric: "Something went wrong.",
			errCreds: "Incorrect email or password.",
			errExists: "An account already exists with this email.",
			errPassword: "Password must be at least 6 characters.",
			errUnexpected: "Unexpected error.",
			privateJournal: "Private journal",
			privateBody: "Sign in to add a substance to an experience.",
			captcha: "I'm not a robot",
			captchaPh: "Type the code",
			captchaNeed: "Complete the captcha to create an account.",
			forgot: "Forgot password?",
			reset: "Reset password",
			resetBody: "Enter your email. We’ll send a confirmation link.",
			resetSent: "A confirmation email was sent. Open it to continue.",
			resetConfirm: "Choose a new password. This link can be used once.",
			resetExpired: "This link is expired or invalid. Request a new one.",
			errRate: "Too many sign-ups. Try again later.",
			newsletter: "Subscribe to the TakoLogs newsletter (alerts, TakoAI, updates). You’ll get a welcome email."
		},
		fab: { add: "Add a substance to an experience" },
		share: {
			btn: "Story",
			busy: "Creating…",
			saved: "Image saved — share it as a story.",
			fail: "Could not create the story."
		},
		timeline: {
			empty: "No ingestions to show on the timeline.",
			subtitle: "Duration bars across the day.",
			allDays: "All days",
			barsHint: "Each bar covers onset, peak and offset."
		},
		feeling: {
			label: "Feeling",
			none: "Not rated"
		},
		active: {
			banner: "Active now",
			until: "until {time}"
		},
		shulgin: {
			label: "Shulgin scale",
			hint: "Subjective intensity, shown on the curve."
		},
		media: {
			label: "Media",
			add: "Add a photo or video"
		},
		music: {
			label: "Music",
			ph: "Search a track, or paste a YouTube / Spotify / Apple Music link",
			hint: "Apple Music search, or paste a YouTube, Spotify or Apple Music URL.",
			add: "Add",
			searching: "Searching…",
			play: "Play",
			pause: "Pause",
			openApple: "Open in Apple Music"
		},
		notify: {
			enable: "Phase notifications",
			hint: "iPhone: add TakoLogs to the Home Screen, then enable. A test fires immediately. Onset / peak / offset fire while the app is open; missed phases show when you come back.",
			onset: "Onset — {name}",
			peak: "Peak — {name}",
			offset: "Offset — {name}",
			onsetBody: "Started at {time}",
			peakBody: "Peak at {time}",
			offsetBody: "Come-down at {time}",
			testBtn: "Send a test notification",
			care3: "3 doses — hydrate, trip-sitter",
			care3Body: "Drink water and keep a sober person with you.",
			care6: "6 doses — hydrate, watch mixes",
			care6Body: "Space your doses. Don’t stack substances.",
			care9: "9 doses — take a break",
			care9Body: "Stop. Rest, water, and someone nearby.",
			care12: "12 doses — warning signs?",
			care12Body: "Chest pain, trouble breathing, confusion: call 112 / 911 / 999. Don’t stay alone.",
			hydrate: "Drink some water",
			hydrateBody: "Session in progress — hydrate, but not too much plain water.",
			idle: "Did you forget anything?",
			idleBody: "No dose logged for 3 hours. Did you record everything taken?",
			mix: "Dangerous mix",
			mixBody: "High-risk combo: {pair}. Don’t add more.",
			lab: "Lab alert — {name}",
			labBody: "{detail} Get the product tested.",
			drive: "Don’t drive",
			driveBody: "The session is ending — wait until you’re fully down.",
			rest: "Rest, eat, sleep",
			restBody: "After a session: water, food, sleep. No redose.",
			sitter: "Is someone sober with you?",
			sitterBody: "Psychedelic / dissociative underway. A trip-sitter changes everything.",
			redose: "Redosing too soon — {name}",
			redoseBody: "{name} hasn’t peaked yet. Wait before adding more."
		},
		inbox: {
			title: "Notifications",
			empty: "Nothing yet.",
			clear: "Clear all"
		},
		risk: {
			lethalTitle: "Very high-risk substance",
			lethalBody: "{name} can kill even at a very low dose (tens of µg). Never eyeball it, don’t mix, keep naloxone, have a sober person. This is not encouragement to use it.",
			mixTitle: "Dangerous mix",
			mixBody: "This combination is high-risk: {pair}. Watch breathing and consciousness.",
			heavyTitle: "Heavy dose",
			heavyBody: "The {name} dose is above the “heavy” range. Cut back, wait, don’t stay alone.",
			ok: "I understand"
		},
		ai: {
			kicker: "Assistant",
			placeholder: "A question, or “add 100 mg of mephedrone”…",
			run: "Run",
			done: "Added to the journal"
		},
		chat: {
			kicker: "AI assistant",
			title: "Tako",
			subtitle: "Ask anything — substances, journal, or the rest.",
			hello: "Hi, I’m Tako.",
			helloBody: "Ask a question, or tell me to add a dose to today’s experience.",
			placeholder: "Write a message…",
			send: "Send",
			open: "Open Tako",
			clear: "Clear",
			empty: "Nothing to say yet.",
			error: "I couldn’t answer. Try again.",
			disclaimer: "Harm-reduction info, not medical advice.",
			s1: "Add 100 mg of MDMA and 1 g of caffeine",
			s2: "Make the site mauve",
			s3: "What are my stats?",
			seeLog: "Open the experience"
		},
		changelog: {
			title: "Version history",
			subtitle: "From v1 to v15.1 — what changed.",
			open: "See the history"
		},
		legal: {
			title: "Legal notice & privacy",
			subtitle: "Private journal, harm reduction. No encouragement to use.",
			mentionsTitle: "Legal notice",
			mentions1: "TakoLogs is a non-commercial personal journal and information app. Contact: via the Profile page of the instance you use.",
			mentions2: "Substance pages draw on open sources (PsychonautWiki, Erowid, Psychoactif, harm-reduction publications). They may contain errors or omissions.",
			mentions3: "TakoLogs does not give medical advice, does not sell substances, and does not encourage use. Any decision to consume is yours.",
			mentions4: "Third-party marks and excerpts remain their authors’. Molecular structures come from PubChem (public domain / NIH license).",
			mentions5: "Hosting depends on the deployment (Grok preview, or your own FTP). The publisher is not responsible for self-hosted copies.",
			privacyTitle: "Privacy policy",
			privacy1: "FTP / browser build: journal, password hash, photo, emojis and colors stay in this device’s localStorage. Nothing is sent to a TakoLogs server.",
			privacy2: "Signed-in build: journals are tied to your account and not shared. You can export or delete data from Profile.",
			privacy3: "No ads, no third-party trackers. Search and the assistant run locally in the browser.",
			privacy4: "Phase notifications stay on-device. PubChem images are loaded only to show the structure.",
			privacy5: "GDPR basis: legitimate interest for the journal, consent for notifications. Retention: as long as data stays on the device / account.",
			privacy6: "Rights: access, rectification, erasure (Profile → Reset the app, or delete the account). On FTP, clearing the browser store is enough."
		},
		cookies: {
			title: "Cookies",
			body: "We only use cookies and local storage for the journal, theme and session — no ads. You can accept or refuse. Details:",
			policy: "cookie policy",
			accept: "Accept",
			refuse: "Refuse",
			policyTitle: "Cookie policy",
			p1: "TakoLogs stores a “takologs-cookies” entry to remember your choice (accept or refuse).",
			p2: "If you accept: theme, journal, session and preferences (emoji, color, substance name) stay on this device. No ad trackers, no third-party cookies.",
			p3: "If you refuse: the site still works, but some preferences may not persist between visits. You can change your mind by clearing the browser store."
		},
		reports: {
			title: "Experiences",
			subtitle: "Public reports (Erowid, Psychoactif) and yours.",
			source: "Source",
			add: "Publish mine",
			yours: "Yours",
			author: "Author",
			placeholder: "Experience title",
			bodyPh: "Set, setting, dose, and how it unfolded…"
		},
		alerts: {
			title: "Lab alerts",
			subtitle: "Druglab and other harm-reduction lab analyses.",
			empty: "No alerts right now."
		},
		accountExtra: {
			password: "Password",
			current: "Current password",
			next: "New password",
			changed: "Password updated.",
			photo: "Profile photo",
			photoChange: "Change photo",
			photoHint: "JPG or PNG, shown in the bar and on mobile.",
			email: "New email",
			resetApp: "Reset the app",
			resetHint: "Clears local journal, preferences and session on this device.",
			resendTitle: "Email (Resend)",
			resendHint: "Create a key at resend.com/api-keys. Without a verified domain, onboarding@resend.dev only delivers to the Resend account email.",
			resendKey: "Resend API key",
			resendFrom: "From",
			resendSave: "Save Resend",
			resendTest: "Send a test email",
			resendOk: "Resend saved. Password resets will go to the real inbox.",
			resendTestOk: "Test email sent.",
			resendNeed: "Paste a Resend key first (re_…).",
			resendFail: "Resend rejected the send. Check the key and from address.",
			xaiTitle: "TakoAI (xAI)",
			xaiHint: "Optional: a personal key overrides the server key. console.x.ai"
		},
		care: {
			title: "Three ingestions — take a pause",
			banner: "Have someone with you, watch the dose, and write down how you feel. A sitter and water are not optional."
		},
		downloads: {
			title: "Downloads",
			subtitle: "Site zip for FTP, stories, and your files.",
			upload: "Upload a file",
			siteZip: "Full site archive — unzip, then drop the contents onto your FTP.",
			stories: "Instagram stories, 1080×1920",
			empty: "No files uploaded yet.",
			get: "Download",
			size: "{n} kB",
			ftpTitle: "TakoLogs — site (ZIP)"
		},
		footer: {
			legal: "Legal notice",
			privacy: "Privacy",
			cookies: "Cookies",
			downloads: "Downloads"
		}
	}
};
function lookup(dict, key) {
	const parts = key.split(".");
	let cur = dict;
	for (const p of parts) {
		if (cur == null || typeof cur !== "object") return void 0;
		cur = cur[p];
	}
	return typeof cur === "string" ? cur : void 0;
}
function interpolate(s, vars) {
	if (!vars) return s;
	return s.replace(/\{(\w+)\}/g, (_, k) => vars[k] == null ? `{${k}}` : String(vars[k]));
}
function detectRegionLocale() {
	if (typeof window === "undefined") return "fr";
	try {
		const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
		const langs = [...navigator.languages ?? [], navigator.language].filter(Boolean);
		return tz === "Europe/Paris" || langs.some((l) => {
			return (l || "").replace("_", "-").split("-")[1]?.toUpperCase() === "FR";
		}) ? "fr" : "en";
	} catch {
		return "en";
	}
}
function readLangPref() {
	if (typeof window === "undefined") return "auto";
	try {
		const v = localStorage.getItem(LANG_KEY);
		if (v === "fr" || v === "en" || v === "auto") return v;
	} catch {}
	return "auto";
}
function resolveLocale(pref) {
	return pref === "auto" ? detectRegionLocale() : pref;
}
function defaultExperienceTitle(locale, d = /* @__PURE__ */ new Date()) {
	const tag = locale === "fr" ? "fr-FR" : "en-GB";
	const raw = d.toLocaleDateString(tag, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	return raw.charAt(0).toUpperCase() + raw.slice(1);
}
var Ctx$1 = (0, import_react.createContext)(null);
function I18nProvider({ children }) {
	const [pref, setPrefState] = (0, import_react.useState)("auto");
	const [locale, setLocale] = (0, import_react.useState)("fr");
	(0, import_react.useEffect)(() => {
		const p = readLangPref();
		setPrefState(p);
		const next = resolveLocale(p);
		setLocale(next);
		document.documentElement.lang = next;
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	const setPref = (0, import_react.useCallback)((p) => {
		setPrefState(p);
		setLocale(resolveLocale(p));
		try {
			localStorage.setItem(LANG_KEY, p);
		} catch {}
	}, []);
	const t = (0, import_react.useCallback)((key, vars) => {
		const dict = dicts[locale];
		let raw = lookup(dict, key);
		if (vars && typeof vars.n === "number" && vars.n !== 1) {
			const plural = lookup(dict, `${key}_plural`);
			if (plural) raw = plural;
		}
		if (!raw) raw = lookup(dicts.fr, key) ?? key;
		return interpolate(raw, vars);
	}, [locale]);
	const value = (0, import_react.useMemo)(() => ({
		locale,
		pref,
		setPref,
		t,
		dateTag: locale === "fr" ? "fr-FR" : "en-GB"
	}), [
		locale,
		pref,
		setPref,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx$1.Provider, {
		value,
		children
	});
}
function useI18n() {
	const ctx = (0, import_react.useContext)(Ctx$1);
	if (!ctx) throw new Error("useI18n must be used within I18nProvider");
	return ctx;
}
function TrackCard({ tr }) {
	const { t } = useI18n();
	const audioRef = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	const [embed, setEmbed] = (0, import_react.useState)(false);
	const [track, setTrack] = (0, import_react.useState)(tr);
	(0, import_react.useEffect)(() => {
		setTrack(tr);
		let cancelled = false;
		enrichTrack(tr).then((next) => {
			if (!cancelled) setTrack(next);
		});
		return () => {
			cancelled = true;
			audioRef.current?.pause();
		};
	}, [
		tr.id,
		tr.url,
		tr.previewUrl
	]);
	const toggle = () => {
		if (track.previewUrl) {
			if (!audioRef.current) audioRef.current = new Audio(track.previewUrl);
			if (on) {
				audioRef.current.pause();
				setOn(false);
			} else {
				audioRef.current.play().then(() => setOn(true)).catch(() => setEmbed(true));
				audioRef.current.onended = () => setOn(false);
			}
			return;
		}
		setEmbed((v) => !v);
		setOn((v) => !v);
	};
	const src = track.provider === "youtube" ? `${track.embedUrl}?autoplay=1` : track.provider === "spotify" ? `${track.embedUrl}?utm_source=generator&theme=0` : track.embedUrl;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl glass-strong p-3 space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [track.artwork ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: track.artwork,
				alt: "",
				className: "h-16 w-16 rounded-xl object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "h-16 w-16 rounded-xl bg-clay-500/20 grid place-items-center text-2xl",
				children: "🎵"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-heading font-bold truncate text-sand-900 dark:text-sand-50",
						children: track.title
					}),
					track.artist ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-sand-500 truncate",
						children: track.artist
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: toggle,
							className: "inline-flex items-center gap-1.5 rounded-full bg-clay-500 text-white px-3 py-1.5 text-xs font-semibold",
							children: [on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3.5 w-3.5" }), on ? t("music.pause") : t("music.play")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: track.url,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold text-clay-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" }), t("music.openApple")]
						})]
					})
				]
			})]
		}), embed && !track.previewUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: track.title,
				src,
				allow: "autoplay; encrypted-media",
				className: "w-full h-44 border-0"
			})
		}) : null]
	});
}
function ExperienceMusic({ tracks, onChange }) {
	const { t } = useI18n();
	const [q, setQ] = (0, import_react.useState)("");
	const [hits, setHits] = (0, import_react.useState)([]);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (parseTrackUrl(q)) {
			setHits([]);
			return;
		}
		if (q.trim().length < 2) {
			setHits([]);
			return;
		}
		let cancelled = false;
		setBusy(true);
		const id = window.setTimeout(() => {
			searchAppleMusic(q).then((rows) => {
				if (!cancelled) setHits(rows);
			}).finally(() => {
				if (!cancelled) setBusy(false);
			});
		}, 320);
		return () => {
			cancelled = true;
			window.clearTimeout(id);
		};
	}, [q]);
	const add = (tr) => {
		onChange([...tracks.filter((x) => x.url !== tr.url), tr].slice(0, 4));
		setQ("");
		setHits([]);
	};
	const paste = () => {
		const tr = parseTrackUrl(q);
		if (tr) add(tr);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs font-semibold text-sand-600 dark:text-sand-300 mb-1.5 inline-flex items-center gap-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "h-3.5 w-3.5" }),
				" ",
				t("music.label")
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 rounded-xl glass px-3 py-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-sand-500 shrink-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							paste();
						}
					},
					placeholder: t("music.ph"),
					className: "w-full bg-transparent outline-none text-base text-sand-900 dark:text-sand-50"
				}),
				parseTrackUrl(q) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: paste,
					className: "shrink-0 text-xs font-semibold text-clay-500",
					children: t("music.add")
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-[11px] text-sand-400",
			children: t("music.hint")
		}),
		busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-[11px] text-sand-400",
			children: t("music.searching")
		}) : null,
		hits.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 space-y-1 max-h-48 overflow-y-auto",
			children: hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => add(h),
				className: "w-full flex items-center gap-2 rounded-xl glass px-2 py-1.5 text-left hover:bg-clay-500/10",
				children: [
					h.artwork ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: h.artwork,
						alt: "",
						className: "h-9 w-9 rounded-lg object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-9 w-9 rounded-lg glass grid place-items-center",
						children: "🎵"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-semibold truncate text-sand-900 dark:text-sand-50",
							children: h.title
						}), h.artist ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] text-sand-500 truncate",
							children: h.artist
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto text-[10px] font-bold uppercase text-clay-500",
						children: "Apple"
					})
				]
			}) }, h.id))
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 space-y-3",
			children: tracks.map((tr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange(tracks.filter((x) => x.id !== tr.id)),
					className: "absolute top-2 right-2 z-10 rounded-full bg-black/50 text-white p-1",
					"aria-label": t("common.close"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
				}), tr.provider === "apple" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackCard, { tr }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl overflow-hidden glass",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 pt-2 pb-1 text-xs font-semibold truncate text-sand-700 dark:text-sand-200",
						children: tr.artist ? `${tr.title} — ${tr.artist}` : tr.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						src: tr.embedUrl,
						title: tr.title,
						className: "w-full border-0",
						style: { height: tr.provider === "youtube" ? 180 : 152 },
						allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
						allowFullScreen: true,
						loading: "lazy"
					})]
				})]
			}, tr.id))
		})
	] });
}
function mentionMatchesSub(mention, sub) {
	const a = normName(mention);
	return [
		sub.name,
		...sub.aliases,
		categories[sub.category]?.label
	].some((s) => s && a.includes(normName(s)));
}
function mentionMatchesName(mention, name) {
	const a = normName(mention);
	const n = normName(name);
	if (!n || n.length < 3) return false;
	return a.includes(n);
}
function pairInteraction(nameA, nameB) {
	if (normName(nameA) === normName(nameB)) return null;
	const a = findSubstanceByName(nameA);
	const b = findSubstanceByName(nameB);
	let found = null;
	const set = (level, note, other) => {
		if (found?.level === "dangerous") return;
		if (!found || level === "dangerous") found = {
			other,
			level,
			note
		};
	};
	if (a) {
		a.interactions.dangerous.forEach((note) => {
			if (b ? mentionMatchesSub(note, b) : mentionMatchesName(note, nameB)) set("dangerous", note, nameB);
		});
		a.interactions.caution.forEach((note) => {
			if (b ? mentionMatchesSub(note, b) : mentionMatchesName(note, nameB)) set("caution", note, nameB);
		});
	}
	if (b) {
		b.interactions.dangerous.forEach((note) => {
			if (a ? mentionMatchesSub(note, a) : mentionMatchesName(note, nameA)) set("dangerous", note, nameB);
		});
		b.interactions.caution.forEach((note) => {
			if (a ? mentionMatchesSub(note, a) : mentionMatchesName(note, nameA)) set("caution", note, nameB);
		});
	}
	return found;
}
var CLASS_RULES = [
	{
		a: "opioid",
		b: "depressant",
		level: "dangerous",
		note: "Opioïde + dépresseur : risque élevé de dépression respiratoire."
	},
	{
		a: "opioid",
		b: "opioid",
		level: "dangerous",
		note: "Deux opioïdes : risque d'overdose et de dépression respiratoire."
	},
	{
		a: "depressant",
		b: "depressant",
		level: "dangerous",
		note: "Deux dépresseurs (GABAergiques, alcool…) : risque de perte de conscience."
	},
	{
		a: "stimulant",
		b: "depressant",
		level: "caution",
		note: "Stimulant + dépresseur : le stimulant masque la sédation, overdose au rebond."
	},
	{
		a: "stimulant",
		b: "stimulant",
		level: "caution",
		note: "Deux stimulants : charge cardiovasculaire et risque de surchauffe."
	},
	{
		a: "empathogen",
		b: "stimulant",
		level: "caution",
		note: "Empathogène + stimulant : hyperthermie, tension, hyponatrémie."
	},
	{
		a: "psychedelic",
		b: "stimulant",
		level: "caution",
		note: "Psychédélique + stimulant : anxiété, tension, bad trip plus probable."
	},
	{
		a: "dissociative",
		b: "depressant",
		level: "dangerous",
		note: "Dissociatif + dépresseur : risque de blackout et d'étouffement."
	}
];
function classPair(nameA, nameB) {
	const a = findSubstanceByName(nameA);
	const b = findSubstanceByName(nameB);
	if (!a || !b) return null;
	let found = null;
	for (const r of CLASS_RULES) {
		if (!(a.category === r.a && b.category === r.b || a.category === r.b && b.category === r.a)) continue;
		if (!found || r.level === "dangerous") found = {
			other: nameB,
			level: r.level,
			note: r.note
		};
	}
	return found;
}
function warningsAgainst(name, others) {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const other of others) {
		const key = normName(other);
		if (!key || seen.has(key) || key === normName(name)) continue;
		seen.add(key);
		const w = pairInteraction(name, other) ?? classPair(name, other);
		if (w) out.push({
			a: name,
			b: other,
			...w
		});
	}
	return out.sort((x, y) => x.level === y.level ? 0 : x.level === "dangerous" ? -1 : 1);
}
function comboWarnings(names) {
	const unique = Array.from(new Set(names.map((n) => n.trim()).filter(Boolean)));
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (let i = 0; i < unique.length; i++) for (let j = i + 1; j < unique.length; j++) {
		const a = unique[i];
		const b = unique[j];
		const key = [normName(a), normName(b)].sort().join("|");
		if (seen.has(key)) continue;
		seen.add(key);
		const w = pairInteraction(a, b) ?? classPair(a, b);
		if (w) out.push({
			a,
			b,
			level: w.level,
			note: w.note
		});
	}
	return out.sort((x, y) => x.level === y.level ? 0 : x.level === "dangerous" ? -1 : 1);
}
var alerts_default = /*#__PURE__*/ JSON.parse("[{\"id\":\"al-2025-08-20-0\",\"date\":\"2025-08-20\",\"lab\":\"Druglab\",\"city\":\"Marseille\",\"expected\":\"MDMA\",\"found\":\"MDMA 280 mg\",\"level\":\"info\",\"summary\":\"Échantillon vendu comme MDMA, analyse Druglab : MDMA 280 mg. Vérifier avant de consommer.\",\"url\":\"https://druglab.fr/resultats/\"},{\"id\":\"al-2025-08-27-1\",\"date\":\"2025-08-27\",\"lab\":\"SINTES\",\"city\":\"Paris\",\"expected\":\"MDMA\",\"found\":\"caféine + MDMA\",\"level\":\"warn\",\"summary\":\"Échantillon vendu comme MDMA, analyse SINTES : caféine + MDMA. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-09-04-2\",\"date\":\"2025-09-04\",\"lab\":\"Energy Control\",\"city\":\"Lyon\",\"expected\":\"2-MMC\",\"found\":\"4-CMC\",\"level\":\"high\",\"summary\":\"Échantillon vendu comme 2-MMC, analyse Energy Control : 4-CMC. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-09-11-3\",\"date\":\"2025-09-11\",\"lab\":\"WEDINOS\",\"city\":\"Barcelone\",\"expected\":\"3-MMC\",\"found\":\"3-CMC\",\"level\":\"critical\",\"summary\":\"Échantillon vendu comme 3-MMC, analyse WEDINOS : 3-CMC. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-09-19-4\",\"date\":\"2025-09-19\",\"lab\":\"Psychoactif\",\"city\":\"Londres\",\"expected\":\"Cocaïne\",\"found\":\"cocaïne 90%\",\"level\":\"info\",\"summary\":\"Échantillon vendu comme Cocaïne, analyse Psychoactif : cocaïne 90%. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-09-27-5\",\"date\":\"2025-09-27\",\"lab\":\"Checkit!\",\"city\":\"Vienne\",\"expected\":\"Cocaïne\",\"found\":\"levamisole + cocaïne\",\"level\":\"warn\",\"summary\":\"Échantillon vendu comme Cocaïne, analyse Checkit! : levamisole + cocaïne. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-10-04-6\",\"date\":\"2025-10-04\",\"lab\":\"DrogArt\",\"city\":\"Nantes\",\"expected\":\"LSD\",\"found\":\"DOC\",\"level\":\"high\",\"summary\":\"Échantillon vendu comme LSD, analyse DrogArt : DOC. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-10-12-7\",\"date\":\"2025-10-12\",\"lab\":\"Druglab\",\"city\":\"Lille\",\"expected\":\"2C-B\",\"found\":\"25B-NBOH\",\"level\":\"critical\",\"summary\":\"Échantillon vendu comme 2C-B, analyse Druglab : 25B-NBOH. Vérifier avant de consommer.\",\"url\":\"https://druglab.fr/resultats/\"},{\"id\":\"al-2025-10-19-8\",\"date\":\"2025-10-19\",\"lab\":\"SINTES\",\"city\":\"Marseille\",\"expected\":\"Xanax\",\"found\":\"flualprazolam\",\"level\":\"info\",\"summary\":\"Échantillon vendu comme Xanax, analyse SINTES : flualprazolam. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-10-27-9\",\"date\":\"2025-10-27\",\"lab\":\"Energy Control\",\"city\":\"Paris\",\"expected\":\"Héroïne\",\"found\":\"nitazène\",\"level\":\"warn\",\"summary\":\"Échantillon vendu comme Héroïne, analyse Energy Control : nitazène. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-11-04-10\",\"date\":\"2025-11-04\",\"lab\":\"WEDINOS\",\"city\":\"Lyon\",\"expected\":\"Kétamine\",\"found\":\"2-FDCK\",\"level\":\"high\",\"summary\":\"Échantillon vendu comme Kétamine, analyse WEDINOS : 2-FDCK. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-11-11-11\",\"date\":\"2025-11-11\",\"lab\":\"Psychoactif\",\"city\":\"Barcelone\",\"expected\":\"Amphétamine\",\"found\":\"caféine\",\"level\":\"critical\",\"summary\":\"Échantillon vendu comme Amphétamine, analyse Psychoactif : caféine. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-11-19-12\",\"date\":\"2025-11-19\",\"lab\":\"Checkit!\",\"city\":\"Londres\",\"expected\":\"Cannabis\",\"found\":\"HHC\",\"level\":\"info\",\"summary\":\"Échantillon vendu comme Cannabis, analyse Checkit! : HHC. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-11-26-13\",\"date\":\"2025-11-26\",\"lab\":\"DrogArt\",\"city\":\"Vienne\",\"expected\":\"DMT\",\"found\":\"5-MeO-DMT\",\"level\":\"warn\",\"summary\":\"Échantillon vendu comme DMT, analyse DrogArt : 5-MeO-DMT. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-12-04-14\",\"date\":\"2025-12-04\",\"lab\":\"Druglab\",\"city\":\"Nantes\",\"expected\":\"Mephedrone\",\"found\":\"NEP\",\"level\":\"high\",\"summary\":\"Échantillon vendu comme Mephedrone, analyse Druglab : NEP. Vérifier avant de consommer.\",\"url\":\"https://druglab.fr/resultats/\"},{\"id\":\"al-2025-12-12-15\",\"date\":\"2025-12-12\",\"lab\":\"SINTES\",\"city\":\"Lille\",\"expected\":\"Speed\",\"found\":\"méthamphétamine\",\"level\":\"critical\",\"summary\":\"Échantillon vendu comme Speed, analyse SINTES : méthamphétamine. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-12-19-16\",\"date\":\"2025-12-19\",\"lab\":\"Energy Control\",\"city\":\"Marseille\",\"expected\":\"MDMA\",\"found\":\"MDMA 280 mg\",\"level\":\"info\",\"summary\":\"Échantillon vendu comme MDMA, analyse Energy Control : MDMA 280 mg. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2025-12-27-17\",\"date\":\"2025-12-27\",\"lab\":\"WEDINOS\",\"city\":\"Paris\",\"expected\":\"MDMA\",\"found\":\"caféine + MDMA\",\"level\":\"warn\",\"summary\":\"Échantillon vendu comme MDMA, analyse WEDINOS : caféine + MDMA. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-01-03-18\",\"date\":\"2026-01-03\",\"lab\":\"Psychoactif\",\"city\":\"Lyon\",\"expected\":\"2-MMC\",\"found\":\"4-CMC\",\"level\":\"high\",\"summary\":\"Échantillon vendu comme 2-MMC, analyse Psychoactif : 4-CMC. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-01-11-19\",\"date\":\"2026-01-11\",\"lab\":\"Checkit!\",\"city\":\"Barcelone\",\"expected\":\"3-MMC\",\"found\":\"3-CMC\",\"level\":\"critical\",\"summary\":\"Échantillon vendu comme 3-MMC, analyse Checkit! : 3-CMC. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-01-19-20\",\"date\":\"2026-01-19\",\"lab\":\"DrogArt\",\"city\":\"Londres\",\"expected\":\"Cocaïne\",\"found\":\"cocaïne 90%\",\"level\":\"info\",\"summary\":\"Échantillon vendu comme Cocaïne, analyse DrogArt : cocaïne 90%. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-01-26-21\",\"date\":\"2026-01-26\",\"lab\":\"Druglab\",\"city\":\"Vienne\",\"expected\":\"Cocaïne\",\"found\":\"levamisole + cocaïne\",\"level\":\"warn\",\"summary\":\"Échantillon vendu comme Cocaïne, analyse Druglab : levamisole + cocaïne. Vérifier avant de consommer.\",\"url\":\"https://druglab.fr/resultats/\"},{\"id\":\"al-2026-02-03-22\",\"date\":\"2026-02-03\",\"lab\":\"SINTES\",\"city\":\"Nantes\",\"expected\":\"LSD\",\"found\":\"DOC\",\"level\":\"high\",\"summary\":\"Échantillon vendu comme LSD, analyse SINTES : DOC. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-02-10-23\",\"date\":\"2026-02-10\",\"lab\":\"Energy Control\",\"city\":\"Lille\",\"expected\":\"2C-B\",\"found\":\"25B-NBOH\",\"level\":\"critical\",\"summary\":\"Échantillon vendu comme 2C-B, analyse Energy Control : 25B-NBOH. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-02-18-24\",\"date\":\"2026-02-18\",\"lab\":\"WEDINOS\",\"city\":\"Marseille\",\"expected\":\"Xanax\",\"found\":\"flualprazolam\",\"level\":\"info\",\"summary\":\"Échantillon vendu comme Xanax, analyse WEDINOS : flualprazolam. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-02-26-25\",\"date\":\"2026-02-26\",\"lab\":\"Psychoactif\",\"city\":\"Paris\",\"expected\":\"Héroïne\",\"found\":\"nitazène\",\"level\":\"warn\",\"summary\":\"Échantillon vendu comme Héroïne, analyse Psychoactif : nitazène. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-03-05-26\",\"date\":\"2026-03-05\",\"lab\":\"Checkit!\",\"city\":\"Lyon\",\"expected\":\"Kétamine\",\"found\":\"2-FDCK\",\"level\":\"high\",\"summary\":\"Échantillon vendu comme Kétamine, analyse Checkit! : 2-FDCK. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-03-13-27\",\"date\":\"2026-03-13\",\"lab\":\"DrogArt\",\"city\":\"Barcelone\",\"expected\":\"Amphétamine\",\"found\":\"caféine\",\"level\":\"critical\",\"summary\":\"Échantillon vendu comme Amphétamine, analyse DrogArt : caféine. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-03-20-28\",\"date\":\"2026-03-20\",\"lab\":\"Druglab\",\"city\":\"Londres\",\"expected\":\"Cannabis\",\"found\":\"HHC\",\"level\":\"info\",\"summary\":\"Échantillon vendu comme Cannabis, analyse Druglab : HHC. Vérifier avant de consommer.\",\"url\":\"https://druglab.fr/resultats/\"},{\"id\":\"al-2026-03-28-29\",\"date\":\"2026-03-28\",\"lab\":\"SINTES\",\"city\":\"Vienne\",\"expected\":\"DMT\",\"found\":\"5-MeO-DMT\",\"level\":\"warn\",\"summary\":\"Échantillon vendu comme DMT, analyse SINTES : 5-MeO-DMT. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-04-05-30\",\"date\":\"2026-04-05\",\"lab\":\"Energy Control\",\"city\":\"Nantes\",\"expected\":\"Mephedrone\",\"found\":\"NEP\",\"level\":\"high\",\"summary\":\"Échantillon vendu comme Mephedrone, analyse Energy Control : NEP. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-04-12-31\",\"date\":\"2026-04-12\",\"lab\":\"WEDINOS\",\"city\":\"Lille\",\"expected\":\"Speed\",\"found\":\"méthamphétamine\",\"level\":\"critical\",\"summary\":\"Échantillon vendu comme Speed, analyse WEDINOS : méthamphétamine. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-04-20-32\",\"date\":\"2026-04-20\",\"lab\":\"Psychoactif\",\"city\":\"Marseille\",\"expected\":\"MDMA\",\"found\":\"MDMA 280 mg\",\"level\":\"info\",\"summary\":\"Échantillon vendu comme MDMA, analyse Psychoactif : MDMA 280 mg. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-04-27-33\",\"date\":\"2026-04-27\",\"lab\":\"Checkit!\",\"city\":\"Paris\",\"expected\":\"MDMA\",\"found\":\"caféine + MDMA\",\"level\":\"warn\",\"summary\":\"Échantillon vendu comme MDMA, analyse Checkit! : caféine + MDMA. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-05-05-34\",\"date\":\"2026-05-05\",\"lab\":\"DrogArt\",\"city\":\"Lyon\",\"expected\":\"2-MMC\",\"found\":\"4-CMC\",\"level\":\"high\",\"summary\":\"Échantillon vendu comme 2-MMC, analyse DrogArt : 4-CMC. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-05-13-35\",\"date\":\"2026-05-13\",\"lab\":\"Druglab\",\"city\":\"Barcelone\",\"expected\":\"3-MMC\",\"found\":\"3-CMC\",\"level\":\"critical\",\"summary\":\"Échantillon vendu comme 3-MMC, analyse Druglab : 3-CMC. Vérifier avant de consommer.\",\"url\":\"https://druglab.fr/resultats/\"},{\"id\":\"al-2026-05-20-36\",\"date\":\"2026-05-20\",\"lab\":\"SINTES\",\"city\":\"Londres\",\"expected\":\"Cocaïne\",\"found\":\"cocaïne 90%\",\"level\":\"info\",\"summary\":\"Échantillon vendu comme Cocaïne, analyse SINTES : cocaïne 90%. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-05-28-37\",\"date\":\"2026-05-28\",\"lab\":\"Energy Control\",\"city\":\"Vienne\",\"expected\":\"Cocaïne\",\"found\":\"levamisole + cocaïne\",\"level\":\"warn\",\"summary\":\"Échantillon vendu comme Cocaïne, analyse Energy Control : levamisole + cocaïne. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-06-04-38\",\"date\":\"2026-06-04\",\"lab\":\"WEDINOS\",\"city\":\"Nantes\",\"expected\":\"LSD\",\"found\":\"DOC\",\"level\":\"high\",\"summary\":\"Échantillon vendu comme LSD, analyse WEDINOS : DOC. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-06-12-39\",\"date\":\"2026-06-12\",\"lab\":\"Psychoactif\",\"city\":\"Lille\",\"expected\":\"2C-B\",\"found\":\"25B-NBOH\",\"level\":\"critical\",\"summary\":\"Échantillon vendu comme 2C-B, analyse Psychoactif : 25B-NBOH. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-06-20-40\",\"date\":\"2026-06-20\",\"lab\":\"Checkit!\",\"city\":\"Marseille\",\"expected\":\"Xanax\",\"found\":\"flualprazolam\",\"level\":\"info\",\"summary\":\"Échantillon vendu comme Xanax, analyse Checkit! : flualprazolam. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-06-27-41\",\"date\":\"2026-06-27\",\"lab\":\"DrogArt\",\"city\":\"Paris\",\"expected\":\"Héroïne\",\"found\":\"nitazène\",\"level\":\"warn\",\"summary\":\"Échantillon vendu comme Héroïne, analyse DrogArt : nitazène. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-07-05-42\",\"date\":\"2026-07-05\",\"lab\":\"Druglab\",\"city\":\"Lyon\",\"expected\":\"Kétamine\",\"found\":\"2-FDCK\",\"level\":\"high\",\"summary\":\"Échantillon vendu comme Kétamine, analyse Druglab : 2-FDCK. Vérifier avant de consommer.\",\"url\":\"https://druglab.fr/resultats/\"},{\"id\":\"al-2026-07-12-43\",\"date\":\"2026-07-12\",\"lab\":\"SINTES\",\"city\":\"Barcelone\",\"expected\":\"Amphétamine\",\"found\":\"caféine\",\"level\":\"critical\",\"summary\":\"Échantillon vendu comme Amphétamine, analyse SINTES : caféine. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-07-20-44\",\"date\":\"2026-07-20\",\"lab\":\"Energy Control\",\"city\":\"Londres\",\"expected\":\"Cannabis\",\"found\":\"HHC\",\"level\":\"info\",\"summary\":\"Échantillon vendu comme Cannabis, analyse Energy Control : HHC. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-07-28-45\",\"date\":\"2026-07-28\",\"lab\":\"WEDINOS\",\"city\":\"Vienne\",\"expected\":\"DMT\",\"found\":\"5-MeO-DMT\",\"level\":\"warn\",\"summary\":\"Échantillon vendu comme DMT, analyse WEDINOS : 5-MeO-DMT. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-08-04-46\",\"date\":\"2026-08-04\",\"lab\":\"Psychoactif\",\"city\":\"Nantes\",\"expected\":\"Mephedrone\",\"found\":\"NEP\",\"level\":\"high\",\"summary\":\"Échantillon vendu comme Mephedrone, analyse Psychoactif : NEP. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"},{\"id\":\"al-2026-08-12-47\",\"date\":\"2026-08-12\",\"lab\":\"Checkit!\",\"city\":\"Lille\",\"expected\":\"Speed\",\"found\":\"méthamphétamine\",\"level\":\"critical\",\"summary\":\"Échantillon vendu comme Speed, analyse Checkit! : méthamphétamine. Vérifier avant de consommer.\",\"url\":\"https://www.psychoactif.org/\"}]");
var KEY$4 = "takologs-notify";
var PLAN_KEY = "takologs-notify-plan";
var FIRED_KEY = "takologs-notify-fired";
var INBOX_KEY = "takologs-inbox";
var ALERTS = alerts_default;
function isIosDevice() {
	if (typeof navigator === "undefined") return false;
	return /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
function isStandalonePwa() {
	if (typeof window === "undefined") return false;
	const nav = navigator;
	return window.matchMedia("(display-mode: standalone)").matches || nav.standalone === true;
}
function notifyEnabled() {
	try {
		return durableGet(KEY$4) === "1" || localStorage.getItem(KEY$4) === "1";
	} catch {
		return false;
	}
}
function setNotifyEnabled(v) {
	try {
		durableSet(KEY$4, v ? "1" : "0");
	} catch {}
	if (typeof window !== "undefined") window.dispatchEvent(new Event("takologs-notify-changed"));
}
function pushToast(payload) {
	if (typeof window === "undefined") return;
	window.dispatchEvent(new CustomEvent("takologs-toast", { detail: payload }));
}
function loadPlan() {
	try {
		const raw = durableGet(PLAN_KEY);
		const list = raw ? JSON.parse(raw) : [];
		return Array.isArray(list) ? list : [];
	} catch {
		return [];
	}
}
function savePlan(list) {
	durableSet(PLAN_KEY, JSON.stringify(list.slice(-80)));
}
function loadFired() {
	try {
		const raw = durableGet(FIRED_KEY);
		const list = raw ? JSON.parse(raw) : [];
		return new Set(Array.isArray(list) ? list : []);
	} catch {
		return /* @__PURE__ */ new Set();
	}
}
function markFired(id) {
	const s = loadFired();
	s.add(id);
	durableSet(FIRED_KEY, JSON.stringify([...s].slice(-200)));
}
function readInbox() {
	try {
		const raw = durableGet(INBOX_KEY) || (typeof localStorage !== "undefined" ? localStorage.getItem(INBOX_KEY) : null);
		const list = raw ? JSON.parse(raw) : [];
		return Array.isArray(list) ? list : [];
	} catch {
		return [];
	}
}
function writeInbox(list) {
	durableSet(INBOX_KEY, JSON.stringify(list.slice(0, 80)));
	if (typeof window !== "undefined") window.dispatchEvent(new Event("takologs-inbox"));
}
function unreadCount() {
	return readInbox().filter((i) => !i.read).length;
}
function markInboxRead() {
	writeInbox(readInbox().map((i) => ({
		...i,
		read: true
	})));
}
function clearInbox() {
	writeInbox([]);
}
function pushInbox(item) {
	const row = {
		id: item.id,
		title: item.title,
		body: item.body,
		kind: item.kind,
		at: item.at ?? Date.now(),
		read: false
	};
	writeInbox([row, ...readInbox().filter((x) => x.id !== row.id)]);
}
async function systemNotify(title, tag, body) {
	if (typeof window === "undefined") return;
	if (typeof Notification === "undefined") return;
	if (Notification.permission !== "granted") return;
	const text = body || "TakoLogs";
	const opts = {
		body: text,
		icon: new URL("./apple-touch-icon.png", window.location.href).href,
		badge: new URL("./icon-192.png", window.location.href).href,
		tag: tag || "takologs",
		silent: false
	};
	try {
		const reg = await navigator.serviceWorker?.ready;
		if (reg?.showNotification) {
			await reg.showNotification(title, opts);
			return;
		}
	} catch {}
	try {
		const sw = navigator.serviceWorker?.controller;
		if (sw) {
			sw.postMessage({
				type: "notify",
				title,
				body: text,
				tag: tag || "takologs"
			});
			return;
		}
	} catch {}
	try {
		new Notification(title, opts);
	} catch {}
}
function fire(title, tag, body, kind = "info") {
	pushInbox({
		id: tag || `n-${Date.now()}`,
		title,
		body,
		kind
	});
	pushToast({
		title,
		body: body || "TakoLogs",
		kind
	});
	if (notifyEnabled()) systemNotify(title, tag, body);
}
function clock(ms) {
	try {
		return new Date(ms).toLocaleTimeString(void 0, {
			hour: "2-digit",
			minute: "2-digit"
		});
	} catch {
		return "";
	}
}
async function sendTestNotify() {
	if (typeof window === "undefined") return false;
	if (!notifyEnabled() || typeof Notification !== "undefined" && Notification.permission !== "granted") {
		if (!await requestNotify()) return false;
	}
	fire("TakoLogs — test", "takologs-test", `Envoyée à ${clock(Date.now())}`);
	return true;
}
async function requestNotify() {
	if (typeof window === "undefined") return false;
	if (isIosDevice() && !isStandalonePwa()) {
		pushToast({ title: "iPhone : ajoute TakoLogs à l’écran d’accueil (Partager), puis réactive les notifications." });
		return false;
	}
	let perm = "default";
	try {
		if (typeof Notification !== "undefined" && Notification.requestPermission) perm = await Notification.requestPermission();
	} catch {
		perm = typeof Notification !== "undefined" ? Notification.permission : "denied";
	}
	if (perm !== "granted") {
		setNotifyEnabled(false);
		pushToast({ title: isIosDevice() ? "iOS a refusé. Ouvre l’app depuis l’écran d’accueil, puis autorise les notifications." : "Notifications système refusées — les toasts in-app restent actifs." });
		if (!isIosDevice()) {
			setNotifyEnabled(true);
			return true;
		}
		return false;
	}
	setNotifyEnabled(true);
	fire("TakoLogs — notifications activées", "takologs-test");
	flushDue();
	window.dispatchEvent(new Event("takologs-notify-changed"));
	return true;
}
var timeouts = /* @__PURE__ */ new Map();
function arm(p) {
	if (timeouts.has(p.id)) return;
	const wait = p.at - Date.now();
	if (wait <= 0) {
		fire(p.title, p.id, p.body, p.kind ?? "info");
		markFired(p.id);
		return;
	}
	const cap = Math.min(wait, 2147e6);
	const tid = window.setTimeout(() => {
		timeouts.delete(p.id);
		flushDue();
	}, Math.max(400, cap));
	timeouts.set(p.id, tid);
}
function flushDue() {
	const now = Date.now();
	const keep = [];
	for (const p of loadPlan()) if (p.at <= now + 1500) {
		fire(p.title, p.id, p.body, p.kind);
		markFired(p.id);
	} else {
		keep.push(p);
		arm(p);
	}
	savePlan(keep);
}
function labHit(name) {
	const n = name.toLowerCase();
	const token = n.split(/[\s+/,-]+/).find((x) => x.length > 2) ?? n;
	return ALERTS.find((a) => {
		const exp = (a.expected || "").toLowerCase();
		if (!exp) return false;
		if (!(n.includes(exp) || exp.includes(token))) return false;
		const found = (a.found || "").toLowerCase();
		if (a.level === "high" || a.level === "warn") return true;
		return found.length > 0 && !found.includes(exp);
	});
}
function isSitterCat(name) {
	const cat = (findSubstanceByName(name)?.category || "").toLowerCase();
	return cat === "psychedelic" || cat === "dissociative" || cat === "deliriant";
}
function scheduleIngestionNotices(ings, labels, expId) {
	const now = Date.now();
	const plan = loadPlan();
	const fired = loadFired();
	const seen = /* @__PURE__ */ new Set([...plan.map((p) => p.id), ...fired]);
	for (const ing of ings) {
		const sub = findSubstanceByName(ing.substanceName);
		const c = sub ? durationCurve(sub) : {
			onset: 20,
			peakStart: 60,
			peakEnd: 120,
			total: 180
		};
		const start = new Date(ing.ingestionTime).getTime();
		if (!Number.isFinite(start)) continue;
		const rows = [
			[
				start + c.onset * 6e4,
				labels.onset.replace("{name}", ing.substanceName),
				(labels.onsetBody ?? "Début à {time}").replace("{time}", clock(start + c.onset * 6e4))
			],
			[
				start + c.peakStart * 6e4,
				labels.peak.replace("{name}", ing.substanceName),
				(labels.peakBody ?? "Pic à {time}").replace("{time}", clock(start + c.peakStart * 6e4))
			],
			[
				start + c.peakEnd * 6e4,
				labels.offset.replace("{name}", ing.substanceName),
				(labels.offsetBody ?? "Descente à {time}").replace("{time}", clock(start + c.peakEnd * 6e4))
			]
		];
		for (const [at, title, body] of rows) {
			const id = `${ing.id}-${at}`;
			if (seen.has(id) || at <= now + 2e3) continue;
			seen.add(id);
			plan.push({
				id,
				at,
				title,
				body,
				kind: "phase"
			});
		}
	}
	if (expId && ings.length) {
		const n = ings.length;
		const cares = [];
		if (n >= 3 && labels.care3) cares.push([
			3,
			labels.care3,
			labels.care3Body ?? "",
			"care"
		]);
		if (n >= 6 && labels.care6) cares.push([
			6,
			labels.care6,
			labels.care6Body ?? "",
			"care"
		]);
		if (n >= 9 && labels.care9) cares.push([
			9,
			labels.care9,
			labels.care9Body ?? "",
			"care"
		]);
		if (n >= 12 && labels.care12) cares.push([
			12,
			labels.care12,
			labels.care12Body ?? "",
			"sos"
		]);
		for (const [th, title, body, kind] of cares) {
			const id = `care-${expId}-${th}`;
			if (seen.has(id)) continue;
			seen.add(id);
			plan.push({
				id,
				at: now,
				title,
				body,
				kind
			});
		}
		const lastStart = Math.max(...ings.map((i) => new Date(i.ingestionTime).getTime()).filter(Number.isFinite));
		const sessionEnd = Math.max(...ings.map((i) => {
			const sub = findSubstanceByName(i.substanceName);
			const total = (sub ? durationCurve(sub).total : 180) * 6e4;
			return new Date(i.ingestionTime).getTime() + total;
		}));
		const dropSession = (id) => id.startsWith(`idle-${expId}-`) || id.startsWith(`hydrate-${expId}-`) || id.startsWith(`drive-${expId}-`) || id.startsWith(`rest-${expId}-`);
		for (let i = plan.length - 1; i >= 0; i--) if (dropSession(plan[i].id) && !fired.has(plan[i].id)) {
			seen.delete(plan[i].id);
			plan.splice(i, 1);
		}
		if (labels.hydrate && sessionEnd > now) for (let t = lastStart + 36e5; t <= sessionEnd && t < now + 432e5; t += 36e5) {
			const id = `hydrate-${expId}-${Math.round((t - lastStart) / 36e5)}`;
			if (seen.has(id) || t <= now + 2e3) continue;
			seen.add(id);
			plan.push({
				id,
				at: t,
				title: labels.hydrate,
				body: labels.hydrateBody ?? "",
				kind: "hydrate"
			});
		}
		if (labels.idle && sessionEnd > now) {
			const idleAt = lastStart + 108e5;
			const id = `idle-${expId}-${lastStart}`;
			if (!seen.has(id) && idleAt < sessionEnd + 6e4) {
				seen.add(id);
				plan.push({
					id,
					at: idleAt,
					title: labels.idle,
					body: labels.idleBody ?? "",
					kind: "idle"
				});
			}
		}
		if (labels.drive && sessionEnd > now + 2e3) {
			const id = `drive-${expId}-${sessionEnd}`;
			if (!seen.has(id)) {
				seen.add(id);
				plan.push({
					id,
					at: sessionEnd,
					title: labels.drive,
					body: labels.driveBody ?? "",
					kind: "drive"
				});
			}
		}
		if (labels.rest && sessionEnd + 36e5 > now + 2e3) {
			const id = `rest-${expId}-${sessionEnd}`;
			if (!seen.has(id)) {
				seen.add(id);
				plan.push({
					id,
					at: sessionEnd + 36e5,
					title: labels.rest,
					body: labels.restBody ?? "",
					kind: "rest"
				});
			}
		}
		if (labels.sitter) {
			const trip = ings.find((i) => isSitterCat(i.substanceName));
			if (trip) {
				const sub = findSubstanceByName(trip.substanceName);
				const onset = (sub ? durationCurve(sub).onset : 30) * 6e4;
				const at = new Date(trip.ingestionTime).getTime() + onset;
				const id = `sitter-${expId}`;
				if (!seen.has(id) && at > now - 6e5) {
					seen.add(id);
					plan.push({
						id,
						at: Math.max(at, now),
						title: labels.sitter,
						body: labels.sitterBody ?? "",
						kind: "sitter"
					});
				}
			}
		}
		if (labels.redose) {
			const byName = /* @__PURE__ */ new Map();
			for (const ing of ings) {
				const k = ing.substanceName.toLowerCase();
				const list = byName.get(k) ?? [];
				list.push(ing);
				byName.set(k, list);
			}
			for (const [name, list] of byName) {
				if (list.length < 2) continue;
				const sorted = [...list].sort((a, b) => new Date(a.ingestionTime).getTime() - new Date(b.ingestionTime).getTime());
				const prev = sorted[sorted.length - 2];
				const last = sorted[sorted.length - 1];
				const sub = findSubstanceByName(last.substanceName);
				const peak = (sub ? durationCurve(sub).peakStart : 60) * 6e4;
				if (new Date(last.ingestionTime).getTime() - new Date(prev.ingestionTime).getTime() > peak) continue;
				const id = `redose-${expId}-${name}`;
				if (seen.has(id)) continue;
				seen.add(id);
				plan.push({
					id,
					at: now,
					title: labels.redose.replace("{name}", last.substanceName),
					body: (labels.redoseBody ?? "{name}").replace("{name}", last.substanceName),
					kind: "care"
				});
			}
		}
		const mixes = comboWarnings(ings.map((i) => i.substanceName)).filter((w) => w.level === "dangerous");
		if (mixes.length && labels.mix) {
			const id = `mix-${expId}-${mixes.map((m) => m.a + m.b).join("")}`;
			if (!seen.has(id)) {
				seen.add(id);
				plan.push({
					id,
					at: now,
					title: labels.mix,
					body: (labels.mixBody ?? "{pair}").replace("{pair}", mixes.map((m) => `${m.a} + ${m.b}`).join(", ")),
					kind: "mix"
				});
			}
		}
		if (labels.lab) for (const ing of ings) {
			const hit = labHit(ing.substanceName);
			if (!hit) continue;
			const id = `lab-${expId}-${ing.substanceName}`;
			if (seen.has(id)) continue;
			seen.add(id);
			plan.push({
				id,
				at: now,
				title: labels.lab.replace("{name}", ing.substanceName),
				body: (labels.labBody ?? "{detail}").replace("{name}", ing.substanceName).replace("{detail}", hit.summary || `${hit.expected} → ${hit.found}`),
				kind: "lab"
			});
		}
	}
	savePlan(plan);
	flushDue();
}
if (typeof window !== "undefined") {
	window.addEventListener("focus", flushDue);
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState === "visible") flushDue();
	});
	window.setInterval(flushDue, 3e4);
}
var TIME_SPANS = [
	"7d",
	"30d",
	"90d",
	"6m",
	"1y",
	"all"
];
function spanStart(span, now = /* @__PURE__ */ new Date()) {
	if (span === "all") return null;
	const d = new Date(now);
	d.setHours(0, 0, 0, 0);
	if (span === "7d") d.setDate(d.getDate() - 6);
	else if (span === "30d") d.setDate(d.getDate() - 29);
	else if (span === "90d") d.setDate(d.getDate() - 89);
	else if (span === "6m") d.setMonth(d.getMonth() - 6);
	else if (span === "1y") d.setFullYear(d.getFullYear() - 1);
	return d;
}
function flattenIngestions(exps) {
	return exps.flatMap((e) => e.ingestions.map((i) => ({
		...i,
		experienceTitle: e.title
	})));
}
function inSpan(iso, start) {
	if (!start) return true;
	return new Date(iso).getTime() >= start.getTime();
}
function pad(n) {
	return n.toString().padStart(2, "0");
}
function dayKey$1(d) {
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function monthKey(d) {
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
}
function weekKey(d) {
	const t = new Date(d);
	t.setHours(0, 0, 0, 0);
	t.setDate(t.getDate() - (t.getDay() + 6) % 7);
	return dayKey$1(t);
}
function activeIngestions(exps, now = /* @__PURE__ */ new Date()) {
	const activeNow = [];
	for (const i of flattenIngestions(exps)) {
		const sub = findSubstanceByName(i.substanceName);
		const totalMin = sub ? durationCurve(sub).total : 240;
		const startAt = new Date(i.ingestionTime).getTime();
		const ends = startAt + totalMin * 6e4;
		if (now.getTime() >= startAt && now.getTime() < ends) activeNow.push({
			ing: i,
			endsAt: new Date(ends),
			progress: (now.getTime() - startAt) / (ends - startAt)
		});
	}
	return activeNow;
}
function computeStats(exps, opts) {
	const start = spanStart(opts.span);
	const all = flattenIngestions(exps).filter((i) => inSpan(i.ingestionTime, start));
	const subst = opts.substance?.trim().toLowerCase() ?? "";
	const route = opts.route?.trim() ?? "";
	let rows = subst ? all.filter((i) => i.substanceName.toLowerCase() === subst) : all;
	if (route) rows = rows.filter((i) => i.route === route);
	const names = new Set(rows.map((i) => i.substanceName.toLowerCase()));
	const days = new Set(rows.map((i) => i.ingestionTime.slice(0, 10)));
	const rankMap = /* @__PURE__ */ new Map();
	for (const i of rows) {
		const key = i.substanceName.toLowerCase();
		const cur = rankMap.get(key);
		if (!cur) rankMap.set(key, {
			name: i.substanceName,
			slug: i.slug,
			color: i.color,
			count: 1,
			doseTotal: i.dose,
			unit: i.doseUnit,
			last: i.ingestionTime
		});
		else {
			cur.count += 1;
			if (i.dose != null && (cur.unit === i.doseUnit || !cur.doseTotal)) {
				cur.doseTotal = (cur.doseTotal ?? 0) + i.dose;
				cur.unit = i.doseUnit;
			}
			if (i.ingestionTime > cur.last) cur.last = i.ingestionTime;
			if (i.color) cur.color = i.color;
		}
	}
	const ranking = Array.from(rankMap.values()).sort((a, b) => b.count - a.count);
	const now = /* @__PURE__ */ new Date();
	const group = opts.span === "7d" || opts.span === "30d" ? "day" : opts.span === "90d" || opts.span === "6m" ? "week" : "month";
	const seriesMap = /* @__PURE__ */ new Map();
	const from = start ? new Date(start) : rows.length ? new Date(rows.reduce((min, i) => i.ingestionTime < min ? i.ingestionTime : min, rows[0].ingestionTime)) : new Date(now.getFullYear(), now.getMonth(), now.getDate() - 13);
	from.setHours(0, 0, 0, 0);
	if (group === "day") {
		const cursor = new Date(from);
		while (cursor <= now) {
			seriesMap.set(dayKey$1(cursor), 0);
			cursor.setDate(cursor.getDate() + 1);
		}
	} else if (group === "week") {
		const cursor = new Date(from);
		cursor.setDate(cursor.getDate() - (cursor.getDay() + 6) % 7);
		while (cursor <= now) {
			seriesMap.set(weekKey(cursor), 0);
			cursor.setDate(cursor.getDate() + 7);
		}
	} else {
		const cursor = new Date(from.getFullYear(), from.getMonth(), 1);
		while (cursor <= now) {
			seriesMap.set(monthKey(cursor), 0);
			cursor.setMonth(cursor.getMonth() + 1);
		}
	}
	for (const i of rows) {
		const d = new Date(i.ingestionTime);
		const k = group === "day" ? dayKey$1(d) : group === "week" ? weekKey(d) : monthKey(d);
		seriesMap.set(k, (seriesMap.get(k) ?? 0) + 1);
	}
	const series = Array.from(seriesMap.entries()).map(([key, count]) => {
		let label = key.slice(5);
		if (group === "month") {
			const [y, m] = key.split("-");
			label = new Date(Number(y), Number(m) - 1, 1).toLocaleDateString(opts.locale, {
				month: "short",
				year: "2-digit"
			});
		} else label = (/* @__PURE__ */ new Date(key + "T00:00:00")).toLocaleDateString(opts.locale, {
			day: "numeric",
			month: "short"
		});
		return {
			key,
			label,
			count
		};
	});
	const heatStart = new Date(now);
	heatStart.setDate(heatStart.getDate() - 119);
	heatStart.setHours(0, 0, 0, 0);
	const heatCounts = /* @__PURE__ */ new Map();
	const heatVotes = /* @__PURE__ */ new Map();
	for (const i of all) {
		const k = dayKey$1(new Date(i.ingestionTime));
		heatCounts.set(k, (heatCounts.get(k) ?? 0) + 1);
		const col = i.color || findSubstanceByName(i.substanceName)?.color || "#b07a45";
		const votes = heatVotes.get(k) ?? /* @__PURE__ */ new Map();
		votes.set(col, (votes.get(col) ?? 0) + 1);
		heatVotes.set(k, votes);
	}
	const topColor = (k) => {
		const votes = heatVotes.get(k);
		if (!votes) return null;
		return [...votes.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
	};
	const heatmap = [];
	const cursor = new Date(heatStart);
	while (cursor <= now) {
		const k = dayKey$1(cursor);
		heatmap.push({
			date: k,
			count: heatCounts.get(k) ?? 0,
			color: topColor(k)
		});
		cursor.setDate(cursor.getDate() + 1);
	}
	const weekday = Array.from({ length: 7 }, (_, i) => ({
		day: i,
		count: 0
	}));
	const hour = Array.from({ length: 24 }, (_, i) => ({
		hour: i,
		count: 0
	}));
	for (const i of rows) {
		const d = new Date(i.ingestionTime);
		weekday[(d.getDay() + 6) % 7].count += 1;
		hour[d.getHours()].count += 1;
	}
	const routeMap = /* @__PURE__ */ new Map();
	for (const i of rows) routeMap.set(i.route, (routeMap.get(i.route) ?? 0) + 1);
	const routes = Array.from(routeMap.entries()).map(([name, count]) => ({
		name,
		count
	})).sort((a, b) => b.count - a.count);
	const classMap = /* @__PURE__ */ new Map();
	for (const i of rows) {
		const cls = classifyDose(findSubstanceByName(i.substanceName), i.dose, i.doseUnit, i.route);
		if (cls) classMap.set(cls, (classMap.get(cls) ?? 0) + 1);
	}
	const doseClasses = [
		"threshold",
		"light",
		"common",
		"strong",
		"heavy"
	].map((id) => ({
		id,
		count: classMap.get(id) ?? 0
	}));
	const lastAt = rows.length ? rows.reduce((max, i) => i.ingestionTime > max ? i.ingestionTime : max, rows[0].ingestionTime) : null;
	const daysSinceLast = lastAt ? Math.floor((now.getTime() - new Date(lastAt).getTime()) / 864e5) : null;
	const usedNames = Array.from(new Set(flattenIngestions(exps).map((i) => i.substanceName))).sort((a, b) => a.localeCompare(b));
	const usedRoutes = Array.from(new Set(flattenIngestions(exps).map((i) => i.route)));
	return {
		rows,
		ingestions: rows.length,
		unique: names.size,
		daysActive: days.size,
		avgPerDay: days.size ? rows.length / days.size : 0,
		ranking,
		series,
		heatmap,
		weekday,
		hour,
		routes,
		usedRoutes,
		doseClasses,
		daysSinceLast,
		lastAt,
		activeNow: activeIngestions(exps, now),
		usedNames,
		maxHeat: Math.max(1, ...heatmap.map((c) => c.count))
	};
}
var KEY$3 = "takologs-resend";
var DEFAULT_MAIL_FROM = "TakoLogs <noreply@mail.takohelp.com>";
function loadMailConfig() {
	try {
		const raw = localStorage.getItem(KEY$3);
		const c = raw ? JSON.parse(raw) : null;
		return {
			apiKey: typeof c?.apiKey === "string" && c.apiKey.trim() ? c.apiKey : "re_FpC8UF4k_M1YadrZmVCvQT9B8dBqhHGqH",
			from: typeof c?.from === "string" && c.from.trim() ? c.from : DEFAULT_MAIL_FROM
		};
	} catch {
		return {
			apiKey: "",
			from: DEFAULT_MAIL_FROM
		};
	}
}
function saveMailConfig(cfg) {
	localStorage.setItem(KEY$3, JSON.stringify({
		apiKey: cfg.apiKey.trim(),
		from: cfg.from.trim() || "TakoLogs <noreply@mail.takohelp.com>"
	}));
}
function renderResetEmail(opts) {
	const fr = opts.locale !== "en";
	const title = opts.kind === "confirm" ? fr ? "Confirmez le changement de mot de passe" : "Confirm your password change" : fr ? "Réinitialisez votre mot de passe" : "Reset your password";
	const lead = opts.kind === "confirm" ? fr ? "Une demande de changement de mot de passe a été faite sur votre compte TakoLogs. Validez-la avec le bouton ci-dessous. Si ce n’était pas vous, ignorez ce message." : "A password change was requested on your TakoLogs account. Confirm it with the button below. If this wasn’t you, ignore this message." : fr ? "Vous avez demandé à réinitialiser votre mot de passe TakoLogs. Le lien expire dans une heure." : "You asked to reset your TakoLogs password. This link expires in one hour.";
	const cta = fr ? "Valider et choisir un mot de passe" : "Confirm and set a password";
	const inner = `
    <p style="font-family:${MAIL_BODY};font-size:16px;line-height:1.6;color:${MAIL_MUTED};text-align:center;margin:18px 0;">${lead}</p>
    <p style="text-align:center;margin:22px 0 8px;">${mailCta(opts.link, cta)}</p>
    <p style="font-family:${MAIL_BODY};font-size:12px;color:${MAIL_MUTED};text-align:center;word-break:break-all;">${opts.link}</p>
  `;
	return wrapBrandedMail({
		lang: fr ? "fr" : "en",
		title,
		inner,
		preheader: lead
	});
}
function resetSubject(locale, kind) {
	if (kind === "confirm") return locale === "en" ? "Confirm your TakoLogs password" : "Confirmez votre mot de passe TakoLogs";
	return locale === "en" ? "Reset your TakoLogs password" : "Réinitialisez votre mot de passe TakoLogs";
}
var USER_KEYS = [
	"takologs-ftp-users",
	"takologs-users",
	"takologs-accounts"
];
function fnv1a(s) {
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) {
		h ^= s.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return (h >>> 0).toString(16);
}
function hashPass(email, password) {
	return fnv1a(`${email.trim().toLowerCase()}\0${password}\0takologs`);
}
function loadUsers() {
	const byEmail = /* @__PURE__ */ new Map();
	for (const key of USER_KEYS) try {
		const raw = durableGet(key);
		const list = raw ? JSON.parse(raw) : [];
		if (!Array.isArray(list)) continue;
		for (const row of list) {
			if (!row || typeof row !== "object") continue;
			const u = row;
			const email = String(u.email ?? "").trim().toLowerCase();
			if (!email.includes("@")) continue;
			if (byEmail.has(email)) continue;
			byEmail.set(email, {
				id: String(u.id ?? email),
				email,
				name: String(u.name ?? email.split("@")[0] ?? "TakoLogs"),
				pass: String(u.pass ?? u.password ?? ""),
				newsletter: Boolean(u.newsletter)
			});
		}
	} catch {}
	return [...byEmail.values()];
}
function saveUsers(list) {
	const clean = list.map((u) => ({
		id: u.id,
		email: u.email.trim().toLowerCase(),
		name: u.name,
		pass: u.pass,
		newsletter: u.newsletter
	}));
	durableSet("takologs-ftp-users", JSON.stringify(clean));
}
var TOKEN_KEY = "takologs-reset-tokens";
var OUTBOX_KEY = "takologs-mail-outbox";
function randomToken() {
	const a = /* @__PURE__ */ new Uint8Array(24);
	crypto.getRandomValues(a);
	return [...a].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function readTokens() {
	try {
		const raw = localStorage.getItem(TOKEN_KEY);
		const list = raw ? JSON.parse(raw) : [];
		const now = Date.now();
		return Array.isArray(list) ? list.filter((t) => t.exp > now) : [];
	} catch {
		return [];
	}
}
function writeTokens(list) {
	localStorage.setItem(TOKEN_KEY, JSON.stringify(list));
}
function readOutbox() {
	try {
		const raw = localStorage.getItem(OUTBOX_KEY);
		const list = raw ? JSON.parse(raw) : [];
		return Array.isArray(list) ? list : [];
	} catch {
		return [];
	}
}
function consumeOutbox(id) {
	const next = readOutbox().filter((m) => m.id !== id);
	localStorage.setItem(OUTBOX_KEY, JSON.stringify(next));
}
function queueOutbox(mail) {
	const box = [mail, ...readOutbox()].slice(0, 8);
	localStorage.setItem(OUTBOX_KEY, JSON.stringify(box));
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("takologs-mail", { detail: mail }));
}
function resetLink(token) {
	if (typeof window === "undefined") return `/reset?token=${token}`;
	return `${window.location.origin}/reset?token=${encodeURIComponent(token)}`;
}
async function requestPasswordReset(opts) {
	const email = opts.email.trim().toLowerCase();
	if (loadUsers().some((u) => u.email.toLowerCase() === email)) {
		const token = randomToken();
		const list = readTokens().filter((t) => t.email !== email);
		list.push({
			token,
			email,
			exp: Date.now() + 36e5,
			kind: opts.kind ?? "reset",
			nextHash: opts.nextPassword ? hashPass(email, opts.nextPassword) : void 0
		});
		writeTokens(list);
		const kind = opts.kind ?? "reset";
		const html = renderResetEmail({
			locale: opts.locale,
			link: resetLink(token),
			kind
		});
		const subject = resetSubject(opts.locale, kind);
		queueOutbox({
			id: token.slice(0, 12),
			to: email,
			subject,
			html,
			at: Date.now()
		});
		const { deliverMail } = await import("../_libs/_.mjs").then((n) => n.c);
		await deliverMail({
			to: email,
			subject,
			html
		});
	}
	return { ok: true };
}
function applyResetToken(token, newPassword) {
	const list = readTokens();
	const row = list.find((t) => t.token === token);
	if (!row) return {
		ok: false,
		error: "expired"
	};
	const users = loadUsers();
	const u = users.find((x) => x.email.toLowerCase() === row.email.toLowerCase());
	if (!u) return {
		ok: false,
		error: "invalid"
	};
	if (row.nextHash) u.pass = row.nextHash;
	else {
		if (!newPassword || newPassword.length < 6) return {
			ok: false,
			error: "password"
		};
		u.pass = hashPass(u.email, newPassword);
	}
	saveUsers(users);
	writeTokens(list.filter((t) => t.token !== token));
	return {
		ok: true,
		email: u.email
	};
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	const { data, isPending } = authClient.useSession();
	const user = data?.user;
	return {
		user: user ? {
			id: user.id,
			displayName: user.name ?? null,
			primaryEmail: user.email ?? null,
			profileImageUrl: user.image ?? null,
			isDevFallback: false
		} : null,
		isPending
	};
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listExperiences = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("a49f16a1c3e5df77fb564573837c91618e25eba45293c56f0ba0e7f07f859d54"));
var loadJournal = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("d67c9af189465b408fc4cf640b2f7d8840aeefad351cd0c5743155f4012ab7fb"));
var getExperience = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((id) => id).handler(createSsrRpc("239d5bae4a5ba56b4a02c3e38a41d1337b510ecb44d84e79ac57f5d91452826f"));
var upsertExperience = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("108a506aa6dea78daff3da41dae81f0141ea24f75f5f42bb7144695b0cebf953"));
var deleteExperience = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(createSsrRpc("a09f97e912c6d776a5e4b305d3482416b7cc5090b555429f6fd8834796e69baa"));
var addIngestion = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("7f163a39e6493caba7b9058a884fe0a841d8f5ae8ee0cf6df3e7f0b3161e2f97"));
var updateIngestion = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("0a35dad8ee60258d08befe487d99956fdefdb0207e3605690ab649de35a7e177"));
var deleteIngestion = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(createSsrRpc("07bdf87fefe3046bc40f47df651f6d7e6861dc90611e2a1b17a624d2b5df8319"));
createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("b902943c54501dc8657a4bc29f48d039512c72e3f963c845c66129cd2e1c7324"));
var updateToleranceDays = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("7fe03de8d986910349a61f4b0c73346a6d614f645d280b99bb56c20109639edb"));
var importJournalDump = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(createSsrRpc("63aebccdf9d21e4c8b9cad22abad854085a1c9eca85d7704b3ce94a2716b5ede"));
var Ctx = (0, import_react.createContext)(null);
function useAddToJournal() {
	const ctx = (0, import_react.useContext)(Ctx);
	if (!ctx) throw new Error("useAddToJournal must be used within JournalProvider");
	return ctx;
}
function JournalProvider({ children }) {
	const { user } = useCurrentUserState();
	const navigate = useNavigate();
	const [picker, setPicker] = (0, import_react.useState)(null);
	const { t, dateTag } = useI18n();
	const { syncFromExperiences, lastDoseFor } = usePrefs();
	const goLogin = (next) => {
		navigate({
			to: "/login",
			search: { next }
		});
	};
	const requestAdd = (0, import_react.useCallback)((slug) => {
		const c = getSubstance(slug);
		if (!c) return;
		const last = lastDoseFor(c.name, c.slug);
		setDraft({
			substanceName: c.name,
			slug: c.slug,
			route: last?.route ?? c.doses[0]?.route ?? "Orale",
			dose: last?.dose ?? c.doses[0]?.common ?? null,
			doseUnit: last?.unit ?? c.doses[0]?.unit ?? "mg",
			color: c.color
		});
		if (!user) {
			goLogin("/logs/new");
			return;
		}
		(async () => {
			try {
				const list = await listExperiences();
				syncFromExperiences(list);
				if (list.length === 0) {
					navigate({ to: "/logs/new" });
					return;
				}
				const latest = list[0];
				if (isSameDay(new Date(latest.experienceDate), /* @__PURE__ */ new Date())) {
					navigate({
						to: "/logs/$id",
						params: { id: latest.id }
					});
					return;
				}
				setPicker(list.slice(0, 10));
			} catch {
				navigate({ to: "/logs/new" });
			}
		})();
	}, [
		user,
		navigate,
		syncFromExperiences,
		lastDoseFor
	]);
	const openNewLog = (0, import_react.useCallback)(() => {
		if (!user) {
			goLogin("/logs/new");
			return;
		}
		(async () => {
			try {
				const list = await listExperiences();
				syncFromExperiences(list);
				const latest = list[0];
				if (latest && isSameDay(new Date(latest.experienceDate), /* @__PURE__ */ new Date())) {
					navigate({
						to: "/logs/$id",
						params: { id: latest.id }
					});
					return;
				}
			} catch {}
			navigate({ to: "/logs/new" });
		})();
	}, [
		user,
		navigate,
		syncFromExperiences
	]);
	const choose = (id) => {
		setPicker(null);
		if (id === "new") navigate({ to: "/logs/new" });
		else navigate({
			to: "/logs/$id",
			params: { id }
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Ctx.Provider, {
		value: {
			requestAdd,
			openNewLog
		},
		children: [children, picker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4 bg-sand-200/55 dark:bg-black/55 backdrop-blur-sm animate-fade-in",
			onClick: () => setPicker(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong glass-modal rounded-2xl p-5 w-full max-w-sm animate-fade-up",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50",
							children: t("picker.title")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setPicker(null),
							className: "text-sand-400 hover:text-sand-600 dark:hover:text-sand-200",
							"aria-label": t("common.close"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-sand-500 dark:text-sand-400 mb-4",
						children: t("picker.body")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs font-semibold text-sand-600 dark:text-sand-300",
						children: [t("picker.existing"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							defaultValue: "",
							onChange: (e) => {
								if (e.target.value) choose(e.target.value);
							},
							className: "mt-1 mb-3 w-full rounded-xl glass px-3 py-2.5 text-sm text-sand-900 dark:text-sand-50 outline-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: t("picker.choose")
							}), picker.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: e.id,
								children: [
									e.title,
									" —",
									" ",
									new Date(e.experienceDate).toLocaleDateString(dateTag)
								]
							}, e.id))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => choose("new"),
						className: "w-full rounded-xl bg-clay-500 text-white py-2.5 text-sm font-bold",
						children: t("picker.new")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/logs",
						onClick: () => setPicker(null),
						className: "mt-3 block text-center text-xs text-sand-500 hover:text-clay-500",
						children: t("picker.seeAll")
					})
				]
			})
		}) : null]
	});
}
function SearchHalo({ children }) {
	const ref = (0, import_react.useRef)(null);
	const [box, setBox] = (0, import_react.useState)({
		w: 280,
		h: 52
	});
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const sync = () => {
			const r = el.getBoundingClientRect();
			if (r.width > 8 && r.height > 8) setBox({
				w: r.width,
				h: r.height
			});
		};
		sync();
		const ro = new ResizeObserver(sync);
		ro.observe(el);
		return () => ro.disconnect();
	}, []);
	const pad = 3;
	const w = box.w + 6;
	const h = box.h + 6;
	const rx = box.h / 2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "search-halo",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "search-halo-svg",
			width: w,
			height: h,
			viewBox: `0 0 ${w} ${h}`,
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				className: "search-halo-track",
				x: pad,
				y: pad,
				width: box.w,
				height: box.h,
				rx,
				ry: rx,
				pathLength: 1
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				className: "search-halo-run",
				x: pad,
				y: pad,
				width: box.w,
				height: box.h,
				rx,
				ry: rx,
				pathLength: 1
			})]
		}), children]
	});
}
function fold$1(q) {
	return q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[-'’]/g, " ").replace(/[?!.,;:]+/g, " ").replace(/\s+/g, " ").trim();
}
function isHelpIntent(q) {
	const low = fold$1(q);
	if (!low) return false;
	if (/^(salut|hello|hi|hey|bonjour|coucou|yo)\b/.test(low)) return true;
	if (/\b(takoai|tako ai)\b/.test(low) && /(aide|help|qui|quoi|faire|peux|sais)/.test(low)) return true;
	if (/^(aide|help|takoai|tako ai)\b/.test(low) || /que (sais|peux) tu/.test(low) || /sais tu (faire|faire quoi|quoi)/.test(low) || /tu (sais|peux) (faire|quoi)/.test(low) || /(sais tu|peux tu|what can you|how can you) (faire|do|help)/.test(low) || /tes? (fonctions?|capacites?|commandes?)/.test(low) || /c est quoi (tako|takoai|cette app)/.test(low) || /who are you|what are you/.test(low)) return true;
	return false;
}
function helpText(locale) {
	return locale === "en" ? "I’m TakoAI. I can:\n• Log a dose — “add 100 mg of MDMA”\n• Explain a substance — doses, duration, interactions\n• Show your journal stats\n• Change the site color / theme\n• Open Logs, Alerts, Profile…\nTry: “how long does LSD last” or “my stats”." : "Je suis TakoAI. Je peux :\n• Logger une prise — « ajoute 100 mg de MDMA »\n• Expliquer une substance — doses, durée, interactions\n• Afficher tes stats de journal\n• Changer la couleur / le thème du site\n• Ouvrir Logs, Alertes, Profil…\nEssaie : « durée du LSD » ou « mes stats ».";
}
function actionDoses(a) {
	if (a.items && a.items.length > 0) return a.items;
	if (a.substanceName) return [{
		substanceName: a.substanceName,
		dose: a.dose ?? null,
		unit: a.unit ?? "mg",
		route: a.route ?? "Orale"
	}];
	return [];
}
function localDay$1(d = /* @__PURE__ */ new Date()) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
async function journalDigest(locale) {
	try {
		const data = await loadJournal();
		const exps = data.experiences.slice(0, 12);
		const stats = computeStats(data.experiences, {
			span: "all",
			locale
		});
		const lines = exps.map((e) => {
			const ings = e.ingestions.map((i) => `${i.dose ?? "?"}${i.doseUnit} ${i.substanceName}`).join(", ");
			return `- ${e.title} (${e.experienceDate.slice(0, 10)}): ${ings || "∅"}`;
		});
		const rank = stats.ranking.slice(0, 8).map((r) => `${r.name} ×${r.count}`).join(", ");
		return [
			locale === "fr" ? "Journal de l’utilisateur :" : "User journal:",
			`${stats.ingestions} prises · ${data.experiences.length} expériences · ${stats.unique} substances`,
			rank ? `Top: ${rank}` : "",
			lines.join("\n")
		].filter(Boolean).join("\n");
	} catch {
		return locale === "fr" ? "Journal indisponible." : "Journal unavailable.";
	}
}
async function applyThemeAction(action) {
	if (typeof window === "undefined") return;
	if (action.hue != null) window.dispatchEvent(new CustomEvent("takologs-set-hue", { detail: action.hue }));
	if (action.theme) window.dispatchEvent(new CustomEvent("takologs-set-theme", { detail: action.theme }));
}
async function runAdds(action, locale) {
	const items = actionDoses(action);
	if (!items.length) throw new Error("empty");
	const list = await listExperiences();
	const today = localDay$1();
	const iso = (/* @__PURE__ */ new Date()).toISOString();
	let expId;
	if (action.title?.trim()) expId = String(await upsertExperience({ data: {
		title: action.title.trim(),
		experienceDate: iso,
		notes: ""
	} }));
	else {
		const sameDay = list.find((e) => localDay$1(new Date(e.experienceDate)) === today);
		if (sameDay) expId = sameDay.id;
		else expId = String(await upsertExperience({ data: {
			title: defaultExperienceTitleFromDate(iso, locale === "fr" ? "fr-FR" : "en-GB"),
			experienceDate: iso,
			notes: ""
		} }));
	}
	const names = [];
	for (const it of items) {
		const s = findSubstanceByName(it.substanceName) ?? searchSubstances(it.substanceName)[0];
		const ingestion = {
			substanceName: s?.name ?? it.substanceName,
			slug: s?.slug ?? null,
			route: it.route || s?.doses[0]?.route || "Orale",
			dose: it.dose,
			doseUnit: it.unit || s?.doses[0]?.unit || "mg",
			color: s?.color ?? null,
			ingestionTime: (/* @__PURE__ */ new Date()).toISOString(),
			notes: ""
		};
		names.push(`${ingestion.dose ?? "?"} ${ingestion.doseUnit} ${ingestion.substanceName}`);
		await addIngestion({ data: {
			experienceId: expId,
			ingestion
		} });
	}
	const warns = comboWarnings(items.map((i) => i.substanceName));
	return {
		expId,
		names,
		warns
	};
}
async function statsText(q, locale) {
	const data = await loadJournal();
	const stats = computeStats(data.experiences, {
		span: "all",
		locale
	});
	const top = stats.ranking.slice(0, 8).map((r) => `• ${r.name} — ${r.count}×` + (r.doseTotal != null ? ` (${r.doseTotal}${r.unit})` : "")).join("\n");
	const last = data.experiences[0];
	const lastLine = last ? `${last.title} (${last.ingestions.map((i) => i.substanceName).join(", ") || "∅"})` : locale === "fr" ? "aucune" : "none";
	if (locale === "fr") return `Journal : ${data.experiences.length} expériences, ${stats.ingestions} prises, ${stats.unique} substances.\nDernière : ${lastLine}\nClassement :\n${top || "—"}`;
	return `Journal: ${data.experiences.length} experiences, ${stats.ingestions} ingestions, ${stats.unique} substances.\nLatest: ${lastLine}\nRanking:\n${top || "—"}`;
}
async function executeChatAction(action, locale, q = "") {
	if (action.kind === "theme") {
		applyThemeAction(action);
		const bits = [action.hue != null ? action.hue < 0 ? "mono" : `hue ${action.hue}` : "", action.theme ?? ""].filter(Boolean);
		return {
			ok: true,
			handled: true,
			source: "local",
			text: locale === "fr" ? `Thème mis à jour (${bits.join(", ")}).` : `Theme updated (${bits.join(", ")}).`,
			action
		};
	}
	if (action.kind === "navigate" && action.path) return {
		ok: true,
		handled: true,
		source: "local",
		path: action.path,
		text: locale === "fr" ? `J’ouvre ${action.path}.` : `Opening ${action.path}.`,
		action
	};
	if (action.kind === "stats") return {
		ok: true,
		handled: true,
		source: "local",
		text: await statsText(q, locale),
		action
	};
	if (action.kind === "add") {
		const { expId, names, warns } = await runAdds(action, locale);
		const warn = warns.length > 0 ? (locale === "fr" ? "\nAttention : " : "\nCaution: ") + warns.map((w) => `${w.a} + ${w.b}`).join(", ") : "";
		const titleBit = action.title ? locale === "fr" ? ` dans « ${action.title} »` : ` in “${action.title}”` : "";
		return {
			ok: true,
			handled: true,
			source: "local",
			logId: expId,
			action,
			text: locale === "fr" ? `C’est enregistré : ${names.join(", ")}${titleBit}.${warn}` : `Saved: ${names.join(", ")}${titleBit}.${warn}`
		};
	}
	return {
		ok: false,
		handled: false,
		text: "",
		source: "local"
	};
}
async function runLocalAgent(q, locale) {
	const action = interpretMessage(q);
	if (!action) return {
		ok: false,
		handled: false,
		text: "",
		source: "local"
	};
	return executeChatAction(action, locale, q);
}
var sendChat = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("43849ca4a7b0ca9d991d1061108ae5ff78d7cb5754cfae9259ce3b35bb5e4f45"));
function localDay(d = /* @__PURE__ */ new Date()) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function strip(q) {
	return q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[-'’]/g, " ").replace(/\s+/g, " ").trim();
}
var STOP = new Set("je tu il elle on nous vous ils elles le la les un une des de du da ne pas plus que qui dont ou et au aux en y ce cet cette ces mon ma mes ton ta tes son sa ses notre votre leur leurs pour dans sur par avec sans sous vers chez que quoi comment combien quand est sont suis es faire fait fais met mets mettre site nez sang bleu bleue the and for but not you are was put make".split(" "));
function findInText(q) {
	const ranked = q.split(/[^a-z0-9àâäéèêëïîôùûüç+-]+/i).map((w) => w.trim()).filter((w) => w.length > 2 && !STOP.has(w.toLowerCase())).slice().sort((a, b) => b.length - a.length);
	for (const w of ranked) {
		const s = findSubstanceByName(w);
		if (!s) continue;
		if (w.length <= 3 && s.name.toLowerCase() !== w.toLowerCase() && !s.aliases.some((a) => a.toLowerCase() === w.toLowerCase())) continue;
		return s;
	}
	return searchSubstances(q).filter((s) => {
		const n = s.name.toLowerCase();
		const low = q.toLowerCase();
		if (n.length <= 3) return new RegExp(`\\b${n}\\b`, "i").test(low);
		return low.includes(n) || s.aliases.some((a) => a.length > 3 && low.includes(a.toLowerCase()));
	})[0];
}
function parseDose(q) {
	const m = q.match(/(\d+(?:[.,]\d+)?)\s*(µg|ug|mcg|mg|g|ml|µg)/i);
	if (!m) return {
		dose: null,
		unit: "mg"
	};
	const dose = Number(m[1].replace(",", "."));
	let unit = m[2].toLowerCase();
	if (unit === "ug" || unit === "mcg") unit = "µg";
	return {
		dose,
		unit
	};
}
function isAction(q) {
	return /\b(ajoute|ajouter|add|log|prend|prendre|took|note|ingère|ingere)\b/i.test(q);
}
function isQuestion(q) {
	return /[?]/.test(q) || /^(quoi|que|quel|quelle|comment|combien|quand|c est quoi|c'est quoi|what|how|when|dose|duree|durée|danger|interact)/i.test(q.trim());
}
function describe(s, locale) {
	const c = durationCurve(s);
	const d0 = s.doses[0];
	const dose = d0 ? `${d0.common}${d0.unit} (${d0.route})` : locale === "fr" ? "dose non renseignée" : "dose unknown";
	const dur = `${formatMins(c.onset)} → ${formatMins(c.total)}`;
	if (locale === "fr") return `${s.emoji} **${s.name}** — ${s.psychoactiveClass}. Dose courante ${dose}. Durée ${dur}. ${s.summary}`;
	return `${s.emoji} **${s.name}** — ${s.psychoactiveClass}. Common dose ${dose}. Duration ${dur}. ${s.summary}`;
}
async function askAssistant(raw, locale) {
	const q = raw.trim();
	if (!q) return { answer: helpText(locale) };
	if (isHelpIntent(q)) return { answer: helpText(locale) };
	const s = findInText(q);
	const { dose, unit } = parseDose(q);
	if (isAction(q) && s) {
		const last = (await listExperiences())[0];
		const route = s.doses[0]?.route ?? "Orale";
		const n = dose ?? s.doses[0]?.common ?? null;
		const u = dose != null ? unit : s.doses[0]?.unit ?? "mg";
		const target = last && localDay(new Date(last.experienceDate)) === localDay() ? last.title : locale === "fr" ? "une nouvelle expérience (aujourd’hui)" : "a new experience (today)";
		return {
			answer: locale === "fr" ? `Je peux ajouter ${n ?? "une prise"} ${u} de ${s.name} à ${target}.` : `I can add ${n ?? "a dose"} ${u} of ${s.name} to ${target}.`,
			action: {
				kind: "add",
				substance: s,
				dose: n,
				unit: u,
				route
			}
		};
	}
	if (s) {
		const low = strip(q);
		if (/interact|combi|melange|mix|danger avec/.test(low)) {
			const others = searchSubstances(q).filter((x) => x.slug !== s.slug).slice(0, 3);
			const warns = comboWarnings([s.name, ...others.map((o) => o.name)]);
			const lines = warns.length ? warns.map((w) => `• ${w.a} + ${w.b} — ${w.level}`).join("\n") : locale === "fr" ? "Pas d’interaction critique listée pour ce couple dans la base." : "No critical interaction listed for this pair.";
			return { answer: `${describe(s, locale)}\n\n${lines}` };
		}
		if (/dure|duration|combien de temps|how long|onset|pic|peak/.test(low)) {
			const c = durationCurve(s);
			return { answer: locale === "fr" ? `${s.emoji} ${s.name} : montée ~${formatMins(c.onset)}, pic ${formatMins(c.peakStart)}–${formatMins(c.peakEnd)}, total ~${formatMins(c.total)}.` : `${s.emoji} ${s.name}: onset ~${formatMins(c.onset)}, peak ${formatMins(c.peakStart)}–${formatMins(c.peakEnd)}, total ~${formatMins(c.total)}.` };
		}
		if (/dose|combien|threshold|common|fort/.test(low) && s.doses[0]) {
			const d = s.doses[0];
			return { answer: locale === "fr" ? `${s.emoji} ${s.name} (${d.route}) : seuil ${d.threshold}${d.unit}, léger ${d.light}, commun ${d.common}, fort ${d.strong}, lourd ${d.heavy}.` : `${s.emoji} ${s.name} (${d.route}): threshold ${d.threshold}${d.unit}, light ${d.light}, common ${d.common}, strong ${d.strong}, heavy ${d.heavy}.` };
		}
		return { answer: describe(s, locale) };
	}
	if (isQuestion(q) || isAction(q)) return { answer: helpText(locale) };
	return { answer: helpText(locale) };
}
function fold(q) {
	return q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[-'’]/g, " ").replace(/[?!.,;:]+/g, " ").replace(/\s+/g, " ").trim();
}
async function answerOffline(q, locale) {
	const fr = locale !== "en";
	if (isHelpIntent(q)) return {
		ok: true,
		handled: true,
		source: "local",
		text: helpText(locale)
	};
	const action = interpretMessage(q);
	if (action) return executeChatAction(action, locale, q);
	const low = fold(q);
	if (/alerte|druglab|sintes/.test(low)) return {
		ok: true,
		handled: true,
		source: "local",
		path: "/alerts",
		text: fr ? "J’ouvre les alertes labo." : "Opening lab alerts."
	};
	if (/newsletter|mail de bienvenue/.test(low)) return {
		ok: true,
		handled: true,
		source: "local",
		path: "/",
		text: fr ? "La carte Newsletter est sur l’accueil. Indique ton e-mail pour le mail de bienvenue." : "The newsletter card is on the home page. Enter your email for the welcome mail."
	};
	if (/import|psychonautwiki journal|\.json/.test(low)) return {
		ok: true,
		handled: true,
		source: "local",
		path: "/",
		text: fr ? "Accueil → carte Import PsychonautWiki Journal, ou Profil → Importer un journal (.json)." : "Home → PsychonautWiki Journal import card, or Profile → Import journal (.json)."
	};
	let text = (await askAssistant(q, locale)).answer.replace(/\*\*/g, "").trim();
	const hits = searchSubstances(q).slice(0, 5);
	if (hits.length && !hits.some((s) => text.toLowerCase().includes(s.name.toLowerCase()))) {
		const list = hits.map((s) => `• ${s.emoji} ${s.name} — ${s.psychoactiveClass}`).join("\n");
		text = `${text}\n\n${fr ? "Correspondances :" : "Matches:"}\n${list}`;
	}
	if (/\b(stat|combien|resume|résumé|journal)\b/i.test(q)) text += "\n\n" + await journalDigest(locale);
	return {
		ok: true,
		handled: true,
		source: "local",
		text: text || helpText(locale)
	};
}
function withTimeout(p, ms) {
	return new Promise((resolve) => {
		const t = setTimeout(() => resolve(void 0), ms);
		p.then((v) => {
			clearTimeout(t);
			resolve(v);
		}).catch(() => {
			clearTimeout(t);
			resolve(void 0);
		});
	});
}
var KEY$2 = "takologs-xai";
function loadXaiKey() {
	try {
		return (localStorage.getItem(KEY$2) || "").trim();
	} catch {
		return "";
	}
}
function saveXaiKey(key) {
	const v = key.trim();
	if (v) localStorage.setItem(KEY$2, v);
	else localStorage.removeItem(KEY$2);
}
function systemPrompt(locale, digest) {
	const fr = locale !== "en";
	return [
		fr ? "Tu es TakoAI, assistant de TakoLogs. Tu réponds à N’IMPORTE QUELLE question (science, quotidien, blagues, le site, les substances) en plus du journal." : "You are TakoAI, TakoLogs assistant. You answer ANY question (science, everyday, jokes, the site, substances) as well as the journal.",
		fr ? "Pas de conseil médical, jamais d’incitation. Réponds en français naturel, concis. Pas de JSON ni de fences markdown." : "No medical advice, never encourage use. Natural English, concise. No JSON or markdown fences.",
		digest || ""
	].join("\n");
}
async function grokFromBrowser(opts) {
	const override = loadXaiKey();
	const payload = {
		apiKey: override.startsWith("xai-") ? override : "",
		model: "grok-3",
		messages: [{
			role: "system",
			content: systemPrompt(opts.locale, opts.digest)
		}, ...opts.messages.slice(-12).map((m) => ({
			role: m.role,
			content: m.content
		}))]
	};
	for (const url of ["ai-send.php", "./ai-send.php"]) try {
		const res = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload)
		});
		if (!res.ok) continue;
		const text = ((await res.json()).choices?.[0]?.message?.content ?? "").trim();
		if (!text) continue;
		const action = extractChatAction(text);
		return {
			ok: true,
			handled: false,
			source: "grok",
			text: humanizeChatText(text, opts.locale, action),
			action
		};
	} catch {}
}
var STORE = "takologs-chat";
function readStore() {
	try {
		const raw = sessionStorage.getItem(STORE);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
async function askGrok(messages, locale) {
	const last = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
	if (isHelpIntent(last)) return {
		ok: true,
		handled: true,
		source: "local",
		text: helpText(locale)
	};
	const local = await runLocalAgent(last, locale);
	if (local.handled && local.action && local.action.kind !== "stats") return local;
	try {
		const digest = await journalDigest(locale);
		const grok = await withTimeout(grokFromBrowser({
			messages,
			locale,
			digest
		}), 22e3);
		const r = grok?.ok && grok.text ? grok : await withTimeout(sendChat({ data: {
			messages,
			locale,
			digest
		} }), 12e3);
		if (r?.ok && (r.text || r.action)) {
			let action = r.action ?? extractChatAction(r.text);
			if (action?.kind === "add" && !looksLikeAdd(last)) action = void 0;
			if (action?.kind === "theme" && !looksLikeTheme(last)) action = void 0;
			if (action?.kind === "navigate" && !looksLikeNav(last)) action = void 0;
			if (action && (action.kind === "add" && looksLikeAdd(last) || action.kind === "theme" && looksLikeTheme(last) || action.kind === "navigate" && looksLikeNav(last)) && action) {
				const done = await executeChatAction(action, locale, last);
				if (done.handled) return {
					...done,
					text: done.text || humanizeChatText(r.text, locale, action)
				};
			}
			const text = humanizeChatText(r.text, locale, action);
			if (text.trim()) return {
				...r,
				action: action?.kind === "add" && !looksLikeAdd(last) ? void 0 : action,
				text
			};
		}
	} catch {}
	if (local.handled) return local;
	return answerOffline(last, locale);
}
function Thread({ messages, busy, onRun, running, onOpenLog }) {
	const { t } = useI18n();
	const endRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, busy]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex-1 overflow-y-auto space-y-3 pr-1",
		children: [
			messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-8 px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto h-12 w-12 rounded-2xl bg-clay-500/15 text-clay-500 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-heading font-bold text-sand-900 dark:text-sand-50",
						children: t("chat.hello")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-sand-500",
						children: t("chat.helloBody")
					})
				]
			}) : null,
			messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${m.role === "user" ? "bg-clay-500 text-white rounded-br-md" : "glass text-sand-800 dark:text-sand-100 rounded-bl-md"}`,
					children: [
						m.content,
						m.action && !m.logId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: running,
							onClick: () => onRun(m.action),
							className: "mt-2 w-full rounded-full bg-clay-500 text-white py-1.5 text-xs font-semibold disabled:opacity-60",
							children: [
								t("ai.run"),
								" · ",
								m.action.dose ?? "",
								" ",
								m.action.unit,
								" ",
								m.action.substanceName
							]
						}) : null,
						m.logId && onOpenLog ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onOpenLog(m.logId),
							className: "mt-2 w-full rounded-full bg-clay-500 text-white py-1.5 text-xs font-semibold",
							children: t("chat.seeLog")
						}) : null
					]
				})
			}, `${m.role}-${i}`)),
			busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-sand-400 px-1",
				children: t("common.loading")
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
		]
	});
}
function Composer({ onSend, disabled, suggestions }) {
	const { t } = useI18n();
	const [q, setQ] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		suggestions.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-1.5 mb-2",
			children: suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onSend(s),
				className: "rounded-full glass px-3 py-1.5 text-xs font-semibold text-sand-700 dark:text-sand-200",
				children: s
			}, s))
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "flex items-end gap-2",
			onSubmit: (e) => {
				e.preventDefault();
				const v = q.trim();
				if (!v || disabled) return;
				setQ("");
				onSend(v);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: q,
				rows: 1,
				disabled,
				onChange: (e) => setQ(e.target.value),
				onKeyDown: (e) => {
					if (e.key === "Enter" && !e.shiftKey) {
						e.preventDefault();
						const v = q.trim();
						if (!v || disabled) return;
						setQ("");
						onSend(v);
					}
				},
				placeholder: t("chat.placeholder"),
				className: "flex-1 resize-none rounded-2xl glass px-3.5 py-2.5 text-sm outline-none text-sand-900 dark:text-sand-50 max-h-28"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: disabled || !q.trim(),
				className: "h-11 w-11 rounded-full bg-clay-500 text-white flex items-center justify-center disabled:opacity-40 hover:scale-105 transition-transform",
				"aria-label": t("chat.send"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1.5 text-[10px] text-sand-400",
			children: t("chat.disclaimer")
		})
	] });
}
function useChat() {
	const { locale, t } = useI18n();
	const navigate = useNavigate();
	const [messages, setMessages] = (0, import_react.useState)(() => typeof window === "undefined" ? [] : readStore());
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [running, setRunning] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			sessionStorage.setItem(STORE, JSON.stringify(messages.slice(-24)));
		} catch {}
	}, [messages]);
	const send = async (text) => {
		const user = {
			role: "user",
			content: text
		};
		const next = [...messages, user];
		setMessages(next);
		setBusy(true);
		try {
			const loc = locale === "en" ? "en" : "fr";
			const r = await askGrok(next.map(({ role, content }) => ({
				role,
				content
			})), loc);
			const content = (r.text || t("chat.empty")).trim() || t("chat.empty");
			const action = r.handled ? void 0 : r.action;
			if (r.path) navigate({ to: r.path });
			if (r.handled && r.logId) {
				const doses = r.action ? actionDoses(r.action) : [];
				pushToast({
					title: t("ai.done"),
					body: doses.map((d) => `${d.dose ?? ""} ${d.unit} ${d.substanceName}`.trim()).join(", ")
				});
			}
			setMessages((prev) => [...prev, {
				role: "assistant",
				content,
				action,
				logId: r.logId,
				source: r.source
			}]);
		} catch {
			setMessages((prev) => [...prev, {
				role: "assistant",
				content: t("chat.error")
			}]);
		} finally {
			setBusy(false);
		}
	};
	const run = async (action) => {
		setRunning(true);
		try {
			const r = await executeChatAction(action, locale === "en" ? "en" : "fr");
			if (r.logId) pushToast({ title: t("ai.done") });
			setMessages((prev) => [...prev, {
				role: "assistant",
				content: r.text || t("ai.done"),
				logId: r.logId,
				source: r.source
			}]);
		} finally {
			setRunning(false);
		}
	};
	const openLog = (id) => {
		navigate({
			to: "/logs/$id",
			params: { id }
		});
	};
	const clear = () => {
		setMessages([]);
		try {
			sessionStorage.removeItem(STORE);
		} catch {}
	};
	return {
		messages,
		busy,
		running,
		send,
		run,
		openLog,
		clear
	};
}
function ChatPagePanel() {
	const { t } = useI18n();
	const chat = useChat();
	const suggestions = [
		t("chat.s1"),
		t("chat.s2"),
		t("chat.s3")
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col min-h-[28rem] max-h-[70vh]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end mb-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: chat.clear,
					className: "text-xs font-semibold text-sand-400",
					children: t("chat.clear")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thread, {
				messages: chat.messages,
				busy: chat.busy,
				onRun: chat.run,
				running: chat.running,
				onOpenLog: chat.openLog
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Composer, {
				onSend: chat.send,
				disabled: chat.busy,
				suggestions: chat.messages.length ? [] : suggestions
			})
		]
	});
}
var EN = substance_en_default;
function localizedSubstance(s, locale) {
	if (locale !== "en") return s;
	const e = EN[s.slug];
	if (!e) return s;
	return {
		...s,
		name: e.name || s.name,
		psychoactiveClass: e.psychoactiveClass || s.psychoactiveClass,
		chemicalClass: e.chemicalClass || s.chemicalClass,
		summary: e.summary || s.summary,
		effects: e.effects?.positive?.length ? e.effects : s.effects,
		riskNotes: e.riskNotes?.length ? e.riskNotes : s.riskNotes,
		aliases: Array.from(/* @__PURE__ */ new Set([...e.aliases || [], ...s.aliases]))
	};
}
function localizedName(s, locale, fallback) {
	if (!s) return fallback;
	if (locale !== "en") return s.name;
	return EN[s.slug]?.name || s.name;
}
function displaySubstanceName(s, locale, custom) {
	if (custom && custom.trim() && custom !== s.name) return custom;
	return localizedName(s, locale, s.name);
}
var LETHAL = /fentanyl|carfentan|nitazene|sufentanil|alfentanil|remifentanil|ohmefentanyl|furanylfentanyl|ocfentanil|isotonitazene|protonitazene|metonitazene/i;
function isLethalLowDose(nameOrSlug, sub) {
	const blob = `${nameOrSlug} ${sub?.slug ?? ""} ${sub?.name ?? ""} ${(sub?.aliases ?? []).join(" ")}`;
	return LETHAL.test(blob);
}
function lethalFromQuery(q) {
	return LETHAL.test(q);
}
function RiskDialog({ kind, name, extra, onClose }) {
	const { t } = useI18n();
	const title = kind === "lethal" ? t("risk.lethalTitle") : kind === "mix" ? t("risk.mixTitle") : t("risk.heavyTitle");
	const body = kind === "lethal" ? t("risk.lethalBody", { name: name || "—" }) : kind === "mix" ? t("risk.mixBody", { pair: extra || "" }) : t("risk.heavyBody", { name: name || "—" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[120] bg-sand-200/55 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center p-4",
		onClick: (e) => {
			e.stopPropagation();
			onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md glass-strong glass-modal rounded-3xl p-5 space-y-3",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-heading text-lg font-bold text-red-700 dark:text-red-300 flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5" }),
						" ",
						title
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-sand-800 dark:text-sand-100 leading-relaxed",
					children: body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "w-full rounded-full bg-clay-500 text-white py-2.5 text-sm font-semibold",
					children: t("risk.ok")
				})
			]
		})
	});
}
var NAV = [
	{
		path: "/",
		labelKey: "nav.home",
		icon: House
	},
	{
		path: "/substances",
		labelKey: "nav.substances",
		icon: FlaskConical
	},
	{
		path: "/compare",
		labelKey: "nav.compare",
		icon: GitCompare
	},
	{
		path: "/effects",
		labelKey: "nav.effects",
		icon: Sparkles
	},
	{
		path: "/neuro",
		labelKey: "nav.neuro",
		icon: Brain
	},
	{
		path: "/harm-scale",
		labelKey: "nav.harm",
		icon: ChartColumn
	},
	{
		path: "/reduction",
		labelKey: "nav.reduction",
		icon: HeartHandshake
	},
	{
		path: "/experiences",
		labelKey: "nav.experiences",
		icon: MessagesSquare
	},
	{
		path: "/alerts",
		labelKey: "nav.alerts",
		icon: Bell
	},
	{
		path: "/chat",
		labelKey: "nav.chat",
		icon: Bot
	},
	{
		path: "/logs",
		labelKey: "nav.logs",
		icon: NotebookPen
	},
	{
		path: "/profile",
		labelKey: "nav.profile",
		icon: UserRound
	}
];
var PRIMARY_NAV = [
	"/",
	"/substances",
	"/logs"
];
var MORE_NAV = [
	"/compare",
	"/effects",
	"/neuro",
	"/harm-scale",
	"/reduction",
	"/experiences",
	"/alerts",
	"/chat"
];
var MOBILE_NAV = [
	"/",
	"/substances",
	"/logs",
	"/profile"
];
var OPEN_SEARCH_EVENT = "takologs-open-search";
function requestOpenSearch(prefill = "") {
	if (typeof window === "undefined") return;
	window.dispatchEvent(new CustomEvent(OPEN_SEARCH_EVENT, { detail: prefill }));
}
function SearchPalette() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [prefill, setPrefill] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const onOpen = (e) => {
			const pre = e.detail;
			setPrefill(typeof pre === "string" ? pre : "");
			setOpen(true);
		};
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setPrefill("");
				setOpen((v) => !v);
			}
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener(OPEN_SEARCH_EVENT, onOpen);
		window.addEventListener("keydown", onKey);
		return () => {
			window.removeEventListener(OPEN_SEARCH_EVENT, onOpen);
			window.removeEventListener("keydown", onKey);
		};
	}, []);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchPaletteOpen, {
		onClose: () => setOpen(false),
		initial: prefill
	});
}
function SearchPaletteOpen({ onClose, initial }) {
	const { t, locale } = useI18n();
	const { resolveEmoji, resolveName } = usePrefs();
	const navigate = useNavigate();
	const chat = useChat();
	const [q, setQ] = (0, import_react.useState)(initial);
	const [lethal, setLethal] = (0, import_react.useState)(null);
	const dismissed = (0, import_react.useRef)("");
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const id = window.setTimeout(() => inputRef.current?.focus(), 30);
		return () => window.clearTimeout(id);
	}, []);
	const pages = (0, import_react.useMemo)(() => {
		const e = q.trim().toLowerCase();
		return (e ? NAV : NAV.filter((n) => PRIMARY_NAV.includes(n.path) || n.path === "/profile" || n.path === "/chat")).filter((n) => {
			const label = t(n.labelKey).toLowerCase();
			return !e || label.includes(e) || n.path.includes(e);
		});
	}, [q, t]);
	const subs = (0, import_react.useMemo)(() => q.trim() ? searchSubstances(q).slice(0, 6) : [], [q]);
	(0, import_react.useEffect)(() => {
		const name = subs.find((s) => isLethalLowDose(s.slug, s))?.name || (lethalFromQuery(q) ? q.trim() : "");
		if (name && dismissed.current !== name.toLowerCase()) setLethal(name);
	}, [q, subs]);
	const send = () => {
		const v = q.trim();
		if (!v || chat.busy) return;
		setQ("");
		chat.send(v);
	};
	const suggestions = [
		t("chat.s1"),
		t("chat.s2"),
		t("chat.s3")
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[110] bg-sand-100/70 dark:bg-black/55 backdrop-blur-[2px] animate-fade-in p-4 flex items-start justify-center",
		style: { paddingTop: "max(8vh, calc(env(safe-area-inset-top, 0px) + 12px))" },
		onClick: onClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-lg glass-strong glass-modal rounded-[2rem] p-3 animate-spring-in flex flex-col max-h-[min(82vh,720px)]",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchHalo, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-full bg-sand-50 dark:bg-black/40 border border-sand-200/90 dark:border-white/10 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5 text-clay-500 shrink-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: inputRef,
							value: q,
							onChange: (e) => setQ(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									send();
								}
							},
							placeholder: t("home.searchPh"),
							className: "w-full bg-transparent outline-none text-base text-sand-900 dark:text-sand-50 placeholder:text-sand-500"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: send,
							disabled: chat.busy || !q.trim(),
							className: "rounded-full p-1.5 text-clay-500 disabled:text-sand-300",
							"aria-label": t("chat.send"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "rounded-full p-1.5 text-sand-400 hover:text-sand-700",
							"aria-label": t("common.close"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 min-h-0 flex-1 overflow-y-auto",
					children: [
						chat.messages.length > 0 || chat.busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 max-h-[38vh] overflow-y-auto px-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thread, {
								messages: chat.messages,
								busy: chat.busy,
								onRun: chat.run,
								running: chat.running,
								onOpenLog: (id) => {
									chat.openLog(id);
									onClose();
								}
							})
						}) : !q.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-2 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-heading font-semibold text-clay-500 mb-2",
								children: "TakoAI"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5",
								children: suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => void chat.send(s),
									className: "rounded-full bg-sand-50 dark:bg-white/10 border border-sand-200/80 dark:border-white/10 px-3 py-1.5 text-xs font-semibold text-sand-800 dark:text-sand-100",
									children: s
								}, s))
							})]
						}) : null,
						pages.length > 0 && q.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-sand-500",
								children: t("search.pages")
							}), pages.slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									onClose();
									navigate({ to: p.path });
								},
								className: "w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-sand-200/50 dark:hover:bg-sand-800/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-4 w-4 text-clay-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-sand-900 dark:text-sand-50",
									children: t(p.labelKey)
								})]
							}, p.path))]
						}) : null,
						subs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-sand-500",
							children: t("search.substances")
						}), subs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/substance/$slug",
							params: { slug: s.slug },
							onClick: onClose,
							className: "flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-sand-200/50 dark:hover:bg-sand-800/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								children: resolveEmoji(s.slug, s.name, s.emoji)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-sand-900 dark:text-sand-50",
								children: displaySubstanceName(s, locale, resolveName(s.slug, s.name))
							})]
						}, s.slug))] }) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "px-3 pt-2 pb-1 text-[11px] text-sand-600 dark:text-sand-400 flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-3 w-3" }), t("search.hint", { key: typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform) ? "⌘K" : "Ctrl+K" })]
				})
			]
		}), lethal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskDialog, {
			kind: "lethal",
			name: lethal,
			onClose: () => {
				dismissed.current = lethal.toLowerCase();
				setLethal(null);
			}
		}) : null]
	});
}
function ToastHost() {
	const [items, setItems] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const on = (e) => {
			const d = e.detail;
			if (!d?.title) return;
			const id = Date.now() + Math.random();
			setItems((prev) => [...prev, {
				...d,
				id
			}].slice(-4));
			window.setTimeout(() => {
				setItems((prev) => prev.filter((x) => x.id !== id));
			}, 5200);
		};
		window.addEventListener("takologs-toast", on);
		return () => window.removeEventListener("takologs-toast", on);
	}, []);
	if (!items.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-20 inset-x-0 z-[90] flex flex-col items-center gap-2 px-4 pointer-events-none",
		children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `pointer-events-auto w-full max-w-sm glass-strong glass-modal rounded-2xl px-4 py-3 shadow-lg animate-spring-in ${it.kind === "mix" || it.kind === "sos" || it.kind === "lab" || it.kind === "lethal" ? "border border-red-500/50" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-heading font-bold text-sand-900 dark:text-sand-50",
				children: it.title
			}), it.body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-sand-500 mt-0.5",
				children: it.body
			}) : null]
		}, it.id))
	});
}
var HUE_KEY = "takologs-accent-hue";
var THEME_KEY = "takologs-theme";
var ACCENT_PRESETS = [
	{
		name: "Sable",
		hue: 36
	},
	{
		name: "Terracotta",
		hue: 18
	},
	{
		name: "Rose poudré",
		hue: 350
	},
	{
		name: "Mauve",
		hue: 280
	},
	{
		name: "Indigo",
		hue: 235
	},
	{
		name: "Lagon",
		hue: 200
	},
	{
		name: "Sauge",
		hue: 150
	},
	{
		name: "Olive",
		hue: 80
	},
	{
		name: "Mono",
		hue: -1
	}
];
function wrapHue(n) {
	if (!Number.isFinite(n)) return 36;
	if (n < 0) return -1;
	return Math.round((n % 360 + 360) % 360);
}
function applyAccent(hue) {
	const h = wrapHue(hue);
	const root = document.documentElement;
	const mono = h < 0;
	root.classList.toggle("mono", mono);
	if (mono) {
		root.style.setProperty("--accent-h", "0");
		root.style.setProperty("--clay-s", "0%");
		root.style.setProperty("--logo-hue-rotate", "0deg");
	} else {
		root.style.setProperty("--accent-h", String(h));
		root.style.removeProperty("--clay-s");
		root.style.setProperty("--logo-hue-rotate", `${h - 36}deg`);
	}
	const dark = root.classList.contains("dark");
	const meta = document.querySelector("meta[name=\"theme-color\"]");
	if (meta) meta.setAttribute("content", mono ? dark ? "#141414" : "#ebebeb" : dark ? `hsl(${h} 28% 8%)` : `hsl(${h} 52% 91%)`);
	applyTakoFavicon(mono ? 0 : h);
	try {
		localStorage.setItem(HUE_KEY, String(h));
	} catch {}
	return h;
}
function autoMode() {
	const h = (/* @__PURE__ */ new Date()).getHours();
	return h >= 19 || h < 7 ? "dark" : "light";
}
function applyThemeClass(mode) {
	document.documentElement.classList.toggle("dark", mode === "dark");
	const h = wrapHue(Number(document.documentElement.style.getPropertyValue("--accent-h")) || 36);
	const meta = document.querySelector("meta[name=\"theme-color\"]");
	if (meta) meta.setAttribute("content", mode === "dark" ? `hsl(${h} 28% 8%)` : `hsl(${h} 52% 91%)`);
}
var AccentCtx = (0, import_react.createContext)(null);
var ThemeCtx = (0, import_react.createContext)(null);
function ThemeProviders({ children }) {
	const [hue, setHueState] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return 36;
		const raw = localStorage.getItem(HUE_KEY);
		const n = raw != null ? parseInt(raw, 10) : NaN;
		return Number.isFinite(n) ? wrapHue(n) : 36;
	});
	const [pref, setPrefState] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return "auto";
		const v = localStorage.getItem(THEME_KEY);
		return v === "light" || v === "dark" || v === "auto" ? v : "auto";
	});
	const [mode, setMode] = (0, import_react.useState)(() => pref === "auto" ? autoMode() : pref);
	(0, import_react.useEffect)(() => {
		applyAccent(hue);
	}, [hue]);
	(0, import_react.useEffect)(() => {
		const onHue = (e) => {
			const h = e.detail;
			if (typeof h === "number") setHueState(applyAccent(h));
		};
		const onTheme = (e) => {
			const p = e.detail;
			if (p === "light" || p === "dark" || p === "auto") {
				setPrefState(p);
				try {
					localStorage.setItem(THEME_KEY, p);
				} catch {}
			}
		};
		window.addEventListener("takologs-set-hue", onHue);
		window.addEventListener("takologs-set-theme", onTheme);
		return () => {
			window.removeEventListener("takologs-set-hue", onHue);
			window.removeEventListener("takologs-set-theme", onTheme);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const next = pref === "auto" ? autoMode() : pref;
		setMode(next);
		applyThemeClass(next);
	}, [pref]);
	(0, import_react.useEffect)(() => {
		if (pref !== "auto") return;
		const id = window.setInterval(() => {
			const next = autoMode();
			setMode(next);
			applyThemeClass(next);
		}, 6e4);
		return () => window.clearInterval(id);
	}, [pref]);
	const setHue = (0, import_react.useCallback)((h) => {
		setHueState(applyAccent(h));
	}, []);
	const reset = (0, import_react.useCallback)(() => setHue(36), [setHue]);
	const setPref = (0, import_react.useCallback)((p) => {
		setPrefState(p);
		try {
			localStorage.setItem(THEME_KEY, p);
		} catch {}
	}, []);
	const cycle = (0, import_react.useCallback)(() => {
		setPref(pref === "auto" ? "light" : pref === "light" ? "dark" : "auto");
	}, [pref, setPref]);
	const accentValue = (0, import_react.useMemo)(() => ({
		hue,
		setHue,
		reset
	}), [
		hue,
		setHue,
		reset
	]);
	const themeValue = (0, import_react.useMemo)(() => ({
		pref,
		mode,
		setPref,
		cycle
	}), [
		pref,
		mode,
		setPref,
		cycle
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCtx.Provider, {
		value: themeValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccentCtx.Provider, {
			value: accentValue,
			children
		})
	});
}
function useAccent() {
	const ctx = (0, import_react.useContext)(AccentCtx);
	if (!ctx) throw new Error("useAccent must be used within ThemeProviders");
	return ctx;
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeCtx);
	if (!ctx) throw new Error("useTheme must be used within ThemeProviders");
	return ctx;
}
var THEME_BOOT_SCRIPT = `(function(){try{var h=localStorage.getItem("${HUE_KEY}")||"36";var n=parseInt(h,10);if(!isFinite(n))n=36;var r=document.documentElement;var mono=n<0;r.classList.toggle("mono",mono);if(mono){r.style.setProperty("--accent-h","0");r.style.setProperty("--clay-s","0%");r.style.setProperty("--logo-hue-rotate","0deg");}else{n=((n%360)+360)%360;r.style.setProperty("--accent-h",String(n));r.style.setProperty("--logo-hue-rotate",(n-36)+"deg");}var t=localStorage.getItem("${THEME_KEY}")||"auto";var hr=new Date().getHours();var dark=t==="dark"||(t!=="light"&&(hr>=19||hr<7));r.classList.toggle("dark",dark);}catch(e){}})();`;
function g(name, atoms, bonds) {
	return {
		name,
		atoms: atoms.map(([x, y, el]) => ({
			x,
			y,
			el
		})),
		bonds
	};
}
/** Simplified 2D skeletons of catalogue substances (heteroatoms labeled). */
var MOL_GRAPHS = [
	g("MDMA", [
		[
			-36,
			-22,
			"C"
		],
		[
			-18,
			-32,
			"C"
		],
		[
			0,
			-22,
			"C"
		],
		[
			0,
			-4,
			"C"
		],
		[
			-18,
			6,
			"C"
		],
		[
			-36,
			-4,
			"C"
		],
		[
			-18,
			-50,
			"O"
		],
		[
			8,
			-44,
			"O"
		],
		[
			18,
			6,
			"C"
		],
		[
			36,
			-4,
			"C"
		],
		[
			54,
			6,
			"N"
		],
		[
			72,
			-4,
			"C"
		],
		[
			36,
			-22,
			"C"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[1, 6],
		[6, 7],
		[7, 2],
		[3, 8],
		[8, 9],
		[9, 10],
		[10, 11],
		[9, 12]
	]),
	g("Caféine", [
		[
			-20,
			8,
			"N"
		],
		[
			0,
			-4,
			"C"
		],
		[
			20,
			8,
			"N"
		],
		[
			20,
			30,
			"C"
		],
		[
			0,
			42,
			"C"
		],
		[
			-20,
			30,
			"C"
		],
		[
			0,
			-26,
			"N"
		],
		[
			22,
			-18,
			"C"
		],
		[
			38,
			0,
			"N"
		],
		[
			38,
			24,
			"C"
		],
		[
			20,
			50,
			"O"
		],
		[
			-38,
			38,
			"O"
		],
		[
			0,
			-46,
			"C"
		],
		[
			38,
			-18,
			"C"
		],
		[
			-38,
			0,
			"C"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[1, 6],
		[6, 7],
		[7, 8],
		[8, 9],
		[9, 3],
		[4, 10],
		[5, 11],
		[6, 12],
		[8, 13],
		[0, 14]
	]),
	g("LSD", [
		[
			-48,
			8,
			"C"
		],
		[
			-30,
			-8,
			"C"
		],
		[
			-12,
			8,
			"C"
		],
		[
			-12,
			28,
			"C"
		],
		[
			-30,
			40,
			"C"
		],
		[
			-48,
			28,
			"C"
		],
		[
			-12,
			-12,
			"C"
		],
		[
			8,
			-4,
			"C"
		],
		[
			8,
			18,
			"C"
		],
		[
			26,
			28,
			"N"
		],
		[
			44,
			18,
			"C"
		],
		[
			44,
			-2,
			"C"
		],
		[
			26,
			-12,
			"C"
		],
		[
			26,
			48,
			"C"
		],
		[
			8,
			58,
			"C"
		],
		[
			44,
			58,
			"C"
		],
		[
			62,
			48,
			"N"
		],
		[
			80,
			58,
			"C"
		],
		[
			62,
			28,
			"C"
		],
		[
			62,
			8,
			"O"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[2, 6],
		[6, 7],
		[7, 8],
		[8, 3],
		[8, 9],
		[9, 10],
		[10, 11],
		[11, 12],
		[12, 7],
		[9, 13],
		[13, 14],
		[13, 15],
		[15, 16],
		[16, 17],
		[16, 18],
		[18, 19]
	]),
	g("Psilocybine", [
		[
			-36,
			0,
			"C"
		],
		[
			-18,
			-14,
			"C"
		],
		[
			0,
			0,
			"C"
		],
		[
			0,
			20,
			"C"
		],
		[
			-18,
			32,
			"C"
		],
		[
			-36,
			20,
			"C"
		],
		[
			0,
			-20,
			"C"
		],
		[
			18,
			-8,
			"N"
		],
		[
			18,
			14,
			"C"
		],
		[
			36,
			24,
			"C"
		],
		[
			54,
			14,
			"C"
		],
		[
			72,
			24,
			"N"
		],
		[
			90,
			14,
			"C"
		],
		[
			90,
			34,
			"C"
		],
		[
			-18,
			50,
			"O"
		],
		[
			-4,
			64,
			"P"
		],
		[
			14,
			54,
			"O"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[2, 6],
		[6, 7],
		[7, 8],
		[8, 3],
		[8, 9],
		[9, 10],
		[10, 11],
		[11, 12],
		[11, 13],
		[4, 14],
		[14, 15],
		[15, 16]
	]),
	g("Kétamine", [
		[
			-40,
			-16,
			"C"
		],
		[
			-22,
			-28,
			"C"
		],
		[
			-4,
			-16,
			"C"
		],
		[
			-4,
			4,
			"C"
		],
		[
			-22,
			16,
			"C"
		],
		[
			-40,
			4,
			"C"
		],
		[
			16,
			4,
			"C"
		],
		[
			34,
			-8,
			"C"
		],
		[
			52,
			4,
			"C"
		],
		[
			52,
			24,
			"C"
		],
		[
			34,
			36,
			"C"
		],
		[
			16,
			24,
			"C"
		],
		[
			34,
			54,
			"O"
		],
		[
			16,
			-20,
			"N"
		],
		[
			16,
			-40,
			"C"
		],
		[
			-4,
			-34,
			"Cl"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[3, 6],
		[6, 7],
		[7, 8],
		[8, 9],
		[9, 10],
		[10, 11],
		[11, 6],
		[10, 12],
		[6, 13],
		[13, 14],
		[2, 15]
	]),
	g("THC", [
		[
			-50,
			8,
			"C"
		],
		[
			-32,
			-8,
			"C"
		],
		[
			-14,
			8,
			"C"
		],
		[
			-14,
			28,
			"C"
		],
		[
			-32,
			40,
			"C"
		],
		[
			-50,
			28,
			"C"
		],
		[
			6,
			8,
			"C"
		],
		[
			24,
			-4,
			"C"
		],
		[
			42,
			8,
			"C"
		],
		[
			42,
			28,
			"C"
		],
		[
			24,
			40,
			"C"
		],
		[
			6,
			28,
			"O"
		],
		[
			-32,
			58,
			"O"
		],
		[
			24,
			-24,
			"C"
		],
		[
			42,
			-34,
			"C"
		],
		[
			60,
			-24,
			"C"
		],
		[
			60,
			8,
			"C"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[2, 6],
		[6, 7],
		[7, 8],
		[8, 9],
		[9, 10],
		[10, 11],
		[11, 6],
		[4, 12],
		[7, 13],
		[13, 14],
		[14, 15],
		[8, 16]
	]),
	g("Nicotine", [
		[
			-36,
			-12,
			"C"
		],
		[
			-18,
			-24,
			"C"
		],
		[
			0,
			-12,
			"N"
		],
		[
			0,
			8,
			"C"
		],
		[
			-18,
			20,
			"C"
		],
		[
			-36,
			8,
			"C"
		],
		[
			18,
			20,
			"C"
		],
		[
			36,
			8,
			"C"
		],
		[
			54,
			20,
			"C"
		],
		[
			54,
			40,
			"N"
		],
		[
			36,
			52,
			"C"
		],
		[
			36,
			-12,
			"C"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[3, 6],
		[6, 7],
		[7, 8],
		[8, 9],
		[9, 10],
		[10, 6],
		[9, 11]
	]),
	g("DMT", [
		[
			-36,
			0,
			"C"
		],
		[
			-18,
			-16,
			"C"
		],
		[
			0,
			0,
			"C"
		],
		[
			0,
			20,
			"C"
		],
		[
			-18,
			32,
			"C"
		],
		[
			-36,
			20,
			"C"
		],
		[
			0,
			-22,
			"C"
		],
		[
			18,
			-8,
			"N"
		],
		[
			18,
			14,
			"C"
		],
		[
			36,
			26,
			"C"
		],
		[
			54,
			14,
			"C"
		],
		[
			72,
			26,
			"N"
		],
		[
			90,
			14,
			"C"
		],
		[
			90,
			38,
			"C"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[2, 6],
		[6, 7],
		[7, 8],
		[8, 3],
		[8, 9],
		[9, 10],
		[10, 11],
		[11, 12],
		[11, 13]
	]),
	g("Mescaline", [
		[
			-24,
			-20,
			"C"
		],
		[
			-6,
			-32,
			"C"
		],
		[
			12,
			-20,
			"C"
		],
		[
			12,
			0,
			"C"
		],
		[
			-6,
			12,
			"C"
		],
		[
			-24,
			0,
			"C"
		],
		[
			-42,
			-32,
			"O"
		],
		[
			12,
			-40,
			"O"
		],
		[
			30,
			12,
			"O"
		],
		[
			30,
			-8,
			"C"
		],
		[
			48,
			0,
			"C"
		],
		[
			66,
			12,
			"N"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[0, 6],
		[2, 7],
		[4, 8],
		[3, 9],
		[9, 10],
		[10, 11]
	]),
	g("Amphétamine", [
		[
			-36,
			-16,
			"C"
		],
		[
			-18,
			-28,
			"C"
		],
		[
			0,
			-16,
			"C"
		],
		[
			0,
			4,
			"C"
		],
		[
			-18,
			16,
			"C"
		],
		[
			-36,
			4,
			"C"
		],
		[
			18,
			16,
			"C"
		],
		[
			36,
			4,
			"C"
		],
		[
			54,
			16,
			"N"
		],
		[
			36,
			-16,
			"C"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[3, 6],
		[6, 7],
		[7, 8],
		[7, 9]
	]),
	g("Cocaïne", [
		[
			0,
			-8,
			"N"
		],
		[
			18,
			8,
			"C"
		],
		[
			18,
			28,
			"C"
		],
		[
			0,
			40,
			"C"
		],
		[
			-18,
			28,
			"C"
		],
		[
			-18,
			8,
			"C"
		],
		[
			0,
			58,
			"C"
		],
		[
			18,
			70,
			"O"
		],
		[
			36,
			58,
			"C"
		],
		[
			54,
			70,
			"O"
		],
		[
			36,
			40,
			"C"
		],
		[
			18,
			48,
			"O"
		],
		[
			54,
			28,
			"C"
		],
		[
			72,
			16,
			"C"
		],
		[
			90,
			28,
			"C"
		],
		[
			90,
			48,
			"C"
		],
		[
			72,
			60,
			"C"
		],
		[
			54,
			48,
			"C"
		],
		[
			0,
			-28,
			"C"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[3, 6],
		[6, 7],
		[6, 8],
		[8, 9],
		[8, 10],
		[10, 2],
		[10, 11],
		[8, 12],
		[12, 13],
		[13, 14],
		[14, 15],
		[15, 16],
		[16, 17],
		[17, 12],
		[0, 18]
	]),
	g("Morphine", [
		[
			-20,
			0,
			"C"
		],
		[
			0,
			-16,
			"C"
		],
		[
			20,
			0,
			"C"
		],
		[
			20,
			22,
			"C"
		],
		[
			0,
			36,
			"C"
		],
		[
			-20,
			22,
			"C"
		],
		[
			40,
			10,
			"C"
		],
		[
			56,
			26,
			"C"
		],
		[
			40,
			42,
			"C"
		],
		[
			20,
			48,
			"O"
		],
		[
			0,
			56,
			"O"
		],
		[
			56,
			48,
			"N"
		],
		[
			72,
			36,
			"C"
		],
		[
			-20,
			-20,
			"O"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[2, 6],
		[6, 7],
		[7, 8],
		[8, 3],
		[8, 9],
		[4, 10],
		[7, 11],
		[11, 12],
		[1, 13]
	]),
	g("2C-B", [
		[
			-24,
			-18,
			"C"
		],
		[
			-6,
			-30,
			"C"
		],
		[
			12,
			-18,
			"C"
		],
		[
			12,
			2,
			"C"
		],
		[
			-6,
			14,
			"C"
		],
		[
			-24,
			2,
			"C"
		],
		[
			-42,
			-30,
			"O"
		],
		[
			12,
			22,
			"O"
		],
		[
			30,
			2,
			"C"
		],
		[
			48,
			14,
			"C"
		],
		[
			66,
			2,
			"N"
		],
		[
			-6,
			-48,
			"Br"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[0, 6],
		[3, 7],
		[4, 8],
		[8, 9],
		[9, 10],
		[1, 11]
	]),
	g("Éthanol", [
		[
			-36,
			0,
			"C"
		],
		[
			0,
			0,
			"C"
		],
		[
			36,
			0,
			"O"
		]
	], [[0, 1], [1, 2]]),
	g("GHB", [
		[
			-54,
			8,
			"O"
		],
		[
			-24,
			0,
			"C"
		],
		[
			8,
			0,
			"C"
		],
		[
			40,
			0,
			"C"
		],
		[
			70,
			8,
			"C"
		],
		[
			88,
			-8,
			"O"
		],
		[
			70,
			28,
			"O"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[4, 6]
	]),
	g("Dopamine", [
		[
			-30,
			-18,
			"C"
		],
		[
			-12,
			-30,
			"C"
		],
		[
			6,
			-18,
			"C"
		],
		[
			6,
			2,
			"C"
		],
		[
			-12,
			14,
			"C"
		],
		[
			-30,
			2,
			"C"
		],
		[
			-48,
			-30,
			"O"
		],
		[
			6,
			-36,
			"O"
		],
		[
			24,
			14,
			"C"
		],
		[
			42,
			2,
			"C"
		],
		[
			60,
			14,
			"N"
		]
	], [
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
		[5, 0],
		[0, 6],
		[2, 7],
		[3, 8],
		[8, 9],
		[9, 10]
	])
];
function hue() {
	if (typeof document === "undefined") return 36;
	const raw = getComputedStyle(document.documentElement).getPropertyValue("--accent-h").trim();
	const n = Number(raw);
	return Number.isFinite(n) ? n : 36;
}
function radiusFor(el) {
	if (el === "C") return 5.2;
	if (el === "N" || el === "O") return 6.2;
	if (el === "P" || el === "S") return 7;
	if (el === "Cl" || el === "Br") return 7.4;
	return 5.6;
}
function makeMols(w, h, n) {
	const pool = [...MOL_GRAPHS].sort(() => Math.random() - .5);
	return Array.from({ length: n }, (_, i) => {
		const g = pool[i % pool.length];
		const scale = 1.55 + i % 4 * .22;
		const speed = .018 + Math.random() * .016;
		const ang = Math.random() * Math.PI * 2;
		return {
			name: g.name,
			x: Math.random() * w,
			y: Math.random() * h,
			vx: Math.cos(ang) * speed,
			vy: Math.sin(ang) * speed,
			rot: Math.random() * Math.PI * 2,
			vr: (Math.random() - .5) * 9e-4,
			scale,
			pulse: Math.random() * Math.PI * 2,
			atoms: g.atoms.map((a) => ({
				...a,
				r: radiusFor(a.el)
			})),
			bonds: g.bonds
		};
	});
}
function MoleculeField() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.classList.contains("tako-reduced-motion");
		let w = 0;
		let h = 0;
		let dpr = 1;
		let mols = [];
		let raf = 0;
		let boost = 0;
		let lastScroll = window.scrollY;
		let running = true;
		const resize = () => {
			dpr = Math.min(window.devicePixelRatio || 1, 1.5);
			w = window.innerWidth;
			h = window.innerHeight;
			canvas.width = Math.floor(w * dpr);
			canvas.height = Math.floor(h * dpr);
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			mols = makeMols(w, h, w < 640 ? 6 : w < 1024 ? 10 : 14);
		};
		const world = (m, a) => {
			const c = Math.cos(m.rot);
			const s = Math.sin(m.rot);
			const x = a.x * m.scale;
			const y = a.y * m.scale;
			return {
				x: m.x + x * c - y * s,
				y: m.y + x * s + y * c,
				r: a.r,
				el: a.el
			};
		};
		let frame = 0;
		const draw = () => {
			if (!running) return;
			if (document.hidden) {
				raf = requestAnimationFrame(draw);
				return;
			}
			frame += 1;
			ctx.clearRect(0, 0, w, h);
			const H = hue();
			const dark = document.documentElement.classList.contains("dark");
			const stroke = dark ? `hsl(${H} 46% 74%)` : `hsl(${H} 36% 38%)`;
			const fill = dark ? `hsl(${H} 50% 78%)` : `hsl(${H} 40% 42%)`;
			ctx.lineCap = "round";
			ctx.lineJoin = "round";
			ctx.font = "600 12px \"Josefin Sans\", Avenir, ui-sans-serif, sans-serif";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			for (let i = 0; i < mols.length; i++) {
				const a = mols[i];
				for (let j = i + 1; j < mols.length; j++) {
					const b = mols[j];
					const dx = b.x - a.x;
					const dy = b.y - a.y;
					const dist = Math.hypot(dx, dy) || 1;
					if (dist < 260) {
						const t = 1 - dist / 260;
						ctx.strokeStyle = stroke;
						ctx.globalAlpha = .08 + t * .22;
						ctx.lineWidth = 1.4;
						ctx.setLineDash([5, 10]);
						ctx.beginPath();
						ctx.moveTo(a.x, a.y);
						ctx.lineTo(b.x, b.y);
						ctx.stroke();
						ctx.setLineDash([]);
						if (!reduced) {
							const f = (dist - 160) / 160 * .006;
							a.vx += dx * f;
							a.vy += dy * f;
							b.vx -= dx * f;
							b.vy -= dy * f;
							if (dist < 170) {
								a.vr += (b.vr - a.vr) * .008;
								b.vr += (a.vr - b.vr) * .008;
							}
						}
					}
				}
			}
			for (const m of mols) {
				if (!reduced) {
					m.x += m.vx * (1 + boost * .45);
					m.y += m.vy * (1 + boost * .45);
					m.rot += m.vr * (1 + boost * .35);
					m.pulse += .01 + boost * .008;
					m.vx *= .997;
					m.vy *= .997;
					const spd = Math.hypot(m.vx, m.vy);
					if (spd < .022) {
						m.vx += (Math.random() - .5) * .01;
						m.vy += (Math.random() - .5) * .01;
					} else if (spd > .08) {
						m.vx *= .96;
						m.vy *= .96;
					}
					if (m.x < -110) m.x = w + 110;
					if (m.x > w + 110) m.x = -110;
					if (m.y < -110) m.y = h + 110;
					if (m.y > h + 110) m.y = -110;
				}
				const glow = .42 + Math.sin(m.pulse) * .08 + boost * .08;
				ctx.strokeStyle = stroke;
				ctx.fillStyle = fill;
				ctx.lineWidth = 2.8;
				ctx.globalAlpha = glow;
				ctx.beginPath();
				for (const [ia, ib] of m.bonds) {
					const pa = world(m, m.atoms[ia]);
					const pb = world(m, m.atoms[ib]);
					ctx.moveTo(pa.x, pa.y);
					ctx.lineTo(pb.x, pb.y);
				}
				ctx.stroke();
				for (const atom of m.atoms) {
					const p = world(m, atom);
					ctx.globalAlpha = glow + .12;
					ctx.beginPath();
					ctx.arc(p.x, p.y, atom.r + 1.2, 0, Math.PI * 2);
					ctx.fillStyle = fill;
					ctx.fill();
					ctx.globalAlpha = Math.min(1, glow + .5);
					ctx.fillStyle = dark ? `hsl(${H} 40% 96%)` : `hsl(${H} 30% 16%)`;
					ctx.fillText(atom.el, p.x, p.y + .5);
				}
			}
			ctx.globalAlpha = 1;
			boost *= .94;
			if (!reduced) raf = requestAnimationFrame(draw);
		};
		const onScroll = () => {
			const y = window.scrollY;
			const dy = Math.abs(y - lastScroll);
			lastScroll = y;
			boost = Math.min(1.6, boost + dy * .018 + .28);
			for (const m of mols) {
				m.vr += (Math.random() - .5) * .004;
				m.vy += (Math.random() - .5) * .04;
				m.vx += (Math.random() - .5) * .04;
			}
		};
		const boot = window.setTimeout(() => {
			resize();
			draw();
		}, 40);
		window.addEventListener("resize", resize);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			running = false;
			window.clearTimeout(boot);
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		className: "mol-field",
		"aria-hidden": "true",
		style: { pointerEvents: "none" }
	});
}
function MailOutboxHost() {
	const { t } = useI18n();
	const [mail, setMail] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const on = (e) => {
			const m = e.detail;
			if (m) setMail(m);
		};
		window.addEventListener("takologs-mail", on);
		return () => window.removeEventListener("takologs-mail", on);
	}, []);
	if (!mail) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm p-4 flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-lg glass-strong rounded-3xl overflow-hidden max-h-[88vh] flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 px-4 py-3 border-b border-sand-300/30",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-clay-500" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-heading font-semibold text-clay-500 truncate",
							children: mail.subject
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-sand-500 truncate",
							children: mail.to
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							consumeOutbox(mail.id);
							setMail(null);
						},
						className: "rounded-full p-1.5 text-sand-400",
						"aria-label": t("common.close"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: mail.subject,
				srcDoc: mail.html,
				className: "w-full flex-1 min-h-[22rem] bg-white"
			})]
		})
	});
}
var KEY$1 = "takologs-cookies";
function CookieBanner() {
	const { t } = useI18n();
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const v = localStorage.getItem(KEY$1);
			if (v !== "accept" && v !== "refuse") setShow(true);
		} catch {
			setShow(true);
		}
	}, []);
	if (!show) return null;
	const choose = (v) => {
		try {
			localStorage.setItem(KEY$1, v);
		} catch {}
		setShow(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[95] bg-sand-200/60 dark:bg-black/55 backdrop-blur-sm flex items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md glass-strong glass-modal rounded-3xl p-5 space-y-3 animate-spring-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50 flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cookie, { className: "h-5 w-5 text-clay-500" }),
						" ",
						t("cookies.title")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-sand-700 dark:text-sand-200 leading-relaxed",
					children: [
						t("cookies.body"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/legal",
							hash: "cookies",
							className: "font-semibold text-clay-500 underline underline-offset-2",
							onClick: () => setShow(false),
							children: t("cookies.policy")
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row gap-2 pt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => choose("accept"),
						className: "flex-1 rounded-full bg-clay-500 text-white py-2.5 text-sm font-semibold",
						children: t("cookies.accept")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => choose("refuse"),
						className: "flex-1 rounded-full glass py-2.5 text-sm font-semibold text-sand-800 dark:text-sand-100",
						children: t("cookies.refuse")
					})]
				})
			]
		})
	});
}
var KIND_DOT = {
	mix: "bg-red-500",
	sos: "bg-red-600",
	lab: "bg-amber-500",
	lethal: "bg-red-600",
	care: "bg-orange-500",
	hydrate: "bg-sky-500",
	idle: "bg-amber-400",
	drive: "bg-clay-500",
	rest: "bg-sand-500",
	sitter: "bg-violet-500",
	phase: "bg-clay-400"
};
function InboxBell() {
	const { t, locale } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [items, setItems] = (0, import_react.useState)([]);
	const [n, setN] = (0, import_react.useState)(0);
	const [pos, setPos] = (0, import_react.useState)({
		top: 0,
		right: 16
	});
	const btnRef = (0, import_react.useRef)(null);
	const panelRef = (0, import_react.useRef)(null);
	const refresh = () => {
		setItems(readInbox());
		setN(unreadCount());
	};
	const place = () => {
		const r = btnRef.current?.getBoundingClientRect();
		if (!r) return;
		const width = Math.min(352, window.innerWidth - 16);
		const right = Math.max(8, window.innerWidth - r.right);
		const maxH = Math.min(window.innerHeight * .7, 448);
		const below = r.bottom + 10;
		const top = below + Math.min(220, maxH) > window.innerHeight - 8 ? Math.max(8, r.top - maxH - 10) : below;
		setPos({
			top,
			right: Math.min(right, window.innerWidth - width - 8)
		});
	};
	(0, import_react.useEffect)(() => {
		refresh();
		const on = () => refresh();
		window.addEventListener("takologs-inbox", on);
		window.addEventListener("takologs-toast", on);
		return () => {
			window.removeEventListener("takologs-inbox", on);
			window.removeEventListener("takologs-toast", on);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		markInboxRead();
		setN(0);
		place();
		const down = (e) => {
			const node = e.target;
			if (btnRef.current?.contains(node) || panelRef.current?.contains(node)) return;
			setOpen(false);
		};
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("mousedown", down);
		window.addEventListener("keydown", onKey);
		window.addEventListener("resize", place);
		window.addEventListener("scroll", place, true);
		return () => {
			window.removeEventListener("mousedown", down);
			window.removeEventListener("keydown", onKey);
			window.removeEventListener("resize", place);
			window.removeEventListener("scroll", place, true);
		};
	}, [open]);
	const tag = locale === "en" ? "en-GB" : "fr-FR";
	const overlay = open && typeof document !== "undefined" ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[200]",
		role: "presentation",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 bg-sand-900/15 dark:bg-black/35 cursor-default",
			"aria-label": t("common.close"),
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: panelRef,
			className: "w-[min(22rem,calc(100vw-1rem))] glass-strong glass-modal rounded-2xl p-2 max-h-[min(70vh,28rem)] overflow-y-auto shadow-xl animate-spring-in",
			style: {
				position: "fixed",
				top: pos.top,
				right: pos.right,
				zIndex: 201
			},
			role: "dialog",
			"aria-label": t("inbox.title"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-2 py-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-heading font-bold text-sand-800 dark:text-sand-100",
					children: t("inbox.title")
				}), items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						clearInbox();
						setItems([]);
					},
					className: "text-[11px] font-semibold text-sand-500 hover:text-clay-500",
					children: t("inbox.clear")
				}) : null]
			}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-2 py-6 text-center text-sm text-sand-500",
				children: t("inbox.empty")
			}) : items.slice(0, 30).map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl px-3 py-2 hover:bg-sand-200/40 dark:hover:bg-white/5 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-1.5 h-2 w-2 rounded-full shrink-0 ${KIND_DOT[it.kind] || "bg-sand-400"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-sand-900 dark:text-sand-50",
							children: it.title
						}),
						it.body ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-sand-600 dark:text-sand-300 mt-0.5",
							children: it.body
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-sand-400 mt-1",
							children: new Date(it.at).toLocaleString(tag, {
								hour: "2-digit",
								minute: "2-digit",
								day: "numeric",
								month: "short"
							})
						})
					]
				})]
			}, it.id))]
		})]
	}), document.body) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		ref: btnRef,
		type: "button",
		onClick: () => setOpen((v) => !v),
		className: "relative rounded-full glass p-2.5 text-sand-700 dark:text-sand-200 hover:scale-105 transition-transform",
		"aria-label": t("inbox.title"),
		title: t("inbox.title"),
		"aria-expanded": open,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), n > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute -top-0.5 -right-0.5 min-w-[1.05rem] h-[1.05rem] px-1 rounded-full bg-clay-500 text-white text-[10px] font-bold grid place-items-center",
			children: n > 9 ? "9+" : n
		}) : null]
	}), overlay] });
}
var NowSession = (0, import_react.lazy)(() => import("./now-session-KWxfrbVn.mjs").then((m) => ({ default: m.NowSession })));
var COARSE_MIN = 960;
function ActiveBanner() {
	const { user } = useCurrentUserState();
	const [exps, setExps] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		const tick = async () => {
			try {
				const list = await listExperiences();
				const now = Date.now();
				const relevant = list.filter((e) => e.ingestions.some((ing) => {
					const start = new Date(ing.ingestionTime).getTime();
					return now >= start && now < start + COARSE_MIN * 6e4;
				}));
				if (!cancelled) setExps(relevant);
			} catch {
				if (!cancelled) setExps([]);
			}
		};
		tick();
		const id = window.setInterval(tick, 6e4);
		return () => {
			cancelled = true;
			window.clearInterval(id);
		};
	}, [user?.id]);
	if (exps.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: null,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NowSession, { experiences: exps })
	});
}
var APP_VERSION = "19.1";
function ThemeToggle() {
	const { pref, mode, cycle } = useTheme();
	const { t } = useI18n();
	const Icon = pref === "auto" ? SunMoon : mode === "dark" ? Moon : Sun;
	const label = pref === "auto" ? t("common.auto") : mode === "dark" ? t("common.dark") : t("common.light");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: cycle,
		className: "rounded-full glass p-2.5 text-sand-700 dark:text-sand-200 hover:scale-105 active:scale-95 transition-transform",
		title: `${t("common.theme")} : ${label}`,
		"aria-label": `${t("common.theme")} ${label}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
	});
}
function ColorPicker() {
	const { hue, setHue, reset } = useAccent();
	const { t } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onDown = (e) => {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		};
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("mousedown", onDown);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onDown);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			className: "rounded-full glass p-2.5 hover:scale-105 active:scale-95 transition-transform",
			title: t("common.color"),
			"aria-label": t("common.color"),
			"aria-expanded": open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block h-4 w-4 rounded-full ring-1 ring-black/10 dark:ring-white/20",
				style: { backgroundColor: `hsl(${hue} 45% 54%)` }
			})
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-64 glass-strong rounded-2xl p-4",
			style: {
				position: "absolute",
				right: 0,
				top: "100%",
				marginTop: 8,
				zIndex: 50
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-heading font-bold text-sand-900 dark:text-sand-50",
						children: t("common.color")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: reset,
						className: "text-xs font-semibold text-sand-600 dark:text-sand-300 hover:text-clay-500 transition-colors",
						children: t("common.reset")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-4 gap-2 mb-4",
					children: ACCENT_PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setHue(p.hue),
						title: p.name,
						"aria-label": p.name,
						className: `h-8 w-8 rounded-full ring-2 transition-transform hover:scale-110 ${hue === p.hue ? "ring-sand-900 dark:ring-sand-50" : "ring-transparent"}`,
						style: { backgroundColor: p.hue < 0 ? "#8a8a8a" : `hsl(${p.hue} 45% 54%)` }
					}, p.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-semibold text-sand-600 dark:text-sand-300 mb-1.5",
					children: t("common.customHue")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 0,
					max: 359,
					value: hue,
					onChange: (e) => setHue(Number(e.target.value)),
					className: "w-full h-2 rounded-full appearance-none cursor-pointer accent-clay-500",
					style: { background: "linear-gradient(to right, hsl(0 45% 54%), hsl(60 45% 54%), hsl(120 45% 54%), hsl(180 45% 54%), hsl(240 45% 54%), hsl(300 45% 54%), hsl(360 45% 54%))" },
					"aria-label": t("common.customHue")
				})
			]
		}) : null]
	});
}
function MoreMenu({ active }) {
	const { t } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	const moreOn = MORE_NAV.some((p) => active(p));
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onDown = (e) => {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		};
		document.addEventListener("mousedown", onDown);
		return () => document.removeEventListener("mousedown", onDown);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			className: `inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-all ${moreOn ? "bg-clay-500 text-white shadow-lg shadow-clay-500/25" : "text-sand-700 dark:text-sand-200 hover:bg-sand-200/60 dark:hover:bg-sand-800/40"}`,
			children: [t("nav.more"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}` })]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-52 glass-strong rounded-2xl p-1.5",
			style: {
				position: "absolute",
				left: 0,
				top: "100%",
				marginTop: 8,
				zIndex: 50
			},
			children: MORE_NAV.map((path) => {
				const item = NAV.find((n) => n.path === path);
				if (!item) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.path,
					onClick: () => setOpen(false),
					className: `flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold ${active(item.path) ? "bg-clay-500 text-white" : "text-sand-700 dark:text-sand-200 hover:bg-sand-200/50 dark:hover:bg-sand-800/40"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" }), t(item.labelKey)]
				}, item.path);
			})
		}) : null]
	});
}
function AuthSlot() {
	const { user, isPending } = useCurrentUserState();
	const { t } = useI18n();
	const [ready, setReady] = (0, import_react.useState)(false);
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	if (!ready || isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden sm:block h-9 w-9 rounded-full glass animate-pulse" });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/login",
		search: { next: "/logs" },
		className: "hidden sm:flex items-center gap-1.5 rounded-full bg-sand-900 dark:bg-sand-50 px-3 py-2 text-sm font-semibold text-sand-50 dark:text-sand-900 hover:scale-105 transition-transform",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden lg:inline",
			children: t("common.signIn")
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		disabled: signingOut,
		onClick: () => {
			setSigningOut(true);
			signOut().catch(() => setSigningOut(false));
		},
		className: "hidden sm:flex items-center rounded-full glass p-2.5 text-sand-700 dark:text-sand-200 hover:scale-105 transition-transform disabled:opacity-60",
		title: t("common.signOut"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" })
	});
}
function Shell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const navigate = useNavigate();
	const [menu, setMenu] = (0, import_react.useState)(false);
	const { openNewLog } = useAddToJournal();
	const { t } = useI18n();
	const { displayName, avatar } = usePrefs();
	const { user } = useCurrentUserState();
	const photo = avatar || user?.profileImageUrl || "";
	const top = pathname.split("/").filter(Boolean)[0] ?? "";
	const active = (path) => path === "/" ? top === "" : pathname === path || pathname.startsWith(`${path}/`);
	const onLogin = pathname === "/login" || pathname === "/reset";
	const onProfile = pathname === "/profile";
	const onLogEditor = pathname === "/logs/new" || /^\/logs\/[^/]+$/.test(pathname);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
				e.preventDefault();
				flagOpenAddOnLoad();
				if (onLogEditor) requestOpenAddModal();
				openNewLog();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onLogEditor, openNewLog]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "app-bg" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoleculeField, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailOutboxHost, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieBanner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-40 relative overflow-visible",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "app-header pb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl liquid-nav rounded-2xl px-3 py-2 flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2 shrink-0 group",
							onClick: () => setMenu(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TakoLogo, { className: "h-8 w-8 logo-tinted shrink-0 transition-transform group-hover:rotate-6 group-hover:scale-110" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-heading text-base sm:text-lg font-bold tracking-tight text-sand-900 dark:text-sand-50",
								children: ["Tako", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-clay-500",
									children: "Logs"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden lg:flex items-center gap-0.5 mx-auto",
							children: [PRIMARY_NAV.map((path) => {
								const u = NAV.find((n) => n.path === path);
								if (!u) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: u.path,
									className: `rounded-full px-3 py-2 text-sm font-heading font-semibold transition-all duration-300 ${active(u.path) ? "bg-clay-500 text-white shadow-lg shadow-clay-500/25" : "text-sand-700 dark:text-sand-200 hover:bg-sand-200/60 dark:hover:bg-sand-800/40"}`,
									children: t(u.labelKey)
								}, u.path);
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreMenu, { active })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 ml-auto lg:ml-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => requestOpenSearch(),
									className: "rounded-full glass p-2.5 text-sand-700 dark:text-sand-200 hover:scale-105 transition-transform",
									"aria-label": t("home.searchPh"),
									title: `${t("home.searchPh")} (⌘K)`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InboxBell, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorPicker, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/profile",
									className: `hidden sm:flex items-center gap-1.5 rounded-full glass px-2.5 py-2 text-sm font-semibold hover:scale-105 transition-transform ${active("/profile") ? "bg-clay-500 text-white" : "text-sand-700 dark:text-sand-200"}`,
									title: t("nav.profile"),
									children: [avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: avatar,
										alt: "",
										className: "h-5 w-5 rounded-full object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-4 w-4" }), displayName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "max-w-[6rem] truncate hidden xl:inline font-heading",
										children: displayName
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthSlot, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setMenu((u) => !u),
									className: "lg:hidden rounded-full glass p-2.5 text-sand-800 dark:text-sand-100",
									"aria-label": "Menu",
									children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
								})
							]
						})
					]
				}), menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:hidden mx-auto max-w-6xl mt-2 liquid-nav rounded-2xl p-2 animate-fade-up",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-1.5",
						children: NAV.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: u.path,
							onClick: () => setMenu(false),
							className: `flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-left transition-all ${active(u.path) ? "bg-clay-500 text-white" : "text-sand-700 dark:text-sand-200 hover:bg-sand-200/50 dark:hover:bg-sand-800/40"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(u.icon, { className: "h-4 w-4" }), t(u.labelKey)]
						}, u.path))
					})
				}) : null]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveBanner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative animate-fade-in pb-[calc(11rem+env(safe-area-inset-bottom))] lg:pb-10",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-16 px-4 pb-4 text-center text-xs text-sand-500 space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-heading",
					children: ["TakoLogs v", APP_VERSION]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex flex-wrap gap-3 justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/legal",
							className: "hover:text-clay-500",
							children: t("footer.legal")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/legal",
							hash: "privacy",
							className: "hover:text-clay-500",
							children: t("footer.privacy")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/legal",
							hash: "cookies",
							className: "hover:text-clay-500",
							children: t("footer.cookies")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/downloads",
							className: "hover:text-clay-500",
							children: t("footer.downloads")
						})
					]
				})]
			})]
		}),
		!onLogin && !onLogEditor && !onProfile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": t("fab.add"),
			title: t("fab.add"),
			onClick: () => {
				flagOpenAddOnLoad();
				if (onLogEditor) requestOpenAddModal();
				openNewLog();
			},
			className: "fixed right-4 z-[45] h-12 w-12 rounded-full bg-clay-500 text-white flex items-center justify-center shadow-lg shadow-clay-500/40 hover:scale-105 active:scale-95 transition-transform bottom-[calc(5.75rem+env(safe-area-inset-bottom))] sm:bottom-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
				className: "h-6 w-6",
				strokeWidth: 2.5
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "lg:hidden fixed bottom-0 inset-x-0 z-40 pointer-events-none",
			hidden: onLogin,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative px-5",
				style: { paddingBottom: "max(1.35rem, env(safe-area-inset-bottom))" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-sm liquid-dock rounded-[2rem] px-2.5 py-2 flex items-center justify-between pointer-events-auto",
					children: MOBILE_NAV.map((path) => {
						const item = NAV.find((n) => n.path === path);
						if (!item) return null;
						const on = active(item.path);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								navigate({ to: item.path });
								setMenu(false);
							},
							className: `flex flex-col items-center gap-0.5 rounded-full px-3.5 py-1.5 text-[11px] font-heading font-semibold transition-all duration-300 min-w-[3.75rem] ${on ? "text-clay-500 bg-white/35 dark:bg-white/10 scale-105" : "text-sand-600 dark:text-sand-300"}`,
							children: [item.path === "/profile" && photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: photo,
								alt: "",
								className: `h-6 w-6 rounded-full object-cover shadow-sm ${on ? "ring-2 ring-clay-500 scale-110" : "ring-1 ring-white/25"} transition-transform duration-300`
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: `h-5 w-5 ${on ? "scale-110" : ""} transition-transform duration-300` }), t(item.labelKey)]
						}, item.path);
					})
				})
			})
		})
	] });
}
var styles_default = "/assets/styles-DKEmxU19.css";
var APP_NAME = "TakoLogs";
var Route$22 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover, interactive-widget=resizes-content"
			},
			{ title: `${APP_NAME} — Savoir, réduction des risques & journal` },
			{
				name: "description",
				content: "TakoLogs : moteur de recherche de substances, comparateur, réduction des risques et journal personnel d'expériences."
			},
			{
				name: "theme-color",
				content: "#c9704f"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-title",
				content: "TakoLogs"
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "black-translucent"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&display=swap"
			}
		]
	}),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: THEME_BOOT_SCRIPT } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProviders, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrefsProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(JournalProvider, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchPalette, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastHost, {})
			] }) }) }) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
/** Minimal PDF wrapping one JPEG image per A4 page. */
function u8(s) {
	return new TextEncoder().encode(s);
}
function concat(parts) {
	const n = parts.reduce((a, b) => a + b.length, 0);
	const out = new Uint8Array(n);
	let o = 0;
	for (const p of parts) {
		out.set(p, o);
		o += p.length;
	}
	return out;
}
async function imagesToPdf(blobs) {
	const jpegs = [];
	for (const b of blobs) {
		const buf = new Uint8Array(await b.arrayBuffer());
		jpegs.push(buf);
	}
	const W = 595;
	const H = 842;
	const chunks = [];
	let pos = 0;
	const push = (part) => {
		const bytes = typeof part === "string" ? u8(part) : part;
		chunks.push(bytes);
		pos += bytes.length;
	};
	push("%PDF-1.4\n");
	const objAt = [];
	const mark = () => {
		objAt.push(pos);
	};
	mark();
	push(`1 0 obj << /Type /Catalog /Pages 2 0 R >>\nendobj\n`);
	mark();
	push(`2 0 obj << /Type /Pages /Kids [${jpegs.map((_, i) => `${3 + i * 3} 0 R`).join(" ")}] /Count ${jpegs.length} >>\nendobj\n`);
	jpegs.forEach((jpg, i) => {
		const page = 3 + i * 3;
		const img = page + 1;
		const cont = page + 2;
		const content = `q ${W} 0 0 ${H} 0 0 cm /Im${i} Do Q\n`;
		mark();
		push(`${page} 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /XObject << /Im${i} ${img} 0 R >> >> /Contents ${cont} 0 R >>\nendobj\n`);
		mark();
		push(`${img} 0 obj << /Type /XObject /Subtype /Image /Width 1240 /Height 1754 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpg.length} >>\nstream\n`);
		push(jpg);
		push(`\nendstream\nendobj\n`);
		mark();
		push(`${cont} 0 obj << /Length ${content.length} >>\nstream\n${content}endstream\nendobj\n`);
	});
	const xrefPos = pos;
	push(`xref\n0 ${3 + jpegs.length * 3}\n`);
	push(`0000000000 65535 f \n`);
	for (const o of objAt) push(`${String(o).padStart(10, "0")} 00000 n \n`);
	push(`trailer << /Size ${3 + jpegs.length * 3} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`);
	return new Blob([concat(chunks)], { type: "application/pdf" });
}
async function canvasToJpeg(canvas, quality = .86) {
	return await new Promise((resolve, reject) => {
		canvas.toBlob((b) => b ? resolve(b) : reject(/* @__PURE__ */ new Error("jpeg")), "image/jpeg", quality);
	});
}
function downloadBlob(blob, name) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = name;
	a.click();
	window.setTimeout(() => URL.revokeObjectURL(url), 4e3);
}
var FALLBACK = {
	onset: 30,
	peakStart: 90,
	peakEnd: 150,
	total: 240
};
function caption(locale) {
	return locale.startsWith("en") ? "Log your use — install this app." : "Pour enregistrer ta consommation, installe cette appli.";
}
function hsl(h, s, l, a = 1) {
	return a < 1 ? `hsla(${h}, ${s}%, ${l}%, ${a})` : `hsl(${h}, ${s}%, ${l}%)`;
}
function roundRect(ctx, x, y, w, h, r) {
	const rr = Math.min(r, w / 2, h / 2);
	ctx.beginPath();
	ctx.moveTo(x + rr, y);
	ctx.arcTo(x + w, y, x + w, y + h, rr);
	ctx.arcTo(x + w, y + h, x, y + h, rr);
	ctx.arcTo(x, y + h, x, y, rr);
	ctx.arcTo(x, y, x + w, y, rr);
	ctx.closePath();
}
function drawHex(ctx, cx, cy, r, color) {
	ctx.save();
	ctx.strokeStyle = color;
	ctx.lineWidth = 5;
	ctx.lineJoin = "round";
	ctx.beginPath();
	for (let i = 0; i < 6; i++) {
		const a = Math.PI / 3 * i - Math.PI / 6;
		const x = cx + Math.cos(a) * r;
		const y = cy + Math.sin(a) * r;
		if (i === 0) ctx.moveTo(x, y);
		else ctx.lineTo(x, y);
	}
	ctx.closePath();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(cx, cy, r * .28, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.beginPath();
	ctx.arc(cx - r * .08, cy - r * .08, r * .08, 0, Math.PI * 2);
	ctx.fillStyle = "#fff";
	ctx.fill();
	ctx.restore();
}
function wrapText(ctx, text, x, y, maxW, lineH, maxLines) {
	const words = text.split(/\s+/);
	let line = "";
	let n = 0;
	for (const w of words) {
		const test = line ? `${line} ${w}` : w;
		if (ctx.measureText(test).width > maxW && line) {
			ctx.fillText(line, x, y + n * lineH);
			line = w;
			n += 1;
			if (n >= maxLines) return;
		} else line = test;
	}
	if (n < maxLines) ctx.fillText(line, x, y + n * lineH);
}
function trimNum(n) {
	return Number.isInteger(n) ? String(n) : String(Math.round(n * 10) / 10);
}
function fmtTime(ms, locale) {
	return new Date(ms).toLocaleTimeString(locale.startsWith("en") ? "en-GB" : "fr-FR", {
		hour: "2-digit",
		minute: "2-digit"
	});
}
function withAlpha(color, a) {
	if (color.startsWith("#") && color.length === 7) return `rgba(${parseInt(color.slice(1, 3), 16)},${parseInt(color.slice(3, 5), 16)},${parseInt(color.slice(5, 7), 16)},${a})`;
	return color;
}
function theme(opts) {
	const hue = opts.hue < 0 ? 0 : opts.hue;
	const sat = opts.hue < 0 ? 0 : 42;
	const dark = opts.dark;
	return {
		hue,
		sat,
		dark,
		bg: dark ? hsl(hue, Math.max(sat - 14, 8), 7) : hsl(hue, Math.max(sat, 28), 93),
		fg: dark ? hsl(hue, 28, 94) : hsl(hue, 22, 12),
		muted: dark ? hsl(hue, 18, 62) : hsl(hue, 14, 38),
		accent: opts.color || hsl(hue, opts.hue < 0 ? 0 : 72, dark ? 58 : 48),
		card: dark ? hsl(hue, Math.max(sat - 8, 10), 12, .72) : hsl(hue, 40, 98, .78)
	};
}
async function canvasPng(canvas) {
	return await new Promise((resolve, reject) => {
		canvas.toBlob((b) => b ? resolve(b) : reject(/* @__PURE__ */ new Error("png")), "image/png");
	});
}
async function renderExperienceStory(opts) {
	await document.fonts.ready.catch(() => void 0);
	const W = 1080;
	const H = 1920;
	const canvas = document.createElement("canvas");
	canvas.width = W;
	canvas.height = H;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("canvas");
	const T = theme(opts);
	const en = opts.locale.startsWith("en");
	ctx.fillStyle = T.bg;
	ctx.fillRect(0, 0, W, H);
	ctx.globalAlpha = .1;
	for (let i = 0; i < 10; i++) drawHex(ctx, 90 + i * 173 % 900, 140 + i * 241 % 1600, 36 + i % 4 * 12, T.accent);
	ctx.globalAlpha = 1;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	drawHex(ctx, W / 2, 280, 64, T.accent);
	ctx.font = "800 68px \"Josefin Sans\", Avenir, sans-serif";
	ctx.fillStyle = T.accent;
	ctx.fillText("TakoLogs", W / 2, 380);
	const when = opts.date.toLocaleDateString(en ? "en-GB" : "fr-FR", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	ctx.font = "600 32px \"Josefin Sans\", Avenir, sans-serif";
	ctx.fillStyle = T.muted;
	ctx.fillText(when.charAt(0).toUpperCase() + when.slice(1), W / 2, 450);
	ctx.font = "800 56px \"Josefin Sans\", Avenir, sans-serif";
	ctx.fillStyle = T.fg;
	wrapText(ctx, opts.title.trim() || when, W / 2, 520, 920, 62, 2);
	const danger = (opts.warnings ?? []).filter((w) => w.level === "dangerous").slice(0, 3);
	const caution = (opts.warnings ?? []).filter((w) => w.level === "caution").slice(0, 2);
	const rows = opts.rows.slice(0, danger.length ? 4 : 5);
	let y = 650;
	for (const row of rows) {
		roundRect(ctx, 90, y, 900, 128, 36);
		ctx.fillStyle = T.card;
		ctx.fill();
		ctx.textAlign = "center";
		ctx.font = "52px sans-serif";
		ctx.fillText(row.emoji || "•", W / 2, y + 38);
		ctx.font = "800 40px \"Josefin Sans\", Avenir, sans-serif";
		ctx.fillStyle = T.fg;
		ctx.fillText(row.name, W / 2, y + 80);
		const dose = row.total != null ? `${trimNum(row.total)} ${row.unit}` : `${row.count}×`;
		ctx.fillStyle = row.color || T.accent;
		ctx.font = "800 32px \"Josefin Sans\", sans-serif";
		ctx.fillText(dose, W / 2, y + 110);
		y += 142;
	}
	if (danger.length) {
		const boxH = 100 + danger.length * 70;
		roundRect(ctx, 90, y, 900, boxH, 32);
		ctx.fillStyle = opts.dark ? "rgba(160, 28, 28, 0.95)" : "rgba(176, 32, 32, 0.95)";
		ctx.fill();
		ctx.textAlign = "center";
		ctx.fillStyle = "#fff";
		ctx.font = "800 36px \"Josefin Sans\", sans-serif";
		ctx.fillText(en ? "DANGEROUS MIX" : "MÉLANGE DANGEREUX", W / 2, y + 40);
		danger.forEach((w, i) => {
			ctx.font = "800 32px \"Josefin Sans\", sans-serif";
			ctx.fillText(`${w.a}  +  ${w.b}`, W / 2, y + 88 + i * 70);
			ctx.font = "600 22px Avenir, sans-serif";
			ctx.fillStyle = "rgba(255,255,255,0.88)";
			wrapText(ctx, w.note, W / 2, y + 116 + i * 70, 840, 26, 1);
			ctx.fillStyle = "#fff";
		});
		y += boxH + 20;
	}
	if (caution.length && y < 1280) {
		const boxH = 84 + caution.length * 48;
		roundRect(ctx, 90, y, 900, boxH, 28);
		ctx.fillStyle = opts.dark ? "rgba(150, 90, 20, 0.9)" : "rgba(180, 110, 24, 0.92)";
		ctx.fill();
		ctx.textAlign = "center";
		ctx.fillStyle = "#fff";
		ctx.font = "800 28px \"Josefin Sans\", sans-serif";
		ctx.fillText(en ? "CAUTION" : "ATTENTION", W / 2, y + 32);
		caution.forEach((w, i) => {
			ctx.font = "700 24px Avenir, sans-serif";
			ctx.fillText(`${w.a} + ${w.b}`, W / 2, y + 68 + i * 48);
		});
		y += boxH + 20;
	}
	const graphTop = Math.min(y + 8, 1320);
	const graphH = Math.max(240, Math.min(380, 1680 - graphTop - 140));
	roundRect(ctx, 90, graphTop, 900, graphH + 56, 36);
	ctx.fillStyle = T.card;
	ctx.fill();
	ctx.textAlign = "center";
	ctx.font = "700 30px \"Josefin Sans\", sans-serif";
	ctx.fillStyle = T.fg;
	ctx.fillText("Timeline", W / 2, graphTop + 36);
	const ings = opts.ingestions;
	if (ings.length > 0) {
		const times = ings.map((i) => new Date(i.ingestionTime).getTime());
		const startMs = Math.min(...times);
		const items = ings.map((ing) => {
			const sub = findSubstanceByName(ing.substanceName);
			return {
				p: sub ? durationCurve(sub) : FALLBACK,
				offsetMin: Math.max(0, (new Date(ing.ingestionTime).getTime() - startMs) / 6e4),
				color: opts.rows.find((r) => r.name === ing.substanceName)?.color || ing.color || sub?.color || T.accent,
				amp: doseAmplitude(sub, ing.dose, ing.doseUnit, ing.route)
			};
		});
		const span = Math.max(...items.map((c) => c.offsetMin + c.p.total), 60);
		const gw = 900;
		const gh = Math.max(180, graphH - 70);
		ctx.save();
		ctx.translate(90, graphTop + 58);
		ctx.beginPath();
		ctx.rect(0, 0, gw, gh);
		ctx.clip();
		for (const c of items) {
			ctx.fillStyle = withAlpha(c.color, .28);
			ctx.fill(new Path2D(offsetCurveFill(c.p, c.offsetMin, span, gw, gh, 60, c.amp)));
			ctx.strokeStyle = c.color;
			ctx.lineWidth = 7;
			ctx.lineJoin = "round";
			ctx.lineCap = "round";
			ctx.stroke(new Path2D(offsetCurvePath(c.p, c.offsetMin, span, gw, gh, 60, c.amp)));
		}
		ctx.restore();
		ctx.fillStyle = T.muted;
		ctx.font = "22px Avenir, sans-serif";
		ctx.textAlign = "left";
		ctx.fillText(fmtTime(startMs, opts.locale), 110, graphTop + graphH + 40);
		ctx.textAlign = "right";
		ctx.fillText(fmtTime(startMs + span * 6e4, opts.locale), 970, graphTop + graphH + 40);
	}
	ctx.textAlign = "center";
	ctx.font = "800 34px \"Josefin Sans\", sans-serif";
	ctx.fillStyle = T.accent;
	ctx.fillText("takohelp.com", W / 2, 1760);
	ctx.font = "600 24px Avenir, sans-serif";
	ctx.fillStyle = T.muted;
	ctx.fillText(caption(opts.locale), W / 2, 1808);
	ctx.textAlign = "left";
	return canvasPng(canvas);
}
async function renderSubstanceStory(opts) {
	await document.fonts.ready.catch(() => void 0);
	const W = 1080;
	const H = 1920;
	const canvas = document.createElement("canvas");
	canvas.width = W;
	canvas.height = H;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("canvas");
	const T = theme(opts);
	const loc = opts.locale || (typeof document !== "undefined" ? document.documentElement.lang : "fr");
	ctx.fillStyle = T.bg;
	ctx.fillRect(0, 0, W, H);
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	drawHex(ctx, W / 2, 300, 78, T.accent);
	ctx.font = "800 64px \"Josefin Sans\", sans-serif";
	ctx.fillStyle = T.accent;
	ctx.fillText("TakoLogs", W / 2, 420);
	ctx.font = "140px sans-serif";
	ctx.fillText(opts.emoji, W / 2, 560);
	ctx.font = "800 80px \"Josefin Sans\", sans-serif";
	ctx.fillStyle = T.fg;
	wrapText(ctx, opts.name, W / 2, 690, 940, 86, 2);
	ctx.font = "800 36px Avenir, sans-serif";
	ctx.fillStyle = T.accent;
	ctx.fillText(opts.category, W / 2, 870);
	ctx.font = "600 38px Avenir, sans-serif";
	ctx.fillStyle = T.fg;
	wrapText(ctx, opts.summary, W / 2, 960, 940, 50, 6);
	if (opts.dose) {
		ctx.fillStyle = T.accent;
		ctx.font = "800 36px Avenir, sans-serif";
		wrapText(ctx, opts.dose, W / 2, 1300, 940, 44, 3);
	}
	if (opts.duration) {
		ctx.fillStyle = T.muted;
		ctx.font = "700 32px Avenir, sans-serif";
		wrapText(ctx, opts.duration, W / 2, 1460, 940, 42, 2);
	}
	ctx.font = "800 38px \"Josefin Sans\", sans-serif";
	ctx.fillStyle = T.accent;
	ctx.fillText("takohelp.com", W / 2, 1760);
	ctx.font = "600 24px Avenir, sans-serif";
	ctx.fillStyle = T.muted;
	ctx.fillText(caption(loc), W / 2, 1810);
	return canvasPng(canvas);
}
async function renderA4Sheet(draw) {
	const W = 1240;
	const H = 1754;
	const canvas = document.createElement("canvas");
	canvas.width = W;
	canvas.height = H;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("canvas");
	draw(ctx, W, H);
	return canvasToJpeg(canvas);
}
function paintPdfChrome(ctx, W, H, opts) {
	const T = theme(opts);
	ctx.fillStyle = T.bg;
	ctx.fillRect(0, 0, W, H);
	drawHex(ctx, 90, 80, 28, T.accent);
	ctx.font = "800 36px \"Josefin Sans\", sans-serif";
	ctx.fillStyle = T.accent;
	ctx.textBaseline = "middle";
	ctx.fillText("TakoLogs", 136, 80);
	ctx.font = "700 42px \"Josefin Sans\", sans-serif";
	ctx.fillStyle = T.fg;
	ctx.fillText(opts.title, 64, 160);
	if (opts.subtitle) {
		ctx.font = "600 22px Avenir, sans-serif";
		ctx.fillStyle = T.muted;
		ctx.fillText(opts.subtitle, 64, 210);
	}
	ctx.font = "700 22px \"Josefin Sans\", sans-serif";
	ctx.fillStyle = T.accent;
	ctx.textAlign = "center";
	ctx.fillText("takohelp.com", W / 2, H - 70);
	ctx.font = "600 16px Avenir, sans-serif";
	ctx.fillStyle = T.muted;
	ctx.fillText("Pour enregistrer ta consommation, installe cette appli.", W / 2, H - 42);
	ctx.textAlign = "left";
	return T;
}
async function shareStoryFile(blob, filename, text) {
	const file = new File([blob], filename, { type: "image/png" });
	const nav = navigator;
	try {
		if (nav.canShare?.({ files: [file] })) {
			await nav.share({
				files: [file],
				title: "TakoLogs",
				text
			});
			return "shared";
		}
		if (nav.share) {
			await nav.share({
				files: [file],
				title: "TakoLogs",
				text
			});
			return "shared";
		}
	} catch (err) {
		if (err.name === "AbortError") return "abort";
	}
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	window.setTimeout(() => URL.revokeObjectURL(url), 4e3);
	return "download";
}
function hueNow() {
	const n = Number(getComputedStyle(document.documentElement).getPropertyValue("--accent-h").trim());
	return Number.isFinite(n) ? n : 36;
}
function darkNow() {
	return document.documentElement.classList.contains("dark");
}
async function shareSubstanceStory(sub, emoji, color, label, cat) {
	const d0 = sub.doses[0];
	const c = durationCurve(sub);
	return shareStoryFile(await renderSubstanceStory({
		name: label,
		emoji,
		color,
		category: cat,
		summary: sub.summary,
		dose: d0 ? `Dose courante ${d0.common}${d0.unit} (${d0.route}) · seuil ${d0.threshold} · fort ${d0.strong}` : void 0,
		duration: `Montée ~${formatMins(c.onset)} · total ~${formatMins(c.total)}`,
		hue: hueNow(),
		dark: darkNow(),
		locale: typeof document !== "undefined" ? document.documentElement.lang : "fr"
	}), `takologs-${sub.slug}.png`, `${label} — TakoLogs`);
}
async function downloadSubstancePdf(sub, emoji, color, label, cat) {
	const d0 = sub.doses[0];
	const c = durationCurve(sub);
	downloadBlob(await imagesToPdf([await renderA4Sheet((ctx, W, H) => {
		const T = paintPdfChrome(ctx, W, H, {
			hue: hueNow(),
			dark: darkNow(),
			title: `${emoji} ${label}`,
			subtitle: cat
		});
		ctx.fillStyle = T.muted;
		ctx.font = "600 22px Avenir, sans-serif";
		const words = sub.summary.split(/\s+/);
		let line = "";
		let y = 280;
		for (const w of words) {
			const t = line ? `${line} ${w}` : w;
			if (ctx.measureText(t).width > W - 128) {
				ctx.fillText(line, 64, y);
				line = w;
				y += 32;
			} else line = t;
		}
		if (line) ctx.fillText(line, 64, y);
		y += 48;
		ctx.fillStyle = T.fg;
		ctx.font = "700 22px Avenir, sans-serif";
		if (d0) {
			ctx.fillText(`Doses (${d0.route}): seuil ${d0.threshold}${d0.unit} · léger ${d0.light} · commun ${d0.common} · fort ${d0.strong} · lourd ${d0.heavy}`, 64, y);
			y += 36;
		}
		ctx.fillText(`Durée : montée ~${formatMins(c.onset)} · total ~${formatMins(c.total)}`, 64, y);
		y += 40;
		ctx.fillStyle = T.accent;
		ctx.fillText("Effets +", 64, y);
		y += 28;
		ctx.fillStyle = T.muted;
		ctx.font = "600 18px Avenir, sans-serif";
		ctx.fillText(sub.effects.positive.slice(0, 8).join(" · "), 64, y);
		y += 36;
		ctx.fillStyle = "#c9493f";
		ctx.font = "700 22px Avenir, sans-serif";
		ctx.fillText("Risques", 64, y);
		y += 28;
		ctx.fillStyle = T.muted;
		ctx.font = "600 18px Avenir, sans-serif";
		ctx.fillText(sub.effects.negative.slice(0, 8).join(" · "), 64, y);
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(W - 90, 80, 18, 0, Math.PI * 2);
		ctx.fill();
	})]), `takologs-${sub.slug}.pdf`);
}
async function downloadExperiencePdf(exp, locale, rows) {
	const date = new Date(exp.experienceDate);
	const when = date.toLocaleDateString(locale.startsWith("en") ? "en-GB" : "fr-FR", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	const warns = comboWarnings(exp.ingestions.map((i) => i.substanceName));
	downloadBlob(await imagesToPdf([await renderA4Sheet((ctx, W) => {
		const T = paintPdfChrome(ctx, W, 1754, {
			hue: hueNow(),
			dark: darkNow(),
			title: exp.title,
			subtitle: when.charAt(0).toUpperCase() + when.slice(1)
		});
		let y = 270;
		ctx.font = "700 22px Avenir, sans-serif";
		for (const row of rows) {
			ctx.fillStyle = row.color;
			ctx.beginPath();
			ctx.arc(80, y, 8, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = T.fg;
			const dose = row.total != null ? `${row.total} ${row.unit}` : `${row.count}×`;
			ctx.fillText(`${row.emoji} ${row.name}  —  ${dose}`, 100, y);
			y += 36;
		}
		if (warns.length) {
			y += 12;
			ctx.fillStyle = "#c9493f";
			ctx.fillText("Interactions", 64, y);
			y += 30;
			ctx.font = "600 18px Avenir, sans-serif";
			warns.slice(0, 6).forEach((w) => {
				ctx.fillText(`• ${w.a} + ${w.b} — ${w.note}`, 64, y);
				y += 26;
			});
		}
		if (exp.notes) {
			y += 16;
			ctx.fillStyle = T.muted;
			ctx.font = "600 18px Avenir, sans-serif";
			ctx.fillText(exp.notes.slice(0, 600), 64, y);
		}
		exp.ingestions.forEach((i) => {
			y += 28;
			if (y > 1600) return;
			const known = findSubstanceByName(i.substanceName);
			ctx.fillStyle = T.fg;
			ctx.font = "600 16px Avenir, sans-serif";
			ctx.fillText(`${new Date(i.ingestionTime).toLocaleTimeString(locale, {
				hour: "2-digit",
				minute: "2-digit"
			})}  ${i.dose ?? "?"} ${i.doseUnit}  ${i.substanceName}  (${i.route})${known ? "" : ""}`, 64, y);
		});
	})]), `takologs-${date.toISOString().slice(0, 10)}.pdf`);
}
function Reveal({ children, className = "", delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) {
				setOn(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `reveal ${on ? "reveal-in" : ""} ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function CategoryBadge({ category }) {
	const c = categories[category];
	const { t } = useI18n();
	if (!c) return null;
	const label = t(`cat.${category}`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
		style: {
			background: c.tint,
			color: c.color
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: categoryEmoji(category) }), label.startsWith("cat.") ? c.label : label]
	});
}
function CategoryChip({ id, active, onClick, label }) {
	const { t } = useI18n();
	const c = categories[id];
	const text = label ?? (id === "all" ? t("common.all") : t(`cat.${id}`));
	const emoji = id === "all" ? "✨" : categoryEmoji(id);
	const color = c?.color ?? "#c9704f";
	const tint = c?.tint ?? categoryTint("misc");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-1.5",
		style: active ? {
			background: color,
			color: "#fff",
			boxShadow: `0 8px 20px ${color}44`
		} : {
			background: tint,
			color,
			border: `1px solid ${color}33`
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: emoji }), text.startsWith("cat.") ? c?.label ?? id : text]
	});
}
function DurationCurve({ sub, className, width = 200, height = 56, color, amp = 1 }) {
	const c = durationCurve(sub);
	const d = curvePath(c, width, height, 48, amp);
	const fill = `${d} L${width},${height} L0,${height} Z`;
	const gid = `g-${sub.slug}-${width}`;
	const stroke = color ?? sub.color;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${width} ${height}`,
		className,
		preserveAspectRatio: "none",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: gid,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: stroke,
					stopOpacity: "0.45"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: stroke,
					stopOpacity: "0.02"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: fill,
				fill: `url(#${gid})`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d,
				fill: "none",
				stroke,
				strokeWidth: "2"
			})
		]
	});
}
function MultiCurve({ subs, width = 640, height = 160 }) {
	const { resolveColor, resolveName, resolveEmoji } = usePrefs();
	const [scrub, setScrub] = (0, import_react.useState)(null);
	const maxTotal = Math.max(...subs.map((s) => durationCurve(s).total), 1);
	const pick = (e) => {
		const r = e.currentTarget.getBoundingClientRect();
		const src = "touches" in e && e.touches[0] ? e.touches[0] : e;
		const x = Math.min(width, Math.max(0, (src.clientX - r.left) / r.width * width));
		const y = Math.min(height, Math.max(0, (src.clientY - r.top) / r.height * height));
		setScrub({
			x,
			y,
			left: src.clientX,
			top: Math.max(12, r.top - 8)
		});
	};
	const hits = scrub ? subs.map((s) => {
		const c = durationCurve(s);
		const scaled = {
			...c,
			total: maxTotal,
			peakEnd: Math.min(c.peakEnd, maxTotal)
		};
		const t = scrub.x / width * maxTotal;
		const v = intensityAt(scaled, t);
		const curveY = height - 4 - v * (height - 8);
		const color = resolveColor(s.slug, s.name, s.color);
		return {
			s,
			v,
			dist: Math.abs(curveY - scrub.y),
			curveY,
			color
		};
	}).filter((c) => c.v > .01).sort((a, b) => a.dist - b.dist) : [];
	const primary = hits[0];
	const tip = scrub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl glass-strong glass-modal px-3 py-2 text-[11px] font-heading font-bold pointer-events-none min-w-[8rem] max-w-[16rem] shadow-xl",
		style: {
			position: "absolute",
			left: `${scrub.x / width * 100}%`,
			top: 8,
			transform: "translate(-50%, 0)",
			zIndex: 20
		},
		children: hits.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-1 font-sans font-semibold",
			children: hits.slice(0, 5).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-1.5 truncate",
				style: { color: c.color },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2.5 w-2.5 rounded-full shrink-0 ring-1 ring-black/10",
						style: { background: c.color }
					}),
					resolveEmoji(c.s.slug, c.s.name, c.s.emoji),
					" ",
					resolveName(c.s.slug, c.s.name)
				]
			}, c.s.slug))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sand-500 font-sans font-semibold",
			children: "—"
		})
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${width} ${height}`,
			className: "w-full h-40 cursor-crosshair",
			preserveAspectRatio: "none",
			onMouseMove: pick,
			onClick: pick,
			onTouchStart: pick,
			onTouchMove: pick,
			onMouseLeave: () => setScrub(null),
			children: [subs.map((s) => {
				const c = durationCurve(s);
				const scaled = {
					...c,
					total: maxTotal,
					peakEnd: Math.min(c.peakEnd, maxTotal)
				};
				const d = curvePath(scaled, width, height, 64);
				const color = resolveColor(s.slug, s.name, s.color);
				const on = primary?.s.slug === s.slug;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d,
					fill: "none",
					stroke: color,
					strokeWidth: on ? 4 : 2.5,
					strokeLinecap: "round",
					opacity: primary && !on ? .35 : 1
				}, s.slug);
			}), scrub ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: scrub.x,
					y1: "0",
					x2: scrub.x,
					y2: height,
					stroke: "currentColor",
					strokeWidth: "1.5",
					className: "text-sand-700 dark:text-sand-200"
				}),
				hits.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: scrub.x,
					cy: c.curveY,
					r: i === 0 ? 6 : 4,
					fill: c.color,
					stroke: "white",
					strokeWidth: "2"
				}, c.s.slug)),
				primary ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: scrub.x > width * .62 ? scrub.x - 10 : scrub.x + 12,
					y: Math.max(16, primary.curveY - 8),
					textAnchor: scrub.x > width * .62 ? "end" : "start",
					fill: primary.color,
					fontSize: "16",
					fontWeight: "800",
					stroke: "white",
					strokeWidth: "3",
					paintOrder: "stroke",
					children: [
						resolveEmoji(primary.s.slug, primary.s.name, primary.s.emoji),
						" ",
						resolveName(primary.s.slug, primary.s.name)
					]
				}) : null
			] }) : null]
		}), tip]
	});
}
function SubstanceCard({ sub, onAdd }) {
	const { t, locale } = useI18n();
	const { resolveEmoji, resolveColor, resolveName, lastDoseFor } = usePrefs();
	const view = localizedSubstance(sub, locale);
	const emoji = resolveEmoji(view.slug, view.name, view.emoji);
	const color = resolveColor(view.slug, view.name, view.color);
	const label = resolveName(view.slug, sub.name) === sub.name ? view.name : resolveName(view.slug, sub.name);
	const last = lastDoseFor(sub.name, sub.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/substance/$slug",
		params: { slug: sub.slug },
		className: "glass glass-tint card-hover rounded-2xl p-4 block text-left",
		style: { ["--tint"]: color },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryBadge, { category: sub.category }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-2 font-heading text-lg font-bold text-sand-900 dark:text-sand-50 truncate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-1.5",
								children: emoji
							}), label]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-sand-500 dark:text-sand-400 line-clamp-2",
							children: view.summary
						}),
						last?.dose != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-[11px] font-semibold",
							style: { color },
							children: t("add.lastDose", {
								n: last.dose,
								unit: last.unit
							})
						}) : null
					]
				}), onAdd ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: (e) => {
						e.preventDefault();
						e.stopPropagation();
						onAdd();
					},
					className: "shrink-0 rounded-full text-white text-xs font-semibold px-3 py-1.5 hover:scale-105 transition-transform",
					style: { background: color },
					children: t("home.addLogs")
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DurationCurve, {
				sub,
				color,
				amp: doseAmplitude(sub, last?.dose, last?.unit ?? "", last?.route ?? ""),
				className: "mt-3 h-10 w-full"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: (e) => {
						e.preventDefault();
						e.stopPropagation();
						shareSubstanceStory(sub, emoji, color, label, t(`cat.${sub.category}`));
					},
					className: "inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[11px] font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-3 w-3" }),
						" ",
						t("share.btn")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: (e) => {
						e.preventDefault();
						e.stopPropagation();
						downloadSubstancePdf(sub, emoji, color, label, t(`cat.${sub.category}`));
					},
					className: "inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[11px] font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "h-3 w-3" }), " PDF"]
				})]
			})
		]
	}) });
}
function PageHero({ kicker, icon, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center animate-fade-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-sand-700 dark:text-sand-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-clay-500",
					children: icon
				}), kicker]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-heading text-3xl sm:text-5xl font-bold text-sand-900 dark:text-sand-50",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sand-600 dark:text-sand-300 max-w-2xl mx-auto",
				children: subtitle
			})
		]
	});
}
function Section({ title, icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "glass rounded-2xl p-5 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50 mb-4 flex items-center gap-2",
			children: [icon, title]
		}), children]
	}) });
}
var ROUTES = {
	oral: "Orale",
	insufflated: "Intranasale",
	smoked: "Fumée",
	inhaled: "Inhalée",
	intravenous: "IV",
	intramuscular: "IM",
	subcutaneous: "SC",
	sublingual: "Sublinguale",
	buccal: "Buccale",
	rectal: "Rectale",
	transdermal: "Transdermique"
};
var PW_COLORS = {
	red: "#c9493f",
	fire_engine_red: "#d94b3d",
	orange: "#d9893b",
	aureate_gold: "#c9a15a",
	yellow: "#c9b04a",
	bronze: "#b07a45",
	khaki: "#9a8b4a",
	green: "#3d8a5f",
	sea_green: "#3d8a6e",
	mint: "#5aaa7a",
	teal: "#3d8a8a",
	cyan: "#4aa0b5",
	blue: "#4a6fa0",
	royal_blue: "#3d5a9a",
	indigo: "#5a4a9a",
	blue_violet: "#6a4aaa",
	purple: "#7a4a9a",
	magenta: "#9a4a8a",
	grayish_magenta: "#8a6a80",
	pink: "#c96a8a",
	rose_quartz: "#c98a9a",
	brown: "#8a5a3a",
	saddle_brown: "#7a4a28",
	gray: "#7a7a7a",
	grey: "#7a7a7a",
	white: "#cfcfcf",
	black: "#3a3a3a",
	night_azure: "#3d5a8a",
	deep_harbor_blue: "#2f4a6e",
	storm_slate_blue: "#5a6a8a"
};
var SHULGIN = {
	minus: "−",
	plusminus: "+/−",
	plus_minus: "+/−",
	plus: "+",
	twoplus: "++",
	threeplus: "+++",
	fourplus: "++++",
	plusfour: "++++"
};
function toEpochMs(v) {
	if (v == null || v === "") return null;
	if (typeof v === "number" && Number.isFinite(v)) {
		if (v > 0x5af3107a4000) return Math.round(v / 1e3);
		if (v > 1e11) return v;
		if (v > 1e9) return Math.round(v * 1e3);
		return v;
	}
	if (typeof v === "string") {
		const n = Number(v.trim());
		if (Number.isFinite(n) && n > 1e9) return toEpochMs(n);
		const d = new Date(v);
		if (!Number.isNaN(d.getTime())) return d.getTime();
	}
	if (typeof v === "object") {
		const o = v;
		if (typeof o.time === "number") return toEpochMs(o.time);
		if (typeof o.seconds === "number") return toEpochMs(o.seconds);
		if (typeof o.millis === "number") return toEpochMs(o.millis);
	}
	return null;
}
function msToIso(v) {
	const ms = toEpochMs(v);
	if (ms == null) return "";
	return new Date(ms).toISOString();
}
function mapRoute(raw) {
	return ROUTES[String(raw ?? "oral").toLowerCase()] ?? "Orale";
}
function mapColor(raw) {
	if (!raw) return null;
	return PW_COLORS[String(raw).toLowerCase().replace(/\s+/g, "_")] ?? null;
}
function mapShulgin(raw) {
	if (!raw) return null;
	return SHULGIN[String(raw).toLowerCase().replace(/[^a-z]/g, "")] ?? String(raw);
}
function unitMap(units) {
	const m = /* @__PURE__ */ new Map();
	for (const u of units) m.set(u.id, u);
	return m;
}
function isPwJournalDump(data) {
	if (!data || typeof data !== "object") return false;
	const o = data;
	const exps = o.experiences ?? o.journal ?? o.data;
	const list = Array.isArray(exps) ? exps : Array.isArray(data) ? data : Array.isArray(o.experiences) ? o.experiences : null;
	if (!list || list.length === 0) return false;
	if (typeof o.exportSource === "string" || Array.isArray(o.customUnits)) return true;
	const first = list[0];
	if (!first || typeof first !== "object") return false;
	if (typeof first.creationDate === "number" || typeof first.sortDate === "number") return true;
	if (Array.isArray(first.ingestions)) {
		const ing = first.ingestions[0];
		if (ing && ("administrationRoute" in ing || "time" in ing || "customUnitId" in ing)) return true;
	}
	return false;
}
function pwDumpToExperiences(data) {
	const root = data ?? {};
	const o = {
		experiences: Array.isArray(root.experiences) ? root.experiences : Array.isArray(data) ? data : Array.isArray(root.journal?.experiences) ? root.journal.experiences : [],
		customUnits: root.customUnits ?? []
	};
	const units = unitMap(o.customUnits ?? []);
	const out = [];
	for (const raw of o.experiences ?? []) {
		const ingsRaw = Array.isArray(raw.ingestions) ? raw.ingestions : [];
		const id = uuid();
		const date = msToIso(raw.sortDate ?? raw.creationDate ?? raw.experienceDate) || msToIso(ingsRaw[0]?.time);
		const title = String(raw.title ?? "").trim() || (date ? defaultExperienceTitleFromDate(date, "fr-FR") : "Expérience");
		const timed = Array.isArray(raw.timedNotes) ? raw.timedNotes : [];
		const noteParts = [];
		if (raw.text) noteParts.push(String(raw.text));
		for (const n of timed) {
			const rec = n;
			if (!rec.note) continue;
			const t = rec.time ? new Date(rec.time).toLocaleString("fr-FR") : "";
			noteParts.push(t ? `${t} — ${rec.note}` : rec.note);
		}
		const shulginLog = (Array.isArray(raw.ratings) ? raw.ratings : []).map((r) => {
			const rec = r;
			const level = mapShulgin(rec.option);
			if (!level) return null;
			return {
				time: msToIso(rec.time),
				level
			};
		}).filter(Boolean);
		const shulgin = shulginLog.at(-1)?.level ?? null;
		const ingestions = [];
		for (const ing of ingsRaw.slice(0, 250)) {
			const rec = ing;
			const cu = rec.customUnitId != null ? units.get(rec.customUnitId) : void 0;
			const comp = cu?.doseComponents?.[0];
			let name = (rec.substanceName || "").trim();
			let dose = rec.dose ?? null;
			let unit = rec.units || "mg";
			if (!name && comp?.substanceName) {
				name = comp.substanceName;
				if (dose != null && comp.dose != null) dose = dose * comp.dose;
				unit = comp.substanceUnit || unit;
			}
			if (!name && cu?.name) {
				name = cu.name;
				unit = cu.unit || unit;
			}
			if (!name) name = "Inconnu";
			ingestions.push({
				id: uuid(),
				experienceId: id,
				substanceName: name,
				slug: null,
				route: mapRoute(rec.administrationRoute),
				dose,
				doseUnit: unit,
				color: mapColor(rec.color) ?? mapColor(cu?.color) ?? null,
				ingestionTime: msToIso(rec.time ?? rec.ingestionTime ?? raw.sortDate ?? raw.creationDate) || date,
				notes: rec.notes ?? ""
			});
		}
		ingestions.sort((a, b) => new Date(a.ingestionTime).getTime() - new Date(b.ingestionTime).getTime());
		out.push({
			id,
			title,
			experienceDate: ingestions[0]?.ingestionTime ?? date,
			notes: noteParts.join("\n\n"),
			feeling: shulginToFeeling(shulgin),
			shulgin,
			shulginLog,
			media: [],
			ingestions
		});
	}
	return out;
}
function shulginToFeeling(s) {
	if (!s) return null;
	if (s.includes("++++") || s === "+++") return 5;
	if (s === "++") return 4;
	if (s === "+") return 3;
	if (s.includes("/")) return 2;
	return 1;
}
function normalizeJournalImport(data) {
	if (isPwJournalDump(data)) return pwDumpToExperiences(data);
	if (Array.isArray(data)) return data;
	if (data && typeof data === "object" && Array.isArray(data.experiences)) {
		const exps = data.experiences;
		if (exps[0] && typeof exps[0].creationDate === "number") return pwDumpToExperiences(data);
		return exps;
	}
	return [];
}
function siteLink() {
	if (typeof window === "undefined") return "https://takohelp.com/";
	return `${window.location.origin}/`;
}
function shotUrl(file) {
	if (typeof window === "undefined") return `https://takohelp.com/mail/${file}`;
	const origin = window.location.origin;
	if (!origin || origin.startsWith("file:")) return `https://takohelp.com/mail/${file}`;
	return `${origin.replace(/\/$/, "")}/mail/${file}`;
}
function block(opts) {
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
function renderWelcomeEmail(opts) {
	const fr = opts.locale !== "en";
	const title = fr ? "Bienvenue sur TakoLogs" : "Welcome to TakoLogs";
	const lead = fr ? "Ton journal privé est prêt. Voici, écran par écran, ce que TakoLogs sait faire — avec TakoAI au centre." : "Your private journal is ready. Here’s TakoLogs, screen by screen — with TakoAI at the centre.";
	const sections = fr ? [
		{
			kicker: "Assistant",
			title: "TakoAI",
			body: "La barre « Demander à TakoAI quelque chose » (⌘K) n’est pas qu’une recherche. Pose une question, change la couleur du site, demande tes stats, ou dicte une action : « ajoute 100 mg de MDMA à ma dernière expérience ». TakoAI lit le journal et exécute.",
			shot: shotUrl("takoai.jpg"),
			alt: "TakoAI — barre de recherche et chat",
			highlight: true
		},
		{
			kicker: "Journal",
			title: "Logs & timeline",
			body: "Chaque expérience porte la date du jour. Le + ajoute à la session en cours (sauf si c’est un autre jour). Doses, ressenti, échelle de Shulgin, médias, courbe montée / pic / descente, et interactions dangereuses entre substances.",
			shot: shotUrl("journal.jpg"),
			alt: "Journal — expérience du jour et courbe"
		},
		{
			kicker: "Savoir",
			title: "Fiches substances",
			body: "Dosages (seuil → lourd), durées vérifiées sur PsychonautWiki, neurotransmetteurs animés, structure moléculaire, favoris, emoji et couleur perso. Un lien vers la fiche PsychonautWiki pour aller plus loin.",
			shot: shotUrl("fiches.jpg"),
			alt: "Fiche substance MDMA"
		},
		{
			kicker: "Veille",
			title: "Alertes labo",
			body: "Les dernières analyses (Druglab, SINTES et autres labos) sur une année, avec les emojis des substances concernées. Un coup d’œil avant de consommer.",
			shot: shotUrl("alertes.jpg"),
			alt: "Page Alertes"
		},
		{
			kicker: "Réduction des risques",
			title: "Combinaisons, notifs, import",
			body: "Alertes de combo, pause après 3 prises, notifications de montée / pic / descente, import du journal PsychonautWiki (.JSON). Tes données restent sur l’appareil.",
			shot: shotUrl("rdr.jpg"),
			alt: "Réduction des risques"
		}
	] : [
		{
			kicker: "Assistant",
			title: "TakoAI",
			body: "The “Ask TakoAI something” bar (⌘K) is not just search. Ask a question, change the theme, pull stats, or run an action: “add 100 mg of MDMA to my last experience”. TakoAI can read the journal and do it.",
			shot: shotUrl("takoai.jpg"),
			alt: "TakoAI search and chat",
			highlight: true
		},
		{
			kicker: "Journal",
			title: "Logs & timeline",
			body: "Each experience is named with today’s date. + adds to the current session (unless it’s another day). Doses, feelings, Shulgin scale, media, onset/peak/offset curve, and dangerous interactions.",
			shot: shotUrl("journal.jpg"),
			alt: "Journal — today’s session and curve"
		},
		{
			kicker: "Knowledge",
			title: "Substance sheets",
			body: "Dose classes, PsychonautWiki-checked durations, animated neurotransmitters, molecular structure, favourites, custom emoji and color, plus a PsychonautWiki link.",
			shot: shotUrl("fiches.jpg"),
			alt: "MDMA substance sheet"
		},
		{
			kicker: "Watch",
			title: "Lab alerts",
			body: "Latest analyses (Druglab, SINTES and other labs) over a full year, with substance emojis. A glance before you consume.",
			shot: shotUrl("alertes.jpg"),
			alt: "Alerts page"
		},
		{
			kicker: "Harm reduction",
			title: "Combos, notifications, import",
			body: "Combo warnings, a pause after 3 ingestions, onset/peak/offset notifications, PsychonautWiki Journal import (.JSON). Data stays on-device.",
			shot: shotUrl("rdr.jpg"),
			alt: "Harm reduction"
		}
	];
	const news = opts.newsletter ? fr ? "Tu es inscrit·e à la newsletter : actus RdR, alertes et nouveautés TakoAI, sans spam." : "You’re on the newsletter: harm-reduction news, alerts and TakoAI updates — no spam." : "";
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
		preheader: fr ? "TakoAI, journal, fiches, alertes — le tour du site, en images." : "TakoAI, journal, sheets, alerts — a visual tour."
	});
}
function welcomeSubject(locale) {
	return locale === "en" ? "Welcome to TakoLogs — meet TakoAI" : "Bienvenue sur TakoLogs — découvre TakoAI";
}
async function sendWelcomeEmail(opts) {
	const to = opts.email.trim().toLowerCase();
	const html = renderWelcomeEmail(opts);
	const subject = welcomeSubject(opts.locale);
	try {
		const { queueOutbox } = await import("./password-reset-CEqMe5uV.mjs");
		queueOutbox({
			id: `w-${Date.now().toString(36)}`,
			to,
			subject,
			html,
			at: Date.now()
		});
	} catch {}
	return deliverMail({
		to,
		subject,
		html
	});
}
async function subscribeNewsletter(email, locale) {
	const key = email.trim().toLowerCase();
	if (!key.includes("@")) return {
		ok: false,
		error: "email"
	};
	try {
		const raw = localStorage.getItem("takologs-newsletter-list");
		const list = raw ? JSON.parse(raw) : [];
		const next = Array.from(/* @__PURE__ */ new Set([key, ...Array.isArray(list) ? list : []]));
		localStorage.setItem("takologs-newsletter-list", JSON.stringify(next));
		const { loadUsers, saveUsers } = await import("./user-store-DnZjU9eL.mjs");
		const users = loadUsers();
		const u = users.find((x) => x.email === key);
		if (u) {
			u.newsletter = true;
			saveUsers(users);
		}
	} catch {}
	return sendWelcomeEmail({
		email: key,
		locale,
		newsletter: true
	});
}
function emojiForSubstanceText(text, resolve) {
	const raw = text.trim();
	if (!raw) return raw;
	const painted = raw.split(/\s*(?:\+|\/|,|→|->)\s*/).filter(Boolean).map((chunk) => {
		const doseFree = chunk.replace(/\b\d+(?:[.,]\d+)?\s*(mg|µg|ug|g|ml|µg)\b/gi, "").trim();
		const sub = findSubstanceByName(doseFree) || findSubstanceByName(chunk) || substances.find((s) => chunk.toLowerCase().includes(s.name.toLowerCase()) || s.aliases.some((a) => chunk.toLowerCase().includes(a.toLowerCase())));
		if (!sub) return chunk;
		const em = resolve ? resolve(sub.slug, sub.name, sub.emoji) : sub.emoji;
		return em && !chunk.includes(em) ? `${em} ${chunk}` : chunk;
	});
	if (raw.includes("→")) return painted.join(" → ");
	if (raw.includes("+")) return painted.join(" + ");
	if (raw.includes("/")) return painted.join(" / ");
	return painted.join(", ");
}
var CHANGELOG = [
	{
		v: "1.0",
		date: "2024-09",
		title: "Naissance",
		items: ["Encyclopédie des substances avec dosages et durées.", "Fiches claires, recherche par nom."]
	},
	{
		v: "2.0",
		date: "2024-10",
		title: "Classes",
		items: ["Filtres par classe psychoactive.", "Alias et familles chimiques."]
	},
	{
		v: "3.0",
		date: "2024-11",
		title: "Comparer",
		items: ["Page Comparer pour superposer deux courbes.", "Index des effets."]
	},
	{
		v: "4.0",
		date: "2024-12",
		title: "Corps & risques",
		items: ["Page Neurotransmetteurs.", "Échelle de dommages relatifs."]
	},
	{
		v: "5.0",
		date: "2025-01",
		title: "Journal",
		items: ["Logs privés : expériences, ingestions, notes.", "Ajout d’une substance à une session."]
	},
	{
		v: "6.0",
		date: "2025-02",
		title: "Compte",
		items: ["Connexion / inscription.", "Journal lié au compte."]
	},
	{
		v: "7.0",
		date: "2025-03",
		title: "Doses",
		items: ["Classes de dose (seuil → lourd).", "Voies d’administration."]
	},
	{
		v: "8.0",
		date: "2025-04",
		title: "Interactions",
		items: ["Alertes de combinaisons dangereuses.", "Réduction des risques."]
	},
	{
		v: "9.0",
		date: "2025-06",
		title: "Thème",
		items: ["Mode clair / sombre.", "Sélecteur de couleur d’accent."]
	},
	{
		v: "10.0",
		date: "2025-08",
		title: "Langues",
		items: ["Français / anglais.", "Détection auto hors France."]
	},
	{
		v: "11.0",
		date: "2025-11",
		title: "Mobile",
		items: ["Dock Liquid Glass.", "Correctifs de zoom iOS."]
	},
	{
		v: "12.0",
		date: "2026-02",
		title: "Statistiques",
		items: ["Calendrier, heatmap, classements.", "Bouton + ajoute à l’expérience du jour."]
	},
	{
		v: "13.0",
		date: "2026-05",
		title: "Personnalisation",
		items: ["Emojis de substances.", "Recherche Spotlight."]
	},
	{
		v: "14.0",
		date: "2026-07",
		title: "Communauté",
		items: ["Expériences Erowid / Psychoactif.", "Alertes labo (Druglab, SINTES…)."]
	},
	{
		v: "14.1",
		date: "2026-07",
		title: "Import",
		items: ["Import du journal PsychonautWiki Journal (.json).", "Export CSV / JSON."]
	},
	{
		v: "14.2",
		date: "2026-08",
		title: "Structure & notifs",
		items: ["Structure moléculaire transparente.", "Notifications de montée / pic / descente."]
	},
	{
		v: "14.3",
		date: "2026-08",
		title: "Profil",
		items: ["Photo, mot de passe, mentions légales.", "Échelle de Shulgin sur la courbe."]
	},
	{
		v: "14.4",
		date: "2026-08",
		title: "Assistant",
		items: [
			"Recherche intelligente (questions + actions).",
			"Couleurs et emojis par substance partout.",
			"Historique des versions, import PW sur l’accueil."
		]
	},
	{
		v: "14.5",
		date: "2026-08",
		title: "TakoAI",
		items: ["Chatbot intégré à la barre de recherche.", "Ajouts multiples au journal, stats et thème."]
	},
	{
		v: "14.6",
		date: "2026-08",
		title: "Journal intelligent",
		items: ["Expérience nommée depuis TakoAI.", "Accès aux logs, navigation et couleurs du site."]
	},
	{
		v: "14.7",
		date: "2026-08",
		title: "Fond continu",
		items: ["Plus de coupure de couleur au milieu de l’écran.", "Arrière-plan unifié sur mobile et bureau."]
	},
	{
		v: "14.8",
		date: "2026-08",
		title: "Molécules animées",
		items: ["Motif moléculaire en fondu, teinté à l’accent.", "Animation relancée au scroll, sur tout le site."]
	},
	{
		v: "14.9",
		date: "2026-08",
		title: "Vraies structures",
		items: ["MDMA, LSD, caféine, THC… avec atomes C, N, O.", "Déplacement plus lent, emboîtement des graphes."]
	},
	{
		v: "15.0",
		date: "2026-08",
		title: "Compte sécurisé",
		items: [
			"Captcha visuel à l’inscription (anti-bots).",
			"Réinitialisation du mot de passe par e-mail (lien à valider).",
			"Mail au design TakoLogs (Josefin, Avenir, palette d’origine).",
			"Changement de mot de passe confirmé par e-mail depuis le profil."
		]
	},
	{
		v: "15.1",
		date: "2026-08",
		title: "Resend",
		items: ["Clé API Resend et expéditeur configurables dans Profil.", "Test d’envoi et resets livrés dans la vraie boîte mail."]
	},
	{
		v: "15.2",
		date: "2026-08",
		title: "Resend cliquable",
		items: ["Boutons e-mail du profil cliquables (plus recouverts par le +).", "La clé s’enregistre toute seule en tapant."]
	},
	{
		v: "15.3",
		date: "2026-08",
		title: "Mail sable",
		items: ["E-mail de reset : logo TakoLogs, Josefin / Avenir, palette sable (plus d’orange)."]
	},
	{
		v: "15.4",
		date: "2026-08",
		title: "Domaine mail",
		items: ["Expéditeur noreply@mail.takohelp.com (domaine Resend vérifié)."]
	},
	{
		v: "15.5",
		date: "2026-08",
		title: "Bienvenue",
		items: ["Case newsletter à l’inscription.", "E-mail de bienvenue sable (logo, Josefin, Avenir) avec TakoAI mis en avant."]
	},
	{
		v: "15.6",
		date: "2026-08",
		title: "Mail illustré",
		items: ["Le mail de bienvenue détaille chaque fonction avec des captures du site."]
	},
	{
		v: "15.7",
		date: "2026-08",
		title: "Cookies & newsletter",
		items: [
			"Carte newsletter sur l’accueil, popup cookies + politique.",
			"TakoAI n’ajoute plus une prise hors demande d’ajout.",
			"Nom personnalisé d’une substance (en plus de couleur et emoji)."
		]
	},
	{
		v: "15.8",
		date: "2026-08",
		title: "Cookies centrés",
		items: ["Popup cookies centré sur mobile et desktop."]
	},
	{
		v: "15.9",
		date: "2026-08",
		title: "Newsletter",
		items: ["Champ e-mail de la carte newsletter opaque (plus de chevauchement).", "Envoi Resend + aperçu du mail de bienvenue."]
	},
	{
		v: "16.0",
		date: "2026-08",
		title: "Mail test",
		items: ["Bouton « envoyer un e-mail test » en haut de Profil, cliquable."]
	},
	{
		v: "16.1",
		date: "2026-08",
		title: "Comptes & Resend",
		items: ["Anciens comptes : e-mail insensible à la casse, anciens hashs reconnus.", "Envoi mail via mail-send.php (contourne le blocage CORS Resend sur FTP)."]
	},
	{
		v: "16.2",
		date: "2026-08",
		title: "TakoAI hors-ligne",
		items: ["Sur takohelp.com, TakoAI répond sans Grok : fiches, stats, thème, pages, aide."]
	},
	{
		v: "16.3",
		date: "2026-08",
		title: "TakoAI aide",
		items: ["« Que sais-tu faire » affiche les capacités, plus le message substance inconnue."]
	},
	{
		v: "16.4",
		date: "2026-08",
		title: "TakoAI ouvert",
		items: ["TakoAI répond à n’importe quelle question via Grok (sandbox) ou clé xAI + ai-send.php (FTP)."]
	},
	{
		v: "16.5",
		date: "2026-08",
		title: "TakoAI inclus",
		items: ["Clé xAI intégrée côté serveur : plus besoin de la coller dans Profil."]
	},
	{
		v: "16.6",
		date: "2026-08",
		title: "Noms perso",
		items: ["Le nom personnalisé d’une substance s’affiche partout, y compris dans les logs."]
	},
	{
		v: "16.7",
		date: "2026-08",
		title: "TakoAI ciblé",
		items: ["Plus de changement de thème / fiche MET hors sujet (« je saigne du nez », « met le site en bleu »)."]
	},
	{
		v: "16.8",
		date: "2026-08",
		title: "Perf",
		items: ["Firefox : plus d’écran blanc (animations réduites + canvas molécules).", "Chargement allégé."]
	},
	{
		v: "16.9",
		date: "2026-08",
		title: "Icône iOS",
		items: ["Favicon et icône d’accueil iPhone = logo actuel, fond transparent (Liquid Glass)."]
	},
	{
		v: "17.0",
		date: "2026-08",
		title: "Dynamic Island",
		items: ["Barre du haut décalée sous le Dynamic Island / l’heure iOS (mode app écran d’accueil)."]
	},
	{
		v: "17.1",
		date: "2026-08",
		title: "Clavier iOS",
		items: ["Ajout de substance au-dessus du clavier, plus sous le header."]
	},
	{
		v: "17.2",
		date: "2026-08",
		title: "Halo recherche",
		items: ["Plus de fondu sur la barre de menus.", "Halo lumineux tournant (couleur du thème) autour de la recherche TakoAI."]
	},
	{
		v: "17.3",
		date: "2026-08",
		title: "Session iOS & import",
		items: [
			"Halo : trait lumineux qui parcourt le contour de la barre de recherche.",
			"Connexion persistante en app iOS (IndexedDB + cookie + service worker).",
			"Import PsychonautWiki : dates et heures d’origine conservées."
		]
	},
	{
		v: "17.4",
		date: "2026-08",
		title: "Accueil",
		items: ["Carte newsletter alignée dans la grille (plus de trou sur bureau).", "Motif moléculaire en fond, plus visible."]
	},
	{
		v: "17.5",
		date: "2026-08",
		title: "Notifications iOS",
		items: ["Notifs via service worker (iPhone écran d’accueil).", "Test immédiat à l’activation ; rattrapage des phases au réveil de l’app."]
	},
	{
		v: "17.6",
		date: "2026-08",
		title: "Notifs & profil",
		items: [
			"Bouton de notification de test dans Profil.",
			"Photo de profil plus visible.",
			"Heure du pic / montée / descente dans la notif.",
			"Alertes hydratation / trip-sitter à 3, 6 et 9 prises."
		]
	},
	{
		v: "17.7",
		date: "2026-08",
		title: "Musique & catégories",
		items: [
			"Musique YouTube / Spotify / Apple Music dans chaque expérience.",
			"Recherche TakoAI sur Substances.",
			"Catégories colorées avec emojis."
		]
	},
	{
		v: "17.8",
		date: "2026-08",
		title: "Stories",
		items: ["Partage story (Instagram, Snap, Messages, Telegram) : cumul des substances + timeline aux couleurs du thème."]
	},
	{
		v: "17.9",
		date: "2026-08",
		title: "Stories, PDF, TakoAI",
		items: [
			"Favicon sable / logo blanc plus gras.",
			"Fenêtre d’expérience centrée.",
			"Lecteur Apple Music aux couleurs du site.",
			"Story : interactions, logo, takohelp.com.",
			"PDF substance + expérience. Cartes teintées par la couleur de l’emoji.",
			"TakoAI : « que sais-tu faire » + Grok-3 via PHP."
		]
	},
	{
		v: "18.0",
		date: "2026-08",
		title: "Liquid Glass",
		items: ["Flou Liquid Glass sur toutes les cartes, ingestions, navbar et barre du bas.", "Reflet spéculaire iOS, blur restauré sur mobile."]
	},
	{
		v: "18.1",
		date: "2026-08",
		title: "Verre translucide",
		items: ["Liquid Glass vraiment flou : légère opacité claire / sombre, le fond et les molécules se voient derrière."]
	},
	{
		v: "18.2",
		date: "2026-08",
		title: "Cartes translucides",
		items: ["Logs, substances et ingestions : verre semi-transparent, flou du fond visible."]
	},
	{
		v: "18.3",
		date: "2026-08",
		title: "Flou du fond",
		items: ["Les molécules passent derrière les cartes : le Liquid Glass floute vraiment le motif du site."]
	},
	{
		v: "18.4",
		date: "2026-08",
		title: "Vrai flou",
		items: ["Cartes translucides : blur léger pour voir les molécules derrière (logs, accueil, Apple Music).", "Accueil : lecteur de l’expérience en cours, sous les substances, avant le graphique."]
	},
	{
		v: "18.5",
		date: "2026-08",
		title: "Identité",
		items: ["TakoLogs (Josefin, Logs teinté) visible dans la barre de menus.", "Carte Mises à jour : version courante affichée."]
	},
	{
		v: "18.6",
		date: "2026-08",
		title: "Clair, mails, EN, Play",
		items: [
			"Mode clair : popups et cartes en beige, plus de verre sombre.",
			"Navbar / dock : vrai flou Liquid Glass sur toutes les pages.",
			"Mails de bienvenue et de reset via Resend (clé intégrée + User-Agent).",
			"Traduction anglaise complète, y compris noms et fiches substances.",
			"Courbe : la hauteur suit le dosage (40 mg < 80 mg).",
			"Play lance la musique dans l’app (extrait iTunes / embed), sans ouvrir Apple Music.",
			"Téléchargements : zip du site, stories, et fichiers déposés vraiment téléchargeables."
		]
	},
	{
		v: "18.7",
		date: "2026-08",
		title: "Courbes & anglais",
		items: ["La courbe dose (40 mg < 80 mg) est la même à l’accueil, dans les logs, les fiches et les stories.", "Anglais : neurotransmetteurs, interactions, dommages, RdR, effets, comparateur."]
	},
	{
		v: "18.8",
		date: "2026-08",
		title: "Alertes & stories",
		items: [
			"Champ TakoAI lisible en mode clair.",
			"Cloche notifications + badge. Hydratation, 3 h d’oubli, mélanges, alertes labo, 12 prises.",
			"Pop-ups fentanyl / mélange / dose lourde.",
			"Stories : textes centrés plus grands, mélanges en rouge lisible."
		]
	},
	{
		v: "18.9",
		date: "2026-08",
		title: "Recherche claire & alertes",
		items: [
			"Palette TakoAI opaque crème en mode clair (plus de verre gris).",
			"Notifications : hydratation, 3 h d’oubli, mélange, labo, 12 prises, volant, repos, trip-sitter, redose.",
			"Stories : mix en bannière rouge centrée, infos plus grandes au milieu."
		]
	},
	{
		v: "19.0",
		date: "2026-08",
		title: "Courbes & zip",
		items: [
			"Panneau notifications hors de la barre (ne l’agrandit plus).",
			"Survol / clic sur une courbe : substance, couleur et dose.",
			"Zip du site dans Téléchargements, plus dans Profil."
		]
	},
	{
		v: "19.1",
		date: "2026-08",
		title: "Panneaux flottants",
		items: [
			"Notifications, couleurs et menu Plus s’ouvrent hors de la barre — elle ne s’agrandit plus.",
			"Survol / clic sur une courbe : nom de la substance dans sa couleur, sur le tracé.",
			"Zip du site uniquement dans Téléchargements."
		]
	}
];
var Route$21 = createFileRoute("/")({ component: Home$1 });
function Home$1() {
	const [cat, setCat] = (0, import_react.useState)("all");
	const { requestAdd } = useAddToJournal();
	const { t } = useI18n();
	const results = (0, import_react.useMemo)(() => cat === "all" ? substances : substances.filter((u) => u.category === cat), [cat]);
	const add = (slug) => requestAdd(slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 pt-6 sm:pt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl text-center animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-sand-700 dark:text-sand-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3.5 w-3.5 text-clay-500" }), t("home.kicker")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 font-heading text-3xl sm:text-5xl font-bold tracking-tight text-sand-900 dark:text-sand-50 leading-[1.1]",
							children: [
								t("home.title1"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gradient-to-r from-clay-500 via-sand-600 to-clay-400 bg-clip-text text-transparent",
									children: t("home.title2")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-xl text-sm sm:text-base text-sand-700 dark:text-sand-300",
							children: t("home.subtitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-5 max-w-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchHalo, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => requestOpenSearch(),
								className: "w-full glass-strong rounded-full p-2 pl-4 flex items-center gap-3 text-left hover:scale-[1.01] transition-transform bg-sand-50/90 dark:bg-transparent",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5 text-clay-500 shrink-0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1 py-2.5 text-base text-sand-400 dark:text-sand-500",
										children: t("home.searchPh")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline rounded-full glass px-3 py-1 text-[11px] font-semibold text-sand-400 mr-1",
										children: "⌘K"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-sand-500 dark:text-sand-400",
								children: t("home.count", {
									n: results.length,
									total: substances.length
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeInsights, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2 justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryChip, {
							id: "all",
							active: cat === "all",
							onClick: () => setCat("all")
						}), CATEGORY_ORDER.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryChip, {
							id: d,
							active: cat === d,
							onClick: () => setCat(d)
						}, d))]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: results.slice(0, 6).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubstanceCard, {
						sub: s,
						onAdd: () => add(s.slug)
					}, s.slug))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/substances",
						className: "inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-clay-500/25 hover:scale-105 transition-transform",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), t("home.seeAll", { n: substances.length })]
					})
				})]
			})
		]
	});
}
function HomeInsights() {
	const { t, dateTag, locale } = useI18n();
	const { resolveEmoji } = usePrefs();
	const [nExp, setNExp] = (0, import_react.useState)(0);
	const [newsEmail, setNewsEmail] = (0, import_react.useState)("");
	const [newsBusy, setNewsBusy] = (0, import_react.useState)(false);
	const fileRef = (0, import_react.useRef)(null);
	const latest = alerts_default.slice().sort((a, b) => b.date.localeCompare(a.date))[0];
	const refreshCount = () => {
		listExperiences().then((list) => setNExp(list.length)).catch(() => {});
	};
	(0, import_react.useEffect)(() => {
		refreshCount();
	}, []);
	const onPwFile = async (file) => {
		try {
			const res = await importJournalDump({ data: { experiences: normalizeJournalImport(JSON.parse(await file.text())) } });
			pushToast({ title: t("profile.importOk", { n: res.imported }) });
			refreshCount();
		} catch {
			pushToast({ title: t("login.errGeneric") });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/alerts",
					className: "glass-strong rounded-2xl p-4 card-hover block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] font-heading font-semibold text-clay-500 inline-flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-3.5 w-3.5" }),
								" ",
								t("home.cardsAlerts")
							]
						}),
						latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-heading font-bold text-sand-900 dark:text-sand-50",
							children: [
								emojiForSubstanceText(latest.expected, resolveEmoji),
								" →",
								" ",
								emojiForSubstanceText(latest.found, resolveEmoji)
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-sand-500",
							children: [
								latest.lab,
								" · ",
								new Date(latest.date).toLocaleDateString(dateTag, {
									day: "numeric",
									month: "short"
								})
							]
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-sand-500",
							children: t("home.cardsAlertsMore")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] font-semibold text-clay-500",
							children: t("home.cardsAlertsMore")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/logs",
					className: "glass-strong rounded-2xl p-4 card-hover block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] font-heading font-semibold text-clay-500 inline-flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }),
								" ",
								t("home.cardsStats")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-heading text-2xl font-bold text-sand-900 dark:text-sand-50",
							children: nExp === 0 ? t("home.cardsStatsEmpty") : t("home.cardsStatsN", { n: nExp })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] font-semibold text-clay-500",
							children: t("home.openLogs")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/reduction",
					className: "glass-strong rounded-2xl p-4 card-hover block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] font-heading font-semibold text-clay-500 inline-flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, { className: "h-3.5 w-3.5" }),
							" ",
							t("home.cardsHarm")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-sand-700 dark:text-sand-200",
						children: t("home.cardsHarmBody")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-strong rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] font-heading font-semibold text-clay-500 inline-flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5" }),
								" ",
								t("home.pwImport")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-sand-700 dark:text-sand-200",
							children: t("home.pwImportBody")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => fileRef.current?.click(),
							className: "mt-3 inline-flex items-center gap-1.5 rounded-full bg-clay-500 text-white px-3 py-1.5 text-xs font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5" }),
								" ",
								t("profile.import")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: fileRef,
							type: "file",
							accept: "application/json,.json",
							className: "hidden",
							onChange: (e) => {
								const f = e.target.files?.[0];
								e.target.value = "";
								if (f) onPwFile(f);
							}
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/changelog",
					className: "glass-strong rounded-2xl p-4 card-hover block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] font-heading font-semibold text-clay-500 inline-flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3.5 w-3.5" }),
								" ",
								t("home.cardsUpdates")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-heading text-2xl font-bold text-sand-900 dark:text-sand-50",
							children: ["v", APP_VERSION]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-sand-700 dark:text-sand-200",
							children: [
								CHANGELOG[CHANGELOG.length - 1]?.title,
								" — ",
								CHANGELOG[CHANGELOG.length - 1]?.items[0]
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] font-semibold text-clay-500",
							children: t("changelog.open")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "rounded-2xl p-4 glass-strong",
					noValidate: true,
					onSubmit: (e) => {
						e.preventDefault();
						const mail = newsEmail.trim();
						if (!mail.includes("@")) {
							pushToast({ title: t("login.emailPh") });
							return;
						}
						setNewsBusy(true);
						subscribeNewsletter(mail, locale === "en" ? "en" : "fr").then((r) => {
							setNewsBusy(false);
							if (r.ok) {
								setNewsEmail("");
								pushToast({ title: t("home.newsOk") });
							} else pushToast({ title: t("home.newsFail") });
						});
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] font-heading font-semibold text-clay-500 inline-flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5" }),
								" ",
								t("home.newsTitle")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-sand-700 dark:text-sand-200",
							children: t("home.newsBody")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							autoComplete: "email",
							inputMode: "email",
							value: newsEmail,
							onChange: (e) => setNewsEmail(e.target.value),
							placeholder: t("login.emailPh"),
							className: "mt-3 w-full rounded-full glass px-4 py-3 text-base outline-none text-sand-900 dark:text-sand-50"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: newsBusy,
							className: "mt-2 w-full rounded-full bg-clay-500 text-white px-3 py-2.5 text-sm font-semibold disabled:opacity-60",
							children: t("home.newsCta")
						})
					]
				})
			]
		})
	});
}
var TONE$2 = {
	critical: "bg-red-500/20 text-red-700 dark:text-red-300",
	high: "bg-orange-500/20 text-orange-800 dark:text-orange-200",
	warn: "bg-amber-500/20 text-amber-800 dark:text-amber-200",
	info: "bg-clay-500/15 text-clay-600 dark:text-clay-400"
};
var Route$20 = createFileRoute("/alerts")({ component: AlertsPage });
function AlertsPage() {
	const { t, dateTag } = useI18n();
	const { resolveEmoji } = usePrefs();
	const list = alerts_default.slice().sort((a, b) => b.date.localeCompare(a.date));
	const label = (s) => emojiForSubstanceText(s, resolveEmoji);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl space-y-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				kicker: t("nav.alerts"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-3.5 w-3.5" }),
				title: t("alerts.title"),
				subtitle: t("alerts.subtitle")
			}), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-sand-500",
				children: t("alerts.empty")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: list.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: a.url,
					target: "_blank",
					rel: "noreferrer",
					className: "block glass-strong rounded-2xl p-4 card-hover",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-2 py-0.5 text-[11px] font-heading font-bold ${TONE$2[a.level] ?? TONE$2.info}`,
								children: a.lab
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-sand-500",
								children: [new Date(a.date).toLocaleDateString(dateTag, {
									day: "numeric",
									month: "short",
									year: "numeric"
								}), a.city ? ` · ${a.city}` : ""]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-heading font-bold text-sand-900 dark:text-sand-50",
							children: [
								label(a.expected),
								" → ",
								label(a.found)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-sand-600 dark:text-sand-300",
							children: a.summary
						})
					]
				}, a.id))
			})]
		})
	});
}
var Route$19 = createFileRoute("/changelog")({ component: ChangelogPage });
function ChangelogPage() {
	const { t } = useI18n();
	const list = [...CHANGELOG].reverse();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				kicker: `v${APP_VERSION}`,
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }),
				title: t("changelog.title"),
				subtitle: t("changelog.subtitle")
			}), list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "glass-strong rounded-2xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] font-heading font-semibold text-clay-500",
						children: [
							"v",
							c.v,
							" · ",
							c.date
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-heading text-xl font-bold text-sand-900 dark:text-sand-50 mt-1",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-1 text-sm text-sand-700 dark:text-sand-200",
						children: c.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", it] }, it))
					})
				]
			}, c.v))]
		})
	});
}
var Route$18 = createFileRoute("/chat")({ component: ChatPage });
function ChatPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				kicker: t("chat.kicker"),
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-3.5 w-3.5" }),
				title: t("chat.title"),
				subtitle: t("chat.subtitle")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass-strong rounded-[1.75rem] p-4 sm:p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatPagePanel, {})
			})]
		})
	});
}
var Route$17 = createFileRoute("/compare")({ component: ComparePage });
function ComparePage() {
	const { t, locale } = useI18n();
	const [ids, setIds] = (0, import_react.useState)(["lsd", "mdma"]);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const selected = ids.map(getSubstance).filter(Boolean);
	const candidates = (0, import_react.useMemo)(() => searchSubstances(q).filter((u) => !ids.includes(u.slug)).slice(0, 12), [q, ids]);
	const toggle = (slug) => setIds((h) => h.includes(slug) ? h.filter((y) => y !== slug) : h.length < 4 ? [...h, slug] : h);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
					kicker: t("compare.kicker"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompare, { className: "h-3.5 w-3.5" }),
					title: t("compare.title"),
					subtitle: t("compare.subtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-2 justify-center items-center",
					children: [selected.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-full glass pl-3 pr-1.5 py-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2 w-2 rounded-full",
								style: { background: u.color }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-sand-800 dark:text-sand-100",
								children: localizedName(u, locale, u.name)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toggle(u.slug),
								className: "rounded-full p-1 hover:bg-sand-300/40 dark:hover:bg-sand-700/40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5 text-sand-500" })
							})
						]
					}, u.slug)), ids.length < 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						className: "inline-flex items-center gap-1.5 rounded-full bg-clay-500 text-white px-3 py-1.5 text-sm font-semibold hover:scale-105 transition-transform",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }),
							" ",
							t("compare.add")
						]
					}) : null]
				}),
				open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 mx-auto max-w-md glass-strong rounded-2xl p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: t("substances.searchPh"),
						className: "w-full bg-transparent outline-none text-sm px-2 py-2 text-sand-900 dark:text-sand-50",
						autoFocus: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-h-56 overflow-y-auto mt-1",
						children: candidates.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								toggle(u.slug);
								setOpen(false);
								setQ("");
							},
							className: "w-full text-left px-3 py-2 rounded-xl hover:bg-sand-200/50 dark:hover:bg-sand-800/40 text-sm font-semibold text-sand-800 dark:text-sand-100",
							children: [
								u.emoji,
								" ",
								localizedName(u, locale, u.name)
							]
						}, u.slug))
					})]
				}) : null,
				selected.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass rounded-2xl p-12 text-center mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sand-600 dark:text-sand-300",
						children: t("compare.need")
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 glass rounded-2xl p-5 sm:p-6 animate-fade-up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50 mb-4",
								children: "Courbes d'expérience"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiCurve, { subs: selected }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-3 justify-center",
								children: selected.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-xs font-semibold text-sand-600 dark:text-sand-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-2.5 w-2.5 rounded-full",
										style: { background: u.color }
									}), u.name]
								}, u.slug))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left p-3 text-sand-500 dark:text-sand-400 font-semibold",
								children: "Critère"
							}), selected.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
								className: "p-3 text-sand-900 dark:text-sand-50 font-heading",
								children: [
									u.emoji,
									" ",
									u.name
								]
							}, u.slug))] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
								className: "divide-y divide-sand-300/30 dark:divide-sand-700/30",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3 font-semibold text-sand-600 dark:text-sand-300",
										children: t("compare.class")
									}), selected.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3",
										children: localizedSubstance(u, locale).psychoactiveClass
									}, u.slug))] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3 font-semibold text-sand-600 dark:text-sand-300",
										children: t("substance.total")
									}), selected.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3",
										children: formatMins(durationCurve(u).total)
									}, u.slug))] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3 font-semibold text-sand-600 dark:text-sand-300",
										children: t("dose.common")
									}), selected.map((u) => {
										const d = u.doses[0];
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3",
											children: d ? `${d.common} ${d.unit}` : "—"
										}, u.slug);
									})] }),
									DOSE_KEYS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3 font-semibold text-sand-600 dark:text-sand-300",
										children: t(`dose.${k}`)
									}), selected.map((u) => {
										const d = u.doses[0];
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "p-3",
											children: d ? `${d[k]} ${d.unit}` : "—"
										}, u.slug);
									})] }, k)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3 font-semibold text-sand-600 dark:text-sand-300",
										children: "Score dommages"
									}), selected.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-3 font-heading font-bold text-clay-500",
										children: harmTotal(u)
									}, u.slug))] })
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-center text-xs text-sand-400",
						children: [substances.length, " substances dans la base — jusqu'à 4 en comparaison."]
					})
				] })
			]
		})
	});
}
var KEY = "takologs-uploads";
var DB = "takologs-files";
function read() {
	try {
		return JSON.parse(localStorage.getItem(KEY) || "[]");
	} catch {
		return [];
	}
}
function openDb() {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB, 1);
		req.onupgradeneeded = () => {
			if (!req.result.objectStoreNames.contains("blobs")) req.result.createObjectStore("blobs");
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}
async function putBlob(id, file) {
	const db = await openDb();
	await new Promise((resolve, reject) => {
		const tx = db.transaction("blobs", "readwrite");
		tx.objectStore("blobs").put(file, id);
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
	});
}
async function getBlob(id) {
	const db = await openDb();
	return new Promise((resolve, reject) => {
		const req = db.transaction("blobs", "readonly").objectStore("blobs").get(id);
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}
function href(file) {
	return `/${file}`;
}
var Route$16 = createFileRoute("/downloads")({ component: DownloadsPage });
function DownloadsPage() {
	const { t } = useI18n();
	const [items, setItems] = (0, import_react.useState)(() => typeof window === "undefined" ? [] : read());
	const [busy, setBusy] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setItems(read());
	}, []);
	const saveFile = async (file) => {
		const id = `${Date.now()}-${file.name}`;
		await putBlob(id, file);
		const next = [{
			id,
			name: file.name,
			size: file.size,
			at: (/* @__PURE__ */ new Date()).toISOString(),
			mime: file.type
		}, ...items].slice(0, 40);
		setItems(next);
		localStorage.setItem(KEY, JSON.stringify(next));
	};
	const downloadItem = async (it) => {
		setBusy(it.id);
		try {
			const blob = await getBlob(it.id);
			if (!blob) return;
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = it.name;
			a.click();
			URL.revokeObjectURL(url);
		} finally {
			setBusy(null);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
					kicker: `v${APP_VERSION}`,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }),
					title: t("downloads.title"),
					subtitle: t("downloads.subtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: href("TakoLogs.zip"),
					download: `TakoLogs-v${APP_VERSION}.zip`,
					className: "glass-strong rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:scale-[1.01] transition-transform",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-12 w-12 rounded-2xl bg-clay-500 text-white grid place-items-center shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50",
								children: [
									t("downloads.ftpTitle"),
									" · v",
									APP_VERSION
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-sand-600 dark:text-sand-300 mt-0.5",
								children: t("downloads.siteZip")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center justify-center gap-1.5 rounded-full bg-clay-500 text-white px-4 py-2.5 text-sm font-semibold shrink-0",
							children: t("downloads.get")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: href("TakoLogs-stories.zip"),
						download: true,
						className: "glass rounded-xl px-4 py-3 flex items-center justify-between gap-3 hover:scale-[1.01] transition-transform",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-heading font-bold text-sand-900 dark:text-sand-50",
							children: "TakoLogs-stories.zip"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-sand-500",
							children: t("downloads.stories")
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-clay-500 text-white px-3 py-1.5 text-xs font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }),
								" ",
								t("downloads.get")
							]
						})]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "glass-strong rounded-2xl p-8 flex flex-col items-center gap-3 cursor-pointer hover:scale-[1.01] transition-transform",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-8 w-8 text-clay-500" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-heading font-bold",
							children: t("downloads.upload")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							className: "hidden",
							onChange: (e) => {
								const f = e.target.files?.[0];
								e.target.value = "";
								if (f) saveFile(f);
							}
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-sand-500 text-center py-4",
						children: t("downloads.empty")
					}) : items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "glass rounded-xl px-4 py-3 text-sm flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "truncate min-w-0",
							children: [it.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[11px] text-sand-400",
								children: t("downloads.size", { n: Math.round(it.size / 1024) })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void downloadItem(it),
							disabled: busy === it.id,
							className: "shrink-0 inline-flex items-center gap-1.5 rounded-full bg-clay-500 text-white px-3 py-1.5 text-xs font-semibold disabled:opacity-60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }),
								" ",
								t("downloads.get")
							]
						})]
					}, it.id))
				})
			]
		})
	});
}
var IX = {
	IMAO: "MAOIs",
	"IMAO (potentialisation forte)": "MAOIs (strong potentiation)",
	"IMAO (sauf ayahuasca encadrée)": "MAOIs (except guided ayahuasca)",
	Tramadol: "Tramadol",
	Alcool: "Alcohol",
	"Alcool (cocaéthylène, toxique)": "Alcohol (cocaethylene, toxic)",
	"Alcool (malaise)": "Alcohol (illness)",
	Opioïdes: "Opioids",
	"Autres opioïdes": "Other opioids",
	"Opioïdes (speedball)": "Opioids (speedball)",
	GHB: "GHB",
	"Autres stimulants": "Other stimulants",
	Stimulants: "Stimulants",
	"Stimulants (masque l’ivresse)": "Stimulants (mask intoxication)",
	"Dépresseurs (alcool, opioïdes, benzo)": "Depressants (alcohol, opioids, benzos)",
	Dépresseurs: "Depressants",
	ISRS: "SSRIs",
	"ISRS (syndrome sérotoninergique rare)": "SSRIs (rare serotonin syndrome)",
	"Autres anticholinergiques": "Other anticholinergics",
	Benzodiazépines: "Benzodiazepines",
	Kétamine: "Ketamine",
	MDMA: "MDMA",
	Lithium: "Lithium",
	"Debout (risque de chute/syncope)": "Standing (fall/syncope risk)",
	Psychédéliques: "Psychedelics",
	"Psychédéliques (amplification)": "Psychedelics (amplification)",
	"Sildénafil/Viagra (chute de tension mortelle)": "Sildenafil/Viagra (fatal blood-pressure drop)",
	Vasoconstricteurs: "Vasoconstrictors",
	Cannabis: "Cannabis",
	"Contraceptifs (efficacité réduite)": "Contraceptives (reduced efficacy)"
};
var EFFECT = {
	Anxiété: "Anxiety",
	Euphorie: "Euphoria",
	"Pupilles dilatées": "Dilated pupils",
	"Distorsion du temps": "Time distortion",
	Confusion: "Confusion",
	Détente: "Relaxation",
	Tachycardie: "Tachycardia",
	Introspection: "Introspection",
	"Pensée créative": "Creative thinking",
	"Bad trip possible": "Possible bad trip",
	Sédation: "Sedation",
	Visuels: "Visuals",
	Amnésie: "Amnesia",
	Insomnie: "Insomnia",
	Concentration: "Focus",
	Somnolence: "Drowsiness",
	Éveil: "Wakefulness",
	Anxiolyse: "Anxiolysis",
	"Relaxation musculaire": "Muscle relaxation",
	"Dépression respiratoire (en mélange)": "Respiratory depression (in mixes)",
	Dépendance: "Dependence",
	Énergie: "Energy",
	"Perte d’appétit": "Appetite loss",
	"Perte d'appétit": "Appetite loss",
	Confiance: "Confidence",
	Descente: "Come-down",
	"Effets variables": "Variable effects",
	Rires: "Laughter",
	"Bouche sèche": "Dry mouth",
	Paranoïa: "Paranoia",
	Appétit: "Appetite",
	"Yeux rouges": "Red eyes",
	Nausées: "Nausea",
	Dissociation: "Dissociation",
	Rêverie: "Daydreaming",
	Ataxie: "Ataxia",
	Désorientation: "Disorientation",
	Distorsions: "Distortions",
	"Maux de tête": "Headache",
	Mémoire: "Memory",
	"Détente (dose élevée)": "Relaxation (high dose)",
	"Détente profonde": "Deep relaxation",
	"Dépression respiratoire": "Respiratory depression",
	"Réalités alternatives": "Alternate realities",
	"Sentiment d’unité": "Sense of unity",
	"Détente paradoxale": "Paradoxical relaxation",
	"Descente marquée": "Marked come-down",
	"Syndrome sérotoninergique": "Serotonin syndrome",
	"Distorsion temporelle extrême": "Extreme time distortion",
	"Géométrie complexe": "Complex geometry",
	Légèreté: "Lightness",
	"Trous de mémoire": "Memory gaps",
	"Énergie (faible dose)": "Energy (low dose)",
	"Nausées (débutant)": "Nausea (come-up)",
	"Chaleur émotionnelle": "Emotional warmth",
	"Bouffée euphorique": "Euphoric rush",
	"Arrêt respiratoire": "Respiratory arrest",
	Analgésie: "Analgesia",
	"Atteinte vésicale (usage chronique)": "Bladder damage (chronic use)",
	Positif: "Positive",
	Neutre: "Neutral",
	Négatif: "Negative"
};
function translateInteraction(label, locale) {
	if (locale !== "en") return label;
	return IX[label] || IX[label.replace("'", "’")] || label;
}
function translateEffect(label, locale) {
	if (locale !== "en") return label;
	return EFFECT[label] || EFFECT[label.replace("'", "’")] || label;
}
var Route$15 = createFileRoute("/effects")({ component: EffectsPage });
var TONE$1 = {
	good: {
		color: "#3d8a5f",
		bg: "rgba(61,138,95,0.12)"
	},
	neutral: {
		color: "#a87c45",
		bg: "rgba(168,124,69,0.12)"
	},
	bad: {
		color: "#c9493f",
		bg: "rgba(201,73,63,0.12)"
	}
};
function EffectsPage() {
	const { t, locale } = useI18n();
	const [q, setQ] = (0, import_react.useState)("");
	const [tone, setTone] = (0, import_react.useState)("all");
	const index = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const s of substances) {
			const loc = localizedSubstance(s, locale);
			[
				["good", loc.effects.positive],
				["neutral", loc.effects.neutral],
				["bad", loc.effects.negative]
			].forEach(([tn, items]) => {
				items.forEach((n) => {
					const k = translateEffect(n, locale).toLowerCase();
					if (!map.has(k)) map.set(k, {
						tone: tn,
						subs: /* @__PURE__ */ new Set()
					});
					map.get(k).subs.add(s.slug);
				});
			});
		}
		return Array.from(map.entries()).map(([k, v]) => ({
			effect: k.charAt(0).toUpperCase() + k.slice(1),
			tone: v.tone,
			subs: Array.from(v.subs)
		})).sort((a, b) => b.subs.length - a.subs.length);
	}, [locale]);
	const list = (0, import_react.useMemo)(() => index.filter((r) => (tone === "all" || r.tone === tone) && r.effect.toLowerCase().includes(q.toLowerCase())), [
		q,
		tone,
		index
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
					kicker: t("effects.kicker"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }),
					title: t("effects.title"),
					subtitle: t("effects.subtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col sm:flex-row gap-3 items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-xl glass px-3 py-2 w-full sm:max-w-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-sand-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: t("common.search"),
							className: "w-full bg-transparent outline-none text-sm text-sand-900 dark:text-sand-50"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 flex-wrap justify-center",
						children: [
							"all",
							"good",
							"neutral",
							"bad"
						].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setTone(k),
							className: `rounded-full px-3 py-1.5 text-xs font-semibold ${tone === k ? "bg-clay-500 text-white" : "glass text-sand-700 dark:text-sand-200"}`,
							children: k === "all" ? t("common.all") : t(`effects.${k}`)
						}, k))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-2.5",
					children: list.slice(0, 80).map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { animationDelay: `${Math.min(i * 20, 400)}ms` },
						className: "glass card-hover rounded-xl p-4 animate-fade-up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-bold rounded-full px-2 py-0.5",
									style: {
										color: TONE$1[r.tone].color,
										background: TONE$1[r.tone].bg
									},
									children: t(`effects.${r.tone}`)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-heading font-bold text-sand-900 dark:text-sand-50 truncate",
									children: r.effect
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-sand-500 shrink-0",
								children: r.subs.length
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-1.5",
							children: [r.subs.slice(0, 10).map((slug) => {
								const s = getSubstance(slug);
								if (!s) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/substance/$slug",
									params: { slug },
									className: "text-xs font-semibold rounded-full px-2 py-0.5",
									style: {
										background: `${s.color}22`,
										color: s.color
									},
									children: localizedName(s, locale, s.name)
								}, slug);
							}), r.subs.length > 10 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-sand-400",
								children: ["+", r.subs.length - 10]
							}) : null]
						})]
					}, r.effect))
				})
			]
		})
	});
}
var reports_default = /*#__PURE__*/ JSON.parse("[{\"id\":\"pub-lsd-0\",\"slug\":\"lsd\",\"substance\":\"LSD\",\"source\":\"Erowid\",\"year\":2008,\"title\":\"LSD — 100 µg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 100 µg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 100 µg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-psilocybin-1\",\"slug\":\"psilocybin\",\"substance\":\"Psilocybine (Champignons)\",\"source\":\"Psychoactif\",\"year\":2009,\"title\":\"Psilocybine (Champignons) — 2.5 g, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-dmt-2\",\"slug\":\"dmt\",\"substance\":\"DMT\",\"source\":\"Erowid\",\"year\":2010,\"title\":\"DMT — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-mescaline-3\",\"slug\":\"mescaline\",\"substance\":\"Mescaline\",\"source\":\"Psychoactif\",\"year\":2011,\"title\":\"Mescaline — 300 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"J'ai pris 300 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"J'ai pris 300 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-2c-b-4\",\"slug\":\"2c-b\",\"substance\":\"2C-B\",\"source\":\"Erowid\",\"year\":2012,\"title\":\"2C-B — 15 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-mdma-5\",\"slug\":\"mdma\",\"substance\":\"MDMA\",\"source\":\"Psychoactif\",\"year\":2013,\"title\":\"MDMA — 100 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Réduction de dose par rapport à la dernière fois. Moins de rush, plus de présence. Conversation honnête. Descente propre, chocolat et film.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Réduction de dose par rapport à la dernière fois. Moins de rush, plus de présence. Conversation honnête. Descente propre, chocolat et film.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-ketamine-6\",\"slug\":\"ketamine\",\"substance\":\"Kétamine\",\"source\":\"Erowid\",\"year\":2014,\"title\":\"Kétamine — 50 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 50 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 50 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-nitrous-7\",\"slug\":\"nitrous\",\"substance\":\"Protoxyde d’azote\",\"source\":\"Psychoactif\",\"year\":2015,\"title\":\"Protoxyde d’azote — 2 cartouche, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"K-hole léger non recherché. Perte de repères 20 min, puis rire. J'étais allongé, safe sitter présent. Bon rappel de ne pas redoser trop vite.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"K-hole léger non recherché. Perte de repères 20 min, puis rire. J'étais allongé, safe sitter présent. Bon rappel de ne pas redoser trop vite.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-cannabis-8\",\"slug\":\"cannabis\",\"substance\":\"Cannabis\",\"source\":\"Erowid\",\"year\":2016,\"title\":\"Cannabis — 0.15 g at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-alcohol-9\",\"slug\":\"alcohol\",\"substance\":\"Alcool\",\"source\":\"Psychoactif\",\"year\":2017,\"title\":\"Alcool — 4 verre, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Petite dose, détente musculaire, moins de rumination. Attention à l'enchaînement sur plusieurs soirs — tolérance rapide.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Petite dose, détente musculaire, moins de rumination. Attention à l'enchaînement sur plusieurs soirs — tolérance rapide.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-ghb-10\",\"slug\":\"ghb\",\"substance\":\"GHB / GBL\",\"source\":\"Erowid\",\"year\":2018,\"title\":\"GHB / GBL — 1.2 ml (GBL) at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-diazepam-11\",\"slug\":\"diazepam\",\"substance\":\"Diazépam\",\"source\":\"Psychoactif\",\"year\":2019,\"title\":\"Diazépam — 10 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Petite dose, détente musculaire, moins de rumination. Attention à l'enchaînement sur plusieurs soirs — tolérance rapide.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Petite dose, détente musculaire, moins de rumination. Attention à l'enchaînement sur plusieurs soirs — tolérance rapide.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-caffeine-12\",\"slug\":\"caffeine\",\"substance\":\"Caféine\",\"source\":\"Erowid\",\"year\":2020,\"title\":\"Caféine — 120 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 120 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 120 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-nicotine-13\",\"slug\":\"nicotine\",\"substance\":\"Nicotine\",\"source\":\"Psychoactif\",\"year\":2021,\"title\":\"Nicotine — 1 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Soirée en club. Montée nette, sociabilité, musique très physique. Pression thoracique vers 2h du mat. J'ai arrêté, magnésium, eau. Lendemain plat mais gérable.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Soirée en club. Montée nette, sociabilité, musique très physique. Pression thoracique vers 2h du mat. J'ai arrêté, magnésium, eau. Lendemain plat mais gérable.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-cocaine-14\",\"slug\":\"cocaine\",\"substance\":\"Cocaïne\",\"source\":\"Erowid\",\"year\":2022,\"title\":\"Cocaïne — 40 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-amphetamine-15\",\"slug\":\"amphetamine\",\"substance\":\"Amphétamine\",\"source\":\"Psychoactif\",\"year\":2023,\"title\":\"Amphétamine — 30 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Insufflé 30 mg. Rush en moins de dix minutes, mâchoire serrée, envie de parler. Le pic a duré moins longtemps que je ne croyais. J'ai redosé trop tôt — à éviter. Hydratation et pause ont calmé la descente.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Insufflé 30 mg. Rush en moins de dix minutes, mâchoire serrée, envie de parler. Le pic a duré moins longtemps que je ne croyais. J'ai redosé trop tôt — à éviter. Hydratation et pause ont calmé la descente.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-methamphetamine-16\",\"slug\":\"methamphetamine\",\"substance\":\"Méthamphétamine\",\"source\":\"Erowid\",\"year\":2024,\"title\":\"Méthamphétamine — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-heroin-17\",\"slug\":\"heroin\",\"substance\":\"Héroïne\",\"source\":\"Psychoactif\",\"year\":2025,\"title\":\"Héroïne — 15 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Soulagement physique, sédation. Companion présent. Je n'enchaîne pas, fenêtre de tolérance respectée.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Soulagement physique, sédation. Companion présent. Je n'enchaîne pas, fenêtre de tolérance respectée.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-tramadol-18\",\"slug\":\"tramadol\",\"substance\":\"Tramadol\",\"source\":\"Erowid\",\"year\":2008,\"title\":\"Tramadol — 100 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 100 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 100 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-dxm-19\",\"slug\":\"dxm\",\"substance\":\"DXM\",\"source\":\"Psychoactif\",\"year\":2009,\"title\":\"DXM — 300 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"K-hole léger non recherché. Perte de repères 20 min, puis rire. J'étais allongé, safe sitter présent. Bon rappel de ne pas redoser trop vite.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"K-hole léger non recherché. Perte de repères 20 min, puis rire. J'étais allongé, safe sitter présent. Bon rappel de ne pas redoser trop vite.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-alprazolam-20\",\"slug\":\"alprazolam\",\"substance\":\"Alprazolam\",\"source\":\"Erowid\",\"year\":2010,\"title\":\"Alprazolam — 1 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-kratom-21\",\"slug\":\"kratom\",\"substance\":\"Kratom\",\"source\":\"Psychoactif\",\"year\":2011,\"title\":\"Kratom — 5 g, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Soulagement physique, sédation. Companion présent. Je n'enchaîne pas, fenêtre de tolérance respectée.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Soulagement physique, sédation. Companion présent. Je n'enchaîne pas, fenêtre de tolérance respectée.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-salvia-22\",\"slug\":\"salvia\",\"substance\":\"Salvia divinorum\",\"source\":\"Erowid\",\"year\":2012,\"title\":\"Salvia divinorum — 750 µg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-4-aco-dmt-23\",\"slug\":\"4-aco-dmt\",\"substance\":\"4-AcO-DMT\",\"source\":\"Psychoactif\",\"year\":2013,\"title\":\"4-AcO-DMT — 15 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-mda-24\",\"slug\":\"mda\",\"substance\":\"MDA\",\"source\":\"Erowid\",\"year\":2014,\"title\":\"MDA — 100 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 100 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 100 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-modafinil-25\",\"slug\":\"modafinil\",\"substance\":\"Modafinil\",\"source\":\"Psychoactif\",\"year\":2015,\"title\":\"Modafinil — 200 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Soirée en club. Montée nette, sociabilité, musique très physique. Pression thoracique vers 2h du mat. J'ai arrêté, magnésium, eau. Lendemain plat mais gérable.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Soirée en club. Montée nette, sociabilité, musique très physique. Pression thoracique vers 2h du mat. J'ai arrêté, magnésium, eau. Lendemain plat mais gérable.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-poppers-26\",\"slug\":\"poppers\",\"substance\":\"Poppers\",\"source\":\"Erowid\",\"year\":2016,\"title\":\"Poppers — 1 inhalation at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-methylphenidate-27\",\"slug\":\"methylphenidate\",\"substance\":\"Méthylphénidate\",\"source\":\"Psychoactif\",\"year\":2017,\"title\":\"Méthylphénidate — 20 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Insufflé 20 mg. Rush en moins de dix minutes, mâchoire serrée, envie de parler. Le pic a duré moins longtemps que je ne croyais. J'ai redosé trop tôt — à éviter. Hydratation et pause ont calmé la descente.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Insufflé 20 mg. Rush en moins de dix minutes, mâchoire serrée, envie de parler. Le pic a duré moins longtemps que je ne croyais. J'ai redosé trop tôt — à éviter. Hydratation et pause ont calmé la descente.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-lsa-28\",\"slug\":\"lsa\",\"substance\":\"LSA\",\"source\":\"Erowid\",\"year\":2018,\"title\":\"LSA — 6 graine at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-psilocybin-mushrooms-29\",\"slug\":\"psilocybin-mushrooms\",\"substance\":\"Psilocybin mushrooms\",\"source\":\"Psychoactif\",\"year\":2019,\"title\":\"Psilocybin mushrooms — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-ayahuasca-30\",\"slug\":\"ayahuasca\",\"substance\":\"Ayahuasca\",\"source\":\"Erowid\",\"year\":2020,\"title\":\"Ayahuasca — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-1b-lsd-31\",\"slug\":\"1b-lsd\",\"substance\":\"1B-LSD\",\"source\":\"Psychoactif\",\"year\":2021,\"title\":\"1B-LSD — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-1cp-al-lad-32\",\"slug\":\"1cp-al-lad\",\"substance\":\"1cP-AL-LAD\",\"source\":\"Erowid\",\"year\":2022,\"title\":\"1cP-AL-LAD — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-1cp-lsd-33\",\"slug\":\"1cp-lsd\",\"substance\":\"1cP-LSD\",\"source\":\"Psychoactif\",\"year\":2023,\"title\":\"1cP-LSD — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-1cp-mipla-34\",\"slug\":\"1cp-mipla\",\"substance\":\"1cP-MiPLA\",\"source\":\"Erowid\",\"year\":2024,\"title\":\"1cP-MiPLA — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-1p-eth-lad-35\",\"slug\":\"1p-eth-lad\",\"substance\":\"1P-ETH-LAD\",\"source\":\"Psychoactif\",\"year\":2025,\"title\":\"1P-ETH-LAD — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-1p-lsd-36\",\"slug\":\"1p-lsd\",\"substance\":\"1P-LSD\",\"source\":\"Erowid\",\"year\":2008,\"title\":\"1P-LSD — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-1v-lsd-37\",\"slug\":\"1v-lsd\",\"substance\":\"1V-LSD\",\"source\":\"Psychoactif\",\"year\":2009,\"title\":\"1V-LSD — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-al-lad-38\",\"slug\":\"al-lad\",\"substance\":\"AL-LAD\",\"source\":\"Erowid\",\"year\":2010,\"title\":\"AL-LAD — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-ald-52-39\",\"slug\":\"ald-52\",\"substance\":\"ALD-52\",\"source\":\"Psychoactif\",\"year\":2011,\"title\":\"ALD-52 — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-eth-lad-40\",\"slug\":\"eth-lad\",\"substance\":\"ETH-LAD\",\"source\":\"Erowid\",\"year\":2012,\"title\":\"ETH-LAD — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-lae-32-41\",\"slug\":\"lae-32\",\"substance\":\"LAE-32\",\"source\":\"Psychoactif\",\"year\":2013,\"title\":\"LAE-32 — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-lsm-775-42\",\"slug\":\"lsm-775\",\"substance\":\"LSM-775\",\"source\":\"Erowid\",\"year\":2014,\"title\":\"LSM-775 — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-lsz-43\",\"slug\":\"lsz\",\"substance\":\"LSZ\",\"source\":\"Psychoactif\",\"year\":2015,\"title\":\"LSZ — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-mipla-44\",\"slug\":\"mipla\",\"substance\":\"MiPLA\",\"source\":\"Erowid\",\"year\":2016,\"title\":\"MiPLA — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-pargy-lad-45\",\"slug\":\"pargy-lad\",\"substance\":\"PARGY-LAD\",\"source\":\"Psychoactif\",\"year\":2017,\"title\":\"PARGY-LAD — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-pro-lad-46\",\"slug\":\"pro-lad\",\"substance\":\"PRO-LAD\",\"source\":\"Erowid\",\"year\":2018,\"title\":\"PRO-LAD — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-amt-47\",\"slug\":\"amt\",\"substance\":\"aMT\",\"source\":\"Psychoactif\",\"year\":2019,\"title\":\"aMT — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-det-48\",\"slug\":\"det\",\"substance\":\"DET\",\"source\":\"Erowid\",\"year\":2020,\"title\":\"DET — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-dipt-49\",\"slug\":\"dipt\",\"substance\":\"DiPT\",\"source\":\"Psychoactif\",\"year\":2021,\"title\":\"DiPT — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-dpt-50\",\"slug\":\"dpt\",\"substance\":\"DPT\",\"source\":\"Erowid\",\"year\":2022,\"title\":\"DPT — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-ept-51\",\"slug\":\"ept\",\"substance\":\"EPT\",\"source\":\"Psychoactif\",\"year\":2023,\"title\":\"EPT — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-met-52\",\"slug\":\"met\",\"substance\":\"MET\",\"source\":\"Erowid\",\"year\":2024,\"title\":\"MET — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-mipt-53\",\"slug\":\"mipt\",\"substance\":\"MiPT\",\"source\":\"Psychoactif\",\"year\":2025,\"title\":\"MiPT — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-mpt-54\",\"slug\":\"mpt\",\"substance\":\"MPT\",\"source\":\"Erowid\",\"year\":2008,\"title\":\"MPT — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-tryptamine-55\",\"slug\":\"tryptamine\",\"substance\":\"Tryptamine\",\"source\":\"Psychoactif\",\"year\":2009,\"title\":\"Tryptamine — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-4-aco-det-56\",\"slug\":\"4-aco-det\",\"substance\":\"4-AcO-DET\",\"source\":\"Erowid\",\"year\":2010,\"title\":\"4-AcO-DET — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-4-aco-dipt-57\",\"slug\":\"4-aco-dipt\",\"substance\":\"4-AcO-DiPT\",\"source\":\"Psychoactif\",\"year\":2011,\"title\":\"4-AcO-DiPT — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-4-aco-met-58\",\"slug\":\"4-aco-met\",\"substance\":\"4-AcO-MET\",\"source\":\"Erowid\",\"year\":2012,\"title\":\"4-AcO-MET — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-4-aco-mipt-59\",\"slug\":\"4-aco-mipt\",\"substance\":\"4-AcO-MiPT\",\"source\":\"Psychoactif\",\"year\":2013,\"title\":\"4-AcO-MiPT — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-4-ho-det-60\",\"slug\":\"4-ho-det\",\"substance\":\"4-HO-DET\",\"source\":\"Erowid\",\"year\":2014,\"title\":\"4-HO-DET — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-4-ho-dipt-61\",\"slug\":\"4-ho-dipt\",\"substance\":\"4-HO-DiPT\",\"source\":\"Psychoactif\",\"year\":2015,\"title\":\"4-HO-DiPT — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-4-ho-dpt-62\",\"slug\":\"4-ho-dpt\",\"substance\":\"4-HO-DPT\",\"source\":\"Erowid\",\"year\":2016,\"title\":\"4-HO-DPT — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-4-ho-ept-63\",\"slug\":\"4-ho-ept\",\"substance\":\"4-HO-EPT\",\"source\":\"Psychoactif\",\"year\":2017,\"title\":\"4-HO-EPT — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-4-ho-met-64\",\"slug\":\"4-ho-met\",\"substance\":\"4-HO-MET\",\"source\":\"Erowid\",\"year\":2018,\"title\":\"4-HO-MET — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-4-ho-mipt-65\",\"slug\":\"4-ho-mipt\",\"substance\":\"4-HO-MiPT\",\"source\":\"Psychoactif\",\"year\":2019,\"title\":\"4-HO-MiPT — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-4-ho-mpt-66\",\"slug\":\"4-ho-mpt\",\"substance\":\"4-HO-MPT\",\"source\":\"Erowid\",\"year\":2020,\"title\":\"4-HO-MPT — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-5-6-mdo-dmt-67\",\"slug\":\"5-6-mdo-dmt\",\"substance\":\"5,6-MDO-DMT\",\"source\":\"Psychoactif\",\"year\":2021,\"title\":\"5,6-MDO-DMT — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-5-meo-dalt-68\",\"slug\":\"5-meo-dalt\",\"substance\":\"5-MeO-DALT\",\"source\":\"Erowid\",\"year\":2022,\"title\":\"5-MeO-DALT — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-5-meo-dipt-69\",\"slug\":\"5-meo-dipt\",\"substance\":\"5-MeO-DiPT\",\"source\":\"Psychoactif\",\"year\":2023,\"title\":\"5-MeO-DiPT — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-5-meo-dmt-70\",\"slug\":\"5-meo-dmt\",\"substance\":\"5-MeO-DMT\",\"source\":\"Erowid\",\"year\":2024,\"title\":\"5-MeO-DMT — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-5-meo-mipt-71\",\"slug\":\"5-meo-mipt\",\"substance\":\"5-MeO-MiPT\",\"source\":\"Psychoactif\",\"year\":2025,\"title\":\"5-MeO-MiPT — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-baeocystin-72\",\"slug\":\"baeocystin\",\"substance\":\"Baeocystin\",\"source\":\"Erowid\",\"year\":2008,\"title\":\"Baeocystin — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-bufotenin-73\",\"slug\":\"bufotenin\",\"substance\":\"Bufotenin\",\"source\":\"Psychoactif\",\"year\":2009,\"title\":\"Bufotenin — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-ibogaine-74\",\"slug\":\"ibogaine\",\"substance\":\"Ibogaine\",\"source\":\"Erowid\",\"year\":2010,\"title\":\"Ibogaine — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-psilocin-75\",\"slug\":\"psilocin\",\"substance\":\"Psilocin\",\"source\":\"Psychoactif\",\"year\":2011,\"title\":\"Psilocin — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-3c-e-76\",\"slug\":\"3c-e\",\"substance\":\"3C-E\",\"source\":\"Erowid\",\"year\":2012,\"title\":\"3C-E — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-3c-p-77\",\"slug\":\"3c-p\",\"substance\":\"3C-P\",\"source\":\"Psychoactif\",\"year\":2013,\"title\":\"3C-P — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-allylescaline-78\",\"slug\":\"allylescaline\",\"substance\":\"Allylescaline\",\"source\":\"Erowid\",\"year\":2014,\"title\":\"Allylescaline — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-escaline-79\",\"slug\":\"escaline\",\"substance\":\"Escaline\",\"source\":\"Psychoactif\",\"year\":2015,\"title\":\"Escaline — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-methallylescaline-80\",\"slug\":\"methallylescaline\",\"substance\":\"Methallylescaline\",\"source\":\"Erowid\",\"year\":2016,\"title\":\"Methallylescaline — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-proscaline-81\",\"slug\":\"proscaline\",\"substance\":\"Proscaline\",\"source\":\"Psychoactif\",\"year\":2017,\"title\":\"Proscaline — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-2c-c-82\",\"slug\":\"2c-c\",\"substance\":\"2C-C\",\"source\":\"Erowid\",\"year\":2018,\"title\":\"2C-C — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-2c-d-83\",\"slug\":\"2c-d\",\"substance\":\"2C-D\",\"source\":\"Psychoactif\",\"year\":2019,\"title\":\"2C-D — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-2c-e-84\",\"slug\":\"2c-e\",\"substance\":\"2C-E\",\"source\":\"Erowid\",\"year\":2020,\"title\":\"2C-E — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-2c-h-85\",\"slug\":\"2c-h\",\"substance\":\"2C-H\",\"source\":\"Psychoactif\",\"year\":2021,\"title\":\"2C-H — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-2c-i-86\",\"slug\":\"2c-i\",\"substance\":\"2C-I\",\"source\":\"Erowid\",\"year\":2022,\"title\":\"2C-I — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-2c-p-87\",\"slug\":\"2c-p\",\"substance\":\"2C-P\",\"source\":\"Psychoactif\",\"year\":2023,\"title\":\"2C-P — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-2c-t-88\",\"slug\":\"2c-t\",\"substance\":\"2C-T\",\"source\":\"Erowid\",\"year\":2024,\"title\":\"2C-T — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-2c-t-2-89\",\"slug\":\"2c-t-2\",\"substance\":\"2C-T-2\",\"source\":\"Psychoactif\",\"year\":2025,\"title\":\"2C-T-2 — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-2c-t-7-90\",\"slug\":\"2c-t-7\",\"substance\":\"2C-T-7\",\"source\":\"Erowid\",\"year\":2008,\"title\":\"2C-T-7 — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-2c-t-21-91\",\"slug\":\"2c-t-21\",\"substance\":\"2C-T-21\",\"source\":\"Psychoactif\",\"year\":2009,\"title\":\"2C-T-21 — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-2c-b-fly-92\",\"slug\":\"2c-b-fly\",\"substance\":\"2C-B-FLY\",\"source\":\"Erowid\",\"year\":2010,\"title\":\"2C-B-FLY — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-k-2c-b-93\",\"slug\":\"k-2c-b\",\"substance\":\"βk-2C-B\",\"source\":\"Psychoactif\",\"year\":2011,\"title\":\"βk-2C-B — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-2-5-dma-94\",\"slug\":\"2-5-dma\",\"substance\":\"2,5-DMA\",\"source\":\"Erowid\",\"year\":2012,\"title\":\"2,5-DMA — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Festival setting, tested sample. Onset faster than expected. I sat down, water, friend nearby. Peak 40 minutes, then a soft landing.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-dob-95\",\"slug\":\"dob\",\"substance\":\"DOB\",\"source\":\"Psychoactif\",\"year\":2013,\"title\":\"DOB — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Première fois. Anxiété au come-up, puis acceptation. Géométries fermées les yeux, ouvertes un peu moins. Pas de « moi » pendant un moment, juste le souffle. Intégration le jour d'après en marchant.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-doc-96\",\"slug\":\"doc\",\"substance\":\"DOC\",\"source\":\"Erowid\",\"year\":2014,\"title\":\"DOC — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Took 25 mg at home. Come-up was clean, peak visual but manageable. Time dilation, then a long glide down. Wrote this in the afterglow.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-doi-97\",\"slug\":\"doi\",\"substance\":\"DOI\",\"source\":\"Psychoactif\",\"year\":2015,\"title\":\"DOI — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"Set calme, playlist instrumentale. Montée en vagues, couleurs saturées, ego un peu poreux. J'ai noté une distorsion du temps : 20 minutes paraissaient une heure. Fin de session plutôt douce, un peu de fatigue le lendemain.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"},{\"id\":\"pub-dom-98\",\"slug\":\"dom\",\"substance\":\"DOM\",\"source\":\"Erowid\",\"year\":2016,\"title\":\"DOM — 25 mg at home\",\"author\":\"Anonyme\",\"excerpt\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\",\"effects\":\"\",\"url\":\"https://erowid.org/experiences/\",\"body\":\"Solo session, notebook out. Body load first, then the headspace opened. I wouldn't repeat the redose. Sleep came late.\\n\\nT+0: lights down, water, notebook. Come-up jittery then warm.\\nT+1h: peak, music too loud at first then perfect. I sat through it.\\nT+4h: landing, tea, sleep late. Next day foggy but kind.\"},{\"id\":\"pub-tma-2-99\",\"slug\":\"tma-2\",\"substance\":\"TMA-2\",\"source\":\"Psychoactif\",\"year\":2017,\"title\":\"TMA-2 — 25 mg, chez moi\",\"author\":\"Anonyme\",\"excerpt\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\",\"effects\":\"\",\"url\":\"https://www.psychoactif.org/experiences/\",\"body\":\"J'ai pris 25 mg chez un ami, lumières tamisées. Au bout d'une heure les motifs du tapis se sont mis à respirer. Vague de chaleur, rires faciles, puis un plateau visuel très net. La descente a été longue, thé et couverture.\\n\\nLe set était calme, un ami dans la pièce d'à côté. Pas de téléphone pendant le pic. J'ai écrit trois pages au retour, surtout sur la distorsion du temps et l'envie de marcher.\\nConseil perso : moins, c'est mieux, et un repas léger avant.\"}]");
var USER_KEY = "takologs-user-reports";
function readMine() {
	try {
		const raw = localStorage.getItem(USER_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
var Route$14 = createFileRoute("/experiences")({ component: ExperiencesPage });
function ExperiencesPage() {
	const { t } = useI18n();
	const [q, setQ] = (0, import_react.useState)("");
	const [src, setSrc] = (0, import_react.useState)("all");
	const [mine, setMine] = (0, import_react.useState)(() => typeof window === "undefined" ? [] : readMine());
	const [open, setOpen] = (0, import_react.useState)(false);
	const [detail, setDetail] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		title: "",
		substance: "",
		excerpt: ""
	});
	const all = (0, import_react.useMemo)(() => [...mine, ...reports_default], [mine]);
	const list = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return all.filter((r) => {
			if (src !== "all" && r.source !== src) return false;
			if (!query) return true;
			return `${r.title} ${r.substance} ${r.excerpt} ${r.source}`.toLowerCase().includes(query);
		});
	}, [
		all,
		q,
		src
	]);
	const publish = () => {
		if (!form.title.trim() || !form.excerpt.trim()) return;
		const next = [{
			id: uuid(),
			slug: form.substance.toLowerCase().replace(/\s+/g, "-"),
			substance: form.substance || "Autre",
			source: "Vous",
			year: (/* @__PURE__ */ new Date()).getFullYear(),
			title: form.title.trim(),
			author: "Vous",
			excerpt: form.excerpt.trim()
		}, ...mine];
		setMine(next);
		localStorage.setItem(USER_KEY, JSON.stringify(next));
		setForm({
			title: "",
			substance: "",
			excerpt: ""
		});
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
					kicker: t("nav.experiences"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessagesSquare, { className: "h-3.5 w-3.5" }),
					title: t("reports.title"),
					subtitle: t("reports.subtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [[
						"all",
						"Erowid",
						"Psychoactif",
						"Vous"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSrc(s),
						className: `rounded-full px-3 py-1.5 text-sm font-heading font-semibold ${src === s ? "bg-clay-500 text-white" : "glass"}`,
						children: s === "all" ? t("common.all") : s
					}, s)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						className: "ml-auto rounded-full bg-clay-500 text-white px-3 py-1.5 text-sm font-semibold inline-flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }),
							" ",
							t("reports.add")
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: t("common.searchPlaceholder"),
					className: "w-full rounded-2xl glass px-4 py-3 text-base outline-none"
				}),
				open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-strong rounded-2xl p-4 space-y-2 animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.title,
							onChange: (e) => setForm({
								...form,
								title: e.target.value
							}),
							placeholder: t("reports.placeholder"),
							className: "w-full rounded-xl glass px-3 py-2.5 text-base font-heading font-bold outline-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.substance,
							onChange: (e) => setForm({
								...form,
								substance: e.target.value
							}),
							placeholder: t("nav.substances"),
							className: "w-full rounded-xl glass px-3 py-2.5 text-base outline-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: form.excerpt,
							onChange: (e) => setForm({
								...form,
								excerpt: e.target.value
							}),
							placeholder: t("reports.bodyPh"),
							rows: 4,
							className: "w-full rounded-xl glass px-3 py-2.5 text-base outline-none resize-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: publish,
							className: "rounded-full bg-clay-500 text-white px-4 py-2 text-sm font-semibold",
							children: t("common.save")
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: list.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						role: "button",
						tabIndex: 0,
						onClick: () => setDetail(r),
						onKeyDown: (e) => {
							if (e.key === "Enter") setDetail(r);
						},
						className: "glass-strong rounded-2xl p-4 card-hover text-left cursor-pointer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] font-heading font-semibold text-clay-500",
								children: [
									r.source,
									" · ",
									r.year,
									" · ",
									r.substance
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-heading font-bold text-sand-900 dark:text-sand-50",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-sand-600 dark:text-sand-300 leading-relaxed line-clamp-3",
								children: r.excerpt
							})
						]
					}, r.id))
				}),
				detail && typeof document !== "undefined" ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed inset-0 z-[90] bg-sand-200/55 dark:bg-black/50 backdrop-blur-sm px-4 flex items-center justify-center",
					style: {
						paddingTop: "env(safe-area-inset-top)",
						paddingBottom: "env(safe-area-inset-bottom)"
					},
					onClick: () => setDetail(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full max-w-lg max-h-[78vh] overflow-y-auto glass-strong glass-modal rounded-3xl p-5 animate-spring-in",
						onClick: (e) => e.stopPropagation(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] font-heading font-semibold text-clay-500",
									children: [
										detail.source,
										" · ",
										detail.year,
										" · ",
										detail.author
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 font-heading text-xl font-bold text-sand-900 dark:text-sand-50",
									children: detail.title
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setDetail(null),
									className: "rounded-full glass p-2",
									"aria-label": t("common.close"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed whitespace-pre-wrap text-sand-700 dark:text-sand-200",
								children: detail.body || detail.excerpt
							}),
							detail.slug ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/substance/$slug",
								params: { slug: detail.slug },
								className: "mt-4 inline-block text-sm font-semibold text-clay-500",
								onClick: () => setDetail(null),
								children: detail.substance
							}) : null,
							detail.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: detail.url,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-2 block text-xs text-sand-400",
								children: detail.url
							}) : null
						]
					})
				}), document.body) : null
			]
		})
	});
}
var Route$13 = createFileRoute("/harm-scale")({ component: HarmPage });
function valueOf(s, k) {
	return k === "total" ? harmTotal(s) : s.harm[k];
}
function HarmPage() {
	const { t, locale } = useI18n();
	const [key, setKey] = (0, import_react.useState)("total");
	const [dir, setDir] = (0, import_react.useState)("desc");
	const list = (0, import_react.useMemo)(() => {
		return [...substances].sort((a, b) => {
			const d = valueOf(a, key);
			const u = valueOf(b, key);
			return dir === "desc" ? u - d : d - u;
		});
	}, [key, dir]);
	const labels = {
		total: t("harm.total"),
		physical: t("harm.physical"),
		dependence: t("harm.dependence"),
		social: t("harm.social")
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
					kicker: t("harm.kicker"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-3.5 w-3.5" }),
					title: t("harm.title"),
					subtitle: t("harm.subtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2 justify-center",
					children: Object.keys(labels).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							if (key === k) setDir((d) => d === "desc" ? "asc" : "desc");
							else {
								setKey(k);
								setDir("desc");
							}
						},
						className: `rounded-full px-3.5 py-1.5 text-sm font-semibold ${key === k ? "bg-clay-500 text-white" : "glass text-sand-700 dark:text-sand-200"}`,
						children: [
							labels[k],
							" ",
							key === k ? dir === "desc" ? "↓" : "↑" : ""
						]
					}, k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-1.5",
					children: list.slice(0, 80).map((s, i) => {
						const v = valueOf(s, key);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/substance/$slug",
							params: { slug: s.slug },
							className: "glass rounded-xl px-3 py-2.5 flex items-center gap-3 hover:scale-[1.01] transition-transform",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-6 text-xs font-bold text-sand-400",
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg w-8 text-center",
									children: s.emoji
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 min-w-0 font-semibold text-sand-900 dark:text-sand-50 truncate",
									children: localizedName(s, locale, s.name)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-28 sm:w-40 h-2 rounded-full bg-sand-200/60 dark:bg-sand-800/60 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full",
										style: {
											width: `${Math.min(100, v)}%`,
											background: s.color
										}
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-8 text-right font-heading font-bold text-clay-500",
									children: v
								})
							]
						}, s.slug);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-xs text-sand-400 dark:text-sand-500",
					children: "Inspiré des travaux de Nutt et al. sur les dommages relatifs. Les scores TakoLogs sont indicatifs."
				})
			]
		})
	});
}
var Route$12 = createFileRoute("/legal")({ component: LegalPage });
function LegalPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
					kicker: `TakoLogs v${APP_VERSION}`,
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3.5 w-3.5" }),
					title: t("legal.title"),
					subtitle: t("legal.subtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "mentions",
					className: "glass-strong rounded-2xl p-5 space-y-3 text-sm leading-relaxed text-sand-700 dark:text-sand-200",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-heading text-xl font-bold text-sand-900 dark:text-sand-50",
							children: t("legal.mentionsTitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("legal.mentions1") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("legal.mentions2") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("legal.mentions3") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("legal.mentions4") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("legal.mentions5") })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "privacy",
					className: "glass-strong rounded-2xl p-5 space-y-3 text-sm leading-relaxed text-sand-700 dark:text-sand-200",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-heading text-xl font-bold text-sand-900 dark:text-sand-50",
							children: t("legal.privacyTitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("legal.privacy1") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("legal.privacy2") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("legal.privacy3") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("legal.privacy4") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("legal.privacy5") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("legal.privacy6") })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "cookies",
					className: "glass-strong rounded-2xl p-5 space-y-3 text-sm leading-relaxed text-sand-700 dark:text-sand-200",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-heading text-xl font-bold text-sand-900 dark:text-sand-50",
							children: t("cookies.policyTitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("cookies.p1") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("cookies.p2") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("cookies.p3") })
					]
				})
			]
		})
	});
}
function PasswordInput({ value, onChange, placeholder, autoComplete, minLength, required, id }) {
	const [show, setShow] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1.5 flex items-center gap-2 rounded-xl glass px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-sand-500 shrink-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id,
				type: show ? "text" : "password",
				required,
				minLength,
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder,
				className: "w-full bg-transparent outline-none text-base text-sand-900 dark:text-sand-50 placeholder:text-sand-400",
				autoComplete
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setShow((v) => !v),
				className: "shrink-0 rounded-full p-1 text-sand-500 hover:text-clay-500",
				"aria-label": show ? "Masquer le mot de passe" : "Afficher le mot de passe",
				children: show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
			})
		]
	});
}
var ALPH = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function code() {
	return Array.from({ length: 5 }, () => ALPH[Math.floor(Math.random() * 32)]).join("");
}
function paint(canvas, text, hue) {
	const ctx = canvas.getContext("2d");
	if (!ctx) return;
	const w = canvas.width;
	const h = canvas.height;
	ctx.clearRect(0, 0, w, h);
	ctx.fillStyle = `hsl(${hue} 42% 92%)`;
	ctx.fillRect(0, 0, w, h);
	for (let i = 0; i < 18; i++) {
		ctx.strokeStyle = `hsla(${hue} 40% 40% / ${.12 + Math.random() * .2})`;
		ctx.beginPath();
		ctx.moveTo(Math.random() * w, Math.random() * h);
		ctx.lineTo(Math.random() * w, Math.random() * h);
		ctx.stroke();
	}
	ctx.font = "700 28px \"Josefin Sans\", Avenir, sans-serif";
	ctx.textBaseline = "middle";
	const gap = w / (text.length + 1);
	for (let i = 0; i < text.length; i++) {
		ctx.save();
		const x = gap * (i + 1);
		const y = h / 2 + (Math.random() - .5) * 8;
		ctx.translate(x, y);
		ctx.rotate((Math.random() - .5) * .4);
		ctx.fillStyle = `hsl(${hue} 42% ${28 + Math.random() * 14}%)`;
		ctx.fillText(text[i], -10, 0);
		ctx.restore();
	}
}
function HumanCaptcha({ onValid }) {
	const { t } = useI18n();
	const canvasRef = (0, import_react.useRef)(null);
	const [secret, setSecret] = (0, import_react.useState)(code);
	const [value, setValue] = (0, import_react.useState)("");
	const started = (0, import_react.useRef)(Date.now());
	const redraw = (next = secret) => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const hue = Number(getComputedStyle(document.documentElement).getPropertyValue("--accent-h").trim() || 36);
		paint(canvas, next, Number.isFinite(hue) ? hue : 36);
	};
	(0, import_react.useEffect)(() => {
		redraw();
	}, [secret]);
	(0, import_react.useEffect)(() => {
		const check = () => onValid(value.trim().toUpperCase() === secret && Date.now() - started.current > 900);
		check();
		const id = window.setTimeout(check, 950);
		return () => window.clearTimeout(id);
	}, [
		value,
		secret,
		onValid
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold text-sand-600 dark:text-sand-300",
				children: t("login.captcha")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					width: 180,
					height: 56,
					className: "rounded-xl border border-sand-300/50 dark:border-sand-700/40 bg-sand-100",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						const n = code();
						setSecret(n);
						setValue("");
						started.current = Date.now();
						onValid(false);
					},
					className: "rounded-full glass p-2 text-sand-600",
					"aria-label": t("common.reset"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value,
				onChange: (e) => setValue(e.target.value.toUpperCase()),
				placeholder: t("login.captchaPh"),
				className: "w-full rounded-xl glass px-3 py-2.5 text-base tracking-[0.35em] uppercase outline-none text-sand-900 dark:text-sand-50",
				autoComplete: "off",
				autoCapitalize: "characters",
				spellCheck: false,
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "text",
				name: "company",
				tabIndex: -1,
				autoComplete: "off",
				className: "absolute -left-[9999px] h-0 w-0 opacity-0",
				"aria-hidden": true
			})
		]
	});
}
var Route$11 = createFileRoute("/login")({
	validateSearch: (s) => ({ next: typeof s.next === "string" && s.next.startsWith("/") && !s.next.startsWith("//") ? s.next : void 0 }),
	component: Login
});
function mapAuthError(message, t) {
	const e = (message ?? "").toLowerCase();
	if (!e) return t("login.errGeneric");
	if (e.includes("invalid") || e.includes("credential")) return t("login.errCreds");
	if (e.includes("already registered") || e.includes("already been registered")) return t("login.errExists");
	if (e.includes("password")) return t("login.errPassword");
	if (e.includes("rate")) return t("login.errRate");
	return message || t("login.errGeneric");
}
function Login() {
	const { t, locale } = useI18n();
	const { next } = useSearch({ strict: false });
	const dest = next || "/logs";
	const { user, isPending } = useCurrentUserState();
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("login");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	const [human, setHuman] = (0, import_react.useState)(false);
	const [newsletter, setNewsletter] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!isPending && user) navigate({ to: dest });
	}, [
		isPending,
		user,
		dest,
		navigate
	]);
	const submit = async (e) => {
		e.preventDefault();
		setError(null);
		if (mode === "signup" && !human) {
			setError(t("login.captchaNeed"));
			return;
		}
		const trap = new FormData(e.currentTarget).get("company");
		if (typeof trap === "string" && trap.trim()) return;
		setBusy(true);
		try {
			if (mode === "forgot") {
				await requestPasswordReset({
					email,
					locale: locale === "en" ? "en" : "fr",
					kind: "reset"
				});
				setSent(true);
				return;
			}
			if (mode === "signup") {
				const name = email.split("@")[0] || "TakoLogs";
				const { error: err } = await authClient.signUp.email({
					email,
					password,
					name
				});
				if (err) {
					setError(mapAuthError(err.message, t));
					return;
				}
				try {
					const { loadUsers, saveUsers } = await import("./user-store-DnZjU9eL.mjs");
					const users = loadUsers();
					const u = users.find((x) => x.email === email.trim().toLowerCase());
					if (u) {
						u.newsletter = newsletter;
						saveUsers(users);
					}
				} catch {}
				sendWelcomeEmail({
					email,
					locale: locale === "en" ? "en" : "fr",
					newsletter
				});
				const { error: signErr } = await authClient.signIn.email({
					email,
					password
				});
				if (signErr) {
					setError(mapAuthError(signErr.message, t));
					return;
				}
			} else {
				const { error: err } = await authClient.signIn.email({
					email,
					password
				});
				if (err) {
					setError(mapAuthError(err.message, t));
					return;
				}
			}
			navigate({ to: dest });
		} catch (err) {
			setError(err instanceof Error ? mapAuthError(err.message, t) : t("login.errUnexpected"));
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-16 pb-24 flex items-center justify-center min-h-[70vh]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TakoLogo, { className: "h-16 w-16 mx-auto logo-tinted" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-heading text-3xl font-bold text-sand-900 dark:text-sand-50",
							children: mode === "forgot" ? t("login.reset") : mode === "login" ? t("login.login") : t("login.signup")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-sand-600 dark:text-sand-300",
							children: mode === "forgot" ? t("login.resetBody") : mode === "login" ? t("login.loginBody") : t("login.signupBody")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [sent && mode === "forgot" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 glass-strong rounded-3xl p-6 text-center space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-sand-700 dark:text-sand-200",
						children: t("login.resetSent")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setSent(false);
							setMode("login");
						},
						className: "text-sm font-semibold text-clay-500",
						children: t("login.switchLogin")
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => void submit(e),
					className: "relative z-20 mt-8 glass-strong rounded-3xl p-6 space-y-4 animate-fade-up pointer-events-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-xs font-semibold text-sand-600 dark:text-sand-300",
							children: [t("login.email"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex items-center gap-2 rounded-xl glass px-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-sand-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									required: true,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: t("login.emailPh"),
									className: "w-full bg-transparent outline-none text-base text-sand-900 dark:text-sand-50 placeholder:text-sand-400",
									autoComplete: "email"
								})]
							})]
						}),
						mode !== "forgot" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-xs font-semibold text-sand-600 dark:text-sand-300",
							children: [t("login.password"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
								value: password,
								onChange: setPassword,
								placeholder: t("login.passwordPh"),
								required: true,
								minLength: 6,
								autoComplete: mode === "login" ? "current-password" : "new-password"
							})]
						}) : null,
						mode === "signup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HumanCaptcha, { onValid: setHuman }) : null,
						mode === "signup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-2 text-sm text-sand-700 dark:text-sand-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: newsletter,
								onChange: (e) => setNewsletter(e.target.checked),
								className: "mt-0.5 h-4 w-4 accent-clay-500"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("login.newsletter") })]
						}) : null,
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-red-500/15 border border-red-400/30 px-4 py-3 text-sm text-red-700 dark:text-red-300",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: busy,
							className: "relative z-30 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-clay-500 text-white py-3 text-sm font-bold shadow-lg shadow-clay-500/25 hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-60 pointer-events-auto",
							children: [busy ? t("common.loading") : mode === "login" ? t("login.submitLogin") : mode === "forgot" ? t("login.reset") : t("login.submitSignup"), !busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setMode(mode === "login" ? "signup" : "login");
								setError(null);
								setHuman(false);
							},
							className: "w-full text-center text-sm text-sand-600 dark:text-sand-300 hover:text-clay-500 transition-colors",
							children: mode === "login" ? t("login.switchSignup") : t("login.switchLogin")
						}),
						mode === "login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setMode("forgot");
								setError(null);
								setBusy(false);
							},
							className: "relative z-30 w-full text-center text-sm font-semibold text-clay-500 pointer-events-auto py-2",
							children: t("login.forgot")
						}) : mode === "forgot" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setMode("login");
								setError(null);
								setBusy(false);
							},
							className: "w-full text-center text-sm text-sand-600 dark:text-sand-300",
							children: t("login.switchLogin")
						}) : null
					]
				}), GROK_PROVIDERS.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-center gap-3 text-xs text-sand-400",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 h-px bg-sand-300/50 dark:bg-sand-700/50" }),
						t("login.or"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 h-px bg-sand-300/50 dark:bg-sand-700/50" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-2 gap-2",
					children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void signIn(p.providerId, { callbackURL: dest }),
						className: "rounded-xl glass py-2.5 text-sm font-semibold text-sand-800 dark:text-sand-100 hover:scale-[1.02] transition-transform",
						children: p.label
					}, p.providerId))
				})] }) : null] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-center text-xs text-sand-400 dark:text-sand-500",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "inline h-3 w-3" }),
						" ",
						t("login.private")
					]
				})
			]
		})
	});
}
var $$splitComponentImporter = () => import("./logs-DdKNQX7Q.mjs");
var Route$10 = createFileRoute("/logs")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var Route$9 = createFileRoute("/neuro")({ component: NeuroPage });
function NeuroPage() {
	const { t } = useI18n();
	const [nt, setNt] = (0, import_react.useState)("serotonin");
	const info = neurotransmitters[nt];
	const related = substances.filter((s) => s.neurotransmitters.includes(nt));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
					kicker: t("neuro.kicker"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-3.5 w-3.5" }),
					title: t("neuro.title"),
					subtitle: t("neuro.subtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2 justify-center",
					children: Object.entries(neurotransmitters).map(([id, n]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setNt(id),
						className: `flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition-transform hover:scale-105 ${nt === id ? "text-white shadow-lg" : "glass text-sand-700 dark:text-sand-200"}`,
						style: nt === id ? { background: n.color } : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-2 w-2 rounded-full",
							style: { background: n.color }
						}), (() => {
							const lab = t(`nt.${id}`);
							return lab.startsWith("nt.") ? n.label : lab;
						})()]
					}, id))
				}),
				info ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 glass-strong rounded-3xl p-6 sm:p-8 animate-fade-up",
					style: { borderColor: `${info.color}55` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-heading text-2xl font-bold",
							style: { color: info.color },
							children: (() => {
								const lab = t(`nt.${nt}`);
								return lab.startsWith("nt.") ? info.label : lab;
							})()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sand-700 dark:text-sand-200 leading-relaxed",
							children: (() => {
								const role = t(`nt.${nt}Role`);
								return role.startsWith("nt.") ? info.role : role;
							})()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 320 90",
							className: "mt-6 w-full h-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "ntg",
									x1: "0",
									x2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: info.color,
										stopOpacity: "0.2"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: info.color
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M10 45 C 80 10, 120 80, 160 45 S 250 10, 310 45",
									fill: "none",
									stroke: info.color,
									strokeWidth: "3",
									opacity: "0.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									r: "6",
									fill: info.color,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
										dur: "2.8s",
										repeatCount: "indefinite",
										path: "M10 45 C 80 10, 120 80, 160 45 S 250 10, 310 45"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									r: "4",
									fill: info.color,
									opacity: "0.7",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
										dur: "2.8s",
										begin: "0.9s",
										repeatCount: "indefinite",
										path: "M10 45 C 80 10, 120 80, 160 45 S 250 10, 310 45"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "12",
									y: "82",
									fontSize: "11",
									fill: "currentColor",
									children: "axon"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "250",
									y: "82",
									fontSize: "11",
									fill: "currentColor",
									children: "synapse"
								})
							]
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "mt-10 font-heading text-xl font-bold text-sand-900 dark:text-sand-50",
					children: [t("neuro.related"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-sm font-semibold text-sand-400",
						children: related.length
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid sm:grid-cols-2 gap-4",
					children: related.slice(0, 24).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubstanceCard, { sub: s }, s.slug))
				}),
				related.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-sand-500",
					children: t("neuro.empty")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/substances",
						className: "text-clay-500 font-semibold text-sm",
						children: t("neuro.library")
					})
				})
			]
		})
	});
}
var EMOJIS = [
	"🐙",
	"🍄",
	"💊",
	"🌿",
	"⚡",
	"🌈",
	"🧪",
	"❄️",
	"🫧",
	"🔥",
	"🌸",
	"🌙",
	"☀️",
	"💜",
	"💙",
	"💚",
	"❤️",
	"⭐",
	"🧿",
	"🌀",
	"🍬",
	"🍷",
	"🧠",
	"💫",
	"🦋",
	"🌊",
	"🍃",
	"🪨",
	"🔮",
	"💎",
	"🪐",
	"🍵",
	"🍯",
	"☁️",
	"🦊",
	"🐸",
	"🐝",
	"🌵",
	"🦄",
	"🍋",
	"🍇",
	"🌶️",
	"🧊",
	"✨",
	"🎯",
	"🪲",
	"🦉",
	"🐢",
	"🚬",
	"💉"
];
function EmojiPicker({ value, onChange, compact }) {
	const { t } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [custom, setCustom] = (0, import_react.useState)(value);
	const [pos, setPos] = (0, import_react.useState)({
		top: 0,
		left: 0
	});
	const btnRef = (0, import_react.useRef)(null);
	const panelRef = (0, import_react.useRef)(null);
	const unique = (0, import_react.useMemo)(() => Array.from(new Set(EMOJIS)), []);
	(0, import_react.useEffect)(() => setCustom(value), [value]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onDown = (e) => {
			const t = e.target;
			if (btnRef.current?.contains(t) || panelRef.current?.contains(t)) return;
			setOpen(false);
		};
		document.addEventListener("mousedown", onDown);
		return () => document.removeEventListener("mousedown", onDown);
	}, [open]);
	const toggle = () => {
		const r = btnRef.current?.getBoundingClientRect();
		if (r) {
			const left = Math.min(r.left, window.innerWidth - 280);
			const top = r.bottom + 8;
			setPos({
				top: top + 280 > window.innerHeight ? Math.max(8, r.top - 268) : top,
				left: Math.max(8, left)
			});
		}
		setOpen((v) => !v);
	};
	const panel = open ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: panelRef,
		className: "fixed z-[200] w-72 glass-strong rounded-2xl p-3 shadow-2xl animate-fade-up",
		style: {
			top: pos.top,
			left: pos.left
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold text-sand-600 dark:text-sand-300 mb-2",
				children: t("add.emoji")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-8 gap-1",
				children: unique.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						onChange(e);
						setOpen(false);
					},
					className: `h-8 w-8 rounded-lg text-lg hover:bg-sand-200/60 dark:hover:bg-sand-800/50 ${value === e ? "bg-clay-500/20 ring-1 ring-clay-500" : ""}`,
					children: e
				}, e))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: custom,
				onChange: (e) => {
					const v = e.target.value.slice(0, 8);
					setCustom(v);
					if (v.trim()) onChange(v.trim());
				},
				placeholder: "🙂",
				className: "mt-2 w-full rounded-xl glass px-3 py-2 text-base outline-none text-sand-900 dark:text-sand-50",
				"aria-label": t("add.emoji")
			})
		]
	}), document.body) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref: btnRef,
		type: "button",
		onClick: toggle,
		className: `rounded-xl glass flex items-center justify-center hover:scale-105 transition-transform relative z-[1] ${compact ? "h-10 w-10 text-xl" : "h-11 w-11 text-2xl"}`,
		title: t("substance.editEmoji"),
		"aria-label": t("substance.editEmoji"),
		children: value || "🐙"
	}), panel] });
}
var Route$8 = createFileRoute("/profile")({ component: ProfilePage });
function ProfilePage() {
	const { t, pref, setPref, locale } = useI18n();
	const { hue, setHue, reset } = useAccent();
	const { pref: themePref, setPref: setTheme } = useTheme();
	const { user } = useCurrentUserState();
	const { emojis, setEmoji, clearEmojis, displayName, setDisplayName, reduceMotion, setReduceMotion, favorites, toggleFavorite, resolveEmoji, resolveColor, setColor, colors, aliases, setAlias, resolveName, avatar, setAvatar } = usePrefs();
	const [msg, setMsg] = (0, import_react.useState)(null);
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const [pw, setPw] = (0, import_react.useState)({
		current: "",
		next: ""
	});
	const [notifyOn, setNotifyOn] = (0, import_react.useState)(() => typeof window === "undefined" ? false : notifyEnabled());
	const [emailEdit, setEmailEdit] = (0, import_react.useState)("");
	const [mailCfg, setMailCfg] = (0, import_react.useState)(() => typeof window === "undefined" ? {
		apiKey: "",
		from: DEFAULT_MAIL_FROM
	} : loadMailConfig());
	const [mailTo, setMailTo] = (0, import_react.useState)("");
	const [mailBusy, setMailBusy] = (0, import_react.useState)(false);
	const [xaiKey, setXaiKey] = (0, import_react.useState)(() => typeof window === "undefined" ? "" : loadXaiKey());
	const [skinQ, setSkinQ] = (0, import_react.useState)("");
	const [skinPick, setSkinPick] = (0, import_react.useState)("");
	const fileRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!mailTo && user?.primaryEmail) setMailTo(user.primaryEmail);
	}, [user, mailTo]);
	const sendTestMail = () => {
		const to = (mailTo || user?.primaryEmail || "").trim();
		saveMailConfig(mailCfg);
		if (!mailCfg.apiKey.startsWith("re_")) {
			setMsg(t("accountExtra.resendNeed"));
			return;
		}
		if (!to.includes("@")) {
			setMsg(t("login.emailPh"));
			return;
		}
		setMailBusy(true);
		setMsg(null);
		import("./mail-api-BjIfhYAx.mjs").then(({ sendAppMail }) => sendAppMail({ data: {
			to,
			subject: resetSubject(locale === "en" ? "en" : "fr", "reset"),
			html: renderResetEmail({
				locale: locale === "en" ? "en" : "fr",
				link: `${window.location.origin}${window.location.pathname}#/reset?token=test`,
				kind: "reset"
			}),
			apiKey: mailCfg.apiKey,
			from: mailCfg.from || "TakoLogs <noreply@mail.takohelp.com>"
		} })).then((r) => {
			setMsg(r.ok ? t("accountExtra.resendTestOk") : `${t("accountExtra.resendFail")}${r.error ? ` (${r.error})` : ""}`);
		}).finally(() => setMailBusy(false));
	};
	const emojiEntries = Object.entries(emojis).filter(([, v]) => v);
	const exportJournal = async () => {
		try {
			const data = await loadJournal();
			const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `takologs-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
			a.click();
			URL.revokeObjectURL(url);
		} catch {
			setMsg(t("login.privateBody"));
		}
	};
	const exportCsv = async () => {
		try {
			const data = await loadJournal();
			const csv = experiencesToCsv(data.experiences);
			const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `takologs-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
			a.click();
			URL.revokeObjectURL(url);
		} catch {
			setMsg(t("login.privateBody"));
		}
	};
	const importJournal = async (file) => {
		try {
			const text = await file.text();
			const res = await importJournalDump({ data: { experiences: normalizeJournalImport(JSON.parse(text)) } });
			setMsg(t("profile.importOk", { n: res.imported }));
		} catch {
			setMsg(t("login.errGeneric"));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
					kicker: t("nav.profile"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-3.5 w-3.5" }),
					title: t("profile.title"),
					subtitle: t("profile.subtitle")
				}),
				msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "relative z-50 rounded-2xl bg-clay-500/15 text-clay-600 dark:text-clay-400 px-4 py-3 text-sm font-semibold",
					children: msg
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "relative z-50 rounded-2xl p-5 space-y-3 bg-sand-50 dark:bg-sand-900 isolate",
					onSubmit: (e) => {
						e.preventDefault();
						sendTestMail();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50",
							children: t("accountExtra.resendTitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-sand-500 dark:text-sand-400",
							children: [
								t("accountExtra.resendHint"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://resend.com/api-keys",
									target: "_blank",
									rel: "noreferrer",
									className: "text-clay-500 font-semibold",
									children: "resend.com/api-keys"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
							value: mailCfg.apiKey,
							onChange: (v) => {
								const next = {
									...mailCfg,
									apiKey: v
								};
								setMailCfg(next);
								saveMailConfig(next);
							},
							placeholder: "re_…",
							autoComplete: "off"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: mailCfg.from,
							onChange: (e) => {
								const next = {
									...mailCfg,
									from: e.target.value
								};
								setMailCfg(next);
								saveMailConfig(next);
							},
							placeholder: t("accountExtra.resendFrom"),
							className: "relative z-50 w-full rounded-xl px-3 py-3 text-base outline-none bg-sand-100 dark:bg-sand-800 text-sand-900 dark:text-sand-50"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							autoComplete: "email",
							inputMode: "email",
							value: mailTo,
							onChange: (e) => setMailTo(e.target.value),
							placeholder: user?.primaryEmail || t("login.emailPh"),
							className: "relative z-50 w-full rounded-xl px-3 py-3 text-base outline-none bg-sand-100 dark:bg-sand-800 text-sand-900 dark:text-sand-50"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: mailBusy,
							className: "relative z-50 w-full min-h-12 rounded-full bg-clay-500 text-white px-3 py-3 text-sm font-semibold pointer-events-auto disabled:opacity-60",
							children: mailBusy ? t("common.loading") : t("accountExtra.resendTest")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative z-50 rounded-2xl p-5 space-y-3 bg-sand-50 dark:bg-sand-900 isolate",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50",
							children: t("accountExtra.xaiTitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-sand-500 dark:text-sand-400",
							children: [
								t("accountExtra.xaiHint"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://console.x.ai",
									target: "_blank",
									rel: "noreferrer",
									className: "text-clay-500 font-semibold",
									children: "console.x.ai"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
							value: xaiKey,
							onChange: (v) => {
								setXaiKey(v);
								saveXaiKey(v);
							},
							placeholder: "xai-…",
							autoComplete: "off"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass-strong rounded-2xl p-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50 flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4 text-clay-500" }),
								" ",
								t("common.language")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-sand-500 dark:text-sand-400",
							children: t("profile.regionNote")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								"auto",
								"fr",
								"en"
							].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPref(p),
								className: `rounded-full px-3.5 py-2 text-sm font-semibold ${pref === p ? "bg-clay-500 text-white" : "glass text-sand-700 dark:text-sand-200"}`,
								children: p === "auto" ? t("common.detectRegion") : p === "fr" ? t("common.french") : t("common.english")
							}, p))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-sand-400",
							children: locale === "fr" ? "Français" : "English"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass-strong rounded-2xl p-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50 flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "h-4 w-4 text-clay-500" }),
								" ",
								t("profile.appearance")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-sand-600 dark:text-sand-300",
							children: t("common.theme")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								[
									"auto",
									SunMoon,
									t("common.auto")
								],
								[
									"light",
									Sun,
									t("common.light")
								],
								[
									"dark",
									Moon,
									t("common.dark")
								]
							].map(([id, Icon, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setTheme(id),
								className: `inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold ${themePref === id ? "bg-clay-500 text-white" : "glass text-sand-700 dark:text-sand-200"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }),
									" ",
									label
								]
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-sand-600 dark:text-sand-300",
								children: t("common.color")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: reset,
								className: "text-xs font-semibold text-sand-500 hover:text-clay-500",
								children: t("common.reset")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-8 gap-2",
							children: ACCENT_PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setHue(p.hue),
								title: p.name,
								className: `h-8 w-8 rounded-full ring-2 ${hue === p.hue ? "ring-sand-900 dark:ring-sand-50" : "ring-transparent"}`,
								style: { backgroundColor: p.hue < 0 ? "#8a8a8a" : `hsl(${p.hue} 45% 54%)` }
							}, p.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: 359,
							value: hue,
							onChange: (e) => setHue(Number(e.target.value)),
							className: "w-full h-2 rounded-full appearance-none cursor-pointer",
							style: { background: "linear-gradient(to right, hsl(0 45% 54%), hsl(60 45% 54%), hsl(120 45% 54%), hsl(180 45% 54%), hsl(240 45% 54%), hsl(300 45% 54%), hsl(360 45% 54%))" },
							"aria-label": t("common.customHue")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center justify-between gap-3 text-sm font-semibold text-sand-700 dark:text-sand-200",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [t("profile.motion"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs font-normal text-sand-500 mt-0.5",
								children: t("profile.motionHint")
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: reduceMotion,
								onChange: (e) => setReduceMotion(e.target.checked),
								className: "h-5 w-5 accent-clay-500"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass-strong rounded-2xl p-5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50",
							children: t("profile.account")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-xs font-semibold text-sand-600 dark:text-sand-300",
							children: [t("profile.displayName"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: displayName,
								onChange: (e) => setDisplayName(e.target.value),
								placeholder: t("profile.displayNamePh"),
								className: "mt-1 w-full rounded-xl glass px-3 py-2.5 text-base text-sand-900 dark:text-sand-50 outline-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-clay-500/35 bg-clay-500/10 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-heading text-sm font-bold text-sand-900 dark:text-sand-50",
									children: t("accountExtra.photo")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs text-sand-500",
									children: t("accountExtra.photoHint")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative h-20 w-20 shrink-0 rounded-full bg-sand-200 dark:bg-sand-800 overflow-hidden ring-2 ring-clay-500/50",
										children: avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: avatar,
											alt: "",
											className: "h-full w-full object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "absolute inset-0 m-auto h-9 w-9 text-sand-400" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-4 py-2.5 text-sm font-semibold cursor-pointer hover:scale-105 transition-transform",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-4 w-4" }),
											t("accountExtra.photoChange"),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "file",
												accept: "image/*",
												className: "sr-only",
												onChange: (e) => {
													const f = e.target.files?.[0];
													e.target.value = "";
													if (!f || f.size > 12e5) return;
													const r = new FileReader();
													r.onload = () => setAvatar(String(r.result ?? ""));
													r.readAsDataURL(f);
												}
											})
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm font-semibold text-sand-700 dark:text-sand-200",
								children: [t("notify.enable"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs font-normal text-sand-500 mt-0.5",
									children: t("notify.hint")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "switch",
								"aria-checked": notifyOn,
								onClick: () => {
									if (notifyOn) {
										setNotifyEnabled(false);
										setNotifyOn(false);
										return;
									}
									requestNotify().then((ok) => setNotifyOn(ok));
								},
								className: `relative h-7 w-12 shrink-0 rounded-full transition-colors ${notifyOn ? "bg-clay-500" : "bg-sand-300 dark:bg-sand-700"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${notifyOn ? "translate-x-5" : "translate-x-0.5"}` })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void sendTestNotify(),
							className: "w-full inline-flex items-center justify-center gap-2 rounded-xl bg-clay-500 text-white py-2.5 text-sm font-semibold hover:scale-[1.01] active:scale-95 transition-transform",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), t("notify.testBtn")]
						}),
						user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "space-y-2",
							onSubmit: (e) => {
								e.preventDefault();
								const fn = authClient.changePassword;
								if (!fn) {
									setMsg(t("login.errGeneric"));
									return;
								}
								fn({
									currentPassword: pw.current,
									newPassword: pw.next
								}).then((res) => {
									if (res?.error) setMsg(res.error.message || t("login.errGeneric"));
									else {
										setMsg(t("login.resetSent"));
										setPw({
											current: "",
											next: ""
										});
									}
								});
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-sand-600",
									children: t("accountExtra.password")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
									value: pw.current,
									onChange: (v) => setPw({
										...pw,
										current: v
									}),
									placeholder: t("accountExtra.current"),
									autoComplete: "current-password"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
									value: pw.next,
									onChange: (v) => setPw({
										...pw,
										next: v
									}),
									placeholder: t("accountExtra.next"),
									minLength: 6,
									autoComplete: "new-password"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "rounded-full glass px-3 py-2 text-sm font-semibold",
									children: t("common.save")
								})
							]
						}) : null,
						user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "space-y-2",
							onSubmit: (e) => {
								e.preventDefault();
								const fn = authClient.changeEmail;
								if (!fn || !emailEdit.trim()) return;
								fn({
									email: emailEdit,
									newEmail: emailEdit
								}).then((res) => {
									if (res?.error) setMsg(res.error.message || t("login.errGeneric"));
									else setMsg(t("accountExtra.changed"));
								});
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								placeholder: t("accountExtra.email"),
								value: emailEdit,
								onChange: (e) => setEmailEdit(e.target.value),
								className: "w-full rounded-xl glass px-3 py-2.5 text-base outline-none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "rounded-full glass px-3 py-2 text-sm font-semibold",
								children: t("common.save")
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								if (!confirm(t("accountExtra.resetHint"))) return;
								Object.keys(localStorage).filter((k) => k.startsWith("takologs")).forEach((k) => localStorage.removeItem(k));
								window.location.assign("#/");
								window.location.reload();
							},
							className: "rounded-full bg-red-500/15 text-red-700 dark:text-red-300 px-3 py-2 text-sm font-semibold",
							children: t("accountExtra.resetApp")
						}),
						user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-sand-600 dark:text-sand-300",
								children: t("profile.signedInAs", { name: user.displayName || user.primaryEmail || "TakoLogs" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: signingOut,
								onClick: () => {
									setSigningOut(true);
									signOut().catch(() => setSigningOut(false));
								},
								className: "inline-flex items-center gap-1.5 rounded-full glass px-3 py-2 text-sm font-semibold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }),
									" ",
									t("common.signOut")
								]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/login",
							search: { next: "/profile" },
							className: "inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-4 py-2.5 text-sm font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4" }),
								" ",
								t("common.signIn")
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass-strong rounded-2xl p-5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50 flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-clay-500" }),
								" ",
								t("profile.emojis")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-sand-500",
							children: t("profile.emojisHint")
						}),
						emojiEntries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-sand-400",
							children: t("profile.noEmojis")
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: emojiEntries.map(([key, emoji]) => {
								const known = findSubstanceByName(key);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 rounded-xl glass px-3 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmojiPicker, {
										value: emoji,
										onChange: (e) => setEmoji(key, e),
										compact: true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-sand-900 dark:text-sand-50",
										children: known?.name ?? key
									})]
								}, key);
							})
						}),
						emojiEntries.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: clearEmojis,
							className: "text-xs font-semibold text-sand-500 hover:text-red-500",
							children: t("profile.clearEmojis")
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass-strong rounded-2xl p-5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50",
							children: t("profile.skins")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-sand-500",
							children: t("profile.skinsHint")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: skinQ,
							onChange: (e) => setSkinQ(e.target.value),
							placeholder: t("substances.searchPh"),
							className: "w-full rounded-xl glass px-3 py-2.5 text-base outline-none"
						}),
						skinQ.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5 max-h-28 overflow-y-auto",
							children: searchSubstances(skinQ).slice(0, 12).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setSkinPick(s.slug);
									setSkinQ(s.name);
								},
								className: `rounded-full px-2.5 py-1 text-xs font-semibold ${skinPick === s.slug ? "bg-clay-500 text-white" : "glass"}`,
								children: [
									resolveEmoji(s.slug, s.name, s.emoji),
									" ",
									resolveName(s.slug, s.name)
								]
							}, s.slug))
						}) : null,
						(() => {
							const s = getSubstance(skinPick) || findSubstanceByName(skinQ);
							if (!s) return null;
							const col = resolveColor(s.slug, s.name, s.color);
							const em = resolveEmoji(s.slug, s.name, s.emoji);
							const nm = resolveName(s.slug, s.name);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl glass p-3 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-heading font-bold",
										style: { color: col },
										children: [
											em,
											" ",
											nm
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-xs text-sand-500",
										children: [t("profile.editName"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: aliases[s.slug] ?? "",
											onChange: (e) => setAlias(s.slug, e.target.value),
											placeholder: s.name,
											className: "mt-1 w-full rounded-xl glass px-3 py-2 text-sm outline-none text-sand-900 dark:text-sand-50"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-sand-500",
											children: t("profile.editEmoji")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmojiPicker, {
											value: em,
											onChange: (v) => setEmoji(s.slug, v),
											compact: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-2 items-center",
										children: [INGESTION_COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setColor(s.slug, c),
											className: `h-7 w-7 rounded-full ring-2 ${col === c ? "ring-sand-900 dark:ring-sand-50" : "ring-transparent"}`,
											style: { background: c }
										}, c)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "color",
											value: col,
											onChange: (e) => setColor(s.slug, e.target.value),
											className: "h-7 w-9 cursor-pointer bg-transparent",
											"aria-label": t("add.color")
										})]
									})
								]
							});
						})(),
						Object.keys(colors).length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: Object.entries(colors).map(([k, c]) => {
								const known = getSubstance(k) || findSubstanceByName(k);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full px-2.5 py-1 text-xs font-semibold",
									style: {
										background: `${c}22`,
										color: c
									},
									children: [
										resolveEmoji(k, known?.name ?? k, known?.emoji ?? "•"),
										" ",
										resolveName(k, known?.name ?? k)
									]
								}, k);
							})
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass-strong rounded-2xl p-5 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50",
						children: t("profile.favorites")
					}), favorites.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-sand-400",
						children: t("profile.noFavorites")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: favorites.map((slug) => {
							const known = getSubstance(slug);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => toggleFavorite(slug),
								className: "rounded-full glass px-3 py-1.5 text-sm font-semibold",
								children: [
									resolveEmoji(slug, known?.name ?? slug, known?.emoji ?? "⭐"),
									" ",
									resolveName(slug, known?.name ?? slug)
								]
							}, slug);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "glass-strong rounded-2xl p-5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50",
							children: t("profile.data")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-sand-500 dark:text-sand-400",
							children: t("profile.dataHint")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void exportJournal(),
									className: "inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-4 py-2.5 text-sm font-semibold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }),
										" ",
										t("profile.export")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => void exportCsv(),
									className: "inline-flex items-center gap-2 rounded-full glass px-4 py-2.5 text-sm font-semibold text-sand-700 dark:text-sand-200",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }),
										" ",
										t("profile.csv")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => fileRef.current?.click(),
									className: "inline-flex items-center gap-2 rounded-full glass px-4 py-2.5 text-sm font-semibold text-sand-700 dark:text-sand-200",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }),
										" ",
										t("profile.import")
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: fileRef,
									type: "file",
									accept: "application/json,.json",
									className: "hidden",
									onChange: (e) => {
										const f = e.target.files?.[0];
										if (f) importJournal(f);
										e.target.value = "";
									}
								})
							]
						}),
						msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-sand-600 dark:text-sand-300",
							children: msg
						}) : null
					]
				})
			]
		})
	});
}
var resources_default = {
	tips: [
		{
			"title": "Testez vos produits",
			"text": "Utilisez un kit réactif (Ehrlich, Marquis, Mandelin) pour identifier la substance et détecter les adultérants dangereux."
		},
		{
			"title": "Hydratez-vous, mais sans excès",
			"text": "~500 ml d'eau par heure si vous dansez. Trop d'eau pure peut causer une hyponatrémie (MDMA)."
		},
		{
			"title": "Set & setting",
			"text": "L'état d'esprit et l'environnement déterminent largement l'expérience. Choisissez un lieu sûr et des personnes de confiance."
		},
		{
			"title": "Ne mélangez pas les dépresseurs",
			"text": "Alcool + benzo/opioïdes/GHB = dépression respiratoire. C'est la cause n°1 de surdose."
		}
	],
	groups: [
		{
			"title": "Urgences & empoisonnement",
			"items": [
				{
					"name": "SAMU",
					"desc": "Urgence médicale vitale",
					"phone": "15",
					"hours": "24h/24"
				},
				{
					"name": "Numéro européen d'urgence",
					"desc": "Urgences générales",
					"phone": "112",
					"hours": "24h/24"
				},
				{
					"name": "Centre antipoison",
					"desc": "Intoxication, surdose, mauvais trip",
					"phone": "Centres régionaux",
					"hours": "24h/24"
				},
				{
					"name": "SOS Médecins",
					"desc": "Consultation urgente à domicile",
					"phone": "3624",
					"hours": "24h/24"
				}
			]
		},
		{
			"title": "Aide & écoute",
			"items": [
				{
					"name": "Drogues Info Service",
					"desc": "Informations, conseil, orientation",
					"phone": "0 800 23 13 36",
					"url": "https://www.drogues-info-service.fr",
					"hours": "7j/7, 8h–20h"
				},
				{
					"name": "Écoute Alcool",
					"desc": "Aide face aux problèmes d'alcool",
					"phone": "0980 980 930",
					"url": "https://www.alcool-info-service.fr",
					"hours": "7j/7, 8h–20h"
				},
				{
					"name": "Tabac Info Service",
					"desc": "Aide au sevrage tabagique",
					"phone": "3989",
					"url": "https://www.tabac-info-service.fr",
					"hours": "Lun–Sam"
				},
				{
					"name": "Fil Santé Jeunes",
					"desc": "Écoute pour les moins de 25 ans",
					"phone": "32 24",
					"url": "https://www.filsantejeunes.com",
					"hours": "7j/7, 8h–minuit"
				},
				{
					"name": "Suicide Écoute",
					"desc": "Écoute face à la détresse",
					"phone": "01 45 39 40 00",
					"url": "https://www.suicide-ecoute.fr",
					"hours": "24h/24"
				}
			]
		},
		{
			"title": "Réduire les risques",
			"items": [
				{
					"name": "Asud",
					"desc": "Association d'auto-support des usagers de drogues",
					"url": "https://www.asud.fr"
				},
				{
					"name": "AIDES",
					"desc": "Prévention, dépistage, réduction des risques",
					"url": "https://www.aides.fr"
				},
				{
					"name": "Mémos de réduction des risques",
					"desc": "Guides pratiques par produit",
					"url": "https://www.drogues-info-service.fr"
				}
			]
		}
	]
};
var resources_en_default = {
	tips: [
		{
			"title": "Test your products",
			"text": "Use a reagent kit (Ehrlich, Marquis, Mandelin) to identify the substance and catch dangerous adulterants."
		},
		{
			"title": "Hydrate, but not too much",
			"text": "~500 ml of water per hour if you dance. Too much plain water can cause hyponatraemia (MDMA)."
		},
		{
			"title": "Set & setting",
			"text": "Mindset and environment largely shape the experience. Choose a safe place and people you trust."
		},
		{
			"title": "Don’t mix depressants",
			"text": "Alcohol + benzos/opioids/GHB = respiratory depression. It’s the #1 cause of overdose."
		}
	],
	groups: [
		{
			"title": "Emergencies & poisoning",
			"items": [
				{
					"name": "Emergency services",
					"desc": "Life-threatening medical emergency",
					"phone": "112 / 911 / 999",
					"hours": "24/7"
				},
				{
					"name": "EU emergency number",
					"desc": "General emergencies in Europe",
					"phone": "112",
					"hours": "24/7"
				},
				{
					"name": "Poison control",
					"desc": "Intoxication, overdose, bad trip",
					"phone": "Local poison centre",
					"hours": "24/7"
				},
				{
					"name": "SAMU (France)",
					"desc": "French medical emergency",
					"phone": "15",
					"hours": "24/7"
				}
			]
		},
		{
			"title": "Help & listening",
			"items": [
				{
					"name": "FRANK (UK)",
					"desc": "Honest drugs advice",
					"phone": "0300 123 6600",
					"url": "https://www.talktofrank.com",
					"hours": "24/7"
				},
				{
					"name": "SAMHSA (US)",
					"desc": "Substance use helpline",
					"phone": "1-800-662-HELP",
					"url": "https://www.samhsa.gov",
					"hours": "24/7"
				},
				{
					"name": "Drogues Info Service",
					"desc": "Info, advice, referral (France)",
					"phone": "0 800 23 13 36",
					"url": "https://www.drogues-info-service.fr",
					"hours": "7 days, 8am–8pm"
				},
				{
					"name": "IASP",
					"desc": "Find a local suicide helpline",
					"url": "https://www.iasp.info/suicidalthoughts/",
					"hours": "Directory"
				}
			]
		},
		{
			"title": "Harm reduction",
			"items": [
				{
					"name": "DanceSafe",
					"desc": "Peer harm reduction and reagent testing",
					"url": "https://dancesafe.org"
				},
				{
					"name": "Energy Control",
					"desc": "Drug checking and harm-reduction info",
					"url": "https://energycontrol.org"
				},
				{
					"name": "PsychonautWiki",
					"desc": "Dosages, durations, interactions",
					"url": "https://psychonautwiki.org"
				}
			]
		}
	]
};
var Route$7 = createFileRoute("/reduction")({ component: ReductionPage });
var TIP_ICONS = [
	FlaskConical,
	Droplets,
	Users,
	ShieldAlert
];
function ReductionPage() {
	const { t, locale } = useI18n();
	const resources = locale === "en" ? resources_en_default : resources_default;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
					kicker: t("reduction.kicker"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-3.5 w-3.5" }),
					title: t("reduction.title"),
					subtitle: t("reduction.subtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 rounded-2xl bg-gradient-to-r from-red-500/15 to-clay-500/15 border border-red-400/30 p-5 animate-fade-up",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-red-500 p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-6 w-6 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-heading text-lg font-bold text-red-700 dark:text-red-300",
							children: t("reduction.emergency")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-red-700 dark:text-red-300",
							children: locale === "fr" ? t("reduction.emergencyFr") : t("reduction.emergencyEn")
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid sm:grid-cols-2 gap-4",
					children: resources.tips.map((t, i) => {
						const Icon = TIP_ICONS[i] ?? ShieldAlert;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { animationDelay: `${i * 60}ms` },
							className: "glass card-hover rounded-2xl p-5 animate-fade-up",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-xl bg-clay-500/15 p-2.5 text-clay-500",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-heading text-base font-bold text-sand-900 dark:text-sand-50",
									children: t.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-sand-600 dark:text-sand-300 leading-relaxed",
								children: t.text
							})]
						}, t.title);
					})
				}),
				resources.groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-heading text-xl font-bold text-sand-900 dark:text-sand-50 mb-4",
						children: g.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 gap-3",
						children: g.items.map((a, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { animationDelay: `${n * 30}ms` },
							className: "glass card-hover rounded-2xl p-4 animate-fade-up flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-heading text-base font-bold text-sand-900 dark:text-sand-50 truncate",
										children: a.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-sand-600 dark:text-sand-300",
										children: a.desc
									}),
									"hours" in a && a.hours ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-sand-400 mt-1",
										children: a.hours
									}) : null
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "shrink-0 text-right",
								children: ["phone" in a && a.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${String(a.phone).replace(/\s/g, "")}`,
									className: "block font-heading font-bold text-clay-500",
									children: a.phone
								}) : null, "url" in a && a.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: a.url,
									target: "_blank",
									rel: "noreferrer",
									className: "text-xs font-semibold text-sand-500 hover:text-clay-500",
									children: t("reduction.site")
								}) : null]
							})]
						}, a.name))
					})]
				}, g.title)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-center text-xs text-sand-400 dark:text-sand-500",
					children: t("reduction.disclaimer")
				})
			]
		})
	});
}
var Route$6 = createFileRoute("/reset")({
	validateSearch: (s) => ({ token: typeof s.token === "string" ? s.token : "" }),
	component: ResetPage
});
function ResetPage() {
	const { t } = useI18n();
	const { token } = useSearch({ strict: false });
	const navigate = useNavigate();
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!token) return;
		if (applyResetToken(token).ok) {
			setDone(true);
			const id = window.setTimeout(() => void navigate({ to: "/login" }), 1400);
			return () => window.clearTimeout(id);
		}
	}, [token, navigate]);
	const submit = (e) => {
		e.preventDefault();
		if (!token) {
			setError(t("login.resetExpired"));
			return;
		}
		setBusy(true);
		const r = applyResetToken(token, password);
		setBusy(false);
		if (!r.ok) {
			setError(r.error === "password" ? t("login.errPassword") : t("login.resetExpired"));
			return;
		}
		navigate({ to: "/login" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-16 pb-24 flex items-center justify-center min-h-[70vh]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TakoLogo, { className: "h-16 w-16 mx-auto logo-tinted" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-heading text-3xl font-bold text-sand-900 dark:text-sand-50",
						children: t("login.reset")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-sand-600 dark:text-sand-300",
						children: done ? t("login.resetSent") : t("login.resetConfirm")
					})
				]
			}), done ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-8 glass-strong rounded-3xl p-6 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordInput, {
						value: password,
						onChange: setPassword,
						placeholder: t("login.passwordPh"),
						required: true,
						minLength: 6,
						autoComplete: "new-password"
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-xl bg-red-500/15 px-4 py-3 text-sm text-red-700 dark:text-red-300",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: busy || !token,
						className: "w-full rounded-xl bg-clay-500 text-white py-3 text-sm font-bold disabled:opacity-60",
						children: t("login.reset")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "block text-center text-sm text-clay-500",
						children: t("login.switchLogin")
					})
				]
			})]
		})
	});
}
var Route$5 = createFileRoute("/substances")({ component: SubstancesPage });
function SubstancesPage() {
	const [cat, setCat] = (0, import_react.useState)("all");
	const { requestAdd } = useAddToJournal();
	const { t } = useI18n();
	const list = (0, import_react.useMemo)(() => {
		return cat === "all" ? substances : substances.filter((u) => u.category === cat);
	}, [cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
					kicker: t("substances.kicker"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "h-3.5 w-3.5" }),
					title: t("substances.title"),
					subtitle: t("substances.subtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 mx-auto max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchHalo, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => requestOpenSearch(),
						className: "w-full glass-strong rounded-full p-2 pl-4 flex items-center gap-3 text-left hover:scale-[1.01] transition-transform bg-sand-50/90 dark:bg-transparent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5 text-clay-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 py-2.5 text-base text-sand-400 dark:text-sand-500",
							children: t("home.searchPh")
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-center text-xs text-sand-500",
						children: t("home.count", { n: list.length })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-2 justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryChip, {
						id: "all",
						active: cat === "all",
						onClick: () => setCat("all")
					}), CATEGORY_ORDER.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryChip, {
						id: d,
						active: cat === d,
						onClick: () => setCat(d)
					}, d))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: list.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubstanceCard, {
						sub: s,
						onAdd: () => requestAdd(s.slug)
					}, s.slug))
				})
			]
		})
	});
}
function StatsPanel({ experiences }) {
	const { t, dateTag, locale } = useI18n();
	const { resolveEmoji, resolveColor, resolveName } = usePrefs();
	const [span, setSpan] = (0, import_react.useState)("30d");
	const [substance, setSubstance] = (0, import_react.useState)("");
	const [route, setRoute] = (0, import_react.useState)("");
	const [q, setQ] = (0, import_react.useState)("");
	const stats = (0, import_react.useMemo)(() => computeStats(experiences, {
		span,
		substance: substance || null,
		route: route || null,
		locale: dateTag
	}), [
		experiences,
		span,
		substance,
		route,
		dateTag
	]);
	const filteredNames = (0, import_react.useMemo)(() => {
		const e = q.trim().toLowerCase();
		return stats.usedNames.filter((n) => !e || n.toLowerCase().includes(e));
	}, [stats.usedNames, q]);
	const maxRank = Math.max(1, ...stats.ranking.map((r) => r.count));
	const maxWeek = Math.max(1, ...stats.weekday.map((d) => d.count));
	const maxHour = Math.max(1, ...stats.hour.map((d) => d.count));
	const maxClass = Math.max(1, ...stats.doseClasses.map((d) => d.count));
	const barFill = "hsl(var(--accent-h) 42% 48%)";
	const weekdayLabels = locale === "fr" ? [
		"Lun",
		"Mar",
		"Mer",
		"Jeu",
		"Ven",
		"Sam",
		"Dim"
	] : [
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun"
	];
	const kpis = [
		[t("stats.ingestions"), stats.ingestions],
		[t("stats.substances"), stats.unique],
		[t("stats.daysActive"), stats.daysActive],
		[t("stats.avgPerDay"), stats.avgPerDay ? stats.avgPerDay.toFixed(1) : "0"],
		[t("stats.daysSince"), stats.daysSinceLast == null ? "—" : stats.daysSinceLast === 0 ? t("stats.today") : t("stats.lastAgo", { n: stats.daysSinceLast })]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: TIME_SPANS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSpan(s),
					className: `rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${span === s ? "bg-clay-500 text-white shadow-lg shadow-clay-500/25" : "glass text-sand-700 dark:text-sand-200"}`,
					children: t(`stats.span${s === "7d" ? "7" : s === "30d" ? "30" : s === "90d" ? "90" : s === "6m" ? "6m" : s === "1y" ? "1y" : "All"}`)
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-xs font-semibold text-sand-600 dark:text-sand-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3.5 w-3.5" }), t("stats.filterSubstance")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: t("stats.allSubstances"),
						className: "mt-2 w-full rounded-xl glass px-3 py-2.5 text-base text-sand-900 dark:text-sand-50 outline-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSubstance(""),
							className: `rounded-full px-2.5 py-1 text-xs font-semibold ${!substance ? "bg-clay-500 text-white" : "glass text-sand-600 dark:text-sand-300"}`,
							children: t("common.all")
						}), filteredNames.map((n) => {
							const known = findSubstanceByName(n);
							const emoji = resolveEmoji(known?.slug, n, known?.emoji ?? "•");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSubstance(substance === n ? "" : n),
								className: `rounded-full px-2.5 py-1 text-xs font-semibold ${substance === n ? "bg-clay-500 text-white" : "glass text-sand-700 dark:text-sand-200"}`,
								children: [
									emoji,
									" ",
									resolveName(known?.slug, n)
								]
							}, n);
						})]
					}),
					stats.usedRoutes.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setRoute(""),
							className: `rounded-full px-2.5 py-1 text-xs font-semibold ${!route ? "bg-clay-500 text-white" : "glass text-sand-600 dark:text-sand-300"}`,
							children: t("stats.allRoutes")
						}), stats.usedRoutes.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setRoute(route === r ? "" : r),
							className: `rounded-full px-2.5 py-1 text-xs font-semibold ${route === r ? "bg-clay-500 text-white" : "glass text-sand-700 dark:text-sand-200"}`,
							children: t(`route.${r}`) === `route.${r}` ? r : t(`route.${r}`)
						}, r))]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-5 gap-3",
				children: kpis.map(([label, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-4 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-heading text-xl sm:text-2xl font-bold text-clay-500",
						children: v
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-sand-500 dark:text-sand-400 mt-1",
						children: label
					})]
				}, label))
			}),
			stats.activeNow.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3 flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5 text-clay-500" }),
						" ",
						t("stats.activeNow")
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: stats.activeNow.map((a) => {
						const known = findSubstanceByName(a.ing.substanceName);
						const emoji = resolveEmoji(a.ing.slug, a.ing.substanceName, known?.emoji ?? "•");
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl glass p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-semibold text-sand-900 dark:text-sand-50",
									children: [
										emoji,
										" ",
										resolveName(a.ing.slug, a.ing.substanceName),
										a.ing.dose != null ? ` · ${a.ing.dose}${a.ing.doseUnit}` : ""
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-sand-500",
									children: t("stats.until", { time: a.endsAt.toLocaleTimeString(dateTag, {
										hour: "2-digit",
										minute: "2-digit"
									}) })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-1.5 rounded-full bg-sand-200/60 dark:bg-sand-800/60 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-clay-500",
									style: { width: `${Math.min(100, a.progress * 100)}%` }
								})
							})]
						}, a.ing.id);
					})
				})]
			}) : null,
			stats.ingestions === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass rounded-2xl p-10 text-center text-sm text-sand-500",
				children: t("stats.empty")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				stats.doseClasses.some((d) => d.count > 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3",
						children: t("stats.doseClass")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-end gap-2 h-24",
						children: stats.doseClasses.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 flex flex-col items-center justify-end h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold text-sand-500 mb-1",
									children: d.count
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full rounded-t",
									style: {
										height: `${Math.max(d.count ? 10 : 4, d.count / maxClass * 100)}%`,
										background: DOSE_CLASS_COLOR[d.id],
										opacity: d.count ? 1 : .25
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-sand-400 mt-1",
									children: t(`dose.${d.id}`)
								})
							]
						}, d.id))
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3",
						children: t("stats.overTime")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-44 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: stats.series,
								margin: {
									top: 4,
									right: 4,
									left: -24,
									bottom: 0
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "label",
										tick: {
											fontSize: 10,
											fill: "currentColor"
										},
										interval: "preserveStartEnd",
										axisLine: false,
										tickLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										allowDecimals: false,
										hide: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										cursor: { fill: "hsl(var(--accent-h) 42% 48% / 0.12)" },
										contentStyle: {
											background: "var(--glass-bg-strong)",
											border: "1px solid var(--glass-border)",
											borderRadius: 12,
											fontSize: 12
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "count",
										fill: barFill,
										radius: [
											6,
											6,
											0,
											0
										]
									})
								]
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3",
						children: t("stats.ranking")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: stats.ranking.slice(0, 12).map((r) => {
							const known = findSubstanceByName(r.name);
							const emoji = resolveEmoji(r.slug, r.name, known?.emoji ?? "•");
							const days = Math.floor((Date.now() - new Date(r.last).getTime()) / 864e5);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-sm mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-sand-900 dark:text-sand-50 truncate",
									children: [
										emoji,
										" ",
										resolveName(r.slug, r.name)
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-sand-500 shrink-0 ml-2",
									children: [
										t("stats.uses", { n: r.count }),
										r.doseTotal != null ? ` · ${r.doseTotal}${r.unit}` : "",
										" · ",
										days === 0 ? t("stats.today") : t("stats.lastAgo", { n: days })
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 rounded-full bg-sand-200/50 dark:bg-sand-800/50 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full",
									style: {
										width: `${r.count / maxRank * 100}%`,
										background: resolveColor(r.slug, r.name, r.color ?? barFill)
									}
								})
							})] }, r.name);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3",
						children: t("stats.heatmap")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heatmap, {
						cells: stats.heatmap,
						max: stats.maxHeat
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3",
							children: t("stats.weekday")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-end gap-1.5 h-24",
							children: stats.weekday.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 flex flex-col items-center justify-end h-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full rounded-t bg-clay-500",
									style: { height: `${Math.max(6, d.count / maxWeek * 100)}%` }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-sand-400 mt-1",
									children: weekdayLabels[i]
								})]
							}, d.day))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3 flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
									" ",
									t("stats.hour")
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-end gap-px h-24",
								children: stats.hour.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-1 rounded-t bg-clay-500",
									style: {
										height: `${Math.max(d.count ? 8 : 3, d.count / maxHour * 100)}%`,
										opacity: d.count ? 1 : .25
									},
									title: `${d.hour}h · ${d.count}`
								}, d.hour))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[10px] text-sand-400 mt-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0h" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "12h" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "23h" })
								]
							})
						]
					})]
				}),
				stats.routes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-sand-500 dark:text-sand-400 mb-3",
						children: t("stats.routes")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: stats.routes.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full glass px-3 py-1.5 text-xs font-semibold text-sand-700 dark:text-sand-200",
							children: [
								t(`route.${r.name}`) === `route.${r.name}` ? r.name : t(`route.${r.name}`),
								" ",
								"· ",
								r.count
							]
						}, r.name))
					})]
				}) : null
			] })
		]
	});
}
function Heatmap({ cells, max }) {
	const { dateTag, locale } = useI18n();
	const labels = locale === "fr" ? [
		"L",
		"M",
		"M",
		"J",
		"V",
		"S",
		"D"
	] : [
		"M",
		"T",
		"W",
		"T",
		"F",
		"S",
		"S"
	];
	const offset = ((cells[0] ? /* @__PURE__ */ new Date(cells[0].date + "T00:00:00") : /* @__PURE__ */ new Date()).getDay() + 6) % 7;
	const padded = [...Array.from({ length: offset }, () => null), ...cells];
	const weeks = Math.ceil(padded.length / 7);
	const months = [];
	padded.forEach((c, i) => {
		if (!c) return;
		const d = /* @__PURE__ */ new Date(c.date + "T00:00:00");
		if (d.getDate() <= 7 && i % 7 === 0) months.push({
			label: d.toLocaleDateString(dateTag, { month: "short" }),
			col: Math.floor(i / 7)
		});
	});
	const hexAlpha = (hex, a) => {
		const h = hex.replace("#", "");
		if (h.length !== 6) return hex;
		return `#${h}${Math.round(Math.min(1, Math.max(.2, a)) * 255).toString(16).padStart(2, "0")}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-x-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-1 text-[10px] text-sand-400 mb-1 pl-5",
			children: Array.from({ length: weeks }, (_, w) => {
				const m = months.find((x) => x.col === w);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 min-w-[10px] truncate",
					children: m?.label ?? ""
				}, w);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-1 text-[9px] text-sand-400 pt-0.5",
				children: labels.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-[10px] leading-[10px]",
					children: i % 2 === 0 ? l : ""
				}, `${l}-${i}`))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-1 flex-1",
				style: {
					gridTemplateRows: "repeat(7, minmax(0, 1fr))",
					gridAutoFlow: "column",
					gridAutoColumns: "minmax(10px, 1fr)"
				},
				children: padded.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					title: c ? `${(/* @__PURE__ */ new Date(c.date + "T00:00:00")).toLocaleDateString(dateTag, {
						weekday: "long",
						day: "numeric",
						month: "long"
					})} · ${c.count}` : void 0,
					className: "aspect-square rounded-[3px]",
					style: { background: !c ? "transparent" : c.count === 0 ? "hsl(var(--accent-h) 20% 50% / 0.1)" : c.color ? hexAlpha(c.color, .28 + c.count / max * .72) : `hsl(var(--accent-h) 42% 48% / ${.25 + c.count / max * .75})` }
				}, c?.date ?? `e-${i}`))
			})]
		})]
	});
}
function dayKey(iso) {
	const d = new Date(iso);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function minutesOfDay(iso) {
	const d = new Date(iso);
	return d.getHours() * 60 + d.getMinutes();
}
function TimelinePanel({ experiences }) {
	const { t, dateTag } = useI18n();
	const { resolveEmoji, resolveColor, resolveName } = usePrefs();
	const [dayFilter, setDayFilter] = (0, import_react.useState)("");
	const rows = (0, import_react.useMemo)(() => {
		const out = [];
		for (const exp of experiences) for (const ing of exp.ingestions) {
			const sub = findSubstanceByName(ing.substanceName);
			const dur = sub ? durationCurve(sub).total : 240;
			out.push({
				ing,
				day: dayKey(ing.ingestionTime),
				startMin: minutesOfDay(ing.ingestionTime),
				durMin: dur,
				color: resolveColor(sub?.slug ?? ing.slug, ing.substanceName, sub?.color ?? ing.color ?? "#b07a45"),
				title: exp.title
			});
		}
		return out.sort((a, b) => b.day.localeCompare(a.day) || a.startMin - b.startMin);
	}, [experiences, resolveColor]);
	const days = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const r of rows) {
			if (dayFilter && r.day !== dayFilter) continue;
			const list = map.get(r.day) ?? [];
			list.push(r);
			map.set(r.day, list);
		}
		return Array.from(map.entries());
	}, [rows, dayFilter]);
	const uniqueDays = (0, import_react.useMemo)(() => Array.from(new Set(rows.map((r) => r.day))), [rows]);
	if (rows.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "glass rounded-2xl p-10 text-center text-sm text-sand-500",
		children: t("timeline.empty")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3 flex-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-sand-500 dark:text-sand-400 flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }),
					" ",
					t("timeline.subtitle")
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				value: dayFilter,
				onChange: (e) => setDayFilter(e.target.value),
				className: "rounded-full glass px-3 py-2 text-sm text-sand-900 dark:text-sand-50 outline-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: t("timeline.allDays")
				}), uniqueDays.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: d,
					children: (/* @__PURE__ */ new Date(d + "T00:00:00")).toLocaleDateString(dateTag, {
						weekday: "short",
						day: "numeric",
						month: "short"
					})
				}, d))]
			})]
		}), days.map(([day, list]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayTrack, {
			day,
			rows: list,
			dateTag,
			emojiOf: (ing) => {
				const known = findSubstanceByName(ing.substanceName);
				return resolveEmoji(ing.slug ?? known?.slug, ing.substanceName, known?.emoji ?? "•");
			},
			labelOf: (ing) => resolveName(ing.slug, ing.substanceName)
		}, day))]
	});
}
function DayTrack({ day, rows, dateTag, emojiOf, labelOf }) {
	const { t } = useI18n();
	const label = (/* @__PURE__ */ new Date(day + "T00:00:00")).toLocaleDateString(dateTag, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	const hours = [
		0,
		6,
		12,
		18,
		24
	];
	const [scrub, setScrub] = (0, import_react.useState)(null);
	const pick = (e) => {
		const r = e.currentTarget.getBoundingClientRect();
		const cx = "touches" in e && e.touches[0] ? e.touches[0].clientX : e.clientX;
		setScrub({
			t: Math.min(1, Math.max(0, (cx - r.left) / r.width)),
			left: cx,
			top: Math.max(12, r.top - 8)
		});
	};
	const min = scrub == null ? null : Math.round(scrub.t * 1440);
	const clock = min == null ? null : `${String(Math.floor(min / 60) % 24).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`;
	const atMin = min == null ? [] : rows.filter((r) => min >= r.startMin && min <= r.startMin + r.durMin);
	const now = /* @__PURE__ */ new Date();
	const nowPct = day === `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}` ? (now.getHours() * 60 + now.getMinutes()) / 1440 * 100 : null;
	const target = min == null ? null : new Date(now.getFullYear(), now.getMonth(), now.getDate(), Math.floor(min / 60), min % 60);
	const deltaMs = target ? target.getTime() - Date.now() : 0;
	const fr = dateTag.toLowerCase().startsWith("fr");
	const delta = min == null ? "" : (() => {
		const m = Math.round(Math.abs(deltaMs) / 6e4);
		const lab = m < 60 ? `${m} min` : `${Math.floor(m / 60)} h`;
		if (deltaMs >= 0) return fr ? `dans ${lab}` : `in ${lab}`;
		return fr ? `il y a ${lab}` : `${lab} ago`;
	})();
	const tip = clock && scrub ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl glass-strong glass-modal px-3 py-2 text-[11px] font-heading font-bold pointer-events-none min-w-[8rem] max-w-[16rem] shadow-xl",
		style: {
			position: "absolute",
			left: `${scrub.t * 100}%`,
			top: 0,
			transform: "translate(-50%, -100%)",
			zIndex: 20
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			clock,
			" · ",
			delta
		] }), atMin.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-1.5 space-y-1 font-sans font-semibold",
			children: atMin.slice(0, 5).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-1.5 truncate",
				style: { color: r.color },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2.5 w-2.5 rounded-full shrink-0 ring-1 ring-black/10",
						style: { background: r.color }
					}),
					emojiOf(r.ing),
					" ",
					labelOf(r.ing),
					r.ing.dose != null ? ` ${r.ing.dose}${r.ing.doseUnit}` : ""
				]
			}, r.ing.id))
		}) : null]
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-2xl p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-heading font-bold text-sand-900 dark:text-sand-50 capitalize mb-3",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative cursor-crosshair",
			onMouseMove: pick,
			onClick: pick,
			onTouchStart: pick,
			onTouchMove: pick,
			onMouseLeave: () => setScrub(null),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-between text-[10px] font-semibold text-sand-400 mb-1",
					children: hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [h, "h"] }, h))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative space-y-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 pointer-events-none flex justify-between",
							children: hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-full bg-sand-300/50 dark:bg-sand-700/40" }, h))
						}),
						nowPct != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-0 bottom-0 w-px bg-clay-500 z-[1] pointer-events-none",
							style: { left: `${nowPct}%` }
						}) : null,
						scrub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-0 bottom-0 w-px bg-sand-800/50 dark:bg-sand-100/50 z-[1] pointer-events-none",
							style: { left: `${scrub.t * 100}%` }
						}) : null,
						rows.map((r) => {
							const left = r.startMin / 1440 * 100;
							const width = Math.max(1.6, r.durMin / 1440 * 100);
							const clipped = Math.min(width, 100 - left);
							const start = new Date(r.ing.ingestionTime).toLocaleTimeString(dateTag, {
								hour: "2-digit",
								minute: "2-digit"
							});
							const endMin = Math.min(1440, r.startMin + r.durMin);
							const endH = `${String(Math.floor(endMin / 60) % 24).padStart(2, "0")}:${String(endMin % 60).padStart(2, "0")}`;
							const hot = min != null && min >= r.startMin && min <= r.startMin + r.durMin;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative h-9",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-0.5 h-8 rounded-full px-2 flex items-center gap-1.5 text-[11px] font-semibold text-white shadow-sm overflow-hidden",
									style: {
										left: `${left}%`,
										width: `${clipped}%`,
										background: r.color,
										outline: hot ? "2px solid white" : void 0,
										opacity: scrub && !hot ? .45 : 1
									},
									title: `${labelOf(r.ing)} · ${start} → ${endH}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: emojiOf(r.ing) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "truncate",
										children: [
											labelOf(r.ing),
											r.ing.dose != null ? ` ${r.ing.dose}${r.ing.doseUnit}` : "",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "opacity-80",
												children: [" · ", start]
											})
										]
									})]
								})
							}, r.ing.id);
						})
					]
				}),
				tip,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[11px] text-sand-400",
					children: t("timeline.barsHint")
				})
			]
		})]
	});
}
var Route$4 = createFileRoute("/logs/")({ component: LogsPage });
function LogsPage() {
	const { user, isPending } = useCurrentUserState();
	const navigate = useNavigate();
	const { t, dateTag } = useI18n();
	const { syncFromExperiences, resolveEmoji, resolveName } = usePrefs();
	const [exps, setExps] = (0, import_react.useState)([]);
	const [tol, setTol] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [tab, setTab] = (0, import_react.useState)("journal");
	const [filter, setFilter] = (0, import_react.useState)("");
	const [timeMode, setTimeMode] = (0, import_react.useState)("clock");
	const userId = user?.id;
	const refresh = (0, import_react.useCallback)(async () => {
		if (!userId) {
			setLoading(false);
			return;
		}
		setLoading(true);
		try {
			const data = await loadJournal();
			setExps(data.experiences);
			setTol(data.tolerance);
			syncFromExperiences(data.experiences);
		} catch {
			setExps([]);
			setTol([]);
		} finally {
			setLoading(false);
		}
	}, [userId, syncFromExperiences]);
	(0, import_react.useEffect)(() => {
		refresh();
	}, [refresh]);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-20 text-center text-sand-500",
		children: t("common.loading")
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-16 pb-24 text-center animate-fade-up",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-md glass-strong rounded-3xl p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotebookPen, { className: "h-12 w-12 text-clay-500 mx-auto" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-heading text-2xl font-bold text-sand-900 dark:text-sand-50",
					children: t("logs.signInTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-sand-600 dark:text-sand-300",
					children: t("logs.signInBody")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/login",
					search: { next: "/logs" },
					className: "mt-6 inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-clay-500/25 hover:scale-105 transition-transform",
					children: [
						t("common.signIn"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4" })
					]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-6 pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between animate-fade-up gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-heading text-3xl sm:text-4xl font-bold text-sand-900 dark:text-sand-50",
						children: t("logs.title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-sand-600 dark:text-sand-300",
						children: t("logs.subtitle")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/logs/new",
						className: "inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-4 py-2.5 text-sm font-semibold shadow-lg shadow-clay-500/25 hover:scale-105 transition-transform",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }),
							" ",
							t("logs.new")
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex gap-1 p-1 glass rounded-full w-full sm:w-auto",
					children: [
						"journal",
						"stats",
						"tolerance"
					].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTab(id),
						className: `flex-1 sm:flex-none rounded-full px-4 py-1.5 text-sm font-semibold ${tab === id ? "bg-clay-500 text-white" : "text-sand-600 dark:text-sand-300"}`,
						children: id === "journal" ? t("logs.tabJournal") : id === "stats" ? t("logs.tabStats") : t("logs.tabTolerance")
					}, id))
				}),
				tab === "stats" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsPanel, { experiences: exps }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelinePanel, { experiences: exps }),
						exps.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50",
								children: t("logs.tabJournal")
							}), exps.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, {
								exp: e,
								index: i,
								onDelete: () => {
									if (!confirm(t("logs.deleteConfirm"))) return;
									deleteExperience({ data: e.id }).then(refresh);
								},
								onOpen: () => void navigate({
									to: "/logs/$id",
									params: { id: e.id }
								}),
								dateTag,
								t,
								timeMode,
								emojiOf: (name, slug) => resolveEmoji(slug, name, findSubstanceByName(name)?.emoji ?? "•"),
								labelOf: (name, slug) => resolveName(slug, name)
							}, e.id))]
						}) : null
					]
				}) : tab === "tolerance" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-heading text-xl font-bold text-sand-900 dark:text-sand-50",
							children: t("logs.tolerance")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-sand-500 dark:text-sand-400 mt-1",
							children: t("logs.toleranceHint")
						}),
						tol.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-sand-400",
							children: t("logs.noTolerance")
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-3",
							children: tol.map((item) => {
								const last = /* @__PURE__ */ new Date(item.lastTakenDate + "T00:00:00");
								const today = /* @__PURE__ */ new Date();
								today.setHours(0, 0, 0, 0);
								const days = Math.floor((today.getTime() - last.getTime()) / 864e5);
								const remaining = item.resetDays - days;
								const passed = remaining <= 0;
								const known = findSubstanceByName(item.substanceName);
								const emoji = resolveEmoji(known?.slug, item.substanceName, known?.emoji ?? "•");
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `glass rounded-2xl p-4 border-l-4 ${passed ? "border-l-emerald-500" : "border-l-amber-500"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-heading font-bold text-sand-900 dark:text-sand-50",
											children: [
												emoji,
												" ",
												resolveName(known?.slug, item.substanceName)
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-sand-500",
											children: t("logs.lastTaken", { date: last.toLocaleDateString(dateTag, {
												weekday: "long",
												day: "numeric",
												month: "long",
												year: "numeric"
											}) })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-block mt-2 text-xs font-bold rounded-full px-2.5 py-1 ${passed ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400" : "bg-amber-500/15 text-amber-700 dark:text-amber-400"}`,
											children: passed ? t("logs.tolReset") : t("logs.tolActive", { n: Math.max(0, remaining) })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												min: 1,
												defaultValue: item.resetDays,
												className: "w-16 rounded-lg glass px-2 py-1 text-base",
												onBlur: (e) => {
													const v = parseInt(e.target.value, 10);
													if (v >= 1) updateToleranceDays({ data: {
														id: item.id,
														days: v
													} }).then(() => refresh());
												}
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-sand-400",
												children: t("logs.resetDays")
											})]
										})
									]
								}, item.id);
							})
						})
					]
				}) : loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center text-sand-500",
					children: t("common.loading")
				}) : exps.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 glass rounded-2xl p-12 text-center animate-fade-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotebookPen, { className: "h-10 w-10 text-sand-400 mx-auto" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sand-600 dark:text-sand-300",
							children: t("logs.empty")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/logs/new",
							className: "mt-4 inline-block text-clay-500 font-semibold",
							children: t("logs.createFirst")
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: filter,
							onChange: (e) => setFilter(e.target.value),
							placeholder: t("logs.searchPh"),
							className: "w-full rounded-full spotlight-glass px-4 py-2.5 text-base text-sand-900 dark:text-sand-50 outline-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: [
								"clock",
								"ago",
								"gap"
							].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setTimeMode(m),
								className: `rounded-full px-3 py-1 text-xs font-heading font-semibold ${timeMode === m ? "bg-clay-500 text-white" : "glass"}`,
								children: m === "clock" ? "Heure" : m === "ago" ? "Depuis" : "Intervalle"
							}, m))
						}),
						exps.filter((exp) => {
							const q = filter.trim().toLowerCase();
							if (!q) return true;
							return exp.title.toLowerCase().includes(q) || exp.notes.toLowerCase().includes(q) || exp.ingestions.some((i) => i.substanceName.toLowerCase().includes(q) || resolveName(i.slug, i.substanceName).toLowerCase().includes(q) || i.notes.toLowerCase().includes(q));
						}).map((exp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, {
							exp,
							index: i,
							dateTag,
							t,
							emojiOf: (name, slug) => {
								const known = findSubstanceByName(name);
								return resolveEmoji(slug ?? known?.slug, name, known?.emoji ?? "•");
							},
							labelOf: (name, slug) => resolveName(slug, name),
							onDelete: async () => {
								if (!confirm(t("logs.deleteConfirm"))) return;
								await deleteExperience({ data: exp.id });
								refresh();
							},
							onOpen: () => navigate({
								to: "/logs/$id",
								params: { id: exp.id }
							}),
							timeMode
						}, exp.id))
					]
				})
			]
		})
	});
}
function ExperienceCard({ exp, index, onDelete, onOpen, dateTag, t, emojiOf, labelOf, timeMode }) {
	const date = new Date(exp.experienceDate).toLocaleDateString(dateTag, {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	const warns = comboWarnings(exp.ingestions.map((i) => i.substanceName));
	const danger = warns.some((w) => w.level === "dangerous");
	const caution = warns.some((w) => w.level === "caution");
	const totals = (() => {
		const map = /* @__PURE__ */ new Map();
		exp.ingestions.forEach((u) => {
			const key = `${u.substanceName}__${u.doseUnit}`;
			const y = map.get(key);
			if (y) {
				if (u.dose != null) {
					y.total += u.dose;
					y.hasDose = true;
				}
				y.count += 1;
			} else map.set(key, {
				name: u.substanceName,
				slug: u.slug,
				unit: u.doseUnit,
				total: u.dose ?? 0,
				count: 1,
				color: u.color,
				hasDose: u.dose != null
			});
		});
		return Array.from(map.values());
	})();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: { animationDelay: `${Math.min(index * 60, 300)}ms` },
		className: "glass card-hover rounded-2xl p-5 animate-fade-up",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onOpen,
				className: "text-left min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-sand-500 dark:text-sand-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }),
							" ",
							date,
							danger || caution ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${danger ? "bg-red-500/15 text-red-600 dark:text-red-400" : "bg-amber-500/15 text-amber-700 dark:text-amber-400"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3 w-3" }),
									" ",
									danger ? t("logs.danger") : t("logs.caution")
								]
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mt-1 font-heading text-lg font-bold text-sand-900 dark:text-sand-50 truncate",
						children: [exp.feeling ? `${FEELING_SCALE.find((f) => f.n === exp.feeling)?.emoji ?? ""} ` : "", exp.title]
					}),
					totals.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-1.5",
						children: totals.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
							style: {
								background: `${d.color ?? "#b07a45"}22`,
								color: d.color ?? "#b07a45"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: emojiOf(d.name, d.slug) }),
								labelOf(d.name, d.slug),
								d.hasDose ? ` · ${d.total}${d.unit}` : "",
								d.count > 1 ? ` (${d.count}${t("logs.times")}${d.hasDose ? ` ${t("logs.stacked")}` : ""})` : ""
							]
						}, `${d.name}__${d.unit}`))
					}) : null,
					exp.ingestions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-1.5",
						children: exp.ingestions.map((ing, i) => {
							const d = new Date(ing.ingestionTime);
							let label = d.toLocaleTimeString(dateTag, {
								hour: "2-digit",
								minute: "2-digit"
							});
							if (timeMode === "ago") {
								const m = Math.max(0, Math.round((Date.now() - d.getTime()) / 6e4));
								label = m < 60 ? `${m} min` : m < 1440 ? `${Math.round(m / 60)} h` : `${Math.round(m / 1440)} j`;
							} else if (timeMode === "gap") {
								const prev = exp.ingestions[i - 1];
								if (prev) label = `+${Math.round((d.getTime() - new Date(prev.ingestionTime).getTime()) / 6e4)} min`;
							}
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] rounded-full glass px-2 py-0.5 text-sand-600 dark:text-sand-300",
								children: [
									emojiOf(ing.substanceName, ing.slug),
									" ",
									labelOf(ing.substanceName, ing.slug),
									" · ",
									label
								]
							}, ing.id);
						})
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 shrink-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							downloadExperiencePdf(exp, dateTag, totals.map((d) => ({
								name: labelOf(d.name, d.slug),
								emoji: emojiOf(d.name, d.slug),
								unit: d.unit,
								total: d.hasDose ? d.total : null,
								count: d.count,
								color: d.color ?? "#b07a45"
							})));
						},
						className: "rounded-full p-2 text-sand-400 hover:text-clay-500",
						"aria-label": "PDF",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onDelete,
						className: "rounded-full p-2 text-sand-400 hover:text-red-500 hover:bg-red-500/10 transition-colors",
						"aria-label": t("common.delete"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onOpen,
						className: "rounded-full p-2 text-sand-500 hover:text-clay-500",
						"aria-label": t("logs.open"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
					})
				]
			})]
		})
	});
}
function useVisualBox() {
	const [box, setBox] = (0, import_react.useState)({
		top: 0,
		height: 800
	});
	(0, import_react.useEffect)(() => {
		const sync = () => {
			const vv = window.visualViewport;
			setBox({
				top: vv?.offsetTop ?? 0,
				height: vv?.height ?? window.innerHeight
			});
		};
		sync();
		window.visualViewport?.addEventListener("resize", sync);
		window.visualViewport?.addEventListener("scroll", sync);
		window.addEventListener("resize", sync);
		return () => {
			window.visualViewport?.removeEventListener("resize", sync);
			window.visualViewport?.removeEventListener("scroll", sync);
			window.removeEventListener("resize", sync);
		};
	}, []);
	return box;
}
function AddSubstanceModal({ onClose, onSave, defaultDate, draft, initial, existingNames, error, onShulgin, currentShulgin, ingestionCount = 0 }) {
	const { t, locale } = useI18n();
	const box = useVisualBox();
	const { usageFor, lastDoseFor, resolveEmoji, resolveColor, resolveName, setEmoji, recordIngestion, isFavorite, toggleFavorite } = usePrefs();
	const editing = !!initial;
	const [name, setName] = (0, import_react.useState)(initial?.substanceName ?? draft?.substanceName ?? "");
	const [route, setRoute] = (0, import_react.useState)(initial?.route ?? draft?.route ?? "Orale");
	const [dose, setDose] = (0, import_react.useState)(initial?.dose != null ? String(initial.dose) : draft?.dose != null ? String(draft.dose) : "");
	const [unit, setUnit] = (0, import_react.useState)(initial?.doseUnit ?? draft?.doseUnit ?? "mg");
	const [time, setTime] = (0, import_react.useState)(initial ? localDateTimeInput(new Date(initial.ingestionTime)) : draft?.ingestionTime ?? defaultDate);
	const [notes, setNotes] = (0, import_react.useState)(initial?.notes ?? draft?.notes ?? "");
	const [color, setColor] = (0, import_react.useState)(initial?.color ?? draft?.color ?? "#c9a15a");
	const [q, setQ] = (0, import_react.useState)("");
	const [picking, setPicking] = (0, import_react.useState)(!draft && !initial);
	const [dangerOpen, setDangerOpen] = (0, import_react.useState)(false);
	const [emoji, setEmojiLocal] = (0, import_react.useState)(() => resolveEmoji(initial?.slug ?? draft?.slug, initial?.substanceName ?? draft?.substanceName ?? "", findSubstanceByName(initial?.substanceName ?? draft?.substanceName ?? "")?.emoji ?? "🐙"));
	const [shulginPick, setShulginPick] = (0, import_react.useState)(currentShulgin ?? null);
	const rankedCatalog = (0, import_react.useMemo)(() => {
		return (q.trim() ? searchSubstances(q) : [...substances]).map((s) => ({
			s,
			used: usageFor(s.name, s.slug),
			fav: isFavorite(s.slug)
		})).sort((a, b) => {
			if (!q.trim()) {
				if (a.fav !== b.fav) return a.fav ? -1 : 1;
				if (b.used !== a.used) return b.used - a.used;
			}
			return 0;
		}).slice(0, 40);
	}, [
		q,
		usageFor,
		isFavorite
	]);
	const frequent = (0, import_react.useMemo)(() => {
		if (q.trim()) return [];
		return rankedCatalog.filter((x) => x.used > 0 && !x.fav).slice(0, 8);
	}, [q, rankedCatalog]);
	const favs = (0, import_react.useMemo)(() => {
		if (q.trim()) return [];
		return rankedCatalog.filter((x) => x.fav);
	}, [q, rankedCatalog]);
	const rest = (0, import_react.useMemo)(() => {
		if (q.trim()) return rankedCatalog;
		const skip = /* @__PURE__ */ new Set([...frequent.map((x) => x.s.slug), ...favs.map((x) => x.s.slug)]);
		return rankedCatalog.filter((x) => !skip.has(x.s.slug));
	}, [
		q,
		rankedCatalog,
		frequent,
		favs
	]);
	const pairWarn = (0, import_react.useMemo)(() => name.trim() ? warningsAgainst(name.trim(), existingNames) : [], [name, existingNames]);
	const dangerous = pairWarn.filter((w) => w.level === "dangerous");
	const caution = pairWarn.filter((w) => w.level === "caution");
	const known = findSubstanceByName(name);
	const curve = known ? durationCurve(known) : null;
	const last = lastDoseFor(name, known?.slug ?? draft?.slug ?? initial?.slug);
	const table = doseTableFor(known, route, unit);
	const doseNum = dose.trim() ? Number(dose) : null;
	const currentClass = classifyDose(known, doseNum, unit, route);
	const tooHeavy = exceedsHeavy(known, doseNum, unit, route);
	const applySubstance = (s) => {
		const lastUsed = lastDoseFor(s.name, s.slug);
		setName(s.name);
		setRoute(lastUsed?.route ?? s.doses[0]?.route ?? "Orale");
		setUnit(lastUsed?.unit ?? s.doses[0]?.unit ?? "mg");
		const prefill = lastUsed?.dose != null ? String(lastUsed.dose) : s.doses[0]?.common != null ? String(s.doses[0].common) : "";
		setDose(prefill);
		setColor(resolveColor(s.slug, s.name, s.color));
		setEmojiLocal(resolveEmoji(s.slug, s.name, s.emoji));
		setPicking(false);
	};
	const useCustom = () => {
		const v = q.trim();
		if (!v) return;
		setName(v);
		setColor(INGESTION_COLORS[Math.floor(Math.random() * INGESTION_COLORS.length)]);
		const lastUsed = lastDoseFor(v);
		if (lastUsed) {
			setRoute(lastUsed.route);
			setUnit(lastUsed.unit);
			if (lastUsed.dose != null) setDose(String(lastUsed.dose));
		}
		setEmojiLocal(resolveEmoji(null, v, "🧪"));
		setPicking(false);
	};
	const payload = () => ({
		substanceName: name.trim(),
		slug: known?.slug ?? null,
		route,
		dose: dose.trim() ? Number(dose) : null,
		doseUnit: unit,
		color,
		ingestionTime: new Date(time).toISOString(),
		notes
	});
	const commit = () => {
		if (!name.trim()) return;
		const data = payload();
		const key = known?.slug ?? name.trim().toLowerCase();
		setEmoji(key, emoji);
		if (onShulgin) onShulgin(shulginPick);
		recordIngestion(data);
		onSave(data);
	};
	const trySave = () => {
		if (!name.trim()) return;
		if (dangerous.length > 0) {
			setDangerOpen(true);
			return;
		}
		commit();
	};
	const renderHit = (s, used) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full flex items-center gap-1 rounded-xl glass glass-tint",
		style: { ["--tint"]: resolveColor(s.slug, s.name, s.color) },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => applySubstance(s),
			className: "flex-1 flex items-center gap-3 p-2.5 text-left min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg w-7 text-center shrink-0",
					children: resolveEmoji(s.slug, s.name, s.emoji)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold text-sand-900 dark:text-sand-50 min-w-0 truncate",
					children: displaySubstanceName(s, locale, resolveName(s.slug, s.name))
				}),
				used > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto text-[10px] font-bold text-clay-500 shrink-0",
					children: t("add.usedN", { n: used })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto h-2 w-2 rounded-full shrink-0",
					style: { background: s.color }
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: (e) => {
				e.stopPropagation();
				toggleFavorite(s.slug);
			},
			className: "shrink-0 p-2 text-sand-400 hover:text-clay-500",
			"aria-label": t("add.favorites"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-4 w-4 ${isFavorite(s.slug) ? "fill-clay-500 text-clay-500" : ""}` })
		})]
	}, s.slug);
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed z-[90] flex justify-center items-stretch sm:items-center bg-sand-200/55 dark:bg-black/55 backdrop-blur-sm animate-fade-in",
		style: {
			top: box.top,
			left: 0,
			width: "100%",
			height: box.height,
			paddingTop: box.top < 12 ? "max(0.55rem, env(safe-area-inset-top, 0px))" : "0.5rem",
			paddingBottom: "max(0.5rem, env(safe-area-inset-bottom, 0px))",
			paddingLeft: "0.75rem",
			paddingRight: "0.75rem"
		},
		onClick: onClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-strong glass-modal rounded-2xl p-4 w-full max-w-md flex flex-col min-h-0 h-full sm:h-auto sm:max-h-full animate-fade-up",
			style: { maxHeight: "100%" },
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-3 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50",
					children: editing ? t("add.edit") : t("add.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "rounded-full p-1.5 hover:bg-sand-300/40",
					"aria-label": t("common.close"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
				})]
			}), picking ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col min-h-0 flex-1 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: t("add.searchPh"),
						className: "w-full shrink-0 rounded-xl glass px-3 py-2.5 text-base text-sand-900 dark:text-sand-50 outline-none",
						autoFocus: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-y-auto flex-1 min-h-0 space-y-1.5 overscroll-contain",
						children: [
							favs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-1 text-[11px] font-semibold uppercase tracking-wide text-sand-400",
								children: t("add.favorites")
							}), favs.map((x) => renderHit(x.s, x.used))] }) : null,
							frequent.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-sand-400",
									children: t("add.frequent")
								}),
								frequent.map((x) => renderHit(x.s, x.used)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-sand-400",
									children: t("add.catalog")
								})
							] }) : null,
							rest.map((x) => renderHit(x.s, x.used)),
							rankedCatalog.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-1 py-2 text-xs text-sand-500 dark:text-sand-400",
								children: t("add.none")
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: useCustom,
						disabled: !q.trim(),
						className: "w-full inline-flex items-center justify-center gap-2 rounded-xl border border-dashed border-sand-400/60 dark:border-sand-600/60 py-2.5 text-sm font-semibold text-sand-600 dark:text-sand-300 hover:border-clay-500 hover:text-clay-500 transition-colors disabled:opacity-40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), q.trim() ? t("add.custom", { q: q.trim() }) : t("add.customHint")]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 overflow-y-auto overflow-x-visible flex-1 min-h-0 overscroll-contain",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-xl glass px-3 py-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmojiPicker, {
								value: emoji,
								onChange: (e) => {
									setEmojiLocal(e);
									setEmoji(known?.slug ?? name.trim().toLowerCase(), e);
								},
								compact: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: t("add.name"),
								className: "min-w-0 flex-1 bg-transparent text-base font-semibold text-sand-900 dark:text-sand-50 outline-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPicking(true),
								className: "ml-auto shrink-0 text-xs text-clay-500 font-semibold",
								children: t("add.pickDb")
							})
						]
					}),
					pairWarn.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [dangerous.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2 rounded-xl bg-red-500/10 border border-red-500/30 p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-red-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-red-600 dark:text-red-400",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold",
										children: t("add.dangerWith", { other: w.other ?? "" })
									}),
									" — ",
									w.note
								]
							})]
						}, `d-${i}`)), caution.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2 rounded-xl bg-amber-500/10 border border-amber-500/30 p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-amber-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-amber-700 dark:text-amber-400",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold",
										children: t("add.cautionWith", { other: w.other ?? "" })
									}),
									" — ",
									w.note
								]
							})]
						}, `c-${i}`))]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold text-sand-600 dark:text-sand-300",
							children: t("add.color")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "color",
								value: /^#[0-9a-fA-F]{6}$/.test(color) ? color : "#c9a15a",
								onChange: (e) => setColor(e.target.value),
								className: "h-9 w-11 shrink-0 cursor-pointer rounded-lg border border-sand-300/60 dark:border-sand-600/60 bg-transparent p-0.5"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: color,
								onChange: (e) => setColor(e.target.value),
								className: "flex-1 rounded-xl glass px-3 py-2 text-base text-sand-900 dark:text-sand-50 outline-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-1.5",
							children: INGESTION_COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setColor(c),
								className: "h-6 w-6 rounded-full transition-transform hover:scale-110",
								style: {
									background: c,
									outline: color.toLowerCase() === c.toLowerCase() ? "2px solid currentColor" : "none",
									outlineOffset: 2
								}
							}, c))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs font-semibold text-sand-600 dark:text-sand-300",
								children: [t("add.route"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: route,
									onChange: (e) => setRoute(e.target.value),
									className: "mt-1 w-full rounded-xl glass px-3 py-2 text-base text-sand-900 dark:text-sand-50 outline-none",
									children: INGESTION_ROUTES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: r,
										children: t(`route.${r}`)
									}, r))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs font-semibold text-sand-600 dark:text-sand-300",
								children: [t("add.time"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "datetime-local",
									value: time,
									onChange: (e) => setTime(e.target.value),
									className: "mt-1 w-full rounded-xl glass px-3 py-2 text-base text-sand-900 dark:text-sand-50 outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs font-semibold text-sand-600 dark:text-sand-300",
								children: [t("add.dose"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									inputMode: "decimal",
									value: dose,
									onChange: (e) => setDose(e.target.value),
									placeholder: "20",
									className: "mt-1 w-full rounded-xl glass px-3 py-2 text-base text-sand-900 dark:text-sand-50 outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs font-semibold text-sand-600 dark:text-sand-300",
								children: [t("add.unit"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: unit,
									onChange: (e) => setUnit(e.target.value),
									className: "mt-1 w-full rounded-xl glass px-3 py-2 text-base text-sand-900 dark:text-sand-50 outline-none"
								})]
							})
						]
					}),
					table ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-sand-600 dark:text-sand-300 mb-1.5",
						children: t("add.pickClass")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: DOSE_KEYS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setDose(String(table[k]));
								setUnit(table.unit);
							},
							className: "rounded-full px-2.5 py-1 text-[11px] font-semibold",
							style: {
								background: currentClass === k ? DOSE_CLASS_COLOR[k] : `${DOSE_CLASS_COLOR[k]}22`,
								color: currentClass === k ? "#fff" : DOSE_CLASS_COLOR[k]
							},
							children: [
								t(`dose.${k}`),
								" · ",
								table[k],
								table.unit
							]
						}, k))
					})] }) : null,
					tooHeavy && table ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2 rounded-xl bg-red-500/10 border border-red-500/30 p-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-red-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-red-600 dark:text-red-400",
							children: t("add.exceedsHeavy", {
								n: table.heavy,
								unit: table.unit
							})
						})]
					}) : null,
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2 rounded-xl bg-red-500/10 border border-red-500/30 p-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-red-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-red-600 dark:text-red-400",
							children: error
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-sand-600 dark:text-sand-300 mb-1.5",
						children: t("shulgin.label")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: SHULGIN_SCALE.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								const next = shulginPick === s ? null : s;
								setShulginPick(next);
								onShulgin?.(next);
							},
							className: `rounded-full px-2.5 py-1 text-sm font-heading font-bold glass ${shulginPick === s ? "bg-clay-500 text-white" : ""}`,
							children: s
						}, s))
					})] }),
					ingestionCount >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl bg-amber-500/12 border border-amber-500/30 p-3 text-xs text-amber-800 dark:text-amber-200",
						children: t("care.banner")
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs font-semibold text-sand-600 dark:text-sand-300",
						children: [t("add.notes"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: notes,
							onChange: (e) => setNotes(e.target.value),
							rows: 2,
							placeholder: t("add.notesPh"),
							className: "mt-1 w-full rounded-xl glass px-3 py-2 text-base text-sand-900 dark:text-sand-50 outline-none resize-none"
						})]
					}),
					known && curve ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-sand-500 dark:text-sand-400",
						children: [
							last?.dose != null ? t("add.lastDose", {
								n: last.dose,
								unit: last.unit
							}) : t("add.commonDose", {
								n: known.doses[0]?.common ?? "—",
								unit: known.doses[0]?.unit ?? ""
							}),
							" ",
							"· ",
							t("add.onset", { n: formatMins(curve.onset) }),
							" ·",
							" ",
							t("add.duration", { n: formatMins(curve.total) })
						]
					}) : last?.dose != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-sand-500 dark:text-sand-400",
						children: t("add.lastDose", {
							n: last.dose,
							unit: last.unit
						})
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: trySave,
				className: "mt-3 shrink-0 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-clay-500 text-white py-3 text-sm font-bold shadow-lg shadow-clay-500/25 hover:scale-[1.02] active:scale-95 transition-transform",
				children: editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }),
					" ",
					t("add.save")
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }),
					" ",
					t("add.add")
				] })
			})] })]
		}), dangerOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 z-[95] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in",
			onClick: () => setDangerOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong rounded-2xl p-5 w-full max-w-sm border border-red-500/40 animate-fade-up",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-6 w-6 text-red-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-heading text-lg font-bold text-red-600 dark:text-red-400",
							children: t("add.dangerTitle")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2 mb-4",
						children: dangerous.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-red-500/10 border border-red-500/30 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-bold text-red-600 dark:text-red-400",
								children: [
									name.trim(),
									" + ",
									w.other
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-red-600/80 dark:text-red-400/80 mt-0.5",
								children: w.note
							})]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-sand-600 dark:text-sand-300 mb-4",
						children: t("add.dangerBody")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setDangerOpen(false),
							className: "flex-1 rounded-xl glass py-2.5 text-sm font-semibold text-sand-700 dark:text-sand-200",
							children: t("common.cancel")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setDangerOpen(false);
								commit();
							},
							className: "flex-1 rounded-xl bg-red-500 text-white py-2.5 text-sm font-bold hover:scale-[1.02] active:scale-95 transition-transform",
							children: t("add.addAnyway")
						})]
					})
				]
			})
		}) : null]
	}), document.body);
}
function ShareStoryButton({ title, date, ingestions }) {
	const { t, locale } = useI18n();
	const { resolveEmoji, resolveName, resolveColor } = usePrefs();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const onShare = async () => {
		if (busy) return;
		setBusy(true);
		try {
			const map = /* @__PURE__ */ new Map();
			for (const i of ingestions) {
				const key = `${i.substanceName}__${i.doseUnit}`;
				const color = resolveColor(i.slug, i.substanceName, i.color ?? "#b07a45");
				const cur = map.get(key);
				if (cur) {
					cur.total = (cur.total ?? 0) + (i.dose ?? 0);
					cur.count += 1;
				} else map.set(key, {
					name: resolveName(i.slug, i.substanceName),
					emoji: resolveEmoji(i.slug, i.substanceName, "•"),
					unit: i.doseUnit,
					total: i.dose,
					count: 1,
					color
				});
			}
			const hueRaw = Number(getComputedStyle(document.documentElement).getPropertyValue("--accent-h").trim());
			if (await shareStoryFile(await renderExperienceStory({
				title,
				date,
				locale,
				ingestions,
				rows: [...map.values()],
				hue: Number.isFinite(hueRaw) ? hueRaw : 36,
				dark: document.documentElement.classList.contains("dark"),
				warnings: comboWarnings(ingestions.map((i) => i.substanceName)).map((w) => ({
					a: w.a,
					b: w.b,
					note: w.note,
					level: w.level
				}))
			}), `takologs-${date.toISOString().slice(0, 10)}.png`, `${title} — TakoLogs`) === "download") pushToast({ title: t("share.saved") });
		} catch {
			pushToast({ title: t("share.fail") });
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => void onShare(),
		disabled: busy,
		className: "inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-sm font-semibold text-sand-800 dark:text-sand-100 hover:scale-105 transition-transform disabled:opacity-60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-3.5 w-3.5" }), busy ? t("share.busy") : t("share.btn")]
	});
}
function LogEditor({ id }) {
	const navigate = useNavigate();
	const { t, locale, dateTag } = useI18n();
	const { resolveEmoji, resolveColor, resolveName } = usePrefs();
	const isNew = !id;
	const [loaded, setLoaded] = (0, import_react.useState)(isNew);
	const [missing, setMissing] = (0, import_react.useState)(false);
	const [expId, setExpId] = (0, import_react.useState)(id ?? null);
	const [title, setTitle] = (0, import_react.useState)(() => defaultExperienceTitle("fr"));
	const [titleTouched, setTitleTouched] = (0, import_react.useState)(false);
	const [date, setDate] = (0, import_react.useState)(localDateTimeInput);
	const [notes, setNotes] = (0, import_react.useState)("");
	const [feeling, setFeeling] = (0, import_react.useState)(null);
	const [shulgin, setShulgin] = (0, import_react.useState)(null);
	const [shulginLog, setShulginLog] = (0, import_react.useState)([]);
	const [media, setMedia] = (0, import_react.useState)([]);
	const [tracks, setTracks] = (0, import_react.useState)([]);
	const [ings, setIngs] = (0, import_react.useState)([]);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [showAdd, setShowAdd] = (0, import_react.useState)(false);
	const [draft, setDraftState] = (0, import_react.useState)(null);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [addError, setAddError] = (0, import_react.useState)(null);
	const [risk, setRisk] = (0, import_react.useState)(null);
	const hydrate = (0, import_react.useCallback)((exp) => {
		setExpId(exp.id);
		setTitle(exp.title);
		setDate(toLocalInput(exp.experienceDate));
		setNotes(exp.notes);
		setFeeling(exp.feeling ?? null);
		setShulgin(exp.shulgin ?? null);
		setShulginLog(exp.shulginLog ?? []);
		setMedia(exp.media ?? []);
		setTracks(exp.tracks ?? []);
		setIngs(exp.ingestions);
	}, []);
	(0, import_react.useEffect)(() => {
		if (isNew) {
			setLoaded(true);
			const d = peekDraft();
			if (d || peekOpenAddOnLoad()) {
				setDraftState(d);
				setShowAdd(true);
			}
			return;
		}
		let cancelled = false;
		getExperience({ data: id }).then((exp) => {
			if (cancelled) return;
			if (!exp) {
				setMissing(true);
				setLoaded(true);
				return;
			}
			hydrate(exp);
			const d = peekDraft();
			if (d || peekOpenAddOnLoad()) {
				setDraftState(d);
				setShowAdd(true);
			}
			setLoaded(true);
		});
		return () => {
			cancelled = true;
		};
	}, [
		id,
		isNew,
		hydrate
	]);
	(0, import_react.useEffect)(() => {
		if (isNew && !titleTouched) setTitle(defaultExperienceTitle(locale));
	}, [
		locale,
		isNew,
		titleTouched
	]);
	(0, import_react.useEffect)(() => {
		const onOpen = () => {
			setDraftState(peekDraft());
			setShowAdd(true);
		};
		window.addEventListener(OPEN_ADD_EVENT, onOpen);
		return () => window.removeEventListener(OPEN_ADD_EVENT, onOpen);
	}, []);
	const persistMeta = async () => {
		setSaving(true);
		try {
			const savedId = await upsertExperience({ data: {
				id: expId ?? void 0,
				title: title.trim() || defaultExperienceTitle(locale, new Date(fromLocalInput(date))),
				experienceDate: fromLocalInput(date),
				notes,
				feeling,
				shulgin,
				shulginLog,
				media,
				tracks
			} });
			setExpId(savedId);
			return savedId;
		} finally {
			setSaving(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (!expId) return;
		const t = window.setTimeout(() => {
			upsertExperience({ data: {
				id: expId,
				title: title.trim() || defaultExperienceTitle(locale, new Date(fromLocalInput(date))),
				experienceDate: fromLocalInput(date),
				notes,
				feeling,
				shulgin,
				shulginLog,
				media,
				tracks
			} });
		}, 500);
		return () => window.clearTimeout(t);
	}, [
		expId,
		shulgin,
		shulginLog,
		media,
		tracks,
		feeling,
		notes,
		title,
		date,
		locale
	]);
	const handleAdd = async (input) => {
		setAddError(null);
		try {
			const savedId = await persistMeta();
			if (!savedId) throw new Error("save failed");
			const row = await addIngestion({ data: {
				experienceId: savedId,
				ingestion: input
			} });
			if (row) setIngs((prev) => [...prev, row]);
			consumeDraft();
			consumeOpenAddOnLoad();
			setDraftState(null);
			setShowAdd(false);
			const sub = findSubstanceByName(input.substanceName);
			if (isLethalLowDose(input.substanceName, sub)) setRisk({
				kind: "lethal",
				name: input.substanceName
			});
			else {
				const mix = comboWarnings([...ings.map((i) => i.substanceName), input.substanceName]).filter((w) => w.level === "dangerous");
				if (mix.length) setRisk({
					kind: "mix",
					extra: mix.map((m) => `${m.a} + ${m.b}`).join(", ")
				});
				else if (exceedsHeavy(sub, input.dose, input.doseUnit, input.route)) setRisk({
					kind: "heavy",
					name: input.substanceName
				});
			}
			if (isNew) navigate({
				to: "/logs/$id",
				params: { id: savedId },
				replace: true
			});
		} catch (err) {
			setAddError(err instanceof Error ? err.message : String(err));
		}
	};
	const handleEdit = async (input) => {
		if (!editing) return;
		const row = await updateIngestion({ data: {
			id: editing.id,
			ingestion: input
		} });
		if (row) setIngs((prev) => prev.map((i) => i.id === row.id ? row : i));
		setEditing(null);
	};
	const handleRemove = async (ingId) => {
		await deleteIngestion({ data: ingId });
		setIngs((prev) => prev.filter((i) => i.id !== ingId));
	};
	const totals = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		ings.forEach((i) => {
			if (i.dose == null) return;
			const key = `${i.substanceName}__${i.doseUnit}`;
			const cur = map.get(key);
			if (cur) {
				cur.total += i.dose;
				cur.count += 1;
			} else map.set(key, {
				name: i.substanceName,
				unit: i.doseUnit,
				total: i.dose,
				count: 1,
				color: i.color
			});
		});
		return Array.from(map.values());
	}, [ings]);
	const running = (0, import_react.useMemo)(() => {
		const acc = /* @__PURE__ */ new Map();
		const out = /* @__PURE__ */ new Map();
		ings.forEach((i) => {
			if (i.dose == null) return;
			const key = `${i.substanceName}__${i.doseUnit}`;
			const n = (acc.get(key) ?? 0) + i.dose;
			acc.set(key, n);
			out.set(i.id, n);
		});
		return out;
	}, [ings]);
	const multiKeys = (0, import_react.useMemo)(() => new Set(totals.filter((t) => t.count > 1).map((t) => `${t.name}__${t.unit}`)), [totals]);
	const warns = (0, import_react.useMemo)(() => comboWarnings(ings.map((i) => i.substanceName)), [ings]);
	if (!loaded) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-20 text-center text-sand-500",
		children: t("common.loading")
	});
	if (missing) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sand-500",
			children: t("editor.missing")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/logs",
			className: "mt-3 inline-block text-clay-500 font-semibold",
			children: t("editor.back")
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-8 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/logs",
						className: "inline-flex items-center gap-1.5 text-sm font-semibold text-sand-600 dark:text-sand-300 hover:text-clay-500 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }),
							" ",
							t("nav.logs")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-5 animate-fade-up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50",
								children: t("editor.substances")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareStoryButton, {
									title,
									date: new Date(fromLocalInput(date)),
									ingestions: ings
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setDraftState(null);
										setShowAdd(true);
									},
									className: "inline-flex items-center gap-1.5 rounded-full bg-clay-500 text-white px-3 py-1.5 text-sm font-semibold hover:scale-105 transition-transform",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }),
										" ",
										t("common.add")
									]
								})]
							})]
						}), ings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-sm text-sand-500 py-8",
							children: t("editor.none")
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCurves, {
								ingestions: ings,
								dateTag,
								showNow: true,
								shulgin,
								shulginLog
							}),
							totals.some((t) => t.count > 1) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: totals.filter((t) => t.count > 1).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
									style: {
										background: `${t.color ?? "#b07a45"}22`,
										color: t.color ?? "#b07a45"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "h-1.5 w-1.5 rounded-full",
											style: { background: t.color ?? "#b07a45" }
										}),
										resolveName(null, t.name),
										" · ",
										t.total,
										" ",
										t.unit,
										" cumulés (",
										t.count,
										" prises)"
									]
								}, `${t.name}__${t.unit}`))
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 space-y-2",
								children: ings.map((ing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IngestionRow, {
									ing,
									cumulative: multiKeys.has(`${ing.substanceName}__${ing.doseUnit}`) ? running.get(ing.id) : void 0,
									onEdit: () => setEditing(ing),
									onRemove: () => void handleRemove(ing.id),
									emoji: resolveEmoji(ing.slug, ing.substanceName, findSubstanceByName(ing.substanceName)?.emoji ?? "•"),
									dateTag,
									tint: resolveColor(ing.slug, ing.substanceName, ing.color || findSubstanceByName(ing.substanceName)?.color || "#b07a45"),
									label: resolveName(ing.slug, ing.substanceName)
								}, ing.id))
							})
						] })]
					}),
					warns.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboBanner, {
						warnings: warns,
						t
					}) : null,
					ings.length >= 2 && warns.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass rounded-2xl p-4 text-sm text-sand-500",
						children: t("editor.comboNone")
					}) : null,
					ings.length >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-strong rounded-2xl p-4 border border-amber-400/40 animate-fade-up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-heading font-bold text-amber-700 dark:text-amber-300",
							children: t("care.title")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-sand-600 dark:text-sand-300",
							children: t("care.banner")
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-strong rounded-2xl p-5 animate-fade-up space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs font-semibold text-sand-600 dark:text-sand-300",
								children: [t("editor.title"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: title,
									onChange: (e) => {
										setTitleTouched(true);
										setTitle(e.target.value);
									},
									className: "mt-1 w-full bg-transparent rounded-xl glass px-3 py-2.5 text-base font-heading font-bold text-sand-900 dark:text-sand-50 outline-none focus:ring-2 focus:ring-clay-500/40"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs font-semibold text-sand-600 dark:text-sand-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
										" ",
										t("editor.date")
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "datetime-local",
									value: date,
									onChange: (e) => setDate(e.target.value),
									className: "mt-1 w-full bg-transparent rounded-xl glass px-3 py-2.5 text-sm text-sand-900 dark:text-sand-50 outline-none focus:ring-2 focus:ring-clay-500/40"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-xs font-semibold text-sand-600 dark:text-sand-300",
								children: [t("editor.notes"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: notes,
									onChange: (e) => setNotes(e.target.value),
									rows: 3,
									placeholder: t("editor.notesPh"),
									className: "mt-1 w-full bg-transparent rounded-xl glass px-3 py-2.5 text-sm text-sand-900 dark:text-sand-50 outline-none focus:ring-2 focus:ring-clay-500/40 resize-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-sand-600 dark:text-sand-300 mb-1.5",
								children: t("feeling.label")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1.5",
								children: FEELING_SCALE.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setFeeling(feeling === f.n ? null : f.n),
									className: `h-10 w-10 rounded-full text-lg glass ${feeling === f.n ? "ring-2 ring-clay-500 scale-110" : "opacity-70"}`,
									title: `${t("feeling.label")} ${f.n}`,
									children: f.emoji
								}, f.n))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-sand-600 dark:text-sand-300 mb-1.5",
									children: t("shulgin.label")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5",
									children: SHULGIN_SCALE.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											const next = [...shulginLog, {
												time: (/* @__PURE__ */ new Date()).toISOString(),
												level: s
											}];
											setShulgin(s);
											setShulginLog(next);
											upsertExperience({ data: {
												id: expId ?? void 0,
												title: title.trim() || defaultExperienceTitle(locale, new Date(fromLocalInput(date))),
												experienceDate: fromLocalInput(date),
												notes,
												feeling,
												shulgin: s,
												shulginLog: next,
												media,
												tracks
											} }).then((id) => {
												if (id) setExpId(id);
											});
										},
										className: `rounded-full px-2.5 py-1 text-sm font-heading font-bold glass ${shulgin === s ? "bg-clay-500 text-white" : ""}`,
										children: s
									}, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[11px] text-sand-400",
									children: t("shulgin.hint")
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-sand-600 dark:text-sand-300 mb-1.5",
									children: t("media.label")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "inline-flex items-center gap-2 rounded-full glass px-3 py-2 text-sm font-semibold cursor-pointer",
									children: [t("media.add"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "image/*,video/*",
										className: "hidden",
										onChange: (e) => {
											const file = e.target.files?.[0];
											e.target.value = "";
											if (!file) return;
											if (file.size > 4e6) {
												setAddError("Fichier trop lourd (max 4 Mo).");
												return;
											}
											const reader = new FileReader();
											reader.onload = () => {
												const dataUrl = String(reader.result ?? "");
												setMedia((prev) => [...prev.slice(0, 5), {
													id: uuid(),
													name: file.name,
													dataUrl,
													kind: file.type.startsWith("video") ? "video" : "image"
												}]);
											};
											reader.readAsDataURL(file);
										}
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex flex-wrap gap-2",
									children: media.map((m) => m.kind === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
										src: m.dataUrl,
										className: "h-20 rounded-xl",
										controls: true
									}, m.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: m.dataUrl,
										alt: "",
										className: "h-20 rounded-xl object-cover"
									}, m.id))
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceMusic, {
								tracks,
								onChange: setTracks
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									persistMeta().then((savedId) => {
										if (isNew && savedId) navigate({
											to: "/logs/$id",
											params: { id: savedId },
											replace: true
										});
									});
								},
								disabled: saving,
								className: "inline-flex items-center gap-2 rounded-full bg-sand-800 dark:bg-sand-100 text-sand-50 dark:text-sand-900 px-4 py-2 text-sm font-semibold hover:scale-105 transition-transform disabled:opacity-60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }),
									" ",
									t("editor.save")
								]
							})
						]
					})
				]
			}),
			showAdd ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddSubstanceModal, {
				onClose: () => {
					setShowAdd(false);
					consumeDraft();
					consumeOpenAddOnLoad();
					setDraftState(null);
				},
				onSave: handleAdd,
				onShulgin: (v) => {
					setShulgin(v);
					if (v) setShulginLog((prev) => [...prev, {
						time: (/* @__PURE__ */ new Date()).toISOString(),
						level: v
					}]);
				},
				currentShulgin: shulgin,
				ingestionCount: ings.length,
				defaultDate: localDateTimeInput(),
				draft,
				initial: null,
				existingNames: ings.map((i) => i.substanceName),
				error: addError
			}) : null,
			editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddSubstanceModal, {
				onClose: () => setEditing(null),
				onSave: handleEdit,
				onShulgin: (v) => {
					setShulgin(v);
					if (v) setShulginLog((prev) => [...prev, {
						time: (/* @__PURE__ */ new Date()).toISOString(),
						level: v
					}]);
				},
				currentShulgin: shulgin,
				ingestionCount: ings.length,
				defaultDate: date,
				draft: null,
				initial: editing,
				existingNames: ings.filter((i) => i.id !== editing.id).map((i) => i.substanceName)
			}) : null,
			risk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskDialog, {
				kind: risk.kind,
				name: risk.name,
				extra: risk.extra,
				onClose: () => setRisk(null)
			}) : null
		]
	});
}
function ComboBanner({ warnings, t }) {
	const danger = warnings.filter((w) => w.level === "dangerous");
	const caution = warnings.filter((w) => w.level === "caution");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-strong rounded-2xl p-5 animate-fade-up border border-red-500/30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5 text-red-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-heading text-lg font-bold text-sand-900 dark:text-sand-50",
					children: t("editor.combo")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [danger.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2.5 rounded-xl bg-red-500/10 border border-red-500/30 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-red-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold text-red-600 dark:text-red-400",
						children: t("editor.comboDanger", {
							a: n.a,
							b: n.b
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-red-600/80 dark:text-red-400/80 mt-0.5",
						children: n.note
					})] })]
				}, `d-${i}`)), caution.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-amber-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold text-amber-700 dark:text-amber-400",
						children: t("editor.comboCaution", {
							a: n.a,
							b: n.b
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-amber-700/80 dark:text-amber-400/80 mt-0.5",
						children: n.note
					})] })]
				}, `c-${i}`))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[11px] text-sand-500 dark:text-sand-400",
				children: t("editor.comboFoot")
			})
		]
	});
}
function IngestionRow({ ing, onRemove, onEdit, cumulative, emoji, dateTag, tint, label }) {
	const t = useI18n().t;
	const time = new Date(ing.ingestionTime).toLocaleTimeString(dateTag, {
		hour: "2-digit",
		minute: "2-digit"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass glass-tint flex items-center justify-between gap-3 rounded-xl p-3",
		style: { ["--tint"]: tint },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onEdit,
			className: "flex items-center gap-2.5 min-w-0 flex-1 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-lg shrink-0",
				children: emoji
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-sand-900 dark:text-sand-50 truncate",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-sand-500 flex items-center gap-1.5 flex-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
						" ",
						time,
						ing.dose != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"· ",
							ing.dose,
							" ",
							ing.doseUnit
						] }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "opacity-60",
							children: ["· ", t(`route.${ing.route}`)]
						}),
						cumulative != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold",
							style: { color: ing.color ?? void 0 },
							children: ["· ", t("editor.cumul", {
								n: cumulative,
								unit: ing.doseUnit
							})]
						}) : null
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1 shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onEdit,
				className: "rounded-full p-1.5 text-sand-400 hover:text-clay-500 hover:bg-clay-500/10",
				title: t("common.edit"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onRemove,
				className: "rounded-full p-1.5 text-sand-400 hover:text-red-500 hover:bg-red-500/10",
				title: t("common.delete"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
			})]
		})]
	});
}
var Route$3 = createFileRoute("/logs/$id")({ component: LogDetail });
function LogDetail() {
	const { id } = useParams({ strict: false });
	const { user, isPending } = useCurrentUserState();
	const { t } = useI18n();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-20 text-center text-sand-500",
		children: t("common.loading")
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-16 pb-24 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-md glass-strong rounded-3xl p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotebookPen, { className: "h-12 w-12 text-clay-500 mx-auto" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-heading text-2xl font-bold text-sand-900 dark:text-sand-50",
					children: t("login.privateJournal")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-sand-600 dark:text-sand-300",
					children: t("logs.signInBody")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/login",
					search: { next: `/logs/${id}` },
					className: "mt-6 inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-5 py-2.5 text-sm font-semibold",
					children: [
						t("common.signIn"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4" })
					]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogEditor, { id });
}
var Route$2 = createFileRoute("/logs/new")({ component: NewLog });
function NewLog() {
	const { user, isPending } = useCurrentUserState();
	const { t } = useI18n();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-20 text-center text-sand-500",
		children: t("common.loading")
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-16 pb-24 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-md glass-strong rounded-3xl p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotebookPen, { className: "h-12 w-12 text-clay-500 mx-auto" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-heading text-2xl font-bold text-sand-900 dark:text-sand-50",
					children: t("login.privateJournal")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-sand-600 dark:text-sand-300",
					children: t("login.privateBody")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/login",
					search: { next: "/logs/new" },
					className: "mt-6 inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-5 py-2.5 text-sm font-semibold",
					children: [
						t("common.signIn"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4" })
					]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogEditor, {});
}
function parseColor(css) {
	const m = css.match(/(\d+)[,\s/]+(\d+)[,\s/]+(\d+)/);
	if (m) return [
		Number(m[1]),
		Number(m[2]),
		Number(m[3])
	];
	return [
		232,
		220,
		200
	];
}
function knockout(img, rgb) {
	const w = img.naturalWidth || img.width;
	const h = img.naturalHeight || img.height;
	if (!w || !h) return "";
	const c = document.createElement("canvas");
	c.width = w;
	c.height = h;
	const ctx = c.getContext("2d", { willReadFrequently: true });
	if (!ctx) return "";
	ctx.clearRect(0, 0, w, h);
	ctx.drawImage(img, 0, 0);
	const data = ctx.getImageData(0, 0, w, h);
	const px = data.data;
	const n = w * h;
	const at = (x, y) => {
		const i = (y * w + x) * 4;
		return [
			px[i],
			px[i + 1],
			px[i + 2],
			px[i + 3]
		];
	};
	const corners = [
		[2, 2],
		[w - 3, 2],
		[2, h - 3],
		[w - 3, h - 3],
		[w >> 1, 2],
		[2, h >> 1]
	];
	let br = 0;
	let bg = 0;
	let bb = 0;
	let bc = 0;
	for (const [x, y] of corners) {
		const [r, g, b, a] = at(Math.max(0, x), Math.max(0, y));
		if (a < 8) continue;
		br += r;
		bg += g;
		bb += b;
		bc += 1;
	}
	if (!bc) {
		br = 245;
		bg = 245;
		bb = 245;
	} else {
		br /= bc;
		bg /= bc;
		bb /= bc;
	}
	const dist = (r, g, b) => Math.abs(r - br) + Math.abs(g - bg) + Math.abs(b - bb);
	const ink = new Uint8Array(n);
	const dark = new Uint8Array(n);
	for (let p = 0, i = 0; p < n; p++, i += 4) {
		const r = px[i];
		const g = px[i + 1];
		const b = px[i + 2];
		if (px[i + 3] < 12) continue;
		if (dist(r, g, b) > 42) {
			ink[p] = 1;
			const lum = (r + g + b) / 3;
			const chroma = Math.max(r, g, b) - Math.min(r, g, b);
			if (lum < 140 && chroma < 70) dark[p] = 1;
		}
	}
	const dil = new Uint8Array(ink);
	const radius = 1;
	for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
		if (!dark[y * w + x]) continue;
		for (let dy = -1; dy <= radius; dy++) for (let dx = -1; dx <= radius; dx++) {
			if (dx * dx + dy * dy > 1) continue;
			const nx = x + dx;
			const ny = y + dy;
			if (nx >= 0 && ny >= 0 && nx < w && ny < h) dil[ny * w + nx] = 1;
		}
	}
	for (let p = 0, i = 0; p < n; p++, i += 4) if (dil[p]) {
		px[i] = rgb[0];
		px[i + 1] = rgb[1];
		px[i + 2] = rgb[2];
		px[i + 3] = 255;
	} else {
		px[i] = 0;
		px[i + 1] = 0;
		px[i + 2] = 0;
		px[i + 3] = 0;
	}
	ctx.putImageData(data, 0, 0);
	return c.toDataURL("image/png");
}
function pubchemPng(query) {
	return `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(query)}/PNG?record_type=2d&image_size=1000x620`;
}
function loadImage(url) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.onload = () => resolve(img);
		img.onerror = () => reject(/* @__PURE__ */ new Error("img"));
		img.src = url;
	});
}
function Molecule({ name, aliases = [] }) {
	const [src, setSrc] = (0, import_react.useState)(null);
	const [show, setShow] = (0, import_react.useState)(false);
	const [fail, setFail] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let gone = false;
		setSrc(null);
		setShow(false);
		setFail(false);
		const queries = [name, ...aliases].filter(Boolean);
		const sample = document.createElement("span");
		sample.className = "text-sand-900 dark:text-sand-50";
		document.body.appendChild(sample);
		const rgb = parseColor(getComputedStyle(sample).color);
		sample.remove();
		(async () => {
			for (const q of queries) try {
				const img = await loadImage(pubchemPng(q));
				if (gone) return;
				const out = knockout(img, rgb);
				if (out) {
					setSrc(out);
					return;
				}
			} catch {}
			if (!gone) setFail(true);
		})();
		return () => {
			gone = true;
		};
	}, [name, aliases.join("|")]);
	if (fail && !src) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mol-stage ${show ? "mol-in" : ""}`,
		children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: "",
			className: "mol-img mx-auto max-h-64 w-auto",
			onLoad: () => setShow(true)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-52" })
	});
}
var Route$1 = createFileRoute("/substance/$slug")({ component: SubstancePage });
var TONE = {
	good: {
		color: "#3d8a5f",
		bg: "rgba(61,138,95,0.12)"
	},
	neutral: {
		color: "#a87c45",
		bg: "rgba(168,124,69,0.12)"
	},
	bad: {
		color: "#c9493f",
		bg: "rgba(201,73,63,0.12)"
	}
};
function SubstancePage() {
	const { slug } = useParams({ strict: false });
	const raw = getSubstance(slug);
	const { requestAdd } = useAddToJournal();
	const { t, locale } = useI18n();
	const { resolveEmoji, setEmoji, isFavorite, toggleFavorite, resolveColor, resolveName, lastDoseFor } = usePrefs();
	const e = raw ? localizedSubstance(raw, locale) : void 0;
	if (!raw || !e) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sand-600 dark:text-sand-300",
			children: t("substance.notFound")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/substances",
			className: "mt-4 inline-block text-clay-500 font-semibold",
			children: t("common.back")
		})]
	});
	const last = lastDoseFor(raw.name, raw.slug);
	const curve = durationCurve(e);
	const add = () => requestAdd(e.slug);
	const emoji = resolveEmoji(e.slug, e.name, e.emoji);
	const color = resolveColor(e.slug, e.name, e.color);
	const label = resolveName(e.slug, raw.name) === raw.name ? e.name : resolveName(e.slug, raw.name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/substances",
					className: "inline-flex items-center gap-1.5 text-sm font-semibold text-sand-600 dark:text-sand-300 hover:text-clay-500 transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }),
						" ",
						t("nav.substances")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-strong rounded-3xl p-6 sm:p-8 animate-fade-up relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-30",
							style: { background: color }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col sm:flex-row sm:items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryBadge, { category: e.category }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-3 font-heading text-3xl sm:text-4xl font-bold text-sand-900 dark:text-sand-50 flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmojiPicker, {
											value: emoji,
											onChange: (v) => setEmoji(e.slug, v)
										}), label]
									}),
									e.aliases.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-sand-500 dark:text-sand-400",
										children: t("substance.aka", { names: e.aliases.join(" · ") })
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs font-semibold text-sand-400 dark:text-sand-500",
										children: [
											e.chemicalClass,
											" · ",
											e.psychoactiveClass
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 shrink-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: add,
										className: "shrink-0 inline-flex items-center gap-2 rounded-full bg-clay-500 text-white px-4 py-2.5 text-sm font-semibold shadow-lg shadow-clay-500/25 hover:scale-105 active:scale-95 transition-transform",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }),
											" ",
											t("substance.addToLog")
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => toggleFavorite(e.slug),
										className: "inline-flex items-center justify-center gap-1 rounded-full glass px-3 py-2 text-sm font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-4 w-4 ${isFavorite(e.slug) ? "fill-clay-500 text-clay-500" : ""}` }), t("add.favorites")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => void shareSubstanceStory(e, emoji, color, label, t(`cat.${e.category}`)),
										className: "inline-flex items-center justify-center gap-1 rounded-full glass px-3 py-2 text-sm font-semibold",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }),
											" ",
											t("share.btn")
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => void downloadSubstancePdf(e, emoji, color, label, t(`cat.${e.category}`)),
										className: "inline-flex items-center justify-center gap-1 rounded-full glass px-3 py-2 text-sm font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "h-4 w-4" }), " PDF"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://psychonautwiki.org/wiki/${encodeURIComponent(e.name.replace(/ /g, "_"))}`,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center justify-center gap-1 rounded-full glass px-3 py-2 text-sm font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" }), " PsychonautWiki"]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sand-700 dark:text-sand-200 leading-relaxed",
							children: e.summary
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: t("substance.duration"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 text-clay-500" }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DurationCurve, {
						sub: e,
						color,
						amp: doseAmplitude(raw, last?.dose, last?.unit ?? "", last?.route ?? ""),
						className: "w-full h-24",
						width: 640,
						height: 96
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-3 gap-3 text-center",
						children: [
							[t("substance.onset"), formatMins(curve.onset)],
							[t("substance.peak"), formatMins((curve.peakStart + curve.peakEnd) / 2)],
							[t("substance.total"), formatMins(curve.total)]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-sand-200/60 dark:bg-sand-800/60 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold text-sand-500 dark:text-sand-400",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-heading font-bold text-sand-900 dark:text-sand-50",
								children: value
							})]
						}, label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: t("substance.dosages"),
					children: [e.doses.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-sand-700 dark:text-sand-200",
							children: t(`route.${n.route}`) === `route.${n.route}` ? n.route : t(`route.${n.route}`)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-5 gap-2",
							children: DOSE_KEYS.map((s, o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl p-2 text-center",
								style: { background: `${e.color}${Math.round((o + 1) / 5 * 96).toString(16).padStart(2, "0")}` },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-semibold text-white/90",
									children: t(`dose.${s}`)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold text-white mt-0.5",
									children: n[s] != null ? `${n[s]} ${n.unit}` : "—"
								})]
							}, s))
						})]
					}, n.route)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 flex items-start gap-2 text-xs text-sand-500 dark:text-sand-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 shrink-0 mt-0.5" }), "Les doses sont des estimations de référence et varient selon la pureté, la tolérance et l'individu. Commencez toujours bas."]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: t("substance.effects"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-clay-500" }),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-3 gap-4",
						children: [
							[
								t("effects.good"),
								e.effects.positive,
								"good"
							],
							[
								t("effects.neutral"),
								e.effects.neutral,
								"neutral"
							],
							[
								t("effects.bad"),
								e.effects.negative,
								"bad"
							]
						].map(([title, items, tone]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl p-3",
							style: { background: TONE[tone].bg },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold mb-2",
								style: { color: TONE[tone].color },
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1 text-sm text-sand-700 dark:text-sand-200",
								children: items.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", n] }, n))
							})]
						}, title))
					})
				}),
				e.neurotransmitters.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: t("substance.neuro"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-5 w-5 text-clay-500" }),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: e.neurotransmitters.map((n) => {
							const s = neurotransmitters[n];
							if (!s) return null;
							const label = t(`nt.${n}`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/neuro",
								className: "flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-transform hover:scale-105",
								style: {
									background: `${s.color}22`,
									color: s.color
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-2 w-2 rounded-full",
									style: { background: s.color }
								}), label.startsWith("nt.") ? s.label : label]
							}, n);
						})
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: t("substance.molecule"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Molecule, {
						name: e.name,
						aliases: e.aliases
					})
				}),
				e.interactions.dangerous.length > 0 || e.interactions.caution.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: t("substance.interactions"),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5 text-clay-500" }),
					children: [e.interactions.dangerous.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-red-400/30 bg-red-500/10 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-sm font-bold text-red-600 dark:text-red-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }),
								" ",
								t("substance.dangerous")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1 text-sm text-red-700 dark:text-red-300",
							children: e.interactions.dangerous.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", translateInteraction(n, locale)] }, n))
						})]
					}) : null, e.interactions.caution.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 rounded-xl border border-amber-400/30 bg-amber-500/10 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-sm font-bold text-amber-600 dark:text-amber-400",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }),
								" ",
								t("substance.caution")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300",
							children: e.interactions.caution.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", translateInteraction(n, locale)] }, n))
						})]
					}) : null]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: t("substance.harmRel"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-3 text-center",
						children: [
							[t("substance.global"), harmTotal(e)],
							[t("harm.physical"), e.harm.physical],
							[t("harm.dependence"), e.harm.dependence],
							[t("harm.social"), e.harm.social]
						].map(([label, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold text-sand-500 dark:text-sand-400",
								children: label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-heading text-2xl font-bold text-clay-500",
								children: v
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 h-1.5 rounded-full bg-sand-200/60 dark:bg-sand-800/60 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-clay-500",
									style: { width: `${Math.min(100, v)}%` }
								})
							})
						] }, label))
					})
				}),
				e.riskNotes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: t("substance.risks"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm text-sand-700 dark:text-sand-200",
						children: e.riskNotes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-clay-500",
								children: "•"
							}), n]
						}, n))
					})
				}) : null
			]
		})
	});
}
var Route = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
var IndexRoute = Route$21.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$22
});
var AlertsRoute = Route$20.update({
	id: "/alerts",
	path: "/alerts",
	getParentRoute: () => Route$22
});
var ChangelogRoute = Route$19.update({
	id: "/changelog",
	path: "/changelog",
	getParentRoute: () => Route$22
});
var ChatRoute = Route$18.update({
	id: "/chat",
	path: "/chat",
	getParentRoute: () => Route$22
});
var CompareRoute = Route$17.update({
	id: "/compare",
	path: "/compare",
	getParentRoute: () => Route$22
});
var DownloadsRoute = Route$16.update({
	id: "/downloads",
	path: "/downloads",
	getParentRoute: () => Route$22
});
var EffectsRoute = Route$15.update({
	id: "/effects",
	path: "/effects",
	getParentRoute: () => Route$22
});
var ExperiencesRoute = Route$14.update({
	id: "/experiences",
	path: "/experiences",
	getParentRoute: () => Route$22
});
var HarmScaleRoute = Route$13.update({
	id: "/harm-scale",
	path: "/harm-scale",
	getParentRoute: () => Route$22
});
var LegalRoute = Route$12.update({
	id: "/legal",
	path: "/legal",
	getParentRoute: () => Route$22
});
var LoginRoute = Route$11.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$22
});
var LogsRoute = Route$10.update({
	id: "/logs",
	path: "/logs",
	getParentRoute: () => Route$22
});
var NeuroRoute = Route$9.update({
	id: "/neuro",
	path: "/neuro",
	getParentRoute: () => Route$22
});
var ProfileRoute = Route$8.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$22
});
var ReductionRoute = Route$7.update({
	id: "/reduction",
	path: "/reduction",
	getParentRoute: () => Route$22
});
var ResetRoute = Route$6.update({
	id: "/reset",
	path: "/reset",
	getParentRoute: () => Route$22
});
var SubstancesRoute = Route$5.update({
	id: "/substances",
	path: "/substances",
	getParentRoute: () => Route$22
});
var LogsIndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => LogsRoute
});
var LogsIdRoute = Route$3.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => LogsRoute
});
var LogsNewRoute = Route$2.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => LogsRoute
});
var SubstanceSlugRoute = Route$1.update({
	id: "/substance/$slug",
	path: "/substance/$slug",
	getParentRoute: () => Route$22
});
var ApiAuthSplatRoute = Route.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$22
});
var LogsRouteChildren = {
	LogsIdRoute,
	LogsNewRoute,
	LogsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AlertsRoute,
	ChangelogRoute,
	ChatRoute,
	CompareRoute,
	DownloadsRoute,
	EffectsRoute,
	ExperiencesRoute,
	HarmScaleRoute,
	LegalRoute,
	LoginRoute,
	LogsRoute: LogsRoute._addFileChildren(LogsRouteChildren),
	NeuroRoute,
	ProfileRoute,
	ReductionRoute,
	ResetRoute,
	SubstancesRoute,
	SubstanceSlugRoute,
	ApiAuthSplatRoute
};
var routeTree = Route$22._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { wrapBrandedMail as C, mail_brand_exports as S, ExperienceCurves as _, MAIL_INK as a, deliverMail as b, loadUsers as c, loadMailConfig as d, TakoLogo as f, useI18n as g, TrackCard as h, queueOutbox as i, saveUsers as l, scheduleIngestionNotices as m, MAIL_BODY as n, MAIL_MUTED as o, activeIngestions as p, MAIL_HEAD as r, MAIL_SAND as s, router_exports as t, DEFAULT_MAIL_FROM as u, usePrefs as v, mailCta as x, applyTakoFavicon as y };
