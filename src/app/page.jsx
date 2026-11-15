'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import BentoGridRow1 from '@/components/BentoGridRow1';
import BentoGridRow2 from '@/components/BentoGridRow2';
import ProjectsSection from '@/components/ProjectsSection';
import EducationExperienceSection from '@/components/EducationExperienceSection';
import CertificatesSection from '@/components/CertificatesSection';
import Footer from '@/components/Footer';
import CmsEditorModal from '@/components/CmsEditorModal';
import defaultPortfolioData from '../../public/data/portfolio-data.json';

export default function Home() {
  const [portfolioData, setPortfolioData] = useState(defaultPortfolioData);
  const [lang, setLang] = useState('id_lang'); // 'id_lang' or 'en'
  const [theme, setTheme] = useState('dark');
  const [cmsModalOpen, setCmsModalOpen] = useState(false);

  // Load language preference from localStorage on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('portfolio_lang');
      if (savedLang === 'en' || savedLang === 'id_lang') {
        setLang(savedLang);
      }
    } catch (e) {
      // Ignore localStorage errors
    }
  }, []);

  const handleSetLang = (newLang) => {
    setLang(newLang);
    try {
      localStorage.setItem('portfolio_lang', newLang);
    } catch (e) {
      // Ignore localStorage errors
    }
  };

  // Sync with runtime json if updated
  useEffect(() => {
    fetch('/data/portfolio-data.json')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data === 'object') {
          setPortfolioData(data);
        }
      })
      .catch(() => {
        // Fallback gracefully to bundled JSON data
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black bg-dot-grid text-white">
      
      {/* Top Navbar */}
      <Navbar
        data={portfolioData}
        lang={lang}
        setLang={handleSetLang}
        theme={theme}
        setTheme={setTheme}
        onOpenCms={() => setCmsModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Hero Banner Section */}
        <HeroBanner data={portfolioData} lang={lang} />

        {/* Bento Grid Row 1 (Profile Card with Photo Placeholder, Metrics, Skills Matrix) */}
        <BentoGridRow1 data={portfolioData} lang={lang} />

        {/* Bento Grid Row 2 (Core Competencies & Services) */}
        <BentoGridRow2 data={portfolioData} lang={lang} />

        {/* Highlighted Projects Showcase */}
        <ProjectsSection data={portfolioData} lang={lang} />

        {/* Education, Work Experience & Organizations Timeline */}
        <EducationExperienceSection data={portfolioData} lang={lang} />

        {/* Verified Licenses & Certifications Section */}
        <CertificatesSection data={portfolioData} lang={lang} />
      </main>

      {/* Footer & Direct Contact Section */}
      <Footer data={portfolioData} lang={lang} />

      {/* Live JSON CMS Modal */}
      {cmsModalOpen && (
        <CmsEditorModal
          data={portfolioData}
          onUpdateData={updated => {
            setPortfolioData(updated);
          }}
          onClose={() => setCmsModalOpen(false)}
        />
      )}

    </div>
  );
}
