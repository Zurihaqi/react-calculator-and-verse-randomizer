import { useEffect, useState } from "react";
import { getSurah } from "../../services/api";
import Buttons from "./components/Buttons";
import Spinner from "/spinner4.gif";

export default function Verses() {
  const [surah, setSurah] = useState({});
  const [randomizer, setRandomizer] = useState(1);
  const [animate, setAnimate] = useState(true);

  const fetchSurah = async () => {
    const result = await getSurah();

    if (result) {
      setSurah(result);
      setRandomizer(
        Math.floor(Math.random() * (+result.number_of_ayah - 1 + 1) + 1)
      );

      // console.log(randomizer);
    }
  };

  useEffect(() => {
    if (Object.keys(surah).length === 0) fetchSurah();
    setTimeout(() => {
      setAnimate(false);
    }, 700);
  }, [surah]);

  return (
    <>
      <figure className="max-w-screen-md mt-8 mx-8 sm:mx-auto text-center shadow-lg bg-gradient-to-b from-slate-700/70 to-slate-800 p-4 rounded-xl">
        {surah.text && surah.tafsir && surah.translations ? (
          <div>
            <blockquote className="space-y-5">
              <p
                className={`sm:text-4xl text-3xl font-medium text-white mt-4 ${
                  animate ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                ﴾{" "}
                <span className="text-amber-300">
                  {surah.text?.[randomizer]}
                </span>{" "}
                ﴿
              </p>

              <p
                className={`text-lg italic font-light font-sans text-white ${
                  animate ? "animate__animated animate__fadeIn" : ""
                }`}
              >
                &quot;{surah.translations?.id?.text?.[randomizer]}&quot;
              </p>
              <hr />
              <div className="overflow-auto max-h-20 mx-auto px-4">
                <p
                  className={`text-md font-normal text-slate-400 ${
                    animate
                      ? "animate__animated animate__fadeInUp animate__faster"
                      : ""
                  }`}
                >
                  {surah.tafsir?.id?.kemenag?.text?.[randomizer]}
                </p>
              </div>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
                <cite className="pe-3 text-sm text-gray-400">
                  {surah.name_latin} - {randomizer}
                </cite>
                <cite className="ps-3 text-sm text-gray-400">
                  {surah.translations?.id?.name}
                </cite>
              </div>
            </figcaption>
          </div>
        ) : (
          <img
            src={Spinner}
            className="w-10 h-10 mx-auto my-auto"
            alt="loading"
          />
        )}
      </figure>

      <Buttons
        setRandomizer={setRandomizer}
        randomizer={randomizer}
        fetchSurah={fetchSurah}
        numberOfAyah={+surah.number_of_ayah}
        setAnimate={setAnimate}
      />
    </>
  );
}
