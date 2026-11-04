import { CONTACT } from '../data/content'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col foot-brand">
            <a href="#top" className="logo">
              <span className="mark" />
              <span>Outreach <b>360</b></span>
            </a>
            <p>
              A brand for the AI age. We build products to be found by AI, and measure
              what the assistants say about brands.
            </p>
          </div>

          <div className="foot-col">
            <h5>What we do</h5>
            <a href="#services">Our own products</a>
            <a href="#services">What AI says about you</a>
            <a href="#services">Our own bench</a>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <a href="#process">How we measure</a>
            <a href="#why">Why now</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="foot-col">
            <h5>Get in touch</h5>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href="#contact">Meet us at BTS</a>
          </div>
        </div>

        <div className="foot-bottom">
          <p>© {new Date().getFullYear()} Outreach 360. All rights reserved.</p>
          <p>A brand for the AI age.</p>
        </div>
      </div>
    </footer>
  )
}
