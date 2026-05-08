import BotaoPlacar from "../components/BotaoPlacar";
export default function Exercicio4() {
    return (
        <div className="p-6 m-10 border-2 border-gray-300 rounded ">
            <h1 className="text-2xl font-bold">Exercício 4</h1>
            <p className=" text-gray-600 p-3">Crie uma página que represente um placar de um jogo com 2 botões: um para cada time. O objetivo desses botões é atualizar o placar com os gols que cada time fez. Os botões devem ser criados como um componente que gerencie o seu próprio estado e receba o nome do time por propriedade.</p>
            <BotaoPlacar time1="Palemiras" time2="Corinthians" />
        </div>
    )
}