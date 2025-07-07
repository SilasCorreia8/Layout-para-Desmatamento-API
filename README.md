# Amazônia em Foco: Landing Page de Dados sobre Desmatamento

![image alt](https://github.com/SilasCorreia8/Layout-para-Desmatamento-API/blob/main/Landing%20Page.png?raw=true)

## 📖 Sobre o Projeto

Esta é uma landing page moderna e interativa, desenvolvida como parte do Módulo 5 do curso [Programadores do Amanhã](https://programadoresdoamanha.org.br/pt). O objetivo é demonstrar habilidades de desenvolvimento front-end consumindo uma API local para exibir dados sobre o desmatamento em biomas brasileiros.

A aplicação foi construída do zero, com foco em boas práticas, código limpo, componentização e uma experiência de utilizador agradável e responsiva.

---

## ✨ Funcionalidades

- **Visualização de Dados:** Exibe estatísticas de desmatamento de forma clara e organizada em cartões interativos.
- **Design Moderno e Responsivo:** Interface agradável que se adapta a diferentes tamanhos de ecrã, desde telemóveis a desktops.
- **Animações e Micro-interações:** Efeitos subtis de hover e animações de entrada que tornam a experiência mais dinâmica e envolvente, utilizando Framer Motion.
- **Navegação Suave:** Scroll suave entre as secções da página para uma navegação fluida.
- **API Local:** A aplicação consome dados de uma API Node.js/Express que corre localmente.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias de ponta do ecossistema front-end:

- **[React](https://react.dev/)**: Biblioteca para construir interfaces de utilizador.
- **[Next.js](https://nextjs.org/)**: Framework React para produção, com renderização no servidor e otimizações.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de estilização CSS "utility-first" para designs rápidos e customizados.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca de animação para React.
- **[Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)**: Para a criação da API local que serve os dados.

---

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, você precisará de ter dois terminais abertos: um para o **back-end (API)** e outro para o **front-end (Next.js)**.

### Pré-requisitos

- **[Node.js](https://nodejs.org/)** (versão 18 ou superior)
- **npm** (geralmente instalado com o Node.js)

### 1. Back-end (API)

Primeiro, vamos iniciar o servidor que irá fornecer os dados. [Repositório da API](https://github.com/SilasCorreia8/Layout-para-Desmatamento-API.git)

```bash
# 1. Clone o repositório (se ainda não o fez)
git clone https://github.com/SilasCorreia8/Desmatamento-API.git

# 2. Navegue até à pasta da API
# (Ajuste o caminho conforme a sua estrutura de pastas)
cd MiniProjeto

# 3. Instale as dependências da API
npm install

# 4. Inicie o servidor da API
# Por padrão, ele irá correr em http://localhost:3000
node src/app.js
```

### 2. Front-end (Aplicação Next.js)

```bash
# 1. Navegue até à pasta do front-end
# (Ajuste o caminho conforme a sua estrutura de pastas)
cd landing-page-desmatamento

# 2. Instale as dependências do front-end
npm install

# 3. Inicie o servidor de desenvolvimento
# A flag -p 3001 garante que ele não entre em conflito com a API que está rodando na porta 3000
npm run dev -- -p 3001
```
