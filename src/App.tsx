import { Background } from './components/Background'
import { CursorField } from './components/CursorField'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Seo } from './components/Seo'
import { SkipLink } from './components/SkipLink'
import { About } from './sections/About'
import { Certifications } from './sections/Certifications'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Technologies } from './sections/Technologies'

export default function App() {
  return (
    <>
      <Seo />
      <SkipLink />
      <Background />
      <CursorField />
      <Navbar />
      <main id="contenido">
        <Hero />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
