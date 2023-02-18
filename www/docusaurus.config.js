// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  // --- CONFIG-NN #1: Add Custom Fields (accessible globally)
  customFields: {
    description: 'This site is a collection of resources that will help you learn about Azure Static Web Apps (with #30DaysOfSWA roadmaps and #7DaysOfSWA sprints) and stay up to date with the latest news and updates (with #ThisMonthInSWA roundups and #ThisYearInSWA retrospectives)',
  },

  // --- CONFIG-NN #2: Config Landing Pages metadata
  title: 'Azure Static Web Apps',
  tagline: 'Bring Your App Ideas to Life with Static Web Apps',

  // --- CONFIG-NN #3: Config Hosting (SWA or GH Pages)
  url: 'https://www.azurestaticwebapps.dev',
  baseUrl: '/',                // use '/30DaysOfSWA/' if gh-pages
  favicon: 'img/favicon.ico',
  organizationName: 'staticwebdev', 
  projectName: '30DaysOfSWA', 
  deploymentBranch: `gh-pages`, // if used

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // --- CONFIG-NN #4: Configure presets for theme (classic)
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({


        // Configure: Docs 
        // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
        docs: false,
        /*
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/staticwebdev/30DaysOfSWA/tree/main/www',
        },
        */

        // Configure: PRIMARY Blog (improve SEO)
        // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
        blog: {
          blogTitle: '#30DaysOfServerless',
          blogDescription: 'Learn about Azure Static Web Apps in #30Days of blog posts structured as 4 themed weeks taking you from fundamentals to advanced topics',
          blogSidebarCount: 32,
          blogSidebarTitle: '#30DaysOfSWA (2022)',
          tagsBasePath: 'tags',
          archiveBasePath: 'archive',
          postsPerPage: 1,
          showReadingTime: true,
          sortPosts: 'ascending'
        },

        // Configure: Theme (classic)
        // https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

        // Configure: Sitemap
        // https://docusaurus.io/docs/2.2.0/api/plugins/@docusaurus/plugin-sitemap
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],


  // --- CONFIG-NN #5: Theme Config = default mode, respect Prefers Colors
  // https://docusaurus.io/docs/api/themes/configuration
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({


      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },

      navbar: {
        title: 'Static Web Apps!',
        logo: {
          alt: '#30DaysOfSWA Logo',
          src: 'img/svg/logo.svg',
        },
        items: [
          {to: '/thismonth', label: '#ThisMonthInSWA', position: 'left'},
          {to: '/blog', label: '#30DaysOfSWA', position: 'left'},

          {to: '/roundup', label: 'Roundup', position: 'right'},
          {to: '/roadmap', label: 'Roadmap', position: 'right'},
          {to: 'https://learn.microsoft.com/en-us/azure/static-web-apps/?WT.mc_id=javascript-74011-ninarasi', label: 'Docs', position: 'right'},
          {to: 'https://portal.azure.com/?feature.customportal=false&WT.mc_id=javascript-61155-ninarasi#create/Microsoft.StaticApp', label: 'Deploy', position: 'right'},
         /* {to: '/roadmap', label: 'Roadmap', position: 'left'},*/
          /*{to: '/showcase', label: 'Showcase', position: 'left'},*/
         /* {to: '/contribute', label: 'Contribute', position: 'left'}, */
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
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft </a> - Built with <a href="https://docusaurus.io"> Docusaurus </a> - Deployed to <a href="https://aka.ms/swa"> Azure </a> - Created by <a href="https://github.com/nitya"> @nitya </a>`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      image: 'https://www.azurestaticwebapps.dev/img/png/roundup/sep.png',

      metadata: [
        {
          name: 'twitter:url', 
          content: 'https://aka.ms/swa/community'
        },
        {
          name: 'twitter:title', 
          content: 'Azure Static Web Apps: Community Hub'
        },
        {
          name: 'twitter:description', 
          content: 'The Azure Static Web Apps Community Hub: learn with #30DaysOfSWA then keep up with the latest news in #ThisMonthInSWA at https://aka.ms/swa/community'
        },
        {
          name: 'twitter:image', 
          content: 'https://www.azurestaticwebapps.dev/img/png/roundup/template.png'
        },
        {
          name: 'twitter:card', 
          content: 'summary_large_image'
        },
        {
          name: 'twitter:creator', 
          content: '@nitya'
        },
        {
          name: 'twitter:site', 
          content: '@AzureStaticApps'
        },

      ],

      announcementBar: {
        id: 'SWA Announcements',
        content:
        /*
          '<b>Find #30DaysOfSWA useful? Give it a star on <a href="https://github.com/staticwebdev/30DaysOfSWA"><b>GitHub</b></a></b>',
        */
        '<b> Join: <a href="https://aka.ms/swa/community/standups"> Monthly Community Standups </a> | Visit: <a href="https://aka.ms/30DaysOfSWA/github">GitHub Repo</a> (& give us a ⭐️)</b>',
        backgroundColor: '#50E6FF',
        textColor: '#552F99',
        isCloseable: false,
      },

      clarity: {
        ID: "byb2smbcn4", // Clarity Analytics: Instructions below
      }

    }),
  
  plugins: [

    // --- CONFIG-NN #6: Ideal Image Plugin for image optimization
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. 
        steps: 2, // #images b/w min and max (inclusive)
        disableInDev: false,
      },
    ],

    // --- CONFIG-NN #7: Blog Plugin for multi-instance blogs
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'blog-roundup',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'thismonth',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './blog-roundup',
        blogTitle: 'This Month In SWA',blogDescription: 'A monthly roundup of Azure Static Web Apps news, updates, content and more from your friendly neighborhood SWA team!',
        blogSidebarCount: 12,
        blogSidebarTitle: '#ThisMonthInSWA',
        tagsBasePath: 'tags',
        archiveBasePath: 'archive',
        postsPerPage: 1,
        showReadingTime: true,
        sortPosts: 'descending'
      },
    ],

    // --- CONFIG-NN #8: Clarity Analytics Plugin
    // https://github.com/PatelN123/docusaurus-plugin-clarity
    [
      'docusaurus-plugin-clarity',
      {
      }
    ],

  ],
};

module.exports = config;
