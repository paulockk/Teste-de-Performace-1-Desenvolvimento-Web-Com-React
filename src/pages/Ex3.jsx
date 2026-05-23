import GerenciadorUsereducerInput from "../components/GerenciadorUsereducerInput";

export default function Exercicio3() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded ">
      <h1 className="text-2xl font-bold">Exercício 3</h1>
      <p className=" text-gray-600 p-3">
        Crie uma página com um componente igual ao do exercício anterior, mas
        que tenha 2 inputs: Um para o nome e outro para a idade, com um botão
        INSERIR, permitindo criar uma lista de usuários. Ao lado de cada usuário
        deverá permanecer os botões de incremento e decremento da idade.
      </p>
      <GerenciadorUsereducerInput/>
    </div>
  );
}
