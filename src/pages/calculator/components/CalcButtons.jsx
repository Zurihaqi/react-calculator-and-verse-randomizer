export default function CalcButtons() {
  return (
    <>
      <div className="flex flex-1 justify-end">
        <button className="text-amber-500 font-extrabold px-4 hover:text-amber-600 w-fit">
          ⌫
        </button>
      </div>
      <div className="grid grid-flow-col grid-cols-4 bg-gray-800 px-4 pb-4 pt-2 rounded-md gap-2 text-white">
        <div className="grid grid-flow-row grid-rows-5 gap-2">
          <button className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold">
            C
          </button>
          <button className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold">
            7
          </button>
          <button className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold">
            4
          </button>
          <button className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold">
            1
          </button>
          <button className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold">
            +/-
          </button>
        </div>
        <div className="grid grid-flow-row grid-rows-5 gap-2">
          <button className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold">
            ()
          </button>
          <button className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold">
            8
          </button>
          <button className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold">
            5
          </button>
          <button className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold">
            2
          </button>
          <button className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold">
            0
          </button>
        </div>
        <div className="grid grid-flow-row grid-rows-5 gap-2">
          <button className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold">
            %
          </button>
          <button className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold">
            9
          </button>
          <button className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold">
            6
          </button>
          <button className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold">
            3
          </button>
          <button className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold">
            .
          </button>
        </div>
        <div className="grid grid-flow-row grid-rows-5 gap-2">
          <button className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold">
            /
          </button>
          <button className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold">
            *
          </button>
          <button className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold">
            -
          </button>
          <button className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold">
            +
          </button>
          <button className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold">
            =
          </button>
        </div>
      </div>
    </>
  );
}
