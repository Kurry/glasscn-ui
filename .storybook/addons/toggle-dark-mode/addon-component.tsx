// biome-ignore lint/style/useImportType: <explanation>
import React, { memo, useCallback, useEffect } from "react";

import { IconButton } from "@storybook/components";
import { MoonIcon } from "@storybook/icons";
import { useGlobals, useStorybookApi } from "@storybook/manager-api";

import * as darkModeConstants from "./addon-constants";

function updateDarkModeClass(isEnabled: boolean) {
  const iframe = document.getElementById(
    "storybook-preview-iframe",
  ) as HTMLIFrameElement | null;
  if (iframe?.contentDocument) {
    const iframeDocument = iframe.contentDocument;
    if (isEnabled) {
      iframeDocument.documentElement.classList.add("dark");
    } else {
      iframeDocument.documentElement.classList.remove("dark");
    }
  }
}

const AddonComponent: React.FC = memo(function DarkModeToggle() {
  const [globals, updateGlobals] = useGlobals();
  const api = useStorybookApi();

  const paramValue = globals[darkModeConstants.PARAM_KEY];
  const isEnabled = [true, "true"].includes(paramValue);

  useEffect(() => {
    updateDarkModeClass(isEnabled);
  }, [isEnabled]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const toggleParam = useCallback(() => {
    updateGlobals({
      [darkModeConstants.PARAM_KEY]: !isEnabled,
    });
  }, [isEnabled]);

  useEffect(() => {
    api.setAddonShortcut(darkModeConstants.ADDON_ID, {
      label: darkModeConstants.TOOL_LABEL,
      defaultShortcut: ["D"],
      actionName: "outline",
      showInMenu: false,
      action: toggleParam,
    });
  }, [toggleParam, api]);

  return (
    <IconButton
      key={darkModeConstants.TOOL_ID}
      active={isEnabled}
      title={darkModeConstants.TOOL_TITLE}
      onClick={toggleParam}
    >
      <MoonIcon />
    </IconButton>
  );
});

export default AddonComponent;
