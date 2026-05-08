import { useMemo, useState } from "react";

export default function Exercicio16() {
  const [numero, setNumero] = useState(0);
  const [contador, setContador] = useState(0);

  // useMemo memoriza o resultado do cálculo
  const numeroDobrado = useMemo(() => {
    console.log("Calculando...");
    return numero * 2;
  }, [numero]);

  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded">
      <h1 className="text-2xl font-bold">Exercício 16</h1>

      <p className="text-gray-600 p-3">
        Crie uma página com um exemplo simples do hook useMemo.
      </p>

      <div className="space-y-4">
        
        <div>
          <p className="font-semibold">
            Número: {numero}
          </p>

          <p className="font-semibold">
            Dobro do número: {numeroDobrado}
          </p>

          <button
            onClick={() => setNumero(numero + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Aumentar Número
          </button>
        </div>

        <div>
          <p className="font-semibold">
            Contador: {contador}
          </p>

          <button
            onClick={() => setContador(contador + 1)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Aumentar Contador
          </button>
        </div>
      </div>
    </div>
  );
}