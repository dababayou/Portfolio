import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Brain, BarChart3, Binary, ArrowUpRight } from 'lucide-react';
import { RESEARCH_THESIS } from '../data/portfolioData';

interface ResearchProps {
  lang: 'en' | 'id';
}

export const ResearchSection: React.FC<ResearchProps> = ({ lang }) => {
  return (
    <section id="research" className="py-24 lg:py-32 border-t border-neutral-800/80 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>03 // UNDERGRADUATE THESIS & RESEARCH</span>
          </div>
          <h2 className="text-display text-4xl sm:text-5xl text-white">
            {lang === 'en' ? 'Medical AI & Semantic Segmentation' : 'Riset AI Medis & Deep Learning'}
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            {lang === 'en'
              ? 'Academic research at ITS Surabaya applying YOLO-based deep learning to 3D dental CBCT medical imaging.'
              : 'Penelitian Tugas Akhir di Teknik Informatika ITS menerapkan segmentasi semantik pada citra medis CBCT 3D.'}
          </p>
        </div>

        {/* Featured Research Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 sm:p-10 space-y-8 relative overflow-hidden"
        >
          {/* Top banner info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 font-semibold">
                  ITS UNDERGRADUATE THESIS
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-300">
                  {RESEARCH_THESIS.period}
                </span>
                <span className="text-neutral-500">
                  {RESEARCH_THESIS.institution}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                {RESEARCH_THESIS.title}
              </h3>

              <p className="text-base text-neutral-300 leading-relaxed font-normal">
                {RESEARCH_THESIS.summary[lang]}
              </p>
            </div>

            {/* Evaluation Framework Box */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                <BarChart3 className="w-4 h-4" />
                <span>EVALUATION FRAMEWORK SUITE</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
                  <div className="text-cyan-400 font-bold text-sm">DSC</div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">Dice Similarity</div>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
                  <div className="text-cyan-400 font-bold text-sm">IoU</div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">Overlap Ratio</div>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
                  <div className="text-cyan-400 font-bold text-sm">HD95</div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">Hausdorff Dist.</div>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
                  <div className="text-emerald-400 font-bold text-sm">F1 / ACC</div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">Precision-Recall</div>
                </div>
              </div>
            </div>

          </div>

          {/* Highlights Grid */}
          <div className="space-y-3 pt-6 border-t border-neutral-800">
            <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              {lang === 'en' ? 'KEY METHODOLOGICAL INNOVATIONS' : 'KONTRIBUSI METODOLOGIS UTAMA'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RESEARCH_THESIS.highlights[lang].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-start gap-3">
                  <Brain className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <span className="text-sm text-neutral-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Research Stack */}
          <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-neutral-500 mr-2">RESEARCH PIPELINE:</span>
            {RESEARCH_THESIS.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-950 border border-neutral-800 text-cyan-300"
              >
                {t}
              </span>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
