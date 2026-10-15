import { useState } from 'react';
import { 
  BookOpen, 
  Briefcase, 
  Calendar, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Award, 
  Layers, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  Filter
} from 'lucide-react';
import { coursesData, activeCourseSchedules } from '../data/websiteData';

export default function CoursesPage({ lang, onOpenModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [scheduleFilter, setScheduleFilter] = useState('all');

  const filterSchedules = activeCourseSchedules.filter(item => {
    if (scheduleFilter === 'all') return true;
    if (scheduleFilter === 'language') return item.category.includes('Japanese');
    if (scheduleFilter === 'ssw') return item.category.includes('SSW') || item.category.includes('Prometric');
    return true;
  });

  return (
    <div className="page-container courses-page">
      {/* Page Hero Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              <Award size={14} />
              Accredited Curriculum & Practical Labs
            </span>
            <h1 className="page-hero-title">
              Courses & <span className="text-gradient-red">Vocational Training</span>
            </h1>
            <p className="page-hero-subtitle">
              Comprehensive Japanese language preparation (JLPT & JFT) and government-certified Specified Skilled Worker 
              (SSW) vocational simulation training designed for maximum pass rates and immediate employer selection.
            </p>

            <div className="course-stats-bar">
              <div className="course-stat-item">
                <span className="course-stat-num">JLPT N5 / N4</span>
                <span className="course-stat-lbl">Foundation to SSW Standard</span>
              </div>
              <div className="course-stat-item">
                <span className="course-stat-num">JFT-Basic A2</span>
                <span className="course-stat-lbl">Computer-Based CBT Lab Prep</span>
              </div>
              <div className="course-stat-item">
                <span className="course-stat-num">5 SSW Sectors</span>
                <span className="course-stat-lbl">Caregiver, Food, Farm, Driving, Build</span>
              </div>
              <div className="course-stat-item">
                <span className="course-stat-num">Kadawatha Lab</span>
                <span className="course-stat-lbl">Hospital Bed & Wheelchair Unit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Batch Schedules & Calendar Table Section */}
      <section className="section" id="active-schedules">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <Calendar size={14} />
              Real-Time Batch Calendar
            </span>
            <h2 className="section-title">
              Browse Active <span className="text-gradient-red">Course Schedules</span>
            </h2>
            <p className="section-subtitle">
              Select an upcoming batch schedule below and register online for physical classes at Kadawatha, 
              regional intake branches, or live interactive Zoom batches.
            </p>
          </div>

          {/* Schedule Filter Tabs */}
          <div className="schedule-filter-bar">
            <div className="filter-pill-group">
              <button 
                className={`filter-pill ${scheduleFilter === 'all' ? 'active' : ''}`}
                onClick={() => setScheduleFilter('all')}
              >
                All Upcoming Batches ({activeCourseSchedules.length})
              </button>
              <button 
                className={`filter-pill ${scheduleFilter === 'language' ? 'active' : ''}`}
                onClick={() => setScheduleFilter('language')}
              >
                Japanese Language (N5/N4/JFT)
              </button>
              <button 
                className={`filter-pill ${scheduleFilter === 'ssw' ? 'active' : ''}`}
                onClick={() => setScheduleFilter('ssw')}
              >
                SSW Vocational Skills & Labs
              </button>
            </div>
          </div>

          {/* Structured Responsive Schedules Table / Cards */}
          <div className="schedules-table-container">
            <div className="schedules-table-wrapper">
              <table className="schedules-table">
                <thead>
                  <tr>
                    <th>Course Name & Category</th>
                    <th>Days & Timing</th>
                    <th>Center / Learning Mode</th>
                    <th>Intake Cycle</th>
                    <th>Availability</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filterSchedules.map((batch) => (
                    <tr key={batch.id} className="schedule-row">
                      <td className="cell-course">
                        <div className="batch-name">{batch.course}</div>
                        <span className="batch-cat-tag">{batch.category}</span>
                      </td>
                      <td className="cell-time">
                        <div className="batch-days">{batch.days}</div>
                        <div className="batch-time-clock">
                          <Clock size={13} />
                          <span>{batch.time}</span>
                        </div>
                      </td>
                      <td className="cell-mode">
                        <div className="batch-location">
                          <MapPin size={13} className="text-red" />
                          <span>{batch.mode}</span>
                        </div>
                        <span className="batch-duration">{batch.duration}</span>
                      </td>
                      <td className="cell-start">
                        <span className="batch-start-date">{batch.startDate}</span>
                      </td>
                      <td className="cell-status">
                        <span className={`status-pill status-${batch.badgeType}`}>
                          {batch.seatsStatus}
                        </span>
                      </td>
                      <td className="cell-action">
                        <button 
                          onClick={() => onOpenModal(batch.course)}
                          className="btn-register-table"
                        >
                          Register Online
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Course Breakdowns */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <BookOpen size={14} />
              Syllabus & Modules
            </span>
            <h2 className="section-title">
              Detailed Breakdown of <span className="text-gradient-red">Japanese Language Courses</span>
            </h2>
            <p className="section-subtitle">
              Structured step-by-step syllabus from basic Hiragana alphabet to professional Japanese business honorifics.
            </p>
          </div>

          <div className="courses-detailed-grid">
            {coursesData.language.map((course) => (
              <div key={course.id} className="course-card-enhanced">
                <div className="course-card-header">
                  <span className="course-card-badge">{course.badge}</span>
                  <span className="course-card-duration">
                    <Clock size={13} />
                    {course.duration}
                  </span>
                </div>

                <h3 className="course-card-title">{course.title}</h3>
                <div className="course-card-jp">{course.jpTitle}</div>
                <p className="course-card-desc">{course.description}</p>

                <div className="course-features-block">
                  <strong className="block-title">Key Learning Outcomes:</strong>
                  <ul className="course-features-list">
                    {course.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} className="text-red" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="course-card-candidate-box">
                  <strong>Target Applicant:</strong> {course.suitableFor}
                </div>

                <div className="course-card-footer">
                  <div className="course-mode-tag">
                    <MapPin size={13} />
                    <span>{course.mode}</span>
                  </div>
                  <button 
                    onClick={() => onOpenModal(course.title)}
                    className="btn btn-primary btn-sm"
                  >
                    <Send size={13} />
                    <span>Register Batch</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSW Vocational Training & Skills Tracks Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <Briefcase size={14} />
              Specified Skilled Worker (SSW)
            </span>
            <h2 className="section-title">
              SSW Vocational <span className="text-gradient-red">Skills Training Tracks</span>
            </h2>
            <p className="section-subtitle">
              Government-aligned practical curriculum preparing candidates for Prometric Skills Evaluation tests in 
              high-demand employment sectors in Japan.
            </p>
          </div>

          <div className="ssw-tracks-grid">
            {coursesData.sswWorkVisa.map((track) => (
              <div key={track.id} className="ssw-track-card">
                <div className="ssw-track-banner">
                  <span className="ssw-track-badge">★ {track.badge}</span>
                  <span className="ssw-track-period">{track.duration}</span>
                </div>

                <div className="ssw-track-content">
                  <h3 className="ssw-track-title">{track.title}</h3>
                  <div className="ssw-track-jp">{track.jpTitle}</div>
                  <p className="ssw-track-desc">{track.description}</p>

                  <div className="ssw-track-points">
                    <strong className="block-title">Training Modules & Placement:</strong>
                    <ul>
                      {track.features.map((feat, idx) => (
                        <li key={idx}>
                          <span className="track-bullet">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="ssw-track-meta">
                    <span className="candidate-req">
                      <strong>Eligibility:</strong> {track.suitableFor}
                    </span>
                  </div>

                  <button 
                    onClick={() => onOpenModal(track.title)}
                    className="btn btn-gold btn-block"
                    style={{ marginTop: '1.25rem' }}
                  >
                    <span>Enroll for {track.title.split('(')[0]}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Facilities & Simulation Labs Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="training-facility-showcase-grid">
            <div className="facility-img-card">
              <img 
                src="/images/classroom-sensei.jpg" 
                alt="Kadawatha Japanese Language Classroom & Native Sensei" 
                className="facility-img"
              />
              <div className="facility-floating-pill">
                <Sparkles size={16} className="text-gold" />
                <span>Native Japanese Sensei & JLPT N1/N2 Faculty</span>
              </div>
            </div>

            <div className="facility-info-col">
              <span className="section-badge badge-red">Kadawatha Operations Hub</span>
              <h2 className="section-title-md">
                World-Class Simulation & <span className="text-gradient-red">Audio-Visual Facilities</span>
              </h2>
              <p className="about-body-p">
                Atsuko International is equipped with proprietary training infrastructure designed to replicate 
                the exact testing conditions of Prometric computer centers and Japanese healthcare institutions:
              </p>

              <div className="facility-points-list">
                <div className="facility-point-item">
                  <div className="f-icon">🏥</div>
                  <div>
                    <h4>Caregiver (Kaigo) Practical Simulation Ward</h4>
                    <p>Fitted with authentic Japanese hospital adjustable beds, wheelchairs, bathing aids, and ergonomic patient transfer apparatus.</p>
                  </div>
                </div>

                <div className="facility-point-item">
                  <div className="f-icon">💻</div>
                  <div>
                    <h4>Prometric Computer-Based Testing (CBT) Lab</h4>
                    <p>Dedicated computer terminals simulating JFT-Basic and SSW skill test interfaces to build examination confidence.</p>
                  </div>
                </div>

                <div className="facility-point-item">
                  <div className="f-icon">🎧</div>
                  <div>
                    <h4>JLPT Acoustic Listening Chambers</h4>
                    <p>High-fidelity audio booths calibrated to Japanese Embassy examination acoustic standards for auditory drills.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <button 
                  onClick={() => onOpenModal('Campus Tour & Simulation Lab Visit')}
                  className="btn btn-primary"
                >
                  Book a Visit to Kadawatha Simulation Lab
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
