import { CONTACT } from '../data/content'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col foot-brand">
            <a href="#top" className="logo">
              <span className="mark" />
              <b>360</b>outreach
            </a>
            <p>
              One partner for the reach, the people, and the payroll. Full circle around
              your business.
            </p>
          </div>

          <div className="foot-col">
            <h5>Services</h5>
            <a href="#services">Digital Marketing</a>
            <a href="#services">HR Services</a>
            <a href="#services">Payroll</a>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <a href="#process">How it works</a>
            <a href="#why">Why us</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="foot-col">
            <h5>Get in touch</h5>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href="#contact">Book a call</a>
          </div>
        </div>

        <div className="foot-bottom">
          <p>© {new Date().getFullYear()} 360outreach. All rights reserved.</p>
          <p>Marketing · HR · Payroll — full circle.</p>
        </div>
      </div>
    </footer>
  )
}
