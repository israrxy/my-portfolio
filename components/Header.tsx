import React, { useState, useEffect } from 'react';

interface HeaderProps {
  viewMode: 'portfolio' | 'apps';
  onSelectViewMode: (mode: 'portfolio' | 'apps') => void;
}

const Header: React.FC<HeaderProps> = ({ viewMode, onSelectViewMode }) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (viewMode !== 'portfolio') return;
      const sections = ['hero', 'about', 'projects', 'skills', 'playground'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  const handlePortfolioNav = (sectionId: string) => {
    if (viewMode !== 'portfolio') {
      onSelectViewMode('portfolio');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between gap-8 backdrop-blur-xl bg-black/75 md:bg-black/50 px-4 py-2.5 md:px-6 md:py-3.5 rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
          {/* Zone 1: Brand */}
          <a 
            href="#hero" 
            onClick={() => handlePortfolioNav('hero')}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-indigo-500/50 shrink-0">
              <img 
                src="/assets/avatar.png" 
                alt="Israr Ahamed" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://avatars.githubusercontent.com/u/211316262?v=4";
                }}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <span className="syne font-black text-lg md:text-2xl tracking-tighter uppercase">Israr.</span>
          </a>
          
          {/* Zone 2: Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            <a 
              href="#about" 
              onClick={() => handlePortfolioNav('about')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 ${viewMode === 'portfolio' && activeSection === 'about' ? 'text-indigo-400' : ''}`}
            >
              Philosophy
            </a>
            <a 
              href="#projects" 
              onClick={() => handlePortfolioNav('projects')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 ${viewMode === 'portfolio' && activeSection === 'projects' ? 'text-indigo-400' : ''}`}
            >
              Drops
            </a>
            <a
              href="/apps"
              onClick={(e) => {
                e.preventDefault();
                onSelectViewMode('apps');
              }}
              className={`hover:text-white transition-colors uppercase whitespace-nowrap shrink-0 ${viewMode === 'apps' ? 'text-indigo-400 underline underline-offset-4' : ''}`}
            >
              App Store
            </a>
            <a 
              href="#skills" 
              onClick={() => handlePortfolioNav('skills')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 ${viewMode === 'portfolio' && activeSection === 'skills' ? 'text-indigo-400' : ''}`}
            >
              Stack
            </a>
            <a 
              href="#playground" 
              onClick={() => handlePortfolioNav('playground')}
              className={`hover:text-white transition-colors whitespace-nowrap shrink-0 ${viewMode === 'portfolio' && activeSection === 'playground' ? 'text-indigo-400' : ''}`}
            >
              Logic Engine
            </a>
          </div>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={viewMode === 'apps' ? '/' : '/apps'}
              onClick={(e) => {
                e.preventDefault();
                onSelectViewMode(viewMode === 'apps' ? 'portfolio' : 'apps');
              }}
              className={`min-h-[40px] px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                viewMode === 'apps'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-300'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>
              </svg>
              <span>{viewMode === 'apps' ? 'Portfolio View' : 'Apps Store'}</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile-Familiar Bottom Navigation Bar (Play Store / Android M3 Style) */}
      <nav 
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0d0d0f]/95 backdrop-blur-xl border-t border-white/10 px-2 pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid grid-cols-4 items-center h-14 max-w-md mx-auto">
          <a 
            href="#hero" 
            onClick={() => handlePortfolioNav('hero')}
            className={`flex flex-col items-center justify-center min-h-[44px] transition-colors ${viewMode === 'portfolio' && activeSection === 'hero' ? 'text-indigo-400' : 'text-slate-400 hover:text-white'}`}
          >
            <div className={`px-3 py-0.5 rounded-full transition-colors ${viewMode === 'portfolio' && activeSection === 'hero' ? 'bg-indigo-500/20' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <span className="text-[10px] font-mono font-bold tracking-tight mt-0.5 whitespace-nowrap">Home</span>
          </a>

          <a 
            href="/apps"
            onClick={(e) => {
              e.preventDefault();
              onSelectViewMode('apps');
            }}
            className={`flex flex-col items-center justify-center min-h-[44px] transition-colors ${viewMode === 'apps' ? 'text-indigo-400' : 'text-slate-400 hover:text-white'}`}
          >
            <div className={`px-3 py-0.5 rounded-full transition-colors ${viewMode === 'apps' ? 'bg-indigo-500/20' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>
              </svg>
            </div>
            <span className="text-[10px] font-mono font-bold tracking-tight mt-0.5 whitespace-nowrap">Apps Store</span>
          </a>

          <a 
            href="#about" 
            onClick={() => handlePortfolioNav('about')}
            className={`flex flex-col items-center justify-center min-h-[44px] transition-colors ${viewMode === 'portfolio' && (activeSection === 'about' || activeSection === 'skills') ? 'text-indigo-400' : 'text-slate-400 hover:text-white'}`}
          >
            <div className={`px-3 py-0.5 rounded-full transition-colors ${viewMode === 'portfolio' && (activeSection === 'about' || activeSection === 'skills') ? 'bg-indigo-500/20' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <span className="text-[10px] font-mono font-bold tracking-tight mt-0.5 whitespace-nowrap">Stack</span>
          </a>

          <a 
            href="#playground" 
            onClick={() => handlePortfolioNav('playground')}
            className={`flex flex-col items-center justify-center min-h-[44px] transition-colors ${viewMode === 'portfolio' && activeSection === 'playground' ? 'text-indigo-400' : 'text-slate-400 hover:text-white'}`}
          >
            <div className={`px-3 py-0.5 rounded-full transition-colors ${viewMode === 'portfolio' && activeSection === 'playground' ? 'bg-indigo-500/20' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/>
              </svg>
            </div>
            <span className="text-[10px] font-mono font-bold tracking-tight mt-0.5 whitespace-nowrap">Engine</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;


