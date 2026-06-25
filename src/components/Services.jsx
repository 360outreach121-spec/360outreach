import { SERVICES } from '../data/content'
import Icon from './Icon'

const COLOR = { coral: 'var(--coral)', mint: 'var(--mint)', gold: 'var(--gold)' }

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">What we run for you</span>
          <h2 className="display">Three functions. One accountable team.</h2>
          <p>
            Most businesses stitch together an agency, an HR consultant, and a payroll
            vendor — and spend their week translating between them. We run all three as a
            single system.
          </p>
        </div>

        <div className="cards">
          {SERVICES.map((s) => {
            const c = COLOR[s.key]
            return (
              <article className={`card k-${s.key}`} key={s.title}>
                <div className="bar" style={{ background: c }} />
                <div
                  className="ic"
                  style={{ background: `color-mix(in srgb, ${c} 16%, transparent)` }}
                >
                  <Icon name={s.icon} color={c} />
                </div>
                <span className="num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.items.map((it) => (
                    <li key={it}>
                      <span className="dot" style={{ background: c }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
