import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Megaphone, Video, ShoppingBag, Palette, ClipboardList, Code2 } from 'lucide-react';

const skills = [
    {
        icon: Video,
        title: 'TikTok Ads',
        desc: 'Full-funnel TikTok campaign management — UGC scripting, creative testing, and scaling winning ad sets to 6-figure budgets.',
        color: 'text-pink-400',
        bg: 'bg-pink-500/10',
        glow: 'rgba(236,72,153,0.4)',
        highlights: ['Creative Strategy', 'Pixel Tracking', 'Budget Scaling'],
        hPill: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
    },
    {
        icon: Megaphone,
        title: 'Snapchat Ads',
        desc: 'Server-side tracking, story ads, and first-touch attribution. Consistently hitting 3x+ ROAS for ecommerce brands.',
        color: 'text-yellow-300',
        bg: 'bg-yellow-400/10',
        glow: 'rgba(250,204,21,0.4)',
        highlights: ['CAPI Integration', 'Story Ads', '3x+ ROAS'],
        hPill: 'bg-yellow-400/15 text-yellow-300 border-yellow-400/20',
    },
    {
        icon: ShoppingBag,
        title: 'Shopify',
        desc: 'Store architecture, custom Liquid theme development, app integrations, payment flows, and conversion rate optimization.',
        color: 'text-green-400',
        bg: 'bg-green-500/10',
        glow: 'rgba(74,222,128,0.4)',
        highlights: ['Liquid Themes', 'App Dev', 'CRO'],
        hPill: 'bg-green-500/15 text-green-300 border-green-500/20',
    },
    {
        icon: Palette,
        title: 'Design',
        desc: 'End-to-end product design — wireframing, UI systems, brand identity, and high-fidelity prototypes that resonate.',
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        glow: 'rgba(34,211,238,0.4)',
        highlights: ['UI Systems', 'Branding', 'Prototyping'],
        hPill: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
    },
    {
        icon: ClipboardList,
        title: 'Agile & Project Management',
        desc: 'Agile sprint planning, cross-functional leadership, OKR frameworks, and structured delivery systems for complex technical projects.',
        color: 'text-primary-light',
        bg: 'bg-primary/10',
        glow: 'rgba(124,58,237,0.4)',
        highlights: ['Agile / Scrum', 'Sprint Planning', 'OKRs'],
        hPill: 'bg-primary/15 text-primary-light border-primary/20',
    },
    {
        icon: Code2,
        title: 'Vibe Coding',
        desc: 'Building and shipping full-stack apps through prompt-driven development — from idea to deployed product.',
        color: 'text-amber-400',
        bg: 'bg-amber-500/10',
        glow: 'rgba(245,158,11,0.4)',
        highlights: ['React / TS', 'AI Prompting', 'Ship Fast'],
        hPill: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
    },
];

/* ─── Deep skill card with tilt + sequential reveal ─── */
function DeepCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const handleMouseLeave = () => {
        x.set(0); y.set(0); setHovered(false);
    };

    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1000 }}
        >
            <motion.div
                ref={ref}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-2xl overflow-hidden h-full"
            >
                {/* Animated glow border */}
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none z-0"
                    animate={hovered ? {
                        boxShadow: `0 0 0 1px ${skill.glow.replace('0.4', '0.3')}, 0 20px 50px ${skill.glow.replace('0.4', '0.15')}`,
                    } : {
                        boxShadow: '0 0 0 1px rgba(255,255,255,0.04)',
                    }}
                    transition={{ duration: 0.35 }}
                />

                <div className="relative z-10 p-7 glass-card rounded-2xl h-full">
                    {/* Top: icon + title */}
                    <div className="flex items-start gap-4 mb-5">
                        <motion.div
                            className={`w-12 h-12 rounded-xl ${skill.bg} flex items-center justify-center shrink-0 relative`}
                            animate={hovered ? { scale: 1.12 } : { scale: 1 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        >
                            {/* Pulsing ring */}
                            <motion.div
                                className="absolute inset-0 rounded-xl"
                                animate={hovered ? {
                                    boxShadow: [`0 0 0 0px ${skill.glow}`, `0 0 0 6px transparent`],
                                } : {}}
                                transition={{ duration: 0.8, repeat: hovered ? Infinity : 0 }}
                            />
                            <skill.icon className={`w-5 h-5 ${skill.color} relative z-10`} />
                        </motion.div>
                        <div>
                            <h3 className="text-base font-bold text-foreground leading-tight mb-1">{skill.title}</h3>
                            <p className="text-xs text-foreground/40 leading-relaxed">{skill.desc}</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <motion.div
                        className="h-px mb-5"
                        style={{ background: `linear-gradient(90deg, ${skill.glow.replace('0.4', '0.3')}, transparent)` }}
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                    />

                    {/* Highlight pills — staggered animate in */}
                    <div className="flex flex-wrap gap-2">
                        {skill.highlights.map((h, hi) => (
                            <motion.span
                                key={h}
                                initial={{ opacity: 0, scale: 0.7, y: 8 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + hi * 0.08 + 0.5, duration: 0.4, type: 'spring', stiffness: 300 }}
                                whileHover={{ scale: 1.08, y: -2 }}
                                className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${skill.hPill} cursor-default`}
                            >
                                {h}
                            </motion.span>
                        ))}
                    </div>

                    {/* Bottom shine bar */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-0.5"
                        style={{ background: `linear-gradient(90deg, transparent, ${skill.glow}, transparent)` }}
                        initial={{ width: '0%', left: '50%' }}
                        animate={hovered ? { width: '100%', left: '0%' } : { width: '0%', left: '50%' }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

/* ─── Vertical line connector ─── */
function LineConnector({ index }: { index: number }) {
    return (
        <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            className="hidden lg:block absolute top-full left-1/2 w-px h-4 bg-gradient-to-b from-white/10 to-transparent origin-top"
        />
    );
}

export default function TechnicalFoundationSection() {
    return (
        <section id="technical" className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-card" />
            <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px section-divider" />

            {/* Animated background glows */}
            <motion.div
                className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 text-center max-w-3xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan-500/20 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-5"
                    >
                        <motion.span
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        >🔧</motion.span>
                        Skills In Depth
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-5">
                        Skills &{' '}
                        <span className="text-gradient-cyan">Expertise</span>
                    </h2>
                    <p className="text-lg text-foreground/50 leading-relaxed">
                        Every skill backed by real projects, measurable results, and shipped products.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
                    {skills.map((skill, i) => (
                        <div key={i} className="relative">
                            <DeepCard skill={skill} index={i} />
                            {i < skills.length - 3 && <LineConnector index={i} />}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="mt-14 flex justify-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-white/5 text-sm text-foreground/40">
                        <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-green-400 inline-block"
                        />
                        All skills actively used in live projects
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
