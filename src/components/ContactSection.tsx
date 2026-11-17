import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Copy, Check, ArrowUpRight, Download, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  lang: 'en' | 'id';
}

export const ContactSection: React.FC<ContactProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, setter: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-neutral-800/80 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>06 // TRANSMISSION & CONTACT</span>
          </div>
          <h2 className="text-display text-4xl sm:text-5xl text-white">
            {lang === 'en' ? "Let's build something remarkable" : 'Mari Berdiskusi & Berkolaborasi'}
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            {lang === 'en'
              ? 'Currently open to internship and full-time front-end engineering roles. Direct inquiry channels below.'
              : 'Terbuka untuk peluang magang dan posisi front-end developer full-time. Hubungi langsung melalui kanal di bawah.'}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          
          {/* Email */}
          <div className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 flex items-center justify-between hover:border-neutral-700 transition-colors">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center border border-cyan-400/20 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-neutral-500 uppercase block">DIRECT EMAIL</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base font-semibold text-white hover:text-cyan-400 transition-colors block truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(PERSONAL_INFO.email, setCopiedEmail)}
              className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors shrink-0 cursor-pointer ml-3"
              title="Copy Email to Clipboard"
              aria-label="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* WhatsApp */}
          <div className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 flex items-center justify-between hover:border-neutral-700 transition-colors">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center border border-emerald-400/20 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-neutral-500 uppercase block">WHATSAPP / PHONE</span>
                <a
                  href="https://wa.me/628887083077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-white hover:text-emerald-400 transition-colors block"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0 ml-3">
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, setCopiedPhone)}
                className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors"
                title="Copy Phone to Clipboard"
                aria-label="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href="https://wa.me/628887083077"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold text-xs font-mono transition-colors flex items-center gap-1"
              >
                <span>CHAT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 flex items-center justify-between hover:border-neutral-700 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center border border-blue-400/20 shrink-0">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-neutral-500 uppercase block">LINKEDIN NETWORK</span>
                <span className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  bayu-nismara-nagatama
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 flex items-center justify-between hover:border-neutral-700 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 text-neutral-300 flex items-center justify-center border border-neutral-700 shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-neutral-500 uppercase block">GITHUB REPOSITORIES</span>
                <span className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  dababayou
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

        </div>

        {/* Application Documents Card */}
        <div className="rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-neutral-900 border border-neutral-800 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <FileText className="w-4 h-4" />
              <span>OFFICIAL APPLICATION ASSETS</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {lang === 'en' ? 'Need offline portfolio documents?' : 'Butuh Dokumen Lamaran Lengkap?'}
            </h3>
            <p className="text-sm text-neutral-400 max-w-xl">
              {lang === 'en'
                ? 'Download the official ATS-audited curriculum vitae or open the print-ready portfolio summary PDF.'
                : 'Unduh curriculum vitae resmi terstandar ATS atau buka dokumen portofolio ringkas siap cetak.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <motion.a
              href={PERSONAL_INFO.cvPath}
              download="CV_Bayu_Nismara_Nagatama.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-neutral-950 font-bold text-xs font-mono transition-colors shadow-lg shadow-cyan-400/20"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD CV [PDF]</span>
            </motion.a>

            <a
              href={PERSONAL_INFO.portfolioDocPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-950 border border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:text-white font-medium text-xs font-mono transition-colors"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>PORTFOLIO DOC</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
