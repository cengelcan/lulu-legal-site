# lulu-legal-site

Marketing landing page and legal/support pages for **Lulu: Pet Health Journal**.

Built with [Eleventy](https://www.11ty.dev/) so the navbar, footer, and layouts live in one place.

## Pages

| URL | Description |
|-----|-------------|
| `/` | Landing page |
| `/privacy-policy/` | Privacy Policy |
| `/terms/` | Terms of Service |
| `/support/` | Support & contact |

## Project structure

```
lulu-legal-site/
├── _includes/
│   ├── header.njk          # Shared navbar (single source of truth)
│   ├── footer.njk          # Shared footer (single source of truth)
│   └── layouts/
│       ├── landing.njk
│       └── legal.njk
├── src/                    # Page content (edit these)
│   ├── index.njk
│   ├── privacy-policy.njk
│   ├── terms.njk
│   └── support.njk
├── css/style.css
├── images/
├── eleventy.config.js
└── package.json
```

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080)

To build without a dev server:

```bash
npm run build
npx serve _site
```

## Deploy to Vercel

Vercel settings (also in `vercel.json`):

- **Build command:** `npm run build`
- **Output directory:** `_site`

```bash
npm i -g vercel
vercel --prod
```

## Editing content

| What to change | Where |
|----------------|-------|
| Navbar links / logo | `_includes/header.njk` |
| Landing page sections | `src/index.njk` |
| Privacy Policy body | `src/privacy-policy.njk` |
| Terms body | `src/terms.njk` |
| Support body | `src/support.njk` |
| Shared styles | `css/style.css` |

When updating Privacy Policy or Terms, change the "Last updated" date in the page content.

## Contact

Support email: support@lulu.pet
