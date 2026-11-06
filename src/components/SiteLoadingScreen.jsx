import { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function SiteLoadingScreen({ lang = 'en', minDuration = 2400 }) {
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // 1. Prevent background scroll while loading
    document.body.style.overflow = 'hidden';

    // 2. Preload critical visual assets so they are hot in memory before reveal
    const criticalImages = [
      '/images/torii-gate-ultra.png',
      '/images/pagoda-cinematic.jpg',
      '/images/atsuko-drone-wide.jpg',
      '/images/atsuko-official-logo.png',
    ];

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // 3. Seamless exit sequence after minDuration
    let doneTimer;
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      doneTimer = setTimeout(() => {
        setIsDone(true);
        document.body.style.overflow = '';
      }, 650);
    }, minDuration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = '';
    };
  }, [minDuration]);

  if (isDone) return null;

  const labels = {
    si: {
      kicker: '篤子 学校 • 日本への道',
      title: 'ATSUKO INTERNATIONAL',
      sub: 'ජපානයේ අධ්‍යාපනය හා රැකියා සඳහා නිල දොරටුව',
      badge: 'SLBFE බලපත්‍ර අංක 3293',
    },
    jp: {
      kicker: '篤子 学校 • 日本への道',
      title: 'ATSUKO INTERNATIONAL',
      sub: 'スリランカ発・日本留学・就労への正規ゲートウェイ',
      badge: 'SLBFE公認ライセンス 第3293号',
    },
    en: {
      kicker: 'ATSUKO GAKKO • 篤子 学校',
      title: 'ATSUKO INTERNATIONAL',
      sub: 'Official Gateway to Study & Work in Japan',
      badge: 'SLBFE LICENSE NO. 3293 • PV 0217143',
    },
  };

  const text = labels[lang] || labels.en;

  return (
    <div
      className={`site-loader-overlay ${isFading ? 'loader-fading' : ''}`}
      aria-hidden="true"
      role="status"
      aria-label="Loading Atsuko International Portal"
    >
      {/* Ambient background atmosphere glow */}
      <div className="loader-ambient-glow" />

      {/* Centerpiece card */}
      <div className="loader-center-content">
        {/* Emblem with pulsing golden aura */}
        <div className="loader-logo-wrap">
          <div className="loader-pulse-ring" />
          <div className="loader-pulse-ring-outer" />
          <img
            src="/images/atsuko-official-logo.png"
            alt="Atsuko International Logo"
            className="loader-logo-img"
            width="88"
            height="88"
          />
        </div>

        {/* Japanese typography kicker */}
        <span className="loader-jp-kicker" lang="ja">
          {text.kicker}
        </span>

        {/* Brand Title */}
        <h2 className="loader-title">
          <span>ATSUKO </span>
          <span className="loader-brand-blue">INTERNATIONAL</span>
        </h2>

        {/* Subtitle */}
        <p className="loader-subtitle">{text.sub}</p>

        {/* Government Credential Pill */}
        <div className="loader-cert-badge">
          <ShieldCheck size={13} />
          <span>{text.badge}</span>
        </div>
      </div>
    </div>
  );
}
