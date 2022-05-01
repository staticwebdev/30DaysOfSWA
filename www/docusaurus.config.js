// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '#30DaysOfSWA',
  tagline: 'Bring Your App Ideas to Life with Static Web Apps',
  url: 'https://staticwebdev.github.io',
  baseUrl: '/', // NOTE: Use '/30DaysOfSWA/' for GH Pages. '/' otherwise
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // -- Customized for Deployment Configuration
  organizationName: 'staticwebdev', // Usually your GitHub org/user name.
  projectName: '30DaysOfSWA', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: `gh-pages`, // default = gh-pages

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        /*
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/staticwebdev/30DaysOfSWA/tree/main/www',
        },
        */
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/staticwebdev/30DaysOfSWA/tree/main/www',
            blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      navbar: {
        title: '#30DaysOfSWA',
        logo: {
          alt: '#30DaysOfSWA Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Series', position: 'left'},
          {to: '/resources', label: 'Resources', position: 'left'},
          {to: '/roadmap', label: 'Roadmap', position: 'left'},
          {to: '/showcase', label: 'Showcase', position: 'right'},
          {to: 'https://github.com/orgs/staticwebdev/discussions', label: 'Discussions', position: 'right'},
          
          /*
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Exercises',
          },
          */
          {
            href: 'https://github.com/staticwebdev/30DaysOfSWA',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          /*
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          */
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft - Built with ❤️ &nbsp; using Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      image: 'img/logo.png',

      metadata: [{
        name: 'twitter:card', 
        content: 'Welcome to the Azure Static Web Apps Gallery of community-created projects! Explore the examples - or add your own!'
      }],

      announcementBar: {
        id: 'Add Your Project!',
        content:
          'Join us May 19 for our first <a href="https://aka.ms/swaanniversary"><b>#SWAanniversary</b></a>',
        backgroundColor: '#50E6FF',
        textColor: '#552F99',
        isCloseable: false,
      },
    }),
};

module.exports = config;
