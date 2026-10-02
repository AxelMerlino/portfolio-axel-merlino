import { GraduationCap } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionTitle } from '../components/SectionTitle'
import { education } from '../data/portfolio'

export function Education() {
  return (
    <section id="educacion" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle kicker="05 — Formación" title="Educación" />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.id} className="h-full" delay={(index % 2) * 70}>
            <article className="glass-card h-full rounded-2xl p-6">
              <div className="mb-4 grid size-11 place-items-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-300">
                <GraduationCap className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-sky-700 dark:text-sky-300">{item.institution}</p>
              {item.period ? (
                <p className="mt-2 font-mono text-xs tracking-wide text-slate-500 uppercase dark:text-slate-400">
                  {item.period}
                </p>
              ) : null}
              {item.status ? <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.status}</p> : null}
              {item.description ? (
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
              ) : null}
              {item.areas ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.areas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-slate-600 dark:text-slate-300"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
