import { useState } from 'react';

export default function KoukiFloating({ onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Apply Now Button */}
      <button
        className="floating-apply"
        onClick={() => onNavigate && onNavigate('apply')}
        aria-label="Apply Now"
      >
        <span>Apply Now</span>
        <span>→</span>
      </button>

      {/* Floating Action Menu (when open) */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 92,
            right: 30,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            zIndex: 999,
          }}
        >
          <a
            href="https://wa.me/94769035117"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: '#25D366',
              color: 'white',
              padding: '10px 18px',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              fontSize: 13.5,
              fontWeight: 600,
              boxShadow: '0 4px 14px rgba(37,211,102,0.4)',
              transition: 'var(--transition)',
            }}
          >
            <span>💬</span>
            <span>WhatsApp Us</span>
          </a>
          <a
            href="tel:+94769035117"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: '#1e293b',
              color: 'white',
              padding: '10px 18px',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              fontSize: 13.5,
              fontWeight: 600,
              boxShadow: '0 4px 14px rgba(30,41,59,0.4)',
              transition: 'var(--transition)',
            }}
          >
            <span>📞</span>
            <span>Call: 076 903 5117</span>
          </a>
        </div>
      )}

      {/* Floating Chat / Contact Toggle Button */}
      <button
        className="floating-chat"
        onClick={() => setOpen(!open)}
        aria-label="Contact options"
      >
        {open ? '✕' : '💬'}
      </button>
    </>
  );
}
