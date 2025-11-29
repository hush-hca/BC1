import React from 'react';
import { TelegramIcon, CheckCircleIcon } from './Icons';

export const TheLoopDiagram: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
      {/* Background Orbit */}
      <div className="absolute inset-0 border-2 border-dashed border-gray-700 rounded-full animate-[spin_30s_linear_infinite] opacity-30"></div>
      
      {/* Core */}
      <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-40"></div>
      <div className="relative z-10 text-center p-6 glass-card rounded-full border border-blue-500/30 flex flex-col items-center justify-center w-32 h-32">
        <h3 className="text-3xl font-bold text-white">BC</h3>
        <p className="text-xs text-blue-200">Token</p>
      </div>

      {/* Top Node: Identity */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-2 flex flex-col items-center">
        <div className="bg-slate-800 p-3 rounded-xl border border-blue-500/50 mb-2 shadow-lg shadow-blue-900/50">
          <span className="text-2xl">🆔</span>
        </div>
        <div className="text-sm font-bold text-white">Create Card</div>
      </div>

      {/* Right Arrow: Earn */}
      <div className="absolute top-1/3 right-4 flex flex-col items-center text-center">
         <div className="text-green-400 text-xs font-mono font-bold mb-1">+ EARN BC</div>
         <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rotate-45"></div>
      </div>

      {/* Bottom Node: Opportunity */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-2 flex flex-col items-center">
        <div className="bg-slate-800 p-3 rounded-xl border border-purple-500/50 mt-2 shadow-lg shadow-purple-900/50">
           <span className="text-2xl">⚡</span>
        </div>
        <div className="text-sm font-bold text-white mt-1">Apply Bounty</div>
      </div>

      {/* Left Arrow: Spend */}
      <div className="absolute bottom-1/3 left-4 flex flex-col items-center text-center">
         <div className="text-red-400 text-xs font-mono font-bold mb-1">- SPEND 100 BC</div>
         <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent -rotate-45"></div>
      </div>
      
      {/* Connecting Flow Lines */}
      <svg className="absolute inset-0 pointer-events-none w-full h-full animate-[spin_30s_linear_infinite]" style={{ animationDirection: 'reverse' }}>
         <defs>
            <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:'#0052FF', stopOpacity:0.2}} />
            <stop offset="50%" style={{stopColor:'#00C6FF', stopOpacity:0.8}} />
            <stop offset="100%" style={{stopColor:'#0052FF', stopOpacity:0.2}} />
            </linearGradient>
         </defs>
         <circle cx="50%" cy="50%" r="38%" stroke="url(#loopGradient)" strokeWidth="2" fill="none" strokeDasharray="10 10" />
      </svg>
    </div>
  );
};

export const ProblemDiagram: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
      {/* The Broken Way */}
      <div className="relative group perspective-1000">
         <div className="absolute -inset-1 bg-gradient-to-r from-red-900 to-orange-900 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
         <div className="relative bg-[#161b22] p-6 rounded-lg border border-red-900/30 h-72 flex flex-col">
            <div className="text-xs text-red-400 font-bold mb-4 uppercase tracking-wider">The Old Way</div>
            
            <div className="space-y-4 flex-1">
                {/* Chat Bubble 1 */}
                <div className="flex items-end gap-3 opacity-60">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0"></div>
                    <div className="bg-slate-800 rounded-2xl rounded-bl-none p-3 text-sm text-gray-400">
                        Nice to meet you at KBW!
                    </div>
                </div>

                {/* Chat Bubble 2 (The Problem) */}
                <div className="flex items-end gap-3 justify-end">
                    <div className="bg-blue-900/20 rounded-2xl rounded-br-none p-3 text-sm text-blue-200 border border-blue-900/50">
                        For sure. <span className="text-white font-bold">What's your Telegram?</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-900 flex-shrink-0"></div>
                </div>
                
                {/* Chat Bubble 3 (The disconnect) */}
                 <div className="flex items-end gap-3 opacity-60">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0"></div>
                    <div className="bg-slate-800 rounded-2xl rounded-bl-none p-3 text-sm text-gray-400">
                        It's @jerry_builds... or maybe @jerry_eth?
                    </div>
                </div>
            </div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 bg-red-600 text-white font-black text-xl px-4 py-2 shadow-xl border-2 border-white transform scale-110 shadow-red-900/50">
                BROKEN
             </div>
         </div>
      </div>

      {/* The BaseCard Way */}
      <div className="relative group perspective-1000">
         <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
         <div className="relative bg-slate-900 p-6 rounded-lg border border-blue-500/50 h-72 flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            
            <div className="w-48 aspect-[1.58] bg-gradient-to-br from-[#0052FF] to-[#001f61] rounded-xl border border-white/10 shadow-2xl relative flex flex-col p-4 text-left group-hover:scale-105 transition duration-500">
                 <div className="flex justify-between items-start mb-2">
                     <div className="w-8 h-8 rounded bg-white/20 backdrop-blur flex items-center justify-center text-xs font-bold text-white">J</div>
                     <div className="h-1.5 w-8 bg-white/20 rounded"></div>
                 </div>
                 <div className="mt-auto">
                     <div className="h-2 w-24 bg-white rounded mb-1"></div>
                     <div className="h-1.5 w-16 bg-blue-300 rounded"></div>
                 </div>
                 {/* Shiny effect */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>
            </div>
            
            <div className="mt-6 space-y-1 z-10">
                <div className="text-xl font-bold text-white flex items-center justify-center gap-2">
                    Jerry's BaseCard <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-sm text-slate-400">One link. Infinite proof.</p>
            </div>
            
            <div className="absolute bottom-4 right-4 flex -space-x-2">
               {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] text-gray-500">
                       Card
                   </div>
               ))}
            </div>

         </div>
      </div>
    </div>
  );
};