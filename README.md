# 360outreach

A professional marketing site for **360outreach** — one partner for **Digital Marketing, HR Services, and Payroll**. Built with React + Vite.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server → http://localhost:5173
```

## Build for production

```bash
npm run build    # outputs static files to /dist
npm run preview  # preview the production build locally
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3, etc.).

## Project structure

```
360outreach/
├── index.html              # HTML entry, fonts, meta
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # React mount
    ├── App.jsx             # composes all sections
    ├── index.css           # all styling + design tokens
    ├── data/
    │   └── content.js       # ← edit all copy & services here
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Orbit.jsx        # the animated "360" signature
        ├── Services.jsx
        ├── Process.jsx
        ├── StatsBand.jsx
        ├── WhyUs.jsx
        ├── CTA.jsx
        ├── Footer.jsx
        └── Icon.jsx         # inline SVG icon set
```

## Editing content

Almost all text lives in **`src/data/content.js`** — services, the process steps,
stats, the "why us" points, and the contact email. Change it there and it updates
across the site. No need to touch the components for copy changes.

## Customising the look

Colours and type are driven by CSS variables at the top of **`src/index.css`**:

| Variable   | Meaning                  |
|------------|--------------------------|
| `--ink`    | background               |
| `--coral`  | Reach / Marketing accent |
| `--mint`   | People / HR accent       |
| `--gold`   | Pay / Payroll accent     |

## Before going live

- Replace the placeholder email `hello@360outreach.net` in `src/data/content.js`.
- Review the service copy to match your exact offerings.

## Contact form

The form in the Contact section is fully working with **zero setup** — it validates
input and opens a pre-filled email to your address.

To receive submissions **directly in your inbox** (no mail-client step):

1. Go to [web3forms.com](https://web3forms.com) and enter your email to get a free
   access key (takes about a minute, no account needed).
2. Paste the key into `accessKey` in `src/data/content.js`.

That's it — submissions now arrive straight in your inbox. Prefer Formspree or your own
API instead? Swap the `fetch` call in `src/components/ContactForm.jsx`.
