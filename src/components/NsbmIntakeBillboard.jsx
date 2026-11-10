import { useState, useEffect, useRef } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';

const FALLBACK_VIDEOS = [
  {
    id: 'LPol8PPQsnM',
    title: 'Food Service Visa Job Success in Japan - Atsuko International',
    titleSi: 'ජපානයේ Food Service රැකියාවක් ලබාගත් ඇයගේ සාර්ථකත්වය',
    titleJp: '特定技能「外食業」就労ビザ獲得・受講生の実績報告',
    category: 'SSW Food Service',
    categorySi: 'SSW ආහාර සේවා',
    categoryJp: '特定技能 外食業'
  },
  {
    id: 'lhdl9_nXAnE',
    title: 'Japanese Language Student Testimonial - Atsuko International',
    titleSi: 'අත්සුකෝ ජපන් භාෂා පාඨමාලාවේ සිසුවියකගේ අත්දැකීම්',
    titleJp: '日本語コース受講生のリアルな学習体験談',
    category: 'Language Immersion',
    categorySi: 'ජපන් භාෂා පාඨමාලාව',
    categoryJp: '日本語教育'
  },
  {
    id: '4ZSTvGbNCAM',
    title: 'Batch 17 Completion Day Feedback - Kadawatha Campus',
    titleSi: '17 වන කණ්ඩායමේ සිසුවියක් අවසන් දිනයේ දැක්වූ අදහස්',
    titleJp: '第17期生 修了日の生の声・JLPT/JFT対策',
    category: 'Batch 17 Review',
    categorySi: '17 වන කණ්ඩායම',
    categoryJp: '第17期生'
  },
  {
    id: 'buiQB1nwloo',
    title: 'Student Visa Milestone & Departure Pathway to Japan',
    titleSi: 'අත්සුකෝ ජාත්‍යන්තර ආයතනයේ ශිෂ්‍ය වීසා සන්ධිස්ථානය',
    titleJp: '留学ビザ・日本渡航への確実なステップ',
    category: 'Student Visa',
    categorySi: 'ශිෂ්‍ය වීසා',
    categoryJp: '日本留学ビザ'
  }
];

function extractYouTubeId(urlOrId) {
  if (!urlOrId) return '';
  const trimmed = String(urlOrId).trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed;
  const match = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|watch\?v=|embed\/|v\/))([A-Za-z0-9_-]{11})/i);
  return match ? match[1] : trimmed;
}

function normalizeFeedPayload(data) {
  const rawList = Array.isArray(data)
    ? data
    : Array.isArray(data?.videos)
      ? data.videos
      : Array.isArray(data?.posts)
        ? data.posts
        : Array.isArray(data?.data)
          ? data.data
          : [];

  const parsed = rawList
    .map((item, idx) => {
      if (!item) return null;
      if (typeof item === 'string') {
        const id = extractYouTubeId(item);
        return id ? { id, title: `Atsuko Video ${idx + 1}`, category: 'YouTube Video' } : null;
      }
      const rawId = item.id || item.youtubeId || item.url || item.permalink || '';
      const id = extractYouTubeId(rawId);
      if (!id) return null;
      return {
        id,
        title: item.title || `Atsuko Video ${idx + 1}`,
        titleSi: item.titleSi,
        titleJp: item.titleJp,
        category: item.category || 'Atsuko Feature',
        categorySi: item.categorySi,
        categoryJp: item.categoryJp
      };
    })
    .filter((v) => v && v.id);

  // Deduplicate and return top 4
  const seen = new Set();
  const unique = [];
  for (const v of parsed) {
    if (!seen.has(v.id)) {
      seen.add(v.id);
      unique.push(v);
    }
    if (unique.length === 4) break;
  }
  return unique;
}

export default function NsbmIntakeBillboard({ lang = 'en' }) {
  const [videos, setVideos] = useState(FALLBACK_VIDEOS);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    async function loadLiveVideos() {
      try {
        // 1. Check local /youtube-feed.json or env variable
        let feedUrl = import.meta.env.VITE_YOUTUBE_FEED_URL || '';

        const configRes = await fetch('/youtube-feed.json', { cache: 'no-cache' });
        let configData = null;
        if (configRes.ok) {
          configData = await configRes.json();
          if (!feedUrl && configData?.feedUrl) {
            feedUrl = configData.feedUrl.trim();
          }
        }

        // 2. If external live JSON URL is provided, fetch from it
        if (feedUrl) {
          const liveRes = await fetch(feedUrl, { cache: 'no-cache' });
          if (liveRes.ok) {
            const liveData = await liveRes.json();
            const liveVideos = normalizeFeedPayload(liveData);
            if (isMounted && liveVideos.length > 0) {
              setVideos(
                liveVideos.length >= 4
                  ? liveVideos.slice(0, 4)
                  : [...liveVideos, ...FALLBACK_VIDEOS].slice(0, 4)
              );
              return;
            }
          }
        }

        // 3. Otherwise use videos from /youtube-feed.json if valid
        if (configData) {
          const configVideos = normalizeFeedPayload(configData);
          if (isMounted && configVideos.length > 0) {
            setVideos(
              configVideos.length >= 4
                ? configVideos.slice(0, 4)
                : [...configVideos, ...FALLBACK_VIDEOS].slice(0, 4)
            );
          }
        }
      } catch {
        // Fall back silently to FALLBACK_VIDEOS if offline or unconfigured
      }
    }

    loadLiveVideos();

    // Auto-refresh every 5 minutes while page remains open
    const intervalId = setInterval(loadLiveVideos, 5 * 60 * 1000);
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="nsbm-intake-section" aria-label="Atsuko Admissions & Live YouTube Video Showcase">
      <div className="nsbm-intake-container">
        {/* 4 Cards Grid Matching Website Width & Design */}
        <div className="nsbm-four-posts-row">
          {videos.map((video) => {
            const isPlaying = playingVideoId === video.id;
            const currentTitle =
              lang === 'si'
                ? video.titleSi || video.title
                : lang === 'jp'
                  ? video.titleJp || video.title
                  : video.title;

            const currentCategory =
              lang === 'si'
                ? video.categorySi || video.category
                : lang === 'jp'
                  ? video.categoryJp || video.category
                  : video.category;

            return (
              <div
                key={video.id}
                className={`nsbm-post-stage ${isPlaying ? 'is-playing' : ''}`}
              >
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`}
                    title={currentTitle}
                    className="nsbm-yt-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="nsbm-yt-card"
                    onClick={() => setPlayingVideoId(video.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setPlayingVideoId(video.id);
                      }
                    }}
                    aria-label={`Play video: ${currentTitle}`}
                  >
                    {/* YouTube High-Resolution Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={currentTitle}
                      className="nsbm-yt-thumb"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="nsbm-yt-overlay" />

                    {/* Top Row: YouTube Badge & Category */}
                    <div className="nsbm-yt-top-row">
                      <span className="nsbm-yt-badge">
                        <YoutubeIcon size={14} />
                        <span>YouTube</span>
                      </span>
                      <span className="nsbm-yt-cat-badge">
                        {currentCategory}
                      </span>
                    </div>

                    {/* Center Glowing Play Button */}
                    <div className="nsbm-yt-play-wrap">
                      <div className="nsbm-yt-play-btn" aria-hidden="true">
                        <Play size={20} fill="#ffffff" color="#ffffff" style={{ marginLeft: '3px' }} />
                      </div>
                    </div>

                    {/* Bottom Title & Action CTA */}
                    <div className="nsbm-yt-bottom">
                      <h4 className="nsbm-yt-title">{currentTitle}</h4>
                      <div className="nsbm-yt-footer-bar">
                        <span className="nsbm-yt-watch-cta">
                          <Play size={11} fill="#ef4444" color="#ef4444" />
                          <span>{lang === 'si' ? 'වීඩියෝව නරඹන්න' : lang === 'jp' ? '動画を再生' : 'Watch Story'}</span>
                        </span>
                        <a
                          href={`https://www.youtube.com/watch?v=${video.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nsbm-yt-ext-link"
                          onClick={(e) => e.stopPropagation()}
                          title="Open on YouTube"
                          aria-label="Open on YouTube"
                        >
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
