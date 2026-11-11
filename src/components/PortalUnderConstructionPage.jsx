import { useEffect } from 'react';

export default function PortalUnderConstructionPage({ onNavigate }) {
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

  return (
    <div 
      className="portal-fullscreen-only-image"
      onClick={() => onNavigate && onNavigate('home')}
      title="Click to return to main website"
      role="region"
      aria-label="Under Construction"
    >
      <img 
        src="/images/under-construction.png" 
        alt="Under Construction" 
        className="portal-only-img"
        loading="eager"
      />
    </div>
  );
}
