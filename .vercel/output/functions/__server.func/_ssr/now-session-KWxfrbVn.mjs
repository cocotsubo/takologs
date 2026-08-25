import { o as __toESM } from "../_runtime.mjs";
import { W as require_react, w as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Flame } from "../_libs/lucide-react.mjs";
import { _ as ExperienceCurves, g as useI18n, h as TrackCard, m as scheduleIngestionNotices, p as activeIngestions, v as usePrefs } from "./router-Clas6Kde.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/now-session-KWxfrbVn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NowSession({ experiences }) {
	const { t, dateTag } = useI18n();
	const { resolveEmoji, resolveName } = usePrefs();
	const active = activeIngestions(experiences);
	const byExp = /* @__PURE__ */ new Map();
	for (const a of active) {
		const id = a.ing.experienceId;
		const t0 = new Date(a.ing.ingestionTime).getTime();
		byExp.set(id, Math.max(byExp.get(id) ?? 0, t0));
	}
	const currentId = [...byExp.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
	const current = experiences.find((e) => e.id === currentId);
	const ingestions = current?.ingestions ?? active.map((a) => a.ing);
	(0, import_react.useEffect)(() => {
		const run = () => scheduleIngestionNotices(ingestions, {
			onset: t("notify.onset"),
			peak: t("notify.peak"),
			offset: t("notify.offset"),
			onsetBody: t("notify.onsetBody"),
			peakBody: t("notify.peakBody"),
			offsetBody: t("notify.offsetBody"),
			care3: t("notify.care3"),
			care3Body: t("notify.care3Body"),
			care6: t("notify.care6"),
			care6Body: t("notify.care6Body"),
			care9: t("notify.care9"),
			care9Body: t("notify.care9Body"),
			care12: t("notify.care12"),
			care12Body: t("notify.care12Body"),
			hydrate: t("notify.hydrate"),
			hydrateBody: t("notify.hydrateBody"),
			idle: t("notify.idle"),
			idleBody: t("notify.idleBody"),
			mix: t("notify.mix"),
			mixBody: t("notify.mixBody"),
			lab: t("notify.lab"),
			labBody: t("notify.labBody"),
			drive: t("notify.drive"),
			driveBody: t("notify.driveBody"),
			rest: t("notify.rest"),
			restBody: t("notify.restBody"),
			sitter: t("notify.sitter"),
			sitterBody: t("notify.sitterBody"),
			redose: t("notify.redose"),
			redoseBody: t("notify.redoseBody")
		}, current?.id);
		run();
		window.addEventListener("takologs-notify-changed", run);
		return () => window.removeEventListener("takologs-notify-changed", run);
	}, [
		t,
		current?.id,
		ingestions.length,
		active.length
	]);
	if (active.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-3 mt-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rounded-2xl px-3 py-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 overflow-x-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3.5 w-3.5 text-clay-500 shrink-0" }),
						active.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "shrink-0 inline-flex items-center gap-1.5 rounded-full bg-clay-500/15 px-2 py-0.5 text-xs font-semibold text-sand-800 dark:text-sand-100",
							children: [
								resolveEmoji(a.ing.slug, a.ing.substanceName, "•"),
								" ",
								resolveName(a.ing.slug, a.ing.substanceName),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "opacity-60",
									children: t("active.until", { time: a.endsAt.toLocaleTimeString(dateTag, {
										hour: "2-digit",
										minute: "2-digit"
									}) })
								})
							]
						}, a.ing.id)),
						current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/logs/$id",
							params: { id: current.id },
							className: "ml-auto shrink-0 text-[11px] font-semibold text-clay-500 hover:underline",
							children: [current.shulgin ? `${current.shulgin} · ` : "", current.title]
						}) : null
					]
				}),
				experiences.filter((e) => (e.tracks?.length ?? 0) > 0 && active.some((a) => a.ing.experienceId === e.id)).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-2",
					children: (e.tracks ?? []).map((tr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackCard, { tr }, tr.id))
				}, `music-${e.id}`)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCurves, {
						ingestions,
						dateTag,
						showNow: true,
						shulgin: current?.shulgin,
						shulginLog: current?.shulginLog
					})
				})
			]
		})
	});
}
//#endregion
export { NowSession };
