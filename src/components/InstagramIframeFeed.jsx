import React, { useState, useEffect, useRef } from 'react';
import { instagramFeedData } from '../data/websiteData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  ExternalLink, 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';

export default function InstagramIframeFeed({ lang = 'en' }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Touch swipe state
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 45;

  const labels = {
    en: {
      badge: "LIVE INSTAGRAM SLIDESHOW",
      heading: "Real-Time Updates & Student Moments",
      subheading: "Follow @atsuko_gakkou for official COE visa issuances, practical lab classes, and daily student life in Sri Lanka and Japan.",
      followBtn: "Follow on Instagram",
      viewPost: "View on Instagram",
      prev: "Previous Post",
      next: "Next Post",
      play: "Resume Auto Slideshow",
      pause: "Pause Auto Slideshow",
      slide: "Post"
    },
    si: {
      badge: "සජීවී ඉන්ස්ටග්‍රෑම් විනිවිදිකාව",
      heading: "නවතම පුවත් සහ සිසුන්ගේ සජීවී අවස්ථා",
      subheading: "ශ්‍රී ලංකාවේ සහ ජපානයේ නිල COE වීසා අනුමැතීන්, ප්‍රායෝගික පුහුණු සහ සිසුන්ගේ දෛනික තොරතුරු සඳහා @atsuko_gakkou සමඟ එක්වන්න.",
      followBtn: "ඉන්ස්ටග්‍රෑම් පිටුවට",
      viewPost: "පෝස්ට් එක බලන්න",
      prev: "පෙර පෝස්ට් එක",
      next: "මීළඟ පෝස්ට් එක",
      play: "ස්වයංක්‍රීයව ධාවනය",
      pause: "විරාමය",
      slide: "පෝස්ට්"
    },
    ja: {
      badge: "公式インスタグラム スライドショー",
      heading: "最新の活動記録と学生の様子",
      subheading: "@atsuko_gakkou をフォローして、スリランカと日本でのCOEビザ交付、実技ラボ授業、日々のスクール生活をご確認ください。",
      followBtn: "Instagramでフォロー",
      viewPost: "Instagramで見る",
      prev: "前の投稿",
      next: "次の投稿",
      play: "自動再生を再開",
      pause: "一時停止",
      slide: "投稿"
    }
  };

  const t = labels[lang] || labels.en;
  const posts = instagramFeedData.posts || [];
  const totalSlides = posts.length;

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  // Auto-play slideshow timer (advances every 6s unless paused or hovered)
  useEffect(() => {
    if (isPaused || isHovered || totalSlides <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, isHovered, totalSlides]);

  // Touch swipe handling
  const handleTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <section className="atsuko-ig-iframe-section" aria-label="Official Instagram Updates Slideshow">
      <div className="atsuko-ig-container">
        {/* Top Header Card */}
        <div className="atsuko-ig-header">
          <div className="atsuko-ig-brand">
            <div className="atsuko-ig-avatar-wrap">
              <div className="atsuko-ig-avatar-ring">
                <span className="atsuko-ig-avatar-text">篤子</span>
              </div>
              <div className="atsuko-ig-icon-badge" title="Instagram Verified">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>

            <div className="atsuko-ig-info">
              <div className="atsuko-ig-pill-tag">
                <Sparkles size={13} className="inline-icon" />
                <span>{t.badge}</span>
              </div>
              <div className="atsuko-ig-title-row">
                <h2 className="atsuko-ig-handle">{instagramFeedData.handle}</h2>
                <CheckCircle size={18} className="atsuko-ig-verified" title="Official Verified Agency" />
                <span className="atsuko-ig-community-tag">{instagramFeedData.followers} Community</span>
              </div>
              <p className="atsuko-ig-subhead">{t.subheading}</p>
            </div>
          </div>

          <div className="atsuko-ig-actions">
            {/* Slideshow Control Buttons */}
            <div className="atsuko-ig-slideshow-controls">
              <button
                type="button"
                className="atsuko-ig-ctrl-btn"
                onClick={handlePrev}
                title={t.prev}
                aria-label={t.prev}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                className={`atsuko-ig-ctrl-btn play-pause-btn ${isPaused ? 'paused' : ''}`}
                onClick={() => setIsPaused(prev => !prev)}
                title={isPaused ? t.play : t.pause}
                aria-label={isPaused ? t.play : t.pause}
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
                <span className="atsuko-ig-ctrl-counter">
                  0{currentSlide + 1} / 0{totalSlides}
                </span>
              </button>

              <button
                type="button"
                className="atsuko-ig-ctrl-btn"
                onClick={handleNext}
                title={t.next}
                aria-label={t.next}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <a
              href={instagramFeedData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="atsuko-ig-follow-btn"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>{t.followBtn}</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="atsuko-ig-tabs-bar">
          {posts.map((post, idx) => (
            <button
              key={post.id}
              type="button"
              className={`atsuko-ig-tab-pill ${currentSlide === idx ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
            >
              <span className="atsuko-ig-tab-index">0{idx + 1}</span>
              <span className="atsuko-ig-tab-tag">{post.tag}</span>
            </button>
          ))}
        </div>

        {/* Slideshow Carousel Stage */}
        <div 
          className="atsuko-ig-slideshow-stage"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            className="atsuko-ig-stage-arrow left"
            onClick={handlePrev}
            title={t.prev}
            aria-label={t.prev}
          >
            <ChevronLeft size={26} />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="atsuko-ig-stage-arrow right"
            onClick={handleNext}
            title={t.next}
            aria-label={t.next}
          >
            <ChevronRight size={26} />
          </button>

          {/* Viewport & Sliding Track */}
          <div className="atsuko-ig-slideshow-viewport">
            <div 
              className="atsuko-ig-slideshow-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {posts.map((post, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <div key={post.id} className={`atsuko-ig-slide-item ${isActive ? 'is-active' : ''}`}>
                    <div className="atsuko-ig-slide-card">
                      {/* Card Header */}
                      <div className="atsuko-ig-card-header">
                        <div className="atsuko-ig-card-tag-wrap">
                          <span className="atsuko-ig-card-tag">{post.tag}</span>
                          <span className="atsuko-ig-slide-badge">{t.slide} {idx + 1} / {totalSlides}</span>
                        </div>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="atsuko-ig-card-link"
                          title={t.viewPost}
                        >
                          <span>{t.viewPost}</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>

                      {/* Embedded Instagram Iframe */}
                      <div className="atsuko-ig-slide-iframe-wrap">
                        <iframe
                          src={`https://www.instagram.com/p/${post.id}/embed/`}
                          title={post.title}
                          className="atsuko-ig-slide-iframe"
                          frameBorder="0"
                          scrolling="no"
                          allowTransparency="true"
                          allow="encrypted-media; clipboard-write;"
                          loading="lazy"
                        />
                      </div>

                      {/* Card Footer */}
                      <div className="atsuko-ig-slide-footer">
                        <div className="atsuko-ig-slide-info">
                          <h3 className="atsuko-ig-slide-title">{post.title}</h3>
                          <p className="atsuko-ig-slide-sub">
                            Atsuko International Official Instagram (@atsuko_gakkou)
                          </p>
                        </div>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="atsuko-ig-slide-cta"
                        >
                          <span>Open Post</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Slideshow Pagination Dots & Indicators */}
        <div className="atsuko-ig-pagination">
          <div className="atsuko-ig-dots-wrap">
            {posts.map((post, idx) => (
              <button
                key={post.id}
                type="button"
                className={`atsuko-ig-dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                title={`Go to slide ${idx + 1}: ${post.title}`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className="atsuko-ig-dot-pill"></span>
              </button>
            ))}
          </div>

          <div className="atsuko-ig-pagination-note">
            <span className="atsuko-ig-pulse-dot"></span>
            <span>Swipe or click arrows to view more posts</span>
          </div>
        </div>

        {/* Bottom Assurance Note */}
        <div className="atsuko-ig-bottom-bar">
          <div className="atsuko-ig-live-indicator">
            <span className="atsuko-ig-pulse-dot"></span>
            <span>Real-time feeds are securely embedded directly from the official Instagram platform.</span>
          </div>
          <a
            href={instagramFeedData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="atsuko-ig-direct-link"
          >
            Visit @atsuko_gakkou on Instagram ↗
          </a>
        </div>
      </div>
    </section>
  );
}
