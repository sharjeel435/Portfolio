import { motion } from 'framer-motion';
import { Target, AlignVerticalJustifyStart, Users, BarChart3, ShieldAlert, GitMerge } from 'lucide-react';

const skills = [
    { icon: Target, title: 'Sprint Planning', desc: 'Structuring 2-week agile cycles mapping back to quarterly OKRs.' },
    { icon: AlignVerticalJustifyStart, title: 'Roadmap Definition', desc: 'Translating business goals into technical execution timelines.' },
    { icon: Users, title: 'Cross-Team Coordination', desc: 'Aligning developers, designers, and marketers for unified launches.' },
    { icon: BarChart3, title: 'KPI Ownership', desc: 'Establishing tracking systems to hold teams accountable to metrics.' },
    { icon: ShieldAlert, title: 'Risk Mitigation', desc: 'Proactive identification of technical debt and pipeline bottlenecks.' },
    { icon: GitMerge, title: 'Structured Systems', desc: 'Building standard operating procedures to eliminate redundancies.' },
];

export default function ExecutionLeadershipSection() {
    return (
        <section id="leadership" className="py-24 relative bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Execution <span className="text-gradient">Leadership</span></h2>
                    <p className="text-lg text-foreground/70">Delivering complex projects on time by turning chaos into predictable, scalable systems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <skill.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                            <p className="text-foreground/60 leading-relaxed">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
