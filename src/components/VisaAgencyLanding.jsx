import _CountUp from "react-countup";
import { RevealOnScroll } from "./RevealOnScroll";

const CountUp = _CountUp?.default || _CountUp;

export default function VisaAgencyLanding({ onApply }) {
  return (
    <div className="japandi-landing">
      <section className="japandi-hero">
        <RevealOnScroll>
          <span className="japandi-kanji">🌸 光輝</span>
          <h1 className="japandi-title">
            Sri Lanka to <span>Japan</span>
          </h1>
          <p className="japandi-desc">
            Your dream of Japan starts with a single step through the gate. We guide you from your first hiragana to your flight.
          </p>
          <button onClick={onApply} className="japandi-btn">
            Apply Now
          </button>
        </RevealOnScroll>
      </section>

      <section className="japandi-stats">
        <div className="japandi-stats-grid">
          <RevealOnScroll delay={0.1}>
            <div className="japandi-stat-num">
              <CountUp end={170} duration={3} enableScrollSpy scrollSpyOnce />+
            </div>
            <div className="japandi-stat-lbl">Students in Japan</div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.3}>
            <div className="japandi-stat-num">
              <CountUp end={88} duration={3} enableScrollSpy scrollSpyOnce />%
            </div>
            <div className="japandi-stat-lbl">Visa Success Rate</div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.5}>
            <div className="japandi-stat-num">
              <CountUp end={80} duration={3} enableScrollSpy scrollSpyOnce />+
            </div>
            <div className="japandi-stat-lbl">Active Students</div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
