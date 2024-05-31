/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use client'
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";


const ParticlesComponent = (props) => {
  
  const options = useMemo(() => {
    
    return {
      background: {
        color: "", 
      },
      fullScreen: {
        enable: true, 
        zIndex: -1, 
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, 
            mode: "push",
          },
          onHover: {
            enable: true, 
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 5, 
          },
          repulse: {
            distance: 100, 
          },
        },
      },
      particles: {
        links: {
          enable: true, 
          distance: 200, 
        },
        move: {
          enable: true, 
          speed: { min: 1, max: 4 }, 
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, 
        },
        size: {
          value: { min: 1, max: 3 }, 
        },
      },
    };
  }, []);

  
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    
  }, []);

  
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;