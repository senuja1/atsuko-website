export default function KoukiEnglishAcademyPage({ onNavigate }) {
  const highlights = [
    { title: 'Full English Immersion', desc: 'English-only campus rule throughout the 25-day residency, eliminating hesitation and building rapid spoken fluency.' },
    { title: 'Sussex English Academy Certification', desc: 'Earn a prestigious dual-certified diploma recognizing spoken English, business presentation, and interpersonal mastery.' },
    { title: 'Accommodation & 3 Meals Included', desc: 'Secure, modern residential campus in Alawwa with comfortable dormitories, recreation facilities, and healthy meals.' },
    { title: 'Leadership & Grooming', desc: 'Public speaking, formal dining etiquette, team building, interview roleplays, and professional presence.' },
  ];

  const modules = [
    'Module 1: Everyday Conversational Fluency & Accent Neutralization',
    'Module 2: Practical Grammar without Memorizing Rules',
    'Module 3: Public Speaking & Overcoming Stage Fear',
    'Module 4: Professional Communication & Business Email Writing',
    'Module 5: Social Etiquette, Dining Manners & Body Language',
    'Module 6: Job & Visa Interview Coaching with Video Analysis',
  ];

  return (
    <div style={{ paddingTop: 80, paddingBottom: 60 }}>
      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '50px 20px 40px', background: 'var(--cream)' }}>
        <p className="section-tag">25-DAY RESIDENTIAL DIPLOMA · 英語アカデミー</p>
        <h1 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 54px)', marginBottom: 16 }}>
          Kouki English Academy
        </h1>
        <p className="section-body" style={{ maxWidth: 760 }}>
          An intensive 25-day residential transformation program conducted at our Alawwa campus.
          Build fluent spoken English, charismatic public speaking, and executive personality.
        </p>

        <div style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 12, background: 'white', padding: '12px 24px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-sm)' }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--red)' }}>Rs. 95,000</span>
          <span style={{ fontSize: 13, color: 'var(--text-light)' }}>· 25 Days Residential (Meals + Accommodation Included)</span>
        </div>
      </section>

      {/* Highlights */}
      <section style={{ maxWidth: 1100, margin: '50px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {highlights.map((h, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '28px 22px', boxShadow: 'var(--shadow-card)', borderTop: '3px solid var(--red)' }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8 }}>{h.title}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--text-body)', lineHeight: 1.6 }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Syllabus / Modules */}
      <section style={{ maxWidth: 880, margin: '60px auto 0', padding: '0 24px' }}>
        <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '36px', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <p className="section-tag">COURSE SYLLABUS</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--text-dark)' }}>
              What You Will Master in 25 Days
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {modules.map((m, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', background: 'var(--cream-light)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--red)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                  {idx + 1}
                </span>
                <span style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-dark)' }}>{m}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36, textAlign: 'center', display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="btn-primary"
              style={{ padding: '13px 32px' }}
            >
              Enroll for Next Residential Intake
            </button>
            <a
              href="https://wa.me/94769035117?text=Hello%20Kouki%20International,%20I%20want%20details%20about%20the%2025-Day%20Residential%20English%20Course"
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#25D366',
                color: 'white',
                padding: '13px 28px',
                borderRadius: 'var(--radius-pill)',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              💬 WhatsApp Counselor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
