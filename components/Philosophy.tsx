
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="syne text-4xl sm:text-5xl md:text-7xl font-bold mb-10 md:mb-16 tracking-tighter uppercase">HOW I <span className="text-indigo-500 underline decoration-indigo-500/20 underline-offset-4">BUILD</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
          {/* Logic Box */}
          <div className="md:col-span-2 md:row-span-2 indie-card p-8 md:p-10 flex flex-col justify-between group">
            <div className="mb-8 md:mb-0">
              <div className="mono text-indigo-500 mb-3 md:mb-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Logic over Syntax</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight group-hover:text-indigo-400 transition-colors leading-tight">I focus on the "Why" and "How", not the semicolon.</h3>
            </div>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Syntax is a commodity. Logic is a rare asset. I use Python, C++, and Web tools as instruments, while AI handles the heavy lifting of writing boilerplate. This allows me to build faster and more creatively.
            </p>
          </div>

          {/* Prompt Box */}
          <div className="md:col-span-2 indie-card p-8 md:p-10 group bg-indigo-600/5">
             <div className="mono text-indigo-500 mb-3 md:mb-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Prompt Engineering</div>
             <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight">High-Fidelity Software Generation.</h3>
             <p className="text-slate-400 text-sm md:text-base leading-relaxed">
               I treat LLMs as high-level compilers. I break down complex software into modular fragments and merge them using custom AI workflows to ensure quality and precision.
             </p>
          </div>

          {/* Design Box */}
          <div className="indie-card p-6 md:p-8 group flex flex-col justify-between border-b-4 border-b-indigo-500 min-h-[120px] md:min-h-0">
            <h4 className="text-lg md:text-xl font-bold uppercase">Visual First</h4>
            <p className="text-xs text-slate-500 mono">Aesthetic is part of the logic.</p>
          </div>

          {/* API Box */}
          <div className="indie-card p-6 md:p-8 group flex flex-col justify-between border-b-4 border-b-pink-500 min-h-[120px] md:min-h-0">
            <h4 className="text-lg md:text-xl font-bold uppercase">API Fusion</h4>
            <p className="text-xs text-slate-500 mono">Merging disparate endpoints.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
