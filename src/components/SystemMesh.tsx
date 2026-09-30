import { useReducedMotion } from 'framer-motion'

const nodes = [
  { id: 'web', label: 'Web', x: 80, y: 72 },
  { id: 'api', label: 'API', x: 240, y: 112 },
  { id: 'auth', label: 'Auth', x: 240, y: 228 },
  { id: 'db', label: 'DB', x: 400, y: 72 },
  { id: 'svc', label: 'Servicios', x: 400, y: 212 },
]

const links = [
  ['web', 'api'],
  ['api', 'auth'],
  ['api', 'db'],
  ['api', 'svc'],
  ['auth', 'svc'],
] as const

export function SystemMesh() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="glass-card relative overflow-hidden rounded-3xl p-4 sm:p-6">
      <p className="mb-3 font-mono text-[11px] tracking-[0.18em] text-sky-700 uppercase dark:text-sky-300">
        Arquitectura
      </p>
      <svg
        viewBox="0 0 480 300"
        role="img"
        aria-label="Diagrama de conexiones entre una aplicación web, una API .NET, autenticación, PostgreSQL y otros servicios"
        className="h-auto w-full"
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

          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#meshStroke)"
              strokeWidth="1.6"
              strokeDasharray="6 8"
              opacity="0.8"
            >
              {reduceMotion ? null : (
                <animate attributeName="stroke-dashoffset" values="0;28" dur="3.6s" repeatCount="indefinite" />
              )}
            </line>
          )
        })}

        {nodes.map((node) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r="22" fill="#0b1220" stroke="#38bdf8" strokeWidth="1.5" />
            {reduceMotion ? null : (
              <circle cx={node.x} cy={node.y} r="28" fill="none" stroke="#38bdf8" opacity="0.35">
                <animate attributeName="r" values="24;32;24" dur="3.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="3.2s" repeatCount="indefinite" />
              </circle>
            )}
            <text
              x={node.x}
              y={node.y + 44}
              textAnchor="middle"
              fill="currentColor"
              fontSize="12"
              fontFamily="IBM Plex Mono, monospace"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
