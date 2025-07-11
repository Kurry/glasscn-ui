/**
 * Digital Materiality Recipe
 *
 * A collection of utilities for implementing the Architectural Glass design system
 * following the principles of Digital Materiality.
 *
 * This defines the physics system of the UI with precise rules for:
 * - Material properties (opacity, blur, etc)
 * - Edge treatment
 * - Elevation
 * - Interaction patterns
 */

import { cva } from 'class-variance-authority'

/**
 * Material Surface
 *
 * The core building block for all UI surfaces - cards, panels, etc.
 * Implements both solid surfaces and glass panels.
 */
export const materialSurface = cva(
  // Base styles for all surfaces
  ['rounded-lg', 'transition-all duration-300'],
  {
    variants: {
      // Material type
      material: {
        // Solid, opaque surfaces for content containers
        solid: ['bg-white dark:bg-gray-900'],
        // Translucent glass panels for UI chrome
        glass: ['bg-white/75 dark:bg-gray-900/75', 'backdrop-blur-lg'],
      },
      // Elevation level
      elevation: {
        none: '',
        low: 'shadow-sm', // Default subtle lift
        medium: 'shadow-md', // Hover state elevation
        high: 'shadow-lg', // Floating UI chrome
        highest: 'shadow-xl', // Modals & critical pop-ups
      },
      // Edge treatment
      edge: {
        none: '',
        hairline: 'ring-1 ring-black/5 dark:ring-white/10', // Precision edge
        border: 'border border-gray-200 dark:border-gray-800', // Traditional border
        both: ['ring-1 ring-black/5 dark:ring-white/10', 'border border-gray-200 dark:border-gray-800'],
      },
      // Internal shadows for depth
      innerGlow: {
        none: '',
        light: 'shadow-[inset_0_0_30px_rgba(255,255,255,0.4)]',
        dark: 'dark:shadow-[inset_0_0_30px_rgba(255,255,255,0.1)]',
      },
    },
    // Default configuration
    defaultVariants: {
      material: 'solid',
      elevation: 'low',
      edge: 'hairline',
      innerGlow: 'none',
    },
    compoundVariants: [
      // Glass panels always have higher elevation
      {
        material: 'glass',
        elevation: 'low',
        className: 'shadow-lg',
      },
      {
        material: 'glass',
        elevation: 'high',
        className: 'shadow-xl',
      },
    ],
  },
)

/**
 * Interactive Element
 *
 * The base for all interactive controls following the design system's
 * interaction physics model.
 */
export const interactiveElement = cva(
  // Base styles for all interactive elements
  [
    'transition-all',
    'duration-150',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-blue-600',
    'dark:focus-visible:ring-blue-500',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
  ],
  {
    variants: {
      // Interactive hover lift
      hover: {
        none: '',
        lift: 'hover:-translate-y-0.5',
      },
      // Interactive press effect
      press: {
        none: '',
        scale: 'active:scale-98',
      },
    },
    defaultVariants: {
      hover: 'lift',
      press: 'scale',
    },
  },
)

/**
 * Spatial Layering
 *
 * Enforces the z-index hierarchy for proper spatial relationships
 */
export const spatialLayer = cva('', {
  variants: {
    layer: {
      canvas: 'z-0', // Base canvas
      surface: 'z-10', // Opaque surfaces
      glass: 'z-20', // Glass UI chrome
      popover: 'z-30', // Popovers & tooltips
      modal: 'z-40', // Dialogs & critical overlays
    },
  },
  defaultVariants: {
    layer: 'surface',
  },
})

/**
 * Blur Effect
 *
 * Applies the appropriate blur based on context
 * IMPORTANT: backdrop-blur is non-destructive and should be used for UI
 * The direct blur effect should ONLY be used for decorative elements!
 */
export const blurEffect = cva('', {
  variants: {
    type: {
      none: '',
      backdrop: '', // For functional UI glass (non-destructive)
      direct: '', // For decorative elements ONLY (destructive)
    },
    strength: {
      none: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
  },
  compoundVariants: [
    // Backdrop blur (for UI glass - preserves content clarity)
    { type: 'backdrop', strength: 'sm', className: 'backdrop-blur-sm' },
    { type: 'backdrop', strength: 'md', className: 'backdrop-blur-md' },
    { type: 'backdrop', strength: 'lg', className: 'backdrop-blur-[var(--glass-blur)]' },
    { type: 'backdrop', strength: 'xl', className: 'backdrop-blur-xl' },

    // Direct blur (for decorative elements ONLY)
    { type: 'direct', strength: 'sm', className: 'blur-[1px]' },
    { type: 'direct', strength: 'md', className: 'blur-[2px]' },
    { type: 'direct', strength: 'lg', className: 'blur-[3px]' },
    { type: 'direct', strength: 'xl', className: 'blur-[4px]' },
  ],
  defaultVariants: {
    type: 'none',
    strength: 'none',
  },
})
