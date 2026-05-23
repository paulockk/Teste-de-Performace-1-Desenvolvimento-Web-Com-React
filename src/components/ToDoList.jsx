import { useReducer, useState } from "react";

export default function TodoList() {

  function reducer(state, action) {

    switch (action.type) {

      case "inserir":
        return [
          ...state,
          {
            tarefa: action.payload
          }
        ];

      case "excluir":
        return state.filter((_, index) =>
          index !== action.payload
        );

      default:
        return state;
    }
  }

  const [tarefas, dispatch] = useReducer(reducer, []);

  const [texto, setTexto] = useState("");

  function inserirTarefa() {

    if (texto === "") {
      alert("Digite uma tarefa");
      return;
    }

    dispatch({
      type: "inserir",
      payload: texto
    });

    setTexto("");
  }

  return (
    <div className="p-6 border rounded">

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="border p-2 rounded w-full my-2"
      />

      <button
        onClick={inserirTarefa}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        INSERIR
      </button>

      <div className="mt-5">

        {tarefas.map((tarefa, index) => (

          <div
            key={index}
            className="border p-4 rounded mb-3 flex justify-between items-center"
          >

            <p className="font-bold">
              {tarefa.tarefa}
            </p>

            <button
              onClick={() =>
                dispatch({
                  type: "excluir",
                  payload: index
                })
              }
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              EXCLUIR
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}