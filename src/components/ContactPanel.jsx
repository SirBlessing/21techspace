import { useState } from 'react'

// TODO: replace with your real WhatsApp number (country code, no + or spaces)
// and contact email before deploying.
const WHATSAPP_NUMBER = '2348134457451'
const CONTACT_EMAIL = 'emailtestolawale@gmail.com'

const initialProject = { name: '', email: '', service: 'Web Development', details: '' }

export default function ContactPanel() {
  const [project, setProject] = useState(initialProject)
  const [projectError, setProjectError] = useState('')
  const [projectSent, setProjectSent] = useState(false)

  const [subEmail, setSubEmail] = useState('')
  const [subError, setSubError] = useState('')
  const [subSent, setSubSent] = useState(false)

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const handleProjectSubmit = (e) => {
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

    const body = `Name: ${project.name}\nEmail: ${project.email}\nService: ${project.service}\n\n${project.details}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `New project inquiry — ${project.service}`
    )}&body=${encodeURIComponent(body)}`

    setProjectSent(true)
    setProject(initialProject)
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

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!isValidEmail(subEmail)) {
      setSubError('Enter a valid email address.')
      return
    }
    setSubError('')
    setSubSent(true)
    setSubEmail('')
  }

  return (
    <section id="contact" className="contact">
      <div className="blueprint-grid contact-grid" aria-hidden="true" />
      <div className="container contact-inner">
        <div className="contact-header">
          <p className="eyebrow section-eyebrow contact-eyebrow">SHEET 05 / START A PROJECT</p>
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
            {projectSent && (
              <p className="form-success">
                Your email client should have opened with the details filled in — send it
                over and we&rsquo;ll be in touch.
              </p>
            )}

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Send by Email
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
