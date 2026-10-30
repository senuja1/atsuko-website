import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { getUiText } from '../data/uiText';

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

export default function JapaneseGateScrollStage({
  onEnterWebsite,
  lang = 'en',
  onOpenModal,
  onScrollToEligibility,
  onNavigate
}) {
  const gateText = getUiText(lang)?.gate || {};
  const g = {
    license: gateText.license || 'SLBFE LICENSE NO. 3293 • PV 0217143',
    desc: gateText.desc || 'Sri Lanka’s premier government-registered pathway to study and work in Japan.',
    walkBtn: gateText.walkBtn || 'Walk Through Gate to Portal',
    scrollHint: gateText.scrollHint || 'Scroll Down to Enter',
    welcomeBadge: gateText.welcomeBadge || 'WELCOME TO ATSUKO GAKKO (篤子 学校)',
    portalTitle: gateText.portalTitle || 'Your Official Pathway to Study & Work in Japan',
    portalDesc: gateText.portalDesc || 'Licensed Foreign Employment Agency (SLBFE No. 3293) and Specialized Japanese Language School.',
    continueBtn: gateText.continueBtn || 'Continue into Official Portal',
  };
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const fgCanvasRef = useRef(null);
  const bgAtmosphereRef = useRef(null);
  const bgImgRef = useRef(null);
  const gateLayerRef = useRef(null);
  const hintRef = useRef(null);
  const portalCardRef = useRef(null);
  const duskOverlayRef = useRef(null);
  const sunriseOverlayRef = useRef(null);
  const watermarkRef = useRef(null);

  // Safe 2.5D Parallax: Demand-driven smooth mouse-move tracking for CSS custom properties (--mouse-x, --mouse-y)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return undefined;
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let animId = null;

    const updateParallax = () => {
      const dx = targetMouseX - mouseX;
      const dy = targetMouseY - mouseY;

      if (Math.abs(dx) < 0.0005 && Math.abs(dy) < 0.0005) {
        mouseX = targetMouseX;
        mouseY = targetMouseY;
        if (containerRef.current) {
          containerRef.current.style.setProperty('--mouse-x', mouseX.toFixed(4));
          containerRef.current.style.setProperty('--mouse-y', mouseY.toFixed(4));
        }
        animId = null;
        return;
      }

      mouseX += dx * 0.08;
      mouseY += dy * 0.08;

      if (containerRef.current) {
        containerRef.current.style.setProperty('--mouse-x', mouseX.toFixed(4));
        containerRef.current.style.setProperty('--mouse-y', mouseY.toFixed(4));
      }
      animId = requestAnimationFrame(updateParallax);
    };

    const scheduleParallax = () => {
      if (animId === null) {
        animId = requestAnimationFrame(updateParallax);
      }
    };

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / innerHeight) * 2 - 1;
      scheduleParallax();
    };

    const handleMouseLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
      scheduleParallax();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animId !== null) cancelAnimationFrame(animId);
    };
  }, []);

  // Silky scroll loop — demand-driven rAF that runs at 60fps during scroll interpolation and rests at 0% CPU when settled or offscreen
  useEffect(() => {
    let animId = null;
    let targetP = 0;
    let currentP = 0;
    // Cache container metrics to avoid getBoundingClientRect every frame
    let containerTop = 0;
    let containerHeight = 0;
    let totalHeight = 0;

    const cacheMetrics = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      containerTop = window.scrollY + rect.top;
      containerHeight = containerRef.current.offsetHeight;
      totalHeight = containerHeight - window.innerHeight;
    };

    const updateTarget = () => {
      if (totalHeight <= 0) return;
      const scrolled = window.scrollY - containerTop;
      if (window.scrollY <= 5) {
        targetP = 0;
      } else {
        targetP = Math.max(0, Math.min(1, scrolled / totalHeight));
      }
    };

    const applyStageFrame = (p) => {
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
        const hintOpacity = Math.max(0, 1 - p * 4.5);
        const hintY = -25 * Math.min(1, p * 4.5);
        hintRef.current.style.opacity = hintOpacity;
        hintRef.current.style.transform = `translate3d(calc(var(--mouse-x, 0) * 16px), calc(var(--mouse-y, 0) * 10px + ${hintY}px), 35px)`;
        hintRef.current.style.pointerEvents = hintOpacity < 0.05 ? 'none' : 'auto';
        hintRef.current.style.visibility = hintOpacity <= 0.01 ? 'hidden' : 'visible';
      }

      // 4b. Ambient Watermarks
      if (watermarkRef.current) {
        const wmProgress = Math.min(1, p / 0.18);
        const wmOpacity = Math.max(0, 1 - wmProgress);
        const wmY = -20 * wmProgress;
        watermarkRef.current.style.opacity = wmOpacity;
        watermarkRef.current.style.transform = `translate3d(0, ${wmY}px, 0)`;
        watermarkRef.current.style.visibility = wmOpacity <= 0.01 ? 'hidden' : 'visible';
      }

      // 5. Portal Card
      if (portalCardRef.current) {
        const heroOpacity = p > 0.65 ? Math.min(1, (p - 0.65) / 0.22) : 0;
        const heroY = (1 - heroOpacity) * 28;
        portalCardRef.current.style.opacity = heroOpacity;
        portalCardRef.current.style.transform = `translate3d(0, ${heroY}px, 0)`;
        portalCardRef.current.style.pointerEvents = heroOpacity > 0.5 ? 'auto' : 'none';
      }

      // 6. Lighting Cross-Fade
      if (duskOverlayRef.current) {
        const duskOpacity = p > 0.35 ? Math.max(0, 1 - (p - 0.35) / 0.42) : 1;
        duskOverlayRef.current.style.opacity = duskOpacity;
      }
      if (sunriseOverlayRef.current) {
        const sunriseOpacity = p > 0.4 ? Math.min(1, (p - 0.4) / 0.35) : 0;
        sunriseOverlayRef.current.style.opacity = sunriseOpacity;
      }
    };

    const render = () => {
      if (!containerRef.current) {
        animId = null;
        return;
      }

      updateTarget();

      // Cheap visibility check using cached metrics (no getBoundingClientRect)
      const approxBottom = containerTop + containerHeight - window.scrollY;
      if (approxBottom < -100) {
        currentP = targetP;
        if (gateLayerRef.current && gateLayerRef.current.style.visibility !== 'hidden') {
          gateLayerRef.current.style.visibility = 'hidden';
        }
        animId = null;
        return;
      }

      if (window.scrollY <= 5) {
        targetP = 0;
      }

      const diff = targetP - currentP;
      const isSettled = Math.abs(diff) < 0.0005;

      if (isSettled) {
        currentP = targetP;
        applyStageFrame(currentP);
        animId = null;
        return;
      }

      currentP += diff * 0.14;
      applyStageFrame(currentP);
      animId = requestAnimationFrame(render);
    };

    const scheduleRender = () => {
      if (animId === null) {
        animId = requestAnimationFrame(render);
      }
    };

    const handleScroll = () => {
      scheduleRender();
    };

    const handleResize = () => {
      cacheMetrics();
      scheduleRender();
    };

    // Cache on mount, re-cache on resize
    const initRaf = requestAnimationFrame(() => {
      cacheMetrics();
      updateTarget();
      currentP = targetP;
      applyStageFrame(currentP);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        cacheMetrics();
        scheduleRender();
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(initRaf);
      if (animId !== null) cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  // Atmospheric Z-Layers: Cherry blossom petals split into background & blurred foreground layers
  useEffect(() => {
    const bgCanvas = canvasRef.current;
    const fgCanvas = fgCanvasRef.current;
    if (!bgCanvas || !fgCanvas) return;
    const bgCtx = bgCanvas.getContext('2d');
    const fgCtx = fgCanvas.getContext('2d');
    let animId = null;
    let isVisible = true;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      bgCanvas.width = w;
      bgCanvas.height = h;
      fgCanvas.width = w;
      fgCanvas.height = h;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

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

    // Pre-compute rotation as radians to avoid per-frame * Math.PI / 180
    bgPetals.forEach(p => { p.rotRad = (p.rotation * Math.PI) / 180; p.rotSpeedRad = (p.rotSpeed * Math.PI) / 180; });
    fgPetals.forEach(p => { p.rotRad = (p.rotation * Math.PI) / 180; p.rotSpeedRad = (p.rotSpeed * Math.PI) / 180; });

    let lastTime = 0;
    const render = (timestamp = 0) => {
      if (!isVisible) {
        animId = null;
        return;
      }

      const dt = lastTime ? Math.min(2.5, (timestamp - lastTime) / 16.667) : 1;
      lastTime = timestamp;

      // Render background petals
      bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
      bgCtx.fillStyle = '#ffb3c1';
      bgPetals.forEach((p) => {
        p.x += p.speedX * (dt * 0.55);
        p.y += p.speedY * (dt * 0.55);
        p.rotRad += p.rotSpeedRad * (dt * 0.55);

        if (p.y > bgCanvas.height + 20) { p.y = -20; p.x = Math.random() * bgCanvas.width; }
        if (p.x > bgCanvas.width + 20) { p.x = -20; }

        bgCtx.save();
        bgCtx.translate(p.x, p.y);
        bgCtx.rotate(p.rotRad);
        bgCtx.globalAlpha = p.opacity;
        bgCtx.beginPath();
        bgCtx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
        bgCtx.fill();
        bgCtx.restore();
      });

      // Render foreground petals
      fgCtx.clearRect(0, 0, fgCanvas.width, fgCanvas.height);
      fgCtx.fillStyle = '#ffccd5';
      fgPetals.forEach((p) => {
        p.x += p.speedX * (dt * 0.55);
        p.y += p.speedY * (dt * 0.55);
        p.rotRad += p.rotSpeedRad * (dt * 0.55);

        if (p.y > fgCanvas.height + 30) { p.y = -30; p.x = Math.random() * fgCanvas.width; }
        if (p.x > fgCanvas.width + 30) { p.x = -30; }

        fgCtx.save();
        fgCtx.translate(p.x, p.y);
        fgCtx.rotate(p.rotRad);
        fgCtx.globalAlpha = p.opacity;
        fgCtx.beginPath();
        fgCtx.ellipse(0, 0, p.size, p.size * 0.58, 0, 0, Math.PI * 2);
        fgCtx.fill();
        fgCtx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (isVisible && !wasVisible && animId === null) {
          lastTime = 0;
          animId = requestAnimationFrame(render);
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    animId = requestAnimationFrame(render);

    return () => {
      if (animId !== null) cancelAnimationFrame(animId);
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

  // Smooth cinematic scroll through Torii Gate to reveal the Kouki-style hero
  const handleWalkThrough = () => {
    if (!containerRef.current) return;
    const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
    const target = containerRef.current.offsetTop + totalScroll * 0.90;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  const handleApplyNow = (e) => {
    if (e) e.stopPropagation();
    if (onScrollToEligibility) {
      onScrollToEligibility();
    } else {
      const el = document.getElementById('eligibility') || document.getElementById('home-content-start');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else if (onEnterWebsite) onEnterWebsite();
    }
  };

  const handleConsultation = (e) => {
    if (e) e.stopPropagation();
    if (onOpenModal) {
      onOpenModal('Free Consultation');
    } else {
      const el = document.getElementById('home-content-start');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else if (onEnterWebsite) onEnterWebsite();
    }
  };

  const getHeroContent = (currentLang) => {
    switch (currentLang) {
      case 'si':
        return {
          kicker: '篤子 インターナショナル',
          t1: 'ජපන් භාෂාව',
          t2: 'ජපානයේ රැකියා',
          t3: 'ශිෂ්‍ය වීසා',
          applyBtn: 'අයදුම් කරන්න',
          consultBtn: 'නොමිලේ උපදේශනයක්',
        };
      case 'jp':
        return {
          kicker: '篤子 インターナショナル',
          t1: '日本語教育',
          t2: '特定技能・就労',
          t3: '留学ビザ',
          applyBtn: '今すぐ申し込む',
          consultBtn: '無料相談を予約',
        };
      case 'en':
      default:
        return {
          kicker: '篤子 インターナショナル',
          t1: 'LEARN JAPANESE',
          t2: 'WORK IN JAPAN',
          t3: 'STUDY IN JAPAN',
          applyBtn: 'Apply Now',
          consultBtn: 'Book a Free Consultation',
        };
    }
  };
  const heroContent = getHeroContent(lang);

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
          height: '100dvh',
          minHeight: '100dvh',
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
              filter: 'brightness(1.02) contrast(1.04) saturate(1.06)',
              imageRendering: 'auto',
              willChange: 'transform',
            }}
          />

          {/* Cinematic Vignette & Atmospheric Color Grading Overlays - Crystal-clear clarity */}
          <div
            ref={duskOverlayRef}
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(circle at 50% 45%, transparent 50%, rgba(7, 13, 30, 0.06) 75%, rgba(7, 13, 30, 0.28) 100%),
                linear-gradient(180deg, rgba(7, 13, 30, 0.06) 0%, transparent 25%, rgba(7, 13, 30, 0.05) 70%, rgba(7, 13, 30, 0.6) 100%)
              `,
              willChange: 'opacity',
            }}
          />

          {/* Radiant Morning Sunrise Sky Overlay (Emerges as gate opens, matching Kouki morning sky) */}
          <div
            ref={sunriseOverlayRef}
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(circle at 50% 28%, rgba(254, 243, 199, 0.35) 0%, rgba(251, 146, 60, 0.18) 35%, transparent 70%),
                linear-gradient(180deg, rgba(254, 242, 242, 0.25) 0%, transparent 30%, rgba(255, 255, 255, 0.3) 70%, rgba(255, 255, 255, 0.9) 100%)
              `,
              opacity: 0,
              pointerEvents: 'none',
              mixBlendMode: 'screen',
              willChange: 'opacity',
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
              background: 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.12) 0%, rgba(239, 68, 68, 0.06) 45%, transparent 75%)',
              mixBlendMode: 'screen',
              filter: 'blur(30px)',
              pointerEvents: 'none',
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
            background: 'radial-gradient(ellipse at center, rgba(251, 146, 60, 0.14) 0%, rgba(239, 68, 68, 0.08) 40%, transparent 80%)',
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
                src="/images/torii-gate-ultra.png"
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
                  willChange: 'transform',
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

        {/* AMBIENT JAPANESE VERTICAL TYPOGRAPHY WATERMARK (TATEGAKI) */}
        <div
          ref={watermarkRef}
          className="hero-tategaki-watermark-container"
          aria-hidden="true"
        >
          {/* Left Column (Sub-accent): 夢を現実に • 篤子学校 with Thin Vertical Divider */}
          <div className="tategaki-column tategaki-column-left">
            <div className="tategaki-divider-line" />
            <div className="tategaki-text-left" lang="ja">
              夢を現実に • 篤子学校
            </div>
            <div className="tategaki-left-seal" />
          </div>

          {/* Right Column: 日本への道 (Pathway to Japan) with Red Hanko Stamp */}
          <div className="tategaki-column tategaki-column-right">
            <div className="tategaki-text-right" lang="ja">
              日本への道
            </div>
            <div className="tategaki-hanko-seal" />
          </div>
        </div>

        {/* INTRO HINT & CALL-TO-SCROLL (Floats forward in 2.5D space) */}
        <div
          ref={hintRef}
          className="gate-intro-hint"
          style={{
            position: 'absolute',
            bottom: '9.5%',
            textAlign: 'center',
            color: 'white',
            zIndex: 20,
            willChange: 'opacity, transform',
            transform: 'translate3d(calc(var(--mouse-x, 0) * 16px), calc(var(--mouse-y, 0) * 10px), 35px)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Upper Group: Title & Kanji Sub (cleared from gate plaque) */}
          <div className="gate-intro-header-block">
            <h1
              className="gate-hero-title"
              style={{
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: 8,
              }}
            >
              <span className="gate-hero-main">
                ATSUKO <span className="gate-brand-blue" style={{ color: '#38bdf8' }}>INTERNATIONAL</span>
              </span>
              <span className="gate-hero-sub" lang="ja">篤子 学校</span>
            </h1>
          </div>

          {/* Lower Group: License Badge + CTA Button + Scroll Hint */}
          <div className="gate-intro-action-block">
            {/* Official License Badge: Positioned safely near the Walk button, clear of the gate */}
            <div
              className="gate-license-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                background: 'rgba(15, 23, 42, 0.72)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(251,191,36,0.45)',
                padding: '5px 14px',
                borderRadius: '999px',
                color: '#fbbf24',
                fontSize: 'clamp(10px, 1.1vw, 12px)',
                fontWeight: 700,
                letterSpacing: '0.8px',
                marginBottom: 14,
                boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
              }}
            >
              <ShieldCheck size={14} />
              <span>{g.license}</span>
            </div>

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
                onClick={handleWalkThrough}
              >
                <span>{g.walkBtn}</span>
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
              <span>{g.scrollHint}</span>
              <span>↓</span>
            </div>
          </div>
        </div>

        {/* Soft Misty Cloud Gradient Transition at Bottom */}
        <div className="kouki-bottom-mist" aria-hidden="true" />

        {/* KOUKI-STYLE OPEN HERO REVEAL (NO BLUE BOX) */}
        <div
          ref={portalCardRef}
          className="kouki-hero-stage"
          style={{
            opacity: 0,
            transform: 'translateY(28px)',
            pointerEvents: 'none',
            willChange: 'transform, opacity',
          }}
        >
          <div className="kouki-hero-content">
            {/* 1. Circular Emblem Badge */}
            <div className="kouki-logo-circle">
              <img
                src="/images/atsuko-official-logo.png"
                alt="Atsuko International Official Emblem"
                width="84"
                height="84"
                loading="eager"
              />
            </div>

            {/* 2. Japanese Script Kicker */}
            <div className="kouki-jp-kicker" lang="ja">
              {heroContent.kicker}
            </div>

            {/* 3. Grand Dual-Tone Regal Serif Title */}
            <h1 className="kouki-hero-title">
              <span className="kouki-title-dark">ATSUKO</span>
              <span className="kouki-title-blue kouki-title-crimson">INTERNATIONAL</span>
            </h1>

            {/* 4. Elegant Decorative Horizontal Divider */}
            <div className="kouki-hero-divider" aria-hidden="true">
              <span className="divider-line" />
              <span className="divider-diamond">◆</span>
              <span className="divider-line" />
            </div>

            {/* 5. Spaced Feature Bullets */}
            <div className="kouki-hero-tags">
              <span>{heroContent.t1}</span>
              <span className="tag-dot">·</span>
              <span className="tag-highlight">{heroContent.t2}</span>
              <span className="tag-dot">·</span>
              <span>{heroContent.t3}</span>
            </div>

            {/* 6. Two Pill Call-To-Action Buttons */}
            <div className="kouki-hero-actions">
              <button
                type="button"
                onClick={handleApplyNow}
                className="kouki-btn-primary"
                id="hero-apply-btn"
              >
                <span>{heroContent.applyBtn}</span>
              </button>

              <button
                type="button"
                onClick={handleConsultation}
                className="kouki-btn-secondary"
                id="hero-consult-btn"
              >
                <span>{heroContent.consultBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
