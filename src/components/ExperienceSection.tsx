import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Building2, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceProps {
  lang: 'en' | 'id';
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState(EXPERIENCES[0].id);
  const activeExp = EXPERIENCES.find((e) => e.id === activeTab) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 lg:py-32 border-t border-neutral-800/80 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>01 // PROFESSIONAL TIMELINE</span>
          </div>
          <h2 className="text-display text-4xl sm:text-5xl text-white">
            {lang === 'en' ? 'Work & Enterprise Experience' : 'Pengalaman Profesional & Enterprise'}
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            {lang === 'en'
              ? 'Proven track record of engineering production web applications for major corporations and agencies.'
              : 'Rekam jejak teruji dalam mengembangkan aplikasi web skala produksi untuk BUMN dan agensi digital.'}
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Company Selector Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {EXPERIENCES.map((exp) => {
              const isActive = exp.id === activeTab;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`w-full text-left p-5 rounded-xl transition-all duration-200 border relative overflow-hidden cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 border-neutral-700 text-white shadow-lg'
                      : 'bg-neutral-950/60 border-neutral-800/80 text-neutral-400 hover:text-white hover:bg-neutral-900/60 hover:border-neutral-750'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="exp-active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <div className="space-y-1 pl-2">
                    <div className="font-bold text-base flex items-center justify-between">
                      <span>{exp.company}</span>
                      <span className="text-[11px] font-mono text-cyan-400">0{EXPERIENCES.indexOf(exp) + 1}</span>
                    </div>
                    <div className="text-xs text-neutral-400 font-mono">{exp.role}</div>
                    <div className="text-[11px] font-mono text-neutral-500 pt-1">{exp.period}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Experience Details with AnimatePresence */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="rounded-2xl bg-neutral-900/70 border border-neutral-800 p-6 sm:p-8 space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-neutral-800">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {activeExp.role}
                    </h3>
                    <p className="text-cyan-400 font-mono text-sm font-semibold flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{activeExp.company}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
                    <span className="px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {activeExp.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {activeExp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-base text-neutral-300 leading-relaxed font-normal">
                  {activeExp.summary[lang]}
                </p>

                {/* Key Contributions */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                    {lang === 'en' ? 'ENGINEERING IMPACT & RESPONSIBILITIES' : 'KONTRIBUSI UTAMA & DAMPAK'}
                  </h4>
                  <ul className="space-y-2.5">
                    {activeExp.achievements[lang].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech & Actions */}
                <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono text-neutral-500 mr-2">TECH:</span>
                    {activeExp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {activeExp.liveUrl && (
                    <a
                      href={activeExp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-neutral-950 font-bold text-xs font-mono transition-colors"
                    >
                      <span>LAUNCH LEGALBOT ID</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
