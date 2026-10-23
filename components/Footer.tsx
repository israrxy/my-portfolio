import React from 'react';

interface FooterProps {
  onOpenAppsStore: (app?: 'zenim' | 'raazi' | null) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenAppsStore }) => {
  return (
    <footer className="py-16 md:py-28 pb-28 md:pb-28 px-5 sm:px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md w-full">
            <h3 className="syne text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6 tracking-tighter uppercase leading-[0.9]">
              Let's <br />Collaborate
            </h3>
            <p className="text-slate-400 mb-6 font-medium text-sm md:text-base">
              Open to Android engineering, API integrations, and expressive web builds. Based in West Bengal, India.
            </p>
            <a 
              href="mailto:hi@israrxy.qzz.io" 
              className="text-lg sm:text-xl md:text-2xl font-bold hover:text-indigo-400 transition-colors underline decoration-indigo-500/50 underline-offset-8 break-all"
            >
              hi@israrxy.qzz.io
            </a>
          </div>

          <div className="flex flex-col md:items-end gap-8 w-full md:w-auto">
            <div className="grid grid-cols-2 sm:flex sm:flex-row flex-wrap gap-x-8 gap-y-4 text-xs sm:text-sm font-bold mono text-slate-400">
              <a
                href="/apps"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenAppsStore(null);
                }}
                className="hover:text-indigo-400 min-h-[36px] flex items-center text-left"
              >
                Apps Store
              </a>
              <a
                href="/apps/raazi"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenAppsStore('raazi');
                }}
                className="hover:text-indigo-400 min-h-[36px] flex items-center text-left"
              >
                Raazi Store Page
              </a>
              <a
                href="/apps/zenim"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenAppsStore('zenim');
                }}
                className="hover:text-rose-400 min-h-[36px] flex items-center text-left"
              >
                Zenim Store Page
              </a>
              <a href="https://github.com/israrxy" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 min-h-[36px] flex items-center">GitHub</a>
              <a href="https://raazi-music-player.en.uptodown.com/android" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 min-h-[36px] flex items-center">Raazi (Uptodown)</a>
              <a href="https://raazi.pages.dev" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 min-h-[36px] flex items-center">Raazi Direct</a>
              <a href="https://instagram.com/israrxy" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 min-h-[36px] flex items-center">Instagram</a>
            </div>
            
            <div className="mt-auto md:text-right border-t border-white/10 pt-6 w-full md:border-none md:pt-0">
              <div className="text-xs font-mono text-slate-500">
                © {new Date().getFullYear()} Md Israr Ahamed. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


