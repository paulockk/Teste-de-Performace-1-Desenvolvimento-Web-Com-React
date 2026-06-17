import FormularioContato from "../components/FormularioContato";
import TratamentoFormulario from "../validators/TratamentoNomeEmailSenha";

export default function Ex10() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-orange-400 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Exercício 10</h1>
      <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
        Crie uma página com o formulário da questão anterior e implemente as
        validações abaixo: Campos nome e email obrigatórios. Campo telefone
        quando informado, deverá ser numérico.
      </p>
      <FormularioContato onSubmit={TratamentoFormulario} />
    </div>
  );
}
