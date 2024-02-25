import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
export const hrConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: `Rootster Hrvatski`,

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
        text: "Testna okolina",
        items: [
          {
            text: "Testovi",
            link: "https://rootster.xyz",
          },
        ],
      },
      {
        text: "Kontakt",
        link: "/contact/",
        activeMatch: "/contact/",
      },
    ],

    sidebar: {
      "/about/": [
        {
          text: "O nama",
          items: [{ text: "Uvod", link: "/about/" }],
        },
      ],
      "/services/": [
        {
          text: "Usluge",
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
          items: [{ text: "Kontaktirajte nas", link: "/contact/" }],
        },
      ],
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
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
