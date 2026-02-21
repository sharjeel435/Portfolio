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

                <div className="relative group/slider overflow-hidden">
                    <motion.div
                        className="flex gap-6 cursor-grab active:cursor-grabbing py-8 px-4"
                        drag="x"
                        dragConstraints={{ right: 0, left: -((proofImages.length * 340) - window.innerWidth + 200) }}
                        whileTap={{ cursor: 'grabbing' }}
                    >
                        {proofImages.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="relative flex-shrink-0 w-[300px] h-[225px] rounded-3xl overflow-hidden border border-white/5 bg-white/5 shadow-2xl group transition-all duration-500 hover:border-primary/50"
                                onClick={() => setSelectedImg(`/proof/${img}`)}
                            >
                                <img
                                    src={`/proof/${img}`}
                                    alt="Proof metric"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                    <div className="bg-white/10 p-4 rounded-full border border-white/20 backdrop-blur-md">
                                        <ZoomIn className="text-white w-6 h-6" />
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                        Metric #{i + 1}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Visual Hint */}
                    <div className="flex justify-center gap-3 mt-8">
                        <div className="h-1.5 w-12 bg-primary rounded-full" />
                        <div className="h-1.5 w-4 bg-white/10 rounded-full" />
                        <div className="h-1.5 w-4 bg-white/10 rounded-full" />
                    </div>
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
