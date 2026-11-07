import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Award,
  Building2,
  FileCheck,
  X,
  Calendar,
  ExternalLink
} from 'lucide-react';

export default function OfficialCertificatesShowcase({ lang = 'en' }) {
  // SLBFE interactive stack state
  const [selectedSlbfeYear, setSelectedSlbfeYear] = useState('2026');
  const [slbfePage, setSlbfePage] = useState('p1'); // 'p1' (front) or 'p2' (back)

  // BR Info Modal state
  const [brModalOpen, setBrModalOpen] = useState(false);

  // Clean Protected Document Viewer state (anti-screenshot, anti-screen-recording)
  const [protectedViewer, setProtectedViewer] = useState(null);
  const [isObscured, setIsObscured] = useState(false);

  // Certificate registry data
  const slbfeCertificates = {
    '2026': {
      year: '2026 / 2027',
      status: lang === 'si' ? 'වත්මන් සක්‍රිය' : lang === 'jp' ? '最新有効' : 'Current Active',
      statusType: 'active',
      licenseNo: '3293',
      serial: '2591',
      validFrom: '01/10/2026',
      validTo: '30/09/2027',
      issueDate: '14/09/2026',
      authority: 'Sri Lanka Bureau of Foreign Employment (SLBFE)',
      p1: '/images/certificates/slbfe_license_2026_front.jpg?v=3',
      p2: '/images/certificates/slbfe_license_2026_back.jpg?v=3',
      hasBack: true,
      title: lang === 'si'
        ? 'SLBFE නිල බලපත්‍රය 2026/2027 (අංක 3293)'
        : lang === 'jp'
          ? 'SLBFE 送出機関ライセンス 2026/2027（第3293号）'
          : 'SLBFE Agency License 2026/2027 (No. 3293)',
      desc: lang === 'si'
        ? '2026 සැප්තැම්බර් 14 දින නිකුත් කරන ලද, 2026 ඔක්තෝබර් 01 සිට 2027 සැප්තැම්බර් 30 දක්වා වලංගු නවතම වාර්ෂික අලුත්කිරීම් බලපත්‍රය (Serial: 2591).'
        : lang === 'jp'
          ? '2026年9月14日付発行、有効期間2026年10月1日〜2027年9月30日の最新年次更新証（シリアル: 2591）。'
          : 'Issued on 14 Sept 2026, active from 01 Oct 2026 through 30 Sept 2027 (Serial: 2591).'
    },
    '2025': {
      year: '2025 / 2026',
      status: lang === 'si' ? 'පෙර වසර අලුත්කිරීම' : lang === 'jp' ? '前年次更新' : 'Previous Renewal',
      statusType: 'renewed',
      licenseNo: '3293',
      serial: '01006',
      validFrom: '01/10/2025',
      validTo: '30/09/2026',
      issueDate: '28/08/2025',
      authority: 'Sri Lanka Bureau of Foreign Employment (SLBFE)',
      p1: '/images/certificates/slbfe_license_2025_front.jpg?v=3',
      p2: '/images/certificates/slbfe_license_2025_back.jpg?v=3',
      hasBack: true,
      title: lang === 'si'
        ? 'SLBFE නිල බලපත්‍රය 2025/2026 (අංක 3293)'
        : lang === 'jp'
          ? 'SLBFE 送出機関ライセンス 2025/2026（第3293号）'
          : 'SLBFE Agency License 2025/2026 (No. 3293)',
      desc: lang === 'si'
        ? '2025 අගෝස්තු 28 දින නිකුත් කරන ලද, 2025 ඔක්තෝබර් 01 සිට 2026 සැප්තැම්බර් 30 දක්වා වලංගු වාර්ෂික අලුත්කිරීම් බලපත්‍රය (Serial: 01006).'
        : lang === 'jp'
          ? '2025年8月28日付発行、有効期間2025年10月1日〜2026年9月30日の公式更新証（シリアル: 01006）。'
          : 'Issued on 28 Aug 2025, active from 01 Oct 2025 through 30 Sept 2026 (Serial: 01006).'
    },
    '2024': {
      year: '2024 / 2025',
      status: lang === 'si' ? 'වාර්ෂික බලපත්‍රය' : lang === 'jp' ? '認可更新証' : 'Annual License',
      statusType: 'renewed',
      licenseNo: '3293',
      serial: '02070',
      validFrom: '01/10/2024',
      validTo: '30/09/2025',
      issueDate: '10/10/2024',
      authority: 'Sri Lanka Bureau of Foreign Employment (SLBFE)',
      p1: '/images/certificates/slbfe_license_2024_front.jpg?v=3',
      p2: null,
      hasBack: false,
      title: lang === 'si'
        ? 'SLBFE නිල බලපත්‍රය 2024/2025 (අංක 3293)'
        : lang === 'jp'
          ? 'SLBFE 送出機関ライセンス 2024/2025（第3293号）'
          : 'SLBFE Agency License 2024/2025 (No. 3293)',
      desc: lang === 'si'
        ? '2024 ඔක්තෝබර් 10 දින නිකුත් කරන ලද, 2024 ඔක්තෝබර් 01 සිට 2025 සැප්තැම්බර් 30 දක්වා වලංගු බලපත්‍රය (Serial: 02070).'
        : lang === 'jp'
          ? '2024年10月10日付発行、有効期間2024年10月1日〜2025年9月30日の公式ライセンス（シリアル: 02070）。'
          : 'Issued on 10 Oct 2024, active from 01 Oct 2024 through 30 Sept 2025 (Serial: 02070).'
    }
  };

  const tvecData = {
    title: lang === 'si'
      ? 'TVEC ජාතික තෘතීයික හා වෘත්තීය අධ්‍යාපන කොමිෂන් සභාවේ පාඨමාලා ප්‍රතීතනය'
      : lang === 'jp'
        ? 'TVEC（高等職業教育訓練委員会）コース認定証'
        : 'TVEC Sri Lanka Course Accreditation Certificate',
    courseName: lang === 'si' ? 'සාත්තු සේවක (Caregiver) NVQ Level 3' : lang === 'jp' ? '介護士（Caregiver）NVQ レベル3' : 'Caregiver (NVQ Level 3)',
    centerReg: 'P02/0603',
    certNo: 'N85S010-1',
    ncsCode: 'N85S010.1',
    validPeriod: lang === 'si' ? '2025/07/16 සිට 2028/07/15 දක්වා (2028 ජූලි දක්වා වලංගුයි)' : lang === 'jp' ? '2025年7月16日〜2028年7月15日（2028年7月まで有効）' : '16/07/2025 to 15/07/2028 (Valid up to 15/Jul/2028)',
    authority: 'Tertiary and Vocational Education Commission (TVEC), Ministry of Education, Sri Lanka',
    image: '/images/certificates/tvec_caregiver_nvq3_p1.jpg',
    desc: lang === 'si'
      ? 'සාත්තු සේවක (Caregiver) NVQ Level 3 පාඨමාලාව සඳහා TVEC ප්‍රතීතනය ලත් ආයතනයකි (P02/0603). 2028 දක්වා වලංගුයි.'
      : lang === 'jp'
        ? 'TVEC認定の介護士（NVQ Level 3）正規養成訓練施設（P02/0603、2028年7月まで有効）。'
        : 'TVEC-accredited institute under Section 13(1) for Caregiver NVQ Level 3 (Center: P02/0603, Cert: N85S010-1). Valid to July 2028.'
  };

  const currentSlbfe = slbfeCertificates[selectedSlbfeYear];
  const activeSlbfeImage = (slbfePage === 'p2' && currentSlbfe.hasBack) ? currentSlbfe.p2 : currentSlbfe.p1;

  // Anti-Screenshot & Screen-Recording Deterrence
  useEffect(() => {
    if (!protectedViewer) return;

    // Detect when Snipping Tool, screenshot overlay, or screen capture steals OS focus
    const handleBlur = () => {
      setIsObscured(true);
    };

    const handleFocus = () => {
      setIsObscured(false);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsObscured(true);
      } else {
        setIsObscured(false);
      }
    };

    // Intercept keyboard shortcuts: PrintScreen, Ctrl+S, Ctrl+P, Ctrl+U, F12, DevTools
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setProtectedViewer(null);
      }

      if (e.key === 'PrintScreen') {
        setIsObscured(true);
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('').catch(() => {});
        }
      }

      if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'u'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }

      if (e.key === 'F12' || ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'i')) {
        e.preventDefault();
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen') {
        setIsObscured(true);
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('').catch(() => {});
        }
      }
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      document.body.style.overflow = '';
      setIsObscured(false);
    };
  }, [protectedViewer]);




  return (
    <section className="section official-certificates-section" id="official-credentials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge badge-blue">
            <ShieldCheck size={15} />
            {lang === 'si'
              ? '100% තහවුරු කළ රජයේ ප්‍රතීතන සහ නීත්‍යානුකූල බලපත්‍ර'
              : lang === 'jp'
                ? '政府公認・正規許認可および認定証明証'
                : '100% Verified Government Accreditation & Legal Licenses'}
          </span>
          <h2 className="section-title">
            {lang === 'si' ? 'නිල ලියාපදිංචි සහ' : lang === 'jp' ? '公式許認可・' : 'Verified Legal Credentials &'}{' '}
            <span className="text-gradient-red">
              {lang === 'si' ? 'රාජ්‍ය බලපත්‍ර සහතික' : lang === 'jp' ? '政府公認ライセンス' : 'Government Accreditation'}
            </span>
          </h2>
          <p className="section-subtitle">
            {lang === 'si'
              ? 'අත්සුකෝ ජාත්‍යන්තර ආයතනය ශ්‍රී ලංකා සමාගම් පනත යටතේ ලියාපදිංචි, ශ්‍රී ලංකා විදේශ සේවා නියුක්ති කාර්යාංශයේ (SLBFE) බලපත්‍රලාභී සහ තෘතීයික හා වෘත්තීය අධ්‍යාපන කොමිෂන් සභාවේ (TVEC) ප්‍රතීතනය ලත් පූර්ණ නෛතික පිළිගැනීමක් සහිත ආයතනයකි.'
              : lang === 'jp'
                ? 'アツコ・インターナショナルは、スリランカ会社登記局、海外雇用局（SLBFE）、および高等職業教育訓練委員会（TVEC）より正式な認可を受けた正規の送出・教育機関です。公式文書を公開し、高い透明性を保証しています。'
                : 'Atsuko International is fully incorporated under the Companies Act of Sri Lanka, licensed by the Sri Lanka Bureau of Foreign Employment (SLBFE), and accredited by the Tertiary and Vocational Education Commission (TVEC). All official credentials are authenticated for complete public verification.'}
          </p>
        </div>

        {/* 3-Part Showcase Grid */}
        <div className="cert-showcase-grid">

          {/* ========================================================
              PART 1: BUSINESS REGISTRATION (BR)
              ======================================================== */}
          <div className="cert-card cert-card-br">
            <h3 className="cert-card-title">
              {lang === 'si'
                ? 'ශ්‍රී ලංකා රජයේ නිල සමාගම් ලියාපදිංචිය (BR)'
                : lang === 'jp'
                  ? 'スリランカ正規会社法人登記（BR）'
                  : 'Official Sri Lanka Business Registration'}
            </h3>

            <p className="cert-card-desc">
              {lang === 'si'
                ? '2007 අංක 07 දරන සමාගම් පනත යටතේ ලියාපදිංචි සමාගමකි (PV 0217143). ජපානයේ අපගේ සහෝදර ආයතනය (株式会社 Atsuko International) සමඟ සෘජුව ක්‍රියාත්මක වේ.'
                : lang === 'jp'
                  ? '2007年第7号会社法に基づく正規登記法人（PV 0217143）。日本現地法人「株式会社 Atsuko International」と直接連携。'
                  : 'Incorporated under Companies Act No. 7 of 2007 (PV 0217143). Operating with our dual-entity Japan corporate office (No: 3700-01-048848).'}
            </p>

            {/* Official BR Certificate Shield / Emblem Visual */}
            <div className="br-emblem-showcase-box" onClick={() => setBrModalOpen(true)}>
              <div className="br-emblem-badge">
                <div className="br-emblem-icon-ring">
                  <Building2 size={20} />
                </div>
                <div className="br-emblem-text">
                  <span className="br-gov-title">DEMOCRATIC SOCIALIST REPUBLIC OF SRI LANKA</span>
                  <span className="br-gov-dept">DEPARTMENT OF THE REGISTRAR OF COMPANIES</span>
                  <strong className="br-reg-highlight">PV 0217143</strong>
                  <span className="br-company-name">ATSUKO INTERNATIONAL (PVT) LTD</span>
                </div>
              </div>
              <div className="br-view-btn-wrap">
                <button type="button" className="btn-cert-inspect" onClick={() => setBrModalOpen(true)}>
                  <FileCheck size={14} />
                  <span>{lang === 'si' ? 'ලියාපදිංචි විස්තර බලන්න' : lang === 'jp' ? '法人登記詳細を確認' : 'View Registry Breakdown'}</span>
                </button>
              </div>
            </div>

            {/* Quick Metadata Table */}
            <div className="cert-meta-grid">
              <div className="cert-meta-item">
                <span className="meta-lbl">{lang === 'si' ? 'සමාගම් අංකය' : lang === 'jp' ? '法人登録番号' : 'Registration No'}</span>
                <strong className="meta-val highlight-blue">PV 0217143</strong>
              </div>
              <div className="cert-meta-item">
                <span className="meta-lbl">{lang === 'si' ? 'සංස්ථාපිත දිනය' : lang === 'jp' ? '会社設立日' : 'Incorporated Date'}</span>
                <strong className="meta-val">01 Nov 2019</strong>
              </div>
              <div className="cert-meta-item">
                <span className="meta-lbl">{lang === 'si' ? 'ජපාන ආයතන අංකය' : lang === 'jp' ? '日本法人番号' : 'Japan Entity No'}</span>
                <strong className="meta-val highlight-crimson">3700-01-048848</strong>
              </div>
              <div className="cert-meta-item">
                <span className="meta-lbl">{lang === 'si' ? 'ලියාපදිංචි සහායක ආයතනය' : lang === 'jp' ? '登録支援機関番号' : 'Registered Support Org'}</span>
                <strong className="meta-val">23登-008312</strong>
              </div>
            </div>
          </div>

          {/* ========================================================
              PART 2: TVEC ACCREDITATION CERTIFICATE (NVQ-3)
              ======================================================== */}
          <div className="cert-card cert-card-tvec">
            <h3 className="cert-card-title">
              {tvecData.title}
            </h3>

            <p className="cert-card-desc">
              {tvecData.desc}
            </p>

            {/* Document Thumbnail Preview - Protected Inspection */}
            <div 
              className="cert-doc-preview-wrapper"
              onClick={() => setProtectedViewer({
                src: tvecData.image,
                title: tvecData.title,
                sub: `Center Reg: ${tvecData.centerReg} • Cert No: ${tvecData.certNo} • Validity: Up to 15/Jul/2028`,
                badge: 'TVEC NVQ-3 CAREGIVER'
              })}
              onContextMenu={(e) => e.preventDefault()}
              title={lang === 'si' ? 'මුල් සහතිකය පරීක්ෂා කරන්න (ආරක්ෂිත)' : lang === 'jp' ? '原本画像を確認（保護表示）' : 'Inspect Raw Pic (Protected View)'}
            >
              <div className="cert-doc-img-container" onContextMenu={(e) => e.preventDefault()}>
                <img
                  src={tvecData.image}
                  alt="TVEC Accreditation Certificate - Atsuko International Caregiver NVQ Level 3"
                  className="cert-doc-img"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
                <div className="cert-doc-hover-overlay">
                  <div className="cert-zoom-btn">
                    <ShieldCheck size={14} />
                    <span>{lang === 'si' ? 'මුල් සහතිකය පරීක්ෂා කරන්න' : lang === 'jp' ? '原本画像を確認' : 'Inspect Raw Pic'}</span>
                  </div>
                </div>
              </div>
              <div className="cert-stamp-badge">
                <Award size={14} />
                <span>TVEC CERTIFIED P02/0603</span>
              </div>
            </div>

            {/* Quick Metadata Table */}
            <div className="cert-meta-grid">
              <div className="cert-meta-item">
                <span className="meta-lbl">{lang === 'si' ? 'ආයතනික ලියාපදිංචිය' : lang === 'jp' ? '施設登録番号' : 'Center Reg No'}</span>
                <strong className="meta-val highlight-blue">{tvecData.centerReg}</strong>
              </div>
              <div className="cert-meta-item">
                <span className="meta-lbl">{lang === 'si' ? 'ප්‍රතීතන සහතික අංකය' : lang === 'jp' ? '認定証番号' : 'Certificate No'}</span>
                <strong className="meta-val">{tvecData.certNo}</strong>
              </div>
              <div className="cert-meta-item">
                <span className="meta-lbl">{lang === 'si' ? 'සුදුසුකම් මට්ටම' : lang === 'jp' ? '資格レベル' : 'Qualification Level'}</span>
                <strong className="meta-val highlight-gold">NVQ Level 3</strong>
              </div>
              <div className="cert-meta-item">
                <span className="meta-lbl">{lang === 'si' ? 'වලංගු කාලය' : lang === 'jp' ? '有効期限' : 'Valid Period'}</span>
                <strong className="meta-val">16/07/2025 – 15/07/2028</strong>
              </div>
            </div>
          </div>

          {/* ========================================================
              PART 3: SLBFE AGENCY LICENSE (ANNUAL RENEWALS STACK)
              ======================================================== */}
          <div className="cert-card cert-card-slbfe">
            <h3 className="cert-card-title">
              {lang === 'si'
                ? 'විදේශ සේවා නියුක්ති කාර්යාංශයේ (SLBFE) නිල බලපත්‍රය'
                : lang === 'jp'
                  ? 'スリランカ海外雇用局（SLBFE）公認送出機関ライセンス'
                  : 'SLBFE Foreign Employment Agency License'}
            </h3>

            <p className="cert-card-desc">
              {lang === 'si'
                ? 'විදේශ සේවා නියුක්ති කාර්යාංශයේ (SLBFE) අංක 3293 දරන නිල බලපත්‍රලාභී ආයතනයකි. 2026/2027 දක්වා අඛණ්ඩව අලුත් කරන ලද බලපත්‍ර පෙළ.'
                : lang === 'jp'
                  ? '海外雇用局（SLBFE）公認ライセンス（第3293号）。2026/2027年まで年次更新された正規認可証一式。'
                  : 'SLBFE License No. 3293. Continuous government annual renewal certificates verifying unbroken legal compliance through 2026/2027.'}
            </p>

            {/* Interactive Stack Year Tabs & Page Switcher */}
            <div className="slbfe-controls-bar">
              <div className="slbfe-year-tabs" role="tablist">
                {Object.keys(slbfeCertificates).map((yearKey) => {
                  const cert = slbfeCertificates[yearKey];
                  const isActive = selectedSlbfeYear === yearKey;
                  return (
                    <button
                      key={yearKey}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`slbfe-year-tab ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedSlbfeYear(yearKey);
                        setSlbfePage('p1');
                      }}
                    >
                      <Calendar size={13} />
                      <span>{cert.year}</span>
                      {cert.statusType === 'active' && (
                        <span className="slbfe-active-dot" title="Active License" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Front / Back Toggle for Certificates with Page 2 */}
              {currentSlbfe.hasBack && (
                <div className="slbfe-page-switcher">
                  <button
                    type="button"
                    className={`slbfe-page-btn ${slbfePage === 'p1' ? 'active' : ''}`}
                    onClick={() => setSlbfePage('p1')}
                  >
                    <span>{lang === 'si' ? 'ඉදිරිපස' : lang === 'jp' ? '表面' : 'Front'}</span>
                  </button>
                  <button
                    type="button"
                    className={`slbfe-page-btn ${slbfePage === 'p2' ? 'active' : ''}`}
                    onClick={() => setSlbfePage('p2')}
                  >
                    <span>{lang === 'si' ? 'පිටුපස' : lang === 'jp' ? '裏面' : 'Reverse'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Interactive 3D Stack Card Container */}
            <div className="slbfe-stack-display-stage">
              {/* Back Card Preview (Stack effect illusion) */}
              <div className="slbfe-stack-shadow-layer layer-2" aria-hidden="true" />
              <div className="slbfe-stack-shadow-layer layer-1" aria-hidden="true" />

              {/* Main Visible Active Certificate Card - Protected Inspection */}
              <div
                className="slbfe-active-card-wrap"
                onClick={() => setProtectedViewer({
                  src: activeSlbfeImage,
                  title: `${currentSlbfe.title} - ${slbfePage === 'p2' ? 'Reverse Page' : 'Front Page'}`,
                  sub: `License No: 3293 • Serial: ${currentSlbfe.serial} • Valid: ${currentSlbfe.validFrom} to ${currentSlbfe.validTo}`,
                  badge: `SLBFE #${currentSlbfe.licenseNo} (${currentSlbfe.year})`
                })}
                onContextMenu={(e) => e.preventDefault()}
                title={lang === 'si' ? 'මුල් බලපත්‍රය පරීක්ෂා කරන්න (ආරක්ෂිත)' : lang === 'jp' ? '原本画像を確認（保護表示）' : 'Inspect Raw Pic (Protected View)'}
              >
                <div className="cert-doc-img-container" onContextMenu={(e) => e.preventDefault()}>
                  <img
                    src={activeSlbfeImage}
                    alt={`${currentSlbfe.title} - Atsuko International`}
                    className="cert-doc-img"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  <div className="cert-doc-hover-overlay">
                    <div className="cert-zoom-btn">
                      <ShieldCheck size={14} />
                      <span>{lang === 'si' ? 'මුල් බලපත්‍රය පරීක්ෂා කරන්න' : lang === 'jp' ? '原本画像を確認' : 'Inspect Raw Pic'}</span>
                    </div>
                  </div>
                </div>

                <div className="cert-stamp-badge stamp-crimson">
                  <ShieldCheck size={14} />
                  <span>SLBFE LICENSED #{currentSlbfe.licenseNo}</span>
                </div>
              </div>
            </div>

            {/* Quick Metadata Table */}
            <div className="cert-meta-grid">
              <div className="cert-meta-item">
                <span className="meta-lbl">{lang === 'si' ? 'බලපත්‍ර අංකය' : lang === 'jp' ? '認可番号' : 'License No'}</span>
                <strong className="meta-val highlight-crimson">3293</strong>
              </div>
              <div className="cert-meta-item">
                <span className="meta-lbl">{lang === 'si' ? 'අනුක්‍රමික අංකය' : lang === 'jp' ? 'シリアル番号' : 'Serial No'}</span>
                <strong className="meta-val">{currentSlbfe.serial}</strong>
              </div>
              <div className="cert-meta-item">
                <span className="meta-lbl">{lang === 'si' ? 'වලංගු කාල සීමාව' : lang === 'jp' ? '有効期間' : 'Valid Duration'}</span>
                <strong className="meta-val">{currentSlbfe.validFrom} – {currentSlbfe.validTo}</strong>
              </div>
              <div className="cert-meta-item">
                <span className="meta-lbl">{lang === 'si' ? 'නිකුත් කළ දිනය' : lang === 'jp' ? '発給日' : 'Date of Issue'}</span>
                <strong className="meta-val">{currentSlbfe.issueDate}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* ========================================================
          CLEAN PROTECTED DOCUMENT VIEWER (ANTI-SCREENSHOT & WATERMARK)
          ======================================================== */}
      {protectedViewer && (
        <div 
          className="clean-protected-viewer-overlay"
          onClick={() => setProtectedViewer(null)}
          onContextMenu={(e) => e.preventDefault()}
          role="dialog"
          aria-modal="true"
        >
          {/* Subtle Close button in top-right */}
          <button 
            type="button" 
            className="clean-protected-close-btn"
            onClick={() => setProtectedViewer(null)}
            title="Close (Esc)"
          >
            <X size={22} />
          </button>

          {/* Centered Document Stage */}
          <div 
            className={`clean-protected-stage ${isObscured ? 'is-obscured' : ''}`}
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* Forensic Anti-Theft Watermark Matrix */}
            <div className="security-watermark-overlay" aria-hidden="true">
              {Array.from({ length: 14 }).map((_, idx) => (
                <div key={idx} className="security-watermark-line">
                  <span>ATSUKO INTERNATIONAL (PVT) LTD</span>
                  <span className="dot">•</span>
                  <span>FOR OFFICIAL VERIFICATION ONLY</span>
                  <span className="dot">•</span>
                  <span>REPRODUCTION PROHIBITED</span>
                  <span className="dot">•</span>
                  <span>LICENSE NO. 3293</span>
                  <span className="dot">•</span>
                  <span>PV 0217143</span>
                </div>
              ))}
            </div>

            {/* Transparent Glass Shield Overlay (blocks right clicks & touch interactions) */}
            <div 
              className="protective-glass-shield"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />

            {/* Pristine Document Scan */}
            <img
              src={protectedViewer.src}
              alt={protectedViewer.title}
              className="clean-protected-img"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />

            {/* Blackout Shield activated on Snipping Tool or screenshot detection */}
            {isObscured && (
              <div className="screenshot-blackout-shield">
                <ShieldCheck size={52} className="shield-icon" />
                <h3>{lang === 'si' ? 'තිර ග්‍රහණ ආරක්ෂණ පද්ධතිය සක්‍රියයි' : lang === 'jp' ? '画面キャプチャ保護が作動中' : 'Screen Capture Protection Active'}</h3>
                <p>
                  {lang === 'si'
                    ? 'කවුළුව අක්‍රිය වූ විට හෝ Snipping Tool / Screenshot හඳුනාගත් විට ලේඛනය ස්වයංක්‍රීයව සඟවනු ලැබේ.'
                    : lang === 'jp'
                      ? 'ウィンドウ非アクティブ時やキャプチャソフト起動時は原本保護のため一時非表示になります。'
                      : 'Document is automatically obscured while window is inactive or screenshot software is open.'}
                </p>
                <span className="shield-hint">
                  {lang === 'si' ? 'නැවත බැලීමට කවුළුව මත ක්ලික් කරන්න' : lang === 'jp' ? 'クリックして表示を再開' : 'Click inside window to resume viewing'}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================
          BR REGISTRY BREAKDOWN MODAL (PART 1 DETAILS)
          ======================================================== */}
      {brModalOpen && (
        <div 
          className="cert-lightbox-backdrop" 
          onClick={() => setBrModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="cert-lightbox-container cert-br-modal-box" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 740 }}
          >
            <div className="cert-lightbox-header">
              <div className="cert-lightbox-title-group">
                <span className="cert-lightbox-badge">
                  {lang === 'si' ? 'නීත්‍යානුකූල සමාගම් ලියාපදිංචිය' : lang === 'jp' ? '公式法人登記証' : 'LEGAL CORPORATE REGISTRY'}
                </span>
                <h4 className="cert-lightbox-title">
                  {lang === 'si' ? 'Atsuko International (Pvt) Ltd නීත්‍යානුකූල සමාගම් තොරතුරු' : lang === 'jp' ? 'Atsuko International (Pvt) Ltd 正式登記データ' : 'Atsuko International (Pvt) Ltd Official Registry Data'}
                </h4>
                <span className="cert-lightbox-sub">
                  {lang === 'si' ? 'ශ්‍රී ලංකා සමාගම් රෙජිස්ට්‍රාර් දෙපාර්තමේන්තුව • 2007 අංක 7 දරන සමාගම් පනත' : lang === 'jp' ? 'スリランカ会社登記局 • 2007年第7号会社法' : 'Department of the Registrar of Companies Sri Lanka • Companies Act No. 7 of 2007'}
                </span>
              </div>
              <button
                type="button"
                className="cert-control-btn btn-close"
                onClick={() => setBrModalOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="cert-br-modal-body">
              <div className="br-modal-section">
                <h5 className="br-modal-sec-title">
                  <Building2 size={16} />
                  <span>{lang === 'si' ? 'ශ්‍රී ලංකා මූලස්ථාන ලියාපදිංචිය' : lang === 'jp' ? 'スリランカ本社登記概要' : 'Sri Lanka Entity Registration'}</span>
                </h5>
                <div className="br-modal-table">
                  <div className="br-modal-row">
                    <span className="br-lbl">{lang === 'si' ? 'සමාගමේ නම:' : lang === 'jp' ? '法人名:' : 'Company Name:'}</span>
                    <strong className="br-val">ATSUKO INTERNATIONAL (PVT) LTD</strong>
                  </div>
                  <div className="br-modal-row">
                    <span className="br-lbl">{lang === 'si' ? 'ලියාපදිංචි අංකය:' : lang === 'jp' ? '法人登録番号:' : 'Registration No:'}</span>
                    <strong className="br-val highlight-blue">PV 0217143</strong>
                  </div>
                  <div className="br-modal-row">
                    <span className="br-lbl">{lang === 'si' ? 'සංස්ථාපිත දිනය:' : lang === 'jp' ? '設立年月日:' : 'Date of Incorporation:'}</span>
                    <strong className="br-val">01 November 2019</strong>
                  </div>
                  <div className="br-modal-row">
                    <span className="br-lbl">{lang === 'si' ? 'පාලක නීතිය:' : lang === 'jp' ? '準拠法:' : 'Governing Law:'}</span>
                    <strong className="br-val">Companies Act No. 7 of 2007, Sri Lanka</strong>
                  </div>
                  <div className="br-modal-row">
                    <span className="br-lbl">{lang === 'si' ? 'ලියාපදිංචි කාර්යාලය:' : lang === 'jp' ? '登記住所:' : 'Registered Office:'}</span>
                    <strong className="br-val">No. 204/C, Kandy Road, Kadawatha, Sri Lanka</strong>
                  </div>
                  <div className="br-modal-row">
                    <span className="br-lbl">{lang === 'si' ? 'SLBFE බලපත්‍රය:' : lang === 'jp' ? '海外雇用局認可:' : 'SLBFE Agency License:'}</span>
                    <strong className="br-val highlight-crimson">License No. 3293</strong>
                  </div>
                </div>
              </div>

              <div className="br-modal-section" style={{ marginTop: '1.25rem' }}>
                <h5 className="br-modal-sec-title">
                  <ShieldCheck size={16} />
                  <span>{lang === 'si' ? 'ජපාන මෙහෙයුම් ආයතනික තොරතුරු' : lang === 'jp' ? '日本現地法人・許認可情報' : 'Japan Entity & Regulatory Licenses'}</span>
                </h5>
                <div className="br-modal-table">
                  <div className="br-modal-row">
                    <span className="br-lbl">{lang === 'si' ? 'ජපාන ආයතනය:' : lang === 'jp' ? '日本法人名:' : 'Japan Entity:'}</span>
                    <strong className="br-val">株式会社 Atsuko International</strong>
                  </div>
                  <div className="br-modal-row">
                    <span className="br-lbl">{lang === 'si' ? 'ජපාන සංස්ථාපිත අංකය:' : lang === 'jp' ? '法人番号:' : 'Japan Corporate ID:'}</span>
                    <strong className="br-val highlight-crimson">3700-01-048848</strong>
                  </div>
                  <div className="br-modal-row">
                    <span className="br-lbl">{lang === 'si' ? 'ලියාපදිංචි සහායක ආයතනය:' : lang === 'jp' ? '登録支援機関番号:' : 'Registered Support Org:'}</span>
                    <strong className="br-val highlight-blue">23登-008312</strong>
                  </div>
                  <div className="br-modal-row">
                    <span className="br-lbl">{lang === 'si' ? 'ගෙවීම් සහිත රැකියා බලපත්‍රය:' : lang === 'jp' ? '有料職業紹介事業許可:' : 'Employment Placement License:'}</span>
                    <strong className="br-val">04-ユ-300338</strong>
                  </div>
                  <div className="br-modal-row">
                    <span className="br-lbl">{lang === 'si' ? 'ජපාන කාර්යාලය:' : lang === 'jp' ? '所在地:' : 'Japan Location:'}</span>
                    <strong className="br-val">
                      {lang === 'si' ? 'තැපැල් කේතය 485-0041, සන්ෂයින් කොමාකි ගොඩනැගිල්ල, 2 වන මහල (බටහිර කාමරය), 2-41 කොමාකි, කොමාකි නගරය, අයිචි ප්‍රාන්තය, ජපානය' : lang === 'jp' ? '〒485-0041 愛知県小牧市小牧2-41 サンシャイン小牧棟 2階西号室' : 'Postcode-485-0041, Sunshine Komaki Building, 2nd Floor, West Room, 2-41 Komaki, Komaki City, Aichi Prefecture, Japan'}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="cert-lightbox-footer" style={{ justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => setBrModalOpen(false)}
              >
                <span>{lang === 'si' ? 'හරි' : lang === 'jp' ? '閉じる' : 'Close'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

