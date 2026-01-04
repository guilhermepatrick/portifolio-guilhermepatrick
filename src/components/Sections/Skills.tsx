export const Skills = () => {
  const skillCategories = [
    {
      title: "Dados & BI",
      skills: ["Power BI", "SQL Server", "Python (Pandas)", "Excel Avançado", "ETL"]
    },
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"]
    },
    {
      title: "Backend & Outros",
      skills: ["Node.js", "C# / .NET", "APIs REST", "Git", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Minhas <span className="text-brand-accent">Habilidades</span>
          </h2>
          <p className="text-slate-400">Tecnologias e ferramentas que utilizo para resolver problemas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="bg-brand-card/50 p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-brand-dark text-slate-300 text-sm rounded-md border border-white/10 group-hover:border-brand-accent/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};