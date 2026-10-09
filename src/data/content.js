// Single source of truth for all site content.
// Edit copy here and it updates everywhere on the site.

export const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#process' },
  { label: 'Why us', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  eyebrow: 'Marketing · HR · Payroll',
  titleA: 'Grow Louder.',
  titleB: 'Run smoother.',
  lead:
    "360outreach wraps your business in the three things it can't grow without — digital marketing, HR, and payroll — run by one team that actually talks to each other.",
  stats: [
    { n: '3-in-1', l: 'One partner, full circle' },
    { n: '48 hrs', l: 'Average onboarding' },
    { n: '100%', l: 'Compliance handled' },
  ],
}

export const SERVICES = [
  {
    key: 'coral',
    num: '// 01 — REACH',
    title: 'Digital Marketing',
    icon: 'reach',
    desc:
      'Pipeline that actually fills. Strategy, content, and paid media run as one motion — not five disconnected vendors.',
    items: [
      'Performance & paid media (Google, Meta, LinkedIn)',
      'SEO, content & email that compounds',
      'Brand, creative & landing pages',
      'Monthly reporting tied to revenue',
    ],
  },
  {
    key: 'mint',
    num: '// 02 — PEOPLE',
    title: 'HR Services',
    icon: 'people',
    desc:
      'The people side, handled end to end — so you hire faster, stay compliant, and keep your team supported.',
    items: [
      'Recruitment & onboarding',
      'Policies, contracts & compliance',
      'Performance & employee support',
      'HR helpdesk for your team',
    ],
  },
  {
    key: 'gold',
    num: '// 03 — PAY',
    title: 'Payroll',
    icon: 'pay',
    desc:
      'Accurate, on-time, every cycle. Salaries, statutory filings, and payslips run quietly in the background.',
    items: [
      'Monthly payroll processing',
      'PF, ESI, TDS & statutory filing',
      'Payslips & employee self-service',
      'Year-end & audit-ready records',
    ],
  },
]

export const STEPS = [
  { n: '01', h: 'Audit', p: 'We map where you are across reach, people, and pay — and where the leaks are.' },
  { n: '02', h: 'Plan', p: 'One roadmap across all three, owned by a single point of contact.' },
  { n: '03', h: 'Run', p: 'Our team executes daily while you stay focused on the business.' },
  { n: '04', h: 'Report', p: 'Clear numbers every month. We adjust, you grow, the loop continues.' },
]

export const STATS = [
  { n: '3-in-1', l: 'Marketing, HR & payroll', color: 'var(--coral)' },
  { n: '1', l: 'Point of contact', color: 'var(--mint)' },
  { n: '0', l: 'Missed payroll cycles', color: 'var(--gold)' },
  { n: '24/7', l: 'Team support', color: 'var(--paper)' },
]

export const WHY = [
  {
    icon: 'link',
    h: 'One team, not five vendors',
    p: 'Marketing, HR, and payroll talk to each other because they sit under one roof. No finger-pointing.',
  },
  {
    icon: 'bolt',
    h: 'Set up in days, not quarters',
    p: 'A single onboarding gets all three functions live fast, with one contract and one invoice.',
  },
  {
    icon: 'shield',
    h: 'Compliance built in',
    p: 'Statutory filings, contracts, and data handling done right — so audits are a non-event.',
  },
  {
    icon: 'clock',
    h: 'A real human who owns it',
    p: 'You get a dedicated account lead, not a ticket queue. They know your business by name.',
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
  services: ['Digital Marketing', 'HR Services', 'Payroll', 'All three'],
}
