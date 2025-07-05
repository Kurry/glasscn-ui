import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Creates a set of classes for a UI card with the Architectural Glass design style
 * 
 * @param variant - 'solid' for opaque card or 'glass' for translucent panel
 * @param elevated - Whether to add elevation shadow (for floating UI elements)
 * @param hasBorder - Whether to add a border (additional to the shadow edge)
 * @returns A string of CSS classes
 */
export function createSurface(
  variant: 'solid' | 'glass' = 'solid',
  elevated: boolean = false,
  hasBorder: boolean = false
): string {
  const baseClasses = ['rounded-lg']
  
  // Add border if requested
  if (hasBorder) {
    baseClasses.push('border border-gray-300 dark:border-gray-700')
  }
  
  // Add material-specific classes
  if (variant === 'glass') {
    // Glass material
    baseClasses.push('bg-white/75 dark:bg-gray-950/50 backdrop-blur-lg')
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
  
  return baseClasses.join(' ')
}

/**
 * Creates a set of classes for interactive buttons based on the Architectural Glass design
 * 
 * @param variant - 'primary', 'secondary', or 'outline'
 * @returns A string of CSS classes
 */
export function createButton(variant: 'primary' | 'secondary' | 'outline' = 'primary'): string {
  const baseClasses = [
    'rounded-md font-medium transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600',
    'hover:-translate-y-0.5 active:scale-98'
  ]
  
  if (variant === 'primary') {
    baseClasses.push('bg-black text-white hover:bg-black/90')
  } else if (variant === 'secondary') {
    baseClasses.push('bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700')
  } else {
    baseClasses.push('border border-gray-300 bg-white hover:bg-gray-100 text-gray-900')
    baseClasses.push('dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-800 dark:text-gray-50')
    baseClasses.push('backdrop-blur-sm')
  }
  
  return baseClasses.join(' ')
}
