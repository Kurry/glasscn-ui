import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'
import { SpinnerIcon } from '../icons/spinner-icon'

const twStyles = {
  base: [
    'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium',
    'transition-all duration-150 focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    'ring-offset-white focus-visible:ring-blue-600',
    'dark:ring-offset-gray-950 dark:focus-visible:ring-blue-500',
    'hover:-translate-y-0.5 active:scale-[0.98]',
  ],
  variant: {
    default: [
      'bg-gray-900 text-white shadow-sm hover:bg-gray-800 hover:shadow-md',
      'dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100',
    ],
    subtle: [
      'bg-white ring-1 ring-black/5 shadow-sm text-gray-900 hover:bg-gray-50 hover:shadow-md',
      'dark:bg-gray-900 dark:ring-white/10 dark:text-white dark:hover:bg-gray-800',
    ],
    outline: [
      'bg-white/75 backdrop-blur-lg ring-1 ring-black/5 shadow-sm',
      'text-gray-900 hover:bg-white hover:shadow-md',
      'dark:bg-gray-900/75 dark:ring-white/10 dark:text-white dark:hover:bg-gray-900',
    ],
    ghost: [
      'hover:bg-gray-100 hover:text-gray-900',
      'dark:hover:bg-gray-800 dark:hover:text-white',
    ],
    link: [
      'text-gray-900 underline decoration-gray-400 decoration-dotted underline-offset-4 hover:decoration-solid',
      'dark:text-white dark:decoration-gray-600',
      'hover:translate-y-0 active:scale-100',
    ],
  },
  colors: {
    primary: [
      'focus-visible:ring-blue-600',
      'dark:focus-visible:ring-blue-500',
    ],
    secondary: [
      'focus-visible:ring-secondary-600',
      'dark:focus-visible:ring-secondary-500',
    ],
    accent: [
      'focus-visible:ring-accent-600',
      'dark:focus-visible:ring-accent-500',
    ],
    danger: [
      'focus-visible:ring-red-600',
      'dark:focus-visible:ring-red-500',
    ],
    warning: [
      'focus-visible:ring-amber-600',
      'dark:focus-visible:ring-amber-500',
    ],
  },
  colorVariants: {
    primary: {
      default: [
        'bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-blue-600/30',
        'dark:bg-blue-600 dark:hover:bg-blue-700',
      ],
      subtle: [
        'bg-blue-50 text-blue-700 ring-1 ring-blue-200 hover:bg-blue-100',
        'dark:bg-blue-950/50 dark:text-blue-400 dark:ring-blue-800 dark:hover:bg-blue-950/70',
      ],
      outline: [
        'bg-white/75 backdrop-blur-lg ring-1 ring-blue-200 text-blue-700',
        'hover:bg-blue-50 hover:ring-blue-300',
        'dark:bg-gray-900/75 dark:ring-blue-800 dark:text-blue-400',
        'dark:hover:bg-blue-950/50',
      ],
      ghost: [
        'hover:bg-blue-50 hover:text-blue-700',
        'dark:hover:bg-blue-950/50 dark:hover:text-blue-400',
      ],
      link: [
        'text-blue-600 underline decoration-blue-400 decoration-dotted underline-offset-4 hover:decoration-solid',
        'dark:text-blue-400 dark:decoration-blue-600',
      ],
    },
    secondary: {
      default: [
        'bg-secondary-600 text-white hover:bg-secondary-600/90',
        'dark:bg-secondary-600 dark:text-white dark:hover:bg-secondary-600/90',
      ],
      subtle: [
        'bg-secondary-100 text-secondary-900 hover:bg-secondary-100/80',
        'dark:bg-secondary-800 dark:text-secondary-50 dark:hover:bg-secondary-800/80',
      ],
      outline: [
        'border border-secondary-300 bg-white hover:bg-secondary-100 text-secondary-900 hover:text-secondary-900',
        'dark:border-secondary-800 dark:bg-secondary-950 dark:hover:bg-secondary-800',
        'dark:text-secondary-50 dark:hover:text-secondary-50',
      ],
      ghost: [
        'hover:bg-secondary-100 hover:text-secondary-900',
        'dark:hover:bg-secondary-800 dark:hover:text-secondary-50',
      ],
      link: [
        'text-secondary-700 underline decoration-current decoration-dotted underline-offset-4 hover:decoration-solid',
        'dark:text-secondary-500 dark:decoration-current',
      ],
    },
    accent: {
      default: [
        'bg-accent-600 text-white hover:bg-accent-600/90',
        'dark:bg-accent-600 dark:text-white dark:hover:bg-accent-600/90',
      ],
      subtle: [
        'bg-accent-100 text-accent-900 hover:bg-accent-100/80',
        'dark:bg-accent-800 dark:text-accent-50 dark:hover:bg-accent-800/80',
      ],
      outline: [
        'border border-accent-300 bg-white hover:bg-accent-100 text-accent-900 hover:text-accent-900',
        'dark:border-accent-800 dark:bg-accent-950 dark:hover:bg-accent-800',
        'dark:text-accent-50 dark:hover:text-accent-50',
      ],
      ghost: ['hover:bg-accent-100 hover:text-accent-900', 'dark:hover:bg-accent-800 dark:hover:text-accent-50'],
      link: [
        'text-accent-700 underline decoration-current decoration-dotted underline-offset-4 hover:decoration-solid',
        'dark:text-accent-500 dark:decoration-current',
      ],
    },
    danger: {
      default: [
        'bg-danger-600 text-white hover:bg-danger-600/90',
        'dark:bg-danger-600 dark:text-white dark:hover:bg-danger-600/90',
      ],
      subtle: [
        'bg-danger-100 text-danger-900 hover:bg-danger-100/80',
        'dark:bg-danger-800 dark:text-danger-50 dark:hover:bg-danger-800/80',
      ],
      outline: [
        'border border-danger-300 bg-white hover:bg-danger-100 text-danger-900 hover:text-danger-900',
        'dark:border-danger-800 dark:bg-danger-950 dark:hover:bg-danger-800',
        'dark:text-danger-50 dark:hover:text-danger-50',
      ],
      ghost: ['hover:bg-danger-100 hover:text-danger-900', 'dark:hover:bg-danger-800 dark:hover:text-danger-50'],
      link: [
        'text-danger-700 underline decoration-current decoration-dotted underline-offset-4 hover:decoration-solid',
        'dark:text-danger-500 dark:decoration-current',
      ],
    },
    warning: {
      default: [
        'bg-warning-500 text-black hover:bg-warning-500/90',
        'dark:bg-warning-500 dark:text-black dark:hover:bg-warning-500/90',
      ],
      subtle: [
        'bg-warning-100 text-warning-900 hover:bg-warning-100/80',
        'dark:bg-warning-700 dark:text-warning-50 dark:hover:bg-warning-700/80',
      ],
      outline: [
        'border border-warning-300 bg-white hover:bg-warning-100 text-warning-900 hover:text-warning-900',
        'dark:border-warning-800 dark:bg-warning-950 dark:hover:bg-warning-800',
        'dark:text-warning-50 dark:hover:text-warning-50',
      ],
      ghost: ['hover:bg-warning-100 hover:text-warning-900', 'dark:hover:bg-warning-700 dark:hover:text-warning-50'],
      link: [
        'text-warning-700 underline decoration-current decoration-dotted underline-offset-4 hover:decoration-solid',
        'dark:text-warning-500 dark:decoration-current',
      ],
    },
  },
}

const buttonVariants = cva(cn(twStyles.base), {
  variants: {
    variant: {
      default: cn(twStyles.variant.default),
      subtle: cn(twStyles.variant.subtle),
      outline: cn(twStyles.variant.outline),
      ghost: cn(twStyles.variant.ghost),
      link: cn(twStyles.variant.link),
    },
    color: {
      default: '',
      primary: cn(twStyles.colors.primary),
      secondary: cn(twStyles.colors.secondary),
      accent: cn(twStyles.colors.accent),
      danger: cn(twStyles.colors.danger),
      warning: cn(twStyles.colors.warning),
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded',
      default: 'rounded-lg',
      lg: 'rounded-xl',
      xl: 'rounded-2xl',
      '2xl': 'rounded-3xl',
      '3xl': 'rounded-[2rem]',
      full: 'rounded-full',
    },
    size: {
      sm: 'h-8 px-3',
      default: 'h-10 px-4 py-2',
      lg: 'h-12 px-5 text-md',
      xl: 'h-14 px-7 text-md',
      icon: 'h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    color: 'default',
    radius: 'default',
  },
  compoundVariants: [
    // primary color variants
    {
      variant: 'default',
      color: 'primary',
      className: cn(twStyles.colorVariants.primary.default),
    },
    {
      variant: 'subtle',
      color: 'primary',
      className: cn(twStyles.colorVariants.primary.subtle),
    },
    {
      variant: 'outline',
      color: 'primary',
      className: cn(twStyles.colorVariants.primary.outline),
    },
    {
      variant: 'ghost',
      color: 'primary',
      className: cn(twStyles.colorVariants.primary.ghost),
    },
    {
      variant: 'link',
      color: 'primary',
      className: cn(twStyles.colorVariants.primary.link),
    },
    // secondary color variants
    {
      variant: 'default',
      color: 'secondary',
      className: cn(twStyles.colorVariants.secondary.default),
    },
    {
      variant: 'subtle',
      color: 'secondary',
      className: cn(twStyles.colorVariants.secondary.subtle),
    },
    {
      variant: 'outline',
      color: 'secondary',
      className: cn(twStyles.colorVariants.secondary.outline),
    },
    {
      variant: 'ghost',
      color: 'secondary',
      className: cn(twStyles.colorVariants.secondary.ghost),
    },
    {
      variant: 'link',
      color: 'secondary',
      className: cn(twStyles.colorVariants.secondary.link),
    },

    // accent color variants
    {
      variant: 'default',
      color: 'accent',
      className: cn(twStyles.colorVariants.accent.default),
    },
    {
      variant: 'subtle',
      color: 'accent',
      className: cn(twStyles.colorVariants.accent.subtle),
    },
    {
      variant: 'outline',
      color: 'accent',
      className: cn(twStyles.colorVariants.accent.outline),
    },
    {
      variant: 'ghost',
      color: 'accent',
      className: cn(twStyles.colorVariants.accent.ghost),
    },
    {
      variant: 'link',
      color: 'accent',
      className: cn(twStyles.colorVariants.accent.link),
    },
    // danger color variants
    {
      variant: 'default',
      color: 'danger',
      className: cn(twStyles.colorVariants.danger.default),
    },
    {
      variant: 'subtle',
      color: 'danger',
      className: cn(twStyles.colorVariants.danger.subtle),
    },
    {
      variant: 'outline',
      color: 'danger',
      className: cn(twStyles.colorVariants.danger.outline),
    },
    {
      variant: 'ghost',
      color: 'danger',
      className: cn(twStyles.colorVariants.danger.ghost),
    },
    {
      variant: 'link',
      color: 'danger',
      className: cn(twStyles.colorVariants.danger.link),
    },
    // warning color variants
    {
      variant: 'default',
      color: 'warning',
      className: cn(twStyles.colorVariants.warning.default),
    },
    {
      variant: 'subtle',
      color: 'warning',
      className: cn(twStyles.colorVariants.warning.subtle),
    },
    {
      variant: 'outline',
      color: 'warning',
      className: cn(twStyles.colorVariants.warning.outline),
    },
    {
      variant: 'ghost',
      color: 'warning',
      className: cn(twStyles.colorVariants.warning.ghost),
    },
    {
      variant: 'link',
      color: 'warning',
      className: cn(twStyles.colorVariants.warning.link),
    },
  ],
})

export interface ButtonProps
  extends Omit<React.ComponentPropsWithRef<'button'>, 'color'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, radius, color, asChild = false, loading = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, radius, color, className }), {
          'cursor-not-allowed': props.disabled,
        })}
        ref={ref}
        {...props}
      >
        {loading ? (
          <span className="flex items-center">
            <SpinnerIcon className="mr-2" />
            {children}
          </span>
        ) : (
          children
        )}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

function ButtonContent({ className, children, ...rest }: ComponentProps<'span'>) {
  return (
    <span className={cn('text-ellipsis whitespace-nowrap overflow-hidden inline-block px-1.5', className)} {...rest}>
      {children}
    </span>
  )
}

export { Button, ButtonContent, buttonVariants }
