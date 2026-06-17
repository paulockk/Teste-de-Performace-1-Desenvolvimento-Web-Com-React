import FormularioContato from "../components/FormularioContato";

export default function Ex9({
  nomeInicial = "",
  emailInicial = "",
  telefoneInicial = "",
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-orange-400 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Exercício 9</h1>
      <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
        Crie uma página com um formulário simples, usando o hook useState, que
        obtenha nome, email e telefone e mostre o JSON com os dados quando o
        formulário for submetido.
      </p>
       <h1 className="text-4xl font-bold text-white mb-6">Exercício 16</h1>
      <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
        Criar uma rota que faça aparecer o formulário da questão 9 preenchido
        com dados.
      </p>
      <FormularioContato
        key={`${nomeInicial}-${emailInicial}-${telefoneInicial}`}
        nomeInicial={nomeInicial}
        emailInicial={emailInicial}
        telefoneInicial={telefoneInicial}
      />
    </div>
  );
}
