import { themes as prismThemes } from "prism-react-renderer";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "dotenv/config";

const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Code Harbor Hub",
  tagline: "A place to learn and grow",
  favicon: "img/logo.jpg",

  url: process.env.URL,
  baseUrl: process.env.BASE_URL,
  customFields: {
    teamEmail: process.env.EMAIL,
  },

  organizationName: "ajay-dhangar",
  projectName: "code-harbor-hub",

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
          editUrl: "https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/",
          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath, rehypeKatex],
        },
        pages: {
          remarkPlugins: [npm2yarn],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "",
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
      // Replace with your project's social card
      image: "img/logo.jpg",
      announcementBar: {
        id: "announcementBar",
        content: `⭐️ If you like CodeHarborHub, give it a star on <a target="_blank" href="https://github.com/Ajay-Dhangar/">GitHub</a> and join us on <a target="_blank" href="https://www.linkedin.com/groups/14232119/">LinkedIn</a> ⭐️`,
        isCloseable: true,
      },

      algolia: {
        apiKey: "c1fc26c940b9a310faacfa13b70d46d0",
        indexName: "ajay-dhangario",
        appId: "46COWIIU59",
        contextualSearch: false,
      },

      navbar: {
        title: "CodeHarborHub",
        logo: {
          alt: "CodeHarborHub Logo",
          src: "img/nav-logo.jpg",
        },
        items: [
          {
            type: "doc",
            docId: "docs",
            html: '<span class="nav-emoji">📚</span> Tutorials',
          },

          {
            html: '<span class="nav-emoji">🧠</span> DSA',
            to: "/dsa",
          },

          {
            to: "/blog",
            html: '<span class="nav-emoji">📰</span> Blog',
          },

          // {
          //   type: "dropdown",
          //   html: '<span class="nav-emoji">📚</span> Learning',
          //   position: "left",
          //   items: [
          //     {
          //       type: "doc",
          //       docId: "docs",
          //       label: "📚 Tutorials 🚀",
          //     },

          //     {
          //       type: "html",
          //       value: '<hr style="margin: 0.3rem 0;">',
          //     },

          //     {
          //       to: "/courses",
          //       label: "🎓 Courses 🚀",
          //     },

          //     {
          //       type: "html",
          //       value: '<hr style="margin: 0.3rem 0;">',
          //     },

          //     {
          //       to: "/web-dev",
          //       label: "💻 Web Dev",
          //     },
          //     {
          //       type: "html",
          //       value: '<hr style="margin: 0.3rem 0;">',
          //     },

          //     {
          //       label: "🧠 DSA 🚀",
          //       to: "/dsa",
          //     },
          //   ],
          // },
          // {
          //   to: "/web-dev",
          //   label: "💻 Web Dev",
          //   position: "left",
          // },
          // {
          //   to: "/product",
          //   label: "👨‍💻 Product",
          //   position: "left",
          // },
          {
            to: "/showcase",
            html: '<span class="nav-emoji">🌍</span> Showcase',
            position: "left",
          },
          {
            to: "/community",
            html: '<span class="nav-emoji">🤝</span> Community',
            position: "left",
          },
          {
            html: '<span class="nav-emoji"> 📊</span> Quiz',
            to: "https://quiz-app-ajay-dhangar.vercel.app/",
          },
          {
            type: "dropdown",
            html: '<span class="nav-emoji">🏷️</span> Tags',
            position: "left",
            items: [
              {
                label: "🏷️ Tutorial Tags 📚",
                to: "/docs/tags/",
                activeBaseRegex: `/docs/tags/`,
              },

              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                label: "🏷️ Courses Tags 🎓",
                to: "/courses/tags/",
                activeBaseRegex: `/courses/tags/`,
              },
              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                label: "🏷️ DSA Tags 🧠",
                to: "/dsa/tags/",
                activeBaseRegex: `/dsa/tags/`,
              },
            ],
          },
          {
            href: "https://github.com/ajay-dhangar/code-harbor-hub",
            html: '<span class="nav-emoji"></span> GitHub',
            position: "right",
          },
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
                      <img src="/code-harbor-hub/img/logo.png" alt="Footer logo" />
                      <p>
                        Welcome to CodeHarborHub, a place to learn and grow. We are a community of developers, creators, and learners
                      </p>
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
                to: "/code-harbor-hub/about/",
              },
              {
                label: "Contact",
                to: "/code-harbor-hub/",
              },
              {
                label: "Careers",
                to: "/code-harbor-hub/",
              },
              {
                label: "Team",
                to: "/code-harbor-hub/",
              },
            ],
          },
          {
            title: "Terms/Conditions",
            items: [
              {
                label: "Privacy Policy",
                to: "/code-harbor-hub/privacy-policy/",
              },
              {
                label: "Terms of Service",
                to: "/code-harbor-hub/terms-service/",
              },
              {
                label: "Code of Conduct",
                to: "/code-harbor-hub/",
              },
              {
                label: "Cookie Policy",
                to: "/code-harbor-hub/",
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
                to: "/community",
              },
              {
                label: "GitHub",
                href: "https://github.com/ajay-dhangar",
              },
              {
                label: "Products",
                href: "/product",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/ajay-dhangar/",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@ajay-dhangar/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/_ajay.dhangar",
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
        additionalLanguages: ["powershell"],
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
        id: "dsa",
        path: "dsa",
        routeBasePath: "dsa",
        // editUrl: "#",
        sidebarPath: require.resolve("./sidebarsDSA.js"),
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
