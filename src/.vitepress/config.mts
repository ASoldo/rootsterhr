import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import { enConfig } from "./en";
import { hrConfig } from "./hr";

const base = "/";
export default withPwa(
  defineConfig({
    base,
    vite: {},
    title: "Rootster",
    description: "Full-Stack Development",
    locales: {
      root: { label: "Hrvatski", lang: "hr", ...hrConfig },
      en: { label: "English", lang: "en", ...enConfig },
    },

    lastUpdated: true,
    themeConfig: {
      nav: [],
      search: {
        provider: "local",
        options: {
          detailedView: true,
        },
      },

      sidebar: [],

      socialLinks: [{ icon: "github", link: "https://github.com/ASoldo" }],
    },
    pwa: {
      strategies: "injectManifest",
      filename: "sw.ts",
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon-180x180.png",
        "maskable-icon-512x512.png",
      ],
      workbox: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        navigateFallback: "/",
        globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg,json,ico}"],
        globIgnores: ["**/node_modules/**/*", "sw.ts", "workbox-*.js"],
      },
      experimental: {
        includeAllowlist: true,
      },
      manifest: {
        name: "Rootster",
        short_name: "Rootster",
        description: "Full-Stack Development",
        theme_color: "#009BD4",
        background_color: "#009BD4",
        display: "standalone",
        orientation: "portrait",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
  }),
);
