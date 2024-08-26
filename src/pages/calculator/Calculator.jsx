import { useState } from "react";
import CalcButtons from "./components/CalcButtons";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  return (
    <div className="container flex flex-col bg-slate-600 w-full h-full rounded-lg shadow-xl">
      <input
        type="text"
        value={display}
        className="w-[300px] min-h-[125px] py-2 px-4 text-green-500 mb-4 text-right font-calculator text-4xl rounded-t-md bg-black border-b-2"
        onChange={(event) => {
          setDisplay(event.target.value);
        }}
        disabled
      />
      <CalcButtons display={display} setDisplay={setDisplay} />
    </div>
  );
}
