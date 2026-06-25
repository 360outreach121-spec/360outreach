import { WHY } from '../data/content'
import Icon from './Icon'

export default function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Why 360outreach</span>
          <h2 className="display">Built to take work off your desk.</h2>
          <p>
            You shouldn't need to become an expert in three things to run one business.
            That's our job.
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
