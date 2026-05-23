import { useState } from "react";

export default function GerenciadorEstado() {
  const [usuario, setUsuario] = useState({
    nome: "Paulo Roberto",
    idade: 20,
  });

  function incrementarIdade() {
    setUsuario({
      ...usuario,
      idade: usuario.idade + 1,
    });
  }

  function decrementarIdade() {
    setUsuario({
      ...usuario,
      idade: usuario.idade - 1,
    });
  }

  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded">
      <h1 className="text-2xl font-bold">Gerenciador de Estado</h1>

      <h2 className="text-xl font-semibold">Dados do Usuário</h2>

      <p>
        <strong className="font-bold">Nome:</strong> {usuario.nome}
      </p>

      <p>
        <strong className="font-bold">Idade:</strong> {usuario.idade}
      </p>

      <button onClick={incrementarIdade} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-xl mx-4">
        Incrementar Idade
      </button>

      <button
        onClick={decrementarIdade}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-xl mx-4"
      >
        Decrementar Idade
      </button>
    </div>
  );
}