import type { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import customSidebarItemsGenerator from './docs/sidebar';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config: Config = {
  title: "Linkwarden",
  tagline: "Docs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://linkwarden.github.io",
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
      ({
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarItemsGenerator: customSidebarItemsGenerator,
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/linkwarden/docs/blob/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ]
  ],

  themeConfig: ({
    // Replace with your project's social card
    image: "img/logo.png",
    navbar: {
      title: "Linkwarden",
      logo: {
        alt: "Linkwarden Logo",
        src: "img/logo.png",
      },
      items: [
        {
          href: "/",
          label: "Documentation",
          position: "left",
        },
        {
          to: "https://blog.linkwarden.app",
          label: "Blog",
          position: "left",
        },
        {
          to: "https://linkwarden.app",
          label: "Website",
          position: "left",
        },
        {
          href: "https://github.com/linkwarden",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Linkwarden.`,
      links: [
        {
          title: "Explore",
          items: [
            {
              label: "Our Website",
              to: "https://linkwarden.app",
            },
            {
              label: "Read our blog",
              to: "https://blog.linkwarden.app",
            },
            {
              label: "Our public roadmap",
              to: "https://github.com/orgs/linkwarden/projects/1",
            },
            {
              label: "Study the documentation",
              to: "https://docs.linkwarden.app",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/linkwarden",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/LinkwardenHQ",
            },
            {
              label: "Mastodon",
              href: "https://fosstodon.org/@linkwarden",
            },
            {
              label: "Discord",
              href: "https://discord.gg/CtuYV47nuJ",
            },
          ],
        },
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          linkwarden: {
            hideSendButton: true,
            specPath: "openapi/linkwarden.yaml",
            outputDir: "docs/openapi",
            sidebarOptions: {
              groupPathsBy: "tag"
            },
            showSchemas: false,
          } satisfies OpenApiPlugin.Options,
        }
      },
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
