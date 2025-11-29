import React, { useState, useEffect } from 'react';
import { SendIcon, LayersIcon, WalletIcon, TelegramIcon, UsersIcon } from './components/Icons';
import { TheLoopDiagram, ProblemDiagram } from './components/Diagrams';
import { CardGenerator } from './components/CardGenerator';

const App: React.FC = () => {
  const [showGenerator, setShowGenerator] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${scrolled ? 'bg-[#0F172A]/90 backdrop-blur-md border-slate-800 py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-tighter flex items-center gap-2 text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
            BaseCard
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#story" className="hover:text-white transition">The Story</a>
            <a href="#solution" className="hover:text-white transition">BaseCard</a>
            <a href="#earn" className="hover:text-white transition">Earn</a>
            <a href="#token" className="hover:text-white transition">BC Token</a>
          </div>
          <button 
            onClick={() => setShowGenerator(true)}
            className="px-5 py-2 bg-white text-blue-900 rounded-full font-bold text-sm hover:bg-blue-50 transition shadow-lg shadow-blue-900/20"
          >
            Get My Card
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-44 pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            LIVE ON BASE
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1]">
            Right people.<br />
            Right time.<br />
            <span className="gradient-text">Onchain.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-12">
            Welcome to BaseCard — your collectible onchain business card.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setShowGenerator(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#0052FF] hover:bg-blue-600 text-white rounded-lg font-bold text-lg transition shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2"
            >
               Get My Card <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Story Section: Jerry's Problem */}
      <section id="story" className="py-24 bg-[#0B1120] relative border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-slate-800 rounded-lg text-xs font-bold text-slate-300 mb-6">
                THE ORIGIN STORY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                Hi, I’m Jerry. <br/>
                <span className="text-slate-500 text-2xl font-normal block mt-2">
                  (Content Marketer in web2 & community operator in web3)
                </span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  I met my developers at <span className="text-white font-semibold">Running Base Korea</span> held during Korea Blockchain Week.
                </p>
                <p>
                  At that time, we visited multiple events but they all start the same way...
                </p>
                <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-blue-500 italic text-white text-xl">
                  “What’s your Telegram?”
                </div>
                <p>
                  That’s when it hit us — builders don’t have an easy way to prove who they are and what they’ve done. Even in Web3, builders still rely on DMs. 
                </p>
                <p className="font-semibold text-white">
                  I mean, it’s broken and everyone knows it.
                </p>
              </div>
            </div>
            
            <div className="relative">
               <ProblemDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section: BaseCard */}
      <section id="solution" className="py-24 relative overflow-hidden bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                So we built <span className="gradient-text">BaseCard</span>
             </h2>
             <p className="text-xl text-slate-400">
                Your onchain business card that shows who you are and what you’ve built.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  {[
                    { name: 'Jerry', role: 'Marketer', color: 'from-blue-600 to-blue-800' },
                    { name: 'Cho-ah', role: 'Developer', color: 'from-purple-600 to-purple-800' },
                    { name: 'Min', role: 'Designer', color: 'from-cyan-600 to-cyan-800' },
                    { name: 'Alex', role: 'Founder', color: 'from-emerald-600 to-emerald-800' }
                  ].map((card, i) => (
                      <div key={i} className={`p-4 rounded-xl border border-white/10 bg-gradient-to-br ${card.color} shadow-lg hover:-translate-y-2 transition duration-300 aspect-[1.58] flex flex-col justify-between`}>
                        <div className="flex justify-between items-start">
                           <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center text-xs font-bold text-white">{card.name[0]}</div>
                           <div className="h-1.5 w-8 bg-white/20 rounded-full"></div>
                        </div>
                        <div>
                           <div className="font-bold text-white text-sm">{card.name}</div>
                           <div className="text-[10px] text-white/70 uppercase">{card.role}</div>
                        </div>
                      </div>
                  ))}
                </div>
             </div>

             <div className="order-1 md:order-2 space-y-8">
                <div className="flex gap-4 items-start">
                   <div className="bg-blue-900/30 p-3 rounded-xl text-blue-400 mt-1"><SendIcon /></div>
                   <div>
                      <h3 className="text-xl font-bold text-white">No more "What's your TG?"</h3>
                      <p className="text-slate-400 mt-2 leading-relaxed">
                        Instead of exchanging Telegram and explaining what you do in DMs, you just simply share your BaseCard and collect other’s base cards.
                      </p>
                   </div>
                </div>
                <div className="flex gap-4 items-start">
                   <div className="bg-purple-900/30 p-3 rounded-xl text-purple-400 mt-1"><LayersIcon /></div>
                   <div>
                      <h3 className="text-xl font-bold text-white">Your Personal Collection</h3>
                      <p className="text-slate-400 mt-2 leading-relaxed">
                        Now, whenever you want, you can open your collection, explore all the cards you’ve gathered, and reach out to the right person at the right time.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* EARN Section */}
      <section id="earn" className="py-24 bg-[#0B1120] border-y border-slate-800">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
               <span className="text-green-400 font-bold tracking-widest text-xs uppercase mb-2 block">We didn't stop there</span>
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">We built <span className="text-green-500">EARN</span></h2>
               <p className="text-slate-400 max-w-2xl text-lg">
                  If you’re a builder, discover new bounties and paid projects that matches your skills.
                  If you’re looking for builders, simply browse basecards and see related collected cards.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { title: "Frontend for BaseCard", reward: "1500 USDC", company: "BaseCard Team", skills: ["React", "Web3"] },
                 { title: "Smart Contract Audit", reward: "3000 USDC", company: "DeFi Protocol", skills: ["Solidity", "Security"] },
                 { title: "Community Manager", reward: "800 USDC", company: "NFT Project", skills: ["Marketing", "Discord"] }
               ].map((bounty, i) => (
                 <div key={i} className="group bg-[#1E293B] p-6 rounded-xl border border-slate-700 hover:border-green-500 transition cursor-pointer flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                       <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-xl">💰</div>
                       <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full font-mono text-sm font-bold border border-green-900/50">{bounty.reward}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition">{bounty.title}</h3>
                    <p className="text-sm text-slate-500 mb-4">{bounty.company}</p>
                    
                    <div className="flex gap-2 mb-6">
                       {bounty.skills.map((s, idx) => (
                          <span key={idx} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">{s}</span>
                       ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                       <span className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Cost: 100 BC</span>
                       <span className="group-hover:translate-x-1 transition text-white">Apply Now &rarr;</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Tokenomics Loop Section */}
      <section id="token" className="py-24 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <TheLoopDiagram />
            </div>
            
            <div className="order-1 lg:order-2">
               <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">The Economy</h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                      Bridging Identity <br/>& Opportunity
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      Then we asked ourselves — how do we connect BaseCard and Earn into one self-sustaining loop? 
                      That’s why we designed <span className="text-blue-400 font-bold">BC Token</span>.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 space-y-4">
                     <div className="flex gap-4">
                        <div className="bg-green-500/20 p-2 rounded-lg h-fit"><WalletIcon className="text-green-400 w-5 h-5" /></div>
                        <div>
                          <h4 className="font-bold text-white">Earn BC</h4>
                          <p className="text-sm text-slate-400">When you create your BaseCard, link your socials, or showcase your past work, you earn BC.</p>
                        </div>
                     </div>
                     <div className="w-px h-8 bg-slate-700 ml-5 my-0"></div>
                     <div className="flex gap-4">
                        <div className="bg-red-500/20 p-2 rounded-lg h-fit"><WalletIcon className="text-red-400 w-5 h-5" /></div>
                        <div>
                          <h4 className="font-bold text-white">Spend BC</h4>
                          <p className="text-sm text-slate-400">And when you apply for a bounty on Earn, you spend BC — for example, 100 BC per project.</p>
                        </div>
                     </div>
                  </div>

                  <p className="text-slate-400 italic">
                     "This simple loop encourages builders to build better profiles, show more proof, and unlock more opportunities."
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Vision Footer */}
      <footer className="py-20 bg-[#020617] border-t border-slate-800 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
           <h2 className="text-3xl font-bold text-white">
             It’s how BaseCard and Earn come together.
           </h2>
           <p className="text-xl text-slate-400 font-light">
             Turning proof into trust, and trust into new opportunities. <br/>
             A place where identity truly meets opportunity.
           </p>
           
           <div className="py-8">
              <div className="p-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 inline-block">
                 <button 
                   onClick={() => setShowGenerator(true)}
                   className="px-8 py-3 bg-[#0F172A] rounded-full text-white font-bold hover:bg-transparent transition duration-300"
                 >
                    Join the Loop
                 </button>
              </div>
           </div>

           <div className="border-t border-slate-800 pt-8 mt-12">
             <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
               Our vision is to make it effortless for builders and project owners to find the right people, at the right time.
             </p>
             <p className="text-blue-500 font-bold mt-2">because base is for everyone</p>
             
             <div className="mt-8 text-xs text-slate-700">
               © 2024 BaseCard. Built with ♥ on Base.
             </div>
           </div>
        </div>
      </footer>

      {/* Modal */}
      {showGenerator && <CardGenerator onClose={() => setShowGenerator(false)} />}
    </div>
  );
};

export default App;