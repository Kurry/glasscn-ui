import type { Config } from "tailwindcss";
import { createTailwindPreset } from "./src/lib/create-preset";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,md,mdx}", "./stories/**/*.{ts,tsx,md,mdx}"],
  presets: [createTailwindPreset({ colors: { gray: "slate" } })],
};

export default config;
