const STEPS = [
  {
    n: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your goals and we help you pick the perfect solution for where your business is right now.',
  },
  {
    n: '02',
    title: 'Research, Design & Plan',
    desc: 'We research, design and plan the best strategy for your project before any code gets written.',
  },
  {
    n: '03',
    title: 'Build, Test & Deliver',
    desc: 'We build, test and deliver a high-quality solution that exceeds your expectations.',
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="process">
      <div className="blueprint-grid process-grid" aria-hidden="true" />
      <div className="container">
        <p className="eyebrow section-eyebrow process-eyebrow">SHEET 03 / HOW IT WORKS</p>
        <h2 className="section-title process-title">
          A simple and proven process to turn your idea into a successful digital solution.
        </h2>

        <ol className="process-steps">
          {STEPS.map((step, i) => (
            <li className="process-step" key={step.n}>
              <span className="process-step-n eyebrow">{step.n}</span>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
              {i < STEPS.length - 1 && <span className="process-step-line" aria-hidden="true" />}
            </li>
          ))}
        </ol>

        <div className="process-cta">
          <p className="process-cta-line">If you are ready to build something powerful —</p>
          <p className="process-cta-line process-cta-line-muted">
            we are ready to bring your ideas to life with solutions that drive results.
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
