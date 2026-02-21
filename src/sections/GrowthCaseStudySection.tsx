import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ from, to, symbol = '', suffix = '' }: { from: number, to: number, symbol?: string, suffix?: string }) => {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            let current = from;
            const step = Math.ceil((to - from) / 40);
            const timer = setInterval(() => {
                current += step;
                if (current >= to) {
                    setCount(to);
                    clearInterval(timer);
                } else {
                    setCount(current);
                }
            }, 30);
            return () => clearInterval(timer);
        }
    }, [inView, from, to]);

    return <span ref={ref}>{symbol}{count.toLocaleString()}{suffix}</span>;
};

export default function GrowthCaseStudySection() {
    return (
        <section id="case-study" className="py-24 relative bg-card">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Animated Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        { label: 'Revenue Generated', value: 4000000, symbol: 'PKR ', suffix: '+' },
                        { label: 'Growth YoY', value: 350, suffix: '%' },
                        { label: 'Average ROAS', value: 3.8, suffix: 'x' },
                        { label: 'Timeline (Days)', value: 90 },
                    ].map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl border border-white/5 h-full text-center relative overflow-hidden"
                        >
                            <div className="flex flex-col items-center">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-sm md:text-base font-bold text-foreground/40">PKR</span>
                                    <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gradient tracking-tighter">
                                        <Counter from={0} to={metric.value} symbol="" suffix={metric.suffix} />
                                    </div>
                                </div>
                                <div className="text-[10px] md:text-xs font-bold text-foreground/40 uppercase tracking-[0.2em] mt-2">{metric.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Case Study Details */}
                <div className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">The Problem & Constraints</h3>
                            <p className="text-foreground/70 leading-relaxed mb-4">
                                The brand was struggling with a plateaued $1M run rate. High customer acquisition costs on Meta and a leaky conversion funnel on the Shopify storefront led to shrinking margins.
                            </p>
                            <p className="text-foreground/70 leading-relaxed">
                                Constraints included a strict 3-month timeline before Q4 inventory arrived and a limited technical team of two junior developers.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">The Strategy</h3>
                            <p className="text-foreground/70 leading-relaxed mb-4">
                                1. <strong>Platform Diversification:</strong> Shifted budget drastically toward TikTok Ads and Snapchat Ads, implementing advanced server-side tracking to capture 20% more conversions.
                            </p>
                            <p className="text-foreground/70 leading-relaxed">
                                2. <strong>Funnel Optimization:</strong> Led a headless-inspired rebuild of the product pages, improving load times by 40% and deploying 1-click upsell logic.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-2xl font-bold mb-6 text-center">Execution Framework & Coordination</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h4 className="font-semibold text-primary-light mb-2">Agile Sprints</h4>
                                <p className="text-sm text-foreground/70">Ran 1-week sprints linking ad creative generation with landing page development, ensuring zero bottlenecks.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary-light mb-2">Data Infrastructure</h4>
                                <p className="text-sm text-foreground/70">Architected a real-time metrics dashboard pulling from Shopify API and ad networks to govern daily spend.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary-light mb-2">Team Leadership</h4>
                                <p className="text-sm text-foreground/70">Conducted daily stand-ups and unblocked the engineering team by pseudo-coding complex database structures.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
