import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause 
} from 'lucide-react';

export default function NsbmIntakeBillboard({ lang = 'en', onOpenModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const isSi = lang === 'si';
  const isJp = lang === 'jp';

  const slides = [
    {
      id: 'slide-1',
      instagramId: 'DV0wLR8kYh1',
      bgImage: '/images/classroom-sensei.jpg',
      bgPosition: 'center 30%',
      kickerLine1: isSi ? 'ශ්‍රී ලංකාවෙන්' : isJp ? 'スリランカから' : 'FROM SRI LANKA',
      kickerLine2: isSi ? 'ජපානයට' : isJp ? '日本へ' : 'TO JAPAN',
      programSub: isSi ? 'ජපන් භාෂා හා විශ්වවිද්‍යාල අධ්‍යාපනය' : isJp ? '日本語教育 & 大学進学' : 'JAPANESE LANGUAGE & UNIVERSITY ADMISSIONS',
      programMain: isSi ? 'JLPT N5 / N4 & JFT-BASIC A2 සම්පූර්ණ මගපෙන්වීම' : isJp ? 'JLPT N5・N4・JFT-A2 完全対策プログラム' : 'JLPT N5 / N4 & JFT-BASIC A2 COMPLETE PROGRAM',
      applyTag: isSi ? 'ලියාපදිංචි වන්න' : isJp ? '出願受付中' : 'APPLY WITH',
      applyText: isSi ? 'O/L සහ A/L ප්‍රතිඵල සහිතව' : isJp ? '高校・専門学校卒資格' : 'PENDING O/L & A/L RESULTS',
      yellowBoxText: isSi 
        ? 'ජපානයේ උසස් අධ්‍යාපනය සහ ස්ථිර පදිංචිය සඳහා කඩිනම් මාර්ගය' 
        : isJp 
        ? '日本での高等教育と安定したキャリアを最速で実現する公式ルート' 
        : 'A PATHWAY THAT FAST-TRACKS YOUR HIGHER EDUCATION & CAREER IN JAPAN',
      bullets: [
        isSi ? 'සෙන්ඩායි සහ ටෝකියෝ ශාඛා සෘජු සහාය' : isJp ? '仙台・東京拠点の現地手厚いサポート' : 'DIRECT SENDAI & TOKYO BRANCH SUPPORT',
        isSi ? 'වීසා ලැබෙන තුරු ශුන්‍ය මූලික ගාස්තු සහතිකය' : isJp ? 'ビザ発給まで初期費用ゼロ保証' : 'ZERO UPFRONT FEES UNTIL VISA APPROVAL'
      ]
    },
    {
      id: 'slide-2',
      instagramId: 'DeQjepkEwiW',
      bgImage: '/images/caregiver-ssw.jpg',
      bgPosition: 'center center',
      kickerLine1: isSi ? 'ජපානයේ ඉහළම වැටුප් සහිත' : isJp ? '高収入・安定雇用' : 'DIRECT CAREER PATHWAY',
      kickerLine2: isSi ? 'කාත්ෘ පුහුණුව' : isJp ? '特定技能 介護' : 'SSW CAREGIVER',
      programSub: isSi ? 'සෞඛ්‍ය හා සාත්තු සේවා වෘත්තීය' : isJp ? '特定技能1号 介護分野' : 'HEALTHCARE & NURSING CARE SERVICES',
      programMain: isSi ? 'SSW 1 KAIGO වසර 5ක රැකියා වීසා' : isJp ? 'SSW 1 SPECIFIED SKILLED WORKER (KAIGO)' : 'SSW 1 SPECIFIED SKILLED WORKER (KAIGO)',
      applyTag: isSi ? 'විශේෂ බඳවා ගැනීම' : isJp ? '随時受付中' : 'HIGH DEMAND',
      applyText: isSi ? 'පෙර පළපුරුද්දක් අවශ්‍ය නොවේ' : isJp ? '未経験からスタート可能' : 'NO PRIOR EXPERIENCE NEEDED',
      yellowBoxText: isSi 
        ? 'ජපාන රජයේ නීතිමය රැකියා සුරක්ෂිතතාව සමගින් ඉහළම ආදායම් මාර්ගයක්' 
        : isJp 
        ? '厚生労働省基準の実技演習と徹底した就職サポート' 
        : 'SECURE A HIGH-SALARY HEALTHCARE CAREER WITH FULL RESIDENCY IN JAPAN',
      bullets: [
        isSi ? 'කඩවත පිහිටි ජපාන වෛද්‍ය ආදර්ශ පුහුණු විද්‍යාගාරය' : isJp ? '専用の介護実習室（本場ベッド設備完備）' : 'IN-HOUSE JAPANESE MEDICAL SIMULATION LAB (KADAWATHA)',
        isSi ? 'PROMETRIC සාත්තු සේවා සහ JFT-A2 ප්‍රශ්න පත්‍ර පෙරහුරු' : isJp ? 'プロメトリック介護評価試験＆JFT対策' : 'PROMETRIC NURSING CARE & JFT-A2 MOCK CBT DRILLS'
      ]
    },
    {
      id: 'slide-3',
      instagramId: 'DZ_jTzyCJha',
      bgImage: '/images/batches/batch-17-completion.jpg',
      bgPosition: 'center 20%',
      kickerLine1: isSi ? 'සජීවී පන්ති කාමර' : isJp ? '実践的日本語指導' : 'NATIVE SENSEI',
      kickerLine2: isSi ? 'භාෂා ප්‍රවීණතාව' : isJp ? '会話力重視' : 'CLASSROOM KAIWA',
      programSub: isSi ? 'දැඩි කථන භාෂා සහ සම්මුඛ පරීක්ෂණ පුහුණුව' : isJp ? '面接指導・日本語特化教育' : 'SPOKEN KAIWA & MOCK MENSETSU DRILLS',
      programMain: isSi ? 'JLPT & JFT විභාග සහ වීසා සම්මුඛ පරීක්ෂණ සූදානම' : isJp ? 'JLPT・JFT試験 & ビザ面接対策' : 'EXPERT JLPT & JFT IMMERSION WITH ACCENT COACHING',
      applyTag: isSi ? 'ක්ෂණික ආරම්භය' : isJp ? '積極採用' : 'FAST-TRACK',
      applyText: isSi ? 'සම්මුඛ පරීක්ෂණ පෙරහුරු සහිතයි' : isJp ? '面接指導・日本語特化' : 'MOCK INTERVIEW DRILLS INCLUDED',
      yellowBoxText: isSi 
        ? 'ජපානයේ ප්‍රමුඛ පෙළේ සමාගම් හා පාසල් සඳහා සෘජු සම්මුඛ පරීක්ෂණ මගපෙන්වීම' 
        : isJp 
        ? '日本の提携校・受入企業への直接面接対策を徹底実施' 
        : 'DIRECT INTERVIEW COACHING FOR TOP JAPANESE ENTERPRISES & SCHOOLS',
      bullets: [
        isSi ? 'දැඩි කථන භාෂා පුහුණුව (SPOKEN KAIWA) සහ සංස්කෘතික හැදෑරීම' : isJp ? 'ネイティブ講師による会話重視の実践授業' : 'INTENSIVE SPOKEN KAIWA & AUDIO LISTENING LABS',
        isSi ? '100% වීසා සම්මුඛ පරීක්ෂණ සමත් වීමේ විශිෂ්ට වාර්තාව' : isJp ? 'ビザ申請・面接合格率100%の実績' : '100% VISA INTERVIEW PASS RATE'
      ]
    },
    {
      id: 'slide-4',
      instagramId: 'Da1rbndEvGK',
      bgImage: '/images/batches/batch-11-graduation.jpg',
      bgPosition: 'center 25%',
      kickerLine1: isSi ? 'විශිෂ්ට ප්‍රතිඵල' : isJp ? '確かな実績' : '1000+ STUDENTS',
      kickerLine2: isSi ? 'ජපාන ජයග්‍රහණ' : isJp ? '日本全国進学' : 'PLACED IN JAPAN',
      programSub: isSi ? 'සිසුන්ගේ සැබෑ අත්දැකීම් සහ පිටත්වීම්' : isJp ? '修了生の生の声と日本生活' : 'STUDENT BATCHES & PRE-DEPARTURE MOMENTS',
      programMain: isSi ? 'සෙන්ඩායි සහ ටෝකියෝ වීසා අනුමැතීන් සහ නවාතැන්' : isJp ? '仙台・東京ビザ発給 & 現地生活サポート' : 'OFFICIAL COE GRANTS & SENDAI / TOKYO HOUSING',
      applyTag: isSi ? 'විශ්වාසනීයයි' : isJp ? '安心の支援' : 'VERIFIED',
      applyText: isSi ? 'නීත්‍යානුකූල රජයේ ලියාපදිංචි ආයතනය' : isJp ? '政府公認機関' : 'GOVERNMENT LICENSED AGENCY',
      yellowBoxText: isSi 
        ? 'වීසා ලැබෙන තුරු ගාස්තු අය නොකරන එකම සහතික ලත් විශ්වාසනීය ආයතනය' 
        : isJp 
        ? 'スリランカ全土で選ばれる確かな実績と安心の現地ネットワーク' 
        : 'SRI LANKA’S MOST TRUSTED JAPAN CONSULTANCY WITH DIRECT JAPAN BRANCHES',
      bullets: [
        isSi ? 'ශ්‍රී ලංකා ගුවන් තොටුපළේ සිට ජපානයට පැමිණීම දක්වා සහාය' : isJp ? '空港送迎から入寮、銀行口座開設まで一括サポート' : 'PRE-DEPARTURE AIRPORT ORIENTATION & ON-ARRIVAL RECEPTION',
        isSi ? 'ජපානයේ සෙන්ඩායි සහ අයිචි ශාඛාවන් මගින් පූර්ණ රැකවරණය' : isJp ? '仙台・愛知の自社オフィスによる安心の生活支援' : 'DIRECT RESIDENCE AND PART-TIME JOB COORDINATION IN JAPAN'
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

  // Autoplay timer: advances every 6s unless hovered or paused
  useEffect(() => {
    if (isHovered || isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 6000);
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
    <section className="nsbm-intake-section" aria-label="Atsuko Admissions Billboard">
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
                    style={{
                      backgroundImage: `linear-gradient(90deg, rgba(2, 10, 28, 0.95) 0%, rgba(2, 12, 36, 0.88) 32%, rgba(2, 12, 36, 0.52) 65%, rgba(2, 12, 36, 0.88) 100%), url(${slide.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: slide.bgPosition || 'center center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="nsbm-slide-inner">
                      {/* Main Content Layout: Left 3D Typography + Center Live Instagram Iframe + Right Yellow Box */}
                      <div className="nsbm-content-split">
                        {/* Left Column: 3D Typography & Program Details */}
                        <div className="nsbm-left-block">
                          <div className="nsbm-kicker-3d">
                            <span>{slide.kickerLine1}</span>
                            <span className="nsbm-kicker-highlight">{slide.kickerLine2}</span>
                          </div>

                          <div className="nsbm-program-stack">
                            <div className="nsbm-program-sub">{slide.programSub}</div>
                            <div className="nsbm-program-main">{slide.programMain}</div>
                          </div>

                          {/* NSBM Red/Yellow Apply Pill */}
                          <div className="nsbm-apply-wrap" style={{ marginTop: '16px' }}>
                            <div 
                              className="nsbm-apply-pill"
                              onClick={() => onOpenModal && onOpenModal(slide.programMain)}
                              role="button"
                              tabIndex={0}
                              style={{ cursor: 'pointer' }}
                            >
                              <span className="nsbm-apply-tag">{slide.applyTag}</span>
                              <span className="nsbm-apply-text">{slide.applyText}</span>
                            </div>
                          </div>
                        </div>

                        {/* Center Stage: Live Instagram Iframe Post */}
                        <div className="nsbm-center-stage">
                          <div className="nsbm-iframe-center-wrap">
                            <iframe
                              src={`https://www.instagram.com/p/${slide.instagramId}/embed/`}
                              title={slide.programSub}
                              className="nsbm-live-iframe-element"
                              frameBorder="0"
                              scrolling="no"
                              allowTransparency="true"
                              allow="encrypted-media; clipboard-write;"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Right Column: Yellow Highlight Box & Bullet Triangles */}
                        <div className="nsbm-right-block">
                          <div className="nsbm-yellow-box">
                            <p>{slide.yellowBoxText}</p>
                          </div>

                          <div className="nsbm-bullets-list">
                            {slide.bullets.map((bullet, bIdx) => (
                              <div key={bIdx} className="nsbm-bullet-item">
                                <span className="nsbm-bullet-triangle">▶</span>
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
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
