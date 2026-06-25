import { CONTACT } from '../data/content'
import Icon from './Icon'
import ContactForm from './ContactForm'

const POINTS = [
  { icon: 'clock', t: 'A reply within one business day' },
  { icon: 'link', t: 'One team across marketing, HR & payroll' },
  { icon: 'shield', t: 'No obligation, no hard sell' },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-pitch">
          <span className="eyebrow">Ready when you are</span>
          <h2 className="display">
            Let’s close the loop on
            <br />
            your back office.
          </h2>
          <p>
            Tell us where you’re at across reach, people, and pay. We’ll come back with
            exactly what one team running all three would change — and what it’d cost.
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
