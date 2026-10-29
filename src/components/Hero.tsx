import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight, Download, Sparkles, Code2, Award,
  GraduationCap, CheckCircle2, Linkedin, Github, Mail, FileText, MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  lang: 'en' | 'id';
}

// Typewriter hook
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
        if (charIdx === current.length) {
          timeout = setTimeout(() => setDeleting(true), pause);
        }
      }, speed);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
        if (charIdx === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
        }
      }, speed / 2);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

// Animated counter
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = target / 40;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 35);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const roles = lang === 'en'
    ? ['Front-End Web Developer', 'Vue.js & React Specialist', 'AI Integration Engineer', 'UI/UX Enthusiast']
    : ['Pengembang Web Front-End', 'Spesialis Vue.js & React', 'Insinyur Integrasi AI', 'Antusias UI/UX'];

  const typewriter = useTypewriter(roles);

  // Mouse parallax on card
  const cardRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = ((e.clientY - cy) / rect.height) * 10;
      const ry = ((e.clientX - cx) / rect.width) * -10;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    };
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    };
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Floating particle positions (stable, no re-render)
  const particles = useRef(
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 4,
    }))
  );

  const triggerConfetti = () => {
    confetti({ particleCount: 120, spread: 90, origin: { y: 0.6 }, colors: ['#38bdf8', '#818cf8', '#c084fc', '#34d399'] });
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
    { name: 'Supabase', color: 'border-green-500/30 text-green-300 bg-green-500/10' },
    { name: 'Claude AI', color: 'border-orange-500/30 text-orange-300 bg-orange-500/10' },
  ];

  return (
    <section
      id="about"
      ref={heroRef}
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-grid-pattern"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.current.map((p) => (
          <div
            key={p.id}
            className="hero-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Radial glow effects */}
      <div className="glow-orb-1"></div>
      <div className="glow-orb-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 hero-left-enter">

            {/* Status Badge */}
            <div className="hero-badge-enter inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-medium shadow-inner shadow-cyan-500/10">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'en' ? 'ITS Informatics Engineering • GPA 3.69 / 4.00' : 'Teknik Informatika ITS • IPK 3.69 / 4.00'}</span>
              <span className="flex items-center gap-1 pl-2 border-l border-cyan-500/30">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span className="text-slate-400">Surabaya, ID</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {lang === 'en' ? 'Hi, I\'m ' : 'Halo, Saya '}
                <span className="text-gradient-cyan">Bayu Nismara</span>
              </h1>

              {/* Typewriter subtitle */}
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2 min-h-[2rem]">
                <Code2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="typewriter-text">
                  {typewriter}
                  <span className="typewriter-cursor">|</span>
                </span>
              </h2>
            </div>

            {/* Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio[lang]}
            </p>

            {/* Animated Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
              {[
                { value: null, label: lang === 'en' ? 'Work Experience' : 'Pengalaman Kerja', display: 'PLN & Agency', color: 'cyan', hoverBorder: 'hover:border-cyan-500/50', textColor: 'text-cyan-400' },
                { value: 369, suffix: '', label: lang === 'en' ? 'ITS Surabaya GPA' : 'IPK Teknik Informatika', display: null, color: 'indigo', hoverBorder: 'hover:border-indigo-500/50', textColor: 'text-indigo-400', gpa: true },
                { value: null, label: lang === 'en' ? '2nd Runner-Up' : 'Juara Harapan 2', display: "INOVBOYO '25", color: 'amber', hoverBorder: 'hover:border-amber-500/50', textColor: 'text-amber-400' },
                { value: null, label: lang === 'en' ? 'National Champion' : 'Juara 1 Web Nasional', display: '1st TIC 9.0', color: 'emerald', hoverBorder: 'hover:border-emerald-500/50', textColor: 'text-emerald-400' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`stat-card p-4 rounded-2xl glass-panel border border-slate-800 flex flex-col justify-between h-full ${stat.hoverBorder} transition-all duration-300 shadow-sm cursor-default`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`text-base sm:text-lg font-black ${stat.textColor} truncate`}>
                    {stat.gpa ? (
                      <span>
                        <AnimatedCounter target={3} />.
                        <AnimatedCounter target={69} />
                      </span>
                    ) : stat.display}
                  </div>
                  <div className="text-xs text-slate-400 font-medium truncate mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:scale-95"
              >
                <span>{lang === 'en' ? 'View Featured Projects' : 'Lihat Proyek Unggulan'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download="CV_Bayu_Nismara_Nagatama.pdf"
                onClick={triggerConfetti}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-button text-slate-200 hover:text-white font-semibold text-sm cursor-pointer hover:-translate-y-0.5 transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'en' ? 'Download Official CV' : 'Unduh CV Resmi'}</span>
              </a>

              <a
                href={PERSONAL_INFO.portfolioDocPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 border border-purple-500/40 hover:border-purple-500 text-purple-300 hover:text-white font-semibold text-sm cursor-pointer transition-all shadow-md hover:-translate-y-0.5 active:scale-95"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>{lang === 'en' ? 'Portfolio Doc' : 'Dokumen Porto'}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-slate-700 font-medium text-sm transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{lang === 'en' ? 'Get In Touch' : 'Hubungi Saya'}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-400 uppercase tracking-wider">{lang === 'en' ? 'Connect:' : 'Koneksi:'}</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-all px-3 py-1.5 rounded-lg hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link flex items-center gap-1.5 text-slate-300 hover:text-white transition-all px-3 py-1.5 rounded-lg hover:bg-slate-500/10 border border-transparent hover:border-slate-500/20"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Tilt Code Card */}
          <div className="lg:col-span-5 hero-right-enter">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Pulsing glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-30 blur-xl animate-pulse-slow"></div>
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-500/40 via-indigo-500/40 to-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>

              {/* Tilt Card */}
              <div
                ref={cardRef}
                className="relative rounded-2xl glass-panel border border-slate-700/70 overflow-hidden shadow-2xl transition-transform duration-150 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block hover:bg-rose-400 transition-colors cursor-default"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block hover:bg-amber-400 transition-colors cursor-default"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block hover:bg-emerald-400 transition-colors cursor-default"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">bayu-nismara.config.ts</span>
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 space-y-2 bg-[#090d16]">
                  <div className="code-line" style={{ animationDelay: '0.1s' }}>
                    <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> <span className="text-cyan-400">=</span> &#123;
                  </div>
                  <div className="pl-4 code-line" style={{ animationDelay: '0.2s' }}>
                    <span className="text-indigo-300">name</span>: <span className="text-emerald-300">'Bayu Nismara Nagatama'</span>,
                  </div>
                  <div className="pl-4 code-line" style={{ animationDelay: '0.3s' }}>
                    <span className="text-indigo-300">education</span>: <span className="text-emerald-300">'Informatics @ ITS Surabaya'</span>,
                  </div>
                  <div className="pl-4 code-line" style={{ animationDelay: '0.4s' }}>
                    <span className="text-indigo-300">gpa</span>: <span className="text-amber-400">3.69</span>,
                  </div>
                  <div className="pl-4 code-line" style={{ animationDelay: '0.5s' }}>
                    <span className="text-indigo-300">currentRole</span>: <span className="text-emerald-300">'Front-End Dev @ PLN Group'</span>,
                  </div>
                  <div className="pl-4 code-line" style={{ animationDelay: '0.6s' }}>
                    <span className="text-indigo-300">primaryStack</span>: [
                  </div>
                  <div className="pl-8 text-cyan-300 code-line" style={{ animationDelay: '0.7s' }}>
                    'Vue.js 3', 'React 19', 'TypeScript', 'Tailwind CSS'
                  </div>
                  <div className="pl-4 code-line" style={{ animationDelay: '0.8s' }}>
                    ],
                  </div>
                  <div className="pl-4 code-line" style={{ animationDelay: '0.9s' }}>
                    <span className="text-indigo-300">aiIntegrations</span>: [
                  </div>
                  <div className="pl-8 text-purple-300 code-line" style={{ animationDelay: '1.0s' }}>
                    'Claude Sonnet 4.6', 'Whisper STT', 'YOLO Deep Learning'
                  </div>
                  <div className="pl-4 code-line" style={{ animationDelay: '1.1s' }}>
                    ],
                  </div>
                  <div className="pl-4 code-line" style={{ animationDelay: '1.2s' }}>
                    <span className="text-indigo-300">status</span>:{' '}
                    <span className="text-emerald-400 status-blink">'✦ Open to Work'</span>
                  </div>
                  <div className="code-line" style={{ animationDelay: '1.3s' }}>&#125;;</div>

                  {/* Terminal Output */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-emerald-400 flex items-center gap-1.5 font-sans">
                      <CheckCircle2 className="w-4 h-4" /> Ready for Impact & Innovation
                    </span>
                    <span className="font-mono text-cyan-400">v2.0.0</span>
                  </div>
                </div>
              </div>

              {/* Award badges floating */}
              <div className="absolute -bottom-4 -left-4 badge-float px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>🏆 TIC 9.0 Champion</span>
              </div>
              <div className="absolute -top-4 -right-4 badge-float-reverse px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>⚡ PLN Enterprise Dev</span>
              </div>
            </div>
          </div>

        </div>

        {/* Tech Marquee Ribbon */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 overflow-hidden">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest text-center mb-6">
            {lang === 'en' ? 'Core Technologies & Tools I Use' : 'Teknologi Utama & Perangkat Digunakan'}
          </p>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...techPills, ...techPills].map((pill, i) => (
                <span
                  key={i}
                  className={`marquee-pill px-4 py-2 rounded-xl text-xs font-semibold border ${pill.color} shadow-sm backdrop-blur-md flex-shrink-0`}
                >
                  {pill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
