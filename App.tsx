import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductDetail } from './components/ProductDetail';
import { Footer } from './components/Footer';
import { Wholesale } from './components/Wholesale';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { ProductImage } from './components/ProductImage';
import { PRODUCTS } from './constants';
import { WineProduct } from './types';

export function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<WineProduct | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return PRODUCTS;
    const lowerQuery = searchQuery.toLowerCase();
    return PRODUCTS.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) ||
      product.brand.toLowerCase().includes(lowerQuery) ||
      product.type.toLowerCase().includes(lowerQuery) ||
      product.shortDescription.toLowerCase().includes(lowerQuery) ||
      product.fullDescription.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const handleProductClick = (product: WineProduct) => {
    setSelectedProduct(product);
    setActivePage('product-detail');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (page: string) => {
    // Determine if we need to switch views (from detail to list)
    const isDetailView = !!selectedProduct;

    if (page === 'product-detail') return;
    
    // Always reset product selection and set active page
    if (isDetailView) {
        setSelectedProduct(null);
    }
    setActivePage(page);
    
    // Scroll Logic
    const scrollToTarget = () => {
      if (page === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
         const element = document.getElementById(page);
         if (element) {
             const headerOffset = 85; // Adjusted for sticky header
             const elementPosition = element.getBoundingClientRect().top;
             const offsetPosition = elementPosition + window.scrollY - headerOffset;
             window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
             });
         }
      }
    };

    if (isDetailView) {
        // If switching from Detail View, we must wait for the DOM to render the Main View
        setTimeout(scrollToTarget, 100);
    } else {
        // If already on Main View, scroll immediately (small delay ensures state updates settle)
        setTimeout(scrollToTarget, 10);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-mtkn-yellow selection:text-mtkn-blue w-full overflow-x-hidden">
      {/* Global Background Pattern */}
      <div className="fixed inset-0 opacity-40 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#2e3691 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="relative z-10 flex flex-col flex-1 w-full">
        <Navbar onNavigate={handleNavigate} activePage={activePage} />

        <main className="flex-1 flex flex-col w-full">
          {activePage === 'product-detail' && selectedProduct ? (
            <ProductDetail 
              product={selectedProduct} 
              onBack={() => handleNavigate('products')}
              onInquire={() => handleNavigate('wholesale')}
            />
          ) : (
            <>
              <div id="home">
                 <Hero onExplore={() => handleNavigate('products')} onPartner={() => handleNavigate('wholesale')} />
              </div>

              {/* Products Section */}
              <div id="products" className="py-12 sm:py-16 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-12 md:mb-20">
                  <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-mtkn-blue font-bold tracking-[0.2em] uppercase text-xs mb-4 border border-blue-100">
                    Exclusive Portfolio
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-mtkn-blue mb-8 md:mb-10 tracking-tight">Our Fine Wines</h2>
                  
                  {/* Enhanced Search Bar */}
                  <div className="max-w-2xl mx-auto relative mb-8 z-20">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-mtkn-blue via-blue-500 to-mtkn-yellow rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500 group-hover:duration-200"></div>
                        <div className="relative bg-white rounded-full flex items-center shadow-xl shadow-blue-900/5 p-1.5 sm:p-2 border border-gray-100">
                            <div className="pl-3 md:pl-5 text-gray-400">
                               <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                            <input 
                                type="text"
                                placeholder="Search wines..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-grow px-3 py-3 md:px-4 md:py-4 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-lg w-full min-w-0"
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className="p-2 text-gray-300 hover:text-red-500 transition-colors mr-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            )}
                            <button className="hidden sm:block bg-mtkn-blue text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold hover:bg-blue-800 transition-all shadow-md hover:shadow-lg active:scale-95 duration-200">
                                Search
                            </button>
                        </div>
                    </div>
                  </div>
                  
                  {/* Filter Tags */}
                  <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
                     <span>Popular:</span>
                     <button onClick={() => setSearchQuery('Red')} className="hover:text-mtkn-blue hover:underline">Red</button>
                     <button onClick={() => setSearchQuery('White')} className="hover:text-mtkn-blue hover:underline">White</button>
                     <button onClick={() => setSearchQuery('Sparkling')} className="hover:text-mtkn-blue hover:underline">Sparkling</button>
                  </div>
                </div>

                {/* Featured Carousel (Only shown when not searching) */}
                {!searchQuery && (
                  <FeaturedCarousel products={PRODUCTS} onProductClick={handleProductClick} />
                )}

                {/* Product Grid Anchor */}
                <div id="products-grid"></div>

                {/* Product Grid - Responsive Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
                    {filteredProducts.map(product => (
                        <div 
                          key={product.id} 
                          className="bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden group transition-all duration-500 ease-out hover:shadow-xl hover:shadow-mtkn-blue/10 hover:-translate-y-1 hover:scale-[1.02]"
                        >
                            {/* Image Area - Aspect Ratio 2:3 */}
                            <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden cursor-pointer w-full" onClick={() => handleProductClick(product)}>
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <div className="absolute w-40 h-40 bg-mtkn-blue/5 rounded-full blur-2xl group-hover:bg-mtkn-yellow/10 transition-colors duration-500"></div>
                                    <ProductImage 
                                      src={product.image} 
                                      alt={product.name}
                                      className="h-full w-full object-contain drop-shadow-xl group-hover:scale-110 group-hover:drop-shadow-2xl transition-all duration-500 ease-out relative z-10"
                                    />
                                </div>
                                <div className="absolute top-4 left-4 z-20">
                                  <span className={`text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border ${
                                        product.type === 'Red' ? 'bg-red-50 text-red-900 border-red-100' :
                                        product.type === 'White' ? 'bg-yellow-50 text-yellow-900 border-yellow-100' :
                                        product.type === 'Sparkling' ? 'bg-blue-50 text-blue-900 border-blue-100' :
                                        'bg-pink-50 text-pink-900 border-pink-100'
                                    }`}>
                                        {product.type}
                                    </span>
                                </div>
                                {/* Details Overlay on hover (desktop) */}
                                <div className="hidden lg:flex absolute inset-0 bg-mtkn-blue/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center p-6 text-center backdrop-blur-sm z-30">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                      <p className="text-white text-sm mb-4 line-clamp-4">{product.shortDescription}</p>
                                      <span className="bg-mtkn-yellow text-mtkn-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">View Details</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col relative z-20 bg-white">
                                <div className="mb-2 text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                  <span className="w-1 h-1 bg-mtkn-yellow rounded-full"></span>
                                  {product.brand}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-mtkn-blue mb-3 cursor-pointer hover:text-blue-600 transition-colors leading-tight" onClick={() => handleProductClick(product)}>
                                    {product.name}
                                </h3>
                                <div className="w-10 h-0.5 bg-gray-100 mb-4 group-hover:w-full group-hover:bg-mtkn-yellow transition-all duration-500"></div>
                                <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow leading-relaxed">
                                    {product.shortDescription}
                                </p>
                                
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                      {product.stats.alcohol}
                                    </span>
                                    <button 
                                      onClick={() => handleProductClick(product)}
                                      className="text-mtkn-blue font-bold text-sm flex items-center gap-1 group/btn hover:text-mtkn-yellow transition-colors"
                                    >
                                        Details
                                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200 mt-12">
                    <div className="inline-block p-6 bg-gray-50 rounded-full mb-4">
                       <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">No wines match your search</h3>
                    <p className="text-gray-500 mb-6">Try searching for a different name, type, or brand.</p>
                    <button onClick={() => setSearchQuery('')} className="bg-mtkn-blue text-white px-6 py-2 rounded-full font-bold shadow hover:bg-blue-800 transition-all">Clear Filters</button>
                  </div>
                )}
              </div>

              {/* Wholesale/Contact Section */}
              <div id="about"></div>
              <Wholesale />
            </>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}