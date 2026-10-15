const LogoSVG = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19" stroke="#c8102e" strokeWidth="1.5" fill="white"/>
    <ellipse cx="20" cy="20" rx="12" ry="8" stroke="#c8102e" strokeWidth="1.2" fill="none"/>
    <path d="M20 8 L20 32" stroke="#c8102e" strokeWidth="1.2"/>
    <path d="M8 20 L32 20" stroke="#c8102e" strokeWidth="1.2"/>
    <circle cx="20" cy="20" r="3" fill="#c8102e"/>
  </svg>
);

export default function KoukiFooter({ onNavigate }) {
  const handleNav = (page, e) => {
    if (e) e.preventDefault();
    if (onNavigate) onNavigate(page);
  };

  return (
    <footer className="kouki-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <div className="footer-brand-icon">
              <LogoSVG />
            </div>
            <div className="footer-brand-name">
              <span>Kouki</span> International
            </div>
          </div>
          <p className="footer-about">
            One of Sri Lanka's leading Japanese language institutions since 2020 — guiding students
            from the first hiragana to the departure gate.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <a
              href="https://www.facebook.com/share/1BwDdYozhP/"
              target="_blank"
              rel="noreferrer"
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                fontSize: 16,
              }}
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://www.tiktok.com/@japanese.with.ema"
              target="_blank"
              rel="noreferrer"
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                fontSize: 16,
              }}
              aria-label="TikTok"
            >
              ♪
            </a>
            <a
              href="https://wa.me/94769035117"
              target="_blank"
              rel="noreferrer"
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                fontSize: 16,
              }}
              aria-label="WhatsApp"
            >
              💬
            </a>
          </div>
        </div>

        <div>
          <h4 className="footer-col-title">Explore</h4>
          <ul className="footer-links">
            <li><a href="#courses" onClick={(e) => handleNav('courses', e)}>Courses</a></li>
            <li><a href="#visa" onClick={(e) => handleNav('visa', e)}>Study in Japan</a></li>
            <li><a href="#branches" onClick={(e) => handleNav('branches', e)}>Branches</a></li>
            <li><a href="#english" onClick={(e) => handleNav('english', e)}>English Academy</a></li>
            <li><a href="#visas" onClick={(e) => handleNav('visas', e)}>Student Stories</a></li>
            <li><a href="#why" onClick={(e) => handleNav('about', e)}>About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">Students</h4>
          <ul className="footer-links">
            <li><a href="#resources" onClick={(e) => handleNav('resources', e)}>Past Papers (JLPT & NAT)</a></li>
            <li><a href="#resources" onClick={(e) => handleNav('resources', e)}>Listening Practice</a></li>
            <li><a href="#faq" onClick={(e) => handleNav('faq', e)}>FAQ & Help Desk</a></li>
            <li><a href="#apply" onClick={(e) => handleNav('apply', e)}>Enroll Now</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">Contact</h4>
          <div className="footer-contact-item">
            <a href="mailto:koukiinternational@gmail.com">koukiinternational@gmail.com</a>
          </div>
          <div className="footer-contact-item">
            <a href="tel:+94769035117">(+94) 76 903 5117</a>
          </div>
          <div className="footer-contact-item">
            <a href="tel:+94742277882">(+94) 74 227 7882</a>
          </div>
          <div className="footer-contact-item" style={{ marginTop: 8 }}>
            <a
              href="https://wa.me/94769035117"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#22c55e', fontWeight: 600 }}
            >
              Chat on WhatsApp →
            </a>
          </div>
          <div style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
            Yakkala · Polonnaruwa · Alawwa Residential Campus
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontFamily: 'var(--font-jp)', color: 'var(--red)', fontSize: 16 }}>
            光輝インターナショナル
          </span>
          <span className="footer-copy">
            © 2026 Kouki International Japanese Language School. All rights reserved.
          </span>
        </div>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
