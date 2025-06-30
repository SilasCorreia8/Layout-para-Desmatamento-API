'use client'; // Necessário para usar hooks como useState e para eventos do usuário

import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-brand-background/80 fixed top-0 left-0 z-50 w-full border-b border-gray-800 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-brand-primary text-xl font-bold">
          Amazônia em Foco
        </h1>
        <ul className="hidden space-x-8 md:flex">
          <li>
            <a href="#inicio" className="text-brand-text-muted hover:text-emerald-400 transition-colors">
              Início
            </a>
          </li>
          <li>
            <a href="#dados" className="text-brand-text-muted hover:text-emerald-400 transition-colors">
              Dados
            </a>
          </li>
          <li>
            <a href="#sobre" className="text-brand-text-muted hover:text-emerald-400 transition-colors">
              Sobre
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
