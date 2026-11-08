import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Briefcase, 
  Calendar, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Award, 
  Layers, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  Filter,
  GraduationCap,
  HeartPulse,
  Utensils,
  Hotel,
  Hammer,
  Sprout,
  Camera,
  ZoomIn,
  X,
  Users
} from 'lucide-react';
import { coursesData, activeCourseSchedules, pastBatchesGallery } from '../data/websiteData';
import { getUiText } from '../data/uiText';

export default function CoursesPage({ lang, onOpenModal }) {
  const tFull = getUiText(lang);
  const ui = tFull.pages.courses;
  const [scheduleFilter, setScheduleFilter] = useState('all');
  const [proofFilter, setProofFilter] = useState('all');
  const [lightboxProof, setLightboxProof] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxProof(null);
    };
    if (lightboxProof) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxProof]);

  const filteredProofs = pastBatchesGallery.filter(item => {
    if (proofFilter === 'all') return true;
    return item.batch.toLowerCase().replace(/\s+/g, '') === proofFilter;
  });

  const getProofTitle = (item) => {
    if (lang === 'si' && item.titleSi) return item.titleSi;
    if ((lang === 'jp' || lang === 'ja') && item.titleJp) return item.titleJp;
    return item.title;
  };

  const getProofDesc = (item) => {
    if (lang === 'si' && item.descSi) return item.descSi;
    if ((lang === 'jp' || lang === 'ja') && item.descJp) return item.descJp;
    return item.desc;
  };

  const filterSchedules = activeCourseSchedules.filter(item => {
    if (scheduleFilter === 'all') return true;
    if (scheduleFilter === 'language') return item.category.includes('Japanese');
    if (scheduleFilter === 'ssw') return item.category.includes('SSW') || item.category.includes('Prometric');
    return true;
  });

  // Localized Course Content overrides for Sinhala & Japanese
  const localizedLangCourses = coursesData.language.map(c => {
    if (lang === 'si') {
      if (c.id === 'japanese-language-course') {
        return {
          ...c,
          badge: 'පූර්ණකාලීන • පෙ.ව 9:00 – ප.ව 5:00 (සතියට දින 5)',
          title: 'ජපන් භාෂා සහ JFT පාඨමාලාව (Japanese Language & JFT Course)',
          duration: 'මාස 1 (N5) • දින 50 / මාස 2 (JFT / N4)',
          mode: 'අත්සුකෝ ප්‍රධාන මූලස්ථානය (සඳුදා – සිකුරාදා, පෙ.ව 9:00 – ප.ව 5:00)',
          suitableFor: 'අ.පො.ස. උසස් පෙළ (A/L) දක්වා පාසල් ගිය සිසුන් (ඩිප්ලෝමා සහතික අවශ්‍ය නොවේ) — ශිෂ්‍ය වීසා සහ SSW අයදුම්කරුවන්',
          description: 'සතියට දින 5ක් (සඳුදා සිට සිකුරාදා දක්වා) පෙ.ව 9:00 සිට ප.ව 5:00 දක්වා පැවැත්වෙන පූර්ණකාලීන ජපන් භාෂා පාඨමාලාව. මාස 1කින් ශිෂ්‍ය වීසා මට්ටම (JLPT N5 / NAT N5) සහ මාස 2කින් (දින 50කින්) SSW රැකියා වීසා මට්ටම (JFT-Basic A2 / JLPT N4) සම්පූර්ණ කෙරේ.',
          milestones: [
            {
              tag: 'මාස 1 ක පූර්ණකාලීන',
              title: 'JLPT N5 / NAT N5 විෂය නිර්දේශය',
              sub: 'ශිෂ්‍ය වීසා නිල මිණුම් ලකුණ (Student Visa Benchmark)'
            },
            {
              tag: 'දින 50 (මාස 2)',
              title: 'JFT-Basic A2 / JLPT N4 විෂය නිර්දේශය',
              sub: 'SSW රැකියා වීසා නිල මිණුම් ලකුණ (SSW Work Visa Benchmark)'
            }
          ],
          features: [
            'සතියට දින 5ක් (සඳුදා – සිකුරාදා) පෙ.ව 9:00 සිට ප.ව 5:00 දක්වා පූර්ණකාලීන පන්ති',
            'මාස 1කින් සම්පූර්ණ JLPT N5 සහ NAT N5 විෂය නිර්දේශය ආවරණය කෙරේ (ශිෂ්‍ය වීසා මිණුම් ලකුණ)',
            'මාස 2කින් (දින 50කින්) JFT-Basic A2 සහ JLPT N4 විෂය නිර්දේශය ආවරණය කෙරේ (SSW රැකියා වීසා මිණුම් ලකුණ)',
            'ප්‍රායෝගික කථන පුහුණුව (Kaiwa), CBT පරිගණක විභාග පෙරහුරු සහ තානාපති/ආයතනික සම්මුඛ පරීක්ෂණ (Mensetsu) පුහුණුව ඇතුළත් වේ',
          ]
        };
      }
    } else if (lang === 'jp') {
      if (c.id === 'japanese-language-course') {
        return {
          ...c,
          badge: '全日制 • 9:00 – 17:00（週5日・月〜金）',
          title: '総合日本語・JFT集中コース',
          duration: '1ヶ月 (N5) • 50日間 / 2ヶ月 (JFT / N4)',
          mode: 'アツコ本校（月曜〜金曜 9:00 – 17:00）',
          suitableFor: '高校課程（G.C.E. A/L）まで就学した方（ディプロマ不要）— 留学・特定技能申請希望者',
          description: '週5日（月〜金）9:00〜17:00の全日制集中プログラム。1ヶ月で留学ビザ基準（JLPT N5 / NAT N5）、2ヶ月（50日間）で特定技能就労ビザ基準（JFT-Basic A2 / JLPT N4）のカリキュラムを完全習得します。',
          milestones: [
            {
              tag: '1ヶ月 全日制',
              title: 'JLPT N5 / NAT N5 カリキュラム',
              sub: '日本留学ビザ 公式基準'
            },
            {
              tag: '50日間（2ヶ月）',
              title: 'JFT-Basic A2 / JLPT N4 カリキュラム',
              sub: '特定技能（SSW）就労ビザ 公式基準'
            }
          ],
          features: [
            '週5日（月曜〜金曜）9:00〜17:00の全日制集中クラス',
            '1ヶ月でJLPT N5・NAT N5カリキュラムを網羅（留学ビザ基準）',
            '2ヶ月（50日間）でJFT-Basic A2・JLPT N4カリキュラムを網羅（特定技能ビザ基準）',
            '実践会話（カイワ）、CBTパソコン模擬試験、大使館・企業面接（面接）対策を含む',
          ]
        };
      }
    }
    return c;
  });

  const localizedSswCourses = coursesData.sswVocational.map(c => {
    if (lang === 'si') {
      if (c.id === 'ssw-caregiver') {
        return {
          ...c,
          badge: 'ඉහළ ඉල්ලුමක් ඇති ක්ෂේත්‍රය',
          title: 'SSW සාත්තු සේවා (Kaigo) පාඨමාලාව',
          duration: 'ප්‍රායෝගික පුහුණුව + සාත්තු ජපන් භාෂාව',
          mode: 'අත්සුකෝ ප්‍රධාන මූලස්ථානයේ ප්‍රායෝගික පුහුණු ඒකකය',
          description: 'ජපානයේ වැඩිහිටි නිවාස සහ රෝහල් ආශ්‍රිත සාත්තු සේවාව සඳහා පූර්ණ සූදානම (වැටුප් ¥180,000 – ¥240,000 / මසකට). ජපන් රෝහල් ඇඳන් සහිත ප්‍රායෝගික පුහුණුව, සාත්තු භාෂා දැනුම සහ Prometric CBT විභාග මඟපෙන්වීම.',
          features: [
            'ජපන් රෝහල් ඇඳන්, රෝද පුටු භාවිතය සහ රෝගී සත්කාරක ප්‍රායෝගික පුහුණුව',
            'සාත්තු සේවා සඳහා වන විශේෂිත ජපන් භාෂා (Kaigo no Nihongo) දැනුම',
            'Prometric සාත්තු සත්කාරක නිපුණතා ඇගයීම් විභාගය සඳහා සූදානම',
            'ජපානයේ අපගේම කොමාකි ආයතනය හරහා පිළිගත් වෛද්‍ය ආයතන වෙත සෘජු සම්බන්ධීකරණය'
          ]
        };
      }
      if (c.id === 'nvq-nursing') {
        return {
          ...c,
          badge: 'ජාතික වෘත්තීය සුදුසුකම',
          title: 'NVQ Level 3 සාත්තු සේවා පාඨමාලාව',
          duration: 'ප්‍රායෝගික සායනික සහ වාට්ටු පුහුණුව',
          mode: 'අත්සුකෝ ප්‍රධාන මූලස්ථානයේ රෝහල් සමාකරණ ඒකකය',
          description: 'ජපාන සෞඛ්‍ය සේවා ප්‍රමිතීන්ට අනුකූලව පිළිගත් NVQ Level 3 ජාතික වෘත්තීය සුදුසුකම සඳහා අපේක්ෂකයින් සූදානම් කරන ප්‍රායෝගික හෙද හා සාත්තු සේවා පාඨමාලාව.',
          features: [
            'පිළිගත් NVQ Level 3 හෙද හා සාත්තු සේවා ජාතික සහතිකපත් මාවත',
            'ජපන් ප්‍රමිතියේ රෝහල් වාට්ටු උපකරණ භාවිතයෙන් ප්‍රායෝගික සායනික පුහුණුව',
            'රෝගී සනීපාරක්ෂාව, ජීව දත්ත පරීක්ෂාව, වැඩිහිටි ආරක්ෂාව සහ සෞඛ්‍ය ආචාරධර්ම',
            'ජපානයේ සෞඛ්‍ය ක්ෂේත්‍රයේ රැකියා සඳහා කදිම වෘත්තීය පදනම (පෙර ඩිප්ලෝමා අවශ්‍ය නොවේ)'
          ]
        };
      }
      if (c.id === 'ssw-food') {
        return {
          ...c,
          badge: 'ආහාර සහ නවාතැන් සේවා',
          title: 'ආහාර සේවා සහ නවාතැන් පහසුකම් (Food Service & Accommodation)',
          duration: 'මාස 2 ක සූදානම + Prometric විභාගය',
          mode: 'අත්සුකෝ ප්‍රධාන මූලස්ථානය සහ මාර්ගගත Zoom පන්ති',
          description: 'ජපානයේ ප්‍රමුඛ පෙළේ අවන්හල් ජාල, හෝටල් මුළුතැන්ගෙවල්, තරු පන්තියේ හෝටල් සහ සම්ප්‍රදායික රියෝකාන් (Ryokan) ආශ්‍රිත රැකියා සඳහා පුහුණුව. ජපන් ආහාර සුරක්ෂිතතාව (HACCP) සහ ආගන්තුක සත්කාරක (Omotenashi) ප්‍රමිතීන්.',
          features: [
            'ජපන් ආහාර සනීපාරක්ෂාව (HACCP), මුළුතැන්ගෙයි ආරක්ෂාව සහ පාරිභෝගික සේවාව',
            'හෝටල් පිළිගැනීමේ ආචාරධර්ම (Omotenashi) සහ කාමර කළමනාකරණ ප්‍රමිතීන්',
            'Prometric ආහාර සේවා සහ නවාතැන් නිපුණතා ඇගයීම් විභාග ප්‍රශ්න පත්‍ර පෙරහුරුව',
            'SLBFE බලපත්‍ර අංක 3293 යටතේ සෘජු නීත්‍යානුකූල රැකියා ගිවිසුම්'
          ]
        };
      }
      if (c.id === 'ssw-agriculture') {
        return {
          ...c,
          badge: 'කෘෂිකාර්මික ක්ෂේත්‍රය',
          title: 'බෝග වගාව සහ පශු සම්පත් (Crop Farming & Livestock)',
          duration: 'මාස 2 ක පුහුණුව',
          mode: 'පූර්ණ කෘෂිකාර්මික සූදානම',
          description: 'ජපානයේ ඉබරාකි, නගානෝ, අයිචි ආදී ප්‍රධාන කෘෂිකාර්මික ප්‍රාන්තවල ස්වයංක්‍රීය හරිතාගාර බෝග වගාව, එළවළු හා පලතුරු නෙලීම සහ පශු සම්පත් කළමනාකරණය.',
          features: [
            'ජපන් බෝග වගා උපකරණ ආරක්ෂාව, හරිතාගාර වගාව සහ පශු සම්පත් රැකවරණය',
            'Prometric බෝග වගාව සහ පශු සම්පත් නිපුණතා ඇගයීම් විභාග පෙරහුරුව',
            'ජපන් කම්කරු නීති සහ ජාතික සෞඛ්‍ය රක්ෂණය යටතේ පූර්ණ රැකවරණය',
            'අත්සුකෝ ජපන් කාර්යාලය මඟින් සේවා කාලය පුරා නිරන්තර සුබසාධනය'
          ]
        };
      }
      if (c.id === 'ssw-construction') {
        return {
          ...c,
          badge: 'ඉදිකිරීම් සහ සිවිල් ඉංජිනේරු',
          title: 'ඉදිකිරීම් සහ සිවිල් ඉංජිනේරු ශිල්පය',
          duration: 'මාස 2.5 ක තාක්ෂණික පුහුණුව',
          mode: 'ආරක්ෂිත සහ තාක්ෂණික වචන මාලා ඒකකය',
          description: 'ජපාන ආරක්ෂිත ප්‍රමිතීන්ට අනුකූලව සිවිල් ඉංජිනේරු ව්‍යුහ එකලස් කිරීම, අභ්‍යන්තර නිමවුම් සහ විදුලි උපකරණ සවි කිරීම්.',
          features: [
            'සේවා ස්ථාන ආරක්ෂණ ක්‍රමවේද (Anzen Daiichi) සහ මෙවලම් හැසිරවීම',
            'Prometric ඉදිකිරීම් නිපුණතා ඇගයීම් විභාග පෙරහුරුව',
            'අතිකාල දීමනා සහිත ආකර්ෂණීය ජපන් වැටුප් හිමිකම',
            'SLBFE බලපත්‍ර අංක 3293 යටතේ පූර්ණ නීත්‍යානුකූල ලියකියවිලි සැකසීම'
          ]
        };
      }
    } else if (lang === 'jp') {
      if (c.id === 'ssw-caregiver') {
        return {
          ...c,
          badge: '重点受入分野',
          title: '特定技能 介護（Kaigo）実践コース',
          duration: '実務演習＋介護日本語',
          mode: 'アツコ本校 介護実習シミュレーション病棟',
          description: '日本の特別養護老人ホームや医療施設で即戦力となるための実践研修（月給180,000〜240,000円）。日本仕様の介護ベッド・車椅子を用いた実技、介護の専門日本語、プロメトリックCBT試験対策を網羅。',
          features: [
            '日本仕様介護ベッド・車椅子を用いた移乗・介助実技訓練',
            '介護現場で使われる専門用語・記録・申し送りの日本語',
            'プロメトリック介護技能評価試験および介護日本語試験対策',
            '日本現地法人（株式会社Atsuko International）を通じた優良医療・福祉施設への直結マッチング'
          ]
        };
      }
      if (c.id === 'nvq-nursing') {
        return {
          ...c,
          badge: '国家資格コース',
          title: 'NVQ Level 3 看護・介護実務コース',
          duration: '臨床・病棟実技実習',
          mode: 'アツコ本校 病院シミュレーション実習室',
          description: '日本の医療・介護基準に沿った実践的な看護・介護ケアを学び、国家資格NVQ Level 3の取得を目指す専門コース。',
          features: [
            '公認国家資格 NVQ Level 3（看護・介護）取得カリキュラム',
            '日本仕様の医療ベッド・機器を用いた実践的な臨床ケア訓練',
            '患者の衛生管理、バイタルサイン測定、高齢者安全ケア、医療倫理',
            '日本での医療・福祉キャリアに向けた確かな基礎（事前の専門ディプロマ不要）'
          ]
        };
      }
      if (c.id === 'ssw-food') {
        return {
          ...c,
          badge: '外食・宿泊分野',
          title: '特定技能 外食業・宿泊分野（Food Service & Accommodation）',
          duration: '2ヶ月 対策＋プロメトリック試験',
          mode: 'アツコ本校実習室およびオンライン講義',
          description: '日本の大手外食チェーン、ホテル厨房、リゾートホテル、老舗旅館への就労を目指す総合カリキュラム。日本の衛生管理基準（HACCP）やおもてなし接遇マナーを指導。',
          features: [
            'HACCPに基づく衛生管理基準、厨房安全衛生、および接客サービス',
            'ホテルフロント接遇（おもてなし）、客室管理、丁寧な敬語表現',
            'プロメトリック外食業・宿泊業技能評価試験の過去問演習',
            'SLBFE許可No.3293に基づく合法的な雇用契約手続き'
          ]
        };
      }
      if (c.id === 'ssw-agriculture') {
        return {
          ...c,
          badge: '耕種・畜産分野',
          title: '特定技能 耕種農業・畜産（Crop Farming & Livestock）',
          duration: '2ヶ月 専門研修',
          mode: 'アツコ本校 農業総合カリキュラム',
          description: '茨城、長野、愛知などの農業先進地における自動温室栽培、野菜・果樹収穫、および畜産管理に向けた実践講習。',
          features: [
            '日本の農業機械安全使用、施設園芸（耕種）、および畜産飼養管理の専門用語',
            'プロメトリック農業技能評価試験（耕種農業・畜産農業）対策',
            '日本の労働基準法および社会保険・国民健康保険による完全保護',
            '日本現地法人（小牧市拠点）による渡航後の継続的巡回・生活支援'
          ]
        };
      }
      if (c.id === 'ssw-construction') {
        return {
          ...c,
          badge: '建設・土木分野',
          title: '特定技能 建設・土木施工分野',
          duration: '2.5ヶ月 技術安全研修',
          mode: 'アツコ本校 安全工学・専門用語講義',
          description: '日本の厳格な安全基準に基づく型枠施工、鉄筋、内装仕上、土木工事のための実践講習。',
          features: [
            '安全第一（ゼロ災害）現場マナー、安全帯・保護具の使用基準',
            'プロメトリック建設分野特定技能評価試験対策',
            '時間外割増賃金が保証された適正な日本基準給与',
            'SLBFE許可No.3293に基づく完全な出国審査および就労保護'
          ]
        };
      }
    }
    return c;
  });

  return (
    <div className="page-container courses-page">
      {/* 1. Page Hero Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              <Award size={14} />
              {ui.badge}
            </span>
            <h1 className="page-hero-title">
              {ui.titlePre} <span className="text-gradient-red">{ui.titleHighlight}</span>
            </h1>
            <p className="page-hero-subtitle">
              {ui.subtitle}
            </p>

            <div className="course-stats-bar">
              {ui.stats.map((st, idx) => (
                <div key={idx} className="course-stat-item">
                  <span className="course-stat-num">{st.num}</span>
                  <span className="course-stat-lbl">{st.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Japanese Language Proficiency Track */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <BookOpen size={14} />
              {ui.langBadge}
            </span>
            <h2 className="section-title">
              {ui.langTitle} <span className="text-gradient-red">{ui.langHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {ui.langSubtitle}
            </p>
          </div>

          <div className="courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.75rem', maxWidth: localizedLangCourses.length === 1 ? '860px' : undefined, margin: localizedLangCourses.length === 1 ? '0 auto' : undefined }}>
            {localizedLangCourses.map((course) => (
              <div key={course.id} className="course-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-xl)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ background: '#fee2e2', color: '#b91c1c', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                      {course.badge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                      {course.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-900)', margin: '0.25rem 0 0.5rem' }}>
                    {course.title}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-jp)', fontSize: '0.85rem', color: '#b45309', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {course.jpTitle}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {course.description}
                  </p>

                  {course.milestones && course.milestones.length > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '0.85rem', marginBottom: '1.25rem' }}>
                      {course.milestones.map((m, mIdx) => (
                        <div key={mIdx} style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderLeft: mIdx === 0 ? '4px solid #0284c7' : '4px solid #e11d48', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem' }}>
                          <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: mIdx === 0 ? '#0284c7' : '#e11d48', marginBottom: '0.2rem' }}>
                            {m.tag}
                          </span>
                          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.15rem' }}>
                            {m.title}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
                            {m.sub}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {course.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--navy-800)' }}>
                        <CheckCircle2 size={15} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div style={{ background: '#ffffff', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: '#475569', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
                    <strong>{ui.idealCandidateLbl || 'Ideal for:'}</strong> {course.suitableFor}
                  </div>
                  <button 
                    onClick={() => onOpenModal(`Course Enrollment: ${course.title}`)}
                    className="btn btn-primary btn-block"
                  >
                    <span>{ui.enrollBtn || 'Enroll in Course'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SSW Technical & Vocational Training Track */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <Briefcase size={14} />
              {ui.sswBadge}
            </span>
            <h2 className="section-title">
              {ui.sswTitle} <span className="text-gradient-red">{ui.sswHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {ui.sswSubtitle}
            </p>
          </div>

          <div className="courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.75rem' }}>
            {localizedSswCourses.map((course) => (
              <div key={course.id} className="course-card" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-xl)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ background: '#fef3c7', color: '#92400e', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                      {course.badge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                      {course.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', margin: '0.25rem 0 0.5rem' }}>
                    {course.title}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-jp)', fontSize: '0.85rem', color: '#0284c7', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {course.jpTitle}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {course.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {course.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--navy-800)' }}>
                        <CheckCircle2 size={15} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div style={{ background: '#f8fafc', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: '#475569', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
                    <strong>{ui.modeLbl || 'Training Venue:'}</strong> {course.mode}
                  </div>
                  <button 
                    onClick={() => onOpenModal(`SSW Skill Registration: ${course.title}`)}
                    className="btn btn-gold btn-block"
                  >
                    <span>{ui.enrollBtn || 'Register for SSW Training'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Active Real-Time Batch Schedules & Calendar */}
      <section className="section" id="active-schedules" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <Calendar size={14} />
              {ui.scheduleBadge}
            </span>
            <h2 className="section-title">
              {ui.scheduleTitle} <span className="text-gradient-red">{ui.scheduleHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {ui.scheduleSubtitle}
            </p>
          </div>

          {/* Schedule Filter Tabs */}
          <div className="schedule-filter-bar" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div className="filter-pill-group" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button 
                className={`filter-pill ${scheduleFilter === 'all' ? 'active' : ''}`}
                onClick={() => setScheduleFilter('all')}
              >
                {ui.filterAll || 'All Batches'} ({activeCourseSchedules.length})
              </button>
              <button 
                className={`filter-pill ${scheduleFilter === 'language' ? 'active' : ''}`}
                onClick={() => setScheduleFilter('language')}
              >
                {ui.filterLanguage || 'Japanese Language'}
              </button>
              <button 
                className={`filter-pill ${scheduleFilter === 'ssw' ? 'active' : ''}`}
                onClick={() => setScheduleFilter('ssw')}
              >
                {ui.filterSsw || 'SSW Vocational Skills'}
              </button>
            </div>
          </div>

          {/* Structured Responsive Schedules Table */}
          <div className="schedules-table-container">
            <div className="schedules-table-wrapper">
              <table className="schedules-table">
                <thead>
                  <tr>
                    <th>{ui.thCourse || 'Course Name & Category'}</th>
                    <th>{ui.thSchedule || 'Days & Timing'}</th>
                    <th>{ui.modeLbl || 'Venue / Mode'}</th>
                    <th>{ui.thAction || 'Action'}</th>
                  </tr>
                </thead>
                <tbody>
                  {filterSchedules.map((batch) => {
                    const courseName = lang === 'si'
                      ? (batch.id.includes('n5-fulltime') ? 'ජපන් භාෂා පාඨමාලාව — ශිෂ්‍ය වීසා මට්ටම (JLPT N5 / NAT N5)'
                         : batch.id.includes('jft-ssw-fulltime') ? 'ජපන් භාෂා සහ JFT පාඨමාලාව — SSW මට්ටම (JFT-Basic / JLPT N4)'
                         : batch.id.includes('caregiver') ? 'SSW සාත්තු සේවා (Kaigo) ප්‍රායෝගික පාඨමාලාව'
                         : batch.id.includes('nvq-nursing') ? 'NVQ Level 3 සාත්තු සේවා පාඨමාලාව'
                         : batch.id.includes('food') ? 'SSW ආහාර සේවා සහ නවාතැන් පහසුකම් පුහුණුව'
                         : batch.id.includes('crop-livestock') ? 'SSW බෝග වගාව සහ පශු සම්පත් පුහුණුව'
                         : batch.course)
                      : lang === 'jp'
                        ? (batch.id.includes('n5-fulltime') ? '総合日本語コース — 留学基準 (JLPT N5 / NAT N5)'
                           : batch.id.includes('jft-ssw-fulltime') ? '総合日本語・JFTコース — 特定技能基準 (JFT-Basic / JLPT N4)'
                           : batch.id.includes('caregiver') ? '特定技能 介護（Kaigo）実践コース'
                           : batch.id.includes('nvq-nursing') ? 'NVQ Level 3 看護・介護実務コース'
                           : batch.id.includes('food') ? '特定技能 外食業・宿泊分野コース'
                           : batch.id.includes('crop-livestock') ? '特定技能 耕種農業・畜産分野コース'
                           : batch.course)
                        : batch.course;
                    const catName = lang === 'si'
                      ? (batch.category.includes('Language & SSW') ? 'ජපන් භාෂාව සහ SSW'
                         : batch.category.includes('Language') ? 'ජපන් භාෂාව'
                         : batch.category.includes('CBT') ? 'Prometric CBT පෙරහුරු'
                         : 'SSW වෘත්තීය පුහුණුව')
                      : lang === 'jp'
                        ? (batch.category.includes('Language & SSW') ? '日本語 & 特定技能'
                           : batch.category.includes('Language') ? '日本語教育'
                           : batch.category.includes('CBT') ? 'CBT試験対策'
                           : '特定技能職能研修')
                        : batch.category;
                    const daysName = lang === 'si'
                      ? (batch.days.includes('Monday – Friday') ? 'සඳුදා – සිකුරාදා (සතියට දින 5)'
                         : batch.days.includes('Full-Time / Practical') ? 'පූර්ණකාලීන / ප්‍රායෝගික වාට්ටු පුහුණු සැසි'
                         : batch.days.includes('Weekday & Practical') ? 'සතියේ දින සහ ප්‍රායෝගික වාට්ටු පුහුණු සැසි'
                         : batch.days.includes('Scheduled CBT & Practical') ? 'CBT සහ ප්‍රායෝගික පුහුණු සැසි'
                         : batch.days.includes('Scheduled CBT & Theory') ? 'CBT සහ න්‍යායාත්මක පුහුණු සැසි'
                         : batch.days)
                      : lang === 'jp'
                        ? (batch.days.includes('Monday – Friday') ? '月曜〜金曜（週5日・全日制）'
                           : batch.days.includes('Full-Time / Practical') ? '全日制・病棟実習セッション'
                           : batch.days.includes('Weekday & Practical') ? '平日講義＆病棟実習セッション'
                           : batch.days.includes('Scheduled CBT & Practical') ? 'CBT対策＆実技セッション'
                           : batch.days.includes('Scheduled CBT & Theory') ? 'CBT対策＆理論セッション'
                           : batch.days)
                        : batch.days;
                    const modeName = lang === 'si'
                      ? (batch.mode.includes('CBT Lab') ? 'අත්සුකෝ ප්‍රධාන මූලස්ථානය සහ CBT විද්‍යාගාරය'
                         : batch.mode.includes('Simulation Ward') || batch.mode.includes('Simulation Lab') ? 'අත්සුකෝ ප්‍රධාන ප්‍රායෝගික පුහුණු ඒකකය'
                         : batch.mode.includes('CBT Center') ? 'අත්සුකෝ ප්‍රධාන CBT විභාග මධ්‍යස්ථානය'
                         : batch.mode.includes('Zoom Theory') ? 'අත්සුකෝ ප්‍රධාන මූලස්ථානය සහ Zoom'
                         : 'අත්සුකෝ ප්‍රධාන මූලස්ථානය')
                      : lang === 'jp'
                        ? (batch.mode.includes('CBT Lab') ? 'アツコ本校＆CBTラボ'
                           : batch.mode.includes('Simulation Ward') || batch.mode.includes('Simulation Lab') ? 'アツコ本校 介護実習病棟'
                           : batch.mode.includes('CBT Center') ? 'アツコ本校 CBT試験ラボ'
                           : batch.mode.includes('Zoom Theory') ? 'アツコ本校＋Zoom講義'
                           : 'アツコ本校')
                        : batch.mode;
                    const durationText = lang === 'si'
                      ? (batch.duration.includes('1 Month') ? 'මාස 1 ක පූර්ණකාලීන'
                         : batch.duration.includes('50 Days') ? 'දින 50 (මාස 2)'
                         : batch.duration.includes('Practical + Prometric') ? 'ප්‍රායෝගික + Prometric විභාගය'
                         : batch.duration.includes('NVQ Level 3') ? 'NVQ Level 3 සහතිකකරණය'
                         : batch.duration.includes('2 Months') ? 'මාස 2 ක සූදානම + Prometric'
                         : batch.duration)
                      : lang === 'jp'
                        ? (batch.duration.includes('1 Month') ? '1ヶ月 全日制'
                           : batch.duration.includes('50 Days') ? '50日間（2ヶ月）'
                           : batch.duration.includes('Practical + Prometric') ? '実技＋プロメトリック試験'
                           : batch.duration.includes('NVQ Level 3') ? 'NVQ Level 3 資格取得'
                           : batch.duration.includes('2 Months') ? '2ヶ月対策＋試験'
                           : batch.duration)
                        : batch.duration;

                    return (
                      <tr key={batch.id} className="schedule-row">
                        <td className="cell-course">
                          <div className="batch-name">{courseName}</div>
                          <span className="batch-cat-tag">{catName}</span>
                        </td>
                        <td className="cell-time">
                          <div className="batch-days">{daysName}</div>
                          <div className="batch-time-clock">
                            <Clock size={13} />
                            <span>{batch.time}</span>
                          </div>
                        </td>
                        <td className="cell-mode">
                          <div className="batch-mode-text">
                            <MapPin size={13} />
                            <span>{modeName}</span>
                          </div>
                          <span className="batch-duration-badge">{durationText}</span>
                        </td>
                        <td className="cell-action">
                          <button 
                            onClick={() => onOpenModal(`Batch Registration: ${courseName}`)}
                            className="btn btn-sm btn-primary"
                          >
                            <span>{ui.btnEnrollNow || 'Apply'}</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Real Classroom Proofs & Previous Batches Gallery (Batch 10, Batch 11, Batch 17) */}
      <section className="past-batches-section" id="batch-proofs">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <Camera size={14} />
              {ui.proofsBadge || 'Real Classroom Proofs & Completed Batches'}
            </span>
            <h2 className="section-title">
              {ui.proofsTitle || 'Real Classroom Moments &'} <span className="text-gradient-red">{ui.proofsHighlight || 'Previous Batch Proofs'}</span>
            </h2>
            <p className="section-subtitle">
              {ui.proofsSubtitle || 'Authentic photographic proof from our completed Japanese language cohorts at Kadawatha. See real student interactions, visiting native Japanese Sensei sessions, and graduation celebrations.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="proofs-filter-bar">
            <div className="proof-pill-group">
              <button
                type="button"
                className={`proof-pill ${proofFilter === 'all' ? 'active' : ''}`}
                onClick={() => setProofFilter('all')}
              >
                <span>{lang === 'si' ? 'සියලු කණ්ඩායම්' : lang === 'jp' ? '全バッチ' : 'All Batches'} ({pastBatchesGallery.length})</span>
              </button>
              <button
                type="button"
                className={`proof-pill ${proofFilter === 'batch10' ? 'active' : ''}`}
                onClick={() => setProofFilter('batch10')}
              >
                <span>Batch 10 (JLPT)</span>
              </button>
              <button
                type="button"
                className={`proof-pill ${proofFilter === 'batch11' ? 'active' : ''}`}
                onClick={() => setProofFilter('batch11')}
              >
                <span>Batch 11 (Culture & Graduation)</span>
              </button>
              <button
                type="button"
                className={`proof-pill ${proofFilter === 'batch17' ? 'active' : ''}`}
                onClick={() => setProofFilter('batch17')}
              >
                <span>Batch 17 (Smart Classroom)</span>
              </button>
            </div>
          </div>

          {/* Proofs Grid */}
          <div className="proofs-grid">
            {filteredProofs.map((item) => (
              <div 
                key={item.id} 
                className="proof-card"
                onClick={() => setLightboxProof(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setLightboxProof(item);
                }}
                aria-label={`View photo: ${getProofTitle(item)}`}
              >
                <div className="proof-img-container">
                  <img 
                    src={item.image} 
                    alt={getProofTitle(item)}
                    className="proof-img"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="412"
                  />
                  <div className="proof-batch-pill">
                    <ShieldCheck size={12} style={{ color: '#fbbf24' }} />
                    <span>{item.badge}</span>
                  </div>
                  <div className="proof-zoom-badge">
                    <ZoomIn size={12} />
                    <span>{ui.proofsViewFullBtn || 'Zoom'}</span>
                  </div>
                </div>

                <div className="proof-body">
                  <span className="proof-tag-chip">{item.tag}</span>
                  <h3 className="proof-title">{getProofTitle(item)}</h3>
                  <p className="proof-desc">{getProofDesc(item)}</p>

                  <div className="proof-footer">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={12} style={{ color: '#0284c7' }} />
                      <span>Atsuko Main</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Preview Modal */}
      {lightboxProof && (
        <div 
          className="proof-lightbox-backdrop"
          onClick={() => setLightboxProof(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="proof-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="proof-lightbox-close"
              onClick={() => setLightboxProof(null)}
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>

            <div className="proof-lightbox-img-wrap">
              <img 
                src={lightboxProof.image} 
                alt={getProofTitle(lightboxProof)} 
                className="proof-lightbox-img" 
              />
            </div>

            <div className="proof-lightbox-details">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>
                  {lightboxProof.badge}
                </span>
                <span className="badge badge-blue" style={{ fontSize: '0.75rem' }}>
                  {lightboxProof.tag}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                  Atsuko International (Pvt) Ltd • SLBFE Lic. 3293
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-950)', marginBottom: '0.5rem' }}>
                {getProofTitle(lightboxProof)}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                {getProofDesc(lightboxProof)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
