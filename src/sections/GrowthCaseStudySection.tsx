import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Zap, Target, Clock } from 'lucide-react';

const Counter = ({ from, to, symbol = '', suffix = '', decimals = 0 }: {
    from: number; to: number; symbol?: string; suffix?: string; decimals?: number;
}) => {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            const duration = 1800;
            const steps = 60;
            const stepDuration = duration / steps;
            let step = 0;
            const timer = setInterval(() => {
                step++;
                const progress = step / steps;
                const eased = 1 - Math.pow(1 - progress, 3);
                setCount(parseFloat((from + (to - from) * eased).toFixed(decimals)));
                if (step >= steps) {
                    setCount(to);
                    clearInterval(timer);
                }
            }, stepDuration);
            return () => clearInterval(timer);
        }
    }, [inView, from, to, decimals]);

    return (
        <span ref={ref}>
            {symbol}{decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString()}{suffix}
        </span>
    );
};

const metrics = [
    {
        icon: TrendingUp,
        label: 'Revenue Generated',
        value: 4,
        symbol: '',
        suffix: 'M+ PKR',
        decimals: 0,
        color: 'text-primary-light',
        bg: 'from-primary/20 to-primary/5',
        border: 'border-primary/20',
    },
    {
        icon: Zap,
        label: 'Growth YoY',
        value: 350,
        suffix: '%',
        color: 'text-accent-cyan',
        bg: 'from-accent-cyan/20 to-accent-cyan/5',
        border: 'border-accent-cyan/20',
    },
    {
        icon: Target,
        label: 'Average ROAS',
        value: 3.8,
        suffix: 'x',
        decimals: 1,
        color: 'text-pink-400',
        bg: 'from-pink-500/20 to-pink-500/5',
        border: 'border-pink-500/20',
    },
    {
        icon: Clock,
        label: 'Timeline (Days)',
        value: 90,
        color: 'text-amber-400',
        bg: 'from-amber-500/20 to-amber-500/5',
        border: 'border-amber-500/20',
    },
];

export default function GrowthCaseStudySection() {
    return (
        <section id="case-study" className="py-28 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px section-divider" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-pink-500/25 text-xs font-bold text-pink-400 uppercase tracking-widest mb-5">
                        📈 Growth Case Study
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                        From{' '}
                        <span className="text-gradient-pink">$1M → $4M</span>
                        {' '}PKR
                    </h2>
                    <p className="text-lg text-foreground/50 max-w-xl mx-auto">
                        Real results from a real ecommerce brand in 90 days.
                    </p>
                </motion.div>

                {/* Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -6, scale: 1.04 }}
                            className={`relative p-7 rounded-2xl border ${metric.border} bg-gradient-to-br ${metric.bg} backdrop-blur-sm text-center stat-card overflow-hidden`}
                        >
                            <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4`}>
                                <metric.icon className={`w-5 h-5 ${metric.color}`} />
                            </div>
                            <div className={`text-3xl lg:text-4xl font-black ${metric.color} mb-2 tracking-tighter`}>
                                <Counter
                                    from={0}
                                    to={metric.value}
                                    symbol={metric.symbol}
                                    suffix={metric.suffix}
                                    decimals={metric.decimals || 0}
                                />
                            </div>
                            <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.2em]">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Details */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {[
                        {
                            title: 'The Problem & Constraints',
                            color: 'border-l-primary',
                            content: [
                                'Brand was struggling with a plateaued $1M run rate.',
                                'High customer acquisition costs on Meta and a leaky conversion funnel.',
                                'Strict 3-month timeline before Q4 inventory arrived.',
                                'Limited technical team of two junior developers.',
                            ],
                        },
                        {
                            title: 'The Strategy',
                            color: 'border-l-accent-cyan',
                            content: [
                                'Platform Diversification: Shifted budget to TikTok & Snapchat Ads.',
                                'Server-side tracking capturing 20% more conversions.',
                                'Headless-inspired product page rebuild — load times improved 40%.',
                                '1-click upsell logic deployed, lifting AOV by 18%.',
                            ],
                        },
                    ].map((block) => (
                        <motion.div
                            key={block.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`p-7 rounded-2xl glass-card border border-white/5 border-l-4 ${block.color}`}
                        >
                            <h3 className="text-xl font-bold mb-5">{block.title}</h3>
                            <ul className="space-y-3">
                                {block.content.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/60 leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Framework */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-8 rounded-2xl glass-card border border-white/5"
                >
                    <h3 className="text-xl font-bold mb-8 text-center">Execution Framework & Coordination</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Agile Sprints', emoji: '🏃', desc: 'Ran 1-week sprints linking ad creative generation with landing page development, ensuring zero bottlenecks.' },
                            { title: 'Data Infrastructure', emoji: '📊', desc: 'Architected a real-time metrics dashboard pulling from Shopify API and ad networks to govern daily spend.' },
                            { title: 'Team Leadership', emoji: '👥', desc: 'Conducted daily stand-ups and unblocked the engineering team by pseudo-coding complex database structures.' },
                        ].map((item) => (
                            <div key={item.title} className="text-center">
                                <div className="text-3xl mb-3">{item.emoji}</div>
                                <h4 className="font-bold text-primary-light mb-3">{item.title}</h4>
                                <p className="text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
