import { useState, useEffect, useRef } from 'react';
import {
  ExternalLink,
  PhoneCall,
  Calendar,
  Sparkles,
  ShieldCheck,
  Globe2,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  MessageCircle,
  Share2,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { officialContacts } from '../data/websiteData';
import { FacebookIcon, InstagramIcon, YoutubeIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';

export default function FacebookIntakeBar({ lang, onOpenModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const isSi = lang === 'si';
  const isJp = lang === 'jp';

  // 4 Featured Official Facebook Posts / Announcements across the Full Bar (NSBM Style)
  const posts = [
    {
      id: 'post-1',
      kickerTag: isSi ? 'නිල ෆේස්බුක් නිවේදනය' : isJp ? '公式Facebook発表' : 'OFFICIAL FACEBOOK UPDATE',
      tabLabel: isSi ? '01 නව බඳවා ගැනීම්' : isJp ? '01 新規生募集' : '01 New Intake',
      timeAgo: isSi ? 'පැය 2 කට පෙර' : isJp ? '2時間前' : 'Posted 2 Hours Ago',
      bgGradient: 'linear-gradient(135deg, #091e42 0%, #0052cc 52%, #0065ff 100%)',
      accentColor: '#facc15',
      photo: '/images/classroom-sensei.jpg',
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
      postCaption: isSi
        ? 'ශ්‍රී ලංකා විදේශ සේවා නියුක්ති කාර්යාංශයේ (SLBFE No. 3293) පූර්ණ නීතිමය ආරක්ෂාව යටතේ ජපාන පාඨමාලා සහ රැකියා වීසා සඳහා නව බඳවා ගැනීම් දැන් ඇරඹුනා. වීසා ලැබෙන තුරු කිසිදු මූලික ගාස්තුවක් අය නොකෙරේ.'
        : isJp
        ? 'SLBFEライセンス第3293号認定のもと、日本留学および特定技能プログラムの新規募集を開始。ビザ発給まで初期費用ゼロ、現地生活支援も自社で万全。'
        : 'Official registrations now open for upcoming academic and vocational batches under 100% legal government protection. Zero upfront fee guarantee until visa issuance.',
      likes: '264',
      comments: '52',
      shares: '38',
      partnerBadges: [
        { label: 'SLBFE #3293', flag: '🇱🇰' },
        { label: 'Japan MOJ', flag: '🇯🇵' },
        { label: 'Sendai Office', flag: '🇯🇵' }
      ]
    },
    {
      id: 'post-2',
      kickerTag: isSi ? 'කණ්ඩායම් සාර්ථකත්වය' : isJp ? '第17期 修了実績' : 'RECENT POST · BATCH COMPLETION',
      tabLabel: isSi ? '02 17 වන කණ්ඩායම' : isJp ? '02 第17期生' : '02 Batch 17',
      timeAgo: isSi ? 'ඊයේ සවස 5:15 ට' : isJp ? '昨日 17:15' : 'Posted Yesterday at 5:15 PM',
      bgGradient: 'linear-gradient(135deg, #064e3b 0%, #047857 52%, #059669 100%)', // NSBM Green / Emerald
      accentColor: '#facc15',
      photo: '/images/batches/batch-17-completion.jpg',
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
      postCaption: isSi
        ? 'කඩවත ප්‍රධාන කාර්යාලයේදී 17 වන කණ්ඩායමේ සහතිකපත්‍ර ප්‍රදානය සහ ජපානයේ සෙන්ඩායි සහ ටෝකියෝ වෙත පිටත්වීමට නියමිත සිසුන් සඳහා විශේෂ පෙරහුරු පැවැත්විනි. සියලු සිසුන්ට සුබපැතුම්!'
        : isJp
        ? 'カダワタ本校にて第17期修了式を盛大に挙行。仙台・東京・愛知の受入機関へ向けた大使館面接指導と生活適応オリエンテーションを完了しました。'
        : 'Congratulations to our 17th batch students completing their intensive immersion training at Kadawatha campus. All qualified students are advancing directly to student and SSW visa placements!',
      likes: '348',
      comments: '74',
      shares: '62',
      partnerBadges: [
        { label: 'Kadawatha Campus', flag: '🇱🇰' },
        { label: 'JLPT / JFT', flag: '🇯🇵' },
        { label: 'Tokyo Partners', flag: '🇯🇵' }
      ]
    },
    {
      id: 'post-3',
      kickerTag: isSi ? 'වීසා ජයග්‍රහණ නිවේදනය' : isJp ? '在留資格認定証明書 (COE)' : 'LATEST FB UPDATE · COE APPROVALS',
      tabLabel: isSi ? '03 COE වීසා අනුමැතීන්' : isJp ? '03 COE交付実績' : '03 COE Approvals',
      timeAgo: isSi ? 'දින 3 කට පෙර' : isJp ? '3日前' : 'Posted 3 Days Ago',
      bgGradient: 'linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 52%, #2563eb 100%)', // Deep Navy Blue
      accentColor: '#facc15',
      photo: '/images/student-success.jpg',
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
      postCaption: isSi
        ? 'ජපාන ආගමන විගමන කාර්යාංශයෙන් අපගේ සිසුන් සඳහා නිකුත් කරන ලද නිල COE බලපත්‍ර කඩවත ප්‍රධාන කාර්යාලයට ලැබී ඇත. ගුවන් තොටුපළ පිළිගැනීම සහ නවාතැන් පහසුකම් සූදානම්.'
        : isJp
        ? '日本の出入国在留管理庁より東京・仙台の学校向け在留資格認定証明書（COE）が多数到着。現地サポート法人による生活基盤確立まで一貫支援。'
        : 'Official Certificates of Eligibility delivered with 100% legal backing under SLBFE License No. 3293. Free airport reception, housing setup, and local support in Japan included.',
      likes: '412',
      comments: '89',
      shares: '76',
      partnerBadges: [
        { label: 'Tokyo Academies', flag: '🇯🇵' },
        { label: 'Aichi Logistics', flag: '🇯🇵' },
        { label: 'Sendai Support', flag: '🇯🇵' }
      ]
    },
    {
      id: 'post-4',
      kickerTag: isSi ? 'ප්‍රායෝගික පුහුණු විද්‍යාගාරය' : isJp ? '特定技能 介護実習施設' : 'FACILITY SPOTLIGHT · KADAWATHA',
      tabLabel: isSi ? '04 සාත්තු සහ රියදුරු Lab' : isJp ? '04 介護・運送実習' : '04 Practical Lab',
      timeAgo: isSi ? 'දින 5 කට පෙර' : isJp ? '5日前' : 'Posted 5 Days Ago',
      bgGradient: 'linear-gradient(135deg, #3b1158 0%, #581c87 50%, #7e22ce 100%)', // Royal Purple
      accentColor: '#facc15',
      photo: '/images/courses/course-nvq-nursing.jpg',
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
      postCaption: isSi
        ? 'ජපානයේ සැබෑ රෝහල් සහ වැඩිහිටි නිවාසවල භාවිත වන උපකරණ සහිත ශ්‍රී ලංකාවේ ප්‍රමුඛතම SSW සාත්තු සේවා ප්‍රායෝගික පුහුණු ඒකකය කඩවතදී අත්විඳින්න. ප්‍රායෝගික සැසි දැන් ක්‍රියාත්මකයි.'
        : isJp
        ? '本物の日本仕様電動ベッドや特殊車椅子を完備したカダワタ実習センター。プロメトリック試験対策および介護現場マナーを徹底習得。'
        : 'Our Kadawatha campus features an authentic Japanese hospital simulation lab equipped with genuine medical beds, vital-sign gear, and wheelchair ergonomics for Prometric CBT exams.',
      likes: '320',
      comments: '68',
      shares: '49',
      partnerBadges: [
        { label: 'Kaigo Lab Kadawatha', flag: '🇱🇰' },
        { label: 'Prometric CBT', flag: '🇯🇵' },
        { label: 'NVQ Level 3', flag: '🇱🇰' }
      ]
    }
  ];

  // Auto-slide every 6 seconds unless paused by mouse hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % posts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, posts.length]);

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
        {/* Full-Bar Slideshow Card (NSBM Presentation) */}
        <div 
          className="fb-intake-main-card fb-fullbar-carousel-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Full-Width Canvas for Active Post */}
          <div 
            className="fb-fullbar-stage"
            style={{ background: active.bgGradient }}
          >
            {/* Background Decorative Pattern */}
            <div className="fb-slide-bg-grid" />

            {/* Left Column: Post Details & Typography */}
            <div className="fb-fullbar-left">
              {/* Top Header Row with Brand & Facebook Tag */}
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

                {/* Facebook Post Origin Tag */}
                <a
                  href={officialContacts.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="fb-slide-origin-pill"
                  title="View this post on Facebook"
                >
                  <FacebookIcon size={14} />
                  <span>{active.kickerTag}</span>
                  <span className="fb-slide-meta-time">· {active.timeAgo}</span>
                  <ExternalLink size={11} className="external-arrow" />
                </a>
              </div>

              {/* Post Headline */}
              <h2 className="fb-fullbar-headline">
                {active.headline}
                <span className="fb-fullbar-headline-sub">
                  {active.headlineSub}
                </span>
              </h2>

              {/* Bold Yellow Date/Milestone Pill */}
              <div className="fb-intake-date-pill fb-fullbar-date-pill">
                <Calendar size={18} />
                <span>{active.datePill}</span>
              </div>

              {/* Disciplines Strip with bullet separators */}
              <div className="fb-intake-disciplines-row fb-fullbar-disciplines">
                {active.disciplines.map((item, idx) => (
                  <span key={idx} className="fb-discipline-item">
                    {idx > 0 && <span className="bullet-sep">|</span>}
                    <span>{item}</span>
                  </span>
                ))}
              </div>

              {/* Authentic Post Caption Text */}
              <p className="fb-fullbar-caption-quote">
                "{active.postCaption}"
              </p>

              {/* Action Buttons & Social Engagement */}
              <div className="fb-fullbar-actions-row">
                <button
                  type="button"
                  onClick={() => onOpenModal && onOpenModal(active.headline)}
                  className="fb-slide-btn-primary"
                >
                  <Sparkles size={15} />
                  <span>{isSi ? 'ලියාපදිංචි වන්න' : isJp ? '今すぐ応募' : 'Register Now'}</span>
                </button>

                <a
                  href={officialContacts.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="fb-slide-btn-secondary"
                  title="View on Facebook"
                >
                  <FacebookIcon size={15} />
                  <span>{isSi ? 'ෆේස්බුක් සටහන බලන්න' : isJp ? 'FB投稿を見る' : 'View on Facebook'}</span>
                  <ExternalLink size={12} />
                </a>

                {/* Real-time Social Engagement Chips */}
                <div className="fb-fullbar-social-chips">
                  <span className="fb-engage-chip">
                    <ThumbsUp size={12} /> {active.likes}
                  </span>
                  <span className="fb-engage-chip">
                    <MessageCircle size={12} /> {active.comments}
                  </span>
                  <span className="fb-engage-chip">
                    <Share2 size={12} /> {active.shares}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase & Partner Badges across the Full Bar */}
            <div className="fb-fullbar-right">
              {/* Partner Badges at Top Right */}
              <div className="fb-slide-partner-badges">
                {active.partnerBadges.map((badge, bIdx) => (
                  <div key={bIdx} className="fb-partner-pill">
                    <span className="fb-partner-flag">{badge.flag}</span>
                    <span className="fb-partner-label">{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* Large Authentic Post Photo Frame */}
              <div className="fb-fullbar-photo-frame">
                <img
                  src={active.photo}
                  alt={active.headline}
                  className="fb-fullbar-photo"
                  loading="lazy"
                />
                <div className="fb-slide-photo-gradient" />

                {/* Floating Facebook Handle Tag */}
                <a
                  href={officialContacts.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="fb-slide-photo-floating-tag"
                >
                  <span className="fb-live-pulse-dot" />
                  <FacebookIcon size={13} />
                  <span>@AtsukoInternational</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>

            {/* Navigation Arrows (< and >) */}
            <button
              type="button"
              onClick={prevSlide}
              className="fb-slide-arrow fb-slide-arrow-left"
              aria-label="Previous Post"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="fb-slide-arrow fb-slide-arrow-right"
              aria-label="Next Post"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Full-Width Numbered Slide Tabs Bar */}
          <div className="fb-fullbar-tabs-bar">
            <div className="fb-fullbar-tabs-list">
              {posts.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`fb-fullbar-tab-btn ${currentSlide === idx ? 'active' : ''}`}
                >
                  <span>{p.tabLabel}</span>
                  {currentSlide === idx && <span className="fb-tab-active-dot" />}
                </button>
              ))}
            </div>

            {/* Direct Link to Official Facebook Page */}
            <a
              href={officialContacts.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="fb-fullbar-all-posts-link"
            >
              <FacebookIcon size={14} />
              <span>{isSi ? 'සම්පූර්ණ ෆේස්බුක් පිටුව බලන්න' : isJp ? 'Facebook公式ページを見る' : 'Visit Official Facebook Page'}</span>
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Bottom White Bar matching NSBM Images 1 & 2 */}
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
