/**
 * Architectural Glass Component System
 * 
 * A collection of components that implement the Architectural Glass design system
 * focused on Digital Materiality principles.
 */

import { cn, createSurface, createButton } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

/**
 * Surface - The base component for all UI cards and panels
 * 
 * Implements the Architectural Glass design with proper layering, elevation,
 * and precise edges. Can be used as a solid card or glass panel.
 */
interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'solid' | 'glass'
  elevated?: boolean
  hasBorder?: boolean
  children?: React.ReactNode
}

export const Surface = React.forwardRef<
  HTMLDivElement,
  SurfaceProps
>(({ 
  className, 
  variant = 'solid',
  elevated = false,
  hasBorder = false,
  children, 
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        createSurface(variant, elevated, hasBorder),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
Surface.displayName = 'Surface'

/**
 * Glass Panel - A specialized surface for floating UI chrome
 * 
 * Used for navbars, sidebars, and other UI chrome that should 
 * provide spatial context through translucency.
 */
interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean
  children?: React.ReactNode
}

export const GlassPanel = React.forwardRef<
  HTMLDivElement,
  GlassPanelProps
>(({
  className,
  elevated = false,
  children,
  ...props
}, ref) => {
  return (
    <Surface 
      ref={ref}
      variant="glass"
      elevated={elevated}
      className={cn(
        "p-4",
        className
      )}
      {...props}
    >
      {children}
    </Surface>
  )
})
GlassPanel.displayName = 'GlassPanel'

/**
 * Architectural Button - Implements the interaction physics of the design system
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 hover:-translate-y-0.5 active:scale-98 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-black/90",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700",
        outline: "border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-800 dark:text-gray-50 backdrop-blur-sm",
        ghost: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ArchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const ArchButton = React.forwardRef<HTMLButtonElement, ArchButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
ArchButton.displayName = "ArchButton"

/**
 * DepthContainer - Creates proper z-index layering for content
 * 
 * Ensures the strict spatial hierarchy is maintained for proper depth perception
 */
interface DepthContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  level: 'canvas' | 'surface' | 'glass' | 'popover' | 'modal'
  children: React.ReactNode
}

export const DepthContainer = ({
  level,
  className,
  children,
  ...props
}: DepthContainerProps) => {
  return (
    <div 
      className={cn(
        `z-${level}`,
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Decorative Glass Ring - For purely decorative background elements
 * 
 * IMPORTANT: This should ONLY be used for non-interactive background elements!
 */
interface GlassRingProps extends React.HTMLAttributes<HTMLDivElement> {
  size: number // size in rem
  blur?: number // blur amount in px
  glow?: boolean // whether to add a glow effect
  innerGlow?: boolean // whether to add an inner glow
}

export const GlassRing = ({
  size,
  blur = 2,
  glow = false,
  innerGlow = false,
  className,
  ...props
}: GlassRingProps) => {
  return (
    <div
      className={cn(
        'rounded-full border border-white/20 bg-white/10',
        glow && 'shadow-[0_0_40px_rgba(173,216,255,0.5)]',
        innerGlow && 'shadow-[inset_0_0_30px_rgba(255,255,255,0.4)]',
        className
      )}
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        filter: `blur(${blur}px)`,
      }}
      {...props}
    />
  )
}