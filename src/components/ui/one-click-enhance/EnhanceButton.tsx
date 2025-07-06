import { cva, type VariantProps } from 'class-variance-authority';
import { Sparkle } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

const enhanceButton = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-500',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-blue-600/30 dark:bg-blue-600 dark:hover:bg-blue-700',
        outline: 'bg-white/75 backdrop-blur-lg ring-1 ring-blue-200 text-blue-700 hover:bg-blue-50 hover:ring-blue-300 dark:bg-gray-900/75 dark:ring-blue-800 dark:text-blue-400 dark:hover:bg-blue-950/50',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm rounded-lg gap-1.5',
        md: 'px-4 py-2 text-base rounded-lg gap-2',
        lg: 'px-6 py-3 text-lg rounded-xl gap-2.5',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    }
  }
);

export interface EnhanceButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof enhanceButton> {
  credits?: number;
}

export function EnhanceButton({ 
  onClick, 
  credits = 1, 
  variant, 
  size, 
  fullWidth, 
  className, 
  disabled, 
  children,
  ...props 
}: EnhanceButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(enhanceButton({ variant, size, fullWidth }), className)}
      disabled={disabled}
      {...props}
    >
      <Sparkle className={cn(
        size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
      )} />
      {children || <span>Enhance with AI</span>}
      {credits > 0 && (
        <span className="text-xs opacity-75">({credits} credit{credits !== 1 ? 's' : ''})</span>
      )}
    </button>
  );
}