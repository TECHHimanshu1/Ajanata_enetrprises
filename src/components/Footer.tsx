import { Phone, Mail, MapPin, Instagram, ShieldCheck, ArrowUp } from 'lucide-react';
import { ActivePage, Product } from '../types';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handlePageTransfer = (pageId: ActivePage) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#0F3B36] text-white pt-16 pb-8 border-t-4 border-[#F59E0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 100 100" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeDasharray="160 100" className="opacity-20" />
              <path d="M 12,50 C 12,25 35,12 50,12 C 75,12 88,38 88,50" fill="none" stroke="#FFFFFF" strokeWidth="5" />
              <path d="M 88,50 C 88,75 62,88 50,88 C 25,88 12,65 12,50" fill="none" stroke="#F59E0B" strokeWidth="5" />
              <path d="M 32,74 L 50,22 L 68,74" fill="none" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider text-white font-display uppercase leading-tight">
                AJANTA
              </span>
              <span className="text-[9px] font-semibold tracking-[0.2em] text-slate-300 uppercase">
                ENTERPRISES
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            Supplying premium rice mill machinery spare parts, industrial components, and high-performance laboratory equipment since 1998. Your partner in reducing downtime.
          </p>
          <div className="flex items-center gap-3.5 pt-2">
            <a 
              href="https://www.instagram.com/rice.spares.solution/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-white/20 hover:text-[#F59E0B] rounded-lg transition-all"
              title="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <div className="text-xs text-slate-300">
              <a href="https://www.instagram.com/rice.spares.solution/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                @rice.spares.solution
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider text-[#F59E0B] uppercase mb-4 pb-2 border-b border-white/10">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
            <li>
              <button onClick={() => handlePageTransfer('home')} className="hover:text-white hover:underline transition-all text-left">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handlePageTransfer('about')} className="hover:text-white hover:underline transition-all text-left">
                About Our History
              </button>
            </li>
            <li>
              <button onClick={() => handlePageTransfer('products')} className="hover:text-white hover:underline transition-all text-left">
                Industrial Catalogue
              </button>
            </li>
            <li>
              <button onClick={() => handlePageTransfer('dealers')} className="hover:text-white hover:underline transition-all text-left">
                Authorized Dealerships
              </button>
            </li>
            <li>
              <button onClick={() => handlePageTransfer('gallery')} className="hover:text-white hover:underline transition-all text-left">
                Product Gallery
              </button>
            </li>
            <li>
              <button onClick={() => handlePageTransfer('contact')} className="hover:text-white hover:underline transition-all text-left">
                Contact Address
              </button>
            </li>
          </ul>
        </div>

        {/* Trust Badges Dealing In Column */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider text-[#F59E0B] uppercase mb-4 pb-2 border-b border-white/10">
            Dealers & Brands
          </h4>
          <ul className="space-y-3.5 text-xs text-slate-300 font-sans">
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-medium">Alaska Rubber Roll</strong>
                <span>Superior elastomer performance</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-medium">Garlon Sewing Thread</strong>
                <span>High strength bag closures</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-medium">Sterling Abrasives</strong>
                <span>Abrasive whiteners & rollers</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact/Address Column */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider text-[#F59E0B] uppercase mb-4 pb-2 border-b border-white/10">
            Head Office
          </h4>
          <ul className="space-y-3 text-sm text-slate-300 font-sans">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed text-xs">
                No. 1/17/2, Village Chirasmi, Ganaur, Sonipat, Haryana – 131001, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
              <span className="text-xs">+91 94164 25166<br />+91 93500 89004</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
              <span className="text-xs break-all hover:underline cursor-pointer">
                ajantaenterprices9416@gmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-sans">
        <div>
          © {currentYear} <strong>Ajanta Enterprises</strong>. All Rights Reserved.
        </div>
        <div className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase">
          <span>Strengthening Rice Mills since 1998</span>
          <span className="text-slate-500">|</span>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-1 text-[#F59E0B] hover:underline"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
