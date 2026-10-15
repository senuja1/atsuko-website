import { useState } from 'react';

export default function KoukiContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: 'yakkala',
    course: 'visa',
    education: 'al',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: 80, paddingBottom: 60 }}>
      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '50px 20px 40px', background: 'var(--cream)' }}>
        <p className="section-tag">GET IN TOUCH · お問い合わせ</p>
        <h1 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 54px)', marginBottom: 16 }}>
          Contact Kouki International
        </h1>
        <p className="section-body" style={{ maxWidth: 760 }}>
          Have questions about studying in Japan, our course schedules, or student visa document requirements?
          Our advisors in Yakkala, Polonnaruwa, and Alawwa are here to help.
        </p>
      </section>

      <section style={{ maxWidth: 1100, margin: '50px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 36 }}>
          {/* Contact Details Card */}
          <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '36px', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8 }}>
                Admissions & Counseling Desk
              </h2>
              <p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 1.6 }}>
                Walk into any branch Monday to Saturday, 9:00 AM – 6:00 PM, or connect via phone or WhatsApp.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ padding: '16px', background: 'var(--cream-light)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)', letterSpacing: '1px' }}>PRIMARY HOTLINES</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-dark)', marginTop: 4 }}>
                  <a href="tel:+94769035117" style={{ color: 'inherit', textDecoration: 'none' }}>(+94) 76 903 5117</a>
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-dark)', marginTop: 2 }}>
                  <a href="tel:+94742277882" style={{ color: 'inherit', textDecoration: 'none' }}>(+94) 74 227 7882</a>
                </div>
              </div>

              <div style={{ padding: '16px', background: 'var(--cream-light)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)', letterSpacing: '1px' }}>EMAIL ADDRESS</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-dark)', marginTop: 4 }}>
                  <a href="mailto:koukiinternational@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    koukiinternational@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ padding: '16px', background: 'var(--cream-light)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--red)', letterSpacing: '1px' }}>MAIN CAMPUSES</div>
                <div style={{ fontSize: 13.5, color: 'var(--text-body)', marginTop: 6, lineHeight: 1.7 }}>
                  <strong>• Yakkala Head Office:</strong> Opposite the Ayurweda Hospital, Yakkala<br />
                  <strong>• Polonnaruwa:</strong> Hospital Junction, Polonnaruwa<br />
                  <strong>• Alawwa Residential:</strong> Alawwa – Thulhiriya Campus
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/94769035117"
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#25D366',
                color: 'white',
                padding: '14px',
                borderRadius: 'var(--radius-pill)',
                textDecoration: 'none',
                fontSize: 15,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
              }}
            >
              💬 Instant WhatsApp Chat
            </a>
          </div>

          {/* Inquiry / Application Form */}
          <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '36px', boxShadow: 'var(--shadow-card)' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 6 }}>
              Send an Online Inquiry
            </h2>
            <p style={{ fontSize: 14, color: 'var(--text-light)', marginBottom: 24 }}>
              Fill in your details below and an official Kouki admissions officer will respond within 24 hours.
            </p>

            {submitted ? (
              <div style={{ padding: '32px 20px', textAlign: 'center', background: '#ecfdf5', borderRadius: 'var(--radius-md)', border: '1px solid #10b981' }}>
                <div style={{ fontSize: 42, marginBottom: 12 }}>✓</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#065f46', marginBottom: 8 }}>Thank You, {formData.name}!</h3>
                <p style={{ fontSize: 14, color: '#047857', lineHeight: 1.6 }}>
                  Your application inquiry has been received. Our team will contact you shortly on <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline"
                  style={{ marginTop: 20, fontSize: 13 }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--text-dark)' }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kasun Perera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', fontSize: 14 }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--text-dark)' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="07X XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', fontSize: 14 }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--text-dark)' }}>
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', fontSize: 14 }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--text-dark)' }}>
                      Preferred Branch
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', fontSize: 14 }}
                    >
                      <option value="yakkala">Yakkala (Head Office)</option>
                      <option value="polonnaruwa">Polonnaruwa Branch</option>
                      <option value="alawwa">Alawwa Residential Campus</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--text-dark)' }}>
                      Program of Interest
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', fontSize: 14 }}
                    >
                      <option value="visa">Japan Student Visa Pathway</option>
                      <option value="n5">JLPT N5 Course</option>
                      <option value="n4">JLPT N4 Course</option>
                      <option value="nat">NAT-TEST Exam Prep</option>
                      <option value="english">25-Day Residential English</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--text-dark)' }}>
                    Your Message / Specific Question
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your educational background or any questions about visa intakes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1', fontSize: 14 }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '13px', marginTop: 8, justifyContent: 'center' }}>
                  Submit Inquiry Now →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
