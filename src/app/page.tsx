import Header from '@/components/Header';
import StateCard from '@/components/StateCard';
import Footer from '@/components/Footer';
import { DeforestationData } from '@/types/DeforestationData';

// Função para buscar os dados da API local. Next.js vai executar isso no servidor.
async function getDeforestationData(): Promise<DeforestationData[]> {
  try {
    // Usa a URL da API
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      throw new Error("A variável de ambiente NEXT_PUBLIC_API_URL não está definida.");
    }
    
    const res = await fetch(apiUrl, {
      // O Next.js buscar novos dados a cada 1 hora.
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error('Falha ao buscar dados da API:', res.status, res.statusText);
      return [];
    }

    const jsonData = await res.json();
    return Array.isArray(jsonData) ? jsonData : jsonData.desmatamento || []; // Retorna o array de dados
  } catch (error) {
    console.error('Erro na API:', error);
    return []; // Retorna um array vazio em caso de erro
  }
}

export default async function Home() {
  // Chama a função e espera pelos dados e os guarda os dados retornados
  const allData = await getDeforestationData();

  return (
    <>
      <Header />
      <main className="container mx-auto px-6">
        {/* Seção Inicial */}
        <section
          id="inicio"
          className="relative -mt-16 flex h-screen flex-col items-center justify-center text-center"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(52,211,153,0.2),rgba(255,255,255,0))]"></div>
          <h1 className="text-5xl leading-tight font-extrabold tracking-tighter md:text-7xl">
            O Futuro da Floresta <br /> em Nossas Mãos
          </h1>
          <p className="text-brand-text-muted mx-auto mt-6 max-w-2xl text-lg">
            Uma análise interativa sobre os dados de desmatamento reportados nos
            últimos anos nos biomas brasileiros.
          </p>
          <a
            href="#dados"
            className="bg-brand-secondary text-brand-background shadow-brand-secondary/20 mt-10 inline-block transform rounded-lg px-8 py-3 font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-400">
            Explorar Dados
          </a>
        </section>

        {/* Seção de Dados */}
        <section id="dados" className="py-24">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Desmatamento por Bioma
          </h2>
          <p className="text-brand-text-muted mx-auto mb-12 max-w-2xl text-center">
            Os dados representam a área desmatada em quilómetros quadrados (km²)
            para diferentes anos e regiões.
          </p>

          {allData.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {allData.map((data, index) => (
                <StateCard key={`${data.regiao}-${index}`} data={data} />
              ))}
            </div>
          ) : (
            <p className="text-center text-red-500">
              Não foi possível carregar os dados. Verifique se a API está a
              rodar.
            </p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
