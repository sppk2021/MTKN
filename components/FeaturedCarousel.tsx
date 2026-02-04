import React, { useRef, useEffect } from 'react';
import { WineProduct } from '../types';
import { ProductImage } from './ProductImage';

interface FeaturedCarouselProps {
  products: WineProduct[];
  onProductClick: (product: WineProduct) => void;
}

export const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ products, onProductClick }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Approx card width + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: scrollContainerRef.current, // Observe relative to the scroll container
        threshold: 0.2 // Trigger when 20% of the card is visible
      }
    );

    const cards = scrollContainerRef.current?.querySelectorAll('.carousel-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [products]);

  // Select a subset of products to feature (e.g., first 5)
  const featuredProducts = products.slice(0, 5);

  return (
    <div className="relative mb-20 group/carousel">
      <div className="flex items-center justify-between mb-8 px-2">
        <h3 className="text-2xl font-bold text-mtkn-blue flex items-center gap-2">
          <span className="w-1.5 h-8 bg-mtkn-yellow rounded-full"></span>
          Featured Selections
        </h3>
        
        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-mtkn-blue hover:text-white hover:border-mtkn-blue transition-all active:scale-95"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-mtkn-blue hover:text-white hover:border-mtkn-blue transition-all active:scale-95"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {featuredProducts.map((product) => (
          <div 
            key={product.id}
            onClick={() => onProductClick(product)}
            className="carousel-card opacity-0 translate-y-8 snap-start flex-shrink-0 w-[260px] sm:w-[320px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-700 ease-out cursor-pointer overflow-hidden group/card relative"
          >
             {/* Badge */}
             <div className="absolute top-4 left-4 z-10">
                <span className="bg-mtkn-yellow text-mtkn-blue text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Featured</span>
             </div>

             {/* Image */}
             <div className="h-[250px] sm:h-[300px] bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-6 relative">
                 <div className="absolute inset-0 bg-mtkn-blue/0 group-hover/card:bg-mtkn-blue/5 transition-colors duration-300"></div>
                 <ProductImage 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-auto object-contain drop-shadow-md group-hover/card:scale-110 group-hover/card:drop-shadow-xl transition-all duration-500" 
                 />
             </div>

             {/* Content */}
             <div className="p-5 sm:p-6">
                <div className="text-xs text-gray-400 font-bold uppercase mb-1">{product.brand}</div>
                <h4 className="text-lg sm:text-xl font-bold text-mtkn-blue mb-2 group-hover/card:text-blue-600 transition-colors">{product.name}</h4>
                <div className="flex items-center justify-between mt-4">
                   <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-600">{product.type}</span>
                   <span className="text-mtkn-blue text-sm font-bold flex items-center gap-1 group-hover/card:translate-x-1 transition-transform">
                      View
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                   </span>
                </div>
             </div>
          </div>
        ))}
        
        {/* "View All" Card */}
        <div 
           className="carousel-card opacity-0 translate-y-8 snap-start flex-shrink-0 w-[180px] sm:w-[200px] flex flex-col items-center justify-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 hover:border-mtkn-blue hover:bg-blue-50 transition-all duration-700 ease-out cursor-pointer"
           onClick={() => {
              const el = document.getElementById('products-grid');
              el?.scrollIntoView({ behavior: 'smooth' });
           }}
        >
           <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-3">
              <svg className="w-6 h-6 text-mtkn-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
           </div>
           <span className="font-bold text-mtkn-blue">View Collection</span>
        </div>
      </div>
    </div>
  );
};