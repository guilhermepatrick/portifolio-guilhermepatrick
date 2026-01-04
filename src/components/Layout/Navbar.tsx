export const Navbar = () => {
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo ou Nome */}
        <span className="text-brand-accent font-bold text-xl tracking-tighter">
          GP<span className="text-white">.DATA</span>
        </span>

        {/* Links */}
        <ul className="flex gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-brand-accent transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};