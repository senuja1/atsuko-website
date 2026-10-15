import { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, CheckCircle2, Building2 } from 'lucide-react';
import { branchesData } from '../data/websiteData';
import { siteTranslations } from '../data/translations';

export default function BranchNetwork({ lang, onOpenModal }) {
  const [selectedBranchId, setSelectedBranchId] = useState('kadawatha');

  const t = siteTranslations[lang]?.branches || siteTranslations.en.branches;
  const selectedBranch = branchesData.find(b => b.id === selectedBranchId) || branchesData[0];

  const getBranchTag = (branch) => {
    if (branch.isHeadOffice) return t.headOfficeTag;
    if (branch.isJapanEntity) return t.japanTag;
    return t.regionalTag;
  };

  return (
    <section id="branches" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge badge-red">
            <Building2 size={14} />
            {t.badge}
          </span>
          <h2 className="section-title">
            {t.title} <span className="text-gradient-red">{t.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </div>

        {/* Quick Branch Selector Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          justifyContent: 'center',
          marginBottom: '2.5rem'
        }}>
          {branchesData.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setSelectedBranchId(branch.id)}
              style={{
                padding: '0.6rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
                fontWeight: 700,
                border: '1.5px solid',
                borderColor: selectedBranchId === branch.id ? 'var(--crimson-500)' : 'var(--border-light)',
                background: selectedBranchId === branch.id ? 'var(--navy-800)' : '#ffffff',
                color: selectedBranchId === branch.id ? '#ffffff' : 'var(--navy-800)',
                cursor: 'pointer',
                transition: 'var(--transition)',
                boxShadow: selectedBranchId === branch.id ? 'var(--shadow-md)' : 'none'
              }}
            >
              {lang === 'jp' ? (branch.jpName || branch.name) : branch.name}
              {branch.isHeadOffice && <span style={{ marginLeft: '4px', color: '#fbbf24' }}>★</span>}
              {branch.isJapanEntity && <span style={{ marginLeft: '4px' }}>🇯🇵</span>}
            </button>
          ))}
        </div>

        {/* Active Branch Detailed Card */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-xl)',
          border: '2px solid',
          borderColor: selectedBranch.isHeadOffice ? '#0284c7' : selectedBranch.isJapanEntity ? '#0ea5e9' : 'var(--border-light)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-lg)',
          marginBottom: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span className={`branch-tag ${selectedBranch.isHeadOffice ? 'branch-tag-head' : 'branch-tag-sub'}`} style={{
                background: selectedBranch.isJapanEntity ? '#0c4a6e' : undefined,
                color: selectedBranch.isJapanEntity ? '#ffffff' : undefined
              }}>
                {getBranchTag(selectedBranch)}
              </span>
              <span style={{ fontFamily: 'var(--font-jp)', color: '#0284c7', fontWeight: 700, fontSize: '0.9rem' }}>
                {selectedBranch.jpName}
              </span>
            </div>

            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1rem' }}>
              {lang === 'jp' ? selectedBranch.jpName : selectedBranch.name}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.925rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={18} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                <span>{selectedBranch.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Clock size={18} style={{ color: '#d97706', flexShrink: 0 }} />
                <span>{selectedBranch.hours}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={18} style={{ color: '#2563eb', flexShrink: 0 }} />
                <span>{t.hotlineLabel} <strong style={{ color: '#0f172a' }}>{selectedBranch.phone}</strong></span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${selectedBranch.whatsapp.replace('+', '')}?text=Hello%20Atsuko%20International%20${encodeURIComponent(selectedBranch.name)},%20I%20would%20like%20to%20visit%20for%20a%20consultation.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} />
                {t.btnWhatsApp}
              </a>

              <a
                href={`tel:${selectedBranch.phone.replace(/\s+/g, '')}`}
                className="btn btn-secondary"
              >
                <Phone size={16} />
                {t.btnCall}
              </a>

              <button
                onClick={() => onOpenModal(`Appointment at ${selectedBranch.name}`)}
                className="btn btn-primary"
              >
                {t.btnBook}
              </button>
            </div>
          </div>

          {/* Branch Features / Highlights */}
          <div style={{
            background: 'var(--surface-alt)',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)'
          }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '1.25rem' }}>
              {t.facilitiesTitle} {selectedBranch.name}:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {selectedBranch.facilities.map((fac, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--navy-800)' }}>{fac}</span>
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--navy-800)' }}>{t.licenseText}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--navy-800)' }}>{t.counselingText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
