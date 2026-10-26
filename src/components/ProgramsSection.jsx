import { useState } from 'react';
import { BookOpen, GraduationCap, Briefcase, Award, Clock, MapPin, Send, Check } from 'lucide-react';
import { coursesData } from '../data/websiteData';
import { siteTranslations } from '../data/translations';

export default function ProgramsSection({ lang, onOpenModal }) {
  const [activeTab, setActiveTab] = useState('language');

  const t = siteTranslations[lang]?.programs || siteTranslations.en.programs;

  const tabs = [
    { id: 'language', label: t.tabs.language, icon: BookOpen },
    { id: 'studentVisa', label: t.tabs.studentVisa, icon: GraduationCap },
    { id: 'sswWorkVisa', label: t.tabs.sswWorkVisa, icon: Briefcase },
    { id: 'titp', label: t.tabs.titp, icon: Award },
  ];

  const currentPrograms = coursesData[activeTab] || [];

  return (
    <section id="programs" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge badge-red">
            <BookOpen size={14} />
            {t.badge}
          </span>
          <h2 className="section-title">
            {t.title} <span className="text-gradient-red">{t.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="tab-nav">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Programs Grid */}
        <div className="programs-grid">
          {currentPrograms.map((program) => (
            <div key={program.id} className="program-card">
              <span className="program-badge">
                {program.badge}
              </span>

              <h3 className="program-title">{program.title}</h3>
              <div className="program-jp">{program.jpTitle}</div>
              <p className="program-desc">{program.description}</p>

              <ul className="program-features">
                {program.features.map((feat, idx) => (
                  <li key={idx} className="program-feature-item">
                    <span className="feature-check"><Check size={13} strokeWidth={3} /></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div style={{ background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', fontSize: '0.8rem', color: '#475569' }}>
                <strong style={{ color: '#0f172a' }}>{t.idealCandidate}</strong> {program.suitableFor}
              </div>

              <div className="program-meta">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={14} />
                  <span>{program.duration}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} />
                  <span>{program.mode}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenModal(program.title)}
                className="btn btn-primary"
                style={{ marginTop: '1.25rem', width: '100%' }}
              >
                <Send size={15} />
                {t.btnEnroll}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
