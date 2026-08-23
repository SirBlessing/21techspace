const CAPABILITIES = [
  {
    title: 'Web & Web App Development',
    desc: 'We don\u2019t just build websites; we build fast, secure, and scalable web experiences tailored to your business goals.',
  },
  {
    title: 'Software Development',
    desc: 'Custom software solutions designed to solve complex problems and streamline your operations.',
  },
  {
    title: 'Mobile App Development',
    desc: 'Sleek, intuitive apps for iOS and Android that your users will actually love to use.',
  },
  {
    title: 'UI/UX Design',
    desc: 'Beauty meets functionality. We create interfaces that look amazing and provide a seamless journey for your customers.',
  },
  {
    title: 'Total Management & Support',
    desc: 'Ongoing web and software management so you can focus on running your business while we handle the technical heavy lifting.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div>
          <p className="eyebrow section-eyebrow">SHEET 04 / ABOUT 21TECHSPACE</p>
          <h2 className="section-title about-title">
            Your vision, our code. Unlimited possibilities.
          </h2>
          <p className="about-lead">
            Think of us as your external CTO. We specialize in the full lifecycle of your
            digital product — from the initial spark of an idea to the long-term management
            of your digital ecosystem.
          </p>
          <p className="about-lead about-lead-muted">
            We believe great software should be intuitive, scalable, and invisible — it
            should just work. We focus on measurable results like faster load times and
            higher engagement.
          </p>
        </div>

        <ul className="about-list">
          {CAPABILITIES.map((cap, i) => (
            <li className="about-list-item" key={cap.title}>
              <span className="eyebrow about-list-index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="about-list-title">{cap.title}</h3>
                <p className="about-list-desc">{cap.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
