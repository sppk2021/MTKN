import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => {
  return (
    <img 
      // Replace the src below with your actual logo file path (e.g., "/mtkn-logo.png")
      src="https://uploads.onecompiler.io/43924vdyc/44c8p7bab/Final.png"
      alt="MTKN Food and Beverage" 
      className={`object-contain ${className}`}
      draggable={false}
    />
  );
};