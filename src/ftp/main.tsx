import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { hydrateDurable } from "@/lib/durable-store";
import { router } from "./router";
import "../styles.css";

async function boot() {
  await hydrateDurable();
  try {
    await navigator.serviceWorker?.register("./sw.js");
  } catch {
    /* ignore */
  }
  try {
    const { flushDue } = await import("@/lib/notify");
    flushDue();
  } catch {
    /* ignore */
  }
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}

void boot();
