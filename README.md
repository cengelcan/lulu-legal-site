# lulu-legal-site

Marketing landing page and legal/support pages for **Lulu: Pet Health Journal**.

Built with [Eleventy](https://www.11ty.dev/) so the navbar, footer, and layouts live in one place.

## Pages

| URL | Description |
|-----|-------------|
| `/` | Landing page |
| `/en/`, `/de/`, `/tr/` | Localized landing pages |
| `/app/` | Redirects to Lulu on the App Store |
| `/en/privacy-policy/` | Privacy Policy (English) |
| `/de/privacy-policy/` | Datenschutzerklärung (Deutsch) |
| `/tr/privacy-policy/` | Gizlilik Politikası (Türkçe) |
| `/en/terms/` | Terms of Service (English) |
| `/de/terms/` | Nutzungsbedingungen (Deutsch) |
| `/tr/terms/` | Hizmet Koşulları (Türkçe) |
| `/privacy-policy/` | Redirects to the English Privacy Policy |
| `/terms/` | Redirects to the English Terms of Service |
| `/support/` | Support & contact |
| `/en/support/`, `/de/support/`, `/tr/support/` | Localized support pages |
| `/en/updates/`, `/de/updates/`, `/tr/updates/` | Localized release notes |
| `/updates/` | Redirects to the English release notes |

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
│   ├── privacy-policy.njk  # English source text
│   ├── terms.njk           # English source text
│   ├── de/                 # German legal translations
│   ├── tr/                 # Turkish legal translations
│   └── _data/
│       ├── translations.json # Shared localized UI copy
│       ├── home.json         # Localized landing-page content
│       ├── support.json      # Localized support content
│       └── updates.json      # Localized release notes
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
| Landing page content | `src/_data/home.json` |
| English Privacy Policy body | `src/privacy-policy.njk` |
| English Terms body | `src/terms.njk` |
| German legal bodies | `src/de/` |
| Turkish legal bodies | `src/tr/` |
| Shared UI translations | `src/_data/translations.json` |
| Support content | `src/_data/support.json` |
| Release notes | `src/_data/updates.json` |
| Shared styles | `css/style.css` |

When updating Privacy Policy or Terms, change the "Last updated" date in the page content.

## Contact

Support email: support@lulu.pet
