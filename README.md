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
