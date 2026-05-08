import PerguntaResposta from "../components/PerguntaResposta";
export default function Exercicio5() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded ">
      <h1 className="text-2xl font-bold">Exercício 5</h1>
      <p className="text-gray-600 p-3">
        Crie uma página com um componente que receba 2 propriedades: pergunta e
        resposta. A pergunta está em uma DIV visível e a resposta está em uma
        DIV oculta. O componente deve exibir um botão que faz aparecer / ocultar
        a DIV com a resposta. Capriche no design.
      </p>
      <PerguntaResposta pergunta="Qual é a capital do Brasil?" resposta="A capital do Brasil é Brasília." />
    </div>
  );
}
