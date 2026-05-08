import { useRef } from "react";

export default function Botao2() {
  const contadorRef = useRef(0);

  function handleClick() {
    contadorRef.current++;
    alert(contadorRef.current);
  }

  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded ">
      <h1 className="text-2xl font-bold">Exercício 2</h1>
      <p className="text-gray-600 p-3">
        Crie uma página com um botão que mostra uma mensagem quando clicado. Use
        uma função com nome "handleClick" como manipulador de eventos.
      </p>

      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-xl "
      >
        Clique aqui
      </button>
    </div>
  );
}