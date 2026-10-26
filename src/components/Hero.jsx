import { Sparkles, ArrowRight, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { siteTranslations } from '../data/translations';
import { officialContacts } from '../data/websiteData';
import { getUiText } from '../data/uiText';

export default function Hero({ lang, onOpenModal, onScrollToEligibility }) {
  const t = siteTranslations[lang]?.hero || siteTranslations.en.hero;
  const b = getUiText(lang).heroBadges;

  return (
    <section className="hero" id="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Content */}
        <div className="hero-content">
          <div className="hero-tag" role="status">
            <span className="dot" aria-hidden="true"></span>
            <span className="hero-tag-text">{t.tagline}</span>
            <span className="hero-tag-badge">{t.licenseTag}</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-lead">{t.titlePre}</span>{' '}
            <span className="red">{t.titleHighlight}</span>
            <span className="jp" aria-label="Atsuko Gakko">{t.titleJp}</span>
          </h1>

          <p className="hero-desc">
            {t.desc}
          </p>

          {/* Quick Benefit Badges */}
          <div className="hero-highlights" role="list">
            <div className="hero-pill" role="listitem">
              <span className="hero-pill-icon" aria-hidden="true">🌸</span>
              <span>{t.pill1}</span>
            </div>
            <div className="hero-pill" role="listitem">
              <span className="hero-pill-icon" aria-hidden="true">🏥</span>
              <span>{t.pill2}</span>
            </div>
            <div className="hero-pill" role="listitem">
              <span className="hero-pill-icon" aria-hidden="true">✨</span>
              <span>{t.pill3}</span>
            </div>
            <div className="hero-pill" role="listitem">
              <span className="hero-pill-icon" aria-hidden="true">📜</span>
              <span>{t.pill4}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-cta-group">
            <button 
              onClick={onScrollToEligibility}
              className="btn btn-primary btn-pulse hero-cta-btn" 
            >
              <Sparkles size={18} />
              <span>{t.checkEligibilityBtn}</span>
              <ArrowRight size={16} />
            </button>

            <button 
              onClick={onOpenModal} 
              className="btn btn-gold hero-cta-btn"
            >
              <span>{t.talkAdvisorBtn}</span>
            </button>

            <a 
              href="https://wa.me/94777933352?text=Hello%20Atsuko%20International,%20I%20would%20like%20to%20inquire%20about%20upcoming%20classes%20and%20Japan%20visa%20intakes."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp hero-cta-btn"
            >
              <span>{t.whatsappBtn}</span>
            </a>
          </div>

          {/* Micro trust quote */}
          <div className="hero-trust-quote">
            <CheckCircle2 size={16} className="hero-trust-icon" aria-hidden="true" />
            <span>{t.trustQuote}</span>
          </div>
        </div>

        {/* Right Column: Hero Visual Graphic */}
        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            <video 
              src="/videos/atsuko-drone-intro.mp4" 
              poster="/images/atsuko-drone-wide.jpg"
              autoPlay 
              loop 
              muted 
              playsInline
              preload="metadata"
              className="hero-main-video"
              title="Atsuko International Headquarters - Drone Video"
            >
              <source src="/videos/atsuko-drone-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-image-glow" aria-hidden="true"></div>
          </div>

          {/* Floating Top Right Badge */}
          <div className="floating-badge badge-top-right">
            <div className="badge-icon-box badge-icon-red">
              <Award size={22} />
            </div>
            <div>
              <div className="badge-val">{b.licenseVal}</div>
              <div className="badge-lbl">{b.licenseLbl}</div>
            </div>
          </div>

          {/* Floating Bottom Left Badge */}
          <div className="floating-badge badge-bottom-left">
            <div className="badge-icon-box badge-icon-gold">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="badge-val">{b.japanVal}</div>
              <div className="badge-lbl">{b.japanLbl}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
