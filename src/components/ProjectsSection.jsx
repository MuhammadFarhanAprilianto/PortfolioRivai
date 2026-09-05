'use client';

import React, { useState, useEffect } from 'react';
import {
  EyeIcon,
  Cancel01Icon,
  Image01Icon,
  Tag01Icon,
  Building01Icon,
  Calendar01Icon,
} from 'hugeicons-react';
import { BlurReveal, BlurWords } from './ui/BlurReveal';

export default function ProjectsSection({ data, lang }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeProject, setActiveProject] = useState(null);

  const isEn = lang === 'en';
  const projects = data?.projects || [];

  const filteredProjects = selectedCategory === 'ALL'
    ? projects
    : projects.filter(p => {
        if (selectedCategory === 'Retail Leadership & Growth') return p.category === 'Retail Leadership & Growth';
        if (selectedCategory === 'Visual Design & Video Production') return p.category.includes('Visual') || p.category.includes('Documentary');
        if (selectedCategory === 'Industrial Manufacturing') return p.category.includes('Industrial') || p.category.includes('Quality Control');
        return true;
      });

  // Close modal on Escape key press & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section id="projects" className="space-y-6 pt-6">
      
      {/* Section Header */}
      <BlurReveal delay={0.1} duration={0.65}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#a6f30d]">
              {isEn ? 'FEATURED WORKS' : 'PORTOFOLIO TERPILIH'}
            </span>
            <h2 className="font-questrial font-extrabold text-2xl sm:text-4xl text-white tracking-tight mt-1">
              <BlurWords text={isEn ? 'Highlighted Projects & Highlights' : 'Proyek & Pengalaman Pilihan'} duration={0.6} />
            </h2>
          </div>

          {/* Category Pills Filter with LabsStdio Vertical Rolling Scroll Hover Animation */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 max-w-full">
            {[
              { key: 'ALL', label: 'ALL' },
              { key: 'Retail Leadership & Growth', label: isEn ? 'Retail & Growth' : 'Retail & Toko' },
              { key: 'Visual Design & Video Production', label: isEn ? 'Design & Video' : 'Desain & Video' },
              { key: 'Industrial Manufacturing', label: isEn ? 'Industrial & QC' : 'Industri & QC' },
            ].map(cat => {
              const isSelected = selectedCategory === cat.key;

              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`relative group overflow-hidden px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border cursor-pointer select-none active:scale-95 ${
                    isSelected
                      ? 'bg-[#a6f30d] text-black border-[#a6f30d] shadow-md shadow-[#a6f30d]/20'
                      : 'bg-[#1F1E25] text-white border-white/15 hover:border-[#a6f30d]'
                  }`}
                >
                  {!isSelected && (
                    <span className="absolute inset-0 z-0 bg-[#a6f30d] rounded-full translate-y-[115%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 pointer-events-none" />
                  )}

                  <span className="relative z-10 block overflow-hidden h-[1.2rem] leading-[1.2rem]">
                    <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                      <span className={`h-[1.2rem] flex items-center font-questrial font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-colors duration-200 ${isSelected ? 'text-black' : 'text-white group-hover:!text-black'}`}>
                        {cat.label}
                      </span>
                      <span className="h-[1.2rem] flex items-center font-questrial font-bold text-xs uppercase tracking-wider whitespace-nowrap text-black">
                        {cat.label}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </BlurReveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj, idx) => {
          const title = proj.title?.[lang] || proj.title?.en;
          const desc = proj.description?.[lang] || proj.description?.en;

          return (
            <BlurReveal key={proj.id} delay={0.1 + idx * 0.08} duration={0.65}>
              <div
                onClick={() => setActiveProject(proj)}
                className="bento-card p-5 sm:p-6 flex flex-col justify-between gap-5 border border-white/10 cursor-pointer group hover:border-[#a6f30d] shadow-lg h-full"
              >
                <div className="space-y-4">
                  {/* Project Media Card */}
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden relative flex items-center justify-center bg-[#131218] border border-white/10 group-hover:border-[#a6f30d] transition-colors">
                    {proj.image ? (
                      <img
                        src={proj.image}
                        alt={title}
                        className="w-full h-full object-cover object-center grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full card-placeholder-mesh flex flex-col items-center justify-center p-4 text-center">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-2 transition-colors">
                          <Image01Icon className="w-6 h-6 text-white group-hover:text-[#a6f30d] transition-colors" />
                        </div>
                        <span className="font-questrial font-bold text-xs text-white">
                          {proj.category}
                        </span>
                        <span className="text-[10px] text-slate-300 mt-0.5">
                          {proj.year}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                      <span className="font-semibold text-white">{proj.company}</span>
                      <span className="font-mono text-[#a6f30d] font-bold">{proj.year}</span>
                    </div>

                    <h3 className="font-questrial font-bold text-base sm:text-lg text-white group-hover:text-[#d4f938] transition-colors line-clamp-2">
                      {title}
                    </h3>

                    <p className="text-xs text-white leading-relaxed mt-2 line-clamp-3 opacity-90">
                      {desc}
                    </p>
                  </div>
                </div>

                {/* Tags & Action Link */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {proj.tags?.slice(0, 2).map(t => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#272630] text-white border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:text-[#d4f938]">
                    <EyeIcon className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Details' : 'Detail'}</span>
                  </span>
                </div>

              </div>
            </BlurReveal>
          );
        })}
      </div>

      {/* Detail Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="bento-card max-w-2xl w-full p-5 sm:p-8 space-y-5 border border-white/15 shadow-2xl overflow-y-auto max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#a6f30d]/20 text-[#d4f938] border border-[#a6f30d]/40">
                {activeProject.category}
              </span>
              <button
                onClick={() => setActiveProject(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <Cancel01Icon className="w-4 h-4" />
              </button>
            </div>

            {/* Media in Modal */}
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden relative flex items-center justify-center bg-[#131218] border border-white/10">
              {activeProject.image ? (
                <img
                  src={activeProject.image}
                  alt={activeProject.title?.[lang] || activeProject.title?.en}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full card-placeholder-mesh flex flex-col items-center justify-center p-6 text-center">
                  <Image01Icon className="w-10 h-10 text-white mb-2" />
                  <span className="font-questrial font-bold text-sm text-white">
                    {activeProject.title?.[lang] || activeProject.title?.en}
                  </span>
                  <span className="text-xs text-slate-300 mt-1">
                    {activeProject.role} - {activeProject.company}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="font-questrial font-bold text-xl sm:text-2xl text-white">
                {activeProject.title?.[lang] || activeProject.title?.en}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white opacity-90">
                <div className="flex items-center gap-1.5">
                  <Building01Icon className="w-4 h-4 text-[#a6f30d]" />
                  <span>{activeProject.company}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar01Icon className="w-4 h-4 text-[#a6f30d]" />
                  <span>{activeProject.year}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Tag01Icon className="w-4 h-4 text-[#a6f30d]" />
                  <span>Role: {activeProject.role}</span>
                </div>
              </div>

              <p className="text-sm text-white leading-relaxed pt-2 opacity-95">
                {activeProject.description?.[lang] || activeProject.description?.en}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {activeProject.tags?.map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-bold bg-[#272630] text-white border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#a6f30d] transition-colors"
              >
                {isEn ? 'Close Details' : 'Tutup Detail'}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
