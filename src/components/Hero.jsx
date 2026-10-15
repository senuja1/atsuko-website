import { Sparkles, ArrowRight, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { siteTranslations } from '../data/translations';

export default function Hero({ lang, onOpenModal, onScrollToEligibility }) {
  const t = siteTranslations[lang]?.hero || siteTranslations.en.hero;

  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* Left Column: Content */}
        <div className="hero-content">
          <div className="hero-tag">
            <span className="dot"></span>
            <span>{t.tagline}</span>
            <span style={{ color: '#fbbf24', marginLeft: '4px' }}>{t.licenseTag}</span>
          </div>

          <h1 className="hero-title">
            {t.titlePre}{' '}
            <span className="red">{t.titleHighlight}</span>
            <span className="jp">{t.titleJp}</span>
          </h1>

          <p className="hero-desc">
            {t.desc}
          </p>

          {/* Quick Benefit Badges */}
          <div className="hero-highlights">
            <div className="hero-pill">
              <span className="hero-pill-icon">🌸</span>
              <span>{t.pill1}</span>
            </div>
            <div className="hero-pill">
              <span className="hero-pill-icon">🏥</span>
              <span>{t.pill2}</span>
            </div>
            <div className="hero-pill">
              <span className="hero-pill-icon">💴</span>
              <span>{t.pill3}</span>
            </div>
            <div className="hero-pill">
              <span className="hero-pill-icon">📜</span>
              <span>{t.pill4}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-cta-group">
            <button 
              onClick={onScrollToEligibility}
              className="btn btn-primary btn-pulse" 
              style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}
            >
              <Sparkles size={18} />
              {t.checkEligibilityBtn}
              <ArrowRight size={16} />
            </button>

            <button 
              onClick={onOpenModal} 
              className="btn btn-gold"
              style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}
            >
              {t.talkAdvisorBtn}
            </button>

            <a 
              href="https://wa.me/94778643352?text=Hello%20Atsuko%20International,%20I%20would%20like%20to%20inquire%20about%20upcoming%20classes%20and%20Japan%20visa%20intakes."
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '0.85rem 1.4rem', fontSize: '0.95rem' }}
            >
              {t.whatsappBtn}
            </a>
          </div>

          {/* Micro trust quote */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem', color: '#94a3b8', fontSize: '0.825rem' }}>
            <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0 }} />
            <span>{t.trustQuote}</span>
          </div>
        </div>

        {/* Right Column: Hero Visual Graphic */}
        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            <img 
              src="/images/hero-japan.jpg" 
              alt="Sri Lankan Students Aspiring to Study in Japan - Atsuko International" 
            />
          </div>

          {/* Floating Top Right Badge */}
          <div className="floating-badge badge-top-right">
            <div className="badge-icon-box badge-icon-red">
              <Award size={24} />
            </div>
            <div>
              <div className="badge-val">SLBFE #3293 • PV 0217143</div>
              <div className="badge-lbl">Government Verified License</div>
            </div>
          </div>

          {/* Floating Bottom Left Badge */}
          <div className="floating-badge badge-bottom-left">
            <div className="badge-icon-box badge-icon-gold">
              <ShieldCheck size={24} />
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
