import React from 'react';

interface HeroProps {
  onOpenAppsStore: (app?: 'zenim' | 'raazi' | null) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAppsStore }) => {
  return (
    <section id="hero" className="relative min-h-[88vh] md:min-h-screen flex flex-col justify-center px-5 sm:px-6 pt-24 pb-12 md:py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-10 md:mb-14">
          <div className="flex-1 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-indigo-500/30 shadow-2xl shadow-indigo-500/10 shrink-0">
                <img 
                  src="/assets/avatar.png" 
                  alt="Md Israr Ahamed" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://avatars.githubusercontent.com/u/211316262?v=4";
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="mono text-xs text-slate-400">
                  <span>West Bengal, India</span>
                </div>
                <div className="mono text-indigo-400 text-xs font-bold tracking-wider">
                  Indie Android & Web Builder
                </div>
                <a 
                  href="mailto:hi@israrxy.qzz.io" 
                  className="mono text-xs text-slate-300 hover:text-white underline decoration-indigo-500/50 underline-offset-4 block"
                >
                  hi@israrxy.qzz.io
                </a>
              </div>
            </div>
            
            <h1 className="syne text-[clamp(2.35rem,11vw,4.25rem)] sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.92] md:leading-[0.88] tracking-tighter mb-6">
              <span className="block whitespace-nowrap">ISRAR</span>
              <span className="block whitespace-nowrap text-indigo-500">AHAMED</span>
            </h1>

            {/* Mobile-First Quick Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="/apps"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenAppsStore(null);
                }}
                className="min-h-[44px] px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 shadow-lg shadow-indigo-600/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>
                </svg>
                <span>Open Apps Store</span>
              </a>
              <a 
                href="#projects" 
                className="min-h-[44px] px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>Explore Drops</span>
              </a>
              <a 
                href="https://github.com/israrxy" 
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-bold text-sm rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>GitHub (37 Repos)</span>
              </a>
            </div>
          </div>

          <div className="md:text-right w-full md:w-auto border-t border-white/10 pt-6 md:border-none md:pt-0">
            <p className="mono text-indigo-400 text-xs md:text-sm mb-2 font-bold tracking-wider">01. Logic Architecture</p>
            <p className="max-w-sm text-slate-300 text-base md:text-lg leading-relaxed md:ml-auto">
              17-year-old indie builder crafting Android apps, Windows software, and web tools. I orchestrate native libraries, Jetpack Compose, and AI workflows to ship expressive software.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-1">
            <span className="mono text-xs text-slate-500">01. Platforms</span>
            <span className="text-lg md:text-xl font-semibold tracking-tight text-white">Android (Jetpack Compose) · Web · Windows</span>
          </div>
          <div className="flex flex-col gap-1 border-t border-white/5 pt-4 sm:border-none sm:pt-0">
            <span className="mono text-xs text-slate-500">02. Core Stack</span>
            <span className="text-lg md:text-xl font-semibold tracking-tight text-white">Kotlin · Material 3 Expressive · Media3</span>
          </div>
          <div className="flex flex-col gap-1 border-t border-white/5 pt-4 sm:border-none sm:pt-0">
            <span className="mono text-xs text-slate-500">03. Flagship Releases</span>
            <div className="flex items-center gap-2 text-lg md:text-xl font-semibold tracking-tight">
              <a
                href="/apps/raazi"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenAppsStore('raazi');
                }}
                className="text-indigo-400 hover:underline"
              >
                Raazi v6.0.0
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="/apps/zenim"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenAppsStore('zenim');
                }}
                className="text-rose-400 hover:underline"
              >
                Zenim v1.1.0
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


