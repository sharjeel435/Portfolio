import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../components/ui/Button';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-white/10 text-sm font-medium text-primary-light mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for New Opportunities
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        Sharjeel Safdar <br className="hidden md:block" />
                        <span className="text-gradient">Technical Project Manager</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                        I bridge the gap between engineering and revenue. Scaling ecommerce brands
                        through robust technical architecture, data-driven systems, and cross-functional leadership.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Button size="lg" className="w-full sm:w-auto gap-2 group" onClick={() => document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Strategy Case Study
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Get in Touch
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
