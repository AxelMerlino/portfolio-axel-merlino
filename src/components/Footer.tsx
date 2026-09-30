import { profile, socialLinks } from '../data/portfolio'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-semibold">{profile.fullName}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            © {year} · Portfolio profesional
          </p>
        </div>
        <SocialLinks links={socialLinks} compact />
      </div>
    </footer>
  )
}
