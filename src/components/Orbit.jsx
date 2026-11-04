import Icon from './Icon'

// The signature element: your brand at the core, with the three AI
// assistants circling it — how a brand is seen, all the way round.
export default function Orbit() {
  return (
    <div className="orbit" aria-hidden="true">
      <div className="ring r1" />
      <div className="ring r2" />
      <div className="ring r3" />

      <div className="tag t1">ChatGPT</div>
      <div className="tag t2">Claude</div>
      <div className="tag t3">Perplexity</div>

      <div className="spin s1">
        <div className="node">
          <div className="counter c1">
            <Icon name="bolt" color="var(--coral)" />
          </div>
        </div>
      </div>
      <div className="spin s2">
        <div className="node">
          <div className="counter c2">
            <Icon name="link" color="var(--mint)" />
          </div>
        </div>
      </div>
      <div className="spin s3">
        <div className="node">
          <div className="counter c3">
            <Icon name="shield" color="var(--gold)" />
          </div>
        </div>
      </div>

      <div className="core">
        <div>
          <div className="k">YOUR BRAND</div>
          <div className="v">
            seen <span>360°</span>
          </div>
        </div>
      </div>
    </div>
  )
}
