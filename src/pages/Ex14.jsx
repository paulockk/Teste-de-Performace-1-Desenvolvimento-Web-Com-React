import PerguntaResposta from "../components/PerguntaResposta";

export default function Exercicio14() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded">
      <h1 className="text-2xl font-bold">Exercício 14</h1>

      <p className="text-gray-600 p-3">
        Crie uma página com o componente criado no exercício 5 com a pergunta:
        "Qual é a função do useEffect?". Pesquise no material da disciplina e
        mostre a resposta. Procure resumir.
      </p>

      <PerguntaResposta
        pergunta="Qual é a função do useEffect?"
        resposta={`
        A função do useEffect no React é executar efeitos colaterais (side effects) em componentes funcionais.
Segundo a documentação do React e materiais técnicos da O'Reilly Media, o useEffect é usado para sincronizar o componente com sistemas externos, como:chamadas de API, timers (setInterval), eventos do navegador,manipulação do DOM, conexões externas, atualizações após renderização
            `}
      />
    </div>
  );
}
