# Tucson Leak Pros

A statically exported Next.js website for Tucson slab-leak service, location,
guide, and blog content.

## Architecture

- Next.js App Router with TypeScript and React
- Static export to the `out/` directory
- Route metadata, canonical URLs, XML sitemap, and JSON-LD
- Precompressed WebP image assets
- No application server or database is required for the published site

Because `output: "export"` is enabled, server actions, request-dependent route
handlers, and the default Next.js image optimization service are not available
at runtime. Any production contact-form delivery must use a secure external
endpoint or a deployment architecture that supports server-side handling.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Quality checks

```bash
npm run check
```

This runs ESLint, TypeScript validation, and the production static build. The
generated site is written to `out/`.

## Deployment

Publish the contents of `out/` with any static host. Configure the host so
extensionless route requests resolve to the matching exported HTML file or
directory index.

### Cloudflare Pages

Use the static Pages preset. This repository does not need the Next.js Workers
adapter, OpenNext, Pages Functions, or a Worker runtime.

| Cloudflare setting | Value |
| --- | --- |
| Framework preset | `Next.js (Static HTML Export)` |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | Repository root (leave the field blank) |
| Node version | `22.16.0` (pinned by `.nvmrc`) |

The build command also runs `scripts/validate-static-export.mjs` through the
`postbuild` hook. Deployment stops before upload if the export is missing a
required file, contains a broken local HTML reference, exceeds Cloudflare
Pages' 20,000-file free-plan limit, or contains an asset larger than 25 MiB.

The `public/_headers` file is copied into `out/` automatically and applies
security headers plus long-term caching for hashed Next.js assets.

Do not set the output directory to `.next`, `.vercel/output/static`, or
`public`. Those directories belong to different Next.js deployment modes.

The current contact form is client-side only and displays a confirmation in
the browser. Real form delivery requires a secure external form endpoint or a
separately designed server-side deployment; static Pages hosting does not send
the form by itself.
