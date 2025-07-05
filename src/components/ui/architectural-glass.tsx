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
  innerGlow?: boolean
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
  innerGlow = false,
  children, 
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        createSurface(variant, elevated, hasBorder, innerGlow),
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
  innerGlow?: boolean
  children?: React.ReactNode
}

export const GlassPanel = React.forwardRef<
  HTMLDivElement,
  GlassPanelProps
>(({
  className,
  elevated = false,
  innerGlow = false,
  children,
  ...props
}, ref) => {
  return (
    <Surface 
      ref={ref}
      variant="glass"
      elevated={elevated}
      innerGlow={innerGlow}
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

/**
 * Hero Background - Creates a decorative background with concentric glass rings
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 to-transparent" />
      
      {/* Concentric Rings */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 contain-paint">
        <GlassRing size={40} blur={4} className="opacity-30" />
        <GlassRing size={30} blur={3} className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        <GlassRing size={20} blur={2} glow className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
        <GlassRing size={10} blur={1} glow innerGlow className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80" />
      </div>
      
      {/* Aurora Blob */}
      <div 
        className="absolute -left-[20%] top-1/2 w-1/2 h-1/2 bg-gradient-to-r from-blue-200/30 to-sky-300/30 rounded-full blur-3xl"
        style={{transform: 'translateY(-60%)'}}
      />
      <div 
        className="absolute -right-[20%] top-[40%] w-1/2 h-1/2 bg-gradient-to-l from-blue-200/30 to-sky-300/30 rounded-full blur-3xl"
        style={{transform: 'translateY(-60%)'}}
      />
    </div>
  )
}

/**
 * Navbar with Glass Effect - Example of glass panel usage for UI chrome
 */
interface GlassNavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  scrolled?: boolean
  children: React.ReactNode
}

export function GlassNavbar({
  scrolled = false,
  className,
  children,
  ...props
}: GlassNavbarProps) {
  return (
    <GlassPanel
      elevated={scrolled}
      className={cn(
        "sticky top-0 w-full transition-all duration-300",
        scrolled ? "py-2" : "py-4",
        className
      )}
      {...props}
    >
      {children}
    </GlassPanel>
  )
}

/**
 * Card with proper Material properties
 */
interface MaterialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'solid' | 'glass'
  elevated?: boolean
  children: React.ReactNode
}

export function MaterialCard({
  variant = 'solid',
  elevated = false,
  className,
  children,
  ...props
}: MaterialCardProps) {
  return (
    <Surface
      variant={variant}
      elevated={elevated}
      className={cn(
        "p-6",
        className
      )}
      {...props}
    >
      {children}
    </Surface>
  )
}