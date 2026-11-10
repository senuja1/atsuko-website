import { useState, useEffect, useRef } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';

// Exact Latest Official YouTube Shorts from @ATSUKOINTERNATIONAL
const FALLBACK_VIDEOS = [
  {
    id: 'zcCYJCcQLFA',
    title: '🌸 ATSUKO INTERNATIONAL - Japan Job Placement Success Story',
    titleSi: 'ජපානයේ රැකියා ලබාගත් අපේ සිසුන්ගේ අදහස් - අත්සුකෝ ජාත්‍යන්තර ආයතනය',
    titleJp: '日本就労ビザ獲得・受講生の喜びの体験談',
    category: 'Job Placement',
    categorySi: 'ජපාන රැකියා සාර්ථකත්වය',
    categoryJp: '就労ビザ 実績',
    badge: 'Job Victory'
  },
  {
    id: 'VaAG-Be6ZUk',
    title: 'ATSUKO INTERNATIONAL - JFT Exam Success & Japan Visa Milestone',
    titleSi: 'JFT විභාගය ජයගෙන ජපානයේ රැකියා සිහිනය සැබෑ කරගත් සිසුවෙක්',
    titleJp: 'JFT-Basic合格・日本就労へのステップ',
    category: 'JFT Exam Passed',
    categorySi: 'JFT විභාග ජයග්‍රහණය',
    categoryJp: 'JFT試験 合格',
    badge: 'JFT Exam'
  },
  {
    id: '43Nvg3NiZ20',
    title: 'Batch 18 Students Real Feedback - Japanese Language Course',
    titleSi: '18 වන කණ්ඩායමේ සිසුන්ගේ අදහස් - 19 වන කණ්ඩායමට ලියාපදිංචි වන්න',
    titleJp: '第18期生 修了レビュー・第19期生募集中',
    category: 'Batch 18 Review',
    categorySi: '18 වන කණ්ඩායම',
    categoryJp: '第18期生',
    badge: 'Batch 18'
  },
  {
    id: '1-MST6bTChE',
    title: 'Nursing Care NVQ 03 Course Practical Training & Student Review',
    titleSi: 'Nursing Care NVQ 03 පාඨමාලාවේ ප්‍රායෝගික පුහුණුව සහ සිසු අදහස්',
    titleJp: '介護職員初任者研修・NVQ Level 3 実習レビュー',
    category: 'Nursing Care NVQ',
    categorySi: 'NVQ 3 සාත්තු සේවා',
    categoryJp: '特定技能 介護',
    badge: 'NVQ Caregiver'
  },
  {
    id: 'jaMbpphKV_o',
    title: 'NVQ Course Practical Simulation Training by Atsuko International',
    titleSi: 'NVQ සාත්තු සේවා ප්‍රායෝගික පුහුණු ඒකකය - අත්සුකෝ ජාත්‍යන්තර ආයතනය',
    titleJp: 'アツコ校 介護実習シミュレーション演習',
    category: 'Caregiver Lab',
    categorySi: 'ප්‍රායෝගික පුහුණුව',
    categoryJp: '介護実技',
    badge: 'Caregiver Lab'
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
    : Array.isArray(data?.items)
      ? data.items
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
      const rawId = item.id || item.youtubeId || item.url || item.permalink || item.link || item.guid || '';
      const id = extractYouTubeId(rawId);
      if (!id) return null;
      return {
        id,
        title: item.title || `Atsuko Video ${idx + 1}`,
        titleSi: item.titleSi,
        titleJp: item.titleJp,
        category: item.category || 'Official YouTube',
        categorySi: item.categorySi,
        categoryJp: item.categoryJp,
        badge: item.badge
      };
    })
    .filter((v) => v && v.id);

  const seen = new Set();
  const unique = [];
  for (const v of parsed) {
    if (!seen.has(v.id)) {
      seen.add(v.id);
      unique.push(v);
    }
    if (unique.length === 8) break;
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
      // 1. Try local cPanel PHP server-side live YouTube RSS bridge
      try {
        const phpRes = await fetch(`/api-youtube-live.php?t=${Date.now()}`, { cache: 'no-cache' });
        if (phpRes.ok) {
          const phpData = await phpRes.json();
          const phpVideos = normalizeFeedPayload(phpData);
          if (isMounted && phpVideos.length >= 4) {
            setVideos(phpVideos);
            return;
          }
        }
      } catch {
        // Continue to next live source
      }

      // 2. Try official YouTube channel live RSS through high-speed CORS proxy
      try {
        const rssProxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          'https://www.youtube.com/feeds/videos.xml?channel_id=UChN4iv_pO5nu-_24iBKccnA'
        )}`;
        const rssRes = await fetch(rssProxyUrl, { cache: 'no-cache' });
        if (rssRes.ok) {
          const rssData = await rssRes.json();
          const rssVideos = normalizeFeedPayload(rssData);
          if (isMounted && rssVideos.length >= 4) {
            setVideos(rssVideos);
            return;
          }
        }
      } catch {
        // Continue to config
      }

      // 3. Fallback to /youtube-feed.json
      try {
        const configRes = await fetch(`/youtube-feed.json?t=${Date.now()}`, { cache: 'no-cache' });
        if (configRes.ok) {
          const configData = await configRes.json();
          const configVideos = normalizeFeedPayload(configData);
          if (isMounted && configVideos.length > 0) {
            setVideos(configVideos);
          }
        }
      } catch {
        // Keep fallback videos
      }
    }

    loadLiveVideos();

    const intervalId = setInterval(loadLiveVideos, 5 * 60 * 1000);
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="nsbm-intake-section" aria-label="Atsuko Admissions & Live YouTube Video Showcase">
      <div className="nsbm-intake-container">
        {/* Latest Videos Grid Matching Official Channel */}
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

                    {/* Top Row: YouTube Badge */}
                    <div className="nsbm-yt-top-row">
                      <span className="nsbm-yt-badge">
                        <YoutubeIcon size={14} />
                        <span>Shorts</span>
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
                          href={`https://www.youtube.com/shorts/${video.id}`}
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
