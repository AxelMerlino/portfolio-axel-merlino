import { cn } from '../utils/cn'

interface SectionTitleProps {
  kicker: string
  title: string
  description?: string
  className?: string
}

export function SectionTitle({ kicker, title, description, className }: SectionTitleProps) {
  return (
    <div className={cn('mx-auto mb-12 max-w-2xl text-center', className)}>
      <p className="mb-3 font-mono text-xs tracking-[0.22em] text-sky-600 uppercase dark:text-sky-300">{kicker}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance text-slate-900 sm:text-4xl dark:text-slate-50">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      ) : null}
    </div>
  )
}
