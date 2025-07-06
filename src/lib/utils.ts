import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Defines the architectural structure of a UI surface based on the Digital Materiality system.
 *
 * @param variant - The material type: 'solid' creates an opaque card, 'glass' creates a translucent panel
 * @param elevated - Whether to add elevation shadow for floating UI elements
 * @param hasBorder - Whether to include a visible border in addition to the shadow edge
 * @returns A string of tailwind classes that define the surface
 */
export function createSurface(
  variant: 'solid' | 'glass' = 'solid',
  elevated: boolean = false,
  hasBorder: boolean = false,
  innerGlow: boolean = false,
): string {
  const baseClasses = ['rounded-lg']

  // Add border if requested
  if (hasBorder) {
    baseClasses.push('border border-gray-300 dark:border-gray-700')
  }

  // Add material-specific classes
  if (variant === 'glass') {
    // Glass material
    baseClasses.push('bg-white/75 dark:bg-gray-950/50')
    baseClasses.push('backdrop-blur-lg')
    baseClasses.push(elevated ? 'shadow-lg' : 'shadow-sm')
    baseClasses.push('z-glass')
  } else {
    // Solid material
    baseClasses.push('bg-white dark:bg-gray-950')
    baseClasses.push(elevated ? 'shadow-lg' : 'shadow-sm')
    baseClasses.push('z-surface')
  }

  // Add hairline edge effect
  baseClasses.push('ring-1 ring-black/5 dark:ring-white/5')

  // Add inner glow for glass surfaces if requested
  if (innerGlow && variant === 'glass') {
    baseClasses.push('shadow-[inset_0_0_30px_rgba(255,255,255,0.1)]')
  }

  return baseClasses.join(' ')
}

/**
 * Creates a set of classes for interactive buttons based on the Architectural Glass design
 *
 * @param variant - 'primary', 'secondary', or 'outline'
 * @param size - Size of the button: 'sm', 'md', 'lg'
 * @returns A string of CSS classes
 */
export function createButton(
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary',
  size: 'sm' | 'md' | 'lg' = 'md',
): string {
  const baseClasses = [
    'rounded-md inline-flex items-center justify-center font-medium transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600',
    'hover:-translate-y-0.5 active:scale-98',
  ]

  // Size classes
  if (size === 'sm') {
    baseClasses.push('px-3 py-1.5 text-sm')
  } else if (size === 'md') {
    baseClasses.push('px-4 py-2 text-sm')
  } else {
    // lg
    baseClasses.push('px-6 py-3 text-base')
  }

  // Variant classes
  if (variant === 'primary') {
    baseClasses.push('bg-black text-white hover:bg-black/90')
  } else if (variant === 'secondary') {
    baseClasses.push(
      'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700',
    )
  } else if (variant === 'outline') {
    baseClasses.push('border border-gray-300 bg-white hover:bg-gray-100 text-gray-900')
    baseClasses.push('dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-800 dark:text-gray-50')
    baseClasses.push('backdrop-blur-sm')
  } else if (variant === 'ghost') {
    baseClasses.push('bg-transparent hover:bg-gray-100 text-gray-900')
    baseClasses.push('dark:hover:bg-gray-800 dark:text-gray-50')
  }

  return baseClasses.join(' ')
}
