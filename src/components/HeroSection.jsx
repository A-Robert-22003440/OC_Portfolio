function HeroSection({ profile, navLinks, metrics, cvContent }) {
  const handleOpenCv = () => {
    window.open(cvContent.pdfUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <header className="hero-section">
      <nav className="topbar" aria-label="Navigation principale">
        <ul className="topbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
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

        <aside className="hero-panel hero-panel--cv" aria-label="Bloc CV">
          <p className="panel-label">Mon CV</p>

          <a
            className="cv-preview"
            href={cvContent.pdfPreviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvrir l apercu du CV PDF (nouvel onglet)"
          >
            <iframe
              title="Apercu du CV PDF"
              src={cvContent.pdfPreviewUrl}
              loading="lazy"
              tabIndex="-1"
            />
          </a>

          <div className="cv-actions">
            <button type="button" className="button button--primary" onClick={handleOpenCv}>
              Ouvrir le CV
            </button>
            <a
              className="button button--ghost"
              href={cvContent.pdfUrl}
              download={cvContent.fileName}
              aria-label="Telecharger le CV en PDF"
              type="application/pdf"
            >
              Telecharger en PDF
            </a>
          </div>

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