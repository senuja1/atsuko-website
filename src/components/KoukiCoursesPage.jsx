const courseList = [
  {
    tag: 'FOUNDATION',
    kanji: '語',
    title: 'JLPT N5 — Full Time',
    duration: '2 Months (Monday to Friday, 9:00 AM – 2:00 PM)',
    fee: 'Rs. 55,000',
    location: 'Yakkala · Polonnaruwa · Alawwa',
    desc: 'From zero to exam-ready. Master Hiragana, Katakana, 100+ Kanji, 800+ vocabulary words, and core grammar structures required for language school admission in Japan.',
    bullets: [
      'Daily conversational drill & pronunciation',
      'Minna no Nihongo I textbook & workbooks included',
      'Weekly mock tests with individual error reviews',
      'Direct pathway for April & October Japan intakes',
    ],
  },
  {
    tag: 'FLEXIBLE SCHEDULE',
    kanji: '学',
    title: 'JLPT N5 — Weekend / Part Time',
    duration: '4 Months (Saturdays & Sundays, 8:30 AM – 4:30 PM)',
    fee: 'Rs. 55,000',
    location: 'Yakkala · Polonnaruwa',
    desc: 'Designed for A/L students, university undergraduates, and working individuals who want to prepare for Japan without disrupting weekday commitments.',
    bullets: [
      'Comprehensive weekend syllabus with recorded summaries',
      'Self-study guides and listening homework packs',
      'One-on-one doubt clarification sessions',
      'Free access to past paper archives & audio tracks',
    ],
  },
  {
    tag: 'INTERMEDIATE',
    kanji: '進',
    title: 'JLPT N4 — Language Mastery',
    duration: '3 Months (Full-Time or Weekend)',
    fee: 'Rs. 65,000',
    location: 'Yakkala · Polonnaruwa · Alawwa',
    desc: 'Essential for students aiming for faster part-time job placement and senmon gakko direct advancement. Covers 300+ Kanji, keigo polite forms, and complex compound sentence structures.',
    bullets: [
      'Advanced listening comprehension drills (Chokai)',
      'Natural dialogue training with native Japanese instructors',
      'Minna no Nihongo II comprehensive mastery',
      'High-scoring exam strategies for JLPT and NAT 4Q',
    ],
  },
  {
    tag: 'FAST TRACK EXAM',
    kanji: '試',
    title: 'NAT-TEST 5Q / 4Q Exam Prep Crash Course',
    duration: '4 Weeks (Intensive Exam Simulation)',
    fee: 'Rs. 25,000',
    location: 'All Branches & Online',
    desc: 'Specialized test preparation before the bi-monthly NAT-TEST exams. 100% focused on past paper solving, timing drills, and score maximization.',
    bullets: [
      '10+ full simulated NAT exam papers under timed conditions',
      'Fast-track scoring tips for grammar & vocab sections',
      'Official audio listening question drills',
      'Exam registration assistance included',
    ],
  },
  {
    tag: 'FLAGSHIP IMMERSION',
    kanji: '寮',
    title: 'Alawwa Residential Japanese Immersion',
    duration: '2 to 3 Months (Full Boarding Campus)',
    fee: 'Includes Meals & Accommodation',
    location: 'Alawwa Campus',
    desc: 'Live, study, and speak Japanese 24/7. Intensive schedule from 6:30 AM morning exercises to night study halls. Build the punctuality and discipline that Japanese schools reward.',
    bullets: [
      'Furnished student accommodation with all amenities',
      '3 nutritious meals + evening tea provided daily',
      'Supervised evening study sessions & peer discussions',
      'Highest first-time JLPT pass rate in the island',
    ],
  },
  {
    tag: 'DUAL DIPLOMA',
    kanji: '英',
    title: '25-Day Residential English Academy',
    duration: '25 Days Intensive Immersion',
    fee: 'Rs. 95,000 (Meals & Boarding Included)',
    location: 'Alawwa Campus',
    desc: 'Transform your spoken English, public speaking, leadership confidence, and personality. Awarded with dual certification from Kouki International and Sussex English Academy.',
    bullets: [
      'Spoken English & public presentation coaching',
      'Corporate etiquette, dining manners & interview skills',
      'Alawwa residential campus boarding & 3 meals included',
      'Prestigious Sussex English Academy certified credential',
    ],
  },
];

export default function KoukiCoursesPage({ onNavigate }) {
  return (
    <div style={{ paddingTop: 80, paddingBottom: 60 }}>
      {/* Page Hero */}
      <section style={{ textAlign: 'center', padding: '50px 20px 40px', background: 'var(--cream)' }}>
        <p className="section-tag">PROGRAMS & ACADEMICS · コース一覧</p>
        <h1 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 54px)', marginBottom: 16 }}>
          Our Courses
        </h1>
        <p className="section-body" style={{ maxWidth: 760 }}>
          From your first hiragana to your departure gate. Structured Japanese language training,
          exam preparation, and residential leadership immersion for Sri Lankan students.
        </p>
      </section>

      {/* Courses Grid */}
      <section style={{ maxWidth: 1120, margin: '50px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
          {courseList.map((c, i) => (
            <div
              key={i}
              style={{
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 28px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(0,0,0,0.06)',
                transition: 'var(--transition)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span
                    style={{
                      background: 'rgba(200,16,46,0.08)',
                      color: 'var(--red)',
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                      letterSpacing: '1px',
                    }}
                  >
                    {c.tag}
                  </span>
                  <span style={{ fontFamily: 'var(--font-jp)', fontSize: 24, color: 'var(--red)', fontWeight: 700 }}>
                    {c.kanji}
                  </span>
                </div>

                <h2 style={{ fontSize: 21, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 10, lineHeight: 1.3 }}>
                  {c.title}
                </h2>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--red)' }}>{c.fee}</span>
                  <span style={{ fontSize: 13, color: 'var(--text-light)' }}>· {c.duration}</span>
                </div>

                <div style={{ fontSize: 12.5, fontWeight: 600, color: '#0f766e', marginBottom: 12 }}>
                  📍 {c.location}
                </div>

                <p style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.7, marginBottom: 20 }}>
                  {c.desc}
                </p>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 16, marginBottom: 24 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 10, letterSpacing: '0.5px' }}>
                    COURSE HIGHLIGHTS:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {c.bullets.map((b, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--text-body)' }}>
                        <span style={{ color: 'var(--red)', fontWeight: 800, flexShrink: 0 }}>✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="btn-primary"
                  style={{ flex: 1, padding: '11px 18px', fontSize: 13.5, justifyContent: 'center' }}
                >
                  Enroll Now
                </button>
                <a
                  href={`https://wa.me/94769035117?text=Hello%20Kouki%20International,%20I%20am%20interested%20in%20${encodeURIComponent(c.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: '#25D366',
                    color: 'white',
                    padding: '11px 18px',
                    borderRadius: 'var(--radius-pill)',
                    textDecoration: 'none',
                    fontSize: 13.5,
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  💬 Inquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
