import { CertificationCard } from '../components/CertificationCard'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { certifications } from '../data/portfolio'

export function Certifications() {
  return (
    <section id="cursos" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            kicker="06 — Cursos"
            title="Cursos"
            description="Certificados de asistencia de Red Hat. La insignia se abre en Credly y no corresponde a una certificación obtenida por examen."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <Reveal key={certification.id} className="h-full" delay={(index % 2) * 70}>
              <CertificationCard certification={certification} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
