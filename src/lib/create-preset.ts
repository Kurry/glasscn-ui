import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import twColors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";
import type { PluginCreator } from "tailwindcss/types/config";

type PluginAPI = Parameters<PluginCreator>[0];
export type TailwindColor = keyof typeof twColors;

type CustomColorLevel =
  | "DEFAULT"
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950
  | string;
type CustomColor = Record<CustomColorLevel, string>;

type PresetConfig = {
  primaryColor?: TailwindColor | string;
  secondaryColor?: TailwindColor | string;
  grayColor?: TailwindColor | string;
  backgroundColor?: string;
  foregrondColor?: string;
  borderColor?: string;
  customColors?: Record<string, CustomColor | string>;
};

export const createTailwindPreset = ({
  primaryColor = "blue",
  secondaryColor = "fuchsia",
  grayColor = "neutral",
  backgroundColor = "var(--background)",
  foregrondColor = "var(--foreground)",
  borderColor = "var(--border)",
  customColors = {},
}: PresetConfig = {}): Partial<Config> => {
  const _colors = {
    ...twColors,
    ...customColors,
  };
  const preset: Partial<Config> = {
    darkMode: ["class"],
    safelist: ["dark"],
    theme: {
      extend: {
        colors: {
          background: backgroundColor,
          foreground: foregrondColor,
          border: borderColor,
          primary: _colors[primaryColor as TailwindColor],
          secondary: _colors[secondaryColor as TailwindColor],
          gray: _colors[grayColor as TailwindColor],
          danger: _colors.red,
          warn: _colors.yellow,
          twgray: _colors.gray,
          ...customColors,
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
          heading: ["var(--font-heading)", ...fontFamily.sans],
          comic: ["var(--font-comic)", ...fontFamily.sans],
          mono: ["var(--font-mono)", ...fontFamily.mono],
          serif: ["var(--font-serif)", ...fontFamily.serif],
        },
        fontWeight: {
          base: "400",
          heading: "800",
        },
        borderWidth: {
          DEFAULT: "1px",
          3: "3px",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        boxShadow: {
          "inset-white": "inset 0 0 12px rgba(255,255,255,0.80)",
          "inset-gray": "inset 0 0 12px rgba(127,127,127,0.08)",
          "inset-black": "inset 0 0 12px rgba(0,0,0,0.80)",
          "neobrutal-sm": "2px 2px 0px 0px #000",
          neobrutal: "4px 4px 0px 0px #000",
          "neobrutal-lg": "8px 8px 0px 0px #000",
          "halo-cyan": "0 0 40px 4px #00ebffa8",
          "halo-cyan-dark": "0 0 40px 4px #00b6de",
        },
        textShadow: {
          sm: "2px 2px var(--tw-shadow-color, black)",
          DEFAULT: "0 2px 4px var(--tw-shadow-color, black)",
          lg: "0 8px 16px var(--tw-shadow-color, black)",
        },
        spacing: {
          fulldh: "100dvh",
          fulldw: "100dvw",
        },
        keyframes: {
          "accordion-down": {
            from: {
              height: "0",
            },
            to: {
              height: "var(--radix-accordion-content-height)",
            },
          },
          "accordion-up": {
            from: {
              height: "var(--radix-accordion-content-height)",
            },
            to: {
              height: "0",
            },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [
      animatePlugin,
      ({ addVariant }: PluginAPI) => {
        addVariant("starting", "@starting-style");
        addVariant("ios", "@supports (-webkit-touch-callout: none)");
        addVariant("standalone", "@media (display-mode: standalone)");
      },
      ({ matchUtilities, theme }: PluginAPI) => {
        matchUtilities(
          {
            "text-shadow": (value) => ({
              textShadow: value,
            }),
          },
          { values: theme("textShadow") },
        );
      },
    ],
  };

  return preset;
};
