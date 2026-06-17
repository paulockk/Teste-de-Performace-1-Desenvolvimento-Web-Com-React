import { useState } from "react";

export default function PerguntaResposta({ pergunta, resposta }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-200">
      <div className="text-xl font-bold text-gray-800 mb-4">{pergunta}</div>

      {mostrar && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-gray-700 mb-4 whitespace-pre-line">
          {resposta}
        </div>
      )}

      <button
        onClick={() => setMostrar(!mostrar)}
        className="bg-blue-600 hover:bg-blue-700 duration-300 text-white px-5 py-2 rounded-lg font-semibold w-full"
      >
        {mostrar ? "Ocultar Resposta" : "Mostrar Resposta"}
      </button>
    </div>
  );
}
