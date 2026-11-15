'use client';

import React, { useState, useEffect } from 'react';
import {
  Certificate01Icon,
  CheckmarkBadge01Icon,
  Building01Icon,
  ViewIcon,
  Cancel01Icon,
  ArrowUpRight01Icon,
  Download01Icon,
} from 'hugeicons-react';
import LabsButton from './ui/LabsButton';
import { BlurReveal, BlurWords } from './ui/BlurReveal';
import { t, isEnglish } from '@/lib/i18n';

export default function CertificatesSection({ data, lang }) {
  const isEn = isEnglish(lang);
  const certificates = data?.certificates || [];
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  const isImageFile = (url) => {
    if (!url) return false;
    return url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png');
  };

  return (
    <section id="certificates" className="space-y-6 pt-6">
      
      {/* Header */}
      <BlurReveal delay={0.1} duration={0.65}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#a6f30d]">
              {isEn ? 'VERIFIED CREDENTIALS' : 'SERTIFIKASI & PENGHARGAAN'}
            </span>
            <h2 className="font-questrial font-extrabold text-2xl sm:text-4xl text-white tracking-tight mt-1">
              <BlurWords text={isEn ? 'Licenses & Certifications' : 'Lisensi & Penghargaan Resmi'} duration={0.6} />
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white opacity-90 max-w-md">
            {isEn
              ? 'Nationally accredited professional certifications and industry-recognized credentials.'
              : 'Sertifikasi kompetensi nasional BNSP dan pengakuan kredensial profesional industri.'}
          </p>
        </div>
      </BlurReveal>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => (
          <BlurReveal key={cert.id || idx} delay={0.1 + idx * 0.08} duration={0.65}>
            <div
              className="bento-card p-6 sm:p-7 border border-white/10 flex flex-col justify-between gap-6 group hover:border-[#a6f30d] shadow-lg transition-colors duration-300 h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
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
                    <Certificate01Icon className="w-6 h-6 text-[#a6f30d] drop-shadow-[0_0_6px_rgba(166,243,13,0.4)]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/15 text-white border border-white/10">
                    {cert.year}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-[#a6f30d] uppercase tracking-wider block">
                    {t(cert.category, lang)}
                  </span>
                  <h3 className="font-questrial font-bold text-lg sm:text-xl text-white mt-1 group-hover:text-[#d4f938] transition-colors">
                    {t(cert.title, lang)}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <div className="flex items-center gap-1.5 truncate max-w-[180px]">
                    <Building01Icon className="w-3.5 h-3.5 shrink-0 text-[#a6f30d]" />
                    <span className="truncate text-white opacity-90">{t(cert.issuer, lang)}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[#d4f938] font-bold text-[11px]">
                    <CheckmarkBadge01Icon className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Action Button: Lihat Sertifikat */}
                <div className="pt-1">
                  <LabsButton
                    variant="primary"
                    icon={ViewIcon}
                    iconPosition="left"
                    onClick={() => setSelectedCert(cert)}
                    className="w-full py-2.5 text-xs font-bold"
                  >
                    {isEn ? 'View Certificate' : 'Lihat Sertifikat'}
                  </LabsButton>
                </div>
              </div>
            </div>
          </BlurReveal>
        ))}
      </div>

      {/* Interactive Certificate Preview Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-[#18171f] border border-white/20 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(166, 243, 13, 0.15)',
            }}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-3 bg-[#131217]">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#a6f30d]/10 border border-[#a6f30d]/30 flex items-center justify-center shrink-0">
                  <Certificate01Icon className="w-5 h-5 text-[#a6f30d]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-[#a6f30d] uppercase tracking-wider block truncate">
                    {t(selectedCert.category, lang)} • {selectedCert.year}
                  </span>
                  <h3 className="font-questrial font-bold text-base sm:text-lg text-white truncate">
                    {t(selectedCert.title, lang)}
                  </h3>
                  <p className="text-xs text-white/70 truncate">{t(selectedCert.issuer, lang)}</p>
                </div>
              </div>

              {/* Action Buttons: Open Tab & Close */}
              <div className="flex items-center gap-2 shrink-0">
                {selectedCert.fileUrl && (
                  <a
                    href={selectedCert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#a6f30d] hover:text-black text-white text-[11px] sm:text-xs font-bold border border-white/15 transition-colors duration-200"
                  >
                    <ArrowUpRight01Icon className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline sm:inline">{isEn ? 'Open Full' : 'Buka Tab Baru'}</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/15 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <Cancel01Icon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Viewer Content */}
            <div className="flex-1 p-3 sm:p-6 bg-black/60 overflow-auto flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
              {selectedCert.fileUrl ? (
                isImageFile(selectedCert.fileUrl) ? (
                  <div className="w-full flex items-center justify-center">
                    <img
                      src={selectedCert.fileUrl}
                      alt={t(selectedCert.title, lang)}
                      className="max-h-[55vh] sm:max-h-[68vh] w-auto object-contain rounded-xl border border-white/10 shadow-lg"
                    />
                  </div>
                ) : (
                  <iframe
                    src={`${selectedCert.fileUrl}#view=FitH`}
                    title={t(selectedCert.title, lang)}
                    className="w-full h-[55vh] sm:h-[65vh] md:h-[68vh] rounded-xl border border-white/10 bg-white/5"
                  />
                )
              ) : (
                <div className="max-w-md w-full text-center p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#a6f30d]/10 border border-[#a6f30d]/30 flex items-center justify-center text-[#a6f30d] shadow-[0_0_20px_rgba(166,243,13,0.15)]">
                    <Certificate01Icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#a6f30d]/15 text-[#a6f30d] border border-[#a6f30d]/30 inline-block">
                      {isEn ? 'Official Credential Verified' : 'Kredensial Terverifikasi'}
                    </span>
                    <h4 className="font-questrial font-bold text-lg sm:text-xl text-white">
                      {t(selectedCert.title, lang)}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/80">
                      {t(selectedCert.issuer, lang)} ({selectedCert.year})
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70 leading-relaxed text-center">
                    {isEn
                      ? 'The physical certificate document is currently in the archival issuance process and will be attached soon. Technical competency has been officially completed.'
                      : 'Berkas fisik sertifikat resmi saat ini sedang dalam proses arsip penerbitan oleh lembaga terkait. Kompetensi teknis telah selesai dan terkonfirmasi secara resmi.'}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 bg-[#131217] text-xs">
              <span className="inline-flex items-center gap-1.5 text-[#d4f938] font-bold text-xs">
                <CheckmarkBadge01Icon className="w-4 h-4" />
                <span>{isEn ? 'Official Verified Credential' : 'Sertifikat Terverifikasi Resmi'}</span>
              </span>

              <div className="flex items-center gap-2">
                {selectedCert.fileUrl ? (
                  <a
                    href={selectedCert.fileUrl}
                    download
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#a6f30d] text-black text-xs font-bold hover:bg-white transition-colors"
                  >
                    <Download01Icon className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Download' : 'Unduh'}</span>
                  </a>
                ) : (
                  <span className="text-xs text-white/50 italic px-2">
                    {isEn ? 'Digital file coming soon' : 'File digital segera diunggah'}
                  </span>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors sm:hidden"
                >
                  {isEn ? 'Close' : 'Tutup'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

