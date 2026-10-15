import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { siteTranslations } from '../data/translations';

export default function SuccessStories({ lang }) {
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
        <div style={{
          background: 'linear-gradient(135deg, #0f1b38 0%, #1e3568 100%)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          marginBottom: '3.5rem',
          boxShadow: 'var(--shadow-xl)',
          color: '#ffffff',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center'
        }}>
          <div style={{ padding: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 700, color: '#fbbf24', marginBottom: '1rem' }}>
              {t.airportPill}
            </div>

            <h3 style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.25, marginBottom: '1rem' }}>
              {t.airportTitle}
            </h3>

            <p style={{ color: '#cbd5e1', fontSize: '0.975rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
              {t.airportDesc}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.08)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fbbf24' }}>{t.airportBadge1Val}</div>
                <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>{t.airportBadge1Lbl}</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.08)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#34d399' }}>{t.airportBadge2Val}</div>
                <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>{t.airportBadge2Lbl}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.85rem' }}>
              <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0 }} />
              <span>{t.airportPoint}</span>
            </div>
          </div>

          <div style={{ height: '100%', minHeight: '360px' }}>
            <img 
              src="/images/student-success.jpg" 
              alt="Atsuko International Students Holding Visas Departing for Tokyo at Colombo Airport" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Verified Cohort & Credibility Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {cohorts.map((c, idx) => (
            <div 
              key={idx} 
              style={{
                background: 'var(--surface-alt)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'var(--transition)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                <div style={{ display: 'inline-block', background: '#f0f9ff', color: '#0284c7', border: '1px solid #bae6fd', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '1rem' }}>
                  {c.stat}
                </div>

                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>
                  {c.title}
                </h4>
                <div style={{ fontSize: '0.85rem', color: '#d97706', fontWeight: 600, marginBottom: '1rem' }}>
                  {c.sub}
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {c.desc}
                </p>
              </div>

              {c.link && c.link !== '#' && (
                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  <a 
                    href={c.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#2563eb', fontWeight: 700, fontSize: '0.85rem' }}
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
