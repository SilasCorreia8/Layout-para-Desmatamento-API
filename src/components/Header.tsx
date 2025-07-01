'use client'; // Necessário para usar hooks como useState e para eventos do usuário

import { useState, useEffect, useRef } from 'react';
import CloseIcon from './icons/CloseIcon';
import MenuIcon from './icons/MenuIcon';

const Header = () => {
  // Estado para controlar o menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Efeito para controlar a rolagem da página e compensar a largura da barra de rolagem
  useEffect(() => {
    
    const headerElement = headerRef.current;

    if (isMenuOpen) {
      // Calcula a largura da barra de rolagem
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Aplica padding-right no body para evitar o "salto" na largura
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      if (headerElement) {
        headerElement.style.paddingRight = `${scrollbarWidth}px`;
      }

      // Adiciona a classe que desativa a rolagem
      document.body.classList.add('menu-open');
    } else {
      // Remove o padding e a classe quando o menu é fechado
      document.body.style.paddingRight = '';
      if (headerElement) {
        headerElement.style.paddingRight = '';
      }
      document.body.classList.remove('menu-open');
    }

    // Função de limpeza
    return () => {
      document.body.style.paddingRight = '';
      if (headerElement) {
        headerElement.style.paddingRight = '';
      }
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header ref={headerRef} className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-brand-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-brand-primary relative z-50 text-xl font-bold">
          Amazônia em Foco
        </h1>

        {/* Botão do Menu Hambúrguer (só aparece em telas pequenas) */}
        {/* A classe `md:hidden` faz este botão ser visível apenas em telas MENORES que 768px. */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)} //Alternar estado do Menu
          className="text-brand-text-muted hover:bg-brand-surface relative z-50 rounded-md p-2 transition-colors md:hidden"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <CloseIcon className="h-6 w-6" /> // Ícone de "Fechar"
          ) : (
            <MenuIcon className="h-6 w-6" /> // Ícone de "Hambúrguer"
          )}
        </button>

        {/* Navegação Desktop */}
        {/* A classe `hidden` esconde por padrão, e `md:flex` exibe em telas a partir de 768px. */}
        <ul className="hidden space-x-8 md:flex">
          <li>
            <a
              href="#inicio"
              className="text-brand-text-muted transition-colors hover:text-emerald-400"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#dados"
              className="text-brand-text-muted transition-colors hover:text-emerald-400"
            >
              Dados
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              className="text-brand-text-muted transition-colors hover:text-emerald-400"
            >
              Sobre
            </a>
          </li>
        </ul>

        {/* Menu Mobile (Overlay) */}
        {/* Este menu só será exibido se `isMenuOpen` for true. */}
        {isMenuOpen && (
          // Centralizando os itens com flexbox e adicionando um fundo mais sólido
          <div className="bg-brand-background/95 absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center backdrop-blur-lg md:hidden">
            <ul className="flex flex-col items-center space-y-6">
              <li>
                <a
                  href="#inicio"
                  onClick={handleLinkClick}
                  className="text-brand-text-muted block px-8 py-3 text-2xl font-semibold transition-colors hover:text-emerald-400"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#dados"
                  onClick={handleLinkClick}
                  className="text-brand-text-muted block px-8 py-3 text-2xl font-semibold transition-colors hover:text-emerald-400"
                >
                  Dados
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={handleLinkClick}
                  className="text-brand-text-muted block px-8 py-3 text-2xl font-semibold transition-colors hover:text-emerald-400"
                >
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
