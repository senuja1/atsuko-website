import { MessageSquare, Phone } from 'lucide-react';
import { siteTranslations } from '../data/translations';

export default function FloatingActions({ lang }) {
  const t = siteTranslations[lang]?.floating || siteTranslations.en.floating;

  return (
    <div className="floating-actions">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/94778643352?text=Hello%20Atsuko%20International,%20I%20am%20interested%20in%20Japan%20Study%20and%20Work%20opportunities."
        target="_blank"
        rel="noreferrer"
        className="floating-btn whatsapp"
        title={t.whatsappTooltip}
        aria-label="WhatsApp Contact"
      >
        <MessageSquare size={26} />
      </a>

      {/* Call Hotline */}
      <a
        href="tel:0726160160"
        className="floating-btn phone"
        title={t.phoneTooltip}
        aria-label="Call Hotline"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
