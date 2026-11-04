import { STEPS } from '../data/content'

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">How we measure</span>
          <h2 className="display">One answer is not enough.</h2>
          <p>
            What an assistant recommends changes from ask to ask. So we ask, repeat, check
            and report, the same way every time.
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
