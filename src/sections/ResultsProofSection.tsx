import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const proofImages = [
    { file: 'ANALYTICS.PNG', label: 'Analytics Dashboard' },
    { file: 'CCD.PNG', label: 'Customer Cohort Data' },
    { file: 'Capture3.PNG', label: 'Campaign Performance' },
    { file: 'LATEST ALL.PNG', label: 'Overall Store Metrics' },
    { file: 'LATEST DASHBOARD.PNG', label: 'Live Dashboard' },
    { file: 'LOC.PNG', label: 'Location Insights' },
    { file: 'LOCATION.PNG', label: 'Geographic Data' },
    { file: 'NASEEM STORE 4 MONTH SALE 5 M.PNG', label: 'Sales Report (5M+)' },
    { file: 'NASEEM STORE 4 MONTH SALE.PNG', label: '4-Month Sales' },
    { file: 'NEW ONE.PNG', label: 'Latest Snapshot' },
    { file: 'OVERALL.PNG', label: 'Overall Performance' },
    { file: 'STORE ALL.PNG', label: 'Store Overview' },
];

export default function ResultsProofSection() {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    const goPrev = () => setSelectedIdx((i) => (i !== null ? (i - 1 + proofImages.length) % proofImages.length : null));
    const goNext = () => setSelectedIdx((i) => (i !== null ? (i + 1) % proofImages.length : null));

    return (
        <section id="proof" className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px section-divider" />

            {/* Top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)' }} />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-amber-500/25 text-xs font-bold text-amber-400 uppercase tracking-widest mb-5">
                        📊 Social Proof
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-5">
                        Results &{' '}
                        <span className="text-gradient">Proof</span>
                    </h2>
                    <p className="text-lg text-foreground/50 mb-4">
                        Data speaks louder than words. Real dashboards and store metrics from live projects.
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs text-foreground/30 uppercase tracking-widest border border-white/10 px-4 py-2 rounded-xl">
                        🔒 NDA: Store names and sensitive figures redacted where applicable
                    </div>
                </motion.div>

                {/* Masonry-like Grid */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {proofImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04, duration: 0.5 }}
                            className="relative break-inside-avoid rounded-2xl overflow-hidden border border-white/5 bg-card group cursor-zoom-in hover:border-primary/40 transition-all duration-300 shadow-card"
                            onClick={() => setSelectedIdx(i)}
                        >
                            <img
                                src={`/proof/${img.file}`}
                                alt={img.label}
                                className="w-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-500"
                                loading="lazy"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                                <span className="text-xs font-semibold text-white/80">{img.label}</span>
                                <div className="bg-white/15 backdrop-blur-md p-2 rounded-lg border border-white/20">
                                    <ZoomIn className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* Index badge */}
                            <div className="absolute top-3 left-3 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                                #{i + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIdx !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedIdx(null)}
                        className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        {/* Close */}
                        <button
                            className="absolute top-5 right-5 w-10 h-10 glass rounded-xl border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors z-[101]"
                            onClick={() => setSelectedIdx(null)}
                        >
                            <X size={18} />
                        </button>

                        {/* Prev */}
                        <button
                            className="absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 glass rounded-xl border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors z-[101]"
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Next */}
                        <button
                            className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 glass rounded-xl border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors z-[101]"
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                        >
                            <ChevronRight size={20} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.88, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.88, opacity: 0 }}
                            transition={{ type: 'spring', damping: 20 }}
                            className="relative max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={`/proof/${proofImages[selectedIdx].file}`}
                                alt={proofImages[selectedIdx].label}
                                className="w-full max-h-[80vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
                            />
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-sm font-semibold text-white/60">{proofImages[selectedIdx].label}</span>
                                <span className="text-xs text-white/25">{selectedIdx + 1} / {proofImages.length}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
