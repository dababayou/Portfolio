import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building2, ExternalLink } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceProps {
  lang: 'en' | 'id';
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState(EXPERIENCES[0].id);

  const activeExp = EXPERIENCES.find(e => e.id === activeTab) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Professional Track Record' : 'Pengalaman Kerja'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'en' ? 'Work & Enterprise Experience' : 'Pengalaman Profesional & Enterprise'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Proven track record of building production web applications for major Indonesian corporations and agencies.'
              : 'Rekam jejak teruji dalam membangun aplikasi web skala produksi untuk BUMN dan agensi digital.'}
          </p>
        </div>

        {/* Experience Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Company selector buttons */}
          <div className="lg:col-span-4 space-y-3">
            {EXPERIENCES.map((exp) => {
              const isActive = exp.id === activeTab;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 flex items-start justify-between border ${
                    isActive
                      ? 'bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/70 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Building2 className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                      <span className={`font-bold text-base ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium pl-6">{exp.role}</p>
                    <div className="flex items-center gap-2 pl-6 pt-1 text-[11px] text-slate-400">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 mt-1 transition-transform ${isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Card */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 relative overflow-hidden">
              
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500"></div>

              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    {activeExp.role}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-cyan-400 font-semibold text-base flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{activeExp.company}</span>
                    </p>
                    {activeExp.liveUrl && (
                      <a
                        href={activeExp.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-bold hover:bg-cyan-500/20 transition-all"
                      >
                        <span>LegalBot ID</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {activeExp.period}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-medium border border-indigo-500/20 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    {activeExp.location}
                  </span>
                </div>
              </div>

              {/* Overview Summary */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeExp.summary[lang]}
              </p>

              {/* Key Achievements Bullet points */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {lang === 'en' ? 'Key Contributions & Impact:' : 'Kontribusi Utama & Dampak:'}
                </h4>
                <ul className="space-y-3">
                  {activeExp.achievements[lang].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 mr-2">
                    {lang === 'en' ? 'Tech Stack:' : 'Teknologi:'}
                  </span>
                  {activeExp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 text-xs font-medium"
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20"
                  >
                    <span>{lang === 'en' ? 'Launch PLN LegalBot AI' : 'Buka PLN LegalBot AI'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
