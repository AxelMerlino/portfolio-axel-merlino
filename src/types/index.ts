export type ProjectType = 'personal' | 'academic' | 'professional'
export type SocialIcon = 'github' | 'linkedin' | 'email'
export type Theme = 'dark' | 'light'

export interface NavItem {
  id: string
  label: string
  href: string
}

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: SocialIcon
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  current?: boolean
  summary?: string
  highlights: string[]
}

export interface TechnologyItem {
  name: string
}

export interface TechnologyGroupData {
  id: string
  title: string
  description: string
  items: TechnologyItem[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  type: ProjectType
  status?: string
  image?: string
  imageAlt?: string
  repoUrl?: string
  demoUrl?: string
}

export interface EducationItem {
  id: string
  title: string
  institution: string
  period: string
  status?: string
  description?: string
  areas?: string[]
}

export interface Certification {
  id: string
  name: string
  issuer: string
  code: string
  version: string
  date: string
  hours: number
  credentialUrl: string
  pdfPath?: string
  showPdfDownload: boolean
}

export interface Language {
  name: string
  level: string
}

export interface PendingConfig {
  githubUsername: string
  siteUrl: string
  cvPath: string
  showCvDownload: boolean
  availability: string
}
