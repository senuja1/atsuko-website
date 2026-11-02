import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, PhoneCall, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import { officialContacts } from '../data/websiteData';

export default function NsbmIntakeBillboard({ lang = 'en', onOpenModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const isSi = lang === 'si';
  const isJp = lang === 'jp';

  const slides = [
    {
      id: 'slide-1',
      kickerLine1: isSi ? 'ශ්‍රී ලංකාවෙන්' : isJp ? 'スリランカから' : 'FROM SRI LANKA',
      kickerLine2: isSi ? 'ජපානයට' : isJp ? '日本へ' : 'TO JAPAN',
      programSub: isSi ? 'ජපන් භාෂා හා විශ්වවිද්‍යාල අධ්‍යාපනය' : isJp ? '日本語教育 & 大学進学' : 'JAPANESE LANGUAGE & UNIVERSITY PATHWAY',
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
      ],
      ribbonText: isSi 
        ? '2026 ඔක්තෝබර් සහ 2027 අප්‍රේල් නව කණ්ඩායම් සඳහා ලියාපදිංචිය විවෘතයි!' 
        : isJp 
        ? '2026年10月生・2027年4月生 新規出願受付中！' 
        : 'ADMISSIONS OPEN FOR ATSUKO OCTOBER 2026 & APRIL 2027 INTAKES!',
      bgImage: '/images/classroom-sensei.jpg',
      bgPosition: 'center 25%',
      partnerBadge1: 'ATSUKO INTERNATIONAL (PVT) LTD',
      partnerBadge2: 'SLBFE LIC. #3293 • JAPAN MOJ RSO 23登-008312'
    },
    {
      id: 'slide-2',
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
      ],
      ribbonText: isSi 
        ? 'නව කාත්ෘ පුහුණු කණ්ඩායම මේ මස ආරම්භ වේ • ආසන සීමිතයි!' 
        : isJp 
        ? '今月開講の介護新クラス 出願受付中（定員締切間近）' 
        : 'NEW CAREGIVER COHORT COMMENCING THIS MONTH • LIMITED SEATS!',
      bgImage: '/images/real/caregiver_vlcsnap-2026-07-12-11h34m42s115.png',
      bgPosition: 'center 40%',
      partnerBadge1: 'ATSUKO HEALTHCARE LAB',
      partnerBadge2: 'SLBFE LIC. #3293 • TOKYO & AICHI PLACEMENTS'
    },
    {
      id: 'slide-3',
      kickerLine1: isSi ? 'ජපානයේ ප්‍රමුඛ පෙළේ' : isJp ? '有名外食チェーン' : 'WORK IN JAPAN',
      kickerLine2: isSi ? 'ආපනශාලා සේවා' : isJp ? '外食業分野' : 'FOOD SERVICE',
      programSub: isSi ? 'ආගන්තුක සත්කාර හා අවන්හල් කළමනාකරණය' : isJp ? '外食業・ホテル接客' : 'HOSPITALITY & RESTAURANT OPERATIONS',
      programMain: isSi ? 'SSW ආහාර සේවා වසර 5ක නේවාසික රැකියා වීසා' : isJp ? '特定技能 外食業 5年間就労ビザ' : 'SSW FOOD SERVICE 5-YEAR RESIDENCE & WORKING VISA',
      applyTag: isSi ? 'ක්ෂණික සම්මුඛ' : isJp ? '積極採用' : 'FAST-TRACK',
      applyText: isSi ? 'සම්මුඛ පරීක්ෂණ පෙරහුරු සහිතයි' : isJp ? '面接指導・日本語特化' : 'MOCK MENSETSU DRILLS INCLUDED',
      yellowBoxText: isSi 
        ? 'ජපානයේ ප්‍රධාන හෝටල් සහ අවන්හල් ජාලයන්හි සෘජු රැකියා අවස්ථා' 
        : isJp 
        ? '日本全国の外食企業・ホテルでの即戦力採用とビザ手続き' 
        : 'DIRECT CONTRACTS WITH LEADING JAPANESE RESTAURANTS & HOTEL CHAINS',
      bullets: [
        isSi ? 'දැඩි කථන භාෂා පුහුණුව (SPOKEN KAIWA) සහ සංස්කෘතික හැදෑරීම' : isJp ? 'ネイティブ講師による会話重視の実践授業' : 'INTENSIVE SPOKEN KAIWA & REALISTIC INTERVIEW DRILLS',
        isSi ? '100% වීසා සම්මුඛ පරීක්ෂණ සමත් වීමේ විශිෂ්ට වාර්තාව' : isJp ? 'ビザ申請・面接合格率100%の実績' : '100% VISA INTERVIEW PASS RATE'
      ],
      ribbonText: isSi 
        ? 'ආහාර සේවා අංශයේ විශේෂ බඳවා ගැනීම් දැන් ක්‍රියාත්මකයි!' 
        : isJp 
        ? '外食業特定技能 登録受付中！' 
        : 'FAST-TRACK FOOD SERVICE RECRUITMENT UNDERWAY • REGISTER NOW!',
      bgImage: '/images/courses/course-interview-practice.jpg',
      bgPosition: 'center 30%',
      partnerBadge1: 'ATSUKO HOSPITALITY DIVISION',
      partnerBadge2: 'SLBFE LIC. #3293 • 100% LEGAL PATHWAY'
    },
    {
      id: 'slide-4',
      kickerLine1: isSi ? 'ජපාන රජය අලුතින් අනුමත කළ' : isJp ? '新設分野・日本就労' : 'DRIVE YOUR FUTURE',
      kickerLine2: isSi ? 'ප්‍රවාහන ක්ෂේත්‍රය' : isJp ? '自動車運送業' : 'IN JAPAN',
      programSub: isSi ? 'මෝටර් රථ සහ බර වාහන ප්‍රවාහනය' : isJp ? 'トラック運転手・物流' : 'AUTOMOBILE TRANSPORT & TRUCK LOGISTICS',
      programMain: isSi ? 'TRUCK DRIVER SSW වසර 5ක නේවාසික රැකියා වීසා' : isJp ? '特定技能 自動車運送業（トラック・バス）' : 'TRUCK DRIVER SSW 5-YEAR RESIDENCE & WORKING VISA',
      applyTag: isSi ? 'නව අවස්ථා' : isJp ? '特別募集' : 'SPECIAL INTAKE',
      applyText: isSi ? 'ශ්‍රී ලංකා බර වාහන රියදුරු බලපත්‍ර' : isJp ? '大型・中型免許保持者優遇' : 'HEAVY DRIVING LICENSES ACCEPTED',
      yellowBoxText: isSi 
        ? 'ජපානයේ සුවිශේෂී වැටුප් සහ නවාතැන් පහසුකම් සහිත නීතිමය රැකියා' 
        : isJp 
        ? '日本の物流を支えるプロドライバーへ 現地住居サポート完備' 
        : 'PREMIUM COMPENSATION PACKAGE WITH DEDICATED ACCOMMODATION IN JAPAN',
      bullets: [
        isSi ? 'ශ්‍රී ලංකා බර වාහන බලපත්‍රය ජපාන බලපත්‍රයට පරිවර්තනය කිරීමේ මගපෙන්වීම' : isJp ? '日本の運転免許切替対策＆適性研修' : 'SRI LANKA DRIVING LICENSE CONVERSION GUIDANCE',
        isSi ? 'ජපානයේ සෙන්ඩායි සහ අයිචි ශාඛාවන් මගින් සම්පූර්ණ නවාතැන් පහසුකම්' : isJp ? '仙台・愛知オフィスによる現地住居・生活支援' : 'FULL ON-ARRIVAL RESIDENCE & HOUSING IN SENDAI & AICHI'
      ],
      ribbonText: isSi 
        ? 'බර වාහන රියදුරන් සඳහා විශේෂ කණ්ඩායම් ලියාපදිංචිය අරඹා ඇත!' 
        : isJp 
        ? '自動車運送業 特定技能 説明会随時開催！' 
        : 'SPECIAL ENROLLMENT FOR HEAVY DRIVERS & MECHANICS UNDERWAY!',
      bgImage: '/images/courses/course-ssw-truck.jpg',
      bgPosition: 'center 30%',
      partnerBadge1: 'ATSUKO AUTOMOTIVE & LOGISTICS',
      partnerBadge2: 'SLBFE LIC. #3293 • JAPAN SUPPORT ENTITY'
    }
  ];

  const totalSlides = slides.length;
  const active = slides[currentSlide];

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay timer: advances every 6s unless hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered, totalSlides]);

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
    <section className="nsbm-intake-section" aria-label="Atsuko Intake Admissions Billboard">
      <div className="nsbm-intake-container">
        <div 
          className="nsbm-billboard-card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Visual Billboard Area */}
          <div 
            className="nsbm-billboard-visual"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(3, 10, 26, 0.95) 0%, rgba(3, 14, 38, 0.88) 38%, rgba(3, 14, 38, 0.45) 65%, rgba(3, 14, 38, 0.75) 100%), url(${active.bgImage})`,
              backgroundPosition: active.bgPosition || 'center center'
            }}
          >
            {/* Top Row: Partner Badges & Apply Pill */}
            <div className="nsbm-top-bar">
              {/* Left: Academy & Gov Licensing Badges */}
              <div className="nsbm-partner-group">
                <div className="nsbm-logo-box">
                  <span className="nsbm-crest-kanji">篤子</span>
                  <div className="nsbm-logo-text-wrap">
                    <span className="nsbm-logo-title">{active.partnerBadge1}</span>
                    <span className="nsbm-logo-sub">{active.partnerBadge2}</span>
                  </div>
                </div>
              </div>

              {/* Right: NSBM Red/Yellow Apply Pill */}
              <div className="nsbm-apply-wrap">
                <div className="nsbm-apply-pill">
                  <span className="nsbm-apply-tag">{active.applyTag}</span>
                  <span className="nsbm-apply-text">{active.applyText}</span>
                </div>
              </div>
            </div>

            {/* Middle Content Row: Left 3D Typography + Right Yellow Highlight Box */}
            <div className="nsbm-content-row">
              {/* Left Column: Stylized 3D Kicker & Program Title */}
              <div className="nsbm-left-block">
                <div className="nsbm-kicker-3d">
                  <span>{active.kickerLine1}</span>
                  <span className="nsbm-kicker-highlight">{active.kickerLine2}</span>
                </div>

                <div className="nsbm-program-stack">
                  <div className="nsbm-program-sub">{active.programSub}</div>
                  <div className="nsbm-program-main">{active.programMain}</div>
                </div>
              </div>

              {/* Right Column: Yellow Highlight Box & Bullet Triangles */}
              <div className="nsbm-right-block">
                <div className="nsbm-yellow-box">
                  <p>{active.yellowBoxText}</p>
                </div>

                <div className="nsbm-bullets-list">
                  {active.bullets.map((bullet, idx) => (
                    <div key={idx} className="nsbm-bullet-item">
                      <span className="nsbm-bullet-triangle">▶</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows on Left and Right edges */}
            <button
              type="button"
              className="nsbm-slide-arrow left"
              onClick={handlePrev}
              title="Previous Slide"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={26} />
            </button>
            <button
              type="button"
              className="nsbm-slide-arrow right"
              onClick={handleNext}
              title="Next Slide"
              aria-label="Next Slide"
            >
              <ChevronRight size={26} />
            </button>
          </div>

          {/* Bottom Dark Navy Ribbon */}
          <div className="nsbm-bottom-ribbon">
            {/* Center-Left: Admissions Announcement */}
            <div className="nsbm-ribbon-left">
              <Sparkles size={16} className="nsbm-sparkle-icon" />
              <div className="nsbm-ribbon-text">
                {active.ribbonText}
              </div>
            </div>

            {/* Slide Pagination Indicator Dots */}
            <div className="nsbm-dots-row">
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
            </div>

            {/* Right: Green Circular Call Hotline */}
            <div className="nsbm-ribbon-right">
              <a href="tel:+94777933352" className="nsbm-call-button" title="Call for Registrations">
                <div className="nsbm-call-icon">
                  <PhoneCall size={18} />
                </div>
                <div className="nsbm-call-meta">
                  <span className="nsbm-call-label">
                    {isSi ? 'ලියාපදිංචි ඇමතුම්' : 'CALL FOR REGISTRATIONS'}
                  </span>
                  <span className="nsbm-call-numbers">
                    +94 77 793 3352 / +94 112 987 263
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
