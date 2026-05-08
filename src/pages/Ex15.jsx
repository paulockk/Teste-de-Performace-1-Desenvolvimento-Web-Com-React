import PerguntaResposta from "../components/PerguntaResposta";

export default function Exercicio15() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded">
      <h1 className="text-2xl font-bold">Exercício 15</h1>

      <p className="text-gray-600 p-3">
     Crie uma página com o componente criado no exercício 5 com a pergunta: "Qual é a função do useMemo?". Pesquise no material da disciplina e mostre a resposta. Procure resumir.
      </p>

      <PerguntaResposta
        pergunta="Qual é a função do useMemo?"
        resposta={`
        A função do useMemo no React é otimizar o desempenho de componentes funcionais ao memorizar valores calculados.
Segundo a documentação do React e materiais técnicos da O'Reilly Media, o useMemo é usado para evitar cálculos desnecessários em cada renderização, especialmente quando o valor depende de props ou estado que não mudam frequentemente.
Exemplo de uso:
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
        `}
            
      />
    </div>
  );
}
