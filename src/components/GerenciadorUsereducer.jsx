import { useReducer } from "react";

export default function GerenciadorUsereducer() {

  const idadeInicial = {
    idade: 0
  };

  function reducer(state, action) {
    switch (action.type) {

      case "incrementar":
        return {
          idade: state.idade + 1
        };

      case "decrementar":
        return {
          idade: state.idade - 1
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(
    reducer,
    idadeInicial
  );

  function incrementarIdade() {
    dispatch({ type: "incrementar" });
  }

  function decrementarIdade() {
    dispatch({ type: "decrementar" });
  }

  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded">

      <h1 className="text-2xl font-bold">
        Gerenciador de Estado com useReducer
      </h1>

      <h2 className="text-xl font-semibold">
        Dados do Usuário
      </h2>

      <p className="my-4">
        <strong>Idade:</strong> {state.idade}
      </p>

   

        <button
          onClick={incrementarIdade}
           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-xl mx-4"
        >
          Incrementar Idade
        </button>

        <button
          onClick={decrementarIdade}
         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-xl mx-4"
        >
          Decrementar Idade
        </button>


    </div>
  );
}