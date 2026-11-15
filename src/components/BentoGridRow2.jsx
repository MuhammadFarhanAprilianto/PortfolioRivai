'use client';

import React from 'react';
import {
  PaintBoardIcon,
  Video01Icon,
  CheckmarkBadge01Icon,
  FireIcon,
  Store01Icon,
  Megaphone01Icon,
} from 'hugeicons-react';
import { BlurReveal, BlurWords } from './ui/BlurReveal';
import { t, isEnglish } from '@/lib/i18n';

const SERVICE_CONFIGS = {
  'visual-design': {
    icon: PaintBoardIcon,
    color: '#FF9A00',
    glow: 'rgba(255, 154, 0, 0.45)',
  },
  'video-production': {
    icon: Video01Icon,
    color: '#9999FF',
    glow: 'rgba(153, 153, 255, 0.45)',
  },
  'quality-control': {
    icon: CheckmarkBadge01Icon,
    color: '#a6f30d',
    glow: 'rgba(166, 243, 13, 0.45)',
  },
  'welding-industrial': {
    icon: FireIcon,
    color: '#FF5722',
    glow: 'rgba(255, 87, 34, 0.45)',
  },
  'welding-gmaw': {
    icon: FireIcon,
    color: '#FB923C',
    glow: 'rgba(251, 146, 60, 0.45)',
  },
  'branch-management': {
    icon: Store01Icon,
    color: '#EAB308',
    glow: 'rgba(234, 179, 8, 0.45)',
  },
  'sales-marketing': {
    icon: Megaphone01Icon,
    color: '#EC4899',
    glow: 'rgba(236, 72, 153, 0.45)',
  },
  'english-communication': {
    icon: Megaphone01Icon,
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.45)',
  },
};

export default function BentoGridRow2({ data, lang }) {
  const isEn = isEnglish(lang);
  const services = data?.services || [];

  return (
    <section id="skills" className="space-y-6 pt-4">
      <BlurReveal delay={0.1} duration={0.65}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#a6f30d]">
              {isEn ? 'CORE SPECIALIZATIONS' : 'SPESIALISASI UTAMA'}
            </span>
            <h2 className="font-questrial font-extrabold text-2xl sm:text-4xl text-white tracking-tight mt-1">
              <BlurWords text={isEn ? 'Expertise & Capabilities' : 'Keahlian & Kemampuan Utama'} duration={0.6} />
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white opacity-90 max-w-md">
            {isEn
              ? 'Combining creative visual storytelling with certified precision in industrial manufacturing and store leadership.'
              : 'Memadukan kreativitas visual dan multimedia dengan ketelitian bersertifikasi dalam quality control manufaktur dan manajemen retail.'}
          </p>
        </div>
      </BlurReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv, idx) => {
          const conf = SERVICE_CONFIGS[srv.id] || {
            icon: CheckmarkBadge01Icon,
            color: '#a6f30d',
            glow: 'rgba(166, 243, 13, 0.4)',
          };
          const IconComponent = conf.icon;
          const title = t(srv.title, lang);
          const desc = t(srv.description, lang);
          const statText = t(srv.stat, lang);

          return (
            <BlurReveal key={srv.id || idx} delay={0.1 + idx * 0.08} duration={0.65}>
              <div
                className="bento-card p-6 sm:p-7 flex flex-col justify-between gap-6 border border-white/10 group hover:border-[#a6f30d] shadow-lg h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {/* 3D Thematic Metallic Capsule Badge (Zero Zoom) */}
                    <div
                      className="relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(30,29,37,0.9) 60%, rgba(15,15,20,0.95) 100%)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.25)',
                        border: `1px solid rgba(255, 255, 255, 0.15)`,
                      }}
                    >
                      {/* Top Ambient Highlight Rim */}
                      <div className="absolute top-0 inset-x-2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                      {/* 3D Icon with Custom Glowing Accent */}
                      <div
                        className="flex items-center justify-center transition-colors duration-300"
                        style={{
                          color: conf.color,
                          filter: `drop-shadow(0 0 6px ${conf.glow})`,
                        }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/10">
                      {statText}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-questrial font-bold text-lg sm:text-xl text-white group-hover:text-[#d4f938] transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white leading-relaxed mt-2 opacity-90">
                      {desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {srv.tags?.map(t => (
                    <span
                      key={t}
                      className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#272630] text-white border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </BlurReveal>
          );
        })}
      </div>
    </section>
  );
}
