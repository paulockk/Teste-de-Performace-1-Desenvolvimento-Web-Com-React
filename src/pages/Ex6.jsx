import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import servicePaises from "../services/ApiPaises";

export default function Ex6() {
  const location = useLocation();

  const [paises, setPaises] = useState([]);
  const [paisSelecionado, setPaisSelecionado] = useState(
    location.state?.pais || "Selecione um país",
  );

  useEffect(() => {
    async function carregarPaises() {
      const dados = await servicePaises();
      setPaises(dados);
    }

    carregarPaises();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-100 to-yellow-200 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-800">Exercício 6 </h1>
      <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
        Crie uma página com dropdown com uma lista com os países do mundo. Use o
        serviço https://restcountries.com/
      </p>
          <h1 className="text-4xl font-bold text-gray-800">Exercício 15 </h1>
         <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
        Criar uma rota que chame a página da questão 6 com o Brasil selecionado.
      </p>
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg flex flex-col items-center gap-6">
        <Dropdown>
          <Dropdown.Toggle variant="success">{paisSelecionado}</Dropdown.Toggle>

          <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "auto" }}>
            {paises.map((pais) => (
              <Dropdown.Item
                key={pais.name}
                onClick={() => setPaisSelecionado(pais.name)}
              >
                {pais.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
