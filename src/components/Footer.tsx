import React from 'react';
import { ArrowUp, Heart, Sparkles, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  lang: 'en' | 'id';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-slate-800/80 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 font-extrabold flex items-center justify-center border border-cyan-500/20">
            BN
          </div>
          <div>
            <div className="font-bold text-white text-sm">{PERSONAL_INFO.name}</div>
            <div className="text-slate-400">
              {lang === 'en' ? 'Front-End Web Developer • ITS Surabaya' : 'Pengembang Web Front-End • ITS Surabaya'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <span>{lang === 'en' ? 'Built with React 19, TypeScript & Tailwind CSS' : 'Dibuat dengan React 19, TypeScript & Tailwind CSS'}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-400">© 2026 Bayu Nismara Nagatama. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
