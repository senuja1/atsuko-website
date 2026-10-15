const reviews = [
  {
    initial: 'J',
    name: 'Jayden Lucas',
    role: 'Google Review · Now in Japan',
    stars: '★★★★★',
    text: 'I went to several classes before joining this class, but nothing comes close to the quality of this class. Practical teaching of Japanese helps in growth in a short time. Also, the visa consulting service is the best in this business. I also came to Japan through Kouki - 100% recommended.',
  },
  {
    initial: 'S',
    name: 'Sandamali Perera',
    role: 'Google Review · Student Visa Approved',
    stars: '★★★★★',
    text: 'They guided me through the entire process with professionalism and patience. Their expertise made obtaining my student visa seamless. Highly recommend their services to anyone seeking assistance with their visa application.',
  },
  {
    initial: 'I',
    name: 'Isuru Gihan',
    role: 'Google Review · Language Student',
    stars: '★★★★★',
    text: 'An institution that provides good teaching, works very friendly with the students and often advocates for the students. Easy teaching and learning methods and friendly teachers.',
  },
];

export default function KoukiReviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="section-header">
        <p className="section-tag">GOOGLE REVIEWS</p>
        <h2 className="section-title">Rated 5.0 by our students on Google</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 16 }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 44, fontWeight: 800, color: 'var(--text-dark)' }}>
            5.0
          </span>
          <div style={{ textAlign: 'left' }}>
            <div className="review-stars" style={{ justifyContent: 'flex-start', margin: 0, fontSize: 18 }}>
              ★★★★★
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-light)', marginTop: 2 }}>
              <strong>69 Google reviews</strong> · Yakkala, Sri Lanka
            </div>
          </div>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <div style={{ color: '#f59e0b', fontSize: 16, marginBottom: 14, letterSpacing: '2px' }}>
              {r.stars}
            </div>
            <p className="review-text">"{r.text}"</p>
            <div className="review-author">
              <div className="review-avatar">{r.initial}</div>
              <div>
                <div className="review-name">{r.name}</div>
                <div className="review-source">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="reviews-cta">
        <a
          className="btn-outline"
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/search?q=Kouki+International+Japanese+Language+School+Yakkala+reviews"
        >
          <span style={{ fontWeight: 800, color: '#4285F4' }}>G</span>
          Read all 69 reviews on Google →
        </a>
      </div>
    </section>
  );
}
