import { useState } from 'react'
import { NAV, CONTACT } from '../data/content'
import Icon from './Icon'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const book = () => (window.location.href = `mailto:${CONTACT.email}`)

  return (
    <nav>
      <div className="wrap nav-in">
        <a href="#top" className="logo">
          <span className="mark" />
          <b>360</b>outreach
        </a>

        <div className="nav-links">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
          <button className="btn btn-primary" onClick={book}>
            Book a call
          </button>
        </div>

        <button
          className="hamb"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="wrap nav-mobile">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <button
            className="btn btn-primary"
            onClick={() => {
              setOpen(false)
              book()
            }}
          >
            Book a call <Icon name="arrow" size={16} color="#fff" />
          </button>
        </div>
      )}
    </nav>
  )
}
