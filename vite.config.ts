import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs/promises";
import { componentTagger } from "lovable-tagger";

function generateFaviconIco() {
  return {
    name: "generate-favicon-ico",
    apply: "build",
    async closeBundle() {
      try {
        const srcPng = path.resolve(__dirname, "public/favicon.png");
        const distDir = path.resolve(__dirname, "dist");
        const icoPath = path.join(distDir, "favicon.ico");
        const mod: any = await import("png-to-ico");
        const pngToIco = mod.default || mod;
        const buf = await pngToIco([srcPng]);
        await fs.writeFile(icoPath, buf);
        console.log("[build] Generated favicon.ico from favicon.png");
      } catch (err) {
        console.warn("[build] favicon.ico generation skipped:", err);
      }
    },
  } as const;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    generateFaviconIco()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: mode === "production" ? "/" : "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
