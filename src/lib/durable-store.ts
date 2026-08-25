const DB_NAME = "takologs-durable";
const STORE = "kv";
const COOKIE = "takologs_sess";

function idb(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    if (typeof indexedDB === "undefined") return resolve(null);
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
  });
}

async function idbGet(key: string): Promise<string | null> {
  const db = await idb();
  if (!db) return null;
  return new Promise((resolve) => {
    const tx = db.transaction(STORE, "readonly");
    const r = tx.objectStore(STORE).get(key);
    r.onsuccess = () => resolve(typeof r.result === "string" ? r.result : null);
    r.onerror = () => resolve(null);
  });
}

async function idbSet(key: string, value: string) {
  const db = await idb();
  if (!db) return;
  await new Promise<void>((resolve) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(value, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => resolve();
  });
}

async function idbKeys(): Promise<string[]> {
  const db = await idb();
  if (!db) return [];
  return new Promise((resolve) => {
    const tx = db.transaction(STORE, "readonly");
    const r = tx.objectStore(STORE).getAllKeys();
    r.onsuccess = () => resolve((r.result ?? []).map(String));
    r.onerror = () => resolve([]);
  });
}

function cookieGet(name: string) {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : null;
}

function cookieSet(name: string, value: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=31536000; Path=/; SameSite=Lax`;
}

function cookieClear(name: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
}

export function durableGet(key: string): string | null {
  try {
    const ls = localStorage.getItem(key);
    if (ls) return ls;
  } catch {
    /* private mode */
  }
  if (key.includes("session")) return cookieGet(COOKIE);
  return null;
}

export function durableSet(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* quota */
  }
  void idbSet(key, value);
  if (key.includes("session")) cookieSet(COOKIE, value);
}

export function durableRemove(key: string) {
  try {
    localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
  void idbSet(key, "");
  if (key.includes("session")) cookieClear(COOKIE);
}

/** Copy IndexedDB (+ session cookie) into localStorage before React boots. */
export async function hydrateDurable() {
  try {
    await navigator.storage?.persist?.();
  } catch {
    /* ignore */
  }
  try {
    const keys = await idbKeys();
    for (const key of keys) {
      const v = await idbGet(key);
      if (!v) continue;
      try {
        if (!localStorage.getItem(key)) localStorage.setItem(key, v);
      } catch {
        /* ignore */
      }
    }
    const cookie = cookieGet(COOKIE);
    if (cookie && !localStorage.getItem("takologs-ftp-session")) {
      localStorage.setItem("takologs-ftp-session", cookie);
    }
  } catch {
    /* ignore */
  }
}
