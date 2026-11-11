import { useEffect } from 'react';

export default function PortalUnderConstructionPage({ lang = 'en', onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && onNavigate) {
        onNavigate('home');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNavigate]);

  const subText = lang === 'si' 
    ? 'අපගේ නවතම LMS පද්ධතිය සමඟින් ළඟදීම ඔබ හමුවන්නෙමු' 
    : lang === 'jp' 
    ? '最新のLMSシステムと共に、近日中に公開いたします' 
    : null;

  return (
    <div 
      className="portal-fullscreen-only-image"
      onClick={() => onNavigate && onNavigate('home')}
      title="Click to return to main website"
      role="region"
      aria-label="Under Construction"
    >
      <div className="portal-content-box">
        <img 
          src="/images/under-construction.png" 
          alt="Under Construction" 
          className="portal-only-img"
          loading="eager"
        />
        <p className="portal-under-text">
          We will be here soon with our newly released LMS
        </p>
        {subText && (
          <p className="portal-under-subtext">
            {subText}
          </p>
        )}
      </div>
    </div>
  );
}
