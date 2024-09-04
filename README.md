# glasscn UI

shadcn/ui components with glassmorphism variants, with many extras to make your life easier.

## What's new?

### QoL improvements

- Component classes are defined at the top of each file, and chopped down into shorter lines
  to make them more readable and maintainable.
- Color aliases for primary, secondary, gray, danger and warn colors. Easy to identify and refactor.
- `createTailwindPreset()`: Switch your theme colors quickly, without having to rewrite CSS vars or classes.

### New components

- ComboBox (basically is a combination of Command and Popover elements)
- Dot Indicator (special badge with 1/1 ratio, e.g. for notification counters)
- Heading Title (with gradient variants)
- Submit Button (with loading indicator and using useFormStatus under the hood)

### Component changes

- Button: Added `color` and `radius` props.
- Toast: Allows up to 3 toast notifications to be shown at once. Improved spacing between them.

Many components having a solid color (for example buttons), will now have a `color` prop to change the color to one of
`default` (gray), `primary`, `secondary`, `danger` or `warn`.

### Opt-in Glassmorphic Style

All components that have a solid surface / background color will now have these new props to transform them into
a glassmorphic style:

- `variant`: `default` or `glass`.
- `blur`: Allows to customize the blur radius, e.g. `xl`. Same values as `backdrop-blur-*` classes.

## Installation

This is a Tailwind CSS component library, so you need to install the package,
and also adjust your `tailwind.config.js|ts` configuration.

```bash
npm install glasscn-ui
```

### Tailwind CSS configuration

```js
import { createTailwindPreset } from "@itsjavi/glasscn-ui";

// Example preset configuration (config object is optional)
const glasscnPreset = createTailwindPreset({
  baseRadius: "0.5em",
  colors: {
    // For primary, secondary, gray, danger and warn colors,
    // you can use any Tailwind color name, or a custom color palette.
    primary: "blue",
    secondary: "yellow",
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    danger: "red",
    warn: "yellow",
    background: {
      light: "#ffffff",
      dark: "#000000",
    },
    foreground: {
      light: "#000000",
      dark: "#ffffff",
    },
    foregroundMuted: {
      light: "#9ca3af",
      dark: "#6b7280",
    },
    border: {
      light: "#d1d5db",
      dark: "#374151",
    },
    borderMuted: {
      light: "#e5e7eb",
      dark: "#4b5563",
    },
  },
});

export default {
  content: [
    // ...
    "./node_modules/glasscn-ui/dist/index.js", // tell Tailwind's JIT to also include glasscn-ui's classes.
  ],
  presets: [glasscnPreset],
};
```

## What components are not included?

In order to reduce the amount of dependencies and the bundle size and complexity, some components are not included:

- Calendar
- Carousel
- Chart(s)
- Form
- Sonner

If you need these components, install them from the original shadcn/ui.

## Customization

You can customize the preset, but if you want to customize the components default styles or behavior, you will need to
copy-paste their code into your own project.
