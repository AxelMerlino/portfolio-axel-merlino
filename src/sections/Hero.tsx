import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons'
import { SocialLinks } from '../components/SocialLinks'
import { SystemMesh } from '../components/SystemMesh'
import { githubUrl, linkedinUrl, pendingConfig, profile, socialLinks } from '../data/portfolio'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const initial = reduceMotion ? false : { opacity: 0, y: 18 }

  return (
    <section id="inicio" className="relative pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div initial={initial} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="mb-4 font-mono text-xs tracking-[0.22em] text-sky-700 uppercase dark:text-sky-300">
            {profile.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {profile.fullName}
          </h1>
          <p className="mt-4 text-lg font-medium text-sky-700 dark:text-sky-300">{profile.title}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.heroSummary}
          </p>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{pendingConfig.availability}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400"
            >
              Ver proyectos
            </a>
            {pendingConfig.showCvDownload ? (
              <a
                href={pendingConfig.cvPath}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium hover:border-sky-400/60"
                download
              >
                <Download className="size-4" aria-hidden="true" />
                Descargar CV
              </a>
            ) : null}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium hover:border-sky-400/60"
              aria-label="LinkedIn (se abre en una pestaña nueva)"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium hover:border-sky-400/60"
              aria-label="GitHub (se abre en una pestaña nueva)"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </div>

          <SocialLinks links={socialLinks} className="mt-8 lg:hidden" compact />
        </motion.div>

        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.08 }}
        >
          <SystemMesh />
        </motion.div>
      </div>

      <a
        href="#sobre-mi"
        className="mx-auto mt-12 flex w-fit flex-col items-center gap-2 text-sm text-slate-500 hover:text-sky-600 dark:hover:text-sky-300"
        aria-label="Continuar a la sección Sobre mí"
      >
        <span>Seguir</span>
        <ArrowDown className="size-4" aria-hidden="true" />
      </a>
    </section>
  )
}
