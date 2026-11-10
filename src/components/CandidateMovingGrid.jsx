import { useState, useEffect, useCallback, useRef } from 'react';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Play,
  Pause,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Plane
} from 'lucide-react';
import { candidateStoriesData } from '../data/candidateStoriesData';

export default function CandidateMovingGrid({ lang = 'en', onOpenModal }) {
  const [candidates, setCandidates] = useState(candidateStoriesData || []);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const touchStartXRef = useRef(null);

  // Load candidates manifest with automatic fallback
  useEffect(() => {
    let isMounted = true;
    fetch('/candidate-stories.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load JSON');
        return res.json();
      })
      .then((data) => {
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setCandidates(data);
        }
      })
      .catch(() => {
        // Fallback array if JSON is loading or unavailable
        if (isMounted) {
          const fallback = Array.from({ length: 87 }, (_, i) => ({
            id: `story-${i + 1}`,
            image: `/images/deployments/candidate-story-${i + 1}.jpg`,
            alt: `Atsuko International Japan Deployment Candidate ${i + 1}`
          }));
          setCandidates(fallback);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : candidates.length - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev < candidates.length - 1 ? prev + 1 : 0));
      }
    },
    [lightboxIndex, candidates.length]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, handleKeyDown]);

  const openLightbox = (originalIdx) => {
    setLightboxIndex(originalIdx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : candidates.length - 1));
  };

  const showNext = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev < candidates.length - 1 ? prev + 1 : 0));
  };

  // Touch swipe support for lightbox on mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showNext();
      } else {
        showPrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Divide into 3 alternating rows
  const row1 = candidates.filter((_, i) => i % 3 === 0);
  const row2 = candidates.filter((_, i) => i % 3 === 1);
  const row3 = candidates.filter((_, i) => i % 3 === 2);

  // Internationalized text
  const t = {
    en: {
      badge: 'EXPLORE 80+ VERIFIED DEPLOYMENT STORIES',
      title: 'Our Successfully Placed & Employed',
      titleHighlight: 'Candidates in Japan',
      subtitle:
        'Real airport departure moments, visa celebrations, and deployment victories of candidates who completed their Japanese language & vocational training at Atsuko International.',
      verifiedSeal: 'SLBFE Lic. #3293 Verified',
      viewPhoto: 'View Moment',
      storyCount: 'Candidate Deployment',
      departureCity: 'Bandaranaike Int. Airport ✈ Japan',
      applyCta: 'Apply For Japan Working / Student Visa'
    },
    si: {
      badge: 'ජපානයට ගිය අපේක්ෂකයින් 80+ කගේ සත්‍ය ජයග්‍රහණ',
      title: 'ජපානයේ රැකියා හා අධ්‍යාපනය දිනූ',
      titleHighlight: 'අපගේ සාර්ථක සිසුන්',
      subtitle:
        'අත්සුකෝ ආයතනයෙන් ජපන් භාෂාව සහ වෘත්තීය නිපුණතා පුහුණුව නිමවා ජපානය බලා පිටත්වූ අපේක්ෂකයින්ගේ සත්‍ය ගුවන් තොටුපළ පිටත්වීම් සහ වීසා ජයග්‍රහණ.',
      verifiedSeal: 'SLBFE බලපත්‍ර අංක 3293 අනුමත',
      viewPhoto: 'ඡායාරූපය බලන්න',
      storyCount: 'ජපානය බලා පිටත්වීම',
      departureCity: 'කටුනායක ගුවන් තොටුපළ ✈ ජපානය',
      applyCta: 'ජපාන රැකියා / ශිෂ්‍ය වීසා සඳහා ලියාපදිංචි වන්න'
    },
    jp: {
      badge: '80名以上の渡航・合格実績ギャラリー',
      title: '日本での就労・進学を果たした',
      titleHighlight: 'アツコ卒業生の実績',
      subtitle:
        'アツコインターナショナルにて日本語と専門技能を修了し、日本現地へ出発した候補生たちの空港出発と就業の軌跡。',
      verifiedSeal: 'スリランカ海外雇用局（SLBFE 3293）公認',
      viewPhoto: '拡大表示',
      storyCount: '日本渡航実績',
      departureCity: 'バンダラナイケ国際空港 ✈ 日本現地',
      applyCta: '日本就労・留学プログラムにお問い合わせ'
    }
  }[lang] || {
    badge: 'EXPLORE 80+ VERIFIED DEPLOYMENT STORIES',
    title: 'Our Successfully Placed & Employed',
    titleHighlight: 'Candidates in Japan',
    subtitle:
      'Real airport departure moments, visa celebrations, and deployment victories of candidates who completed their Japanese language & vocational training at Atsuko International.',
    verifiedSeal: 'SLBFE Lic. #3293 Verified',
    viewPhoto: 'View Moment',
    storyCount: 'Candidate Deployment',
    departureCity: 'Bandaranaike Int. Airport ✈ Japan',
    applyCta: 'Apply For Japan Working / Student Visa'
  };

  const renderTrackRow = (rowItems, directionClass, durationClass) => {
    // Duplicate to ensure seamless infinite looping without gaps
    const doubleItems = [...rowItems, ...rowItems];

    return (
      <div
        className={`moving-grid-row ${isPausedByUser ? 'is-paused' : ''}`}
        aria-label="Moving photo row"
      >
        <div className={`moving-grid-track ${directionClass} ${durationClass}`}>
          {doubleItems.map((candidate, idx) => {
            // Find original candidate index in the full list for lightbox navigation
            const originalIdx = candidates.findIndex((c) => c.id === candidate.id);
            return (
              <div
                key={`${candidate.id}-${idx}`}
                className="moving-grid-card"
                onClick={() => openLightbox(originalIdx >= 0 ? originalIdx : 0)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(originalIdx >= 0 ? originalIdx : 0);
                  }
                }}
                aria-label={`View photo of candidate deployment ${originalIdx + 1}`}
              >
                <div className="moving-grid-img-wrap">
                  <img
                    src={candidate.image}
                    alt={candidate.alt || `Atsuko candidate ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="moving-grid-img"
                  />
                  {/* Subtle Top Badge */}
                  <div className="moving-grid-card-badge">
                    <Plane size={11} />
                    <span>SLBFE 3293</span>
                  </div>

                  {/* Hover Interaction Overlay */}
                  <div className="moving-grid-hover-overlay">
                    <div className="moving-grid-zoom-btn" aria-hidden="true">
                      <Maximize2 size={18} />
                    </div>
                    <span className="moving-grid-hover-text">{t.viewPhoto}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const activeCandidate = lightboxIndex !== null ? candidates[lightboxIndex] : null;

  return (
    <section className="candidates-moving-grid-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="moving-grid-badge-wrap">
            <span className="section-badge badge-red moving-grid-pill">
              <Sparkles size={14} className="text-red" />
              <span>{t.badge}</span>
            </span>
          </div>
          <h2 className="section-title">
            {t.title} <span className="text-gradient-red">{t.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Moving Grid Tracks Full Bleed Container */}
      <div className="moving-grid-viewport">
        {/* Edge Gradient Fades for Smooth Infinite Illusion */}
        <div className="moving-grid-fade moving-grid-fade-left" aria-hidden="true" />
        <div className="moving-grid-fade moving-grid-fade-right" aria-hidden="true" />

        {/* 3 Infinite Moving Rows */}
        {row1.length > 0 && renderTrackRow(row1, 'track-move-left', 'speed-normal')}
        {row2.length > 0 && renderTrackRow(row2, 'track-move-right', 'speed-slow')}
        {row3.length > 0 && renderTrackRow(row3, 'track-move-left', 'speed-fast')}
      </div>

      {/* High-Resolution Lightbox Modal */}
      {lightboxIndex !== null && activeCandidate && (
        <div
          className="moving-grid-lightbox-backdrop"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Candidate Departure High-Resolution View"
        >
          <div
            className="moving-grid-lightbox-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="moving-grid-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close photo view"
            >
              <X size={22} />
            </button>

            {/* Left Nav Button */}
            <button
              className="moving-grid-lightbox-nav nav-prev"
              onClick={showPrev}
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Right Nav Button */}
            <button
              className="moving-grid-lightbox-nav nav-next"
              onClick={showNext}
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>

            {/* Main High-Res Image View */}
            <div className="moving-grid-lightbox-media">
              <img
                src={activeCandidate.image}
                alt={activeCandidate.alt || `Candidate ${lightboxIndex + 1}`}
                className="moving-grid-lightbox-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
