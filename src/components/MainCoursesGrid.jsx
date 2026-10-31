import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function MainCoursesGrid({ lang, onNavigate }) {
  const isSi = lang === 'si';
  const isJp = lang === 'jp';

  const courses = [
    {
      id: 'japanese-language',
      category: isSi ? 'ජපන් භාෂාව' : isJp ? '日本語教育' : 'JAPANESE LANGUAGE',
      jpBadge: '日本語',
      headerGradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
      accentColor: '#0284c7',
      bgImage: '/images/courses/course-japanese-language.jpg',
      title: isSi 
        ? 'Japanese Language Course 3 Month' 
        : isJp 
        ? '3ヶ月集中・日本語マスターコース' 
        : 'Japanese Language Course 3 Month',
      jpTitle: '日本語集中プログラム (N5・N4・JFT)',
      desc: isSi
        ? 'N5, N4, JFT Basics සහ දිනපතා කථන (Kaiwa) පුහුණුව සමගින් ජපානයේ ජීවිතයට සහ රැකියාවට සූදානම් වීම.'
        : isJp
        ? 'N5・N4・JFT-A2および実戦会話（カイワ）を短期間で網羅指導。'
        : 'Foundational N5/N4, JFT-Basic A2, and daily spoken Kaiwa classes for life and work in Japan.',
      highlights: isSi
        ? [
            'JLPT N5 & N4 Prep',
            'JFT-Basic A2 Ready',
            'Spoken Kaiwa Practice'
          ]
        : isJp
        ? [
            'JLPT N5・N4 対策',
            'JFT-Basic A2 準備',
            '生きた会話 (カイワ) 特訓'
          ]
        : [
            'JLPT N5 & N4 Prep',
            'JFT-Basic A2 Ready',
            'Spoken Kaiwa Practice'
          ]
    },
    {
      id: 'ssw-skills',
      category: isSi ? 'SSW වෘත්තීය' : isJp ? '特定技能' : 'SSW SKILL COURSES',
      jpBadge: '特定技能',
      headerGradient: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
      accentColor: '#d97706',
      bgImage: '/images/courses/course-ssw-truck.jpg',
      title: isSi 
        ? 'SSW Skill Courses' 
        : isJp 
        ? '特定技能 職能訓練コース' 
        : 'SSW Skill Courses',
      jpTitle: '特定技能1号 職能別訓練 (Prometric)',
      desc: isSi
        ? 'සාත්තු සේවා (Kaigo) සහ වාණිජ රියදුරු (Truck Driving) ප්‍රමුඛ නිල Prometric CBT වෘත්තීය නිපුණතා පුහුණුව.'
        : isJp
        ? '介護および自動車運送分野を中心に特定技能主要職種を実践指導。'
        : 'Vocational skills training focused on Caregiver and Truck Driving, plus Food Service and Hospitality.',
      highlights: isSi
        ? [
            'Kaigo Simulation Lab',
            'Truck Driving & Logistics',
            'Food Service & Hospitality'
          ]
        : isJp
        ? [
            '介護実習シミュレーション',
            '大型トラック運送実技',
            '外食・宿泊・農業指導'
          ]
        : [
            'Kaigo Simulation Lab',
            'Truck Driving & Logistics',
            'Food Service & Hospitality'
          ]
    },
    {
      id: 'nvq-nursing',
      category: isSi ? 'NVQ සාත්තු' : isJp ? '看護・介護' : 'NVQ NURSING CARE',
      jpBadge: '介護福祉',
      headerGradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      accentColor: '#059669',
      bgImage: '/images/courses/course-nvq-nursing.jpg',
      title: isSi 
        ? 'NVQ Level 3 Nursing Classes' 
        : isJp 
        ? 'NVQ レベル3 介護看護実習' 
        : 'NVQ Level 3 Nursing Classes',
      jpTitle: '国家資格 NVQ Level 3 看護・介護実習',
      desc: isSi
        ? 'ජපන් රෝහල් ඇඳන් සහිත ප්‍රායෝගික විද්‍යාගාරයේ NVQ Level 3 ජාතික වෘත්තීය සාත්තු සේවා සුදුසුකම.'
        : isJp
        ? '国家資格NVQレベル3取得と日本仕様医療ベッドによる即戦力養成。'
        : 'Hands-on hospital training preparing candidates for National Vocational Qualification (NVQ Level 3).',
      highlights: isSi
        ? [
            'NVQ Level 3 Certification',
            'Hospital Bed Practical Lab',
            'Kaigo Etiquette & Ethics'
          ]
        : isJp
        ? [
            'NVQ Level 3 国家資格',
            '日本仕様医療ベッド実習',
            '介護接遇・倫理教育'
          ]
        : [
            'NVQ Level 3 Certification',
            'Hospital Bed Practical Lab',
            'Kaigo Etiquette & Ethics'
          ]
    },
    {
      id: 'revision-interview',
      category: isSi ? 'පුනරීක්ෂණ සහ සම්මුඛ' : isJp ? '面接・直前対策' : 'REVISION & INTERVIEW',
      jpBadge: '面接対策',
      headerGradient: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
      accentColor: '#1d4ed8',
      bgImage: '/images/courses/course-interview-practice.jpg',
      title: isSi 
        ? 'Revision & Interview Practice' 
        : isJp 
        ? '復習・面接特訓クラス' 
        : 'Revision & Interview Practice',
      jpTitle: '復習特訓・大使館／企業面接対策',
      desc: isSi
        ? 'ඉලක්කගත පුනරීක්ෂණ සහ තානාපති කාර්යාල/සත්කාරක ආයතන ආදර්ශ සම්මුඛ (Mensetsu) පෙරහුරු.'
        : isJp
        ? '過去レッスンの総復習と弱点克服、大使館・企業採用面接シミュレーション。'
        : 'Focused review classes and tailored mock Mensetsu interview sessions for embassy visa placements.',
      highlights: isSi
        ? [
            'Tailored Mock Mensetsu',
            'Embassy & Sponsor Prep',
            'CBT Exam Confidence'
          ]
        : isJp
        ? [
            'ネイティブ講師模擬面接',
            '大使館・企業面接対策',
            'CBT試験直前総復習'
          ]
        : [
            'Tailored Mock Mensetsu',
            'Embassy & Sponsor Prep',
            'CBT Exam Confidence'
          ]
    }
  ];

  const handleNavigateToCourses = (e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate('courses');
    } else {
      window.location.hash = 'courses';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const moreButtonText = isSi ? 'තවත් විස්තර >' : isJp ? '詳細を見る >' : 'MORE >';

  return (
    <section className="atsuko-courses-section">
      <div className="container">
        {/* 4 Cards Grid - Compact Text for Maximized Photo Clarity */}
        <div className="atsuko-courses-grid">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="atsuko-course-card"
            >
              {/* Card Top Category Header Bar */}
              <div 
                className="atsuko-course-header-bar"
                style={{ background: course.headerGradient }}
              >
                <span className="atsuko-course-category-text">
                  {course.category}
                </span>
                <span className="atsuko-course-kanji-tag">
                  {course.jpBadge}
                </span>
              </div>

              {/* Full-bleed Authentic Photo with Maximized Clarity */}
              <div className="atsuko-course-media">
                <img
                  src={course.bgImage}
                  alt={course.title}
                  className="atsuko-course-bg-img"
                  loading="lazy"
                />
                <div className="atsuko-course-gradient-overlay" />

                {/* Compact Content Overlay at the Bottom */}
                <div className="atsuko-course-overlay-content">
                  {/* Course Title */}
                  <h3 className="atsuko-course-title">
                    {course.title}
                  </h3>

                  {/* Japanese Subtitle */}
                  <div className="atsuko-course-jp-title">
                    {course.jpTitle}
                  </div>

                  {/* Compact Course Description */}
                  <p className="atsuko-course-desc">
                    {course.desc}
                  </p>

                  {/* Compact Highlights Checklist (Pills) */}
                  <div className="atsuko-course-pills-list">
                    {course.highlights.map((item, idx) => (
                      <div key={idx} className="atsuko-course-pill-item">
                        <CheckCircle2 size={12} className="atsuko-pill-check-icon" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sleek Rounded "MORE >" Button */}
                  <div className="atsuko-course-button-wrap">
                    <button
                      type="button"
                      onClick={handleNavigateToCourses}
                      className="atsuko-course-more-btn"
                      aria-label={`Learn more about ${course.title}`}
                    >
                      <span>{moreButtonText}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
