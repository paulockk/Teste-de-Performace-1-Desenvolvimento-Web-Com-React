import { useState } from "react";
import { faker } from "@faker-js/faker";

export default function Ex7() {
  const [produtos] = useState(
    Array.from({ length: 100 }, () => faker.commerce.productName()),
  );

  const [busca, setBusca] = useState("");

  const filteredProdutos = produtos.filter((produto) =>
    produto.toLowerCase().startsWith(busca.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-yellow-200 flex justify-center items-center p-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-4xl flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Exercício 7
        </h1>
        <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
          Crie uma página com dropdown com uma lista com os países do mundo. Use
          o serviço https://restcountries.com/
        </p>
        <input
          type="text"
          placeholder="Digite o nome do produto..."
          className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <div className="max-h-96 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
          {filteredProdutos.length > 0 ? (
            filteredProdutos.map((produto, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-200 rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                <p className="font-semibold text-gray-800">{produto}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-red-500 font-semibold">
              Nenhum produto encontrado.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
