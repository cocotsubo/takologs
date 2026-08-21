import { createFileRoute } from "@tanstack/react-router";
import {
  Archive,
  ArrowDownAZ,
  ArrowUpDown,
  Clock,
  Download,
  File,
  FileArchive,
  Folder,
  FolderPlus,
  Trash2,
  Upload,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { PageHero } from "@/components/ui-bits";
import { APP_VERSION } from "@/lib/version";
import { useI18n } from "@/lib/i18n";
import { blobToBytes, buildZip } from "@/lib/zip";

const KEY = "takologs-uploads";
const DB = "takologs-files";

type Kind = "file" | "folder";
type SortKey = "name" | "date" | "size" | "kind";
type Item = {
  id: string;
  name: string;
  size: number;
  at: string;
  mime?: string;
  kind: Kind;
  parent: string | null;
  system?: boolean;
  href?: string;
};

const SYSTEM: Item[] = [
  {
    id: "sys-site",
    name: `TakoLogs-v${APP_VERSION}.zip`,
    size: 0,
    at: "2026-01-01T00:00:00.000Z",
    mime: "application/zip",
    kind: "file",
    parent: null,
    system: true,
    href: "TakoLogs.zip",
  },
  {
    id: "sys-stories",
    name: "TakoLogs-stories.zip",
    size: 0,
    at: "2026-01-01T00:00:00.000Z",
    mime: "application/zip",
    kind: "file",
    parent: null,
    system: true,
    href: "TakoLogs-stories.zip",
  },
];

function href(file: string) {
  return import.meta.env.VITE_FTP === "1" ? `./${file}` : `/${file}`;
}

function readUser(): Item[] {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "[]") as Partial<Item>[];
    return raw.map((it, i) => ({
      id: String(it.id ?? `old-${i}`),
      name: String(it.name ?? "fichier"),
      size: Number(it.size ?? 0),
      at: String(it.at ?? new Date().toISOString()),
      mime: it.mime,
      kind: it.kind === "folder" ? "folder" : "file",
      parent: it.parent ?? null,
      system: false,
    }));
  } catch {
    return [];
  }
}

function persist(user: Item[]) {
  localStorage.setItem(
    KEY,
    JSON.stringify(user.filter((i) => !i.system).map(({ system, href: _h, ...rest }) => rest)),
  );
}

function openDb() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains("blobs")) {
        req.result.createObjectStore("blobs");
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function putBlob(id: string, file: Blob) {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction("blobs", "readwrite");
    tx.objectStore("blobs").put(file, id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function getBlob(id: string) {
  const db = await openDb();
  return new Promise<Blob | undefined>((resolve, reject) => {
    const tx = db.transaction("blobs", "readonly");
    const req = tx.objectStore("blobs").get(id);
    req.onsuccess = () => resolve(req.result as Blob | undefined);
    req.onerror = () => reject(req.error);
  });
}

async function delBlob(id: string) {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction("blobs", "readwrite");
    tx.objectStore("blobs").delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function clickDownload(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

function fmtSize(n: number, t: (k: string, v?: Record<string, string | number>) => string) {
  if (!n) return "—";
  if (n < 1024) return t("downloads.bytes", { n });
  if (n < 1024 * 1024) return t("downloads.size", { n: Math.round(n / 1024) });
  return t("downloads.mb", { n: (n / 1024 / 1024).toFixed(1) });
}

export const Route = createFileRoute("/downloads")({ component: DownloadsPage });

export function DownloadsPage() {
  const { t } = useI18n();
  const [user, setUser] = useState<Item[]>(() => (typeof window === "undefined" ? [] : readUser()));
  const [folder, setFolder] = useState<string | null>(null);
  const [sel, setSel] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<SortKey>("name");
  const [asc, setAsc] = useState(true);
  const [busy, setBusy] = useState(false);
  const [creating, setCreating] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [marquee, setMarquee] = useState<{ x0: number; y0: number; x1: number; y1: number } | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const itemEls = useRef(new Map<string, HTMLButtonElement>());
  const skipClick = useRef(false);

  const all = useMemo(() => [...SYSTEM, ...user], [user]);

  const trail = useMemo(() => {
    const path: Item[] = [];
    let cur = folder;
    while (cur) {
      const f = all.find((i) => i.id === cur);
      if (!f) break;
      path.unshift(f);
      cur = f.parent;
    }
    return path;
  }, [all, folder]);

  const visible = useMemo(() => {
    const list = all.filter((i) => i.parent === folder);
    const dir = asc ? 1 : -1;
    return [...list].sort((a, b) => {
      if (sort === "kind") {
        if (a.kind !== b.kind) return (a.kind === "folder" ? -1 : 1) * dir;
      }
      if (sort === "size") return (a.size - b.size) * dir;
      if (sort === "date") return (a.at.localeCompare(b.at)) * dir;
      return a.name.localeCompare(b.name, undefined, { sensitivity: "base" }) * dir;
    });
  }, [all, folder, sort, asc]);

  useEffect(() => {
    setItemsSafe(readUser());
  }, []);

  function setItemsSafe(next: Item[]) {
    setUser(next);
    persist(next);
  }

  const toggleSort = (k: SortKey) => {
    if (sort === k) setAsc((v) => !v);
    else {
      setSort(k);
      setAsc(true);
    }
  };

  const saveFile = async (file: File, parent = folder) => {
    const id = `${Date.now()}-${file.name}`;
    await putBlob(id, file);
    setItemsSafe([
      { id, name: file.name, size: file.size, at: new Date().toISOString(), mime: file.type, kind: "file", parent },
      ...user,
    ]);
  };

  const makeFolder = () => {
    const name = folderName.trim() || t("downloads.untitled");
    setItemsSafe([
      {
        id: `dir-${Date.now()}`,
        name,
        size: 0,
        at: new Date().toISOString(),
        kind: "folder",
        parent: folder,
      },
      ...user,
    ]);
    setFolderName("");
    setCreating(false);
  };

  async function blobFor(it: Item): Promise<Blob | undefined> {
    if (it.system && it.href) {
      const res = await fetch(href(it.href));
      if (!res.ok) return undefined;
      return await res.blob();
    }
    return getBlob(it.id);
  }

  const downloadOne = async (it: Item) => {
    if (it.kind === "folder") {
      await compressIds([it.id], `${it.name}.zip`);
      return;
    }
    if (it.system && it.href) {
      const a = document.createElement("a");
      a.href = href(it.href);
      a.download = it.name;
      a.click();
      return;
    }
    const blob = await getBlob(it.id);
    if (blob) clickDownload(blob, it.name);
  };

  const descendants = (id: string): Item[] => {
    const kids = all.filter((i) => i.parent === id);
    return kids.flatMap((k) => [k, ...descendants(k.id)]);
  };

  const compressIds = async (ids: string[], zipName: string) => {
    setBusy(true);
    try {
      const entries: { path: string; data: Uint8Array }[] = [];
      const walk = async (id: string, prefix: string) => {
        const it = all.find((i) => i.id === id);
        if (!it) return;
        if (it.kind === "folder") {
          const kids = all.filter((c) => c.parent === id);
          if (kids.length === 0) {
            entries.push({ path: `${prefix}${it.name}/`, data: new Uint8Array() });
          }
          for (const k of kids) await walk(k.id, `${prefix}${it.name}/`);
          return;
        }
        const blob = await blobFor(it);
        if (!blob) return;
        entries.push({ path: `${prefix}${it.name}`, data: await blobToBytes(blob) });
      };
      if (ids.length === 1) {
        const only = all.find((i) => i.id === ids[0]);
        if (only?.kind === "folder") await walk(only.id, "");
        else if (only) await walk(only.id, "");
      } else {
        for (const id of ids) await walk(id, "");
      }
      if (entries.length === 0) return;
      const zip = buildZip(entries.map((e) => ({ path: e.path, data: e.data })));
      clickDownload(zip, zipName);
      const id = `zip-${Date.now()}`;
      await putBlob(id, zip);
      setItemsSafe([
        {
          id,
          name: zipName,
          size: zip.size,
          at: new Date().toISOString(),
          mime: "application/zip",
          kind: "file",
          parent: folder,
        },
        ...user,
      ]);
    } finally {
      setBusy(false);
    }
  };

  const removeIds = async (ids: string[]) => {
    const doomed = new Set<string>();
    for (const id of ids) {
      const it = all.find((i) => i.id === id);
      if (!it || it.system) continue;
      doomed.add(id);
      if (it.kind === "folder") descendants(id).forEach((d) => doomed.add(d.id));
    }
    for (const id of doomed) {
      const it = all.find((i) => i.id === id);
      if (it?.kind === "file" && !it.system) await delBlob(id).catch(() => undefined);
    }
    setItemsSafe(user.filter((i) => !doomed.has(i.id)));
    setSel(new Set());
  };

  const onItemClick = (e: MouseEvent, it: Item) => {
    if (skipClick.current) {
      skipClick.current = false;
      return;
    }
    if (e.metaKey || e.ctrlKey) {
      setSel((prev) => {
        const next = new Set(prev);
        if (next.has(it.id)) next.delete(it.id);
        else next.add(it.id);
        return next;
      });
      return;
    }
    if (e.shiftKey && sel.size) {
      const ids = visible.map((v) => v.id);
      const last = [...sel].pop() ?? it.id;
      const a = ids.indexOf(last);
      const b = ids.indexOf(it.id);
      if (a >= 0 && b >= 0) {
        const [lo, hi] = a < b ? [a, b] : [b, a];
        setSel(new Set(ids.slice(lo, hi + 1)));
      }
      return;
    }
    setSel(new Set([it.id]));
  };

  const hitMarquee = (box: { x0: number; y0: number; x1: number; y1: number }) => {
    const grid = gridRef.current;
    if (!grid) return;
    const gr = grid.getBoundingClientRect();
    const left = gr.left + Math.min(box.x0, box.x1);
    const top = gr.top + Math.min(box.y0, box.y1);
    const right = gr.left + Math.max(box.x0, box.x1);
    const bottom = gr.top + Math.max(box.y0, box.y1);
    const next = new Set<string>();
    for (const it of visible) {
      const el = itemEls.current.get(it.id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (r.right >= left && r.left <= right && r.bottom >= top && r.top <= bottom) next.add(it.id);
    }
    setSel(next);
  };

  const onGridDown = (e: MouseEvent) => {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest("[data-file]")) return;
    const grid = gridRef.current;
    if (!grid) return;
    const r = grid.getBoundingClientRect();
    const start = { x0: e.clientX - r.left, y0: e.clientY - r.top, x1: e.clientX - r.left, y1: e.clientY - r.top };
    setMarquee(start);
    if (!e.shiftKey && !e.metaKey && !e.ctrlKey) setSel(new Set());
    const move = (ev: globalThis.MouseEvent) => {
      const box = {
        ...start,
        x1: ev.clientX - r.left,
        y1: ev.clientY - r.top,
      };
      setMarquee(box);
      hitMarquee(box);
      skipClick.current = true;
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      setMarquee(null);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const selectedItems = visible.filter((i) => sel.has(i.id));
  const canDelete = selectedItems.some((i) => !i.system);
  const canZip = selectedItems.length > 0;

  return (
    <div className="px-4 py-10 pb-28">
      <div className="mx-auto max-w-5xl space-y-5">
        <PageHero
          kicker={`v${APP_VERSION}`}
          icon={<Download className="h-3.5 w-3.5" />}
          title={t("downloads.title")}
          subtitle={t("downloads.subtitle")}
        />

        <div className="glass-strong rounded-3xl overflow-hidden finder-window">
          <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/25 dark:border-white/10">
            <div className="flex gap-1.5 shrink-0" aria-hidden>
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <nav className="flex items-center gap-1 min-w-0 text-xs font-heading font-semibold text-sand-700 dark:text-sand-200">
              <button type="button" onClick={() => { setFolder(null); setSel(new Set()); }} className="hover:text-clay-500 truncate">
                {t("downloads.title")}
              </button>
              {trail.map((f) => (
                <span key={f.id} className="flex items-center gap-1 min-w-0">
                  <span className="opacity-40">/</span>
                  <button type="button" onClick={() => { setFolder(f.id); setSel(new Set()); }} className="hover:text-clay-500 truncate">
                    {f.name}
                  </button>
                </span>
              ))}
            </nav>
            <div className="ml-auto flex items-center gap-1">
              {(
                [
                  ["name", ArrowDownAZ],
                  ["date", Clock],
                  ["size", ArrowUpDown],
                  ["kind", Folder],
                ] as const
              ).map(([k, Icon]) => (
                <button
                  key={k}
                  type="button"
                  title={t(`downloads.sort${k[0]!.toUpperCase()}${k.slice(1)}`)}
                  onClick={() => toggleSort(k)}
                  className={`rounded-full p-1.5 ${sort === k ? "bg-clay-500 text-white" : "text-sand-600 dark:text-sand-300 hover:bg-white/30"}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 px-3 py-2 border-b border-white/20 dark:border-white/10">
            <button
              type="button"
              onClick={() => setCreating(true)}
              className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold"
            >
              <FolderPlus className="h-3.5 w-3.5" /> {t("downloads.newFolder")}
            </button>
            <label className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold cursor-pointer">
              <Upload className="h-3.5 w-3.5" /> {t("downloads.upload")}
              <input
                type="file"
                className="hidden"
                multiple
                onChange={(e) => {
                  const files = [...(e.target.files ?? [])];
                  e.target.value = "";
                  files.forEach((f) => void saveFile(f));
                }}
              />
            </label>
            <button
              type="button"
              disabled={!canZip || busy}
              onClick={() => {
                const name =
                  selectedItems.length === 1
                    ? `${selectedItems[0]!.name.replace(/\.[^.]+$/, "")}.zip`
                    : t("downloads.zipName");
                void compressIds([...sel], name);
              }}
              className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold disabled:opacity-40"
            >
              <Archive className="h-3.5 w-3.5" /> {t("downloads.compress")}
            </button>
            <button
              type="button"
              disabled={!canDelete}
              onClick={() => {
                if (!confirm(t("downloads.confirmDelete", { n: selectedItems.filter((i) => !i.system).length }))) return;
                void removeIds([...sel]);
              }}
              className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold text-red-600 dark:text-red-400 disabled:opacity-40"
            >
              <Trash2 className="h-3.5 w-3.5" /> {t("downloads.delete")}
            </button>
            {selectedItems.length === 1 && selectedItems[0]!.kind === "file" ? (
              <button
                type="button"
                onClick={() => void downloadOne(selectedItems[0]!)}
                className="inline-flex items-center gap-1.5 rounded-full bg-clay-500 text-white px-3 py-1.5 text-xs font-semibold"
              >
                <Download className="h-3.5 w-3.5" /> {t("downloads.get")}
              </button>
            ) : null}
          </div>

          {creating ? (
            <form
              className="px-4 py-2 flex gap-2 border-b border-white/20"
              onSubmit={(e) => {
                e.preventDefault();
                makeFolder();
              }}
            >
              <input
                autoFocus
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                placeholder={t("downloads.untitled")}
                className="flex-1 rounded-xl glass px-3 py-2 text-sm outline-none"
              />
              <button type="submit" className="rounded-full bg-clay-500 text-white px-3 py-1.5 text-xs font-semibold">
                {t("common.add")}
              </button>
              <button type="button" onClick={() => setCreating(false)} className="text-xs font-semibold text-sand-500">
                {t("common.close")}
              </button>
            </form>
          ) : null}

          <div
            ref={gridRef}
            onMouseDown={onGridDown}
            className="relative min-h-[22rem] p-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 select-none"
          >
            {visible.length === 0 ? (
              <p className="col-span-full text-center text-sm text-sand-500 py-16">{t("downloads.empty")}</p>
            ) : (
              visible.map((it) => {
                const on = sel.has(it.id);
                const Icon = it.kind === "folder" ? Folder : it.mime?.includes("zip") || it.name.endsWith(".zip") ? FileArchive : File;
                return (
                  <button
                    key={it.id}
                    type="button"
                    data-file
                    ref={(el) => {
                      if (el) itemEls.current.set(it.id, el);
                      else itemEls.current.delete(it.id);
                    }}
                    onClick={(e) => onItemClick(e, it)}
                    onDoubleClick={() => {
                      if (it.kind === "folder") {
                        setFolder(it.id);
                        setSel(new Set());
                      } else void downloadOne(it);
                    }}
                    className={`finder-item rounded-2xl p-3 flex flex-col items-center gap-2 text-center transition-transform duration-300 ${
                      on ? "bg-clay-500/20 ring-2 ring-clay-500" : "hover:bg-white/25 dark:hover:bg-white/10"
                    }`}
                  >
                    <Icon className={`h-11 w-11 ${it.kind === "folder" ? "text-clay-500" : "text-sand-500"}`} strokeWidth={1.6} />
                    <span className="text-[11px] font-heading font-semibold text-sand-800 dark:text-sand-100 line-clamp-2 w-full">
                      {it.name}
                    </span>
                    <span className="text-[10px] text-sand-400">
                      {it.kind === "folder" ? t("downloads.folder") : fmtSize(it.size, t)}
                    </span>
                  </button>
                );
              })
            )}
            {marquee ? (
              <div
                className="absolute border border-clay-500/70 bg-clay-500/15 pointer-events-none rounded-sm z-10"
                style={{
                  left: Math.min(marquee.x0, marquee.x1),
                  top: Math.min(marquee.y0, marquee.y1),
                  width: Math.abs(marquee.x1 - marquee.x0),
                  height: Math.abs(marquee.y1 - marquee.y0),
                }}
              />
            ) : null}
          </div>

          <div className="px-4 py-2 text-[11px] text-sand-500 border-t border-white/20 dark:border-white/10 flex justify-between">
            <span>
              {sel.size
                ? t("downloads.selected", { n: sel.size })
                : t("downloads.count", { n: visible.length })}
            </span>
            <span>{t("downloads.selectHint")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
