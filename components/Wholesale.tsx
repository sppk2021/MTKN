import React from 'react';

export const Wholesale: React.FC = () => {
  return (
    <div id="wholesale" className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">
      
      {/* Top Section: Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 md:mb-24">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-mtkn-blue font-bold tracking-widest uppercase text-xs bg-white px-4 py-1.5 rounded-full border border-blue-100 shadow-sm">B2B Opportunities</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-mtkn-blue mt-6 mb-6">Partner With MTKN</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Bring the authentic taste of Italy to your customers. We supply top-tier hotels, restaurants, and retailers across Myanmar with premium Cavit and Lunetta wines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-mtkn-blue text-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300 mb-8">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-mtkn-blue mb-4">Guaranteed Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                Direct imports from Cavit and Lunetta ensure every bottle is genuine, stored correctly in climate-controlled environments, and tastes exactly as the winemaker intended.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-mtkn-yellow/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 bg-mtkn-yellow text-mtkn-blue rounded-2xl flex items-center justify-center shadow-lg transform -rotate-2 group-hover:-rotate-6 transition-transform duration-300 mb-8 relative z-10">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-mtkn-blue mb-4 relative z-10">Efficient Logistics</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Our established distribution network ensures timely delivery and consistent stock levels. We understand that reliability is key to your business success.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 transform hover:-translate-y-1 group sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-white border-2 border-mtkn-blue text-mtkn-blue rounded-2xl flex items-center justify-center shadow-lg transform rotate-1 group-hover:rotate-3 transition-transform duration-300 mb-8">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-mtkn-blue mb-4">Competitive Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Benefit from our long-standing relationships with wineries to get the best wholesale rates in the market, maximizing your profit margins.
              </p>
            </div>
        </div>
      </div>

      {/* Enhanced Contact Section */}
      <div className="bg-white border-t border-gray-100 relative">
         <div className="absolute inset-0 bg-mtkn-blue/5 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
            
            <div className="bg-mtkn-blue rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
               {/* Decorative Circles */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
               <div className="absolute bottom-0 left-0 w-80 h-80 bg-mtkn-yellow opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>
               
               <div className="relative z-10 max-w-4xl mx-auto">
                   <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Elevate Your Selection?</h3>
                   <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                      Whether you're a new restaurant opening or an established hotel looking to refresh your wine list, our sommeliers are here to help.
                   </p>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Phone */}
                      <a href="tel:+959123456789" className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                         <div className="w-16 h-16 bg-mtkn-yellow text-mtkn-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                         </div>
                         <div className="text-white font-bold text-lg mb-1">Call Us</div>
                         <div className="text-blue-200 group-hover:text-white transition-colors text-sm sm:text-base break-words">+95 9 123 456 789</div>
                      </a>

                      {/* Email */}
                      <a href="mailto:sales@mtkn-food.com" className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                         <div className="w-16 h-16 bg-mtkn-yellow text-mtkn-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                         </div>
                         <div className="text-white font-bold text-lg mb-1">Email Us</div>
                         <div className="text-blue-200 group-hover:text-white transition-colors text-sm sm:text-base break-words">sales@mtkn-food.com</div>
                      </a>

                      {/* Location */}
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/20 transition-all duration-300 group cursor-default">
                         <div className="w-16 h-16 bg-mtkn-yellow text-mtkn-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                         </div>
                         <div className="text-white font-bold text-lg mb-1">Visit Showroom</div>
                         <div className="text-blue-200 text-sm sm:text-base">123 Vineyard Lane, Yangon</div>
                      </div>
                   </div>
               </div>
            </div>

         </div>
      </div>
    </div>
  );
};