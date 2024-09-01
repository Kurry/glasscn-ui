import { addons } from "@storybook/manager-api";
import registerDarkModeAddon from "./addons/toggle-dark-mode/addon-setup";
import customTheme from "./theme";

// https://storybook.js.org/docs/configure/user-interface/features-and-behavior
addons.setConfig({
  theme: customTheme,
  // sidebar: {
  //   showRoots: false,
  //   collapsedRoots: ["other", "Default", "default", "UI", "Blocks"],
  // },
});

registerDarkModeAddon();
