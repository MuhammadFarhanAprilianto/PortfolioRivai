'use client';

import React from 'react';
import LabsButton from './ui/LabsButton';
import {
  Mail01Icon,
  Call02Icon,
  Location01Icon,
  ArrowRight02Icon,
  Linkedin02Icon,
  InstagramIcon,
} from 'hugeicons-react';
import { BlurReveal, BlurWords } from './ui/BlurReveal';
import { isEnglish } from '@/lib/i18n';

export default function Footer({ data, lang }) {
  const isEn = isEnglish(lang);
  const profile = data?.profile || {};
  const email = profile.email || 'mrpai267@gmail.com';
  const phone = profile.phone || '+62 896-2267-1182';
  const whatsapp = profile.whatsapp || 'https://wa.me/6289622671182';
  const location = profile.location || 'Jakarta, Indonesia';

  // Direct Gmail web compose link
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(
    isEn
      ? 'Inquiry / Project Collaboration - Muhamad Rivai'
      : 'Peluang Kerja / Kerjasama Proyek - Muhamad Rivai'
  )}`;

  return (
    <footer id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-12">
      
      {/* Top Main Contact Banner */}
      <BlurReveal delay={0.1} duration={0.7}>
        <div className="bento-card p-8 sm:p-12 lg:p-16 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#a6f30d]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a6f30d]">
                {isEn ? 'GET IN TOUCH' : 'MARI BERKOLABORASI'}
              </span>
              <h2 className="font-questrial font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                <BlurWords
                  text={
                    isEn
                      ? "Let's work together on your next project."
                      : 'Siap berkontribusi & berkolaborasi pada proyek Anda.'
                  }
                  duration={0.6}
                />
              </h2>
              <p className="text-sm text-white opacity-90 leading-relaxed max-w-lg">
                {isEn
                  ? 'Open for full-time career opportunities and professional projects in Quality Control (QC), 3G SMAW & 3G GMAW Plate Welding, Store Leader & Marketing, and Visual Communication Design across manufacturing, construction, and mining industries.'
                  : 'Terbuka untuk peluang kerja purna waktu maupun proyek profesional di bidang Quality Control (QC), Welder 3G SMAW & 3G GMAW, Leader & Marketing Store, serta Desain Komunikasi Visual (Fotografi & Videografi) pada industri manufaktur, konstruksi, dan pertambangan.'}
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-4">
              
              {/* Direct Email Card with Labs Rolling Scroll & Direct Gmail Compose */}
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-card p-5 sm:p-6 flex items-center justify-between group hover:border-[#a6f30d] transition-all bg-[#272630] border-white/10 shadow-lg cursor-pointer"
                title={isEn ? 'Send Email via Gmail' : 'Kirim Pesan Langsung via Gmail'}
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white text-black flex items-center justify-center group-hover:bg-[#a6f30d] group-hover:text-black transition-all shrink-0">
                    <Mail01Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                      {isEn ? 'Direct Email' : 'Email Langsung'}
                    </span>
                    {/* Vertical Rolling Slot-Machine Text */}
                    <span className="relative z-10 block overflow-hidden h-[1.3rem] sm:h-[1.4rem] leading-[1.3rem] sm:leading-[1.4rem]">
                      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                        <span className="h-[1.3rem] sm:h-[1.4rem] flex items-center font-questrial font-bold text-xs sm:text-sm md:text-base text-white truncate">
                          {email}
                        </span>
                        <span className="h-[1.3rem] sm:h-[1.4rem] flex items-center font-questrial font-bold text-xs sm:text-sm md:text-base text-[#a6f30d] truncate">
                          {email}
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-[#a6f30d] group-hover:text-black text-white flex items-center justify-center transition-all duration-300 border border-white/10 group-hover:border-[#a6f30d] shrink-0">
                  <ArrowRight02Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </a>

              {/* Quick Contact & WhatsApp Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="bento-card p-4 sm:p-5 flex items-center gap-3.5 group hover:border-[#a6f30d] transition-all bg-[#272630] border-white/10 shadow-md cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-[#a6f30d] group-hover:bg-[#a6f30d] group-hover:text-black flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Call02Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">WhatsApp</span>
                    {/* Vertical Rolling Slot-Machine Text */}
                    <span className="relative z-10 block overflow-hidden h-[1.2rem] leading-[1.2rem]">
                      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                        <span className="h-[1.2rem] flex items-center text-xs font-bold text-white">
                          {phone}
                        </span>
                        <span className="h-[1.2rem] flex items-center text-xs font-bold text-[#a6f30d]">
                          {phone}
                        </span>
                      </span>
                    </span>
                  </div>
                </a>

                <div className="bento-card p-4 sm:p-5 flex items-center gap-3.5 bg-[#272630] border-white/10 shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Location01Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">
                      {isEn ? 'Location' : 'Lokasi'}
                    </span>
                    <span className="text-xs font-bold text-white">{location}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Bottom Line */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-white/80">
            <span>© 2026 Muhamad Rivai. {isEn ? 'All rights reserved.' : 'Hak cipta dilindungi.'}</span>

            <div className="flex items-center gap-3">
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#a6f30d] hover:text-black border border-white/10 text-slate-300 transition-all flex items-center gap-1.5"
                >
                  <Linkedin02Icon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              )}
              {profile.instagram && (
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-[#a6f30d] hover:text-black border border-white/10 text-slate-300 transition-all flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              )}
            </div>
          </div>

        </div>
      </BlurReveal>

    </footer>
  );
}
