import type { Config } from "tailwindcss";
import { createTailwindPreset } from "./src/tools/createTailwindPreset";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,md,mdx}"],
  presets: [createTailwindPreset()],
};

export default config;
