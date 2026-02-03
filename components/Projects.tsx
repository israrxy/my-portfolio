
import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
          <h2 className="syne text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] md:leading-[0.85]">
            THE <br /><span className="text-indigo-600">DROP</span>
          </h2>
          <div className="max-w-xs text-slate-600 font-medium text-sm md:text-base border-l-2 border-black/10 pl-4">
            Project logs and code releases. Pure logic turned into production-ready software.
          </div>
        </div>

        <div className="group relative">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
            <div className="w-full lg:w-3/5 overflow-hidden rounded-xl md:rounded-2xl bg-slate-100 aspect-video lg:aspect-square flex items-center justify-center p-4 md:p-8 border border-black/5">
              <img 
                src="https://github.com/israrxy/Raazi/raw/main/Raazi.png" 
                alt="Raazi Music App Preview" 
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1200&auto=format&fit=crop";
                }}
              />
            </div>
            <div className="w-full lg:w-2/5">
              <div className="flex gap-2 mb-4 md:mb-6">
                <span className="px-2 md:px-3 py-1 bg-black text-white text-[9px] md:text-[10px] font-mono font-bold">RELEASE v1.0</span>
                <span className="px-2 md:px-3 py-1 border border-black text-black text-[9px] md:text-[10px] font-mono font-bold uppercase">Stable Build</span>
              </div>
              <h3 className="syne text-4xl md:text-5xl font-black mb-4 md:mb-6 tracking-tight uppercase">Raazi Music</h3>
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-snug md:leading-relaxed mb-6 md:mb-8">
                A free high-quality music player powered by NewPipeExtractor. Ad-free, background playback, and download support with a stunning Material 3 UI.
              </p>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 mb-8 md:mb-10">
                <div className="border-l-2 border-indigo-600 pl-4 py-1">
                  <div className="text-[10px] font-mono text-slate-400 mb-0.5 uppercase tracking-wider">Engine</div>
                  <div className="font-bold text-sm md:text-base">NewPipeExtractor</div>
                </div>
                <div className="border-l-2 border-indigo-600 pl-4 py-1">
                  <div className="text-[10px] font-mono text-slate-400 mb-0.5 uppercase tracking-wider">Aesthetic</div>
                  <div className="font-bold text-sm md:text-base">Material 3 UI</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href="https://raazi.pages.dev" target="_blank" className="bg-black text-white px-6 md:px-8 py-4 text-center font-bold hover:bg-indigo-600 transition-colors rounded-lg md:rounded-none text-sm md:text-base">
                  GET APP
                </a>
                <a href="https://github.com/israrxy/Raazi" target="_blank" className="border border-black px-6 md:px-8 py-4 text-center font-bold hover:bg-black hover:text-white transition-colors rounded-lg md:rounded-none text-sm md:text-base">
                  VIEW SOURCE
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-black/10 pt-6 gap-2">
            <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">GitHub: israrxy/Raazi</div>
            <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">Build ID: 2024.12.A</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
