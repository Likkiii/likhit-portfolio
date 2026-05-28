# Likhit Ajeesh — Portfolio

Modern personal portfolio built with **React**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

## Quick start

```bash
cd likhit-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Stack

| Tool | Purpose |
|------|---------|
| React 19 + TypeScript | UI components |
| Vite | Dev server & build |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations & scroll reveals |
| Lucide React | Icons |

## Edit content

All copy, experience, projects, and skills live in:

```
src/data/profile.ts
```

## Deploy to GitHub Pages

### Replace `likkiii.github.io` (user site)

1. Create or use repo named **`Likkiii.github.io`**
2. Copy this project into that repo
3. Build and deploy:

```bash
npm run build
npx gh-pages -d dist
```

`vite.config.ts` uses `base: '/'` by default — correct for `username.github.io`.

### Project site (`github.io/likhit-portfolio`)

```bash
npm install -D gh-pages cross-env
set GITHUB_PAGES=true && npm run build
npx gh-pages -d dist
```

Or use the `build:pages` script after installing `cross-env`.

## Build

```bash
npm run build    # output in dist/
npm run preview  # preview production build
```
