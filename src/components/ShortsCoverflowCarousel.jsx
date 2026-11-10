import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Play,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  MapPin,
  X
} from 'lucide-react';
import { videoSuccessStories } from '../data/websiteData';

function YoutubeIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function ShortsCoverflowCarousel({ lang = 'en', onOpenModal }) {
  // Built-in list of official Atsuko International YouTube Shorts
  const defaultShorts = [
    {
      id: 'zcCYJCcQLFA',
      title: 'ATSUKO INTERNATIONAL - Japan Job Placement Success Story',
      titleSi: 'ජපානයේ රැකියා ලබාගත් අපේ සිසුන්ගේ අදහස්',
      titleJp: '日本就労ビザ獲得・受講生の体験談',
      location: 'Nagoya, Japan',
      locationSi: 'නගෝයා, ජපානය',
      locationJp: '日本・名古屋',
      duration: '01:00'
    },
    {
      id: 'VaAG-Be6ZUk',
      title: 'ATSUKO INTERNATIONAL - JFT Exam Success & Japan Visa Milestone',
      titleSi: 'JFT විභාගය ජයගෙන ජපානයේ රැකියා සිහිනය සැබෑ කරගත් සිසුවෙක්',
      titleJp: 'JFT-Basic合格・日本就労へのステップ',
      location: 'Atsuko International',
      locationSi: 'අත්සුකෝ ජාත්‍යන්තර ආයතනය',
      locationJp: '篤子学校 カダワタ校',
      duration: '01:00'
    },
    {
      id: '43Nvg3NiZ20',
      title: 'Batch 18 Students Real Feedback - Japanese Language Course',
      titleSi: '18 වන කණ්ඩායමේ සිසුන්ගේ අදහස් - 19 වන කණ්ඩායමට ලියාපදිංචි වන්න',
      titleJp: '第18期生 修了レビュー・第19期生募集中',
      location: 'Language Campus',
      locationSi: 'භාෂා පුහුණු මධ්‍යස්ථානය',
      locationJp: '日本語専門教室',
      duration: '01:00'
    },
    {
      id: '1-MST6bTChE',
      title: 'Nursing Care NVQ 03 Course Practical Training & Student Review',
      titleSi: 'Nursing Care NVQ 03 පාඨමාලාවේ ප්‍රායෝගික පුහුණුව සහ සිසු අදහස්',
      titleJp: '介護職員初任者研修・NVQ Level 3 実習レビュー',
      location: 'Kaigo Training Lab',
      locationSi: 'සාත්තු සේවා පුහුණු ඒකකය',
      locationJp: '介護実習シミュレーション',
      duration: '01:00'
    },
    {
      id: 'jaMbpphKV_o',
      title: 'NVQ Course Practical Simulation Training by Atsuko International',
      titleSi: 'NVQ සාත්තු සේවා ප්‍රායෝගික පුහුණු ඒකකය - අත්සුකෝ ජාත්‍යන්තර ආයතනය',
      titleJp: 'アツコ校 介護実習シミュレーション演習',
      location: 'Healthcare Lab',
      locationSi: 'සෞඛ්‍ය ප්‍රායෝගික ඒකකය',
      locationJp: '医療・介護棟',
      duration: '01:00'
    },
    {
      id: 'lhdl9_nXAnE',
      title: 'Japanese Language Course Student Experience & Visa Journey',
      titleSi: 'අපගේ ජපන් භාෂා පාඨමාලාවේ සිසුවියකගේ අදහස්',
      titleJp: '日本語コース受講生のリアルな声',
      location: 'Atsuko International',
      locationSi: 'අත්සුකෝ ආයතනය',
      locationJp: '篤子学校',
      duration: '01:00'
    },
    {
      id: 'buiQB1nwloo',
      title: 'Atsuko International Student Journey & Visa Milestone',
      titleSi: 'ජපාන ශිෂ්‍ය වීසා සාර්ථකත්වය - අත්සුකෝ සිසු අදහස්',
      titleJp: '日本留学ビザ取得の軌跡',
      location: 'Tokyo, Japan',
      locationSi: 'ටෝකියෝ, ජපානය',
      locationJp: '東京・日本',
      duration: '01:00'
    },
    {
      id: 'LPol8PPQsnM',
      title: 'Food Service Sector Selection - Japan Job Deployment',
      titleSi: 'FOOD SERVICE රැකියාවක් ලබාගත් ඇයගේ සතුට',
      titleJp: '外食業分野（特定技能）就労決定',
      location: 'Osaka, Japan',
      locationSi: 'ඔසාකා, ජපානය',
      locationJp: '大阪・日本',
      duration: '01:00'
    },
    {
      id: 'I8SlMRh5APc',
      title: 'Food Service Job Placement in Japan - Atsuko Student Story',
      titleSi: 'ජපානයේ ආහාර සේවා ක්ෂේත්‍රයේ රැකියාවක් දිනාගත් සිසුවිය',
      titleJp: '外食産業への就職を果たした卒業生の声',
      location: 'Nagoya, Japan',
      locationSi: 'නගෝයා, ජපානය',
      locationJp: '愛知県・名古屋',
      duration: '01:00'
    },
    {
      id: 'BHaZrf4-oyo',
      title: 'JFT Exam Passed Student Feedback & Japan Deployment',
      titleSi: 'JFT විභාගය සමත් සිසුවියක් අප ආයතනය ගැන දැක්වූ අදහස්',
      titleJp: 'JFT試験合格受講生による合格体験談',
      location: 'Atsuko International',
      locationSi: 'අත්සුකෝ ආයතනය',
      locationJp: '篤子学校',
      duration: '01:00'
    }
  ];

  const [shorts, setShorts] = useState(defaultShorts);
  const [activeIndex, setActiveIndex] = useState(2); // Start centered
  const [playingId, setPlayingId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef(null);

  // Auto-play / Coverflow smooth cycle
  useEffect(() => {
    if (isHovered || playingId !== null) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % shorts.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isHovered, playingId, shorts.length]);

  const handlePrev = useCallback(() => {
    setPlayingId(null);
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : shorts.length - 1));
  }, [shorts.length]);

  const handleNext = useCallback(() => {
    setPlayingId(null);
    setActiveIndex((prev) => (prev < shorts.length - 1 ? prev + 1 : 0));
  }, [shorts.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartXRef.current = null;
  };

  const getLocalizedTitle = (item) => {
    if (lang === 'si' && item.titleSi) return item.titleSi;
    if ((lang === 'jp' || lang === 'ja') && item.titleJp) return item.titleJp;
    return item.title;
  };

  const getLocalizedLoc = (item) => {
    if (lang === 'si' && item.locationSi) return item.locationSi;
    if ((lang === 'jp' || lang === 'ja') && item.locationJp) return item.locationJp;
    return item.location;
  };

  return (
    <section
      className="shorts-coverflow-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <span className="section-badge badge-red">
            <YoutubeIcon size={14} />
            <span>{lang === 'si' ? 'අපේක්ෂකයින්ගේ වීඩියෝ කතාන්දර' : lang === 'jp' ? '受講生の体験談ショート動画' : 'Candidate Stories & Experiences'}</span>
          </span>
          <h2 className="section-title">
            {lang === 'si' ? 'අපගේ සිසුන්ගේ තනි කතාන්දර' : lang === 'jp' ? '日本就労・進学を果たした' : 'Our Individual Candidates Stories'}{' '}
            <span className="text-gradient-red">
              {lang === 'si' ? 'සහ අදහස්' : lang === 'jp' ? '受講生・修了生たち' : '& Their Experiences'}
            </span>
          </h2>
          <p className="section-subtitle">
            {lang === 'si'
              ? 'අත්සුකෝ ජාත්‍යන්තර ආයතනයේ සිට ජපානය දක්වා අපගේ අපේක්ෂකයින් විසින් බෙදාගත් වීඩියෝ විශේෂාංග, පන්තිකාමර අදහස් සහ වීසා ජයග්‍රහණ නරඹන්න.'
              : lang === 'jp'
              ? 'アツコインターナショナルから日本へ羽ばたいた受講生たちの生の声、教室での学び、ビザ取得の歓喜の瞬間を収めたショート動画ギャラリー。'
              : 'Watch authentic video highlights, classroom feedback, and visa victory moments shared by our individual candidates from Atsuko International to Japan.'}
          </p>
        </div>
      </div>

      {/* 3D Coverflow Stage */}
      <div className="coverflow-stage-wrapper">
        {/* Left Arrow Button */}
        <button
          className="coverflow-arrow-btn coverflow-arrow-left"
          onClick={handlePrev}
          aria-label="Previous video story"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow Button */}
        <button
          className="coverflow-arrow-btn coverflow-arrow-right"
          onClick={handleNext}
          aria-label="Next video story"
        >
          <ChevronRight size={24} />
        </button>

        {/* 3D Cards Track */}
        <div className="coverflow-track">
          {shorts.map((video, idx) => {
            const offset = idx - activeIndex;
            const isCenter = offset === 0;
            const isPlayingThis = playingId === video.id;

            // Only render visible neighbors within range of ±4 to keep DOM performant
            if (Math.abs(offset) > 4) return null;

            return (
              <div
                key={video.id}
                className={`coverflow-card ${isCenter ? 'is-center' : ''} ${offset < 0 ? 'is-left' : ''} ${offset > 0 ? 'is-right' : ''}`}
                style={{
                  '--offset': offset,
                  '--abs-offset': Math.abs(offset),
                  zIndex: 30 - Math.abs(offset)
                }}
                onClick={() => {
                  if (!isCenter) {
                    setPlayingId(null);
                    setActiveIndex(idx);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Video: ${video.title}`}
              >
                <div className="coverflow-card-inner">
                  {isPlayingThis ? (
                    <div className="coverflow-iframe-wrap">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="coverflow-iframe"
                      />
                      <button
                        className="coverflow-stop-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlayingId(null);
                        }}
                        title="Close player"
                        aria-label="Close player"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Video Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={getLocalizedTitle(video)}
                        loading="lazy"
                        className="coverflow-card-thumb"
                      />

                      {/* Top Duration Badge */}
                      <div className="coverflow-duration-pill">
                        <span>{video.duration || '01:00'}</span>
                      </div>

                      {/* Dark Gradient Overlay */}
                      <div className="coverflow-card-gradient" />

                      {/* Center Play Button (Active on Center Card) */}
                      <div className="coverflow-play-wrap">
                        <button
                          className="coverflow-play-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isCenter) {
                              setPlayingId(video.id);
                            } else {
                              setActiveIndex(idx);
                            }
                          }}
                          aria-label={`Play ${video.title}`}
                        >
                          <Play size={20} fill="#0284c7" color="#0284c7" style={{ marginLeft: '3px' }} />
                        </button>
                      </div>

                      {/* Bottom Caption & Location Badge */}
                      <div className="coverflow-card-caption">
                        <div className="coverflow-loc-pill">
                          <MapPin size={10} />
                          <span>{getLocalizedLoc(video)}</span>
                        </div>
                        <h4 className="coverflow-card-title">{getLocalizedTitle(video)}</h4>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="coverflow-dots-bar">
        {shorts.map((_, dotIdx) => (
          <button
            key={dotIdx}
            className={`coverflow-dot ${dotIdx === activeIndex ? 'active' : ''}`}
            onClick={() => {
              setPlayingId(null);
              setActiveIndex(dotIdx);
            }}
            aria-label={`Jump to video ${dotIdx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
