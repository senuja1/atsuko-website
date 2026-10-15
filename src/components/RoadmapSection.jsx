import { Compass, ArrowRight } from 'lucide-react';
import { roadmapSteps } from '../data/websiteData';
import { siteTranslations } from '../data/translations';

export default function RoadmapSection({ lang, onOpenModal }) {
  const t = siteTranslations[lang]?.roadmap || siteTranslations.en.roadmap;

  const siRoadmap = [
    {
      step: "01",
      title: "නොමිලේ වෘත්තීය ඇගයීම",
      jp: "カウンセリング",
      desc: "ඔබගේ අධ්‍යාපන සහතික පරීක්ෂා කර ශිෂ්‍ය වීසා හෝ SSW රැකියා වීසා අතුරින් වඩාත් සුදුසු මඟ තීරණය කිරීම."
    },
    {
      step: "02",
      title: "JLPT / JFT පන්ති පුහුණුව",
      jp: "日本語学習 (N5/N4)",
      desc: "ජපන් සහ දේශීය ගුරු මණ්ඩලය යටතේ විභාග සහ සම්මුඛ පරීක්ෂණ (Mensetsu) කථන පුහුණුව ලබාගැනීම."
    },
    {
      step: "03",
      title: "පාසල් / ආයතනික සම්මුඛ පරීක්ෂණ",
      jp: "面接選考",
      desc: "ජපානයේ පිළිගත් ආයතන සමඟ සෘජු සම්මුඛ පරීක්ෂණවලට මුහුණ දී තේරී පත්වීම."
    },
    {
      step: "04",
      title: "ජපාන ආගමන කාර්යාංශයට COE අයදුම්පත",
      jp: "在留資格認定証明書 (COE)",
      desc: "අපගේ නීතිමය ලේඛන අංශය මඟින් ජපාන ආගමන විගමන කාර්යාංශයට COE ලිපිගොනුව යොමු කිරීම."
    },
    {
      step: "05",
      title: "තානාපති කාර්යාල වීසා සහ SLBFE අනුමැතිය",
      jp: "ビザ発給・海外雇用局承認",
      desc: "කොළඹ ජපන් තානාපති කාර්යාලයෙන් වීසා ලබාගෙන SLBFE 3293 යටතේ රජයේ අනුමැතිය ලබාගැනීම."
    },
    {
      step: "06",
      title: "ජපානයට පිටත්වීම සහ රැකවරණය",
      jp: "日本渡航・新生活スタート",
      desc: "ජපානයට ළඟාවී අපගේ සෙන්ඩායි ලියාපදිංචි ආයතනය (株式会社 篤子インターナショナル) මඟින් නවාතැන් හා බැංකු කටයුතු සම්පූර්ණ කිරීම."
    }
  ];

  const jpRoadmap = [
    {
      step: "01",
      title: "進路・適性カウンセリング",
      jp: "カウンセリング",
      desc: "カダワタ本社校および各窓口で学歴と適性を精査し、留学または特定技能の最適ルートを選定。"
    },
    {
      step: "02",
      title: "JLPT / JFT 集中講義",
      jp: "日本語学習 (N5/N4)",
      desc: "日本人講師・現地専任講師による語学・実技および日本ビジネスマナー指導。"
    },
    {
      step: "03",
      title: "日本受入機関との面接",
      jp: "面接選考",
      desc: "提携日本語学校および優良受入企業とのオンライン直接面接を実施。"
    },
    {
      step: "04",
      title: "出入国在留管理局へのCOE申請",
      jp: "在留資格認定証明書 (COE)",
      desc: "正規書類を作成し、東京・仙台などの出入国在留管理局へCOE申請。"
    },
    {
      step: "05",
      title: "査証発給と海外雇用局承認",
      jp: "ビザ発給・海外雇用局承認",
      desc: "在スリランカ日本国大使館にてビザ取得、SLBFE No.3293正規承認と渡航前研修。"
    },
    {
      step: "06",
      title: "日本渡航・現地生活スタート",
      jp: "日本渡航・新生活スタート",
      desc: "仙台の日本法人「株式会社 篤子インターナショナル」が空港出迎えから生活基盤をサポート。"
    }
  ];

  const steps = lang === 'si' ? siRoadmap : lang === 'jp' ? jpRoadmap : roadmapSteps;

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge badge-red">
            <Compass size={14} />
            {t.badge}
          </span>
          <h2 className="section-title">
            {t.title} <span className="text-gradient-red">{t.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </div>

        <div className="roadmap-grid">
          {steps.map((s, idx) => (
            <div key={idx} className="roadmap-card">
              <div className="roadmap-num">{s.step}</div>
              <div style={{ color: '#dc2626', fontFamily: 'var(--font-jp)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                {s.jp}
              </div>
              <h3 className="roadmap-title">{s.title}</h3>
              <p className="roadmap-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button 
            onClick={() => onOpenModal('Free Career Assessment')} 
            className="btn btn-primary"
            style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}
          >
            {t.btnStartStep1}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
