import './App.scss'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import MethodSection from './components/MethodSection'
import ProjectsSection from './components/ProjectsSection'
import PromptCard from './components/PromptCard'
import {
  aiPrompt,
  contact,
  metrics,
  navLinks,
  profile,
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
      <ProjectsSection projects={projects} />
      <MethodSection workflow={workflow} />
      <PromptCard prompt={aiPrompt} />
      <ContactSection contact={contact} />
    </main>
  )
}

export default App
