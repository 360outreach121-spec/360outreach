# Outreach 360 — 360outreach.net

The website for **Outreach 360**: a brand for the AI age. We build our own products to be found by AI assistants, and we measure for brands what ChatGPT, Claude and Perplexity say about them. Built with React and Vite, hosted on Vercel; a push to `main` puts it live.

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static files in /dist
```

## Editing

- **Almost all words** live in `src/data/content.js`: menu, hero, the three kinds of work, the measuring steps, numbers, "why now", and the contact email.
- **Section headings** sit in the components in `src/components/`.
- **Colours and fonts** are CSS variables at the top of `src/index.css`.

## Contact form

It works with no setup: it opens a pre-filled email to sachin@360outreach.net. To receive messages straight in the inbox, get a free key from [web3forms.com](https://web3forms.com) and paste it into `accessKey` in `src/data/content.js`.
