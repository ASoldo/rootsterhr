import { defineConfig } from "vitepress";
import { enConfig } from "./en";
import { hrConfig } from "./hr";

export default defineConfig({
  title: "Rootster",
  description: "Full-Stack Development",
  locales: {
    root: { label: "Hrvatski", lang: "hr", ...hrConfig },
    en: { label: "English", lang: "en", ...enConfig },
  },

  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Config", link: "/config" },
      { text: "Changelog", link: "https://github.com/..." },
    ],
    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/api-examples" },
          { text: "Getting Started", link: "/markdown-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/ASoldo" }],
  },
});
