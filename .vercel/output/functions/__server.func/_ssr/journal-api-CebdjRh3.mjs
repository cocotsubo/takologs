import { i as createServerFn } from "./ssr2.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
import { h as getSql, l as defaultExperienceTitleFromDate, o as authMiddleware } from "./middleware-llC-sRUd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal-api-CebdjRh3.js
function iso(v) {
	if (v instanceof Date) return v.toISOString();
	const d = new Date(v);
	return Number.isNaN(d.getTime()) ? String(v) : d.toISOString();
}
function num(v) {
	if (v == null || v === "") return null;
	const n = typeof v === "number" ? v : Number(v);
	return Number.isFinite(n) ? n : null;
}
function feelingOf(v) {
	const n = num(v);
	if (n == null) return null;
	const r = Math.round(n);
	return r >= 1 && r <= 5 ? r : null;
}
var schemaReady = null;
async function ensureJournalSchema() {
	if (!schemaReady) schemaReady = (async () => {
		const sql = await getSql();
		await sql.query("alter table experiences add column if not exists feeling integer");
		await sql.query("alter table experiences add column if not exists shulgin text");
		await sql.query("alter table experiences add column if not exists extra_json text");
	})().catch((err) => {
		schemaReady = null;
		throw err;
	});
	await schemaReady;
}
function mapIng(r) {
	return {
		id: r.id,
		experienceId: r.experience_id,
		substanceName: r.substance_name,
		slug: r.slug,
		route: r.route,
		dose: num(r.dose),
		doseUnit: r.dose_unit,
		color: r.color,
		ingestionTime: iso(r.ingestion_time),
		notes: r.notes ?? ""
	};
}
function parseExtra(raw) {
	if (!raw) return {};
	try {
		return JSON.parse(raw);
	} catch {
		return {};
	}
}
function mapExp(r, ingestions) {
	const extra = parseExtra(r.extra_json);
	return {
		id: r.id,
		title: r.title,
		experienceDate: iso(r.experience_date),
		notes: r.notes ?? "",
		feeling: feelingOf(r.feeling),
		shulgin: r.shulgin ?? null,
		shulginLog: extra.shulginLog ?? [],
		media: extra.media ?? [],
		tracks: extra.tracks ?? [],
		ingestions
	};
}
async function bumpTolerance(userId, name, when) {
	const sql = await getSql();
	const d = new Date(when);
	const day = Number.isNaN(d.getTime()) ? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) : `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
	const existing = await sql`
    select id, substance_name, last_taken_date, reset_days
    from tolerance_windows
    where user_id = ${userId} and lower(substance_name) = ${name.toLowerCase()}
    limit 1
  `;
	if (existing[0]) {
		const prev = String(existing[0].last_taken_date ?? "").slice(0, 10);
		if (prev && day < prev) return;
		await sql`
      update tolerance_windows
      set last_taken_date = ${day}
      where id = ${existing[0].id} and user_id = ${userId}
    `;
	} else await sql`
      insert into tolerance_windows (id, user_id, substance_name, last_taken_date, reset_days)
      values (${crypto.randomUUID()}, ${userId}, ${name}, ${day}, ${14})
    `;
}
var listExperiences_createServerFn_handler = createServerRpc({
	id: "a49f16a1c3e5df77fb564573837c91618e25eba45293c56f0ba0e7f07f859d54",
	name: "listExperiences",
	filename: "src/lib/journal-api.ts"
}, (opts) => listExperiences.__executeServer(opts));
var listExperiences = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listExperiences_createServerFn_handler, async ({ context }) => {
	await ensureJournalSchema();
	const sql = await getSql();
	const exps = await sql`
      select id, title, experience_date, notes, feeling, shulgin, extra_json
      from experiences
      where user_id = ${context.userId}
      order by experience_date desc
    `;
	if (exps.length === 0) return [];
	const ings = await sql`
      select id, experience_id, substance_name, slug, route, dose, dose_unit, color, ingestion_time, notes
      from ingestions
      where user_id = ${context.userId}
      order by ingestion_time asc
    `;
	const byExp = /* @__PURE__ */ new Map();
	for (const row of ings) {
		const list = byExp.get(row.experience_id) ?? [];
		list.push(mapIng(row));
		byExp.set(row.experience_id, list);
	}
	return exps.map((e) => mapExp(e, byExp.get(e.id) ?? []));
});
var loadJournal_createServerFn_handler = createServerRpc({
	id: "d67c9af189465b408fc4cf640b2f7d8840aeefad351cd0c5743155f4012ab7fb",
	name: "loadJournal",
	filename: "src/lib/journal-api.ts"
}, (opts) => loadJournal.__executeServer(opts));
var loadJournal = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(loadJournal_createServerFn_handler, async ({ context }) => {
	await ensureJournalSchema();
	const sql = await getSql();
	const exps = await sql`
      select id, title, experience_date, notes, feeling, shulgin, extra_json
      from experiences
      where user_id = ${context.userId}
      order by experience_date desc
    `;
	const ings = exps.length === 0 ? [] : await sql`
            select id, experience_id, substance_name, slug, route, dose, dose_unit, color, ingestion_time, notes
            from ingestions
            where user_id = ${context.userId}
            order by ingestion_time asc
          `;
	const byExp = /* @__PURE__ */ new Map();
	for (const row of ings) {
		const list = byExp.get(row.experience_id) ?? [];
		list.push(mapIng(row));
		byExp.set(row.experience_id, list);
	}
	return {
		experiences: exps.map((e) => mapExp(e, byExp.get(e.id) ?? [])),
		tolerance: (await sql`
      select id, substance_name, last_taken_date, reset_days
      from tolerance_windows
      where user_id = ${context.userId}
      order by last_taken_date desc
    `).map((r) => ({
			id: r.id,
			substanceName: r.substance_name,
			lastTakenDate: typeof r.last_taken_date === "string" ? r.last_taken_date.slice(0, 10) : iso(r.last_taken_date).slice(0, 10),
			resetDays: Number(r.reset_days)
		}))
	};
});
var getExperience_createServerFn_handler = createServerRpc({
	id: "239d5bae4a5ba56b4a02c3e38a41d1337b510ecb44d84e79ac57f5d91452826f",
	name: "getExperience",
	filename: "src/lib/journal-api.ts"
}, (opts) => getExperience.__executeServer(opts));
var getExperience = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((id) => id).handler(getExperience_createServerFn_handler, async ({ context, data: id }) => {
	await ensureJournalSchema();
	const sql = await getSql();
	const exps = await sql`
      select id, title, experience_date, notes, feeling, shulgin, extra_json
      from experiences
      where id = ${id} and user_id = ${context.userId}
      limit 1
    `;
	if (!exps[0]) return null;
	const ings = await sql`
      select id, experience_id, substance_name, slug, route, dose, dose_unit, color, ingestion_time, notes
      from ingestions
      where experience_id = ${id} and user_id = ${context.userId}
      order by ingestion_time asc
    `;
	return mapExp(exps[0], ings.map(mapIng));
});
var upsertExperience_createServerFn_handler = createServerRpc({
	id: "108a506aa6dea78daff3da41dae81f0141ea24f75f5f42bb7144695b0cebf953",
	name: "upsertExperience",
	filename: "src/lib/journal-api.ts"
}, (opts) => upsertExperience.__executeServer(opts));
var upsertExperience = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(upsertExperience_createServerFn_handler, async ({ context, data }) => {
	await ensureJournalSchema();
	const sql = await getSql();
	const title = data.title.trim() || defaultExperienceTitleFromDate(data.experienceDate, "fr-FR");
	const feeling = feelingOf(data.feeling ?? null);
	const shulgin = data.shulgin ?? null;
	const extra = JSON.stringify({
		shulginLog: data.shulginLog ?? [],
		media: data.media ?? [],
		tracks: data.tracks ?? []
	});
	if (data.id) {
		if ((await sql`
        select id from experiences where id = ${data.id} and user_id = ${context.userId} limit 1
      `)[0]) {
			await sql`
          update experiences
          set title = ${title},
              experience_date = ${data.experienceDate},
              notes = ${data.notes},
              feeling = ${feeling},
              shulgin = ${shulgin},
              extra_json = ${extra}
          where id = ${data.id} and user_id = ${context.userId}
        `;
			return data.id;
		}
	}
	const id = data.id || crypto.randomUUID();
	await sql`
      insert into experiences (id, user_id, title, experience_date, notes, feeling, shulgin, extra_json)
      values (${id}, ${context.userId}, ${title}, ${data.experienceDate}, ${data.notes}, ${feeling}, ${shulgin}, ${extra})
    `;
	return id;
});
var deleteExperience_createServerFn_handler = createServerRpc({
	id: "a09f97e912c6d776a5e4b305d3482416b7cc5090b555429f6fd8834796e69baa",
	name: "deleteExperience",
	filename: "src/lib/journal-api.ts"
}, (opts) => deleteExperience.__executeServer(opts));
var deleteExperience = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(deleteExperience_createServerFn_handler, async ({ context, data: id }) => {
	await (await getSql())`
      delete from experiences where id = ${id} and user_id = ${context.userId}
    `;
});
var addIngestion_createServerFn_handler = createServerRpc({
	id: "7f163a39e6493caba7b9058a884fe0a841d8f5ae8ee0cf6df3e7f0b3161e2f97",
	name: "addIngestion",
	filename: "src/lib/journal-api.ts"
}, (opts) => addIngestion.__executeServer(opts));
var addIngestion = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(addIngestion_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	if (!(await sql`
      select id from experiences where id = ${data.experienceId} and user_id = ${context.userId} limit 1
    `)[0]) return null;
	const id = crypto.randomUUID();
	const ing = data.ingestion;
	const rows = await sql`
      insert into ingestions (
        id, user_id, experience_id, substance_name, slug, route, dose, dose_unit, color, ingestion_time, notes
      ) values (
        ${id}, ${context.userId}, ${data.experienceId}, ${ing.substanceName},
        ${ing.slug ?? null}, ${ing.route}, ${ing.dose}, ${ing.doseUnit},
        ${ing.color ?? null}, ${ing.ingestionTime}, ${ing.notes ?? ""}
      )
      returning id, experience_id, substance_name, slug, route, dose, dose_unit, color, ingestion_time, notes
    `;
	await bumpTolerance(context.userId, ing.substanceName, ing.ingestionTime);
	return rows[0] ? mapIng(rows[0]) : null;
});
var updateIngestion_createServerFn_handler = createServerRpc({
	id: "0a35dad8ee60258d08befe487d99956fdefdb0207e3605690ab649de35a7e177",
	name: "updateIngestion",
	filename: "src/lib/journal-api.ts"
}, (opts) => updateIngestion.__executeServer(opts));
var updateIngestion = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(updateIngestion_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	const ing = data.ingestion;
	const rows = await sql`
      update ingestions
      set substance_name = ${ing.substanceName},
          slug = ${ing.slug ?? null},
          route = ${ing.route},
          dose = ${ing.dose},
          dose_unit = ${ing.doseUnit},
          color = ${ing.color ?? null},
          ingestion_time = ${ing.ingestionTime},
          notes = ${ing.notes ?? ""}
      where id = ${data.id} and user_id = ${context.userId}
      returning id, experience_id, substance_name, slug, route, dose, dose_unit, color, ingestion_time, notes
    `;
	if (rows[0]) await bumpTolerance(context.userId, ing.substanceName, ing.ingestionTime);
	return rows[0] ? mapIng(rows[0]) : null;
});
var deleteIngestion_createServerFn_handler = createServerRpc({
	id: "07bdf87fefe3046bc40f47df651f6d7e6861dc90611e2a1b17a624d2b5df8319",
	name: "deleteIngestion",
	filename: "src/lib/journal-api.ts"
}, (opts) => deleteIngestion.__executeServer(opts));
var deleteIngestion = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(deleteIngestion_createServerFn_handler, async ({ context, data: id }) => {
	await (await getSql())`
      delete from ingestions where id = ${id} and user_id = ${context.userId}
    `;
});
var listTolerance_createServerFn_handler = createServerRpc({
	id: "b902943c54501dc8657a4bc29f48d039512c72e3f963c845c66129cd2e1c7324",
	name: "listTolerance",
	filename: "src/lib/journal-api.ts"
}, (opts) => listTolerance.__executeServer(opts));
var listTolerance = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listTolerance_createServerFn_handler, async ({ context }) => {
	return (await (await getSql())`
      select id, substance_name, last_taken_date, reset_days
      from tolerance_windows
      where user_id = ${context.userId}
      order by last_taken_date desc
    `).map((r) => ({
		id: r.id,
		substanceName: r.substance_name,
		lastTakenDate: typeof r.last_taken_date === "string" ? r.last_taken_date.slice(0, 10) : iso(r.last_taken_date).slice(0, 10),
		resetDays: Number(r.reset_days)
	}));
});
var updateToleranceDays_createServerFn_handler = createServerRpc({
	id: "7fe03de8d986910349a61f4b0c73346a6d614f645d280b99bb56c20109639edb",
	name: "updateToleranceDays",
	filename: "src/lib/journal-api.ts"
}, (opts) => updateToleranceDays.__executeServer(opts));
var updateToleranceDays = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(updateToleranceDays_createServerFn_handler, async ({ context, data }) => {
	const days = Math.max(1, Math.round(data.days));
	await (await getSql())`
      update tolerance_windows
      set reset_days = ${days}
      where id = ${data.id} and user_id = ${context.userId}
    `;
});
var importJournalDump_createServerFn_handler = createServerRpc({
	id: "63aebccdf9d21e4c8b9cad22abad854085a1c9eca85d7704b3ce94a2716b5ede",
	name: "importJournalDump",
	filename: "src/lib/journal-api.ts"
}, (opts) => importJournalDump.__executeServer(opts));
var importJournalDump = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((data) => data).handler(importJournalDump_createServerFn_handler, async ({ context, data }) => {
	await ensureJournalSchema();
	const sql = await getSql();
	const list = (data.experiences ?? []).slice(0, 800);
	let imported = 0;
	for (const exp of list) {
		const id = crypto.randomUUID();
		const title = (exp.title ?? "").trim() || defaultExperienceTitleFromDate(exp.experienceDate || (/* @__PURE__ */ new Date()).toISOString(), "fr-FR");
		const date = exp.experienceDate || (/* @__PURE__ */ new Date()).toISOString();
		const notes = exp.notes ?? "";
		const feeling = feelingOf(exp.feeling ?? null);
		const extra = JSON.stringify({
			shulginLog: exp.shulginLog ?? [],
			media: exp.media ?? [],
			tracks: exp.tracks ?? []
		});
		await sql`
        insert into experiences (id, user_id, title, experience_date, notes, feeling, shulgin, extra_json)
        values (${id}, ${context.userId}, ${title}, ${date}, ${notes}, ${feeling}, ${exp.shulgin ?? null}, ${extra})
      `;
		for (const ing of (exp.ingestions ?? []).slice(0, 250)) {
			await sql`
          insert into ingestions (
            id, user_id, experience_id, substance_name, slug, route, dose, dose_unit, color, ingestion_time, notes
          ) values (
            ${crypto.randomUUID()}, ${context.userId}, ${id}, ${ing.substanceName},
            ${ing.slug ?? null}, ${ing.route || "Orale"}, ${ing.dose ?? null}, ${ing.doseUnit || "mg"},
            ${ing.color ?? null}, ${ing.ingestionTime || date}, ${ing.notes ?? ""}
          )
        `;
			if (ing.substanceName) await bumpTolerance(context.userId, ing.substanceName, ing.ingestionTime || date);
		}
		imported += 1;
	}
	return { imported };
});
//#endregion
export { addIngestion_createServerFn_handler, deleteExperience_createServerFn_handler, deleteIngestion_createServerFn_handler, getExperience_createServerFn_handler, importJournalDump_createServerFn_handler, listExperiences_createServerFn_handler, listTolerance_createServerFn_handler, loadJournal_createServerFn_handler, updateIngestion_createServerFn_handler, updateToleranceDays_createServerFn_handler, upsertExperience_createServerFn_handler };
