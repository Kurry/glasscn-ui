import "../src/globals.css";
import "./preview.css";

import type { Preview } from "@storybook/react";
import * as darkModeConstants from "./addons/toggle-dark-mode/addon-constants";

const preview: Preview = {
  parameters: {
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
