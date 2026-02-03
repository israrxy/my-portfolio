
import React from 'react';

const Skills: React.FC = () => {
  const tools = [
    "LOGIC ARCHITECTURE", "PROMPT ENGINEERING", "API ORCHESTRATION", 
    "UI/UX DESIGN", "AI WORKFLOWS", "MODULAR DEV",
    "ANDROID (SDK)", "PYTHON (CORE)", "C++ (LOGIC)", "TYPESCRIPT"
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start">
          <div className="lg:w-1/2 w-full">
            <h2 className="syne text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter uppercase leading-none">
              TECH <br /><span className="text-slate-500">EXPERTISE</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-md">
              I don't just write code. I understand how libraries speak to each other. My stack is a combination of human logic and machine precision.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full flex flex-wrap gap-2 md:gap-3">
            {tools.map((tool, idx) => (
              <div key={idx} className="px-4 md:px-6 py-3 md:py-4 border border-white/10 hover:border-indigo-500 hover:bg-indigo-500/5 transition-all group cursor-default rounded-sm md:rounded-none">
                <span className="mono text-[10px] md:text-xs font-bold tracking-widest group-hover:text-indigo-400">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Marquee-like element */}
      <div className="mt-20 md:mt-32 opacity-5 select-none pointer-events-none">
        <div className="whitespace-nowrap animate-marquee flex gap-6 md:gap-10">
          <span className="syne text-[8rem] sm:text-[12rem] md:text-[15rem] font-black uppercase">Logic Architect</span>
          <span className="syne text-[8rem] sm:text-[12rem] md:text-[15rem] font-black uppercase text-outline">Logic Architect</span>
        </div>
      </div>

      <style>{`
        .text-outline {
          -webkit-text-stroke: 1px rgba(255,255,255,0.5);
          color: transparent;
        }
        @media (min-width: 768px) {
          .text-outline {
            -webkit-text-stroke: 2px white;
          }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
