---
sidebar_position: 2
title: 'Konfigurációs ötletek'
---

# Docusaurus Konfigurációs Tippek

A Docusaurus fő konfigurációs fájlja: `docusaurus.config.js`. Az alábbiakban néhány gyakori beállítási lehetőséget és tippet találsz.

## 1. Weboldal neve és alapbeállítások

```js
module.exports = {
  title: 'Dokumentáció címe',
  tagline: 'Egy rövid leírás',
  url: 'https://sajatdomain.hu',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
};
```

## 2. Nyelvi támogatás

Többnyelvű oldalhoz:

```js
i18n: {
    defaultLocale: 'hu',
    locales: ['hu', 'en'],
},
```

## 3. Dokumentáció beállítások

```js
presets: [
  [
    'classic',
    {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        routeBasePath: '/docs', // vagy '/' ha kezdőlapként akarod
      },
      blog: {
        showReadingTime: true,
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    },
  ],
],
```

## 4. Téma testreszabása

Saját logó vagy színvilág:

```js
themeConfig: {
  navbar: {
    title: 'Dokumentáció',
    logo: {
      alt: 'Logó szöveg',
      src: 'img/logo.svg',
    },
    items: [
      { to: '/docs/intro', label: 'Doksi', position: 'left' },
      { to: '/blog', label: 'Blog', position: 'left' },
    ],
  },
  footer: {
    style: 'dark',
    copyright: `© ${new Date().getFullYear()} Cégnév`,
  },
},
```