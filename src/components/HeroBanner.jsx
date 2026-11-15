'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight01Icon, Download04Icon, Image01Icon } from 'hugeicons-react';
import LabsButton from './ui/LabsButton';
import { BlurReveal, BlurWords } from './ui/BlurReveal';
import { t, isEnglish } from '@/lib/i18n';

export default function HeroBanner({ data, lang }) {
  const heroData = data?.hero || {};
  const profile = data?.profile || {};
  const isEn = isEnglish(lang);

  const headline = t(heroData.headline, lang) || (isEn
    ? 'Welder 3G GMAW, Quality Control, Welder 3G SMAW, Store Leader & Marketing.'
    : 'Welder 3G GMAW, Quality Control, Welder 3G SMAW, Leader & Marketing Store.');
  const subheadline = t(heroData.subheadline, lang);
  const roleText = t(profile.role, lang) || (isEn
    ? 'Welder 3G GMAW | Quality Control | Welder 3G SMAW | Store Leader & Marketing'
    : 'Welder 3G GMAW | Quality Control | Welder 3G SMAW | Leader & Marketing Store');
  const name = profile.name || 'Muhamad Rivai';
  const location = profile.location || 'Jakarta, Indonesia';
  const avatarUrl = profile.heroAvatar || profile.avatar || '';
  const resumeUrl = data?.nav?.resumeUrl || '/CV - Muhamad Rivai .pdf';

  // Interactive hover & 3D tilt calculations
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 18);
    setRotateY(x / 18);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'CV - Muhamad Rivai .pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="pt-6 pb-10 overflow-visible scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Headline, Bio & Action Buttons (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Main Headline with Word-by-Word Blur Reveal */}
          <h1 className="font-questrial font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15] sm:leading-[1.12]">
            <BlurWords text={headline} duration={0.7} blurAmount="12px" />
          </h1>

          {/* Subheadline & Shortened Biography (Agrandir font) */}
          <BlurReveal delay={0.2} duration={0.7} blurAmount="10px">
            <p className="font-agrandir text-white text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl opacity-90 text-justify">
              {isEn ? "Hi, I'm " : "Halo, saya "}<strong className="font-bold text-white">{name}</strong>. {subheadline}
            </p>
          </BlurReveal>

          {/* Action Buttons (Signature LabsStdio Rolling Scroll Buttons) */}
          <BlurReveal delay={0.35} duration={0.7} blurAmount="10px">
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <LabsButton
                href="#projects"
                icon={ArrowUpRight01Icon}
                iconPosition="left"
                variant="primary"
                className="w-full sm:w-auto"
              >
                {isEn ? 'View Projects' : 'Lihat Proyek'}
              </LabsButton>

              <LabsButton
                href={resumeUrl}
                download="CV - Muhamad Rivai .pdf"
                target="_blank"
                rel="noopener noreferrer"
                icon={Download04Icon}
                iconPosition="left"
                variant="white"
                className="w-full sm:w-auto"
              >
                {isEn ? 'Download CV' : 'Unduh CV'}
              </LabsButton>
            </div>
          </BlurReveal>
        </div>

        {/* Right Column: Profile Card (Miring -3.5° saat tidak diarahkan -> Lurus 0° saat kursor diarahkan) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, rotate: -3.5 }}
            animate={{
              opacity: 1,
              rotate: isHovered ? 0 : -3.5,
            }}
            transition={{
              rotate: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.5 },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: isHovered ? rotateX : 0,
              rotateY: isHovered ? rotateY : 0,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[1/1.12] rounded-[2rem] overflow-hidden border border-white/15 shadow-2xl shadow-black/80 bg-[#1F1E25] group cursor-pointer select-none"
          >
            {/* Photo / Card Media (Black & White by default -> Full Color saat diarahkan mouse) */}
            <div className="relative w-full h-full overflow-hidden">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={name}
                  className="w-full h-full object-cover object-[center_top] grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700 ease-out"
                />
              ) : (
                /* Card Placeholder: Grayscale B&W saat idle -> Full Color & Glow saat di-hover */
                <div className="w-full h-full card-placeholder-mesh flex flex-col items-center justify-center p-8 text-center grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 group-hover:bg-[#a6f30d]/20 border border-white/10 group-hover:border-[#a6f30d]/40 flex items-center justify-center mb-4 transition-all duration-700">
                    <Image01Icon className="w-10 h-10 text-slate-400 group-hover:text-[#a6f30d] transition-colors duration-700" />
                  </div>
                  <span className="font-questrial font-bold text-sm tracking-wide text-slate-300 group-hover:text-white transition-colors duration-300">
                    {isEn ? 'Portrait Placeholder' : 'Placeholder Foto Portret'}
                  </span>
                  <span className="text-xs text-slate-500 group-hover:text-[#a6f30d] mt-1 transition-colors duration-300">
                    {isEn ? 'Hover: 0° Upright & Color' : 'Arahkan kursor: 0° Tegak & Warna'}
                  </span>
                </div>
              )}

              {/* Dark Gradient Overlay at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Profile Info Overlay at Bottom-Left */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 z-10 space-y-1.5 text-left bg-gradient-to-t from-black/95 via-black/70 to-transparent">
              <div className="font-mono text-sm sm:text-base font-black tracking-widest text-white uppercase">
                {name}
              </div>
              <p className="font-questrial text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                {roleText} {isEn ? 'based in' : 'berbasis di'} {location}.
              </p>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
