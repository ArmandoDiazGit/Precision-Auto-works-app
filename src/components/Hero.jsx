export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="dot"></span> Certified Auto Repair — Since 1998
            </div>
            <h1>Expert Auto Care<br /><span>You Can Trust</span></h1>
            <p className="hero-sub">
              Family-owned & operated since 1998. Precision diagnostics, quality repairs,
              and honest service guaranteed. We treat your car like our own.
            </p>
            <div className="hero-ctas">
              <button className="orange-btn" onClick={() => scrollTo('form')}>Request Service</button>
              <button className="glass-btn" onClick={() => scrollTo('services')}>View Services</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24"><path d="M22.7 8.2l-1.9-3.3c-.4-.7-1.3-1-2.1-.8l-3 .8-1.5-2.5c-.4-.7-1.3-1-2.1-.8L7 2.7c-.7.2-1.2.8-1.3 1.5L4.7 9c-.1.5.1 1 .4 1.4L6 11.7l-.3 2.2c-.1.5.1 1 .4 1.4l1.5 2.5c.4.7 1.3 1 2.1.8l3-.8 1.5 2.5c.4.7 1.3 1 2.1.8l5.1-1.4c.7-.2 1.2-.8 1.3-1.5l1-5.2c.1-.5-.1-1-.4-1.4l-1.5-2.5.3-2.2z"/></svg>
                </div>
                <div>
                  <div className="stat-num">2,400+ Cars Serviced</div>
                  <div className="stat-label">Happy customers and counting</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8m.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
                </div>
                <div>
                  <div className="stat-num">15 Years Experience</div>
                  <div className="stat-label">Master technicians on staff</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 17.3l-3.7 2.3 1-4.3L6 12.5l4.3-.4L12 8l1.7 4.1 4.3.4-3.3 2.8 1 4.3zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg>
                </div>
                <div>
                  <div className="stat-num">4.9★ Rating</div>
                  <div className="stat-label">Average customer satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
