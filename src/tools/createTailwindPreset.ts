import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import twColors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";
import type { PluginCreator } from "tailwindcss/types/config";

type PluginAPI = Parameters<PluginCreator>[0];
export type TailwindColor = keyof typeof twColors;

type PresetConfig = {
  primaryColor?: TailwindColor;
  secondaryColor?: TailwindColor;
  grayColor?: TailwindColor;
  backgroundColor?: string;
  foregrondColor?: string;
  borderColor?: string;
};

export const createTailwindPreset = ({
  primaryColor = "blue",
  secondaryColor = "fuchsia",
  grayColor = "neutral",
  backgroundColor = "var(--background)",
  foregrondColor = "var(--foreground)",
  borderColor = "var(--border)",
}: PresetConfig = {}): Partial<Config> => {
  const preset: Partial<Config> = {
    darkMode: ["class"],
    safelist: ["dark"],
    theme: {
      extend: {
        colors: {
          background: backgroundColor,
          foreground: foregrondColor,
          border: borderColor,
          primary: twColors[primaryColor],
          secondary: twColors[secondaryColor],
          gray: twColors[grayColor],
          twgray: twColors.gray,
        },
        // backdropBlur: {
        //   DEFAULT: "12px",
        // },
        // backgroundOpacity: {
        //   DEFAULT: "0.1",
        // },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
          heading: ["var(--font-heading)", ...fontFamily.sans],
          comic: ["var(--font-comic)", ...fontFamily.sans],
          mono: ["var(--font-mono)", ...fontFamily.mono],
          serif: ["var(--font-serif)", ...fontFamily.serif],
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
