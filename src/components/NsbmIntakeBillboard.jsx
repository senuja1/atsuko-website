import { useState, useEffect, useRef } from 'react';

const FALLBACK_POSTS = [
  {
    id: 'DeQjepkEwiW',
    type: 'p',
    title: 'Caregiver (SSW Visa) Practical Training - Atsuko International'
  },
  {
    id: 'DV0wLR8kYh1',
    type: 'p',
    title: 'Official 2027 April Intake & SSW Admissions - Atsuko International'
  },
  {
    id: 'Da1rbndEvGK',
    type: 'p',
    title: 'Food Service (SSW Visa) Approvals - Atsuko International'
  },
  {
    id: 'DZ_jTzyCJha',
    type: 'p',
    title: 'Batch 17 Native Sensei Classroom Immersion - Atsuko International'
  }
];

function extractInstagramPost(item, index) {
  if (!item) return null;
  if (typeof item === 'string') {
    const match = item.match(/instagram\.com\/(p|reel|tv)\/([A-Za-z0-9_-]+)/i);
    if (match) {
      return { id: match[2], type: match[1].toLowerCase(), title: `Atsuko International Instagram Post ${index + 1}` };
    }
    return { id: item.trim(), type: 'p', title: `Atsuko International Instagram Post ${index + 1}` };
  }

  const permalink = item.permalink || item.url || item.link || '';
  const match = permalink.match(/instagram\.com\/(p|reel|tv)\/([A-Za-z0-9_-]+)/i);
  if (match) {
    return {
      id: match[2],
      type: match[1].toLowerCase(),
      title: (item.caption || item.title || `Atsuko International Instagram Post ${index + 1}`).slice(0, 100)
    };
  }

  if (item.shortcode || item.id) {
    return {
      id: item.shortcode || item.id,
      type: item.type === 'reel' ? 'reel' : 'p',
      title: (item.caption || item.title || `Atsuko International Instagram Post ${index + 1}`).slice(0, 100)
    };
  }

  return null;
}

function normalizeFeedPayload(data) {
  const rawList = Array.isArray(data)
    ? data
    : Array.isArray(data?.posts)
      ? data.posts
      : Array.isArray(data?.data)
        ? data.data
        : [];

  const parsed = rawList
    .map((item, idx) => extractInstagramPost(item, idx))
    .filter((p) => p && p.id);

  // Deduplicate by shortcode ID and keep latest 4
  const seen = new Set();
  const unique = [];
  for (const post of parsed) {
    if (!seen.has(post.id)) {
      seen.add(post.id);
      unique.push(post);
    }
    if (unique.length === 4) break;
  }
  return unique;
}

export default function NsbmIntakeBillboard() {
  const [posts, setPosts] = useState(FALLBACK_POSTS);
  const [shouldMountIframes, setShouldMountIframes] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMountIframes(true);
          observer.disconnect();
        }
      },
      { rootMargin: '350px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadLiveInstagramPosts() {
      try {
        // 1. Check local config (/instagram-feed.json) or env variable (VITE_INSTAGRAM_FEED_URL)
        let feedUrl = import.meta.env.VITE_INSTAGRAM_FEED_URL || '';

        const configRes = await fetch('/instagram-feed.json', {
          cache: 'no-cache'
        });

        let configData = null;
        if (configRes.ok) {
          configData = await configRes.json();
          if (!feedUrl && configData?.beholdFeedUrl) {
            feedUrl = configData.beholdFeedUrl.trim();
          }
        }

        // 2. If a live Behold.so / Instagram Graph JSON URL is configured, fetch the latest 4 posts from it
        if (feedUrl) {
          const liveRes = await fetch(feedUrl, { cache: 'no-cache' });
          if (liveRes.ok) {
            const liveData = await liveRes.json();
            const livePosts = normalizeFeedPayload(liveData);
            if (isMounted && livePosts.length > 0) {
              setPosts(
                livePosts.length >= 4
                  ? livePosts.slice(0, 4)
                  : [...livePosts, ...FALLBACK_POSTS].slice(0, 4)
              );
              return;
            }
          }
        }

        // 3. Otherwise use posts from /instagram-feed.json if provided
        if (configData) {
          const configPosts = normalizeFeedPayload(configData);
          if (isMounted && configPosts.length > 0) {
            setPosts(
              configPosts.length >= 4
                ? configPosts.slice(0, 4)
                : [...configPosts, ...FALLBACK_POSTS].slice(0, 4)
            );
          }
        }
      } catch {
        // Keep FALLBACK_POSTS silently if offline or unconfigured
      }
    }

    loadLiveInstagramPosts();

    // Auto-refresh every 5 minutes while page is open
    const intervalId = setInterval(loadLiveInstagramPosts, 5 * 60 * 1000);
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="nsbm-intake-section" aria-label="Atsuko Admissions & Live Instagram Showcase">
      <div className="nsbm-intake-container">
        {/* 4 Posts Row Matching Website Width (No Repeating Posts) */}
        <div className="nsbm-four-posts-row">
          {posts.map((post) => (
            <div key={post.id} className="nsbm-post-stage">
              {shouldMountIframes ? (
                <iframe
                  src={`https://www.instagram.com/${post.type || 'p'}/${post.id}/embed/`}
                  title={post.title}
                  className="nsbm-post-iframe"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media; clipboard-write;"
                  loading="lazy"
                />
              ) : (
                <div className="nsbm-post-iframe" style={{ background: '#f8fafc' }} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
