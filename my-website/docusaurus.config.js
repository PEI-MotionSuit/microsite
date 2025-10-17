// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MotionSuit',
  //tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MotionSuit', // Usually your GitHub org/user name.
  projectName: 'MotionSuit', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          //feedOptions: {
          //  type: ['rss', 'atom'],
          //  xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          //onInlineTags: 'warn',
          //onInlineAuthors: 'warn',
          //onUntruncatedBlogPosts: 'warn',
        //},
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.svg',
      navbar: {
        title: 'MontionSuit',
        logo: {
          alt: 'MontionSuit Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog/Milestones', label: 'Milestones', position: 'left'},
          {to: '/blog/Sprints', label: 'Sprints', position: 'left'},
          {
            to: "https://github.com/PEI-iron-man-suit",
            label: "GitHub",
            position: "right",
            className: "github-link",
          },
          {
            to: "https://pei2025.atlassian.net/jira/software/projects/KAN/boards/1",
            label: "Jira",
            position: "right",
            className: "jira-link",
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt : 'FlexiGather repository on GitHub',
          src: 'img/icons8-github-96.png',
          href: 'https://github.com/PEI-iron-man-suit',
          width: 40,
          height: 40,
        },
        copyright: `<a href="docs/about_us">Group 2,</a> <a href ="https://www.ua.pt/"> University of Aveiro</a> <br> Copyright © ${new Date().getFullYear()} MotionSuit, Projeto de Engenharia Informática`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
