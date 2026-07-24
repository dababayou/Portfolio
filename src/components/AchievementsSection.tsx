import React from 'react';
import { Trophy, Award, ShieldCheck, Sparkles, CheckCircle2, Medal, Check } from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

interface AchievementsProps {
  lang: 'en' | 'id';
}

export const AchievementsSection: React.FC<AchievementsProps> = ({ lang }) => {
  return (
    <section id="achievements" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Honors Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Honors & Recognition' : 'Penghargaan & Prestasi'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'en' ? 'Awards & Competition Achievements' : 'Penghargaan International & Regional'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'International gold medals, regional technology innovation awards, and competitive logic achievements.'
              : 'Medali emas internasional, penghargaan inovasi teknologi regional, dan kompetisi logika.'}
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 border border-slate-800 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {ach.award}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{ach.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {ach.title}
                </h3>

                <p className="text-xs text-cyan-400 font-semibold">
                  {ach.issuer}
                </p>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {ach.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Subsection */}
        <div className="pt-10 border-t border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>{lang === 'en' ? 'Verified Credentials' : 'Sertifikasi Terverifikasi'}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {lang === 'en' ? 'Professional Industry Certifications' : 'Sertifikasi Industri Resmi'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3 hover:border-indigo-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-indigo-300 font-semibold">
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-slate-900 text-[10px] text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
