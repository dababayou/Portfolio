import React from 'react';
import { ORGANIZATIONAL_EXPERIENCE } from '../data/portfolioData';

interface OrganizationProps {
  lang: 'en' | 'id';
}

export const OrganizationSection: React.FC<OrganizationProps> = ({ lang }) => {
  if (!ORGANIZATIONAL_EXPERIENCE || ORGANIZATIONAL_EXPERIENCE.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 border-t border-[--color-border-subtle]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-display text-3xl sm:text-4xl text-[--color-text] mb-3">
            {lang === 'en' ? 'Organizations' : 'Organisasi'}
          </h2>
          <p className="text-[--color-text-secondary] text-base">
            {lang === 'en'
              ? 'Leadership and community involvement.'
              : 'Peran kepemimpinan dan keterlibatan komunitas.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ORGANIZATIONAL_EXPERIENCE.map((org, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[--color-surface] border border-[--color-border-subtle] p-5 space-y-3 hover:border-[--color-border] transition-colors"
            >
              <div className="flex items-center justify-between text-xs text-[--color-text-muted]">
                <span className="font-medium">{org.organization}</span>
                <span className="tabular-nums">{org.period}</span>
              </div>
              <h3 className="text-base font-semibold text-[--color-text]">{org.role}</h3>
              <p className="text-sm text-[--color-text-secondary] leading-relaxed">
                {org.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
