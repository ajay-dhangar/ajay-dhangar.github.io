import "dotenv/config";

import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
import { themes as prismThemes } from "prism-react-renderer";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ajay Dhangar",
  tagline: "Ajay Dhangar - Full Stack Developer",
  favicon: "img/logo.png",

  url: process.env.URL,
  // baseUrl: process.env.BASE_URL,
  baseUrl: "/",
  customFields: {
    teamEmail: process.env.EMAIL,
  },

  organizationName: "ajay-dhangar",
  projectName: "Ajay Dhangar",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          // editUrl:
            // "https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/",
          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath, rehypeKatex],
        },
        pages: {
          remarkPlugins: [npm2yarn],
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     "https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/",
        //   remarkPlugins: [[npm2yarn, { converters: ["pnpm"] }]],
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.png",
      // announcementBar: {
      //   id: "announcementBar",
      //   content: `⭐️ If you like CodeHarborHub, give it a star on <a
      //   target="_blank"
      //   href="https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/">GitHub</a>
      //   and join us on <a target="_blank"
      //   href="https://www.linkedin.com/groups/14232119/">LinkedIn</a> ⭐️`,
      //   isCloseable: true,
      // },

      algolia: {
        apiKey: "2c1a3331ebff51f76d2f247323ee4ba4",
        indexName: "code-harbor-hub",
        appId: "M9BCMBK1PH",
        contextualSearch: false,
      },

      navbar: {
        title: "🧑‍💻 Ajay Dhangar",
        // logo: {
        //   alt: "Ajay Dhangar Logo",
        //   src: "img/logo-r.png",
        // },
        items: [
          {
            // About page
            html: '<span class="nav-emoji">👋</span> About',
            to: "/me/",
            position: "right",
          },
          {
            type: "doc",
            docId: "docs",
            position: "right",
            html: '<span class="nav-emoji"> 📚</span> Docs',
          },  
          {
            to: "/showcase/",
            html: '<span class="nav-emoji">🌍</span> Showcase',
            position: "right",
          },
          {
            to: "/certificates/",
            html: '<span class="nav-emoji">🎓</span> Certificates',
            position: "right",
          },
          {
            href: "https://github.com/ajay-dhangar",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Copyright © CHH Made with ❤️ by Ajay-Dhangar",
          src: "/img/main-logo.jpg",
          href: "https://github.com/ajay-dhangar",
        },
        copyright: `Copyright © ${new Date().getFullYear()} CodeHarborHub, Made by <a href="https://github.com/Ajay-Dhangar/">Ajay Dhangar</a>`,
      },
      prism: {
        theme: prismThemes.github,
        // theme: prismThemes.dracula,
        // theme: prismThemes.vsDark,
        darkTheme: prismThemes.dracula,
        // darkTheme: prismThemes.github,
        additionalLanguages: [
          "java",
          "latex",
          "haskell",
          "matlab",
          "PHp",
          "powershell",
          "bash",
          "diff",
          "json",
          "scss",
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
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
            href: "/img/logo.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
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
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],

    [
      "@gracefullight/docusaurus-plugin-google-adsense",
      { adClient: "ca-pub-5832817025080991" },
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
