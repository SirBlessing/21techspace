const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com' },
  { label: 'Twitter', href: 'https://www.twitter.com' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/logo.png" alt="21TechSpace" className="footer-logo-img" />
          <span className="footer-logo-text">
            21TECH<em>SPACE</em>
          </span>
        </div>

        <nav className="footer-socials" aria-label="Social links">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </nav>

        <p className="footer-meta eyebrow">
          &copy; {new Date().getFullYear()} 21TechSpace. All rights reserved.
        </p>
      </div>
    </footer>
  )
}