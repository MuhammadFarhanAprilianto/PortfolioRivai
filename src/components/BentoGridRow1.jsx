'use client';

import React from 'react';
import {
  Location01Icon,
  Call02Icon,
  Mail01Icon,
  Image01Icon,
  ToolsIcon,
  Linkedin02Icon,
  InstagramIcon,
} from 'hugeicons-react';
import ThreeDCompetencyIcon from './ui/ThreeDCompetencyIcon';
import { BlurReveal, BlurWords } from './ui/BlurReveal';

export default function BentoGridRow1({ data, lang }) {
  const isEn = lang === 'en';
  const profile = data?.profile || {};
  const stats = data?.stats || [];
  const skills = data?.skills || [];

  const roleText = profile.role?.[lang] || profile.role?.id_lang || profile.role?.en || 'Spesialis Quality Control Industri & Desainer Komunikasi Visual';
  const summaryText = profile.summary?.[lang] || profile.summary?.id_lang || profile.summary?.en || '';

  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Left Column: Profile Card with Photo Placeholder (5 cols) */}
      <BlurReveal delay={0.1} duration={0.7} className="lg:col-span-5 h-full">
        <div className="bento-card p-6 sm:p-8 flex flex-col justify-between gap-6 border border-white/10 shadow-xl h-full">
          <div>
            {/* Profile Photo */}
            <div className="w-full aspect-[3/3.8] rounded-2xl overflow-hidden relative flex items-center justify-center bg-[#131218] border border-white/10 group transition-all duration-300 hover:border-[#a6f30d]">
              {profile.cardAvatar || profile.avatar ? (
                <img
                  src={profile.cardAvatar || profile.avatar}
                  alt={profile.name || 'Muhamad Rivai'}
                  className="w-full h-full object-cover object-[center_top] grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500 ease-out"
                />
              ) : (
                <div className="w-full h-full card-placeholder-mesh flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-3 transition-colors">
                    <Image01Icon className="w-8 h-8 text-white group-hover:text-[#a6f30d] transition-colors" />
                  </div>
                  <span className="font-questrial font-bold text-sm tracking-wide text-white">
                    {isEn ? 'Profile Photo Placeholder' : 'Placeholder Foto Profil'}
                  </span>
                  <span className="text-xs text-slate-300 mt-1">
                    {isEn ? 'Ready for portrait asset' : 'Siap untuk gambar potret'}
                  </span>
                </div>
              )}
            </div>

            {/* Profile Identity Details */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-questrial font-black text-2xl sm:text-3xl text-white tracking-tight">
                  <BlurWords text={profile.name || 'Muhamad Rivai'} duration={0.6} />
                </h2>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#a6f30d]/20 text-[#d4f938] border border-[#a6f30d]/40">
                  S1 DKV
                </span>
              </div>

              <p className="text-sm font-semibold text-[#a6f30d] tracking-wide">
                {roleText}
              </p>

              <p className="text-xs sm:text-sm text-white leading-relaxed pt-2 opacity-95 text-justify">
                {summaryText}
              </p>
            </div>
          </div>

          {/* Quick Contact & Location Info */}
          <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs font-semibold text-white">
            <div className="flex items-center gap-2.5">
              <Location01Icon className="w-4 h-4 text-[#a6f30d]" />
              <span>{profile.location || 'Jakarta, Indonesia'}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail01Icon className="w-4 h-4 text-[#a6f30d]" />
              <a href={`mailto:${profile.email}`} className="hover:text-[#d4f938] transition-colors">
                {profile.email || 'mrpai267@gmail.com'}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Call02Icon className="w-4 h-4 text-[#a6f30d]" />
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#d4f938] transition-colors">
                {profile.phone || '+62 896-2267-1182'}
              </a>
            </div>
            <div className="flex items-center gap-2.5 pt-1">
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#a6f30d] hover:text-black border border-white/10 text-[11px] font-bold text-slate-200 transition-all group/link"
                >
                  <Linkedin02Icon className="w-3.5 h-3.5 text-[#a6f30d] group-hover/link:text-black transition-colors" />
                  <span>LinkedIn</span>
                </a>
              )}
              {profile.instagram && (
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#a6f30d] hover:text-black border border-white/10 text-[11px] font-bold text-slate-200 transition-all group/link"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#a6f30d] group-hover/link:text-black transition-colors" />
                  <span>@painull</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </BlurReveal>

      {/* Right Column: Key Stats & Comprehensive Technical Stack Grid (7 cols) */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        
        {/* Top 4 Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
          {stats.map((item, idx) => (
            <BlurReveal key={idx} delay={0.15 + idx * 0.08} duration={0.65}>
              <div className="bento-card p-4 sm:p-4.5 flex flex-col justify-between min-h-[105px] sm:min-h-[115px] border border-white/10 shadow-lg h-full">
                <span className="font-questrial font-black text-2xl sm:text-3xl text-white tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-white opacity-85 leading-snug mt-2">
                  {item.label?.[lang] || item.label?.id_lang || item.label?.en}
                </span>
              </div>
            </BlurReveal>
          ))}
        </div>

        {/* Skills & Industrial Capabilities Grid */}
        <BlurReveal delay={0.25} duration={0.7} className="flex-1">
          <div className="bento-card p-6 sm:p-8 h-full border border-white/10 space-y-5 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ToolsIcon className="w-5 h-5 text-[#d4f938]" />
                <h3 className="font-questrial font-bold text-lg sm:text-xl text-white">
                  <BlurWords text={isEn ? 'Technical & Creative Stack' : 'Keahlian Teknis & Kreatif'} duration={0.6} />
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                {skills.length} Competencies
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {skills.map((s, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#272630] border border-white/10 hover:border-[#a6f30d] transition-all group/item gap-2 min-w-0"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <ThreeDCompetencyIcon name={s.name} />
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-bold text-white block group-hover/item:text-[#d4f938] transition-colors truncate">
                        {s.name}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-300 truncate block">
                        {typeof s.category === 'object'
                          ? (s.category[lang] || s.category.id_lang || s.category.en)
                          : s.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-white/15 text-white border border-white/10 shrink-0 whitespace-nowrap text-center">
                    {typeof s.level === 'object'
                      ? (s.level[lang] || s.level.id_lang || s.level.en)
                      : s.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </BlurReveal>

      </div>

    </section>
  );
}
