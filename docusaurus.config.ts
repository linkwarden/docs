import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import customSidebarItemsGenerator from "./docs/sidebar";

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// Every route on this site is lowercase, but plenty of links in the wild are
// not: the Usage section used to be published as /Usage, and older Linkwarden
// releases still link to /Usage/advanced-search from the app. Hosts match paths
// case-sensitively, so those all land on the 404 page.
//
// This runs as a plain inline script in <head>, before the deferred bundles, so
// the browser leaves for the correct URL before React ever renders the missing
// route. Doing it later (from a client module) makes the router render its
// not-found state first, which surfaces as an error overlay in dev.
const lowercaseRouteRedirect = `
(function () {
  var pathname = window.location.pathname;
  var lowercased = pathname.toLowerCase();
  if (lowercased !== pathname) {
    window.location.replace(lowercased + window.location.search + window.location.hash);
  }
})();
`.trim();

const config: Config = {
  title: "Linkwarden",
  tagline: "Docs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.linkwarden.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "linkwarden", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "deployment",

  scripts: [
    {
      src: "https://linkwarden-meta.xyz/js/script.js",
      async: true,
      defer: true,
      "data-domain": "docs.linkwarden.app",
    },
  ],

  headTags: [
    {
      tagName: "script",
      attributes: {},
      innerHTML: lowercaseRouteRedirect,
    },
  ],

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          sidebarItemsGenerator: customSidebarItemsGenerator,
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          routeBasePath: "/",
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/linkwarden/docs/blob/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    // Replace with your project's social card
    image: "img/logo.png",
    navbar: {
      title: "Docs",
      logo: {
        alt: "Linkwarden Logo",
        src: "img/linkwarden_light.png",
        srcDark: "img/linkwarden_dark.png",
      },
      items: [
        {
          type: "search",
          position: "right",
        },
        {
          href: "https://discord.gg/CtuYV47nuJ",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/linkwarden",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    algolia: {
      appId: "QQG7IO4GFL",
      apiKey: "c53e0f4e15e58db426d5e8a4a7ce5219",
      indexName: "Linkwarden Documentation",
      contextualSearch: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/self-hosting/installation",
            to: "/self-hosting/setup",
          },
        ],
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          linkwarden: {
            hideSendButton: true,
            specPath: "openapi/linkwarden.yaml",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
            showSchemas: false,
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
