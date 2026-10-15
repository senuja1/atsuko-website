import { useState } from 'react';
import { 
  Award, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  ArrowRight, 
  Send, 
  Sparkles,
  Plane,
  Building2,
  Users,
  Compass,
  FileCheck
} from 'lucide-react';
import { successStoriesData, lifeInJapanData, officialContacts } from '../data/websiteData';

export default function SuccessStoriesPage({ lang, onOpenModal, onNavigate }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);

  const filteredStories = successStoriesData.filter((item) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'student') return item.category === 'student';
    if (selectedFilter === 'caregiver') return item.category === 'ssw-caregiver';
    if (selectedFilter === 'other-ssw') return item.category === 'ssw-food' || item.category === 'ssw-logistics';
    return true;
  });

  const activeCity = lifeInJapanData.livingCosts[selectedCityIndex];

  return (
    <div className="page-container stories-page">
      {/* 1. Page Hero Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              <Award size={14} />
              SLBFE License No. 3293 • 2,500+ Verified Placements
            </span>
            <h1 className="page-hero-title">
              Success Stories & <span className="text-gradient-red">Life in Japan</span>
            </h1>
            <p className="page-hero-subtitle">
              Explore real journeys of Sri Lankan school leavers, university graduates, and skilled workers now thriving across Tokyo, Nagoya, Sendai, and Osaka with full legal protection from Colombo to Japan.
            </p>

            <div className="about-quick-badges">
              <div className="about-badge-item">
                <span className="badge-icon">✈️</span>
                <div>
                  <strong>2,500+ Placed</strong>
                  <span className="helper-text">Across 47 Prefectures</span>
                </div>
              </div>
              <div className="about-badge-item">
                <span className="badge-icon">🏛️</span>
                <div>
                  <strong>98.4% COE Rate</strong>
                  <span className="helper-text">Immigration Approved</span>
                </div>
              </div>
              <div className="about-badge-item">
                <span className="badge-icon">🇯🇵</span>
                <div>
                  <strong>Komaki & Sendai HQ</strong>
                  <span className="helper-text">Registered Support Org</span>
                </div>
              </div>
              <div className="about-badge-item">
                <span className="badge-icon">👥</span>
                <div>
                  <strong>17,000+ Community</strong>
                  <span className="helper-text">Official Student Group</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter Navigation Toolbar */}
      <section className="stories-filter-bar">
        <div className="container">
          <div className="stories-filter-tabs">
            <button 
              className={`filter-pill-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              <span>All Success Stories ({successStoriesData.length})</span>
            </button>
            <button 
              className={`filter-pill-btn ${selectedFilter === 'student' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('student')}
            >
              <GraduationCap size={16} />
              <span>Student Visa (Ryugaku)</span>
            </button>
            <button 
              className={`filter-pill-btn ${selectedFilter === 'caregiver' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('caregiver')}
            >
              <Briefcase size={16} />
              <span>SSW Caregiver (Kaigo)</span>
            </button>
            <button 
              className={`filter-pill-btn ${selectedFilter === 'other-ssw' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('other-ssw')}
            >
              <TrendingUp size={16} />
              <span>SSW Food & Logistics</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Verified Alumni Cards Grid */}
      <section className="section" style={{ background: '#ffffff', paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-badge badge-red">
              <ShieldCheck size={14} />
              Verified Case Studies
            </span>
            <h2 className="section-title">
              Voices From <span className="text-gradient-red">Our Graduates in Japan</span>
            </h2>
            <p className="section-subtitle">
              Authentic stories from candidates who started from Hiragana at Atsuko language centers in Sri Lanka.
            </p>
          </div>

          <div className="stories-cards-grid">
            {filteredStories.map((item) => (
              <div key={item.id} className="story-card">
                <div className="story-card-top">
                  <div className="story-avatar-wrap">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="story-avatar-img"
                    />
                    <span className="story-cat-badge">{item.categoryLabel}</span>
                  </div>
                  <div className="story-title-meta">
                    <h3 className="story-student-name">{item.name}</h3>
                    <div className="story-student-kanji">{item.jpName}</div>
                    <div className="story-origin-tag">
                      <MapPin size={13} className="text-red flex-shrink-0" />
                      <span>{item.hometown} → <strong>{item.locationInJapan}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="story-details-block">
                  <div className="story-detail-row">
                    <span className="detail-lbl">Institution / Company:</span>
                    <strong className="detail-val">{item.institution}</strong>
                  </div>
                  <div className="story-detail-row">
                    <span className="detail-lbl">Intake Cycle:</span>
                    <span className="detail-val text-gold">{item.intakeBatch}</span>
                  </div>
                  <div className="story-detail-row">
                    <span className="detail-lbl">Language Proficiency:</span>
                    <span className="detail-val">{item.jlptLevel}</span>
                  </div>
                  <div className="story-detail-row">
                    <span className="detail-lbl">Earnings / Income:</span>
                    <span className="detail-val earning-pill">{item.monthlyEarnings}</span>
                  </div>
                </div>

                <blockquote className="story-quote">
                  "{item.quote}"
                </blockquote>

                <ul className="story-highlights-list">
                  {item.highlights.map((hl, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={13} className="text-green flex-shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="story-card-footer">
                  <span className="verified-slbfe-tag">
                    <ShieldCheck size={13} />
                    Verified SLBFE Placement
                  </span>
                  <button 
                    onClick={() => onOpenModal(`Consultation for ${item.categoryLabel}`)}
                    className="btn btn-sm btn-secondary"
                  >
                    <span>Apply Like {item.name.split(' ')[0]}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Airport Departure & Cohort Showcase Banner */}
      <section className="section" style={{ background: '#f8fafc', paddingTop: '48px', paddingBottom: '64px', borderTop: '1px solid rgba(0,0,0,0.08)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="container">
          <div className="stories-banner-card">
            <div className="stories-banner-content">
              <span className="section-badge badge-gold">
                <Plane size={14} />
                Colombo Airport Departure Cohorts
              </span>
              <h2 className="stories-banner-title">
                From Katunayake to Tokyo: Safe, Group-Led Departures
              </h2>
              <p className="stories-banner-desc">
                Every batch flies together under the supervision of Atsuko International officers. We provide full pre-departure luggage guidance, ticket verification, and customs clearance protocols.
              </p>
              
              <div className="stories-stats-row">
                <div className="stat-pill">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">COE Grant in Last 3 Intakes</div>
                </div>
                <div className="stat-pill">
                  <div className="stat-number">47</div>
                  <div className="stat-label">Prefectures Placed</div>
                </div>
                <div className="stat-pill">
                  <div className="stat-number">7 Days</div>
                  <div className="stat-label">Avg. Visa Stamping</div>
                </div>
              </div>

              <div className="stories-banner-actions">
                <button 
                  onClick={() => onOpenModal('Fast Registration')}
                  className="btn btn-primary"
                >
                  <Sparkles size={16} />
                  <span>Join Next Intake Cohort</span>
                </button>
                <a 
                  href={officialContacts.socials.facebookGroup} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-secondary"
                >
                  <Users size={16} />
                  <span>Join 17K+ Student Group</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="stories-banner-image-wrap">
              <img 
                src="/images/student-success.jpg" 
                alt="Atsuko International Students Holding Japanese Visas at Departure Gate" 
                className="stories-banner-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Life in Japan: Cost of Living Matrix & Calculator */}
      <section className="section" style={{ background: '#ffffff', paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <span className="section-badge badge-red">
              <Compass size={14} />
              Practical Living Guide
            </span>
            <h2 className="section-title">
              Living Costs & <span className="text-gradient-red">Student Economics in Japan</span>
            </h2>
            <p className="section-subtitle">
              Transparent, realistic monthly budget breakdowns based on active data from our Komaki and Sendai Japan support teams.
            </p>
          </div>

          {/* City Selection Pills */}
          <div className="city-toggle-bar">
            {lifeInJapanData.livingCosts.map((c, idx) => (
              <button 
                key={c.city}
                onClick={() => setSelectedCityIndex(idx)}
                className={`city-pill-btn ${selectedCityIndex === idx ? 'active' : ''}`}
              >
                <span>{c.city}</span>
                <span className="city-tag-mini">{c.badge}</span>
              </button>
            ))}
          </div>

          {/* City Economics Card */}
          <div className="cost-breakdown-card">
            <div className="cost-card-header">
              <div>
                <h3 className="cost-city-title">{activeCity.city}</h3>
                <span className="cost-city-badge">{activeCity.badge}</span>
              </div>
              <div className="cost-total-estimate">
                <span className="estimate-lbl">Total Estimated Expenses:</span>
                <strong className="estimate-val text-gradient-red">{activeCity.totalEstimated}</strong>
              </div>
            </div>

            <div className="cost-grid-items">
              <div className="cost-item-box">
                <div className="cost-item-lbl">🏠 Apartment / Dormitory Rent</div>
                <div className="cost-item-val">{activeCity.rent}</div>
                <div className="cost-item-hint">Shared or single room near station</div>
              </div>

              <div className="cost-item-box">
                <div className="cost-item-lbl">🍙 Groceries & Food</div>
                <div className="cost-item-val">{activeCity.groceries}</div>
                <div className="cost-item-hint">Self-cooking + Halal/Sri Lankan spices</div>
              </div>

              <div className="cost-item-box">
                <div className="cost-item-lbl">⚡ Utilities & High-Speed WiFi</div>
                <div className="cost-item-val">{activeCity.utilities}</div>
                <div className="cost-item-hint">Electricity, gas, water & mobile data</div>
              </div>

              <div className="cost-item-box">
                <div className="cost-item-lbl">🚆 Local Commuter Train</div>
                <div className="cost-item-val">{activeCity.transport}</div>
                <div className="cost-item-hint">Commuter pass with student discount</div>
              </div>
            </div>

            <div className="cost-income-comparison">
              <div className="income-block">
                <span className="income-lbl">Part-time Student Income (28h/w):</span>
                <strong className="income-val text-green">{activeCity.studentPartTimeAvg}</strong>
              </div>
              <div className="savings-block">
                <span className="savings-lbl">Estimated Monthly Net Savings:</span>
                <strong className="savings-val text-gold">{activeCity.netSavingsPotential}</strong>
              </div>
            </div>
          </div>

          {/* Part-Time Work Regulations Box */}
          <div className="work-regulations-box">
            <div className="wr-header">
              <div className="wr-icon-box">
                <ClockIcon size={20} />
              </div>
              <div>
                <h4 className="wr-title">Official Japanese Immigration Work Regulations</h4>
                <p className="wr-sub">Legal entitlement under 'Permission to Engage in Activity other than that Permitted' (資格外活動許可)</p>
              </div>
            </div>

            <div className="wr-grid">
              <div className="wr-point">
                <strong>{lifeInJapanData.partTimeRegulations.hoursPerWeek}</strong>
                <span>Allows students to comfortably cover living expenses and tuition savings without academic strain.</span>
              </div>
              <div className="wr-point">
                <strong>{lifeInJapanData.partTimeRegulations.vacationHours}</strong>
                <span>During summer and winter school vacations, students can earn significantly more.</span>
              </div>
              <div className="wr-point">
                <strong>Common Approved Work Sectors</strong>
                <span>{lifeInJapanData.partTimeRegulations.commonJobs.slice(0, 3).join(', ')}, and hotel customer service.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Onboarding Steps in Japan: The Atsuko Difference */}
      <section className="section" style={{ background: '#0b152d', color: '#ffffff', paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-badge badge-gold">
              <Building2 size={14} />
              株式会社 篤子インターナショナル (Komaki & Sendai)
            </span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>
              Your First 30 Days in Japan <span className="text-gradient-gold">Made Seamless</span>
            </h2>
            <p className="section-subtitle" style={{ color: '#cbd5e1' }}>
              Unlike agents whose responsibility ends at the Colombo departure lounge, Atsuko's registered Japanese entities support you upon arrival.
            </p>
          </div>

          <div className="onboarding-steps-grid">
            {lifeInJapanData.onboardingSteps.map((step) => (
              <div key={step.step} className="onboarding-card">
                <div className="onboarding-step-num">{step.step}</div>
                <h4 className="onboarding-step-title">{step.title}</h4>
                <p className="onboarding-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Registered Support Entity Banner */}
          <div className="japan-support-entity-box">
            <div className="jse-left">
              <ShieldCheck size={28} className="text-gold flex-shrink-0" />
              <div>
                <h4 className="jse-title">Official Touroku Shien Kikan (登録支援機関) Status</h4>
                <p className="jse-desc">
                  Registered under the Immigration Services Agency of Japan. We provide mandatory quarterly welfare reports, 24/7 emergency response in Sinhala & Japanese, and legal employer dispute resolution.
                </p>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('contact')}
              className="btn btn-gold"
            >
              <span>View Japan Office Details</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="section" style={{ background: '#ffffff', paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="bottom-cta-banner-box">
            <span className="section-badge badge-red">
              <Award size={14} />
              Your Turn to Succeed
            </span>
            <h2 className="bcta-title">
              Ready to Write Your Own Success Story in Japan?
            </h2>
            <p className="bcta-desc">
              Book a free document review and visa evaluation with our certified senior counselors at Kadawatha or any regional center.
            </p>
            <div className="bcta-buttons-row">
              <button 
                onClick={() => onOpenModal('Success Story Consultation')}
                className="btn btn-lg btn-primary"
              >
                <Sparkles size={16} />
                <span>Book Free Career Assessment</span>
              </button>
              <a 
                href="https://wa.me/94778643352?text=Hello%20Atsuko%20International,%20I%20saw%20your%20student%20success%20stories%20and%20want%20to%20apply."
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-lg btn-whatsapp"
              >
                <span>WhatsApp Senior Counselor</span>
              </a>
              <button 
                onClick={() => onNavigate('courses')}
                className="btn btn-lg btn-secondary"
              >
                <span>Browse Active Batches</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ClockIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}
