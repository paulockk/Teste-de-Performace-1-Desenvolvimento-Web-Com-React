import { useReducer, useState } from "react";

export default function GerenciadorUsereducerInput() {

  function reducer(state, action) {

    switch (action.type) {

      case "inserir":
        return [
          ...state,
          {
            nome: action.payload.nome,
            idade: Number(action.payload.idade)
          }
        ];

      case "incrementar":
        return state.map((usuario, index) =>
          index === action.payload
            ? { ...usuario, idade: usuario.idade + 1 }
            : usuario
        );

      case "decrementar":
        return state.map((usuario, index) =>
          index === action.payload
            ? { ...usuario, idade: usuario.idade - 1 }
            : usuario
        );

      default:
        return state;
    }
  }

  const [usuarios, dispatch] = useReducer(reducer, []);

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  function inserirUsuario() {

    if (nome === "" || idade === "") {
      alert("Preencha todos os campos");
      return;
    }

    dispatch({
      type: "inserir",
      payload: {
        nome,
        idade
      }
    });

    setNome("");
    setIdade("");
  }

  return (
    <div className="p-6 m-10 border-2 border-gray-300 rounded">

      <h1 className="text-2xl font-bold mb-4">
        Gerenciador de Usuários
      </h1>

      <input
        type="text"
        placeholder="Digite o nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border-2 border-gray-300 rounded p-2 my-2 w-full"
      />

      <input
        type="number"
        placeholder="Digite a idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        className="border-2 border-gray-300 rounded p-2 my-2 w-full"
      />

      <button
        onClick={inserirUsuario}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-3"
      >
        INSERIR
      </button>

      <div className="mt-6">

        {usuarios.map((usuario, index) => (
          <div
            key={index}
            className="border p-4 rounded mb-3 flex items-center justify-between"
          >

            <div>
              <p className="font-bold">
                Nome: {usuario.nome}
              </p>

              <p>
                Idade: {usuario.idade}
              </p>
            </div>

            <div className="flex gap-2">

              <button
                onClick={() =>
                  dispatch({
                    type: "incrementar",
                    payload: index
                  })
                }
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "decrementar",
                    payload: index
                  })
                }
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                -
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}