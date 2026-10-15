import { useEffect, useRef } from 'react';

const LogoSVG = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" stroke="#c8102e" strokeWidth="2" fill="white"/>
    <ellipse cx="30" cy="30" rx="18" ry="12" stroke="#c8102e" strokeWidth="1.5" fill="none"/>
    <path d="M30 10 L30 50" stroke="#c8102e" strokeWidth="1.5"/>
    <path d="M10 30 L50 30" stroke="#c8102e" strokeWidth="1.5"/>
    <circle cx="30" cy="30" r="5" fill="#c8102e"/>
    <circle cx="30" cy="30" r="2" fill="white"/>
  </svg>
);

// Generate falling petals
function Petals() {
  const petals = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animDelay: `${Math.random() * 8}s`,
    animDuration: `${6 + Math.random() * 6}s`,
    size: `${6 + Math.random() * 8}px`,
    opacity: 0.6 + Math.random() * 0.4,
  }));

  return (
    <>
      {petals.map(p => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            top: '-20px',
            width: p.size,
            height: p.size,
            animationDelay: p.animDelay,
            animationDuration: p.animDuration,
            opacity: p.opacity,
          }}
        />
      ))}
    </>
  );
}

export default function KoukiHero({ onNavigate }) {
  return (
    <section className="hero-section" id="home">
      {/* Background sky gradient */}
      <div className="hero-bg" />

      {/* SVG-based Japanese scenery */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sky gradient */}
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8a0b8" stopOpacity="0.7"/>
            <stop offset="30%" stopColor="#e8b8a0" stopOpacity="0.6"/>
            <stop offset="60%" stopColor="#f0c8a0" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#c8a080" stopOpacity="0.4"/>
          </linearGradient>
          <linearGradient id="fujiGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8d8d0"/>
            <stop offset="40%" stopColor="#d4b8a8"/>
            <stop offset="100%" stopColor="#b89888"/>
          </linearGradient>
          <linearGradient id="roofLeft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4a3020"/>
            <stop offset="100%" stopColor="#3a2010"/>
          </linearGradient>
          <linearGradient id="sakuraGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8a0b0"/>
            <stop offset="100%" stopColor="#f0c0c8"/>
          </linearGradient>
        </defs>

        {/* Background sky wash */}
        <rect width="1440" height="900" fill="url(#skyGrad)"/>

        {/* Mount Fuji */}
        <path
          d="M720 200 L950 700 L490 700 Z"
          fill="url(#fujiGrad)"
          opacity="0.85"
        />
        {/* Snow cap */}
        <path
          d="M720 200 L760 290 L720 280 L680 290 Z"
          fill="white"
          opacity="0.9"
        />

        {/* Ground / base layer */}
        <rect x="0" y="680" width="1440" height="220" fill="#c0a890" opacity="0.5"/>

        {/* Left temple roof */}
        <path d="M0 680 L280 500 L450 680 Z" fill="url(#roofLeft)" opacity="0.9"/>
        <path d="M0 640 L270 480 L430 640 Z" fill="#3a2010" opacity="0.7"/>
        <rect x="0" y="640" width="460" height="60" fill="#3a2010" opacity="0.5"/>

        {/* Right temple roof */}
        <path d="M1440 680 L1160 500 L990 680 Z" fill="url(#roofLeft)" opacity="0.9"/>
        <path d="M1440 640 L1170 480 L1010 640 Z" fill="#3a2010" opacity="0.7"/>
        <rect x="980" y="640" width="460" height="60" fill="#3a2010" opacity="0.5"/>

        {/* Cherry blossom - left side */}
        {/* Branches */}
        <path d="M0 0 Q80 100 120 300 Q140 400 100 500" stroke="#6b4020" strokeWidth="8" fill="none" opacity="0.8"/>
        <path d="M80 100 Q160 140 220 180" stroke="#6b4020" strokeWidth="5" fill="none" opacity="0.8"/>
        <path d="M100 200 Q180 230 250 260" stroke="#6b4020" strokeWidth="4" fill="none" opacity="0.7"/>
        {/* Blossoms left */}
        {[
          [60,80],[100,120],[140,160],[80,200],[200,180],[50,250],[170,220],[230,260],
          [120,300],[60,340],[150,350],[90,400]
        ].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r={14 + (i%3)*4} fill="url(#sakuraGrad)" opacity={0.7 + (i%3)*0.1}/>
        ))}

        {/* Cherry blossom - right side */}
        <path d="M1440 0 Q1360 100 1320 300 Q1300 400 1340 500" stroke="#6b4020" strokeWidth="8" fill="none" opacity="0.8"/>
        <path d="M1360 100 Q1280 140 1220 180" stroke="#6b4020" strokeWidth="5" fill="none" opacity="0.8"/>
        <path d="M1340 200 Q1260 230 1190 260" stroke="#6b4020" strokeWidth="4" fill="none" opacity="0.7"/>
        {/* Blossoms right */}
        {[
          [1380,80],[1340,120],[1300,160],[1360,200],[1240,180],[1390,250],[1270,220],[1210,260],
          [1320,300],[1380,340],[1290,350],[1350,400]
        ].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r={14 + (i%3)*4} fill="url(#sakuraGrad)" opacity={0.7 + (i%3)*0.1}/>
        ))}

        {/* Lanterns */}
        <g>
          {/* Left lantern */}
          <rect x="195" y="300" width="3" height="60" fill="#4a2020"/>
          <ellipse cx="197" cy="360" rx="16" ry="28" fill="#f5c842" opacity="0.9"/>
          <ellipse cx="197" cy="360" rx="10" ry="22" fill="#f0a020" opacity="0.5"/>
          <rect x="195" y="388" width="3" height="30" fill="#4a2020"/>
          {/* Right lantern */}
          <rect x="1243" y="300" width="3" height="60" fill="#4a2020"/>
          <ellipse cx="1245" cy="360" rx="16" ry="28" fill="#f5c842" opacity="0.9"/>
          <ellipse cx="1245" cy="360" rx="10" ry="22" fill="#f0a020" opacity="0.5"/>
          <rect x="1243" y="388" width="3" height="30" fill="#4a2020"/>
        </g>
      </svg>

      {/* Animated petals */}
      <Petals />

      {/* Hero content */}
      <div className="hero-content">
        <div className="hero-logo-circle">
          <LogoSVG />
        </div>

        <div className="hero-jp-text">光輝インターナショナル</div>

        <h1 className="hero-title">
          KOUKI<br />
          <span className="hero-title-red">INTERNATIONAL</span>
        </h1>

        <p className="hero-tagline">
          LEARN JAPANESE · <span>LEARN ENGLISH</span> · STUDY IN JAPAN
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => onNavigate('apply')}>
            Apply Now
          </button>
          <button className="btn-secondary" onClick={() => onNavigate('contact')}>
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
