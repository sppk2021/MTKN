import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-mtkn-blue text-white pt-12 md:pt-20 pb-8 md:pb-10 border-t-4 border-mtkn-yellow relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mtkn-yellow opacity-5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-12 mb-12 md:mb-16">
          
          {/* Brand */}
          <div className="space-y-6 max-w-2xl">
            <div className="bg-white rounded-2xl p-4 inline-block shadow-lg">
               <Logo className="h-10 md:h-12" />
            </div>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed font-light">
              MTKN Food & Beverage brings the finest authentic Italian wines to your table. Experience quality, tradition, and taste in every bottle.
            </p>
          </div>

          {/* Social Icons - Enhanced */}
          <div className="flex gap-4">
              {/* Facebook */}
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-mtkn-yellow hover:text-mtkn-blue hover:border-mtkn-yellow transition-all duration-300 group hover:-translate-y-1 shadow-lg" aria-label="Facebook">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-mtkn-yellow hover:text-mtkn-blue hover:border-mtkn-yellow transition-all duration-300 group hover:-translate-y-1 shadow-lg" aria-label="Instagram">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                 </svg>
              </a>

               {/* LinkedIn */}
               <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-mtkn-yellow hover:text-mtkn-blue hover:border-mtkn-yellow transition-all duration-300 group hover:-translate-y-1 shadow-lg" aria-label="LinkedIn">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                   <rect x="2" y="9" width="4" height="12" />
                   <circle cx="4" cy="4" r="2" />
                 </svg>
              </a>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-blue-300">
          <p className="text-center md:text-left">&copy; 2024 MTKN Food & Beverage. All rights reserved.</p>
          <div className="flex gap-6 md:gap-8 flex-wrap justify-center md:justify-end">
            <a href="#" className="hover:text-white hover:underline transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white hover:underline transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white hover:underline transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};