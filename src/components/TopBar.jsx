import { ShieldCheck, Phone, MessageSquare, Globe } from 'lucide-react';
import { siteTranslations } from '../data/translations';

export default function TopBar({ lang, setLang }) {
  const t = siteTranslations[lang] || siteTranslations.en;

  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <span className="license-badge">
            <ShieldCheck size={14} />
            SLBFE Lic. 3293 • PV 0217143
          </span>
          <span className="top-bar-subtitle">
            ★ Official Gateway: www.atsukojapan.com | Kadawatha & Komaki (Japan)
          </span>
        </div>

        <div className="top-bar-right">
          <a href="tel:0726160160" className="top-contact-link">
            <Phone size={13} style={{ color: '#ef4444' }} />
            <span>072 616 0160</span>
          </a>

          <a 
            href="https://wa.me/94778643352?text=Hello%20Atsuko%20International,%20I%20would%20like%20information%20regarding%20studying%20and%20working%20in%20Japan." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="top-contact-link"
          >
            <MessageSquare size={13} style={{ color: '#22c55e' }} />
            <span>+94 77 864 3352</span>
          </a>

          {/* Multi-language Selector */}
          <div className="lang-selector">
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              title="English"
            >
              EN
            </button>
            <button 
              className={`lang-btn ${lang === 'si' ? 'active' : ''}`}
              onClick={() => setLang('si')}
              title="සිංහල (Sinhala)"
            >
              සිං
            </button>
            <button 
              className={`lang-btn ${lang === 'jp' ? 'active' : ''}`}
              onClick={() => setLang('jp')}
              title="日本語 (Japanese)"
            >
              日本語
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
