import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Code2, Users } from 'lucide-react';
import Button from '../components/ui/Button';

const floatingStats = [
    { icon: TrendingUp, label: '350% YoY Growth', color: 'text-accent-cyan' },
    { icon: Code2, label: 'Full-Stack Technical PM', color: 'text-primary-light' },
    { icon: Users, label: 'Cross-Functional Lead', color: 'text-pink-400' },
];

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
            {/* Multi-layer animated background */}
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

            {/* Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)',
                }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute top-2/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(6,182,212,0.12) 0%, transparent 70%)',
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
            <motion.div
                className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(236,72,153,0.08) 0%, transparent 70%)',
                }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            />

            <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass border border-primary/20 text-sm font-medium text-primary-light mb-8 shadow-glow-violet"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <Sparkles className="w-3.5 h-3.5" />
                    Available for New Opportunities
                </motion.div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-6">
                        <span className="block text-foreground">Sharjeel Safdar</span>
                        <span className="block text-gradient mt-2">Technical PM</span>
                        <span className="block text-foreground/40 text-4xl md:text-5xl lg:text-6xl mt-3 font-bold">
                            & Growth Architect
                        </span>
                    </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="text-lg md:text-xl text-foreground/55 max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    I bridge the gap between engineering and revenue. Scaling ecommerce brands
                    through <span className="text-foreground/80 font-medium">robust technical architecture</span>,{' '}
                    <span className="text-foreground/80 font-medium">data-driven systems</span>, and{' '}
                    <span className="text-foreground/80 font-medium">cross-functional leadership</span>.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <Button
                        variant="gradient"
                        size="lg"
                        className="w-full sm:w-auto"
                        onClick={() => document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Case Study
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="w-full sm:w-auto"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get in Touch
                    </Button>
                </motion.div>

                {/* Floating Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.55 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {floatingStats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            whileHover={{ y: -3, scale: 1.03 }}
                            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl glass border border-white/10 card-shine"
                        >
                            <stat.icon className={`w-4 h-4 ${stat.color}`} />
                            <span className="text-sm font-medium text-foreground/70">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-16 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-foreground/25 uppercase tracking-widest">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
                    >
                        <div className="w-1 h-2 bg-primary-light rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
