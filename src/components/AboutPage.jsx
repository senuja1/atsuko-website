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
  HeartHandshake,
  MessageSquare,
  Sparkles,
  Phone,
  Mail
} from 'lucide-react';
import { aboutUsData, officialContacts, globalPresenceData } from '../data/websiteData';
import { getUiText } from '../data/uiText';

export default function AboutPage({ lang, onOpenModal, onNavigate }) {
  const tFull = getUiText(lang);
  const ui = tFull.pages.about;
  const h = tFull.home;

  const quickIcons = [
    <Building2 size={20} style={{ color: '#0284c7' }} />,
    <FileText size={20} style={{ color: '#f59e0b' }} />,
    <Globe2 size={20} style={{ color: '#dc2626' }} />,
    <Award size={20} style={{ color: '#10b981' }} />
  ];

  const slFacilities = lang === 'si' ? [
    'ප්‍රායෝගික රෝහල් සාත්තු සේවා සමාකරණ ඒකකය (Kaigo Lab)',
    'පරිගණක CBT විභාග සහ Prometric පෙරහුරු මධ්‍යස්ථානය',
    'සුවපහසු සහ ආරක්ෂිත ශිෂ්‍ය නේවාසිකාගාර පහසුකම්',
    'ශ්‍රව්‍යාගාරය සහ ජපන් සංස්කෘතික පන්ති කාමර',
    'පිරිසිදු භෝජනාගාරය සහ පෝෂ්‍යදායී ආහාර සැපයුම'
  ] : lang === 'jp' ? [
    'カダワタ本校の実践的介護シミュレーション実習室',
    'Prometric対応 CBTコンピュータ試験室',
    '安全で快適な男女別学生寮施設',
    '日本語聴解ラボ・文化体験クラスルーム',
    '清潔なカフェテリア・栄養バランスの良い食事提供'
  ] : globalPresenceData.sriLanka.facilities;

  const jpServices = lang === 'si' ? [
    'ජපානයේ ගුවන් තොටුපළට පැමිණි විට සෘජුවම පිළිගැනීම සහ ප්‍රවාහනය',
    'නගර සභා ලිපින ලියාපදිංචිය (Zairyu Card) සහ MyNumber සකස් කිරීම',
    'ජපන් බැංකු ගිණුම් විවෘත කිරීම සහ ජංගම දුරකථන SIM සැකසීම',
    'ජාතික සෞඛ්‍ය රක්ෂණ (NHI) ලියාපදිංචිය',
    '24/7 හදිසි සහන සේවා සහ නීතිමය උපකාරක ජාලය'
  ] : lang === 'jp' ? [
    '羽田・成田・中部・関西空港での出迎え・移動案内',
    '市役所での住民登録・在留カード手続き・マイナンバー申請',
    'ゆうちょ銀行等の口座開設・格安SIMカード契約支援',
    '国民健康保険（NHI）加入手続き支援',
    '登録支援機関としての24時間生活相談・緊急時対応'
  ] : globalPresenceData.japan.services;

  return (
    <div className="page-container about-page">
      {/* 1. Page Hero Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              <ShieldCheck size={14} />
              {ui.badge}
            </span>
            <h1 className="page-hero-title">
              {ui.titlePre} <span className="text-gradient-red">{ui.titleHighlight}</span>
            </h1>
            <p className="page-hero-subtitle">
              {ui.subtitle}
            </p>

            <div className="about-quick-badges">
              {ui.badges.map((b, idx) => (
                <div key={idx} className="about-badge-item">
                  <span className="badge-icon">{quickIcons[idx] || <Award size={20} />}</span>
                  <div>
                    <strong>{b.val}</strong>
                    <span className="helper-text">{b.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Company Profile & Vision / Mission */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="about-overview-grid">
            <div className="about-text-col">
              <span className="section-badge badge-red">
                <Award size={14} />
                {ui.profileBadge}
              </span>
              <h2 className="section-title-md">
                {ui.profileTitle} <span className="text-gradient-red">{ui.profileHighlight}</span>
              </h2>
              <p className="about-body-p">
                {ui.profileP1}
              </p>
              <p className="about-body-p">
                {ui.profileP2}
              </p>

              {/* Vision & Mission Cards */}
              <div className="mission-vision-grid">
                <div className="mv-card mv-vision">
                  <div className="mv-icon-box">
                    <Globe2 size={22} />
                  </div>
                  <div>
                    <h3 className="mv-title">{ui.visionTitle}</h3>
                    <p className="mv-desc">{ui.visionDesc}</p>
                    <p className="mv-desc-jp" style={{ fontSize: '0.825rem', color: '#64748b', marginTop: '0.4rem', fontFamily: 'var(--font-jp)' }}>
                      {aboutUsData.visionJp}
                    </p>
                  </div>
                </div>

                <div className="mv-card mv-mission">
                  <div className="mv-icon-box">
                    <HeartHandshake size={22} />
                  </div>
                  <div>
                    <h3 className="mv-title">{ui.missionTitle}</h3>
                    <p className="mv-desc">{ui.missionDesc}</p>
                    <p className="mv-desc-jp" style={{ fontSize: '0.825rem', color: '#64748b', marginTop: '0.4rem', fontFamily: 'var(--font-jp)' }}>
                      {aboutUsData.missionJp}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Credentials Sidebar */}
            <div className="about-credentials-sidebar">
              <div className="credentials-card">
                <div className="credentials-header">
                  <ShieldCheck size={26} className="text-gold" />
                  <div>
                    <h3 className="credentials-title">{ui.credBadge}</h3>
                    <p className="credentials-sub">{ui.credSub}</p>
                  </div>
                </div>

                <div className="credentials-list">
                  {ui.credItems.map((item, idx) => (
                    <div key={idx} className="cred-item">
                      <div className="cred-check"><CheckCircle2 size={16} /></div>
                      <div>
                        <h4 className="cred-name">{item.name}</h4>
                        <span className="cred-issuer">{item.issuer}</span>
                        <p className="cred-detail">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="credentials-footer-cta">
                  <button
                    onClick={() => onOpenModal('License & Registration Verification')}
                    className="btn btn-primary btn-block"
                  >
                    <span>{ui.credBtn}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Managing Director's Message */}
      <section className="section section-alt">
        <div className="container">
          <div className="md-message-box" style={{ background: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span className="section-badge badge-gold">
                <MessageSquare size={14} />
                {ui.mdBadge}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                {aboutUsData.mdMessage.titleJp}
              </span>
            </div>

            <h2 className="section-title-md" style={{ marginBottom: '1rem' }}>
              {ui.mdTitle}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
              <div style={{ borderLeft: '4px solid #ef4444', paddingLeft: '1.25rem' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--navy-900)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  "{lang === 'si'
                    ? 'ශ්‍රී ලංකාවේ තරුණ පරපුරට ජපානයේ උසස් අධ්‍යාපනය සහ ගෞරවනීය රැකියා අවස්ථා කරා යාමට 100%ක් නීත්‍යානුකූල හා විනිවිදභාවයෙන් යුතු මාවතක් සැලසීම අත්සුකෝ අපගේ පරම අධිෂ්ඨානයයි. ශ්‍රී ලංකාවේ හා ජපානයේ අපගේම සෘජු ආයතන හරහා කිසිදු අතරමැදියෙකුගෙන් තොරව සිසුන්ගේ ආරක්ෂාව හා අනාගතය අපි තහවුරු කරන්නෙමු.'
                    : lang === 'jp'
                      ? aboutUsData.mdMessage.bodyJp
                      : aboutUsData.mdMessage.body}"
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <strong style={{ display: 'block', color: 'var(--navy-900)', fontSize: '1.1rem' }}>
                    {ui.mdAuthor}
                  </strong>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                    {ui.mdRole}
                  </span>
                </div>
              </div>

              <div style={{ borderLeft: '4px solid #f59e0b', paddingLeft: '1.25rem', fontFamily: 'var(--font-jp)' }}>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                  "{aboutUsData.mdMessage.bodyJp}"
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <strong style={{ display: 'block', color: 'var(--navy-900)', fontSize: '1rem' }}>
                    代表取締役 ヘラス・ムディヤンセラゲ・ドゥラージ・バンダラ
                  </strong>
                  <span style={{ color: '#64748b', fontSize: '0.85rem' }}>
                    Atsuko International (Pvt) Ltd
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Executive Team */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <Users size={14} />
              {ui.teamBadge}
            </span>
            <h2 className="section-title">
              {ui.teamTitle} <span className="text-gradient-red">{ui.teamHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {ui.teamSubtitle}
            </p>
          </div>

          <div className="leadership-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {aboutUsData.teamMembers.map((member, idx) => (
              <div key={idx} className="leader-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-lg)', padding: '1.5rem', transition: 'all 0.2s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 800, fontSize: '1.2rem' }}>
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <span style={{ display: 'inline-block', background: '#e0f2fe', color: '#0369a1', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-full)' }}>
                      {member.role}
                    </span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy-900)', margin: '0.25rem 0 0' }}>
                      {member.name}
                    </h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                  {member.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dual-Nation Operations Architecture */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <Globe2 size={14} />
              {h.globalPresence.badge}
            </span>
            <h2 className="section-title">
              {h.globalPresence.title} <span className="text-gradient-red">{h.globalPresence.highlight}</span>
            </h2>
            <p className="section-subtitle">
              {h.globalPresence.subtitle}
            </p>
          </div>

          <div className="presence-grid">
            {/* Sri Lanka Headquarters */}
            <div className="presence-card presence-sl">
              <div className="presence-card-header">
                <div className="presence-flag-icon-badge" style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="presence-title">{h.globalPresence.slTitle}</h3>
                  <span className="presence-tag">{h.globalPresence.slTag}</span>
                </div>
              </div>

              <div className="presence-body">
                <div className="presence-detail-row">
                  <MapPin size={18} className="presence-icon" />
                  <div>
                    <strong>{h.globalPresence.slAddressLbl}</strong>
                    <p>{globalPresenceData.sriLanka.address}</p>
                  </div>
                </div>

                <div className="presence-detail-row">
                  <Phone size={18} className="presence-icon" />
                  <div>
                    <strong>{h.globalPresence.slHotlineLbl}</strong>
                    <p>{globalPresenceData.sriLanka.hotline} / {globalPresenceData.sriLanka.mobiles.join(' / ')}</p>
                  </div>
                </div>

                <div className="presence-detail-row">
                  <Mail size={18} className="presence-icon" />
                  <div>
                    <strong>{h.globalPresence.slEmailLbl}</strong>
                    <p>{globalPresenceData.sriLanka.email} • {globalPresenceData.sriLanka.website}</p>
                  </div>
                </div>

                <div className="presence-facilities-box">
                  <strong>{lang === 'si' ? 'කැම්පස් යටිතල පහසුකම්:' : lang === 'jp' ? 'キャンパス施設:' : 'Campus Infrastructure:'}</strong>
                  <ul className="presence-points-list" style={{ marginTop: '0.5rem' }}>
                    {slFacilities.map((fac, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                        <span>{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Japan Operations */}
            <div className="presence-card presence-jp">
              <div className="presence-card-header">
                <div className="presence-flag-icon-badge" style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(220, 38, 38, 0.1)', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Globe2 size={24} />
                </div>
                <div>
                  <h3 className="presence-title">{h.globalPresence.jpTitle}</h3>
                  <span className="presence-tag">{h.globalPresence.jpTag}</span>
                </div>
              </div>

              <div className="presence-body">
                <div className="presence-detail-row">
                  <MapPin size={18} className="presence-icon" />
                  <div>
                    <strong>{h.globalPresence.jpLocLbl}</strong>
                    <p>{h.globalPresence.jpLocVal}</p>
                  </div>
                </div>

                <div className="presence-detail-row">
                  <Phone size={18} className="presence-icon" />
                  <div>
                    <strong>{h.globalPresence.jpContactLbl}</strong>
                    <p>{globalPresenceData.japan.phone}</p>
                  </div>
                </div>

                <div className="presence-detail-row">
                  <ShieldCheck size={18} className="presence-icon" />
                  <div>
                    <strong>{h.globalPresence.jpRegLbl}</strong>
                    <p>{h.globalPresence.jpRegVal}</p>
                  </div>
                </div>

                <div className="presence-facilities-box" style={{ background: '#eff6ff', borderColor: '#bfdbfe' }}>
                  <strong style={{ color: '#1e3a8a' }}>{lang === 'si' ? 'ජපානයේ සෘජු සේවාවන්:' : lang === 'jp' ? '日本現地サポート:' : 'On-the-Ground Japan Services:'}</strong>
                  <ul className="presence-points-list" style={{ marginTop: '0.5rem' }}>
                    {jpServices.map((srv, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} style={{ color: '#2563eb', flexShrink: 0, marginTop: '2px' }} />
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Key Assurances & Guarantees */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <Sparkles size={14} />
              {ui.guaranteesBadge}
            </span>
            <h2 className="section-title">
              {ui.guaranteesTitle} <span className="text-gradient-red">{ui.guaranteesHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {ui.guaranteesSubtitle}
            </p>
          </div>

          <div className="presence-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {ui.guaranteesList.map((item, idx) => (
              <div key={idx} className="credentials-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '1.75rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#dc2626', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <ShieldCheck size={14} />
                  GUARANTEE 0{idx + 1}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', margin: '0.35rem 0 0.65rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action Banner */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <div>
              <h3 className="about-cta-title">{h.ctaTitle}</h3>
              <p className="about-cta-desc">
                {h.ctaDesc}
              </p>
            </div>
            <div className="about-cta-btn-group">
              <button
                onClick={() => onOpenModal('Official Consultation')}
                className="btn btn-gold"
              >
                {h.ctaRegister}
              </button>
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="btn btn-secondary-white"
              >
                {h.ctaVisitHeadOffice}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
