import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-background': '#111827', // Um azul/cinza muito escuro
        'brand-surface': '#1F2937',   // Um cinza escuro para superfícies como cards
        'brand-primary': '#34D399',  // O nosso verde principal (esmeralda)
        'brand-secondary': '#FBBF24',// Um amarelo/âmbar para destaque (call to action)
        'brand-text': '#E5E7EB',      // Cor de texto principal (cinza claro)
        'brand-text-muted': '#9CA3AF', // Cor de texto secundário (cinza mais escuro)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Garanti que a fonte Inter é a padrão
      },
    },
  },
  plugins: [],
};

export default config;