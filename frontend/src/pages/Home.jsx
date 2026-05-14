import React, { useEffect } from 'react';

const Home = () => {
  // Injecting a thick font (e.g., Poppins or Inter) for the massive headline
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* Top Tabs - Forex / Futures */}
      <div className="flex bg-[#0a0a0a] border-b border-[#222]">
        <div className="flex mx-auto w-full max-w-[1400px] px-4 lg:px-8">
          <button className="px-8 py-3 bg-[#111] text-[#f2c94c] font-bold text-sm tracking-wide border-t-2 border-[#f2c94c] rounded-tr-lg">
            Forex
          </button>
          <button className="px-8 py-3 text-gray-500 font-bold text-sm tracking-wide hover:text-gray-300 transition-colors">
            Futures
          </button>
        </div>
      </div>

      {/* Yellow Promo Banner */}
      <div className="bg-[#f2c94c] text-black w-full">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-2.5 flex flex-wrap justify-center items-center text-[11px] sm:text-xs font-bold tracking-widest gap-x-6 gap-y-2">
          <div className="flex items-center gap-4">
            <span className="opacity-80">LIMITED TIME</span>
            <span className="opacity-40">|</span>
            <span>40% OFF + BOGO</span>
            <span className="bg-[#dcb540] px-2.5 py-1 rounded-sm flex items-center gap-1.5 cursor-pointer hover:bg-[#cba535] transition-colors">
              CODE: BOGO40
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </span>
          </div>
          <span className="hidden lg:block opacity-40">|</span>
          <div className="flex items-center gap-4">
            <span>50% OFF FOR NEW CUSTOMERS</span>
            <span className="bg-[#dcb540] px-2.5 py-1 rounded-sm flex items-center gap-1.5 cursor-pointer hover:bg-[#cba535] transition-colors">
              CODE: FIRSTGFT
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="w-full bg-[#050505] sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[88px]">
            
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-11 h-11 border-2 border-white flex items-center justify-center transform transition-transform group-hover:rotate-12">
                <span className="text-white font-black text-xl italic">ET</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-xl tracking-tight">EMO TRADELOG</span>
                <span className="text-gray-400 text-[10px] tracking-[0.2em] mt-1 font-semibold uppercase">Trading Platform</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-9 text-[13px] font-bold text-gray-300">
              <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                Trading
                <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <button className="hover:text-white transition-colors">Affiliate</button>
              <button className="hover:text-white transition-colors">Free Trading Competition</button>
              <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                Company
                <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <button className="hover:text-white transition-colors">FAQ</button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="px-7 py-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white text-[13px] font-bold rounded-lg transition-colors">
                Log In
              </button>
              <button className="px-7 py-3 bg-white hover:bg-gray-100 text-black text-[13px] font-bold rounded-lg transition-colors">
                Get Funded
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-[1400px] mx-auto px-4 lg:px-8 pt-16 lg:pt-28 pb-32">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          
          {/* Hero Content (Left) */}
          <div className="flex flex-col space-y-8 z-10 relative">
            
            {/* Trust Info */}
            <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold tracking-widest text-gray-500 uppercase">
              <div className="flex items-center gap-2">
                <span className="text-[#f2c94c] text-sm">👥</span>
                <span className="text-[#f2c94c]">250K+</span> TRADERS <span className="text-gray-300">TRUST EMO TRADELOG</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f2c94c] text-sm">⭐</span>
                <span className="text-[#f2c94c]">4.8 STARS</span> FROM <span className="text-gray-300">5K VERIFIED REVIEWS</span>
              </div>
            </div>

            {/* Massive Headline */}
            <h1 className="text-[60px] md:text-[90px] lg:text-[110px] font-black leading-[0.95] tracking-[-0.04em] uppercase text-white">
              TRADE LIKE<br />
              THE GREATEST
            </h1>

            {/* MT5 Badge & Descriptions */}
            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-4">
                <div className="w-[52px] h-[52px] bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-lg shadow-green-900/30">
                  <span className="text-white font-black text-2xl">5</span>
                </div>
                <span className="text-[13px] font-bold text-[#f2c94c] tracking-widest uppercase">MT5 AVAILABLE</span>
              </div>

              <div className="space-y-1">
                <p className="text-[22px] md:text-[26px] font-bold text-white tracking-tight">
                  Get Paid 100% on Demand
                </p>
                <p className="text-[18px] md:text-[20px] font-semibold text-gray-400 tracking-tight">
                  Up to $2M Simulated Capital
                </p>
              </div>
            </div>

            {/* CTA Area */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
              <button className="w-full sm:w-auto h-[64px] pl-8 pr-2 bg-[#f2c94c] hover:bg-[#e0b840] text-black font-black text-lg rounded-xl flex items-center justify-between gap-6 transition-transform hover:scale-[1.02]">
                <span>Get Funded</span>
                <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7-7"></path></svg>
                </div>
              </button>
              
              <div className="flex items-center gap-2 text-[#f2c94c] font-bold text-[15px] tracking-wide cursor-pointer hover:opacity-80 transition-opacity">
                <span className="text-xl">💎</span>
                Reward Guaranteed
              </div>
            </div>
            
          </div>

          {/* Hero Illustration (Right) */}
          <div className="relative flex justify-center items-center lg:justify-end mt-12 lg:mt-0 z-0">
            {/* Dynamic glow effect behind the phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#f2c94c]/5 blur-[120px] rounded-full"></div>
            
            <div className="relative w-full max-w-[500px] flex items-center justify-center">
              <img 
                src="/hero-mockup.png" 
                alt="EmoTradeLog Trading App Mockup" 
                className="w-full h-auto object-contain scale-[1.15] md:scale-[1.25] transform translate-x-4 md:translate-x-12"
              />
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Home;
