import './index.css'
import { Navbar } from './components/Layout/Navbar'
import { Home } from './components/Sections/Home'
import { About } from './components/Sections/About'

function App() {
  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Menu de navegação fixo */}
      <Navbar />
      
      <main>
        {/* 1. HOME: Apresentação principal e impacto */}
        <Home />

        {/* 2. ABOUT: Sua história, transição e foto */}
        {/* <About /> */}
        <section id="about" className="h-screen bg-brand-card flex items-center justify-center">
          < About />
        </section>

        {/* 3. SKILLS: Hard skills (SQL, Power BI, Python, etc) e ferramentas */}
        {/* <Skills /> */}
        <section id="skills" className="h-screen flex items-center justify-center border-b border-white/5">
          <h2 className="text-3xl font-bold">Habilidades (Em construção)</h2>
        </section>

        {/* 4. PROJECTS: Grid de cards que abrem os dashboards no Modal */}
        {/* <Projects /> */}
        <section id="projects" className="min-h-screen py-20 flex items-center justify-center bg-brand-card">
          <h2 className="text-3xl font-bold">Projetos (Em construção)</h2>
        </section>

        {/* 5. CONTACT: Links sociais e formulário/e-mail */}
        {/* <Contact /> */}
        <section id="contact" className="h-[60vh] flex items-center justify-center">
          <h2 className="text-3xl font-bold">Contato (Em construção)</h2>
        </section>
      </main>

      {/* RODAPÉ: Copyright e links rápidos */}
      {/* <Footer /> */}
    </div>
  )
}

export default App