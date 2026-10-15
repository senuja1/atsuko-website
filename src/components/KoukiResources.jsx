import { useState } from 'react';

const resourcesList = [
  {
    title: 'JLPT N5 Official Practice Past Paper & Answers',
    category: 'JLPT N5',
    type: 'PDF Past Exam',
    size: '4.8 MB',
    downloads: '1,420+',
    badge: 'Popular',
  },
  {
    title: 'JLPT N5 Audio Listening Exam Practice (Chokai Track)',
    category: 'JLPT N5',
    type: 'MP3 Listening Track',
    size: '18.2 MB',
    downloads: '980+',
    badge: 'Audio Included',
  },
  {
    title: 'JLPT N4 Official Practice Test (Grammar, Vocab & Reading)',
    category: 'JLPT N4',
    type: 'PDF Exam Pack',
    size: '5.6 MB',
    downloads: '1,150+',
    badge: 'Recommended',
  },
  {
    title: 'NAT-TEST 5Q & 4Q Full Mock Exam Collection',
    category: 'NAT-TEST',
    type: 'PDF Mock Test',
    size: '6.4 MB',
    downloads: '840+',
    badge: 'Official Format',
  },
];

export default function KoukiResources() {
  const [downloadedItem, setDownloadedItem] = useState(null);

  const handleDownload = (title) => {
    setDownloadedItem(title);
    setTimeout(() => setDownloadedItem(null), 3000);
  };

  return (
    <section className="resources-section" id="resources">
      <div className="section-header" style={{ maxWidth: 720, margin: '0 auto 40px' }}>
        <p className="section-tag">STUDENT RESOURCES</p>
        <h2 className="section-title">Past papers & listening practice, free for every student</h2>
        <p className="section-body">
          Download JLPT and NAT past papers and listening tracks anytime, from anywhere.
          Structured revision tools designed by Kouki International instructors.
        </p>
      </div>

      {downloadedItem && (
        <div
          style={{
            maxWidth: 600,
            margin: '0 auto 24px',
            padding: '12px 20px',
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            borderRadius: 'var(--radius-pill)',
            color: '#065f46',
            fontSize: 14,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          <span>✓</span> Download started: <strong>{downloadedItem}</strong>
        </div>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
          maxWidth: 1100,
          margin: '0 auto 36px',
          textAlign: 'left',
        }}
      >
        {resourcesList.map((res, i) => (
          <div
            key={i}
            style={{
              background: 'white',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'var(--transition)',
              border: '1px solid rgba(0,0,0,0.04)',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span
                  style={{
                    background: 'rgba(200,16,46,0.08)',
                    color: 'var(--red)',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  {res.category}
                </span>
                <span style={{ fontSize: 11, color: 'var(--text-light)', fontWeight: 500 }}>
                  {res.size}
                </span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8, lineHeight: 1.4 }}>
                {res.title}
              </h3>
              <p style={{ fontSize: 12, color: 'var(--text-light)', marginBottom: 16 }}>
                {res.type} · {res.downloads} downloads
              </p>
            </div>

            <button
              onClick={() => handleDownload(res.title)}
              style={{
                width: '100%',
                padding: '10px 16px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--cream-light)',
                border: '1px solid rgba(200,16,46,0.2)',
                color: 'var(--red)',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--red)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--cream-light)';
                e.currentTarget.style.color = 'var(--red)';
              }}
            >
              📥 Free Download
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <a
          href="#contact"
          className="btn-primary"
          style={{
            display: 'inline-flex',
            padding: '14px 34px',
            borderRadius: 'var(--radius-pill)',
            background: 'var(--red)',
            color: '#fff',
            fontWeight: 600,
            textDecoration: 'none',
            boxShadow: '0 12px 30px rgba(200,16,46,0.35)',
          }}
        >
          Browse All Learning Resources →
        </a>
      </div>
    </section>
  );
}
