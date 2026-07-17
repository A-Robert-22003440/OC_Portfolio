function SectionHeading({ eyebrow, title, description, narrow = false }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? (
        <p className={narrow ? 'section-copy section-copy--narrow' : 'section-copy'}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading