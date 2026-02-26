import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Megaphone, Video, ShoppingBag, Palette, ClipboardList, Code2 } from 'lucide-react';

const skills = [
    {
        icon: Megaphone,
        title: 'Snapchat Ads',
        desc: 'Running high-ROAS direct-response campaigns on Snapchat with server-side tracking and creative strategy.',
        color: 'text-yellow-300',
        bg: 'bg-yellow-400/10',
        glow: 'rgba(250,204,21,0.35)',
        border: 'rgba(250,204,21,0.25)',
        tag: 'Performance Marketing',
        number: '01',
    },
    {
        icon: Video,
        title: 'TikTok Ads',
        desc: 'Scaling viral-first ad campaigns — from UGC scripting to full-funnel conversion optimization at scale.',
        color: 'text-pink-400',
        bg: 'bg-pink-500/10',
        glow: 'rgba(236,72,153,0.35)',
        border: 'rgba(236,72,153,0.25)',
        tag: 'Social Commerce',
        number: '02',
    },
    {
        icon: ShoppingBag,
        title: 'Shopify',
        desc: 'Building high-converting Shopify stores — custom Liquid themes, app integrations, and backend automation.',
        color: 'text-green-400',
        bg: 'bg-green-500/10',
        glow: 'rgba(74,222,128,0.35)',
        border: 'rgba(74,222,128,0.25)',
        tag: 'Ecommerce',
        number: '03',
    },
    {
        icon: Palette,
        title: 'Design',
        desc: 'Crafting premium UI/UX experiences — from brand identity to pixel-perfect web interfaces that convert.',
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        glow: 'rgba(34,211,238,0.35)',
        border: 'rgba(34,211,238,0.25)',
        tag: 'UI / UX',
        number: '04',
    },
    {
        icon: ClipboardList,
        title: 'Agile & Project Management',
        desc: 'Leading agile sprint cycles, cross-functional teams, and OKR systems that deliver complex projects on time.',
        color: 'text-primary-light',
        bg: 'bg-primary/10',
        glow: 'rgba(124,58,237,0.35)',
        border: 'rgba(124,58,237,0.25)',
        tag: 'Agile / Leadership',
        number: '05',
    },
    {
        icon: Code2,
        title: 'Vibe Coding',
        desc: 'Building and shipping full-stack apps through prompt-driven development — from idea to deployed product.',
        color: 'text-amber-400',
        bg: 'bg-amber-500/10',
        glow: 'rgba(245,158,11,0.35)',
        border: 'rgba(245,158,11,0.25)',
        tag: 'Development',
        number: '06',
    },
];

/* ─── Magnetic tilt card ─── */
function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
    const glowX = useTransform(x, [-0.5, 0.5], [0, 100]);
    const glowY = useTransform(y, [-0.5, 0.5], [0, 100]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1000 }}
        >
            <motion.div
                ref={ref}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-2xl overflow-hidden cursor-default h-full"
            >
                {/* Animated glow border */}
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none z-0"
                    animate={hovered ? {
                        boxShadow: `0 0 0 1px ${skill.border}, 0 0 30px ${skill.glow}, inset 0 0 30px ${skill.glow.replace('0.35', '0.08')}`,
                    } : {
                        boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Moving spotlight on hover */}
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none z-0 opacity-0"
                    animate={hovered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${skill.glow.replace('0.35', '0.12')}, transparent 60%)`,
                    }}
                />

                {/* Card body */}
                <div className="relative z-10 p-7 h-full glass-card rounded-2xl">
                    {/* Number */}
                    <span className="absolute top-5 right-5 text-[11px] font-black tracking-widest text-foreground/15 font-mono">
                        {skill.number}
                    </span>

                    {/* Animated icon */}
                    <motion.div
                        className={`w-13 h-13 rounded-xl ${skill.bg} flex items-center justify-center mb-5 relative`}
                        animate={hovered ? { scale: 1.15, rotate: [0, -5, 5, 0] } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Icon glow ring */}
                        <motion.div
                            className="absolute inset-0 rounded-xl"
                            animate={hovered ? {
                                boxShadow: `0 0 20px ${skill.glow}`,
                            } : { boxShadow: 'none' }}
                            transition={{ duration: 0.3 }}
                        />
                        <skill.icon className={`w-6 h-6 ${skill.color} relative z-10`} />
                    </motion.div>

                    {/* Tag pill */}
                    <motion.span
                        className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 text-foreground/30 mb-3"
                        animate={hovered ? { borderColor: skill.border, color: skill.glow } : {}}
                        transition={{ duration: 0.3 }}
                    >
                        {skill.tag}
                    </motion.span>

                    <h3 className="text-lg font-bold mb-3 text-foreground">{skill.title}</h3>
                    <p className="text-foreground/50 leading-relaxed text-sm">{skill.desc}</p>

                    {/* Bottom shimmer bar */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl"
                        style={{ background: `linear-gradient(90deg, transparent, ${skill.glow}, transparent)` }}
                        initial={{ width: '0%', left: '50%' }}
                        animate={hovered ? { width: '100%', left: '0%' } : { width: '0%', left: '50%' }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─── Floating particle ─── */
function Particle({ style }: { style: React.CSSProperties }) {
    return (
        <motion.div
            className="absolute w-1 h-1 rounded-full bg-white/20 pointer-events-none"
            style={style}
            animate={{ y: [-20, 20, -20], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 4 }}
        />
    );
}

const particles = Array.from({ length: 20 }, (_, i) => ({
    left: `${(i * 17 + 5) % 95}%`,
    top: `${(i * 23 + 10) % 85}%`,
}));

export default function ExecutionLeadershipSection() {
    return (
        <section id="leadership" className="py-16 sm:py-28 relative bg-background overflow-hidden">
            {/* Grid bg */}
            <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px section-divider" />

            {/* Floating particles */}
            {particles.map((p, i) => <Particle key={i} style={p} />)}

            {/* Ambient glow orbs */}
            <motion.div
                className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            />

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 text-center max-w-3xl mx-auto"
                >
                    {/* Animated badge */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-xs font-bold text-primary-light uppercase tracking-widest mb-5"
                    >
                        <motion.span
                            animate={{ rotate: [0, 20, -20, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >⚡</motion.span>
                        Core Skills
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-5">
                        What I{' '}
                        <motion.span
                            className="text-gradient inline-block"
                            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                        >
                            Do Best
                        </motion.span>
                    </h2>
                    <p className="text-lg text-foreground/50 leading-relaxed">
                        A focused set of skills I've used to drive real revenue and build products people love.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
