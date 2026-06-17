import { useState } from "react";

export default function FormularioContato({
  onSubmit,
  nomeInicial = "",
  emailInicial = "",
  telefoneInicial = "",
}) {
  const [nome, setNome] = useState(nomeInicial);
  const [email, setEmail] = useState(emailInicial);
  const [telefone, setTelefone] = useState(telefoneInicial);

  function enviar(e) {
    if (onSubmit) {
      onSubmit(e, { nome, email, telefone });
    } else {
      e.preventDefault();

      alert(
        JSON.stringify(
          {
            nome,
            email,
            telefone,
          },
          null,
          2
        )
      );
    }
  }

  return (
    <form onSubmit={enviar} className="flex flex-col gap-4 w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-gray-300">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
         className="border rounded px-4 py-2"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded px-4 py-2"
      />

      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        className="border rounded px-4 py-2"
      />

      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
        Enviar
      </button>
    </form>
  );
}