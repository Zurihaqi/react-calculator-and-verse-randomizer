import CalcButtons from "./components/CalcButtons";

export default function Calculator() {
  return (
    <div className="container flex flex-col bg-gray-800 w-full h-full rounded-lg shadow-xl">
      <input
        type="text"
        className="w-[300px] min-h-[125px] p-2 text-green-500 mb-4 text-right font-typo-digit text-3xl rounded-t-md bg-black border-b-4 border-white"
      />
      <CalcButtons />
    </div>
  );
}
