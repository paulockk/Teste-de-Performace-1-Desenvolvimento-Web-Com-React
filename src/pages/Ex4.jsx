import PerguntaResposta from "../components/PerguntaResposta";

export default function Ex4() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Exercício 4</h1>
      <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
        Crie uma página com o componente criado no exercício 1 com a pergunta:
        "Quais são as desvantagens de implementar um inline event?". Pesquise no
        material da disciplina e mostre a resposta. Procure resumir.
      </p>
      <PerguntaResposta
        pergunta="Quais são as desvantagens de implementar um inline event?"
        resposta={`Utilizar eventos inline em React pode causar algumas desvantagens se não forem utilizados da maneira correta. As principais são:

1. Criação de uma nova função a cada renderização, o que pode impactar o desempenho da aplicação em componentes maiores.

2. Dificuldade de manutenção, pois a lógica do evento fica misturada com o JSX, tornando o código menos organizado e mais difícil de ler.

3. Menor reutilização do código, já que a função é criada diretamente no evento e não pode ser facilmente compartilhada com outros componentes.

4. Possibilidade de re-renderizações desnecessárias em componentes filhos quando funções inline são passadas como propriedades.

5. Código menos limpo, dificultando a separação entre a estrutura da interface e a lógica da aplicação, o que vai contra uma das boas práticas do React.`}
      />
    </div>
  );
}
