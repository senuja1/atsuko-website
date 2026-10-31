import { useEffect, useRef } from 'react';
import { CheckCircle2, Award, ShieldCheck, GraduationCap, Briefcase, FileCheck, Globe2, MapPin } from 'lucide-react';
import { siteTranslations } from '../data/translations';
import { officialContacts } from '../data/websiteData';
import { getUiText } from '../data/uiText';

export default function Hero({ lang, onOpenModal, onScrollToEligibility }) {
  const t = siteTranslations[lang]?.hero || siteTranslations.en.hero;
  const b = getUiText(lang).heroBadges;
  const videoRef = useRef(null);

  // Mobile smoothness: Play video only when in viewport, pause when offscreen
  // to eliminate mobile background decoding stalls, GPU hitching, and network buffering
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Gracefully handle browser autoplay policies or low power mode
            });
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Content */}
        <div className="hero-content">


          <h1 className="hero-title">
            <span className="hero-title-lead">{t.titlePre}</span>{' '}
            <span className="red">{t.titleHighlight}</span>
            <span className="jp" aria-label="Atsuko Gakko">{t.titleJp}</span>
          </h1>

          <p className="hero-desc">
            {t.desc}
          </p>

          {/* Four Core Services Highlights */}
          <div className="hero-highlights" role="list">
            <div className="hero-pill" role="listitem">
              <span className="hero-pill-icon" aria-hidden="true"><FileCheck size={18} /></span>
              <div className="hero-pill-body">
                <span className="hero-pill-title">{t.pill1Title || "Comprehensive Visa Processing"}</span>
                <span className="hero-pill-desc">{t.pill1Desc}</span>
              </div>
            </div>
            <div className="hero-pill" role="listitem">
              <span className="hero-pill-icon" aria-hidden="true"><GraduationCap size={18} /></span>
              <div className="hero-pill-body">
                <span className="hero-pill-title">{t.pill2Title || "Japanese Language Education"}</span>
                <span className="hero-pill-desc">{t.pill2Desc}</span>
              </div>
            </div>
            <div className="hero-pill" role="listitem">
              <span className="hero-pill-icon" aria-hidden="true"><Briefcase size={18} /></span>
              <div className="hero-pill-body">
                <span className="hero-pill-title">{t.pill3Title || "Targeted Vocational Training"}</span>
                <span className="hero-pill-desc">{t.pill3Desc}</span>
              </div>
            </div>
            <div className="hero-pill" role="listitem">
              <span className="hero-pill-icon" aria-hidden="true"><Globe2 size={18} /></span>
              <div className="hero-pill-body">
                <span className="hero-pill-title">{t.pill4Title || "Complete Migration Preparation"}</span>
                <span className="hero-pill-desc">{t.pill4Desc}</span>
              </div>
            </div>
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
              ref={videoRef}
              poster="/images/atsuko-drone-wide.jpg"
              autoPlay 
              loop 
              muted 
              playsInline
              webkit-playsinline="true"
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
              <MapPin size={22} />
            </div>
            <div>
              <div className="badge-val">{b.slAddressVal || b.japanVal}</div>
              <div className="badge-lbl">{b.slAddressLbl || b.japanLbl}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
