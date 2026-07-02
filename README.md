# lulu-legal-site

Minimal static legal and support pages for **Lulu: Pet Health Journal**, a pet health journal mobile app.

## Pages

| URL | Description |
|-----|-------------|
| `/privacy-policy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/support` | Support & contact |

The home page (`/`) links to all three pages.

## Run locally

No build step or dependencies required. Serve the project root with any static file server.

### Option 1: Python (built in on macOS)

```bash
cd lulu-legal-site
python3 -m http.server 3000
```

Open [http://localhost:3000](http://localhost:3000)

### Option 2: npx serve

```bash
npx serve .
```

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
cd lulu-legal-site
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

### Option 2: GitHub + Vercel Dashboard

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Use the default settings (no build command, output directory = project root).
4. Deploy.

Vercel will serve the static HTML files directly. No framework or build step is needed.

## Expected production URLs

After deployment to your Vercel domain (e.g. `https://lulu-legal.vercel.app`):

- `https://your-domain.vercel.app/privacy-policy`
- `https://your-domain.vercel.app/terms`
- `https://your-domain.vercel.app/support`

You can add a custom domain in the Vercel project settings.

## Project structure

```
lulu-legal-site/
├── index.html              # Home page with links
├── privacy-policy/
│   └── index.html
├── terms/
│   └── index.html
├── support/
│   └── index.html
├── css/
│   └── style.css           # Shared styles
└── README.md
```

## Editing content

Each page is a standalone HTML file. Update the text directly in the relevant `index.html` file. Shared styles live in `css/style.css`.

When updating the Privacy Policy or Terms, remember to change the "Last updated" date on those pages.

## Contact

Support email: support@lulu.pet
