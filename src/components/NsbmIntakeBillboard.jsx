import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause 
} from 'lucide-react';

export default function NsbmIntakeBillboard({ lang = 'en' }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const slides = [
    {
      id: 'slide-1',
      posts: [
        {
          id: 'DV0wLR8kYh1',
          title: 'Atsuko International Official 2027 Intake & SSW Admissions'
        },
        {
          id: 'DeQjepkEwiW',
          title: 'SSW Practical Caregiver Simulation Lab & Kaigo Training'
        }
      ]
    },
    {
      id: 'slide-2',
      posts: [
        {
          id: 'DZ_jTzyCJha',
          title: 'Interactive Spoken Kaiwa & Native Sensei Classroom Immersion'
        },
        {
          id: 'Da1rbndEvGK',
          title: 'Official COE Grants & Pre-departure Batches Placed in Japan'
        }
      ]
    }
  ];

  const totalSlides = slides.length;

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay timer: advances every 7s unless hovered or paused
  useEffect(() => {
    if (isHovered || isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearInterval(timer);
  }, [isHovered, isPaused, totalSlides]);

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
  };

  return (
    <section className="nsbm-intake-section" aria-label="Atsuko Admissions Billboard Slideshow">
      <div className="nsbm-intake-container">
        <div 
          className="nsbm-billboard-card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Billboard Sliding Viewport */}
          <div className="nsbm-billboard-viewport">
            <div 
              className="nsbm-billboard-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <div 
                    key={slide.id} 
                    className={`nsbm-billboard-slide ${isActive ? 'is-active' : ''}`}
                  >
                    <div className="nsbm-slide-inner dual-post-slide">
                      {/* Dual Posts Row (Two Photos Per Slide Matching Website Width) */}
                      <div className="nsbm-two-posts-row">
                        {slide.posts.map((post) => (
                          <div key={post.id} className="nsbm-dual-post-stage">
                            <iframe
                              src={`https://www.instagram.com/p/${post.id}/embed/`}
                              title={post.title}
                              className="nsbm-dual-post-iframe"
                              frameBorder="0"
                              scrolling="no"
                              allowTransparency="true"
                              allow="encrypted-media; clipboard-write;"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Left & Right Slideshow Navigation Arrows */}
          <button
            type="button"
            className="nsbm-slide-arrow left"
            onClick={handlePrev}
            title="Previous Slide"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            className="nsbm-slide-arrow right"
            onClick={handleNext}
            title="Next Slide"
            aria-label="Next Slide"
          >
            <ChevronRight size={28} />
          </button>

          {/* Floating Slide Pagination Indicator Dots */}
          <div className="nsbm-floating-dots">
            <button
              type="button"
              className="nsbm-play-toggle-btn"
              onClick={() => setIsPaused(prev => !prev)}
              title={isPaused ? "Play Slideshow" : "Pause Slideshow"}
              aria-label={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? <Play size={12} /> : <Pause size={12} />}
            </button>

            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`nsbm-dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                title={`Slide ${idx + 1}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}

            <span className="nsbm-counter-text">
              0{currentSlide + 1} / 0{totalSlides}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
