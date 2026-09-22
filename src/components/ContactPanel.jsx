import { useState } from 'react'

// TODO: replace with your real WhatsApp number (country code, no + or spaces).
const WHATSAPP_NUMBER = '2348021292388'
const CONTACT_EMAIL = '21technologyspace@gmail.com'

const initialProject = { name: '', email: '', service: 'Web Development', details: '' }

// Netlify Forms wants application/x-www-form-urlencoded with a form-name field.
// Only works once this site is deployed on Netlify — it's a no-op on localhost
// (Netlify's form-handling proxy isn't there), so test the real flow on a preview deploy.
const encodeForm = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

export default function ContactPanel() {
  const [project, setProject] = useState(initialProject)
  const [projectError, setProjectError] = useState('')
  const [projectStatus, setProjectStatus] = useState('idle') // idle | sending | sent

  const [subEmail, setSubEmail] = useState('')
  const [subError, setSubError] = useState('')
  const [subSent, setSubSent] = useState(false)

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const handleProjectSubmit = async (e) => {
    e.preventDefault()
    if (!project.name.trim() || !project.email.trim() || !project.details.trim()) {
      setProjectError('Fill in your name, email and a short project description.')
      return
    }
    if (!isValidEmail(project.email)) {
      setProjectError('Enter a valid email address.')
      return
    }
    setProjectError('')
    setProjectStatus('sending')

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({ 'form-name': 'contact', ...project }),
      })
      if (!res.ok) throw new Error('Request failed')
      setProjectStatus('sent')
      setProject(initialProject)
    } catch {
      setProjectStatus('idle')
      setProjectError('Could not send right now — try WhatsApp instead, or email us directly.')
    }
  }

  const handleWhatsAppProject = () => {
    if (!project.details.trim()) {
      setProjectError('Add a short project description before sending to WhatsApp.')
      return
    }
    setProjectError('')
    const text = `Hi 21TechSpace, I'm ${project.name || 'a visitor'} (${
      project.email || 'no email given'
    }). I'm interested in ${project.service}.\n\n${project.details}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
  }

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!isValidEmail(subEmail)) {
      setSubError('Enter a valid email address.')
      return
    }
    setSubError('')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({ 'form-name': 'subscribe', email: subEmail }),
      })
    } catch {
      // subscribe is best-effort — don't block the success state on it
    }
    setSubSent(true)
    setSubEmail('')
  }

  return (
    <section id="contact" className="contact">
      <div className="blueprint-grid contact-grid" aria-hidden="true" />
      <div className="container contact-inner">
        <div className="contact-header">
          <p className="eyebrow section-eyebrow contact-eyebrow">SHEET 06 / START A PROJECT</p>
          <h2 className="section-title contact-title">
            Ready to build something incredible? Let&rsquo;s talk.
          </h2>
        </div>

        <div className="contact-body">
          <form className="project-form" onSubmit={handleProjectSubmit}>
            <div className="form-row">
              <label>
                <span className="eyebrow">Name</span>
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) => setProject({ ...project, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                <span className="eyebrow">Email</span>
                <input
                  type="email"
                  value={project.email}
                  onChange={(e) => setProject({ ...project, email: e.target.value })}
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>

            <label>
              <span className="eyebrow">Service</span>
              <select
                value={project.service}
                onChange={(e) => setProject({ ...project, service: e.target.value })}
              >
                <option>Web Development</option>
                <option>Web Management</option>
                <option>Mobile App Development</option>
                <option>Software Development & Management</option>
                <option>Web Based App Development</option>
                <option>UI/UX Design</option>
              </select>
            </label>

            <label>
              <span className="eyebrow">Project Details</span>
              <textarea
                rows={4}
                value={project.details}
                onChange={(e) => setProject({ ...project, details: e.target.value })}
                placeholder="What are you looking to build?"
                required
              />
            </label>

            {projectError && <p className="form-error">{projectError}</p>}
            {projectStatus === 'sent' && (
              <p className="form-success">
                Sent — we&rsquo;ll get back to you shortly.
              </p>
            )}

            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={projectStatus === 'sending'}>
                {projectStatus === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              <button type="button" className="btn btn-outline on-paper" onClick={handleWhatsAppProject}>
                Send on WhatsApp
              </button>
            </div>
          </form>

          <aside className="contact-side">
            <div className="contact-side-card">
              <p className="eyebrow">Direct Line</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-side-link">
                {CONTACT_EMAIL}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-side-link"
              >
                Chat on WhatsApp
              </a>
            </div>

            <form className="subscribe-card" onSubmit={handleSubscribe}>
              <p className="eyebrow">Subscribe</p>
              <p className="subscribe-desc">
                Occasional notes on what we&rsquo;re building. No spam.
              </p>
              <div className="subscribe-row">
                <input
                  type="email"
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  placeholder="you@email.com"
                  aria-label="Email for subscription"
                />
                <button type="submit" className="btn btn-outline on-paper">
                  Join
                </button>
              </div>
              {subError && <p className="form-error">{subError}</p>}
              {subSent && <p className="form-success">You&rsquo;re on the list.</p>}
            </form>
          </aside>
        </div>
      </div>
    </section>
  )
}