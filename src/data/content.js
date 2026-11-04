// Single source of truth for all site content.
// Edit copy here and it updates everywhere on the site.

export const BRAND = 'Outreach 360'

export const NAV = [
  { label: 'What we do', href: '#services' },
  { label: 'How we measure', href: '#process' },
  { label: 'Why now', href: '#why' },
]

export const HERO = {
  eyebrow: 'Brands · AI assistants · Measured',
  titleA: 'A brand for',
  titleB: 'the AI age.',
  lead:
    'Shoppers now ask ChatGPT, Claude or Perplexity what to buy before they ask a person. We build our own products to be found by them, and we measure for brands what the assistants say about them.',
  stats: [
    { n: '18%', l: 'of brands named by all three assistants' },
    { n: '5', l: 'different first picks, same question asked ten times' },
    { n: '3', l: 'assistants measured: ChatGPT, Claude, Perplexity' },
  ],
}

export const SERVICES = [
  {
    key: 'coral',
    num: '// 01 — FOUND',
    title: 'Our own products',
    icon: 'bolt',
    desc:
      'We design our own products, from the start, to be found and trusted by people and by AI.',
    items: [
      'What the product is, and the proof behind it',
      'How it is described, so assistants describe it right',
      'Built from what we measure, not from guesses',
    ],
  },
  {
    key: 'mint',
    num: '// 02 — MEASURED',
    title: 'What AI says about you',
    icon: 'reach',
    desc:
      'For brands: what ChatGPT, Claude and Perplexity tell buyers who ask about your category.',
    items: [
      'Whether you are named at all',
      'Who you are named next to',
      'Whether your products and prices are described correctly',
      'How often, across many asks, not one lucky answer',
    ],
  },
  {
    key: 'gold',
    num: '// 03 — TESTED',
    title: 'Our own bench',
    icon: 'shield',
    desc:
      'Our numbers come from our own testing, not from someone else’s report.',
    items: [
      'AI models run on our own machines',
      'What each answer costs, and where models break',
      'How answers change in Indian languages',
    ],
  },
]

export const STEPS = [
  { n: '01', h: 'Ask', p: 'The questions real buyers ask in your category, put to all three assistants.' },
  { n: '02', h: 'Repeat', p: 'Each question asked many times, because one answer is not enough.' },
  { n: '03', h: 'Check', p: 'Every product named is looked up: does it exist, and is the price still true?' },
  { n: '04', h: 'Report', p: 'Where you stand, who stands next to you, and what the assistants get wrong.' },
]

export const STATS = [
  { n: '18%', l: 'Brands named by all three', color: 'var(--coral)' },
  { n: '5', l: 'First picks in ten asks', color: 'var(--mint)' },
  { n: '10×', l: 'Each question, asked again', color: 'var(--gold)' },
  { n: '3', l: 'Assistants, side by side', color: 'var(--paper)' },
]

export const WHY = [
  {
    icon: 'reach',
    h: 'Buyers ask AI first',
    p: 'More and more, the first answer a shopper sees comes from an assistant, not a search page or a shop.',
  },
  {
    icon: 'link',
    h: 'The assistants disagree',
    p: 'Ask ChatGPT, Claude and Perplexity the same question and you get different brands. Few are named by all three.',
  },
  {
    icon: 'clock',
    h: 'Answers change from ask to ask',
    p: 'The same question, asked again, can put a different brand first. It has to be measured many times.',
  },
  {
    icon: 'shield',
    h: 'Facts drift',
    p: 'Assistants quote old prices and name products that are no longer sold. A brand needs to see it.',
  },
]

export const CONTACT = {
  email: 'hello@360outreach.net',

  // ── Direct-to-inbox delivery (optional, recommended) ──────────────────
  // The form works right away by opening a pre-filled email. To receive
  // submissions straight in your inbox (no mail client step), get a FREE
  // access key from https://web3forms.com — it takes ~1 minute and only
  // needs your email. Paste the key below and you're done.
  accessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',

  // Options shown in the "I'm interested in" dropdown.
  services: [
    'A free AI check for my brand',
    'Meeting at BTS, 17–19 November',
    'Building a product together',
    'Something else',
  ],
}
