import { useState } from 'react';
import {
  Building2,
  Home,
  Utensils,
  Users,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Heart,
  Clock,
  GraduationCap,
  ArrowRight,
  FileCheck,
  Compass,
  Laptop,
  Globe2
} from 'lucide-react';
import { studentLifeData, officialContacts } from '../data/websiteData';
import { getUiText } from '../data/uiText';

export default function StudentLifePage({ lang, onOpenModal, onNavigate }) {
  const tFull = getUiText(lang);
  const ui = tFull.pages.facilities;
  const h = tFull.home;

  const quickIcons = [
    <Building2 size={20} style={{ color: '#0284c7' }} />,
    <Utensils size={20} style={{ color: '#f59e0b' }} />,
    <Laptop size={20} style={{ color: '#10b981' }} />,
    <Globe2 size={20} style={{ color: '#dc2626' }} />
  ];

  const assessmentCards = lang === 'si' ? [
    {
      title: 'සතිපතා ප්‍රගති පරීක්ෂණ',
      desc: 'කන්ජි අක්ෂර, කටකනා වචන මාලාව, ව්‍යාකරණ සහ දෛනික තේරුම්ගැනීමේ හැකියාව මැනීමේ නිතිපතා පරීක්ෂණ.'
    },
    {
      title: 'ශ්‍රව්‍ය පුහුණු විද්‍යාගාරය',
      desc: 'JLPT සහ JFT ශ්‍රව්‍ය විභාගවල නියම වේගය, ජපන් කථන විලාස සහ නිල විභාග ශාලා පරිසරය පෙරහුරු කිරීම.'
    },
    {
      title: 'පරිගණක CBT විද්‍යාගාරය',
      desc: 'JFT-Basic සහ SSW වෘත්තීය නිපුණතා (සාත්තු සේවා, ආහාර, රියදුරු) සඳහා ප්‍රායෝගික Prometric පරිගණක පුහුණුව.'
    },
    {
      title: 'Mensetsu සම්මුඛ පරීක්ෂණ පෙරහුරු',
      desc: 'ජපන් විදුහල්පතිවරුන්, රෝහල් අධ්‍යක්ෂවරුන් සහ ජපන් තානාපති කාර්යාල සම්මුඛ පරීක්ෂණ සඳහා පෞද්ගලික පුහුණුව.'
    }
  ] : lang === 'jp' ? [
    {
      title: '週間チェックテスト',
      desc: '漢字の筆順、カタカナ語彙、文法助詞、日常読解に関する小テストを毎週実施。'
    },
    {
      title: '音声聴解ラボ',
      desc: '本番のJLPT・JFT試験と同じスピード・アクセント・音響環境を忠実に再現。'
    },
    {
      title: 'CBTコンピュータ演習室',
      desc: 'JFT-Basicおよび特定技能評価試験（介護・外食・運送）の実戦的プロメトリック演習。'
    },
    {
      title: '面接模擬特訓',
      desc: '日本語学校校長、介護施設長、在スリランカ日本国大使館面接に対応した徹底個別指導。'
    }
  ] : [
    {
      title: 'Weekly Checkpoints',
      desc: 'Regular quizzes on Kanji stroke order, Katakana vocabulary, grammar particles, and daily comprehension.'
    },
    {
      title: 'Audio Listening Lab',
      desc: 'Simulating genuine JLPT and JFT listening test speed, Japanese accents, and acoustic exam conditions.'
    },
    {
      title: 'Computer CBT Lab',
      desc: 'Hands-on Prometric CBT practice for JFT-Basic and SSW skill evaluations (Caregiving, Food, Driving).'
    },
    {
      title: 'Mensetsu Mock Interviews',
      desc: 'One-on-one coaching for Japanese school principals, hospital directors, and Embassy of Japan visa interviews.'
    }
  ];

  const japanSteps = lang === 'si' ? [
    { num: '01', title: 'ගුවන් තොටුපළ පිළිගැනීම', desc: 'ටෝකියෝ හනෙඩා/නරීටා හෝ නාගොයා ගුවන් තොටුපළේදී අත්සුකෝ කාර්ය මණ්ඩලය විසින් පිළිගෙන නවාතැනට ප්‍රවාහනය කිරීම.' },
    { num: '02', title: 'නගර සභා (Shiyakusho) ලියාපදිංචිය', desc: 'ඔබේ නේවාසික කාඩ්පතේ (Zairyu Card) ලිපිනය ලියාපදිංචි කිරීම සහ MyNumber කාඩ්පත ලබාගැනීම.' },
    { num: '03', title: 'ජපන් බැංකු ගිණුම් විවෘත කිරීම', desc: 'වැටුප් සහ අර්ධකාලීන මුදල් ආරක්ෂිතව තැන්පත් කිරීමට Japan Post (Yucho Bank) නිල ගිණුමක් විවෘත කිරීම.' },
    { num: '04', title: 'ජාතික සෞඛ්‍ය රක්ෂණය (NHI)', desc: 'ජපානය පුරා වෛද්‍ය ප්‍රතිකාර වියදම්වලින් 70%ක් ආවරණය වන ජාතික සෞඛ්‍ය රක්ෂණයට ලියාපදිංචි කිරීම.' },
    { num: '05', title: 'SIM කාඩ්පත් සහ ප්‍රවාහන කාඩ්පත්', desc: 'අධිවේගී ජපන් Voice/Data SIM කාඩ්පතක් සහ ශිෂ්‍ය දුම්රිය ප්‍රවාහන කාඩ්පත් (Suica/Pasmo) ලබාදීම.' },
    { num: '06', title: '24/7 අඛණ්ඩ රැකවරණය සහ නීතිමය සහාය', desc: 'ජපානයේ ලියාපදිංචි ආධාරක ආයතනය (23登-008312) හරහා හදිසි ආපදා, සෞඛ්‍ය හා රැකියා කොන්ත්‍රාත් ආරක්ෂාව.' },
  ] : lang === 'jp' ? [
    { num: '01', title: '空港出迎え・送迎支援', desc: '羽田・成田・中部・関西空港で篤子スタッフが直接出迎え、手配済みの学生寮・社宅へ案内。' },
    { num: '02', title: '市役所での住民登録', desc: '在留カードへの住所記載手続き、マイナンバーカード申請、印鑑登録を同行支援。' },
    { num: '03', title: '銀行口座・印鑑作成', desc: '給与受取用のゆうちょ銀行口座開設、公認印鑑（ハンコ）の作成をサポート。' },
    { num: '04', title: '国民健康保険（NHI）加入', desc: '日本全国の医療費が3割負担となる公的医療保険の手続きを代行・支援。' },
    { num: '05', title: '格安SIM・定期券購入', desc: '高速データ通信可能な日本国内SIMカード手配および通学・通勤定期券の購入案内。' },
    { num: '06', title: '24時間生活相談・権利擁護', desc: '登録支援機関（23登-008312）として急病・労働環境相談・災害時対応を常時提供。' },
  ] : [
    { num: '01', title: 'Airport Reception & Escort', desc: 'Met directly at Tokyo Haneda/Narita, Nagoya Chubu, or Kansai Airport by Atsuko staff and assisted to accommodation.' },
    { num: '02', title: 'City Hall (Shiyakusho) Registration', desc: 'Assistance with municipal address registration on your Residence Card (Zairyu Card) and MyNumber application.' },
    { num: '03', title: 'Bank Account & Hanko Setup', desc: 'Opening an official Japanese bank account (Japan Post / Yucho Bank) to receive your salary or earnings securely.' },
    { num: '04', title: 'National Health Insurance (NHI)', desc: 'Enrollment in Japanese National Health Insurance covering 70% of medical and dental treatment nationwide.' },
    { num: '05', title: 'SIM Card, WiFi & Commuter Pass', desc: 'Setting up high-speed Japanese voice/data SIM cards and issuing student or worker transit passes (Suica/Pasmo).' },
    { num: '06', title: '24/7 Welfare & Legal Support', desc: 'Ongoing pastoral care, emergency healthcare assistance, and contract protection under our Japanese Support Org.' },
  ];

  return (
    <div className="page-container student-life-page">
      {/* 1. Page Hero Header */}
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

            <div className="about-quick-badges">
              {ui.badges.map((b, idx) => (
                <div key={idx} className="about-badge-item">
                  <span className="badge-icon">{quickIcons[idx] || <Sparkles size={20} />}</span>
                  <div>
                    <strong>{b.val}</strong>
                    <span className="helper-text">{b.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. On-Campus Accommodation Section */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="feature-split">
            <div className="feature-img-box">
              <img
                src="/images/atsuko-building-ground.jpg"
                alt="Atsuko International School Headquarters & Student Accommodation in Kadawatha"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="feature-tag-box">
                <h5>快適な宿泊施設を提供</h5>
                <p>Modern 5-Story Atsuko Campus at Kadawatha with On-Campus Housing</p>
              </div>
            </div>

            <div>
              <span className="section-badge badge-red">
                <Home size={14} />
                {ui.sec1Badge}
              </span>
              <h2 className="section-title-md" style={{ margin: '0.75rem 0 1rem' }}>
                {ui.sec1Title} <span className="text-gradient-red">{ui.sec1Highlight}</span>
              </h2>
              <p className="about-body-p">
                {ui.sec1Desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', margin: '1.5rem 0 2rem' }}>
                {ui.sec1Points.map((pt, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--navy-800)', fontWeight: 500, lineHeight: 1.5 }}>{pt}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenModal('Accommodation & Hostel Inquiries')}
                className="btn btn-primary"
              >
                <Building2 size={16} />
                <span>{ui.sec1Btn}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Multicultural Student Life & Nutritious Meals */}
      <section className="section section-alt">
        <div className="container">
          <div className="feature-split reverse">
            <div className="feature-img-box">
              <img
                src="/images/classroom-sensei.jpg"
                alt="Interactive Japanese Language Class at Atsuko International School"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="feature-tag-box">
                <h5>多文化が共存する温かい環境</h5>
                <p>Supportive Peer Atmosphere & Cultural Immersion at Atsuko</p>
              </div>
            </div>

            <div>
              <span className="section-badge badge-gold">
                <Utensils size={14} />
                {ui.sec2Badge}
              </span>
              <h2 className="section-title-md" style={{ margin: '0.75rem 0 1rem' }}>
                {ui.sec2Title} <span className="text-gradient-red">{ui.sec2Highlight}</span>
              </h2>
              <p className="about-body-p">
                {ui.sec2Desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', margin: '1.5rem 0 2rem' }}>
                {ui.sec2Points.map((pt, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={18} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--navy-800)', fontWeight: 500, lineHeight: 1.5 }}>{pt}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onOpenModal('Meal Plans Inquiry')}
                  className="btn btn-primary"
                >
                  <Utensils size={16} />
                  <span>{ui.sec2Btn}</span>
                </button>
                <a
                  href={officialContacts.socials.facebookGroup}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <span>{lang === 'si' ? 'ෆේස්බුක් ශිෂ්‍ය එකමුතුවට එක්වන්න' : lang === 'jp' ? '公式Facebookグループ' : 'Join Student Community on Facebook'}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Supportive Assessment System */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <FileCheck size={14} />
              {ui.sec3Badge}
            </span>
            <h2 className="section-title">
              {ui.sec3Title} <span className="text-gradient-red">{ui.sec3Highlight}</span>
            </h2>
            <p className="section-subtitle">
              {ui.sec3Desc}
            </p>
          </div>

          <div className="presence-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))' }}>
            {assessmentCards.map((card, idx) => (
              <div key={idx} className="credentials-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{card.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                  {card.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => onOpenModal('CBT Lab Registration')}
              className="btn btn-gold"
            >
              <Sparkles size={16} />
              <span>{ui.sec3Btn}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Life in Japan Support (From Arrival to Settlement) */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <Compass size={14} />
              {lang === 'si' ? 'අත්සුකෝ ජපාන සමාගම' : lang === 'jp' ? '株式会社 Atsuko International' : '株式会社 Atsuko International'}
            </span>
            <h2 className="section-title">
              {lang === 'si' ? 'ජපානයේ ජීවිතය:' : lang === 'jp' ? '日本での生活支援:' : 'Living in Japan:'} <span className="text-gradient-red">{lang === 'si' ? 'සෙන්ඩායි සහ අයිචි හි අඛණ්ඩ රැකවරණය' : lang === 'jp' ? '仙台・愛知での手厚いサポート' : 'Continuous Care in Sendai & Aichi'}</span>
            </h2>
            <p className="section-subtitle">
              {lang === 'si' ? 'ගුවන් තොටුපළෙන් සේවාව අවසන් කරන සාමාන්‍ය ඒජන්සි මෙන් නොව, ඔබ ජපානයට ගොඩබසින මොහොතේ සිට අපගේ ලියාපදිංචි සමාගම ඔබට සහාය වේ.' : lang === 'jp' ? '空港での見送りで終わる仲介業者とは異なり、日本到着の瞬間から当校の現地法人が伴走支援します。' : 'Unlike ordinary agents whose service ends at the airport, our registered support corporation in Japan assists you from the moment you land.'}
            </p>
          </div>

          <div className="roadmap-grid" style={{ marginTop: '2rem' }}>
            {japanSteps.map((step, idx) => (
              <div key={idx} className="roadmap-card">
                <div className="roadmap-num">{step.num}</div>
                <h3 className="roadmap-title">{step.title}</h3>
                <p className="roadmap-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <div>
              <h3 className="about-cta-title">{h.ctaTitle}</h3>
              <p className="about-cta-desc">
                {h.ctaDesc}
              </p>
            </div>
            <div className="about-cta-btn-group">
              <button
                onClick={() => onOpenModal('Admissions & Housing Consultation')}
                className="btn btn-gold"
              >
                {h.ctaRegister}
              </button>
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="btn btn-secondary-white"
              >
                {h.ctaVisitHeadOffice}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
