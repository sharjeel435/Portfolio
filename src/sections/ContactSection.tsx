import { useState } from 'react';
import { motion } from 'framer-motion';
// import emailjs from 'emailjs-com';
import Button from '../components/ui/Button';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '', email: '', message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Example EmailJS setup (replace with real keys in production)
        // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')

        // Simulating API call since keys aren't provided
        setTimeout(() => {
            setLoading(false);
            if (formData.name && formData.email && formData.message) {
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSuccess(false), 5000);
            } else {
                setError('Please fill in all fields.');
            }
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative bg-background">
            <div className="absolute inset-0 bg-primary/5 bg-grid-white opacity-20 pointer-events-none" />
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="bg-card/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's <span className="text-gradient">Talk Growth</span></h2>
                        <p className="text-foreground/70">Whether it's scaling a brand or architecting a robust technical system, I'm ready to execute.</p>
                    </div>

                    {success ? (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12 text-center text-primary-light">
                            <CheckCircle2 className="w-16 h-16 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-foreground/70">I'll get back to you within 24 hours.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">{error}</div>}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                                    <input
                                        type="text" id="name" required
                                        value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                                    <input
                                        type="email" id="email" required
                                        value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                                <textarea
                                    id="message" required rows={4}
                                    value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="How can we build together?"
                                ></textarea>
                            </div>

                            <Button type="submit" size="lg" className="w-full" disabled={loading}>
                                {loading ? 'Sending...' : (
                                    <span className="flex items-center gap-2">Send Message <Send className="w-4 h-4" /></span>
                                )}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
