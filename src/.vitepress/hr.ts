import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
export const hrConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: `Rootster`,

  description: "Full-Stack Development",
  head: [],
  lang: "hr-HR",

  themeConfig: {
    logo: {
      dark: "/logo-white.svg",
      light: "/logo-black.svg",
    },

    editLink: {
      pattern: "https://github.com/ASoldo/rootsterhr/edit/main/src/:path",
      text: "Uredi stranicu na GitHubu",
    },

    footer: {
      message: `Sva prava pridržana`,
      copyright: "&copy; 2024 Rootster",
    },

    nav: [
      {
        text: "Istražite Rootster",
        link: "/getting-started/",
        activeMatch: "/getting-started/",
      },

      {
        text: "O Nama",
        link: "/about/",
        activeMatch: "/about/",
      },
      {
        text: "Usluge",
        link: "/services/",
        activeMatch: "/services/",
      },

      {
        text: "Kontakt",
        link: "/contact/",
        activeMatch: "/contact/",
      },
      {
        text: "Testna okolina",
        items: [
          {
            text: "Testovi",
            link: "https://rootster.xyz",
          },
        ],
      },
    ],

    sidebar: {
      "/about/": [
        {
          text: "O nama",
          collapsed: false,
          items: [{ text: "Uvod", link: "/about/" }],
        },
      ],
      "/services/": [
        {
          text: "Usluge",
          collapsed: false,
          items: [
            { text: "Razvoj igara", link: "/services/game-development/" },
            {
              text: "Frontend razvoj",
              link: "/services/frontend-development/",
            },
            { text: "Backend razvoj", link: "/services/backend-development/" },
            { text: "Infrastruktura", link: "/services/infrastrucutre/" },
            {
              text: "Upravljanje sadržajem",
              link: "/services/content-management/",
            },
          ],
        },
      ],
      "/contact/": [
        {
          text: "Kontakt",
          collapsed: false,
          items: [{ text: "Kontaktirajte nas", link: "/contact/" }],
        },
      ],
      "/getting-started/": [
        {
          text: "Istražite Rootster",
          collapsed: false,
          items: [
            {
              text: "api-examples",
              link: "/getting-started/sectiona/",
            },
            {
              text: "mardown-examples",
              link: "/getting-started/sectionb/",
            },
          ],
        },
      ],
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
        timeZone: "Europe/Zagreb",
      },
    },

    outlineTitle: "Na ovoj stranici",
    docFooter: {
      prev: "Prijašnja stranica",
      next: "Sljedeća stranica",
    },
  },
};
