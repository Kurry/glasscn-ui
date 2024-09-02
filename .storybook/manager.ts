import { addons } from "@storybook/manager-api";
import customTheme from "./theme";

// https://storybook.js.org/docs/configure/user-interface/features-and-behavior
addons.setConfig({
  theme: customTheme,
});
