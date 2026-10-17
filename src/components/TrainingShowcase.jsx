import { CheckCircle2, GraduationCap, HeartPulse, Sparkles } from 'lucide-react';
import { siteTranslations } from '../data/translations';

export default function TrainingShowcase({ lang, onOpenModal }) {
  const t = siteTranslations[lang]?.training || siteTranslations.en.training;

  return (
    <section id="training" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge badge-red">
            <Sparkles size={14} />
            {t.badge}
          </span>
          <h2 className="section-title">
            {t.title} <span className="text-gradient-red">{t.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </div>

        {/* Feature 1: Sensei & Classroom */}
        <div className="feature-split">
          <div className="feature-img-box">
            <img 
              src="/images/classroom-sensei.jpg" 
              alt="Japanese Sensei Teaching Sri Lankan Students at Atsuko International" 
              width="600"
              height="400"
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="feature-tag-box">
              <h5>篤子 日本語 専門クラス</h5>
              <p>Authentic Japanese Immersion Classroom at Atsuko Kadawatha</p>
            </div>
          </div>

          <div>
            <span style={{ color: '#0284c7', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              {t.feature1Tag}
            </span>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.15rem)', fontWeight: 800, color: 'var(--navy-900)', margin: '0.5rem 0 1rem', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              {t.feature1Title}
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.65, fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)' }}>
              {t.feature1Desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
              {t.feature1Points.map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--navy-700)', fontWeight: 500, lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => onOpenModal('Language Course Enrollment')} 
              className="btn btn-primary"
            >
              <GraduationCap size={16} />
              <span>{t.btnJoinLanguage}</span>
            </button>
          </div>
        </div>

        {/* Feature 2: Caregiver Simulation Lab */}
        <div className="feature-split reverse">
          <div className="feature-img-box">
            <img 
              src="/images/caregiver-ssw.jpg" 
              alt="Practical Caregiving Simulation Training at Atsuko International" 
              width="600"
              height="400"
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="feature-tag-box">
              <h5>特定技能 介護 実習施設</h5>
              <p>Fully Equipped Japanese Hospital & Elderly Care Simulation Facility</p>
            </div>
          </div>

          <div>
            <span style={{ color: '#d97706', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              {t.feature2Tag}
            </span>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.15rem)', fontWeight: 800, color: 'var(--navy-900)', margin: '0.5rem 0 1rem', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              {t.feature2Title}
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.65, fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)' }}>
              {t.feature2Desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
              {t.feature2Points.map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--navy-700)', fontWeight: 500, lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => onOpenModal('SSW Caregiver Training')} 
              className="btn btn-gold"
            >
              <HeartPulse size={16} />
              <span>{t.btnJoinCaregiver}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
