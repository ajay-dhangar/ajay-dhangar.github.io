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
          editUrl:
            "https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/",
          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath, rehypeKatex],
        },
        pages: {
          remarkPlugins: [npm2yarn],
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/",
          remarkPlugins: [[npm2yarn, { converters: ["pnpm"] }]],
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
            type: "dropdown",
            html: '<span class="nav-emoji"> 📚</span> Docs',
            position: "right",
            items: [
              {
                type: "html",
                className: "dropdown-archived-versions",
                value: "<b>📚 Tutorials</b>",
              },
              {
                type: "doc",
                docId: "docs",
                label: "Learning",
              },
              {
                label: "DSA",
                to: "/dsa/",
                activeBaseRegex: `/dsa/`,
              },
              {
                label: " Courses",
                to: "/courses/",
                activeBaseRegex: `/courses/`,
              },
              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                type: "html",
                className: "dropdown-archived-versions",
                value: "<b>🏷️ Tags</b>",
              },
              {
                label: "Tutorial Tags",
                to: "/docs/tags/",
                activeBaseRegex: `/docs/tags/`,
              },
              {
                label: "Courses Tags",
                to: "/courses/tags/",
                activeBaseRegex: `/courses/tags/`,
              },
              {
                label: "DSA Tags",
                to: "/dsa/tags/",
                activeBaseRegex: `/dsa/tags/`,
              },
            ],
          },
          {
            to: "/showcase/",
            html: '<span class="nav-emoji">🌍</span> Showcase',
            position: "right",
          },
          // {
          //   to: "/community/",
          //   html: '<span class="nav-emoji">🤝</span> Community',
          //   position: "right",
          // },
          {
            to: "/certificates/",
            html: '<span class="nav-emoji">🎓</span> Certificates',
            position: "right",
          },
          // {
          //   html: '<span class="nav-emoji"> 📊</span> Quiz',
          //   to: "https://quiz-app-ajay-dhangar.vercel.app/",
          //   position: "right",
          // },

          // {
          //   type: "dropdown",
          //   html: '<span class="nav-emoji">🏷️</span> Tags',
          //   position: "right",
          //   items: [
          //     {
          //       label: "🏷️ Tutorial Tags 📚",
          //       to: "/docs/tags/",
          //       activeBaseRegex: `/docs/tags/`,
          //     },
          //     {
          //       type: "html",
          //       value: '<hr style="margin: 0.3rem 0;">',
          //     },
          //     {
          //       label: "🏷️ Courses Tags 🎓",
          //       to: "/courses/tags/",
          //       activeBaseRegex: `/courses/tags/`,
          //     },
          //     {
          //       type: "html",
          //       value: '<hr style="margin: 0.3rem 0;">',
          //     },

          //     {
          //       label: "🏷️ DSA Tags 🧠",
          //       to: "/dsa/tags/",
          //       activeBaseRegex: `/dsa/tags/`,
          //     },
          //   ],
          // },

          {
            to: "/blog/",
            html: '<span class="nav-emoji">📰</span> Blog',
            position: "right",
          },
          // {
          //   href: "https://github.com/ajay-dhangar/ajay-dhangar.github.io",
          //   position: "right",
          //   className: "header-github-link",
          //   "aria-label": "GitHub repository",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: ` `,
            items: [
              {
                html: `
                    <div class="footer_info--container">
                      <img src="/img/logo.png" alt="Footer logo" />
                    </div>
                  `,
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Tutorials",
                to: "/docs",
              },
              {
                label: "Courses",
                to: "/courses",
              },
              {
                label: "Web Dev",
                to: "/web-dev",
              },
              {
                label: "DSA",
                to: "/docs/dsa/",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About",
                to: "/about/",
              },
              {
                label: "Contact",
                to: "#",
              },
              {
                label: "Careers",
                to: "#",
              },
              {
                label: "Team",
                to: "/community/team/",
              },
            ],
          },
          {
            title: "Terms/Conditions",
            items: [
              {
                label: "Privacy Policy",
                to: "/privacy-policy/",
              },
              {
                label: "Terms of Service",
                to: "/terms-service/",
              },
              {
                label: "Code of Conduct",
                to: "#",
              },
              {
                label: "Cookie Policy",
                to: "#",
              },
            ],
          },
          {
            title: "Quick Links",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Community",
                to: "/community/",
              },
              {
                label: "GitHub",
                href: "https://github.com/ajay-dhangar",
              },
              {
                label: "Products",
                href: "/product/",
              },
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/groups/14232119/",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@ajay-dhangar/",
              },
              {
                label: "Discord",
                href: "https://discord.gg/c53FQn3pRv",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/CodesWithAjay",
              },
            ],
          },
        ],
        logo: {
          alt: "Copyright © CMHQ Made with ❤️ by Ajay-Dhangar",
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
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        // editUrl: "#",
        sidebarPath: require.resolve("./sidebars.js"),
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
        id: "dsa",
        path: "dsa",
        routeBasePath: "dsa",
        // editUrl: "#",
        sidebarPath: require.resolve("./sidebars.js"),
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
        sidebarPath: require.resolve("./sidebars.js"),
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
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [[npm2yarn, { sync: true }], remarkMath, rehypeKatex],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "dsa-solutions",
        path: "dsa-solutions",
        routeBasePath: "dsa-solutions",
        // editUrl: "#",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [[npm2yarn, { sync: true }], remarkMath, rehypeKatex],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],

    [
      "@gracefullight/docusaurus-plugin-google-adsense",
      { adClient: "ca-pub-5832817025080991" },
    ],

    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "web-dev",
        path: "web-dev",
        routeBasePath: "web-dev",
        // editUrl: "#",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [[npm2yarn, { sync: true }], remarkMath, rehypeKatex],
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
