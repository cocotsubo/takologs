self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(Promise.resolve());
});

self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const dest = e.request.destination;
  if (dest === "script" || dest === "worker" || dest === "style" || dest === "font") return;
  try {
    const u = new URL(e.request.url);
    if (u.pathname.includes("/assets/") || u.pathname.endsWith(".js") || u.pathname.endsWith(".mjs")) {
      return;
    }
  } catch {
    return;
  }
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request).then((r) => r || fetch(e.request))),
  );
});

self.addEventListener("message", (e) => {
  const d = e.data;
  if (!d || d.type !== "notify") return;
  e.waitUntil(
    self.registration.showNotification(d.title || "TakoLogs", {
      body: d.body || "TakoLogs",
      icon: "./apple-touch-icon.png",
      badge: "./icon-192.png",
      tag: d.tag || "takologs",
      renotify: true,
      data: { url: d.url || "./" },
    }),
  );
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || "./";
  e.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (c.url.includes(self.registration.scope) && "focus" in c) return c.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    }),
  );
});
