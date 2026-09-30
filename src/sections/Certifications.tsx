import { CertificationCard } from '../components/CertificationCard'
import { SectionTitle } from '../components/SectionTitle'
import { certifications } from '../data/portfolio'

export function Certifications() {
  return (
    <section id="certificaciones" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="06 — Credenciales"
          title="Certificaciones"
          description="Capacitaciones verificables. El enlace de cada credencial se abre en una pestaña nueva."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  )
}
