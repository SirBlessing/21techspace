import PROJECTS from '../data/portfolio.json'

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <p className="eyebrow section-eyebrow">SHEET 05 / PORTFOLIO</p>
        <h2 className="section-title portfolio-title">Selected work</h2>

        <div className="portfolio-grid">
          {PROJECTS.map((project) => (
            <article className="portfolio-card" key={project.code}>
              <div className="portfolio-thumb" aria-hidden="true">
                {project.image && (
                  <img src={project.image} alt="" className="portfolio-thumb-img" />
                )}
              </div>
              <p className="eyebrow portfolio-tag">{project.tag}</p>
              <h3 className="portfolio-card-title">{project.title}</h3>
              <p className="portfolio-card-desc">{project.desc}</p>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                >
                  View Project &rarr;
                </a>
              ) : (
                <span className="portfolio-link portfolio-link-soon">Coming Soon</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}