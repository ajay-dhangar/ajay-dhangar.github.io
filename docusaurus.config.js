import { themes as prismThemes } from "prism-react-renderer";

const path = require("path");
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// import configTabs from './src/remark/configTabs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CodeHarborHub",
  tagline: "A place to learn and grow",
  favicon: "img/favicon.ico",

  url: "https://cmhq.tech",
  baseUrl: "/",

  organizationName: "cmhq",
  projectName: "code-harbor-hub",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'hi'],
  //   localeConfigs: {
  //     en: {
  //       label: 'English',
  //       direction: 'ltr',
  //     },
  //     hi: {
  //       label: 'हिंदी',
  //       direction: 'ltr',
  //     },
  //   },
  // },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true,
        docs: {
          path: "docs",
          sidebarPath: "sidebars.js",
          numberPrefixParser: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          admonitions: {
            keywords: ["my-custom-admonition"],
            extendDefaults: true,
          },
          editUrl:
            "https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/",
          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath, rehypeKatex], // remarkMath, configTabs
        },
        pages: {
          remarkPlugins: [npm2yarn], // remarkMath, configTabs
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "",
          remarkPlugins: [[npm2yarn, { sync: true }]], // remarkMath, configTabs
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      announcementBar: {
        id: "announcementBar",
        content: `⭐️ If you like CodeHarborHub, give it a star on <a target="_blank" href="https://github.com/Ajay-Dhangar/">GitHub</a> and join us on <a target="_blank" href="https://www.linkedin.com/groups/14232119/">LinkedIn</a> ⭐️`,
        isCloseable: true,
      },
      navbar: {
        title: "CodeHarborHub",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorials",
          },
          // {
          //   to: "/docs",
          //   label: "Tutorials",
          //   position: "left",
          // },
          {
            to: "/courses",
            label: "Courses",
            position: "left",
          },
          {
            to: "/web-dev",
            label: "Web Dev",
            position: "left",
          },
          {
            to: "/product",
            label: "Product",
            position: "left",
          },
          {
            to: "/docs/dsa/",
            label: "DSA",
            position: "left",
          },
          {
            to: "/community",
            label: "Community",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          // {
          //   href: "https://github.com/ajay-dhangar/code-harbor-hub",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "#",
              },
              {
                label: "Discord",
                href: "#",
              },
              {
                label: "Twitter",
                href: "#",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        // theme: prismThemes.dracula,
        // theme: prismThemes.vsDark,
        darkTheme: prismThemes.dracula,
        // darkTheme: prismThemes.github,
      },
    }),

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid", "@docusaurus/theme-live-codeblock"],

  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/docusaurus.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        // editUrl: "#",
        sidebarPath: require.resolve("./sidebarsCommunity.js"),
        remarkPlugins: [remarkMath.default],
        rehypePlugins: [rehypeKatex.default],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "product",
        path: "product",
        routeBasePath: "product",
        // editUrl: "#",
        sidebarPath: require.resolve("./sidebarsProduct.js"),
        remarkPlugins: [remarkMath.default],
        rehypePlugins: [rehypeKatex.default],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "courses",
        path: "courses",
        routeBasePath: "courses",
        // editUrl: "#",
        sidebarPath: require.resolve("./sidebarsCourses.js"),
        remarkPlugins: [remarkMath.default],
        rehypePlugins: [rehypeKatex.default],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],

    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "web-dev",
        path: "web-dev",
        routeBasePath: "web-dev",
        // editUrl: "#",
        sidebarPath: require.resolve("./sidebarsWebDev.js"),
        remarkPlugins: [remarkMath.default],
        rehypePlugins: [rehypeKatex.default],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],

    [
      path.join(__dirname, "/plugins/my-plugin"),
      {
        settings: "Some20settings",
        api: "Some-API",
        keys: "Some-keys",
      },
    ],
  ],
};

export default config;
