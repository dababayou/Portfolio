import React, { useState, useEffect } from 'react';
import { Download, Globe, Menu, X, Sparkles, Send, Briefcase } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  lang: 'en' | 'id';
  setLang: (lang: 'en' | 'id') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const navLinks = [
    { href: '#about', label: lang === 'en' ? 'About' : 'Tentang' },
    { href: '#experience', label: lang === 'en' ? 'Experience' : 'Pengalaman' },
    { href: '#projects', label: lang === 'en' ? 'Projects' : 'Proyek' },
    { href: '#research', label: lang === 'en' ? 'Research' : 'Riset' },
    { href: '#skills', label: lang === 'en' ? 'Skills' : 'Keahlian' },
    { href: '#achievements', label: lang === 'en' ? 'Honors' : 'Prestasi' },
    { href: '#contact', label: lang === 'en' ? 'Contact' : 'Kontak' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
            BN
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              Bayu Nismara
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1"></span>
                Open for Hire
              </span>
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">Front-End & AI Developer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="hover:text-cyan-400 transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Selector */}
          <button 
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
            title="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'en' ? '🇮🇩 ID' : '🇬🇧 EN'}</span>
          </button>

          {/* Download CV CTA */}
          <a
            href={PERSONAL_INFO.cvPath}
            download="CV_Bayu_Nismara_Nagatama.pdf"
            onClick={triggerConfetti}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold text-xs transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/25 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{lang === 'en' ? 'Download CV' : 'Unduh CV'}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button 
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs font-medium text-slate-300"
          >
            {lang === 'en' ? 'ID' : 'EN'}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a0d17]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-200 font-medium hover:bg-slate-800/60 hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <a
              href={PERSONAL_INFO.cvPath}
              download="CV_Bayu_Nismara_Nagatama.pdf"
              onClick={() => {
                triggerConfetti();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'en' ? 'Download CV (PDF)' : 'Unduh CV (PDF)'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
