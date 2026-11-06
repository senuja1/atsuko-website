import { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function SiteLoadingScreen({ lang = 'en', minDuration = 2400 }) {
  const [progress, setProgress] = useState(0);
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

    // 3. Reliable, silky progress interpolation (25ms interval)
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(1, elapsed / minDuration);
      
      // Gentle cinematic deceleration curve
      const easedProgress = Math.min(
        100,
        Math.round((1 - Math.pow(1 - rawProgress, 2.2)) * 100)
      );

      setProgress(easedProgress);

      if (rawProgress >= 1) {
        clearInterval(interval);
        // Seamless exit sequence
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = '';
          }, 650);
        }, 150);
      }
    }, 25);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [minDuration]);

  if (isDone) return null;

  const labels = {
    si: {
      kicker: '篤子 学校 • 日本への道',
      title: 'ATSUKO INTERNATIONAL',
      sub: 'ජපානයේ අධ්‍යාපනය හා රැකියා සඳහා නිල දොරටුව',
      status: 'දොරටුව සූදානම් වෙමින් පවතී...',
      badge: 'SLBFE බලපත්‍ර අංක 3293',
    },
    jp: {
      kicker: '篤子 学校 • 日本への道',
      title: 'ATSUKO INTERNATIONAL',
      sub: 'スリランカ発・日本留学・就労への正規ゲートウェイ',
      status: '公式ゲートウェイを読み込み中...',
      badge: 'SLBFE公認ライセンス 第3293号',
    },
    en: {
      kicker: 'ATSUKO GAKKO • 篤子 学校',
      title: 'ATSUKO INTERNATIONAL',
      sub: 'Official Gateway to Study & Work in Japan',
      status: 'Preparing Official Gateway...',
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

        {/* Sleek Hairline Progress Bar */}
        <div className="loader-progress-track">
          <div
            className="loader-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text & percentage */}
        <div className="loader-meta-row">
          <span className="loader-status-text">{text.status}</span>
          <span className="loader-percent">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
