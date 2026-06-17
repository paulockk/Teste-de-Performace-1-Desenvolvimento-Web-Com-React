import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Ex5() {
  const location = useLocation();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(location.pathname === "/ex5-admin");
  }, [location.pathname]);

  function handleChange() {
    setChecked(!checked);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-yellow-200 flex flex-col items-center justify-center p-8 gap-6">
      <h1 className="text-4xl font-bold text-gray-800">Exercício 5</h1>
      <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
        Crie uma página com um checkbox com rótulo “Administrador” que, ao ser
        clicado, mostra a mensagem “O usuário atual é Administrador” caso esteja
        selecionado ou “O usuário atual é Colaborador” caso contrário.
      </p>
      <h1 className="text-4xl font-bold text-gray-800">Exercício 14</h1>
      <p className="text-gray-600 text-lg text-center max-w-2xl border p-4 rounded-lg bg-white shadow-md">
        Criar uma rota que chame a página da questão 5 com o checkbox
        selecionado e uma opção de menu “Administrador Selecionado”. Faça uma
        outra rota que faça o mesmo, mas com o checkbox desligado.
      </p>

      <label className="flex items-center gap-2 text-xl">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Administrador
      </label>

      <p className="text-2xl font-semibold text-gray-700">
        {checked
          ? "O usuário atual é Administrador"
          : "O usuário atual é Colaborador"}
      </p>
    </div>
  );
}
