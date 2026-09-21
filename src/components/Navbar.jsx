import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: 'https://amureamure03.wixsite.com/21techspace/portfolio' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a
          href="#top"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img src="/logo.png" alt="21TechSpace" className="navbar-logo-img" />
          <span className="navbar-logo-text">
            21TECH<em>SPACE</em>
          </span>
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault()
                  handleNavClick(link.href)
                }
              }}
              target={link.href.startsWith('#') ? undefined : '_blank'}
              rel={link.href.startsWith('#') ? undefined : 'noopener noreferrer'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="btn btn-primary navbar-cta"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#contact')
          }}
        >
          Start a Project
        </a>

        <button
          className="navbar-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="navbar-mobile">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault()
                  handleNavClick(link.href)
                } else {
                  setOpen(false)
                }
              }}
              target={link.href.startsWith('#') ? undefined : '_blank'}
              rel={link.href.startsWith('#') ? undefined : 'noopener noreferrer'}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#contact')
            }}
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  )
}