import { useState, useEffect, lazy, Suspense } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import JapaneseGateScrollStage from './components/JapaneseGateScrollStage';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import FloatingActions from './components/FloatingActions';

// Lazy-load all page-level components — only parsed when first visited
const HomeView = lazy(() => import('./components/HomeView'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const CoursesPage = lazy(() => import('./components/CoursesPage'));
const VisaServicesPage = lazy(() => import('./components/VisaServicesPage'));
const SuccessStoriesPage = lazy(() => import('./components/SuccessStoriesPage'));
const BranchNetwork = lazy(() => import('./components/BranchNetwork'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const StudentLifePage = lazy(() => import('./components/StudentLifePage'));
const VisaAgencyLanding = lazy(() => import('./components/VisaAgencyLanding'));

export default function App() {
  const [lang, setLang] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDefaultProgram, setModalDefaultProgram] = useState('');

  // Synchronize with URL hash for browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (['home', 'about', 'courses', 'visa', 'facilities', 'stories', 'branches', 'contact', 'landing'].includes(hash)) {
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
    } else {
      handleOpenModal('Eligibility Assessment');
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
            <JapaneseGateScrollStage 
              lang={lang} 
              onEnterWebsite={() => {
                const startEl = document.getElementById('home-content-start');
                if (startEl) startEl.scrollIntoView({ behavior: 'smooth' });
              }} 
              onOpenModal={handleOpenModal}
              onScrollToEligibility={scrollToEligibility}
              onNavigate={handleNavigate}
            />
            <div id="home-content-start">
              <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
                <HomeView 
                  lang={lang}
                  onOpenModal={handleOpenModal}
                  onNavigate={handleNavigate}
                  scrollToEligibility={scrollToEligibility}
                />
              </Suspense>
            </div>
          </div>
        )}

        {/* PAGE 2: ABOUT US */}
        {currentPage === 'about' && (
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <AboutPage lang={lang} onOpenModal={handleOpenModal} onNavigate={handleNavigate} />
          </Suspense>
        )}
        {/* PAGE 3: COURSES & TRAINING */}
        {currentPage === 'courses' && (
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <CoursesPage lang={lang} onOpenModal={handleOpenModal} />
          </Suspense>
        )}
        {/* PAGE 4: VISA SERVICES */}
        {currentPage === 'visa' && (
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <VisaServicesPage lang={lang} onOpenModal={handleOpenModal} />
          </Suspense>
        )}
        {/* PAGE 5: CAMPUS FACILITIES & STUDENT LIFE */}
        {currentPage === 'facilities' && (
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <StudentLifePage lang={lang} onOpenModal={handleOpenModal} onNavigate={handleNavigate} />
          </Suspense>
        )}
        {/* PAGE 6: SUCCESS STORIES */}
        {currentPage === 'stories' && (
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <SuccessStoriesPage lang={lang} onOpenModal={handleOpenModal} onNavigate={handleNavigate} />
          </Suspense>
        )}
        {/* BRANCH NETWORK */}
        {currentPage === 'branches' && (
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <BranchNetwork lang={lang} onOpenModal={handleOpenModal} />
          </Suspense>
        )}
        {/* PAGE 6: CONTACT US */}
        {currentPage === 'contact' && (
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <ContactPage lang={lang} onOpenModal={handleOpenModal} />
          </Suspense>
        )}
        {/* JAPANDI MINIMALIST VISA AGENCY LANDING */}
        {currentPage === 'landing' && (
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <VisaAgencyLanding onApply={() => handleOpenModal('Visa Application')} />
          </Suspense>
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
