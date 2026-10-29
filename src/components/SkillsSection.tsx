import React, { useEffect, useRef } from 'react';
import { Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsProps {
  lang: 'en' | 'id';
}

const levelColor: Record<string, string> = {
  Expert: 'text-cyan-400',
  Advanced: 'text-indigo-400',
  Intermediate: 'text-purple-400',
};

const levelBg: Record<string, string> = {
  Expert: 'bg-cyan-500/10 border-cyan-500/20',
  Advanced: 'bg-indigo-500/10 border-indigo-500/20',
  Intermediate: 'bg-purple-500/10 border-purple-500/20',
};

export const SkillsSection: React.FC<SkillsProps> = ({ lang }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.unobserve(el); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Stagger reveal skill cards
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.skill-category-card');
    if (!cards) return;
    const observers: IntersectionObserver[] = [];
    cards.forEach((card, i) => {
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => card.classList.add('card-revealed'), i * 100);
          obs.unobserve(card);
        }
      }, { threshold: 0.1 });
      obs.observe(card);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative bg-[#07090e] section-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="skill-category-card project-card glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <span className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-lg font-black border border-cyan-500/20">
                  {idx + 1}
                </span>
                <h3 className="text-xl font-bold text-white">{cat.title[lang]}</h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill p-3 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between hover:bg-slate-800/90 hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg group-hover/skill:scale-125 transition-transform duration-200 inline-block">
                        {skill.icon}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-200">{skill.name}</div>
                        <div className={`text-[10px] font-semibold ${levelColor[skill.level] || 'text-slate-400'}`}>
                          {skill.level}
                        </div>
                      </div>
                    </div>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full border font-bold ${levelBg[skill.level] || 'bg-slate-800 border-slate-700'} ${levelColor[skill.level] || 'text-slate-400'} opacity-0 group-hover/skill:opacity-100 transition-opacity`}>
                      {skill.level.charAt(0)}
                    </span>
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
