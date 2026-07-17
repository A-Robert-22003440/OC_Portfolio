function ProjectPreview({ preview }) {
  if (preview.kind === 'image') {
    return (
      <figure className="project-visual project-visual--image">
        <img src={preview.src} alt={preview.alt} />
        <figcaption>
          <span className="project-visual__label">Capture projet</span>
          <strong>{preview.caption}</strong>
        </figcaption>
      </figure>
    )
  }

  return (
    <div className="project-visual project-visual--blueprint" aria-label={preview.caption}>
      <span className="project-visual__label">Apercu architecture</span>
      <img src={preview.src} alt={preview.alt} />
      <strong>{preview.caption}</strong>
    </div>
  )
}

export default ProjectPreview