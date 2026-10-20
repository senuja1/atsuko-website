import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send, GraduationCap, Briefcase, Phone, BookOpen, Info, Home, Award, ChevronRight } from 'lucide-react';
import { siteTranslations } from '../data/translations';

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

  const t = siteTranslations[lang] || siteTranslations.en;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background body scrolling when mobile drawer is open & handle Escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
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

  const handleNavClick = (pageId) => {
    setMobileMenuOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
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
          {navPages.map((item) => (
            <button 
              key={item.id} 
              onClick={() => handleNavClick(item.id)}
              className={`nav-link-btn ${currentPage === item.id ? 'active' : ''}`}
            >
              <span>{item.label}</span>
            </button>
          ))}
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
                日本語
              </button>
            </div>
          )}

          <button 
            onClick={() => {
              if (currentPage !== 'home') {
                onNavigate('home');
                setTimeout(() => onScrollToEligibility(), 150);
              } else {
                onScrollToEligibility();
              }
            }} 
            className="nav-btn-secondary"
          >
            <Sparkles size={13} style={{ color: '#0284c7' }} />
            <span>{t.nav?.checkEligibility || 'Check Eligibility'}</span>
          </button>

          <button 
            onClick={() => onOpenModal('Fast Registration')} 
            className="nav-btn-primary"
          >
            <span>{t.nav?.applyNow || 'Apply Now'}</span>
            <Send size={12} />
          </button>

          <button 
            className="mobile-menu-btn" 
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
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (currentPage !== 'home') {
                    onNavigate('home');
                    setTimeout(() => onScrollToEligibility(), 150);
                  } else {
                    onScrollToEligibility();
                  }
                }}
                className="mobile-action-secondary" 
              >
                <Sparkles size={16} style={{ color: '#0284c7' }} />
                <span>{t.nav?.checkEligibility || 'Check Eligibility'}</span>
              </button>
              <button 
                onClick={() => { 
                  setMobileMenuOpen(false); 
                  onOpenModal('Mobile Registration'); 
                }}
                className="mobile-action-primary" 
              >
                <span>{t.nav?.applyNow || 'Apply Now'}</span>
                <Send size={15} />
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
