import { useEffect, useId, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation, pendingConfig, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { cn } from '../utils/cn'
import { ThemeToggle } from './ThemeToggle'

const sectionIds = navigation.map((item) => item.id)

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors',
        scrolled || open
          ? 'border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_86%,transparent)] backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 min-w-0 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 rounded-md">
          <span className="grid size-9 place-items-center rounded-lg bg-linear-to-br from-sky-500 to-violet-500 font-mono text-xs font-bold text-white">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold sm:block">{profile.shortName}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Secciones del portfolio">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="nav-link"
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {pendingConfig.showCvDownload ? (
            <a
              href={pendingConfig.cvPath}
              className="hidden rounded-full border border-[var(--line)] px-3 py-2 text-sm font-medium hover:border-sky-400/60 sm:inline-flex"
              download="Axel-Maximiliano-Merlino-CV.pdf"
            >
              Descargar CV
            </a>
          ) : null}
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--line)] lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-[var(--line)] bg-[var(--bg)] lg:hidden"
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Menú móvil">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                'rounded-lg px-3 py-3 text-base',
                activeId === item.id ? 'bg-sky-500/10 text-sky-700 dark:text-sky-300' : 'text-[var(--fg)]',
              )}
              aria-current={activeId === item.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          {pendingConfig.showCvDownload ? (
            <a
              href={pendingConfig.cvPath}
              className="mt-2 inline-flex rounded-full border border-[var(--line)] px-3 py-3 text-base font-medium"
              download="Axel-Maximiliano-Merlino-CV.pdf"
              onClick={() => setOpen(false)}
            >
              Descargar CV
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  )
}
