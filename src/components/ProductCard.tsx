import { useState } from 'react';
import { Plus, Check, ClipboardCheck, ArrowUpRight, HelpCircle } from 'lucide-react';
import { Product, QuoteItem } from '../types';

interface ProductCardProps {
  key?: any;
  product: Product;
  onAddToQuote: (product: Product, quantity: number, specs?: string) => void;
  isInQuoteList: boolean;
  onOpenQuoteList: () => void;
}

export default function ProductCard({ product, onAddToQuote, isInQuoteList, onOpenQuoteList }: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [customSpec, setCustomSpec] = useState<string>('');
  const [showSpecInput, setShowSpecInput] = useState<boolean>(false);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const handleAddClick = () => {
    onAddToQuote(product, quantity, customSpec);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const renderSchematicIllustration = (type: string) => {
    switch (type) {
      case 'roll':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#1B5E4A]" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Tech Grids */}
            <line x1="10" y1="60" x2="110" y2="60" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="60" y1="10" x2="60" y2="110" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Rubber Roll Cylinder Outline */}
            <rect x="25" y="30" width="70" height="60" rx="4" stroke="#0F3B36" strokeWidth="2.5" fill="#F8FAFC" />
            {/* Inner shaft hole */}
            <circle cx="60" cy="60" r="14" stroke="#F59E0B" strokeWidth="2" fill="#F1F5F9" />
            <circle cx="60" cy="60" r="8" stroke="#0F3B36" strokeWidth="1.5" />
            
            {/* Wearing lines & friction grooves */}
            <path d="M 33,30 L 33,90 M 41,30 L 41,90 M 79,30 L 79,90 M 87,30 L 87,90" stroke="#1B5E4A" strokeWidth="1" strokeDasharray="2 2" />
            {/* Text badge */}
            <text x="60" y="24" className="text-[7px] font-bold font-mono tracking-wider fill-[#1B5E4A] text-center" textAnchor="middle">Ø 10" ELASTOMER</text>
          </svg>
        );
      case 'coupling':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#0F3B36]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="45" stroke="#0F3B36" strokeWidth="2.5" strokeDasharray="4 2" fill="none" />
            <circle cx="60" cy="60" r="32" stroke="#1B5E4A" strokeWidth="3" fill="#F8FAFC" />
            <circle cx="60" cy="60" r="16" stroke="#F59E0B" strokeWidth="2" fill="#F1F5F9" />
            
            {/* Locking Bolts */}
            <circle cx="60" cy="24" r="4.5" stroke="#0F3B36" strokeWidth="2" fill="#1B5E4A" />
            <circle cx="60" cy="96" r="4.5" stroke="#0F3B36" strokeWidth="2" fill="#1B5E4A" />
            <circle cx="24" cy="60" r="4.5" stroke="#0F3B36" strokeWidth="2" fill="#1B5E4A" />
            <circle cx="96" cy="60" r="4.5" stroke="#0F3B36" strokeWidth="2" fill="#1B5E4A" />
            
            {/* Interlocking keyways */}
            <path d="M 55,60 H 65 M 60,55 V 65" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="60" y="112" className="text-[7px] font-bold font-mono tracking-wider fill-[#1B5E4A]" textAnchor="middle">TAPER-LOCK KEYWAY</text>
          </svg>
        );
      case 'screen':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#1B5E4A]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="25" width="80" height="70" rx="3" stroke="#0F3B36" strokeWidth="2" fill="#F8FAFC" />
            {/* Hole Mesh Matrix */}
            <circle cx="35" cy="40" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="45" cy="40" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="55" cy="40" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="65" cy="40" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="75" cy="40" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="85" cy="40" r="1.5" fill="#1B5E4A" stroke="none" />

            <circle cx="35" cy="52" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="45" cy="52" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="55" cy="52" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="65" cy="52" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="75" cy="52" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="85" cy="52" r="1.5" fill="#1B5E4A" stroke="none" />

            <circle cx="35" cy="64" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="45" cy="64" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="55" cy="64" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="65" cy="64" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="75" cy="64" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="85" cy="64" r="1.5" fill="#1B5E4A" stroke="none" />

            <circle cx="35" cy="76" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="45" cy="76" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="55" cy="76" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="65" cy="76" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="75" cy="76" r="1.5" fill="#1B5E4A" stroke="none" />
            <circle cx="85" cy="76" r="1.5" fill="#1B5E4A" stroke="none" />

            {/* Orange reinforcements */}
            <line x1="20" y1="46" x2="100" y2="46" stroke="#F59E0B" strokeWidth="1.5" />
            <line x1="20" y1="70" x2="100" y2="70" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="60" y="110" className="text-[7px] font-bold font-mono tracking-wider fill-[#0F3B36]" textAnchor="middle">HARDENED ALLOY MESH</text>
          </svg>
        );
      case 'shaft':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#0F3B36]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="60" x2="110" y2="60" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
            {/* The shaft rod */}
            <rect x="15" y="48" width="90" height="24" rx="2" stroke="#0F3B36" strokeWidth="2.5" fill="#F8FAFC" />
            {/* Center key locks/bearings details */}
            <rect x="35" y="44" width="12" height="32" rx="1" stroke="#F59E0B" strokeWidth="2" fill="#E2E8F0" />
            <rect x="75" y="44" width="12" height="32" rx="1" stroke="#F59E0B" strokeWidth="2" fill="#E2E8F0" />
            
            <line x1="15" y1="54" x2="105" y2="54" stroke="#1B5E4A" strokeWidth="1.5" />
            <line x1="15" y1="66" x2="105" y2="66" stroke="#1B5E4A" strokeWidth="1.5" />
            <text x="60" y="24" className="text-[7px] font-bold font-mono tracking-wider fill-[#1B5E4A]" textAnchor="middle">EN24 TENSILE ALLOY</text>
          </svg>
        );
      case 'feeder':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#1B5E4A]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="42" width="70" height="36" rx="2" stroke="#0F3B36" strokeWidth="2" fill="#F8FAFC" />
            {/* Spirals */}
            <path d="M 30,78 L 45,42 M 45,78 L 60,42 M 60,78 L 75,42 M 75,78 L 90,42" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <path d="M 25,60 H 95" stroke="#0F3B36" strokeWidth="1" strokeDasharray="2 2" />
            <text x="60" y="104" className="text-[7px] font-bold font-mono tracking-wider fill-[#1B5E4A]" textAnchor="middle">GRADUATED HELICAL PITCH</text>
          </svg>
        );
      case 'milling':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#0F3B36]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="25" width="60" height="70" rx="3" stroke="#0F3B36" strokeWidth="2.5" fill="#F8FAFC" />
            {/* Mirror finish luster lines */}
            <line x1="45" y1="25" x2="45" y2="95" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="50" y1="25" x2="50" y2="95" stroke="#E2E8F0" strokeWidth="2" />
            <line x1="75" y1="25" x2="75" y2="95" stroke="#94A3B8" strokeWidth="1" />
            {/* Water spray slots */}
            <path d="M 38,40 Q 40,42 42,40 M 38,60 Q 40,62 42,60 M 38,80 Q 40,82 42,80" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <path d="M 78,40 Q 80,42 82,40 M 78,60 Q 80,62 82,60 M 78,80 Q 80,82 82,80" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <text x="60" y="110" className="text-[7px] font-bold font-mono tracking-wider fill-[#1B5E4A]" textAnchor="middle">SUS420 MIRROR CHROMIUM</text>
          </svg>
        );
      case 'nozzle':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#1B5E4A]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 60,15 L 60,95" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="2 2" />
            {/* Nozzle body block */}
            <rect x="42" y="45" width="36" height="30" rx="1" stroke="#0F3B36" strokeWidth="2" fill="#F8FAFC" />
            {/* Spray tip */}
            <path d="M 52,45 L 45,25 H 75 L 68,45 Z" fill="#F1F5F9" stroke="#1B5E4A" strokeWidth="2" />
            {/* Connection threads */}
            <rect x="48" y="75" width="24" height="15" stroke="#F59E0B" strokeWidth="1.5" />
            <line x1="48" y1="80" x2="72" y2="80" stroke="#F59E0B" strokeWidth="1" />
            <line x1="48" y1="85" x2="72" y2="85" stroke="#F59E0B" strokeWidth="1" />
            {/* Mist representation */}
            <path d="M 35,15 Q 48,22 60,25 Q 72,22 85,15" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="60" y="110" className="text-[7px] font-bold font-mono tracking-wider fill-[#0F3B36]" textAnchor="middle">MICRO-ATOMIZATION TIP</text>
          </svg>
        );
      case 'bucket':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#0F3B36]" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Isometric Bucket */}
            <path d="M 25,35 L 50,22 L 95,35 L 75,78 L 35,78 Z" stroke="#0F3B36" strokeWidth="2" fill="#F8FAFC" strokeLinejoin="round" />
            <path d="M 50,22 L 50,65" stroke="#1B5E4A" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Mounting pre-drilled holes */}
            <circle cx="45" cy="50" r="3" stroke="#F59E0B" strokeWidth="1.5" fill="#E2E8F0" />
            <circle cx="65" cy="53" r="3" stroke="#F59E0B" strokeWidth="1.5" fill="#E2E8F0" />
            <text x="60" y="104" className="text-[7px] font-bold font-mono tracking-wider fill-[#1B5E4A]" textAnchor="middle">POLYMER CORE STRUCTURE</text>
          </svg>
        );
      case 'magnet':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#1B5E4A]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="30" width="70" height="60" rx="2" stroke="#0F3B36" strokeWidth="2.5" fill="#F8FAFC" />
            {/* Magnetic grid blocks */}
            <rect x="35" y="40" width="12" height="40" stroke="#F59E0B" strokeWidth="1.5" />
            <rect x="54" y="40" width="12" height="40" stroke="#F59E0B" strokeWidth="1.5" />
            <rect x="73" y="40" width="12" height="40" stroke="#F59E0B" strokeWidth="1.5" />
            
            {/* Flux vectors */}
            <path d="M 30,22 Q 60,10 90,22" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M 30,98 Q 60,110 90,98" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />
            <text x="60" y="106" className="text-[7px] font-bold font-mono tracking-wider fill-[#0F3B36]" textAnchor="middle">10,000+ GAUSS NdFeB</text>
          </svg>
        );
      case 'lab-equipment':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#0F3B36]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="25" width="80" height="70" rx="4" stroke="#0F3B36" strokeWidth="2.5" fill="#F8FAFC" />
            {/* Glass core column */}
            <rect x="35" y="35" width="18" height="50" rx="1" stroke="#1B5E4A" strokeWidth="1.5" fill="#E2E8F0" />
            {/* Graduation marks on testing tube */}
            <line x1="48" y1="42" x2="51" y2="42" stroke="#1B5E4A" strokeWidth="1" />
            <line x1="46" y1="50" x2="51" y2="50" stroke="#1B5E4A" strokeWidth="1" />
            <line x1="48" y1="58" x2="51" y2="58" stroke="#1B5E4A" strokeWidth="1" />
            <line x1="46" y1="66" x2="51" y2="66" stroke="#1B5E4A" strokeWidth="1" />
            <line x1="48" y1="74" x2="51" y2="74" stroke="#1B5E4A" strokeWidth="1" />

            {/* Electronic controls on right side */}
            <rect x="62" y="38" width="28" height="20" rx="1" stroke="#F59E0B" strokeWidth="1.5" fill="#111827" />
            {/* Status led digits mockup */}
            <text x="76" y="52" className="text-[10px] font-mono font-black fill-[#F59E0B]" textAnchor="middle">88.8</text>
            
            {/* Button knobs */}
            <circle cx="68" cy="68" r="3.5" stroke="#0F3B36" strokeWidth="1.5" />
            <circle cx="82" cy="68" r="3.5" stroke="#0F3B36" strokeWidth="1.5" />
            
            <circle cx="68" cy="80" r="3" fill="#10B981" />
            <circle cx="82" cy="80" r="3" fill="#EF4444" />
            <text x="60" y="110" className="text-[7px] font-bold font-mono tracking-wider fill-[#1B5E4A]" textAnchor="middle">DIGITAL SEPARATION TEST</text>
          </svg>
        );
      case 'valve':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#1B5E4A]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="35" y="20" width="50" height="80" rx="2" stroke="#0F3B36" strokeWidth="2.5" fill="#F8FAFC" />
            {/* Central locking blade */}
            <rect x="25" y="54" width="70" height="12" rx="1" stroke="#F59E0B" strokeWidth="2" fill="#E2E8F0" />
            <circle cx="60" cy="40" r="7" stroke="#1B5E4A" strokeWidth="1.5" />
            <circle cx="60" cy="80" r="7" stroke="#1B5E4A" strokeWidth="1.5" />
            <line x1="60" y1="20" x2="60" y2="100" stroke="#0F3B36" strokeWidth="1" strokeDasharray="3 3" />
            <text x="60" y="112" className="text-[7px] font-bold font-mono tracking-wider fill-[#0F3B36]" textAnchor="middle">PNEUMATIC BLADE SEAL</text>
          </svg>
        );
      case 'pulley':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#1B5E4A]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="42" stroke="#0F3B36" strokeWidth="3" fill="#F8FAFC" />
            <circle cx="60" cy="60" r="35" stroke="#1B5E4A" strokeWidth="1.5" strokeDasharray="4 2" />
            <circle cx="60" cy="60" r="18" stroke="#F59E0B" strokeWidth="2" fill="#E2E8F0" />
            <circle cx="60" cy="60" r="8" stroke="#0F3B36" strokeWidth="1.5" />
            {/* Shaft lock keyway */}
            <rect x="58" y="48" width="4" height="6" fill="#0F3B36" />
            <text x="60" y="112" className="text-[7px] font-bold font-mono tracking-wider fill-[#0F3B36]" textAnchor="middle">DUAL-GROOVE TAPER FIT</text>
          </svg>
        );
      case 'ring':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#0F3B36]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="42" stroke="#0F3B36" strokeWidth="4" fill="#F8FAFC" />
            <circle cx="60" cy="60" r="30" stroke="#1B5E4A" strokeWidth="3" />
            {/* Screw guides */}
            <circle cx="60" cy="30" r="2.5" fill="#F59E0B" />
            <circle cx="60" cy="90" r="2.5" fill="#F59E0B" />
            <circle cx="30" cy="60" r="2.5" fill="#F59E0B" />
            <circle cx="90" cy="60" r="2.5" fill="#F59E0B" />
            <text x="60" y="112" className="text-[7px] font-bold font-mono tracking-wider fill-[#1B5E4A]" textAnchor="middle">ALIGNMENT COLLAR</text>
          </svg>
        );
      case 'machine':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-[#1B5E4A]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="30" width="70" height="50" rx="3" stroke="#0F3B36" strokeWidth="2" fill="#F8FAFC" />
            {/* Machine handle and needle guard */}
            <path d="M 40,30 V 20 H 80 V 30" stroke="#0F3B36" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="45" cy="55" r="8" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="75" cy="55" r="8" stroke="#1B5E4A" strokeWidth="2" />
            {/* Needle shaft */}
            <line x1="60" y1="50" x2="60" y2="90" stroke="#F59E0B" strokeWidth="2.5" />
            <text x="60" y="104" className="text-[7px] font-bold font-mono tracking-wider fill-[#0F3B36]" textAnchor="middle">AUTOMATIC BAG SEWER</text>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full stroke-current text-slate-400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" width="70" height="70" rx="3" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" fill="#F8FAFC" />
            {/* Diagonal isometric lines */}
            <line x1="25" y1="25" x2="95" y2="95" stroke="#CBD5E1" strokeWidth="1" />
            <line x1="95" y1="25" x2="25" y2="95" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="60" cy="60" r="10" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="60" y="108" className="text-[7px] font-bold font-mono tracking-wider fill-[#1B5E4A]" textAnchor="middle">PRECISION COMPONENT</text>
          </svg>
        );
    }
  };

  return (
    <article 
      id={`product-${product.id}`}
      className="bg-white rounded-none border border-slate-200/80 overflow-hidden hover:border-[#1B5E4A] transition-all flex flex-col h-full group"
    >
      {/* Schematic drawing banner */}
      <div className="w-full pt-[90%] bg-slate-50 relative flex items-center justify-center border-b border-slate-100 select-none overflow-hidden">
        {/* Subtle engineering line grid coordinate marks */}
        <div className="absolute top-2 left-3 text-[8px] font-mono text-slate-450 tracking-wider">
          PART_ID: AE-{product.id.toUpperCase()}
        </div>
        <div className="absolute top-2 right-3 flex items-center gap-1.5 bg-white/70 backdrop-blur-sm shadow-subtle px-1.5 py-0.5 rounded-none text-[8px] font-mono text-[#0F3B36] font-semibold uppercase tracking-wider">
          {product.brand && product.brand !== 'General' ? product.brand : 'Premium Grade'}
        </div>

        <div className="absolute inset-0 p-5 flex items-center justify-center transform group-hover:scale-[1.03] transition-transform duration-300">
          {product.imageSrc && !imageError ? (
            <img
              src={product.imageSrc}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain transition-all duration-305 group-hover:scale-105 cursor-zoom-in"
              onClick={() => setIsZoomed(true)}
              onError={() => setImageError(true)}
            />
          ) : (
            renderSchematicIllustration(product.imagePlaceholderType)
          )}
        </div>
      </div>

      {/* Enlarged modal image preview overlay */}
      {isZoomed && product.imageSrc && !imageError && (
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-xs z-[9999] flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-5xl max-h-[95vh] w-full h-full flex items-center justify-center">
            <button 
              type="button"
              className="absolute top-4 right-4 text-white hover:text-[#F59E0B] bg-black/35 hover:bg-black/60 p-2.5 rounded-full transition-colors cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(false);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={product.imageSrc} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Product Information Body */}
      <div className="p-5 flex-grow flex flex-col">
        <span className="text-[10px] font-bold font-mono text-[#1B5E4A] uppercase tracking-wider mb-1 block">
          {product.category}
        </span>
        <h3 className="text-base font-semibold tracking-tight text-[#0F3B36] group-hover:text-[#1B5E4A] transition-colors leading-snug mb-2 font-display">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 font-sans leading-relaxed flex-grow mb-4">
          {product.description}
        </p>

        {/* Dynamic specifications bullet list */}
        <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-650 block mb-1">
            Core Specifications:
          </span>
          {product.specifications.slice(0, 3).map((spec, i) => (
            <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700">
              <span className="text-[#F59E0B] font-bold mt-0.5">•</span>
              <span className="font-sans leading-tight">{spec}</span>
            </div>
          ))}
        </div>

        {/* Spec Request input field toggled */}
        {showSpecInput ? (
          <div className="mb-3 animate-fade-in bg-slate-50 p-2 rounded-none border border-slate-200">
            <span className="text-[9px] font-bold text-slate-600 block mb-1 uppercase tracking-wide">
              Custom requirement instructions:
            </span>
            <input
              type="text"
              placeholder="e.g. 12 inch size, Satake compatibility"
              className="w-full text-xs p-2 rounded-none border border-slate-200 bg-white focus:outline-[#1B5E4A] font-sans"
              value={customSpec}
              onChange={(e) => setCustomSpec(e.target.value)}
            />
          </div>
        ) : null}

        {/* Actions bar */}
        <div className="mt-auto space-y-2.5">
          <div className="flex items-center gap-2">
            {/* Quantity control */}
            <div className="flex items-center border border-slate-200 rounded-none overflow-hidden h-9">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2.5 h-full hover:bg-slate-50 text-slate-550 transition-colors cursor-pointer"
                disabled={isInQuoteList}
              >
                -
              </button>
              <span className="px-3 text-xs font-semibold text-[#0F3B36] min-w-[20px] text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-2.5 h-full hover:bg-slate-50 text-slate-550 transition-colors cursor-pointer"
                disabled={isInQuoteList}
              >
                +
              </button>
            </div>

            {/* Quote adding CTA */}
            <button
              type="button"
              onClick={handleAddClick}
              disabled={isInQuoteList}
              className={`flex-grow h-9 rounded-none text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                isInQuoteList
                  ? 'bg-slate-100 text-[#1B5E4A] cursor-default'
                  : addedAnimation
                  ? 'bg-[#10B981] text-white animate-pulse'
                  : 'bg-[#1B5E4A] text-white hover:bg-[#0F3B36]'
              }`}
            >
              {isInQuoteList ? (
                <>
                  <Check className="w-4 h-4" /> Added
                </>
              ) : addedAnimation ? (
                <>
                  <ClipboardCheck className="w-4 h-4" /> Added!
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" /> Add to Quote
                </>
              )}
            </button>
          </div>

          {/* Prompt options summary */}
          <div className="flex justify-between items-center text-[10px] text-slate-450 pointer-events-auto select-none">
            <button
              type="button"
              onClick={() => setShowSpecInput(!showSpecInput)}
              className="hover:text-[#1B5E4A] transition-colors hover:underline flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle className="w-3 h-3 text-[#F59E0B]" />
              <span>{showSpecInput ? "Hide specifications" : "Specify custom size?"}</span>
            </button>
            
            {isInQuoteList && (
              <button
                type="button"
                onClick={onOpenQuoteList}
                className="text-[#1B5E4A] font-semibold hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                View list <ArrowUpRight className="w-2.5 h-2.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
