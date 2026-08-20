import React from 'react';
import { ArrowRight, Download, Sparkles, Code2, Cpu, Award, GraduationCap, CheckCircle2, Linkedin, Github, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  lang: 'en' | 'id';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const techPills = [
    { name: 'Vue.js 3', color: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10' },
    { name: 'React 19', color: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10' },
    { name: 'TypeScript', color: 'border-blue-500/30 text-blue-300 bg-blue-500/10' },
    { name: 'Tailwind CSS v4', color: 'border-sky-500/30 text-sky-300 bg-sky-500/10' },
    { name: 'Laravel 12', color: 'border-red-500/30 text-red-300 bg-red-500/10' },
    { name: 'PyTorch / YOLO', color: 'border-amber-500/30 text-amber-300 bg-amber-500/10' },
    { name: 'GSAP & Motion', color: 'border-purple-500/30 text-purple-300 bg-purple-500/10' },
    { name: 'IBM watsonx', color: 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10' },
  ];

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-grid-pattern">
      {/* Radial glow effects background */}
      <div className="glow-orb-1"></div>
      <div className="glow-orb-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-medium shadow-inner shadow-cyan-500/10">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'en' ? 'ITS Informatics Engineering • GPA 3.64 / 4.00' : 'Teknik Informatika ITS • IPK 3.64 / 4.00'}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {lang === 'en' ? 'Hi, I\'m ' : 'Halo, Saya '}
                <span className="text-gradient-cyan">Bayu Nismara</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-cyan-400" />
                <span>{PERSONAL_INFO.title[lang]}</span>
              </h2>
            </div>

            {/* Bio summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio[lang]}
            </p>

            {/* Key Metric Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-3.5 rounded-2xl glass-panel border border-slate-800">
                <div className="text-2xl font-black text-cyan-400">PLN & Roundbytes</div>
                <div className="text-xs text-slate-400 font-medium">{lang === 'en' ? 'Industry Experience' : 'Pengalaman Kerja'}</div>
              </div>
              <div className="p-3.5 rounded-2xl glass-panel border border-slate-800">
                <div className="text-2xl font-black text-indigo-400">3.64</div>
                <div className="text-xs text-slate-400 font-medium">{lang === 'en' ? 'GPA at ITS Surabaya' : 'IPK Teknik Informatika'}</div>
              </div>
              <div className="p-3.5 rounded-2xl glass-panel border border-slate-800">
                <div className="text-2xl font-black text-amber-400">3x Gold</div>
                <div className="text-xs text-slate-400 font-medium">{lang === 'en' ? 'International Choir' : 'Juara 1 Internasional'}</div>
              </div>
              <div className="p-3.5 rounded-2xl glass-panel border border-slate-800">
                <div className="text-2xl font-black text-emerald-400">1st TIC 9.0</div>
                <div className="text-xs text-slate-400 font-medium">{lang === 'en' ? 'National Web Champion' : 'Juara 1 Web Nasional'}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>{lang === 'en' ? 'View Featured Projects' : 'Lihat Proyek Unggulan'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download="CV_Bayu_Nismara_Nagatama.pdf"
                onClick={triggerConfetti}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-button text-slate-200 hover:text-white font-semibold text-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'en' ? 'Download Official CV' : 'Unduh CV Resmi'}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-700 font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{lang === 'en' ? 'Get In Touch' : 'Hubungi Saya'}</span>
              </a>
            </div>

            {/* Social Link Badges */}
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-400 uppercase tracking-wider">{lang === 'en' ? 'Connect:' : 'Koneksi:'}</span>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Code Showcase / Visual Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-30 blur-xl"></div>

              {/* Interactive Code Window */}
              <div className="relative rounded-2xl glass-panel border border-slate-700/70 overflow-hidden shadow-2xl">
                
                {/* Terminal Window Header */}
                <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">bayu-nismara.config.ts</span>
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 space-y-3 bg-[#090d16]">
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> <span className="text-cyan-400">=</span> &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">name</span>: <span className="text-emerald-300">'Bayu Nismara Nagatama'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">education</span>: <span className="text-emerald-300">'Informatics @ ITS Surabaya'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">gpa</span>: <span className="text-amber-400">3.64</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">currentRole</span>: <span className="text-emerald-300">'Front-End Dev @ PLN Group'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">primaryStack</span>: [
                  </div>
                  <div className="pl-8 text-cyan-300">
                    'Vue.js 3', 'React 19', 'TypeScript', 'Tailwind CSS'
                  </div>
                  <div className="pl-4">
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">aiIntegrations</span>: [
                  </div>
                  <div className="pl-8 text-purple-300">
                    'Claude Sonnet 4.6', 'Whisper STT', 'YOLO Deep Learning'
                  </div>
                  <div className="pl-4">
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">status</span>: <span className="text-emerald-400">'Seeking Internship / Full-time'</span>
                  </div>
                  <div>&#125;;</div>

                  {/* Terminal Exec Output Tag */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-emerald-400 flex items-center gap-1.5 font-sans">
                      <CheckCircle2 className="w-4 h-4" /> Ready for Impact & Innovation
                    </span>
                    <span className="font-mono text-cyan-400">v1.0.0</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Tech Ribbon Marquee */}
        <div className="mt-16 pt-8 border-t border-slate-800/60">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest text-center mb-6">
            {lang === 'en' ? 'Core Technologies & Tools I Use' : 'Teknologi Utama & Perangkat Digunakan'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techPills.map((pill) => (
              <span
                key={pill.name}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border ${pill.color} shadow-sm backdrop-blur-md hover:scale-105 transition-transform`}
              >
                {pill.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
