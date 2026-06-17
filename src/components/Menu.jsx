import { Link } from "react-router-dom";

const estiloBotao =
  "no-underline bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-3 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 text-center";

export default function Menu() {
  return (
    <div className="bg-gradient-to-br from-green-100 via-green-200 to-green-500 min-h-[260px] p-8">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-green-700">Assessment</h1>

          <p className="text-gray-600 mt-2">
            Desenvolvido por Paulo Roberto Cavalcante Silva
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          <Link to="/ex1" className={estiloBotao}>
            Ex1
          </Link>
          <Link to="/ex2" className={estiloBotao}>
            Ex2
          </Link>
          <Link to="/ex3" className={estiloBotao}>
            Ex3
          </Link>
          <Link to="/ex4" className={estiloBotao}>
            Ex4
          </Link>
          <Link to="/ex5" className={estiloBotao}>
            Ex5
          </Link>
          <Link to="/ex6" className={estiloBotao}>
            Ex6
          </Link>
          <Link to="/ex7" className={estiloBotao}>
            Ex7
          </Link>
          <Link to="/ex8" className={estiloBotao}>
            Ex8
          </Link>
          <Link to="/ex9" className={estiloBotao}>
            Ex9
          </Link>
          <Link to="/ex10" className={estiloBotao}>
            Ex10
          </Link>
          <Link to="/ex11" className={estiloBotao}>
            Ex11
          </Link>
          <Link to="/ex12" className={estiloBotao}>
            Ex12
          </Link>
          <Link to="/ex5-admin" className={estiloBotao}>
            Ex14.1
          </Link>
          <Link to="/ex5-user" className={estiloBotao}>
            Ex14.2
          </Link>

          <Link to="/ex6" state={{ pais: "Brasil" }} className={estiloBotao}>
            Ex15
          </Link>

          <Link to="/ex9-preenchido" className={estiloBotao}>
            Ex16
          </Link>
        </div>
      </div>
    </div>
  );
}
