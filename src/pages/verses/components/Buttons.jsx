import { Component } from "react";
import PropTypes from "prop-types";

export default class Buttons extends Component {
  render() {
    const { setRandomizer, randomizer, fetchSurah, numberOfAyah, setAnimate } =
      this.props;

    return (
      <div>
        <button
          onClick={() => {
            setRandomizer(() => (randomizer > 1 ? randomizer - 1 : randomizer));
            setAnimate(true);
            setTimeout(() => {
              setAnimate(false);
            }, 700);
          }}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white mt-4"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Previous Ayat
          </span>
        </button>
        <button
          onClick={async () => {
            await fetchSurah();
            // console.log(surah);
            setAnimate(true);
            setTimeout(() => {
              setAnimate(false);
            }, 700);
          }}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white mt-4"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Randomize
          </span>
        </button>
        <button
          onClick={() => {
            setRandomizer(() =>
              randomizer < numberOfAyah ? randomizer + 1 : randomizer
            );
            setAnimate(true);
            setTimeout(() => {
              setAnimate(false);
            }, 700);
          }}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white mt-4"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Next Ayat
          </span>
        </button>
      </div>
    );
  }
}

Buttons.propTypes = {
  setRandomizer: PropTypes.func.isRequired,
  randomizer: PropTypes.number.isRequired,
  fetchSurah: PropTypes.func.isRequired,
  numberOfAyah: PropTypes.number.isRequired,
  setAnimate: PropTypes.func.isRequired,
};
