import handleEnviar from "../validators/TratamentoLoginSenha";
export default function Ex3() {

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Exercício 3</h1>
         <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
        Construa uma página simples que implemente uma função de tratamento de eventos.
      </p>
      <input
        id="nome"
        label="Nome"
        type="text"
        placeholder="Nome"
        className="border border-black-300 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        id="senha"
        label="Senha"
        type="password"
        placeholder="Senha"
        className="border border-black-300 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleEnviar}
      >
        Enviar
      </button>
    </div>
  );
}
