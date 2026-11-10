import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Play,
  ChevronLeft,
  ChevronRight,
  MapPin,
  X
} from 'lucide-react';

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

// Exactly the 12 YouTube videos requested by the user
const userShorts = [
  {
    id: 'DwIbi9WMrn4',
    title: 'Atsuko International - Japan Student Visa & Language Mastery',
    titleSi: 'ජපාන ශිෂ්‍ය වීසා සහ භාෂා පුහුණු සාර්ථකත්වය - අත්සුකෝ ජාත්‍යන්තර ආයතනය',
    titleJp: '日本留学ビザ・日本語習得のリアルな軌跡',
    location: 'Tokyo, Japan',
    locationSi: 'ටෝකියෝ, ජපානය',
    locationJp: '東京・日本',
    duration: '01:00'
  },
  {
    id: '4ZSTvGbNCAM',
    title: 'Batch 17 Final Day Feedback - Japanese Language Course',
    titleSi: 'ජපන් භාෂා පාඨමාලාවේ 17 වන කණ්ඩායමේ සිසුවියක් දැක්වූ සත්‍ය අදහස්',
    titleJp: '第17期生 修了日インタビュー・受講生の率直な感想',
    location: 'Atsuko International',
    locationSi: 'අත්සුකෝ ජාත්‍යන්තර ආයතනය',
    locationJp: '篤子学校 本校',
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
    id: 'Y9l3blHSk5o',
    title: 'Atsuko International - Japanese Career Milestone & Candidate Review',
    titleSi: 'ජපානයේ රැකියා අවස්ථාවක් දිනාගත් අපේක්ෂක අදහස්',
    titleJp: '就労ビザ取得受講生による合格体験談',
    location: 'Nagoya, Japan',
    locationSi: 'නගෝයා, ජපානය',
    locationJp: '愛知県・名古屋',
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
    title: 'ATSUKO INTERNATIONAL - FOOD SERVICE රැකියාවක් ලබාගත් ඇය...',
    titleSi: 'Food Service ක්ෂේත්‍රයේ රැකියාවක් ලබාගත් ඇයගේ සතුට',
    titleJp: '外食業分野（特定技能）就労決定',
    location: 'Osaka, Japan',
    locationSi: 'ඔසාකා, ජපානය',
    locationJp: '大阪・日本',
    duration: '01:00'
  },
  {
    id: 'I8SlMRh5APc',
    title: 'ATSUKO INTERNATIONAL - FOOD SERVICE රැකියාවක් ලබාගත් ඇයගේ සතුට...',
    titleSi: 'ජපානයේ ආහාර සේවා රැකියාවක් හිමිකරගත් සිසුවියගේ අදහස්',
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
  },
  {
    id: 'R48IDvAbhVU',
    title: 'Candidate Success Story & Official Guidance - Atsuko International',
    titleSi: 'අත්සුකෝ ආයතනයේ මගපෙන්වීමෙන් ජපානයට ගිය අපේක්ෂිකාවකගේ අදහස්',
    titleJp: 'アツコ公式ガイダンスと渡航成功事例',
    location: 'Chiba, Japan',
    locationSi: 'චිබා, ජපානය',
    locationJp: '千葉・日本',
    duration: '01:00'
  },
  {
    id: 'ctA43jlUEew',
    title: 'Japan Job Placement Celebration - Atsuko Candidate',
    titleSi: 'ජපාන රැකියා සිහිනය සැබෑ කරගත් සිසුවියකගේ සතුට',
    titleJp: '日本就職内定お祝い・候補生の声',
    location: 'Aichi, Japan',
    locationSi: 'අයිචි, ජපානය',
    locationJp: '愛知県・日本',
    duration: '01:00'
  },
  {
    id: 'hvBtzchK430',
    title: 'Atsuko International Student Journey & Placement Celebration',
    titleSi: 'ජපානය බලා පිටත්වීම සැමරූ අත්සුකෝ සිසුවියගේ අදහස්',
    titleJp: '日本出発前の記念インタビュー',
    location: 'Nagoya, Japan',
    locationSi: 'නගෝයා, ජපානය',
    locationJp: '名古屋・日本',
    duration: '01:00'
  },
  {
    id: 'tw_y7l7qllI',
    title: 'Japan Caregiver Fulltime Course | ATSUKO INTERNATIONAL',
    titleSi: 'සාත්තු සේවා (Kaigo) පූර්ණකාලීන පාඨමාලාව සහ රැකියා පුහුණුව',
    titleJp: '介護（Kaigo）全日制コース・特定技能訓練',
    location: 'Kaigo Training Lab',
    locationSi: 'සාත්තු සේවා පුහුණු ඒකකය',
    locationJp: '介護実習シミュレーション',
    duration: '01:00'
  }
];

export default function ShortsCoverflowCarousel({ lang = 'en' }) {
  const shorts = userShorts;
  const [activeIndex, setActiveIndex] = useState(4); // Center nicely on a featured short
  const [playingId, setPlayingId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef(null);

  // Smooth Auto-cycle when not hovered and video not playing
  useEffect(() => {
    if (isHovered || playingId !== null) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % shorts.length);
    }, 4200);
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

  // Modular cyclic offset: ensures an even wide fan on both sides (left & right)
  const getCyclicOffset = (index, current, total) => {
    let diff = index - current;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
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
            <span>
              {lang === 'si'
                ? 'අපේක්ෂකයින්ගේ වීඩියෝ කතාන්දර'
                : lang === 'jp'
                ? '受講生の体験談ショート動画'
                : 'Candidate Stories & Experiences'}
            </span>
          </span>
          <h2 className="section-title">
            {lang === 'si'
              ? 'අපගේ සිසුන්ගේ තනි කතාන්දර'
              : lang === 'jp'
              ? '日本就労・進学を果たした'
              : 'Our Individual Candidates Stories'}{' '}
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

      {/* Panoramic Wide 3D Coverflow Stage */}
      <div className="coverflow-stage-wrapper">
        {/* Left Arrow Button */}
        <button
          className="coverflow-arrow-btn coverflow-arrow-left"
          onClick={handlePrev}
          aria-label="Previous video story"
        >
          <ChevronLeft size={26} />
        </button>

        {/* Right Arrow Button */}
        <button
          className="coverflow-arrow-btn coverflow-arrow-right"
          onClick={handleNext}
          aria-label="Next video story"
        >
          <ChevronRight size={26} />
        </button>

        {/* 3D Cards Panoramic Track */}
        <div className="coverflow-track">
          {shorts.map((video, idx) => {
            const offset = getCyclicOffset(idx, activeIndex, shorts.length);
            const isCenter = offset === 0;
            const isPlayingThis = playingId === video.id;

            return (
              <div
                key={video.id}
                className={`coverflow-card ${isCenter ? 'is-center' : ''} ${offset < 0 ? 'is-left' : ''} ${offset > 0 ? 'is-right' : ''}`}
                style={{
                  '--offset': offset,
                  '--abs-offset': Math.abs(offset),
                  zIndex: 35 - Math.abs(offset)
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

                      {/* Top Duration Badge "01:00" */}
                      <div className="coverflow-duration-pill">
                        <span>{video.duration || '01:00'}</span>
                      </div>

                      {/* Dark Gradient Overlay for Readability */}
                      <div className="coverflow-card-gradient" />

                      {/* Center Play Button */}
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
                          <Play size={22} fill="#0284c7" color="#0284c7" style={{ marginLeft: '3px' }} />
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
