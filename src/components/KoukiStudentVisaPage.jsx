import { useState } from 'react';

const steps = [
  { num: '01', title: 'Eligibility Check', desc: 'We review your age, education, Japanese background, study gap, and financial sponsorship viability.' },
  { num: '02', title: 'Reach N5 / N4', desc: 'Complete JLPT N5 / NAT-TEST 5Q with high marks through Kouki International structured training.' },
  { num: '03', title: 'School Selection', desc: 'Match with top Japanese language schools across Tokyo, Osaka, Nagoya, Fukuoka, and other major cities.' },
  { num: '04', title: 'Documents & Apply', desc: 'Full application dossier compiled with certified translations, academic records, and sponsorship papers.' },
  { num: '05', title: 'COE Application', desc: 'The partner Japanese school submits the dossier to the Immigration Services Agency of Japan.' },
  { num: '06', title: 'Visa Application', desc: 'With the official Certificate of Eligibility (COE) approved, we lodge your student visa at the Embassy.' },
  { num: '07', title: 'Fees & Departure', desc: 'School fees paid directly via verified bank transfer, ticket booking, and comprehensive pre-departure briefing.' },
  { num: '08', title: 'Arrive & Start Life', desc: 'Airport pickup, student apartment check-in, resident registration, bank account setup, and school commencement.' },
];

const costItems = [
  { label: 'Application & Document Processing', amount: '¥250,000', note: 'School application fees, translations & document preparation' },
  { label: 'Placement & Student Support Fee', amount: '¥250,000', note: 'Payable only after official visa approval' },
  { label: '1 Year School Fee + 6 Months Apartment', amount: '¥900,000 – ¥1,300,000', note: 'Paid directly to the school in Japan; varies by city and institute' },
  { label: 'Air Ticket (Colombo to Japan)', amount: 'From ~¥150,000', note: 'One-way international flight to Tokyo/Osaka/Nagoya' },
];

export default function KoukiStudentVisaPage({ onNavigate }) {
  const [age, setAge] = useState('22');
  const [education, setEducation] = useState('al');
  const [level, setLevel] = useState('beginner');
  const [sponsor, setSponsor] = useState('yes');
  const [calcResult, setCalcResult] = useState(null);

  const calculateEligibility = (e) => {
    e.preventDefault();
    const ageNum = parseInt(age, 10);
    let score = 0;
    let remarks = [];

    if (ageNum >= 18 && ageNum <= 29) {
      score += 35;
      remarks.push('Age profile fits standard Japan immigration acceptance parameters.');
    } else {
      score += 15;
      remarks.push('Age requires additional justification / clear academic progression justification.');
    }

    if (education === 'al' || education === 'degree' || education === 'diploma') {
      score += 30;
      remarks.push('Educational baseline satisfies Japanese language school matriculation requirements.');
    } else {
      score += 15;
      remarks.push('G.C.E. O/L holders require verified 12-year equivalency or specialized vocational tracks.');
    }

    if (sponsor === 'yes') {
      score += 25;
      remarks.push('Financial sponsorship criteria readily satisfied.');
    } else {
      remarks.push('A valid financial sponsor (parent/sibling/relative) is required for COE clearance.');
    }

    if (level === 'n5' || level === 'n4') {
      score += 10;
      remarks.push('Existing Japanese knowledge shortens preparation window for immediate intake!');
    } else {
      remarks.push('Enrolling in Kouki N5/NAT class will fulfill language exam requirements in 2 months.');
    }

    setCalcResult({
      score: Math.min(100, score),
      remarks,
      eligible: score >= 70,
    });
  };

  return (
    <div style={{ paddingTop: 80, paddingBottom: 60 }}>
      {/* Page Hero */}
      <section style={{ textAlign: 'center', padding: '50px 20px 40px', background: 'var(--cream)' }}>
        <p className="section-tag">STUDENT VISA PATHWAY · 日本留学・留学ビザ</p>
        <h1 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 54px)', marginBottom: 16 }}>
          Study in Japan — Student Visa
        </h1>
        <p className="section-body" style={{ maxWidth: 760 }}>
          The Student Visa is your pathway to study at a recognized Japanese language school, college, or university.
          See the eligibility, step-by-step process, and real costs — reach N5 with Kouki before you go.
        </p>
      </section>

      {/* 3 Pillars */}
      <section style={{ maxWidth: 1100, margin: '50px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          <div style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '32px 24px', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-jp)', fontSize: 26, color: 'var(--red)', marginBottom: 12 }}>留学</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: 'var(--text-dark)' }}>Study in Japan</h3>
            <p style={{ fontSize: 14.5, color: 'var(--text-body)', lineHeight: 1.7 }}>
              Japanese language school (1–2 years) leading to accredited vocational colleges (Senmon Gakko) or universities.
            </p>
          </div>

          <div style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '32px 24px', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-jp)', fontSize: 26, color: 'var(--red)', marginBottom: 12 }}>日本生活</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: 'var(--text-dark)' }}>Experience Life in Japan</h3>
            <p style={{ fontSize: 14.5, color: 'var(--text-body)', lineHeight: 1.7 }}>
              Experience high quality of life, unmatched safety, rich cultural heritage, and legal 28-hour/week part-time work rights.
            </p>
          </div>

          <div style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '32px 24px', boxShadow: 'var(--shadow-card)', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-jp)', fontSize: 26, color: 'var(--red)', marginBottom: 12 }}>進学・就職</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: 'var(--text-dark)' }}>Build Your Future Career</h3>
            <p style={{ fontSize: 14.5, color: 'var(--text-body)', lineHeight: 1.7 }}>
              Acquire valuable language proficiency and technical specialization to secure full-time engineering, hospitality, or corporate employment in Japan.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Eligibility Checker */}
      <section style={{ maxWidth: 880, margin: '60px auto 0', padding: '0 24px' }}>
        <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '36px', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--red)' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <p className="section-tag">INSTANT ASSESSMENT</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--text-dark)' }}>
              Check Your Japan Student Visa Eligibility
            </h2>
            <p style={{ fontSize: 14.5, color: 'var(--text-light)', marginTop: 8 }}>
              Get an immediate score based on current Japanese Immigration Agency (出入国在留管理庁) criteria.
            </p>
          </div>

          <form onSubmit={calculateEligibility} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--text-dark)' }}>
                Your Age:
              </label>
              <input
                type="number"
                min="17"
                max="45"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', fontSize: 14 }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--text-dark)' }}>
                Highest Education:
              </label>
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', fontSize: 14 }}
              >
                <option value="al">G.C.E. A/L Passed</option>
                <option value="ol">G.C.E. O/L</option>
                <option value="diploma">Diploma / NVQ</option>
                <option value="degree">Bachelor Degree</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--text-dark)' }}>
                Japanese Level:
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', fontSize: 14 }}
              >
                <option value="beginner">Beginner / None</option>
                <option value="studying">Currently Learning</option>
                <option value="n5">Passed JLPT N5 / NAT 5Q</option>
                <option value="n4">Passed JLPT N4</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--text-dark)' }}>
                Financial Sponsor:
              </label>
              <select
                value={sponsor}
                onChange={(e) => setSponsor(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', fontSize: 14 }}
              >
                <option value="yes">Parent / Guardian Available</option>
                <option value="no">Need Guidance on Sponsorship</option>
              </select>
            </div>

            <div style={{ gridColumn: '1 / -1', marginTop: 10, textAlign: 'center' }}>
              <button type="submit" className="btn-primary" style={{ padding: '12px 36px', fontSize: 15 }}>
                Calculate My Score Now →
              </button>
            </div>
          </form>

          {calcResult && (
            <div
              style={{
                marginTop: 30,
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                background: calcResult.eligible ? '#ecfdf5' : '#fef2f2',
                border: `1.5px solid ${calcResult.eligible ? '#10b981' : '#f87171'}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: calcResult.eligible ? '#065f46' : '#991b1b' }}>
                  {calcResult.eligible ? '✓ Highly Eligible Candidate' : '⚠️ Additional Preparation Required'}
                </span>
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: calcResult.eligible ? '#059669' : '#dc2626',
                  }}
                >
                  Score: {calcResult.score}/100
                </span>
              </div>
              <ul style={{ paddingLeft: 20, fontSize: 13.5, color: '#334155', lineHeight: 1.8 }}>
                {calcResult.remarks.map((rem, idx) => (
                  <li key={idx}>{rem}</li>
                ))}
              </ul>
              <div style={{ marginTop: 18, textAlign: 'right' }}>
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="btn-primary"
                  style={{ padding: '8px 20px', fontSize: 13 }}
                >
                  Book Free 1-on-1 Document Review →
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 8-Step Process */}
      <section style={{ maxWidth: 1100, margin: '70px auto 0', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 46 }}>
          <p className="section-tag">ROADMAP</p>
          <h2 className="section-title">The 8-Step Journey from Sri Lanka to Japan</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {steps.map((st, i) => (
            <div
              key={i}
              style={{
                background: 'white',
                borderRadius: 'var(--radius-md)',
                padding: '28px 20px',
                boxShadow: 'var(--shadow-card)',
                borderTop: '3px solid var(--red)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 800, color: 'var(--red)', marginBottom: 8 }}>
                {st.num}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8 }}>
                {st.title}
              </h3>
              <p style={{ fontSize: 13.5, color: 'var(--text-body)', lineHeight: 1.6 }}>
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Estimated Costs Table */}
      <section style={{ maxWidth: 960, margin: '70px auto 0', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p className="section-tag">REAL TRANSPARENT PRICING</p>
          <h2 className="section-title">Estimated Costs — Real Figures</h2>
          <p className="section-body">
            These are transparent estimates. The final tuition varies with the school, city, intake, apartment type,
            and airfare — we always provide the official invoice from the Japanese school directly.
          </p>
        </div>

        <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
          {costItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '24px 28px',
                borderBottom: idx < costItems.length - 1 ? '1px solid #f1f5f9' : 'none',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--text-dark)' }}>{item.label}</div>
                <div style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 2 }}>{item.note}</div>
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--red)' }}>
                {item.amount}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
