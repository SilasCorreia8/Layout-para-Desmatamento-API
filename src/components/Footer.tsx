const Footer = () => {
  return (
    <footer id="sobre" className="w-full border-t border-gray-800 py-12 mt-16">
      <div className="container mx-auto px-6 text-center text-brand-text-muted">
        <h2 className="text-2xl font-bold text-brand-text mb-4">Sobre o Projeto</h2>
        <p className="max-w-3xl mx-auto">
          Esta landing page foi desenvolvida como um mini projeto prático
          utilizando Next.js, TypeScript e TailwindCSS para o 5° módulo da PdA, Programadore do Amanhã.
          Os dados são fictícios e servidos por uma API local para demonstrar a integração front-end e
          back-end.
        </p>
        <p className="mt-6 text-sm">
          Desenvolvido por um desenvolvedor em formação.
        </p>
      </div>
    </footer>
  );
};

export default Footer;