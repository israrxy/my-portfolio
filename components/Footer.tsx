
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-12">
          <div className="max-w-md w-full">
            <h3 className="syne text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter uppercase leading-[0.9] md:leading-[0.85]">
              Let's <br />Collaborate
            </h3>
            <p className="text-slate-500 mb-6 md:mb-8 font-medium text-sm md:text-base">
              Open to high-impact projects, API challenges, and beautiful web builds. 
              Based in the logic layer. Available for freelance and full-time.
            </p>
            <a href="mailto:hi@israrxy.qzz.io" className="text-xl md:text-2xl font-bold hover:text-indigo-400 transition-colors underline decoration-indigo-500/50 underline-offset-8 break-all">
              hi@israrxy.qzz.io
            </a>
          </div>

          <div className="flex flex-col md:items-end gap-10 md:gap-12 w-full md:w-auto">
            <div className="grid grid-cols-2 md:flex md:flex-row gap-x-8 gap-y-4 md:gap-x-16 text-[10px] md:text-sm font-bold uppercase tracking-widest mono text-slate-400">
              <a href="https://github.com/israrxy" target="_blank" className="hover:text-indigo-400">GitHub</a>
              <a href="https://raazi.pages.dev" target="_blank" className="hover:text-indigo-400">Raazi</a>
              <a href="#hero" className="hover:text-indigo-400">Top</a>
              <a href="https://raazi.pages.dev" className="hover:text-indigo-400">Landing</a>
            </div>
            
            <div className="mt-auto md:text-right border-t border-white/5 pt-6 w-full md:border-none md:pt-0">
              <div className="text-[9px] md:text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-1">Architecture // v1.1.0-mobile-opt</div>
              <div className="text-xs md:text-sm font-bold opacity-30 uppercase tracking-tighter">
                © {new Date().getFullYear()} ISRAR AHAMED.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
