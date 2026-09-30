import { Mail } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import type { SocialIcon, SocialLink } from '../types'
import { cn } from '../utils/cn'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'

const icons: Record<SocialIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
}

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
  compact?: boolean
}

export function SocialLinks({ links, className, compact = false }: SocialLinksProps) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-3', className)}>
      {links.map((link) => {
        const Icon = icons[link.icon]
        const external = link.href.startsWith('http')

        return (
          <li key={link.id}>
            <a
              href={link.href}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--bg-elevated)] transition hover:border-sky-400/60 hover:text-sky-600 dark:hover:text-sky-300',
                compact ? 'size-10 justify-center' : 'px-4 py-2 text-sm font-medium',
              )}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={external ? `${link.label} (se abre en una pestaña nueva)` : link.label}
            >
              <Icon className="size-4" aria-hidden="true" />
              {compact ? <span className="sr-only">{link.label}</span> : link.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
