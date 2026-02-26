import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'relative inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 select-none',
                    {
                        'bg-primary text-white hover:bg-primary/90 btn-glow': variant === 'primary',
                        'glass text-foreground hover:bg-white/10 border border-white/10': variant === 'secondary',
                        'border border-primary/50 text-primary-light hover:bg-primary/10 hover:border-primary': variant === 'outline',
                        'hover:bg-white/5 text-foreground/80 hover:text-foreground': variant === 'ghost',
                        'text-white': variant === 'gradient',
                        'h-9 px-4 text-sm gap-1.5': size === 'sm',
                        'h-11 px-6 text-sm gap-2': size === 'md',
                        'h-14 px-8 text-base gap-2': size === 'lg',
                    },
                    variant === 'gradient' && 'overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary before:via-primary/80 before:to-accent-cyan hover:before:opacity-90 before:transition-opacity',
                    className
                )}
                {...props}
            >
                {variant === 'gradient' ? (
                    <span className="relative z-10 flex items-center gap-2">{children}</span>
                ) : children}
            </button>
        );
    }
);
Button.displayName = 'Button';

export default Button;
