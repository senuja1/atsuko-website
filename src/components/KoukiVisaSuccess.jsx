const visaStories = [
  {
    name: 'Kavindu Dilshan',
    intake: 'April Intake - Tokyo',
    school: 'Tokyo Shinjuku Japanese Language Institute',
    badge: 'Japan Student Visa ✓',
    tag: 'Tokyo Campus',
    avatar: '👨‍🎓',
    bg: 'linear-gradient(135deg, #1e3a5f 0%, #0d1b2a 100%)',
  },
  {
    name: 'Sandamali Perera',
    intake: 'July Intake - Osaka',
    school: 'Meric Japanese Language School, Osaka',
    badge: 'Japan Student Visa ✓',
    tag: 'Osaka Campus',
    avatar: '👩‍🎓',
    bg: 'linear-gradient(135deg, #5c2d44 0%, #2b1020 100%)',
  },
  {
    name: 'Isuru Gihan',
    intake: 'October Intake - Nagoya',
    school: 'Nagoya International Academy',
    badge: 'Japan Student Visa ✓',
    tag: 'Nagoya Campus',
    avatar: '👨‍🎓',
    bg: 'linear-gradient(135deg, #2d5a3f 0%, #102618 100%)',
  },
  {
    name: 'Tharushi Navodya',
    intake: 'April Intake - Fukuoka',
    school: 'Fukuoka Foreign Language College',
    badge: 'Japan Student Visa ✓',
    tag: 'Fukuoka Campus',
    avatar: '👩‍🎓',
    bg: 'linear-gradient(135deg, #6b4028 0%, #301a0d 100%)',
  },
];

const campusLife = [
  { label: 'Our Students', icon: '🌸', caption: 'Pre-departure farewell session at Yakkala Head Office' },
  { label: 'In Class', icon: '📚', caption: 'Interactive JLPT N5 kanji & grammar masterclass' },
  { label: 'Campus Life', icon: '⛩️', caption: 'Cultural immersion & etiquette workshops' },
  { label: 'Residential Life', icon: '🏡', caption: 'Alawwa 24/7 Japanese speaking residential environment' },
];

export default function KoukiVisaSuccess() {
  return (
    <section className="visas-section" id="visas">
      <div className="section-header">
        <p className="section-tag">PROUD MOMENTS · 実績</p>
        <h2 className="section-title">Our students, holding their Japan visas</h2>
        <p className="section-body">
          Real students, real visas, real departures — the moment years of hard work pays off.
          These are our students receiving their Japan Student Visas at Kouki International.
        </p>
      </div>

      <div className="visa-gallery">
        {visaStories.map((v, i) => (
          <div className="visa-card" key={i} style={{ background: v.bg }}>
            <div className="visa-card-placeholder">
              <div className="student-icon" style={{ fontSize: 48, background: 'rgba(255,255,255,0.12)' }}>
                {v.avatar}
              </div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: 16 }}>{v.name}</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>{v.school}</div>
              <span
                style={{
                  display: 'inline-block',
                  marginTop: 6,
                  padding: '4px 12px',
                  background: 'rgba(200,16,46,0.9)',
                  color: 'white',
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
              >
                {v.badge}
              </span>
            </div>
            <div className="visa-card-overlay">
              <div className="visa-overlay-name">{v.name} · {v.intake}</div>
              <div className="visa-overlay-badge">{v.tag}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Campus & Student Life Strip */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
          maxWidth: 1100,
          margin: '32px auto 0',
        }}
      >
        {campusLife.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: 'white',
              borderRadius: 'var(--radius-md)',
              padding: '24px 20px',
              textAlign: 'center',
              boxShadow: 'var(--shadow-card)',
              transition: 'var(--transition)',
              borderTop: '3px solid var(--red)',
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 10 }}>{item.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-dark)', marginBottom: 6 }}>
              {item.label}
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--text-light)', lineHeight: 1.6 }}>
              {item.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
