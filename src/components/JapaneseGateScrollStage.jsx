import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, ShieldCheck, Award } from 'lucide-react';

/* ============================================================
   PHOTOREALISTIC SVG CHOCHIN LANTERN (光 & 輝)
   - Warm candle core (#ff9a3c -> #e03c1f -> #3d0705)
   - Curved Q quadratic bamboo ribs at 0.45 opacity
   - Matte black lacquered caps (#1a1615) with no yellow borders
   - Dark iron hanging rod (#231f1e)
   - Traditional Noto Serif JP calligraphy in deep sumi ink with paper bleed
   - Directional contact shadow cast onto wooden pillar
   ============================================================ */
function PhotorealisticChochin({ kanji, idPrefix }) {
  const gradientId = `${idPrefix}-core`;
  const cylinderId = `${idPrefix}-cyl`;
  const bleedId = `${idPrefix}-bleed`;
  const clipId = `${idPrefix}-clip`;

  return (
    <svg
      viewBox="0 0 120 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        filter: 'drop-shadow(6px 14px 14px rgba(0, 0, 0, 0.78))',
      }}
    >
      <defs>
        {/* Warm internal candle core: #ff9a3c in center fading to #e03c1f vermilion and #3d0705 dark crimson */}
        <radialGradient id={gradientId} cx="50%" cy="50%" r="55%" fx="48%" fy="48%">
          <stop offset="0%" stopColor="#ff9a3c" stopOpacity="1" />
          <stop offset="30%" stopColor="#f97316" stopOpacity="1" />
          <stop offset="56%" stopColor="#e03c1f" stopOpacity="1" />
          <stop offset="82%" stopColor="#991b1b" stopOpacity="1" />
          <stop offset="100%" stopColor="#3d0705" stopOpacity="1" />
        </radialGradient>

        {/* 3D Cylindrical shading to match sunset lighting on wooden gate */}
        <linearGradient id={cylinderId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#220403" stopOpacity="0.75" />
          <stop offset="14%" stopColor="#3d0705" stopOpacity="0.22" />
          <stop offset="48%" stopColor="#fed7aa" stopOpacity="0.18" />
          <stop offset="82%" stopColor="#3d0705" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#220403" stopOpacity="0.75" />
        </linearGradient>

        {/* Traditional Sumi Ink Bleed into warm washi paper fibers */}
        <filter id={bleedId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="blur" />
          <feFlood floodColor="#7f1d1d" floodOpacity="0.4" result="bleedColor" />
          <feComposite in="bleedColor" in2="blur" operator="in" result="bleed" />
          <feMerge>
            <feMergeNode in="bleed" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Clip path for curved organic chochin body */}
        <clipPath id={clipId}>
          <path d="M 38 18 C 10 40, 5 76, 5 88 C 5 124, 18 146, 40 152 L 80 152 C 102 146, 115 124, 115 88 C 115 76, 110 40, 82 18 Z" />
        </clipPath>
      </defs>

      {/* Dark Iron Hanging Rod (#231f1e) with eyelet ring */}
      <path d="M 60 0 L 60 12" stroke="#231f1e" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="60" cy="8" r="3.2" fill="none" stroke="#231f1e" strokeWidth="1.8" />

      {/* Chochin Paper Body with Internal Candle Core */}
      <g clipPath={`url(#${clipId})`}>
        {/* Base Candle Core Gradient */}
        <path
          d="M 38 18 C 10 40, 5 76, 5 88 C 5 124, 18 146, 40 152 L 80 152 C 102 146, 115 124, 115 88 C 115 76, 110 40, 82 18 Z"
          fill={`url(#${gradientId})`}
        />

        {/* Soft Inner Radiant Flame Glow */}
        <ellipse cx="60" cy="88" rx="26" ry="38" fill="#ffedd5" opacity="0.32" />

        {/* Curved Bamboo Ribs (Q quadratic curves at 0.45 opacity) */}
        <path d="M 30 30 Q 60 38 90 30" stroke="#1f0705" strokeWidth="1.8" fill="none" opacity="0.45" strokeLinecap="round" />
        <path d="M 20 46 Q 60 55 100 46" stroke="#1f0705" strokeWidth="1.8" fill="none" opacity="0.45" strokeLinecap="round" />
        <path d="M 12 64 Q 60 74 108 64" stroke="#1f0705" strokeWidth="1.8" fill="none" opacity="0.45" strokeLinecap="round" />
        <path d="M 6 82 Q 60 93 114 82" stroke="#1f0705" strokeWidth="1.8" fill="none" opacity="0.45" strokeLinecap="round" />
        <path d="M 6 100 Q 60 111 114 100" stroke="#1f0705" strokeWidth="1.8" fill="none" opacity="0.45" strokeLinecap="round" />
        <path d="M 12 118 Q 60 128 108 118" stroke="#1f0705" strokeWidth="1.8" fill="none" opacity="0.45" strokeLinecap="round" />
        <path d="M 20 136 Q 60 144 100 136" stroke="#1f0705" strokeWidth="1.8" fill="none" opacity="0.45" strokeLinecap="round" />

        {/* Traditional Serif Japanese Calligraphy ('Noto Serif JP', serif) in Deep Sumi Ink (#170b09 at 0.88 opacity) */}
        <text
          x="60"
          y="93"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Noto Serif JP', serif"
          fontWeight="900"
          fontSize="46"
          fill="#170b09"
          opacity="0.88"
          filter={`url(#${bleedId})`}
          style={{ userSelect: 'none' }}
        >
          {kanji}
        </text>

        {/* 3D Cylindrical Edge Shading Overlay */}
        <rect x="0" y="0" width="120" height="184" fill={`url(#${cylinderId})`} />
      </g>

      {/* Top Matte Black Lacquered Cap (#1a1615) with no yellow borders */}
      <path d="M 34 12 L 86 12 L 82 18 L 38 18 Z" fill="#1a1615" />
      <rect x="32" y="10" width="56" height="4" rx="2" fill="#25201e" />

      {/* Bottom Matte Black Lacquered Cap (#1a1615) with no yellow borders */}
      <path d="M 38 152 L 82 152 L 78 158 L 42 158 Z" fill="#1a1615" />
      <rect x="36" y="157" width="48" height="3" rx="1.5" fill="#25201e" />

      {/* Dark Iron Fitting & Deep Red Silk Tassel */}
      <path d="M 60 160 L 60 166" stroke="#231f1e" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 60 166 L 60 182" stroke="#7f1d1d" strokeWidth="2.8" strokeLinecap="round" opacity="0.95" />
    </svg>
  );
}

export default function JapaneseGateScrollStage({ onEnterWebsite, lang = 'en' }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const fgCanvasRef = useRef(null);
  const bgAtmosphereRef = useRef(null);
  const bgImgRef = useRef(null);
  const gateLayerRef = useRef(null);
  const hintRef = useRef(null);
  const portalCardRef = useRef(null);

  // Safe 2.5D Parallax: Smooth mouse-move tracking for CSS custom properties (--mouse-x, --mouse-y)
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let animId;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / innerHeight) * 2 - 1;
    };

    const handleMouseLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
    };

    const updateParallax = () => {
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      if (containerRef.current) {
        containerRef.current.style.setProperty('--mouse-x', mouseX.toFixed(4));
        containerRef.current.style.setProperty('--mouse-y', mouseY.toFixed(4));
      }
      animId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Silky 60fps-120fps Physics-Interpolated Scroll Loop
  useEffect(() => {
    let animId;
    let targetP = 0;
    let currentP = 0;

    const updateTarget = () => {
      if (!containerRef.current) return;
      if (window.scrollY <= 5) {
        targetP = 0;
        return;
      }
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const scrolled = -rect.top;
      targetP = Math.max(0, Math.min(1, scrolled / totalHeight));
    };

    const render = () => {
      // Instant snap when at the top to prevent lingering lag
      if (window.scrollY <= 5) {
        targetP = 0;
        currentP = 0;
      } else {
        const diff = targetP - currentP;
        if (Math.abs(diff) < 0.001) {
          currentP = targetP;
        } else {
          currentP += diff * 0.22;
        }
      }

      const p = currentP;

      if (!containerRef.current) {
        animId = requestAnimationFrame(render);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();

      // If scrolled completely past the stage, hide the gate layer to free GPU resources
      if (rect.bottom < 0) {
        if (gateLayerRef.current && gateLayerRef.current.style.visibility !== 'hidden') {
          gateLayerRef.current.style.visibility = 'hidden';
        }
        animId = requestAnimationFrame(render);
        return;
      }

      // 1. Background Atmosphere Glow
      if (bgAtmosphereRef.current) {
        bgAtmosphereRef.current.style.transform = `scale3d(${1 + p * 0.25}, ${1 + p * 0.25}, 1)`;
      }

      // 2. High-Res Pagoda/Mount Fuji Background
      if (bgImgRef.current) {
        bgImgRef.current.style.transform = `scale3d(${1.0 + p * 0.15}, ${1.0 + p * 0.15}, 1)`;
      }

      // 3. Real Photographic Torii Gate — Optimized Zoom-Through (GPU-accelerated)
      if (gateLayerRef.current) {
        const gateScale = 1 + p * 6.5;
        const gateOpacity = p > 0.55 ? Math.max(0, 1 - (p - 0.55) / 0.22) : 1;

        if (gateOpacity <= 0.01) {
          gateLayerRef.current.style.visibility = 'hidden';
        } else {
          gateLayerRef.current.style.visibility = 'visible';
          gateLayerRef.current.style.transform = `scale3d(${gateScale}, ${gateScale}, 1)`;
          gateLayerRef.current.style.opacity = gateOpacity;
        }
      }

      // 4. Intro Hint & Call-to-Scroll Badge
      if (hintRef.current) {
        const hintOpacity = Math.max(0, 1 - p * 3);
        hintRef.current.style.opacity = hintOpacity;
        hintRef.current.style.pointerEvents = hintOpacity < 0.05 ? 'none' : 'auto';
      }

      // 5. Emerging Portal Welcome Card (appears after gate zoom-through)
      if (portalCardRef.current) {
        const cardOpacity = p > 0.78 ? Math.min(1, (p - 0.78) / 0.18) : 0;
        const cardY = (1 - cardOpacity) * 40;
        portalCardRef.current.style.opacity = cardOpacity;
        portalCardRef.current.style.transform = `translate3d(0, ${cardY}px, 0)`;
        portalCardRef.current.style.pointerEvents = cardOpacity > 0.5 ? 'auto' : 'none';
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('scroll', updateTarget, { passive: true });
    window.addEventListener('resize', updateTarget, { passive: true });
    updateTarget();
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', updateTarget);
      window.removeEventListener('resize', updateTarget);
    };
  }, []);

  // Atmospheric Z-Layers: Cherry blossom petals split into background & blurred foreground layers
  useEffect(() => {
    const bgCanvas = canvasRef.current;
    const fgCanvas = fgCanvasRef.current;
    if (!bgCanvas || !fgCanvas) return;
    const bgCtx = bgCanvas.getContext('2d');
    const fgCtx = fgCanvas.getContext('2d');
    let animId;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      bgCanvas.width = w;
      bgCanvas.height = h;
      fgCanvas.width = w;
      fgCanvas.height = h;
    };
    resize();
    window.addEventListener('resize', resize);

    // Background petals layer (behind the gate)
    const bgPetals = Array.from({ length: 22 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 4 + Math.random() * 5,
      speedX: 0.5 + Math.random() * 1.0,
      speedY: 0.7 + Math.random() * 1.2,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.4,
      opacity: 0.25 + Math.random() * 0.35,
    }));

    // 4–5 slightly larger foreground petals drifting in front of the gate pillars
    const fgPetals = Array.from({ length: 5 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 13 + Math.random() * 7,
      speedX: 0.8 + Math.random() * 1.3,
      speedY: 1.0 + Math.random() * 1.5,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 2,
      opacity: 0.55 + Math.random() * 0.3,
    }));

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      // Render background petals
      bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
      bgPetals.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        if (p.y > bgCanvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * bgCanvas.width;
        }
        if (p.x > bgCanvas.width + 20) {
          p.x = -20;
        }

        bgCtx.save();
        bgCtx.translate(p.x, p.y);
        bgCtx.rotate((p.rotation * Math.PI) / 180);
        bgCtx.globalAlpha = p.opacity;

        bgCtx.beginPath();
        bgCtx.fillStyle = '#ffb3c1';
        bgCtx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
        bgCtx.fill();

        bgCtx.restore();
      });

      // Render foreground petals
      fgCtx.clearRect(0, 0, fgCanvas.width, fgCanvas.height);
      fgPetals.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        if (p.y > fgCanvas.height + 30) {
          p.y = -30;
          p.x = Math.random() * fgCanvas.width;
        }
        if (p.x > fgCanvas.width + 30) {
          p.x = -30;
        }

        fgCtx.save();
        fgCtx.translate(p.x, p.y);
        fgCtx.rotate((p.rotation * Math.PI) / 180);
        fgCtx.globalAlpha = p.opacity;

        fgCtx.beginPath();
        fgCtx.fillStyle = '#ffccd5';
        fgCtx.ellipse(0, 0, p.size, p.size * 0.58, 0, 0, Math.PI * 2);
        fgCtx.fill();

        fgCtx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, []);

  const handleSkipToContent = () => {
    if (!containerRef.current) return;
    const target = containerRef.current.offsetTop + containerRef.current.offsetHeight - window.innerHeight + 20;
    window.scrollTo({ top: target, behavior: 'smooth' });
    if (onEnterWebsite) onEnterWebsite();
  };

  return (
    <div
      ref={containerRef}
      className="gate-scroll-runway"
      style={{
        position: 'relative',
        height: '240vh',
        background: '#070d1e',
      }}
    >
      {/* Sticky 3D Stage Container with 1200px perspective wrapper */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Background Atmosphere: Twilight Sky & Sunrise */}
        <div
          ref={bgAtmosphereRef}
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(circle at 50% 65%, rgba(245, 158, 11, 0.28) 0%, rgba(220, 38, 38, 0.25) 30%, rgba(11, 21, 40, 0.95) 75%),
              linear-gradient(180deg, #070d1e 0%, #0f1c38 45%, #1e1b4b 100%)
            `,
            willChange: 'transform',
            transformOrigin: 'center center',
          }}
        />

        {/* Cinematic Real Photo Background: Chureito Pagoda & Mount Fuji (Subtle Reverse 2.5D Parallax) */}
        <div
          style={{
            position: 'absolute',
            inset: '-24px',
            overflow: 'hidden',
            pointerEvents: 'none',
            transform: 'translate3d(calc(var(--mouse-x, 0) * -12px), calc(var(--mouse-y, 0) * -8px), 0)',
            willChange: 'transform',
            zIndex: 2,
          }}
        >
          <img
            ref={bgImgRef}
            src="/images/pagoda-cinematic.jpg"
            alt="Chureito Pagoda and Mount Fuji Japan"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 48%',
              transformOrigin: 'center 48%',
              filter: 'brightness(0.92) contrast(1.06) saturate(1.15)',
              willChange: 'transform',
            }}
          />

          {/* Cinematic Vignette & Atmospheric Color Grading Overlays */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(circle at 50% 45%, rgba(0,0,0,0.1) 0%, rgba(7, 13, 30, 0.45) 55%, rgba(7, 13, 30, 0.92) 100%),
                linear-gradient(180deg, rgba(7, 13, 30, 0.65) 0%, rgba(7, 13, 30, 0.15) 35%, rgba(7, 13, 30, 0.3) 70%, #070d1e 100%)
              `,
            }}
          />

          {/* Warm Golden Sunrise Glow in distance */}
          <div
            style={{
              position: 'absolute',
              top: '25%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(700px, 90vw)',
              height: 'min(500px, 60vh)',
              background: 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.22) 0%, rgba(239, 68, 68, 0.15) 45%, transparent 75%)',
              mixBlendMode: 'screen',
              filter: 'blur(30px)',
            }}
          />
        </div>

        {/* Atmospheric Z-Layers: Soft Radial Sunset Glow directly behind Gate Archway */}
        <div
          style={{
            position: 'absolute',
            top: '44%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'min(760px, 85vw)',
            height: 'min(540px, 65vh)',
            background: 'radial-gradient(ellipse at center, rgba(251, 146, 60, 0.38) 0%, rgba(239, 68, 68, 0.25) 40%, rgba(220, 38, 38, 0.1) 65%, transparent 80%)',
            mixBlendMode: 'screen',
            filter: 'blur(35px)',
            pointerEvents: 'none',
            zIndex: 8,
          }}
        />

        {/* Background Floating Sakura Petals Canvas (Behind Gate) */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 7,
          }}
        />

        {/* GRAND JAPANESE TORII GATE — 2.5D Parallax Tilt Wrapper (Tilts up to ±2.5deg) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            transform: 'rotateY(calc(var(--mouse-x, 0) * 2.5deg)) rotateX(calc(var(--mouse-y, 0) * -2deg))',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            zIndex: 10,
          }}
        >
          {/* Scroll Zoom-Through Container */}
          <div
            ref={gateLayerRef}
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              transformOrigin: '50% 65%',
              willChange: 'transform, opacity',
            }}
          >
            {/* Gate Bounding Frame for Consistent Responsive Anchor */}
            <div
              className="torii-gate-frame"
              style={{
                pointerEvents: 'none',
              }}
            >
              {/* Torii Gate Cutout with Drop-Shadow Depth & Warm Top Rim-Light */}
              <img
                src="/images/torii-gate-enhanced.with-lamps-backup.png"
                alt="Torii Gate"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  userSelect: 'none',
                  display: 'block',
                  filter: 'brightness(1.06) contrast(1.08) drop-shadow(0 25px 40px rgba(0, 0, 0, 0.85))',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              />
            </div>
          </div>
        </div>

        {/* Foreground Sakura Petals Drifting in Front of Gate Pillars (Blurred for Depth) */}
        <canvas
          ref={fgCanvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            filter: 'blur(2px)',
            zIndex: 15,
          }}
        />

        {/* INTRO HINT & CALL-TO-SCROLL (Floats forward in 2.5D space) */}
        <div
          ref={hintRef}
          className="gate-intro-hint"
          style={{
            position: 'absolute',
            bottom: '12%',
            textAlign: 'center',
            color: 'white',
            zIndex: 20,
            padding: '0 20px',
            willChange: 'opacity, transform',
            transform: 'translate3d(calc(var(--mouse-x, 0) * 16px), calc(var(--mouse-y, 0) * 10px), 35px)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className="gate-license-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(251,191,36,0.35)',
              padding: '6px 16px',
              borderRadius: '999px',
              color: '#fbbf24',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '1px',
              marginBottom: 14,
            }}
          >
            <ShieldCheck size={14} />
            <span>SLBFE LICENSE NO. 3293 • PV 0217143</span>
          </div>

          <h1
            className="gate-hero-title"
            style={{
              fontSize: 'clamp(28px, 4.5vw, 48px)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: 8,
              textShadow: '0 4px 20px rgba(0,0,0,0.8)',
            }}
          >
            ATSUKO INTERNATIONAL{' '}
            <span style={{ color: '#ef4444' }}>篤子 学校</span>
          </h1>

          <p
            className="gate-hero-desc"
            style={{
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              color: '#cbd5e1',
              maxWidth: 640,
              margin: '0 auto 20px',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            Sri Lanka’s premier government-registered pathway to study and work in Japan.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <button
              className="gate-walk-btn"
              onClick={handleSkipToContent}
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #172554 100%)',
                color: 'white',
                border: '1px solid rgba(147, 197, 253, 0.25)',
                padding: '12px 28px',
                borderRadius: '999px',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35), 0 0 12px rgba(30, 64, 175, 0.2)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.45), 0 0 16px rgba(37, 99, 235, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #1e40af 0%, #172554 100%)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.35), 0 0 12px rgba(30, 64, 175, 0.2)';
              }}
            >
              <span>Walk Through Gate to Portal</span>
              <ArrowDown size={15} />
            </button>
          </div>

          <div
            className="gate-scroll-hint"
            style={{
              marginTop: 18,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              fontSize: 11,
              letterSpacing: '2px',
              color: '#94a3b8',
              textTransform: 'uppercase',
              animation: 'bounce 2s infinite',
            }}
          >
            <span>Scroll Down to Enter</span>
            <span>↓</span>
          </div>
        </div>

        {/* PORTAL REVEAL CARD (Emerges as You Pass Through the Gate) */}
        <div
          ref={portalCardRef}
          style={{
            position: 'absolute',
            zIndex: 25,
            textAlign: 'center',
            color: 'white',
            maxWidth: 760,
            width: 'min(760px, calc(100vw - 32px))',
            padding: 'clamp(24px, 4vw, 36px) clamp(16px, 4vw, 32px)',
            background: 'rgba(11, 21, 40, 0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: 24,
            border: '2px solid rgba(2, 132, 199, 0.4)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 35px rgba(2, 132, 199, 0.25)',
            opacity: 0,
            transform: 'translateY(40px)',
            pointerEvents: 'none',
            willChange: 'transform, opacity',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: '#38bdf8',
              background: 'rgba(2, 132, 199, 0.15)',
              padding: '6px 14px',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '1px',
              marginBottom: 12,
              border: '1px solid rgba(2, 132, 199, 0.3)',
            }}
          >
            <Award size={15} />
            <span>WELCOME TO ATSUKO GAKKO (篤子 学校)</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(26px, 3.8vw, 42px)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            Your Official Pathway to Study & Work in Japan
          </h2>

          <p
            style={{
              fontSize: 15,
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            Licensed Foreign Employment Agency (SLBFE No. 3293) and Specialized Japanese Language School.
            Kadawatha Head Operations Center & Registered Support Organization in Komaki (Aichi) and Sendai, Japan.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 14,
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={handleSkipToContent}
              style={{
                background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 60%, #0369a1 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 28px',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 4px 18px rgba(2, 132, 199, 0.45)',
                transition: 'all 0.25s ease',
              }}
            >
              <Sparkles size={16} />
              <span>Continue into Official Portal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
