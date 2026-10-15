import { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Globe2, 
  Users, 
  Building2, 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  GraduationCap, 
  FileText, 
  HeartHandshake 
} from 'lucide-react';
import { aboutUsData, officialContacts } from '../data/websiteData';

export default function AboutPage({ lang, onOpenModal, onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="page-container about-page">
      {/* Page Hero Header */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              <ShieldCheck size={14} />
              SLBFE License No. 3293 • PV 0217143
            </span>
            <h1 className="page-hero-title">
              About <span className="text-gradient-red">Atsuko International</span>
            </h1>
            <p className="page-hero-subtitle">
              Bridging Sri Lankan talent with legitimate education and career pathways across Japan.
              A premier, government-registered Japanese language academy and licensed foreign employment agency.
            </p>

            <div className="about-quick-badges">
              <div className="about-badge-item">
                <span className="badge-icon">🏛️</span>
                <div>
                  <strong>SLBFE Verified</strong>
                  <span>License No. 3293</span>
                </div>
              </div>
              <div className="about-badge-item">
                <span className="badge-icon">📄</span>
                <div>
                  <strong>Incorporated Reg.</strong>
                  <span>PV 0217143</span>
                </div>
              </div>
              <div className="about-badge-item">
                <span className="badge-icon">🇯🇵</span>
                <div>
                  <strong>Japan Support Entity</strong>
                  <span>Komaki, Aichi & Sendai</span>
                </div>
              </div>
              <div className="about-badge-item">
                <span className="badge-icon">🌐</span>
                <div>
                  <strong>Official Portal</strong>
                  <span>www.atsukojapan.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Profile & Mission / Vision Section */}
      <section className="section">
        <div className="container">
          <div className="about-overview-grid">
            <div className="about-text-col">
              <span className="section-badge badge-red">
                <Award size={14} />
                Official Company Profile
              </span>
              <h2 className="section-title-md">
                Government-Registered & Specialized in <span className="text-gradient-red">Japanese Education & Placement</span>
              </h2>
              <p className="about-body-p">
                {aboutUsData.overview}
              </p>
              <p className="about-body-p">
                We operate with a commitment to legal transparency, strict anti-exploitation ethics, and direct 
                institutional coordination. Unlike intermediary agencies, Atsuko International oversees every stage: 
                from zero-level Hiragana and Katakana classes in Sri Lanka, to Certificate of Eligibility (COE) filing, 
                SLBFE government endorsement, and personal airport greeting at Nagoya, Tokyo, or Kansai international airports.
              </p>

              {/* Mission & Vision Cards */}
              <div className="mission-vision-grid">
                <div className="mv-card mv-mission">
                  <div className="mv-icon-box">
                    <HeartHandshake size={22} />
                  </div>
                  <div>
                    <h3 className="mv-title">Our Mission</h3>
                    <p className="mv-desc">{aboutUsData.mission}</p>
                  </div>
                </div>

                <div className="mv-card mv-vision">
                  <div className="mv-icon-box">
                    <Globe2 size={22} />
                  </div>
                  <div>
                    <h3 className="mv-title">Our Vision</h3>
                    <p className="mv-desc">{aboutUsData.vision}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-credentials-sidebar">
              <div className="credentials-card">
                <div className="credentials-header">
                  <ShieldCheck size={26} className="text-gold" />
                  <div>
                    <h3 className="credentials-title">Verified Authorizations</h3>
                    <p className="credentials-sub">Legal compliance & audit records</p>
                  </div>
                </div>

                <div className="credentials-list">
                  {aboutUsData.credentials.map((cred, idx) => (
                    <div key={idx} className="cred-item">
                      <div className="cred-check">✓</div>
                      <div>
                        <h4 className="cred-name">{cred.title}</h4>
                        <span className="cred-issuer">{cred.issuedBy}</span>
                        <p className="cred-detail">{cred.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="credentials-footer-cta">
                  <button 
                    onClick={() => onOpenModal('License Verification Consultation')}
                    className="btn btn-primary btn-block"
                  >
                    <span>Request Verified License Copy</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence: Sri Lanka & Japan Dual Presence */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <Globe2 size={14} />
              Dual-Nation Architecture
            </span>
            <h2 className="section-title">
              Our Physical Presence in <span className="text-gradient-red">Sri Lanka & Japan</span>
            </h2>
            <p className="section-subtitle">
              A comprehensive support continuum with physical operations in Kadawatha (Sri Lanka) and Komaki, Aichi & Sendai (Japan).
            </p>
          </div>

          <div className="presence-grid">
            {/* Sri Lanka Operations */}
            <div className="presence-card presence-sl">
              <div className="presence-card-header">
                <span className="presence-flag">🇱🇰</span>
                <div>
                  <h3 className="presence-title">Sri Lanka Operations Hub</h3>
                  <span className="presence-tag">Admissions, Academics & SLBFE Processing</span>
                </div>
              </div>

              <div className="presence-body">
                <div className="presence-detail-row">
                  <MapPin size={18} className="presence-icon" />
                  <div>
                    <strong>Kadawatha Head Operations Center:</strong>
                    <p>{aboutUsData.globalPresence.sriLanka.headOffice}</p>
                  </div>
                </div>

                <div className="presence-detail-row">
                  <Building2 size={18} className="presence-icon" />
                  <div>
                    <strong>Kelaniya Corporate Office:</strong>
                    <p>{aboutUsData.globalPresence.sriLanka.registeredOffice}</p>
                  </div>
                </div>

                <div className="presence-detail-row">
                  <Globe2 size={18} className="presence-icon" />
                  <div>
                    <strong>Regional Intake Branches:</strong>
                    <p>{aboutUsData.globalPresence.sriLanka.regionalCenters}</p>
                  </div>
                </div>

                <div className="presence-facilities-box">
                  <strong>Infrastructure Assets:</strong>
                  <p>{aboutUsData.globalPresence.sriLanka.keyAssets}</p>
                </div>
              </div>
            </div>

            {/* Japan Operations */}
            <div className="presence-card presence-jp">
              <div className="presence-card-header">
                <span className="presence-flag">🇯🇵</span>
                <div>
                  <h3 className="presence-title">Japan Resident Support Entity</h3>
                  <span className="presence-tag">株式会社 篤子インターナショナル (登録支援機関)</span>
                </div>
              </div>

              <div className="presence-body">
                <div className="presence-detail-row">
                  <MapPin size={18} className="presence-icon" />
                  <div>
                    <strong>Komaki Office (Aichi Prefecture, Japan):</strong>
                    <p>{aboutUsData.globalPresence.japan.primaryOffice}</p>
                  </div>
                </div>

                <div className="presence-detail-row">
                  <Building2 size={18} className="presence-icon" />
                  <div>
                    <strong>Sendai Office (Miyagi Prefecture, Japan):</strong>
                    <p>{aboutUsData.globalPresence.japan.secondaryOffice}</p>
                  </div>
                </div>

                <div className="presence-facilities-box" style={{ background: '#eff6ff', borderColor: '#bfdbfe' }}>
                  <strong style={{ color: '#1e3a8a' }}>On-the-Ground Japan Services:</strong>
                  <ul className="presence-points-list">
                    {aboutUsData.globalPresence.japan.functions.map((fn, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} style={{ color: '#2563eb', flexShrink: 0, marginTop: '3px' }} />
                        <span>{fn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Sensei Team Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <Users size={14} />
              Professional Governance
            </span>
            <h2 className="section-title">
              Our Leadership & <span className="text-gradient-red">Academic Faculty</span>
            </h2>
            <p className="section-subtitle">
              Led by seasoned professionals with decades of experience in Japanese immigration law, native language pedagogy, and international healthcare recruitment.
            </p>
          </div>

          <div className="leadership-grid">
            {aboutUsData.leadership.map((member, idx) => (
              <div key={idx} className="leader-card">
                <div className="leader-avatar-placeholder">
                  <span className="leader-initial">{member.role.charAt(0)}</span>
                  <span className="leader-icon">🎓</span>
                </div>
                <div className="leader-meta">
                  <span className="leader-role-tag">{member.title}</span>
                  <h3 className="leader-name">{member.role}</h3>
                  <span className="leader-exp">{member.experience}</span>
                  <p className="leader-desc">{member.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <div>
              <h3 className="about-cta-title">Ready to Begin Your Japan Pathway with Atsuko?</h3>
              <p className="about-cta-desc">
                Visit our Kadawatha Operations Center or book a confidential one-on-one session with our senior visa officers.
              </p>
            </div>
            <div className="about-cta-btn-group">
              <button 
                onClick={() => onOpenModal('About Page Consultation')} 
                className="btn btn-gold"
              >
                Book Official Consultation
              </button>
              <button 
                onClick={() => onNavigate && onNavigate('contact')}
                className="btn btn-secondary-white"
              >
                View Branch Locations
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
