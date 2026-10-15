import { useState, useEffect } from 'react';

const LogoSVG = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19" stroke="#c8102e" strokeWidth="1.5" fill="white"/>
    <ellipse cx="20" cy="20" rx="12" ry="8" stroke="#c8102e" strokeWidth="1.2" fill="none"/>
    <path d="M20 8 L20 32" stroke="#c8102e" strokeWidth="1.2"/>
    <path d="M8 20 L32 20" stroke="#c8102e" strokeWidth="1.2"/>
    <circle cx="20" cy="20" r="3" fill="#c8102e"/>
  </svg>
);

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Student Visa', id: 'visa' },
  { label: 'Courses', id: 'courses' },
  { label: 'Branches', id: 'branches' },
  { label: 'English Academy', id: 'english' },
  { label: 'Contact', id: 'contact' },
];

export default function KoukiNavbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('EN');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`kouki-navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
            <div className="navbar-logo-icon">
              <LogoSVG />
            </div>
            <span className="navbar-logo-text"><span>Kouki</span> International School</span>
          </a>

          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={currentPage === link.id ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); onNavigate(link.id); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#apply"
                className="navbar-cta"
                onClick={(e) => { e.preventDefault(); onNavigate('apply'); }}
              >
                Student Login
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Language Switcher */}
      <div className="lang-switcher">
        {['EN', 'සිං', '日本語'].map((l) => (
          <button
            key={l}
            className={`lang-btn${lang === l ? ' active' : ''}`}
            onClick={() => setLang(l)}
            aria-label={`Switch to ${l}`}
          >
            {l}
          </button>
        ))}
      </div>
    </>
  );
}
