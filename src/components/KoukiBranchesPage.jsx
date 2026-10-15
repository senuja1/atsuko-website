import { useState } from 'react';

const branches = [
  {
    id: 'yakkala',
    kanji: '本',
    name: 'Yakkala Head Office',
    tag: 'Head Office',
    description: 'Our main administrative, teaching and student-guidance centre. Japanese language courses, exam preparation, Student Visa consultations, document guidance and interview training are all handled here.',
    address: 'Opposite the Ayurweda Hospital, Yakkala, Sri Lanka',
    hours: 'Monday–Saturday, 9:00 AM – 6:00 PM · Closed on Sunday',
    phone: '076 903 5117',
    altPhone: '074 227 7882',
    mapQuery: 'Kouki+International+Japanese+Language+School+Yakkala',
    features: [
      'JLPT N5 / N4 Full-Time & Part-Time Courses',
      'JLPT & NAT Exam Preparation with Mock Exams',
      'Student Visa Consultation & University Matching',
      'Japanese school selection & COE document guidance',
      'Embassy Interview Preparation & Speech Coaching',
      'One-on-One Parent Counseling Sessions',
    ],
    amenities: 'Air-conditioned classrooms · Personal student counselling · Multimedia teaching facilities',
  },
  {
    id: 'polonnaruwa',
    kanji: '北',
    name: 'Polonnaruwa Branch',
    tag: 'North Central Branch',
    description: 'High-quality Japanese language education and study-in-Japan guidance close to home for students in Polonnaruwa and the surrounding areas — with the same curriculum, teaching standard and management as our head office.',
    address: 'Hospital Junction, Polonnaruwa, Sri Lanka',
    hours: 'Monday–Saturday, 9:00 AM – 6:00 PM · Closed on Sunday',
    phone: '076 903 5117',
    altPhone: '074 227 7882',
    mapQuery: 'Kouki+International+Polonnaruwa',
    features: [
      'JLPT N5 / N4 Comprehensive Courses',
      'JFT-Basic & NAT-TEST Intensive Training',
      'Direct Student Visa Guidance & Assessment',
      'Interview & Document Guidance from Head Office',
      'Individual Student Progress Monitoring',
      'Parent Counselling & Orientation Meetings',
    ],
    amenities: 'Personal attention · Books & writing reviewed · Directly managed from Yakkala head office',
  },
  {
    id: 'alawwa',
    kanji: '寮',
    name: 'Alawwa–Thulhiriya Residential Centre',
    tag: 'Residential Campus · Our Special Flagship',
    description: 'Designed for students who want to learn Japanese in a focused, disciplined and structured environment. Within a residential setting, students follow classes, night study sessions, group practice and a disciplined daily routine — with comfortable accommodation and three meals a day included.',
    address: 'Alawwa – Thulhiriya (between Alawwa and Warakapola), Sri Lanka',
    hours: '24/7 Residential Learning Campus · Office Mon-Sat 9AM-6PM',
    phone: '076 903 5117',
    altPhone: '074 227 7882',
    mapQuery: 'Thulhiriya+Alawwa',
    features: [
      'JLPT N5 / N4 Intensive Residential Program',
      'JLPT & NAT Exam Preparation with Night Studies',
      'Student Visa Document Guidance & Filing',
      '25-Day Residential English Course (Sussex Academy)',
      'Japanese School Interview Training & Etiquette',
      'Pre-departure preparation for life in Japan',
    ],
    amenities: 'Full boarding & 3 nutritious meals daily · Japanese speaking atmosphere · Sports & study spaces',
  },
];

const branchFaqs = [
  { q: 'Do all branches follow the same curriculum?', a: 'Yes. Every branch follows the same education standard, lesson methodology, and central supervision from our Yakkala head office.' },
  { q: 'Can I transfer branches later?', a: 'Branch transfers can be arranged depending on your batch, course schedule, seat availability and management approval.' },
  { q: 'Can anyone join the residential programme in Alawwa?', a: 'Enrolment is confirmed after checking age, educational background, commitment to discipline and intake requirements.' },
  { q: 'Should I book a time before visiting a branch?', a: 'Walk-ins are welcome, but for an in-depth student visa evaluation or enrollment interview, contacting us beforehand via phone or WhatsApp ensures an advisor is prepared for you.' },
  { q: 'Is visa consultation available at every branch?', a: 'Basic consultation is available across all 3 branches. Specialised administrative processing and final COE submissions are coordinated through our Yakkala head office.' },
];

export default function KoukiBranchesPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div style={{ paddingTop: 80, paddingBottom: 60 }}>
      {/* Page Hero */}
      <section style={{ textAlign: 'center', padding: '50px 20px 40px', background: 'var(--cream)' }}>
        <p className="section-tag">BRANCH NETWORK · 支店案内</p>
        <h1 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 54px)', marginBottom: 16 }}>
          Our Branches
        </h1>
        <p className="section-body" style={{ maxWidth: 760 }}>
          High-quality Japanese language education, exam preparation and study-in-Japan guidance for students
          across Sri Lanka — choose the location most convenient for you.
        </p>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
          {['all', 'yakkala', 'polonnaruwa', 'alawwa'].map((id) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              style={{
                padding: '10px 22px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                background: activeTab === id ? 'var(--red)' : 'white',
                color: activeTab === id ? 'white' : 'var(--text-dark)',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition)',
              }}
            >
              {id === 'all' ? 'All Locations' : id === 'yakkala' ? 'Yakkala (Head Office)' : id === 'polonnaruwa' ? 'Polonnaruwa' : 'Alawwa Residential'}
            </button>
          ))}
        </div>
      </section>

      {/* Branch Cards */}
      <section style={{ maxWidth: 1120, margin: '50px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {branches
            .filter((b) => activeTab === 'all' || activeTab === b.id)
            .map((b) => (
              <div
                key={b.id}
                id={b.id}
                style={{
                  background: 'white',
                  borderRadius: 'var(--radius-lg)',
                  padding: '36px 32px',
                  boxShadow: 'var(--shadow-card)',
                  border: b.id === 'alawwa' ? '2px solid var(--red)' : '1px solid rgba(0,0,0,0.06)',
                  transition: 'var(--transition)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14, flexWrap: 'wrap' }}>
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '50%',
                      background: 'rgba(200,16,46,0.1)',
                      color: 'var(--red)',
                      fontFamily: 'var(--font-jp)',
                      fontSize: 22,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                    }}
                  >
                    {b.kanji}
                  </span>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--text-dark)' }}>
                      {b.name}
                    </h2>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: b.id === 'alawwa' ? 'var(--red)' : '#b8860b',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {b.tag}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: 15, color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 24, maxWidth: 880 }}>
                  {b.description}
                </p>

                {/* Details Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: 16,
                    background: 'var(--cream-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '20px',
                    marginBottom: 24,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-light)', marginBottom: 4 }}>ADDRESS</div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-dark)' }}>{b.address}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-light)', marginBottom: 4 }}>OPENING HOURS</div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-dark)' }}>{b.hours}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-light)', marginBottom: 4 }}>TELEPHONE</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--red)' }}>
                      <a href={`tel:+94${b.phone.replace(/\s+/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {b.phone}
                      </a>{' '}
                      ·{' '}
                      <a href={`tel:+94${b.altPhone.replace(/\s+/g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {b.altPhone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 12, letterSpacing: '1px' }}>
                    KEY HIGHLIGHTS & PROGRAMS:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 10 }}>
                    {b.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'var(--text-body)' }}>
                        <span style={{ color: 'var(--red)', fontWeight: 800 }}>✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ fontSize: 13, color: 'var(--text-light)', fontStyle: 'italic', marginBottom: 24 }}>
                  {b.amenities}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a
                    href={`tel:+94${b.phone.replace(/\s+/g, '')}`}
                    className="btn-primary"
                    style={{ padding: '10px 24px', fontSize: 14 }}
                  >
                    📞 Call Branch
                  </a>
                  <a
                    href={`https://wa.me/94769035117?text=Hello%20Kouki%20International,%20I%20want%20inquiry%20regarding%20${encodeURIComponent(b.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: '#25D366',
                      color: 'white',
                      padding: '10px 24px',
                      borderRadius: 'var(--radius-pill)',
                      textDecoration: 'none',
                      fontSize: 14,
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${b.mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ padding: '10px 24px', fontSize: 14 }}
                  >
                    📍 Get Directions
                  </a>
                  <button
                    onClick={() => onNavigate && onNavigate('contact')}
                    className="btn-outline"
                    style={{ padding: '10px 24px', fontSize: 14 }}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Branch FAQs */}
      <section style={{ maxWidth: 880, margin: '70px auto 0', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <p className="section-tag">COMMON INQUIRIES</p>
          <h2 className="section-title">Branch Frequently Asked Questions</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {branchFaqs.map((faq, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '20px 24px', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-dark)', marginBottom: 8 }}>
                {faq.q}
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.7 }}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
