const programs = [
  {
    icon: '語学',
    title: 'JLPT & NAT',
    desc: 'Beginner to advanced Japanese, with N5–N4 and NAT exam preparation across our campuses.',
  },
  {
    icon: '留学',
    title: 'Student Visa Pathway',
    desc: 'School matching, application documents, COE guidance and embassy preparation in one clear journey.',
  },
  {
    icon: '全寮制',
    title: 'Residential',
    desc: 'Intensive residential program with accommodation and structured learning at our Alawwa campus.',
  },
  {
    icon: '指導',
    title: 'Visa & Guidance',
    desc: 'End-to-end study-abroad guidance and student visa support to Japan.',
  },
];

export default function KoukiPrograms() {
  return (
    <section className="programs-section" id="courses">
      <div className="section-header">
        <p className="section-tag">WHAT WE OFFER</p>
        <h2 className="section-title">Our Programs</h2>
        <div className="divider" />
      </div>

      <div className="programs-grid">
        {programs.map((p, i) => (
          <div className="program-card" key={i}>
            <div className="program-icon">{p.icon}</div>
            <h3 className="program-title">{p.title}</h3>
            <p className="program-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
