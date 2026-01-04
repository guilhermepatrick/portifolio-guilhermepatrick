export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-brand-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Esquerda: Texto Biográfico */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Transformando Paixão em <span className="text-brand-accent">Resultados</span>
            </h2>
            
            <p className="text-slate-300 leading-relaxed">
              Minha jornada é marcada pela união entre o desenvolvimento de software e a análise estratégica. Formado em <span className="text-white font-medium">Desenvolvimento Web pela Trybe</span> e cursando <span className="text-white font-medium">ADS na PUC Minas</span>, desenvolvi um olhar crítico para soluções que unem performance técnica e inteligência de negócio.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Tenho forte experiência com <span className="text-brand-accent">liderança de equipes</span> e comunicação estratégica, o que me permite traduzir dados brutos em insights que qualquer área da empresa consegue entender e agir sobre.
            </p>

            {/* Badges de Formação */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="bg-brand-dark px-4 py-2 rounded-lg border border-white/5 text-sm">
                🎓 ADS @ PUC Minas
              </div>
              <div className="bg-brand-dark px-4 py-2 rounded-lg border border-white/5 text-sm">
                🚀 Dev Web @ Trybe
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Os 3 Pilares */}
          <div className="grid gap-4">
            <div className="p-6 bg-brand-dark/50 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-colors group">
              <h3 className="text-brand-accent font-bold mb-2 flex items-center gap-2">
                📊 Análise de Dados
              </h3>
              <p className="text-sm text-slate-400">Power BI, Python (Pandas), SQL Server e Excel Avançado para extração de valor estratégico.</p>
            </div>

            <div className="p-6 bg-brand-dark/50 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-colors group">
              <h3 className="text-brand-accent font-bold mb-2 flex items-center gap-2">
                💻 Desenvolvimento Web
              </h3>
              <p className="text-sm text-slate-400">Criação de aplicações responsivas com React, Next.js e TypeScript, focando em UX/UI.</p>
            </div>

            <div className="p-6 bg-brand-dark/50 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-colors group">
              <h3 className="text-brand-accent font-bold mb-2 flex items-center gap-2">
                📢 Liderança e Estratégia
              </h3>
              <p className="text-sm text-slate-400">Gestão de times, comunicação assertiva e foco total na resolução de problemas complexos.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};