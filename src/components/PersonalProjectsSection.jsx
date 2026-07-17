import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

function PersonalProjectsSection({ projects }) {
  return (
    <section id="projets-personnels" className="content-section content-section--personal">
      <SectionHeading
        eyebrow="Etape 2"
        title="Projets personnels pour montrer autonomie et curiosité"
        description="Ces projets conceptuels complètent la formation en montrant une démarche plus personnelle : idée, design system, fonctionnalité additionnelle et projection technique."
        narrow
      />

      <div className="project-stack project-stack--personal">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

export default PersonalProjectsSection