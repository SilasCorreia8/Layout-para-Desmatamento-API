const Footer = () => {
  return (
    <footer
      id="sobre"
      className="w-full bg-gray-800 border-t border-gray-700 py-8 mt-24"
    >
      <div className="container mx-auto px-6 text-center text-gray-400">
        <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
        <p className="max-w-3xl mx-auto">
          Esta landing page foi desenvolvida como um exercício prático
          utilizando Next.js, TypeScript e TailwindCSS. Os dados são fictícios e
          servidos por uma API local para demonstrar a integração front-end e
          back-end.
        </p>
        <p className="mt-6 text-sm">
          Desenvolvido com 💚 por um desenvolvedor em formação.
        </p>
      </div>
    </footer>
  );
};

export default Footer;