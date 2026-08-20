import React from 'react';
import { Users, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { ORGANIZATIONAL_EXPERIENCE } from '../data/portfolioData';

interface OrganizationProps {
  lang: 'en' | 'id';
}

export const OrganizationSection: React.FC<OrganizationProps> = ({ lang }) => {
  if (!ORGANIZATIONAL_EXPERIENCE || ORGANIZATIONAL_EXPERIENCE.length === 0) return null;

  return (
    <section className="py-20 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Leadership & Community' : 'Pengalaman Organisasi'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'en' ? 'Organizational Experience' : 'Kepemimpinan & Kegiatan Organisasi'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Leadership roles in ITS student choir operations, event planning, and student governance.'
              : 'Peran kepemimpinan dalam manajemen operasional UKM Paduan Suara ITS dan organisasi kepemudaan.'}
          </p>
        </div>

        {/* Organizational Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ORGANIZATIONAL_EXPERIENCE.map((org, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-4 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 text-[11px] font-mono border border-slate-800">
                    {org.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {org.role}
                </h3>

                <p className="text-xs font-semibold text-cyan-400">
                  {org.organization}
                </p>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {org.description[lang]}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'en' ? 'Active Leadership & Vendor Management' : 'Manajemen Operasional & Vendor'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
