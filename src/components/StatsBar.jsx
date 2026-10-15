import _CountUp from "react-countup";
import { RevealOnScroll } from "./RevealOnScroll";
import { siteTranslations } from '../data/translations';

// Support both ESM and CJS bundle export shapes in Vite
const CountUp = _CountUp?.default || _CountUp;

export default function StatsBar({ lang }) {
  const t = siteTranslations[lang]?.stats || siteTranslations.en.stats;

  const stats = [
    t.stat1,
    t.stat2,
    t.stat3,
    t.stat4
  ];

  const delays = [0.1, 0.3, 0.5, 0.7];

  const renderAnimatedNumber = (str) => {
    if (!str) return null;
    const match = str.match(/^([^\d]*)(\d+(?:,\d+)*(?:\.\d+)?)(.*)$/);
    if (!match) return str;

    const prefix = match[1];
    const rawNum = match[2].replace(/,/g, '');
    const suffix = match[3];
    const num = parseFloat(rawNum);

    if (isNaN(num)) return str;

    const hasComma = match[2].includes(',');
    const hasDecimal = match[2].includes('.');
    const decimals = hasDecimal ? (match[2].split('.')[1]?.length || 1) : 0;

    return (
      <>
        {prefix}
        <CountUp
          end={num}
          duration={3}
          separator={hasComma ? "," : ""}
          decimals={decimals}
          enableScrollSpy
          scrollSpyOnce
        />
        {suffix}
      </>
    );
  };

  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <RevealOnScroll key={i} delay={delays[i] || 0.1}>
              <div className="stat-item" style={{ borderRight: i === stats.length - 1 ? 'none' : undefined }}>
                <div className="stat-num" style={{ color: '#fb7185' }}>
                  {renderAnimatedNumber(stat.number)}
                </div>
                <div className="stat-label">
                  {stat.label}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
