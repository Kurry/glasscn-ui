import "../src/globals.css";
import "./preview.css";

import type { Preview } from "@storybook/react";
import * as darkModeConstants from "./addons/toggle-dark-mode/addon-constants";
import customTheme from "./theme";

const preview: Preview = {
  parameters: {
    docs: {
      theme: customTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    ...darkModeConstants.globalTypes,
  },
};

export default preview;
