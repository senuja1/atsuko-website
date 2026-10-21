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
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { officialContacts } from '../data/websiteData';
import { getUiText } from '../data/uiText';

function FacebookIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function YoutubeIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function TikTokIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function InstagramIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.507 14.307l-.009.075c-.239.992-1.026 1.83-2.001 2.146-.665.215-1.545.241-2.484-.11-1.393-.522-2.696-1.393-3.805-2.502-1.109-1.109-1.98-2.412-2.502-3.805-.351-.939-.325-1.819-.11-2.484.316-.975 1.154-1.762 2.146-2.001l.075-.009c.355-.044.717.069.98.309l1.455 1.328c.321.293.447.74.321 1.147l-.427 1.381c-.083.27-.018.563.17.771.696.768 1.488 1.428 2.348 1.956.216.133.488.139.71.018l1.246-.677c.379-.207.842-.162 1.176.115l1.636 1.353c.28.232.418.59.36.949zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2.051 21.5l4.475-1.339C8.01 21.175 9.927 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
    </svg>
  );
}

export default function ContactPage({ lang }) {
  const ui = getUiText(lang).pages.contact;
  const [activeLocation, setActiveLocation] = useState('srilanka');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const stored = JSON.parse(localStorage.getItem('atsuko_contact_submissions') || '[]');
      stored.push({
        ...formData,
        id: Date.now(),
        date: new Date().toISOString()
      });
      localStorage.setItem('atsuko_contact_submissions', JSON.stringify(stored));

      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error(err);
    }
    setSubmitted(true);
  };

  const getWhatsAppForwardUrl = () => {
    const text = `Hello Atsuko International!
I have sent an official inquiry through www.atsukojapan.com:
• Name: ${formData.name}
• Contact: ${formData.phone}
• Email: ${formData.email || 'N/A'}
• Pathway: ${formData.inquiryType}
• Message: ${formData.message || 'General inquiry'}

Please get back to me with course / visa details.`;
    return `https://wa.me/94777933352?text=${encodeURIComponent(text)}`;
  };

  const pathways = lang === 'si' ? [
    { val: 'Student Visa (Language School)', label: 'ශිෂ්‍ය වීසා (ජනවාරි / අප්‍රේල් / ජූලි / ඔක්තෝබර්)' },
    { val: 'JLPT Language Courses', label: 'JLPT ජපන් භාෂා පන්ති (N5 / N4 / N3)' },
    { val: 'JFT-Basic A2 Computer Lab', label: 'JFT-Basic A2 පරිගණක විභාග පුහුණුව' },
    { val: 'SSW Caregiver (Kaigo)', label: 'SSW සාත්තු සේවා (Kaigo) රෝහල් පුහුණුව සමඟ' },
    { val: 'SSW Food Service Industry', label: 'SSW ආහාර සැකසුම් සහ අවන්හල් සේවා' },
    { val: 'SSW Automobile Transport & Truck', label: 'SSW වාණිජ ට්‍රක් රථ රියදුරු සහ ප්‍රවාහන' },
    { val: 'SSW Accommodation / Hotel', label: 'SSW හෝටල් සහ සංචාරක සත්කාරක' },
    { val: 'TITP Technical Internship', label: 'TITP කාර්මික පුහුණුලාභී වැඩසටහන' },
    { val: 'Hostel Inquiry', label: 'නේවාසිකාගාර පහසුකම් පිළිබඳ විමසීම්' },
  ] : (lang === 'jp' || lang === 'ja') ? [
    { val: 'Student Visa (Language School)', label: '留学ビザ（1月/4月/7月/10月期生）' },
    { val: 'JLPT Language Courses', label: 'JLPT日本語能力試験講座（N5/N4/N3）' },
    { val: 'JFT-Basic A2 Computer Lab', label: 'JFT-Basic A2 CBTコンピューター試験対策' },
    { val: 'SSW Caregiver (Kaigo)', label: '特定技能「介護」（病棟シミュレーション付）' },
    { val: 'SSW Food Service Industry', label: '特定技能「外食業・食品製造」' },
    { val: 'SSW Automobile Transport & Truck', label: '特定技能「自動車運送業・トラック運転手」' },
    { val: 'SSW Accommodation / Hotel', label: '特定技能「宿泊業・ホテル」' },
    { val: 'TITP Technical Internship', label: '外国人技能実習制度（TITP）' },
    { val: 'Hostel Inquiry', label: '学生寮・宿泊施設について' },
  ] : [
    { val: 'Student Visa (Language School)', label: 'Student Visa (January / April / July / October)' },
    { val: 'JLPT Language Courses', label: 'JLPT Language Courses (N5 / N4 / N3)' },
    { val: 'JFT-Basic A2 Computer Lab', label: 'JFT-Basic A2 Computer Exam Prep' },
    { val: 'SSW Caregiver (Kaigo)', label: 'SSW Caregiver (Kaigo) with Hospital Lab' },
    { val: 'SSW Food Service Industry', label: 'SSW Food Service (Gaishoku)' },
    { val: 'SSW Automobile Transport & Truck', label: 'SSW Automobile Transport & Truck Driving' },
    { val: 'SSW Accommodation / Hotel', label: 'SSW Accommodation (Hotel & Hospitality)' },
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
                rel="noreferrer" 
                className="touchpoint-pill"
              >
                <MessageSquare size={15} className="text-emerald" />
                <span>{ui.whatsappPill}</span>
              </a>
              <a href={`mailto:${officialContacts.email}`} className="touchpoint-pill">
                <Mail size={15} className="text-gold" />
                <span>{ui.emailPill}</span>
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
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="contact-main-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {/* Left Column: Official Sri Lanka & Japan Operating Bases */}
            <div className="contact-offices-col">
              <span className="section-badge badge-red">
                <Building2 size={14} />
                {ui.leftBadge}
              </span>
              <h2 className="section-title-md" style={{ margin: '0.5rem 0 1rem' }}>
                {ui.leftTitle} <span className="text-gradient-red">{ui.leftHighlight}</span>
              </h2>
              <p className="about-body-p" style={{ marginBottom: '1.5rem' }}>
                {ui.leftDesc}
              </p>

              {/* Office Selector Tabs */}
              <div className="office-selector-tabs" style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <button 
                  className={`office-tab-btn ${activeLocation === 'srilanka' ? 'active' : ''}`}
                  onClick={() => setActiveLocation('srilanka')}
                >
                  <span className="office-tab-flag">🇱🇰</span>
                  <span>{ui.tabSl}</span>
                </button>
                <button 
                  className={`office-tab-btn ${activeLocation === 'japan' ? 'active' : ''}`}
                  onClick={() => setActiveLocation('japan')}
                >
                  <span className="office-tab-flag">🇯🇵</span>
                  <span>{ui.tabJp}</span>
                </button>
              </div>

              {/* Sri Lanka Headquarters Card */}
              {activeLocation === 'srilanka' && (
                <div className="office-profile-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-xl)', padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ background: '#fee2e2', color: '#b91c1c', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                      {ui.slCardBadge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                      SLBFE Lic. #3293
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                    {ui.slCardTitle}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <MapPin size={18} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong>{ui.slAddressLbl}</strong>
                        <p style={{ margin: '0.25rem 0 0', color: 'var(--navy-800)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          {officialContacts.headOfficeAddress}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <Phone size={18} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong>{ui.slHotlineLbl}</strong>
                        <p style={{ margin: '0.25rem 0 0', color: 'var(--navy-800)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          {officialContacts.hotline} / {officialContacts.mobile1}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <Mail size={18} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong>{ui.slEmailLbl}</strong>
                        <p style={{ margin: '0.25rem 0 0', color: 'var(--navy-800)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          {officialContacts.email} • {officialContacts.domain}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <Clock size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong>{ui.slHoursLbl}</strong>
                        <p style={{ margin: '0.25rem 0 0', color: 'var(--navy-800)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          {ui.slHoursVal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Japan Support Entity Card */}
              {activeLocation === 'japan' && (
                <div className="office-profile-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-xl)', padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ background: '#e0f2fe', color: '#0369a1', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                      {ui.jpCardBadge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                      No. 23登-008312
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.75rem' }}>
                    {ui.jpCardTitle}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <Building2 size={18} style={{ color: '#0369a1', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong>{ui.jpEntityLbl}</strong>
                        <p style={{ margin: '0.25rem 0 0', color: 'var(--navy-800)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          株式会社 Atsuko International (Japan)
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <MapPin size={18} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong>{ui.jpAddressLbl}</strong>
                        <p style={{ margin: '0.25rem 0 0', color: 'var(--navy-800)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          {officialContacts.japanAddress}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <Phone size={18} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong>{ui.jpPhoneLbl}</strong>
                        <p style={{ margin: '0.25rem 0 0', color: 'var(--navy-800)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          {officialContacts.japanPhone}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <Clock size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong>{ui.jpHoursLbl}</strong>
                        <p style={{ margin: '0.25rem 0 0', color: 'var(--navy-800)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                          {ui.jpHoursVal}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Interactive Consultation & Application Form */}
            <div className="contact-form-col">
              <div className="contact-form-card" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-xl)', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <span className="section-badge badge-gold" style={{ marginBottom: '0.75rem' }}>
                  <Sparkles size={14} />
                  {ui.formBadge}
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy-900)', margin: '0.25rem 0 0.5rem' }}>
                  {ui.formTitle}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {ui.formSubtitle}
                </p>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <div style={{ width: '64px', height: '64px', background: '#dcfce7', color: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                      {ui.formSuccessTitle}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {ui.formSuccessDesc}
                    </p>
                    <a 
                      href={getWhatsAppForwardUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-whatsapp btn-block"
                    >
                      <MessageSquare size={16} />
                      <span>{ui.socialsCards?.whatsapp?.btn || 'WhatsApp'}</span>
                    </a>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn btn-secondary btn-block"
                      style={{ marginTop: '0.75rem' }}
                    >
                      {ui.formReset}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>
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
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>
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
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>
                        {ui.formEmail}
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. kasun@example.com"
                        className="form-input"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>
                        {ui.formPathway} *
                      </label>
                      <select 
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="form-select"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '0.95rem', background: '#ffffff' }}
                      >
                        {pathways.map((p, idx) => (
                          <option key={idx} value={p.val}>{p.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>
                        {ui.formMessage}
                      </label>
                      <textarea 
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="..."
                        className="form-textarea"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', fontSize: '0.95rem', resize: 'vertical' }}
                      />
                    </div>

                    <button 
                      type="submit"
                      className="btn btn-primary btn-block"
                      style={{ padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }}
                    >
                      <Send size={16} />
                      <span>{ui.formSubmit}</span>
                    </button>
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

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap', marginTop: '2rem' }}>
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
          </div>
        </div>
      </section>
    </div>
  );
}
