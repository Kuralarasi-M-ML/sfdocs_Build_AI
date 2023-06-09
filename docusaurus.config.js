const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Documentation',
  tagline: 'Simplified Monitoring',
  url: 'https://docs.snappyflow.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SnappyFlow', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  plugins: [
    '@docusaurus/theme-live-codeblock',
    require.resolve('docusaurus-plugin-image-zoom')
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsed: false,
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          editUrl: 'https://github.com/ram-dot-kumar/SFwebsite.git',
        },
        // blog: {
        //   showReadingTime: true, 
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  // stylesheets: [
  //   {
  //     href: require.resolve('./node_modules/katex/dist/katex.min.css'),
  //     type: 'text/css',
  //   },
  // ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        // logo: { 
        //   alt: 'SnappyFlow',
        //   type: 'doc',
        //   docId: 'Tracing/overview',
        //   src: 'img/logo-new.png',
        // },
        // items: [
        //   {
        //     type: 'doc',
        //     href: '/',
        //     position: 'left',
        //     label: 'DOCS',
        //     target:'_self',
        //   }
        // ],
        logo: {
          alt: 'SnappyFlow',
          src: 'img/logo-new.png',
          href: 'https://stage-website.snappyflow.io/',
          target: '_self',
        },
        items: [
          {
            type: 'doc',
            href: '/',
            docId: 'Tracing/overview',
            target: '_self',
            position: 'left',
            label: 'Documentation',
            class: 'docs',
          },
          {
            href: 'https://stage-website.snappyflow.io/product',
            docId: 'Tracing/overview',
            target: '_self',
            position: 'left',
            label: 'Product',
            class: 'docs',
          },
          {
            type: 'doc',
            href: 'https://stage-website.snappyflow.io/pricing',
            docId: 'Tracing/overview',
            target: '_self',
            position: 'left',
            label: 'Pricing',
            class: 'docs',
          },
          {
            type: 'doc',
            href: 'https://stage-website.snappyflow.io/blogs',
            docId: 'Tracing/overview',
            target: '_self',
            position: 'left',
            label: 'Blogs',
            class: 'docs',
          },
          {
            type: 'doc',
            href: 'https://stage-website.snappyflow.io/success-stories',
            docId: 'Tracing/overview',
            target: '_self',
            position: 'left',
            label: 'Success Stories',
            class: 'docs',
          },
          {
            type: 'doc',
            href: 'https://stage-accounts.snappyflow.io/freetrial',
            docId: 'Tracing/overview',
            target: '_self',
            position: 'left',
            label: 'Free Trial',
            class: 'getStart',
          },
          {
            type: 'doc',
            href: 'https://stage-accounts.snappyflow.io/login',
            docId: 'Tracing/overview',
            target: '_self',
            position: 'left',
            label: 'Login',
            class: 'loginButton',
          }
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/Tracing/overview',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        themes: ['@docusaurus/theme-live-codeblock'],
      },
      zoom: {
        selector: '.main-wrapper img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {}
      }
    }),
});
