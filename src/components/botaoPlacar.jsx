import { useState } from "react";

export default function BotaoPlacar(props) {
  const [placar, setPlacar] = useState(0);
  const [placar2, setPlacar2] = useState(0);

  function handleClickTime1() {
    setPlacar(placar + 1);
  }

  function handleClickTime2() {
    setPlacar2(placar2 + 1);
  }

  return (
    <div className="flex gap-4">
      <button
        onClick={handleClickTime1}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 border-b-4 border-green-700 hover:border-green-500 rounded-xl"
      >
        {props.time1} {placar}
      </button>

      <button
        onClick={handleClickTime2}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 border-b-4 border-green-700 hover:border-green-500 rounded-xl "
      >
        {props.time2} {placar2}
      </button>

      <p>
        Placar: {props.time1} {placar} x {placar2} {props.time2}
      </p>
    </div>
  );
}
