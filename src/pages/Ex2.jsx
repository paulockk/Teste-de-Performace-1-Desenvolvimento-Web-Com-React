export default function Ex2(){
   
    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Exercício 2
      </h1>
       <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
        Construa uma página simples que implemente um inline event.
      </p>
<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => alert("Botão clicado")}>
  Clique Aqui
</button>
    </div>
    )
}