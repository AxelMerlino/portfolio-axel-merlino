import { useEffect, useId, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react'
import { cn } from '../utils/cn'

type NodeId = 'csharp' | 'react' | 'api' | 'dotnet' | 'postgres' | 'docker' | 'openshift'

type StackNode = {
  id: NodeId
  label: string
  full: string
  group: string
  x: number
  y: number
  tier: 'core' | 'tech'
}

const nodes: StackNode[] = [
  { id: 'csharp', label: 'C#', full: 'C#', group: 'Backend', x: 122, y: 56, tier: 'tech' },
  { id: 'react', label: 'React', full: 'React', group: 'Frontend', x: 74, y: 154, tier: 'tech' },
  { id: 'api', label: 'API', full: 'REST API', group: 'APIs', x: 206, y: 154, tier: 'core' },
  { id: 'dotnet', label: '.NET', full: '.NET', group: 'Backend', x: 324, y: 98, tier: 'core' },
  { id: 'postgres', label: 'Postgres', full: 'PostgreSQL', group: 'Datos', x: 424, y: 56, tier: 'tech' },
  { id: 'docker', label: 'Docker', full: 'Docker', group: 'DevOps', x: 246, y: 240, tier: 'tech' },
  { id: 'openshift', label: 'OpenShift', full: 'OpenShift', group: 'DevOps', x: 392, y: 240, tier: 'tech' },
]

const links: Array<[NodeId, NodeId]> = [
  ['csharp', 'dotnet'],
  ['react', 'api'],
  ['api', 'dotnet'],
  ['dotnet', 'postgres'],
  ['dotnet', 'docker'],
  ['docker', 'openshift'],
]

const related: Record<NodeId, NodeId[]> = {
  csharp: ['csharp', 'dotnet', 'api', 'postgres'],
  dotnet: ['csharp', 'dotnet', 'api', 'postgres'],
  api: ['react', 'csharp', 'api', 'dotnet', 'postgres'],
  react: ['react', 'api', 'dotnet'],
  postgres: ['csharp', 'dotnet', 'api', 'postgres'],
  docker: ['dotnet', 'docker', 'openshift'],
  openshift: ['dotnet', 'docker', 'openshift'],
}

const paths: Record<NodeId, string> = {
  csharp: 'C# → .NET → REST API → PostgreSQL',
  dotnet: 'C# → .NET → REST API → PostgreSQL',
  api: 'React → REST API → .NET → PostgreSQL',
  react: 'React → API → .NET',
  postgres: 'C# → .NET → REST API → PostgreSQL',
  docker: '.NET → Docker → OpenShift',
  openshift: '.NET → Docker → OpenShift',
}

const mobileOrder: NodeId[] = ['csharp', 'dotnet', 'react', 'api', 'postgres', 'docker', 'openshift']

const idlePath = 'C# / .NET · API · PostgreSQL · React · Docker · OpenShift'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function useFinePointer() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setFine(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return fine
}

export function SystemMesh() {
  const titleId = useId()
  const cardRef = useRef<HTMLDivElement>(null)
  const finePointer = useFinePointer()
  const [reduce, setReduce] = useState(prefersReducedMotion)
  const [visible, setVisible] = useState(reduce)
  const [introDone, setIntroDone] = useState(reduce)
  const [active, setActive] = useState<NodeId | null>(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduce(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const card = cardRef.current
    if (!card || reduce) {
      return
    }

    const reveal = () => setVisible(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }
        reveal()
        observer.disconnect()
      },
      { threshold: 0.35 },
    )
    observer.observe(card)
    const fallback = window.setTimeout(reveal, 1600)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [reduce])

  useEffect(() => {
    if (!visible || reduce || introDone) {
      return
    }

    const timer = window.setTimeout(() => setIntroDone(true), 1150)
    return () => window.clearTimeout(timer)
  }, [visible, reduce, introDone])

  const waiting = !reduce && !visible
  const entering = !reduce && visible && !introDone
  const interactive = reduce || introDone
  const group = active ? related[active] : null

  function hot(id: NodeId) {
    return Boolean(group?.includes(id))
  }

  function select(id: NodeId) {
    setActive((current) => (current === id ? null : id))
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
    }
  }

  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (!finePointer || reduce) {
      return
    }
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 6
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 4
    event.currentTarget.style.setProperty('--mesh-shift-x', `${x.toFixed(2)}px`)
    event.currentTarget.style.setProperty('--mesh-shift-y', `${y.toFixed(2)}px`)
  }

  function onMouseLeave(event: MouseEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty('--mesh-shift-x', '0px')
    event.currentTarget.style.setProperty('--mesh-shift-y', '0px')
    if (!finePointer) {
      return
    }
    const next = event.relatedTarget
    if (next instanceof Node && event.currentTarget.contains(next)) {
      return
    }
    setActive(null)
  }

  return (
    <div
      ref={cardRef}
      className="glass-card relative overflow-hidden rounded-3xl p-4 sm:p-6"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <p
        id={titleId}
        className="mb-3 font-mono text-[11px] tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300"
      >
        Stack tecnológico
      </p>

      <div className="grid grid-cols-2 gap-2 sm:hidden">
        {mobileOrder.map((id, index) => {
          const node = nodes.find((item) => item.id === id)
          if (!node) {
            return null
          }
          const isHot = interactive && hot(node.id)
          const isDim = Boolean(interactive && group && !isHot)

          return (
            <button
              key={node.id}
              type="button"
              data-stack-chip={node.id}
              aria-pressed={active === node.id}
              onClick={() => select(node.id)}
              onFocus={(event) => {
                if (event.currentTarget.matches(':focus-visible')) {
                  setActive(node.id)
                }
              }}
              onBlur={(event) => {
                const next = event.relatedTarget
                if (next instanceof Element && (next.closest('[data-node]') || next.closest('[data-stack-chip]'))) {
                  return
                }
                setActive(null)
              }}
              style={{ animationDelay: `${0.05 + index * 0.06}s` }}
              className={cn(
                'stack-chip min-h-11 min-w-0 rounded-2xl border border-sky-400/35 bg-[#0b1220] px-3 py-2 text-left',
                waiting && 'is-waiting',
                entering && 'is-entering',
                isHot && 'border-sky-300 shadow-[0_0_0_1px_rgba(125,211,252,0.45)]',
                isDim && 'is-dim',
                node.id === 'openshift' && 'col-span-2',
              )}
            >
              <span className="block font-mono text-[10px] tracking-[0.16em] text-sky-300 uppercase">{node.group}</span>
              <span className="font-mono text-sm text-slate-100">{node.full}</span>
            </button>
          )
        })}
      </div>

      <svg
        viewBox="0 0 480 300"
        role="group"
        aria-labelledby={titleId}
        className="stack-shift hidden h-auto w-full sm:block"
      >
        <defs>
          <linearGradient id="meshStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>

        {links.map(([from, to]) => {
          const a = nodes.find((node) => node.id === from)
          const b = nodes.find((node) => node.id === to)
          if (!a || !b) {
            return null
          }
          const isHot = Boolean(interactive && group?.includes(from) && group.includes(to))
          const isDim = Boolean(interactive && group && !isHot)

          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              pathLength={1}
              stroke="url(#meshStroke)"
              strokeWidth={isHot ? 2.4 : 1.6}
              strokeLinecap="round"
              className={cn('stack-link', waiting && 'is-waiting', entering && 'is-entering', isHot && 'is-hot', isDim && 'is-dim')}
            />
          )
        })}

        {nodes.map((node) => {
          const isHot = Boolean(interactive && active === node.id)
          const isRelated = Boolean(interactive && group?.includes(node.id))
          const isDim = Boolean(interactive && group && !isRelated)

          return (
            <g
              key={node.id}
              role="button"
              tabIndex={0}
              data-node={node.id}
              aria-label={node.full}
              aria-pressed={active === node.id}
              className={cn(
                'stack-node',
                node.tier === 'core' ? 'is-core' : 'is-tech',
                waiting && 'is-waiting',
                entering && 'is-entering',
                isHot && 'is-hot',
                isRelated && !isHot && 'is-related',
                isDim && 'is-dim',
              )}
              onMouseEnter={() => {
                if (finePointer) {
                  setActive(node.id)
                }
              }}
              onMouseLeave={(event) => {
                if (!finePointer) {
                  return
                }
                const next = event.relatedTarget
                if (next instanceof Element && next.closest('[data-node]')) {
                  return
                }
                setActive(null)
              }}
              onClick={() => {
                if (!finePointer) {
                  select(node.id)
                }
              }}
              onFocus={(event) => {
                if (event.currentTarget.matches(':focus-visible')) {
                  setActive(node.id)
                }
              }}
              onBlur={(event) => {
                const next = event.relatedTarget
                if (next instanceof Element && (next.closest('[data-node]') || next.closest('[data-stack-chip]'))) {
                  return
                }
                setActive(null)
              }}
              onKeyDown={onKeyDown}
            >
              <circle className="stack-hit" cx={node.x} cy={node.y} r="30" fill="transparent" />
              <circle className="stack-halo" cx={node.x} cy={node.y} r="26" fill="none" stroke="#38bdf8" strokeWidth="1" />
              <circle
                className="stack-core"
                cx={node.x}
                cy={node.y}
                r="18"
                fill="#0b1220"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />
              <text
                x={node.x}
                y={node.y + 34}
                textAnchor="middle"
                fill="currentColor"
                fontSize="11"
                fontFamily="IBM Plex Mono, ui-monospace, monospace"
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>

      <p aria-live="polite" className="mt-3 min-h-5 text-center font-mono text-[11px] tracking-wide text-balance text-sky-700 dark:text-sky-300">
        {active ? paths[active] : idlePath}
      </p>
    </div>
  )
}
