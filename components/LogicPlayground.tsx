
import React, { useState } from 'react';
import { askIsrarLogic } from '../services/gemini';

const LogicPlayground: React.FC = () => {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setAnswer(null); // Clear previous answer
    const result = await askIsrarLogic(input);
    setAnswer(result);
    setLoading(false);
  };

  return (
    <section id="playground" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative group">
          {/* Coming Soon Badge */}
          <div className="absolute -top-4 -right-4 z-20 bg-indigo-600 text-white font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-widest rotate-3 shadow-xl">
            Beta / Coming Soon
          </div>
          
          <div className="border border-white/10 bg-[#0c0c0c] rounded-xl overflow-hidden shadow-2xl relative">
            {/* Terminal Bar */}
            <div className="bg-[#1a1a1a] px-4 py-2.5 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <div className="mono text-[8px] md:text-[10px] text-slate-500 uppercase tracking-widest font-bold">ISRAR_BRAIN_v2 // OFFLINE_MODE</div>
            </div>

            <div className="p-6 md:p-12">
              <h2 className="syne text-3xl md:text-4xl font-bold mb-3 md:mb-4 tracking-tighter uppercase">THE LOGIC <span className="text-indigo-500 underline decoration-indigo-500/30">ENGINE</span></h2>
              <p className="text-slate-500 mb-6 md:mb-8 mono text-[10px] md:text-sm font-bold tracking-tight uppercase">
                > INPUT_PROMPT_HERE:
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="relative">
                  <div className="absolute left-4 top-4 mono text-indigo-500 text-[10px] md:text-sm font-bold">IN:</div>
                  <textarea
                    className="w-full bg-[#111] border border-white/5 rounded-lg p-4 md:p-6 pl-10 md:pl-12 mono text-xs md:text-sm text-indigo-200 focus:border-indigo-500 focus:outline-none transition-all resize-none h-32 md:h-40"
                    placeholder="Try asking about app architecture or logic flows..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
                
                <button
                  onClick={handleAsk}
                  disabled={loading}
                  className="w-full py-4 md:py-5 bg-indigo-600 hover:bg-indigo-700 text-white mono font-bold text-xs md:text-sm tracking-widest transition-all disabled:opacity-50 flex items-center justify-center gap-3 uppercase rounded-lg md:rounded-none overflow-hidden relative"
                >
                  <span className="relative z-10">
                    {loading ? 'INITIALIZING_CORE...' : 'RUN_LOGIC_ANALYSIS'}
                  </span>
                  {loading && (
                    <div className="absolute inset-0 bg-white/10 animate-[shimmer_2s_infinite] translate-x-[-100%]"></div>
                  )}
                </button>

                {answer && (
                  <div className="mt-6 md:mt-8 border-t border-white/5 pt-6 md:pt-8 animate-in fade-in slide-in-from-top-2 duration-700">
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                      <div className="mono text-indigo-500 text-[10px] md:text-sm font-bold">OUT:</div>
                      <div className="h-[1px] flex-1 bg-white/5"></div>
                    </div>
                    <div className="mono text-slate-300 leading-relaxed text-xs md:text-sm bg-black/40 p-4 md:p-6 rounded border border-white/5 italic">
                      {answer}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default LogicPlayground;
