import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ClipboardList } from 'lucide-react';
import { ActivePage, QuoteItem } from '../types';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  cartItems: QuoteItem[];
  setIsCartOpen: (isOpen: boolean) => void;
}

export default function Header({ activePage, setActivePage, cartItems, setIsCartOpen }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { id: ActivePage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'dealers', label: 'Brands & Dealerships' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const totalCartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="main-header" className="w-full bg-white z-50 sticky top-0 shadow-sm border-b border-slate-100">
      {/* Upper informational bar */}
      <div className="w-full bg-[#0F3B36] text-[11px] sm:text-xs text-slate-250 py-2 px-4 sm:px-6 md:px-8 flex flex-wrap justify-between items-center gap-2 select-none">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-100">
          <span className="flex items-center gap-1.5 font-sans">
            <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
            +91 94164 25166, +91 93500 89004
          </span>
          <span className="hidden leading-4 sm:flex items-center gap-1.5 font-sans">
            <Mail className="w-3.5 h-3.5 text-[#F59E0B]" />
            ajantaenterprices9416@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-x-4 text-slate-100">
          <span className="hidden md:flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#F59E0B]" />
            Sonipat, Haryana, India
          </span>
          <span className="bg-[#1B5E4A] px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold text-white">
            ESTD 1998
          </span>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
        {/* Brand Logo */}
        <div 
          id="brand-logo" 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="relative h-12 sm:h-16 flex-shrink-0 flex items-center">
             <img src="/logo.jpg" alt="Logo" className="h-full w-auto object-contain transform transition-transform group-hover:scale-105 duration-300" />
          </div>
        </div>

        {/* Desktop Navbar Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium tracking-wide transition-all py-1.5 border-b-2 relative ${
                activePage === link.id
                  ? 'text-[#0F3B36] border-[#F59E0B] font-semibold'
                  : 'text-slate-650 border-transparent hover:text-[#0F3B36] hover:border-[#1B5E4A]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Cart Counter and Sticky Contact Button */}
        <div className="flex items-center gap-3">
          {/* Quote Cart Indicator */}
          <button
            id="quote-cart-trigger"
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-none bg-slate-50 hover:bg-slate-100 border border-slate-200/60 text-[#0F3B36] transition-all flex items-center gap-1.5 focus:outline-none cursor-pointer"
            aria-label="Open quotation list"
          >
            <ClipboardList className="w-5 h-5 text-[#1B5E4A]" />
            {totalCartItemsCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#F59E0B] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs motion-safe:animate-bounce">
                {totalCartItemsCount}
              </span>
            )}
            <span className="hidden sm:inline text-xs font-semibold text-slate-700">Quote List</span>
          </button>

          {/* Contact quick quote button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex bg-[#1B5E4A] text-white text-xs font-semibold tracking-wider uppercase px-4 py-2.5 rounded-none hover:bg-[#0F3B36] transition-all duration-300 shadow-xs cursor-pointer"
          >
            Request Call
          </button>

          {/* Mobile menu hamburger */}
          <button
            id="mobile-menu-hamburger"
            className="p-2 text-slate-755 hover:text-[#0F3B36] lg:hidden rounded-none bg-slate-50 border border-slate-100 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-panel" className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 z-50">
          <nav className="flex flex-col p-4 space-y-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-none text-sm font-medium transition-all ${
                  activePage === link.id
                    ? 'bg-[#0F3B36]/5 text-[#0F3B36] font-semibold border-l-4 border-[#F59E0B]'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-slate-100 pt-3 mt-2 px-4 flex flex-col gap-2">
              <div className="text-xs text-slate-500">
                Email: ajantaenterprices9416@gmail.com
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full bg-slate-100 text-[#0F3B36] px-4 py-2.5 rounded-none text-xs font-semibold uppercase text-center"
              >
                Quote List ({totalCartItemsCount} Items)
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
