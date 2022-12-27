export default {
  title: "Vue 3 Tailwind Docs",
  description: "Vue 3 Tailwind Documentation Site",
  themeConfig: {
    nav: [
      {
        text: "Guide",
        link: "/guide",
      },
    ],
    sidebar: {
      "/guide": [
        {
          text: "Introduction",
          items: [
            {
              text: "What is Vue3 Tailwind?",
              link: "/guide/what-is-vue3-tailwind",
            },
            {
              text: "Getting Started",
              link: "/guide/getting-started",
            },
          ],
        },
        {
          text: "Components",
          items: [
            {
              text: "Button",
              link: "/guide/components/button",
            },
            {
              text: "Datatable",
              link: "/guide/components/datatable",
            },
            {
              text: "Dropdown Menu",
              link: "/guide/components/dropdown-menu",
            },
            {
              text: "Form",
              link: "/guide/components/form",
            },
            {
              text: "Modal",
              link: "/guide/components/modal",
            },
            {
              text: "Offcanvas",
              link: "/guide/components/offcanvas",
            },
            {
              text: "Tabs",
              link: "/guide/components/tabs",
            },
            {
              text: "Toasts",
              link: "/guide/components/toasts",
            },
          ],
        },
      ],
    },
  },
  outDir: '../dist'
};
