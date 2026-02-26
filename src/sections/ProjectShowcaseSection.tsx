import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Personalized Crypto App',
        category: 'Prompt-Driven Development',
        desc: 'Built a modern, dynamic cryptocurrency tracker application entirely through vibe coding and prompt engineering. Features real-time data, AI trading agent, and personalized insights.',
        tags: ['React', 'Vite', 'Tailwind', 'AI Agent', 'TypeScript'],
        link: 'https://personalizedcrypto2025.vercel.app/',
        image: '/proof/crypto_tracker_app_1771689228918.png',
        accentColor: 'from-primary/30 to-accent-cyan/20',
        tagColor: 'text-primary-light border-primary/20 bg-primary/10',
        badgeColor: 'text-accent-cyan border-accent-cyan/20 bg-accent-cyan/10',
    },
    {
        title: 'Naseem Collections Store',
        category: 'Shopify Store Architecture',
        desc: 'Designed and optimized a high-converting ecommerce storefront, driving 350% YoY growth. Engineered seamless user flows, fast load times, and conversion-optimized product pages.',
        tags: ['Shopify', 'Liquid', 'CRO', 'Meta Ads', 'Analytics'],
        link: 'https://naseemcollections.store',
        image: '/proof/ecommerce_store_design_1771689266380.png',
        accentColor: 'from-pink-500/20 to-amber-500/10',
        tagColor: 'text-pink-400 border-pink-500/20 bg-pink-500/10',
        badgeColor: 'text-pink-400 border-pink-500/20 bg-pink-500/10',
    },
];

export default function ProjectShowcaseSection() {
    return (
        <section id="work" className="py-16 sm:py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-card" />
            <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px section-divider" />

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-xs font-bold text-primary-light uppercase tracking-widest mb-5">
                        🚀 Selected Projects
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight">
                        Project{' '}
                        <span className="text-gradient">Showcase</span>
                    </h2>
                    <p className="text-lg text-foreground/50 mt-4 max-w-lg">
                        A selection of technical and growth implementations that shipped and drove real results.
                    </p>
                </motion.div>

                {/* Project cards */}
                <div className="space-y-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative rounded-3xl glass-card border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-card hover:shadow-card-hover"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            <div className="relative flex flex-col lg:flex-row">
                                {/* Image */}
                                <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden shrink-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-55 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card lg:bg-gradient-to-b lg:from-transparent lg:to-transparent" />
                                    <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-transparent lg:to-card" />

                                    {/* Category badge */}
                                    <div className="absolute top-5 left-5">
                                        <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border ${project.badgeColor} backdrop-blur-md`}>
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight mb-3 sm:mb-4 group-hover:text-gradient transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-foreground/55 leading-relaxed mb-6 text-sm lg:text-base">
                                            {project.desc}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.tagColor}`}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center gap-4">
                                        {project.link !== '#' && (
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ x: 4 }}
                                                className="group/link inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 hover:border-primary/40 text-sm font-semibold text-foreground/80 hover:text-primary-light transition-all duration-200"
                                            >
                                                <ExternalLink size={15} />
                                                Live Preview
                                                <ArrowUpRight size={13} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
