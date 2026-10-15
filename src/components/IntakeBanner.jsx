import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { studentVisaIntakes } from '../data/websiteData';

export default function IntakeBanner({ onNavigateToVisa, onOpenModal }) {
  return (
    <div className="intake-banner-wrapper">
      <div className="container intake-banner-inner">
        <div className="intake-banner-left">
          <span className="intake-live-pulse">
            <span className="intake-pulse-dot"></span>
            LIVE INTAKES
          </span>
          <div className="intake-banner-text">
            <Calendar size={15} className="intake-calendar-icon" />
            <span className="intake-title">
              <strong>Upcoming Japan Student Visa Intakes:</strong>
            </span>
            <div className="intake-cycles-badges">
              {studentVisaIntakes.map((cycle, idx) => (
                <span key={idx} className={`intake-cycle-pill intake-${cycle.badgeColor}`}>
                  {cycle.intake.split(' ')[0]} ({cycle.status})
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="intake-banner-right">
          <button 
            onClick={() => onNavigateToVisa ? onNavigateToVisa() : onOpenModal('Student Visa Intake')}
            className="intake-cta-btn"
          >
            <span>View Intake Cycles</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
