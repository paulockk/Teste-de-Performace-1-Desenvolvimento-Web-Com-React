export default function Botao(){

    function handleEvento(){
        alert("Evento disparado!")
    }
    return (
        <button onClick={handleEvento} className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl">Botão</button>
    )
}       