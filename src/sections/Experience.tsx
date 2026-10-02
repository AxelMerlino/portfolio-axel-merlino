import { ExperienceCard } from '../components/ExperienceCard'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { experiences } from '../data/portfolio'

export function Experience() {
  return (
    <section id="experiencia" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            kicker="02 — Trayectoria"
            title="Experiencia laboral"
            description="Desarrollo de backend, APIs y aplicaciones móviles, y una experiencia anterior en prospección comercial."
          />
        </Reveal>
        <ol className="space-y-8">
          {experiences.map((experience, index) => (
            <li key={experience.id}>
              <Reveal delay={index * 80}>
                <ExperienceCard experience={experience} isLast={index === experiences.length - 1} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
