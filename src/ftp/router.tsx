import {
  Outlet,
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { JournalProvider } from "@/components/journal-context";
import { SearchPalette } from "@/components/search-palette";
import { ToastHost } from "@/components/toast-host";
import { Shell } from "@/components/shell";
import { AppErrorComponent } from "@/lib/error-component";
import { I18nProvider } from "@/lib/i18n";
import { PrefsProvider } from "@/lib/prefs";
import { ThemeProviders } from "@/lib/theme";
import { Home } from "@/routes/index";
import { ComparePage } from "@/routes/compare";
import { EffectsPage } from "@/routes/effects";
import { HarmPage } from "@/routes/harm-scale";
import { Login } from "@/routes/login";
import { LogDetail } from "@/routes/logs.$id";
import { LogsPage } from "@/routes/logs.index";
import { NewLog } from "@/routes/logs.new";
import { NeuroPage } from "@/routes/neuro";
import { ProfilePage } from "@/routes/profile";
import { ReductionPage } from "@/routes/reduction";
import { SubstancePage } from "@/routes/substance.$slug";
import { SubstancesPage } from "@/routes/substances";
import { ExperiencesPage } from "@/routes/experiences";
import { AlertsPage } from "@/routes/alerts";
import { LegalPage } from "@/routes/legal";
import { DownloadsPage } from "@/routes/downloads";
import { ChangelogPage } from "@/routes/changelog";
import { ChatPage } from "@/routes/chat";
import { ResetPage } from "@/routes/reset";
import { AdminPage } from "@/routes/admin";

function FtpRoot() {
  return (
    <ThemeProviders>
      <I18nProvider>
        <PrefsProvider>
          <JournalProvider>
            <Shell>
              <Outlet />
            </Shell>
            <SearchPalette />
            <ToastHost />
          </JournalProvider>
        </PrefsProvider>
      </I18nProvider>
    </ThemeProviders>
  );
}

const rootRoute = createRootRoute({
  component: FtpRoot,
  errorComponent: AppErrorComponent,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const substancesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/substances",
  component: SubstancesPage,
});
const substanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/substance/$slug",
  component: SubstancePage,
});
const compareRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/compare",
  component: ComparePage,
});
const effectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/effects",
  component: EffectsPage,
});
const neuroRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/neuro",
  component: NeuroPage,
});
const harmRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/harm-scale",
  component: HarmPage,
});
const reductionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reduction",
  component: ReductionPage,
});
const experiencesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/experiences",
  component: ExperiencesPage,
});
const alertsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/alerts",
  component: AlertsPage,
});
const legalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/legal",
  component: LegalPage,
});
const downloadsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/downloads",
  component: DownloadsPage,
});
const changelogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/changelog",
  component: ChangelogPage,
});
const chatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/chat",
  component: ChatPage,
});
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfilePage,
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});
const resetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reset",
  component: ResetPage,
  validateSearch: (s: Record<string, unknown>) => ({
    token: typeof s.token === "string" ? s.token : "",
  }),
});
const logsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/logs",
  component: () => <Outlet />,
});
const logsIndexRoute = createRoute({
  getParentRoute: () => logsRoute,
  path: "/",
  component: LogsPage,
});
const logsNewRoute = createRoute({
  getParentRoute: () => logsRoute,
  path: "new",
  component: NewLog,
});
const logsIdRoute = createRoute({
  getParentRoute: () => logsRoute,
  path: "$id",
  component: LogDetail,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  substancesRoute,
  substanceRoute,
  compareRoute,
  effectsRoute,
  neuroRoute,
  harmRoute,
  reductionRoute,
  experiencesRoute,
  alertsRoute,
  legalRoute,
  downloadsRoute,
  changelogRoute,
  chatRoute,
  profileRoute,
  adminRoute,
  loginRoute,
  resetRoute,
  logsRoute.addChildren([logsIndexRoute, logsNewRoute, logsIdRoute]),
]);

export const router = createRouter({
  routeTree,
  history: createHashHistory(),
  defaultErrorComponent: AppErrorComponent,
  defaultViewTransition: true,
});
