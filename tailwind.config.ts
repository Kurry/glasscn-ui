import type { Config } from "tailwindcss";
import { createTailwindPreset } from "./src/lib/create-preset";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,md,mdx}", "./stories/**/*.{ts,tsx,md,mdx}"],
  presets: [createTailwindPreset({ colors: { gray: "slate" } })],
  theme: {
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'circular-stroke': 'circular-stroke 0.5s ease-out',
        'agent-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
};

export default config;