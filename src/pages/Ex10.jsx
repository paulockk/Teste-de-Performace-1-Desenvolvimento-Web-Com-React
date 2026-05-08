import { useEffect } from "react"

export default function Exercicio10() {
    useEffect(() => {
        alert("Componente renderizado!")
    }, [])
    return (
        <div className="p-6 m-10 border-2 border-gray-300 rounded ">
            <h1 className="text-2xl font-bold">Exercício 10</h1>
            <p className=" text-gray-600 p-3">Crie uma página que mostre uma mensagem alert toda vez após a sua renderização. Veja qual é a melhor sintaxe do useEffect para isso.</p>
           <h3 className="text-red-500">Por favor renderize a pagina para o alert ser exibido</h3>
        </div>
    )
}