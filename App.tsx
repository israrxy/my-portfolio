import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Skills from './components/Skills';
import LogicPlayground from './components/LogicPlayground';
import Footer from './components/Footer';
import MobileAppsStore from './components/MobileAppsStore';

const parseRouteFromLocation = (): {
  mode: 'portfolio' | 'apps';
  app: 'zenim' | 'raazi' | null;
  searchQuery: string;
} => {
  if (typeof window === 'undefined') {
    return { mode: 'portfolio', app: null, searchQuery: '' };
  }
  const path = window.location.pathname.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const hash = window.location.hash.toLowerCase();
  const q = params.get('q') || '';

  if (path.includes('/apps/raazi') || params.get('app') === 'raazi' || hash === '#apps/raazi') {
    return { mode: 'apps', app: 'raazi', searchQuery: q };
  }
  if (path.includes('/apps/zenim') || params.get('app') === 'zenim' || hash === '#apps/zenim') {
    return { mode: 'apps', app: 'zenim', searchQuery: q };
  }
  if (path.startsWith('/apps') || params.get('view') === 'apps' || hash === '#apps' || q) {
    return { mode: 'apps', app: null, searchQuery: q };
  }
  return { mode: 'portfolio', app: null, searchQuery: '' };
};

const App: React.FC = () => {
  const initialRoute = parseRouteFromLocation();
  const [viewMode, setViewMode] = useState<'portfolio' | 'apps'>(initialRoute.mode);
  const [initialStoreApp, setInitialStoreApp] = useState<'zenim' | 'raazi' | null>(initialRoute.app);
  const [initialSearchQuery, setInitialSearchQuery] = useState<string>(initialRoute.searchQuery);

  // Sync browser URL & SEO title/canonical for Google Sitelinks
  useEffect(() => {
    const handlePopState = () => {
      const route = parseRouteFromLocation();
      setViewMode(route.mode);
      setInitialStoreApp(route.app);
      setInitialSearchQuery(route.searchQuery);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (viewMode === 'apps') {
      if (initialStoreApp === 'raazi') {
        document.title = "Raazi Music Player (v6.0.0) — Israr's App Store";
        if (canonicalEl) canonicalEl.href = 'https://israrxy.qzz.io/apps/raazi';
      } else if (initialStoreApp === 'zenim') {
        document.title = "Zenim Android (v1.1.0) — Israr's App Store";
        if (canonicalEl) canonicalEl.href = 'https://israrxy.qzz.io/apps/zenim';
      } else {
        document.title = "Israr's App Store — Official Android Releases (Raazi & Zenim)";
        if (canonicalEl) canonicalEl.href = 'https://israrxy.qzz.io/apps';
      }
    } else {
      document.title = "Israr's Portfolio - Logic Architect";
      if (canonicalEl) canonicalEl.href = 'https://israrxy.qzz.io/';
    }
  }, [viewMode, initialStoreApp]);

  const openAppsStore = (app: 'zenim' | 'raazi' | null = null) => {
    setInitialStoreApp(app);
    setViewMode('apps');
    const targetUrl = app ? `/apps/${app}` : '/apps';
    try {
      window.history.pushState({ mode: 'apps', app }, '', targetUrl);
    } catch {
      // Fallback if history pushState is restricted in iframe
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPortfolio = () => {
    setViewMode('portfolio');
    setInitialStoreApp(null);
    try {
      window.history.pushState({ mode: 'portfolio', app: null }, '', '/');
    } catch {
      // Fallback if history pushState is restricted in iframe
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500/30 relative overflow-x-hidden">
      {/* Animated Ambient Motion Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="motion-orb-indigo absolute -top-24 -left-24 w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-full bg-indigo-600/15 blur-[100px]" />
        <div className="motion-orb-secondary absolute top-1/3 -right-24 w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-indigo-400/10 blur-[100px]" />
        <div className="motion-orb-indigo absolute -bottom-32 left-1/4 w-80 h-80 md:w-[30rem] md:h-[30rem] rounded-full bg-slate-400/10 blur-[110px]" />
        <div className="motion-beam absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-indigo-500/[0.04] to-transparent" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10">
        <Header 
          viewMode={viewMode} 
          onSelectViewMode={(mode) => {
            if (mode === 'apps') {
              openAppsStore(null);
            } else {
              openPortfolio();
            }
          }} 
        />
        {viewMode === 'apps' ? (
          <MobileAppsStore 
            initialApp={initialStoreApp}
            initialSearch={initialSearchQuery}
            onSelectApp={(app) => openAppsStore(app)}
            onBackToPortfolio={openPortfolio} 
          />
        ) : (
          <main>
            <Hero onOpenAppsStore={openAppsStore} />
            <Philosophy />
            <Projects onOpenAppsStore={openAppsStore} />
            <Skills />
            <LogicPlayground />
          </main>
        )}
        <Footer onOpenAppsStore={openAppsStore} />
      </div>
    </div>
  );
};

export default App;


