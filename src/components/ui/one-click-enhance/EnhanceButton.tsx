import { cva, type VariantProps } from 'class-variance-authority';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const enhanceButton = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-lg shadow-blue-600/25',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm rounded-lg gap-1.5',
        md: 'px-4 py-2 text-base rounded-xl gap-2',
        lg: 'px-6 py-3 text-lg rounded-2xl gap-2.5',
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
      <Sparkles className={cn(
        size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
      )} />
      {children || <span>Enhance with AI</span>}
      {credits > 0 && (
        <span className="text-xs opacity-75">({credits} credit{credits !== 1 ? 's' : ''})</span>
      )}
    </button>
  );
}