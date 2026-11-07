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
      }, 700);
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

  // SVG circular orbit geometry (radius = 154 inside 320x320 viewBox)
  const radius = 154;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`site-loader-overlay ${isFading ? 'loader-fading' : ''}`}
      onClick={triggerExit}
      role="status"
      aria-label="Loading Atsuko International Portal — Click to Enter"
    >
      {/* Ambient Atsuko Blue horizon glow */}
      <div className="loader-bottom-crimson-wash" aria-hidden="true" />

      {/* Central Hinomaru Composition */}
      <div className="loader-hinomaru-stage">
        {/* Concentric wrapper so the round line circles around the round orb */}
        <div className="loader-orb-concentric-wrap">
          {/* SVG Circular Progress & Rotating Orbit Ring Circling Around the Orb */}
          <svg
            className="loader-circular-ring-svg"
            viewBox="0 0 320 320"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="atsukoOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            {/* Base thin orbital track circle */}
            <circle
              cx="160"
              cy="160"
              r={radius}
              fill="none"
              stroke="rgba(56, 189, 248, 0.18)"
              strokeWidth="1.5"
            />

            {/* Animated circular progress line sweeping 360° around the orb */}
            <circle
              className="loader-circular-progress-arc"
              cx="160"
              cy="160"
              r={radius}
              fill="none"
              stroke="url(#atsukoOrbitGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>

          {/* Continuously rotating orbital highlight ring */}
          <div className="loader-orbit-spinner" aria-hidden="true" />

          {/* Glowing Atsuko Official Blue Sun Disc */}
          <div className="loader-sun-disc">
            <div className="loader-kanji-main" lang="ja">
              篤子
            </div>
            <div className="loader-roman-brand">ATSUKO</div>
            <div className="loader-roman-sub">INTERNATIONAL</div>

            {/* Divider & Sri Lanka -> Japan Route inside lower sun disc */}
            <div className="loader-route-wrap">
              <div className="loader-route-divider" />
              <div className="loader-route-text">
                <span>SRI LANKA</span>
                <span className="loader-route-arrow">→</span>
                <span>JAPAN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
