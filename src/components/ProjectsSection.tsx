import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Layers, Sparkles, Activity, ShieldAlert, Cpu } from 'lucide-react';
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
    if (filter === 'competition') return p.category === 'competition' || p.badge?.includes('BytesFest') || p.badge?.includes('INOVBOYO') || p.badge?.includes('TIC');
    return true;
  });

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Works' : 'Semua Proyek', count: PROJECTS.length },
    { id: 'frontend', label: 'Front-End / Web', count: 3 },
    { id: 'ai', label: 'AI & LLM Platforms', count: 3 },
    { id: 'competition', label: lang === 'en' ? 'Award Champions' : 'Penghargaan', count: 3 },
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 border-t border-neutral-800/80 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>02 // SELECTED WORKS & SYSTEMS</span>
            </div>
            <h2 className="text-display text-4xl sm:text-5xl text-white">
              {lang === 'en' ? 'Crafted projects & platforms' : 'Karya & Proyek Terpilih'}
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed">
              {lang === 'en'
                ? 'From enterprise legal AI suites at PLN Group to national award-winning web platforms.'
                : 'Dari platform AI hukum enterprise PLN Group hingga aplikasi web peraih juara nasional.'}
            </p>
          </div>

          {/* Filter Pills with animated layoutId */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-neutral-800">
            {categories.map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id as typeof filter)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    isActive ? 'text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 bg-cyan-400 rounded-lg shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isFlagship = idx === 0 || idx === 1;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 p-6 sm:p-8 transition-all duration-300 cursor-pointer overflow-hidden ${
                    isFlagship ? 'lg:p-10' : ''
                  }`}
                >
                  {/* Subtle hover gradient highlight */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/[0.02] to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                    
                    {/* Project Information */}
                    <div className="lg:col-span-7 space-y-4">
                      {/* Meta header */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                        <span className="text-cyan-400 font-semibold">
                          INDEX // 0{idx + 1}
                        </span>
                        {project.badge && (
                          <span className="px-2.5 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/80">
                            {project.badge}
                          </span>
                        )}
                        <span className="text-neutral-500 tabular-nums">{project.period}</span>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-3">
                          <span>{project.title}</span>
                          <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-cyan-400 group-hover:translate-x-1.5 transition-all" />
                        </h3>
                        <p className="text-sm font-mono text-neutral-400 mt-1">{project.subtitle}</p>
                      </div>

                      {/* Summary */}
                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                        {project.summary[lang]}
                      </p>

                      {/* Role & Metrics */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-2">
                        <div className="text-neutral-400">
                          <span className="text-neutral-500 uppercase">ROLE: </span>
                          <span className="text-neutral-200">{project.role}</span>
                        </div>
                        {project.metrics && (
                          <div className="text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                            ✓ {project.metrics}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Technical Stack & Action Column */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 pt-4 lg:pt-0 lg:pl-6 lg:border-l lg:border-neutral-800">
                      
                      <div className="space-y-3">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                          SYSTEM ARCHITECTURE & TOOLS
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-950 border border-neutral-800 text-neutral-300 group-hover:border-neutral-700 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links & Details CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80 text-xs">
                        <span className="text-cyan-400 font-mono flex items-center gap-1.5 group-hover:underline">
                          <span>FULL ARCHITECTURE</span>
                          <span>→</span>
                        </span>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white font-mono transition-colors"
                          >
                            <span>LIVE APP</span>
                            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                          </a>
                        )}
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Modal with complete details */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
};
