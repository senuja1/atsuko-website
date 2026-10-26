import { ShieldCheck, MapPin, Phone, Mail, Clock, Globe2, ExternalLink } from 'lucide-react';
import { siteTranslations } from '../data/translations';
import { officialContacts } from '../data/websiteData';

export default function Footer({ lang, onOpenModal, onNavigate }) {
  const t = siteTranslations[lang]?.footer || siteTranslations.en.footer;

  const handleLinkClick = (e, pageId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', cursor: 'pointer' }} onClick={(e) => handleLinkClick(e, 'home')}>
              <img
                src="/images/atsuko-official-logo.png"
                alt="Atsuko International"
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div className="footer-brand-title" style={{ margin: 0, lineHeight: 1.1 }}>
                  ATSUKO <span style={{ color: '#0ea5e9' }}>INTERNATIONAL</span>
                </div>
                <div style={{ fontFamily: 'var(--font-jp)', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 700 }}>
                  篤子 学校 (ATSUKO GAKKO)
                </div>
              </div>
            </div>

            <p className="footer-desc">
              Premier, government-registered Japanese language academy and licensed foreign employment agency.
              Bridging Sri Lankan talent with Japan under SLBFE License No. 3293 and Company Registration PV 0217143.
            </p>

            <div className="footer-badges-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}>
                <ShieldCheck size={14} />
                <span>SLBFE Lic. 3293</span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.3)' }}>
                <span>Reg. PV 0217143</span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', color: '#4ade80', border: '1px solid rgba(74,222,128,0.3)' }}>
                <Globe2 size={13} />
                <span>www.atsukojapan.com</span>
              </div>
            </div>

            {/* Social Media Channels Row - 44px min touch target */}
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              {/* Facebook */}
              <a
                href={officialContacts.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#1877f2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: 800,
                  transition: 'transform 0.15s ease'
                }}
                title="Atsuko International on Facebook (17K+ Followers)"
                aria-label="Atsuko Facebook Group"
              >
                f
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/94778643352"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#25d366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  transition: 'transform 0.15s ease'
                }}
                title="Chat with Atsuko International on WhatsApp"
                aria-label="Chat with Atsuko on WhatsApp"
              >
                💬
              </a>

              {/* YouTube */}
              <a
                href={officialContacts.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#ff0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  transition: 'transform 0.15s ease'
                }}
                title="Watch Student Testimonials on YouTube"
                aria-label="Atsuko YouTube Channel"
              >
                ▶
              </a>

              {/* TikTok */}
              <a
                href={officialContacts.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#010101',
                  border: '1px solid #334155',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  transition: 'transform 0.15s ease'
                }}
                title="TikTok: @atsuko_international"
                aria-label="Atsuko TikTok"
              >
                ♪
              </a>

              {/* Instagram */}
              <a
                href={officialContacts.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  transition: 'transform 0.15s ease'
                }}
                title="Instagram: @atsuko_gakkou"
                aria-label="Atsuko Instagram"
              >
                📷
              </a>
            </div>
          </div>

          {/* Platform Pages Navigation (6 Complete Pages) */}
          <div>
            <h4 className="footer-col-title">Main Portal Pages</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home Page</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About Us & Licenses</a></li>
              <li><a href="#courses" onClick={(e) => handleLinkClick(e, 'courses')}>Courses & Training</a></li>
              <li><a href="#visa" onClick={(e) => handleLinkClick(e, 'visa')}>Visa Services (Student & SSW)</a></li>
              <li><a href="#stories" onClick={(e) => handleLinkClick(e, 'stories')}>Success Stories & Life in Japan</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact Us & Branch Network</a></li>
            </ul>
          </div>

          {/* Visa & Career Pathways */}
          <div>
            <h4 className="footer-col-title">Visa & Study Pathways</h4>
            <ul className="footer-links">
              <li><a href="#visa" onClick={(e) => handleLinkClick(e, 'visa')}>Student Visa (Jan/Apr/Jul/Oct)</a></li>
              <li><a href="#visa" onClick={(e) => handleLinkClick(e, 'visa')}>SSW Caregiver (Kaigo)</a></li>
              <li><a href="#visa" onClick={(e) => handleLinkClick(e, 'visa')}>SSW Food Service Industry</a></li>
              <li><a href="#visa" onClick={(e) => handleLinkClick(e, 'visa')}>SSW Commercial Truck Driving</a></li>
              <li><a href="#visa" onClick={(e) => handleLinkClick(e, 'visa')}>SSW Agriculture & Construction</a></li>
              <li><a href="#visa" onClick={(e) => handleLinkClick(e, 'visa')}>TITP Technical Internship</a></li>
            </ul>
          </div>

          {/* Offices & Physical Locations */}
          <div>
            <h4 className="footer-col-title">Head Offices & Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: '#0284c7', flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Kadawatha Head Office:</strong> 191/3/1, Sirimavo Bandaranaike Mawatha, Mahara, Kadawatha</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Japan Office:</strong> Komaki Office, Aichi Prefecture, Japan (株式会社 篤子インターナショナル)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} style={{ color: '#38bdf8', flexShrink: 0 }} />
                <span>Hotline: 072 616 0160 / 070 363 4416</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} style={{ color: '#fbbf24', flexShrink: 0 }} />
                <span>info@atsukojapan.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={15} style={{ color: '#34d399', flexShrink: 0 }} />
                <span>Mon-Sat: 8:30 AM - 5:30 PM | Sun: 8:30 AM - 2:00 PM</span>
              </div>
            </div>

            <button
              onClick={() => onOpenModal('General Consultation')}
              className="btn btn-primary"
              style={{ marginTop: '1.25rem', width: '100%', fontSize: '0.85rem' }}
            >
              Book In-Person Consultation
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ATSUKO INTERNATIONAL (PVT) LTD (篤子 学校). Official Domain: www.atsukojapan.com</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span>SLBFE License No: 3293</span>
            <span>•</span>
            <span>Company Reg: PV 0217143</span>
            <span>•</span>
            <a
              href="https://www.facebook.com/groups/studentsofatsukointernational"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '3px' }}
            >
              <span>Student Community Group (17K+)</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
