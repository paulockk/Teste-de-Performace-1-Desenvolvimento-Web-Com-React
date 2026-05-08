import Botao from "../components/botao";
export default function Exercicio1() {
  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded ">
        <h1 className="text-2xl font-bold">Exercício 1</h1>
        <p className=" text-gray-600 p-3">Crie uma página com um botão que mostra uma mensagem quando clicado. Use uma função de seta inline como manipulador de eventos (ex. onClick={() => console.log("teste")}).</p>
        <Botao  />
    </div>
  );
}