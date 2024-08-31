import AddonComponent from "./addon-component";
import * as darkModeConstants from "./addon-constants";

import { addons, types } from "@storybook/manager-api";

export default function registerDarkModeAddon() {
  // Register the addon
  addons.register(darkModeConstants.ADDON_ID, () => {
    // Register the tool
    addons.add(darkModeConstants.TOOL_ID, {
      type: types.TOOL,
      title: darkModeConstants.TOOL_TITLE,
      match: ({ tabId, viewMode }) => !tabId,
      render: AddonComponent,
      paramKey: darkModeConstants.PARAM_KEY,
      disabled: false,
    });
  });
}
