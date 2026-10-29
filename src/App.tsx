import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { SkillsSection } from './components/SkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { OrganizationSection } from './components/OrganizationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [lang, setLang] = useState<'en' | 'id'>('en');
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Auto scroll to target section on initial load when URL contains hash (#projects, etc.)
    const timer = setTimeout(handleHashScroll, 150);

    // Also listen to hashchange events
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Cursor glow */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[999] -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
          transition: 'left 0.12s ease, top 0.12s ease',
        }}
      />
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <ExperienceSection lang={lang} />
        <ProjectsSection lang={lang} />
        <ResearchSection lang={lang} />
        <SkillsSection lang={lang} />
        <AchievementsSection lang={lang} />
        <OrganizationSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
