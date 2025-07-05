import type { Config } from "tailwindcss";
import { createTailwindPreset } from "./src/lib/create-preset";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,md,mdx}", "./stories/**/*.{ts,tsx,md,mdx}"],
  presets: [createTailwindPreset({
    baseRadius: '0.5rem', 
    colors: { 
      primary: 'blue',
      secondary: 'sky',
      gray: 'zinc',
      accent: 'blue',
      danger: 'red',
      warning: 'yellow',
      success: 'emerald',
      background: {
        light: '#ffffff',
        dark: '#18181B',
      },
      foreground: {
        light: '#18181B',
        dark: '#ffffff',
      },
      foregroundMuted: {
        light: '#71717A',
        dark: '#a1a1aa',
      },
      border: {
        light: '#d4d4d8',
        dark: '#3f3f46',
      },
      borderMuted: {
        light: '#e4e4e7',
        dark: '#52525b',
      },
      ring: {
        light: '#2563eb', // Focus ring color - blue-600
        dark: '#3b82f6', // Focus ring color dark mode - blue-500
      },
      ringOffset: {
        light: '#ffffff',
        dark: '#18181B',
      }
    } 
  })],
  theme: {
    extend: {
      boxShadow: {
        'xs': 'var(--shadow-sm)',
        'edge': 'var(--shadow-edge)',
        'glass-edge': 'var(--shadow-edge)',
        'glow': '0 0 40px rgba(173, 216, 255, 0.5)',
        'inset-white': 'inset 0 0 30px rgba(255, 255, 255, 0.4)',
        'inset-gray': 'inset 0 0 20px rgba(127, 127, 127, 0.08)',
        'inset-black': 'inset 0 0 20px rgba(0, 0, 0, 0.1)',
      },
      zIndex: {
        'canvas': 'var(--z-canvas)',
        'surface': 'var(--z-surface)',
        'glass': 'var(--z-glass)',
        'popover': 'var(--z-popover)',
        'modal': 'var(--z-modal)',
      },
      translate: {
        '-0.5': '-0.125rem',
      },
      scale: {
        '98': '0.98',
      },
      transitionDuration: {
        '300': '300ms',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'circular-stroke': 'circular-stroke 0.5s ease-out',
        'agent-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'agent-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': 'var(--glass-blur)',
        'xl': '24px',
      },
      textShadow: {
        'sm': '1px 1px 2px var(--tw-shadow-color, rgba(0,0,0,0.1))',
        'DEFAULT': '2px 2px 4px var(--tw-shadow-color, rgba(0,0,0,0.1))',
        'lg': '4px 4px 8px var(--tw-shadow-color, rgba(0,0,0,0.1))',
      },
    },
  },
  plugins: [
    function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
}

export default config;