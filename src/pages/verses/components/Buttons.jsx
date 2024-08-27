import { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faShuffle,
  faVolumeHigh,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.audio = null;
  }

  getGlobalAyahNumber(surahNumber, ayahNumber) {
    const ayahsPerSurah = [
      7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128,
      111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73,
      54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60,
      49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52,
      44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19,
      26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6,
      3, 5, 4, 5, 6,
    ];

    let globalAyahNumber = ayahNumber;
    for (let i = 0; i < surahNumber - 1; i++) {
      globalAyahNumber += ayahsPerSurah[i];
    }

    return globalAyahNumber;
  }

  toggleAudio(surahNumber, ayahNumber, bitrate = 128, edition = "ar.alafasy") {
    const globalAyahNumber = this.getGlobalAyahNumber(surahNumber, ayahNumber);
    const audioSrc = `https://cdn.islamic.network/quran/audio/${bitrate}/${edition}/${globalAyahNumber}.mp3`;

    if (!this.audio) {
      this.audio = new Audio(audioSrc);
    } else {
      if (this.audio.src !== audioSrc) {
        this.audio.src = audioSrc;
      }
    }

    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  render() {
    const {
      setRandomizer,
      randomizer,
      fetchSurah,
      surahNumber,
      numberOfAyah,
      setAnimate,
    } = this.props;

    return (
      <div>
        <button
          onClick={() => {
            if (randomizer > 1) {
              setRandomizer(randomizer - 1);
            } else {
              setRandomizer(numberOfAyah);
              fetchSurah(surahNumber - 1);
            }
            setAnimate(true);
            setTimeout(() => {
              setAnimate(false);
            }, 500);
          }}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-400 to-blue-600 group-hover:from-purple-400 group-hover:to-blue-600 hover:text-white mt-4 group-active:bg-gray-900"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </button>
        <button
          onClick={async () => {
            this.setState({ isLoading: true });
            await fetchSurah();
            setAnimate(true);
            setTimeout(() => {
              setAnimate(false);
              this.setState({ isLoading: false });
            }, 500);
          }}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-400 to-blue-600 group-hover:from-purple-400 group-hover:to-blue-600 hover:text-white mt-4 group-active:bg-gray-900"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <FontAwesomeIcon icon={faShuffle} />
          </span>
        </button>
        <button
          onClick={() => {
            this.toggleAudio(surahNumber, randomizer);
          }}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-400 to-blue-600 group-hover:from-purple-400 group-hover:to-blue-600 hover:text-white mt-4 group-active:bg-gray-900"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <FontAwesomeIcon
              icon={!this.audio || this.audio.paused ? faVolumeHigh : faPause}
            />
          </span>
        </button>
        <button
          onClick={() => {
            if (randomizer < numberOfAyah) {
              setRandomizer(randomizer + 1);
            } else {
              setRandomizer(1);
              fetchSurah(surahNumber + 1);
            }
            setAnimate(true);
            setTimeout(() => {
              setAnimate(false);
            }, 500);
          }}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-400 to-blue-600 group-hover:from-purple-400 group-hover:to-blue-600 hover:text-white mt-4 group-active:bg-gray-900"
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
  surahNumber: PropTypes.number.isRequired,
  numberOfAyah: PropTypes.number.isRequired,
  setAnimate: PropTypes.func.isRequired,
};
