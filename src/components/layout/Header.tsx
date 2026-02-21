import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const links = [
    { name: 'Leadership', href: '#leadership' },
    { name: 'Technical', href: '#technical' },
    { name: 'Case Study', href: '#case-study' },
    { name: 'Work', href: '#work' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tighter">
                    <span className="text-gradient">TPM</span>.Portfolio
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Contact
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-card border-b border-white/10 py-6 px-6 md:hidden flex flex-col gap-4 shadow-2xl"
                    >
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium text-foreground hover:text-primary"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button className="w-full mt-4" onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
