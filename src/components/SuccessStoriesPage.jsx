import {
  Play,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  Building2,
  Users
} from 'lucide-react';
import { videoSuccessStories } from '../data/websiteData';
import { getUiText } from '../data/uiText';

function YoutubeIcon({ size = 16, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function SuccessStoriesPage({ lang, onOpenModal }) {
  const s = getUiText(lang).pages.stories;
  const featureVideos = videoSuccessStories.filter(v => v.type === 'feature');
  const shortVideos = videoSuccessStories.filter(v => v.type === 'short');

  const getLocalizedTitle = (item) => {
    if (lang === 'si' && item.titleSi) return item.titleSi;
    if ((lang === 'jp' || lang === 'ja') && item.titleJp) return item.titleJp;
    return item.title;
  };

  const getLocalizedDesc = (item) => {
    if (lang === 'si' && item.descSi) return item.descSi;
    if ((lang === 'jp' || lang === 'ja') && item.descJp) return item.descJp;
    return item.description;
  };

  const icons = [
    { icon: '🎥', color: '#ef4444' },
    { icon: '🏛️', color: '#f59e0b' },
    { icon: '🇯🇵', color: '#0ea5e9' },
    { icon: '👥', color: '#10b981' }
  ];

  const cardThemeStyles = [
    { themeClass: 'card-theme-red', iconClass: 'icon-red', badgeClass: 'badge-pill-red', Icon: ShieldCheck, footerColor: '#b91c1c' },
    { themeClass: 'card-theme-gold', iconClass: 'icon-gold', badgeClass: 'badge-pill-gold', Icon: Award, footerColor: '#b45309' },
    { themeClass: 'card-theme-blue', iconClass: 'icon-blue', badgeClass: 'badge-pill-blue', Icon: Building2, footerColor: '#0369a1' },
    { themeClass: 'card-theme-emerald', iconClass: 'icon-emerald', badgeClass: 'badge-pill-emerald', Icon: Sparkles, footerColor: '#047857' }
  ];

  return (
    <div className="page-container stories-page">
      {/* 1. Page Hero Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="page-header-content">
            <span className="section-badge badge-gold">
              <Award size={14} />
              {s.badge}
            </span>
            <h1 className="page-hero-title">
              {s.title} <span className="text-gradient-red">{s.highlight}</span>
            </h1>
            <p className="page-hero-subtitle">
              {s.subtitle}
            </p>

            <div className="about-quick-badges">
              {s.badges.map((b, idx) => (
                <div key={idx} className="about-badge-item">
                  <span className="badge-icon">{icons[idx]?.icon || '⭐'}</span>
                  <div>
                    <strong>{b.val}</strong>
                    <span className="helper-text">{b.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. In-Depth Featured Video Stories (16:9 Landscape Cinema Cards) */}
      {featureVideos.length > 0 && (
        <section className="video-stories-section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '2.5rem' }}>
              <span className="section-badge badge-red">
                <Play size={14} />
                {s.featuredBadge}
              </span>
              <h2 className="section-title">
                {s.featuredTitle} <span className="text-gradient-red">{s.featuredHighlight}</span>
              </h2>
              <p className="section-subtitle">
                {s.featuredSubtitle}
              </p>
            </div>

            <div className="featured-video-grid">
              {featureVideos.map((video) => (
                <div key={video.id} className="featured-video-card">
                  <div className="video-embed-responsive-16-9">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="featured-video-info">
                    <div className="featured-video-meta">
                      <span className="video-tag-pill">{video.category}</span>
                      <span className="video-tag-sub">{video.location}</span>
                    </div>

                    <h3 className="featured-video-title">{getLocalizedTitle(video)}</h3>
                    <p className="featured-video-desc">{getLocalizedDesc(video)}</p>

                    <div className="featured-card-actions">
                      <a
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-outline-danger"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                      >
                        <ExternalLink size={13} />
                        <span>{s.watchYt}</span>
                      </a>
                      <button
                        onClick={() => onOpenModal(`Consultation after watching ${video.title}`)}
                        className="btn btn-sm btn-primary"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                      >
                        <Sparkles size={13} />
                        <span>{s.applyBatch}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. YouTube Shorts Gallery (9:16 Mobile-Style Grid) */}
      {shortVideos.length > 0 && (
        <section className="shorts-showcase-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge badge-red">
                <YoutubeIcon size={14} />
                {s.shortsBadge}
              </span>
              <h2 className="section-title">
                {s.shortsTitle} <span className="text-gradient-red">{s.shortsHighlight}</span>
              </h2>
              <p className="section-subtitle">
                {s.shortsSubtitle}
              </p>
            </div>

            <div className="shorts-grid">
              {shortVideos.map((short) => (
                <div key={short.id} className="short-video-card">
                  <div className="short-9-16-wrap">
                    <iframe
                      src={short.embedUrl}
                      title={short.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="short-body">
                    <h4 className="short-title">{getLocalizedTitle(short)}</h4>
                    <p className="short-desc">{getLocalizedDesc(short)}</p>

                    <a
                      href={short.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="short-footer-btn"
                    >
                      <YoutubeIcon size={14} />
                      <span>{s.watchShort}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Why Atsuko Candidates Win: The 4 Verified Guarantees */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge badge-gold">
              <ShieldCheck size={14} />
              {s.trustBadge}
            </span>
            <h2 className="section-title">
              {s.trustTitle} <span className="text-gradient-red">{s.trustHighlight}</span>
            </h2>
            <p className="section-subtitle">
              {s.trustSubtitle}
            </p>
          </div>

          <div className="trust-pillars-grid">
            {s.trustCards.map((card, idx) => {
              const meta = cardThemeStyles[idx] || cardThemeStyles[0];
              const IconComp = meta.Icon;
              return (
                <div key={idx} className={`trust-pillar-card ${meta.themeClass}`}>
                  <div className="trust-pillar-header">
                    <div className={`trust-pillar-icon ${meta.iconClass}`}>
                      <IconComp size={28} />
                    </div>
                    <span className={`trust-pillar-badge ${meta.badgeClass}`}>
                      {card.badge}
                    </span>
                  </div>
                  <div className="trust-pillar-kanji">{card.kanji}</div>
                  <h3 className="trust-pillar-title">{card.title}</h3>
                  <p className="trust-pillar-desc">
                    {card.desc}
                  </p>
                  <ul className="trust-pillar-checklist">
                    {card.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <CheckCircle2 size={16} className="text-emerald flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="trust-pillar-footer">
                    <span>Atsuko Verified</span>
                    <span style={{ color: meta.footerColor }}> 100% Legal</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
