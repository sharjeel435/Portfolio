import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Code2, Users } from 'lucide-react';
import Button from '../components/ui/Button';

/* ─── Letter-by-letter animation ─── */
function AnimatedName({ text, delay = 0 }: { text: string; delay?: number }) {
    return (
        <span className="inline-block">
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 60, rotateX: -90, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
                    transition={{
                        delay: delay + i * 0.04,
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </span>
    );
}

/* ─── Typewriter cycling roles ─── */
const roles = [
    'Technical PM',
    'Growth Architect',
    'Shopify Expert',
    'Vibe Coder',
    'Agile Leader',
];

function TypewriterRole() {
    const [roleIdx, setRoleIdx] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        // Wait for name animation to finish before starting
        const startTimer = setTimeout(() => setStarted(true), 1800);
        return () => clearTimeout(startTimer);
    }, []);

    useEffect(() => {
        if (!started) return;
        const target = roles[roleIdx];
        const speed = deleting ? 35 : 65;

        const timer = setTimeout(() => {
            if (!deleting) {
                if (displayed.length < target.length) {
                    setDisplayed(target.slice(0, displayed.length + 1));
                } else {
                    setTimeout(() => setDeleting(true), 1800);
                }
            } else {
                if (displayed.length > 0) {
                    setDisplayed(displayed.slice(0, -1));
                } else {
                    setDeleting(false);
                    setRoleIdx((i) => (i + 1) % roles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [displayed, deleting, roleIdx, started]);

    return (
        <span className="text-gradient inline-block min-w-[2ch]">
            {displayed}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block ml-0.5 w-0.5 h-[0.85em] bg-primary-light align-middle"
            />
        </span>
    );
}


const floatingStats = [
    { icon: TrendingUp, label: '350% YoY Growth', color: 'text-accent-cyan' },
    { icon: Code2, label: 'Full-Stack Technical PM', color: 'text-primary-light' },
    { icon: Users, label: 'Cross-Functional Lead', color: 'text-pink-400' },
];

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
            {/* Parallax background layer */}
            <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-background" />
                <div className="absolute inset-0 bg-grid opacity-100" />

                {/* Animated orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
                    style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute top-2/3 right-1/4 w-[400px] h-[400px] rounded-full"
                    style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.1) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full"
                    style={{ background: 'radial-gradient(ellipse, rgba(236,72,153,0.07) 0%, transparent 70%)' }}
                    animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
                />
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="container mx-auto px-6 max-w-6xl relative z-10 text-center"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass border border-primary/20 text-sm font-medium text-primary-light mb-10 shadow-glow-violet"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <Sparkles className="w-3.5 h-3.5" />
                    <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 'auto', opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="overflow-hidden whitespace-nowrap"
                    >
                        Available for New Opportunities
                    </motion.span>
                </motion.div>

                {/* NAME — letter by letter */}
                <div className="perspective-1000 mb-3">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                        <motion.div className="block mb-1 overflow-hidden">
                            <AnimatedName text="Sharjeel Safdar" delay={0.2} />
                        </motion.div>

                        {/* Typewriter role line */}
                        <motion.div
                            className="block text-4xl md:text-6xl lg:text-7xl mt-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4, duration: 0.4 }}
                        >
                            <TypewriterRole />
                        </motion.div>

                        {/* Animated tagline */}
                        <motion.div
                            className="block text-foreground/30 text-xl md:text-2xl lg:text-3xl mt-5 font-medium tracking-wide"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-foreground/20">—</span>
                            {' '}
                            <span className="text-foreground/40">Scaling Ecommerce</span>
                            {' '}
                            <span className="text-foreground/20">·</span>
                            {' '}
                            <span className="text-foreground/40">Building Products</span>
                            {' '}
                            <span className="text-foreground/20">·</span>
                            {' '}
                            <span className="text-foreground/40">Driving Growth</span>
                        </motion.div>
                    </h1>
                </div>

                {/* Description — fade in words */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.6, duration: 0.7 }}
                    className="text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto leading-relaxed mb-10 mt-8"
                >
                    I bridge the gap between engineering and revenue. Scaling ecommerce brands
                    through{' '}
                    <motion.span
                        className="text-foreground/80 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.9 }}
                    >
                        robust technical architecture
                    </motion.span>
                    {', '}
                    <motion.span
                        className="text-foreground/80 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.1 }}
                    >
                        data-driven systems
                    </motion.span>
                    {', and '}
                    <motion.span
                        className="text-foreground/80 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.3 }}
                    >
                        cross-functional leadership
                    </motion.span>
                    .
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        <Button
                            variant="gradient"
                            size="lg"
                            className="w-full sm:w-auto"
                            onClick={() => document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Case Study
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="w-full sm:w-auto"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get in Touch
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Floating stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {floatingStats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20, scale: 0.85 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 3.4 + i * 0.15, duration: 0.5, type: 'spring', stiffness: 200 }}
                            whileHover={{ y: -4, scale: 1.05 }}
                            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl glass border border-white/10 card-shine cursor-default"
                        >
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                            >
                                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                            </motion.div>
                            <span className="text-sm font-medium text-foreground/70">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 0.6 }}
                    className="mt-16 flex flex-col items-center gap-2"
                >
                    <motion.span
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xs text-foreground/25 uppercase tracking-widest"
                    >
                        Scroll to explore
                    </motion.span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
                    >
                        <motion.div
                            animate={{ height: ['30%', '60%', '30%'], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1 bg-primary-light rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
