import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import {
  defaultExperienceTitleFromDate,
  type Experience,
  type Ingestion,
  type IngestionInput,
  type Tolerance,
} from "./journal";

type ExpRow = {
  id: string;
  title: string;
  experience_date: string | Date;
  notes: string;
  feeling: number | string | null;
  shulgin?: string | null;
  extra_json?: string | null;
};

type IngRow = {
  id: string;
  experience_id: string;
  substance_name: string;
  slug: string | null;
  route: string;
  dose: number | string | null;
  dose_unit: string;
  color: string | null;
  ingestion_time: string | Date;
  notes: string;
};

type TolRow = {
  id: string;
  substance_name: string;
  last_taken_date: string;
  reset_days: number;
};

function iso(v: string | Date) {
  if (v instanceof Date) return v.toISOString();
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? String(v) : d.toISOString();
}

function num(v: number | string | null): number | null {
  if (v == null || v === "") return null;
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : null;
}

function feelingOf(v: number | string | null): number | null {
  const n = num(v);
  if (n == null) return null;
  const r = Math.round(n);
  return r >= 1 && r <= 5 ? r : null;
}

let schemaReady: Promise<void> | null = null;
async function ensureJournalSchema() {
  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = await getSql();
      await sql.query(
        "alter table experiences add column if not exists feeling integer",
      );
      await sql.query(
        "alter table experiences add column if not exists shulgin text",
      );
      await sql.query(
        "alter table experiences add column if not exists extra_json text",
      );
    })().catch((err) => {
      schemaReady = null;
      throw err;
    });
  }
  await schemaReady;
}

function mapIng(r: IngRow): Ingestion {
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
    notes: r.notes ?? "",
  };
}

function parseExtra(raw: string | null | undefined): {
  shulginLog?: Experience["shulginLog"];
  media?: Experience["media"];
  tracks?: Experience["tracks"];
  heartRate?: Experience["heartRate"];
} {
  if (!raw) return {};
  try {
    return JSON.parse(raw) as {
      shulginLog?: Experience["shulginLog"];
      media?: Experience["media"];
      tracks?: Experience["tracks"];
      heartRate?: Experience["heartRate"];
    };
  } catch {
    return {};
  }
}

function mapExp(r: ExpRow, ingestions: Ingestion[]): Experience {
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
    heartRate: extra.heartRate ?? [],
    ingestions,
  };
}

async function bumpTolerance(userId: string, name: string, when: string) {
  const sql = await getSql();
  const d = new Date(when);
  const day = Number.isNaN(d.getTime())
    ? new Date().toISOString().slice(0, 10)
    : `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const existing = await sql<TolRow>`
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
  } else {
    await sql`
      insert into tolerance_windows (id, user_id, substance_name, last_taken_date, reset_days)
      values (${crypto.randomUUID()}, ${userId}, ${name}, ${day}, ${14})
    `;
  }
}

export const listExperiences = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    await ensureJournalSchema();
    const sql = await getSql();
    const exps = await sql<ExpRow>`
      select id, title, experience_date, notes, feeling, shulgin, extra_json
      from experiences
      where user_id = ${context.userId}
      order by experience_date desc
    `;
    if (exps.length === 0) return [] as Experience[];
    const ings = await sql<IngRow>`
      select id, experience_id, substance_name, slug, route, dose, dose_unit, color, ingestion_time, notes
      from ingestions
      where user_id = ${context.userId}
      order by ingestion_time asc
    `;
    const byExp = new Map<string, Ingestion[]>();
    for (const row of ings) {
      const list = byExp.get(row.experience_id) ?? [];
      list.push(mapIng(row));
      byExp.set(row.experience_id, list);
    }
    return exps.map((e) => mapExp(e, byExp.get(e.id) ?? []));
  });

export const loadJournal = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    await ensureJournalSchema();
    const sql = await getSql();
    const exps = await sql<ExpRow>`
      select id, title, experience_date, notes, feeling, shulgin, extra_json
      from experiences
      where user_id = ${context.userId}
      order by experience_date desc
    `;
    const ings =
      exps.length === 0
        ? []
        : await sql<IngRow>`
            select id, experience_id, substance_name, slug, route, dose, dose_unit, color, ingestion_time, notes
            from ingestions
            where user_id = ${context.userId}
            order by ingestion_time asc
          `;
    const byExp = new Map<string, Ingestion[]>();
    for (const row of ings) {
      const list = byExp.get(row.experience_id) ?? [];
      list.push(mapIng(row));
      byExp.set(row.experience_id, list);
    }
    const experiences = exps.map((e) => mapExp(e, byExp.get(e.id) ?? []));
    const trows = await sql<TolRow>`
      select id, substance_name, last_taken_date, reset_days
      from tolerance_windows
      where user_id = ${context.userId}
      order by last_taken_date desc
    `;
    const tolerance = trows.map(
      (r): Tolerance => ({
        id: r.id,
        substanceName: r.substance_name,
        lastTakenDate:
          typeof r.last_taken_date === "string"
            ? r.last_taken_date.slice(0, 10)
            : iso(r.last_taken_date).slice(0, 10),
        resetDays: Number(r.reset_days),
      }),
    );
    return { experiences, tolerance };
  });

export const getExperience = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .validator((id: string) => id)
  .handler(async ({ context, data: id }) => {
    await ensureJournalSchema();
    const sql = await getSql();
    const exps = await sql<ExpRow>`
      select id, title, experience_date, notes, feeling, shulgin, extra_json
      from experiences
      where id = ${id} and user_id = ${context.userId}
      limit 1
    `;
    if (!exps[0]) return null;
    const ings = await sql<IngRow>`
      select id, experience_id, substance_name, slug, route, dose, dose_unit, color, ingestion_time, notes
      from ingestions
      where experience_id = ${id} and user_id = ${context.userId}
      order by ingestion_time asc
    `;
    return mapExp(exps[0], ings.map(mapIng));
  });

export const upsertExperience = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(
    (data: {
      id?: string;
      title: string;
      experienceDate: string;
      notes: string;
      feeling?: number | null;
      shulgin?: string | null;
      shulginLog?: Experience["shulginLog"];
      media?: Experience["media"];
      tracks?: Experience["tracks"];
      heartRate?: Experience["heartRate"];
    }) => data,
  )
  .handler(async ({ context, data }) => {
    await ensureJournalSchema();
    const sql = await getSql();
    const title =
      data.title.trim() ||
      defaultExperienceTitleFromDate(data.experienceDate, "fr-FR");
    const feeling = feelingOf(data.feeling ?? null);
    const shulgin = data.shulgin ?? null;
    const extra = JSON.stringify({
      shulginLog: data.shulginLog ?? [],
      media: data.media ?? [],
      tracks: data.tracks ?? [],
      heartRate: data.heartRate ?? [],
    });
    if (data.id) {
      const existing = await sql<{ id: string }>`
        select id from experiences where id = ${data.id} and user_id = ${context.userId} limit 1
      `;
      if (existing[0]) {
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

export const deleteExperience = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: string) => id)
  .handler(async ({ context, data: id }) => {
    const sql = await getSql();
    await sql`
      delete from experiences where id = ${id} and user_id = ${context.userId}
    `;
  });

export const addIngestion = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((data: { experienceId: string; ingestion: IngestionInput }) => data)
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    const owned = await sql<{ id: string }>`
      select id from experiences where id = ${data.experienceId} and user_id = ${context.userId} limit 1
    `;
    if (!owned[0]) return null;
    const id = crypto.randomUUID();
    const ing = data.ingestion;
    const rows = await sql<IngRow>`
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

export const updateIngestion = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((data: { id: string; ingestion: IngestionInput }) => data)
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    const ing = data.ingestion;
    const rows = await sql<IngRow>`
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

export const deleteIngestion = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: string) => id)
  .handler(async ({ context, data: id }) => {
    const sql = await getSql();
    await sql`
      delete from ingestions where id = ${id} and user_id = ${context.userId}
    `;
  });

export const listTolerance = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await getSql();
    const rows = await sql<TolRow>`
      select id, substance_name, last_taken_date, reset_days
      from tolerance_windows
      where user_id = ${context.userId}
      order by last_taken_date desc
    `;
    return rows.map(
      (r): Tolerance => ({
        id: r.id,
        substanceName: r.substance_name,
        lastTakenDate:
          typeof r.last_taken_date === "string"
            ? r.last_taken_date.slice(0, 10)
            : iso(r.last_taken_date).slice(0, 10),
        resetDays: Number(r.reset_days),
      }),
    );
  });

export const updateToleranceDays = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((data: { id: string; days: number }) => data)
  .handler(async ({ context, data }) => {
    const days = Math.max(1, Math.round(data.days));
    const sql = await getSql();
    await sql`
      update tolerance_windows
      set reset_days = ${days}
      where id = ${data.id} and user_id = ${context.userId}
    `;
  });

export const importJournalDump = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((data: { experiences: Experience[] }) => data)
  .handler(async ({ context, data }) => {
    await ensureJournalSchema();
    const sql = await getSql();
    const list = (data.experiences ?? []).slice(0, 800);
    let imported = 0;
    for (const exp of list) {
      const id = crypto.randomUUID();
      const title =
        (exp.title ?? "").trim() ||
        defaultExperienceTitleFromDate(
          exp.experienceDate || new Date().toISOString(),
          "fr-FR",
        );
      const date = exp.experienceDate || new Date().toISOString();
      const notes = exp.notes ?? "";
      const feeling = feelingOf(exp.feeling ?? null);
      const extra = JSON.stringify({
        shulginLog: exp.shulginLog ?? [],
        media: exp.media ?? [],
        tracks: exp.tracks ?? [],
        heartRate: exp.heartRate ?? [],
      });
      await sql`
        insert into experiences (id, user_id, title, experience_date, notes, feeling, shulgin, extra_json)
        values (${id}, ${context.userId}, ${title}, ${date}, ${notes}, ${feeling}, ${exp.shulgin ?? null}, ${extra})
      `;
      for (const ing of (exp.ingestions ?? []).slice(0, 250)) {
        const ingId = crypto.randomUUID();
        await sql`
          insert into ingestions (
            id, user_id, experience_id, substance_name, slug, route, dose, dose_unit, color, ingestion_time, notes
          ) values (
            ${ingId}, ${context.userId}, ${id}, ${ing.substanceName},
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
