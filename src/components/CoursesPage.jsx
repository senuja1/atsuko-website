import { useState, useEffect } from 'react';
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
  Filter,
  GraduationCap,
  HeartPulse,
  Truck,
  Utensils,
  Hotel,
  Hammer,
  Sprout,
  Camera,
  ZoomIn,
  X,
  Users
} from 'lucide-react';
import { coursesData, activeCourseSchedules, pastBatchesGallery } from '../data/websiteData';
import { getUiText } from '../data/uiText';

export default function CoursesPage({ lang, onOpenModal }) {
  const tFull = getUiText(lang);
  const ui = tFull.pages.courses;
  const [scheduleFilter, setScheduleFilter] = useState('all');
  const [proofFilter, setProofFilter] = useState('all');
  const [lightboxProof, setLightboxProof] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxProof(null);
    };
    if (lightboxProof) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxProof]);

  const filteredProofs = pastBatchesGallery.filter(item => {
    if (proofFilter === 'all') return true;
    return item.batch.toLowerCase().replace(/\s+/g, '') === proofFilter;
  });

  const getProofTitle = (item) => {
    if (lang === 'si' && item.titleSi) return item.titleSi;
    if ((lang === 'jp' || lang === 'ja') && item.titleJp) return item.titleJp;
    return item.title;
  };

  const getProofDesc = (item) => {
    if (lang === 'si' && item.descSi) return item.descSi;
    if ((lang === 'jp' || lang === 'ja') && item.descJp) return item.descJp;
    return item.desc;
  };

  const filterSchedules = activeCourseSchedules.filter(item => {
    if (scheduleFilter === 'all') return true;
    if (scheduleFilter === 'language') return item.category.includes('Japanese');
    if (scheduleFilter === 'ssw') return item.category.includes('SSW') || item.category.includes('Prometric');
    return true;
  });

  // Localized Course Content overrides for Sinhala & Japanese
  const localizedLangCourses = coursesData.language.map(c => {
    if (lang === 'si') {
      if (c.id === 'n5') {
        return {
          ...c,
          title: 'JLPT N5 මූලික පාඨමාලාව',
          duration: 'මාස 4 (පැය 160)',
          suitableFor: 'පාසල් හැරගිය සිසුන්, ආධුනිකයින්, ශිෂ්‍ය වීසා අපේක්ෂකයින්',
          description: 'ජපන් භාෂාව මුලසිට (හිරගනා, කටකනා) ඉගෙන ගන්නා සිසුන් සඳහා මූලික පදනම. කන්ජි 100+, මූලික ව්‍යාකරණ, ශ්‍රව්‍ය පරීක්ෂණ සහ දෛනික සංවාද පුහුණුව.',
          features: [
            'හිරගනා සහ කටකනා අභ්‍යාස පොත් කට්ටලයක් සමඟ සම්පූර්ණ දැනුම',
            'මූලික කන්ජි 100+ සහ අත්‍යවශ්‍ය වචන 800+ කටපාඩම් කරවීම',
            'නිල පසුගිය විභාග ප්‍රශ්න පත්‍ර සහ ශ්‍රව්‍යාගාර පෙරහුරුව',
            'සුදුසුකම්ලත් සෙන්සෙයිවරුන් සමඟ දෛනික කතාබහ (Kaiwa)',
          ]
        };
      }
      if (c.id === 'n4') {
        return {
          ...c,
          title: 'JLPT N4 මධ්‍යම පාඨමාලාව',
          duration: 'මාස 4 (පැය 160)',
          suitableFor: 'N5 සමතුන්, SSW රැකියා වීසා අපේක්ෂකයින්',
          description: 'SSW රැකියා වීසා සඳහා අවශ්‍ය නිල භාෂා ප්‍රමිතිය. සංකීර්ණ ව්‍යාකරණ, කන්ජි 300+, සහ ජපන් සේවා ස්ථානවල භාවිත වන ප්‍රායෝගික භාෂා දැනුම.',
          features: [
            'N4 මට්ටමේ කන්ජි 300+ සහ වචන මාලා 1,500+ පරිපූර්ණ හැදෑරීම',
            'රැකියා ස්ථානයට අදාළ දෛනික සන්නිවේදනය සහ ආචාර විධි',
            'Prometric හා සමාන පරිගණක (CBT) සහ ලිඛිත විභාග පෙරහුරු',
            'තානාපති කාර්යාල සම්මුඛ පරීක්ෂණ පෙරහුරු (Mensetsu)',
          ]
        };
      }
      if (c.id === 'jft') {
        return {
          ...c,
          title: 'JFT-Basic A2 වේගවත් පාඨමාලාව',
          duration: 'මාස 3 (පැය 120)',
          suitableFor: 'ඉක්මනින් SSW විභාගය ලිවීමට අපේක්ෂා කරන සිසුන්',
          description: 'ජපන් පදනම (The Japan Foundation) විසින් පවත්වනු ලබන පරිගණක පාදක (CBT) විභාගය සඳහා විශේෂිත පුහුණුව.',
          features: [
            'කඩවත කැම්පස් පරිගණක විද්‍යාගාරයේ CBT පරිගණක විභාග පෙරහුරුව',
            'Irodori (ජපානයේ ජීවිතය සඳහා ජපන්) නිල විෂය නිර්දේශය',
            'ක්ෂණික ශ්‍රව්‍ය ප්‍රතිචාර සහ තිරය හරහා ප්‍රශ්නවලට පිළිතුරු දීම',
            'Prometric විභාග ලියාපදිංචි කිරීමේ සම්පූර්ණ මඟපෙන්වීම',
          ]
        };
      }
      if (c.id === 'spoken') {
        return {
          ...c,
          title: 'ප්‍රායෝගික කථන ජපන් සහ සම්මුඛ පරීක්ෂණ',
          duration: 'මාස 2 (පැය 60)',
          suitableFor: 'වීසා සම්මුඛ පරීක්ෂණ හා ජපන් සේවායෝජක සම්මුඛ පරීක්ෂණ සඳහා',
          description: 'ජපන් හාම්පුතුන් සහ පාසල් විදුහල්පතිවරුන් සමඟ පවත්වන සජීවී Zoom සම්මුඛ පරීක්ෂණ ජයගැනීමේ විශේෂිත කථන පුහුණුව.',
          features: [
            'ජපන් ආචාර විධි (Ojigi), ශරීර භාෂාව සහ වෘත්තීය ගෞරවය',
            'ස්වයං හැඳින්වීම (Jikoshoukai) සහ සාමාන්‍ය ප්‍රශ්නවලට චතුර පිළිතුරු',
            'සේවා ස්ථානවල භාවිත වන කීර්තිමත් ගෞරව භාෂාව (Keigo)',
            'වීඩියෝ පටිගත කිරීම් හරහා උච්චාරණ නිවැරදි කිරීම',
          ]
        };
      }
    }
    return c;
  });

  return (
    <div className="page-container courses-page">
      {/* 1. Page Hero Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              <Award size={14} />
              {ui.badge}
            </span>
            <h1 className="page-hero-title">
              {ui.titlePre} <span className="text-gradient-red">{ui.titleHighlight}</span>
            </h1>
            <p className="page-hero-subtitle">
              {ui.subtitle}
            </p>

            <div className="course-stats-bar">
              {ui.stats.map((st, idx) => (
                <div key={idx} className="course-stat-item">
                  <span className="course-stat-num">{st.num}</span>
                  <span className="course-stat-lbl">{st.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Japanese Language Proficiency Track */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <BookOpen size={14} />
              {ui.langBadge}
            </span>
            <h2 className="section-title">
              {ui.langTitle} <span className="text-gradient-red">{ui.langHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {ui.langSubtitle}
            </p>
          </div>

          <div className="courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.75rem' }}>
            {localizedLangCourses.map((course) => (
              <div key={course.id} className="course-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-xl)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ background: '#fee2e2', color: '#b91c1c', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                      {course.badge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                      {course.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', margin: '0.25rem 0 0.5rem' }}>
                    {course.title}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-jp)', fontSize: '0.85rem', color: '#b45309', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {course.jpTitle}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {course.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {course.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--navy-800)' }}>
                        <CheckCircle2 size={15} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div style={{ background: '#ffffff', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: '#475569', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
                    <strong>{ui.idealCandidateLbl || 'Ideal for:'}</strong> {course.suitableFor}
                  </div>
                  <button 
                    onClick={() => onOpenModal(`Course Enrollment: ${course.title}`)}
                    className="btn btn-primary btn-block"
                  >
                    <span>{ui.enrollBtn || 'Enroll in Course'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SSW Technical & Vocational Training Track */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <Briefcase size={14} />
              {ui.sswBadge}
            </span>
            <h2 className="section-title">
              {ui.sswTitle} <span className="text-gradient-red">{ui.sswHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {ui.sswSubtitle}
            </p>
          </div>

          <div className="courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '1.75rem' }}>
            {coursesData.sswVocational.map((course) => (
              <div key={course.id} className="course-card" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-xl)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ background: '#fef3c7', color: '#92400e', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                      {course.badge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                      {course.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', margin: '0.25rem 0 0.5rem' }}>
                    {course.title}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-jp)', fontSize: '0.85rem', color: '#0284c7', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {course.jpTitle}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {course.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {course.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--navy-800)' }}>
                        <CheckCircle2 size={15} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div style={{ background: '#f8fafc', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: '#475569', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
                    <strong>{ui.modeLbl || 'Training Venue:'}</strong> {course.mode}
                  </div>
                  <button 
                    onClick={() => onOpenModal(`SSW Skill Registration: ${course.title}`)}
                    className="btn btn-gold btn-block"
                  >
                    <span>{ui.enrollBtn || 'Register for SSW Training'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Active Real-Time Batch Schedules & Calendar */}
      <section className="section" id="active-schedules" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-red">
              <Calendar size={14} />
              {ui.scheduleBadge}
            </span>
            <h2 className="section-title">
              {ui.scheduleTitle} <span className="text-gradient-red">{ui.scheduleHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {ui.scheduleSubtitle}
            </p>
          </div>

          {/* Schedule Filter Tabs */}
          <div className="schedule-filter-bar" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div className="filter-pill-group" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button 
                className={`filter-pill ${scheduleFilter === 'all' ? 'active' : ''}`}
                onClick={() => setScheduleFilter('all')}
              >
                {ui.filterAll || 'All Batches'} ({activeCourseSchedules.length})
              </button>
              <button 
                className={`filter-pill ${scheduleFilter === 'language' ? 'active' : ''}`}
                onClick={() => setScheduleFilter('language')}
              >
                {ui.filterLanguage || 'Japanese Language'}
              </button>
              <button 
                className={`filter-pill ${scheduleFilter === 'ssw' ? 'active' : ''}`}
                onClick={() => setScheduleFilter('ssw')}
              >
                {ui.filterSsw || 'SSW Vocational Skills'}
              </button>
            </div>
          </div>

          {/* Structured Responsive Schedules Table */}
          <div className="schedules-table-container">
            <div className="schedules-table-wrapper">
              <table className="schedules-table">
                <thead>
                  <tr>
                    <th>{ui.thCourse || 'Course Name & Category'}</th>
                    <th>{ui.thSchedule || 'Days & Timing'}</th>
                    <th>{ui.modeLbl || 'Venue / Mode'}</th>
                    <th>{ui.thIntake || 'Intake Cycle'}</th>
                    <th>{ui.thStatus || 'Availability'}</th>
                    <th>{ui.thAction || 'Action'}</th>
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
                        <div className="batch-mode-text">
                          <MapPin size={13} />
                          <span>{batch.mode}</span>
                        </div>
                        <span className="batch-duration-badge">{batch.duration}</span>
                      </td>
                      <td className="cell-start">
                        <span className="batch-start-date">{batch.startDate}</span>
                      </td>
                      <td className="cell-status">
                        <span className={`status-badge status-${batch.badgeType}`}>
                          {batch.badgeType === 'success' ? (ui.statusOpen || batch.seatsStatus) : (ui.statusLimited || batch.seatsStatus)}
                        </span>
                      </td>
                      <td className="cell-action">
                        <button 
                          onClick={() => onOpenModal(`Batch Registration: ${batch.course}`)}
                          className="btn btn-sm btn-primary"
                        >
                          <span>{ui.btnEnrollNow || 'Apply'}</span>
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

      {/* 5. Real Classroom Proofs & Previous Batches Gallery (Batch 10, Batch 11, Batch 17) */}
      <section className="past-batches-section" id="batch-proofs">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <Camera size={14} />
              {ui.proofsBadge || 'Real Classroom Proofs & Completed Batches'}
            </span>
            <h2 className="section-title">
              {ui.proofsTitle || 'Real Classroom Moments &'} <span className="text-gradient-red">{ui.proofsHighlight || 'Previous Batch Proofs'}</span>
            </h2>
            <p className="section-subtitle">
              {ui.proofsSubtitle || 'Authentic photographic proof from our completed Japanese language cohorts at Kadawatha. See real student interactions, visiting native Japanese Sensei sessions, and graduation celebrations.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="proofs-filter-bar">
            <div className="proof-pill-group">
              <button
                type="button"
                className={`proof-pill ${proofFilter === 'all' ? 'active' : ''}`}
                onClick={() => setProofFilter('all')}
              >
                <span>{lang === 'si' ? 'සියලු කණ්ඩායම්' : lang === 'jp' ? '全バッチ' : 'All Batches'} ({pastBatchesGallery.length})</span>
              </button>
              <button
                type="button"
                className={`proof-pill ${proofFilter === 'batch10' ? 'active' : ''}`}
                onClick={() => setProofFilter('batch10')}
              >
                <span>Batch 10 (JLPT)</span>
              </button>
              <button
                type="button"
                className={`proof-pill ${proofFilter === 'batch11' ? 'active' : ''}`}
                onClick={() => setProofFilter('batch11')}
              >
                <span>Batch 11 (Culture & Graduation)</span>
              </button>
              <button
                type="button"
                className={`proof-pill ${proofFilter === 'batch17' ? 'active' : ''}`}
                onClick={() => setProofFilter('batch17')}
              >
                <span>Batch 17 (Smart Classroom)</span>
              </button>
            </div>
          </div>

          {/* Proofs Grid */}
          <div className="proofs-grid">
            {filteredProofs.map((item) => (
              <div 
                key={item.id} 
                className="proof-card"
                onClick={() => setLightboxProof(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setLightboxProof(item);
                }}
                aria-label={`View photo: ${getProofTitle(item)}`}
              >
                <div className="proof-img-container">
                  <img 
                    src={item.image} 
                    alt={getProofTitle(item)}
                    className="proof-img"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="412"
                  />
                  <div className="proof-batch-pill">
                    <ShieldCheck size={12} style={{ color: '#fbbf24' }} />
                    <span>{item.badge}</span>
                  </div>
                  <div className="proof-zoom-badge">
                    <ZoomIn size={12} />
                    <span>{ui.proofsViewFullBtn || 'Zoom'}</span>
                  </div>
                </div>

                <div className="proof-body">
                  <span className="proof-tag-chip">{item.tag}</span>
                  <h3 className="proof-title">{getProofTitle(item)}</h3>
                  <p className="proof-desc">{getProofDesc(item)}</p>

                  <div className="proof-footer">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={12} style={{ color: '#0284c7' }} />
                      <span>Kadawatha Campus</span>
                    </span>
                    <span style={{ color: '#059669', fontWeight: 700 }}>Verified Batch</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Preview Modal */}
      {lightboxProof && (
        <div 
          className="proof-lightbox-backdrop"
          onClick={() => setLightboxProof(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="proof-lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="proof-lightbox-close"
              onClick={() => setLightboxProof(null)}
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>

            <div className="proof-lightbox-img-wrap">
              <img 
                src={lightboxProof.image} 
                alt={getProofTitle(lightboxProof)} 
                className="proof-lightbox-img" 
              />
            </div>

            <div className="proof-lightbox-details">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>
                  {lightboxProof.badge}
                </span>
                <span className="badge badge-blue" style={{ fontSize: '0.75rem' }}>
                  {lightboxProof.tag}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                  Atsuko International (Pvt) Ltd • SLBFE Lic. 3293
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy-950)', marginBottom: '0.5rem' }}>
                {getProofTitle(lightboxProof)}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                {getProofDesc(lightboxProof)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
