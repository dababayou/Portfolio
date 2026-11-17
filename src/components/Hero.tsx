import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github, Mail, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  lang: 'en' | 'id';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants for smooth staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-tech-grid"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-7"
          >
            {/* Status Telemetry Tag */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  {lang === 'en'
                    ? 'AVAILABLE FOR FULL-TIME & INTERNSHIP'
                    : 'TERBUKA UNTUK FULL-TIME & MAGANG'}
                </span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/60 border border-neutral-800 text-[11px] font-mono text-neutral-400">
                <Terminal className="w-3 h-3 text-cyan-400" />
                <span>SURABAYA (UTC+7)</span>
              </span>
            </motion.div>

            {/* Monumental Editorial Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-display text-4xl sm:text-6xl lg:text-[4.25rem] text-white tracking-tight leading-[1.06]">
                {lang === 'en' ? (
                  <>
                    Front-end developer<br />
                    engineering interfaces with<br />
                    <em className="font-display italic text-cyan-400 pr-1">editorial craft</em>
                    & precision.
                  </>
                ) : (
                  <>
                    Developer front-end<br />
                    merancang antarmuka dengan<br />
                    <em className="font-display italic text-cyan-400 pr-1">estetika editorial</em>
                    & presisi.
                  </>
                )}
              </h1>
            </motion.div>

            {/* Substantive Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal"
            >
              {lang === 'en' ? (
                <>
                  Informatics Engineering student at <strong className="text-white font-medium">ITS Surabaya</strong> (GPA 3.69 / 4.00) specializing in modern front-end architectures. Currently engineering enterprise AI platforms at <strong className="text-white font-medium">PLN Group</strong> (Vue 3, TypeScript, Qwen LLM) and researching deep-learning medical segmentation.
                </>
              ) : (
                <>
                  Mahasiswa Teknik Informatika <strong className="text-white font-medium">ITS Surabaya</strong> (IPK 3.69 / 4.00) dengan spesialisasi arsitektur front-end modern. Mengembangkan platform AI enterprise di <strong className="text-white font-medium">PLN Group</strong> (Vue 3, TypeScript, Qwen LLM) serta riset segmentasi AI medis.
                </>
              )}
            </motion.p>

            {/* Distinct Action Buttons Hierarchy */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary Action: View Projects */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-neutral-950 font-semibold text-sm transition-colors shadow-lg shadow-cyan-400/20 group"
              >
                <span>{lang === 'en' ? 'Explore Projects' : 'Lihat Proyek'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              {/* Secondary Action: Download CV */}
              <motion.a
                href={PERSONAL_INFO.cvPath}
                download="CV_Bayu_Nismara_Nagatama.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-neutral-900 border border-neutral-700/80 hover:border-neutral-500 text-neutral-200 hover:text-white font-medium text-sm transition-colors"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'en' ? 'Download CV' : 'Unduh CV'}</span>
              </motion.a>

              {/* Alternative: Contact */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-neutral-400 hover:text-cyan-400 font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{lang === 'en' ? 'Contact' : 'Kontak'}</span>
              </a>
            </motion.div>

            {/* Social Links & Technical Coordinates */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5 pt-3 border-t border-neutral-800/80 text-xs font-mono text-neutral-400"
            >
              <span className="text-neutral-500 uppercase tracking-wider">{lang === 'en' ? 'Network:' : 'Koneksi:'}</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub</span>
              </a>
              <span className="text-neutral-700 hidden sm:inline">•</span>
              <span className="text-neutral-500 hidden sm:inline">STACK: VUE3 / REACT19 / TS</span>
            </motion.div>

          </motion.div>

          {/* Right Column: Interactive 3D Technical Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-5"
          >
            <HeroVisual />
          </motion.div>

        </div>

        {/* Technical Data Bar / Quick Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-16 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/60"
        >
          {[
            {
              id: '01',
              label: lang === 'en' ? 'Current Industry' : 'Pengalaman Industri',
              value: 'PLN Group',
              detail: 'Vue.js 3 & Enterprise LLM',
            },
            {
              id: '02',
              label: lang === 'en' ? 'Academic Benchmark' : 'Tolok Ukur Akademik',
              value: '3.69 / 4.00',
              detail: 'ITS Informatics Engineering',
            },
            {
              id: '03',
              label: lang === 'en' ? 'National Award' : 'Penghargaan Nasional',
              value: '1st Place TIC 9.0',
              detail: 'National Web Innovation',
            },
            {
              id: '04',
              label: lang === 'en' ? 'Regional Innovation' : 'Inovasi Daerah',
              value: 'INOVBOYO 2025',
              detail: '2nd Runner-Up (BRIDA Jatim)',
            },
          ].map((item) => (
            <div
              key={item.id}
              className="p-5 bg-neutral-950 flex flex-col justify-between hover:bg-neutral-900/80 transition-colors"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-2">
                <span>INDEX // {item.id}</span>
                <span className="text-cyan-400 font-semibold">•</span>
              </div>
              <div className="text-xl font-bold text-white tracking-tight">{item.value}</div>
              <div className="text-xs text-neutral-400 mt-1">{item.detail}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
