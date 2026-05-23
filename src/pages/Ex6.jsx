import ToDoListRiscado from "../components/ToDoListRiscado";
export default function Exercicio6() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded ">
      <h1 className="text-2xl font-bold">Exercício 6</h1>

      <p className=" text-gray-600 p-3">
        Crie uma página com o componente do exercício anterior com um botão
        adicional que risque a tarefa cumprida. Use estilos condicionais.
      </p>
      <ToDoListRiscado />
    </div>
  );
}
