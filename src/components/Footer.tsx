import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  lang: 'en' | 'id';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 py-12 text-xs font-mono text-neutral-500 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
          <span className="font-bold text-white text-sm">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline text-neutral-700">•</span>
          <span className="text-neutral-400">
            {lang === 'en'
              ? 'ENGINEERED WITH REACT 19, TS & FRAMER MOTION'
              : 'DIKEMBANGKAN DENGAN REACT 19, TS & FRAMER MOTION'}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span>
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg border border-neutral-800 text-neutral-400 hover:text-cyan-400 hover:border-neutral-700 transition-colors cursor-pointer"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
