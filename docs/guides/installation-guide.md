---
sidebar_position: 1
title: 'Telepítési útmutató'
---

# Docusaurus Telepítési Útmutató

Ez a dokumentum lépésről lépésre végigvezet a [Docusaurus](https://docusaurus.io/) dokumentációs rendszer telepítésén és elindításán.

## Előfeltételek

A Docusaurus használatához a következőkre van szükséged:

- **Node.js** (ajánlott verzió: 18.x vagy újabb)
- **npm** vagy **yarn** (az npm a Node.js-sel együtt települ)

### Ellenőrzés:

```bash
node -v
npm -v
```
---

## Projekt létrehozása

Használhatod a `create-docusaurus` parancsot a projekt gyors indításához.

```bash
npm create-docusaurus@latest my-website classic
```
- `my-website` - a létrehozandó mappa neve
- `classic` - az alapértelmezett sablon neve

Ez létrehoz egy új könyvtárat a szükséges fájlokkal.

## Könytába lépés

Miután létrejött a docusaurus projektünk, lépjünk a létrejött könyvtárba.

```bash
cd my-website
```

## Fejlesztői szerver indítása

```bash
npm start
```

A fenti parancs elindítja a fejlesztői szervert a `http://localhost:3000` címen.
