import { ShieldCheck, MapPin, Phone, Mail, Clock, Globe2, ExternalLink } from 'lucide-react';
import { siteTranslations } from '../data/translations';
import { officialContacts } from '../data/websiteData';
import { FacebookIcon, WhatsAppIcon, YoutubeIcon, TikTokIcon, InstagramIcon } from './SocialIcons';

export default function Footer({ lang, onOpenModal, onNavigate }) {
  const t = siteTranslations[lang]?.footer || siteTranslations.en.footer;

  const handleLinkClick = (e, pageId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', cursor: 'pointer' }}
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              <img
                src="/images/atsuko-official-logo.png"
                alt="Atsuko International School Logo"
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div className="footer-brand-title" style={{ margin: 0, lineHeight: 1.1 }}>
                  ATSUKO <span style={{ color: '#0ea5e9' }}>INTERNATIONAL</span>
                </div>
                <div style={{ fontFamily: 'var(--font-jp)', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 700 }}>
                  篤子 学校 (ATSUKO GAKKO)
                </div>
              </div>
            </div>

            <p className="footer-desc">
              {t.tagline}
            </p>

            <div className="footer-badges-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}>
                <ShieldCheck size={14} />
                <span>SLBFE Lic. 3293</span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.3)' }}>
                <span>Reg. PV 0217143</span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', color: '#4ade80', border: '1px solid rgba(74,222,128,0.3)' }}>
                <Globe2 size={13} />
                <span>{officialContacts.domain}</span>
              </div>
            </div>

            {/* Social Media Channels Row */}
            <div className="footer-socials-row">
              {/* Facebook */}
              <a
                href={officialContacts.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn fb"
                title="Atsuko International on Facebook"
                aria-label="Atsuko Facebook"
              >
                <FacebookIcon size={20} />
              </a>

              {/* WhatsApp */}
              <a
                href={officialContacts.socials.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn wa"
                title="Chat with Atsuko International on WhatsApp"
                aria-label="Chat with Atsuko on WhatsApp"
              >
                <WhatsAppIcon size={22} />
              </a>

              {/* YouTube */}
              <a
                href={officialContacts.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn yt"
                title="Watch on YouTube"
                aria-label="Atsuko YouTube Channel"
              >
                <YoutubeIcon size={22} />
              </a>

              {/* TikTok */}
              <a
                href={officialContacts.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn tt"
                title="TikTok: @atsuko_international"
                aria-label="Atsuko TikTok"
              >
                <TikTokIcon size={19} />
              </a>

              {/* Instagram */}
              <a
                href={officialContacts.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn ig"
                title="Instagram: @atsuko_gakkou"
                aria-label="Atsuko Instagram"
              >
                <InstagramIcon size={21} />
              </a>
            </div>
          </div>

          {/* Platform Pages Navigation */}
          <div>
            <h4 className="footer-col-title">{t.colPrograms || (lang === 'si' ? 'ප්‍රධාන පිටු' : lang === 'jp' ? '主要ページ' : 'Main Portal Pages')}</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>{lang === 'si' ? 'මුල් පිටුව' : lang === 'jp' ? 'ホーム' : 'Home Page'}</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>{lang === 'si' ? 'අප ගැන සහ බලපත්‍ර' : lang === 'jp' ? '会社概要・許可証' : 'About Us & Licenses'}</a></li>
              <li><a href="#courses" onClick={(e) => handleLinkClick(e, 'courses')}>{lang === 'si' ? 'පාඨමාලා සහ පුහුණුව' : lang === 'jp' ? '教育・研修コース' : 'Courses & Skills Training'}</a></li>
              <li><a href="#student-visa" onClick={(e) => handleLinkClick(e, 'student-visa')}>{lang === 'si' ? 'ශිෂ්‍ය වීසා සේවාව (Ryugaku)' : lang === 'jp' ? '日本留学ビザ' : 'Student Visa (Ryugaku)'}</a></li>
              <li><a href="#job-visa" onClick={(e) => handleLinkClick(e, 'job-visa')}>{lang === 'si' ? 'රැකියා වීසා (SSW & TITP)' : lang === 'jp' ? '特定技能・就労ビザ' : 'Job Visa (SSW & TITP)'}</a></li>
              <li><a href="#facilities" onClick={(e) => handleLinkClick(e, 'facilities')}>{lang === 'si' ? 'නේවාසිකාගාර සහ ශිෂ්‍ය ජීවිතය' : lang === 'jp' ? '学生寮・キャンパス生活' : 'Accommodation & Student Life'}</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>{lang === 'si' ? 'ප්‍රධාන කාර්යාලය සහ ඇමතුම්' : lang === 'jp' ? 'お問い合わせ・本部' : 'Contact & Head Office'}</a></li>
            </ul>
          </div>

          {/* Visa & Career Pathways */}
          <div>
            <h4 className="footer-col-title">{t.colBranches || (lang === 'si' ? 'වීසා සහ අධ්‍යාපන මාවත්' : lang === 'jp' ? 'ビザ・進路案内' : 'Visa & Career Pathways')}</h4>
            <ul className="footer-links">
              <li><a href="#student-visa" onClick={(e) => handleLinkClick(e, 'student-visa')}>{lang === 'si' ? 'ශිෂ්‍ය වීසා (ජන/අප්‍රේල්/ජූලි/ඔක්)' : lang === 'jp' ? '留学ビザ (1・4・7・10月期)' : 'Student Visa (Jan/Apr/Jul/Oct)'}</a></li>
              <li><a href="#job-visa" onClick={(e) => handleLinkClick(e, 'job-visa')}>{lang === 'si' ? 'SSW සාත්තු සේවා (Kaigo)' : lang === 'jp' ? '特定技能 介護 (Kaigo)' : 'SSW Caregiver (Kaigo)'}</a></li>
              <li><a href="#job-visa" onClick={(e) => handleLinkClick(e, 'job-visa')}>{lang === 'si' ? 'SSW ආහාර සැකසුම් ක්ෂේත්‍රය' : lang === 'jp' ? '特定技能 外食業' : 'SSW Food Service Industry'}</a></li>
              <li><a href="#job-visa" onClick={(e) => handleLinkClick(e, 'job-visa')}>{lang === 'si' ? 'SSW වාණිජ රියදුරු සහ ප්‍රවාහන' : lang === 'jp' ? '特定技能 自動車運送業' : 'SSW Automobile Transport & Truck'}</a></li>
              <li><a href="#job-visa" onClick={(e) => handleLinkClick(e, 'job-visa')}>{lang === 'si' ? 'SSW හෝටල් සහ සංචාරක සේවා' : lang === 'jp' ? '特定技能 宿泊業' : 'SSW Accommodation (Hotel)'}</a></li>
              <li><a href="#job-visa" onClick={(e) => handleLinkClick(e, 'job-visa')}>{lang === 'si' ? 'TITP කාර්මික පුහුණුව' : lang === 'jp' ? '技能実習制度 (TITP)' : 'TITP Technical Internship'}</a></li>
            </ul>
          </div>

          {/* Headquarters & Japan Presence */}
          <div>
            <h4 className="footer-col-title">{t.colContact || (lang === 'si' ? 'ප්‍රධාන කාර්යාලය සහ ජපන් ආයතනය' : lang === 'jp' ? '本部・日本現地拠点' : 'Headquarters & Japan Presence')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: '#0284c7', flexShrink: 0, marginTop: '3px' }} />
                <span><strong>{lang === 'si' ? 'කඩවත මූලස්ථානය:' : lang === 'jp' ? 'カダワタ本校:' : 'Kadawatha Campus:'}</strong> {officialContacts.headOfficeAddress}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '3px' }} />
                <span><strong>{lang === 'si' ? 'ජපානයේ ආයතනය:' : lang === 'jp' ? '日本支援法人:' : 'Japan Support Entity:'}</strong> {officialContacts.japanAddress}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} style={{ color: '#38bdf8', flexShrink: 0 }} />
                <span>{lang === 'si' ? 'ක්ෂණික ඇමතුම්:' : lang === 'jp' ? '総合窓口:' : 'Hotline:'} {officialContacts.hotline} / {officialContacts.mobile1}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} style={{ color: '#fbbf24', flexShrink: 0 }} />
                <span>{officialContacts.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={15} style={{ color: '#34d399', flexShrink: 0 }} />
                <span>{lang === 'si' ? 'සඳුදා - සෙන: පෙ.ව 8:30 - ප.ව 5:30 | ඉරිදා: පෙ.ව 8:30 - ප.ව 2:00' : lang === 'jp' ? '月〜土: 8:30 - 17:30 | 日: 8:30 - 14:00' : 'Mon-Sat: 8:30 AM - 5:30 PM | Sun: 8:30 AM - 2:00 PM'}</span>
              </div>
            </div>

            <button
              onClick={() => onOpenModal('General Admissions')}
              className="btn btn-primary"
              style={{ marginTop: '1.25rem', width: '100%', fontSize: '0.85rem' }}
            >
              {t.btnBookConsultation || (lang === 'si' ? 'උපදේශනයක් වෙන්කරගන්න' : lang === 'jp' ? '来校カウンセリング予約' : 'Book In-Person Consultation')}
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {officialContacts.companyName} ({officialContacts.kanjiName}). {lang === 'si' ? 'සියලුම හිමිකම් ඇවිරිණි.' : lang === 'jp' ? '無断転載を禁じます。' : 'All Rights Reserved.'}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span>{officialContacts.slbfeLicense}</span>
            <span>•</span>
            <span>{lang === 'si' ? 'සමාගම් ලියාපදිංචිය:' : lang === 'jp' ? '会社登記:' : 'Company Reg:'} {officialContacts.companyReg}</span>
            <span>•</span>
            <a
              href={officialContacts.socials.facebookGroup}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '3px' }}
            >
              <span>{lang === 'si' ? 'නිල ශිෂ්‍ය එකමුතුව' : lang === 'jp' ? '公式 学生コミュニティ' : 'Student Community Group'}</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
