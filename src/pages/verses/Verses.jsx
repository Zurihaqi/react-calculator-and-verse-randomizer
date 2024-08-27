import { useContext, useEffect, useState } from "react";
import { SurahContext } from "../../contexts/SurahContext";
import { getSurah } from "../../services/api";
import Buttons from "./components/Buttons";
// import Spinner from "/spinner4.gif";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Verses() {
  const { surah, setSurah, randomizer, setRandomizer } =
    useContext(SurahContext);
  // const [randomizer, setRandomizer] = useState(1);
  const [animate, setAnimate] = useState(true);

  const fetchSurah = async (id) => {
    const result = await getSurah(id);

    if (result && !id) {
      setSurah(result);
      setRandomizer(
        Math.floor(Math.random() * (+result.number_of_ayah - 1 + 1) + 1)
      );

      // console.log(randomizer);
    }

    setSurah(result);
  };

  useEffect(() => {
    if (Object.keys(surah).length === 0) fetchSurah();
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  });

  return (
    <>
      <figure className="sm:max-w-screen-lg max-w-screen-md mt-8 mx-8 sm:mx-auto text-center p-4 rounded-xl">
        <div>
          <blockquote className="space-y-5">
            <p
              className={`sm:text-4xl text-3xl font-medium text-white mt-4 ${
                animate
                  ? "animate__animated animate__fadeInUp animate__faster"
                  : ""
              }`}
            >
              <span className="font-alquran-ali leading-relaxed">
                {(surah.text?.[randomizer] &&
                  `﴾${randomizer}﴿ ` + surah.text?.[randomizer]) || (
                  <Skeleton count={1} />
                )}
              </span>{" "}
            </p>

            <p
              className={`text-lg italic font-semibold font-sans text-white ${
                animate
                  ? "animate__animated animate__fadeInUp animate__faster"
                  : ""
              }`}
            >
              {(surah.translations &&
                '"' + surah.translations?.id?.text?.[randomizer] + '"') || (
                <Skeleton count={1} />
              )}
            </p>
            <hr />
            <div className="overflow-auto max-h-20 mx-auto px-4">
              <p
                className={`text-md font-normal text-slate-300 ${
                  animate
                    ? "animate__animated animate__fadeInDown animate__faster"
                    : ""
                }`}
              >
                {surah.tafsir?.id?.kemenag?.text?.[randomizer] || (
                  <Skeleton count={3} />
                )}
              </p>
            </div>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
              <cite className="pe-3 text-sm text-gray-400">
                {surah.name_latin} : {surah.name_latin && randomizer}
              </cite>
              <cite className="ps-3 text-sm text-gray-400">
                {surah.translations?.id?.name || <Skeleton count={1} />}
              </cite>
            </div>
          </figcaption>
        </div>
      </figure>

      <Buttons
        setRandomizer={setRandomizer}
        randomizer={randomizer}
        fetchSurah={fetchSurah}
        numberOfAyah={+surah.number_of_ayah}
        setAnimate={setAnimate}
        surahNumber={+surah.number}
      />
    </>
  );
}
