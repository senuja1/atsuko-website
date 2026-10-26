import { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  Clock,
  FileCheck,
  ShieldCheck,
  ArrowRight,
  Send,
  Calendar,
  AlertCircle,
  FolderOpen
} from 'lucide-react';
import { studentVisaIntakes, visaDocumentChecklist, roadmapSteps } from '../data/websiteData';
import { getUiText } from '../data/uiText';

export default function VisaServicesPage({ lang, onOpenModal }) {
  const tFull = getUiText(lang);
  const ui = tFull.pages.visa;
  const h = tFull.home;
  const [activeVisaTab, setActiveVisaTab] = useState('student');

  const studentReqs = lang === 'si' ? [
    'අවම වශයෙන් වසර 12 ක පාසල් අධ්‍යාපනයක් සම්පූර්ණ කර තිබීම (අ.පො.ස. උ/පෙළ හෝ ඊට සමාන සුදුසුකම්).',
    'අයදුම් කරන අවස්ථාවේ වයස අවුරුදු 18 ත් 28 ත් අතර වීම.',
    'අවම වශයෙන් පැය 150 ක ජපන් භාෂා හැදෑරීමේ සහතිකයක් හෝ JLPT N5 / JFT-Basic සමත් සහතිකයක් තිබීම.',
    'තහවුරු කළ බැංකු ශේෂයක් සහිත පිළිගත් මූල්‍ය අනුග්‍රාහකයෙකු (දෙමාපියන් හෝ ළඟම ඥාතීන්) සිටීම.',
  ] : lang === 'jp' ? [
    '12年以上の学校教育（高等学校卒業以上または同等の資格）を修了していること。',
    '申請時点で満18歳以上28歳以下であること。',
    '150時間以上の公認日本語学習歴またはJLPT N5・JFT-Basic合格証書。',
    '預金残高や資金形成過程を証明できる確実な経費支弁者（両親または親族）。',
  ] : [
    'Completed at least 12 years of formal schooling (G.C.E. A/L or recognized equivalent).',
    'Age between 18 and 28 years at the time of application.',
    'Minimum 150 hours of certified Japanese language study or JLPT N5 / JFT-Basic pass certificate.',
    'Genuine financial sponsor (parents or close relatives) with verified bank funds.',
  ];

  const studentSupport = lang === 'si' ? [
    'ඔබේ අධ්‍යාපනික අරමුණුවලට ගැළපෙන ජපානයේ පිළිගත් භාෂා පාසල් තෝරාගැනීම.',
    'Certificate of Eligibility (COE) අයදුම්පත සහ සියලුම ලේඛන පරිවර්තනය හා සකස් කිරීම.',
    'ස්වදේශික සෙන්සෙයිවරුන් සමඟ තානාපති කාර්යාල සම්මුඛ පරීක්ෂණ පෙරහුරු (Mensetsu).',
    'ජපානයට ළඟාවූ පසු ගුවන් තොටුපළින් පිළිගැනීම, නවාතැන් වෙන්කිරීම සහ අර්ධකාලීන රැකියා සොයාගැනීමේ මඟපෙන්වීම.',
  ] : lang === 'jp' ? [
    '学問的目標に応じた法務省告示日本語教育機関の選定支援。',
    '在留資格認定証明書（COE）交付申請書類の完全翻訳・作成。',
    'ネイティブ講師による日本大使館面接（面接）の模擬特訓。',
    '日本到着時の空港出迎え、学生寮手配、アルバイト探しの徹底指導。',
  ] : [
    'Selection of accredited Japanese language institutes matching your academic goals.',
    'Complete preparation and translation of Certificate of Eligibility (COE) dossier.',
    'Embassy of Japan interview rehearsal (Mensetsu) with native Sensei.',
    'Airport reception, student hostel booking, and part-time job hunting coaching in Japan.',
  ];

  const sswReqs = lang === 'si' ? [
    'අවම වයස අවුරුදු 18 සම්පූර්ණ වී තිබීම; අ.පො.ස. සා/පෙළ හෝ උ/පෙළ අධ්‍යාපනික පසුබිම.',
    'JFT-Basic A2 (පරිගණක විභාගය) හෝ JLPT N4 ජපන් භාෂා ප්‍රවීණතා විභාගය සමත්වීම.',
    'ඔබ තෝරාගත් ක්ෂේත්‍රය සඳහා Prometric නිපුණතා ඇගයීම් පරීක්ෂණය සමත්වීම.',
    'යහපත් සෞඛ්‍ය තත්ත්වයක් සහ පොලිස් නිෂ්කාශන වාර්තාවක් තිබීම.',
  ] : lang === 'jp' ? [
    '満18歳以上であること；高卒以上の学歴。',
    '国際交流基金日本語基礎テスト（JFT-Basic A2）またはJLPT N4合格。',
    '希望分野の特定技能評価試験（プロメトリック試験）に合格すること。',
    '良好な健康状態および無犯罪証明（警察証明）の提出。',
  ] : [
    'Minimum age 18 years; O/L or A/L educational background.',
    'Pass JFT-Basic A2 (Computer test) or JLPT N4 Japanese proficiency.',
    'Pass Prometric Skills Evaluation Test for your chosen sector.',
    'Good medical health and clean police criminal record.',
  ];

  const sswSupport = lang === 'si' ? [
    'අයිචි හි අපගේම සමාගම (株式会社 篤子インターナショナル) මඟින් සෘජුවම හසුරුවනු ලැබේ.',
    'නාගොයා, ටෝකියෝ හෝ කන්සායි ජාත්‍යන්තර ගුවන් තොටුපළේදී නිල පිළිගැනීම.',
    'නගර සභා නේවාසික ලියාපදිංචිය, බැංකු ගිණුම් විවෘත කිරීම සහ SIM කාඩ්පත් ලබාදීම.',
    'නිරන්තර සේවා ස්ථාන සුබසාධන පරීක්ෂාව සහ ගැටලු නිරාකරණය කරදීම.',
  ] : lang === 'jp' ? [
    '愛知県小牧市の現地法人（株式会社 篤子インターナショナル）が直接対応。',
    '成田・羽田・中部国際空港・関西国際空港での到着時出迎え・送迎。',
    '市区町村役場での住民登録、銀行口座開設、携帯電話契約支援。',
    '定期的な生活面談、職場訪問、相談対応など手厚いフォロー。',
  ] : [
    'Handled by our registered office in Komaki, Aichi (株式会社 篤子インターナショナル).',
    'Airport greeting at Nagoya Chubu, Tokyo, or Kansai international airports.',
    'Municipal resident registration, bank account opening, and SIM card setup.',
    'Regular welfare visits, workplace coordination, and grievance support.',
  ];

  return (
    <div className="page-container visa-services-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              <ShieldCheck size={14} />
              {ui.badge}
            </span>
            <h1 className="page-hero-title">
              {ui.titlePre} <span className="text-gradient-red">{ui.titleHighlight}</span>
            </h1>
            <p className="page-hero-subtitle">
              {ui.subtitle}
            </p>

            <div className="visa-quick-nav-tabs">
              <button
                className={`visa-nav-btn ${activeVisaTab === 'student' ? 'active' : ''}`}
                onClick={() => setActiveVisaTab('student')}
              >
                <GraduationCap size={18} />
                <span>{ui.tabStudent}</span>
              </button>
              <button
                className={`visa-nav-btn ${activeVisaTab === 'ssw' ? 'active' : ''}`}
                onClick={() => setActiveVisaTab('ssw')}
              >
                <Briefcase size={18} />
                <span>{ui.tabSsw}</span>
              </button>
              <button
                className={`visa-nav-btn ${activeVisaTab === 'titp' ? 'active' : ''}`}
                onClick={() => setActiveVisaTab('titp')}
              >
                <Award size={18} />
                <span>{ui.tabTitp}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Visa Category Content */}
      <section className="section">
        <div className="container">
          {/* TAB 1: STUDENT VISA */}
          {activeVisaTab === 'student' && (
            <div className="visa-detail-block">
              <div className="visa-detail-header-card">
                <div className="badge-pill-header">
                  <span className="badge-pill-flag">🇯🇵</span>
                  <span>{ui.studentPill}</span>
                </div>
                <h2 className="visa-title-lg">
                  {ui.studentTitle} <span className="text-gradient-red">{ui.studentHighlight}</span>
                </h2>
                <p className="visa-lead-p">
                  {ui.studentDesc}
                </p>

                <div className="visa-highlights-row">
                  {ui.studentHighlights.map((vh, idx) => (
                    <div key={idx} className="vh-item">
                      <span className="vh-num">{vh.val}</span>
                      <span className="vh-lbl">{vh.lbl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Visa Intakes Detailed Table */}
              <div className="intakes-detailed-box">
                <h3 className="section-title-sm">
                  <Calendar size={18} className="text-red" />
                  {lang === 'si' ? 'නිල ශිෂ්‍ය වීසා වාර (2025/2026)' : lang === 'jp' ? '公式 学生ビザ受入期 (2025/2026)' : 'Official Student Visa Intake Cycles (Upcoming 2025/2026)'}
                </h3>
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
                        {ui.btnApplyStudent || `Apply for ${intake.intake.split(' ')[0]} Intake`}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility Criteria for Student Visa */}
              <div className="visa-requirements-grid">
                <div className="req-card">
                  <h3 className="req-card-title">{lang === 'si' ? 'අවශ්‍ය මූලික සුදුසුකම්' : lang === 'jp' ? '申請要件' : 'Eligibility Requirements'}</h3>
                  <ul className="req-list">
                    {studentReqs.map((req, i) => (
                      <li key={i}><CheckCircle2 size={15} className="text-red" /> {req}</li>
                    ))}
                  </ul>
                </div>

                <div className="req-card">
                  <h3 className="req-card-title">{lang === 'si' ? 'අත්සුකෝ පූර්ණ සේවා පැකේජය' : lang === 'jp' ? '篤子サポート内容' : 'Atsuko International Support Package'}</h3>
                  <ul className="req-list">
                    {studentSupport.map((sup, i) => (
                      <li key={i}><CheckCircle2 size={15} className="text-red" /> {sup}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SSW WORK VISA */}
          {activeVisaTab === 'ssw' && (
            <div className="visa-detail-block">
              <div className="visa-detail-header-card">
                <div className="badge-pill-header">
                  <span className="badge-pill-flag">💼</span>
                  <span>{ui.sswPill}</span>
                </div>
                <h2 className="visa-title-lg">
                  {ui.sswTitle} <span className="text-gradient-red">{ui.sswHighlight}</span>
                </h2>
                <p className="visa-lead-p">
                  {ui.sswDesc}
                </p>

                <div className="visa-highlights-row">
                  {ui.sswHighlights.map((vh, idx) => (
                    <div key={idx} className="vh-item">
                      <span className="vh-num">{vh.val}</span>
                      <span className="vh-lbl">{vh.lbl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5 SSW Sectors Spotlight */}
              <div className="ssw-sectors-breakdown">
                <h3 className="section-title-sm">
                  {lang === 'si' ? 'අත්සුකෝ හරහා මෙහෙයවන ප්‍රධාන SSW ක්ෂේත්‍ර 5' : lang === 'jp' ? '篤子が手掛ける特定技能5分野' : '5 Core SSW Employment Sectors Managed by Atsuko'}
                </h3>
                <div className="ssw-sectors-cards-grid">
                  <div className="ssw-cat-card">
                    <div className="ssw-cat-icon">🏥</div>
                    <h4>1. Nursing Care / Caregiver (Kaigo)</h4>
                    <p>{lang === 'si' ? 'ජපානයේ ඉහළම ඉල්ලුමක් ඇති ක්ෂේත්‍රය. කඩවත අපගේ රෝහල් සමාකරණ විද්‍යාගාරයේ ප්‍රායෝගික පුහුණුව.' : 'Highest demand sector in Japan. Work in accredited nursing homes and eldercare facilities. Practical training at our Kadawatha hospital ward simulation lab.'}</p>
                    <span className="ssw-cat-test">Test: JLPT N4 / JFT + Prometric Nursing Skills</span>
                  </div>

                  <div className="ssw-cat-card">
                    <div className="ssw-cat-icon">🍽️</div>
                    <h4>2. Food Service & Restaurants (Gaishoku)</h4>
                    <p>{lang === 'si' ? 'ජපානයේ ප්‍රමුඛ පෙළේ අවන්හල් ජාල සහ හෝටල් මුළුතැන්ගෙයි සේවා. පාරිභෝගික සත්කාරය සහ ආහාර සනීපාරක්ෂාව.' : 'Employment in dining chains, family restaurants, and hotel kitchens across Japan. Involves customer service, food prep, and kitchen sanitation.'}</p>
                    <span className="ssw-cat-test">Test: JLPT N4 / JFT + Prometric Food Service</span>
                  </div>

                  <div className="ssw-cat-card">
                    <div className="ssw-cat-icon">🌾</div>
                    <h4>3. Agriculture & Livestock Farming</h4>
                    <p>{lang === 'si' ? 'ස්වයංක්‍රීය හරිතාගාර එළවළු වගාව, පලතුරු නෙලීම සහ පශු සම්පත් කළමනාකරණය.' : 'Automated greenhouse vegetable cultivation, fruit picking, and livestock management in leading agricultural prefectures like Ibaraki and Nagano.'}</p>
                    <span className="ssw-cat-test">Test: JLPT N4 / JFT + Prometric Agriculture Exam</span>
                  </div>

                  <div className="ssw-cat-card">
                    <div className="ssw-cat-icon">🚛</div>
                    <h4>4. Commercial Truck Driving & Transport</h4>
                    <p>{lang === 'si' ? 'ඉහළ වැටුප් සහිත ලොජිස්ටික්ස් ක්ෂේත්‍රය. වාණිජ වාහන ධාවනය සහ ප්‍රවාහන සේවා.' : 'High-demand logistics sector. Operating commercial vehicles under Japanese transportation standards. Requires driving aptitude and road law study.'}</p>
                    <span className="ssw-cat-test">Test: JLPT N4 / JFT + Automobile Transport Exam</span>
                  </div>

                  <div className="ssw-cat-card">
                    <div className="ssw-cat-icon">🏗️</div>
                    <h4>5. Construction & Civil Engineering</h4>
                    <p>{lang === 'si' ? 'ජපන් ආරක්ෂිත ප්‍රමිතීන්ට අනුකූලව ඉදිකිරීම් එකලස් කිරීම, සිවිල් ඉංජිනේරු ශිල්පය සහ අභ්‍යන්තර නිමවුම්.' : 'Structural assembly, civil engineering, interior finishing, and equipment handling under rigorous Japanese workplace safety standards.'}</p>
                    <span className="ssw-cat-test">Test: JLPT N4 / JFT + Construction Skills Exam</span>
                  </div>
                </div>
              </div>

              <div className="visa-requirements-grid">
                <div className="req-card">
                  <h3 className="req-card-title">{lang === 'si' ? 'SSW මූලික සුදුසුකම්' : lang === 'jp' ? '特定技能応募要件' : 'SSW Eligibility Criteria'}</h3>
                  <ul className="req-list">
                    {sswReqs.map((req, i) => (
                      <li key={i}><CheckCircle2 size={15} className="text-red" /> {req}</li>
                    ))}
                  </ul>
                </div>

                <div className="req-card">
                  <h3 className="req-card-title">{lang === 'si' ? 'ජපානයේ ලියාපදිංචි අපගේ සහාය' : lang === 'jp' ? '日本登録支援機関のサポート' : 'Our Registered Support in Japan'}</h3>
                  <ul className="req-list">
                    {sswSupport.map((sup, i) => (
                      <li key={i}><CheckCircle2 size={15} className="text-red" /> {sup}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TITP INTERNSHIP */}
          {activeVisaTab === 'titp' && (
            <div className="visa-detail-block">
              <div className="visa-detail-header-card">
                <div className="badge-pill-header">
                  <span className="badge-pill-flag">📜</span>
                  <span>{ui.titpPill}</span>
                </div>
                <h2 className="visa-title-lg">
                  {ui.titpTitle} <span className="text-gradient-red">{ui.titpHighlight}</span>
                </h2>
                <p className="visa-lead-p">
                  {ui.titpDesc}
                </p>

                <div className="visa-highlights-row">
                  {ui.titpHighlights.map((vh, idx) => (
                    <div key={idx} className="vh-item">
                      <span className="vh-num">{vh.val}</span>
                      <span className="vh-lbl">{vh.lbl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="visa-requirements-grid">
                <div className="req-card">
                  <h3 className="req-card-title">{lang === 'si' ? 'TITP අපේක්ෂක නිර්ණායක' : lang === 'jp' ? '技能実習生応募基準' : 'TITP Candidate Criteria'}</h3>
                  <ul className="req-list">
                    <li><CheckCircle2 size={15} className="text-red" /> {lang === 'si' ? 'වයස අවුරුදු 18 ත් 30 ත් අතර වීම සහ සා/පෙළ හෝ කාර්මික පුහුණුවක් සම්පූර්ණ කර තිබීම.' : 'Age between 18 and 30 years with completed G.C.E. O/L or technical vocational training.'}</li>
                    <li><CheckCircle2 size={15} className="text-red" /> {lang === 'si' ? 'මූලික ජපන් භාෂා සූදානම (N5 මට්ටම නිර්දේශ කෙරේ).' : 'Basic Japanese language readiness (N5 level recommended).'}</li>
                    <li><CheckCircle2 size={15} className="text-red" /> {lang === 'si' ? 'ශාරීරික යෝග්‍යතාව සහ ප්‍රායෝගික කාර්මික කාර්යයන් සඳහා කැපවීම.' : 'Physical fitness and readiness for hands-on industrial or technical tasks.'}</li>
                    <li><CheckCircle2 size={15} className="text-red" /> {lang === 'si' ? 'ජපානයේදී උගත් තාක්ෂණික දැනුම නැවත ශ්‍රී ලංකාවට ලබාදීමේ අභිප්‍රාය.' : 'Willingness to return and contribute technical knowledge to Sri Lanka.'}</li>
                  </ul>
                </div>

                <div className="req-card">
                  <h3 className="req-card-title">{lang === 'si' ? 'ප්‍රධාන වැඩසටහන් වාසි' : lang === 'jp' ? '主なプログラム特典' : 'Key Program Advantages'}</h3>
                  <ul className="req-list">
                    <li><CheckCircle2 size={15} className="text-red" /> {lang === 'si' ? 'සේවායෝජකයා විසින් සකස් කරන ලද සහනාධාර සහිත නවාතැන් සහ උපයෝගිතා පහසුකම්.' : 'Subsidized accommodation and living utilities arranged by host employer.'}</li>
                    <li><CheckCircle2 size={15} className="text-red" /> {lang === 'si' ? 'ජපානයට පැමිණි පසු මුල් මාසයේ වැටුප් සහිත භාෂා හා සංස්කෘතික පුහුණුව.' : 'One-month initial paid post-arrival cultural and language training inside Japan.'}</li>
                    <li><CheckCircle2 size={15} className="text-red" /> {lang === 'si' ? 'වසර 3 ක පුහුණුව අවසන් කළ පසු විභාගවලින් තොරව වසර 5 ක SSW රැකියා වීසා බලපත්‍රයකට මාරුවීමේ හැකියාව.' : 'Direct transition path to 5-Year SSW work visa after completing 3 years of internship.'}</li>
                    <li><CheckCircle2 size={15} className="text-red" /> {lang === 'si' ? 'ආපසු පැමිණීමේදී ජපාන ජාතික විශ්‍රාම වැටුප් ආපසු ලබාගැනීම (Dattai Ichijikin).' : 'Full claim assistance for Japanese National Pension refund (Dattai Ichijikin).'}</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Step-by-Step 6-Phase Visa Roadmap */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <Clock size={14} />
              {lang === 'si' ? 'විනිවිදභාවය' : lang === 'jp' ? 'プロセスの透明性' : 'Process Transparency'}
            </span>
            <h2 className="section-title">
              {lang === 'si' ? 'වීසා ක්‍රියාවලියේ පියවර 6' : lang === 'jp' ? 'ビザ申請 6つのステップ' : 'Your 6-Phase'} <span className="text-gradient-red">{lang === 'si' ? 'මාර්ග සිතියම' : lang === 'jp' ? 'ロードマップ' : 'Visa Processing Roadmap'}</span>
            </h2>
            <p className="section-subtitle">
              {lang === 'si' ? 'කඩවත මූලස්ථානයේ මුල් උපදේශනයේ සිට ජපානයේ පළමු දිනය දක්වා අපගේ නීතිඥ මණ්ඩලය ඔබට මඟපෙන්වයි.' : lang === 'jp' ? 'カダワタ本校でのカウンセリングから日本到着初日まで、法務チームが徹底支援。' : 'From your initial consultation at Kadawatha to your first day in Japan, our legal team guides you through every step.'}
            </p>
          </div>

          <div className="roadmap-grid-enhanced">
            {roadmapSteps.map((item, idx) => (
              <div key={idx} className="roadmap-card-enhanced">
                <div className="roadmap-num-badge">{item.step}</div>
                <div className="roadmap-jp-text">{item.jp}</div>
                <h3 className="roadmap-step-title">{item.title}</h3>
                <p className="roadmap-step-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Document Checklist Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <FolderOpen size={14} />
              {lang === 'si' ? 'ලියකියවිලි සූදානම් කිරීම' : lang === 'jp' ? '必要書類準備' : 'Document Preparation'}
            </span>
            <h2 className="section-title">
              {ui.checklistTitle}
            </h2>
            <p className="section-subtitle">
              {ui.checklistSubtitle}
            </p>
          </div>

          <div className="checklist-grid">
            {visaDocumentChecklist.map((group, idx) => (
              <div key={idx} className="checklist-card">
                <h3 className="checklist-category-title">{group.category}</h3>
                <ul className="checklist-items">
                  {group.items.map((item, i) => (
                    <li key={i}>
                      <FileCheck size={16} className="text-red" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="checklist-cta-box">
            <div className="cta-box-content">
              <AlertCircle size={24} className="text-gold" />
              <div>
                <strong>{lang === 'si' ? 'පරිවර්තන සහ ලියකියවිලි තහවුරු කිරීම සඳහා සහාය අවශ්‍යද?' : lang === 'jp' ? '翻訳や公証手続きのサポートが必要ですか？' : 'Need assistance with translations or document verification?'}</strong>
                <p>{lang === 'si' ? 'කඩවත අපගේ ලේඛන අංශය හරහා දිවුරුම් ප්‍රකාශ, ඉංග්‍රීසි පරිවර්තන සහ විදේශ කටයුතු අමාත්‍යාංශයේ සහතික කිරීම් සඳහා සම්පූර්ණ සහාය ලැබේ.' : 'Our legal documentation desk at Kadawatha assists with certified English translations, sworn affidavits, and Ministry of Foreign Affairs (SLBFE) attestation.'}</p>
              </div>
            </div>
            <button
              onClick={() => onOpenModal('Document Verification & Checklist Review')}
              className="btn btn-primary btn-sm"
            >
              {lang === 'si' ? 'ලේඛන නිලධාරී අමතන්න' : lang === 'jp' ? '書類担当に相談する' : 'Consult Document Officer'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
