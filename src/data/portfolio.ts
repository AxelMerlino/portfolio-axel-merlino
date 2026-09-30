import type {
  Certification,
  EducationItem,
  Experience,
  Language,
  NavItem,
  PendingConfig,
  Project,
  SocialLink,
  TechnologyGroupData,
} from '../types'

/**
 * =============================================================================
 * VALORES PENDIENTES DE REEMPLAZAR
 * Completá estos campos antes de publicar el sitio.
 * =============================================================================
 */
export const pendingConfig: PendingConfig = {
  githubUsername: 'AxelMerlino',
  // TODO: reemplazar por la URL definitiva cuando despliegues en Vercel
  siteUrl: 'https://TU-DOMINIO.vercel.app',
  cvPath: '/cv/axel-maximiliano-merlino-cv.pdf',
  showCvDownload: true,
  // TODO: ajustar según tu situación actual
  availability:
    'Abierto a oportunidades como Desarrollador .NET Junior, Backend Junior o Full Stack Junior.',
}

export const profile = {
  fullName: 'Axel Maximiliano Merlino',
  shortName: 'Axel Merlino',
  initials: 'AM',
  title: 'Desarrollador .NET Jr. | Estudiante de Ingeniería en Sistemas',
  location: 'Avellaneda, Buenos Aires, Argentina',
  email: 'AxelMerlino@gmail.com',
  heroSummary:
    'Desarrollador de software especializado en tecnologías .NET, APIs y bases de datos. Actualmente estudio Ingeniería en Sistemas y cuento con experiencia en el desarrollo y mantenimiento de soluciones utilizadas en entornos reales.',
  about: [
    'Soy estudiante avanzado de Ingeniería en Sistemas en la Universidad Abierta Interamericana y desarrollador de software con experiencia laboral en aplicaciones web, APIs, autenticación, bases de datos y sistemas empresariales.',
    'Trabajo principalmente con C#, .NET Framework, .NET, PostgreSQL y tecnologías frontend. Me interesa crear soluciones mantenibles, resolver problemas reales y continuar desarrollándome profesionalmente en backend y arquitectura de software.',
    'También cuento con conocimientos de Linux, administración de sistemas, OpenShift, contenedores y fundamentos de infraestructura adquiridos mediante capacitaciones de Red Hat.',
  ],
  seoTitle: 'Axel Merlino | Desarrollador .NET',
  seoDescription:
    'Portfolio de Axel Maximiliano Merlino, desarrollador .NET Jr. y estudiante de Ingeniería en Sistemas. Experiencia en C#, APIs REST, PostgreSQL y aplicaciones web.',
}

export const githubUrl = `https://github.com/${pendingConfig.githubUsername}`
export const linkedinUrl = 'https://www.linkedin.com/in/axeel/'
export const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent('Consulta profesional — Axel Merlino')}`

export const navigation: NavItem[] = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'sobre-mi', label: 'Sobre mí', href: '#sobre-mi' },
  { id: 'experiencia', label: 'Experiencia', href: '#experiencia' },
  { id: 'tecnologias', label: 'Tecnologías', href: '#tecnologias' },
  { id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
  { id: 'educacion', label: 'Educación', href: '#educacion' },
  { id: 'certificaciones', label: 'Certificaciones', href: '#certificaciones' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
]

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: linkedinUrl,
    icon: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: githubUrl,
    icon: 'github',
  },
  {
    id: 'email',
    label: 'Correo electrónico',
    href: mailtoUrl,
    icon: 'email',
  },
]

export const experiences: Experience[] = [
  {
    id: 'america-virtual',
    company: 'América Virtual S.A.',
    role: 'Desarrollador de Software / Pasante de Desarrollo',
    period: 'Junio de 2025 — Actualidad',
    current: true,
    summary:
      'Participación en el desarrollo y mantenimiento de soluciones web y APIs para plataformas de gestión. Trabajo con aplicaciones existentes, integración entre servicios, autenticación, bases de datos y resolución de incidencias.',
    highlights: [
      'Desarrollo y mantenimiento de aplicaciones con C#, .NET Framework 4.8.1 y .NET 6.',
      'Desarrollo y consumo de APIs REST.',
      'Acceso a datos mediante Entity Framework, Dapper y PostgreSQL.',
      'Implementación y mantenimiento de mecanismos de autenticación con JWT, OAuth 2.0 y Google OAuth.',
      'Participación en soluciones web desarrolladas con MVC, AngularJS y JavaScript.',
      'Colaboración en aplicaciones móviles desarrolladas con React Native y Expo.',
      'Uso de Docker, WSL2 e IIS en entornos de desarrollo y despliegue.',
      'Análisis y resolución de errores en sistemas existentes.',
      'Testing funcional y documentación técnica.',
      'Trabajo con sistemas multiempresa y arquitecturas compuestas por distintos servicios.',
    ],
  },
  {
    id: 'giver-solutions',
    company: 'Giver Solutions',
    role: 'Analista de Datos y Marketing Digital / Outbound Specialist',
    period: 'Septiembre de 2023 — Diciembre de 2023',
    highlights: [
      'Creación, organización, limpieza y actualización de bases de datos de clientes potenciales.',
      'Búsqueda y calificación de oportunidades comerciales.',
      'Utilización de LinkedIn y plataformas de prospección.',
      'Implementación de campañas de email marketing.',
      'Automatización de tareas y procesos comerciales.',
      'Análisis de resultados para optimizar campañas digitales.',
    ],
  },
]

export const technologyGroups: TechnologyGroupData[] = [
  {
    id: 'backend',
    title: 'Backend',
    description: 'Servicios, APIs y aplicaciones del lado del servidor.',
    items: [
      { name: 'C#' },
      { name: '.NET' },
      { name: 'ASP.NET' },
      { name: '.NET Framework' },
      { name: 'ASP.NET MVC' },
      { name: 'Web API' },
      { name: 'API REST' },
      { name: 'Entity Framework' },
      { name: 'Dapper' },
      { name: 'NestJS' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend y móvil',
    description: 'Interfaces web y aplicaciones móviles.',
    items: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'AngularJS' },
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Expo' },
    ],
  },
  {
    id: 'databases',
    title: 'Bases de datos',
    description: 'Modelado, consultas y persistencia.',
    items: [
      { name: 'PostgreSQL' },
      { name: 'SQL Server' },
      { name: 'MySQL' },
      { name: 'SQL' },
      { name: 'Bases de datos relacionales' },
      { name: 'NoSQL' },
    ],
  },
  {
    id: 'auth',
    title: 'Autenticación e integración',
    description: 'Identidad, tokens e intercambio de datos.',
    items: [
      { name: 'JWT' },
      { name: 'OAuth 2.0' },
      { name: 'Google OAuth' },
      { name: 'JSON' },
      { name: 'XML' },
      { name: 'Web Services' },
    ],
  },
  {
    id: 'infra',
    title: 'Herramientas e infraestructura',
    description: 'Control de versiones, entornos y despliegue.',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'WSL2' },
      { name: 'IIS' },
      { name: 'Linux' },
      { name: 'Windows' },
      { name: 'OpenShift' },
      { name: 'Postman' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'gestion-web',
    title: 'Sistema de gestión web',
    description:
      'Participación en el desarrollo y mantenimiento de una plataforma de gestión empresarial compuesta por aplicaciones web y APIs.',
    technologies: [
      'C#',
      '.NET Framework',
      'ASP.NET MVC',
      'Web API',
      'PostgreSQL',
      'Entity Framework',
      'Dapper',
      'JavaScript',
    ],
    type: 'professional',
    status: 'Experiencia profesional',
  },
  {
    id: 'auth-api',
    title: 'API de autenticación e integración',
    description:
      'Implementación y mantenimiento de servicios de autenticación y comunicación entre aplicaciones mediante tokens y estándares de autorización.',
    technologies: ['.NET', 'JWT', 'OAuth 2.0', 'Google OAuth', 'API REST', 'PostgreSQL'],
    type: 'professional',
    status: 'Experiencia profesional',
  },
  {
    id: 'proximo-proyecto',
    title: 'Próximo proyecto',
    description: 'Actualmente estoy preparando un nuevo proyecto para incorporar a mi portfolio.',
    technologies: [],
    type: 'personal',
    status: 'En desarrollo',
  },
]

export const education: EducationItem[] = [
  {
    id: 'ingenieria',
    title: 'Ingeniería en Sistemas Informáticos',
    institution: 'Universidad Abierta Interamericana',
    period: 'Abril de 2021 — Actualidad',
    status: 'Estudiante avanzado — cursando quinto año',
    areas: [
      'Programación orientada a objetos',
      'Bases de datos',
      'Ingeniería de software',
      'Arquitectura de sistemas',
      'Sistemas operativos',
      'Algoritmos y estructuras de datos',
      'Análisis y diseño de sistemas',
      'Desarrollo de software',
    ],
  },
  {
    id: 'tecnico',
    title: 'Técnico en Diseño y Producción Gráfica',
    institution: 'Escuela Técnica N.º 15 “Maipú”',
    period: '2015 — 2020',
    description:
      'Formación técnica en diseño, producción gráfica y utilización de herramientas digitales.',
  },
]

export const certifications: Certification[] = [
  {
    id: 'rh124',
    name: 'Red Hat System Administration I',
    issuer: 'Red Hat',
    code: 'RH124',
    version: '10.0',
    date: '11 de septiembre de 2026',
    hours: 40,
    credentialUrl: 'https://www.credly.com/badges/0368355d-286c-484c-ae19-981f0cb0705b',
    pdfPath: '/certificates/red-hat-rh124-axel-merlino.pdf',
    showPdfDownload: false,
  },
  {
    id: 'rh104',
    name: 'Red Hat Training: Getting Started with Linux Fundamentals',
    issuer: 'Red Hat',
    code: 'RH104',
    version: '9.1',
    date: '1 de septiembre de 2026',
    hours: 16,
    credentialUrl: 'https://www.credly.com/badges/afe080de-aaa9-425c-9388-5c0d040f9e5d',
    pdfPath: '/certificates/red-hat-rh104-axel-merlino.pdf',
    showPdfDownload: false,
  },
]

export const languages: Language[] = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio' },
  { name: 'Portugués', level: 'Básico' },
]

export const projectTypeLabels: Record<Project['type'], string> = {
  professional: 'Profesional',
  personal: 'Personal',
  academic: 'Académico',
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.fullName,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  url: pendingConfig.siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Avellaneda',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  sameAs: [linkedinUrl, githubUrl],
  knowsAbout: [
    'C#',
    '.NET',
    'ASP.NET',
    'API REST',
    'PostgreSQL',
    'Entity Framework',
    'Desarrollo backend',
  ],
}
