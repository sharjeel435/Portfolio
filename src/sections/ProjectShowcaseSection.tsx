import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Personalized Crypto App',
        category: 'Prompt-Driven Development',
        desc: 'Built a modern, dynamic cryptocurrency tracker application entirely through vibe coding and prompt engineering.',
        tags: ['React', 'Vite', 'Tailwind', 'AI'],
        link: 'https://personalizedcrypto2025.vercel.app/',
        image: '/proof/crypto_tracker_app_1771689228918.png'
    },
    {
        title: 'Naseem Collections Store',
        category: 'Shopify Store Architecture',
        desc: 'Designed and optimized a high-converting ecommerce storefront, ensuring rapid load times and seamless user flows.',
        tags: ['Shopify', 'Liquid', 'CRO'],
        link: 'https://naseemcollections.store',
        image: '/proof/ecommerce_store_design_1771689266380.png'
    }
];

export default function ProjectShowcaseSection() {
    return (
        <section id="work" className="py-24 relative bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Project <span className="text-gradient">Showcase</span></h2>
                    <p className="text-lg text-foreground/70">A selection of technical and growth implementations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group relative rounded-3xl bg-card border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col shadow-2xl"
                        >
                            <div className="h-64 relative overflow-hidden flex items-center justify-center shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-100" />
                                <div className="absolute bottom-4 left-6">
                                    <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full text-primary-light border border-primary/20">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-foreground/70 text-base mb-8 leading-relaxed">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-foreground/60 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-auto pt-6 border-t border-white/5">
                                    {project.link !== '#' && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-semibold text-primary-light hover:text-primary transition-colors"
                                        >
                                            <ExternalLink size={18} /> Live Preview
                                        </a>
                                    )}
                                    <button className="flex items-center gap-2 text-sm font-semibold text-foreground/40 hover:text-foreground/80 transition-colors">
                                        <Github size={18} /> Source
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
