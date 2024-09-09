import "../src/globals.css";
import "./preview.css";

import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import customTheme from "./theme";

const preview: Preview = {
  parameters: {
    docs: {
      theme: customTheme,
      controls: { exclude: ["onClick", "children", "asChild"] },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
      },
    },
    backgrounds: {
      default: "",
      values: [
        {
          name: "bg-background",
          value: "var(--background)",
        },
        {
          name: "black",
          value: "#000000",
        },
        {
          name: "gray",
          value: "#808080",
        },
        {
          name: "white",
          value: "#ffffff",
        },
      ],
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
      // lightGlass: "light glass",
      // darkGlass: "dark glass",
    },
    defaultTheme: "dark",
  }),
];

export default preview;
