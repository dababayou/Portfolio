import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ArrowRight, Award, Sparkles, Filter, Code2, Layers } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  lang: 'en' | 'id';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'ai' | 'competition'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'frontend') return p.category === 'frontend' || p.category === 'featured';
    if (filter === 'ai') return p.category === 'ai' || p.category === 'featured';
    if (filter === 'competition') return p.category === 'competition' || p.badge?.includes('BytesFest') || p.badge?.includes('INOVBOYO');
    return true;
  });

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Projects' : 'Semua Proyek' },
    { id: 'frontend', label: lang === 'en' ? 'Front-End & Full Stack' : 'Front-End & Web' },
    { id: 'ai', label: lang === 'en' ? 'AI & Machine Learning' : 'AI & Deep Learning' },
    { id: 'competition', label: lang === 'en' ? 'Award Winners' : 'Kompetisi & Penghargaan' },
  ];

  return (
    <section id="projects" className="py-24 relative bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Portfolio Showcase' : 'Karya & Proyek'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'en' ? 'Featured Software & AI Builds' : 'Proyek Perangkat Lunak & AI Unggulan'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Real-world capstone platforms, cultural WebGL initiatives, and award-winning AI innovations.'
              : 'Platform capstone industri, situs dokumenter WebGL, dan inovasi AI peraih penghargaan.'}
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6 relative overflow-hidden group cursor-pointer ${
                idx === filteredProjects.length - 1 && filteredProjects.length % 2 !== 0
                  ? 'md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto'
                  : ''
              }`}
              onClick={() => setSelectedProject(project)}
            >
              
              {/* Badge & Period Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  {project.badge ? (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {project.badge}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-400">
                      {project.period}
                    </span>
                  )}
                  <span className="text-xs text-slate-400 font-mono">{project.period}</span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-cyan-400" />
                  </h3>
                  <p className="text-slate-400 text-xs font-semibold mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Project Summary */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.summary[lang]}
                </p>
              </div>

              {/* Tech Stack Pills & Details Button */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[11px] font-medium border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-[11px]">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 text-xs font-semibold text-cyan-400">
                  <span>{lang === 'en' ? 'Click for Full Breakdown →' : 'Klik untuk Detail Lengkap →'}</span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-emerald-400 hover:underline"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
};
