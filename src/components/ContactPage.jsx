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
  Users, 
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { officialContacts, branchesData } from '../data/websiteData';

export default function ContactPage({ lang, onOpenModal }) {
  const [activeOfficeId, setActiveOfficeId] = useState('kadawatha');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Student Visa (Language School)',
    preferredOffice: 'Kadawatha (Head Operations Center)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const currentOffice = branchesData.find(b => b.id === activeOfficeId) || branchesData[0];

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
        particleCount: 60,
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
• Office: ${formData.preferredOffice}
• Message: ${formData.message || 'General inquiry'}

Please get back to me with course / visa details.`;
    return `https://wa.me/94778643352?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="page-container contact-page">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              <Globe2 size={14} />
              Sri Lanka & Japan Dual Locations
            </span>
            <h1 className="page-hero-title">
              Contact <span className="text-gradient-red">Atsuko International</span>
            </h1>
            <p className="page-hero-subtitle">
              Official Sri Lanka Operations Centers in Kadawatha and Kelaniya, with our registered support office in 
              Komaki, Aichi Prefecture, Japan. We welcome your calls, visits, and direct inquiries.
            </p>

            <div className="contact-quick-touchpoints">
              <a href="tel:0726160160" className="touchpoint-pill">
                <Phone size={15} className="text-red" />
                <span>Primary Hotline: 072 616 0160</span>
              </a>
              <a 
                href="https://wa.me/94778643352" 
                target="_blank" 
                rel="noreferrer" 
                className="touchpoint-pill"
              >
                <MessageSquare size={15} className="text-emerald" />
                <span>WhatsApp: +94 77 864 3352</span>
              </a>
              <a href="mailto:info@atsukojapan.com" className="touchpoint-pill">
                <Mail size={15} className="text-gold" />
                <span>Portal: info@atsukojapan.com</span>
              </a>
              <div className="touchpoint-pill">
                <ShieldCheck size={15} className="text-gold" />
                <span>SLBFE Lic. #3293 | PV 0217143</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dual-Column: Multi-Location Office Selector & Interactive Form */}
      <section className="section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left Column: Multi-Location Display */}
            <div className="contact-offices-col">
              <span className="section-badge badge-red">
                <Building2 size={14} />
                Multi-Location Office Directory
              </span>
              <h2 className="section-title-md">
                Sri Lanka & <span className="text-gradient-red">Japan Offices</span>
              </h2>
              <p className="about-body-p">
                Select an office below to view addresses, telephone contacts, and specialized facilities.
              </p>

              {/* Office Selector Pills */}
              <div className="office-selector-tabs">
                <button 
                  className={`office-tab-btn ${activeOfficeId === 'kadawatha' ? 'active' : ''}`}
                  onClick={() => setActiveOfficeId('kadawatha')}
                >
                  <span>🇱🇰 Kadawatha (Head Ops)</span>
                </button>
                <button 
                  className={`office-tab-btn ${activeOfficeId === 'komaki-japan' ? 'active' : ''}`}
                  onClick={() => setActiveOfficeId('komaki-japan')}
                >
                  <span>🇯🇵 Komaki, Aichi (Japan)</span>
                </button>
                <button 
                  className={`office-tab-btn ${activeOfficeId === 'kelaniya' ? 'active' : ''}`}
                  onClick={() => setActiveOfficeId('kelaniya')}
                >
                  <span>🇱🇰 Kelaniya (Reg. Office)</span>
                </button>
                <button 
                  className={`office-tab-btn ${activeOfficeId === 'sendai-japan' ? 'active' : ''}`}
                  onClick={() => setActiveOfficeId('sendai-japan')}
                >
                  <span>🇯🇵 Sendai (Japan Entity)</span>
                </button>
              </div>

              {/* Active Selected Office Details Card */}
              <div className="active-office-display-card">
                <div className="aod-header">
                  <div>
                    <span className="aod-type-tag">
                      {currentOffice.isHeadOffice ? '★ Primary Operations Center' : currentOffice.isJapanEntity ? '🇯🇵 Registered Support Organization in Japan' : 'Regional Branch'}
                    </span>
                    <h3 className="aod-title">{currentOffice.name}</h3>
                    <div className="aod-jp-name">{currentOffice.jpName}</div>
                  </div>
                </div>

                <div className="aod-details-list">
                  <div className="aod-detail-item">
                    <MapPin size={20} className="text-red flex-shrink-0" />
                    <div>
                      <strong>Physical Address:</strong>
                      <p>{currentOffice.address}</p>
                    </div>
                  </div>

                  <div className="aod-detail-item">
                    <Phone size={18} className="text-blue flex-shrink-0" />
                    <div>
                      <strong>Telephone Contact:</strong>
                      <p>{currentOffice.phone} {currentOffice.isHeadOffice && '/ 070 363 4416'}</p>
                    </div>
                  </div>

                  <div className="aod-detail-item">
                    <Clock size={18} className="text-emerald flex-shrink-0" />
                    <div>
                      <strong>Office Hours:</strong>
                      <p>{currentOffice.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="aod-facilities-box">
                  <strong>Key Facilities & Desks:</strong>
                  <ul>
                    {currentOffice.facilities.map((fac, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={13} className="text-red" />
                        <span>{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="aod-action-buttons">
                  <a 
                    href={`https://wa.me/${currentOffice.whatsapp.replace('+', '')}?text=Hello%20Atsuko%20International%20${encodeURIComponent(currentOffice.name)}`}
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-whatsapp btn-sm"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp This Office</span>
                  </a>

                  <a 
                    href={`tel:${currentOffice.phone.replace(/[^0-9]/g, '')}`}
                    className="btn btn-primary btn-sm"
                  >
                    <Phone size={14} />
                    <span>Call Directly</span>
                  </a>
                </div>
              </div>

              {/* Department Numbers Directory */}
              <div className="department-directory-box">
                <h4 className="dept-box-title">Direct Department Desks (Kadawatha Head Office)</h4>
                <div className="dept-grid">
                  {officialContacts.departmentNumbers.map((dept, idx) => (
                    <div key={idx} className="dept-item">
                      <span className="dept-lbl">{dept.label}</span>
                      <a href={`tel:${dept.number.replace(/\s+/g, '')}`} className="dept-num">
                        {dept.number}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Direct Online Inquiry & Registration Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <div className="form-card-header">
                  <span className="section-badge badge-gold">
                    <Send size={13} />
                    Direct Inquiry & Registration
                  </span>
                  <h3 className="form-card-title">Send Us a Direct Application</h3>
                  <p className="form-card-sub">
                    Our admissions and visa counselors review every inquiry and respond within 24 business hours.
                  </p>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="contact-actual-form">
                    <div className="form-group">
                      <label className="form-label">Your Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="e.g. Kasun Chamara Perera" 
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label">Phone / WhatsApp Number *</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          required 
                          placeholder="e.g. 077 123 4567" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Email Address (Optional)</label>
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="e.g. kasun@example.com" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Program or Visa Pathway of Interest *</label>
                      <select 
                        name="inquiryType" 
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="Student Visa (Language School)">Student Visa (Language School - Jan/Apr/Jul/Oct Intakes)</option>
                        <option value="JLPT N5 Comprehensive Course">JLPT N5 Comprehensive Course (Beginner)</option>
                        <option value="JLPT N4 Intermediate Course">JLPT N4 Intermediate Course (SSW Standard)</option>
                        <option value="JFT-Basic A2 Computer Lab">JFT-Basic A2 Computer Lab Batch</option>
                        <option value="SSW Caregiver (Kaigo) Practical Lab">SSW Caregiver (Kaigo) Practical Simulation</option>
                        <option value="SSW Food Service & Hospitality">SSW Food Service & Hospitality Operations</option>
                        <option value="SSW Commercial Truck Driving">SSW Commercial Truck Driving & Logistics</option>
                        <option value="SSW Agriculture & Farming">SSW Agriculture & Farming</option>
                        <option value="SSW Construction & Civil Works">SSW Construction & Civil Works</option>
                        <option value="TITP Technical Intern Training">TITP Technical Intern Training Program</option>
                        <option value="General Consultation & Guidance">General Consultation & Guidance</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Preferred Branch for Consultation *</label>
                      <select 
                        name="preferredOffice" 
                        value={formData.preferredOffice}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="Kadawatha (Head Operations Center)">Kadawatha (Head Operations Center & Practical Lab)</option>
                        <option value="Kelaniya (Registered Office)">Kelaniya (Registered Corporate Office)</option>
                        <option value="Kandy Center">Kandy Center (Central Province)</option>
                        <option value="Galle Center">Galle Center (Southern Province)</option>
                        <option value="Gampaha Center">Gampaha Center</option>
                        <option value="Badulla Center">Badulla Center (Uva Province)</option>
                        <option value="Matara Center">Matara Center</option>
                        <option value="Ratnapura Center">Ratnapura Center</option>
                        <option value="Trincomalee Center">Trincomalee Center (Eastern Province)</option>
                        <option value="Online Zoom Consultation">Online Zoom Video Consultation</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Questions or Additional Details (Optional)</label>
                      <textarea 
                        name="message" 
                        rows="3" 
                        placeholder="Tell us about your educational background, Japanese language knowledge, or specific goals..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-textarea"
                      ></textarea>
                    </div>

                    <div className="form-security-note">
                      <ShieldCheck size={14} className="text-gold flex-shrink-0" />
                      <span>Submitted securely under SLBFE License No. 3293 privacy regulations.</span>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">
                      <Send size={15} />
                      <span>Submit Official Inquiry</span>
                    </button>
                  </form>
                ) : (
                  <div className="form-success-box">
                    <div className="success-icon-circ">✓</div>
                    <h4 className="success-title">Inquiry Submitted Successfully!</h4>
                    <p className="success-desc">
                      Thank you, <strong>{formData.name}</strong>. Your inquiry for <strong>{formData.inquiryType}</strong> has been registered with our Admissions Desk.
                    </p>
                    <p className="success-sub">
                      An Atsuko International counselor will contact you at <strong>{formData.phone}</strong> within 24 business hours.
                    </p>

                    <div className="success-action-group">
                      <a 
                        href={getWhatsAppForwardUrl()}
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-whatsapp btn-block"
                      >
                        <MessageSquare size={16} />
                        <span>Send to WhatsApp Admissions Advisor Now</span>
                      </a>

                      <button 
                        onClick={() => setSubmitted(false)}
                        className="btn btn-secondary-white btn-block"
                        style={{ marginTop: '0.75rem' }}
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Community Groups Integration Section (Document Section 7) */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <Users size={14} />
              Connected Community
            </span>
            <h2 className="section-title">
              Official Social Media & <span className="text-gradient-red">Community Channels</span>
            </h2>
            <p className="section-subtitle">
              Join over 17,000 active students and alumni across our official social networks for daily Japanese study tips, 
              visa batch announcements, and visa approval celebrations.
            </p>
          </div>

          <div className="social-channels-grid">
            {/* Facebook Page & Group */}
            <div className="social-channel-card sc-facebook">
              <div className="sc-header">
                <div className="sc-icon-circ fb-bg">f</div>
                <div>
                  <h4 className="sc-name">Facebook Community</h4>
                  <span className="sc-followers">17K+ Followers & Alumni Group</span>
                </div>
              </div>
              <p className="sc-desc">
                Follow our official Facebook page for daily photo updates of airport departures, visa awards, and batch announcements.
              </p>
              <div className="sc-links-row">
                <a 
                  href={officialContacts.socials.facebook} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="sc-btn"
                >
                  <span>Official Page</span>
                  <ExternalLink size={12} />
                </a>
                <a 
                  href={officialContacts.socials.facebookGroup} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="sc-btn sc-btn-alt"
                >
                  <span>Student Group</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* WhatsApp Official Channel */}
            <div className="social-channel-card sc-whatsapp">
              <div className="sc-header">
                <div className="sc-icon-circ wa-bg">💬</div>
                <div>
                  <h4 className="sc-name">WhatsApp Channel & Groups</h4>
                  <span className="sc-followers">Direct Alerts & Intake Notices</span>
                </div>
              </div>
              <p className="sc-desc">
                Join our official WhatsApp channel to receive instant reminders for Prometric test registration, JLPT deadlines, and interview dates.
              </p>
              <div className="sc-links-row">
                <a 
                  href={officialContacts.socials.whatsAppChannel} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="sc-btn wa-btn"
                >
                  <span>Join WhatsApp Channel</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* YouTube Channel */}
            <div className="social-channel-card sc-youtube">
              <div className="sc-header">
                <div className="sc-icon-circ yt-bg">▶</div>
                <div>
                  <h4 className="sc-name">YouTube Channel</h4>
                  <span className="sc-followers">@ATSUKOINTERNATIONAL</span>
                </div>
              </div>
              <p className="sc-desc">
                Watch video testimonials from students living in Tokyo and Sendai, Caregiver practical class walk-throughs, and free Japanese lessons.
              </p>
              <div className="sc-links-row">
                <a 
                  href={officialContacts.socials.youtube} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="sc-btn yt-btn"
                >
                  <span>Watch Testimonials</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* TikTok & Instagram */}
            <div className="social-channel-card sc-tiktok">
              <div className="sc-header">
                <div className="sc-icon-circ tt-bg">♪</div>
                <div>
                  <h4 className="sc-name">TikTok & Instagram</h4>
                  <span className="sc-followers">@atsuko_international</span>
                </div>
              </div>
              <p className="sc-desc">
                Engaging short-form videos covering daily Japanese conversational phrases, Japanese work culture, and student life in Japan.
              </p>
              <div className="sc-links-row">
                <a 
                  href={officialContacts.socials.tiktok} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="sc-btn"
                >
                  <span>TikTok</span>
                  <ExternalLink size={12} />
                </a>
                <a 
                  href={officialContacts.socials.instagram} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="sc-btn"
                >
                  <span>Instagram</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
