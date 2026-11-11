import { 
  Construction, 
  HardHat, 
  ArrowLeft, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  CreditCard, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { officialContacts } from '../data/websiteData';

const PORTAL_COPY = {
  en: {
    statusBadge: 'Under Active Construction • Q2 2026 Release',
    title: 'Atsuko Student Portal (LMS)',
    titleHighlight: 'Under Construction',
    subtitle: 'Our centralized Student Management & E-Learning Portal is currently being engineered. We are building a modern, high-speed digital experience for all our Sri Lankan and Japanese academy students.',
    photoBadge: 'Engineering & System Development in Progress',
    featuresHeading: 'What is Being Built for You:',
    f1Title: 'Live E-Learning & Study Materials',
    f1Desc: 'JLPT N5/N4 and JFT-Basic course notes, downloadable past exam papers, audio drills, and revision modules.',
    f2Title: 'Live COE & Visa Status Tracker',
    f2Desc: 'Direct status visibility for Japanese immigration Certificate of Eligibility (COE) approvals and embassy submissions.',
    f3Title: 'Digital Payments & Academic Records',
    f3Desc: 'Download verified digital fee receipts, attendance percentages, and mock exam mark sheets.',
    f4Title: 'Direct Sensei & Counseling Desk',
    f4Desc: '1-on-1 direct chat with Japanese language senseis, interview coaches, and visa coordinators.',
    enrolledTitle: 'Already an Enrolled Atsuko Student?',
    enrolledDesc: 'If you are currently attending classes at our Kadawatha center or waiting for your Japanese COE / Visa progress, reach out directly to our student coordinator desk:',
    btnWhatsapp: 'Chat with Student Coordinator on WhatsApp',
    btnCall: 'Call Office Hotline',
    btnBackHome: 'Return to Main Website',
    licenseSLBFE: 'SLBFE License No. 3293',
    licenseReg: 'Company Reg. PV 0217143',
    licenseJapan: 'Japan Support Org: 23登-008312',
  },
  si: {
    statusBadge: 'සංවර්ධනය වෙමින් පවතී • Under Construction',
    title: 'අත්සුකෝ ශිෂ්‍ය ද්වාරය (Student Portal)',
    titleHighlight: 'සකස් වෙමින් පවතී',
    subtitle: 'අපගේ නවතම ශිෂ්‍ය කළමනාකරණ හා මාර්ගගත අධ්‍යයන ද්වාරය (Student LMS) මේ වන විට වේගයෙන් නිර්මාණය වෙමින් පවතී. කඩවත අත්සුකෝ ආයතනයේ සියලුම සිසුන් සඳහා නවීන ඩිජිටල් පහසුකම් ළඟදීම ලබාදීමට නියමිතයි.',
    photoBadge: 'පද්ධති සංවර්ධන කටයුතු ක්‍රියාත්මකයි',
    featuresHeading: 'ළඟදීම ඔබට ලැබෙන පහසුකම්:',
    f1Title: 'මාර්ගගත පාඩම් සහ විභාග අභ්‍යාස',
    f1Desc: 'JLPT / JFT විභාග පසුගිය ප්‍රශ්න පත්‍ර, වචන මාලා (Vocabulary), සහ පාඩම් සටහන් ලබාගැනීම.',
    f2Title: 'COE සහ වීසා තත්ත්වය විමසීම',
    f2Desc: 'ජපාන ආගමන විගමන අනුමැතිය (COE) සහ වීසා ප්‍රගතිය සජීවීව බලාගැනීමේ හැකියාව.',
    f3Title: 'පන්ති පැමිණීම හා ගෙවීම් වාර්තා',
    f3Desc: 'ඩිජිටල් ගෙවීම් රිසිට්පත්, පැමිණීමේ ප්‍රතිශත සහ ආදර්ශ විභාග ලකුණු පරීක්ෂා කිරීම.',
    f4Title: 'ගුරු භවතුන් සමඟ සෘජු සම්බන්ධතාව',
    f4Desc: 'ජපන් භාෂා ආචාර්යවරුන් සහ වීසා උපදේශකවරුන් සමඟ සෘජුවම සම්බන්ධ වීමේ අවස්ථාව.',
    enrolledTitle: 'ඔබ දැනටමත් ලියාපදිංචි ශිෂ්‍යයෙක්ද?',
    enrolledDesc: 'ඔබ කඩවත ආයතනයේ පන්තිවලට සහභාගී වන්නේ නම් හෝ ඔබගේ COE / වීසා තොරතුරු අවශ්‍ය නම්, අපගේ ශිෂ්‍ය සම්බන්ධීකාරක කණ්ඩායම අමතන්න:',
    btnWhatsapp: 'WhatsApp ඔස්සේ ශිෂ්‍ය සම්බන්ධීකාරක අමතන්න',
    btnCall: 'කාර්යාල දුරකථන අංකය',
    btnBackHome: 'මුල් පිටුවට ආපසු යන්න',
    licenseSLBFE: 'ශ්‍රී ලංකා විදේශ සේවා නියුක්ති කාර්යාංශ බලපත්‍ර අංක 3293',
    licenseReg: 'සමාගම් ලියාපදිංචි අංකය PV 0217143',
    licenseJapan: 'ජපාන ලියාපදිංචි ආධාරක සංවිධාන අංකය 23登-008312',
  },
  jp: {
    statusBadge: 'システム構築中 • Under Construction',
    title: 'Atsuko 学生専用ポータル（LMS）',
    titleHighlight: '現在システム開発中',
    subtitle: '受講生・求職者向けの統合学習管理システムおよびCOE進捗確認ポータルは現在開発中です。スリランカおよび日本で学ぶ皆様へ、より便利で迅速なオンライン体験をお届けします。',
    photoBadge: 'エンジニアリング＆システム開発中',
    featuresHeading: '近日公開予定の主要機能:',
    f1Title: 'オンライン学習＆教材アーカイブ',
    f1Desc: 'JLPT / JFT 過去問題集、語彙ドリル、授業レクチャーノートのダウンロード機能。',
    f2Title: '在留資格認定証明書（COE）リアルタイム進捗',
    f2Desc: '出入国在留管理庁の審査進捗状況、査証発給、出国スケジュールの確認。',
    f3Title: '出席率・模擬試験結果・電子領収書',
    f3Desc: '出席管理、定期テスト・模擬試験の成績表、受講料領収書のデジタル管理。',
    f4Title: '専任講師・相談デスク',
    f4Desc: '日本語講師や面接指導員、ビザ担当者との個別相談・サポート機能。',
    enrolledTitle: '受講中の皆様へのお問い合わせ',
    enrolledDesc: '現在受講中の方で教材やスケジュール、COE申請に関するご相談は、事務局まで直接お問い合わせください:',
    btnWhatsapp: 'WhatsAppで問い合わせる',
    btnCall: 'オフィス直通電話',
    btnBackHome: '公式サイトへ戻る',
    licenseSLBFE: 'SLBFE License No. 3293',
    licenseReg: '法人番号 PV 0217143',
    licenseJapan: '登録支援機関番号: 23登-008312',
  }
};

export default function PortalUnderConstructionPage({ lang = 'en', onNavigate }) {
  const t = PORTAL_COPY[lang] || PORTAL_COPY.en;

  return (
    <div className="portal-page-root">
      <div className="portal-page-container">
        
        {/* Back Link */}
        <div className="portal-page-top-actions">
          <button 
            type="button" 
            onClick={() => onNavigate && onNavigate('home')} 
            className="portal-page-back-btn"
          >
            <ArrowLeft size={16} />
            <span>{t.btnBackHome}</span>
          </button>
        </div>

        {/* Status Pill */}
        <div className="portal-page-status-pill">
          <span className="portal-status-pulse" />
          <Construction size={15} />
          <span>{t.statusBadge}</span>
        </div>

        {/* Title */}
        <h1 className="portal-page-main-title">
          {t.title} <span className="portal-title-accent">{t.titleHighlight}</span>
        </h1>

        <p className="portal-page-sub-desc">
          {t.subtitle}
        </p>

        {/* PROMINENT MEN WORKING PHOTO SHOWCASE */}
        <div className="portal-workers-showcase-card">
          <div className="portal-workers-img-wrapper">
            <img 
              src="/images/under-construction.png" 
              alt="Under Construction - Men Working Sign" 
              className="portal-workers-img"
              loading="eager"
            />
            
            <div className="portal-workers-badge">
              <HardHat size={16} className="text-amber-500" />
              <span>{t.photoBadge}</span>
            </div>

            <div className="portal-workers-footer-caption">
              <div className="portal-workers-tag">
                <Sparkles size={14} />
                <span>Atsuko LMS v2.0 Platform</span>
              </div>
              <p>Atsuko International (PVT) LTD • Engineering & Infrastructure</p>
            </div>
          </div>
        </div>

        {/* UPCOMING CAPABILITIES GRID */}
        <div className="portal-page-features-section">
          <div className="portal-features-header">
            <Sparkles size={16} className="text-sky-500" />
            <h2>{t.featuresHeading}</h2>
          </div>

          <div className="portal-page-grid">
            <div className="portal-page-card">
              <div className="portal-card-icon-box">
                <BookOpen size={20} />
              </div>
              <h3>{t.f1Title}</h3>
              <p>{t.f1Desc}</p>
            </div>

            <div className="portal-page-card">
              <div className="portal-card-icon-box">
                <FileText size={20} />
              </div>
              <h3>{t.f2Title}</h3>
              <p>{t.f2Desc}</p>
            </div>

            <div className="portal-page-card">
              <div className="portal-card-icon-box">
                <CreditCard size={20} />
              </div>
              <h3>{t.f3Title}</h3>
              <p>{t.f3Desc}</p>
            </div>

            <div className="portal-page-card">
              <div className="portal-card-icon-box">
                <GraduationCap size={20} />
              </div>
              <h3>{t.f4Title}</h3>
              <p>{t.f4Desc}</p>
            </div>
          </div>
        </div>

        {/* ENROLLED STUDENTS ASSISTANCE DESK */}
        <div className="portal-page-support-card">
          <div className="portal-support-content">
            <div className="portal-support-badge">
              <CheckCircle2 size={15} />
              <span>Direct Student Assistance Desk</span>
            </div>
            <h2>{t.enrolledTitle}</h2>
            <p>{t.enrolledDesc}</p>

            <div className="portal-support-buttons">
              <a 
                href="https://wa.me/94777933352?text=Hello%20Atsuko%20International,%20I%20am%20an%20enrolled%20student%20inquiring%20about%20my%20classes%20and%20the%20student%20portal."
                target="_blank"
                rel="noopener noreferrer"
                className="portal-support-btn-wa"
              >
                <MessageCircle size={18} />
                <span>{t.btnWhatsapp}</span>
              </a>

              <a 
                href="tel:+94777933352"
                className="portal-support-btn-phone"
              >
                <Phone size={16} />
                <span>{t.btnCall}: 077 793 3352</span>
              </a>

              <button 
                type="button" 
                onClick={() => onNavigate && onNavigate('home')} 
                className="portal-support-btn-home"
              >
                <ArrowLeft size={16} />
                <span>{t.btnBackHome}</span>
              </button>
            </div>
          </div>
        </div>

        {/* LICENSURE BAR */}
        <div className="portal-page-licensure-row">
          <div className="licensure-badge-pill">
            <ShieldCheck size={15} />
            <span>{t.licenseSLBFE}</span>
          </div>
          <div className="licensure-badge-pill">
            <span>🏛️</span>
            <span>{t.licenseReg}</span>
          </div>
          <div className="licensure-badge-pill">
            <span>🇯🇵</span>
            <span>{t.licenseJapan}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
