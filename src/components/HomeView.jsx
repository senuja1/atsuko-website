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
  Send,
  Home,
  MapPin,
  Phone,
  Mail,
  Users,
  Clock,
  Globe2
} from 'lucide-react';
import Hero from './Hero';
import StatsBar from './StatsBar';
import RevealOnScroll from './RevealOnScroll';
import TrainingShowcase from './TrainingShowcase';
import RoadmapSection from './RoadmapSection';
import BranchNetwork from './BranchNetwork';
import FaqSection from './FaqSection';
import { targetAudiencePathways, studentLifeData, globalPresenceData, officialContacts } from '../data/websiteData';
import { getUiText } from '../data/uiText';

export default function HomeView({ lang, onOpenModal, onNavigate, scrollToEligibility }) {
  const h = getUiText(lang).home;

  return (
    <div className="home-view">
      {/* 1. Hero Section */}
      <Hero 
        lang={lang} 
        onOpenModal={() => onOpenModal('General Admissions')} 
        onScrollToEligibility={scrollToEligibility} 
      />

      {/* 2. Trust & Official Credentials Bar */}
      <StatsBar lang={lang} />

      {/* 3. Target Audience Pathways */}
      <section className="section target-gateway-section">
        <div className="container">
          <div className="section-header">

            <h2 className="section-title">
              {h.pathwaysTitle} <span className="text-gradient-red">{h.pathwaysHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {h.pathwaysSubtitle}
            </p>
          </div>

          <div className="target-gateway-grid">
            {targetAudiencePathways.map((baseCard, idx) => {
              const card = { ...baseCard, ...(h.pathways[baseCard.id] || {}) };
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


                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>


      {/* 6. Practical Simulation Facilities & Classrooms */}
      <RevealOnScroll delay={0.1}>
        <TrainingShowcase 
          lang={lang}
          onOpenModal={onOpenModal} 
        />
      </RevealOnScroll>

      {/* 7. Student Life & Accommodation Showcase (Leaflet Page 14-16) */}
      <RevealOnScroll delay={0.1}>
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="section-badge badge-gold">
                <Home size={14} />
                {h.facilitiesPreview?.badge || 'Campus Facilities & Accommodation'}
              </span>
              <h2 className="section-title">
                {h.facilitiesPreview?.title || 'Comfortable Housing &'} <span className="text-gradient-red">{h.facilitiesPreview?.highlight || 'Student Life'}</span>
              </h2>
              <p className="section-subtitle">
                {h.facilitiesPreview?.subtitle || 'Safe, affordable on-campus housing with easy access to classes, nutritious budget-friendly meals, and continuous support.'}
              </p>
            </div>

            <div className="presence-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))' }}>
              <div className="credentials-card" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-xl)', padding: '1.75rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fee2e2', color: '#b91c1c', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Building2 size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                  {h.facilitiesPreview?.card1Title || 'Comfortable Accommodation Provided'}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {h.facilitiesPreview?.card1Desc || 'Stay in safe, affordable housing with easy access to the school. Separate wings for male and female students with 24/7 security.'}
                </p>
                <button 
                  onClick={() => onNavigate('facilities')}
                  className="btn btn-sm btn-secondary"
                >
                  <span>{h.facilitiesPreview?.card1Btn || 'Learn More'}</span>
                  <ArrowRight size={12} />
                </button>
              </div>

              <div className="credentials-card" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-xl)', padding: '1.75rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fef3c7', color: '#92400e', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Sparkles size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                  {h.facilitiesPreview?.card2Title || 'Nutritious & Budget-Friendly Meals'}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {h.facilitiesPreview?.card2Desc || 'Wholesome daily meals prepared on campus so candidates can focus 100% on their Japanese language and vocational training.'}
                </p>
                <button 
                  onClick={() => onNavigate('facilities')}
                  className="btn btn-sm btn-secondary"
                >
                  <span>{h.facilitiesPreview?.card2Btn || 'View Details'}</span>
                  <ArrowRight size={12} />
                </button>
              </div>

              <div className="credentials-card" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-xl)', padding: '1.75rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', color: '#0369a1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Users size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                  {h.facilitiesPreview?.card3Title || 'Supportive Assessment System'}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {h.facilitiesPreview?.card3Desc || 'Weekly checkpoints, mock CBT exams, audio listening lab drills, and personalized feedback ensuring high exam pass rates.'}
                </p>
                <button 
                  onClick={() => onNavigate('facilities')}
                  className="btn btn-sm btn-secondary"
                >
                  <span>{h.facilitiesPreview?.card3Btn || 'Assessment Info'}</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 9. 6-Step Roadmap from Sri Lanka to Japan */}
      <RevealOnScroll delay={0.1}>
        <RoadmapSection 
          lang={lang}
          onOpenModal={onOpenModal} 
        />
      </RevealOnScroll>



      {/* 9. Official Global Operating Bases (Sri Lanka & Japan) */}
      <RevealOnScroll delay={0.1}>
        <section className="section" style={{ background: '#ffffff' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-badge badge-red">
                <Building2 size={14} />
                {h.globalPresence?.badge || 'Dual-Nation Structure'}
              </span>
              <h2 className="section-title">
                {h.globalPresence?.title || 'Global Presence in'} <span className="text-gradient-red">{h.globalPresence?.highlight || 'Sri Lanka & Sendai, Japan'}</span>
              </h2>
              <p className="section-subtitle">
                {h.globalPresence?.subtitle || 'Atsuko International operates between our Kadawatha Headquarters and our registered support corporation in Sendai & Aichi, Japan.'}
              </p>
            </div>

            <div className="presence-grid">
              <div className="presence-card presence-sl">
                <div className="presence-card-header">
                  <div className="presence-flag-icon-badge" style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="presence-title">{h.globalPresence?.slTitle || 'Sri Lanka Headquarters'}</h3>
                    <span className="presence-tag">{h.globalPresence?.slTag || 'SLBFE License No. 3293 • PV 0217143'}</span>
                  </div>
                </div>
                <div className="presence-body">
                  <div className="presence-detail-row">
                    <MapPin size={18} className="presence-icon" />
                    <div>
                      <strong>{h.globalPresence?.slAddressLbl || 'Address:'}</strong>
                      <p>{officialContacts.headOfficeAddress}</p>
                    </div>
                  </div>
                  <div className="presence-detail-row">
                    <Phone size={18} className="presence-icon" />
                    <div>
                      <strong>{h.globalPresence?.slHotlineLbl || 'Hotline & Mobiles:'}</strong>
                      <p>{officialContacts.hotline} / {officialContacts.mobile1}</p>
                    </div>
                  </div>
                  <div className="presence-detail-row">
                    <Clock size={18} className="presence-icon" />
                    <div>
                      <strong>{h.globalPresence?.slHoursLbl || 'Working Hours:'}</strong>
                      <p>{h.globalPresence?.slHoursVal || 'Monday – Saturday: 8:30 AM – 5:30 PM | Sunday: 8:30 AM – 2:00 PM'}</p>
                    </div>
                  </div>
                  <div className="presence-detail-row">
                    <Mail size={18} className="presence-icon" />
                    <div>
                      <strong>{h.globalPresence?.slEmailLbl || 'Official Email:'}</strong>
                      <p>{officialContacts.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="presence-card presence-jp">
                <div className="presence-card-header">
                  <div className="presence-flag-icon-badge" style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(220, 38, 38, 0.1)', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Globe2 size={24} />
                  </div>
                  <div>
                    <h3 className="presence-title">{h.globalPresence?.jpTitle || 'Japan Operations & Support Entity'}</h3>
                    <span className="presence-tag">{h.globalPresence?.jpTag || '株式会社 Atsuko International'}</span>
                  </div>
                </div>
                <div className="presence-body">
                  <div className="presence-detail-row">
                    <Building2 size={18} className="presence-icon" />
                    <div>
                      <strong>{h.globalPresence?.jpEntityLbl || 'Official Support Entity:'}</strong>
                      <p>{h.globalPresence?.jpEntityVal || '株式会社 Atsuko International'}</p>
                    </div>
                  </div>
                  <div className="presence-detail-row">
                    <MapPin size={18} className="presence-icon" />
                    <div>
                      <strong>{h.globalPresence?.jpLocLbl || 'Locations in Japan:'}</strong>
                      <p>{h.globalPresence?.jpLocVal || officialContacts.japanAddress}</p>
                    </div>
                  </div>
                  <div className="presence-detail-row">
                    <Phone size={18} className="presence-icon" />
                    <div>
                      <strong>{h.globalPresence?.jpContactLbl || 'Direct Contact in Japan:'}</strong>
                      <p>{officialContacts.japanPhone}</p>
                    </div>
                  </div>
                  <div className="presence-detail-row">
                    <ShieldCheck size={18} className="presence-icon" />
                    <div>
                      <strong>{h.globalPresence?.jpRegLbl || 'Corporate Reg & Licenses:'}</strong>
                      <p>{h.globalPresence?.jpRegVal || '登録支援機関 No. 23登-008312 • 有料職業紹介 No. 04-ユ-300338'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 10. Frequently Asked Questions & SLBFE Guidance */}
      <RevealOnScroll delay={0.1}>
        <FaqSection lang={lang} />
      </RevealOnScroll>

      {/* 11. Pre-Footer Final Call to Action Banner */}
      <RevealOnScroll delay={0.1}>
        <section className="home-bottom-cta">
          <div className="container">
            <div className="home-cta-box">
              <span className="section-badge badge-gold">
                <ShieldCheck size={14} />
                {h.ctaBadge}
              </span>
              <h2 className="home-cta-title">
                {h.ctaTitle}
              </h2>
              <p className="home-cta-desc">
                {h.ctaDesc}
              </p>
              <div className="home-cta-buttons">
                <button 
                  onClick={() => onOpenModal('Fast Registration')}
                  className="btn btn-primary btn-pulse"
                >
                  <Sparkles size={16} />
                  <span>{h.ctaRegister}</span>
                </button>
                <a 
                  href="https://wa.me/94777933352" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp"
                >
                  <span>{h.ctaWhatsApp}</span>
                </a>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="btn btn-secondary-white"
                >
                  <span>{h.ctaVisitHeadOffice}</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
