import React from 'react';
import { WineProduct } from '../types';
import { ProductImage } from './ProductImage';

interface ProductDetailProps {
  product: WineProduct;
  onBack: () => void;
  onInquire: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onInquire }) => {
  return (
    <div className="bg-white pb-12 animate-fade-in flex-grow w-full">
      {/* Header / Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-20 z-40 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <button onClick={onBack} className="text-gray-500 hover:text-mtkn-blue font-medium flex items-center gap-1 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Collection
            </button>
            <span className="text-gray-300">/</span>
            <span className="text-mtkn-blue font-bold">{product.name}</span>
          </div>
          <button 
            onClick={onInquire}
            className="hidden sm:block text-xs font-bold bg-mtkn-blue text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors"
          >
            Request Pricing
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left: Image */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="md:sticky md:top-40 bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 md:p-8 flex items-center justify-center border border-gray-100 shadow-sm min-h-[300px] md:min-h-[500px]">
              <div className="absolute inset-0 bg-mtkn-blue/5 rounded-2xl transform rotate-1 scale-95 z-0"></div>
              <ProductImage 
                src={product.image} 
                alt={product.name} 
                className="max-h-[300px] md:max-h-[600px] w-auto drop-shadow-2xl transform transition-transform duration-500 hover:scale-105 relative z-10"
              />
            </div>
          </div>

          {/* Right: Spec Sheet */}
          <div className="md:col-span-8 lg:col-span-8 space-y-8">
            
            <div className="border-b-2 border-mtkn-yellow pb-6">
              <div className="flex justify-between items-start">
                 <div>
                    <h4 className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-2">{product.brand}</h4>
                    <h1 className="text-3xl md:text-5xl font-bold text-mtkn-blue mb-4">{product.name}</h1>
                 </div>
                 <div className="hidden md:block">
                     {/* Placeholder for badge or award if exists */}
                 </div>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm font-medium">
                <span className="bg-blue-50 text-mtkn-blue px-4 py-1.5 rounded-full border border-blue-100">{product.type}</span>
                <span className="bg-yellow-50 text-yellow-800 px-4 py-1.5 rounded-full border border-yellow-100">{product.stats.region}</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full border border-gray-200">{product.stats.alcohol} Vol.</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Descriptions */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-mtkn-blue mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-mtkn-yellow rounded-full"></span> Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {product.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-mtkn-blue mb-3 flex items-center gap-2">
                     <span className="w-2 h-2 bg-mtkn-yellow rounded-full"></span> Tasting Notes
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="font-bold text-gray-900 min-w-[60px]">Color:</span>
                      <span className="text-gray-600">{product.tastingNotes.color}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-gray-900 min-w-[60px]">Nose:</span>
                      <span className="text-gray-600">{product.tastingNotes.nose}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-gray-900 min-w-[60px]">Taste:</span>
                      <span className="text-gray-600">{product.tastingNotes.taste}</span>
                    </li>
                  </ul>
                </div>

                {/* Scales */}
                {product.scales && (
                   <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 space-y-6">
                      {product.scales.sweetness !== undefined && (
                        <div>
                          <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                            <span>Sweet</span>
                            <span>Dry</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-mtkn-blue rounded-full" style={{ width: `${product.scales.sweetness}%` }}></div>
                          </div>
                        </div>
                      )}
                      {product.scales.body !== undefined && (
                        <div>
                          <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                            <span>Light Bodied</span>
                            <span>Full Bodied</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-mtkn-blue rounded-full" style={{ width: `${product.scales.body}%` }}></div>
                          </div>
                        </div>
                      )}
                   </div>
                )}
              </div>

              {/* Technical Data & CTA */}
              <div className="space-y-8">
                <div className="bg-mtkn-blue text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-mtkn-yellow opacity-10 rounded-full -ml-10 -mb-10 blur-xl"></div>
                  
                  <h3 className="text-xl font-bold mb-6 border-b border-blue-700 pb-4 flex items-center justify-between">
                    <span>Technical Data</span>
                    <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-blue-800 pb-2 last:border-0 last:pb-0">
                      <span className="text-blue-200 text-sm uppercase tracking-wide">Wine Type</span>
                      <span className="font-bold">{product.type}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-blue-800 pb-2 last:border-0 last:pb-0">
                      <span className="text-blue-200 text-sm uppercase tracking-wide">Country</span>
                      <span className="font-bold">Italy</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-blue-800 pb-2 last:border-0 last:pb-0">
                      <span className="text-blue-200 text-sm uppercase tracking-wide">Region</span>
                      <span className="font-bold">{product.stats.region}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-blue-800 pb-2 last:border-0 last:pb-0">
                      <span className="text-blue-200 text-sm uppercase tracking-wide">Grape</span>
                      <span className="font-bold">{product.stats.grape}</span>
                    </div>
                     <div className="flex justify-between items-center border-b border-blue-800 pb-2 last:border-0 last:pb-0">
                      <span className="text-blue-200 text-sm uppercase tracking-wide">Size</span>
                      <span className="font-bold">750 ml</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-blue-800 pb-2 last:border-0 last:pb-0">
                      <span className="text-blue-200 text-sm uppercase tracking-wide">Temp.</span>
                      <span className="font-bold">{product.stats.temperature}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-mtkn-blue mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-mtkn-yellow rounded-full"></span> Serving Suggestions
                  </h3>
                  <p className="text-gray-600 bg-yellow-50 p-6 rounded-xl border border-yellow-100 italic">
                    "{product.pairings}"
                  </p>
                </div>

                <div className="pt-6">
                   <button 
                     onClick={onInquire}
                     className="w-full bg-mtkn-blue text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-blue-800 transition-all hover:shadow-xl flex items-center justify-center gap-2"
                   >
                     <span>Inquire About This Wine</span>
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   </button>
                   <p className="text-center text-xs text-gray-400 mt-3">Available for wholesale orders only.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};