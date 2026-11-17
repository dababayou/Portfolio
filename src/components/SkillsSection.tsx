import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsProps {
  lang: 'en' | 'id';
}

const levelBadge: Record<string, { label: string; color: string }> = {
  Expert: { label: 'EXPERT', color: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10' },
  Advanced: { label: 'ADVANCED', color: 'text-blue-400 border-blue-400/30 bg-blue-400/10' },
  Intermediate: { label: 'PROFICIENT', color: 'text-neutral-300 border-neutral-700 bg-neutral-800' },
};

export const SkillsSection: React.FC<SkillsProps> = ({ lang }) => {
  return (
    <section id="skills" className="py-24 lg:py-32 border-t border-neutral-800/80 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>04 // TECHNICAL SPECIFICATION</span>
          </div>
          <h2 className="text-display text-4xl sm:text-5xl text-white">
            {lang === 'en' ? 'Core competencies & tooling' : 'Keahlian & Penguasaan Teknologi'}
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            {lang === 'en'
              ? 'Technologies and frameworks tested across production enterprise software and research pipelines.'
              : 'Perangkat dan kerangka kerja teruji pada aplikasi produksi enterprise dan riset medis.'}
          </p>
        </div>

        {/* 4 Category Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 sm:p-8 space-y-5 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {cat.title[lang]}
                </h3>
                <span className="font-mono text-xs text-cyan-400/90 font-semibold">
                  INDEX // 0{idx + 1}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cat.skills.map((skill) => {
                  const badge = levelBadge[skill.level] || levelBadge.Intermediate;
                  return (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-neutral-950 border border-neutral-850 flex items-center justify-between hover:border-neutral-700 hover:bg-neutral-900/80 transition-colors group cursor-default"
                    >
                      <span className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
