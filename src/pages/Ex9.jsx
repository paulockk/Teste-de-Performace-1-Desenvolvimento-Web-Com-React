import PerguntaResposta from "../components/PerguntaResposta";

export default function Exercicio9() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded">
      <h1 className="text-2xl font-bold">Exercício 9</h1>

      <p className="text-gray-600 p-3">
        Crie uma página com o componente criado no exercício 5 com a pergunta:
        "Quais são as desvantagens de se colocar funções de seta inline para o
        tratamento de eventos?". Pesquise no material da disciplina e mostre a
        resposta. Procure resumir.
      </p>

      <PerguntaResposta
        pergunta="Quais são as desvantagens de se colocar funções de seta inline para o tratamento de eventos?"
        resposta={
          <>
            1- Funções inline não podem ser reutilizadas facilmente. Se você precisar usar a mesma lógica em outro lugar, pode acabar duplicando código.
            <br /><br />

            2- Quando a lógica cresce, o JSX fica menos legível.
            <br /><br />

            3- Sempre que o componente renderiza, uma nova função é criada, o que pode afetar a performance em componentes que renderizam frequentemente ou listas grandes.
            <br /><br />

            4- Pode causar re-renderizações desnecessárias em componentes filhos que recebem essa função como prop.
            <br /><br />

            5- Dificulta a depuração, já que funções inline não têm nome definido, dificultando o debug.
            <br /><br />

            6- Pode gerar comportamentos inesperados por causa de escopo e valores que mudam a cada renderização.
          </>
        }
      />
    </div>
  );
}