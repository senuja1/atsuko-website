import {
  Briefcase,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Clock,
  FolderOpen,
  Building,
  Award,
  Globe2,
  GraduationCap,
  Heart,
  UtensilsCrossed,
  Sprout,
  Truck,
  HardHat
} from 'lucide-react';
import { visaDocumentChecklist, roadmapSteps } from '../data/websiteData';
import { getUiText } from '../data/uiText';

export default function JobVisaPage({ lang, onOpenModal, onNavigate }) {
  const tFull = getUiText(lang);
  const ui = tFull.pages.visa;

  const sswReqs = lang === 'si' ? [
    'අයදුම් කරන අවස්ථාවේ වයස අවුරුදු 18 සම්පූර්ණ වී තිබීම (අ.පො.ස. සා/පෙළ හෝ උ/පෙළ අධ්‍යාපනික පසුබිම).',
    'ජපන් භාෂා ප්‍රවීණතාව: JFT-Basic A2 (පරිගණක විභාගය) හෝ JLPT N4 සමත් සහතිකයක් තිබීම.',
    'ඔබ තෝරාගත් ක්ෂේත්‍රය සඳහා Prometric නිපුණතා ඇගයීම් පරීක්ෂණය (Skills Evaluation Test) සමත්වීම.',
    'ශ්‍රී ලංකා පොලිස් දෙපාර්තමේන්තුවෙන් ලබාගත් පිරිසිදු පොලිස් නිෂ්කාශන වාර්තාවක් සහ යහපත් සෞඛ්‍ය වාර්තාවක් තිබීම.',
    'ජපානයේ කම්කරු නීතියට අනුව වසර 5 ක පූර්ණකාලීන රැකියාවක නිරත වීමේ අවංක කැපවීම.',
  ] : lang === 'jp' ? [
    '申請時点で満18歳以上であること（高校卒業以上の学歴）。',
    '国際交流基金日本語基礎テスト（JFT-Basic A2）または日本語能力試験（JLPT N4）合格。',
    '希望業種の特定技能評価試験（プロメトリック試験）に合格すること。',
    '良好な健康状態およびスリランカ警察による無犯罪証明（警察証明）の提出。',
    '日本での5年間の法令遵守に基づく真摯な就労意欲。',
  ] : [
    'Minimum age 18 years at the time of application; G.C.E. O/L or A/L educational background.',
    'Pass JFT-Basic A2 (Computer-based test) or JLPT N4 Japanese proficiency exam.',
    'Pass Prometric Skills Evaluation Test for your chosen employment sector.',
    'Good medical health clearance and clean Sri Lanka Police clearance record.',
    'Genuine commitment to full-time career placement in Japan under Japanese labor standards.',
  ];

  const sswSupport = lang === 'si' ? [
    'ජපානයේ අයිචි ප්‍රාන්තයේ කොමාකි සහ සෙන්ඩායි හි පිහිටි අපගේම ලියාපදිංචි ආධාරක සංවිධානය (登録支援機関 No. 23登-008312) මඟින් සෘජු නීතිමය භාරකාරිත්වය.',
    'නාගොයා චූබු, ටෝකියෝ නරීටා/හනෙඩා හෝ ඔසාකා කන්සායි ගුවන්තොටුපළෙන් නිල පිළිගැනීම සහ සේවා ස්ථානයට ආරක්ෂිතව ප්‍රවාහනය.',
    'නගර සභා (Shiyakusho) නේවාසික ලියාපදිංචිය, ජපන් බැංකු ගිණුම් විවෘත කිරීම, ජංගම දුරකථන SIM සහ මහල් නිවාස නවාතැන් සකස් කිරීම.',
    'ජපන් කම්කරු නීතියට අනුව ජපන් ජාතිකයන්ට හිමි සමාන හෝ ඊට වැඩි වැටුපක් සහ පූර්ණ සෞඛ්‍ය/විශ්‍රාම වැටුප් ආවරණය සහතික කිරීම.',
    'සෑම මාස 3 කට වරක්ම සිදුකරන සේවා ස්ථාන නිරීක්ෂණ සහ 24/7 ක්‍රියාත්මක සිංහල/ජපන් හදිසි උපකාරක සේවාව.',
  ] : lang === 'jp' ? [
    '愛知県小牧市および宮城県仙台市の自社登録支援機関（登録番号：23登-008312）による完全直接支援。',
    '中部国際空港・成田・羽田・関西国際空港での出迎えおよび配属先企業への安全送迎。',
    '市区町村役場での転入届・住民登録、銀行口座開設、携帯電話契約、社宅・アパート手配。',
    '日本人と同等以上の適正給与、健康保険・厚生年金の法令遵守の徹底確保。',
    '3ヶ月ごとの定期面談・職場巡回および24時間対応の緊急ホットライン体制。',
  ] : [
    'Direct legal custody by our own Registered Support Organization in Komaki, Aichi & Sendai (登録支援機関 No. 23登-008312).',
    'Airport reception at Nagoya Chubu Centrair, Tokyo Narita/Haneda, or Kansai KIX with direct company transfer.',
    'Municipal resident registration (Juminhyo), Japanese bank account opening, SIM card activation, and furnished apartment setup.',
    'Guaranteed wage parity equal to or higher than Japanese nationals under Japanese labor law, with full health & pension coverage.',
    'Quarterly on-site welfare visits, continuous workplace mentoring, and 24/7 Sinhala/Japanese emergency helpline.',
  ];

  const sswHighlights = [
    { val: '5 Years', lbl: lang === 'si' ? 'වසර 5 ක පුනර්ජනනීය රැකියා වීසා (SSW 1 සහ 2)' : lang === 'jp' ? '最長5年就労 (特定技能1号・2号)' : '5-Year Renewable Work Visa' },
    { val: 'Equal Pay', lbl: lang === 'si' ? 'ජපන් ජාතිකයන්ට හිමි සමාන වැටුප් හා රක්ෂණ' : lang === 'jp' ? '日本人と同等以上の適正給与' : 'Guaranteed Wage Parity' },
    { val: '初期費用ゼロ', lbl: lang === 'si' ? 'වීසා ලැබෙනතුරු සේවා ගාස්තු අය නොකිරීම' : lang === 'jp' ? 'ビザ認可まで手付金不要' : 'Zero Initial Fee Until Approval' },
    { val: '23登-008312', lbl: lang === 'si' ? 'ජපාන ආගමන දෙපාර්තමේන්තුවේ ලියාපදිංචි ආධාරක සංවිධානය' : lang === 'jp' ? '法務省 登録支援機関自社運営' : 'Japan Registered Support Org' }
  ];

  const sswSectors = [
    {
      icon: Heart,
      color: 'text-red',
      name: 'Nursing Care / Caregiver (Kaigo 介護)',
      desc: lang === 'si' ? 'ජපානයේ වැඩිහිටි නිවාස සහ රෝහල් ආශ්‍රිත ඉහළම ඉල්ලුමක් ඇති ක්ෂේත්‍රය. කඩවත අපගේ ජාත්‍යන්තර රෝහල් සමාකරණ විද්‍යාගාරයේ ප්‍රායෝගික පුහුණුව.' : 'Highest demand sector in Japan. Work in accredited nursing homes and eldercare facilities. Practical training at our Kadawatha hospital ward lab.',
      test: 'JLPT N4 / JFT + Prometric Nursing Skills & Japanese',
      salary: '¥190,000 – ¥240,000 / mo + Overtime'
    },
    {
      icon: UtensilsCrossed,
      color: 'text-gold',
      name: 'Food Service & Restaurants (Gaishoku 外食業)',
      desc: lang === 'si' ? 'ජපානයේ ප්‍රමුඛ පෙළේ අවන්හල් ජාල සහ හෝටල් මුළුතැන්ගෙයි සේවා. පාරිභෝගික සත්කාරය සහ ආහාර සනීපාරක්ෂාව.' : 'Employment across reputable dining chains, family restaurants, and hotel kitchens. Encompasses customer service, food prep, and kitchen sanitation.',
      test: 'JLPT N4 / JFT + Prometric Food Service Skills Exam',
      salary: '¥185,000 – ¥235,000 / mo + Meals'
    },
    {
      icon: Sprout,
      color: 'text-emerald',
      name: 'Agriculture & Livestock (Nogyo 農業)',
      desc: lang === 'si' ? 'ස්වයංක්‍රීය හරිතාගාර එළවළු වගාව, පලතුරු නෙලීම සහ පශු සම්පත් කළමනාකරණය (ඉබරාකි, නගානෝ, අයිචි).' : 'Automated greenhouse crop cultivation, fruit picking, and livestock management in leading prefectures like Ibaraki, Nagano, and Aichi.',
      test: 'JLPT N4 / JFT + Prometric Agriculture Exam',
      salary: '¥180,000 – ¥220,000 / mo + Housing Subsidy'
    },
    {
      icon: Truck,
      color: 'text-blue',
      name: 'Commercial Truck Driving & Transport (Jidosha Unso)',
      desc: lang === 'si' ? 'ජපානයේ 2024 නව නීතිමය සංශෝධන යටතේ විවෘත වූ ඉහළ ඉල්ලුමක් ඇති ලොජිස්ටික්ස් සහ වාණිජ භාණ්ඩ ප්‍රවාහන රියදුරු ක්ෂේත්‍රය.' : 'High-demand logistics sector under Japan’s newly expanded SSW framework. Operating commercial vehicles and modern warehouse distribution.',
      test: 'JLPT N4 / JFT + Automobile Transport Driver Exam',
      salary: '¥220,000 – ¥320,000 / mo + Overtime'
    },
    {
      icon: HardHat,
      color: 'text-gold',
      name: 'Construction & Civil Engineering (Kensetsu 建設業)',
      desc: lang === 'si' ? 'ජපන් ආරක්ෂිත ප්‍රමිතීන්ට අනුකූලව ඉදිකිරීම් එකලස් කිරීම, සිවිල් ඉංජිනේරු ශිල්පය සහ අභ්‍යන්තර නිමවුම්.' : 'Structural assembly, concrete formwork, civil engineering, interior finishing, and equipment handling under strict Japanese safety standards.',
      test: 'JLPT N4 / JFT + Construction Skills Exam',
      salary: '¥210,000 – ¥280,000 / mo + Safety Bonus'
    }
  ];

  return (
    <div className="page-container visa-services-page">
      {/* 1. Page Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-emerald">
              <Briefcase size={14} />
              {lang === 'si' ? 'නිල ජපාන රැකියා වීසා සේවාව' : lang === 'jp' ? '公式 日本特定技能・就労ビザ支援' : 'OFFICIAL JAPAN JOB VISA (SSW & TITP)'}
            </span>
            <h1 className="page-hero-title">
              {lang === 'si' ? 'ජපානයේ වෘත්තීය රැකියා —' : lang === 'jp' ? '日本特定技能就労 —' : 'Work in Japan —'} <span className="text-gradient-red">{lang === 'si' ? 'නිශ්චිත නිපුණතා (SSW)' : lang === 'jp' ? '特定技能1号・登録支援機関' : 'Specified Skilled Worker (SSW)'}</span>
            </h1>
            <p className="page-hero-subtitle">
              {lang === 'si'
                ? 'ශ්‍රී ලංකා විදේශ සේවා නියුක්ති කාර්යාංශයේ (SLBFE No. 3293) බලපත්‍රලාභී සහ ජපානයේ අයිචි ප්‍රාන්තයේ ලියාපදිංචි ආධාරක සංවිධානයක් (登録支援機関 No. 23登-008312) ලෙස, වසර 5 ක පූර්ණ නීතිමය රැකියා අවස්ථා.'
                : lang === 'jp'
                ? 'スリランカ政府公認（SLBFE No. 3293）および出入国在留管理庁長官登録支援機関（第23登-008312号）として、日本人と同等の適正待遇による安心安全な就労を支援。'
                : 'Licensed by SLBFE (No. 3293) and Registered Support Organization in Japan (No. 23登-008312), connecting Sri Lankan talent to 5-year full-time careers with Japanese equal pay.'}
            </p>

            <div className="contact-quick-touchpoints" style={{ marginTop: '1.25rem' }}>
              <div className="touchpoint-pill">
                <ShieldCheck size={15} className="text-gold" />
                <span>SLBFE License 3293</span>
              </div>
              <div className="touchpoint-pill">
                <Building size={15} className="text-blue" />
                <span>Japan RSO: 23登-008312 (Komaki & Sendai)</span>
              </div>
              <div className="touchpoint-pill">
                <Clock size={15} className="text-red" />
                <span>5-Year Renewable Work Visa (SSW 1 & 2)</span>
              </div>
              <div className="touchpoint-pill">
                <Award size={15} className="text-emerald" />
                <span>Equal Japanese Pay Parity</span>
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
                <span className="badge-pill-flag"><Briefcase size={16} /></span>
                <span>{lang === 'si' ? 'SSW රැකියා වීසා සාරාංශය' : lang === 'jp' ? '特定技能ビザ概要' : 'Specified Skilled Worker (SSW - 特定技能)'}</span>
              </div>
              <h2 className="visa-title-lg">
                {lang === 'si' ? 'ජපානයේ වසර 5 ක පූර්ණකාලීන රැකියා සහ' : lang === 'jp' ? '日本人と同等以上の適正給与と' : '5-Year Direct Employment with'} <span className="text-gradient-red">{lang === 'si' ? 'නීතිමය ආධාරක සහතිකය' : lang === 'jp' ? '手厚い生活支援' : 'Equal Japanese Pay'}</span>
              </h2>
              <p className="visa-lead-p">
                {lang === 'si'
                  ? 'SSW වැඩසටහන හරහා ශ්‍රී ලාංකික තරුණ තරුණියන්ට ජපානයේ රෝහල්, වැඩිහිටි නිවාස, අවන්හල් ජාල, කෘෂිකාර්මික හා ප්‍රවාහන ආයතන තුළ ජපන් ජාතිකයන්ට හිමි සමාන වැටුප් හා පූර්ණ සෞඛ්‍ය රක්ෂණ සහිතව සේවය කළ හැක. ජපානයේ අපගේම ලියාපදිංචි ආධාරක සංවිධානය (RSO No. 23登-008312) මඟින් නවාතැන්, බැංකු ගිණුම් සහ සේවා ස්ථාන සුබසාධනය සෘජුවම බලාගනු ලැබේ.'
                  : lang === 'jp'
                  ? '特定技能1号制度に基づき、介護、外食、農業、自動車運送、建設などの分野で、日本人と同等以上の適正給与・社会保険完備で就労可能。愛知・仙台の自社登録支援機関が、住居確保から生活立ち上げまで手厚くサポートします。'
                  : 'Under the Specified Skilled Worker (SSW 1 & 2) status, qualified candidates earn equal or higher wages than Japanese nationals with full pension and national health coverage. Directly managed by Atsuko International Japan (RSO No. 23登-008312).'}
              </p>

              <div className="visa-highlights-row">
                {sswHighlights.map((vh, idx) => (
                  <div key={idx} className="vh-item">
                    <span className="vh-num">{vh.val}</span>
                    <span className="vh-lbl">{vh.lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. 5 Core SSW Employment Sectors */}
            <div className="ssw-sectors-breakdown">
              <h3 className="section-title-sm">
                <Briefcase size={18} className="text-red" />
                {lang === 'si' ? 'අත්සුකෝ හරහා මෙහෙයවන ප්‍රධාන SSW ක්ෂේත්‍ර 5' : lang === 'jp' ? '篤子インターナショナルが手掛ける特定技能重点5分野' : '5 Core SSW Employment Sectors Managed by Atsuko'}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '18px', lineHeight: 1.6 }}>
                {lang === 'si'
                  ? 'ජපාන රජයේ නීතිමය ප්‍රමිතීන්ට අනුකූලව, අත්සුකෝ ආයතනය විසින් භාෂා සහ ප්‍රායෝගික විභාග පුහුණුව ලබාදී සෘජුවම සේවායෝජකයන් වෙත යොමු කරන ප්‍රධාන ක්ෂේත්‍ර.'
                  : 'Direct employer matching with preparation for JFT-Basic language exams and Prometric sector skills evaluation tests.'}
              </p>

              <div className="ssw-sectors-cards-grid">
                {sswSectors.map((sec, idx) => {
                  const IconComp = sec.icon;
                  return (
                    <div key={idx} className="ssw-cat-card">
                      <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', background: 'var(--surface-alt)', marginBottom: '10px' }}>
                        <IconComp size={22} className={sec.color} />
                      </div>
                      <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--navy-950)', marginBottom: '8px' }}>
                        {sec.name}
                      </h4>
                      <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '12px' }}>
                        {sec.desc}
                      </p>
                      <div className="ssw-cat-test">Test: {sec.test}</div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--emerald-600, #059669)', marginTop: '6px' }}>
                        Pay: {sec.salary}
                      </div>

                      <button
                        type="button"
                        onClick={() => onOpenModal(`SSW: ${sec.name}`)}
                        className="btn btn-outline btn-block btn-sm"
                        style={{ marginTop: '14px' }}
                      >
                        {lang === 'si' ? 'අයදුම් කරන්න' : 'Apply for Sector'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Requirements & Japan Registered Support Org */}
            <div className="visa-requirements-grid">
              <div className="req-card">
                <h3 className="req-card-title">
                  <CheckCircle2 size={16} className="text-red" />
                  {lang === 'si' ? 'SSW රැකියා වීසා මූලික සුදුසුකම්' : lang === 'jp' ? '特定技能応募要件' : 'SSW Eligibility Criteria'}
                </h3>
                <ul className="req-list">
                  {sswReqs.map((req, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} className="text-red" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="req-card">
                <h3 className="req-card-title">
                  <Building size={16} className="text-emerald" />
                  {lang === 'si' ? 'ජපානයේ ලියාපදිංචි අපගේ සහාය (RSO)' : lang === 'jp' ? '日本登録支援機関のサポート' : 'Our Registered Support in Japan (RSO)'}
                </h3>
                <ul className="req-list">
                  {sswSupport.map((sup, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} className="text-emerald" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{sup}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 5. TITP Technical Intern Training Section */}
            <div className="intakes-detailed-box" style={{ marginTop: '36px' }}>
              <div className="badge-pill-header" style={{ marginBottom: '8px' }}>
                <span className="badge-pill-flag"><Award size={16} /></span>
                <span>{lang === 'si' ? 'වසර 3 ක තාක්ෂණික පුහුණු වැඩසටහන' : lang === 'jp' ? '技能実習制度（TITP）' : 'TITP TECHNICAL INTERN TRAINING'}</span>
              </div>
              <h3 className="section-title-sm" style={{ fontSize: '20px', margin: '6px 0 12px' }}>
                {lang === 'si' ? 'කාර්මික හා නිෂ්පාදන ක්ෂේත්‍ර සඳහා' : lang === 'jp' ? '製造・建設・農業分野の' : 'Technical Internship Program —'} <span className="text-gradient-red">{lang === 'si' ? 'TITP Internship Pathway' : lang === 'jp' ? '即戦力技能実習生' : '3-Year Skill Transfer'}</span>
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '20px' }}>
                {lang === 'si'
                  ? 'ජපානයේ ප්‍රමුඛ පෙළේ කාර්මික කර්මාන්තශාලා, ඉදිකිරීම් සහ ආහාර සැකසුම් ආයතන තුළ ප්‍රායෝගික තාක්ෂණික දැනුම ලබමින් වසර 3 ක කාලයක් වැටුප් සහිත සේවය කිරීමේ හැකියාව. වසර 3 සාර්ථකව අවසන් කළ පසු කිසිදු විභාගයකින් තොරව වසර 5 ක SSW රැකියා වීසා බලපත්‍රයකට සෘජුවම මාරුවිය හැක.'
                  : 'A structured 3-year government-backed technical internship in leading Japanese manufacturing, food processing, and construction firms. Upon completing 3 years, interns can transition into 5-year SSW status with all test requirements waived.'}
              </p>

              <div className="visa-requirements-grid" style={{ margin: 0 }}>
                <div className="req-card" style={{ background: 'var(--surface-alt)' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--navy-950)', marginBottom: '10px' }}>
                    {lang === 'si' ? 'TITP අපේක්ෂක නිර්ණායක' : 'TITP Candidate Criteria'}
                  </h4>
                  <ul className="req-list">
                    <li><CheckCircle2 size={14} className="text-red" style={{ flexShrink: 0, marginTop: '2px' }} /> {lang === 'si' ? 'වයස අවුරුදු 18 ත් 30 ත් අතර වීම සහ සා/පෙළ හෝ කාර්මික පුහුණුව.' : 'Age 18-30 years with completed O/L or technical vocational training.'}</li>
                    <li><CheckCircle2 size={14} className="text-red" style={{ flexShrink: 0, marginTop: '2px' }} /> {lang === 'si' ? 'මූලික ජපන් භාෂා සූදානම (N5 මට්ටම නිර්දේශ කෙරේ).' : 'Basic Japanese readiness (JLPT N5 level recommended).'}</li>
                    <li><CheckCircle2 size={14} className="text-red" style={{ flexShrink: 0, marginTop: '2px' }} /> {lang === 'si' ? 'ශාරීරික යෝග්‍යතාව සහ ප්‍රායෝගික කාර්මික කාර්යයන් සඳහා කැපවීම.' : 'Physical fitness and readiness for hands-on industrial craftsmanship.'}</li>
                  </ul>
                </div>

                <div className="req-card" style={{ background: 'var(--surface-alt)' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--navy-950)', marginBottom: '10px' }}>
                    {lang === 'si' ? 'ප්‍රධාන වැඩසටහන් වාසි' : 'Key Program Benefits'}
                  </h4>
                  <ul className="req-list">
                    <li><CheckCircle2 size={14} className="text-emerald" style={{ flexShrink: 0, marginTop: '2px' }} /> {lang === 'si' ? 'සේවායෝජකයා විසින් සකස් කරන ලද සහනාධාර සහිත නවාතැන් පහසුකම්.' : 'Subsidized accommodation arranged by host employer.'}</li>
                    <li><CheckCircle2 size={14} className="text-emerald" style={{ flexShrink: 0, marginTop: '2px' }} /> {lang === 'si' ? 'වසර 3 අවසානයේ විභාගවලින් තොරව වසර 5 ක SSW රැකියා වීසා බලපත්‍රයකට මාරුවීම.' : 'Direct exam-free transition into 5-Year SSW status after 3 years.'}</li>
                    <li><CheckCircle2 size={14} className="text-emerald" style={{ flexShrink: 0, marginTop: '2px' }} /> {lang === 'si' ? 'නැවත පැමිණීමේදී ජපාන ජාතික විශ්‍රාම වැටුප් ආපසු ලබාගැනීම (Lump-sum refund).' : 'Full assistance for Japanese National Pension refund (Dattai Ichijikin).'}</li>
                  </ul>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenModal('TITP Internship Program')}
                className="btn btn-primary btn-sm"
                style={{ marginTop: '16px' }}
              >
                {lang === 'si' ? 'TITP පුහුණු වැඩසටහනට ලියාපදිංචි වන්න' : 'Register for TITP Internship'}
              </button>
            </div>

            {/* 6. Step-by-Step Employment Roadmap */}
            <div style={{ marginTop: '36px' }}>
              <div className="section-header text-center" style={{ marginBottom: '24px' }}>
                <span className="section-badge badge-blue">
                  <Clock size={14} />
                  {lang === 'si' ? 'පියවර 6 ක ක්‍රියාවලිය' : lang === 'jp' ? '6ステップ 就労ロードマップ' : '6-STEP CAREER ROADMAP'}
                </span>
                <h2 className="section-title-sm" style={{ fontSize: '22px', textAlign: 'center', margin: '8px 0' }}>
                  {lang === 'si' ? 'ශ්‍රී ලංකාවේ සිට ජපානයට පියවරෙන් පියවර රැකියා ගමන් මඟ' : lang === 'jp' ? '応募から配属・就業までの流れ' : 'From Colombo to Japan — Employment Roadmap'}
                </h2>
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', textAlign: 'center', maxWidth: '650px', margin: '0 auto' }}>
                  {lang === 'si'
                    ? 'විනිවිදභාවයෙන් සහ රජයේ නීතිමය ප්‍රමිතීන්ට අනුකූලව ක්‍රියාත්මක වන අපගේ පූර්ණ ක්‍රියාවලිය.'
                    : 'A transparent, fully licensed timeline from your first Japanese lesson to landing at Chubu Centrair or Narita.'}
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

            {/* 7. Document Checklist */}
            <div style={{ marginTop: '36px' }}>
              <div className="section-header text-center" style={{ marginBottom: '24px' }}>
                <span className="section-badge badge-gold">
                  <FolderOpen size={14} />
                  {lang === 'si' ? 'අවශ්‍ය ලියකියවිලි' : lang === 'jp' ? '必要書類チェックリスト' : 'DOCUMENT CHECKLIST'}
                </span>
                <h2 className="section-title-sm" style={{ fontSize: '22px', textAlign: 'center', margin: '8px 0' }}>
                  {lang === 'si' ? 'රැකියා වීසා සඳහා අවශ්‍ය නිල ලිපිලේඛන' : lang === 'jp' ? '特定技能ビザ申請 必要書類一覧' : 'Required Documents for Job Visa'}
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
