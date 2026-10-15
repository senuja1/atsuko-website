const features = [
  {
    jp: '試験対策',
    title: 'JLPT & NAT exam preparation',
    desc: 'Structured classes from beginner hiragana to advanced grammar, with regular mock exams and exam-ready practice materials.',
  },
  {
    jp: 'ビザ対応',
    title: 'Full visa documentation handled end-to-end',
    desc: 'School selection, COE and embassy documentation handled end-to-end. Our students\' visa approvals speak for themselves.',
  },
  {
    jp: '全寮制',
    title: 'Residential immersion',
    desc: 'An intensive residential campus in Alawwa where students live, study and build the discipline Japan rewards.',
  },
  {
    jp: '指導',
    title: 'Guidance that doesn\'t end at the gate',
    desc: 'From your first hiragana to your first day in Japan — and after you arrive — our team stays in touch.',
  },
];

const pillars = [
  {
    num: '01',
    title: 'Language Mastery',
    desc: 'We prepare students not just in language skills, but in the values and behaviours required to adapt confidently to Japanese schools and society.',
  },
  {
    num: '02',
    title: 'Visa Success',
    desc: 'Our 88% visa success rate reflects rigorous document preparation, school matching, and embassy-ready interview coaching.',
  },
  {
    num: '03',
    title: 'Lifelong Support',
    desc: 'We stay with students from enrollment through departure — and even after they arrive in Japan, our community stays connected.',
  },
];

export default function KoukiWhy() {
  return (
    <>
      {/* WHY KOUKI IS THE BEST CHOICE */}
      <section className="programs-section" id="why">
        <div className="section-header" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
          <p className="section-tag">WHY KOUKI IS THE BEST CHOICE</p>
          <h2 className="section-title">The trusted path from Sri Lanka to Japan</h2>
          <p className="section-body">
            Families across Sri Lanka choose Kouki International over other institutes because we go beyond
            language classes — we prepare students to be <strong>selected</strong> by Japanese schools, and we stay
            with them the whole way.
          </p>
        </div>

        <div className="why-features">
          {features.map((f, i) => (
            <div className="why-feature-card" key={i}>
              <div className="why-jp-tag">{f.jp}</div>
              <div>
                <div className="why-feature-title">{f.title}</div>
                <div className="why-feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY KOUKI - Developing students */}
      <section className="success-section">
        <div className="section-header">
          <p className="section-tag">WHY KOUKI</p>
          <h2 className="section-title">Developing students for success in Japan</h2>
          <p className="section-body">
            We prepare students not only in language skills, but in the values and behaviours required
            to adapt confidently to Japanese schools and society.
          </p>
        </div>

        <div className="success-pillars">
          {pillars.map((p, i) => (
            <div className="pillar-card" key={i}>
              <div className="pillar-number">{p.num}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
