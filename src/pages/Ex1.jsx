import PerguntaResposta from "../components/PerguntaResposta";

export default function Exercicio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 gap-6">

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Exercício 1
      </h1>
      <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
        Crie uma página com um componente que receba duas propriedades: pergunta e resposta. A pergunta está em uma DIV visível e a resposta está em uma DIV oculta. O componente deve exibir um botão que faz aparecer/ocultar a DIV com a resposta. Capriche no design.
      </p>

      <PerguntaResposta
        pergunta="Qual a Capital de São Paulo?"
        resposta="A capital de São Paulo é São Paulo."
      />

     

    </div>
  );
}