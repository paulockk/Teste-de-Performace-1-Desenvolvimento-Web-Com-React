import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Menu from "./components/Menu";

import Ex1 from "./pages/Ex1";
import Ex2 from "./pages/Ex2";
import Ex3 from "./pages/Ex3";
import Ex4 from "./pages/Ex4";
import Ex5 from "./pages/Ex5";
import Ex6 from "./pages/Ex6";
import Ex7 from "./pages/Ex7";
import Ex8 from "./pages/Ex8";
import Ex9 from "./pages/Ex9";
import Ex10 from "./pages/Ex10";
import Ex11 from "./pages/Ex11";
import Ex12 from "./pages/Ex12";

export default function App() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/ex1" element={<Ex1 />} />
        <Route path="/ex2" element={<Ex2 />} />
        <Route path="/ex3" element={<Ex3 />} />
        <Route path="/ex4" element={<Ex4 />} />

        {/* EXERCÍCIO 5 (DUAS ROTAS DIFERENTES) */}
        <Route path="/ex5" element={<Navigate to="/ex5-user" />} />
        <Route path="/ex5-admin" element={<Ex5 />} />
        <Route path="/ex5-user" element={<Ex5 />} />

        <Route path="/ex6" element={<Ex6 />} />
        <Route path="/ex7" element={<Ex7 />} />
        <Route path="/ex8" element={<Ex8 />} />
        <Route path="/ex9" element={<Ex9 />} />
        <Route path="/ex10" element={<Ex10 />} />
        <Route path="/ex11" element={<Ex11 />} />
        <Route path="/ex12" element={<Ex12 />} />
        <Route
          path="/ex9-preenchido"
          element={
            <Ex9
              nomeInicial="Paulo Roberto"
              emailInicial="paulo@email.com"
              telefoneInicial="(14) 99999-9999"
            />
          }
        />
      </Routes>
    </>
  );
}
