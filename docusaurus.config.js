// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
require('dotenv').config();


import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)





/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Anna Kulczycka',
  tagline: 'Technical Writer | Content Designer',
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
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ankakulka/techwriter-website',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


// module.exports = {

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

    algolia: {

      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: true,        // Optional, enables contextual search
        placeholder: 'Search for a term'
        // Optional: Other Algolia options
        // searchPagePath: 'search',   // Optional: enables standalone search page at /search
      },


      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: '/icons/custom-home.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ankakulka',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Tutorials',
            items: [
              {
                label: 'AI chatbot',
                to: '/docs/tutorials/AI-chatbot/',
              },
                            {
                label: 'Python tutorials',
                to: '/docs/tutorials/python-tutorials/',
              },
                            {
                label: 'CSS Animation',
                to: '/docs/tutorials/CSS-animation/',
              },
            ],
          },
          {
            title: 'Find me on:',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/anka-kulczycka/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ankakulka',
              },
              {
                label: 'Behance',
                href: 'https://www.behance.net/anna_kul',

              },

            ],
          },
          {
            title: 'Get in touch',
            items: [
              {
                label: 'Drop me a line',
                href: '/contact',

              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AnkaK. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

// };
module.exports = config;

export default config;
