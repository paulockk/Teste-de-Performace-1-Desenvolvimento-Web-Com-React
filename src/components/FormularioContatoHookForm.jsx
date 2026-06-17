import { useForm } from "react-hook-form";

export default function FormularioContatoHook({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  function enviar(dados) {
    if (onSubmit) {
      onSubmit(dados);
    } else {
      alert(JSON.stringify(dados, null, 2));
    }
  }

  return (
    <form
      onSubmit={handleSubmit(enviar)}
      className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="Nome"
        {...register("nome")}
        className="border rounded px-4 py-2"
      />

      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        className="border rounded px-4 py-2"
      />

      <input
        type="text"
        placeholder="Telefone"
        {...register("telefone")}
        className="border rounded px-4 py-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded"
      >
        Enviar
      </button>
    </form>
  );
}