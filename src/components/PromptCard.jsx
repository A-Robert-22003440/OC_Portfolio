import SectionHeading from './SectionHeading'

function PromptCard({ prompt }) {
  return (
    <section className="content-section prompt-card">
      <SectionHeading
        eyebrow="Prompt IA"
        title="Modele reutilisable pour rediger les prochaines fiches"
        description="Reprends ce prompt a chaque nouveau projet pour garder un ton regulier et une structure coherente sur tout le portfolio."
        narrow
      />

      <div className="prompt-card__body">
        <pre>{prompt}</pre>
      </div>
    </section>
  )
}

export default PromptCard