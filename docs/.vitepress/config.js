export default {
  title: "VitePress",
  description: "Just playing around.",
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
            {
              text: "Configuration",
              link: "/guide/configuration",
            },
          ],
        },
        {
          text: "Components",
          items: [
            {
              text: "Button",
              link: "/guide/what-is-vue3-tailwind",
            },
            {
              text: "Dropdown",
              link: "/guide/getting-started",
            },
            {
              text: "Select",
              link: "/guide/configuration",
            },
          ],
        },
      ],
    },
  },
};
