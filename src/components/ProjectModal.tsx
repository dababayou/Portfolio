import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Activity, ShieldCheck } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'id';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, lang }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-neutral-950/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative w-full max-w-3xl rounded-2xl bg-neutral-900 border border-neutral-700/80 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-10">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
                {project.badge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30">
                    {project.badge}
                  </span>
                )}
                <span className="tabular-nums">{project.period}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-cyan-400/90">{project.subtitle}</p>
            </div>

            {/* Role & Metrics Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono">
              <div>
                <span className="text-neutral-500 block uppercase mb-1">
                  {lang === 'en' ? 'ENGINEERING ROLE' : 'PERAN TEKNIS'}
                </span>
                <span className="text-neutral-200 font-semibold text-sm">{project.role}</span>
              </div>
              {project.metrics && (
                <div>
                  <span className="text-neutral-500 block uppercase mb-1">
                    {lang === 'en' ? 'KEY METRIC' : 'METRIK UTAMA'}
                  </span>
                  <span className="text-emerald-400 font-semibold text-sm">{project.metrics}</span>
                </div>
              )}
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                {lang === 'en' ? 'OVERVIEW & OBJECTIVE' : 'RINGKASAN & TUJUAN'}
              </h4>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                {project.summary[lang]}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                {lang === 'en' ? 'ENGINEERING HIGHLIGHTS & RESPONSIBILITIES' : 'SOROTAN ARSITEKTUR & REKAYASA'}
              </h4>
              <ul className="space-y-2.5">
                {project.details[lang].map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="pt-4 border-t border-neutral-800 space-y-2">
              <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                {lang === 'en' ? 'TECHNOLOGIES & PROTOCOLS' : 'TEKNOLOGI DIGUNAKAN'}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-950 border border-neutral-800 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-neutral-950 font-bold text-xs font-mono transition-colors shadow-lg shadow-cyan-400/20"
                >
                  <span>{lang === 'en' ? 'LAUNCH LIVE APPLICATION' : 'BUKA APLIKASI WEB'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-neutral-500">
                  {lang === 'en' ? '[INTERNAL ENTERPRISE / CAPSTONE]' : '[APLIKASI PERUSAHAAN INTERNAL]'}
                </span>
              )}

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-mono transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'CLOSE [ESC]' : 'TUTUP [ESC]'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
