export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="hero">
      <div className="blueprint-grid hero-grid" aria-hidden="true" />
      <span className="crosshair hero-mark hero-mark-tl" aria-hidden="true" />
      <span className="crosshair hero-mark hero-mark-tr" aria-hidden="true" />
      <span className="crosshair hero-mark hero-mark-bl" aria-hidden="true" />
      <span className="crosshair hero-mark hero-mark-br" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-tag eyebrow">
          FIG.01 — DIGITAL BUILD SPEC &nbsp;·&nbsp; SCALE 1:1
        </div>

        <h1 className="hero-title">
          DOMINATE
          <br />
          <span className="hero-title-outline">DIGITALLY</span>
        </h1>

        <p className="hero-subtitle eyebrow">BUILD. SCALE.</p>

        <p className="hero-desc">
          We build high-performance websites, powerful applications and intelligent
          software solutions that help your business grow.
        </p>

        <div className="hero-actions">
          <a href="#services" className="btn btn-primary" onClick={scrollTo('#services')}>
            Explore Services
          </a>
          <a href="#contact" className="btn btn-outline" onClick={scrollTo('#contact')}>
            Start a Project
          </a>
        </div>
      </div>
    </section>
  )
}
