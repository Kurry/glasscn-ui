# glasscn-ui

Themable shadcn/ui component library with glassmorphism variants, and extra components like the Circular Progress.

## Comparison with shadcn/ui

### Key Differences from shadcn/ui

Apart from all components being now part of a component library, these are the main differences:

1. Glassmorphic variants for components with solid surfaces
2. Improved color options and management: Additional color aliases and easier color switching. More consistent color
   usage, specially with gray and primary/accent colors.
3. New components like CircularProgress, ComboBox, DotIndicator, and HeadingTitle.
4. Customizable blur effects for glassmorphic component variants.
5. Improved button styles and variants.
6. Enhanced toast notifications.

### Better readability and maintainability

- Component classes are defined at the top of each file, and chopped down into shorter lines to make them more readable
  and maintainable.
- Color aliases for primary, secondary, gray, danger and warning colors. Easy to identify and refactor.
- `createTailwindPreset()`: Switch your theme colors quickly, without having to rewrite CSS vars or classes.

### New components

- ComboBox (basically is a combination of Command and Popover elements)
- Dot Indicator (special badge with 1/1 ratio, e.g. for notification counters)
- Heading Title (with gradient variants)
- Circular Progress

### Upcoming components

- Submit Button, with loading indicator and using useFormStatus under the hood (will need React 19).

### Component changes

- Button: Added `color` and `radius` props.
- Toast: Allows up to 3 toast notifications to be shown at once. Improved spacing between them.

Many components having a solid color (for example buttons), will now have a `color` prop to change the color to one of
`default` (gray), `primary`, `secondary`, `danger` or `warning`.

### Opt-in Glassmorphic Style

All components that are containers, dialogs or popovers, and have a solid surface / background color will now have these
new props to transform them into a glassmorphic style:

- `variant`: `default` or `glass`.
- `blur`: Allows to customize the blur radius, e.g. `xl`. Same values as `backdrop-blur-*` classes.

## Installation

This is a Tailwind CSS component library, so you need to install the package, adjust your `tailwind.config.js|ts`
configuration and some global styles.

```bash
npm install glasscn-ui
```

### Tailwind CSS configuration

```js
import { createTailwindPreset } from 'glasscn-ui'

// Example preset configuration (config object is optional)
const glasscnPreset = createTailwindPreset({
  baseRadius: '0.5em',
  colors: {
    // For primary, secondary, gray, danger and warning colors,
    // you can use any Tailwind color name, or a custom color palette.
    primary: 'blue',
    secondary: 'yellow',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    danger: 'red',
    warning: 'yellow',
    background: {
      light: '#ffffff',
      dark: '#000000',
    },
    foreground: {
      light: '#000000',
      dark: '#ffffff',
    },
    foregroundMuted: {
      light: '#9ca3af',
      dark: '#6b7280',
    },
    border: {
      light: '#d1d5db',
      dark: '#374151',
    },
    borderMuted: {
      light: '#e5e7eb',
      dark: '#4b5563',
    },
  },
})

export default {
  content: [
    // ...
    './node_modules/glasscn-ui/dist/index.js', // tell Tailwind's JIT to also include glasscn-ui's classes.
  ],
  presets: [glasscnPreset],
}
```

### Global styles

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: theme('colors.background.light');
    --background-muted: theme('colors.background.muted.light');
    --foreground: theme('colors.foreground.light');
    --foreground-muted: theme('colors.foreground.muted.light');
    --border: theme('colors.border.light');
    --border-muted: theme('colors.border.muted.light');
  }

  .dark {
    --background: theme('colors.background.dark');
    --background-muted: theme('colors.background.muted.dark');
    --foreground: theme('colors.foreground.dark');
    --foreground-muted: theme('colors.foreground.muted.dark');
    --border: theme('colors.border.dark');
    --border-muted: theme('colors.border.muted.dark');
  }

  *,
  ::before,
  ::after {
    border-color: var(--border);
  }

  * {
    box-sizing: border-box;
    position: relative;
  }

  [hidden] {
    display: none;
  }

  [inert] {
    pointer-events: none;
    user-select: none;
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: var(--background);
    color: var(--foreground);
  }
}
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

Component libraries are easier to install and to get updates from, with the downside that they are harder to customize.

You have many customization options via the `createTailwindPreset()` function, but if you need to modify the components,
you will need to copy-paste their code into your own project instead of importing them from the library.

## Roadmap

### Support for glassmorphic variants

Containers and popovers:

- [x] Alert
- [x] AlertDialog
- [x] Card
- [ ] Combobox
- [x] Command
- [x] ContextMenu
- [x] Dialog
- [x] Drawer
- [x] DropdownMenu
- [x] HoverCard
- [ ] MenuBar
- [ ] NavigationMenu
- [ ] Popover
- [ ] Select
- [ ] Sheet
- [ ] Toast
- [ ] Tooltip

Button-like:

- [ ] Tabs
- [ ] Toggle
- [ ] ToggleGroup
