---
slug: ffiktiv-blog-post
title: Fiktív Blog Post
---

# Docusaurus konfigurációs fájl dokumentáció (`docusaurus.config.js`)

Ez a dokumentum bemutatja a `docusaurus.config.js` fájl főbb beállításait a `my-awesome-docs` projekthez.

<!-- truncate -->

## Alapinformációk

```js
module.exports = {
  title: 'My Awesome Docs',
  tagline: 'A dokumentáció, amit megértesz',
  url: 'https://mydocs.example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'example-org',
  projectName: 'my-awesome-docs',

```

-   **title**: Az oldal címe.
    
-   **tagline**: Rövid leírás a főoldalon.
    
-   **url**: A weboldal fő URL-je.
    
-   **baseUrl**: Az alkalmazás gyökér URL-je (pl. `/docs/` ha aldomain alatt van).
    
-   **onBrokenLinks**: Mit tegyen törött link esetén (`throw`, `warn`).
    
-   **favicon**: A böngésző ikon.
    
-   **organizationName**: GitHub szervezet neve.
    
-   **projectName**: GitHub projekt neve.

## i18n (nemzetköziesítés)

```js
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hu'],
  },

```

-   **defaultLocale**: Alapértelmezett nyelv.
    
-   **locales**: Elérhető nyelvek listája.
    

## Presetek

```js
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/example-org/my-awesome-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/example-org/my-awesome-docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

```

-   **docs**: Dokumentációs oldal beállításai.
    
-   **blog**: Blog funkció beállításai.
    
-   **theme**: Egyéni stíluslap (CSS) hozzáadása.
    

## Téma konfiguráció

```js
  themeConfig: {
    navbar: {
      title: 'MyDocs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/intro', label: 'Dokumentáció', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/example-org/my-awesome-docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentáció',
          items: [
            { label: 'Bevezetés', to: '/docs/intro' },
            { label: 'Telepítés', to: '/docs/setup' },
          ],
        },
        {
          title: 'Közösség',
          items: [
            { label: 'GitHub', href: 'https://github.com/example-org/my-awesome-docs' },
            { label: 'Kérdések', href: 'https://github.com/example-org/my-awesome-docs/issues' },
          ],
        },
      ],
      copyright:
        `Copyright © ${new Date().getFullYear()} Example Org. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
};

```

-   **navbar**: Navigációs sáv elemei és logó.
    
-   **footer**: Lábléc linkjei és stílusa.
    
-   **prism**: Kódszínezés témái.