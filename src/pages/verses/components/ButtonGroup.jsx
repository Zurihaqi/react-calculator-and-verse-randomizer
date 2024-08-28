import { Component } from "react";
import PropTypes from "prop-types";
import {
  faArrowRight,
  faArrowLeft,
  faShuffle,
  faVolumeHigh,
  faPause,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, isPlaying: false };
    this.audio = null;
  }

  ayahsPerSurah = [
    7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128,
    111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73,
    54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49,
    62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28,
    28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20,
    15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5,
    6,
  ];

  getGlobalAyahNumber(surahNumber, ayahNumber) {
    return this.ayahsPerSurah
      .slice(0, surahNumber - 1)
      .reduce((sum, ayahCount) => sum + ayahCount, ayahNumber);
  }

  toggleAudio(surahNumber, ayahNumber, bitrate = 64, edition = "ar.alafasy") {
    const globalAyahNumber = this.getGlobalAyahNumber(surahNumber, ayahNumber);
    const audioSrc = `https://cdn.islamic.network/quran/audio/${bitrate}/${edition}/${globalAyahNumber}.mp3`;

    if (!this.audio) {
      this.audio = new Audio(audioSrc);
      this.audio.addEventListener("play", this.handlePlay);
      this.audio.addEventListener("pause", this.handlePause);
      this.audio.addEventListener("ended", this.handlePause);
    } else if (this.audio.src !== audioSrc) {
      this.audio.src = audioSrc;
    }

    if (this.audio.paused || this.audio.ended) {
      this.audio.play();
      this.setState({ isPlaying: true });
    } else {
      this.audio.pause();
      this.setState({ isPlaying: false });
    }
  }

  handleButtonClick = async (direction) => {
    const {
      setRandomizer,
      randomizer,
      fetchSurah,
      surahNumber,
      numberOfAyah,
      setAnimate,
    } = this.props;

    let newSurahNumber = surahNumber;
    let newRandomizer = randomizer;

    if (direction === "prev") {
      if (randomizer === 1) {
        newSurahNumber = surahNumber - 1;
        await fetchSurah(newSurahNumber);
        newRandomizer = this.ayahsPerSurah[surahNumber - 2];
      } else {
        newRandomizer = randomizer - 1;
      }
    } else if (direction === "next") {
      this.ayahsPerSurah;
      if (randomizer === numberOfAyah) {
        newSurahNumber = surahNumber + 1;
        await fetchSurah(newSurahNumber);
        newRandomizer = 1;
      } else {
        newRandomizer = randomizer + 1;
      }
    }

    setRandomizer(newRandomizer);
    await setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  };

  handlePlay = () => {
    this.setState({ isPlaying: true });
  };

  handlePause = () => {
    this.setState({ isPlaying: false });
  };

  componentDidMount() {
    if (this.audio) {
      this.audio.addEventListener("play", this.handlePlay);
      this.audio.addEventListener("pause", this.handlePause);
      this.audio.addEventListener("ended", this.handlePause);
    }
  }

  componentWillUnmount() {
    if (this.audio) {
      this.audio.removeEventListener("play", this.handlePlay);
      this.audio.removeEventListener("pause", this.handlePause);
      this.audio.removeEventListener("ended", this.handlePause);
    }
  }

  render() {
    const { fetchSurah } = this.props;
    const { isPlaying } = this.state;

    return (
      <div>
        <Button
          icon={faArrowLeft}
          onClick={() => this.handleButtonClick("prev")}
        />
        <Button
          icon={this.state.isLoading ? faSpinner : faShuffle}
          onClick={async () => {
            this.setState({ isLoading: true });
            await fetchSurah();
            setTimeout(() => {
              this.setAnimate(false);
            }, 500);
            this.setState({ isLoading: false });
          }}
          isLoading={this.state.isLoading}
        />
        <Button
          icon={isPlaying ? faPause : faVolumeHigh}
          onClick={() =>
            this.toggleAudio(this.props.surahNumber, this.props.randomizer)
          }
        />
        <Button
          icon={faArrowRight}
          onClick={() => this.handleButtonClick("next")}
        />
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  setRandomizer: PropTypes.func.isRequired,
  randomizer: PropTypes.number.isRequired,
  fetchSurah: PropTypes.func.isRequired,
  surahNumber: PropTypes.number.isRequired,
  numberOfAyah: PropTypes.number.isRequired,
  setAnimate: PropTypes.func.isRequired,
};
