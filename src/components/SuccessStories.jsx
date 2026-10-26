import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { siteTranslations } from '../data/translations';

export default function SuccessStories({ lang, onNavigate }) {
  const t = siteTranslations[lang]?.success || siteTranslations.en.success;

  const siCohorts = [
    {
      title: "නිල ශිෂ්‍ය ප්‍රජාව",
      sub: "Facebook Group: Students of Atsuko International",
      desc: "17,000කට අධික අනාගත සිසුන්, ආදි සිසුන් සහ දැනට ජපානයේ සේවය කරන පිරිස් එක්වී ඇති ශක්තිමත් ප්‍රජාව.",
      stat: "17K+ සාමාජිකයින්",
      link: "https://www.facebook.com/groups/studentsofatsukointernational"
    },
    {
      title: "කොමාකි (අයිචි) සහ සෙන්ඩායි ලියාපදිංචි ආයතනය",
      sub: "株式会社 篤子インターナショナル (Komaki, Aichi & Sendai)",
      desc: "කටුනායකින් සේවය අවසන් කරන සාමාන්‍ය ඒජන්සි මෙන් නොව, ජපානය තුළදීද අඛණ්ඩව රැකවරණය සහ නීතිමය සහාය සලසන අපගේම ලියාපදිංචි ආයතනය.",
      stat: "ලියාපදිංචි ආයතනය (登録支援機関)",
      link: "#"
    },
    {
      title: "රජයේ ලියාපදිංචි අනුමැතිය",
      sub: "ශ්‍රී ලංකා විදේශ සේවා නියුක්ති කාර්යාංශය (SLBFE)",
      desc: "SLBFE බලපත්‍ර අංක 3293 සහ සමාගම් ලියාපදිංචි PV 0217143 යටතේ 100%ක් නීත්‍යානුකූල ගිවිසුම්, විනිවිදභාවය සහ රජයේ ප්‍රමිතීන්ට අනුකූල සේවාව.",
      stat: "බලපත්‍ර 3293 • PV 0217143",
      link: "https://www.slbfe.lk"
    }
  ];

  const jpCohorts = [
    {
      title: "公式受講生・修了生コミュニティ",
      sub: "Facebook Group: Students of Atsuko International",
      desc: "17,000名を超えるスリランカ国内の受講希望者・日本渡航済みの卒業生が繋がる公式グループ。",
      stat: "17,000名超の登録者",
      link: "https://www.facebook.com/groups/studentsofatsukointernational"
    },
    {
      title: "小牧市・仙台市の日本法人直結",
      sub: "株式会社 篤子インターナショナル（愛知県小牧市・宮城県仙台市）",
      desc: "出国時のみならず、日本入国後の生活支援、住居手配、受入企業との調整を一貫して実施する登録支援機関。",
      stat: "登録支援機関（出入国在留管理庁）",
      link: "#"
    },
    {
      title: "スリランカ政府公認送り出しライセンス",
      sub: "スリランカ海外雇用局（SLBFE）公認",
      desc: "SLBFE認可ライセンス3293および法人番号PV 0217143に基づく100%適法な雇用契約と透明性ある送り出し手続き。",
      stat: "SLBFE 3293 • PV 0217143",
      link: "https://www.slbfe.lk"
    }
  ];

  const enCohorts = [
    {
      title: "Official Student Community",
      sub: "Facebook Group: Students of Atsuko International",
      desc: "Over 17,000 prospective students, alumni, and current workers in Japan actively exchange updates on batches, job vacancies, and study experiences.",
      stat: "17K+ Followers",
      link: "https://www.facebook.com/groups/studentsofatsukointernational"
    },
    {
      title: "Komaki & Sendai Registered Support Office",
      sub: "株式会社 篤子インターナショナル (Komaki, Aichi & Sendai, Japan)",
      desc: "Unlike standard agents that end support at the Colombo airport, Atsuko's registered Japanese entity provides continuous welfare, legal documentation, and employer coordination inside Japan.",
      stat: "Registered Support Org (登録支援機関)",
      link: "#"
    },
    {
      title: "Government Verified Agency",
      sub: "Sri Lanka Bureau of Foreign Employment (SLBFE)",
      desc: "Fully registered and verified under SLBFE License No. 3293 and Company Registration PV 0217143, providing 100% legal contracts, transparent processing, and government-approved recruitment standards.",
      stat: "Lic. #3293 • PV 0217143",
      link: "https://www.slbfe.lk"
    }
  ];

  const cohorts = lang === 'si' ? siCohorts : lang === 'jp' ? jpCohorts : enCohorts;

  return (
    <section id="success" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge badge-red">
            <Award size={14} />
            {t.badge}
          </span>
          <h2 className="section-title">
            {t.title} <span className="text-gradient-red">{t.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </div>

        {/* Airport Departure & Japan Support Spotlight Card */}
        <div className="stories-spotlight-card">
          <div className="stories-spotlight-content">
            <div className="spotlight-pill">
              {t.airportPill}
            </div>

            <h3 className="spotlight-title">
              {t.airportTitle}
            </h3>

            <p className="spotlight-desc">
              {t.airportDesc}
            </p>

            <div className="spotlight-stats-row">
              <div className="spotlight-stat-box">
                <div className="spotlight-stat-val text-gold">{t.airportBadge1Val}</div>
                <div className="spotlight-stat-lbl">{t.airportBadge1Lbl}</div>
              </div>
              <div className="spotlight-stat-box">
                <div className="spotlight-stat-val text-emerald">{t.airportBadge2Val}</div>
                <div className="spotlight-stat-lbl">{t.airportBadge2Lbl}</div>
              </div>
            </div>

            <div className="spotlight-point">
              <CheckCircle2 size={16} className="text-emerald flex-shrink-0" />
              <span>{t.airportPoint}</span>
            </div>

            {onNavigate && (
              <div style={{ marginTop: '1.5rem' }}>
                <button
                  type="button"
                  onClick={() => onNavigate('stories')}
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}
                >
                  <span>{lang === 'si' ? 'වීඩියෝ සාක්ෂි සහ Shorts 10 නරඹන්න' : lang === 'jp' ? '動画体験談・ショート動画を見る（10本）' : 'Watch 10 Video Stories & Shorts'}</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            )}
          </div>

          <div className="stories-spotlight-img">
            <img 
              src="/images/student-success.jpg" 
              alt="Atsuko International Students Holding Visas Departing for Tokyo at Colombo Airport" 
              width="600"
              height="420"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Verified Cohort & Credibility Pillars */}
        <div className="success-cohorts-grid">
          {cohorts.map((c, idx) => (
            <div key={idx} className="cohort-credibility-card">
              <div>
                <div className="cohort-stat-pill">
                  {c.stat}
                </div>

                <h4 className="cohort-title">
                  {c.title}
                </h4>
                <div className="cohort-sub">
                  {c.sub}
                </div>

                <p className="cohort-desc">
                  {c.desc}
                </p>
              </div>

              {c.link && c.link !== '#' && (
                <div className="cohort-link-wrapper">
                  <a 
                    href={c.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cohort-channel-link"
                  >
                    <span>{t.btnVisitChannel}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
