import { useState, useEffect, useRef } from 'react';
import { Menu, X, GraduationCap, ExternalLink, Briefcase, Phone, BookOpen, Info, Home, Award, ChevronRight, ChevronDown } from 'lucide-react';
import { siteTranslations } from '../data/translations';
import { officialContacts } from '../data/websiteData';

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
  const dropdownRef = useRef(null);
  const dropdownTimerRef = useRef(null);

  const t = siteTranslations[lang] || siteTranslations.en;

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
        if (window.innerWidth > 1024) {
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

          <a 
            href={officialContacts.studentPortalUrl || "https://portal.atsukojapan.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn-student-login"
            title="Atsuko Student Portal Login"
            aria-label="Login as Student"
          >
            <GraduationCap size={15} className="student-login-cap" />
            <span>{t.nav?.studentLogin || 'Login as Student'}</span>
            <ExternalLink size={12} className="student-login-ext" />
          </a>

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
              <a 
                href={officialContacts.studentPortalUrl || "https://portal.atsukojapan.com"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-action-student-login"
                title="Atsuko Student Portal Login"
                aria-label="Login as Student"
              >
                <GraduationCap size={18} />
                <span>{t.nav?.studentLogin || 'Login as Student'}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
