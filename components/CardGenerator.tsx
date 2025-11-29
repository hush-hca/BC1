import React, { useState } from 'react';
import { generateEnhancedBio } from '../services/gemini';
import { SparklesIcon, UsersIcon } from './Icons';
import { TokenomicsChart } from './TokenomicsChart';

interface CardGeneratorProps {
  onClose: () => void;
}

export const CardGenerator: React.FC<CardGeneratorProps> = ({ onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({ name: 'Jerry', role: 'Content Marketer', skills: 'Community operator, Web3 Marketing, Running Base Korea' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ bio: string; tagline: string; suggestedSkills: string[] } | null>(null);

  const handleGenerate = async () => {
    if (!formData.name || !formData.role) return;
    setLoading(true);
    const data = await generateEnhancedBio(formData.name, formData.role, formData.skills);
    setResult(data);
    setLoading(false);
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-[#1E293B]">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
            Mint Your BaseCard
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition bg-gray-800 hover:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center">
            ✕
          </button>
        </div>

        <div className="p-0 overflow-y-auto hide-scrollbar flex-1">
          {step === 1 ? (
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#1e293b] border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600"
                  placeholder="e.g. Jerry Kim"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Current Role</label>
                <input 
                  type="text" 
                  className="w-full bg-[#1e293b] border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-600"
                  placeholder="e.g. Content Marketer in Web2"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Skills / Achievements (Comma separated)</label>
                <textarea 
                  className="w-full bg-[#1e293b] border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none h-24 resize-none placeholder-gray-600"
                  placeholder="e.g. Community building, Growth hacking, KBW speaker"
                  value={formData.skills}
                  onChange={(e) => setFormData({...formData, skills: e.target.value})}
                />
                <p className="text-xs text-blue-400/80 flex items-center gap-1">
                  <SparklesIcon className="w-3 h-3" /> AI will optimize this for your onchain profile.
                </p>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={loading || !formData.name}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg font-bold text-white shadow-lg shadow-blue-500/20 transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <SparklesIcon className="w-5 h-5" />
                    Preview BaseCard
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="p-8 flex flex-col md:flex-row gap-8">
              {/* The Card */}
              <div className="flex-1">
                <div className="aspect-[1.58] bg-gradient-to-br from-[#0052FF] to-[#001f61] rounded-2xl p-6 shadow-2xl relative overflow-hidden border border-white/10 group hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                         <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl font-bold text-white border border-white/20">
                            {formData.name.charAt(0)}
                         </div>
                         <div className="text-right">
                           <div className="px-3 py-1 bg-black/30 rounded-full text-xs font-mono text-blue-200 border border-white/10">
                              BASE ONCHAIN
                           </div>
                         </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mt-4">{formData.name}</h3>
                      <p className="text-blue-200 text-sm font-medium">{result?.tagline}</p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs text-white/80 leading-relaxed border-l-2 border-blue-400 pl-3">
                        {result?.bio}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {result?.suggestedSkills.map((s, i) => (
                           <span key={i} className="px-2 py-0.5 bg-white/10 rounded text-[10px] text-white uppercase tracking-wider">
                             {s}
                           </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3">
                   <button onClick={() => setStep(1)} className="flex-1 py-3 bg-gray-800 rounded-lg text-gray-300 font-semibold hover:bg-gray-700 transition">
                      Edit
                   </button>
                   <button onClick={onClose} className="flex-1 py-3 bg-white text-blue-900 rounded-lg font-bold hover:bg-blue-50 transition shadow-lg shadow-white/10">
                      Mint (Coming Soon)
                   </button>
                </div>
              </div>

              {/* Stats Side */}
              <div className="flex-1 flex flex-col gap-4">
                 <div className="bg-[#1e293b] rounded-xl p-4 border border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Projected Stats</h4>
                    <TokenomicsChart />
                 </div>
                 <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/20 flex items-center gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                       <UsersIcon className="text-blue-400 w-6 h-6" />
                    </div>
                    <div>
                       <div className="text-white font-bold">First 1000 Users</div>
                       <div className="text-xs text-blue-300">+50 BC Token eligible</div>
                    </div>
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};