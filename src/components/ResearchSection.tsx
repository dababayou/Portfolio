import React from 'react';
import { Microscope, Brain, CheckCircle2, FileText, Activity, BarChart3, Database } from 'lucide-react';
import { RESEARCH_THESIS } from '../data/portfolioData';

interface ResearchProps {
  lang: 'en' | 'id';
}

export const ResearchSection: React.FC<ResearchProps> = ({ lang }) => {
  return (
    <section id="research" className="py-20 relative bg-slate-950/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Microscope className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Undergraduate Research' : 'Tugas Akhir & Riset'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'en' ? 'Deep Learning & Medical AI Research' : 'Riset AI Medis & Deep Learning'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Academic thesis research at ITS Surabaya applying semantic segmentation to 3D dental CBCT medical imaging.'
              : 'Penelitian Tugas Akhir di Teknik Informatika ITS menerapkan segmentasi semantik pada citra medis CBCT 3D.'}
          </p>
        </div>

        {/* Featured Research Banner Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden space-y-8">
          
          {/* Subtle gradient banner */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>

          {/* Research Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold">
                  ITS Thesis Research
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
                  {RESEARCH_THESIS.period}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium">
                  {RESEARCH_THESIS.institution}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {RESEARCH_THESIS.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {RESEARCH_THESIS.summary[lang]}
              </p>
            </div>

            {/* Right Column: Evaluation Metrics Box */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-900/90 border border-purple-500/20 space-y-4">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                <BarChart3 className="w-4 h-4" />
                <span>{lang === 'en' ? 'Evaluation Framework Suite' : 'Kerangka Evaluasi Kuantitatif'}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-purple-300 font-bold">DSC</div>
                  <div className="text-[10px] text-slate-400">Dice Similarity</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-cyan-300 font-bold">IoU</div>
                  <div className="text-[10px] text-slate-400">Intersection over Union</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-pink-300 font-bold">HD95</div>
                  <div className="text-[10px] text-slate-400">Hausdorff Distance</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-emerald-300 font-bold">F1 / Recall</div>
                  <div className="text-[10px] text-slate-400">Precision & Recall</div>
                </div>
              </div>
            </div>

          </div>

          {/* Research Innovation Highlights */}
          <div className="space-y-4 pt-6 border-t border-slate-800">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {lang === 'en' ? 'Key Methodological Contributions:' : 'Kontribusi Metodologi Utama:'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RESEARCH_THESIS.highlights[lang].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Research Tech Stack */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-2">
              {lang === 'en' ? 'Research Stack:' : 'Teknologi Riset:'}
            </span>
            {RESEARCH_THESIS.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
