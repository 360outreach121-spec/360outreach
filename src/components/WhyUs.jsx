import { WHY } from '../data/content'
import Icon from './Icon'

export default function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Why now</span>
          <h2 className="display">Shoppers ask AI first.</h2>
          <p>
            The way people find products is changing. Most brands cannot yet see what the
            assistants say about them.
          </p>
        </div>

        <div className="why-grid">
          {WHY.map((w) => (
            <div className="why-card" key={w.h}>
              <div className="ic">
                <Icon name={w.icon} color="var(--coral)" size={22} />
              </div>
              <div>
                <h4>{w.h}</h4>
                <p>{w.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
