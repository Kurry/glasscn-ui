import type { Config } from "tailwindcss";
import { createTailwindPreset } from "./src/lib/create-preset";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,md,mdx}", "./stories/**/*.{ts,tsx,md,mdx}"],
  presets: [createTailwindPreset({ 
    baseRadius: '0.5rem', // The system's standard corner radius
    colors: { 
      primary: 'blue',    // Brand accent (OKLCH 62.3% .214 259.815)
      secondary: 'sky',   // Light & Glow colors
      gray: 'zinc',       // Neutral palette as specified in the design system
      accent: 'blue',     // Same as primary by default
      danger: 'red',      // Semantic colors
      warning: 'yellow',
      success: 'emerald',
      background: {
        light: '#ffffff', // Material (White) - reflective surface
        dark: '#18181B',  // Material (Black) - light-absorbent surface
      },
      foreground: {
        light: '#18181B', // Primary Dark / Headline text
        dark: '#ffffff',  // Material (White)
      },
      foregroundMuted: {
        light: '#71717A', // Muted text (zinc-500)
        dark: '#a1a1aa',  // Muted text (zinc-400)
      },
      border: {
        light: '#d4d4d8', // Primary border (zinc-300)
        dark: '#3f3f46',  // Dark mode border (zinc-700)
      },
      borderMuted: {
        light: '#e4e4e7', // Secondary border (zinc-200)
        dark: '#52525b',  // Dark mode secondary border (zinc-600)
      }
    } 
  })],
  theme: {
    extend: {
      // The Elevation System (Shadows)
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // Level 1 - subtle lift
        'edge': '0 0 0 1px rgba(0, 0, 0, 0.05)', // Precision hairline edge
        'glass-edge': '0 0 0 1px rgba(255, 255, 255, 0.05)', // Precision edge (dark)
        'glow': '0 0 40px rgba(173, 216, 255, 0.5)', // Decorative blue glow
        'inset-glow': 'inset 0 0 30px rgba(255, 255, 255, 0.4)', // Interior light source
      },
      // Z-Axis Spatial Hierarchy
      zIndex: {
        'canvas': '0',    // The background layer
        'surface': '10',  // Opaque UI cards and content
        'glass': '20',    // Glass panels (navbars, sidebars)
        'popover': '30',  // Tooltips and menus
        'modal': '40',    // Dialogs and critical overlays
      },
      // Interaction System (Transforms & Transitions)
      translate: {
        '-0.5': '-0.125rem', // Button hover lift effect
      },
      scale: {
        '98': '0.98',     // Button press effect
      },
      transitionDuration: {
        '300': '300ms',   // For larger panels transition
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'circular-stroke': 'circular-stroke 0.5s ease-out',
        'agent-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      // Glass Material System
      backdropBlur: {
        'xs': '4px',      // Light glass effect
        'sm': '8px',      // Medium glass effect
        'md': '12px',     // Standard glass effect
        'lg': '16px',     // Strong glass effect (standard for glass panels)
        'xl': '24px',     // Very strong glass effect
      },
    },
  },
};

export default config;