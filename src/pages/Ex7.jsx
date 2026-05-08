import PerguntaResposta from "../components/PerguntaResposta";

export default function Exercicio7() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded">
      <h1 className="text-2xl font-bold">Exercício 7</h1>

      <p className="text-gray-600 p-3">
        Crie uma página com o componente criado no exercício 5 com a pergunta:
        "O que é um SyntheticEvent?". Pesquise no material da disciplina e
        mostre a resposta. Procure resumir.
      </p>

      <PerguntaResposta
        pergunta="O que é um SyntheticEvent?"
        resposta={`Faz parte do Sistema de Eventos do React.
O principal objetivo é garantir que eventos como cliques, digitação e mudanças de formulário funcionem da mesma forma em todos os navegadores.
No React, o SyntheticEvent funciona como uma camada de compatibilidade entre navegadores, padronizando os eventos.
Isso evita bugs e diferenças de comportamento entre Chrome, Firefox e outros navegadores.
Além disso, melhora a performance e facilita o controle dos eventos dentro da aplicação.`}
      />
    </div>
  );
}
