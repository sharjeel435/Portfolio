import { motion } from 'framer-motion';
import { Database, LayoutTemplate, Activity, Network, LineChart, Code2 } from 'lucide-react';

const techs = [
    { icon: Network, title: 'Shopify Store Architecture', desc: 'Designing high-converting storefronts with robust backend workflows.' },
    { icon: LayoutTemplate, title: 'Website Vibe Coding', desc: 'Building modern, prompt-driven web applications and functional prototypes.' },
    { icon: Activity, title: 'Snapchat & TikTok Ads', desc: 'Scaling direct-response performance campaigns across social channels.' },
    { icon: Database, title: 'Project Management', desc: 'Leading agile teams and crossing the bridge between technical execution and revenue goals.' },
    { icon: LineChart, title: 'Data-Driven Decisions', desc: 'Writing SQL queries to extract insights and calculate CLV/CAC ratios.' },
    { icon: Code2, title: 'Debugging & Optimization', desc: 'Reading logs, profiling network waterfalls, and squashing elusive bugs.' },
];

export default function TechnicalFoundationSection() {
    return (
        <section id="technical" className="py-24 relative overflow-hidden text-foreground">
            <div className="absolute inset-0 bg-primary/5 bg-grid-white opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold">Technical <span className="text-gradient">Foundation</span></h2>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            I don't just manage dashboards—I understand the code, the databases, and the APIs powering them. My CS fundamentals allow me to communicate fluidly with engineers and architect robust solutions.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['React/TypeScript', 'Node.js/SQL', 'Shopify Liquid', 'AWS/Vercel'].map(tag => (
                                <div key={tag} className="flex items-center gap-2 text-foreground/80">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {techs.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-card border border-white/10 rounded-xl"
                            >
                                <tech.icon className="w-6 h-6 text-primary-light mb-4" />
                                <h4 className="font-semibold mb-2">{tech.title}</h4>
                                <p className="text-sm text-foreground/60">{tech.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
