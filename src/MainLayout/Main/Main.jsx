import { Outlet } from "react-router-dom";
import Header from "../../Sheared/Header/Header";
import Footer from "../../Sheared/Footer";
import { useCallback } from "react";

import Particles from "react-particles";

import { loadSlim } from "tsparticles-slim";

const Main = () => {


  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: ["#00fff7", "#ff6ec7", "#8e44ad", "#ffcc00", "#ff007f"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.7,
        random: true,
        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.2,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        animation: {
          enable: true,
          speed: 1.5,
          minimumValue: 0.5,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.3,
        width: 1,
        blink: false,
        shadow: {
          enable: true,
          color: "#ffffff",
          blur: 5
        }
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out"
        },
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "bubble"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        bubble: {
          distance: 150,
          size: 8,
          duration: 2,
          opacity: 1
        }
      }
    },
    detectRetina: true,
    background: {
      color: "#0d0d0d"
    }
  };
  

  return (

<div
  className="h-full bg-black relative overflow-y-auto"
  style={{ scrollBehavior: "smooth" }}
>
  {/* Particles BG */}
  <Particles
    className="fixed top-0 left-0 w-full h-full z-0"
    init={particlesInit}
    options={particlesConfig}
  />

  {/* All your content comes here */}
  <div className="relative z-10">
    <Header />
    <Outlet />
    <Footer />
  </div>
</div>


  );
};

export default Main;
