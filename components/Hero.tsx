
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center px-6 pt-24 md:pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 mb-12">
          <div className="flex-1 w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-indigo-500/20 rotate-[-4deg] hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-indigo-500/10 shrink-0">
                <img 
                  src="https://avatars.githubusercontent.com/u/211316262?v=4" 
                  alt="Israr Ahamed" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="inline-block px-2 md:px-3 py-1 bg-white text-black font-mono text-[9px] md:text-[10px] font-bold uppercase mb-2">
                  COLLAB // hi@israrxy.qzz.io
                </div>
                <div className="mono text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] block">
                  Indie Builder
                </div>
              </div>
            </div>
            
            <h1 className="syne text-5xl sm:text-7xl md:text-9xl font-extrabold leading-[0.9] md:leading-[0.85] tracking-tighter mb-6 md:mb-8 break-words">
              ISRAR <br />
              <span className="text-indigo-500">AHAMED</span>
            </h1>
          </div>
          <div className="md:text-right w-full md:w-auto">
            <p className="mono text-indigo-400 text-xs md:text-sm mb-2 font-bold uppercase tracking-widest">// ARCHITECTING LOGIC</p>
            <p className="max-w-xs text-slate-400 text-base md:text-lg leading-snug md:leading-tight">
              17-year-old indie builder. I don't memorize syntax, I orchestrate libraries and AI to build high-end software.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-4 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-1">
            <span className="mono text-[10px] text-slate-500 uppercase">01 / CAPABILITIES</span>
            <span className="text-lg md:text-xl font-medium tracking-tight">Android, Web, Windows</span>
          </div>
          <div className="flex flex-col gap-1 border-t border-white/5 pt-4 sm:border-none sm:pt-0">
            <span className="mono text-[10px] text-slate-500 uppercase">02 / CORE STACK</span>
            <span className="text-lg md:text-xl font-medium tracking-tight">AI & API Logic</span>
          </div>
          <div className="flex flex-col gap-1 border-t border-white/5 pt-4 sm:border-none sm:pt-0">
            <span className="mono text-[10px] text-slate-500 uppercase">03 / PROJECT</span>
            <span className="text-lg md:text-xl font-medium tracking-tight">Raazi Music</span>
          </div>
        </div>
      </div>

      {/* Background visual element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 opacity-5 md:opacity-10 select-none pointer-events-none hidden lg:block">
        <span className="syne text-[20rem] xl:text-[30rem] font-black leading-none text-white tracking-tighter">
          LOGIC
        </span>
      </div>
    </section>
  );
};

export default Hero;
