import { SectionTitle } from '../components/SectionTitle'
import { TechnologyGroup } from '../components/TechnologyGroup'
import { technologyGroups } from '../data/portfolio'

export function Technologies() {
  return (
    <section id="tecnologias" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="03 — Stack"
          title="Tecnologías"
          description="Herramientas y lenguajes con los que trabajo o he trabajado en entornos reales y de estudio."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {technologyGroups.map((group) => (
            <TechnologyGroup key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
