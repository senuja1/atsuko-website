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
import { FacebookIcon, YoutubeIcon, TikTokIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

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
      const stored = JSON.parse(sessionStorage.getItem('atsuko_contact_submissions') || '[]');
      stored.push({
        ...formData,
        id: Date.now(),
        date: new Date().toISOString()
      });
      sessionStorage.setItem('atsuko_contact_submissions', JSON.stringify(stored));

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
