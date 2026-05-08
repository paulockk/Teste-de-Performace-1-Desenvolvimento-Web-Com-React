import PerguntaResposta from "../components/PerguntaResposta";
export default function Exercicio6() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded ">
      <h1 className="text-2xl font-bold">Exercício 6</h1>
      <p className="text-gray-600 p-3">
        Crie uma página com o componente criado no exercício 5 com a pergunta:
        "Qual é a diferença de passar o "handleClick" e chamar o
        "handleClick"?". Pesquise no material da disciplina e mostre a resposta.
        Procure resumir.
      </p>
      <PerguntaResposta
        pergunta="Qual é a diferença de passar o handleClick e chamar o handleClick?"
        resposta="Quando passamos a função como referencia  ela só é executada quando o evento é acionado. já quando a chamamos diretamente, ela é executada imediatamente. "
      />
    </div>
  );
}
