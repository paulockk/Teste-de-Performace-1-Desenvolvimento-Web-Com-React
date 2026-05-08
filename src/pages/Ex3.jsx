import { useState } from "react";

export default function Botao2() {
  const [contador, setContador] = useState(0);

  function handleClick() {
    setContador(contador + 1);
  }

  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded ">
      <h1 className="text-2xl font-bold">Exercício 3</h1>
      <p className="text-gray-600 p-3">
        Crie uma página com um botão que exiba um contador de cliques que esteja associado a um estado.
      </p>

      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-xl"
      >
        Clique aqui
      </button>

      <p className="mt-4">Cliques: {contador}</p>
    </div>
  );
}