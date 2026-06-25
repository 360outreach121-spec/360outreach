import { useState } from 'react'
import { CONTACT } from '../data/content'
import Icon from './Icon'

const EMPTY = { name: '', email: '', company: '', service: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const hasRealKey =
  CONTACT.accessKey &&
  CONTACT.accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY' &&
  CONTACT.accessKey.length > 10

function validate(values) {
  const e = {}
  if (!values.name.trim()) e.name = 'Please tell us your name.'
  if (!values.email.trim()) e.email = 'We need an email to reply to.'
  else if (!EMAIL_RE.test(values.email)) e.email = 'That email doesn’t look right.'
  if (!values.message.trim()) e.message = 'Add a line or two about what you need.'
  return e
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (k) => (ev) => {
    setValues((v) => ({ ...v, [k]: ev.target.value }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  async function submit(ev) {
    ev.preventDefault()
    const found = validate(values)
    if (Object.keys(found).length) {
      setErrors(found)
      return
    }
    setStatus('sending')

    const subject = `New enquiry — ${values.service || '360outreach'}`

    try {
      if (hasRealKey) {
        // Direct-to-inbox via Web3Forms
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: CONTACT.accessKey,
            subject,
            from_name: '360outreach website',
            name: values.name,
            email: values.email,
            company: values.company,
            interested_in: values.service,
            message: values.message,
          }),
        })
        const data = await res.json()
        if (!data.success) throw new Error('submit failed')
      } else {
        // Zero-config fallback: open a pre-filled email
        const body = [
          `Name: ${values.name}`,
          `Email: ${values.email}`,
          values.company && `Company: ${values.company}`,
          values.service && `Interested in: ${values.service}`,
          '',
          values.message,
        ]
          .filter(Boolean)
          .join('\n')
        window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`
      }
      setStatus('sent')
      setValues(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-card form-done">
        <div className="done-mark">
          <Icon name="arrow" size={26} color="var(--mint)" />
        </div>
        <h3>Message on its way.</h3>
        <p>
          Thanks — we’ll get back to you within one business day. Need us sooner? Email{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>
        <button className="btn btn-ghost" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={values.name}
          onChange={set('name')}
          placeholder="Your name"
          aria-invalid={!!errors.name}
        />
        {errors.name && <span className="err">{errors.name}</span>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={set('email')}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="err">{errors.email}</span>}
        </div>
        <div className="field">
          <label htmlFor="company">Company <span className="opt">(optional)</span></label>
          <input
            id="company"
            value={values.company}
            onChange={set('company')}
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="service">I’m interested in</label>
        <select id="service" value={values.service} onChange={set('service')}>
          <option value="">Pick one (or all three)…</option>
          {CONTACT.services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">What do you need?</label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={set('message')}
          placeholder="A line or two about where you're at and what's slowing you down."
          aria-invalid={!!errors.message}
        />
        {errors.message && <span className="err">{errors.message}</span>}
      </div>

      {status === 'error' && (
        <p className="form-error">
          Something went wrong sending that. Email us directly at{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> and we’ll pick it up.
        </p>
      )}

      <button className="btn btn-primary form-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
        {status !== 'sending' && <Icon name="arrow" size={18} color="#fff" />}
      </button>
    </form>
  )
}
