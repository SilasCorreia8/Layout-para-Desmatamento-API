'use client'; // Necessário para usar hooks como useState e para eventos do usuário

import { useState } from 'react';
import CloseIcon from './icons/CloseIcon';
import MenuIcon from './icons/MenuIcon';

const Header = () => {
  // Estado para controlar o menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-brand-background/80 fixed top-0 left-0 z-50 w-full border-b border-gray-800 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-brand-primary text-xl font-bold">
          Amazônia em Foco
        </h1>

        {/* Botão do Menu Hambúrguer (só aparece em telas pequenas) */}
        {/* A classe `md:hidden` faz este botão ser visível apenas em telas MENORES que 768px. */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna o estado do menu
          className="md:hidden rounded-md p-2 text-brand-text-muted transition-colors hover:bg-brand-surface"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <CloseIcon className="h-6 w-6" /> // Ícone de "Fechar"
          ) : (
            <MenuIcon className="h-6 w-6" /> // Ícone de "Hambúrguer"
          )}
        </button>

        {/* Navegação para Desktop (só aparece em telas médias ou maiores) */}
        {/* A classe `hidden` esconde por padrão, e `md:flex` exibe em telas a partir de 768px. */}
        <ul className="hidden space-x-8 md:flex">
          <li>
            <a href="#inicio" className="text-brand-text-muted transition-colors hover:text-emerald-400">
              Início
            </a>
          </li>
          <li>
            <a href="#dados" className="text-brand-text-muted transition-colors hover:text-emerald-400">
              Dados
            </a>
          </li>
          <li>
            <a href="#sobre" className="text-brand-text-muted transition-colors hover:text-emerald-400">
              Sobre
            </a>
          </li>
        </ul>

        {/* Menu Mobile (Overlay) */}
        {/* Este menu só será exibido se `isMenuOpen` for true. */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-background shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-8">
              <li>
                <a href="#inicio" onClick={handleLinkClick} className="text-brand-text-muted block px-4 py-2 text-lg transition-colors hover:text-emerald-400">
                  Início
                </a>
              </li>
              <li>
                <a href="#dados" onClick={handleLinkClick} className="text-brand-text-muted block px-4 py-2 text-lg transition-colors hover:text-emerald-400">
                  Dados
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={handleLinkClick} className="text-brand-text-muted block px-4 py-2 text-lg transition-colors hover:text-emerald-400">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;