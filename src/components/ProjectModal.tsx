import React from 'react';
import { X, ExternalLink, Award, CheckCircle2, Code2, Calendar, Cpu, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'id';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, lang }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl glass-panel rounded-3xl border border-slate-700/80 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            {project.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {project.badge}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300">
              {project.period}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-cyan-400 text-sm font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Role & Key Metrics Banner */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-slate-400 block font-semibold uppercase">{lang === 'en' ? 'My Role:' : 'Peran Saya:'}</span>
            <span className="text-slate-200 font-bold text-sm">{project.role}</span>
          </div>
          {project.metrics && (
            <div>
              <span className="text-slate-400 block font-semibold uppercase">{lang === 'en' ? 'Key Metric:' : 'Metrik Utama:'}</span>
              <span className="text-emerald-400 font-bold text-sm">{project.metrics}</span>
            </div>
          )}
        </div>

        {/* Overview Summary */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {lang === 'en' ? 'Project Overview' : 'Ringkasan Proyek'}
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.summary[lang]}
          </p>
        </div>

        {/* Key Features & Engineering Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {lang === 'en' ? 'Engineering Highlights & Responsibilities' : 'Sorotan Rekayasa & Tanggung Jawab'}
          </h4>
          <ul className="space-y-2.5">
            {project.details[lang].map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {lang === 'en' ? 'Technologies Implemented' : 'Teknologi Digunakan'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer Links */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20"
            >
              <span>{lang === 'en' ? 'Visit Live Web App' : 'Buka Aplikasi Live'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-xs text-slate-400 italic">
              {lang === 'en' ? 'Internal Enterprise / Capstone Build' : 'Aplikasi Perusahaan / Capstone Internal'}
            </span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
          >
            {lang === 'en' ? 'Close' : 'Tutup'}
          </button>
        </div>

      </div>
    </div>
  );
};
