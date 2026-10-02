import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section id="proyectos" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            kicker="06 — Trabajo"
            title="Proyectos"
            description="Proyectos personales y sitios hechos como práctica para terceros. El trabajo en America Virtual está en Experiencia."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} className="h-full" delay={(index % 3) * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
