import { languages, profile } from '../data/portfolio'
import { SectionTitle } from '../components/SectionTitle'

export function About() {
  return (
    <section id="sobre-mi" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="01 — Perfil"
          title="Sobre mí"
          description="Perfil junior con experiencia laboral real, formación universitaria en curso y foco en el ecosistema .NET."
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="glass-card space-y-4 rounded-2xl p-6 sm:p-8">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="glass-card rounded-2xl p-6 sm:p-8" aria-labelledby="idiomas-title">
            <h3 id="idiomas-title" className="text-lg font-semibold text-slate-900 dark:text-white">
              Idiomas
            </h3>
            <ul className="mt-5 space-y-4">
              {languages.map((language) => (
                <li key={language.name} className="flex items-center justify-between border-b border-[var(--line)] pb-3 last:border-0 last:pb-0">
                  <span>{language.name}</span>
                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-800 dark:text-sky-200">
                    {language.level}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
