import ProjectPreview from './ProjectPreview'
import TechnologyPill from './TechnologyPill'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__hero">
        <div>
          <p className="project-card__category">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-card__hook">{project.hook}</p>
        </div>

        <ProjectPreview preview={project.preview} />
      </div>

      <div className="project-tech">
        <span className="project-tech__label">Logos des technologies utilisees</span>
        <ul>
          {project.technologies.map((technology) => (
            <TechnologyPill key={technology.name} technology={technology} />
          ))}
        </ul>
      </div>

      <div className="project-sections">
        {project.sections.map((section) => (
          <div key={section.label} className="project-section-item">
            <h4>{section.label}</h4>
            <p>{section.content}</p>
          </div>
        ))}
      </div>

      <div className="project-links">
        {project.links.map((link) =>
          link.href ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} (ouvre dans un nouvel onglet)`}
            >
              {link.label}
              <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
            </a>
          ) : (
            <span key={link.label} className="project-links__muted">
              {link.label}
            </span>
          ),
        )}
      </div>
    </article>
  )
}

export default ProjectCard