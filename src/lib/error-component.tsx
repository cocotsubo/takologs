import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  const msg = error?.message || "An unexpected error occurred. Try reloading the page.";
  const moduleFail = /importing a module script failed|failed to fetch dynamically imported/i.test(msg);
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center " +
        "bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50"
      }
    >
      <span className="text-red-500" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="text-lg font-semibold">Something went wrong</h1>
      <p className="max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400">{msg}</p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="mt-2 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 px-4 py-2 text-sm font-semibold"
      >
        {moduleFail ? "Reload the app" : "Reload"}
      </button>
    </main>
  );
}
