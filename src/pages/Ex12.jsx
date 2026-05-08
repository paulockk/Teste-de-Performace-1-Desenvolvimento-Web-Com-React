import PerguntaResposta from "../components/PerguntaResposta";

export default function Exercicio12() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded">
      <h1 className="text-2xl font-bold">Exercício 12</h1>

      <p className="text-gray-600 p-3">
        Crie uma página com o componente criado no exercício 5 com a pergunta:
        "O que são hooks? Cite exemplos de uso". Pesquise no material da
        disciplina e mostre a resposta. Procure resumir.
      </p>

      <PerguntaResposta
        pergunta="O que são hooks? Cite exemplos de uso."
        resposta={`
            Hooks são funções especiais do React que permitem adicionar funcionalidades aos componentes funcionais.
            Imagine um componente React como um robô.
Sem Hooks: o robô apenas mostra coisas na tela.
Com Hooks: o robô ganha memória, consegue reagir a eventos, executar ações automáticas, compartilhar lógica, controlar referências.
TIPOS DE HOOKS:
useState  → memória
useEffect → ações automáticas
useRef    → referência
useContext→ dados globais

useState é como um caderno onde o robô anota informações que podem mudar, como o nome do usuário ou a contagem de cliques.
useEffect é como um despertador que dispara ações automáticas, como buscar dados quando o componente aparece ou atualizar o título da página.
useRef é como um marcador que aponta para algo específico na tela, permitindo que o robô interaja diretamente com elementos HTML.
useContext é como um quadro de avisos onde o robô pode compartilhar informações com outros robôs sem precisar passar mensagens manualmente.

            `}
      />
    </div>
  );
}
