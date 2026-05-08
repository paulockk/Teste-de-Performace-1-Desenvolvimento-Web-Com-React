import PerguntaResposta from "../components/PerguntaResposta";

export default function Exercicio13() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded">
      <h1 className="text-2xl font-bold">Exercício 13</h1>

      <p className="text-gray-600 p-3">
       Crie uma página com o componente criado no exercício 5 com a pergunta: "Qual é a função do useState?". Pesquise no material da disciplina e mostre a resposta. Procure resumir.
      </p>

      <PerguntaResposta
        pergunta="Qual é a função do useState?"
        resposta={`
          useState é um Hook do React que permite adicionar uma variável de estado ao seu componente.
          const [state, setState] = useState(initialState)
            Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo.
            O useState é usado para armazenar e atualizar dados que podem mudar ao longo do tempo, como o valor de um input, a contagem de cliques ou o status de um componente.
            Quando você chama a função de atualização (setState), o React re-renderiza o componente com o novo valor do estado, permitindo que a interface do usuário seja atualizada de forma dinâmica.


            `}
      />
    </div>
  );
}
