import React from 'react';
import { Cpu, CheckCircle2, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsProps {
  lang: 'en' | 'id';
}

export const SkillsSection: React.FC<SkillsProps> = ({ lang }) => {
  return (
    <section id="skills" className="py-20 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Technical Proficiency' : 'Matriks Keahlian'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'en' ? 'Skills & Competencies' : 'Keahlian & Kemampuan Teknis'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Comprehensive toolkit spanning modern web frameworks, AI models, backend tools, and agile workflows.'
              : 'Perangkat teknologi lengkap mencakup framework web modern, model AI, perangkat backend, dan alur kerja agile.'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-lg font-bold border border-cyan-500/20">
                  {idx + 1}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {cat.title[lang]}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between hover:bg-slate-850 hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{skill.icon}</span>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-200">{skill.name}</div>
                        <div className="text-[10px] text-cyan-400 font-medium">{skill.level}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
