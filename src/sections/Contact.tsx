import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Toast } from '../components/Toast'
import { SectionTitle } from '../components/SectionTitle'
import { SocialLinks } from '../components/SocialLinks'
import { mailtoUrl, profile, socialLinks } from '../data/portfolio'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

export function Contact() {
  const { copied, message, copy } = useCopyToClipboard()

  return (
    <section id="contacto" className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            kicker="07 — Conversemos"
            title="Contacto"
            description="Si querés escribirme por una oportunidad o una consulta profesional, podés usar el correo o el teléfono."
          />
        </Reveal>

        <Reveal delay={70}>
        <div className="glass-card mx-auto max-w-3xl rounded-2xl p-6 sm:p-8">
          <ul className="space-y-4 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-sky-600 dark:text-sky-300" aria-hidden="true" />
              <div>
                <p className="text-slate-500 dark:text-slate-400">Correo</p>
                <a className="font-medium hover:text-sky-600 dark:hover:text-sky-300" href={mailtoUrl}>
                  {profile.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-sky-600 dark:text-sky-300" aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-slate-500 dark:text-slate-400">Teléfono</p>
                <a className="font-medium break-words hover:text-sky-600 dark:hover:text-sky-300" href={profile.phoneHref}>
                  {profile.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-sky-600 dark:text-sky-300" aria-hidden="true" />
              <div>
                <p className="text-slate-500 dark:text-slate-400">Ubicación</p>
                <p className="font-medium">{profile.location}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400"
            >
              <Mail className="size-4" aria-hidden="true" />
              Enviar correo
            </a>
            <a
              href={profile.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium hover:border-sky-400/60"
            >
              <Phone className="size-4" aria-hidden="true" />
              Llamar
            </a>
            <button
              type="button"
              onClick={() => copy(profile.email, 'Correo copiado al portapapeles')}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium hover:border-sky-400/60"
              aria-label="Copiar correo electrónico al portapapeles"
            >
              {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
              {copied ? 'Copiado' : 'Copiar correo'}
            </button>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">También podés encontrarme en</p>
            <SocialLinks links={socialLinks} />
          </div>
        </div>
        </Reveal>
      </div>
      <Toast message={message} visible={Boolean(message)} />
    </section>
  )
}
