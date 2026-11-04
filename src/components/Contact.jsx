import { CONTACT } from '../data/content'
import Icon from './Icon'
import ContactForm from './ContactForm'

const POINTS = [
  { icon: 'reach', t: 'A free check of what the three assistants say about you' },
  { icon: 'link', t: 'For people who make products, sell them, or build the AI behind them' },
  { icon: 'shield', t: 'No obligation, no hard sell' },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-pitch">
          <span className="eyebrow">Bengaluru Tech Summit · 17–19 November 2026</span>
          <h2 className="display">
            Meet us for
            <br />
            15 minutes.
          </h2>
          <p>
            We’ll bring you, free, what ChatGPT, Claude and Perplexity say about your
            company or your category. Book through InterlinX, or write to us here.
          </p>

          <ul className="pitch-points">
            {POINTS.map((p) => (
              <li key={p.t}>
                <span className="pp-ic">
                  <Icon name={p.icon} size={18} color="var(--coral)" />
                </span>
                {p.t}
              </li>
            ))}
          </ul>

          <a className="pitch-email" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
