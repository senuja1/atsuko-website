import { useState, useEffect, useCallback } from 'react';

export default function SiteLoadingScreen({ minDuration = 2400 }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const triggerExit = useCallback(() => {
    setIsFading((prev) => {
      if (prev) return prev;
      setTimeout(() => {
        setIsDone(true);
        document.body.style.overflow = '';
      }, 720);
      return true;
    });
  }, []);

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

    // 3. Smooth progress animation from 0% to 100%
    const startTime = performance.now();
    let rafId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, (elapsed / minDuration) * 100);
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      }
    };
    rafId = requestAnimationFrame(tick);

    // 4. Seamless automatic exit after minDuration (or earlier if user clicks)
    const exitTimer = setTimeout(() => {
      triggerExit();
    }, minDuration + 350);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(exitTimer);
      document.body.style.overflow = '';
    };
  }, [minDuration, triggerExit]);

  if (isDone) return null;

  // SVG circular orbit geometry (radius = 156 inside 360x360 viewBox)
  const radius = 156;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`site-loader-overlay ${isFading ? 'loader-fading' : ''}`}
      onClick={triggerExit}
      role="status"
      aria-label="Loading Atsuko International Official Portal"
    >
      {/* 1. Ambient Atsuko Navy, Azure & Twilight Gold Horizon Atmosphere */}
      <div className="loader-bottom-crimson-wash" aria-hidden="true" />

      {/* 2. Traditional Japanese Seigaiha (Blue Ocean Wave) Geometric Lattice Watermark */}
      <div className="loader-seigaiha-pattern" aria-hidden="true" />

      {/* 3. Subtle Distant Mount Fuji & Torii Horizon Silhouette */}
      <svg
        className="loader-horizon-silhouette"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="loaderFujiMist" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.22)" />
            <stop offset="65%" stopColor="rgba(14, 165, 233, 0.08)" />
            <stop offset="100%" stopColor="rgba(6, 13, 31, 0)" />
          </linearGradient>
        </defs>
        {/* Mount Fuji Sweeping Ridge Silhouette */}
        <path
          d="M0,220 L0,195 Q420,188 575,130 Q655,95 692,54 L720,56 L748,54 Q785,95 865,130 Q1020,188 1440,195 L1440,220 Z"
          fill="url(#loaderFujiMist)"
        />
        {/* Crisp Ridge Rim-Light */}
        <path
          d="M360,186 Q545,172 642,108 Q675,85 692,54 L720,56 L748,54 Q765,85 798,108 Q895,172 1080,186"
          fill="none"
          stroke="rgba(186, 230, 253, 0.2)"
          strokeWidth="1.2"
        />
      </svg>

      {/* 4. Ambient Vertical Japanese Tategaki Watermarks (Matching Hero Stage) */}
      <div className="loader-frame-decor" aria-hidden="true">
        <div className="loader-tategaki loader-tategaki-left">
          <span className="loader-tategaki-line" />
          <span className="loader-tategaki-text" lang="ja">
            夢を現実に ・ 篤子学校
          </span>
          <span className="loader-tategaki-seal" />
        </div>

        <div className="loader-tategaki loader-tategaki-right">
          <span className="loader-tategaki-text" lang="ja">
            日本への道
          </span>
          <span className="loader-tategaki-seal loader-tategaki-seal-gold" />
        </div>
      </div>

      {/* 5. Central Atsuko Official Logo Round Emblem & Concentric Circular Progress Orbit */}
      <div className="loader-hinomaru-stage">
        <div className="loader-orb-concentric-wrap">
          {/* SVG Concentric Precision Compass & 360° Progress Ring Circling Around the Logo */}
          <svg
            className="loader-circular-ring-svg"
            viewBox="0 0 360 360"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="atsukoOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="28%" stopColor="#ffffff" />
                <stop offset="68%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="atsukoInnerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(251, 191, 36, 0.48)" />
                <stop offset="50%" stopColor="rgba(56, 189, 248, 0.35)" />
                <stop offset="100%" stopColor="rgba(251, 191, 36, 0.15)" />
              </linearGradient>
            </defs>

            {/* Outer Fine Chronometer / Aviation Compass Tick Ring */}
            <circle
              className="loader-compass-ticks"
              cx="180"
              cy="180"
              r="170"
              fill="none"
              stroke="rgba(186, 230, 253, 0.22)"
              strokeWidth="1.25"
              strokeDasharray="1.5 8.5"
            />

            {/* Base Thin Orbital Track Circle */}
            <circle
              cx="180"
              cy="180"
              r={radius}
              fill="none"
              stroke="rgba(56, 189, 248, 0.16)"
              strokeWidth="1.75"
            />

            {/* Inner Gold-Azure Framing Hairline Ring */}
            <circle
              cx="180"
              cy="180"
              r="143"
              fill="none"
              stroke="url(#atsukoInnerGoldGrad)"
              strokeWidth="1"
            />

            {/* Animated Circular Progress Line Sweeping 360° Around the Official Round Logo */}
            <circle
              className="loader-circular-progress-arc"
              cx="180"
              cy="180"
              r={radius}
              fill="none"
              stroke="url(#atsukoOrbitGrad)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>

          {/* Continuously Rotating Outer Luminous Orbital Ring */}
          <div className="loader-orbit-spinner" aria-hidden="true" />

          {/* Counter-Rotating Inner Subtle Gold-Azure Accent Ring */}
          <div className="loader-orbit-spinner-reverse" aria-hidden="true" />

          {/* Official Atsuko International (篤子 学校) Round Logo Disc */}
          <div className="loader-sun-disc loader-logo-disc">
            <img
              src="/images/atsuko-official-logo.png"
              alt="Atsuko International (篤子 学校) Official Emblem"
              className="loader-official-logo-img"
              width="260"
              height="260"
              decoding="sync"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
