import PropTypes from "prop-types";

export default function CalcButtons({ display, setDisplay }) {
  const handleClick = (value) => {
    const operators = ["+", "-", "/", "*", "%"];
    const lastDispChar = display.length - 1;

    if (
      operators.includes(value) &&
      operators.includes(display.charAt(lastDispChar))
    ) {
      setDisplay((prevDisplay) => {
        return `${prevDisplay.slice(0, -1) + value}`;
      });
    } else if (display[0] === "0") {
      setDisplay(() => {
        return value;
      });
    } else {
      setDisplay((prevDisplay) => {
        return prevDisplay + value;
      });
    }
  };

  const handleBracket = () => {
    const openBracketsCount = (display.match(/\(/g) || []).length;
    const closeBracketsCount = (display.match(/\)/g) || []).length;

    if (openBracketsCount > closeBracketsCount) {
      setDisplay((prevDisplay) => prevDisplay + ")");
    } else {
      handleClick("(");
    }
  };

  const handleEvaluate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      console.error(error);
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleBackspace = () => {
    if (display.length === 1) {
      setDisplay(() => "0");
    } else {
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
    }
  };

  return (
    <>
      <div className="flex flex-1 justify-end">
        <button
          className="text-amber-500 font-extrabold px-4 hover:text-amber-600 w-fit"
          onClick={handleBackspace}
        >
          ⌫
        </button>
      </div>
      <div className="grid grid-flow-col grid-cols-4 bg-gray-800 px-4 pb-4 pt-2 rounded-md gap-2 text-white">
        <div className="grid grid-flow-row grid-rows-5 gap-2">
          <button
            className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold"
            onClick={handleClear}
          >
            C
          </button>
          <button
            className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold"
            onClick={() => handleClick("7")}
          >
            7
          </button>
          <button
            className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold"
            onClick={() => handleClick("4")}
          >
            4
          </button>
          <button
            className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold"
            onClick={() => handleClick("1")}
          >
            1
          </button>
          <button
            className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold"
            onClick={() => handleClick("-")}
          >
            +/-
          </button>
        </div>
        <div className="grid grid-flow-row grid-rows-5 gap-2">
          <button
            className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold"
            onClick={() => handleBracket()}
          >
            ()
          </button>
          <button
            className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold"
            onClick={() => handleClick("8")}
          >
            8
          </button>
          <button
            className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold"
            onClick={() => handleClick("5")}
          >
            5
          </button>
          <button
            className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold"
            onClick={() => handleClick("2")}
          >
            2
          </button>
          <button
            className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold"
            onClick={() => handleClick("0")}
          >
            0
          </button>
        </div>
        <div className="grid grid-flow-row grid-rows-5 gap-2">
          <button
            className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold"
            onClick={() => handleClick("%")}
          >
            %
          </button>
          <button
            className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold"
            onClick={() => handleClick("9")}
          >
            9
          </button>
          <button
            className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold"
            onClick={() => handleClick("6")}
          >
            6
          </button>
          <button
            className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold"
            onClick={() => handleClick("3")}
          >
            3
          </button>
          <button
            className="hover:bg-amber-700 bg-amber-600 p-2 rounded-md font-bold"
            onClick={() => handleClick(".")}
          >
            .
          </button>
        </div>
        <div className="grid grid-flow-row grid-rows-5 gap-2">
          <button
            className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold"
            onClick={() => handleClick("/")}
          >
            /
          </button>
          <button
            className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold"
            onClick={() => handleClick("*")}
          >
            *
          </button>
          <button
            className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold"
            onClick={() => handleClick("-")}
          >
            -
          </button>
          <button
            className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold"
            onClick={() => handleClick("+")}
          >
            +
          </button>
          <button
            className="hover:bg-gray-600 bg-gray-500 p-2 rounded-md font-bold"
            onClick={handleEvaluate}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

CalcButtons.propTypes = {
  display: PropTypes.string,
  setDisplay: PropTypes.func.isRequired,
};
