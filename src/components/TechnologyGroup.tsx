import { Database, Monitor, Server, Shield, Wrench } from 'lucide-react'
import type { TechnologyGroupData } from '../types'

const icons = {
  backend: Server,
  frontend: Monitor,
  databases: Database,
  auth: Shield,
  infra: Wrench,
} as const

interface TechnologyGroupProps {
  group: TechnologyGroupData
}

export function TechnologyGroup({ group }: TechnologyGroupProps) {
  const Icon = icons[group.id as keyof typeof icons] ?? Server

  return (
    <section className="glass-card rounded-2xl p-5" aria-labelledby={`${group.id}-title`}>
      <div className="mb-4 flex items-start gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-300">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h3 id={`${group.id}-title`} className="font-semibold text-slate-900 dark:text-white">
            {group.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{group.description}</p>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item.name}
            className="rounded-lg border border-[var(--line)] bg-white/40 px-3 py-1.5 text-sm text-slate-700 dark:bg-white/5 dark:text-slate-200"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
