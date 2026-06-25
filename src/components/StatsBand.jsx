import { STATS } from '../data/content'

export default function StatsBand() {
  return (
    <section className="band">
      <div className="wrap band-grid">
        {STATS.map((s) => (
          <div key={s.l}>
            <div className="n" style={{ color: s.color }}>
              {s.n}
            </div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
