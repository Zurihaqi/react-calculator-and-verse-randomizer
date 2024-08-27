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

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <SurahContext.Provider value={{ surah: surah, setSurah: setSurah }}>
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
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
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
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 0.2,
                  direction: "none",
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
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: false,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: false,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
            // className="-z-10"
          />
          <Footer />
          <MobileBottomNav />
        </div>
      </SurahContext.Provider>
    )
  );
}

export default App;
