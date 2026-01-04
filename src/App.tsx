import './index.css'
import { Navbar } from './components/Layout/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      
      <main>
        {/* Section de teste para ver a Navbar fixa no topo */}
        <section id="home" className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-brand-accent uppercase">
            Guilherme Patrick
          </h1>
          <p className="text-slate-400 mt-4">Analista de Dados & Business Intelligence</p>
        </section>

        {/* Espaçador para testar o scroll depois */}
        <section id="about" className="h-screen bg-brand-card flex items-center justify-center">
          <h2 className="text-3xl font-bold">Sobre Mim</h2>
        </section>
      </main>
    </div>
  )
}

export default App