import { Briefcase } from 'lucide-react'
import type { Experience } from '../types'

interface ExperienceCardProps {
  experience: Experience
  isLast?: boolean
}

export function ExperienceCard({ experience, isLast = false }: ExperienceCardProps) {
  return (
    <article className="relative grid gap-4 pl-2 sm:grid-cols-[11rem_1fr] sm:gap-8">
      <div className="flex items-start gap-3 sm:block">
        <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-sky-400/40 bg-sky-400/10 text-sky-600 dark:text-sky-300">
          <Briefcase className="size-4" aria-hidden="true" />
        </span>
        <p className="font-mono text-xs tracking-wide text-slate-500 uppercase dark:text-slate-400">
          {experience.period}
        </p>
      </div>

      {!isLast ? (
        <span
          className="absolute top-10 left-6 hidden h-[calc(100%-0.5rem)] w-px bg-linear-to-b from-sky-400/50 to-transparent sm:left-[3.35rem] sm:block"
          aria-hidden="true"
        />
      ) : null}

      <div className="glass-card rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{experience.role}</h3>
          {experience.current ? (
            <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              Actualidad
            </span>
          ) : null}
        </div>
        <p className="mt-1 text-sm font-medium text-sky-700 dark:text-sky-300">{experience.company}</p>
        {experience.summary ? (
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{experience.summary}</p>
        ) : null}
        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {experience.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
