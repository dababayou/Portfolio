import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Download, ArrowUpRight, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  lang: 'en' | 'id';
}

export const ContactSection: React.FC<ContactProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const triggerConfetti = () => {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/90 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Let\'s Connect' : 'Hubungi Saya'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {lang === 'en' ? 'Get In Touch For Opportunities' : 'Mari Berdiskusi & Bekerja Sama'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Currently seeking Internship and Full-Time Front-End / Web Engineering roles. Reach out directly via email, WhatsApp, or LinkedIn.'
              : 'Terbuka untuk peluang Magang dan Kerja Full-Time Front-End / Web Engineering. Hubungi saya via Email, WhatsApp, atau LinkedIn.'}
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Card */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex items-center justify-between hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-slate-400 uppercase">Email</h3>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-bold text-white hover:text-cyan-400 transition-colors block break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="p-3 rounded-xl bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all text-xs flex items-center gap-1 shrink-0 ml-2"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* WhatsApp / Phone Card */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex items-center justify-between hover:border-emerald-500/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-slate-400 uppercase">WhatsApp / Phone</h3>
                <a 
                  href="https://wa.me/628887083077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white hover:text-emerald-400 transition-colors block"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0 ml-2">
              <button
                onClick={copyPhone}
                className="p-3 rounded-xl bg-slate-900 text-slate-300 hover:text-emerald-400 border border-slate-800 hover:border-emerald-500/40 transition-all text-xs"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href="https://wa.me/628887083077"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 flex items-center gap-1"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex items-center justify-between hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 shrink-0">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-slate-400 uppercase">LinkedIn</h3>
                <p className="text-sm font-bold text-white">bayu-nismara-nagatama</p>
              </div>
            </div>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/20 flex items-center gap-1 shrink-0 ml-2"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub Profile Card */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex items-center justify-between hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20 shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-slate-400 uppercase">GitHub Profile</h3>
                <p className="text-sm font-bold text-white">dababayou</p>
              </div>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md shadow-purple-500/20 flex items-center gap-1 shrink-0 ml-2"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Download Resume & Portfolio Banner CTA */}
        <div className="mt-10 p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 border border-cyan-500/20 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            {lang === 'en' ? 'Need Application Documents?' : 'Butuh Dokumen Lamaran Kerja?'}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            {lang === 'en'
              ? 'Download the official CV or open the print-ready 1-page visual Portfolio Document PDF for job application portals.'
              : 'Unduh CV resmi atau buka Dokumen Portofolio 1-halaman (PDF) yang siap cetak untuk portal lamaran kerja.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={PERSONAL_INFO.cvPath}
              download="CV_Bayu_Nismara_Nagatama.pdf"
              onClick={triggerConfetti}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'en' ? 'Download Official CV' : 'Unduh CV Resmi'}</span>
            </a>

            <a
              href={PERSONAL_INFO.portfolioDocPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-purple-500/40 hover:border-purple-500 text-purple-300 hover:text-white font-bold text-xs shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-purple-400" />
              <span>{lang === 'en' ? 'Portfolio Document (PDF)' : 'Dokumen Portofolio (PDF)'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
