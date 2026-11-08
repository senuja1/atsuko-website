import { useEffect, useRef } from 'react';
import { ArrowDown, ShieldCheck } from 'lucide-react';
import { getUiText } from '../data/uiText';

export default function JapaneseGateScrollStage({
  onEnterWebsite,
  lang = 'en',
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

  // Safe 2.5D Parallax: Smooth mouse-move tracking for CSS custom properties (--mouse-x, --mouse-y)
  // Only active on devices with a mouse/fine pointer — completely disabled on mobile/touch to eliminate frame drops
  useEffect(() => {
    const isFinePointer = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let animId = null;
    let isMoving = false;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / innerHeight) * 2 - 1;
      if (!isMoving) {
        isMoving = true;
        animId = requestAnimationFrame(updateParallax);
      }
    };

    const handleMouseLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
      if (!isMoving) {
        isMoving = true;
        animId = requestAnimationFrame(updateParallax);
      }
    };

    const updateParallax = () => {
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      if (containerRef.current) {
        containerRef.current.style.setProperty('--mouse-x', mouseX.toFixed(4));
        containerRef.current.style.setProperty('--mouse-y', mouseY.toFixed(4));
      }

      if (Math.abs(targetMouseX - mouseX) > 0.001 || Math.abs(targetMouseY - mouseY) > 0.001) {
        animId = requestAnimationFrame(updateParallax);
      } else {
        isMoving = false;
        animId = null;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  // Silky scroll loop — reactive, layout-thrash-free scroll engine with automatic sleep on idle/offscreen
  useEffect(() => {
    let animId = null;
    let targetP = 0;
    let currentP = 0;
    let isVisible = true;
    let isRunning = false;
    let containerTop = 0;
    let totalHeight = 0;
    let lastWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
    const lerpFactor = isTouchDevice ? 0.38 : 0.14;

    const cacheMetrics = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      containerTop = window.scrollY + rect.top;
      totalHeight = containerRef.current.offsetHeight - window.innerHeight;
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

    const applyTransforms = (p) => {
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
        hintRef.current.style.transform = isTouchDevice
          ? `translate3d(0, ${hintY}px, 0)`
          : `translate3d(calc(var(--mouse-x, 0) * 16px), calc(var(--mouse-y, 0) * 10px + ${hintY}px), 35px)`;
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
      updateTarget();

      if (!isVisible) {
        isRunning = false;
        animId = null;
        return;
      }

      if (window.scrollY <= 5) {
        targetP = 0;
        currentP = 0;
      } else {
        const diff = targetP - currentP;
        if (Math.abs(diff) < 0.0008) {
          currentP = targetP;
        } else {
          currentP += diff * lerpFactor;
        }
      }

      const p = currentP;

      if (!containerRef.current) {
        isRunning = false;
        animId = null;
        return;
      }

      const approxBottom = containerTop + containerRef.current.offsetHeight - window.scrollY;
      if (approxBottom < 0) {
        if (gateLayerRef.current && gateLayerRef.current.style.visibility !== 'hidden') {
          gateLayerRef.current.style.visibility = 'hidden';
        }
        isRunning = false;
        animId = null;
        return;
      }

      applyTransforms(p);

      // Sleep when target reached — avoids non-stop continuous 60fps/120fps background thrash
      if (Math.abs(targetP - currentP) >= 0.0008) {
        animId = requestAnimationFrame(render);
      } else {
        isRunning = false;
        animId = null;
      }
    };

    const requestRender = () => {
      if (!isRunning && isVisible) {
        isRunning = true;
        animId = requestAnimationFrame(render);
      }
    };

    // IntersectionObserver stops loop completely when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cacheMetrics();
          requestRender();
        } else {
          if (animId) {
            cancelAnimationFrame(animId);
            animId = null;
          }
          isRunning = false;
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleScroll = () => {
      requestRender();
    };

    const handleResize = () => {
      // Ignore mobile URL-bar vertical-only resize events to prevent mid-scroll gate jumping
      const currentW = window.innerWidth;
      if (isTouchDevice && Math.abs(currentW - lastWidth) < 2) {
        return;
      }
      lastWidth = currentW;
      cacheMetrics();
      requestRender();
    };

    const initRaf = requestAnimationFrame(() => {
      cacheMetrics();
      requestRender();
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(initRaf);
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
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
    const isMobileScreen = typeof window !== 'undefined' && window.innerWidth < 768;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nextVisible = entry.isIntersecting;
        if (nextVisible && !isVisible) {
          isVisible = true;
          if (!animId) {
            lastTime = performance.now();
            animId = requestAnimationFrame(render);
          }
        } else if (!nextVisible && isVisible) {
          isVisible = false;
          if (animId) {
            cancelAnimationFrame(animId);
            animId = null;
          }
        }
      },
      { rootMargin: '80px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    let lastCanvasWidth = 0;
    const resize = () => {
      const w = window.innerWidth;
      if (isMobileScreen && Math.abs(w - lastCanvasWidth) < 2 && lastCanvasWidth > 0) return;
      lastCanvasWidth = w;
      const h = window.innerHeight;
      bgCanvas.width = w;
      bgCanvas.height = h;
      fgCanvas.width = w;
      fgCanvas.height = h;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Background petals layer (behind the gate) — lighter count on mobile for 60fps smoothness
    const bgPetals = Array.from({ length: isMobileScreen ? 12 : 22 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 4 + Math.random() * 5,
      speedX: 0.5 + Math.random() * 1.0,
      speedY: 0.7 + Math.random() * 1.2,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.4,
      opacity: 0.25 + Math.random() * 0.35,
    }));

    // Slightly larger foreground petals drifting in front of the gate pillars
    const fgPetals = Array.from({ length: isMobileScreen ? 3 : 5 }, () => ({
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
    const render = (timestamp) => {
      // Throttle to ~30fps for petals — imperceptible difference, halves GPU load
      if (timestamp - lastTime < 33) {
        animId = requestAnimationFrame(render);
        return;
      }
      lastTime = timestamp;

      if (!isVisible) {
        animId = null;
        return;
      }

      // Render background petals
      bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
      bgCtx.fillStyle = '#ffb3c1';
      bgPetals.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotRad += p.rotSpeedRad;

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
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotRad += p.rotSpeedRad;

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

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, []);

  // Smooth cinematic scroll through Torii Gate to reveal the Kouki-style hero
  const handleWalkThrough = () => {
    if (!containerRef.current) return;
    const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
    const target = containerRef.current.offsetTop + totalScroll * 0.90;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  const getHeroContent = (currentLang) => {
    switch (currentLang) {
      case 'si':
        return {
          kicker: '篤子 インターナショナル',
          t1: 'ජපන් භාෂාව',
          t2: 'ජපානයේ රැකියා',
          t3: 'ශිෂ්‍ය වීසා',
        };
      case 'jp':
        return {
          kicker: '篤子 インターナショナル',
          t1: '日本語教育',
          t2: '特定技能・就労',
          t3: '留学ビザ',
        };
      case 'en':
      default:
        return {
          kicker: '篤子 インターナショナル',
          t1: 'LEARN JAPANESE',
          t2: 'WORK IN JAPAN',
          t3: 'STUDY IN JAPAN',
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
        height: '240svh',
        background: '#070d1e',
      }}
    >
      {/* Sticky 3D Stage Container with 1200px perspective wrapper */}
      <div
        className="gate-sticky-stage torii-hero-sticky-viewport"
        style={{
          position: 'sticky',
          top: 0,
          height: '100svh',
          minHeight: '100svh',
          width: '100%',
          overflow: 'clip',
          display: 'grid',
          placeItems: 'center',
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
            width="1920"
            height="1080"
            decoding="async"
            className="hero-layer hero-bg-img"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '50% 48%',
              transformOrigin: '50% 48%',
              filter: 'brightness(1.02) contrast(1.04) saturate(1.06)',
              imageRendering: 'auto',
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
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
            className="torii-gate-layer"
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              transformOrigin: '50% 48%',
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
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
                width="1536"
                height="927"
                fetchPriority="high"
                className="torii-gate-img hero-layer"
                decoding="async"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: '50% 48%',
                  transformOrigin: '50% 48%',
                  userSelect: 'none',
                  display: 'block',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Foreground Sakura Petals Drifting in Front of Gate Pillars (Blurred for Depth) */}
        <canvas
          ref={fgCanvasRef}
          className="gate-fg-canvas"
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
          </div>
        </div>
      </div>
    </div>
  );
}
