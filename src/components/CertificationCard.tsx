import { Award, Download, ExternalLink } from 'lucide-react'
import type { Certification } from '../types'

interface CertificationCardProps {
  certification: Certification
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <article className="glass-card flex h-full flex-col rounded-2xl p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="grid size-11 place-items-center rounded-xl bg-violet-500/15 text-violet-700 dark:text-violet-300">
          <Award className="size-5" aria-hidden="true" />
        </span>
        <span className="rounded-full border border-[var(--line)] px-2.5 py-1 font-mono text-xs">
          {certification.code}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{certification.name}</h3>
      <p className="mt-1 text-sm text-sky-700 dark:text-sky-300">{certification.issuer}</p>

      <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-slate-500 dark:text-slate-400">Versión</dt>
          <dd>{certification.version}</dd>
        </div>
        <div>
          <dt className="text-slate-500 dark:text-slate-400">Duración</dt>
          <dd>{certification.hours} horas</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-slate-500 dark:text-slate-400">Fecha</dt>
          <dd>{certification.date}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400"
          aria-label={`Ver credencial de ${certification.name} (se abre en una pestaña nueva)`}
        >
          <ExternalLink className="size-4" aria-hidden="true" />
          Ver credencial
        </a>
        {certification.showPdfDownload && certification.pdfPath ? (
          <a
            href={certification.pdfPath}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm"
            download
            aria-label={`Descargar certificado PDF de ${certification.name}`}
          >
            <Download className="size-4" aria-hidden="true" />
            Descargar PDF
          </a>
        ) : null}
      </div>
    </article>
  )
}
