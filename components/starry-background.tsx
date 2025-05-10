"use client";

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function StarryBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing tsparticles");
    try {
      await loadSlim(engine);
      console.log("tsparticles initialized successfully");
    } catch (error) {
      console.error("Failed to initialize tsparticles:", error);
    }
  }, []);

  if (!mounted) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1 }}
      options={{
        fpsLimit: 120,
        particles: {
          color: {
            value: resolvedTheme === "dark" ? "#ffffff" : "#000000",
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1500,
            },
            value: 400,
          },
          opacity: {
            value: resolvedTheme === "dark" ? 0.8 : 0.6,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.8, max: 2.2 },
          },
        },
        detectRetina: true,
        background: {
          color: "transparent",
        },
        fullScreen: false,
      }}
    />
  );
}
