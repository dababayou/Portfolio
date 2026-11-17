import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

interface AchievementsProps {
  lang: 'en' | 'id';
}

export const AchievementsSection: React.FC<AchievementsProps> = ({ lang }) => {
  return (
    <section id="achievements" className="py-24 lg:py-32 border-t border-neutral-800/80 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>05 // HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-display text-4xl sm:text-5xl text-white">
            {lang === 'en' ? 'Awards & Competition Milestones' : 'Penghargaan & Kompetisi'}
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            {lang === 'en'
              ? 'Recognized at national web development competitions and regional innovation challenges.'
              : 'Meraih prestasi dalam kompetisi pengembangan web tingkat nasional dan kompetisi inovasi daerah.'}
          </p>
        </div>

        {/* Awards Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 sm:p-7 space-y-4 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center border border-amber-400/20">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-neutral-500">{ach.date}</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 font-bold uppercase inline-block mb-2">
                    {ach.award}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">{ach.issuer}</p>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {ach.description[lang]}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-500">
                VERIFIED // NATIONAL JURY AUDITED
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Sub-block */}
        <div className="pt-8 border-t border-neutral-800 space-y-8">
          <div className="max-w-xl space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {lang === 'en' ? 'Industry Certifications & Credentials' : 'Sertifikasi Industri Resmi'}
            </h3>
            <p className="text-sm text-neutral-400 font-mono">
              VERIFIED CREDENTIALS // IBM, AWS, PALO ALTO
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="rounded-xl bg-neutral-900/60 border border-neutral-800 p-5 space-y-4 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div className="space-y-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-mono text-neutral-400">{cert.issuer}</p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-neutral-800/80">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-950 border border-neutral-800 text-neutral-300"
                    >
                      {s}
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
