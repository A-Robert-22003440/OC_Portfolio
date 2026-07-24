import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

function ProjectsSection({ projects }) {
  return (
    <section id="projets" className="content-section" aria-labelledby="projets-heading">
      <SectionHeading
        headingId="projets-heading"
        title="Projets de formation valorises comme des cas concrets"
        description="Chaque fiche ci-dessous reformule les projets les plus representatifs du parcours OpenClassrooms avec un angle plus recruteur : contexte, objectifs, stack, apprentissages, resultats et pistes d amelioration."
        narrow
      />

      <div className="project-stack">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection