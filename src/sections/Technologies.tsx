import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { TechnologyGroup } from '../components/TechnologyGroup'
import { technologyGroups } from '../data/portfolio'

export function Technologies() {
  return (
    <section id="tecnologias" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            kicker="03 — Stack"
            title="Tecnologías"
            description="Tecnologías que uso en la pasantía y en proyectos personales."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {technologyGroups.map((group, index) => (
            <Reveal key={group.id} className="h-full" delay={index * 60}>
              <TechnologyGroup group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
