import { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import JapaneseGateScrollStage from './components/JapaneseGateScrollStage';
import HomeView from './components/HomeView';
import AboutPage from './components/AboutPage';
import CoursesPage from './components/CoursesPage';
import VisaServicesPage from './components/VisaServicesPage';
import SuccessStoriesPage from './components/SuccessStoriesPage';
import BranchNetwork from './components/BranchNetwork';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import FloatingActions from './components/FloatingActions';
import VisaAgencyLanding from './components/VisaAgencyLanding';

export default function App() {
  const [lang, setLang] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDefaultProgram, setModalDefaultProgram] = useState('');

  // Synchronize with URL hash for browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (['home', 'about', 'courses', 'visa', 'stories', 'branches', 'contact', 'landing'].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    if (page === currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (program = '') => {
    setModalDefaultProgram(program);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const scrollToEligibility = () => {
    const el = document.getElementById('eligibility');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app-root">

      {/* Primary Navigation Bar */}
      <Navbar 
        lang={lang}
        setLang={setLang}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenModal={handleOpenModal}
        onScrollToEligibility={scrollToEligibility}
      />

      {/* 3. Main 6-Page Platform Body */}
      <main className="main-content">
        {/* PAGE 1: HOME PAGE WITH 3D GATE SCROLL-THROUGH STAGE */}
        {currentPage === 'home' && (
          <div>
            {/* Majestic 3D Torii Gate Walkthrough Scroll Animation */}
            <JapaneseGateScrollStage 
              lang={lang} 
              onEnterWebsite={() => {
                const startEl = document.getElementById('home-content-start');
                if (startEl) startEl.scrollIntoView({ behavior: 'smooth' });
              }} 
            />

            {/* Complete Atsuko International Home Sections */}
            <div id="home-content-start">
              <HomeView 
                lang={lang}
                onOpenModal={handleOpenModal}
                onNavigate={handleNavigate}
                scrollToEligibility={scrollToEligibility}
              />
            </div>
          </div>
        )}

        {/* PAGE 2: ABOUT US */}
        {currentPage === 'about' && (
          <AboutPage 
            lang={lang}
            onOpenModal={handleOpenModal}
            onNavigate={handleNavigate}
          />
        )}

        {/* PAGE 3: COURSES & TRAINING */}
        {currentPage === 'courses' && (
          <CoursesPage 
            lang={lang}
            onOpenModal={handleOpenModal}
          />
        )}

        {/* PAGE 4: VISA SERVICES */}
        {currentPage === 'visa' && (
          <VisaServicesPage 
            lang={lang}
            onOpenModal={handleOpenModal}
          />
        )}

        {/* PAGE 5: SUCCESS STORIES & BRANCH NETWORK */}
        {(currentPage === 'stories' || currentPage === 'branches') && (
          <div>
            <SuccessStoriesPage 
              lang={lang}
              onOpenModal={handleOpenModal}
              onNavigate={handleNavigate}
            />
            {/* Multi-Office Network in Sri Lanka (Kadawatha, Kelaniya) & Japan (Komaki, Sendai) */}
            <BranchNetwork 
              lang={lang}
              onOpenModal={handleOpenModal}
            />
          </div>
        )}

        {/* PAGE 6: CONTACT US */}
        {currentPage === 'contact' && (
          <ContactPage 
            lang={lang}
            onOpenModal={handleOpenModal}
          />
        )}

        {/* JAPANDI MINIMALIST VISA AGENCY LANDING */}
        {currentPage === 'landing' && (
          <VisaAgencyLanding 
            onApply={() => handleOpenModal('Visa Application')}
          />
        )}
      </main>

      {/* 5. Master Footer with Legal SLBFE Lic 3293 & Multi-Location Scope */}
      <Footer 
        lang={lang}
        onOpenModal={() => handleOpenModal('General Consultation')}
        onNavigate={handleNavigate}
      />

      {/* 6. Floating Action Buttons (Instant WhatsApp & Phone Hotline) */}
      <FloatingActions lang={lang} />

      {/* 7. Interactive Consultation & Fast Registration Modal */}
      <ConsultationModal 
        lang={lang}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        defaultProgram={modalDefaultProgram}
      />
    </div>
  );
}
