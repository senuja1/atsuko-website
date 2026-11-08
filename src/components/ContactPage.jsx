import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Building2,
  ExternalLink,
  QrCode,
  Sparkles,
  Compass,
  Navigation
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { officialContacts } from '../data/websiteData';
import { getUiText } from '../data/uiText';
import { FacebookIcon, YoutubeIcon, TikTokIcon, InstagramIcon, WhatsAppIcon, LinktreeIcon, GoogleIcon } from './SocialIcons';
import { sanitizeFormData } from '../utils/security';

export default function ContactPage({ lang }) {
  const ui = getUiText(lang).pages.contact;
  const [activeLocation, setActiveLocation] = useState('srilanka');
  const [mapLocationId, setMapLocationId] = useState('kadawatha');

  const handleLocationTab = (loc) => {
    setActiveLocation(loc);
    if (loc === 'srilanka') {
      setMapLocationId('kadawatha');
    } else {
      setMapLocationId('komaki');
    }
  };

  const mapLocations = {
    kadawatha: {
      id: 'kadawatha',
      name: ui.liveMapBranches?.kadawatha || 'Atsuko Main',
      country: 'Sri Lanka',
      badge: 'Main Headquarters & Training Center',
      address: '191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka.',
      embedUrl: 'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s191/3/1,+Sirimavo+Bandaranayake+Road,+Mahara,+Kadawatha,+11850+Sri+Lanka!6i16',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=191%2F3%2F1+Sirimavo+Bandaranayake+Road+Mahara+Kadawatha+11850+Sri+Lanka',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=191%2F3%2F1+Sirimavo+Bandaranayake+Road+Mahara+Kadawatha+11850+Sri+Lanka',
      transitHint: ui.liveMapHintSl || '191/3/1, Sirimavo Bandaranayake Road, Mahara, Kadawatha, 11850 Sri Lanka.'
    },
    komaki: {
      id: 'komaki',
      name: ui.liveMapBranches?.komaki || 'Komaki Office (Aichi, Japan)',
      country: 'Japan',
      badge: 'Registered Support Organization (23登-008312)',
      address: lang === 'si'
        ? 'තැපැල් කේතය 485-0041, සන්ෂයින් කොමාකි ගොඩනැගිල්ල, 2 වන මහල (බටහිර කාමරය), 2-41 කොමාකි, කොමාකි නගරය, අයිචි ප්‍රාන්තය, ජපානය'
        : lang === 'jp'
          ? '〒485-0041 愛知県小牧市小牧2-41 サンシャイン小牧棟 2階西号室'
          : 'Postcode-485-0041, Sunshine Komaki Building, 2nd Floor, West Room, 2-41 Komaki, Komaki City, Aichi Prefecture, Japan',
      embedUrl: 'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s2-41+Komaki,+Komaki+City,+Aichi+485-0041,+Japan!6i16',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=2-41+Komaki+Komaki+City+Aichi+485-0041+Japan',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=2-41+Komaki+Komaki+City+Aichi+485-0041+Japan',
      transitHint: '〒485-0041 愛知県小牧市小牧2-41 サンシャイン小牧棟 2階西号室 • Tel: +81 90-2958-4420 • atsukoschooljapan@gmail.com'
    }
  };

  const currentMap = mapLocations[mapLocationId] || mapLocations.kadawatha;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Student Visa (Language School)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getWhatsAppForwardUrl = () => {
    const text = `🇯🇵 *Atsuko International — Official Inquiry*
────────────────────────
👤 *Full Name:* ${(formData.name || '').trim()}
📱 *Phone / WhatsApp:* ${(formData.phone || '').trim()}
📧 *Email:* ${(formData.email || '').trim() || 'Not specified'}
🎯 *Target Pathway:* ${formData.inquiryType}
📝 *Questions / Message:*
${(formData.message || '').trim() || 'I would like to inquire about eligibility, course schedules, and visa procedures.'}
────────────────────────
📍 Sent via: www.atsukointernational.com`;
    return `https://wa.me/94777933352?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanData = sanitizeFormData(formData);
    try {
      const stored = JSON.parse(sessionStorage.getItem('atsuko_contact_submissions') || '[]');
      stored.push({
        ...cleanData,
        id: Date.now(),
        date: new Date().toISOString()
      });
      sessionStorage.setItem('atsuko_contact_submissions', JSON.stringify(stored));

      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
    }

    // Direct inquiry: Immediately launch WhatsApp with the sanitized inquiry message
    const waUrl = getWhatsAppForwardUrl();
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  const pathways = lang === 'si' ? [
    { val: 'Student Visa (Language School)', label: 'ශිෂ්‍ය වීසා (ජනවාරි / අප්‍රේල් / ජූලි / ඔක්තෝබර්)' },
    { val: 'Japanese Language & JFT Course', label: 'ජපන් භාෂා සහ JFT පූර්ණකාලීන පාඨමාලාව (මාස 1 N5 / දින 50 JFT & N4)' },
    { val: 'SSW Caregiver (Kaigo)', label: 'SSW සාත්තු සේවා (Kaigo) රෝහල් පුහුණුව සමඟ' },
    { val: 'NVQ Level 3 Nursing Care', label: 'NVQ Level 3 සාත්තු සේවා පාඨමාලාව' },
    { val: 'SSW Food Service & Accommodation', label: 'SSW ආහාර සේවා සහ නවාතැන් පහසුකම් (Food Service & Accommodation)' },
    { val: 'SSW Crop Farming & Livestock', label: 'SSW බෝග වගාව සහ පශු සම්පත් (Crop Farming & Livestock)' },
    { val: 'TITP Technical Internship', label: 'TITP කාර්මික පුහුණුලාභී වැඩසටහන' },
    { val: 'Hostel Inquiry', label: 'නේවාසිකාගාර පහසුකම් පිළිබඳ විමසීම්' },
  ] : (lang === 'jp' || lang === 'ja') ? [
    { val: 'Student Visa (Language School)', label: '留学ビザ（1月/4月/7月/10月期生）' },
    { val: 'Japanese Language & JFT Course', label: '総合日本語・JFT全日制コース（1ヶ月N5 / 50日間JFT・N4）' },
    { val: 'SSW Caregiver (Kaigo)', label: '特定技能「介護」（病棟シミュレーション付）' },
    { val: 'NVQ Level 3 Nursing Care', label: 'NVQ Level 3 看護・介護実務コース' },
    { val: 'SSW Food Service & Accommodation', label: '特定技能「外食業・宿泊分野」' },
    { val: 'SSW Crop Farming & Livestock', label: '特定技能「耕種農業・畜産分野」' },
    { val: 'TITP Technical Internship', label: '外国人技能実習制度（TITP）' },
    { val: 'Hostel Inquiry', label: '学生寮・宿泊施設について' },
  ] : [
    { val: 'Student Visa (Language School)', label: 'Student Visa (January / April / July / October)' },
    { val: 'Japanese Language & JFT Course', label: 'Japanese Language & JFT Full-Time Course (1 Month N5 / 50 Days JFT & N4)' },
    { val: 'SSW Caregiver (Kaigo)', label: 'SSW Caregiver (Kaigo) with Hospital Lab' },
    { val: 'NVQ Level 3 Nursing Care', label: 'NVQ Level 3 Nursing Care Course' },
    { val: 'SSW Food Service & Accommodation', label: 'SSW Food Service & Accommodation' },
    { val: 'SSW Crop Farming & Livestock', label: 'SSW Crop Farming & Livestock' },
    { val: 'TITP Technical Internship', label: 'TITP Technical Intern Training' },
    { val: 'Hostel Inquiry', label: 'Student Accommodation / Hostel Inquiry' },
  ];

  return (
    <div className="page-container contact-page">
      {/* 1. Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              <Globe2 size={14} />
              {ui.badge}
            </span>
            <h1 className="page-hero-title">
              {ui.titlePre} <span className="text-gradient-red">{ui.titleHighlight}</span>
            </h1>
            <p className="page-hero-subtitle">
              {ui.subtitle}
            </p>

            <div className="contact-quick-touchpoints">
              <a href={`tel:${officialContacts.hotline.replace(/[^0-9+]/g, '')}`} className="touchpoint-pill">
                <Phone size={15} className="text-red" />
                <span>{ui.hotlinePill}</span>
              </a>
              <a
                href={officialContacts.socials.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="touchpoint-pill"
              >
                <MessageSquare size={15} className="text-emerald" />
                <span>{ui.whatsappPill}</span>
              </a>
              <a href={`mailto:${officialContacts.email}`} className="touchpoint-pill">
                <Mail size={15} className="text-gold" />
                <span>{ui.emailPill}</span>
              </a>
              <a
                href={officialContacts.socials.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="touchpoint-pill"
              >
                <LinktreeIcon size={15} className="text-emerald" />
                <span>linktr.ee/atsukointernational</span>
              </a>
              <div className="touchpoint-pill">
                <ShieldCheck size={15} className="text-gold" />
                <span>{ui.licensePill}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Dual-Column: Official Locations & Contact Form */}
      <section className="section" style={{ background: '#ffffff', padding: 'clamp(2rem, 3.5vw, 3rem) 0' }}>
        <div className="container" style={{ maxWidth: '1280px' }}>
          <div className="contact-main-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 'clamp(3.5rem, 7vw, 6.5rem)', alignItems: 'stretch' }}>
            {/* Left Column: Official Sri Lanka & Japan Operating Bases */}
            <div className="contact-offices-col" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

              {/* Interactive Live Location Map Card */}
              <div
                className="office-live-map-card"
                style={{
                  marginTop: '0',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                {/* Map Card Header with Live Indicator */}
                <div style={{
                  padding: '0.75rem 1rem',
                  background: 'linear-gradient(135deg, #060d1f 0%, #1e293b 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  flexShrink: 0
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: currentMap.country === 'Japan' ? 'rgba(14, 165, 233, 0.25)' : 'rgba(239, 68, 68, 0.25)',
                      border: currentMap.country === 'Japan' ? '1px solid rgba(14, 165, 233, 0.5)' : '1px solid rgba(239, 68, 68, 0.5)',
                      color: currentMap.country === 'Japan' ? '#7dd3fc' : '#fca5a5',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-full)',
                      letterSpacing: '0.04em'
                    }}>
                      <span style={{
                        display: 'inline-block',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: currentMap.country === 'Japan' ? '#38bdf8' : '#ef4444',
                        boxShadow: currentMap.country === 'Japan' ? '0 0 8px #38bdf8' : '0 0 8px #ef4444'
                      }}></span>
                      <span>{currentMap.country === 'Japan' ? 'JAPAN OFFICE' : (ui.liveMapBadge || 'LIVE MAP')}</span>
                    </div>
                    <span style={{ fontSize: '0.925rem', fontWeight: 700, color: '#f8fafc' }}>
                      {currentMap.name}
                    </span>
                  </div>

                  <a
                    href={currentMap.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: '#38bdf8',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      background: 'rgba(56, 189, 248, 0.12)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    <span>{ui.liveMapOpenGmaps}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* Sub-Branch Switcher Tabs - Sri Lanka & Japan Operating Bases */}
                <div style={{
                  display: 'flex',
                  gap: '0.35rem',
                  padding: '0.45rem 0.75rem',
                  background: '#f8fafc',
                  borderBottom: '1px solid #e2e8f0',
                  overflowX: 'auto',
                  whiteSpace: 'nowrap',
                  scrollbarWidth: 'thin',
                  flexShrink: 0
                }}>
                  {/* Atsuko Main */}
                  <button
                    type="button"
                    onClick={() => { setMapLocationId('kadawatha'); setActiveLocation('srilanka'); }}
                    style={{
                      padding: '0.25rem 0.65rem',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid',
                      borderColor: mapLocationId === 'kadawatha' ? '#ef4444' : '#cbd5e1',
                      background: mapLocationId === 'kadawatha' ? '#fee2e2' : '#ffffff',
                      color: mapLocationId === 'kadawatha' ? '#b91c1c' : '#475569',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      flexShrink: 0,
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <MapPin size={11} />
                    <span>{lang === 'si' ? 'අත්සුකෝ ප්‍රධාන මූලස්ථානය' : lang === 'jp' ? 'アツコ本校' : 'Atsuko Main'}</span>
                  </button>

                  {/* Komaki Office (Japan) */}
                  <button
                    type="button"
                    onClick={() => { setMapLocationId('komaki'); setActiveLocation('japan'); }}
                    style={{
                      padding: '0.25rem 0.65rem',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid',
                      borderColor: mapLocationId === 'komaki' ? '#0284c7' : '#cbd5e1',
                      background: mapLocationId === 'komaki' ? '#e0f2fe' : '#ffffff',
                      color: mapLocationId === 'komaki' ? '#0369a1' : '#475569',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      flexShrink: 0,
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <Building2 size={11} />
                    <span>{lang === 'si' ? 'ජපාන කාර්යාලය (කොමාකි, අයිචි)' : lang === 'jp' ? '日本事務所（愛知県小牧市）' : 'Japan Office (Komaki, Aichi)'}</span>
                  </button>
                </div>

                {/* Live Google Map Interactive Frame */}
                <div style={{ position: 'relative', width: '100%', minHeight: '280px', flex: '1 1 0%', background: '#e2e8f0' }}>
                  <iframe
                    key={currentMap.id}
                    title={`${currentMap.name} Live Location Map`}
                    src={currentMap.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block', width: '100%', height: '100%' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Transit Details & Action Footer */}
                <div style={{
                  padding: '0.75rem 1rem',
                  background: '#f8fafc',
                  borderTop: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.65rem',
                  flexShrink: 0
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', flex: '1 1 250px' }}>
                    <Compass size={17} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ fontSize: '0.82rem', color: 'var(--navy-900)', display: 'block' }}>
                        {currentMap.address}
                      </strong>
                      <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                        {currentMap.transitHint}
                      </span>
                    </div>
                  </div>

                  <a
                    href={currentMap.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.55rem 1rem',
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      borderRadius: 'var(--radius-md)'
                    }}
                  >
                    <Navigation size={14} />
                    <span>{ui.liveMapGetDirections}</span>
                  </a>
                  <a
                    href={officialContacts.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.55rem 1rem',
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      borderRadius: 'var(--radius-md)',
                      borderColor: '#cbd5e1'
                    }}
                    title="Write a Google Review for Atsuko"
                  >
                    <GoogleIcon size={15} />
                    <span>{lang === 'si' ? 'Google හි අපව අගයන්න' : lang === 'jp' ? 'Googleクチコミ' : 'Rate on Google'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation & Application Form */}
            <div className="contact-form-col" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div className="contact-form-card" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-xl)', padding: '1.35rem 1.5rem', boxShadow: '0 4px 18px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', margin: '0 0 0.35rem' }}>
                    {ui.formTitle}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', marginBottom: '1rem', lineHeight: 1.45 }}>
                    {ui.formSubtitle}
                  </p>
                </div>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                    <div style={{ width: '56px', height: '56px', background: '#dcfce7', color: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.4rem' }}>
                      {ui.formSuccessTitle || 'Inquiry Generated & WhatsApp Launched!'}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                      {ui.formSuccessDesc || 'Your inquiry details were formatted and forwarded to Atsuko International on WhatsApp. If WhatsApp did not open automatically, click the button below to send your message.'}
                    </p>
                    <a
                      href={getWhatsAppForwardUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-block"
                      style={{
                        background: '#25D366',
                        color: '#ffffff',
                        padding: '0.75rem',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        borderRadius: 'var(--radius-md)',
                        textDecoration: 'none',
                        boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)'
                      }}
                    >
                      <WhatsAppIcon size={16} />
                      <span>{ui.socialsCards?.whatsapp?.btn || 'Open in WhatsApp Now'}</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          inquiryType: 'Student Visa (Language School)',
                          message: ''
                        });
                      }}
                      className="btn btn-secondary btn-block"
                      style={{ marginTop: '0.65rem', fontSize: '0.82rem', padding: '0.55rem' }}
                    >
                      {ui.formReset || 'Send Another Inquiry'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.2rem' }}>
                        {ui.formName} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Kasun Fernando"
                        className="form-input"
                        style={{ width: '100%', padding: '0.55rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '0.88rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.2rem' }}>
                        {ui.formPhone} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. 077 123 4567"
                        className="form-input"
                        style={{ width: '100%', padding: '0.55rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '0.88rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.2rem' }}>
                        {ui.formEmail}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. kasun@example.com"
                        className="form-input"
                        style={{ width: '100%', padding: '0.55rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '0.88rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.2rem' }}>
                        {ui.formPathway} *
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="form-select"
                        style={{ width: '100%', padding: '0.55rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '0.88rem', background: '#ffffff' }}
                      >
                        {pathways.map((p, idx) => (
                          <option key={idx} value={p.val}>{p.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.2rem' }}>
                        {ui.formMessage}
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="..."
                        className="form-textarea"
                        style={{ width: '100%', padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '0.88rem', resize: 'vertical' }}
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="btn btn-whatsapp btn-block"
                        style={{
                          padding: '0.75rem 1rem',
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: 'var(--radius-md)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          cursor: 'pointer',
                          boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                          transition: 'all 0.2s ease',
                          width: '100%',
                          textDecoration: 'none'
                        }}
                      >
                        <WhatsAppIcon size={16} />
                        <span>{ui.formSubmit || 'Send Message'}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Official QR Code & Social Channels */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <QrCode size={14} />
              {ui.socialsBadge}
            </span>
            <h2 className="section-title">
              {ui.socialsTitle} <span className="text-gradient-red">{ui.socialsHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {ui.socialsSubtitle}
            </p>
          </div>

          <div className="social-connect-row" style={{ marginTop: '2rem' }}>
            <a
              href={officialContacts.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="social-connect-card social-card-fb"
            >
              <div className="social-icon-wrapper social-icon-fb">
                <FacebookIcon size={24} />
              </div>
              <h4 className="social-card-name">Facebook</h4>
              <span className="social-card-handle">@AtsukoInternational</span>
              <span className="social-card-action-chip">
                <span>{ui.socialsCards?.facebook?.btn || 'Follow'}</span>
                <ExternalLink size={11} />
              </span>
            </a>

            <a
              href={officialContacts.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="social-connect-card social-card-yt"
            >
              <div className="social-icon-wrapper social-icon-yt">
                <YoutubeIcon size={24} />
              </div>
              <h4 className="social-card-name">YouTube</h4>
              <span className="social-card-handle">@ATSUKOINTERNATIONAL</span>
              <span className="social-card-action-chip">
                <span>{ui.socialsCards?.youtube?.btn || 'Subscribe'}</span>
                <ExternalLink size={11} />
              </span>
            </a>

            <a
              href={officialContacts.socials.tiktok}
              target="_blank"
              rel="noreferrer"
              className="social-connect-card social-card-tiktok"
            >
              <div className="social-icon-wrapper social-icon-tiktok">
                <TikTokIcon size={22} />
              </div>
              <h4 className="social-card-name">TikTok</h4>
              <span className="social-card-handle">@atsuko_international</span>
              <span className="social-card-action-chip">
                <span>{ui.socialsCards?.tiktok?.btn || 'Watch'}</span>
                <ExternalLink size={11} />
              </span>
            </a>

            <a
              href={officialContacts.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="social-connect-card social-card-ig"
            >
              <div className="social-icon-wrapper social-icon-ig">
                <InstagramIcon size={24} />
              </div>
              <h4 className="social-card-name">Instagram</h4>
              <span className="social-card-handle">@atsuko_gakkou</span>
              <span className="social-card-action-chip">
                <span>{ui.socialsCards?.instagram?.btn || 'Gallery'}</span>
                <ExternalLink size={11} />
              </span>
            </a>

            <a
              href={officialContacts.socials.whatsappChannel}
              target="_blank"
              rel="noreferrer"
              className="social-connect-card social-card-wa"
            >
              <div className="social-icon-wrapper social-icon-wa">
                <WhatsAppIcon size={24} />
              </div>
              <h4 className="social-card-name">WhatsApp</h4>
              <span className="social-card-handle">+94 77 793 3352</span>
              <span className="social-card-action-chip">
                <span>{ui.socialsCards?.whatsapp?.btn || 'Chat'}</span>
                <ExternalLink size={11} />
              </span>
            </a>

            <a
              href={officialContacts.googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="social-connect-card social-card-google"
            >
              <div className="social-icon-wrapper social-icon-google">
                <GoogleIcon size={24} />
              </div>
              <h4 className="social-card-name">Google Reviews</h4>
              <span className="social-card-handle">5.0 ★★★★★ Verified</span>
              <span className="social-card-action-chip">
                <span>{lang === 'si' ? 'අගයන්න' : lang === 'jp' ? 'レビュー' : 'Rate Us'}</span>
                <ExternalLink size={11} />
              </span>
            </a>

            <a
              href={officialContacts.socials.linktree}
              target="_blank"
              rel="noreferrer"
              className="social-connect-card social-card-linktree"
            >
              <div className="social-icon-wrapper social-icon-linktree">
                <LinktreeIcon size={23} />
              </div>
              <h4 className="social-card-name">Linktree</h4>
              <span className="social-card-handle">@atsukointernational</span>
              <span className="social-card-action-chip">
                <span>{ui.socialsCards?.linktree?.btn || 'Open Linktree'}</span>
                <ExternalLink size={11} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
