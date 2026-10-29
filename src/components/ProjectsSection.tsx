import React, { useState, useEffect, useRef } from 'react';
import { FolderGit2, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  lang: 'en' | 'id';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'ai' | 'competition'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'frontend') return p.category === 'frontend' || p.category === 'featured';
    if (filter === 'ai') return p.category === 'ai' || p.category === 'featured';
    if (filter === 'competition') return p.category === 'competition' || p.badge?.includes('BytesFest') || p.badge?.includes('INOVBOYO');
    return true;
  });

  // Scroll reveal for section
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { section.classList.add('revealed'); observer.unobserve(section); } },
      { threshold: 0.05 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Staggered card reveal
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.project-card');
    if (!cards) return;
    const observers: IntersectionObserver[] = [];
    cards.forEach((card, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => card.classList.add('card-revealed'), i * 80);
            obs.unobserve(card);
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(card);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [filteredProjects]);

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Projects' : 'Semua Proyek', icon: '⚡' },
    { id: 'frontend', label: lang === 'en' ? 'Front-End & Full Stack' : 'Front-End & Web', icon: '🎨' },
    { id: 'ai', label: lang === 'en' ? 'AI & Machine Learning' : 'AI & Deep Learning', icon: '🤖' },
    { id: 'competition', label: lang === 'en' ? 'Award Winners' : 'Kompetisi & Penghargaan', icon: '🏆' },
  ];

  const badgeColorMap: Record<string, string> = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  };

  return (
    <section
      id="projects"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 relative bg-[#07090e] section-reveal"
    >
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as typeof filter)}
              className={`filter-btn flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 scale-105'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-600 hover:bg-slate-800/80 hover:scale-105'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`project-card glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6 relative overflow-hidden group cursor-pointer project-card-tilt ${
                idx === filteredProjects.length - 1 && filteredProjects.length % 2 !== 0
                  ? 'md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto'
                  : ''
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none rounded-3xl"></div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="space-y-4 relative z-10">
                {/* Badge & Period */}
                <div className="flex items-center justify-between gap-2">
                  {project.badge ? (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${badgeColorMap[project.badgeColor || 'cyan'] || badgeColorMap.cyan}`}>
                      {project.badge}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-400">
                      {project.period}
                    </span>
                  )}
                  <span className="text-xs text-slate-400 font-mono">{project.period}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-cyan-400 flex-shrink-0" />
                  </h3>
                  <p className="text-slate-400 text-xs font-semibold mt-1">{project.subtitle}</p>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.summary[lang]}
                </p>
              </div>

              {/* Tech & Links */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80 relative z-10">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[11px] font-medium border border-slate-800 group-hover:border-slate-700 transition-colors duration-200"
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

                <div className="flex items-center justify-between pt-2 text-xs font-semibold">
                  <span className="text-cyan-400 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    {lang === 'en' ? 'Click for Full Breakdown' : 'Klik untuk Detail Lengkap'}
                  </span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 hover:underline transition-colors"
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

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
};
