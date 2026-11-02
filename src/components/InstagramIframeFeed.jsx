import React, { useState } from 'react';
import { instagramFeedData } from '../data/websiteData';
import { ExternalLink, CheckCircle, Sparkles, Grid, Layers } from 'lucide-react';

export default function InstagramIframeFeed({ lang = 'en' }) {
  const [activePostIndex, setActivePostIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'focus'

  const labels = {
    en: {
      badge: "LIVE INSTAGRAM FEED",
      heading: "Real-Time Updates & Student Moments",
      subheading: "Follow @atsuko_gakkou for official COE visa issuances, practical lab classes, and daily student life in Sri Lanka and Japan.",
      followBtn: "Follow on Instagram",
      viewPost: "View on Instagram",
      gridMode: "Grid View",
      focusMode: "Featured View",
      allPosts: "All Posts"
    },
    si: {
      badge: "සජීවී ඉන්ස්ටග්‍රෑම් තොරතුරු",
      heading: "නවතම පුවත් සහ සිසුන්ගේ සජීවී අවස්ථා",
      subheading: "ශ්‍රී ලංකාවේ සහ ජපානයේ නිල COE වීසා අනුමැතීන්, ප්‍රායෝගික පුහුණු සහ සිසුන්ගේ දෛනික තොරතුරු සඳහා @atsuko_gakkou සමඟ එක්වන්න.",
      followBtn: "ඉන්ස්ටග්‍රෑම් පිටුවට",
      viewPost: "පෝස්ට් එක බලන්න",
      gridMode: "සියලු පෝස්ට්",
      focusMode: "විශේෂාංග පෝස්ට්",
      allPosts: "සියල්ල"
    },
    ja: {
      badge: "公式インスタグラム",
      heading: "最新の活動記録と学生の様子",
      subheading: "@atsuko_gakkou をフォローして、スリランカと日本でのCOEビザ交付、実技ラボ授業、日々のスクール生活をご確認ください。",
      followBtn: "Instagramでフォロー",
      viewPost: "Instagramで見る",
      gridMode: "グリッド表示",
      focusMode: "注目投稿",
      allPosts: "すべて"
    }
  };

  const t = labels[lang] || labels.en;
  const posts = instagramFeedData.posts || [];
  const activePost = posts[activePostIndex] || posts[0];

  return (
    <section className="atsuko-ig-iframe-section" aria-label="Official Instagram Updates">
      <div className="atsuko-ig-container">
        {/* Top Header Card */}
        <div className="atsuko-ig-header">
          <div className="atsuko-ig-brand">
            <div className="atsuko-ig-avatar-wrap">
              <div className="atsuko-ig-avatar-ring">
                <span className="atsuko-ig-avatar-text">篤子</span>
              </div>
              <div className="atsuko-ig-icon-badge" title="Instagram Verified">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>

            <div className="atsuko-ig-info">
              <div className="atsuko-ig-pill-tag">
                <Sparkles size={13} className="inline-icon" />
                <span>{t.badge}</span>
              </div>
              <div className="atsuko-ig-title-row">
                <h2 className="atsuko-ig-handle">{instagramFeedData.handle}</h2>
                <CheckCircle size={18} className="atsuko-ig-verified" title="Official Verified Agency" />
                <span className="atsuko-ig-community-tag">{instagramFeedData.followers} Community</span>
              </div>
              <p className="atsuko-ig-subhead">{t.subheading}</p>
            </div>
          </div>

          <div className="atsuko-ig-actions">
            <div className="atsuko-ig-view-toggle">
              <button 
                type="button"
                className={`atsuko-ig-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title={t.gridMode}
              >
                <Grid size={15} />
                <span>{t.gridMode}</span>
              </button>
              <button 
                type="button"
                className={`atsuko-ig-toggle-btn ${viewMode === 'focus' ? 'active' : ''}`}
                onClick={() => setViewMode('focus')}
                title={t.focusMode}
              >
                <Layers size={15} />
                <span>{t.focusMode}</span>
              </button>
            </div>

            <a
              href={instagramFeedData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="atsuko-ig-follow-btn"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>{t.followBtn}</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Quick Post Filter Tabs */}
        <div className="atsuko-ig-tabs-bar">
          {posts.map((post, idx) => (
            <button
              key={post.id}
              type="button"
              className={`atsuko-ig-tab-pill ${viewMode === 'focus' && activePostIndex === idx ? 'active' : ''}`}
              onClick={() => {
                setActivePostIndex(idx);
                setViewMode('focus');
              }}
            >
              <span className="atsuko-ig-tab-index">0{idx + 1}</span>
              <span className="atsuko-ig-tab-tag">{post.tag}</span>
            </button>
          ))}
        </div>

        {/* Iframe Display Area */}
        {viewMode === 'grid' ? (
          <div className="atsuko-ig-grid">
            {posts.map((post, idx) => (
              <div key={post.id} className="atsuko-ig-card">
                <div className="atsuko-ig-card-header">
                  <span className="atsuko-ig-card-tag">{post.tag}</span>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="atsuko-ig-card-link"
                    title={t.viewPost}
                  >
                    <span>{t.viewPost}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div className="atsuko-ig-iframe-wrapper">
                  <iframe
                    src={`https://www.instagram.com/p/${post.id}/embed/`}
                    title={post.title}
                    className="atsuko-ig-iframe"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    allow="encrypted-media; clipboard-write;"
                    loading="lazy"
                  />
                </div>

                <div className="atsuko-ig-card-footer">
                  <p className="atsuko-ig-card-title">{post.title}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="atsuko-ig-focus-view">
            <div className="atsuko-ig-focus-card">
              <div className="atsuko-ig-card-header">
                <span className="atsuko-ig-card-tag">{activePost.tag}</span>
                <span className="atsuko-ig-focus-index">Post {activePostIndex + 1} of {posts.length}</span>
                <a
                  href={activePost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="atsuko-ig-card-link"
                  title={t.viewPost}
                >
                  <span>{t.viewPost}</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <div className="atsuko-ig-focus-iframe-wrapper">
                <iframe
                  key={activePost.id}
                  src={`https://www.instagram.com/p/${activePost.id}/embed/`}
                  title={activePost.title}
                  className="atsuko-ig-iframe"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media; clipboard-write;"
                  loading="lazy"
                />
              </div>

              <div className="atsuko-ig-focus-footer">
                <div className="atsuko-ig-focus-title-group">
                  <h3 className="atsuko-ig-focus-title">{activePost.title}</h3>
                  <p className="atsuko-ig-focus-subtitle">
                    Live update from Atsuko International Official Instagram Account (@atsuko_gakkou)
                  </p>
                </div>
                <div className="atsuko-ig-focus-nav">
                  <button
                    type="button"
                    className="atsuko-ig-nav-btn"
                    disabled={activePostIndex === 0}
                    onClick={() => setActivePostIndex(prev => Math.max(0, prev - 1))}
                  >
                    ← Previous
                  </button>
                  <button
                    type="button"
                    className="atsuko-ig-nav-btn"
                    disabled={activePostIndex === posts.length - 1}
                    onClick={() => setActivePostIndex(prev => Math.min(posts.length - 1, prev + 1))}
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Assurance Note */}
        <div className="atsuko-ig-bottom-bar">
          <div className="atsuko-ig-live-indicator">
            <span className="atsuko-ig-pulse-dot"></span>
            <span>Real-time feeds are securely embedded directly from the official Instagram platform.</span>
          </div>
          <a
            href={instagramFeedData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="atsuko-ig-direct-link"
          >
            Visit @atsuko_gakkou on Instagram ↗
          </a>
        </div>
      </div>
    </section>
  );
}
