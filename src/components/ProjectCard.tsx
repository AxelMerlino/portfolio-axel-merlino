import type { MouseEvent as ReactMouseEvent } from 'react'
import { ExternalLink } from 'lucide-react'
import { projectTypeLabels } from '../data/portfolio'
import type { Project } from '../types'
import { GitHubIcon } from './BrandIcons'

interface ProjectCardProps {
  project: Project
}

function allowTilt() {
  return window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches
}

export function ProjectCard({ project }: ProjectCardProps) {
  const tilt = (event: ReactMouseEvent<HTMLElement>) => {
    if (!allowTilt()) {
      return
    }

    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    card.style.setProperty('--tilt-x', `${(-py * 4.5).toFixed(2)}deg`)
    card.style.setProperty('--tilt-y', `${(px * 5.5).toFixed(2)}deg`)
    card.classList.add('is-tilting')
  }

  const resetTilt = (event: ReactMouseEvent<HTMLElement>) => {
    const card = event.currentTarget
    card.style.setProperty('--tilt-x', '0deg')
    card.style.setProperty('--tilt-y', '0deg')
    card.classList.remove('is-tilting')
  }

  return (
    <article
      className="project-tilt glass-card flex h-full flex-col overflow-hidden rounded-2xl"
      onMouseMove={tilt}
      onMouseLeave={resetTilt}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt ?? `Captura del proyecto ${project.title}`}
          className="h-44 w-full object-cover object-top"
          loading="lazy"
        />
      ) : (
        <div
          className="flex h-28 items-center justify-center bg-linear-to-br from-sky-500/20 via-blue-600/10 to-violet-500/20"
          aria-hidden="true"
        >
          <span className="px-4 text-center font-mono text-xs tracking-[0.2em] text-sky-700 uppercase dark:text-sky-300">
            {projectTypeLabels[project.type]}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
          {project.status ? (
            <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs text-slate-600 dark:text-slate-300">
              {project.status}
            </span>
          ) : null}
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>

        {project.technologies.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.title}`}>
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-sky-500/10 px-2.5 py-1 font-mono text-xs text-sky-800 dark:text-sky-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        {project.repoUrl || project.demoUrl ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-2 text-sm hover:border-sky-400/60"
                aria-label={`Repositorio de ${project.title} (se abre en una pestaña nueva)`}
              >
                <GitHubIcon className="size-4" />
                Repositorio
              </a>
            ) : null}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-2 text-sm hover:border-sky-400/60"
                aria-label={`Ver proyecto ${project.title} (se abre en una pestaña nueva)`}
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                Ver proyecto
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}
