// src/components/Sections/Home.tsx

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Efeito visual de profundidade */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-brand-accent/5 rounded-full blur-3xl" />

      <div className="text-center z-10 space-y-6 max-w-4xl">
        {/* Badge com foco duplo */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-sm font-medium mb-4">
          Data Analytics • Software Development • BI
        </span>

        {/* Título unindo as duas áreas */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
          Unindo tecnologia e dados para <br />
          <span className="text-brand-accent font-extrabold">gerar resultados.</span>
        </h1>

        {/* Resumo estratégico baseado no seu LinkedIn/GitHub */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Sou <span className="text-white font-medium">Guilherme Patrick</span>. 
          Desenvolvedor Full Stack e Analista de Dados. 
          Especializado em criar aplicações modernas e transformar dados brutos em 
          <span className="text-brand-accent"> insights estratégicos</span> para decisões de negócio.
        </p>

        {/* CTAs focados no seu objetivo */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-accent/20"
          >
            Explorar Projetos
          </a>
          <a 
            href="https://github.com/guilhermepatrick" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};