import { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight, 
  Send, 
  Calendar,
  AlertCircle,
  FolderOpen
} from 'lucide-react';
import { studentVisaIntakes, visaDocumentChecklist, roadmapSteps } from '../data/websiteData';

export default function VisaServicesPage({ lang, onOpenModal }) {
  const [activeVisaTab, setActiveVisaTab] = useState('student');

  return (
    <div className="page-container visa-services-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              <ShieldCheck size={14} />
              SLBFE Licensed Agency No. 3293 • 100% Legal Framework
            </span>
            <h1 className="page-hero-title">
              Visa <span className="text-gradient-red">Services & Pathways</span>
            </h1>
            <p className="page-hero-subtitle">
              Comprehensive legal consultancy and Certificate of Eligibility (COE) processing for Student Visas, 
              Specified Skilled Worker (SSW) employment, and Technical Internships in Japan.
            </p>

            <div className="visa-quick-nav-tabs">
              <button 
                className={`visa-nav-btn ${activeVisaTab === 'student' ? 'active' : ''}`}
                onClick={() => setActiveVisaTab('student')}
              >
                <GraduationCap size={18} />
                <span>1. Student Visa (Ryugaku)</span>
              </button>
              <button 
                className={`visa-nav-btn ${activeVisaTab === 'ssw' ? 'active' : ''}`}
                onClick={() => setActiveVisaTab('ssw')}
              >
                <Briefcase size={18} />
                <span>2. SSW Work Visa (特定技能)</span>
              </button>
              <button 
                className={`visa-nav-btn ${activeVisaTab === 'titp' ? 'active' : ''}`}
                onClick={() => setActiveVisaTab('titp')}
              >
                <Award size={18} />
                <span>3. Technical Intern (TITP)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Visa Category Content */}
      <section className="section">
        <div className="container">
          {/* TAB 1: STUDENT VISA */}
          {activeVisaTab === 'student' && (
            <div className="visa-detail-block">
              <div className="visa-detail-header-card">
                <div className="badge-pill-header">
                  <span className="badge-pill-flag">🇯🇵</span>
                  <span>Higher Education & Work Pathway</span>
                </div>
                <h2 className="visa-title-lg">
                  Japanese Student Visa <span className="text-gradient-red">(Ryugaku - 留学)</span>
                </h2>
                <p className="visa-lead-p">
                  The ideal path for Sri Lankan school leavers and young professionals seeking to master Japanese at accredited 
                  language institutes in Tokyo, Osaka, Nagoya, Sendai, or Fukuoka, transitioning into Bachelor's Degrees or 
                  specialized vocational colleges (Senmon Gakko).
                </p>

                <div className="visa-highlights-row">
                  <div className="vh-item">
                    <span className="vh-num">28 Hours/Week</span>
                    <span className="vh-lbl">Legal Part-time Work (Arubaito)</span>
                  </div>
                  <div className="vh-item">
                    <span className="vh-num">40 Hours/Week</span>
                    <span className="vh-lbl">Full-time during School Vacations</span>
                  </div>
                  <div className="vh-item">
                    <span className="vh-num">4 Annual Intakes</span>
                    <span className="vh-lbl">January, April, July, October</span>
                  </div>
                  <div className="vh-item">
                    <span className="vh-num">1 to 2 Years</span>
                    <span className="vh-lbl">Language School Duration</span>
                  </div>
                </div>
              </div>

              {/* Student Visa Intakes Detailed Table */}
              <div className="intakes-detailed-box">
                <h3 className="section-title-sm">
                  <Calendar size={18} className="text-red" />
                  Official Student Visa Intake Cycles (Upcoming 2025/2026)
                </h3>
                <div className="intakes-grid-cards">
                  {studentVisaIntakes.map((intake, idx) => (
                    <div key={idx} className="intake-detail-card">
                      <div className="intake-card-top">
                        <span className={`intake-cycle-pill intake-${intake.badgeColor}`}>
                          {intake.status}
                        </span>
                        <span className="intake-jp-term">{intake.jpTerm}</span>
                      </div>
                      <h4 className="intake-name">{intake.intake}</h4>
                      <p className="intake-season">{intake.season}</p>
                      <p className="intake-desc">{intake.description}</p>
                      
                      <div className="intake-timeline-meta">
                        <div>
                          <strong>COE Result:</strong> {intake.coeRelease}
                        </div>
                        <div>
                          <strong>Departure to Japan:</strong> {intake.departure}
                        </div>
                        <div>
                          <strong>Course Length:</strong> {intake.studyPeriod}
                        </div>
                      </div>

                      <button 
                        onClick={() => onOpenModal(`Student Visa - ${intake.intake}`)}
                        className="btn btn-primary btn-block btn-sm"
                        style={{ marginTop: '1rem' }}
                      >
                        Apply for {intake.intake.split(' ')[0]} Intake
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility Criteria for Student Visa */}
              <div className="visa-requirements-grid">
                <div className="req-card">
                  <h3 className="req-card-title">Eligibility Requirements</h3>
                  <ul className="req-list">
                    <li><CheckCircle2 size={15} className="text-red" /> Completed at least 12 years of formal schooling (G.C.E. A/L or recognized equivalent).</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Age between 18 and 28 years at the time of application.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Minimum 150 hours of certified Japanese language study or JLPT N5 / JFT-Basic pass certificate.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Genuine financial sponsor (parents or close relatives) with verified bank funds.</li>
                  </ul>
                </div>

                <div className="req-card">
                  <h3 className="req-card-title">Atsuko International Support Package</h3>
                  <ul className="req-list">
                    <li><CheckCircle2 size={15} className="text-red" /> Selection of accredited Japanese language institutes matching your academic goals.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Complete preparation and translation of Certificate of Eligibility (COE) dossier.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Embassy of Japan interview rehearsal (Mensetsu) with native Sensei.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Airport reception, student hostel booking, and part-time job hunting coaching in Japan.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SSW WORK VISA */}
          {activeVisaTab === 'ssw' && (
            <div className="visa-detail-block">
              <div className="visa-detail-header-card">
                <div className="badge-pill-header">
                  <span className="badge-pill-flag">💼</span>
                  <span>Legal Japanese Employment Framework</span>
                </div>
                <h2 className="visa-title-lg">
                  Specified Skilled Worker <span className="text-gradient-red">(SSW - 特定技能)</span>
                </h2>
                <p className="visa-lead-p">
                  A revolutionary work visa introduced by the Government of Japan providing legal employment status, 
                  standard Japanese worker wages (equal to or higher than Japanese nationals), full health insurance, 
                  and national pension protections across designated labor sectors.
                </p>

                <div className="visa-highlights-row">
                  <div className="vh-item">
                    <span className="vh-num">5 Years</span>
                    <span className="vh-lbl">Renewable Employment Visa</span>
                  </div>
                  <div className="vh-item">
                    <span className="vh-num">Standard Pay</span>
                    <span className="vh-lbl">Japanese Minimum Wage Laws Apply</span>
                  </div>
                  <div className="vh-item">
                    <span className="vh-num">5 Core Sectors</span>
                    <span className="vh-lbl">Caregiver, Food, Farm, Driving, Build</span>
                  </div>
                  <div className="vh-item">
                    <span className="vh-num">SLBFE Lic. #3293</span>
                    <span className="vh-lbl">Government Verified Work Contracts</span>
                  </div>
                </div>
              </div>

              {/* 5 SSW Sectors Spotlight */}
              <div className="ssw-sectors-breakdown">
                <h3 className="section-title-sm">5 Core SSW Employment Sectors Managed by Atsuko</h3>
                <div className="ssw-sectors-cards-grid">
                  <div className="ssw-cat-card">
                    <div className="ssw-cat-icon">🏥</div>
                    <h4>1. Nursing Care / Caregiver (Kaigo)</h4>
                    <p>Highest demand sector in Japan. Work in accredited nursing homes and eldercare facilities. Practical training at our Kadawatha hospital ward simulation lab.</p>
                    <span className="ssw-cat-test">Test: JLPT N4 / JFT + Prometric Nursing Skills</span>
                  </div>

                  <div className="ssw-cat-card">
                    <div className="ssw-cat-icon">🍽️</div>
                    <h4>2. Food Service & Restaurants (Gaishoku)</h4>
                    <p>Employment in dining chains, family restaurants, and hotel kitchens across Japan. Involves customer service, food prep, and kitchen sanitation.</p>
                    <span className="ssw-cat-test">Test: JLPT N4 / JFT + Prometric Food Service</span>
                  </div>

                  <div className="ssw-cat-card">
                    <div className="ssw-cat-icon">🌾</div>
                    <h4>3. Agriculture & Livestock Farming</h4>
                    <p>Automated greenhouse vegetable cultivation, fruit picking, and livestock management in leading agricultural prefectures like Ibaraki and Nagano.</p>
                    <span className="ssw-cat-test">Test: JLPT N4 / JFT + Prometric Agriculture Exam</span>
                  </div>

                  <div className="ssw-cat-card">
                    <div className="ssw-cat-icon">🚛</div>
                    <h4>4. Commercial Truck Driving & Transport</h4>
                    <p>High-demand logistics sector. Operating commercial vehicles under Japanese transportation standards. Requires driving aptitude and road law study.</p>
                    <span className="ssw-cat-test">Test: JLPT N4 / JFT + Automobile Transport Exam</span>
                  </div>

                  <div className="ssw-cat-card">
                    <div className="ssw-cat-icon">🏗️</div>
                    <h4>5. Construction & Civil Engineering</h4>
                    <p>Structural assembly, civil engineering, interior finishing, and equipment handling under rigorous Japanese workplace safety standards.</p>
                    <span className="ssw-cat-test">Test: JLPT N4 / JFT + Construction Skills Exam</span>
                  </div>
                </div>
              </div>

              <div className="visa-requirements-grid">
                <div className="req-card">
                  <h3 className="req-card-title">SSW Eligibility Criteria</h3>
                  <ul className="req-list">
                    <li><CheckCircle2 size={15} className="text-red" /> Minimum age 18 years; O/L or A/L educational background.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Pass JFT-Basic A2 (Computer test) or JLPT N4 Japanese proficiency.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Pass Prometric Skills Evaluation Test for your chosen sector.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Good medical health and clean police criminal record.</li>
                  </ul>
                </div>

                <div className="req-card">
                  <h3 className="req-card-title">Our Registered Support in Japan</h3>
                  <ul className="req-list">
                    <li><CheckCircle2 size={15} className="text-red" /> Handled by our registered office in Komaki, Aichi (株式会社 篤子インターナショナル).</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Airport greeting at Nagoya Chubu, Tokyo, or Kansai international airports.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Municipal resident registration, bank account opening, and SIM card setup.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Regular welfare visits, workplace coordination, and grievance support.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TITP INTERNSHIP */}
          {activeVisaTab === 'titp' && (
            <div className="visa-detail-block">
              <div className="visa-detail-header-card">
                <div className="badge-pill-header">
                  <span className="badge-pill-flag">📜</span>
                  <span>Technical Skills Transfer Scheme</span>
                </div>
                <h2 className="visa-title-lg">
                  Technical Intern Training <span className="text-gradient-red">(TITP - 技能実習)</span>
                </h2>
                <p className="visa-lead-p">
                  A bilateral governmental program supervised by the Organization for Technical Intern Training (OTIT) in Japan 
                  and the Sri Lanka Bureau of Foreign Employment (SLBFE) designed for skill transfer in manufacturing, construction, 
                  agriculture, and caregiving.
                </p>

                <div className="visa-highlights-row">
                  <div className="vh-item">
                    <span className="vh-num">3 to 5 Years</span>
                    <span className="vh-lbl">Program Duration in Japan</span>
                  </div>
                  <div className="vh-item">
                    <span className="vh-num">OTIT Supervised</span>
                    <span className="vh-lbl">Strict Japanese Government Welfare</span>
                  </div>
                  <div className="vh-item">
                    <span className="vh-num">SSW Transition</span>
                    <span className="vh-lbl">Eligible to change to SSW without exam</span>
                  </div>
                  <div className="vh-item">
                    <span className="vh-num">Pension Refund</span>
                    <span className="vh-lbl">Lump-sum refund claimed upon return</span>
                  </div>
                </div>
              </div>

              <div className="visa-requirements-grid">
                <div className="req-card">
                  <h3 className="req-card-title">TITP Candidate Criteria</h3>
                  <ul className="req-list">
                    <li><CheckCircle2 size={15} className="text-red" /> Age between 18 and 30 years with completed G.C.E. O/L or technical vocational training.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Basic Japanese language readiness (N5 level recommended).</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Physical fitness and readiness for hands-on industrial or technical tasks.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Willingness to return and contribute technical knowledge to Sri Lanka.</li>
                  </ul>
                </div>

                <div className="req-card">
                  <h3 className="req-card-title">Key Program Advantages</h3>
                  <ul className="req-list">
                    <li><CheckCircle2 size={15} className="text-red" /> Subsidized accommodation and living utilities arranged by host employer.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> One-month initial paid post-arrival cultural and language training inside Japan.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Direct transition path to 5-Year SSW work visa after completing 3 years of internship.</li>
                    <li><CheckCircle2 size={15} className="text-red" /> Full claim assistance for Japanese National Pension refund (Dattai Ichijikin).</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Step-by-Step 6-Phase Visa Roadmap */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <Clock size={14} />
              Process Transparency
            </span>
            <h2 className="section-title">
              Your 6-Phase <span className="text-gradient-red">Visa Processing Roadmap</span>
            </h2>
            <p className="section-subtitle">
              From your initial consultation at Kadawatha to your first day in Japan, our legal team guides you through every step.
            </p>
          </div>

          <div className="roadmap-grid-enhanced">
            {roadmapSteps.map((item, idx) => (
              <div key={idx} className="roadmap-card-enhanced">
                <div className="roadmap-num-badge">{item.step}</div>
                <div className="roadmap-jp-text">{item.jp}</div>
                <h3 className="roadmap-step-title">{item.title}</h3>
                <p className="roadmap-step-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Document Checklist Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <FolderOpen size={14} />
              Document Preparation
            </span>
            <h2 className="section-title">
              Required Documents <span className="text-gradient-red">Checklist</span>
            </h2>
            <p className="section-subtitle">
              Ensure you have these primary documents in order before scheduling your official visa file preparation session.
            </p>
          </div>

          <div className="checklist-grid">
            {visaDocumentChecklist.map((group, idx) => (
              <div key={idx} className="checklist-card">
                <h3 className="checklist-category-title">{group.category}</h3>
                <ul className="checklist-items">
                  {group.items.map((item, i) => (
                    <li key={i}>
                      <FileCheck size={16} className="text-red" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="checklist-cta-box">
            <div className="cta-box-content">
              <AlertCircle size={24} className="text-gold" />
              <div>
                <strong>Need assistance with translations or document verification?</strong>
                <p>Our legal documentation desk at Kadawatha assists with certified English translations, sworn affidavits, and Ministry of Foreign Affairs (SLBFE) attestation.</p>
              </div>
            </div>
            <button 
              onClick={() => onOpenModal('Document Verification & Checklist Review')}
              className="btn btn-primary btn-sm"
            >
              Consult Document Officer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
