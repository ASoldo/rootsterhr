import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: `Rootster English`,

  description: "Full-Stack Development",
  head: [
    // ["meta", { property: "og:url", content: ogUrl }],
    // ["meta", { property: "og:description", content: ogDescription }],
  ],

  themeConfig: {
    editLink: {
      pattern: "https://github.com/vitejs/docs-es/edit/main/docs/:path",
      text: "Sugerir cambios para esta página",
    },

    footer: {
      message: `Publicado bajo licencia MIT.`,
      copyright:
        "Copyright © 2019-actualidad Evan You & colaboradores de Vite",
    },

    nav: [
      {
        text: "Guía",
        link: "/en/guide/",
        activeMatch: "/es/guide/",
      },
      {
        text: "Configuración",
        link: "/en/config/",
        activeMatch: "/es/config/",
      },
      {
        text: "Complementos",
        link: "/en/plugins/",
        activeMatch: "/es/plugins/",
      },
      {
        text: "Recursos",
        items: [
          {
            text: "Equipo",
            link: "/en/team",
          },
          {
            items: [
              {
                text: "Twitter",
                link: "https://twitter.com/vite_js",
              },
              {
                text: "Chat de Discord",
                link: "https://chat.vitejs.dev",
              },
              {
                text: "Awesome Vite",
                link: "https://github.com/vitejs/awesome-vite",
              },
              {
                text: "DEV Community",
                link: "https://dev.to/t/vite",
              },
              {
                text: "Complementos de Rollup compatibles",
                link: "https://vite-rollup-plugins.patak.dev/",
              },
              {
                text: "Lista de Cambios",
                link: "https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md",
              },
            ],
          },
        ],
      },
      {
        text: "Versión",
        items: [
          {
            text: "Documentación de Vite 3 (producción)",
            link: "https://vitejs.dev/es/",
          },
          {
            text: "Documentación de Vite 2",
            link: "https://v2.vitejs.dev",
          },
        ],
      },
    ],

    sidebar: {
      "/en/guide/": [
        {
          text: "Guía",
          items: [
            {
              text: "¿Por qué Vite?",
              link: "/en/guide/why",
            },
            {
              text: "Introducción",
              link: "/en/guide/",
            },
            {
              text: "Funcionalidaden",
              link: "/en/guide/features",
            },
            {
              text: "Uso de complementos",
              link: "/en/guide/using-plugins",
            },
            {
              text: "Preempaquetado de dependencias",
              link: "/en/guide/dep-pre-bundling",
            },
            {
              text: "Gentión de recursos estáticos",
              link: "/en/guide/assets",
            },
            {
              text: "Compilación en producción",
              link: "/en/guide/build",
            },
            {
              text: "Denpliegue de un sitio estático",
              link: "/en/guide/static-deploy",
            },
            {
              text: "Variablen y modos de entorno",
              link: "/en/guide/env-and-mode",
            },
            {
              text: "Server-side Rendering (SSR)",
              link: "/en/guide/ssr",
            },
            {
              text: "Integración al Backend",
              link: "/en/guide/backend-integration",
            },
            {
              text: "Comparacionen",
              link: "/en/guide/comparisons",
            },
            {
              text: "Solución de problemas",
              link: "/en/guide/troubleshooting",
            },
            {
              text: "Migración dende v2",
              link: "/en/guide/migration",
            },
          ],
        },
        {
          text: "APIs",
          items: [
            {
              text: "API de complementos",
              link: "/en/guide/api-plugin",
            },
            {
              text: "API de HMR",
              link: "/en/guide/api-hmr",
            },
            {
              text: "API de JavaScript",
              link: "/en/guide/api-javascript",
            },
            {
              text: "Referencia de Configuración",
              link: "/en/config/",
            },
          ],
        },
      ],
      "/en/config/": [
        {
          text: "Configuración",
          items: [
            {
              text: "Configurando Vite",
              link: "/en/config/",
            },
            {
              text: "Opcionen compartidas",
              link: "/en/config/shared-options",
            },
            {
              text: "Opcionen para server",
              link: "/en/config/server-options",
            },
            {
              text: "Opcionen para build",
              link: "/en/config/build-options",
            },
            {
              text: "Opcionen para preview",
              link: "/en/config/preview-options",
            },
            {
              text: "Opcionen para optimización de dependencias",
              link: "/en/config/dep-optimization-options",
            },
            {
              text: "Opcionen para SSR",
              link: "/en/config/ssr-options",
            },
            {
              text: "Opcionen para Worker",
              link: "/en/config/worker-options",
            },
          ],
        },
      ],
    },

    outlineTitle: "En esta página",
    docFooter: {
      prev: "Página anterior",
      next: "Próxima página",
    },
  },
};
