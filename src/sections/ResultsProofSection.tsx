import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const proofImages = [
    'ANALYTICS.PNG',
    'CCD.PNG',
    'Capture3.PNG',
    'LATEST ALL.PNG',
    'LATEST DASHBOARD.PNG',
    'LOC.PNG',
    'LOCATION.PNG',
    'NASEEM STORE 4 MONTH SALE 5 M.PNG',
    'NASEEM STORE 4 MONTH SALE.PNG',
    'NEW ONE.PNG',
    'OVERALL.PNG',
    'STORE ALL.PNG'
];

export default function ResultsProofSection() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <section id="proof" className="py-24 relative bg-card">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Results & <span className="text-gradient">Proof</span></h2>
                    <p className="text-lg text-foreground/70 mb-4">
                        Data speaks louder than words. A collection of real dashboards and store metrics.
                    </p>
                    <div className="text-xs text-foreground/50 uppercase tracking-widest border border-white/10 inline-block px-3 py-1 rounded">
                        NDA Disclaimer: Store names/sensitive data redacted where applicable.
                    </div>
                </div>

                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {proofImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 4) * 0.1 }}
                            className="relative group cursor-pointer rounded-lg overflow-hidden border border-white/10"
                            onClick={() => setSelectedImg(`/proof/${img}`)}
                        >
                            <img src={`/proof/${img}`} alt="Proof metric" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ZoomIn className="text-white w-8 h-8" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Preview */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-card p-2 rounded-full z-[101]" onClick={() => setSelectedImg(null)}>
                            <X size={24} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={selectedImg}
                            alt="Proof fullscreen"
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
