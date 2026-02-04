import React, { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export const ProductImage: React.FC<ProductImageProps> = ({ src, alt, className, onClick }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div 
        className={`flex flex-col items-center justify-center relative overflow-hidden ${className}`} 
        onClick={onClick}
        title={`Missing image: ${src}`}
      >
        <div className="absolute inset-0 bg-gray-50/50 rounded-xl"></div>
        {/* Abstract Bottle Silhouette */}
        <svg 
            className="w-full h-full p-4 text-gray-200 relative z-10 opacity-50" 
            viewBox="0 0 100 300" 
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
        >
           <path d="M35 0 H65 V10 C65 15 65 20 65 30 V80 C65 110 85 120 85 160 V280 C85 290 80 300 50 300 C20 300 15 290 15 280 V160 C15 120 35 110 35 80 V30 C35 20 35 15 35 10 V0 Z" />
        </svg>
        <div className="absolute bottom-4 left-0 right-0 text-center px-2 z-20">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest bg-white/80 px-2 py-1 rounded backdrop-blur-sm shadow-sm border border-gray-100">
                {alt}
            </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-300`}
      onClick={onClick}
      onError={() => setError(true)}
      draggable={false}
      loading="lazy"
    />
  );
};