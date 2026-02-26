/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#05050a',
                foreground: '#f0f0f8',
                primary: {
                    light: '#a78bfa',
                    DEFAULT: '#7c3aed',
                    dark: '#4c1d95',
                },
                accent: {
                    cyan: '#06b6d4',
                    pink: '#ec4899',
                    amber: '#f59e0b',
                },
                card: '#0f0f1a',
                cardHover: '#161625',
                border: 'rgba(255,255,255,0.07)',
                muted: 'rgba(240,240,248,0.5)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.25), transparent)',
                'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out both',
                'slide-up': 'slideUp 0.7s ease-out both',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-18px)' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                }
            },
            boxShadow: {
                'glow-violet': '0 0 40px rgba(124,58,237,0.35)',
                'glow-cyan': '0 0 40px rgba(6,182,212,0.25)',
                'glow-pink': '0 0 40px rgba(236,72,153,0.25)',
                'card': '0 4px 40px rgba(0,0,0,0.6)',
                'card-hover': '0 8px 60px rgba(124,58,237,0.2)',
            }
        },
    },
    plugins: [],
}
