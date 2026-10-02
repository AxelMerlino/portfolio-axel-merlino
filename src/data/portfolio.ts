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

export const pendingConfig: PendingConfig = {
  githubUsername: 'AxelMerlino',
  siteUrl: 'https://portfolio-axel-merlino.vercel.app',
  cvPath: '/cv/Axel-Maximiliano-Merlino-CV.pdf',
  showCvDownload: true,
  availability: 'Abierto a oportunidades como Desarrollador .NET o Backend Developer.',
}

export const profile = {
  fullName: 'Axel Maximiliano Merlino',
  shortName: 'Axel Merlino',
  initials: 'AM',
  title: 'Desarrollador .NET / Backend Developer',
  location: 'Avellaneda, Buenos Aires, Argentina',
  email: 'AxelMerlino@gmail.com',
  phone: '+54 9 11 3085-6312',
  phoneHref: 'tel:+5491130856312',
  heroSummary:
    'Desarrollador .NET con experiencia en desarrollo y mantenimiento de backend, APIs y bases de datos PostgreSQL. Trabajo en integraciones de servicios para gestión de seguros y en aplicaciones móviles con React Native y Expo. Curso el 5.º año de Ingeniería en Sistemas Informáticos en la Universidad Abierta Interamericana.',
  about: [
    'Desarrollo y mantengo backend, APIs y bases de datos PostgreSQL. Trabajo con integraciones de servicios para gestión de seguros y con aplicaciones móviles en React Native y Expo.',
    'En America Virtual S.A. mantengo el backend y las APIs de OurClub, desarrollo la integración de Gestión Seguros entre Equis y Pax, y automatizo pruebas del módulo CCOO de GDEBA.',
    'En proyectos personales uso React, TypeScript y Vite.',
  ],
  seoTitle: 'Axel Merlino | Desarrollador .NET',
  seoDescription:
    'Portfolio de Axel Maximiliano Merlino, desarrollador .NET. Backend, APIs, PostgreSQL, NestJS y aplicaciones móviles con React Native.',
}

export const githubUrl = `https://github.com/${pendingConfig.githubUsername}`
export const linkedinUrl = 'https://www.linkedin.com/in/axeel/'
export const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent('Consulta profesional — Axel Merlino')}`

export const navigation: NavItem[] = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'sobre-mi', label: 'Sobre mí', href: '#sobre-mi' },
  { id: 'experiencia', label: 'Experiencia', href: '#experiencia' },
  { id: 'tecnologias', label: 'Tecnologías', href: '#tecnologias' },
  { id: 'educacion', label: 'Educación', href: '#educacion' },
  { id: 'cursos', label: 'Cursos', href: '#cursos' },
  { id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
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
    company: 'America Virtual S.A.',
    role: 'Desarrollador',
    period: 'Julio de 2025 — Actualidad',
    current: true,
    summary: 'IT y Proyectos.',
    highlights: [
      'Desarrollo y mantengo el backend y las APIs de OurClub con C#, .NET y PostgreSQL, con correcciones e integraciones entre componentes.',
      'Desarrollo la integración de APIs de Gestión Seguros entre Equis y Pax con NestJS, Prisma y PostgreSQL, para autenticación, manejo de tokens y la vinculación de tomadores con usuarios y contratos.',
      'Desarrollo aplicaciones de OurClub para iOS y Android con React Native y Expo.',
      'Realizo pruebas funcionales del módulo CCOO de GDEBA y automatizo esas pruebas con C#, .NET y Playwright.',
    ],
  },
  {
    id: 'giver-solutions',
    company: 'Giver Solutions',
    role: 'Outbound Specialist',
    period: 'Julio de 2023 — Diciembre de 2023',
    highlights: [
      'Organicé y depuré bases de prospectos en Excel, de entre 200 y 500 registros.',
      'Busqué y califiqué prospectos con LinkedIn Sales Navigator y otras plataformas.',
      'Lancé campañas de email marketing e implementé sales engagement con Instantly.',
    ],
  },
]

export const technologyGroups: TechnologyGroupData[] = [
  {
    id: 'backend',
    title: 'Backend',
    description: 'Servicios y APIs que uso en el trabajo.',
    items: [
      { name: 'C#' },
      { name: '.NET Framework 4.8.1' },
      { name: '.NET 6' },
      { name: 'ASP.NET MVC' },
      { name: 'ASP.NET Web API' },
      { name: 'ASP.NET Core' },
      { name: 'NestJS' },
    ],
  },
  {
    id: 'mobile',
    title: 'Móvil',
    description: 'Aplicaciones de OurClub para iOS y Android.',
    items: [{ name: 'React Native' }, { name: 'Expo' }],
  },
  {
    id: 'data',
    title: 'Datos',
    description: 'Consultas, persistencia y ORM.',
    items: [
      { name: 'SQL' },
      { name: 'PostgreSQL' },
      { name: 'Entity Framework' },
      { name: 'Dapper' },
      { name: 'Prisma' },
    ],
  },
  {
    id: 'web',
    title: 'Web',
    description: 'Sitios y proyectos personales.',
    items: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Vite' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
    ],
  },
  {
    id: 'quality',
    title: 'Pruebas y versiones',
    description: 'Verificación y control de versiones.',
    items: [{ name: 'Pruebas funcionales' }, { name: 'Playwright' }, { name: 'Git' }],
  },
]

export const projects: Project[] = [
  {
    id: 'calculadora-mercadolibre',
    title: 'Calculadora de costos de MercadoLibre',
    description:
      'Calcula precios de publicación en MercadoLibre a partir del ingreso neto objetivo, costos de envío, comisiones e impuestos.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    type: 'personal',
    image: '/projects/calculadora-mercadolibre.png',
    imageAlt: 'Captura de la calculadora de precios para MercadoLibre',
    repoUrl: 'https://github.com/AxelMerlino/calculadora-mercadolibre',
    demoUrl: 'https://calculadora-mercadolibre-virid.vercel.app/',
  },
  {
    id: 'la-aceituna-negra',
    title: 'La Aceituna Negra',
    description:
      'Sitio de práctica para una pizzería de Gerli. Presenta la carta, el local y el pedido por WhatsApp. No es un empleo.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    type: 'practice',
    status: 'Práctica para terceros',
    image: '/projects/la-aceituna-negra.jpg',
    imageAlt: 'Captura del sitio de La Aceituna Negra',
    repoUrl: 'https://github.com/AxelMerlino/La-Aceituna-Negra',
    demoUrl: 'https://la-aceituna-negra.vercel.app/',
  },
  {
    id: 'click-and-go',
    title: 'Click and Go',
    description:
      'Sitio de práctica para un local de mochilas, joyeros y carteras en Temperley. Incluye productos, venta minorista y mayorista, envíos y contacto. No es un empleo.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    type: 'practice',
    status: 'Práctica para terceros',
    image: '/projects/click-and-go.jpg',
    imageAlt: 'Captura del sitio de Click and Go',
    repoUrl: 'https://github.com/AxelMerlino/click-go-web-launch',
    demoUrl: 'https://click-go-web-launch.vercel.app/',
  },
]

export const education: EducationItem[] = [
  {
    id: 'ingenieria',
    title: 'Ingeniería en Sistemas Informáticos',
    institution: 'Universidad Abierta Interamericana',
    period: '2021 — Actualidad',
    status: 'Cursando 5.º año',
  },
  {
    id: 'tecnico',
    title: 'Técnico en Diseño y Producción Gráfica',
    institution: 'Escuela Técnica N.º 15 “Maipú”',
    period: 'Febrero de 2015 — Diciembre de 2020',
  },
  {
    id: 'ingles',
    title: 'Inglés, nivel 02',
    institution: 'Centro Universitario de Idiomas',
  },
]

export const certifications: Certification[] = [
  {
    id: 'rh104',
    name: 'Getting Started with Linux Fundamentals',
    issuer: 'Red Hat',
    code: 'RH104',
    date: 'Septiembre de 2026',
    kind: 'Certificado de asistencia',
    credentialUrl: 'https://www.credly.com/badges/afe080de-aaa9-425c-9388-5c0d040f9e5d/public_url',
    showPdfDownload: false,
  },
  {
    id: 'rh124',
    name: 'Red Hat System Administration I',
    issuer: 'Red Hat',
    code: 'RH124',
    date: 'Septiembre de 2026',
    kind: 'Certificado de asistencia',
    credentialUrl: 'https://www.credly.com/badges/0368355d-286c-484c-ae19-981f0cb0705b/public_url',
    showPdfDownload: false,
  },
  {
    id: 'do180',
    name: 'Red Hat OpenShift Administration I',
    issuer: 'Red Hat',
    code: 'DO180',
    date: 'Septiembre de 2026',
    kind: 'Certificado de asistencia',
    credentialUrl: 'https://www.credly.com/badges/b112a745-e58e-498e-90da-faa3a4023cc0/public_url',
    showPdfDownload: false,
  },
]

export const languages: Language[] = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio' },
]

export const projectTypeLabels: Record<Project['type'], string> = {
  professional: 'Profesional',
  personal: 'Personal',
  practice: 'Práctica',
  academic: 'Académico',
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.fullName,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneHref.replace('tel:', ''),
  url: pendingConfig.siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Avellaneda',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  sameAs: [linkedinUrl, githubUrl, pendingConfig.siteUrl],
  knowsAbout: [
    'C#',
    '.NET',
    'ASP.NET',
    'NestJS',
    'PostgreSQL',
    'Prisma',
    'React Native',
    'Desarrollo backend',
  ],
}
