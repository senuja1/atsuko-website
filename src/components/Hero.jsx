import { Sparkles, ArrowRight, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { siteTranslations } from '../data/translations';

export default function Hero({ lang, onOpenModal, onScrollToEligibility }) {
  const t = siteTranslations[lang]?.hero || siteTranslations.en.hero;

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
              <span className="hero-pill-icon" aria-hidden="true">💴</span>
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
              href="https://wa.me/94778643352?text=Hello%20Atsuko%20International,%20I%20would%20like%20to%20inquire%20about%20upcoming%20classes%20and%20Japan%20visa%20intakes."
              target="_blank"
              rel="noreferrer"
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
            <img 
              src="/images/hero-japan.jpg" 
              alt="Sri Lankan Students Aspiring to Study in Japan - Atsuko International" 
              width="600"
              height="450"
              loading="eager"
              decoding="async"
              className="hero-main-img"
            />
            <div className="hero-image-glow" aria-hidden="true"></div>
          </div>

          {/* Floating Top Right Badge */}
          <div className="floating-badge badge-top-right">
            <div className="badge-icon-box badge-icon-red">
              <Award size={22} />
            </div>
            <div>
              <div className="badge-val">SLBFE #3293 • PV 0217143</div>
              <div className="badge-lbl">Government Verified License</div>
            </div>
          </div>

          {/* Floating Bottom Left Badge */}
          <div className="floating-badge badge-bottom-left">
            <div className="badge-icon-box badge-icon-gold">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="badge-val">Komaki & Sendai, Japan</div>
              <div className="badge-lbl">登録支援機関 Support Entity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
