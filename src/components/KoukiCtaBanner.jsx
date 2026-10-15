export default function KoukiCtaBanner({ onNavigate }) {
  return (
    <section className="cta-banner" id="apply">
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto' }}>
        <p
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 12,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          START YOUR APPLICATION
        </p>
        <h2 className="cta-title">
          Begin your journey from Sri Lanka to Japan today.
        </h2>
        <p className="cta-subtitle">
          Visit a branch, message us on WhatsApp, or enroll online — our team will guide you from there.
        </p>

        <div className="cta-buttons">
          <button
            className="btn-white"
            onClick={() => onNavigate && onNavigate('apply')}
          >
            Apply Now
          </button>
          <button
            className="btn-outline-white"
            onClick={() => onNavigate && onNavigate('contact')}
          >
            Talk to Us
          </button>
          <a
            href="https://wa.me/94769035117"
            target="_blank"
            rel="noreferrer"
            className="btn-green"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
