export const recipeStyles = {
  glassBorder: ["border-gray-200/60 dark:border-gray-700/60"],
  glassBg: ["bg-white/70 dark:bg-gray-950/60"],
};

export const glassContainerClasses = [
  ...recipeStyles.glassBorder,
  ...recipeStyles.glassBg,
];

export const blurVariant = {
  default: "",
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
  xl: "backdrop-blur-xl",
  "2xl": "backdrop-blur-2xl",
  "3xl": "backdrop-blur-3xl",
};
