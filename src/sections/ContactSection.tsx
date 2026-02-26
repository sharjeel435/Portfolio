import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Send, CheckCircle2, Mail, MessageSquare, User, Linkedin, Github } from 'lucide-react';

const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'text-blue-400' },
    { icon: Github, label: 'GitHub', href: '#', color: 'text-foreground/60' },
    { icon: Mail, label: 'Email', href: 'mailto:sharjeel@example.com', color: 'text-primary-light' },
];

export default function ContactSection() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [focused, setFocused] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        setTimeout(() => {
            setLoading(false);
            if (formData.name && formData.email && formData.message) {
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSuccess(false), 6000);
            } else {
                setError('Please fill in all fields.');
            }
        }, 1500);
    };

    const inputClass = (field: string) =>
        `w-full bg-background/60 border rounded-xl px-4 py-3.5 text-foreground text-sm placeholder-foreground/20 focus:outline-none transition-all duration-200 ${focused === field
            ? 'border-primary/60 shadow-[0_0_0_3px_rgba(124,58,237,0.12)]'
            : 'border-white/10 hover:border-white/20'
        }`;

    return (
        <section id="contact" className="py-28 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-card" />
            <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px section-divider" />

            {/* Orbs */}
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-xs font-bold text-primary-light uppercase tracking-widest mb-5">
                        💬 Get In Touch
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                        Let's Build{' '}
                        <span className="text-gradient">Together</span>
                    </h2>
                    <p className="text-lg text-foreground/50 max-w-xl mx-auto">
                        Whether it's scaling a brand or architecting a technical system, I'm ready to execute.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left sidebar info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Response time */}
                        <div className="p-6 rounded-2xl glass-card border border-white/5">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                </div>
                                <h3 className="font-bold text-sm">Quick Response</h3>
                            </div>
                            <p className="text-sm text-foreground/50 leading-relaxed">
                                I typically respond within <strong className="text-foreground/80">24 hours</strong>.
                                Looking forward to hearing about your project.
                            </p>
                        </div>

                        {/* What I do */}
                        <div className="p-6 rounded-2xl glass-card border border-white/5">
                            <h3 className="font-bold text-sm mb-4">I can help with:</h3>
                            <ul className="space-y-2.5">
                                {[
                                    'Technical Project Management',
                                    'Ecommerce Growth Strategy',
                                    'Shopify Store Development',
                                    'Performance Marketing',
                                    'Data-Driven Consulting',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/55">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Socials */}
                        <div className="p-6 rounded-2xl glass-card border border-white/5">
                            <h3 className="font-bold text-sm mb-4">Connect with me:</h3>
                            <div className="flex gap-3">
                                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="flex-1 flex flex-col items-center gap-2 p-3 rounded-xl glass border border-white/5 hover:border-primary/30 transition-all group"
                                    >
                                        <Icon className={`w-5 h-5 ${color} group-hover:scale-110 transition-transform`} />
                                        <span className="text-xs text-foreground/40">{label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-3"
                    >
                        <div className="p-8 rounded-2xl glass-card border border-white/5 h-full">
                            {success ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center h-full py-16 text-center"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 0.5 }}
                                        className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-6"
                                    >
                                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                                    </motion.div>
                                    <h3 className="text-2xl font-black mb-3">Message Sent! 🎉</h3>
                                    <p className="text-foreground/50">I'll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5 h-full flex flex-col">
                                    {error && (
                                        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="flex items-center gap-1.5 text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                                                <User className="w-3 h-3" /> Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                onFocus={() => setFocused('name')}
                                                onBlur={() => setFocused('')}
                                                className={inputClass('name')}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="flex items-center gap-1.5 text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                                                <Mail className="w-3 h-3" /> Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                onFocus={() => setFocused('email')}
                                                onBlur={() => setFocused('')}
                                                className={inputClass('email')}
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 flex-1">
                                        <label htmlFor="message" className="flex items-center gap-1.5 text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                                            <MessageSquare className="w-3 h-3" /> Message
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            onFocus={() => setFocused('message')}
                                            onBlur={() => setFocused('')}
                                            className={`${inputClass('message')} resize-none`}
                                            placeholder="Tell me about your project goals and challenges..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="gradient"
                                        size="lg"
                                        className="w-full"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span className="flex items-center gap-2">
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                                />
                                                Sending...
                                            </span>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
