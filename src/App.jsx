import './App.scss'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import PersonalProjectsSection from './components/PersonalProjectsSection'
import ProjectsSection from './components/ProjectsSection'
import SectionHeading from './components/SectionHeading'
import {
  contact,
  cvContent,
  metrics,
  navLinks,
  profile,
  profilePitch,
  personalProjects,
  projects,
  trainingHighlights,
} from './data/portfolioContent'

function App() {
  return (
    <>
      <a className="skip-link" href="#contenu-principal">
        Aller au contenu principal
      </a>

      <main id="contenu-principal" className="page-shell">
        <HeroSection
          cvContent={cvContent}
          metrics={metrics}
          navLinks={navLinks}
          profile={profile}
        />
        <section id="formation" className="content-section training-card">
          <SectionHeading
            eyebrow="Formation OpenClassrooms"
            title="Un parcours base sur des projets concrets et une progression visible"
            description="Le portfolio reprend les objectifs du parcours Developpeur Web: integrer des interfaces, dynamiser des pages, travailler avec React, construire un backend et valoriser la qualite web dans un cadre professionnalisant."
            narrow
          />

          <div className="training-grid">
            {trainingHighlights.map((highlight) => (
              <article key={highlight.title} className="training-card__item">
                <p className="training-card__label">{highlight.label}</p>
                <h3>{highlight.title}</h3>
                <p>{highlight.content}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="apropos" className="content-section profile-card">
          <div className="section-heading">
            <h2>Profil en 6 actes</h2>
            <p className="section-copy section-copy--narrow">{profilePitch.intro}</p>
          </div>

          <div className="profile-acts">
            {profilePitch.acts.map((act) => (
              <article key={act.title} className="profile-act">
                <h3>{act.title}</h3>
                <p>{act.content}</p>
              </article>
            ))}
          </div>
        </section>
        <ProjectsSection projects={projects} />
        <PersonalProjectsSection projects={personalProjects} />
        <ContactSection contact={contact} />
      </main>
    </>
  )
}

export default App
