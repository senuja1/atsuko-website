import { useState, useEffect, lazy, Suspense } from 'react';
import './index.css';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import JapaneseGateScrollStage from './components/JapaneseGateScrollStage';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import FloatingActions from './components/FloatingActions';
import SiteLoadingScreen from './components/SiteLoadingScreen';

// Lazy-load all page-level components — only parsed when first visited
const HomeView = lazy(() => import('./components/HomeView'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const CoursesPage = lazy(() => import('./components/CoursesPage'));
const StudentVisaPage = lazy(() => import('./components/StudentVisaPage'));
const JobVisaPage = lazy(() => import('./components/JobVisaPage'));
const SuccessStoriesPage = lazy(() => import('./components/SuccessStoriesPage'));
const BranchNetwork = lazy(() => import('./components/BranchNetwork'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const StudentLifePage = lazy(() => import('./components/StudentLifePage'));
const VisaAgencyLanding = lazy(() => import('./components/VisaAgencyLanding'));
const LegalPage = lazy(() => import('./components/LegalPage'));
const PortalUnderConstructionPage = lazy(() => import('./components/PortalUnderConstructionPage'));

export default function App() {
  const [lang, setLang] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDefaultProgram, setModalDefaultProgram] = useState('');

  // Synchronize document lang attribute & dynamic SEO title/meta description per route
  useEffect(() => {
    document.documentElement.lang = lang === 'jp' ? 'ja' : lang;

    const seoMap = {
      home: {
        title: 'Atsuko International (PVT) LTD | 篤子 学校 (ATSUKO GAKKO) - Official Pathway to Study & Work in Japan',
        desc: 'Government-registered Japanese Language Academy & Overseas Employment Agency (SLBFE License No. 3293 • PV 0217143 • OTIT LKA000076). JLPT/JFT training, Student Visas & SSW Caregiver Placements.'
      },
      about: {
        title: 'About Us & Official Licensure | Atsuko International (SLBFE No. 3293)',
        desc: 'Learn about Atsuko International (PVT) LTD (PV 0217143, SLBFE License 3293) in Kadawatha, Sri Lanka and our Registered Support Organization (23登-008312) in Komaki, Aichi, Japan. Loan facilities available.'
      },
      courses: {
        title: 'Japanese Language (JLPT/JFT) & SSW Vocational Courses | Atsuko International',
        desc: 'Full-time Japanese language courses (1-Month JLPT N5, 50-Day JFT-Basic & N4), SSW Caregiver (Kaigo), NVQ Level 3 Nursing, Food Service & Agriculture training in Kadawatha.'
      },
      'student-visa': {
        title: 'Japan Student Visa (Ryugaku) Pathway | Atsuko International',
        desc: 'Study in Japan at accredited language schools and universities in Tokyo, Osaka, Nagoya & Sendai with legal part-time work permission and COE processing by Atsuko International.'
      },
      'job-visa': {
        title: 'Japan SSW Work Visa & Caregiver Placements | Atsuko International',
        desc: '5-year Specified Skilled Worker (SSW) work visas for Caregiver (Kaigo), Food & Accommodation, and Agriculture & Livestock with direct support in Komaki, Aichi, Japan.'
      },
      facilities: {
        title: 'Campus Facilities, Caregiver Lab & Student Hostels | Atsuko International',
        desc: 'Explore Atsuko International’s Kadawatha campus featuring our Kaigo hospital simulation ward, CBT Prometric exam lab, audio classrooms, and safe student hostels.'
      },
      stories: {
        title: 'Success Stories & Candidate Deployments to Japan | Atsuko International',
        desc: 'Watch real student testimonials, JFT/JLPT achievers, and airport departure stories of Sri Lankan candidates successfully placed in Japan through Atsuko International.'
      },
      branches: {
        title: 'Sri Lanka & Japan Branch Network | Atsuko International',
        desc: 'Visit Atsuko International Head Center in Kadawatha, Sri Lanka or our Japan Resident Support Office at Sunshine Komaki Building, Komaki City, Aichi Prefecture.'
      },
      contact: {
        title: 'Contact Us & Book Free Consultation | Atsuko International',
        desc: 'Contact Atsuko International (PVT) LTD at 191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka. (+94 112 987 263 / +94 77 793 3352) or our Komaki, Aichi Japan office.'
      },
      privacy: {
        title: 'Official Privacy Policy & Data Protection | Atsuko International (PDPA & APPI)',
        desc: 'Read how Atsuko International (PVT) LTD (Sri Lanka) and 株式会社 Atsuko International (Japan) safeguard and process personal data in compliance with the Sri Lanka PDPA and Japan APPI.'
      },
      terms: {
        title: 'Terms & Conditions of Service | Atsuko International (SLBFE Lic. #3293)',
        desc: 'Official Terms & Conditions governing course enrollment, zero initial fee recruitment policy, and legal visa & employment placement services by Atsuko International.'
      },
      portal: {
        title: 'Atsuko Student Portal (LMS) • Under Construction | 篤子 学校',
        desc: 'Official Student Management and E-Learning Portal for Atsuko International. Currently under construction.'
      }
    };

    const meta = seoMap[currentPage] || seoMap.home;
    document.title = meta.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', meta.desc);
    }
  }, [lang, currentPage]);

  // Synchronize with URL hash for browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (hash === 'student-visa' || hash === 'visa-student') {
        setCurrentPage('student-visa');
      } else if (hash === 'job-visa' || hash === 'visa-job' || hash === 'visa-ssw') {
        setCurrentPage('job-visa');
      } else if (hash === 'visa') {
        setCurrentPage('student-visa');
      } else if (hash === 'legal') {
        setCurrentPage('privacy');
      } else if (hash === 'portal' || hash === 'student-portal') {
        setCurrentPage('portal');
      } else if (['home', 'about', 'courses', 'facilities', 'stories', 'branches', 'contact', 'landing', 'student-visa', 'job-visa', 'privacy', 'terms', 'portal'].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page, subTab) => {
    let targetPage = page;
    if (page === 'visa') {
      targetPage = (subTab === 'ssw' || subTab === 'job') ? 'job-visa' : 'student-visa';
    }
    if (targetPage === currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setCurrentPage(targetPage);
    window.location.hash = targetPage;
    window.scrollTo({ top: 0, behavior: 'instant' });
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

  const isLegalPage = currentPage === 'privacy' || currentPage === 'terms' || currentPage === 'legal';
  const isPortalPage = currentPage === 'portal';
  const hideChrome = isLegalPage || isPortalPage;

  return (
    <div className={`app-root ${isLegalPage ? 'app-root-legal-mode' : ''} ${isPortalPage ? 'app-root-portal-mode' : ''}`}>
      {/* Cinematic Gateway Loading Screen (Preloads Torii gate & high-res visuals) */}
      {!hideChrome && <SiteLoadingScreen lang={lang} minDuration={1200} />}

      {/* Gentleman Navy Top Utility Bar (Hidden in Document/Portal Mode) */}
      {!hideChrome && (
        <TopBar 
          lang={lang} 
          onNavigate={handleNavigate} 
        />
      )}

      {/* Primary Navigation Bar (Hidden in Document/Portal Mode) */}
      {!hideChrome && (
        <Navbar 
          lang={lang}
          setLang={setLang}
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenModal={handleOpenModal}
          onScrollToEligibility={scrollToEligibility}
        />
      )}

      {/* 3. Main Platform Body */}
      <main className={isLegalPage ? "main-content-legal-doc" : "main-content"}>
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
        {/* SEPARATE PAGE 4A: STUDENT VISA (RYUGAKU) */}
        {(currentPage === 'student-visa' || currentPage === 'visa') && (
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <StudentVisaPage lang={lang} onOpenModal={handleOpenModal} onNavigate={handleNavigate} />
          </Suspense>
        )}

        {/* SEPARATE PAGE 4B: JOB VISA (SSW & TITP) */}
        {currentPage === 'job-visa' && (
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <JobVisaPage lang={lang} onOpenModal={handleOpenModal} onNavigate={handleNavigate} />
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
        {/* STANDALONE OFFICIAL DOCUMENT VIEWER: PRIVACY POLICY & TERMS OF SERVICE */}
        {(currentPage === 'privacy' || currentPage === 'terms' || currentPage === 'legal') && (
          <Suspense fallback={<div style={{ minHeight: '100vh', background: '#eef2f6' }} />}>
            <LegalPage 
              lang={lang} 
              setLang={setLang}
              initialTab={currentPage === 'terms' ? 'terms' : 'privacy'} 
              onNavigate={handleNavigate} 
              onOpenModal={handleOpenModal} 
            />
          </Suspense>
        )}

        {/* STANDALONE STUDENT PORTAL UNDER CONSTRUCTION PAGE */}
        {currentPage === 'portal' && (
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
            <PortalUnderConstructionPage 
              lang={lang} 
              onNavigate={handleNavigate} 
            />
          </Suspense>
        )}
      </main>

      {/* 5. Master Footer (Hidden on Standalone Document / Portal Pages) */}
      {!hideChrome && (
        <Footer 
          lang={lang}
          onOpenModal={() => handleOpenModal('General Consultation')}
          onNavigate={handleNavigate}
        />
      )}

      {/* 6. Floating Action Buttons (Hidden on Standalone Document / Portal Pages) */}
      {!hideChrome && <FloatingActions lang={lang} />}

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
