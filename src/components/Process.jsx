import { STEPS } from '../data/content'

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">The 360 loop</span>
          <h2 className="display">A simple loop that keeps closing.</h2>
          <p>
            No long lock-ins or mystery retainers. We audit, plan, run, and report — then
            do it again, a little sharper each cycle.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <div className="dot">{s.n}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
