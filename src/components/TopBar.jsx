import React from 'react';
import { MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';
import { officialContacts } from '../data/websiteData';
import { FacebookIcon, InstagramIcon, YoutubeIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';

export default function TopBar({ lang = 'en', onNavigate }) {
  const isSi = lang === 'si';
  const isJp = lang === 'jp';

  const t = {
    followUs: isSi ? 'අප අනුගමනය කරන්න :' : isJp ? '公式SNS :' : 'Follow Us :',
    address: isSi 
      ? '191/3/1, සිරිමාවෝ බණ්ඩාරනායක මාවත, මහර, කඩවත, ශ්‍රී ලංකාව'
      : isJp
      ? '191/3/1, Sirimavo Bandaranaike Mw, Mahara, Kadawatha, Sri Lanka'
      : '191/3/1, Sirimavo Bandaranaike Mw, Mahara, Kadawatha, Sri Lanka',
    licBadge: isSi ? 'SLBFE බලපත්‍ර #3293' : isJp ? 'SLBFE認可 #3293' : 'SLBFE Lic. #3293'
  };

  const handleAddressClick = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="gentleman-topbar" role="region" aria-label="Official Contact and Social Bar">
      <div className="container gentleman-topbar-inner">
        {/* Left Side: Follow Us & Social Icons */}
        <div className="gentleman-topbar-left">
          <span className="gentleman-follow-label">{t.followUs}</span>
          <div className="gentleman-social-icons">
            <a
              href={officialContacts.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="gentleman-social-link"
              title="Official Facebook Page"
              aria-label="Facebook"
            >
              <FacebookIcon size={14} />
            </a>
            <a
              href={officialContacts.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="gentleman-social-link"
              title="Official Instagram (@atsuko_gakkou)"
              aria-label="Instagram"
            >
              <InstagramIcon size={14} />
            </a>
            <a
              href={officialContacts.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="gentleman-social-link"
              title="Official YouTube Channel"
              aria-label="YouTube"
            >
              <YoutubeIcon size={14} />
            </a>
            <a
              href={officialContacts.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="gentleman-social-link"
              title="Official TikTok"
              aria-label="TikTok"
            >
              <TikTokIcon size={14} />
            </a>
            <a
              href={officialContacts.socials.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="gentleman-social-link"
              title="WhatsApp Channel"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={14} />
            </a>
          </div>
        </div>

        {/* Right Side: Address | Email | Phone | License */}
        <div className="gentleman-topbar-right">
          {/* Head Office Address */}
          <a 
            href="#contact-section" 
            onClick={handleAddressClick}
            className="gentleman-info-item gentleman-address"
            title="View Campus Location"
          >
            <MapPin size={13} className="gentleman-icon" />
            <span className="gentleman-info-text">{t.address}</span>
          </a>

          <span className="gentleman-divider" aria-hidden="true">|</span>

          {/* Email */}
          <a 
            href={`mailto:${officialContacts.email}`}
            className="gentleman-info-item gentleman-email"
            title="Send Email to Atsuko International"
          >
            <Mail size={13} className="gentleman-icon" />
            <span className="gentleman-info-text">{officialContacts.email}</span>
          </a>

          <span className="gentleman-divider" aria-hidden="true">|</span>

          {/* Phone Hotline */}
          <a 
            href="tel:+94777933352"
            className="gentleman-info-item gentleman-phone"
            title="Call Registrations Hotline"
          >
            <Phone size={13} className="gentleman-icon" />
            <span className="gentleman-info-text">{officialContacts.whatsapp1}</span>
          </a>

          <span className="gentleman-divider" aria-hidden="true">|</span>

          {/* Government License Badge */}
          <div className="gentleman-info-item gentleman-lic" title="Government Registered Agency">
            <ShieldCheck size={13} className="gentleman-icon gold" />
            <span className="gentleman-info-text highlight">{t.licBadge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
