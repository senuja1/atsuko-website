import { useState, useEffect, useRef } from 'react';
import { Menu, X, GraduationCap, ExternalLink, Briefcase, Phone, BookOpen, Info, Home, Award, ChevronRight, ChevronDown, Construction, HardHat, Sparkles, FileText, CreditCard, MessageCircle } from 'lucide-react';
import { siteTranslations } from '../data/translations';
import { officialContacts } from '../data/websiteData';

const portalModalCopy = {
  en: {
    badge: 'Under Active Construction • Coming Soon',
    title: 'Atsuko Student Portal (LMS)',
    subtitle: 'Our centralized Student Management & E-Learning Portal is currently being engineered to deliver a seamless online learning experience.',
    featuresTitle: 'Upcoming Portal Capabilities:',
    feature1Title: 'Interactive E-Learning & Materials',
    feature1Desc: 'JLPT / JFT course notes, downloadable past exam papers, vocabulary drills, and lecture archives.',
    feature2Title: 'Live COE & Visa Status Tracker',
    feature2Desc: 'Direct status visibility for Japanese immigration Certificate of Eligibility (COE) and visa endorsements.',
    feature3Title: 'Digital Payments & Academic Records',
    feature3Desc: 'Attendance tracking, mock exam mark sheets, and official digital fee payment receipts.',
    notice: 'Are you currently an enrolled Atsuko student requiring immediate assistance, batch schedules, or course materials?',
    btnWhatsapp: 'Chat with Student Coordinator on WhatsApp',
    btnCall: 'Call Office Hotline',
    btnClose: 'Close / Understood',
  },
  si: {
    badge: 'සංවර්ධනය වෙමින් පවතී • Under Construction',
    title: 'අත්සුකෝ ශිෂ්‍ය ද්වාරය (Student Portal)',
    subtitle: 'අපගේ නවතම ශිෂ්‍ය කළමනාකරණ හා මාර්ගගත අධ්‍යයන පද්ධතිය (LMS) මේ වන විට නිර්මාණය වෙමින් පවතී.',
    featuresTitle: 'ළඟදීම ලැබෙන පහසුකම්:',
    feature1Title: 'මාර්ගගත පාඩම් සහ විභාග අභ්‍යාස',
    feature1Desc: 'JLPT / JFT විභාග පසුගිය ප්‍රශ්න පත්‍ර, වචන මාලා (Vocabulary), සහ පාඩම් සටහන් ලබාගැනීම.',
    feature2Title: 'COE සහ වීසා තත්ත්වය විමසීම',
    feature2Desc: 'ජපාන ආගමන විගමන අනුමැතිය (COE) සහ වීසා ප්‍රගතිය සජීවීව බලාගැනීමේ හැකියාව.',
    feature3Title: 'පන්ති පැමිණීම හා ගෙවීම් වාර්තා',
    feature3Desc: 'ඩිජිටල් ගෙවීම් රිසිට්පත්, පැමිණීමේ ප්‍රතිශත සහ ආදර්ශ විභාග ලකුණු පරීක්ෂා කිරීම.',
    notice: 'ඔබ දැනට අත්සුකෝ ආයතනයේ ලියාපදිංචි ශිෂ්‍යයෙක් නම් සහ පාඨමාලා සටහන් හෝ විස්තර අවශ්‍ය නම්, කාර්යාලය අමතන්න:',
    btnWhatsapp: 'WhatsApp ඔස්සේ ශිෂ්‍ය සම්බන්ධීකාරක අමතන්න',
    btnCall: 'කාර්යාල දුරකථන අංකය',
    btnClose: 'වසන්න (Close)',
  },
  jp: {
    badge: 'システム構築中 • Under Construction',
    title: 'Atsuko 学生専用ポータル（LMS）',
    subtitle: '受講生・求職者向けの統合学習管理システムおよびCOE進捗確認ポータルは現在開発中です。',
    featuresTitle: '近日公開予定の主要機能:',
    feature1Title: 'オンライン学習＆教材アーカイブ',
    feature1Desc: 'JLPT / JFT 過去問題集、語彙ドリル、授業レクチャーノートのダウンロード機能。',
    feature2Title: '在留資格認定証明書（COE）リアルタイム進捗',
    feature2Desc: '出入国在留管理庁の審査進捗状況、査証発給、出国スケジュールの確認。',
    feature3Title: '出席率・模擬試験結果・電子領収書',
    feature3Desc: '出席管理、定期テスト・模擬試験の成績表、受講料領収書のデジタル管理。',
    notice: '現在受講中の生徒の皆様で教材やスケジュールについてのご相談は、事務局まで直接お問い合わせください:',
    btnWhatsapp: 'WhatsAppで問い合わせる',
    btnCall: 'オフィス直通電話',
    btnClose: '閉じる',
  }
};

export default function Navbar({ 
  lang, 
  setLang,
  currentPage = 'home', 
  onNavigate, 
  onOpenModal, 
  onScrollToEligibility 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visaDropdownOpen, setVisaDropdownOpen] = useState(false);
  const [mobileVisaExpanded, setMobileVisaExpanded] = useState(false);
  const [showConstructionModal, setShowConstructionModal] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTimerRef = useRef(null);

  const t = siteTranslations[lang] || siteTranslations.en;
  const portalCopy = portalModalCopy[lang] || portalModalCopy.en;

  // Lock body scroll and handle Escape for construction modal
  useEffect(() => {
    if (showConstructionModal) {
      const origOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setShowConstructionModal(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = origOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [showConstructionModal]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setVisaDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Handle Escape key & auto-close on large screen resize
  useEffect(() => {
    if (mobileMenuOpen) {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };

      const handleResize = () => {
        if (window.innerWidth > 1040) {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [mobileMenuOpen]);

  const navPages = [
    { id: 'home', label: lang === 'si' ? 'මුල් පිටුව' : lang === 'jp' ? 'ホーム' : 'Home', icon: Home },
    { id: 'about', label: lang === 'si' ? 'අප ගැන' : lang === 'jp' ? '会社概要' : 'About Us', icon: Info },
    { id: 'courses', label: lang === 'si' ? 'පාඨමාලා සහ පුහුණුව' : lang === 'jp' ? '講座・研修' : 'Courses & Training', icon: BookOpen },
    { id: 'visa', label: lang === 'si' ? 'වීසා සේවා' : lang === 'jp' ? 'ビザ支援' : 'Visa Services', icon: Briefcase },
    { id: 'stories', label: lang === 'si' ? 'ජයග්‍රාහී කතා' : lang === 'jp' ? '渡航実績' : 'Success Stories', icon: Award },
    { id: 'contact', label: lang === 'si' ? 'අප අමතන්න' : lang === 'jp' ? 'お問い合わせ' : 'Contact Us', icon: Phone },
  ];

  const handleNavClick = (pageId, subTab) => {
    setVisaDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(pageId, subTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnterVisa = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setVisaDropdownOpen(true);
  };

  const handleMouseLeaveVisa = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setVisaDropdownOpen(false);
    }, 180);
  };

  const handleLogoClick = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    setVisaDropdownOpen(false);
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${mobileMenuOpen ? 'navbar-menu-open' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand */}
        <div 
          onClick={handleLogoClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleLogoClick(e);
          }}
          className="brand-wrapper" 
          role="button"
          tabIndex={0}
          aria-label="Atsuko International - Go to Home Page"
        >
          <img 
            src="/images/atsuko-official-logo.png" 
            alt="Atsuko International Logo" 
            className="brand-logo-img" 
            width="36"
            height="36"
            loading="eager"
            decoding="async"
          />
          <div className="brand-text-col">
            <div className="brand-title-row">
              <span className="brand-english">ATSUKO <span className="brand-crimson">INTERNATIONAL</span></span>
              <span className="brand-kanji-pill">篤子 学校</span>
            </div>
            <span className="brand-sub">{t.brandSub}</span>
          </div>
        </div>

        {/* Desktop Primary Nav Links (Apple Clean Typography) */}
        <nav className="nav-links" aria-label="Primary Navigation">
          {navPages.map((item) => {
            if (item.id === 'visa') {
              return (
                <div 
                  key={item.id}
                  ref={dropdownRef}
                  className="nav-dropdown-wrapper"
                  onMouseEnter={handleMouseEnterVisa}
                  onMouseLeave={handleMouseLeaveVisa}
                >
                  <button 
                    type="button"
                    onClick={() => setVisaDropdownOpen(prev => !prev)}
                    className={`nav-link-btn nav-dropdown-trigger ${['visa', 'student-visa', 'job-visa'].includes(currentPage) ? 'active' : ''} ${visaDropdownOpen ? 'dropdown-open' : ''}`}
                    aria-expanded={visaDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={13} className={`nav-dropdown-caret ${visaDropdownOpen ? 'open' : ''}`} />
                  </button>

                  {/* Pop-down Menu */}
                  {visaDropdownOpen && (
                    <div className="nav-dropdown-menu" role="menu">
                      <div className="nav-dropdown-header">
                        <span className="nav-dropdown-eyebrow">
                          {lang === 'si' ? 'ජපාන වීසා කාණ්ඩ' : lang === 'jp' ? 'ビザカテゴリー' : 'OFFICIAL VISA CATEGORIES'}
                        </span>
                      </div>

                      {/* Option 1: Student Visa */}
                      <button
                        type="button"
                        className={`nav-dropdown-item ${currentPage === 'student-visa' ? 'current-item' : ''}`}
                        onClick={() => handleNavClick('student-visa')}
                        role="menuitem"
                      >
                        <div className="nav-dropdown-icon-box student">
                          <GraduationCap size={18} />
                        </div>
                        <div className="nav-dropdown-item-content">
                          <div className="nav-dropdown-item-title">
                            <span>{lang === 'si' ? 'ශිෂ්‍ය වීසා' : lang === 'jp' ? '留学ビザ' : 'Student Visa'}</span>
                            <span className="nav-badge-pill pill-blue">Study</span>
                          </div>
                          <span className="nav-dropdown-item-desc">
                            {lang === 'si' ? 'භාෂා පාසල් සහ විශ්වවිද්‍යාල අධ්‍යාපනය' : lang === 'jp' ? '法務省告示日本語教育機関・大学進学' : 'Japanese Language School & Higher Education'}
                          </span>
                        </div>
                      </button>

                      <div className="nav-dropdown-divider" />

                      {/* Option 2: Job Visa */}
                      <button
                        type="button"
                        className={`nav-dropdown-item ${currentPage === 'job-visa' ? 'current-item' : ''}`}
                        onClick={() => handleNavClick('job-visa')}
                        role="menuitem"
                      >
                        <div className="nav-dropdown-icon-box job">
                          <Briefcase size={18} />
                        </div>
                        <div className="nav-dropdown-item-content">
                          <div className="nav-dropdown-item-title">
                            <span>{lang === 'si' ? 'රැකියා වීසා' : lang === 'jp' ? '就労・特定技能' : 'Job Visa'}</span>
                            <span className="nav-badge-pill pill-emerald">Work</span>
                          </div>
                          <span className="nav-dropdown-item-desc">
                            {lang === 'si' ? 'SSW නිශ්චිත නිපුණතා සහ සෘජු රැකියා' : lang === 'jp' ? '特定技能1号・就労ビザ・企業配属' : 'SSW Specified Skilled Worker & Employment'}
                          </span>
                        </div>
                      </button>

                      <div className="nav-dropdown-footer">
                        <button
                          type="button"
                          className="nav-dropdown-footer-link"
                          onClick={() => handleNavClick('student-visa')}
                        >
                          <span>{lang === 'si' ? 'සියලුම වීසා සේවා බලන්න' : lang === 'jp' ? 'ビザ支援の総合案内' : 'Explore All Visa Services & Intakes'}</span>
                          <ChevronRight size={13} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)}
                className={`nav-link-btn ${currentPage === item.id ? 'active' : ''}`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions (Apple Style) */}
        <div className="nav-actions">
          {/* Apple Segmented Language Switcher (Visible on desktop & tablet) */}
          {setLang && (
            <div className="apple-lang-control" role="group" aria-label="Select language">
              <button 
                type="button"
                className={`apple-lang-pill ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
                title="English"
              >
                EN
              </button>
              <button 
                type="button"
                className={`apple-lang-pill ${lang === 'si' ? 'active' : ''}`}
                onClick={() => setLang('si')}
                title="සිංහල (Sinhala)"
              >
                සිං
              </button>
              <button 
                type="button"
                className={`apple-lang-pill ${lang === 'jp' ? 'active' : ''}`}
                onClick={() => setLang('jp')}
                title="日本語 (Japanese)"
              >
                <span className="lang-label-desktop">日本語</span>
                <span className="lang-label-mobile">JA</span>
              </button>
            </div>
          )}

          <button 
            type="button"
            onClick={() => setShowConstructionModal(true)}
            className="nav-btn-student-login"
            title="Atsuko Student Portal Login (Under Construction)"
            aria-label="Login as Student"
          >
            <GraduationCap size={15} className="student-login-cap" />
            <span>{t.nav?.studentLogin || 'Login as Student'}</span>
            <ExternalLink size={12} className="student-login-ext" />
          </button>

          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div 
            className="mobile-menu-backdrop" 
            onClick={() => setMobileMenuOpen(false)}
            onTouchMove={(e) => {
              if (e.cancelable) e.preventDefault();
            }}
            aria-hidden="true"
          />
          <div 
            id="mobile-navigation-drawer"
            className="mobile-menu-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Mobile Drawer Language Bar */}
            {setLang && (
              <div className="mobile-drawer-lang-row">
                <div className="apple-lang-control" role="group" aria-label="Select language">
                  <button 
                    type="button"
                    className={`apple-lang-pill ${lang === 'en' ? 'active' : ''}`}
                    onClick={() => setLang('en')}
                  >
                    English
                  </button>
                  <button 
                    type="button"
                    className={`apple-lang-pill ${lang === 'si' ? 'active' : ''}`}
                    onClick={() => setLang('si')}
                  >
                    සිංහල
                  </button>
                  <button 
                    type="button"
                    className={`apple-lang-pill ${lang === 'jp' ? 'active' : ''}`}
                    onClick={() => setLang('jp')}
                  >
                    日本語
                  </button>
                </div>
              </div>
            )}

            <div className="mobile-nav-items">
              {navPages.map((item) => {
                const Icon = item.icon;
                if (item.id === 'visa') {
                  return (
                    <div key={item.id} className="mobile-nav-group">
                      <button 
                        type="button"
                        onClick={() => setMobileVisaExpanded(!mobileVisaExpanded)}
                        className={`mobile-nav-link ${['visa', 'student-visa', 'job-visa'].includes(currentPage) ? 'active' : ''}`}
                        aria-expanded={mobileVisaExpanded}
                      >
                        <div className="mobile-nav-left">
                          <div className="mobile-nav-icon-box">
                            <Icon size={17} />
                          </div>
                          <span className="mobile-nav-label">{item.label}</span>
                        </div>
                        <ChevronDown 
                          size={16} 
                          className="mobile-nav-chevron"
                          style={{
                            transform: mobileVisaExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease'
                          }}
                        />
                      </button>

                      {mobileVisaExpanded && (
                        <div className="mobile-nav-sub-menu">
                          <button
                            type="button"
                            onClick={() => handleNavClick('student-visa')}
                            className={`mobile-nav-sub-item ${currentPage === 'student-visa' ? 'current-sub-item' : ''}`}
                          >
                            <div className="mobile-sub-icon student">
                              <GraduationCap size={15} />
                            </div>
                            <div className="mobile-sub-content">
                              <strong>{lang === 'si' ? 'ශිෂ්‍ය වීසා' : lang === 'jp' ? '留学ビザ' : 'Student Visa'}</strong>
                              <span>{lang === 'si' ? 'භාෂා පාසල් සහ විශ්වවිද්‍යාල' : lang === 'jp' ? '語学学校・大学進学' : 'Language School & University'}</span>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleNavClick('job-visa')}
                            className={`mobile-nav-sub-item ${currentPage === 'job-visa' ? 'current-sub-item' : ''}`}
                          >
                            <div className="mobile-sub-icon job">
                              <Briefcase size={15} />
                            </div>
                            <div className="mobile-sub-content">
                              <strong>{lang === 'si' ? 'රැකියා වීසා' : lang === 'jp' ? '就労・特定技能' : 'Job Visa'}</strong>
                              <span>{lang === 'si' ? 'SSW සහ නිල රැකියා අවස්ථා' : lang === 'jp' ? '特定技能・就労支援' : 'SSW & Work Opportunities'}</span>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleNavClick('student-visa')}
                            className="mobile-nav-sub-item all"
                          >
                            <span>{lang === 'si' ? 'සියලුම වීසා සේවා බලන්න →' : lang === 'jp' ? 'すべてのビザ支援を見る →' : 'Explore All Visa Services →'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button 
                    key={item.id} 
                    onClick={() => handleNavClick(item.id)}
                    className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
                  >
                    <div className="mobile-nav-left">
                      <div className="mobile-nav-icon-box">
                        <Icon size={17} />
                      </div>
                      <span className="mobile-nav-label">{item.label}</span>
                    </div>
                    <ChevronRight size={16} className="mobile-nav-chevron" />
                  </button>
                );
              })}
            </div>

            <div className="mobile-menu-actions">
              <button 
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowConstructionModal(true);
                }}
                className="mobile-action-student-login"
                title="Atsuko Student Portal Login (Under Construction)"
                aria-label="Login as Student"
              >
                <GraduationCap size={18} />
                <span>{t.nav?.studentLogin || 'Login as Student'}</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </>
      )}

      {/* Student Portal Under Construction Modal */}
      {showConstructionModal && (
        <div 
          className="portal-construction-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowConstructionModal(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="portal-modal-title"
        >
          <div className="portal-construction-card">
            {/* Ambient accent stripe */}
            <div className="portal-construction-accent-bar" />

            {/* Close Button */}
            <button 
              type="button" 
              className="portal-construction-close"
              onClick={() => setShowConstructionModal(false)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Status Badge */}
            <div className="portal-construction-badge">
              <span className="portal-construction-pulse" />
              <Construction size={13} />
              <span>{portalCopy.badge}</span>
            </div>

            {/* Hero Icon Ring */}
            <div className="portal-construction-icon-wrap">
              <div className="portal-construction-icon-ring">
                <GraduationCap size={32} className="portal-icon-cap" />
                <div className="portal-construction-sub-badge" title="Under Construction">
                  <HardHat size={14} />
                </div>
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3 id="portal-modal-title" className="portal-construction-title">
              {portalCopy.title}
            </h3>
            <p className="portal-construction-sub">
              {portalCopy.subtitle}
            </p>

            {/* Upcoming Features Box */}
            <div className="portal-construction-preview-box">
              <div className="portal-preview-heading">
                <Sparkles size={14} className="portal-sparkle-icon" />
                <span>{portalCopy.featuresTitle}</span>
              </div>
              <div className="portal-features-list">
                <div className="portal-feature-item">
                  <div className="portal-feature-icon">
                    <BookOpen size={16} />
                  </div>
                  <div className="portal-feature-text">
                    <strong>{portalCopy.feature1Title}</strong>
                    <p>{portalCopy.feature1Desc}</p>
                  </div>
                </div>

                <div className="portal-feature-item">
                  <div className="portal-feature-icon">
                    <FileText size={16} />
                  </div>
                  <div className="portal-feature-text">
                    <strong>{portalCopy.feature2Title}</strong>
                    <p>{portalCopy.feature2Desc}</p>
                  </div>
                </div>

                <div className="portal-feature-item">
                  <div className="portal-feature-icon">
                    <CreditCard size={16} />
                  </div>
                  <div className="portal-feature-text">
                    <strong>{portalCopy.feature3Title}</strong>
                    <p>{portalCopy.feature3Desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notice for enrolled students */}
            <div className="portal-construction-notice">
              <p>{portalCopy.notice}</p>
            </div>

            {/* Action Buttons */}
            <div className="portal-construction-actions">
              <a 
                href="https://wa.me/94777933352?text=Hello%20Atsuko%20International,%20I%20am%20an%20enrolled%20student%20inquiring%20about%20classes%20and%20the%20student%20portal."
                target="_blank"
                rel="noopener noreferrer"
                className="portal-btn-whatsapp"
              >
                <MessageCircle size={17} />
                <span>{portalCopy.btnWhatsapp}</span>
              </a>

              <a 
                href="tel:+94777933352"
                className="portal-btn-phone"
              >
                <Phone size={15} />
                <span>{portalCopy.btnCall}: 077 793 3352</span>
              </a>

              <button 
                type="button" 
                className="portal-btn-dismiss"
                onClick={() => setShowConstructionModal(false)}
              >
                {portalCopy.btnClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
