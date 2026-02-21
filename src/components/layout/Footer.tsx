export default function Footer() {
    return (
        <footer className="bg-card py-12 border-t border-white/10 mt-20">
            <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-foreground/60">
                    © {new Date().getFullYear()} Technical Project Manager Portfolio. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="text-foreground/60 hover:text-primary transition-colors">LinkedIn</a>
                    <a href="#" className="text-foreground/60 hover:text-primary transition-colors">GitHub</a>
                    <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Twitter</a>
                </div>
            </div>
        </footer>
    );
}
