
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-md md:backdrop-blur-none bg-black/20 md:bg-transparent p-3 md:p-0 rounded-2xl md:rounded-none border border-white/5 md:border-none">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-indigo-500/50">
            <img 
              src="https://avatars.githubusercontent.com/u/211316262?v=4" 
              alt="Israr" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <span className="syne font-black text-xl md:text-2xl tracking-tighter uppercase">Israr.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">
          <a href="#about" className="hover:text-white transition-colors">/ Logic</a>
          <a href="#projects" className="hover:text-white transition-colors">/ Projects</a>
          <a href="#playground" className="hover:text-white transition-colors">/ Playground</a>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <a 
            href="mailto:hi@israrxy.qzz.io" 
            className="hidden xs:block text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400 hover:text-white transition-colors"
          >
            hi@israrxy.qzz.io
          </a>
          <div className="hidden xs:block w-4 md:w-8 h-[1px] bg-white/20"></div>
          <a 
            href="https://github.com/israrxy" 
            target="_blank"
            aria-label="GitHub Profile"
            className="hover:text-indigo-400 transition-colors border border-white/10 p-2 md:border-none md:p-0 rounded-full flex items-center justify-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="md:w-6 md:h-6"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
