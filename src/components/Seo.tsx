import { Helmet } from 'react-helmet-async'
import { pendingConfig, personJsonLd, profile } from '../data/portfolio'

export function Seo() {
  const { siteUrl } = pendingConfig
  const ogImage = `${siteUrl}/og-image.svg`

  return (
    <Helmet htmlAttributes={{ lang: 'es' }}>
      <title>{profile.seoTitle}</title>
      <meta name="description" content={profile.seoDescription} />
      <meta name="author" content={profile.fullName} />
      <meta name="theme-color" content="#050814" />
      <link rel="canonical" href={siteUrl} />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:title" content={profile.seoTitle} />
      <meta property="og:description" content={profile.seoDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={profile.shortName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={profile.seoTitle} />
      <meta name="twitter:description" content={profile.seoDescription} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
    </Helmet>
  )
}
