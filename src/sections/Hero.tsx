import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons'
import { SocialLinks } from '../components/SocialLinks'
import { SystemMesh } from '../components/SystemMesh'
import { githubUrl, linkedinUrl, pendingConfig, profile, socialLinks } from '../data/portfolio'

const HERO_TYPED_KEY = 'hero-name-typed'

function initialTypedCount(name: string) {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return name.length
    }
    if (sessionStorage.getItem(HERO_TYPED_KEY) === '1') {
      return name.length
    }
  } catch {
    return name.length
  }

  return 0
}

export function Hero() {
  const reduceMotion = useReducedMotion()
  const initial = reduceMotion ? false : { opacity: 0, y: 18 }
  const [typedCount, setTypedCount] = useState(() => initialTypedCount(profile.fullName))

  useEffect(() => {
    if (typedCount >= profile.fullName.length) {
      try {
        sessionStorage.setItem(HERO_TYPED_KEY, '1')
      } catch {
        // el nombre queda visible aunque el almacenamiento esté bloqueado
      }
      return
    }

    const timer = window.setTimeout(() => setTypedCount((count) => count + 1), 36)
    return () => window.clearTimeout(timer)
  }, [typedCount])

  return (
    <section id="inicio" className="relative pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto grid min-w-0 max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div className="min-w-0" initial={initial} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="mb-4 font-mono text-xs tracking-[0.22em] text-sky-700 uppercase dark:text-sky-300">
            {profile.location}
          </p>
          <h1 className="max-w-full text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            <span className="sr-only">{profile.fullName}</span>
            <span aria-hidden="true">
              <span className="mr-1 align-middle font-mono text-[0.42em] font-medium tracking-normal text-sky-700 dark:text-sky-300">
                &gt;{' '}
              </span>
              {profile.fullName.slice(0, typedCount)}
              <span className="hero-caret">_</span>
            </span>
          </h1>
          <p className="mt-4 max-w-full text-lg font-medium text-balance text-sky-700 dark:text-sky-300">{profile.title}</p>
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
                download="Axel-Maximiliano-Merlino-CV.pdf"
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
