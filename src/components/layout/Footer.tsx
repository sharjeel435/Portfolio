import { Linkedin, Github, Twitter, Zap, ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="relative border-t border-white/5 mt-0 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-card" />
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

            <div className="relative container mx-auto px-6 max-w-7xl py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center">
                            <Zap className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-sm">
                            <span className="text-gradient">Sharjeel</span>
                            <span className="text-foreground/40">.portfolio</span>
                        </span>
                        <span className="text-foreground/30 text-sm ml-3 hidden sm:block">
                            — Technical Project Manager
                        </span>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-foreground/30 order-last md:order-none">
                        © {new Date().getFullYear()} Sharjeel Safdar. Built with ❤️ & React.
                    </p>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                        {[
                            { icon: Linkedin, href: '#', label: 'LinkedIn' },
                            { icon: Github, href: '#', label: 'GitHub' },
                            { icon: Twitter, href: '#', label: 'Twitter' },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="w-9 h-9 flex items-center justify-center rounded-xl glass border border-white/5 text-foreground/40 hover:text-primary-light hover:border-primary/30 transition-all duration-200"
                            >
                                <Icon size={15} />
                            </a>
                        ))}

                        <button
                            onClick={scrollToTop}
                            aria-label="Scroll to top"
                            className="ml-2 w-9 h-9 flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary-light hover:bg-primary/20 transition-all duration-200"
                        >
                            <ArrowUp size={15} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
