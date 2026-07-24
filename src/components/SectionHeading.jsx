function SectionHeading({ eyebrow, title, description, narrow = false, headingId }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={headingId}>{title}</h2>
      {description ? (
        <p className={narrow ? 'section-copy section-copy--narrow' : 'section-copy'}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading