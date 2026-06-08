import { useState, useMemo } from 'react';
import { Eye, X, ZoomIn, Search, Image as ImageIcon, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<'photo' | 'blueprint'>('photo');

  const categories = ['all', 'Products', 'Spare Parts', 'Laboratory Equipment', 'Rice Mill Components'];

  const handleOpenLightbox = (item: typeof GALLERY_ITEMS[0]) => {
    setLightboxItem(item);
    setActiveTab(item.imageSrc && !failedImages[item.id] ? 'photo' : 'blueprint');
  };

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const renderSchematicVector = (type: string, isBig: boolean = false) => {
    switch (type) {
      case 'roll':
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full stroke-current ${isBig ? 'text-[#0F3B36]' : 'text-[#1B5E4A]'} opacity-90`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="25" width="60" height="50" rx="3" strokeWidth={isBig ? "2" : "3"} />
            <circle cx="50" cy="50" r="12" strokeWidth="2.5" />
            <path d="M 28,25 V 75 M 34,25 V 75 M 66,25 V 75 M 72,25 V 75" strokeWidth="1" strokeDasharray="3 3" />
            <text x="50" y="16" className="text-[6px] font-mono fill-[#1B5E4A]" textAnchor="middle">Ø 12" SHORE-A ROLL</text>
          </svg>
        );
      case 'screen':
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full stroke-current ${isBig ? 'text-[#0F3B36]' : 'text-[#1B5E4A]'} opacity-90`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="20" width="70" height="60" rx="2" strokeWidth={isBig ? "2" : "3"} />
            <circle cx="28" cy="35" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="42" cy="35" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="56" cy="35" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="70" cy="35" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="28" cy="50" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="42" cy="50" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="56" cy="50" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="70" cy="50" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="28" cy="65" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="42" cy="65" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="56" cy="65" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="70" cy="65" r="1.5" fill="#1B5E4A" stroke="none" />
            <line x1="15" y1="42" x2="85" y2="42" stroke="#F59E0B" strokeWidth="2" />
            <text x="50" y="14" className="text-[6px] font-mono fill-[#1B5E4A]" textAnchor="middle">SPRING STEEL JALLI</text>
          </svg>
        );
      case 'shaft':
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full stroke-current ${isBig ? 'text-[#0F3B36]' : 'text-[#1B5E4A]'} opacity-90`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="42" width="80" height="16" rx="1" strokeWidth={isBig ? "2" : "3"} />
            <rect x="25" y="38" width="10" height="24" strokeWidth="2" fill="#E2E8F0" />
            <rect x="65" y="38" width="10" height="24" strokeWidth="2" fill="#E2E8F0" />
            <text x="50" y="24" className="text-[6px] font-mono fill-[#1B5E4A]" textAnchor="middle">EN24 ALLOY SHAFTS</text>
          </svg>
        );
      case 'lab-equipment':
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full stroke-current ${isBig ? 'text-[#0F3B36]' : 'text-[#1B5E4A]'} opacity-90`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="60" height="60" rx="4" strokeWidth={isBig ? "2" : "3"} fill="#F8FAFC" />
            <rect x="30" y="32" width="16" height="36" rx="1" strokeWidth="1.5" />
            <rect x="52" y="32" width="18" height="15" fill="#111827" strokeWidth="1" />
            <circle cx="58" cy="62" r="3" fill="#10B981" />
            <circle cx="68" cy="62" r="3" fill="#EF4444" />
            <text x="50" y="14" className="text-[6px] font-mono fill-[#1B5E4A]" textAnchor="middle">LAB DIAGNOSTICS</text>
          </svg>
        );
      case 'bucket':
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full stroke-current ${isBig ? 'text-[#0F3B36]' : 'text-[#1B5E4A]'} opacity-90`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20,30 L 45,18 L 85,30 L 68,70 L 32,70 Z" strokeWidth={isBig ? "2" : "3"} fill="#F8FAFC" />
            <circle cx="42" cy="45" r="2.5" fill="#F59E0B" />
            <circle cx="60" cy="48" r="2.5" fill="#F59E0B" />
            <text x="50" y="84" className="text-[6px] font-mono fill-[#1B5E4A]" textAnchor="middle">POLYMER CORRUGATION</text>
          </svg>
        );
      case 'valve':
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full stroke-current ${isBig ? 'text-[#0F3B36]' : 'text-[#1B5E4A]'} opacity-90`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="15" width="40" height="70" rx="2" strokeWidth={isBig ? "2" : "3"} />
            <rect x="20" y="45" width="60" height="10" rx="1" strokeWidth="2" fill="#E2E8F0" />
            <line x1="50" y1="15" x2="50" y2="85" strokeWidth="1" strokeDasharray="2 2" />
            <text x="50" y="10" className="text-[6px] font-mono fill-[#1B5E4A]" textAnchor="middle">PNEUMATIC SLIDERS</text>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full stroke-current ${isBig ? 'text-[#0F3B36]' : 'text-[#1B5E4A]'} opacity-90`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" width="50" height="50" rx="3" strokeWidth={isBig ? "2" : "3"} strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="8" strokeWidth="2" />
            <text x="50" y="16" className="text-[6px] font-mono fill-[#1B5E4A]" textAnchor="middle">COMPACT SPARE PART</text>
          </svg>
        );
    }
  };
  return (
    <div id="gallery-section" className="space-y-12 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-slate-50 py-16 border-b border-slate-200/60 select-none">
        <div className="max-w-4xl mx-auto text-center space-y-4 px-4">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F59E0B] block font-mono">
            VISUAL METROLOGY EXHIBITION
          </span>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#0F3B36] font-display">
            Component <span className="italic font-display font-light text-[#1B5E4A]">Gallery</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-sans font-light border-l-2 border-[#F59E0B] pl-4 text-left">
            Review the structural outlines, perforation profiles, and exact alignment castings of the premium rice milling components we supply. Click on any block to expand the high-fidelity blueprint lightbox scale.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Horizontal tabs */}
        <div className="flex flex-wrap gap-2 justify-center select-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-5 py-2.5 rounded-none capitalize border font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0F3B36] text-white border-transparent font-semibold shadow-xs'
                  : 'bg-white text-slate-605 border-slate-200 hover:bg-slate-50 cursor-pointer'
              }`}
            >
              {cat === 'all' ? 'All Gallery Items' : cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-2 select-none">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="bg-white rounded-none border border-slate-200/80 overflow-hidden shadow-xs hover:border-[#1B5E4A] transition-all group flex flex-col h-full cursor-zoom-in relative"
            >
              {/* Inner overlay hover layout */}
              <div className="w-full pt-[90%] bg-slate-50 relative flex items-center justify-center p-8 select-none">
                <div className="absolute inset-0 p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {item.imageSrc && !failedImages[item.id] ? (
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-all duration-305"
                      onError={() => setFailedImages((prev) => ({ ...prev, [item.id]: true }))}
                    />
                  ) : (
                    renderSchematicVector(item.imageType)
                  )}
                </div>

                {/* Subtle Hover Lens Eye Overlay */}
                <div className="absolute inset-0 bg-[#0F3B36]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <div className="flex items-center gap-1.5 bg-white/10 [backdrop-filter:blur(3px)] px-4 py-2 rounded-none text-xs font-semibold uppercase tracking-wider scale-95 group-hover:scale-100 transition-transform">
                    <Eye className="w-4 h-4 text-[#F59E0B]" />
                    <span>Expand Blueprint</span>
                  </div>
                </div>
              </div>

              {/* Title parameters box info */}
              <div className="p-4 border-t border-slate-100 text-left bg-white">
                <span className="text-[9px] font-bold font-mono text-[#1B5E4A] uppercase tracking-wider block mb-0.5">
                  {item.category}
                </span>
                <h4 className="text-xs font-bold text-[#0F3B36] font-display leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Interactive Lightbox zoomed Modal overlay markup */}
      {lightboxItem && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
          {/* dark background drop */}
          <div 
            className="absolute inset-0 bg-black/85 backdrop-blur-xs transition-opacity cursor-zoom-out" 
            onClick={() => setLightboxItem(null)}
          />

          <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 animate-scale flex flex-col max-h-[95vh]">
            {/* Header info */}
            <div className="bg-[#0F3B36] text-white px-6 py-4 flex items-center justify-between">
              <div className="text-left">
                <span className="text-[9px] font-bold font-mono text-[#F59E0B] uppercase tracking-widest block font-sans">
                  {lightboxItem.category} • HD BLUEPRINT
                </span>
                <h3 className="text-base font-bold font-display uppercase tracking-wide">
                  {lightboxItem.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/15 transition-all focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Capsule Tab Toggle if photo available */}
            {lightboxItem.imageSrc && !failedImages[lightboxItem.id] && (
              <div className="bg-slate-100 p-1.5 flex justify-center border-b border-slate-200">
                <div className="inline-flex rounded-full bg-slate-200/80 p-1">
                  <button
                    onClick={() => setActiveTab('photo')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'photo'
                        ? 'bg-[#0F3B36] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Actual Component Photo
                  </button>
                  <button
                    onClick={() => setActiveTab('blueprint')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'blueprint'
                        ? 'bg-[#0F3B36] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    CAD Draft Blueprint
                  </button>
                </div>
              </div>
            )}

            {/* Content blueprint/illustration renderer details */}
            <div className="bg-slate-50 p-6 flex-grow flex flex-col items-center justify-center select-none overflow-y-auto">
              <div className="w-72 h-72 sm:w-80 sm:h-80 relative bg-white rounded-2xl border border-slate-200/80 p-5 flex items-center justify-center shadow-md overflow-hidden">
                <div className="absolute top-2 left-3 font-mono text-[8px] text-slate-400">SCALE: 1:2.5 MM</div>
                <div className="absolute top-2 right-3 font-mono text-[8px] text-[#1B5E4A] font-bold uppercase tracking-wider">AE APPROVED</div>
                
                {activeTab === 'photo' && lightboxItem.imageSrc && !failedImages[lightboxItem.id] ? (
                  <img
                    src={lightboxItem.imageSrc}
                    alt={lightboxItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all"
                    onError={() => setFailedImages((prev) => ({ ...prev, [lightboxItem.id]: true }))}
                  />
                ) : (
                  renderSchematicVector(lightboxItem.imageType, true)
                )}
                
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[8px] text-slate-400">CAD MODEL: ACC-DS-0{lightboxItem.id}</div>
              </div>
              
              {/* Detailed Description below image */}
              <div className="mt-4 max-w-sm text-center">
                <p className="text-xs text-slate-550 leading-relaxed font-sans">
                  {lightboxItem.details || "A premium component conforming to rigorous quality-control specifications to prevent operational milling failures."}
                </p>
              </div>
            </div>

            {/* footer actions */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-sans text-slate-550 select-none">
              <span className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                Strict tolerance checking and balancing verified.
              </span>
              <button 
                onClick={() => setLightboxItem(null)}
                className="text-[#1B5E4A] font-bold hover:underline"
              >
                Dismiss Lens view
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
