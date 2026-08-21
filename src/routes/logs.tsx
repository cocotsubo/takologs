import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/logs")({ component: LogsLayout });

function LogsLayout() {
  return <Outlet />;
}
