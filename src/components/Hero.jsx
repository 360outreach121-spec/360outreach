import { HERO, CONTACT } from '../data/content'
import Icon from './Icon'
import Orbit from './Orbit'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="glow" />
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">{HERO.eyebrow}</span>
          <h1 className="display">
            {HERO.titleA}
            <br />
            <span className="accent">{HERO.titleB}</span>
          </h1>
          <p className="lead">{HERO.lead}</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href={`mailto:${CONTACT.email}`}>
              Book a free call <Icon name="arrow" size={18} color="#fff" />
            </a>
            <a className="btn btn-ghost" href="#services">
              See what we do
            </a>
          </div>

          <div className="trust">
            {HERO.stats.map((s) => (
              <div key={s.l}>
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <Orbit />
      </div>
    </header>
  )
}
