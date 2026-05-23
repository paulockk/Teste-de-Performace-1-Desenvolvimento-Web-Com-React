import GerenciadorEstado from "../components/GerenciadorEstado";
export default function Exercicio1() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded ">
        <h1 className="text-2xl font-bold">Exercício 1</h1>
        <p className=" text-gray-600 p-3">Crie uma página com um componente que gerencie o estado de um usuário com dados fixos que você vai definir (nome, idade) e um botão para incrementar a idade e outro para decrementar.
Use useState para atualizar as propriedades do objeto quando os dados forem alterados.</p>
     <GerenciadorEstado />
    </div>
  );
}