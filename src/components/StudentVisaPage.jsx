import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Clock,
  FolderOpen,
  Building,
  Award,
  Globe2,
  Briefcase
} from 'lucide-react';
import { studentVisaIntakes, visaDocumentChecklist, roadmapSteps } from '../data/websiteData';
import { getUiText } from '../data/uiText';

export default function StudentVisaPage({ lang, onOpenModal, onNavigate }) {
  const tFull = getUiText(lang);
  const ui = tFull.pages.visa;

  const studentReqs = lang === 'si' ? [
    'අවම වශයෙන් වසර 12 ක පාසල් අධ්‍යාපනයක් සම්පූර්ණ කර තිබීම (අ.පො.ස. උ/පෙළ හෝ ඊට සමාන සුදුසුකම්).',
    'අයදුම් කරන අවස්ථාවේ වයස අවුරුදු 18 ත් 28 ත් අතර වීම.',
    'අවම වශයෙන් පැය 150 ක ජපන් භාෂා හැදෑරීමේ සහතිකයක් (අත්සුකෝ ආයතනයෙන්) හෝ JLPT N5 / JFT-Basic සමත් සහතිකයක් තිබීම.',
    'තහවුරු කළ බැංකු ශේෂයක් සහිත පිළිගත් මූල්‍ය අනුග්‍රාහකයෙකු (දෙමාපියන් හෝ ළඟම ඥාතීන්) සිටීම.',
    'ජපානයේ පිළිගත් භාෂා පාසලක වසර 1 සිට 2 දක්වා පූර්ණකාලීන අධ්‍යාපනයක් හැදෑරීමේ අවංක අභිප්‍රාය.',
  ] : lang === 'jp' ? [
    '12年以上の学校教育（高等学校卒業以上または同等の資格）を修了していること。',
    '申請時点で満18歳以上28歳以下であること。',
    '150時間以上の公認日本語学習歴（当校発行）またはJLPT N5・JFT-Basic合格証書。',
    '預金残高や資金形成過程を証明できる確実な経費支弁者（両親または親族）。',
    '日本語教育機関修了後、大学・大学院・専門学校への進学意思。',
  ] : [
    'Completed at least 12 years of formal schooling (G.C.E. A/L or recognized equivalent).',
    'Age between 18 and 28 years at the time of application.',
    'Minimum 150 hours of certified Japanese language study (from Atsuko) or JLPT N5 / JFT-Basic pass certificate.',
    'Genuine financial sponsor (parents or close relatives) with verified bank funds.',
    'Clear academic intent to complete 1-2 years of intensive Japanese language studies.',
  ];

  const studentSupport = lang === 'si' ? [
    'ඔබේ අධ්‍යාපනික අරමුණුවලට ගැළපෙන ජපානයේ පිළිගත් භාෂා පාසල් (ටෝකියෝ, ඔසාකා, නාගොයා, සෙන්ඩායි) තෝරාගැනීම.',
    'Certificate of Eligibility (COE) අයදුම්පත සහ සියලුම ලේඛන පරිවර්තනය හා සකස් කිරීම.',
    'ස්වදේශික සෙන්සෙයිවරුන් සමඟ තානාපති කාර්යාල සම්මුඛ පරීක්ෂණ පෙරහුරු (Mensetsu).',
    'ජපානයට ළඟාවූ පසු ගුවන් තොටුපළින් පිළිගැනීම, නවාතැන් වෙන්කිරීම සහ සතියකට පැය 28 ක අර්ධකාලීන රැකියා සොයාගැනීමේ මඟපෙන්වීම.',
    'භාෂා පාසලෙන් පසු ජපානයේ විශ්වවිද්‍යාල හෝ වෘත්තීය විද්‍යාල (Senmon Gakko) සඳහා නොමිලේ මඟපෙන්වීම.',
  ] : lang === 'jp' ? [
    '学問的目標に応じた法務省告示日本語教育機関（東京・大阪・名古屋・仙台）の選定支援。',
    '在留資格認定証明書（COE）交付申請書類の完全翻訳・公証作成。',
    'ネイティブ講師による日本大使館面接（面接）の模擬特訓。',
    '日本到着時の空港出迎え、学生寮手配、週28時間アルバイト探しの徹底指導。',
    '語学学校修了後の大学・専門学校進学ガイダンス。',
  ] : [
    'Selection of accredited Japanese language institutes in Tokyo, Osaka, Nagoya, Sendai, or Fukuoka.',
    'Complete preparation, translation, and verification of Certificate of Eligibility (COE) dossier.',
    'Embassy of Japan interview rehearsal (Mensetsu) with native Sensei.',
    'Airport reception, student hostel booking, and 28-hr/week part-time job hunting coaching in Japan.',
    'Seamless transition guidance to Japanese Universities or Vocational Colleges (Senmon Gakko).',
  ];

  const studentHighlights = [
    { val: '初期費用ゼロ', lbl: lang === 'si' ? 'වීසා ලැබෙනතුරු සේවා ගාස්තු අය නොකිරීම' : lang === 'jp' ? 'ビザ認可まで手付金不要' : 'Zero Initial Fee Until Approval' },
    { val: '4 Intakes', lbl: lang === 'si' ? 'වසරකට ඇතුළත් කිරීම් 4 ක් (ජන/අප්‍රේල්/ජූලි/ඔක්)' : lang === 'jp' ? '年4回受入 (1・4・7・10月)' : '4 Annual Cycles (Jan/Apr/Jul/Oct)' },
    { val: '28 Hrs / Wk', lbl: lang === 'si' ? 'නීතිමය අර්ධකාලීන රැකියා අවසරය (නිවාඩු කාලයේ පැය 40)' : lang === 'jp' ? '週28時間アルバイト許可 (長期休暇40h)' : 'Legal Part-time Work Permit' },
    { val: 'SLBFE 3293', lbl: lang === 'si' ? 'ශ්‍රී ලංකා රජයේ නිල බලපත්‍රය හා ලියාපදිංචිය' : lang === 'jp' ? 'スリランカ政府公認許可証' : 'Govt. Licensed & PV 0217143' }
  ];

  return (
    <div className="page-container visa-services-page">
      {/* 1. Page Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              <GraduationCap size={14} />
              {lang === 'si' ? 'නිල ජපාන ශිෂ්‍ය වීසා සේවාව' : lang === 'jp' ? '公式 日本留学ビザ支援' : 'OFFICIAL JAPAN STUDENT VISA (RYUGAKU)'}
            </span>
            <h1 className="page-hero-title">
              {lang === 'si' ? 'ජපානයේ උසස් අධ්‍යාපනය —' : lang === 'jp' ? '日本留学ビザ —' : 'Study in Japan —'} <span className="text-gradient-red">{lang === 'si' ? 'ශිෂ්‍ය වීසා මාවත' : lang === 'jp' ? '進学・語学学校進路' : 'Student Visa Pathway'}</span>
            </h1>
            <p className="page-hero-subtitle">
              {lang === 'si'
                ? 'ශ්‍රී ලංකා විදේශ සේවා නියුක්ති කාර්යාංශයේ (SLBFE No. 3293) බලපත්‍රලාභී ආයතනයක් ලෙස, ටෝකියෝ, ඔසාකා, නාගොයා සහ සෙන්ඩායි හි ප්‍රමුඛ පෙළේ ජපන් භාෂා පාසල් සහ විශ්වවිද්‍යාල වෙත සෘජු ශිෂ්‍ය වීසා මඟපෙන්වීම.'
                : lang === 'jp'
                ? 'スリランカ政府公認（SLBFE No. 3293）機関として、東京・大阪・名古屋・仙台の法務省告示日本語教育機関および大学への直接入学を全面サポート。'
                : 'Sri Lanka’s premier government-licensed pathway (SLBFE No. 3293) to accredited Japanese language institutes and universities in Tokyo, Osaka, Nagoya, and Sendai.'}
            </p>

            <div className="contact-quick-touchpoints" style={{ marginTop: '1.25rem' }}>
              <div className="touchpoint-pill">
                <ShieldCheck size={15} className="text-gold" />
                <span>SLBFE License 3293</span>
              </div>
              <div className="touchpoint-pill">
                <Clock size={15} className="text-red" />
                <span>4 Intakes Per Year (Jan / Apr / Jul / Oct)</span>
              </div>
              <div className="touchpoint-pill">
                <Building size={15} className="text-emerald" />
                <span>28 Hours / Week Legal Work Permit</span>
              </div>
              <div className="touchpoint-pill">
                <Award size={15} className="text-gold" />
                <span>Zero Initial Fee Commitment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <section className="section">
        <div className="container">
          <div className="visa-detail-block">
            {/* Header Highlight Card */}
            <div className="visa-detail-header-card">
              <div className="badge-pill-header">
                <span className="badge-pill-flag"><GraduationCap size={16} /></span>
                <span>{lang === 'si' ? 'ශිෂ්‍ය වීසා සාරාංශය' : lang === 'jp' ? '留学ビザ概要' : 'Student Visa (Ryugaku - 留学)'}</span>
              </div>
              <h2 className="visa-title-lg">
                {lang === 'si' ? 'ජපානයේ ප්‍රමුඛ පෙළේ භාෂා පාසල් සහ' : lang === 'jp' ? '法務省告示日本語学校・大学進学' : 'Accredited Japanese Language Schools &'} <span className="text-gradient-red">{lang === 'si' ? 'විශ්වවිද්‍යාල අධ්‍යාපනය' : lang === 'jp' ? '完全直接支援' : 'Higher Education'}</span>
              </h2>
              <p className="visa-lead-p">
                {lang === 'si'
                  ? 'පාසල් හැරගිය සිසුන්ට සහ තරුණ වෘත්තිකයන්ට ජපානයේ පිළිගත් භාෂා පාසලක වසර 1 සිට 2 දක්වා පූර්ණකාලීන ජපන් භාෂාව හැදෑරීමටත්, සතියකට පැය 28 ක නීතිමය අර්ධකාලීන රැකියාවක නිරත වීමටත් අවස්ථාව ලැබේ. ඉන්පසු ජපානයේ විශ්වවිද්‍යාල උපාධියක් හෝ Senmon Gakko වෘත්තීය ඩිප්ලෝමාවක් හැදෑරිය හැක.'
                  : lang === 'jp'
                  ? 'スリランカの高校卒業生や若手社会人が、東京・大阪・名古屋・仙台・福岡などの告示校で1〜2年間集中して日本語を学び、週28時間の就労許可を得ながら進学・就職を目指す確実な進路です。'
                  : 'The ideal path for Sri Lankan school leavers and young professionals seeking to master Japanese at accredited language institutes in Tokyo, Osaka, Nagoya, Sendai, or Fukuoka, with legal permission to work up to 28 hours per week while studying.'}
              </p>

              <div className="visa-highlights-row">
                {studentHighlights.map((vh, idx) => (
                  <div key={idx} className="vh-item">
                    <span className="vh-num">{vh.val}</span>
                    <span className="vh-lbl">{vh.lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Official 4 Annual Intake Cycles */}
            <div className="intakes-detailed-box">
              <h3 className="section-title-sm">
                <Calendar size={18} className="text-red" />
                {lang === 'si' ? 'නිල ජපාන ශිෂ්‍ය වීසා වාර 4 (2025/2026)' : lang === 'jp' ? '公式 学生ビザ年間4期 受入スケジュール (2025/2026)' : 'Official Student Visa Intake Cycles (Upcoming 2025/2026)'}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '18px', lineHeight: 1.6 }}>
                {lang === 'si'
                  ? 'ජපානයේ භාෂා පාසල් වසරකට 4 වතාවක් සිසුන් බඳවාගනු ලැබේ. එක් එක් වාරය සඳහා COE ලියාපදිංචි කිරීමේ අවසන් දින නියමිත කාලයට පෙර සම්පූර්ණ කළ යුතුය.'
                  : 'Japanese language institutes accept international students 4 times a year. COE documents must be submitted to Japanese Immigration 5-6 months prior to departure.'}
              </p>

              <div className="intakes-grid-cards">
                {studentVisaIntakes.map((intake, idx) => (
                  <div key={idx} className="intake-detail-card">
                    <div className="intake-card-top">
                      <span className={`intake-cycle-pill intake-${intake.badgeColor}`}>
                        {intake.status}
                      </span>
                      <span className="intake-jp-term">{intake.jpTerm}</span>
                    </div>
                    <h4 className="intake-name">{intake.intake}</h4>
                    <p className="intake-season">{intake.season}</p>
                    <p className="intake-desc">{intake.description}</p>

                    <div className="intake-timeline-meta">
                      <div>
                        <strong>COE Result:</strong> {intake.coeRelease}
                      </div>
                      <div>
                        <strong>Departure to Japan:</strong> {intake.departure}
                      </div>
                      <div>
                        <strong>Course Length:</strong> {intake.studyPeriod}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenModal(`Student Visa - ${intake.intake}`)}
                      className="btn btn-primary btn-block btn-sm"
                      style={{ marginTop: '1rem' }}
                    >
                      {lang === 'si' ? `${intake.intake.split(' ')[0]} වාරයට අයදුම් කරන්න` : `Apply for ${intake.intake.split(' ')[0]} Intake`}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Requirements & Atsuko Full Support Grid */}
            <div className="visa-requirements-grid">
              <div className="req-card">
                <h3 className="req-card-title">
                  <CheckCircle2 size={16} className="text-red" />
                  {lang === 'si' ? 'අවශ්‍ය මූලික සුදුසුකම්' : lang === 'jp' ? '申請要件' : 'Eligibility Requirements'}
                </h3>
                <ul className="req-list">
                  {studentReqs.map((req, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} className="text-red" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="req-card">
                <h3 className="req-card-title">
                  <ShieldCheck size={16} className="text-emerald" />
                  {lang === 'si' ? 'අත්සුකෝ පූර්ණ සේවා පැකේජය' : lang === 'jp' ? '篤子サポート内容' : 'Atsuko International Support Package'}
                </h3>
                <ul className="req-list">
                  {studentSupport.map((sup, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} className="text-emerald" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{sup}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 5. 6-Step Career Roadmap */}
            <div style={{ marginTop: '36px' }}>
              <div className="section-header text-center" style={{ marginBottom: '24px' }}>
                <span className="section-badge badge-blue">
                  <Clock size={14} />
                  {lang === 'si' ? 'පියවර 6 ක ක්‍රියාවලිය' : lang === 'jp' ? '6ステップ 進学ロードマップ' : '6-STEP STUDENT ROADMAP'}
                </span>
                <h2 className="section-title-sm" style={{ fontSize: '22px', textAlign: 'center', margin: '8px 0' }}>
                  {lang === 'si' ? 'ශ්‍රී ලංකාවේ සිට ජපානයට ශිෂ්‍ය වීසා ගමන් මඟ' : lang === 'jp' ? '出願から日本渡航までの確実なステップ' : 'Step-by-Step Student Visa Journey'}
                </h2>
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', textAlign: 'center', maxWidth: '650px', margin: '0 auto' }}>
                  {lang === 'si'
                    ? 'කඩවත අපගේ මූලස්ථානයේදී නොමිලේ මඟපෙන්වීමෙන් පටන්ගෙන ජපානයේ ගුවන් තොටුපළින් ඔබව පිළිගැනීම දක්වා වූ විනිවිදභාවයෙන් යුතු පියවර.'
                    : 'From your initial Japanese assessment at Kadawatha to airport greeting and student hostel check-in in Japan.'}
                </p>
              </div>

              <div className="roadmap-grid-enhanced">
                {roadmapSteps.map((step, idx) => (
                  <div key={idx} className="roadmap-card-enhanced">
                    <div>
                      <div className="roadmap-num-badge">{step.step}</div>
                      <span className="roadmap-jp-text">{step.jp}</span>
                      <h4 className="roadmap-step-title">{step.title}</h4>
                      <p className="roadmap-step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Document Checklist */}
            <div style={{ marginTop: '36px' }}>
              <div className="section-header text-center" style={{ marginBottom: '24px' }}>
                <span className="section-badge badge-gold">
                  <FolderOpen size={14} />
                  {lang === 'si' ? 'අවශ්‍ය ලියකියවිලි' : lang === 'jp' ? '必要書類チェックリスト' : 'DOCUMENT CHECKLIST'}
                </span>
                <h2 className="section-title-sm" style={{ fontSize: '22px', textAlign: 'center', margin: '8px 0' }}>
                  {lang === 'si' ? 'ශිෂ්‍ය වීසා සඳහා අවශ්‍ය නිල ලිපිලේඛන' : lang === 'jp' ? '留学ビザ交付申請 必要書類一覧' : 'Required Documents for Student Visa (COE)'}
                </h2>
              </div>

              <div className="checklist-grid">
                {visaDocumentChecklist.map((group, idx) => (
                  <div key={idx} className="checklist-card">
                    <h3 className="checklist-category-title">{group.category}</h3>
                    <ul className="checklist-items">
                      {group.items.map((item, i) => (
                        <li key={i}>
                          <FileCheck size={15} className="text-red" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
