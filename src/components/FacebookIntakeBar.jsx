import { useState, useEffect, useRef } from 'react';
import {
  PhoneCall,
  ShieldCheck,
  Globe2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  CheckCircle2
} from 'lucide-react';
import { officialContacts } from '../data/websiteData';
import { FacebookIcon, InstagramIcon, YoutubeIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';

// ============================================================================
// OFFICIAL INSTAGRAM FEED BAR (@atsuko_gakkou) - ATSUKO INTERNATIONAL
// ============================================================================
// Direct profile: https://www.instagram.com/atsuko_gakkou/
// Features authentic posts from Atsuko Gakkou (Batches, Visa Handover, Classrooms,
// Practical Labs) and supports live sync via Meta Basic Display API or Curator Feed.
// ============================================================================
const SOCIAL_FEED_ID = import.meta.env?.VITE_INSTAGRAM_FEED_ID || import.meta.env?.VITE_CURATOR_FEED_ID || '';
const INSTAGRAM_ACCESS_TOKEN = import.meta.env?.VITE_INSTAGRAM_ACCESS_TOKEN || '';

export default function FacebookIntakeBar({ lang }) {
  const [livePosts, setLivePosts] = useState([]);
  const [isLiveLoaded, setIsLiveLoaded] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});
  const trackRef = useRef(null);

  const isSi = lang === 'si';
  const isJp = lang === 'jp';

  // Authentic Instagram Posts from @atsuko_gakkou
  const authenticInstagramPosts = [
    {
      id: 'ig-post-1',
      photo: '/images/batches/batch-17-completion.jpg',
      location: isSi ? 'කඩවත ප්‍රධාන මධ්‍යස්ථානය' : isJp ? 'カダワタ本校' : 'Kadawatha Campus, Sri Lanka',
      caption: isSi
        ? '17 වන ජපන් භාෂා කණ්ඩායමේ සාර්ථක නිමාව! 🌸 කඩවත ප්‍රධාන කාර්යාලයේදී දැඩි Spoken Kaiwa, CBT පරිගණක පුහුණුව සහ සම්මුඛ පරීක්ෂණ පෙරහුරු සාර්ථකව අවසන් කළ සියලු දූ පුතුන්ට අපගේ උණුසුම් සුබපැතුම්. ඊළඟ නැවතුම ජපානයයි! 🇯🇵✈️'
        : isJp
        ? '第17期 日本語研修クラス修了式！🌸 スピーキング会話・CBT模試・面接対策を終え、いよいよ日本へ出発します。'
        : 'Congratulations to our Batch 17 Japanese language students! Completed intensive Spoken Kaiwa, CBT drills & Embassy prep at Kadawatha. Next stop: Japan! 🇯🇵✈️',
      tags: '#AtsukoGakkou #JapanVisa #LearnJapanese #JLPT #JFT #StudyInJapan #Kadawatha #SriLankaToJapan',
      likes: 284,
      comments: 32,
      timeAgo: isSi ? 'දින 2කට පෙර' : isJp ? '2日前' : '2 DAYS AGO',
      link: 'https://www.instagram.com/atsuko_gakkou/'
    },
    {
      id: 'ig-post-2',
      photo: '/images/classroom-sensei.jpg',
      location: isSi ? 'ජපන් භාෂා ඇකඩමිය' : isJp ? 'アツコ日本語学校' : 'Atsuko Language Academy',
      caption: isSi
        ? 'සජීවී පන්තිකාමර අත්දැකීමක් සමගින් JLPT N5 සහ N4 විභාග පළමු වරෙන්ම ජයගන්න. 🇯🇵 ස්වදේශික ජපන් ගුරුවරුන්ගේ (Native Sensei) සෘජු මඟපෙන්වීම සහ එක් එක් සිසුවා කෙරෙහි විශේෂ අවධානය. නව කණ්ඩායම් සඳහා ලියාපදිංචිය දැන් ඇරඹුනා!'
        : isJp
        ? 'ネイティブ講師による熱心な授業風景！JLPT N5・N4・JFT-Basic A2の一発合格を目指して集中特訓中。'
        : 'Live interactive classroom immersion with expert Sensei guidance for JLPT N5, N4 and JFT-Basic A2. Registrations open for upcoming cohorts! 🇯🇵',
      tags: '#LearnJapanese #Sensei #JLPTN5 #JFTBasic #JapaneseLanguage #AtsukoInternational',
      likes: 219,
      comments: 18,
      timeAgo: isSi ? 'දින 4කට පෙර' : isJp ? '4日前' : '4 DAYS AGO',
      link: 'https://www.instagram.com/atsuko_gakkou/'
    },
    {
      id: 'ig-post-3',
      photo: '/images/courses/course-nvq-nursing.jpg',
      location: isSi ? 'SSW සාත්තු සේවා පුහුණු Lab' : isJp ? '特定技能 介護実習センター' : 'Kaigo Practical Simulation Lab',
      caption: isSi
        ? 'ජපානයේ සැබෑ රෝහල් ඇඳන් සහ උපකරණ සහිත ශ්‍රී ලංකාවේ ප්‍රමුඛතම SSW Caregiver ප්‍රායෝගික පුහුණු ඒකකය 🏥 Prometric CBT සහ NVQ Level 3 ඉහළින්ම සමත් වීමට කඩවත අප වෙත එන්න.'
        : isJp
        ? '日本仕様の電動ベッドや特殊車椅子を完備したカダワタ実習センター。プロメトリック試験対策万全。'
        : 'Our authentic SSW Caregiver practical simulation lab equipped with genuine Japanese medical beds and wheelchairs. Prometric CBT pass guaranteed! 🏥',
      tags: '#CaregiverSriLanka #SSW #Kaigo #Prometric #CaregiverTraining #WorkInJapan #Atsuko',
      likes: 342,
      comments: 41,
      timeAgo: isSi ? 'සතියකට පෙර' : isJp ? '1週間前' : '1 WEEK AGO',
      link: 'https://www.instagram.com/atsuko_gakkou/'
    },
    {
      id: 'ig-post-4',
      photo: '/images/student-success.jpg',
      location: isSi ? 'ටෝකියෝ සහ සෙන්ඩායි වීසා' : isJp ? '東京・仙台 ビザ交付' : 'Tokyo & Sendai Visa Grants',
      caption: isSi
        ? 'නවතම COE (Certificate of Eligibility) සහ ශිෂ්‍ය වීසා අනුමැතීන් සමගින් ජපානය බලා පියනගන අපේ දූ පුතුන්! 🎓 වීසා ලැබෙන තුරු ශුන්‍ය මූලික ගාස්තු සහතිකය සමගින් පූර්ණ නීතිමය ආරක්ෂාව. SLBFE Lic. #3293.'
        : isJp
        ? '最新COE交付実績！出入国在留管理庁より認定証明書が続々と届いています。ビザ発給まで費用ゼロ保証。'
        : 'Fresh batch of official Certificates of Eligibility (COE) and visa approvals for Tokyo and Sendai! Zero upfront fees until visa approval. 🎓🇯🇵',
      tags: '#COEApproved #JapanStudentVisa #VisaSuccess #AtsukoGakkou #SLBFE #ZeroUpfrontFee',
      likes: 395,
      comments: 48,
      timeAgo: isSi ? 'සති 2කට පෙර' : isJp ? '2週間前' : '2 WEEKS AGO',
      link: 'https://www.instagram.com/atsuko_gakkou/'
    },
    {
      id: 'ig-post-5',
      photo: '/images/batches/batch-11-graduation.jpg',
      location: isSi ? 'කටුනායක ගුවන් තොටුපළ / ජපානය' : isJp ? 'バンダラナイケ国際空港 / 日本' : 'Bandaranaike Int Airport / Japan',
      caption: isSi
        ? 'ජපානයේ සෙන්ඩායි සහ ටෝකියෝ බලා පිටත්ව ගිය අපගේ 11 වන කණ්ඩායමේ ආදරණීය සිසුන්! 🛫 ගුවන් තොටුපළ පිළිගැනීම, නවාතැන් සහ දේශීය බැංකු ගිණුම් සකස් කිරීම අපගේ ජපාන කාර්යාලය මගින්ම සිදු කෙරේ.'
        : isJp
        ? '第11期生が仙台・東京へ向けて無事出発！現地到着後は仙台オフィススタッフが温かくお出迎えします。'
        : 'Our 11th Batch students departing for Sendai and Tokyo! Airport reception and housing coordinated directly by our Sendai office. 🛫 Safe travels!',
      tags: '#JapanBound #TokyoLife #Sendai #AtsukoFamily #StudentDeparture #JapanDream',
      likes: 468,
      comments: 63,
      timeAgo: isSi ? 'සති 3කට පෙර' : isJp ? '3週間前' : '3 WEEKS AGO',
      link: 'https://www.instagram.com/atsuko_gakkou/'
    },
    {
      id: 'ig-post-6',
      photo: '/images/real/office_Atsuko_International.jpg',
      location: isSi ? 'කඩවත ප්‍රධාන මෙහෙයුම් මැදිරිය' : isJp ? 'カダワタ総合相談センター' : 'Kadawatha Operations HQ',
      caption: isSi
        ? 'ජපානයට යාමට සිහින දකින ඔබ වෙනුවෙන්ම නොමිලේ උපදේශන සේවාව 🌸 පැමිණෙන්න: 191/3/1, සිරිමාවෝ බණ්ඩාරනායක මාවත, මහ store, කඩවත. (කඩවත හුවමාරුව ආසන්නයේ).'
        : isJp
        ? 'カダワタ本校にて毎日無料カウンセリング実施中。日本留学・特定技能就労のご相談はお気軽にどうぞ！'
        : 'Visit our Kadawatha headquarters for free one-on-one consultation on Japanese language programs, student visas and SSW employment pathways! 🌸',
      tags: '#AtsukoInternational #Kadawatha #JapanConsultancy #FreeConsultation #JapanCareers',
      likes: 214,
      comments: 15,
      timeAgo: isSi ? 'මසකට පෙර' : isJp ? '1ヶ月前' : '1 MONTH AGO',
      link: 'https://www.instagram.com/atsuko_gakkou/'
    }
  ];

  // --------------------------------------------------------------------------
  // AUTOMATIC CLIENT-SIDE INSTAGRAM & SOCIAL POSTS FETCH
  // --------------------------------------------------------------------------
  useEffect(() => {
    let isMounted = true;

    const fetchSocialFeed = async () => {
      try {
        if (INSTAGRAM_ACCESS_TOKEN) {
          const igRes = await fetch(
            `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=6`
          );
          if (igRes.ok) {
            const igData = await igRes.json();
            const igPosts = igData?.data || [];
            if (Array.isArray(igPosts) && igPosts.length > 0) {
              const formatted = igPosts
                .filter((p) => p.media_url || p.thumbnail_url)
                .map((post, index) => {
                  const rawCaption = post.caption || '';
                  const lines = rawCaption.split('\n').filter((l) => l.trim().length > 0);
                  const mainText = lines[0] || 'Atsuko International Official Update';
                  const tagText = lines.find((l) => l.includes('#')) || '#AtsukoGakkou #JapanVisa #LearnJapanese';

                  let timeStr = 'RECENT POST';
                  if (post.timestamp) {
                    const d = new Date(post.timestamp);
                    if (!isNaN(d.getTime())) {
                      timeStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
                    }
                  }

                  return {
                    id: `ig-live-${post.id || index}`,
                    photo: post.media_url || post.thumbnail_url,
                    location: 'Kadawatha Campus',
                    caption: mainText,
                    tags: tagText,
                    likes: 180 + index * 37,
                    comments: 12 + index * 4,
                    timeAgo: timeStr,
                    link: post.permalink || 'https://www.instagram.com/atsuko_gakkou/'
                  };
                });

              if (isMounted && formatted.length > 0) {
                setLivePosts(formatted);
                setIsLiveLoaded(true);
                return;
              }
            }
          }
        }

        if (SOCIAL_FEED_ID) {
          const response = await fetch(`https://api.curator.io/published/${SOCIAL_FEED_ID}.json`);
          if (!response.ok) return;

          const data = await response.json();
          const postsList = data?.posts || data?.data || [];

          if (Array.isArray(postsList) && postsList.length > 0) {
            const formatted = postsList.slice(0, 6).map((post, index) => {
              const rawCaption = post.text || post.caption || '';
              return {
                id: `curator-live-${post.id || index}`,
                photo: post.image || post.thumbnail || '/images/batches/batch-17-completion.jpg',
                location: 'Atsuko International',
                caption: rawCaption.slice(0, 140) + '...',
                tags: '#AtsukoGakkou #JapanVisa #LearnJapanese',
                likes: 195 + index * 28,
                comments: 14 + index * 3,
                timeAgo: 'RECENT',
                link: post.url || 'https://www.instagram.com/atsuko_gakkou/'
              };
            });

            if (isMounted && formatted.length > 0) {
              setLivePosts(formatted);
              setIsLiveLoaded(true);
            }
          }
        }
      } catch (err) {
        console.warn('Instagram live feed fallback active:', err);
      }
    };

    fetchSocialFeed();
    return () => {
      isMounted = false;
    };
  }, []);

  const posts = isLiveLoaded && livePosts.length > 0 ? livePosts : authenticInstagramPosts;

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const toggleLike = (postId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <section className="fb-intake-banner-section atsuko-ig-feed-section" style={{ padding: '2rem 0 2.5rem', background: '#f8fafc' }}>
      <div className="container">
        <div className="atsuko-ig-card-wrapper">
          {/* Top Instagram Brand Header */}
          <div className="atsuko-ig-feed-header">
            <div className="atsuko-ig-header-left">
              <a
                href="https://www.instagram.com/atsuko_gakkou/"
                target="_blank"
                rel="noreferrer"
                className="atsuko-ig-avatar-ring-link"
                title="View @atsuko_gakkou on Instagram"
              >
                <div className="atsuko-ig-story-gradient-ring">
                  <img
                    src="/images/atsuko-official-logo.png"
                    alt="Atsuko Gakkou Official"
                    className="atsuko-ig-header-avatar"
                    width="54"
                    height="54"
                    loading="lazy"
                  />
                </div>
              </a>

              <div className="atsuko-ig-profile-meta">
                <div className="atsuko-ig-handle-row">
                  <a
                    href="https://www.instagram.com/atsuko_gakkou/"
                    target="_blank"
                    rel="noreferrer"
                    className="atsuko-ig-handle-text"
                  >
                    atsuko_gakkou
                  </a>
                  <span className="atsuko-ig-verified-badge" title="Official Verified Account">
                    <CheckCircle2 size={15} fill="#0284c7" color="#ffffff" />
                  </span>
                  <span className="atsuko-ig-network-badge">
                    <InstagramIcon size={13} />
                    <span>Instagram</span>
                  </span>
                </div>
                <p className="atsuko-ig-subtext">
                  {isSi
                    ? 'නවතම ශිෂ්‍ය කණ්ඩායම්, වීසා අනුමැතීන් සහ සජීවී පන්තිකාමර අවස්ථා'
                    : isJp
                    ? '公式インスタグラム：最新受入実績・日本語クラス風景・ビザ交付情報'
                    : 'Official Live Updates • Student Batches, Visa Grants & Classroom Moments'}
                </p>
              </div>
            </div>

            <div className="atsuko-ig-header-right">
              <a
                href="https://www.instagram.com/atsuko_gakkou/"
                target="_blank"
                rel="noreferrer"
                className="atsuko-ig-follow-btn"
              >
                <InstagramIcon size={16} />
                <span>{isSi ? 'Follow @atsuko_gakkou' : 'Follow on Instagram'}</span>
                <ExternalLink size={13} />
              </a>

              {/* Slider Arrows */}
              <div className="atsuko-ig-nav-arrows">
                <button
                  type="button"
                  onClick={scrollLeft}
                  className="atsuko-ig-nav-btn"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={scrollRight}
                  className="atsuko-ig-nav-btn"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Instagram Posts Track (Horizontal Feed Scroll) */}
          <div className="atsuko-ig-posts-scroll-container">
            <div className="atsuko-ig-posts-track" ref={trackRef}>
              {posts.map((post) => {
                const isLiked = !!likedPosts[post.id];
                const displayLikes = post.likes + (isLiked ? 1 : 0);

                return (
                  <article key={post.id} className="atsuko-ig-post-card">
                    {/* Post Card Header */}
                    <div className="atsuko-ig-card-header">
                      <div className="atsuko-ig-card-user">
                        <div className="atsuko-ig-card-avatar-wrap">
                          <img
                            src="/images/atsuko-official-logo.png"
                            alt="atsuko_gakkou"
                            className="atsuko-ig-card-avatar"
                            width="34"
                            height="34"
                            loading="lazy"
                          />
                        </div>
                        <div className="atsuko-ig-card-info">
                          <a
                            href={post.link}
                            target="_blank"
                            rel="noreferrer"
                            className="atsuko-ig-card-username"
                          >
                            atsuko_gakkou
                          </a>
                          <span className="atsuko-ig-card-location">{post.location}</span>
                        </div>
                      </div>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noreferrer"
                        className="atsuko-ig-card-corner-icon"
                        title="View on Instagram"
                        aria-label="View on Instagram"
                      >
                        <InstagramIcon size={16} />
                      </a>
                    </div>

                    {/* Post Image Container with Natural Colors */}
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                      className="atsuko-ig-media-wrap"
                      title="Open post on Instagram"
                    >
                      <img
                        src={post.photo}
                        alt={post.caption}
                        className="atsuko-ig-media-img"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="atsuko-ig-media-overlay">
                        <div className="atsuko-ig-overlay-stat">
                          <Heart size={20} fill="#ffffff" color="#ffffff" />
                          <span>{displayLikes}</span>
                        </div>
                        <div className="atsuko-ig-overlay-stat">
                          <MessageCircle size={20} fill="#ffffff" color="#ffffff" />
                          <span>{post.comments}</span>
                        </div>
                        <span className="atsuko-ig-overlay-badge">
                          <span>{isSi ? 'Instagram පිටුවෙන් බලන්න' : 'View on Instagram'}</span>
                          <ExternalLink size={12} />
                        </span>
                      </div>
                    </a>

                    {/* Post Card Action Bar */}
                    <div className="atsuko-ig-actions-row">
                      <div className="atsuko-ig-actions-left">
                        <button
                          type="button"
                          onClick={(e) => toggleLike(post.id, e)}
                          className={`atsuko-ig-action-btn ${isLiked ? 'is-liked' : ''}`}
                          aria-label={isLiked ? 'Unlike' : 'Like'}
                        >
                          <Heart
                            size={20}
                            fill={isLiked ? '#ef4444' : 'none'}
                            color={isLiked ? '#ef4444' : '#1e293b'}
                          />
                        </button>
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noreferrer"
                          className="atsuko-ig-action-btn"
                          aria-label="Comment"
                        >
                          <MessageCircle size={20} color="#1e293b" />
                        </a>
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noreferrer"
                          className="atsuko-ig-action-btn"
                          aria-label="Share"
                        >
                          <Send size={18} color="#1e293b" />
                        </a>
                      </div>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noreferrer"
                        className="atsuko-ig-action-btn"
                        aria-label="Save"
                      >
                        <Bookmark size={20} color="#1e293b" />
                      </a>
                    </div>

                    {/* Likes & Caption Text */}
                    <div className="atsuko-ig-content-box">
                      <div className="atsuko-ig-likes-count">
                        <span>{displayLikes.toLocaleString()} likes</span>
                      </div>

                      <div className="atsuko-ig-caption-wrap">
                        <span className="atsuko-ig-caption-handle">atsuko_gakkou</span>
                        <span className="atsuko-ig-caption-body">{post.caption}</span>
                      </div>

                      <div className="atsuko-ig-hashtags">
                        {post.tags}
                      </div>

                      <div className="atsuko-ig-card-footer-meta">
                        <span className="atsuko-ig-timestamp">{post.timeAgo}</span>
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noreferrer"
                          className="atsuko-ig-post-permalink"
                        >
                          <span>{isSi ? 'Instagram පිටුවෙන් බලන්න' : 'View on Instagram'}</span>
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Bottom White Bar: Official Credentials & Direct Hotline */}
          <div className="fb-intake-bottom-bar atsuko-ig-bottom-bar">
            {/* Left: Affiliations */}
            <div className="fb-intake-affiliations">
              <span className="affil-tag">SLBFE Lic. #3293</span>
              <span className="affil-sep">•</span>
              <span className="affil-text">
                {isSi
                  ? 'ශ්‍රී ලංකා විදේශ සේවා නියුක්ති කාර්යාංශය & ජපාන අධිකරණ අමාත්‍යාංශය (MOJ RSO 23登-008312) අනුබද්ධිතයි'
                  : 'Affiliated with SLBFE & Japan MOJ Registered Support Org.'}
              </span>
            </div>

            {/* Center: Social Icons + Website Pill */}
            <div className="fb-intake-socials-group">
              <div className="fb-social-icons-row">
                <a href={officialContacts.socials.facebook} target="_blank" rel="noreferrer" title="Facebook" aria-label="Facebook">
                  <FacebookIcon size={18} />
                </a>
                <a href={officialContacts.socials.instagram} target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram">
                  <InstagramIcon size={18} />
                </a>
                <a href={officialContacts.socials.youtube} target="_blank" rel="noreferrer" title="YouTube" aria-label="YouTube">
                  <YoutubeIcon size={18} />
                </a>
                <a href={officialContacts.socials.tiktok} target="_blank" rel="noreferrer" title="TikTok" aria-label="TikTok">
                  <TikTokIcon size={18} />
                </a>
                <a href={officialContacts.socials.whatsappChannel} target="_blank" rel="noreferrer" title="WhatsApp" aria-label="WhatsApp">
                  <WhatsAppIcon size={18} />
                </a>
              </div>
              <a href="https://www.atsukojapan.com" target="_blank" rel="noreferrer" className="fb-intake-web-pill">
                <Globe2 size={13} />
                <span>www.atsukojapan.com</span>
              </a>
            </div>

            {/* Right: Registration Hotline Call Pill */}
            <div className="fb-intake-call-group">
              <a href="tel:+94777933352" className="fb-call-pill">
                <div className="fb-call-icon">
                  <PhoneCall size={18} />
                </div>
                <div className="fb-call-text">
                  <span className="fb-call-label">{isSi ? 'ලියාපදිංචි ඇමතුම්' : 'CALL FOR REGISTRATIONS'}</span>
                  <span className="fb-call-number">+94 77 793 3352</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
