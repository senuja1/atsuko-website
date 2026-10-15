// Entry Screen - Like the Kouki "入る · CLICK TO ENTER" splash screen
export default function KoukiEntryScreen({ entered, onEnter }) {
  return (
    <div
      className={`entry-screen${entered ? ' hidden' : ''}`}
      onClick={onEnter}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onEnter()}
      aria-label="Click to enter Kouki International"
    >
      <div className="entry-grid" />
      <div className="entry-crosshair" />

      <div className="entry-circle">
        <div className="entry-kanji">光輝</div>
        <div className="entry-name">KOUKI</div>
        <div className="entry-name" style={{ fontSize: '11px', letterSpacing: '5px', marginTop: '-2px' }}>
          INTERNATIONAL
        </div>
      </div>

      <div className="entry-divider" />

      <div className="entry-location">
        <span className="entry-loc">SRI LANKA</span>
        <span className="entry-loc" style={{ color: 'rgba(200,16,46,0.4)' }}>·</span>
        <span className="entry-loc">JAPAN</span>
      </div>

      <div className="entry-divider" />

      <div className="entry-cta">入る · Click to Enter</div>
    </div>
  );
}
