'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

export default function StarryBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log('Initializing tsparticles');
    try {
      await loadSlim(engine);
      console.log('tsparticles initialized successfully');
    } catch (error) {
      console.error('Failed to initialize tsparticles:', error);
    }
  }, []);

  if (!mounted) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ position: 'fixed', width: '100%', height: '100%', zIndex: -1 }}
      options={{
        fpsLimit: 120,
        particles: {
          color: {
            value:
              resolvedTheme === 'dark'
                ? [
                    '#ffffff',
                    '#f0f8ff',
                    '#e6f3ff',
                    '#cce6ff',
                    '#b3d9ff',
                    '#99ccff',
                    '#80bfff',
                    '#66b2ff',
                    '#4da6ff',
                    '#3399ff',
                    '#1a8cff',
                    '#0080ff',
                    '#0066cc',
                    '#004d99',
                    '#003366',
                  ]
                : [
                    '#000000',
                    '#1a1a1a',
                    '#333333',
                    '#4d4d4d',
                    '#666666',
                    '#808080',
                    '#999999',
                    '#b3b3b3',
                    '#cccccc',
                    '#e6e6e6',
                  ],
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: false,
            speed: 0.3,
            straight: false,
            path: {
              enable: true,
              delay: {
                value: 0.1,
              },
              options: {
                size: 50,
                draw: false,
                increment: 0.001,
              },
            },
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 700,
          },
          opacity: {
            value: { min: 0.1, max: 0.9 },
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 0.5, max: 2 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          twinkle: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            direction: 'random',
            animation: {
              enable: true,
              speed: 2,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                enable: true,
                opacity: 0.2,
              },
              particles: {
                enable: true,
                number: 20,
              },
            },
            push: {
              quantity: 10,
            },
          },
        },
        detectRetina: true,
        background: {
          color: 'transparent',
        },
        fullScreen: false,
      }}
    />
  );
}
