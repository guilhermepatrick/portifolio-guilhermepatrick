/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0f172a",    // Fundo escuro profissional
          card: "#1e293b",    // Cor dos cards de projeto
          accent: "#22d3ee",  // Ciano para links e destaques
          text: "#f8fafc",    // Branco para leitura
        }
      }
    },
  },
  plugins: [],
}