import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import serviceCategorias from "../services/ApiPratosRestaurante";

export default function Ex8() {
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  useEffect(() => {
    async function carregarCategorias() {
      const dados = await serviceCategorias();
      setCategorias(dados);
    }

    carregarCategorias();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-yellow-200 flex justify-center items-center p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-6">Exercício 8</h1>
        <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
          Crie uma página com um dropdown com uma lista de categorias de pratos
          de um restaurante que, ao ser selecionado, mostre a descrição e a
          imagem da categoria selecionada. Use o serviço
          https://www.themealdb.com/
        </p>
        <Dropdown>
          <Dropdown.Toggle variant="success">
            {categoriaSelecionada
              ? categoriaSelecionada.strCategory
              : "Selecione uma categoria"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {categorias.map((categoria) => (
              <Dropdown.Item
                key={categoria.idCategory}
                onClick={() => setCategoriaSelecionada(categoria)}
              >
                {categoria.strCategory}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        {categoriaSelecionada && (
          <div className="mt-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {categoriaSelecionada.strCategory}
            </h2>

            <img
              src={categoriaSelecionada.strCategoryThumb}
              alt={categoriaSelecionada.strCategory}
              className="w-72 mx-auto rounded-xl shadow-lg mb-4"
            />

            <p className="text-gray-700 text-justify">
              {categoriaSelecionada.strCategoryDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
