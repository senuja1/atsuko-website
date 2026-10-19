import { useState, useEffect, useRef } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { siteTranslations } from '../data/translations';

export default function FloatingActions({ lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const t = siteTranslations[lang]?.floating || siteTranslations.en.floating;

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`floating-actions-container ${isOpen ? 'is-open' : ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Pop-out Options Menu */}
      <div
        className="floating-options-menu"
        role="menu"
        aria-hidden={!isOpen}
      >
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/94778643352?text=Hello%20Atsuko%20International,%20I%20am%20interested%20in%20Japan%20Study%20and%20Work%20opportunities."
          target="_blank"
          rel="noreferrer"
          className="floating-option-btn whatsapp"
          title={t.whatsappTooltip}
          aria-label="WhatsApp Contact"
          tabIndex={isOpen ? 0 : -1}
          onClick={() => setIsOpen(false)}
        >
          <span className="floating-option-label">{t.whatsappLabel || 'WhatsApp'}</span>
          <span className="floating-option-icon">
            <MessageSquare size={22} />
          </span>
        </a>

        {/* Hotline Call Button */}
        <a
          href="tel:0726160160"
          className="floating-option-btn phone"
          title={t.phoneTooltip}
          aria-label="Call Hotline"
          tabIndex={isOpen ? 0 : -1}
          onClick={() => setIsOpen(false)}
        >
          <span className="floating-option-label">{t.phoneLabel || 'Call Hotline'}</span>
          <span className="floating-option-icon">
            <Phone size={20} />
          </span>
        </a>
      </div>

      {/* Primary Launcher Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="floating-launcher-btn"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        title={isOpen ? "Close contact options" : "Contact Atsuko International"}
      >
        {/* Subtle pulsating beacon ring when closed to invite attention */}
        {!isOpen && <span className="floating-pulse-ring" aria-hidden="true" />}

        <span className="floating-launcher-icon">
          {isOpen ? <X size={24} /> : <MessageSquare size={26} />}
        </span>
      </button>
    </div>
  );
}
