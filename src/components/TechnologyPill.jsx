function TechnologyPill({ technology }) {
  return (
    <li className="tech-pill">
      {technology.icon ? (
        <img
          className="tech-pill__icon"
          src={`https://cdn.simpleicons.org/${technology.icon}/${technology.color}`}
          alt={technology.name}
        />
      ) : (
        <span className="tech-pill__fallback" aria-hidden="true">
          {technology.name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span>{technology.name}</span>
    </li>
  )
}

export default TechnologyPill