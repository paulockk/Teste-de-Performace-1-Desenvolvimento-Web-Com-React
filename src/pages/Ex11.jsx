import { useEffect } from "react";

export default function Exercicio11() {

  useEffect(() => {
    alert("Página renderizada com sucesso!");
  }, []);

  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded">
      <h1 className="text-2xl font-bold">Exercício 11</h1>

      <p className="text-gray-600 mt-4">
    Crie uma página, copiando o código do exercício 10, que mostre uma mensagem alert somente uma vez após a sua renderização. Veja qual é a melhor sintaxe do useEffect para isso.
      </p>
    </div>
  );
}