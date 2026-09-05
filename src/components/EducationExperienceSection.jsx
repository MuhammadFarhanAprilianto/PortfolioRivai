'use client';

import React, { useState } from 'react';
import {
  Briefcase01Icon,
  Mortarboard01Icon,
  UserGroupIcon,
  CheckmarkCircle02Icon,
  Location01Icon,
  Calendar01Icon,
} from 'hugeicons-react';
import { BlurReveal, BlurWords } from './ui/BlurReveal';

export default function EducationExperienceSection({ data, lang }) {
  const [activeTab, setActiveTab] = useState('experience'); // 'experience' | 'education' | 'organizations'
  const isEn = lang === 'en';

  const experiences = data?.experience || [];
  const educations = data?.education || [];
  const organizations = data?.organizations || [];

  return (
    <section id="experience" className="space-y-6 pt-6">
      
      {/* Header & Tab Buttons */}
      <BlurReveal delay={0.1} duration={0.65}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#a6f30d]">
              {isEn ? 'CAREER TIMELINE' : 'REKAM JEJAK KARIER'}
            </span>
            <h2 className="font-questrial font-extrabold text-2xl sm:text-4xl text-white tracking-tight mt-1">
              <BlurWords text={isEn ? 'Experience & Background' : 'Pengalaman & Pendidikan'} duration={0.6} />
            </h2>
          </div>

          {/* Tab Controls with LabsStdio Vertical Rolling Scroll Hover */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 max-w-full">
            {[
              { key: 'experience', icon: Briefcase01Icon, label: isEn ? 'Work Experience' : 'Pengalaman Kerja' },
              { key: 'education', icon: Mortarboard01Icon, label: isEn ? 'Education' : 'Pendidikan' },
              { key: 'organizations', icon: UserGroupIcon, label: isEn ? 'Organizations' : 'Organisasi & Event' },
            ].map(tab => {
              const isSelected = activeTab === tab.key;
              const Icon = tab.icon;

              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
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
                      {/* Layer 1 */}
                      <span className="h-[1.2rem] flex items-center gap-2 font-questrial font-bold text-xs uppercase tracking-wider whitespace-nowrap">
                        <Icon className={`w-3.5 h-3.5 transition-colors duration-200 ${isSelected ? 'text-black' : 'text-white group-hover:!text-black'}`} />
                        <span className={`transition-colors duration-200 ${isSelected ? 'text-black' : 'text-white group-hover:!text-black'}`}>
                          {tab.label}
                        </span>
                      </span>
                      {/* Layer 2 (Hover Scrolled-in) */}
                      <span className="h-[1.2rem] flex items-center gap-2 font-questrial font-bold text-xs uppercase tracking-wider whitespace-nowrap text-black">
                        <Icon className="w-3.5 h-3.5 text-black" />
                        <span className="text-black">
                          {tab.label}
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </BlurReveal>

      {/* Tab Content 1: Work Experience Timeline */}
      {activeTab === 'experience' && (
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <BlurReveal key={idx} delay={0.1 + idx * 0.08} duration={0.65}>
              <div
                className="bento-card p-5 sm:p-7 md:p-8 space-y-4 border border-white/10 group hover:border-[#a6f30d] shadow-lg transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#a6f30d] tracking-wider uppercase">
                      {exp.period}
                    </span>
                    <h3 className="font-questrial font-bold text-xl sm:text-2xl text-white mt-0.5">
                      {exp.role?.[lang] || exp.role?.en}
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-semibold text-white opacity-90 mt-1">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Location01Icon className="w-3.5 h-3.5 text-[#a6f30d]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/15">
                    {exp.type}
                  </span>
                </div>

                {/* Responsibilities & Achievements List */}
                <div className="pt-2 space-y-2 border-t border-white/10">
                  {exp.highlights?.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white leading-relaxed opacity-95">
                      <CheckmarkCircle02Icon className="w-4 h-4 text-[#d4f938] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>
      )}

      {/* Tab Content 2: Education */}
      {activeTab === 'education' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((edu, idx) => (
            <BlurReveal key={idx} delay={0.1 + idx * 0.08} duration={0.65}>
              <div
                className="bento-card p-6 sm:p-8 border border-white/10 flex flex-col justify-between gap-6 group hover:border-[#a6f30d] shadow-lg h-full"
              >
                <div className="space-y-4">
                  {/* 3D Metallic Badge */}
                  <div
                    className="relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(30,29,37,0.9) 60%, rgba(15,15,20,0.95) 100%)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.25)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <div className="absolute top-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                    <Mortarboard01Icon className="w-6 h-6 text-[#a6f30d] drop-shadow-[0_0_6px_rgba(166,243,13,0.4)]" />
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-[#a6f30d]">
                      {edu.period}
                    </span>
                    <h3 className="font-questrial font-bold text-xl text-white mt-1">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-white mt-1">
                      {edu.degree?.[lang] || edu.degree?.en}
                    </p>
                    <p className="text-xs text-white opacity-90 mt-2 leading-relaxed">
                      {edu.description?.[lang] || edu.description?.en}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white">
                  <span className="text-slate-300">{edu.location}</span>
                  <span className="px-2.5 py-1 rounded bg-white/15 text-white border border-white/10">
                    {edu.score}
                  </span>
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>
      )}

      {/* Tab Content 3: Organizations & Event Crews */}
      {activeTab === 'organizations' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {organizations.map((org, idx) => (
            <BlurReveal key={idx} delay={0.1 + idx * 0.08} duration={0.65}>
              <div
                className="bento-card p-5 sm:p-6 border border-white/10 flex items-start gap-4 group hover:border-[#a6f30d] shadow-lg h-full"
              >
                <div
                  className="relative w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(30,29,37,0.9) 60%, rgba(15,15,20,0.95) 100%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <div className="absolute top-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                  <UserGroupIcon className="w-5 h-5 text-[#a6f30d] drop-shadow-[0_0_6px_rgba(166,243,13,0.4)]" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#a6f30d]">
                      {org.year}
                    </span>
                  </div>
                  <h4 className="font-questrial font-bold text-base text-white">
                    {org.role}
                  </h4>
                  <p className="text-xs font-semibold text-white opacity-90">
                    {org.event}
                  </p>
                  <p className="text-xs text-white opacity-80 leading-relaxed pt-1">
                    {org.description}
                  </p>
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>
      )}

    </section>
  );
}
