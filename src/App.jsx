import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar";
import MobileBottomNav from "./components/MobileBottomNav";
import Footer from "./components/Footer";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { SurahContext } from "./contexts/SurahContext";

function App() {
  const [init, setInit] = useState(false);
  const [surah, setSurah] = useState({});
  const [randomizer, setRandomizer] = useState(1);

  useEffect(() => {
    if (init === false) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }
  }, [init]);

  return (
    init && (
      <SurahContext.Provider
        value={{
          surah: surah,
          setSurah: setSurah,
          randomizer: randomizer,
          setRandomizer: setRandomizer,
        }}
      >
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 ">
          <Sidebar />
          <div className="text-center m-auto z-20">
            <Outlet />
          </div>
          <Particles
            options={{
              particles: {
                number: {
                  value: 90,
                  density: {
                    enable: true,
                    value_area: 315,
                  },
                },
                color: {
                  value: "#FFF220",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                },
                opacity: {
                  value: 0.5,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 0.1,
                    opacity_min: 0.2,
                    sync: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                move: {
                  enable: true,
                  speed: 0.2,
                  direction: "left",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
            }}
          />
          <Footer />
          <MobileBottomNav />
        </div>
      </SurahContext.Provider>
    )
  );
}

export default App;
