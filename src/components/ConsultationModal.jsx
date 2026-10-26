import { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteTranslations } from '../data/translations';

export default function ConsultationModal({ lang, isOpen, onClose, defaultProgram = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'Kadawatha (Head Operations Center)',
    program: defaultProgram || 'JLPT N5 Comprehensive Batch',
    education: 'G.C.E. A/L Passed',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const t = siteTranslations[lang]?.modal || siteTranslations.en.modal;

  useEffect(() => {
    if (defaultProgram) {
      setFormData(prev => ({ ...prev, program: defaultProgram }));
    }
  }, [defaultProgram]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setSubmitted(false);
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(sessionStorage.getItem('atsuko_inquiries') || '[]');
      existing.push({
        ...formData,
        id: Date.now(),
        date: new Date().toISOString()
      });
      sessionStorage.setItem('atsuko_inquiries', JSON.stringify(existing));

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 }
      });
    } catch (err) {
      console.error(err);
    }
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `Hello Atsuko International! I have submitted my consultation application:
• Name: ${formData.name}
• Contact: ${formData.phone}
• Preferred Center: ${formData.branch}
• Program: ${formData.program}
• Education: ${formData.education}
• Note: ${formData.notes || 'None'}

Please schedule my consultation session with an Atsuko Counselor.`;
    return `https://wa.me/94777933352?text=${encodeURIComponent(text)}`;
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 id="consultation-modal-title" style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-900)' }}>
              {submitted ? t.submittedTitle : t.title}
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {t.subtitle}
            </p>
          </div>
          <button
            type="button"
            className="close-btn"
            onClick={handleClose}
            aria-label="Close consultation modal"
          >
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">{t.fullName}</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={lang === 'si' ? 'උදා: කසුන් චාමර පෙරේරා' : lang === 'jp' ? '例: 田中 太郎 / Kasun Perera' : 'e.g. Kasun Chamara Perera'}
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder={lang === 'si' ? 'උදා: 077 123 4567' : lang === 'jp' ? '例: 090-1234-5678 / 077 123 4567' : 'e.g. 077 123 4567'}
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">{t.branch}</label>
                  <select
                    name="branch"
                    className="form-select"
                    value={formData.branch}
                    onChange={handleChange}
                  >
                    <option value="Kadawatha (Head Operations Center & Campus)">
                      {lang === 'si' ? 'කඩවත ප්‍රධාන මූලස්ථානය (Kadawatha Head Center)' : lang === 'jp' ? 'カダワタ本部・研修センター (Kadawatha Center)' : 'Kadawatha (Head Operations Center & Campus)'}
                    </option>
                    <option value="Kelaniya (Registered Office)">
                      {lang === 'si' ? 'කැලණිය ලියාපදිංචි කාර්යාලය (PV 0217143)' : lang === 'jp' ? 'ケラニヤ登記事務所 (Kelaniya Office)' : 'Kelaniya (Registered Office - PV 0217143)'}
                    </option>
                    <option value="Sendai, Japan Support Hub">
                      {lang === 'si' ? 'ජපානය - සෙන්ඩායි ආධාරක මධ්‍යස්ථානය' : lang === 'jp' ? '日本・仙台支援センター (Sendai Hub)' : 'Sendai, Japan Support Hub (東北支援センター)'}
                    </option>
                    <option value="Komaki, Aichi (Japan Office)">
                      {lang === 'si' ? 'ජපානය - අයිචි කොමාකි කාර්යාලය' : lang === 'jp' ? '日本・愛知小牧事務所 (Komaki Office)' : 'Komaki, Aichi (Japan Resident Office)'}
                    </option>
                    <option value="Online Live Zoom Batches (Island-wide)">
                      {lang === 'si' ? 'දිවයින පුරා සජීවී Zoom මාර්ගගත පන්ති' : lang === 'jp' ? '全国オンラインZoomクラス (Online Classes)' : 'Online Live Zoom Batches (Island-wide)'}
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">{t.program}</label>
                  <select
                    name="program"
                    className="form-select"
                    value={formData.program}
                    onChange={handleChange}
                  >
                    <option value="Student Visa - April / July / Oct Intakes">
                      {lang === 'si' ? 'ජපන් ශිෂ්‍ය වීසා (ජන/අප්‍රේල්/ජූලි/ඔක්)' : lang === 'jp' ? '日本留学・学生ビザ (1・4・7・10月期)' : 'Study in Japan - Student Visa (Jan/Apr/Jul/Oct Intakes)'}
                    </option>
                    <option value="JLPT N5 Comprehensive Batch">
                      {lang === 'si' ? 'JLPT N5 මූලික පාඨමාලාව (ආධුනික)' : lang === 'jp' ? 'JLPT N5 基礎コース (入門)' : 'JLPT N5 Comprehensive Batch (Beginner)'}
                    </option>
                    <option value="JLPT N4 Intermediate Batch">
                      {lang === 'si' ? 'JLPT N4 මධ්‍යම පාඨමාලාව (SSW ප්‍රමිතිය)' : lang === 'jp' ? 'JLPT N4 中級コース (特定技能標準)' : 'JLPT N4 Intermediate Batch (SSW Standard)'}
                    </option>
                    <option value="JFT-Basic Fast-Track">
                      {lang === 'si' ? 'JFT-Basic A2 වේගවත් පරිගණක පුහුණුව' : lang === 'jp' ? 'JFT-Basic A2 速成CBT演習' : 'JFT-Basic Fast-Track (CBT Lab Prep)'}
                    </option>
                    <option value="SSW Caregiver (Kaigo)">
                      {lang === 'si' ? 'SSW සාත්තු සේවා (Kaigo රෝහල් සමාකරණ)' : lang === 'jp' ? '特定技能 介護（模擬病棟実習）' : 'SSW Caregiver (Kaigo Healthcare Simulation)'}
                    </option>
                    <option value="SSW Truck Driver & Logistics">
                      {lang === 'si' ? 'SSW වාණිජ රියදුරු සහ ප්‍රවාහන' : lang === 'jp' ? '特定技能 自動車運送・物流' : 'SSW Logistics & Commercial Driver'}
                    </option>
                    <option value="SSW Food Service / Hospitality">
                      {lang === 'si' ? 'SSW ආහාර සැකසුම් හා අවන්හල් සේවා' : lang === 'jp' ? '特定技能 外食業・ホスピタリティ' : 'SSW Food Service & Hospitality Operations'}
                    </option>
                    <option value="SSW Agriculture & Farming">
                      {lang === 'si' ? 'SSW කෘෂිකර්මාන්තය සහ හරිතාගාර' : lang === 'jp' ? '特定技能 農業・施設園芸' : 'SSW Agriculture & Greenhouse Farming'}
                    </option>
                    <option value="SSW Construction & Civil Works">
                      {lang === 'si' ? 'SSW ඉදිකිරීම් සහ සිවිල් ඉංජිනේරු' : lang === 'jp' ? '特定技能 建設・土木' : 'SSW Construction & Civil Works'}
                    </option>
                    <option value="TITP Technical Intern">
                      {lang === 'si' ? 'TITP කාර්මික පුහුණු වැඩසටහන' : lang === 'jp' ? '技能実習制度（TITP）' : 'TITP Technical Internship Program'}
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{t.education}</label>
                <select
                  name="education"
                  className="form-select"
                  value={formData.education}
                  onChange={handleChange}
                >
                  <option value="G.C.E. A/L Passed">
                    {lang === 'si' ? 'අ.පො.ස. උ/පෙළ සමත් (ඕනෑම විෂය ධාරාවකින්)' : lang === 'jp' ? '高等学校卒業（G.C.E. A/L合格）' : 'G.C.E. A/L Passed (Any stream)'}
                  </option>
                  <option value="G.C.E. O/L Completed">
                    {lang === 'si' ? 'අ.පො.ස. සා/පෙළ සම්පූර්ණ' : lang === 'jp' ? '中学校卒業（G.C.E. O/L修了）' : 'G.C.E. O/L Completed'}
                  </option>
                  <option value="Diploma / NVQ 3/4/5">
                    {lang === 'si' ? 'ඩිප්ලෝමා / NVQ 3/4/5 මට්ටම' : lang === 'jp' ? '専門学校・NVQ Level 3/4/5' : 'Diploma / NVQ Level 3/4/5'}
                  </option>
                  <option value="Bachelor's Degree / Graduate">
                    {lang === 'si' ? 'උපාධිය / පශ්චාත් උපාධි' : lang === 'jp' ? '大学卒業（学士・修士以上）' : "Bachelor's Degree / Higher"}
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">{t.notes}</label>
                <textarea
                  name="notes"
                  rows="3"
                  maxLength={500}
                  placeholder={t.notesPlaceholder}
                  className="form-textarea"
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#64748b', fontSize: '0.8rem' }}>
                <ShieldCheck size={16} style={{ color: '#10b981' }} />
                <span>{t.confidentiality}</span>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                <Send size={16} />
                {t.btnSubmit}
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem'
              }}>
                <CheckCircle2 size={36} />
              </div>

              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                {t.thankYou} {formData.name}!
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                {t.successMessage}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <MessageSquare size={18} />
                  {t.btnWhatsAppDirect}
                </a>

                <button
                  type="button"
                  onClick={handleClose}
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  {t.btnClose}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
