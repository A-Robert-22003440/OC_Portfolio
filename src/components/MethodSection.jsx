import SectionHeading from './SectionHeading'

function MethodSection({ workflow }) {
  return (
    <section id="apropos" className="content-section content-section--split">
      <div>
        <SectionHeading
          eyebrow="Methode"
          title="Une structure de presentation plus convaincante"
          description="L idee n est plus de lister des exercices, mais de montrer des missions, des contraintes, des choix techniques et des resultats concrets. C est ce glissement qui rend un portfolio plus professionnel sans sur-vendre le niveau."
        />
      </div>

      <ol className="workflow-list">
        {workflow.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  )
}

export default MethodSection