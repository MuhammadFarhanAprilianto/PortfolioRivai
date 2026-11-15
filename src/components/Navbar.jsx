'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu01Icon, Cancel01Icon, TranslateIcon } from 'hugeicons-react';

export default function Navbar({ data, lang, setLang }) {
  const [activeTab, setActiveTab] = useState('ABOUT');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const isEn = lang === 'en';
  const logoImage = data?.nav?.logoImage || '/assets/Logo Web.webp';

  const navLinks = [
    { id: 'about', label: isEn ? 'ABOUT' : 'TENTANG', href: '#about' },
    { id: 'projects', label: isEn ? 'WORK' : 'PROYEK', href: '#projects' },
    { id: 'experience', label: isEn ? 'EXPERIENCE' : 'PENGALAMAN', href: '#experience' },
    { id: 'contact', label: isEn ? 'CONTACT' : 'KONTAK', href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'id_lang' : 'en'));
  };

  // Close mobile drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Automatic ScrollSpy: Updates activeTab indicator line automatically as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sectionIds = ['about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            const matchingLink = navLinks.find((link) => link.id === sectionId);
            if (matchingLink) {
              setActiveTab(matchingLink.label);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-4 z-50 px-4 sm:px-6 max-w-5xl mx-auto w-full"
    >
      {/* 3D Crystal Glass Floating Pill Capsule */}
      <div
        className={cn(
          'crystal-glass-container flex items-center justify-between h-14 px-3.5 sm:px-6 transition-all duration-300',
          scrolled && 'scale-[0.99] shadow-black/80'
        )}
      >
        {/* Brand / Logo (Questrial Font - Exact match to reference) */}
        <a
          href="#about"
          className="flex items-center gap-1.5 group cursor-pointer select-none relative z-10 font-questrial text-lg sm:text-xl tracking-tight"
        >
          <span className="font-bold text-white group-hover:text-[#a6f30d] transition-colors">
            Muhamad
          </span>
          <span className="font-normal text-slate-400 group-hover:text-white transition-colors">
            Rivai
          </span>
        </a>

        {/* Center: Desktop Navigation Links with Smooth Sliding Hover Pill */}
        <nav
          onMouseLeave={() => setHoveredTab(null)}
          className="hidden md:flex items-center gap-1.5 relative z-10"
        >
          {navLinks.map((link) => {
            const isHovered = hoveredTab === link.label;
            const isActive = activeTab === link.label;

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.label)}
                onMouseEnter={() => setHoveredTab(link.label)}
                className={cn(
                  'font-questrial relative px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors duration-200 select-none rounded-full',
                  isHovered || isActive
                    ? 'text-white drop-shadow-sm'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                {/* Smooth Gliding Hover Pill */}
                {isHovered && (
                  <motion.div
                    layoutId="nav-sliding-hover-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/15 -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                  />
                )}

                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Available Action Button & Language Switcher */}
        <div className="flex items-center gap-2.5 relative z-10">
          {/* Dual Segmented Language Switcher (ID | EN) */}
          <div className="hidden sm:flex items-center p-0.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setLang('id_lang')}
              className={cn(
                'px-2.5 py-1 rounded-full text-[11px] font-black tracking-wider transition-all duration-200 cursor-pointer select-none',
                !isEn
                  ? 'bg-[#a6f30d] text-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              )}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={cn(
                'px-2.5 py-1 rounded-full text-[11px] font-black tracking-wider transition-all duration-200 cursor-pointer select-none',
                isEn
                  ? 'bg-[#a6f30d] text-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              )}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Available Pill Capsule */}
          <a
            href="#contact"
            className="font-questrial hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 border border-white/15 bg-white/5 hover:bg-white/10 text-white cursor-pointer select-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-[#a6f30d]"
          >
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            </span>
            <span>{isEn ? 'AVAILABLE' : 'TERSEDIA'}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-white/15 bg-white/5 text-white transition-all duration-200"
          >
            {mobileMenuOpen ? <Cancel01Icon className="w-4 h-4" /> : <Menu01Icon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Liquid Glass Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden mt-2 p-3.5 crystal-glass-card space-y-2 font-questrial border border-white/15 bg-[#1F1E25]/95 backdrop-blur-xl shadow-2xl rounded-2xl"
          >
            <div className="flex flex-col space-y-1 relative z-10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.label);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    'px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-150 flex items-center justify-between',
                    activeTab === link.label
                      ? 'bg-white text-black shadow-sm font-black'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            <div className="pt-2.5 border-t border-white/10 flex flex-col gap-2 relative z-10">
              <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setLang('id_lang');
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    'flex-1 py-2 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5',
                    !isEn ? 'bg-[#a6f30d] text-black font-black shadow-sm' : 'text-slate-400 hover:text-white'
                  )}
                >
                  <TranslateIcon className="w-3.5 h-3.5" />
                  <span>Bahasa Indonesia (ID)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLang('en');
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    'flex-1 py-2 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5',
                    isEn ? 'bg-[#a6f30d] text-black font-black shadow-sm' : 'text-slate-400 hover:text-white'
                  )}
                >
                  <TranslateIcon className="w-3.5 h-3.5" />
                  <span>English (EN)</span>
                </button>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                <span>{isEn ? 'AVAILABLE' : 'TERSEDIA'}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
