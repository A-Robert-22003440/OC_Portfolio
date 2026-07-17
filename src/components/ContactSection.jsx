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
            rel={link.external ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default ContactSection