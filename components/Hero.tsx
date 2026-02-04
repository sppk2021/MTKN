import React, { useState } from 'react';

export const Hero: React.FC<{ onExplore: () => void; onPartner: () => void }> = ({ onExplore, onPartner }) => {
  const [imgError, setImgError] = useState(false);
  
  // ---------------------------------------------------------------------------
  // HERO IMAGE SETTING
  // Replace the URL below with your own image path.
  // Options:
  // 1. A public URL (e.g., "https://example.com/image.png")
  // 2. A local file in your public folder (e.g., "/products/hero.png")
  // ---------------------------------------------------------------------------
  const heroImageSrc = "https://uploads.onecompiler.io/43924vdyc/44c8p7bab/Wine%20Catalogue%20PDF%20(Update%20File)_1_Page_14.png";

  return (
    <div className="relative bg-mtkn-blue overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#f4e31a" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 animate-fade-in">
          
          <div className="w-full md:w-1/2 text-white text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-mtkn-yellow text-mtkn-blue text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 rounded-sm">
              Premium Wholesale
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              Authentic Italian <br />
              <span className="text-mtkn-yellow">Excellence</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              We supply the finest Cavit and Lunetta wines to hotels, restaurants, and retailers across the region. Elevate your portfolio with true Italian craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              {/* Primary Premium Button */}
              <button 
                onClick={onExplore}
                className="relative overflow-hidden bg-gradient-to-br from-mtkn-yellow to-yellow-400 text-mtkn-blue px-8 py-3 sm:px-10 sm:py-4 rounded-full font-bold tracking-wider hover:shadow-[0_0_25px_rgba(244,227,26,0.4)] transform hover:-translate-y-1 active:scale-95 transition-all duration-300 group w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Collection
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
                {/* Shine effect overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 ease-in-out"></div>
              </button>

              {/* Secondary Glassmorphism Button */}
              <button 
                onClick={onPartner}
                className="relative px-8 py-3 sm:px-10 sm:py-4 rounded-full font-bold tracking-wider border border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-mtkn-blue hover:border-white shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 group overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10">Become a Partner</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white transition-colors duration-300"></div>
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative flex justify-center mt-8 md:mt-0">
             <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-800 to-blue-950 flex items-center justify-center group hover:shadow-mtkn-yellow/20 transition-all duration-500 border border-white/10">
                
                {/* Image Logic with Fallback */}
                {!imgError ? (
                  <img 
                    src={heroImageSrc}
                    alt="Cavit and Lunetta Wine Collection"
                    className="w-full h-auto relative z-10 block"
                    onError={() => setImgError(true)}
                  />
                ) : (
                   <div className="flex flex-col items-center justify-center p-8 text-center relative z-10 w-full aspect-[2/3]">
                      <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm border border-white/10">
                        <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                      <span className="text-white font-bold text-xl mb-2">Add Hero Image</span>
                      <code className="text-blue-200 bg-black/20 px-3 py-1 rounded text-xs font-mono">
                        {heroImageSrc}
                      </code>
                   </div>
                )}

                {/* Decorative circle */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mtkn-yellow rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none z-0"></div>
                
                {/* Overlay gradient to ensure text readability or blend image nicely */}
                {!imgError && <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent pointer-events-none z-20"></div>}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};