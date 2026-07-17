import './App.scss'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import MethodSection from './components/MethodSection'
import PersonalProjectsSection from './components/PersonalProjectsSection'
import ProjectsSection from './components/ProjectsSection'
import PromptCard from './components/PromptCard'
import {
  aiPrompt,
  contact,
  metrics,
  navLinks,
  profile,
  profilePitch,
  personalProjects,
  projects,
  strengths,
  workflow,
} from './data/portfolioContent'

function App() {
  return (
    <main className="page-shell">
      <HeroSection
        metrics={metrics}
        navLinks={navLinks}
        profile={profile}
        strengths={strengths}
      />
      <section id="profil" className="content-section profile-card">
        <div className="section-heading">
          <p className="eyebrow">Etape 3</p>
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
      <MethodSection workflow={workflow} />
      <PromptCard prompt={aiPrompt} />
      <ContactSection contact={contact} />
    </main>
  )
}

export default App
