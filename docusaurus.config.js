import { themes as prismThemes } from "prism-react-renderer";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// import configTabs from './src/remark/configTabs';

const path = require("path");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Code Harbor Hub",
  tagline: "A place to learn and grow",
  favicon: "img/logo.jpg",

  url: "http://localhost:3000",
  baseUrl: "/code-harbor-hub/",

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
          editUrl: "https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/",
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
      image: "img/logo.jpg",
      announcementBar: {
        id: "announcementBar",
        content: `⭐️ If you like CodeHarborHub, give it a star on <a target="_blank" href="https://github.com/Ajay-Dhangar/">GitHub</a> and join us on <a target="_blank" href="https://www.linkedin.com/groups/14232119/">LinkedIn</a> ⭐️`,
        isCloseable: true,
      },

      algolia: {
        appId: `${process.env.APPLICATION_ID}`,
        apiKey: `${process.env.API_KEY}`,
        indexName: 'codeharborhub',
        contextualSearch: true,
        placeholder: 'Search Docs in CHH',
        // others
      },

      navbar: {
        title: "CodeHarborHub",
        logo: {
          alt: "My Site Logo",
          src: "img/nav-logo.jpg",
        },
        items: [
          {
            type: "dropdown",
            html: '<span class="nav-emoji">📚</span> Learning',
            position: "left",
            items: [
              {
                type: "doc",
                docId: "intro",
                label: "📚 Tutorials 🚀",
              },

              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                to: "/courses",
                label: "🎓 Courses 🚀",
              },

              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                to: "/web-dev",
                label: "💻 Web Dev",
              },
              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                label: "🧠 DSA 🚀",
                to: "/docs/dsa/",
              },
            ],
          },
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
            to: '/showcase',
            label: '🌍 Showcase',
            position: 'left',
          },
          {
            to: "/community",
            label: "🤝 Community",
            position: "left",
          },
          {
            label: "📝 Quiz Play",
            to: "https://quiz-app-ajay-dhangar.vercel.app/",
          },
          {
            type: 'dropdown',
            html: '<span class="nav-emoji">🏷️</span> Tags',
            position: 'left',
            items: [
              {
                label: '🏷️ Tutorial Tags 📚',
                to: '/docs/tags/',
                activeBaseRegex: `/docs/tags/`,
              },

              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },

              {
                label: '🏷️ Courses Tags 🎓',
                to: '/courses/tags/',
                activeBaseRegex: `/courses/tags/`,
              },
            ],
          },
          // { to: "/blog", label: "Blog", position: "left" },
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
