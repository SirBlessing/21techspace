import { useState } from 'react'

const SERVICES = [
  {
    code: 'WEB-01',
    title: 'Web Development',
    summary: 'Modern, responsive and fast websites that convert visitors to customers.',
    detail:
      'Built on performance-first foundations  clean semantic markup, optimized assets, and layouts tuned for conversion. Every site ships mobile-first and measured against real load-time targets, not guesses.',
  },
  {
    code: 'WEB-02',
    title: 'Web Management',
    summary: 'We handle updates, backups and security so you can focus on your business.',
    detail:
      'Ongoing monitoring, scheduled backups, dependency and security patching, and a direct line to us when something needs attention. Your site stays current without landing back on your to-do list.',
  },
  {
    code: 'APP-01',
    title: 'Mobile App Development',
    summary: 'Native and cross-platform mobile apps for Android and iOS that users love.',
    detail:
      'From first wireframe to app-store release: native performance where it matters, shared codebase where it saves time, and interfaces designed around how people actually hold their phones.',
  },
  {
    code: 'SYS-01',
    title: 'Software Development & Management',
    summary: 'Custom software solutions and system management to streamline your business operations.',
    detail:
      'Purpose-built internal tools, dashboards and automations that replace spreadsheets and manual handoffs — plus the ongoing support to keep them running as your operations change.',
  },
  {
    code: 'APP-02',
    title: 'Web Based App Development',
    summary: 'Powerful web applications and platforms built for performance.',
    detail:
      'Full-stack platforms  auth, data, real-time features, the works  architected to stay fast as your user base and your feature set both grow.',
  },
  {
    code: 'UX-01',
    title: 'UI/UX Design',
    summary: 'Beautiful, intuitive and user-centered designs that create amazing digital experiences.',
    detail:
      'Research-backed wireframes and high-fidelity design systems that make every screen easy to navigate on the first try — reviewed against real user flows before a line of code is written.',
  },
]

export default function Services() {
  const [openCode, setOpenCode] = useState(null)

  return (
    <section id="services" className="services">
      <div className="container">
        <p className="eyebrow section-eyebrow">SHEET 02 / OUR SERVICES</p>
        <h2 className="section-title">
          End-to-end digital solutions tailored to your needs
        </h2>

        <div className="services-grid">
          {SERVICES.map((service) => {
            const isOpen = openCode === service.code
            return (
              <article className={`service-card ${isOpen ? 'is-open' : ''}`} key={service.code}>
                <p className="eyebrow service-code">{service.code}</p>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-summary">{service.summary}</p>
                {isOpen && <p className="service-detail">{service.detail}</p>}
                <button
                  className="service-toggle"
                  aria-expanded={isOpen}
                  onClick={() => setOpenCode(isOpen ? null : service.code)}
                >
                  {isOpen ? 'Show Less' : 'Learn More'}
                  <span aria-hidden="true">{isOpen ? '\u2212' : '+'}</span>
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
