import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { JournalProvider } from "@/components/journal-context";
import { SearchPalette } from "@/components/search-palette";
import { ToastHost } from "@/components/toast-host";
import { Shell } from "@/components/shell";
import { I18nProvider } from "@/lib/i18n";
import { PrefsProvider } from "@/lib/prefs";
import { ThemeProviders, THEME_BOOT_SCRIPT } from "@/lib/theme";
import appCss from "../styles.css?url";

const APP_NAME = "TakoLogs";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover, interactive-widget=resizes-content",
      },
      { title: `${APP_NAME} — Savoir, réduction des risques & journal` },
      {
        name: "description",
        content:
          "TakoLogs : moteur de recherche de substances, comparateur, réduction des risques et journal personnel d'expériences.",
      },
      { name: "theme-color", content: "#c9704f" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "TakoLogs" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&display=swap",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
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
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
