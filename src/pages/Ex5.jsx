import ToDoList from "../components/ToDoList";
export default function Exercicio4() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded ">
      <h1 className="text-2xl font-bold">Exercício 5</h1>
      <p className=" text-gray-600 p-3">
        Crie uma página com um componente TO DO LIST que utilize useState para
        gerenciar o valor de um input, useReducer para gerenciar o estado de uma
        lista com inclusão e exclusão de tarefas.
      </p>
      <ToDoList />
    </div>
  );
}
