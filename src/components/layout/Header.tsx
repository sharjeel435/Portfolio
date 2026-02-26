import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import Button from '../ui/Button';

const links = [
    { name: 'Leadership', href: '#leadership', emoji: '⚡' },
    { name: 'Technical', href: '#technical', emoji: '🔧' },
    { name: 'Case Study', href: '#case-study', emoji: '📈' },
    { name: 'Work', href: '#work', emoji: '🚀' },
    { name: 'Results', href: '#proof', emoji: '📊' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setActiveLink(href);
        setMobileMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'py-3 glass border-b border-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.5)]'
                    : 'py-6 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center shadow-glow-violet">
                            <Zap className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-lg font-bold tracking-tight">
                            <span className="text-gradient">Sharjeel</span>
                            <span className="text-foreground/50">.</span>
                            <span className="text-foreground/80">portfolio</span>
                        </span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {links.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.href)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${activeLink === link.href
                                    ? 'text-primary-light'
                                    : 'text-foreground/60 hover:text-foreground'
                                    }`}
                            >
                                {activeLink === link.href && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </button>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            variant="gradient"
                            size="sm"
                            onClick={() => handleNavClick('#contact')}
                        >
                            Let's Talk
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <motion.button
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass border border-white/10 text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait">
                            {mobileMenuOpen ? (
                                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                    <X size={20} />
                                </motion.div>
                            ) : (
                                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                    <Menu size={20} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </motion.header>

            {/* Mobile Nav Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 z-50 w-72 glass-strong border-l border-white/10 p-8 flex flex-col gap-3 md:hidden"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-sm font-bold text-foreground/50 uppercase tracking-widest">Navigation</span>
                                <button onClick={() => setMobileMenuOpen(false)} className="text-foreground/40 hover:text-foreground">
                                    <X size={20} />
                                </button>
                            </div>

                            {links.map((link, i) => (
                                <motion.button
                                    key={link.name}
                                    initial={{ x: 30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.05 + 0.1 }}
                                    onClick={() => handleNavClick(link.href)}
                                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-left text-foreground/70 hover:text-foreground hover:bg-white/5 transition-all group"
                                >
                                    <span className="text-xl">{link.emoji}</span>
                                    <span className="font-medium">{link.name}</span>
                                </motion.button>
                            ))}

                            <div className="mt-auto">
                                <Button
                                    variant="gradient"
                                    className="w-full"
                                    onClick={() => handleNavClick('#contact')}
                                >
                                    Let's Talk Growth →
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
