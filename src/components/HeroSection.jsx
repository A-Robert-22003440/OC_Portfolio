function HeroSection({ profile, navLinks, strengths, metrics }) {
  return (
    <header className="hero-section">
      <nav className="topbar" aria-label="Navigation principale">
        <span className="brand">{profile.firstName} {profile.lastName}</span>
        <div className="topbar__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio React + Sass</p>
          <h1>
            {profile.firstName} <span>{profile.lastName}</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <a className="button button--primary" href="#projets">
              Voir mes projets
            </a>
            <a className="button button--ghost" href="#contact">
              Me contacter
            </a>
          </div>

          <p className="availability">{profile.availability}</p>
        </div>

        <aside className="hero-panel" aria-label="Forces principales">
          <p className="panel-label">Ce que vous trouverez ici</p>
          <ul>
            {strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="metrics" aria-label="Resume rapide">
        {metrics.map((metric) => (
          <article key={metric.label} className="metric-card">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </div>
    </header>
  )
}

export default HeroSection