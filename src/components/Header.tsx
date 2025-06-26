"use client"; // Necessário para usar hooks como useState e para eventos do usuário

import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header //Animar o Header
      className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-emerald-400">Amazônia em Foco</h1>
        <ul className="flex space-x-6">
          <li><a href="#inicio" className="hover:text-emerald-400 transition-colors">Início</a></li>
          <li><a href="#dados" className="hover:text-emerald-400 transition-colors">Dados</a></li>
          <li><a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre</a></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;