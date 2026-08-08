# Phase 9 SEO environment configuration

`NEXT_PUBLIC_SITE_URL` controls the public origin used by canonical metadata, Open Graph metadata, Organization/WebSite structured data, `robots.txt`, and `sitemap.xml`.

## Demo / UAT

```env
NEXT_PUBLIC_SITE_URL=https://tayseerdemo.xyz
```

## Production

```env
NEXT_PUBLIC_SITE_URL=https://tayseer.me
```

The value should be an absolute `http` or `https` origin without a path. Missing or invalid values safely fall back to `https://tayseer.me`.

Because these SEO files are generated during the Next.js build, set the environment variable before running the production build and redeploy whenever the public origin changes.
