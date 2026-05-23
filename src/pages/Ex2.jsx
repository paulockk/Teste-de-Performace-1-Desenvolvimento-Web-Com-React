import GerenciadorUsereducer from "../components/GerenciadorUsereducer";
export default function Exercicio2() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded ">
        <h1 className="text-2xl font-bold">Exercício 2</h1>
        <p className=" text-gray-600 p-3">Crie uma página com um componente igual ao do exercício anterior.
Use useReducer para atualizar as propriedades do objeto quando os dados forem alterados.</p>
     <GerenciadorUsereducer />
    </div>
  );
}