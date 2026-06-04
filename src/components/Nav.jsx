import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero') }} className="nav-logo">
            Precision<span>Auto</span>
          </a>
          <ul className="nav-links">
            <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>Home</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Services</a></li>
            <li><a href="#trust" onClick={(e) => { e.preventDefault(); scrollTo('trust') }}>Why Us</a></li>
            <li><a href="#form" onClick={(e) => { e.preventDefault(); scrollTo('form') }}>Contact</a></li>
          </ul>
          <button className="nav-cta" onClick={() => scrollTo('form')}>Book Now</button>
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-nav">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>Home</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Services</a>
          <a href="#trust" onClick={(e) => { e.preventDefault(); scrollTo('trust') }}>Why Us</a>
          <a href="#form" onClick={(e) => { e.preventDefault(); scrollTo('form') }}>Contact</a>
          <button className="nav-cta-mob" onClick={() => scrollTo('form')}>Book Now</button>
        </div>
      )}
    </>
  )
}
