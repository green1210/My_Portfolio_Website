import React, { useCallback, useMemo } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

export const ParticlesBackground = React.memo(() => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded callback - optimized
  }, []);

  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 30, // Reduced for better performance
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
        resize: true,
      },
      modes: {
        push: {
          quantity: 2, // Reduced
        },
        repulse: {
          distance: 80, // Reduced
          duration: 0.3, // Reduced
        },
      },
    },
    particles: {
      color: {
        value: ["#667eea", "#f093fb", "#4facfe", "#43e97b"],
      },
      links: {
        color: "#667eea",
        distance: 80, // Reduced
        enable: true,
        opacity: 0.25, // Reduced
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.8, // Reduced
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1200, // Increased to reduce particle count
        },
        value: 40, // Reduced from 60
      },
      opacity: {
        value: { min: 0.15, max: 0.5 }, // Reduced opacity range
        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: {
        type: ["circle"],
      },
      size: {
        value: { min: 1, max: 3 }, // Reduced max size
        animation: {
          enable: true,
          speed: 1.5, // Reduced
          minimumValue: 0.5,
          sync: false,
        },
      },
    },
    detectRetina: true,
    smooth: true,
    reduceDuplicates: true, // Added for performance
  }), []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 -z-10"
      options={particlesOptions}
    />
  );
});

ParticlesBackground.displayName = 'ParticlesBackground';