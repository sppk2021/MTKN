import React, { useState } from 'react';
import { Logo } from './Logo';

interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Our Wines', id: 'products' },
    { name: 'About', id: 'about' },
    { name: 'Wholesale', id: 'wholesale' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer transform hover:scale-105 transition-transform duration-200" onClick={() => onNavigate('home')}>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                className={`
                  relative px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ease-out overflow-hidden group
                  ${activePage === link.id 
                    ? 'bg-mtkn-yellow text-mtkn-blue shadow-lg shadow-mtkn-yellow/30 transform scale-105' 
                    : 'text-gray-500 hover:text-mtkn-blue hover:bg-blue-50/50 hover:shadow-md hover:shadow-blue-900/5 hover:-translate-y-0.5'
                  }
                `}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Hover shine effect for inactive items */}
                {activePage !== link.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0 opacity-50 pointer-events-none"></div>
                )}
              </button>
            ))}
            
            <div className="pl-4 ml-2 border-l border-gray-200">
              <button 
                type="button"
                onClick={() => onNavigate('wholesale')}
                className="bg-mtkn-blue text-white px-7 py-2.5 rounded-full font-bold text-sm hover:bg-blue-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Partner With Us
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-mtkn-blue p-2 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in-down shadow-lg absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => {
                  onNavigate(link.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-4 rounded-xl text-base font-bold transition-all duration-200 group flex items-center justify-between ${
                  activePage === link.id
                    ? 'bg-mtkn-yellow text-mtkn-blue shadow-sm'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-mtkn-blue hover:pl-6'
                }`}
              >
                {link.name}
                {activePage !== link.id && (
                  <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                )}
              </button>
            ))}
            <button
                type="button"
                onClick={() => {
                  onNavigate('wholesale');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-4 rounded-xl text-base font-bold bg-mtkn-blue text-white mt-4 shadow-md active:scale-98 transition-transform"
            >
                Partner With Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};