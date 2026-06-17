import FormularioContatoHook from "../components/FormularioContatoHookForm";

export default function Ex11() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-white mb-8 drop-shadow-lg">
        Exercício 11
      </h1>
      <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
        Crie uma página com o formulário da questão 9 usando o react-hook-form.
      </p>
      <FormularioContatoHook />
    </div>
  );
}
