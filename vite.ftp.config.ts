import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: resolve(rootDir, "src/ftp"),
  publicDir: resolve(rootDir, "public"),
  base: "./",
  plugins: [viteReact(), tailwindcss()],
  resolve: {
    alias: {
      "@/lib/journal-api": resolve(rootDir, "src/lib/journal-local.ts"),
      "@/lib/chat-api": resolve(rootDir, "src/lib/chat-local.ts"),
      "@/lib/auth/client": resolve(rootDir, "src/ftp/auth-client.ts"),
      "@/lib/auth/use-current-user": resolve(rootDir, "src/ftp/use-current-user.ts"),
      "@/lib/auth/provider": resolve(rootDir, "src/ftp/auth-provider.tsx"),
      "@/lib/mail-api": resolve(rootDir, "src/ftp/mail-api.ts"),
      "@": resolve(rootDir, "src"),
    },
  },
  define: {
    "import.meta.env.VITE_FTP": JSON.stringify("1"),
    "import.meta.env.VITE_AUTH_ENABLED": JSON.stringify("true"),
  },
  build: {
    outDir: resolve(rootDir, "TakoLogs-ftp"),
    emptyOutDir: true,
    assetsDir: "assets",
  },
});
