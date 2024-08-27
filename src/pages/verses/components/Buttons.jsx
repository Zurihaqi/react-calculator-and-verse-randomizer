import { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

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
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white mt-4 group-active:bg-gray-900"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <FontAwesomeIcon icon={faArrowLeft} />
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
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white mt-4 group-active:bg-gray-900"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <FontAwesomeIcon icon={faShuffle} />
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
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white mt-4 group-active:bg-gray-900"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <FontAwesomeIcon icon={faArrowRight} />
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
