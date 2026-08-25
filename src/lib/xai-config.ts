const KEY = "takologs-xai";

export function loadXaiKey() {
  try {
    return (localStorage.getItem(KEY) || "").trim();
  } catch {
    return "";
  }
}

export function saveXaiKey(key: string) {
  const v = key.trim();
  if (v) localStorage.setItem(KEY, v);
  else localStorage.removeItem(KEY);
}
