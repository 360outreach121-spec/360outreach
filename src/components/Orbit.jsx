import Icon from './Icon'

// The signature element: your business at the core, with the three
// services orbiting it on counter-rotating rings — a literal "360".
export default function Orbit() {
  return (
    <div className="orbit" aria-hidden="true">
      <div className="ring r1" />
      <div className="ring r2" />
      <div className="ring r3" />

      <div className="tag t1">Reach</div>
      <div className="tag t2">People</div>
      <div className="tag t3">Pay</div>

      <div className="spin s1">
        <div className="node">
          <div className="counter c1">
            <Icon name="reach" color="var(--coral)" />
          </div>
        </div>
      </div>
      <div className="spin s2">
        <div className="node">
          <div className="counter c2">
            <Icon name="people" color="var(--mint)" />
          </div>
        </div>
      </div>
      <div className="spin s3">
        <div className="node">
          <div className="counter c3">
            <Icon name="pay" color="var(--gold)" />
          </div>
        </div>
      </div>

      <div className="core">
        <div>
          <div className="k">YOUR BUSINESS</div>
          <div className="v">
            full <span>360°</span>
          </div>
        </div>
      </div>
    </div>
  )
}
