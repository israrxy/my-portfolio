import React, { useState } from 'react';

interface MobileAppsStoreProps {
  onBackToPortfolio: () => void;
  initialApp?: 'zenim' | 'raazi' | null;
  initialSearch?: string;
  onSelectApp?: (app: 'zenim' | 'raazi' | null) => void;
}

type AppId = 'zenim' | 'raazi';

interface AppStoreListing {
  id: AppId;
  name: string;
  shortName: string;
  developer: string;
  category: string;
  tagline: string;
  version: string;
  versionCode: string;
  size: string;
  minAndroid: string;
  license: string;
  accentColor: string;
  iconType: 'image' | 'flower';
  iconSrc?: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  sourceUrl: string;
  whatsNewDate: string;
  whatsNewTitle: string;
  whatsNewBullets: string[];
  aboutDescription: string;
  highlights: { title: string; detail: string }[];
  techSpecs: { label: string; value: string }[];
  screenshots: { label: string; caption: string; src: string; fallbackUrl?: string }[];
}

const STORE_APPS: Record<AppId, AppStoreListing> = {
  raazi: {
    id: 'raazi',
    name: 'Raazi Music Player',
    shortName: 'Raazi Music',
    developer: 'Md Israr Ahamed',
    category: 'Music & Audio',
    tagline: 'Ad-free YouTube Music, SoundCloud & Bandcamp player built with Jetpack Compose.',
    version: 'v6.0.0',
    versionCode: '8',
    size: '18.5 MB',
    minAndroid: 'Android 8.0+',
    license: 'GPL-3.0 Open Source',
    accentColor: 'indigo',
    iconType: 'image',
    iconSrc: '/assets/raazi/Raazi.png',
    primaryCtaLabel: 'Get App (Uptodown)',
    primaryCtaUrl: 'https://raazi-music-player.en.uptodown.com/android',
    secondaryCtaLabel: 'Direct Download (raazi.pages.dev)',
    secondaryCtaUrl: 'https://raazi.pages.dev',
    sourceUrl: 'https://github.com/israrxy/Raazi',
    whatsNewDate: 'Oct 23, 2026',
    whatsNewTitle: 'v6.0.0 — Queue overhaul, lyrics polish & playback clean-up',
    whatsNewBullets: [
      'Playing a song from search now starts a fresh single-track session instead of flooding your queue.',
      'Stable (non-shuffle) mode behaves like a strict ordered playlist with radio suggestions hidden.',
      'Shuffle mode keeps YouTube-style Up Next suggestions with your custom queue underneath.',
      'Restored dedicated Shuffle & Repeat buttons and removed deprecated video toggle.',
      'Fixed synced lyrics parser for [mm:ss] timestamps and auto-centered the active lyric line.',
      'Inlined the playback resolution stack into the APK for smaller installs and forward-upgrade compatibility.'
    ],
    aboutDescription:
      'Raazi is a modern, privacy-focused open-source Android music player built with Jetpack Compose and Kotlin. It extracts high-quality audio directly from YouTube Music, SoundCloud, and Bandcamp with zero ads, zero tracking, and no account required.',
    highlights: [
      {
        title: 'Privacy-First & Ad-Free',
        detail: 'No login, no telemetry, and uninterrupted background audio playback with screen off.'
      },
      {
        title: 'Smart Home Feed & 150ms Search',
        detail: 'Time-based greeting feed (Keep Listening, Quick Picks, Forgotten Favorites) + 50-entry LRU search cache.'
      },
      {
        title: 'Synced Lyrics & Ringtone Trimmer',
        detail: 'Real-time centered synced lyrics, Spotify playlist import, and built-in audio ringtone trimmer.'
      },
      {
        title: 'Crash-Safe Clean Architecture',
        detail: 'Powered by AndroidX Media3 (ExoPlayer), inlined NewPipeExtractor, Room DB, and Kotlin Coroutines/Flow.'
      }
    ],
    techSpecs: [
      { label: 'Version', value: '6.0.0 (Code 8)' },
      { label: 'Engine', value: 'NewPipeExtractor + Media3' },
      { label: 'UI Toolkit', value: 'Jetpack Compose (M3)' },
      { label: 'Database', value: 'Room + 50-Item LRU' },
      { label: 'License', value: 'GNU GPL v3.0' },
      { label: 'Repository', value: 'israrxy/Raazi' }
    ],
    screenshots: []
  },
  zenim: {
    id: 'zenim',
    name: 'Zenim — Torrent Streamer',
    shortName: 'Zenim 🌸',
    developer: 'Md Israr Ahamed',
    category: 'Video Players & Tools',
    tagline: 'A calm, pretty torrent client for Android — search, download, and stream in-app.',
    version: 'v1.1.0',
    versionCode: '2',
    size: '59.9 MB',
    minAndroid: 'Android 7.0+ (API 24–36)',
    license: 'Open Release Repo',
    accentColor: 'rose',
    iconType: 'flower',
    primaryCtaLabel: 'Install APK (v1.1.0)',
    primaryCtaUrl: 'https://github.com/israrxy/zenim-android/releases/download/v1.1.0/zenim-v1.1.0.apk',
    secondaryCtaLabel: 'All Releases',
    secondaryCtaUrl: 'https://github.com/israrxy/zenim-android/releases/latest',
    sourceUrl: 'https://github.com/israrxy/zenim-android',
    whatsNewDate: 'Oct 22, 2026',
    whatsNewTitle: 'v1.1.0 — First-run HyperOS permission fix & hardened OTA updater',
    whatsNewBullets: [
      'Fixed first-run "All files access" setup screen bouncing/flickering on HyperOS and Android 14+ devices.',
      'Added calm retry card with "Open app details instead" escape hatch if system permission screen misbehaves.',
      'Hardened in-app updater.js manifest parser and enabled direct installs straight from Chrome.',
      'Same signing key as v1.0.0 — installs cleanly over existing builds without uninstalling.'
    ],
    aboutDescription:
      'Zenim is a calm, expressive torrent client for Android that lets you search, download, and stream video or audio torrents before the download finishes. Built with Jetpack Compose and Material 3 Expressive around a soft rose palette (plus Violet, Blue, Green, Amber, and AMOLED dark mode).',
    highlights: [
      {
        title: 'Stream While Downloading',
        detail: 'Priority piece fetching + local HTTP range server feeds the built-in Media3 ExoPlayer immediately.'
      },
      {
        title: 'Live Search & Category Filters',
        detail: 'Search torrents with sort modes, category tabs (Movies, TV, Audio, Files), seed info, and magnet/torrent actions.'
      },
      {
        title: 'Granular Download Control',
        detail: 'Pause, resume, recheck, cherry-pick individual files, sequential mode, and bandwidth/connection limits.'
      },
      {
        title: 'Poster Library & Streaming Bar',
        detail: '2-column auto-thumbnail media grid, built-in player (speed, 10s skip, captions), and persistent phone-style streaming bar.'
      }
    ],
    techSpecs: [
      { label: 'Version', value: '1.1.0 (Code 2)' },
      { label: 'Core Engine', value: 'libtorrent4j (Native)' },
      { label: 'Player', value: 'Media3 ExoPlayer + Range Server' },
      { label: 'UI Design', value: 'Material 3 Expressive (5 Palettes)' },
      { label: 'Target SDK', value: 'API 24 – API 36' },
      { label: 'Repository', value: 'israrxy/zenim-android' }
    ],
    screenshots: [
      {
        label: 'Live Search',
        caption: 'Search results with Stream & Download buttons, quality tags, and category filters.',
        src: '/assets/zenim/search.jpeg',
        fallbackUrl: 'https://raw.githubusercontent.com/israrxy/zenim-android/main/screenshots/search.jpeg'
      },
      {
        label: 'Downloads Engine',
        caption: 'Active & finished torrents with speed limits, file picker, and sequential streaming mode.',
        src: '/assets/zenim/downloads.jpeg',
        fallbackUrl: 'https://raw.githubusercontent.com/israrxy/zenim-android/main/screenshots/downloads.jpeg'
      },
      {
        label: 'Media Library',
        caption: '2-column poster grid with auto thumbnails and one-tap playback in Media3 ExoPlayer.',
        src: '/assets/zenim/library.jpeg',
        fallbackUrl: 'https://raw.githubusercontent.com/israrxy/zenim-android/main/screenshots/library.jpeg'
      }
    ]
  }
};

const MobileAppsStore: React.FC<MobileAppsStoreProps> = ({ onBackToPortfolio, initialApp = null }) => {
  const [selectedApp, setSelectedApp] = useState<AppId | null>(initialApp);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'music' | 'video'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [fullscreenShot, setFullscreenShot] = useState<{ src: string; label: string } | null>(null);

  const currentApp = selectedApp ? STORE_APPS[selectedApp] : null;

  // Filtered apps for Store Home
  const visibleApps = (Object.values(STORE_APPS) as AppStoreListing[]).filter((app) => {
    if (categoryFilter === 'music' && app.id !== 'raazi') return false;
    if (categoryFilter === 'video' && app.id !== 'zenim') return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        app.name.toLowerCase().includes(q) ||
        app.tagline.toLowerCase().includes(q) ||
        app.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // ============================================================================
  // VIEW 2: PLAY STORE APP DETAIL PAGE
  // ============================================================================
  if (currentApp) {
    const isRose = currentApp.id === 'zenim';
    return (
      <div className="min-h-screen bg-[#0b0c10] text-white pb-28 pt-16 md:pt-24">
        {/* Sticky Play Store Detail App Bar */}
        <div className="sticky top-14 md:top-20 z-30 bg-[#0b0c10]/90 backdrop-blur-xl border-b border-white/10 px-4 py-3">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => handleChooseApp(null)}
              className="min-h-[44px] px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 text-xs font-mono font-bold text-slate-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <span>All Apps</span>
            </button>

            <span className="text-sm font-bold truncate">{currentApp.name}</span>

            <a
              href={currentApp.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5 text-xs font-mono font-bold text-slate-300"
            >
              <span>GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 space-y-8">
          {/* Play Store Header Block (Icon + Title + Developer) */}
          <div className="flex items-start gap-4 sm:gap-6">
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-3xl shrink-0 flex items-center justify-center overflow-hidden border shadow-xl ${
                isRose
                  ? 'bg-gradient-to-br from-rose-500/20 to-rose-950/60 border-rose-400/30'
                  : 'bg-[#141722] border-indigo-500/30 p-3'
              }`}
            >
              {currentApp.iconType === 'image' ? (
                <img
                  src={currentApp.iconSrc}
                  alt={currentApp.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://raw.githubusercontent.com/israrxy/Raazi/main/Raazi.png';
                  }}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-4xl sm:text-5xl select-none" role="img" aria-label="Zenim">
                  🌸
                </span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                {currentApp.name}
              </h1>
              <p className={`text-xs sm:text-sm font-semibold mt-1 ${isRose ? 'text-rose-400' : 'text-indigo-400'}`}>
                {currentApp.developer}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {currentApp.category} · Ad-Free · Open Source
              </p>
            </div>
          </div>

          {/* Play Store 4-Column Metric Strip */}
          <div className="grid grid-cols-4 divide-x divide-white/10 bg-[#13151d] border border-white/10 rounded-2xl py-3.5 text-center font-mono">
            <div className="px-2">
              <div className="text-xs sm:text-sm font-bold text-white tabular-nums">{currentApp.version}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Release</div>
            </div>
            <div className="px-2">
              <div className="text-xs sm:text-sm font-bold text-white tabular-nums">{currentApp.size}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">APK Size</div>
            </div>
            <div className="px-2">
              <div className="text-xs sm:text-sm font-bold text-white tabular-nums">{currentApp.minAndroid.split(' ')[1]}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Android</div>
            </div>
            <div className="px-2">
              <div className="text-xs sm:text-sm font-bold text-emerald-400">Verified</div>
              <div className="text-[10px] text-slate-400 mt-0.5">No Ads</div>
            </div>
          </div>

          {/* Primary & Secondary Install Buttons (Play Store Full-Width Pill Style) */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={currentApp.primaryCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`min-h-[48px] flex-1 rounded-full font-bold text-sm sm:text-base px-6 py-3 flex items-center justify-center gap-2 transition-colors shadow-lg ${
                isRose
                  ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/20'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
              }`}
            >
              <span>{currentApp.primaryCtaLabel}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
            </a>

            {currentApp.secondaryCtaUrl && (
              <a
                href={currentApp.secondaryCtaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] flex-1 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm sm:text-base px-6 py-3 flex items-center justify-center gap-2 transition-colors"
              >
                <span>{currentApp.secondaryCtaLabel}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                </svg>
              </a>
            )}
          </div>

          {/* Horizontal Screenshot / Preview Shelf */}
          {currentApp.screenshots.length > 0 ? (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold text-white">Screenshots & Previews</h2>
                <span className="text-xs font-mono text-slate-400">Tap to zoom</span>
              </div>
              <div className="flex gap-3.5 overflow-x-auto pb-3 snap-x snap-mandatory">
                {currentApp.screenshots.map((shot) => (
                  <button
                    key={shot.label}
                    type="button"
                    onClick={() => setFullscreenShot({ src: shot.src, label: `${currentApp.shortName} — ${shot.label}` })}
                    className="snap-start shrink-0 w-44 sm:w-56 rounded-2xl overflow-hidden border border-white/15 bg-black/50 text-left group focus:outline-none hover:border-rose-400 transition-all"
                  >
                    <div className="aspect-[9/19] w-full overflow-hidden relative">
                      <img
                        src={shot.src}
                        alt={shot.label}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          if (shot.fallbackUrl && e.currentTarget.src !== shot.fallbackUrl) {
                            e.currentTarget.src = shot.fallbackUrl;
                          }
                        }}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform"
                      />
                    </div>
                    <div className="p-2.5 bg-[#14151c] border-t border-white/10">
                      <div className="text-xs font-bold text-white truncate">{shot.label}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">{shot.caption}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Interactive Feature Preview Cards for Raazi Music */
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold text-white">App Experience Preview</h2>
                <span className="text-xs font-mono text-indigo-400">Material 3 + Media3</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="rounded-2xl bg-gradient-to-br from-indigo-950/60 to-[#13151d] border border-indigo-500/25 p-4 flex flex-col justify-between min-h-[160px]">
                  <div className="text-xs font-mono text-indigo-300 font-bold">01 · Home Feed (v4.5+)</div>
                  <div>
                    <div className="text-base font-bold text-white mb-1">Time-Based Greeting</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Keep Listening resume card, Quick Picks 2-column grid, Forgotten Favorites, and smart local ranking.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-indigo-950/60 to-[#13151d] border border-indigo-500/25 p-4 flex flex-col justify-between min-h-[160px]">
                  <div className="text-xs font-mono text-indigo-300 font-bold">02 · Smart Queue (v6.0)</div>
                  <div>
                    <div className="text-base font-bold text-white mb-1">Single-Track & Ordered</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Playing from search starts a clean session; non-shuffle follows strict playlist order without clutter.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-indigo-950/60 to-[#13151d] border border-indigo-500/25 p-4 flex flex-col justify-between min-h-[160px]">
                  <div className="text-xs font-mono text-indigo-300 font-bold">03 · Synced Lyrics</div>
                  <div>
                    <div className="text-base font-bold text-white mb-1">Auto-Centered Lines</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Parses both fractional and [mm:ss] timestamps and centers the active lyric line smoothly as music plays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Play Store "What's New" Card */}
          <div className="rounded-2xl bg-[#13151d] border border-white/10 p-5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-base font-bold text-white">What's new</h2>
              <span className="text-xs font-mono text-slate-400">Updated {currentApp.whatsNewDate}</span>
            </div>
            <div className={`text-xs font-mono font-bold mb-3 ${isRose ? 'text-rose-400' : 'text-indigo-400'}`}>
              {currentApp.whatsNewTitle}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentApp.whatsNewBullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-slate-500 font-mono">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* About This App + Highlights */}
          <div className="rounded-2xl bg-[#13151d] border border-white/10 p-5 space-y-5">
            <div>
              <h2 className="text-base font-bold text-white mb-2">About this app</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentApp.aboutDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentApp.highlights.map((feat) => (
                <div key={feat.title} className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-xs font-bold text-white mb-1">{feat.title}</div>
                  <p className="text-xs text-slate-400 leading-snug">{feat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Information Table */}
          <div className="rounded-2xl bg-[#13151d] border border-white/10 p-5">
            <h2 className="text-base font-bold text-white mb-4">App info & technical specs</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {currentApp.techSpecs.map((spec) => (
                <div key={spec.label}>
                  <div className="text-[11px] font-mono text-slate-400">{spec.label}</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox for Screenshots */}
        {fullscreenShot && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setFullscreenShot(null)}
          >
            <div
              className="max-w-sm w-full bg-[#14151c] border border-white/15 rounded-3xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-white truncate">{fullscreenShot.label}</span>
                <button
                  type="button"
                  onClick={() => setFullscreenShot(null)}
                  className="min-h-[36px] min-w-[36px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm font-bold"
                >
                  ✕
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden bg-black flex justify-center max-h-[75vh]">
                <img
                  src={fullscreenShot.src}
                  alt={fullscreenShot.label}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ============================================================================
  // VIEW 1: PLAY STORE HOME HUB (FEATURED + CHARTS + SCREENSHOTS)
  // ============================================================================
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white pb-28 pt-20 md:pt-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Top Store Search & Back Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBackToPortfolio}
              className="min-h-[44px] px-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 text-xs font-mono font-bold text-slate-300 shrink-0 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <span>Portfolio</span>
            </button>
            <div>
              <h1 className="syne text-xl sm:text-2xl font-black tracking-tight uppercase">
                ISRAR <span className="text-indigo-500">APP STORE</span>
              </h1>
              <p className="text-[11px] font-mono text-slate-400">
                Official Android Releases · Verified APKs
              </p>
            </div>
          </div>

          {/* Play Store Search Input */}
          <div className="relative flex-1 max-w-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Raazi Music or Zenim..."
              className="w-full min-h-[44px] bg-[#141620] border border-white/10 focus:border-indigo-500 rounded-full pl-10 pr-4 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            >
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setCategoryFilter('all')}
            className={`min-h-[40px] px-4 rounded-full text-xs font-mono font-bold transition-colors whitespace-nowrap shrink-0 ${
              categoryFilter === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-[#141620] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            For You (All Apps)
          </button>
          <button
            type="button"
            onClick={() => setCategoryFilter('music')}
            className={`min-h-[40px] px-4 rounded-full text-xs font-mono font-bold transition-colors whitespace-nowrap shrink-0 ${
              categoryFilter === 'music'
                ? 'bg-indigo-600 text-white'
                : 'bg-[#141620] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            Music & Audio
          </button>
          <button
            type="button"
            onClick={() => setCategoryFilter('video')}
            className={`min-h-[40px] px-4 rounded-full text-xs font-mono font-bold transition-colors whitespace-nowrap shrink-0 ${
              categoryFilter === 'video'
                ? 'bg-rose-600 text-white'
                : 'bg-[#141620] text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            Torrent & Video Streamers
          </button>
        </div>

        {/* Featured Spotlight Banner (Play Store Hero Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Raazi Featured Banner */}
          {(categoryFilter === 'all' || categoryFilter === 'music') && (
            <div
              onClick={() => handleChooseApp('raazi')}
              className="cursor-pointer group rounded-3xl bg-gradient-to-br from-indigo-950/80 via-[#131624] to-[#0f1016] border border-indigo-500/30 p-5 sm:p-6 flex flex-col justify-between hover:border-indigo-400 transition-all"
            >
              <div>
                <div className="text-[11px] font-mono font-bold text-indigo-400 uppercase tracking-wider mb-2">
                  Featured Release · v6.0.0 Update
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/10 p-2.5 shrink-0">
                    <img
                      src="/assets/raazi/Raazi.png"
                      alt="Raazi Music"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      Raazi Music Player
                    </h2>
                    <p className="text-xs text-slate-400">YouTube Music, SoundCloud & Bandcamp</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Queue overhaul, centered synced lyrics, Spotify playlist import, and ad-free background streaming with Media3 ExoPlayer.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
                <a
                  href="https://raazi-music-player.en.uptodown.com/android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[42px] px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>Get App</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                  </svg>
                </a>
                <a
                  href="https://raazi.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[42px] px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>Direct Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedApp('raazi')}
                  className="min-h-[42px] ml-auto px-3 text-xs font-mono font-bold text-indigo-300 hover:text-white"
                >
                  Details →
                </button>
              </div>
            </div>
          )}

          {/* Zenim Featured Banner */}
          {(categoryFilter === 'all' || categoryFilter === 'video') && (
            <div
              onClick={() => setSelectedApp('zenim')}
              className="cursor-pointer group rounded-3xl bg-gradient-to-br from-rose-950/70 via-[#1a1217] to-[#0f1016] border border-rose-500/30 p-5 sm:p-6 flex flex-col justify-between hover:border-rose-400 transition-all"
            >
              <div>
                <div className="text-[11px] font-mono font-bold text-rose-400 uppercase tracking-wider mb-2">
                  New Drop · v1.1.0 Stable
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-rose-500/15 border border-rose-400/30 flex items-center justify-center shrink-0 text-3xl">
                    🌸
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-rose-300 transition-colors">
                      Zenim Android
                    </h2>
                    <p className="text-xs text-slate-400">Material 3 Expressive Torrent Streamer</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  Search, download, and stream video or audio torrents before they finish using native libtorrent4j and a local HTTP range server.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
                <a
                  href="https://github.com/israrxy/zenim-android/releases/download/v1.1.0/zenim-v1.1.0.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[42px] px-4 py-2 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>Install APK</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
                  </svg>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedApp('zenim')}
                  className="min-h-[42px] ml-auto px-3 text-xs font-mono font-bold text-rose-300 hover:text-white"
                >
                  Screenshots & Details →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Play Store "All Released Apps" List View */}
        <div className="rounded-3xl bg-[#13151d] border border-white/10 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-lg font-bold text-white">Top Releases by Israr</h2>
            <span className="text-xs font-mono text-slate-400">Tap any app for full store page</span>
          </div>

          <div className="divide-y divide-white/10">
            {visibleApps.map((app, index) => {
              const isRose = app.id === 'zenim';
              return (
                <div
                  key={app.id}
                  onClick={() => setSelectedApp(app.id)}
                  className="py-4 first:pt-1 last:pb-1 flex items-center gap-3.5 sm:gap-5 cursor-pointer hover:bg-white/[0.02] rounded-2xl px-2 transition-colors"
                >
                  <span className="text-sm font-mono font-bold text-slate-500 w-4 text-center tabular-nums">
                    {index + 1}
                  </span>

                  {/* App Icon */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shrink-0 flex items-center justify-center overflow-hidden border ${
                      isRose
                        ? 'bg-rose-500/15 border-rose-400/30 text-2xl'
                        : 'bg-[#0b0c10] border-indigo-500/30 p-2'
                    }`}
                  >
                    {app.iconType === 'image' ? (
                      <img
                        src={app.iconSrc}
                        alt={app.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span>🌸</span>
                    )}
                  </div>

                  {/* App Info */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm sm:text-base font-bold text-white truncate">
                      {app.name}
                    </div>
                    <div className="text-xs text-slate-400 truncate mt-0.5">
                      {app.category} · {app.version}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 mt-1 flex items-center gap-2">
                      <span>{app.size}</span>
                      <span>·</span>
                      <span className={isRose ? 'text-rose-400' : 'text-indigo-400'}>Free / No Ads</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="shrink-0 flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={app.primaryCtaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`min-h-[40px] px-4 py-2 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                        isRose
                          ? 'bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30'
                          : 'bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30'
                      }`}
                    >
                      {app.id === 'raazi' ? 'Get App' : 'Install'}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppsStore;
