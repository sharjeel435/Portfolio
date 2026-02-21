import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
                    {
                        'bg-primary text-foreground hover:bg-primary/90 shadow-lg shadow-primary/25': variant === 'primary',
                        'bg-card text-foreground hover:bg-cardHover border border-white/10': variant === 'secondary',
                        'border border-primary text-primary hover:bg-primary/10': variant === 'outline',
                        'hover:bg-white/5 text-foreground': variant === 'ghost',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-6 text-base': size === 'md',
                        'h-14 px-8 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';

export default Button;
