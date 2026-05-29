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

## Deploy (custom domain: likhit-ajeesh.com)

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`:

1. Push to `main` — the workflow builds with Node 22 and publishes `dist/` to GitHub Pages.
2. In the repo's **Settings → Pages**, set the custom domain to `likhit-ajeesh.com`.
   `public/CNAME` already pins this so it survives each deploy.
3. Point DNS at GitHub Pages:
   - Apex `likhit-ajeesh.com` → A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` → CNAME to `<username>.github.io`
4. Enable **Enforce HTTPS** once the certificate is provisioned.

`vite.config.ts` uses `base: '/'`, which is correct for a root custom domain.

## Build

```bash
npm run build    # output in dist/
npm run preview  # preview production build
```
