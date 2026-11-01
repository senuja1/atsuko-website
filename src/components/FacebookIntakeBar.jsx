import { useState, useEffect, useRef } from 'react';
import {
  PhoneCall,
  ShieldCheck,
  Globe2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { officialContacts } from '../data/websiteData';
import { FacebookIcon, InstagramIcon, YoutubeIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';

export default function FacebookIntakeBar({ lang }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const isSi = lang === 'si';
  const isJp = lang === 'jp';

  // 4 Featured High-Impact Advertising Slides across the Full Bar (NSBM Presentation)
  const posts = [
    {
      id: 'post-1',
      tabLabel: isSi ? '01 නව බඳවා ගැනීම්' : isJp ? '01 新規生募集' : '01 New Intake',
      photo: '/images/classroom-sensei.jpg',
      photoPosition: 'center 20%',
      headline: isSi ? 'නව කණ්ඩායම් බඳවා ගැනීම්' : isJp ? '新規生募集・プログラム説明会' : 'NEW INTAKE',
      headlineSub: isSi ? 'ජපාන පාඨමාලා සහ වීසා වැඩසටහන්' : isJp ? '日本就労・留学プログラム開講' : 'PROGRAMMES & VISA INAUGURATION',
      datePill: isSi ? '2026 ඔක්තෝබර් / 2027 ජනවාරි කණ්ඩායම්' : isJp ? '2026年10月生・2027年1月生 募集中' : 'OCTOBER 2026 & JANUARY 2027 INTAKES',
      disciplines: [
        'JAPANESE LANGUAGE',
        'SSW CAREGIVING',
        'TRUCK DRIVING',
        'NVQ LEVEL 3',
        'STUDENT VISA'
      ],
      adSubtitle: isSi
        ? 'SLBFE No. 3293 පූර්ණ නීතිමය ආරක්ෂාව සහ වීසා ලැබෙන තුරු ශුන්‍ය මූලික ගාස්තු සහතිකය සමගින් ජපානයේ උසස් අධ්‍යාපනය සහ නිල රැකියා අවස්ථා.'
        : isJp
        ? 'SLBFEライセンス第3293号認定。ビザ発給まで初期費用ゼロ保証、現地生活支援も自社で万全。'
        : 'Government-accredited Japanese language fluency and official legal employment pathways with zero upfront fees until visa approval.',
      partnerBadges: [
        { label: 'SLBFE #3293', flag: '🇱🇰' },
        { label: 'Japan MOJ', flag: '🇯🇵' },
        { label: 'Sendai Office', flag: '🇯🇵' }
      ]
    },
    {
      id: 'post-2',
      tabLabel: isSi ? '02 17 වන කණ්ඩායම' : isJp ? '02 第17期生' : '02 Batch 17',
      photo: '/images/batches/batch-17-completion.jpg',
      photoPosition: 'center 30%',
      headline: isSi ? '17 වන ජපන් භාෂා කණ්ඩායම' : isJp ? '第17期 日本語クラス修了' : '17TH JAPANESE BATCH',
      headlineSub: isSi ? 'පාඨමාලා සාර්ථකව අවසන් & පෙරහුරු සම්මුඛ' : isJp ? '修了証書授与 & ビザ事前指導' : 'SUCCESSFULLY COMPLETED & PRE-DEPARTURE ORIENTATION',
      datePill: isSi ? 'JLPT N5, N4 සහ JFT A2 සමතුන්' : isJp ? 'JLPT N5・N4・JFT-A2 全員合格目標' : 'JLPT N5, N4 & JFT-BASIC A2 QUALIFIERS',
      disciplines: [
        'SPOKEN KAIWA',
        'AUDIO LISTENING',
        'MOCK MENSETSU',
        'CBT DRILLS',
        'EMBASSY PREP'
      ],
      adSubtitle: isSi
        ? 'කඩවත ප්‍රධාන කාර්යාලයේදී දැඩි භාෂා සහ සංස්කෘතික පුහුණුව නිමා කළ සියලු සිසුන් සෙන්ඩායි සහ ටෝකියෝ වීසා සඳහා සෘජුවම සුදුසුකම් ලබා ඇත.'
        : isJp
        ? 'カダワタ本校にて第17期生が集中研修を修了。仙台・東京・愛知の受入機関へ向けた面接対策を完了。'
        : 'Congratulations to our 17th batch students completing intensive training at Kadawatha campus and advancing directly to Japan placements.',
      partnerBadges: [
        { label: 'Kadawatha Campus', flag: '🇱🇰' },
        { label: 'JLPT / JFT', flag: '🇯🇵' },
        { label: 'Tokyo Partners', flag: '🇯🇵' }
      ]
    },
    {
      id: 'post-3',
      tabLabel: isSi ? '03 COE වීසා අනුමැතීන්' : isJp ? '03 COE交付実績' : '03 COE Approvals',
      photo: '/images/student-success.jpg',
      photoPosition: 'center 25%',
      headline: isSi ? 'නවතම COE අනුමැතීන්' : isJp ? '最新COE交付実績 多数！' : 'FRESH COE APPROVALS',
      headlineSub: isSi ? 'ටෝකියෝ සහ සෙන්ඩායි උසස් අධ්‍යාපන ආයතන' : isJp ? '東京・仙台・名古屋の日本語学校' : 'DELIVERED FOR TOKYO & SENDAI ACADEMIES',
      datePill: isSi ? '100% වීසා සාර්ථකත්වය · ශුන්‍ය මූලික ගාස්තු' : isJp ? 'ビザ発行まで費用ゼロ保証' : '100% VISA SUCCESS · ZERO INITIAL FEES',
      disciplines: [
        'LEGAL 28 HR WORK PERMIT',
        'AIRPORT RECEPTION',
        'RESIDENCE SETUP',
        'BANK ACCOUNT',
        'SLBFE BACKING'
      ],
      adSubtitle: isSi
        ? 'ජපාන ආගමන විගමන දෙපාර්තමේන්තුවෙන් නිකුත් වූ නිල COE අනුමැතීන්. ගුවන් තොටුපළ පිළිගැනීම, නවාතැන් සහ දේශීය බැංකු ගිණුම් සකස් කිරීම ඇතුළත්ය.'
        : isJp
        ? '出入国在留管理庁より最新COEが多数到着。現地サポート法人による生活基盤確立まで一貫支援。'
        : 'Official Certificates of Eligibility delivered with full legal backing under SLBFE License No. 3293. Complete airport reception & housing included.',
      partnerBadges: [
        { label: 'Tokyo Academies', flag: '🇯🇵' },
        { label: 'Aichi Logistics', flag: '🇯🇵' },
        { label: 'Sendai Support', flag: '🇯🇵' }
      ]
    },
    {
      id: 'post-4',
      tabLabel: isSi ? '04 සාත්තු සහ රියදුරු Lab' : isJp ? '04 介護・運送実習' : '04 Practical Lab',
      photo: '/images/courses/course-nvq-nursing.jpg',
      photoPosition: 'center 35%',
      headline: isSi ? 'කඩවත ප්‍රායෝගික විද්‍යාගාරය' : isJp ? '特定技能 介護・トラック実習' : 'AUTHENTIC SIMULATION LAB',
      headlineSub: isSi ? 'ජපන් රෝහල් ඇඳන් සහ වාණිජ රියදුරු පුහුණුව' : isJp ? '日本仕様医療ベッド・大型トラック実技' : 'JAPANESE HOSPITAL BEDS & TRUCK DRIVING DRILLS',
      datePill: isSi ? 'PROMETRIC CBT සහ NVQ LEVEL 3 සමත් වීම' : isJp ? 'プロメトリックCBT試験 & NVQ3 合格保証' : 'PROMETRIC CBT & NVQ LEVEL 3 PASS GUARANTEED',
      disciplines: [
        'JAPANESE MEDICAL BEDS',
        'MOBILITY WHEELCHAIRS',
        'KAIGO NO NIHONGO',
        'TRUCK LOGISTICS',
        'PATIENT ERGONOMICS'
      ],
      adSubtitle: isSi
        ? 'ජපානයේ රෝහල් සහ වැඩිහිටි නිවාසවල භාවිත වන සැබෑ විද්‍යුත් ඇඳන් සහ උපකරණ සහිත ශ්‍රී ලංකාවේ ප්‍රමුඛතම SSW සාත්තු සේවා ප්‍රායෝගික පුහුණු ඒකකය.'
        : isJp
        ? '日本仕様電動ベッドや特殊車椅子を完備したカダワタ実習センター。プロメトリック試験対策および介護現場マナーを徹底習得。'
        : 'Sri Lanka’s premier practical simulation facility equipped with genuine Japanese hospital beds and wheelchairs for Prometric CBT top marks.',
      partnerBadges: [
        { label: 'Kaigo Lab Kadawatha', flag: '🇱🇰' },
        { label: 'Prometric CBT', flag: '🇯🇵' },
        { label: 'NVQ Level 3', flag: '🇱🇰' }
      ]
    }
  ];

  // Auto-scroll automatically every 4.5 seconds continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % posts.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [posts.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  };

  const active = posts[currentSlide];

  return (
    <section className="fb-intake-banner-section" style={{ padding: '1.75rem 0 2.25rem', background: '#f8fafc' }}>
      <div className="container">
        {/* Full-Bar Advertising Billboard Carousel (NSBM Presentation) */}
        <div 
          className="fb-intake-main-card fb-fullbar-carousel-card"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Full-Width Canvas for Active Ad - Clean Natural Photo with Zero Color Cast */}
          <div key={currentSlide} className="fb-fullbar-stage">
            {/* Full-Bleed Authentic Photo as Full Card Background (Natural Colors) */}
            <div className="fb-fullbar-bg-wrap">
              <img
                src={active.photo}
                alt={active.headline}
                className="fb-fullbar-bg-photo"
                style={{ objectPosition: active.photoPosition || 'center' }}
                loading="lazy"
                decoding="async"
              />
              <div className="fb-fullbar-bg-photo-tint" />
            </div>

            {/* Left Column: Advertising Headlines & Highlights */}
            <div className="fb-fullbar-left">
              {/* Brand Header */}
              <div className="fb-fullbar-brand-row">
                <div className="fb-slide-brand-pill">
                  <img
                    src="/images/atsuko-official-logo.png"
                    alt="Atsuko International"
                    className="fb-slide-logo"
                    width="42"
                    height="42"
                    loading="lazy"
                  />
                  <div>
                    <span className="fb-slide-brand-name">ATSUKO INTERNATIONAL</span>
                    <span className="fb-slide-lic-badge">
                      <ShieldCheck size={11} />
                      SLBFE Lic. #3293
                    </span>
                  </div>
                </div>
              </div>

              {/* Bold Ad Headline */}
              <h2 className="fb-fullbar-headline">
                {active.headline}
                <span className="fb-fullbar-headline-sub">
                  {active.headlineSub}
                </span>
              </h2>

              {/* Disciplines Strip */}
              <div className="fb-intake-disciplines-row fb-fullbar-disciplines">
                {active.disciplines.map((item, idx) => (
                  <span key={idx} className="fb-discipline-item">
                    {idx > 0 && <span className="bullet-sep">|</span>}
                    <span>{item}</span>
                  </span>
                ))}
              </div>

              {/* Crisp Ad Subtitle */}
              <p className="fb-fullbar-ad-subtitle">
                {active.adSubtitle}
              </p>
            </div>

            {/* Right Column: Open space showcasing authentic background photo */}
            <div className="fb-fullbar-right" aria-hidden="true" />

            {/* Navigation Arrows (< and >) */}
            <button
              type="button"
              onClick={prevSlide}
              className="fb-slide-arrow fb-slide-arrow-left"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="fb-slide-arrow fb-slide-arrow-right"
              aria-label="Next Slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom White Bar matching NSBM Reference */}
          <div className="fb-intake-bottom-bar">
            {/* Left: Affiliations */}
            <div className="fb-intake-affiliations">
              <span className="affil-tag">SLBFE Lic. #3293</span>
              <span className="affil-sep">•</span>
              <span className="affil-text">
                {isSi 
                  ? 'ශ්‍රී ලංකා විදේශ සේවා නියුක්ති කාර්යාංශය & ජපාන අධිකරණ අමාත්‍යාංශය (MOJ RSO 23登-008312) අනුබද්ධිතයි' 
                  : 'Affiliated with SLBFE & Japan MOJ Registered Support Org.'}
              </span>
            </div>

            {/* Center: Social Icons + Website Pill */}
            <div className="fb-intake-socials-group">
              <div className="fb-social-icons-row">
                <a href={officialContacts.socials.facebook} target="_blank" rel="noreferrer" title="Facebook" aria-label="Facebook">
                  <FacebookIcon size={18} />
                </a>
                <a href={officialContacts.socials.instagram} target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram">
                  <InstagramIcon size={18} />
                </a>
                <a href={officialContacts.socials.youtube} target="_blank" rel="noreferrer" title="YouTube" aria-label="YouTube">
                  <YoutubeIcon size={18} />
                </a>
                <a href={officialContacts.socials.tiktok} target="_blank" rel="noreferrer" title="TikTok" aria-label="TikTok">
                  <TikTokIcon size={18} />
                </a>
                <a href={officialContacts.socials.whatsappChannel} target="_blank" rel="noreferrer" title="WhatsApp" aria-label="WhatsApp">
                  <WhatsAppIcon size={18} />
                </a>
              </div>
              <a href="https://www.atsukojapan.com" target="_blank" rel="noreferrer" className="fb-intake-web-pill">
                <Globe2 size={13} />
                <span>www.atsukojapan.com</span>
              </a>
            </div>

            {/* Right: Call for Registrations Hotline */}
            <div className="fb-intake-call-group">
              <a href="tel:+94777933352" className="fb-call-pill">
                <div className="fb-call-icon">
                  <PhoneCall size={18} />
                </div>
                <div className="fb-call-text">
                  <span className="fb-call-label">{isSi ? 'ලියාපදිංචි ඇමතුම්' : 'CALL FOR REGISTRATIONS'}</span>
                  <span className="fb-call-number">+94 77 793 3352</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
