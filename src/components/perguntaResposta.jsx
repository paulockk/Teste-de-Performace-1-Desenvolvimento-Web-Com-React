import { useState } from "react";

export default function PerguntaResposta(props) {
  const [mostrar, setMostrar] = useState(false);

  function toggleResposta() {
    setMostrar(!mostrar);
  }

  return (
    <div className="p-6 border-2 border-gray-300 rounded-xl shadow-md bg-white space-y-4">


      <div className="space-y-1">
        <h3 className="text-lg font-bold text-gray-800">
          Pergunta
        </h3>
        <p className="text-gray-600">
          {props.pergunta}
        </p>
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-bold text-gray-800">
          Resposta
        </h3>

        {mostrar && (
          <p className="text-gray-700 bg-gray-100 p-3 rounded-md">
            {props.resposta}
          </p>
        )}
      </div>


      <button
        onClick={toggleResposta}
        className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition"
      >
        {mostrar ? "Ocultar" : "Exibir"}
      </button>

    </div>
  );
}