# Portfolio — Axel Maximiliano Merlino

Portfolio profesional de **Axel Maximiliano Merlino**, desarrollador .NET Junior y estudiante de Ingeniería en Sistemas. El sitio está pensado para búsquedas laborales de desarrollador .NET Junior, backend y pasantías IT.

Es una aplicación de una sola página, con navegación por secciones, tema oscuro como predeterminado y un tema claro coherente.

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Framer Motion
- React Helmet Async

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Instalación local

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

El servidor de desarrollo queda disponible, por lo general, en `http://localhost:5173`.

## Compilación

```bash
npm run build
npm run preview
```

También podés revisar el linter:

```bash
npm run lint
```

## Estructura del proyecto

```text
public/
  certificates/          # PDF de credenciales (opcional)
  cv/                    # CV en PDF (opcional)
  favicon.svg
  manifest.webmanifest
  robots.txt
  sitemap.xml
src/
  assets/
  components/            # Piezas reutilizables (Navbar, tarjetas, SEO, etc.)
  data/portfolio.ts      # Toda la información personal y profesional
  hooks/
  sections/              # Secciones de la página
  types/
  utils/
  App.tsx
  main.tsx
  index.css
```

## Cómo modificar los datos personales

Todos los textos, enlaces, experiencias, tecnologías, proyectos, educación y certificaciones viven en un solo archivo:

```text
src/data/portfolio.ts
```

No hace falta repetir el nombre, el correo o las redes en cada componente. Editá ese archivo y el sitio se actualiza.

En la parte superior está el bloque **VALORES PENDIENTES DE REEMPLAZAR**:

- Usuario de GitHub
- URL definitiva del portfolio
- Ruta del CV
- Visibilidad del botón “Descargar CV”
- Disponibilidad laboral

También actualizá `public/robots.txt` y `public/sitemap.xml` cuando tengas el dominio final.

## Cómo agregar proyectos

En `src/data/portfolio.ts`, dentro del arreglo `projects`, agregá un objeto con esta forma:

```ts
{
  id: 'mi-proyecto',
  title: 'Nombre del proyecto',
  description: 'Qué problema resuelve y qué rol tuviste.',
  technologies: ['C#', '.NET', 'PostgreSQL'],
  type: 'personal', // personal | academic | professional
  status: 'En desarrollo',
  image: '/projects/mi-proyecto.png', // opcional
  imageAlt: 'Captura del proyecto',   // opcional
  repoUrl: 'https://github.com/usuario/repo', // opcional
  demoUrl: 'https://demo.vercel.app',         // opcional
}
```

Si no hay repositorio o demo, omití esas propiedades. Los botones vacíos no se muestran.

Colocá las imágenes en `public/projects/` y referencialas con ruta absoluta, por ejemplo `/projects/mi-proyecto.png`.

## Cómo colocar el CV

1. Guardá el PDF actualizado en:

```text
public/cv/Axel-Maximiliano-Merlino-CV.pdf
```

2. En `src/data/portfolio.ts` cambiá:

```ts
showCvDownload: true
```

No incluyas versiones viejas del currículum en el repositorio. Solo la versión vigente.

## Cómo agregar los certificados

1. Colocá los PDF en `public/certificates/` con nombres simples:

```text
public/certificates/red-hat-rh124-axel-merlino.pdf
public/certificates/red-hat-rh104-axel-merlino.pdf
```

2. En cada certificación de `src/data/portfolio.ts` cambiá:

```ts
showPdfDownload: true
```

El botón “Ver credencial” ya apunta a Credly y se abre en otra pestaña. El botón de PDF permanece oculto hasta que actives esa propiedad, así el sitio no se rompe si el archivo todavía no está.

## Cómo subirlo a GitHub

Desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Publicar portfolio profesional de Axel Merlino"
git branch -M main
git remote add origin https://github.com/AxelMerlino/portfolio-axel-merlino.git
git push -u origin main
```

El repositorio remoto es https://github.com/AxelMerlino/portfolio-axel-merlino.

## Cómo desplegarlo en Vercel

1. Entrá a [https://vercel.com](https://vercel.com) e iniciá sesión con GitHub.
2. Elegí **Add New… → Project**.
3. Importá el repositorio del portfolio.
4. Dejá el framework en **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Confirmá el deploy.

El sitio es una sola página con anclas (`#experiencia`, `#proyectos`, etc.). Actualizar la URL no debería romper la navegación.

## Cómo conectar un dominio propio

En el proyecto de Vercel:

1. Abrí **Settings → Domains**.
2. Agregá tu dominio.
3. Configurá los registros DNS que Vercel indique (A, CNAME o nameservers).
4. Cuando el dominio esté activo, actualizá:

- `pendingConfig.siteUrl` en `src/data/portfolio.ts`
- `public/robots.txt`
- `public/sitemap.xml`

## Lista de datos pendientes de reemplazar

- [x] Usuario de GitHub (`AxelMerlino`)
- [x] URL definitiva del portfolio (`https://portfolio-axel-merlino.vercel.app`)
- [ ] Disponibilidad laboral, si querés un texto más preciso
- [x] CV en `public/cv/Axel-Maximiliano-Merlino-CV.pdf` y `showCvDownload: true`
- [ ] PDF de certificaciones y `showPdfDownload: true` cuando existan
- [ ] Proyectos personales futuros (repositorio, demo, imagen)
- [ ] `public/robots.txt` y `public/sitemap.xml` con el dominio final
- [ ] Favicon definitivo, si preferís reemplazar las iniciales AM

## Notas de diseño y accesibilidad

- Tema oscuro por defecto, con interruptor a tema claro.
- Navegación fija, menú hamburguesa en celular y resaltado de la sección activa.
- Animaciones discretas y respeto por `prefers-reduced-motion`.
- El correo se puede copiar al portapapeles; el aviso es accesible mediante `aria-live`.
- No se muestran teléfono, DNI, edad ni dirección exacta.

## Licencia

Uso personal del autor del portfolio.
