import { 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  Award, 
  Send 
} from 'lucide-react';
import Hero from './Hero';
import StatsBar from './StatsBar';
import RevealOnScroll from './RevealOnScroll';
import EligibilityChecker from './EligibilityChecker';
import ProgramsSection from './ProgramsSection';
import TrainingShowcase from './TrainingShowcase';
import JapaneseQuiz from './JapaneseQuiz';
import RoadmapSection from './RoadmapSection';
import SuccessStories from './SuccessStories';
import BranchNetwork from './BranchNetwork';
import FaqSection from './FaqSection';
import { targetAudiencePathways, studentVisaIntakes } from '../data/websiteData';

export default function HomeView({ lang, onOpenModal, onNavigate, scrollToEligibility }) {
  return (
    <div className="home-view">
      {/* Hero Section */}
      <Hero 
        lang={lang} 
        onOpenModal={() => onOpenModal('Consultation Request')} 
        onScrollToEligibility={scrollToEligibility} 
      />

      {/* Trust & Performance Metrics Counter */}
      <StatsBar lang={lang} />

      {/* Target Customers Gateway (Document Section 3) */}
      <section className="section target-gateway-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <Award size={14} />
              Tailored Pathways
            </span>
            <h2 className="section-title">
              Designed For Every <span className="text-gradient-red">Aspirational Journey</span>
            </h2>
            <p className="section-subtitle">
              Whether you are a student after A/Ls, a skilled vocational worker, or a parent seeking government-licensed security, Atsuko International has a dedicated pathway for you.
            </p>
          </div>

          <div className="target-gateway-grid">
            {targetAudiencePathways.map((card, idx) => {
              const isStudent = card.id === 'students';
              const isWorker = card.id === 'workers';
              const Icon = isStudent ? GraduationCap : isWorker ? Briefcase : ShieldCheck;

              return (
                <RevealOnScroll key={card.id} delay={0.15 * (idx + 1)}>
                  <div className="target-gateway-card">
                    <div className="tg-card-header">
                      <div className="tg-icon-box">
                        <Icon size={24} />
                      </div>
                      <span className="tg-tag">{card.tag}</span>
                    </div>

                    <h3 className="tg-title">{card.title}</h3>
                    <div className="tg-subtitle">{card.subtitle}</div>
                    <p className="tg-desc">{card.description}</p>

                    <ul className="tg-points-list">
                      {card.points.map((pt, pIdx) => (
                        <li key={pIdx}>
                          <CheckCircle2 size={14} className="text-red flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => {
                        if (card.targetTab === 'about') onNavigate('about');
                        else if (card.targetTab === 'studentVisa') onNavigate('visa');
                        else if (card.targetTab === 'sswWorkVisa') onNavigate('visa');
                        else onNavigate('courses');
                      }}
                      className="btn btn-primary btn-block tg-btn"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Visa & Pathway Eligibility Calculator */}
      <RevealOnScroll delay={0.1}>
        <EligibilityChecker 
          lang={lang}
          onOpenModal={() => onOpenModal('Custom Pathway Booking')} 
        />
      </RevealOnScroll>

      {/* Academic & SSW Pathways Showcase */}
      <RevealOnScroll delay={0.1}>
        <section className="home-programs-wrapper">
          <ProgramsSection 
            lang={lang}
            onOpenModal={onOpenModal} 
          />
          <div className="container" style={{ textAlign: 'center', marginTop: '-2rem', marginBottom: '3.5rem' }}>
            <button 
              onClick={() => onNavigate('courses')}
              className="btn btn-gold"
              style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}
            >
              <span>View All Courses & Active Batch Schedules</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </RevealOnScroll>

      {/* Practical Simulation Facilities & Sensei Classrooms */}
      <RevealOnScroll delay={0.1}>
        <TrainingShowcase 
          lang={lang}
          onOpenModal={onOpenModal} 
        />
      </RevealOnScroll>

      {/* Interactive Japanese Language Mini-Quiz */}
      <RevealOnScroll delay={0.1}>
        <JapaneseQuiz 
          lang={lang}
          onOpenModal={onOpenModal} 
        />
      </RevealOnScroll>

      {/* 6-Step Roadmap from Sri Lanka to Japan */}
      <RevealOnScroll delay={0.1}>
        <RoadmapSection 
          lang={lang}
          onOpenModal={onOpenModal} 
        />
      </RevealOnScroll>

      {/* Airport Departure & Verified Cohort Representation */}
      <RevealOnScroll delay={0.1}>
        <SuccessStories lang={lang} />
      </RevealOnScroll>

      {/* Island-wide & Komaki/Sendai Japan Center Network */}
      <RevealOnScroll delay={0.1}>
        <BranchNetwork 
          lang={lang}
          onOpenModal={onOpenModal} 
        />
      </RevealOnScroll>

      {/* Frequently Asked Questions & SLBFE Guidance */}
      <RevealOnScroll delay={0.1}>
        <FaqSection lang={lang} />
      </RevealOnScroll>

      {/* Pre-Footer Final Call to Action Banner */}
      <RevealOnScroll delay={0.1}>
        <section className="home-bottom-cta">
          <div className="container">
            <div className="home-cta-box">
              <span className="section-badge badge-gold">
                <ShieldCheck size={14} />
                SLBFE License No. 3293 • PV 0217143 • www.atsukojapan.com
              </span>
              <h2 className="home-cta-title">
                Your Trusted Pathway to Japan Starts Today
              </h2>
              <p className="home-cta-desc">
                Join thousands of Sri Lankan students and skilled workers who have successfully flown to Tokyo, Osaka, 
                Nagoya, and Sendai under official government protection.
              </p>
              <div className="home-cta-buttons">
                <button 
                  onClick={() => onOpenModal('Fast Registration')}
                  className="btn btn-primary btn-pulse"
                  style={{ padding: '0.9rem 2rem' }}
                >
                  <Sparkles size={16} />
                  <span>Register for Next Intake</span>
                </button>
                <a 
                  href="https://wa.me/94778643352" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-whatsapp"
                  style={{ padding: '0.9rem 2rem' }}
                >
                  <span>WhatsApp Admissions Advisor</span>
                </a>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="btn btn-secondary-white"
                  style={{ padding: '0.9rem 2rem' }}
                >
                  <span>Visit Nearest Branch</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
