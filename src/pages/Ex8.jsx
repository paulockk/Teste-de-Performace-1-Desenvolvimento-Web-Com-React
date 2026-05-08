export default function ExercicioSyntheticEvent() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded space-y-4">

      <h1 className="text-2xl font-bold">
        Exercício 8
      </h1>

      <p className="text-gray-600">
       Crie uma página com um botão que exiba na console as propriedades do objeto "SyntheticEvent". Use uma função de seta inline como manipulador de eventos.
      </p>

      <button
        onClick={(event) => {
          console.log("SyntheticEvent completo:", event);
          console.log("Tipo do evento:", event.type);
          console.log("Elemento alvo:", event.target);
        }}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Clique e veja no console
      </button>

    </div>
  );
}