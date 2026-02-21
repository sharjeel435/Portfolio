import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Personalized Crypto App',
        category: 'Prompt-Driven Development',
        desc: 'Built a modern, dynamic cryptocurrency tracker application entirely through vibe coding and prompt engineering.',
        tags: ['React', 'Vite', 'Tailwind', 'AI'],
        link: 'https://personalizedcrypto2025.vercel.app/'
    },
    {
        title: 'Naseem Collections Store',
        category: 'Shopify Store Architecture',
        desc: 'Designed and optimized a high-converting ecommerce storefront, ensuring rapid load times and seamless user flows.',
        tags: ['Shopify', 'Liquid', 'CRO'],
        link: 'https://naseemcollections.store'
    },
    {
        title: 'Automated Growth Engine',
        category: 'Growth Systems',
        desc: 'Built an automated pipeline connecting Meta Lead Ads via Zapier/Webhooks directly into a custom CRM for instant sales outreach.',
        tags: ['APIs', 'Node.js', 'Zapier'],
        link: '#'
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative rounded-2xl bg-card border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col"
                        >
                            <div className="h-48 bg-white/5 relative overflow-hidden flex items-center justify-center shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="text-foreground/30 font-medium tracking-widest uppercase text-sm">{project.category}</span>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                <p className="text-foreground/70 text-sm mb-6 line-clamp-3">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-foreground/80">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                                    {project.link !== '#' && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors disabled:opacity-50"><ExternalLink size={20} /></a>
                                    )}
                                    <button className="text-foreground/60 hover:text-primary transition-colors disabled:opacity-50"><Github size={20} /></button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
