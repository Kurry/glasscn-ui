import { addons } from "@storybook/manager-api";
import registerDarkModeAddon from "./addons/toggle-dark-mode/addon-setup";
import customTheme from "./theme";

addons.setConfig({
  theme: customTheme,
});

// Register the addon
registerDarkModeAddon();
