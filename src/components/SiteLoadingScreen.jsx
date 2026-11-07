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

  return (
    <div
      className={`site-loader-overlay ${isFading ? 'loader-fading' : ''}`}
      onClick={triggerExit}
      role="status"
      aria-label="Loading Atsuko International Portal — Click to Enter"
    >
      {/* Vertical axis line & ambient horizon glow */}
      <div className="loader-vertical-axis" aria-hidden="true" />
      <div className="loader-bottom-crimson-wash" aria-hidden="true" />

      {/* Central Hinomaru (Rising Sun) Composition */}
      <div className="loader-hinomaru-stage">
        {/* Outer thin orbital ring */}
        <div className="loader-orbit-ring" aria-hidden="true">
          {/* Subtle floating sakura blossom accent */}
          <span className="loader-sakura-accent" aria-hidden="true">✿</span>
        </div>

        {/* Crimson Rising Sun Disc */}
        <div className="loader-sun-disc">
          <div className="loader-kanji-main" lang="ja">
            篤子
          </div>
          <div className="loader-roman-brand">ATSUKO</div>
          <div className="loader-roman-sub">INTERNATIONAL</div>
        </div>

        {/* Divider & Sri Lanka -> Japan Route overlapping lower sun edge */}
        <div className="loader-route-wrap">
          <div className="loader-route-divider" />
          <div className="loader-route-text">
            <span>SRI LANKA</span>
            <span className="loader-route-arrow">→</span>
            <span>JAPAN</span>
          </div>
        </div>

        {/* Minimalist progress bar & Click to Enter prompt */}
        <div className="loader-bottom-controls">
          <div className="loader-hinomaru-bar-track">
            <div
              className="loader-hinomaru-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="loader-enter-caption" lang="ja">
            入る · CLICK TO ENTER
          </div>
        </div>
      </div>
    </div>
  );
}
