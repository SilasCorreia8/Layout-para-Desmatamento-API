import Header from "@/components/Header";
import StateCard from "@/components/StateCard";
import Footer from "@/components/Footer";
import { DeforestationData } from "@/types/DeforestationData";

// Função para buscar os dados da API local. Next.js vai executar isso no servidor.
async function getDeforestationData(): Promise<DeforestationData[]> {
  try {
    // Usa a URL da API que está rodando na porta 3000
    const res = await fetch("http://localhost:3000/desmatamento", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Falha ao buscar dados da API");
    }

    const jsonData = await res.json();
    return jsonData; // Retorna o array de dados
  } catch (error) {
    console.error("Erro na API:", error);
    return []; // Retorna um array vazio em caso de erro
  }
}

export default async function Home() {
  // Chama a função e espera pelos dados e os guarda os dados retornados
  const allData = await getDeforestationData();

  return (
    <>
      <Header />
      <main className="container mx-auto px-6 pt-24">
        {/* Seção Inicial */}
        <section
          id="inicio"
          className="text-center h-screen flex flex-col justify-center items-center"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            A Situação da <span className="text-emerald-400">Amazônia</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Uma análise interativa sobre os dados de desmatamento reportados no
            último ano.
          </p>
        </section>

        {/* Seção de Dados */}
        <section id="dados">
          <h2 className="text-4xl font-bold text-center mb-12">
            Desmatamento por Estado em 2023
          </h2>

          {allData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allData.map((data, index) => (
                <StateCard
                  key={`${data.regiao}-${index}`}
                  data={data}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-red-500">
              Não foi possível carregar os dados. Verifique se a API está
              rodando.
            </p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
