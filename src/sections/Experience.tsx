import { ExperienceCard } from '../components/ExperienceCard'
import { SectionTitle } from '../components/SectionTitle'
import { experiences } from '../data/portfolio'

export function Experience() {
  return (
    <section id="experiencia" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="02 — Trayectoria"
          title="Experiencia laboral"
          description="Participación en sistemas en uso, con foco en desarrollo, mantenimiento e integración."
        />
        <ol className="space-y-8">
          {experiences.map((experience, index) => (
            <li key={experience.id}>
              <ExperienceCard experience={experience} isLast={index === experiences.length - 1} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
