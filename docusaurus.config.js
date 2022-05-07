const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ido Hirsh',
  url: 'https://itsidohirsh.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'itsidohirsh',      // GitHub org/user name.
  projectName: 'itsidohirsh.github.io', // GitHub repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful metadata like html lang.
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/itsidohirsh/itsidohirsh.github.io/tree/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/itsidohirsh/itsidohirsh.github.io/tree/master/',
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
      navbar: {
        title: 'Ido Hirsh',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/itsidohirsh',
              },
            ],
          },
          {
            items: [
              {
                label: 'Facebook',
                href: 'https://facebook.com/itsidohirsh',
              },
            ],
          },
          {
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/itsidohirsh',
              },
            ],
          },
          {
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/itsidohirsh',
              },
            ],
          },
          {
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/19016500/ido-hirsh',
              },
            ],
          },
          {
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ido-hirsh-a894a8239',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Ido Hirsh`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
