'use client';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 component-focus transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-secondary-extradark text-white hover:bg-secondary-extradark/80 dark:bg-secondary-extralight dark:text-black dark:hover:bg-secondary-extralight/80',
        outline:
          'border border-divider bg-white hover:bg-secondary-light dark:hover:bg-secondary/20 dark:bg-secondary-extradark',
        secondary:
          'bg-secondary-light hover:bg-secondary-light/60 dark:bg-secondary-dark dark:hover:bg-secondary-dark/80',
        ghost: 'hover:bg-secondary-light dark:hover:bg-secondary-dark',
        link: 'underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3',
        lg: 'h-12 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, loading = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={props.disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span>Please wait..</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
