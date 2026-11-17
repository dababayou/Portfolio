import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Globe, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  lang: 'en' | 'id';
  setLang: (lang: 'en' | 'id') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['about', 'experience', 'projects', 'research', 'skills', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', href: '#about', index: '00', label: lang === 'en' ? 'About' : 'Profil' },
    { id: 'experience', href: '#experience', index: '01', label: lang === 'en' ? 'Experience' : 'Pengalaman' },
    { id: 'projects', href: '#projects', index: '02', label: lang === 'en' ? 'Projects' : 'Proyek' },
    { id: 'research', href: '#research', index: '03', label: lang === 'en' ? 'Research' : 'Riset' },
    { id: 'skills', href: '#skills', index: '04', label: lang === 'en' ? 'Skills' : 'Keahlian' },
    { id: 'achievements', href: '#achievements', index: '05', label: lang === 'en' ? 'Honors' : 'Prestasi' },
    { id: 'contact', href: '#contact', index: '06', label: lang === 'en' ? 'Contact' : 'Kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0d14]/92 backdrop-blur-md border-b border-neutral-800/80 py-2.5 sm:py-3 shadow-xl'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Lockup - Guaranteed single line, never wraps */}
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink-0 whitespace-nowrap">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-neutral-900 border border-neutral-700/80 flex items-center justify-center font-mono font-bold text-xs text-cyan-400 group-hover:border-cyan-400 transition-colors shrink-0">
            BN
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors whitespace-nowrap">
              Bayu Nismara
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 whitespace-nowrap">
              DEV // ITS SURABAYA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - Shown only on XL (1280px+) where full bar comfortably fits */}
        <nav className="hidden xl:flex items-center gap-1 bg-neutral-900/60 border border-neutral-800/70 p-1 rounded-full backdrop-blur-sm shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-medium transition-colors rounded-full flex items-center gap-1.5 whitespace-nowrap ${
                  isActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-neutral-800 rounded-full border border-neutral-700/80"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 font-mono text-[10px] text-cyan-400/80">{link.index}</span>
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Full Desktop Right Actions (XL screens only) */}
        <div className="hidden xl:flex items-center gap-2.5 shrink-0">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer whitespace-nowrap"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'en' ? 'ID' : 'EN'}</span>
          </button>

          {/* Portfolio Doc */}
          <a
            href={PERSONAL_INFO.portfolioDocPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-xs font-medium transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-400" />
            <span>{lang === 'en' ? 'Doc' : 'Dok'}</span>
          </a>

          {/* CV CTA Button */}
          <motion.a
            href={PERSONAL_INFO.cvPath}
            download="CV_Bayu_Nismara_Nagatama.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-neutral-950 font-semibold text-xs transition-colors shadow-md shadow-cyan-400/20 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Resume' : 'CV'}</span>
          </motion.a>
        </div>

        {/* Mobile & Tablet Right Controls (< XL screens: tablets, laptops, phones) */}
        {/* Clean, unified, and NO DUPLICATE BUTTONS */}
        <div className="flex xl:hidden items-center gap-2 shrink-0">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'en' ? 'ID' : 'EN'}</span>
          </button>

          {/* Fast Resume Download (on sm/tablet screens) */}
          <a
            href={PERSONAL_INFO.cvPath}
            download="CV_Bayu_Nismara_Nagatama.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-neutral-950 font-semibold text-xs transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile & Tablet Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden overflow-hidden bg-[#0a0d14]/98 backdrop-blur-xl border-b border-neutral-800 px-5 pt-3 pb-6 space-y-2 mt-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pb-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-neutral-200 text-sm font-medium hover:bg-neutral-800/80 hover:text-cyan-400 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-cyan-400">{link.index}</span>
                    <span>{link.label}</span>
                  </div>
                  <span className="text-neutral-600 text-xs font-mono">→</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-800 flex flex-col sm:flex-row gap-2">
              <a
                href={PERSONAL_INFO.cvPath}
                download="CV_Bayu_Nismara_Nagatama.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 flex-1 py-2.5 rounded-lg bg-cyan-400 text-neutral-950 font-bold text-xs font-mono"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD CV [PDF]</span>
              </a>
              <a
                href={PERSONAL_INFO.portfolioDocPath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 flex-1 py-2.5 rounded-lg border border-neutral-700 bg-neutral-900 text-neutral-200 hover:text-white font-medium text-xs font-mono"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>PORTFOLIO DOC [A4]</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
