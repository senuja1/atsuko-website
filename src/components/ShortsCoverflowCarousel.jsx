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

// All verified authentic YouTube Shorts from Atsuko International (35 unique videos, zero duplicates)
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
  },
  {
    id: 'Wo9bxLKMma8',
    title: 'Atsuko International - Candidate Journey & Japan Deployment',
    titleSi: 'අත්සුකෝ ජාත්‍යන්තර ආයතනය හරහා ජපානයට ගිය සිසු අත්දැකීම්',
    titleJp: 'アツコ公式受講生インタビュー・日本への旅立ち',
    location: 'Tokyo, Japan',
    locationSi: 'ටෝකියෝ, ජපානය',
    locationJp: '東京・日本',
    duration: '01:00'
  },
  {
    id: 'aorVEtTXSMg',
    title: 'Batch 19 Japanese Language Course Enrolment - Atsuko International',
    titleSi: 'ජපන් භාෂා පාඨමාලාවේ 19 වන කණ්ඩායම සඳහා අදම ලියාපදිංචි වන්න',
    titleJp: '第19期生 日本語教育コース開講・募集案内',
    location: 'Kadawatha Campus',
    locationSi: 'කඩවත මූලස්ථානය',
    locationJp: 'カダワタ本校',
    duration: '01:00'
  },
  {
    id: 'pLpwL1gHScA',
    title: 'Join Batch 19 Japanese Language Course - Atsuko International',
    titleSi: '19 වන කණ්ඩායම ජපන් භාෂා පුහුණුව සඳහා ලියාපදිංචි වන්න',
    titleJp: '第19期 日本語学習コース案内',
    location: 'Kadawatha, Sri Lanka',
    locationSi: 'කඩවත, ශ්‍රී ලංකාව',
    locationJp: 'カダワタ・スリランカ',
    duration: '01:00'
  },
  {
    id: '90CDZ9teoqs',
    title: 'Japanese Language Course Batch 19 Enrolment Call',
    titleSi: 'නොවැම්බර් 09 ආරම්භ වන 19 වන ජපන් භාෂා කණ්ඩායම',
    titleJp: '11月開講 第19期日本語講座のご案内',
    location: 'Kadawatha Campus',
    locationSi: 'කඩවත මණ්ඩපය',
    locationJp: 'カダワタ校',
    duration: '01:00'
  },
  {
    id: '9mf76bY2yTI',
    title: 'Batch 17 Japanese Language Course Student Review',
    titleSi: '17 වන ජපන් භාෂා පාඨමාලා කණ්ඩායමේ සිසුවෙකුගේ සත්‍ය අදහස්',
    titleJp: '第17期 日本語コース受講生の率直な感想',
    location: 'Atsuko International',
    locationSi: 'අත්සුකෝ ජාත්‍යන්තර ආයතනය',
    locationJp: '篤子学校',
    duration: '01:00'
  },
  {
    id: '4oPiHLJERXQ',
    title: 'Japan Visa Success & Student Classroom Journey - Atsuko',
    titleSi: 'ජපාන වීසා ජයග්‍රහණය සහ පන්තිකාමර සාර්ථක අත්දැකීම්',
    titleJp: '日本就労ビザ取得と教室での学習成果',
    location: 'Atsuko International',
    locationSi: 'අත්සුකෝ ආයතනය',
    locationJp: '篤子学校',
    duration: '01:00'
  },
  {
    id: 'V3tAwdrcTQY',
    title: 'Candidate Visa Milestone & Departure Moment - Atsuko International',
    titleSi: 'ජපානය බලා පිටත්වීමට පෙර සිසුවියක දැක්වූ අදහස්',
    titleJp: '日本渡航直前インタビュー・候補生の声',
    location: 'Bandaranaike Int. Airport',
    locationSi: 'බණ්ඩාරනායක ජාත්‍යන්තර ගුවන්තොටුපළ',
    locationJp: 'バンダラナイケ国際空港',
    duration: '01:00'
  },
  {
    id: 'EcLigtPZLDE',
    title: 'Congratulations on Achieving the Japan Dream - Atsuko Candidates',
    titleSi: 'ජපන් සිහිනය සැබෑකරගත් ඔබ සැමට උණුසුම් සුභ පැතුම්!',
    titleJp: '日本就労・進学の夢を叶えた皆様へ祝辞',
    location: 'Tokyo, Japan',
    locationSi: 'ටෝකියෝ, ජපානය',
    locationJp: '東京・日本',
    duration: '01:00'
  },
  {
    id: 'evlrIAXs2HA',
    title: 'Authentic Student Feedback & Caregiver Training - Atsuko',
    titleSi: 'අපගේ සිසුන්ගේ සත්‍ය අදහස් සහ සාත්තු සේවා පුහුණුව',
    titleJp: '受講生の率直な感想・介護実習体験',
    location: 'Atsuko International',
    locationSi: 'අත්සුකෝ ආයතනය',
    locationJp: '篤子学校',
    duration: '01:00'
  },
  {
    id: 'IjQEn2Eqqxg',
    title: 'Classroom Experience & Japanese Speaking Practice - Atsuko',
    titleSi: 'ජපන් භාෂා කථන පුහුණුව සහ සිසු අත්දැකීම්',
    titleJp: '日本語会話実践とクラスルーム体験',
    location: 'Atsuko International',
    locationSi: 'අත්සුකෝ පන්තිකාමරය',
    locationJp: '篤子学校 教室',
    duration: '01:00'
  },
  {
    id: 'DZL0qy1QNTg',
    title: 'Japan Job Placement & SSW Candidate Victory - Atsuko',
    titleSi: 'ජපානයේ රැකියා අවස්ථාව හිමිකරගත් අපේක්ෂක සතුට',
    titleJp: '特定技能就労合格・候補生の歓喜',
    location: 'Osaka, Japan',
    locationSi: 'ඔසාකා, ජපානය',
    locationJp: '大阪・日本',
    duration: '01:00'
  },
  {
    id: 'aPE_wvj9AXM',
    title: 'Practical Training & Exam Preparation - Atsuko International',
    titleSi: 'ප්‍රායෝගික පුහුණුව සහ විභාග ජයග්‍රහණ මඟපෙන්වීම',
    titleJp: '実技訓練と試験対策指導',
    location: 'Kaigo Training Lab',
    locationSi: 'සාත්තු සේවා විද්‍යාගාරය',
    locationJp: '介護実習室',
    duration: '01:00'
  },
  {
    id: '4jfdLsMozvU',
    title: 'Atsuko International Student Success & Celebration',
    titleSi: 'අත්සුකෝ සිසු සාර්ථකත්වය සහ ජයග්‍රහණ සැමරීම',
    titleJp: '合格祝い・受講生の旅立ち',
    location: 'Atsuko International',
    locationSi: 'අත්සුකෝ ජාත්‍යන්තර ආයතනය',
    locationJp: '篤子学校',
    duration: '01:00'
  },
  {
    id: 'u5HL4cBYL-Q',
    title: 'Candidate Testimonial on Transparent Guidance - Atsuko',
    titleSi: 'විනිවිදභාවයෙන් යුතු නිල සේවාව පිළිබඳ සිසු අදහස්',
    titleJp: '誠実なサポート体制に関する受講生の声',
    location: 'Atsuko International',
    locationSi: 'අත්සුකෝ ආයතනය',
    locationJp: '篤子学校',
    duration: '01:00'
  },
  {
    id: 'DYYzDqFHwDc',
    title: 'Japanese Speaking & JLPT/JFT Preparation Milestone',
    titleSi: 'JLPT / JFT විභාග ජයග්‍රහණ ගමන් මඟ',
    titleJp: 'JLPT・JFT試験対策と合格への道',
    location: 'Atsuko International',
    locationSi: 'අත්සුකෝ ආයතනය',
    locationJp: '篤子学校',
    duration: '01:00'
  },
  {
    id: 'M7_eNn2EaPQ',
    title: 'Official Candidate Deployment to Japan - Atsuko International',
    titleSi: 'ජපානය බලා නිල වශයෙන් පිටත්ව ගිය සිසු කණ්ඩායම',
    titleJp: '公式日本派遣・出発セレモニー',
    location: 'Tokyo, Japan',
    locationSi: 'ටෝකියෝ, ජපානය',
    locationJp: '東京・日本',
    duration: '01:00'
  },
  {
    id: 'gmHBGgkvOsA',
    title: 'Student Experience & Practical Caregiver Simulation',
    titleSi: 'සිසු අත්දැකීම් සහ ප්‍රායෝගික සාත්තු සේවා පුහුණුව',
    titleJp: '受講生インタビューと介護実技シミュレーション',
    location: 'Kaigo Lab',
    locationSi: 'සාත්තු සේවා ඒකකය',
    locationJp: '介護実習室',
    duration: '01:00'
  },
  {
    id: 'q9ESwlG0ad0',
    title: 'Japan Student & Career Visa Guidance - Atsuko International',
    titleSi: 'ජපාන ශිෂ්‍ය සහ රැකියා වීසා සාර්ථක මඟපෙන්වීම',
    titleJp: '留学＆就労ビザ公式サポート実績',
    location: 'Atsuko International',
    locationSi: 'අත්සුකෝ ආයතනය',
    locationJp: '篤子学校',
    duration: '01:00'
  },
  {
    id: 'thgkUZJPUC4',
    title: 'Making the Japan Dream a Reality - Atsuko Student Review',
    titleSi: 'අත්සුකෝ හරහා ජපන් සිහිනය සැබෑ කරගත් සිසුවියකගේ අදහස්',
    titleJp: '日本の夢を叶えた卒業生のリアルな体験談',
    location: 'Nagoya, Japan',
    locationSi: 'නගෝයා, ජපානය',
    locationJp: '愛知県・名古屋',
    duration: '01:00'
  },
  {
    id: 'nsE63lSroYw',
    title: 'Authentic Classroom Environment & Student Feedback - Atsuko',
    titleSi: 'පන්තිකාමර පරිසරය සහ සිසු දැක්වූ අදහස්',
    titleJp: '教室環境と受講生たちの感想',
    location: 'Atsuko International',
    locationSi: 'අත්සුකෝ මූලස්ථානය',
    locationJp: '篤子学校 本校',
    duration: '01:00'
  },
  {
    id: 'J2l3Ftz3SPs',
    title: 'Atsuko International Language Course Student Review',
    titleSi: 'ජපන් භාෂා පාඨමාලාව හැදෑරූ සිසුවෙකුගේ අදහස්',
    titleJp: '日本語コース受講生 レビュー',
    location: 'Atsuko International',
    locationSi: 'අත්සුකෝ ආයතනය',
    locationJp: '篤子学校',
    duration: '01:00'
  },
  {
    id: 'PTS8NGUuatU',
    title: 'Atsuko International Student Reviews & Visa Story',
    titleSi: 'අත්සුකෝ සිසු අදහස් සහ වීසා ගමන් මඟ',
    titleJp: '受講生レビューと日本ビザストーリー',
    location: 'Atsuko International',
    locationSi: 'අත්සුකෝ ආයතනය',
    locationJp: '篤子学校',
    duration: '01:00'
  },
  {
    id: 'DSMZj2jIYTs',
    title: 'Atsuko International Student Reviews & Testimonial',
    titleSi: 'අපගේ ආයතනය පිළිබඳ සිසු අදහස්',
    titleJp: 'アツコ受講生 合格レビュー・体験談',
    location: 'Atsuko International',
    locationSi: 'අත්සුකෝ ආයතනය',
    locationJp: '篤子学校',
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
            const absOffset = Math.abs(offset);

            // Keep DOM lightweight and 60fps smooth by only rendering visible fan (center ± 6 cards)
            if (absOffset > 6) return null;

            return (
              <div
                key={video.id}
                className={`coverflow-card ${isCenter ? 'is-center' : ''} ${offset < 0 ? 'is-left' : ''} ${offset > 0 ? 'is-right' : ''}`}
                style={{
                  '--offset': offset,
                  '--abs-offset': absOffset,
                  zIndex: 45 - absOffset
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
