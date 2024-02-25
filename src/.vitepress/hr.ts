import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
export const hrConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  title: `Rootster Hrvatski`,

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
        link: "/guide/",
        activeMatch: "/es/guide/",
      },
      {
        text: "Configuración",
        link: "/config/",
        activeMatch: "/es/config/",
      },
      {
        text: "Complementos",
        link: "/plugins/",
        activeMatch: "/es/plugins/",
      },
      {
        text: "Recursos",
        items: [
          {
            text: "Equipo",
            link: "/team",
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
      "/api-examples": [
        {
          text: "Guía",
          items: [
            {
              text: "¿Por qué Vite?",
              link: "/guide/why",
            },
            {
              text: "Introducción",
              link: "/guide/",
            },
            {
              text: "Funcionalidades",
              link: "/guide/features",
            },
            {
              text: "Uso de complementos",
              link: "/guide/using-plugins",
            },
            {
              text: "Preempaquetado de dependencias",
              link: "/guide/dep-pre-bundling",
            },
            {
              text: "Gestión de recursos estáticos",
              link: "/guide/assets",
            },
            {
              text: "Compilación en producción",
              link: "/guide/build",
            },
            {
              text: "Despliegue de un sitio estático",
              link: "/guide/static-deploy",
            },
            {
              text: "Variables y modos de entorno",
              link: "/guide/env-and-mode",
            },
            {
              text: "Server-side Rendering (SSR)",
              link: "/guide/ssr",
            },
            {
              text: "Integración al Backend",
              link: "/guide/backend-integration",
            },
            {
              text: "Comparaciones",
              link: "/guide/comparisons",
            },
            {
              text: "Solución de problemas",
              link: "/guide/troubleshooting",
            },
            {
              text: "Migración desde v2",
              link: "/guide/migration",
            },
          ],
        },
        {
          text: "APIs",
          items: [
            {
              text: "API de complementos",
              link: "/guide/api-plugin",
            },
            {
              text: "API de HMR",
              link: "/guide/api-hmr",
            },
            {
              text: "API de JavaScript",
              link: "/guide/api-javascript",
            },
            {
              text: "Referencia de Configuración",
              link: "/config/",
            },
          ],
        },
      ],
      "/markdown-examples": [
        {
          text: "Configuración",
          items: [
            {
              text: "Configurando Vite",
              link: "/config/",
            },
            {
              text: "Opciones compartidas",
              link: "/config/shared-options",
            },
            {
              text: "Opciones para server",
              link: "/config/server-options",
            },
            {
              text: "Opciones para build",
              link: "/config/build-options",
            },
            {
              text: "Opciones para preview",
              link: "/config/preview-options",
            },
            {
              text: "Opciones para optimización de dependencias",
              link: "/config/dep-optimization-options",
            },
            {
              text: "Opciones para SSR",
              link: "/config/ssr-options",
            },
            {
              text: "Opciones para Worker",
              link: "/config/worker-options",
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
