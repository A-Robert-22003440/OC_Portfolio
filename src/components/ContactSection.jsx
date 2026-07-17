import SectionHeading from './SectionHeading'

function ContactSection({ contact }) {
  return (
    <section id="contact" className="content-section contact-card">
      <div>
        <SectionHeading
          eyebrow="Contact"
          title="Pret a travailler ensemble ?"
          description={contact.description}
          narrow
        />
      </div>

      <div className="contact-links">
        {contact.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            aria-label={
              link.external ? `${link.label} (ouvre dans un nouvel onglet)` : undefined
            }
          >
            {link.label}
            {link.external ? <span className="sr-only"> (ouvre dans un nouvel onglet)</span> : null}
          </a>
        ))}
      </div>
    </section>
  )
}

export default ContactSection