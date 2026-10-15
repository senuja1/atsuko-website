import { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);
  return count;
}

const stats = [
  { number: 170, suffix: '+', label: 'Students Sent to Japan', sub: 'through the Student Visa program' },
  { number: 88, suffix: '%', label: 'Visa Success Rate', sub: 'based on internal application records' },
  { number: 80, suffix: '+', label: 'Active Students', sub: 'across our branches & residential campus' },
  { number: 3, suffix: '', label: 'Locations', sub: 'Yakkala · Polonnaruwa · Alawwa' },
];

export default function KoukiAbout() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const n0 = useCountUp(stats[0].number, 1800, visible);
  const n1 = useCountUp(stats[1].number, 1800, visible);
  const n2 = useCountUp(stats[2].number, 1800, visible);
  const n3 = useCountUp(stats[3].number, 1200, visible);
  const nums = [n0, n1, n2, n3];

  return (
    <section className="about-section" ref={ref}>
      <p className="section-tag">SINCE 2020 · SRI LANKA TO JAPAN</p>
      <h2 className="section-title">
        Your dream of Japan starts with a single<br />step through the gate.
      </h2>
      <p className="section-body">
        Kouki International is one of Sri Lanka's leading Japanese language institutions — guiding
        students through JLPT and NAT preparation, student visa support and study-abroad guidance,
        all the way from the first hiragana to the departure gate. With branches in Yakkala and
        Polonnaruwa, and a residential campus in Alawwa, we help students achieve their dream of
        studying in Japan.
      </p>

      <div className="stats-grid" style={{ maxWidth: 920 }}>
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-number">{nums[i]}{s.suffix}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
