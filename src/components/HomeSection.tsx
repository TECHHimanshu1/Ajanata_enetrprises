import { useState, useRef } from 'react';
import { ArrowRight, Disc, Settings, Wrench, ArrowUpCircle, FlaskConical, Blocks, ShieldCheck, Clock, Award, Handshake, Shield, Truck, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ActivePage, Product } from '../types';

interface HomeSectionProps {
  setActivePage: (page: ActivePage) => void;
  products: Product[];
  onSelectCategory: (categoryId: string) => void;
}

export default function HomeSection({ setActivePage, products, onSelectCategory }: HomeSectionProps) {
  const [zoomedProduct, setZoomedProduct] = useState<Product | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const featuredProducts = products.filter(p => p.imageSrc && !p.imageSrc.includes('unsplash') && !p.imageSrc.includes('logo.jpg')).slice(0, 12);

  const stats = [
    { value: '25+', label: 'Years Experience', desc: 'Since 1998' },
    { value: '500+', label: 'Products & Spares', desc: 'Comprehensive Inventory' },
    { value: 'PAN India', label: 'Supply Network', desc: 'Fast Freight & Shipping' },
    { value: 'Trusted', label: 'Industry Partner', desc: 'Elite Rice Mill Choice' },
  ];

  const coreReasons = [
    {
      icon: Clock,
      title: '25+ Years Experience',
      description: 'Serving the rice milling community since 1998 with deep technological proficiency.',
    },
    {
      icon: Shield,
      title: 'Premium Quality Products',
      description: 'Each spare part is hardened, tested, and balanced under extreme quality benchmarks.',
    },
    {
      icon: Award,
      title: 'Competitive Pricing',
      description: 'Direct manufacturer channels offer clients optimal pricing matrices.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Streamlined logistics network ensures prompt dispatch to reduce mill breakdown downtime.',
    },
    {
      icon: ShieldCheck,
      title: 'Genuine Spare Parts',
      description: 'Authorized dealers in premium global grade components ensuring authentic lifespans.',
    },
    {
      icon: Handshake,
      title: 'Expert Technical Support',
      description: 'Experienced engineers on call to guide size measurements, tolerances, and compatibilities.',
    },
  ];

  const categories = [
    {
      id: 'paddy-husker',
      title: 'Paddy Husker & Rubber Rolls',
      description: 'Rubber rolls, couplings, and polishers designed for clean friction-free husking.',
      icon: Disc,
      tag: 'Rubber Rolls, Husker Couplings, Duraflex Polishers',
    },
    {
      id: 'whitener',
      title: 'Whitener Spare Parts',
      description: 'Abrasive rollers, hardened screens (Jalli), star plates, and premium feed screws.',
      icon: Settings,
      tag: 'Abrasive Rollers, Screens, Main Shafts, Screws',
    },
    {
      id: 'silky',
      title: 'Silky Spare Parts',
      description: 'Mirror-finish stainless steel milling rolls, screens, housings, and atomization mist nozzles.',
      icon: Wrench,
      tag: 'Milling Rolls, Silky Screens, Nozzles, Frames',
    },
    {
      id: 'elevator',
      title: 'Elevator Spare Parts',
      description: 'Industrial PVC & steel elevator buckets, nylon cotton belts, Garlon threads, and rare-earth magnets.',
      icon: ArrowUpCircle,
      tag: 'Buckets, Cotton Belts, Garlon Threads, Magnets',
    },
    {
      id: 'laboratory',
      title: 'Laboratory Equipment',
      description: 'Diagnostic benchtop testing aspirators, driers, splitters, huskers, and thickness graders.',
      icon: FlaskConical,
      tag: 'Lab Aspirators, Lab Driers, Lab Huskers, Sizers',
    },
  ];

  const handleCategoryNavigate = (catId: string) => {
    onSelectCategory(catId);
    setActivePage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-section" className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="relative bg-[#0F3B36] text-white overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        {/* Abstract technological industrial network grid background overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Ambient radial lighting shadows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1B5E4A] rounded-full blur-[100px] opacity-45 pointer-events-none animate-pulse duration-[8000ms]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#F59E0B] rounded-full blur-[120px] opacity-20 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative text-center space-y-8 py-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1B5E4A]/45 hover:bg-[#1B5E4A]/60 border border-emerald-500/20 rounded-full text-xs font-semibold text-[#F59E0B] tracking-wider uppercase select-none transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              ESTABLISHED 1998 • India's Quality Leader
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-display leading-[1.12] text-white">
            Premium Rice Mill <br />
            <span className="bg-gradient-to-r from-[#F59E0B] to-amber-300 bg-clip-text text-transparent font-display italic font-light pr-2">Spare Parts</span> Solutions
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed font-light text-center px-4 sm:px-6">
            Trusted by primary modern rice mills across India for absolute metallurgical density, micron-perfect dimensional tolerances, and high mechanical performance. Strengthening processing lines, reducing scheduled downtime.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => handleCategoryNavigate('all')}
              className="bg-[#F59E0B] hover:bg-[#d97d02] text-[#0F3B36] font-bold text-xs tracking-widest uppercase px-8 py-4.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#F59E0B]/20 transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer group"
            >
              Explore Product Catalog
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className="bg-transparent border border-slate-300/80 hover:border-white hover:bg-white/5 text-white font-semibold text-xs tracking-widest uppercase px-8 py-4.5 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* 2. Stats Dashboard Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-t border-[#F59E0B] shadow-xs grid grid-cols-2 lg:grid-cols-4 select-none editorial-matrix">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 text-left space-y-2 relative group hover:bg-[#0F3B36]/5 transition-colors">
              <span className="text-[10px] text-[#F59E0B] font-bold block font-mono">0{i+1}</span>
              <span className="text-4xl lg:text-5xl font-bold text-[#0F3B36] font-display block leading-none">
                {stat.value}
              </span>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#1B5E4A] font-sans">
                {stat.label}
              </h4>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-sans">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg group">
          {/* Background Image of Factory Showroom */}
          <img 
            src="/factory_showroom.png" 
            alt="Ajanta Enterprises Factory Showroom" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B36] via-[#0F3B36]/80 to-transparent p-6 sm:p-10 flex flex-col justify-between text-white border-l-8 border-[#F59E0B]">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-10 bg-[#F59E0B]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#F59E0B] drop-shadow-sm">
                  Ajanta Enterprises
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-display text-white drop-shadow-md leading-snug">
                Manufacturing Reliable Industrial Components Since 1998
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6 mt-4 backdrop-blur-xs bg-[#0F3B36]/60 p-4 rounded-xl border border-white/5">
              <div>
                <span className="text-xs text-slate-300 block mb-1">State Certification</span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Haryana Industry Approved</span>
              </div>
              <div>
                <span className="text-xs text-slate-300 block mb-1">Logistics Coverage</span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">PAN India Transit Network</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E4A] block">
            About Our Enterprise
          </span>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F3B36] font-display">
            Commitment to Quality, Precision & Longevity
          </h3>
          <p className="text-slate-650 font-sans text-sm leading-relaxed">
            Ajanta Enterprises has been serving the rice milling industry since 1998. We specialize in supplying high-quality rice mill machinery spare parts, industrial components, and laboratory equipment.
          </p>
          <p className="text-slate-650 font-sans text-sm leading-relaxed">
            Our commitment to quality, competitive pricing, and timely delivery makes us a trusted partner for rice mills across India. Every single component we manufacture or deal in undergoes robust QA tests to safeguard seamless compatibility and enduring operation life.
          </p>
          
          <div className="pt-3">
            <button
              onClick={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#1B5E4A] hover:text-[#0F3B36] transition-colors hover:underline"
            >
              Learn More About Our Values
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E4A] block">
              The Ajanta Advantage
            </span>
            <h3 className="text-3xl font-extrabold tracking-tight text-[#0F3B36] font-display">
              Why Elite Rice Mills Partner with Us
            </h3>
            <p className="text-sm text-slate-500 font-sans max-w-xl mx-auto">
              Through decades of industrial manufacturing experience and official dealerships, we secure uncompromised advantages for procurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm space-y-4 hover:shadow-md hover:border-[#1B5E4A]/25 transition-all text-left"
                >
                  <div className="w-10 h-10 bg-[#0F3B36]/5 rounded-xl flex items-center justify-center text-[#1B5E4A]">
                    <Icon className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-[#0F3B36] font-display leading-tight">
                      {reason.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4.5. Featured Product Gallery Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-2 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E4A] block">
              Visual Catalog
            </span>
            <h3 className="text-2.5xl sm:text-3xl font-bold tracking-tight text-[#0F3B36] font-display">
              Featured Spare Parts Gallery
            </h3>
            <p className="text-xs text-slate-500 font-sans">
              Click on any component image to zoom in and check its engineering precision.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-slate-350 rounded-full hover:bg-slate-50 hover:border-[#1B5E4A] text-[#0F3B36] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-slate-350 rounded-full hover:bg-slate-50 hover:border-[#1B5E4A] text-[#0F3B36] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Track */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent scroll-smooth snap-x"
          style={{ scrollbarWidth: 'thin' }}
        >
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="w-72 flex-shrink-0 snap-start bg-white rounded-2xl border border-slate-200/85 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col group"
            >
              {/* Product Image Box */}
              <div 
                onClick={() => setZoomedProduct(product)}
                className="h-48 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-6 relative overflow-hidden cursor-zoom-in"
              >
                <img 
                  src={product.imageSrc || '/logo.jpg'} 
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0F3B36] text-[#F59E0B] text-[8px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {product.subcategory || product.category}
                </div>
              </div>
              {/* Product Info */}
              <div className="p-5 flex-grow flex flex-col justify-between text-left">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#0F3B36] font-display line-clamp-1 group-hover:text-[#1B5E4A] transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-slate-500 text-xs font-sans line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onSelectCategory(product.category);
                    setActivePage('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-4 w-full py-2.5 bg-slate-50 hover:bg-[#0F3B36] text-[#0F3B36] hover:text-white text-xs font-bold font-sans uppercase tracking-widest rounded-lg transition-colors duration-300 flex items-center justify-center gap-1 cursor-pointer"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Featured Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E4A] block">
              Core Offerings
            </span>
            <h3 className="text-2.5xl sm:text-3xl font-bold tracking-tight text-[#0F3B36] font-display">
              Industrial Spare Parts Categories
            </h3>
          </div>
          <button
            onClick={() => handleCategoryNavigate('all')}
            className="text-xs font-bold text-[#1B5E4A] hover:text-[#0F3B36] hover:underline flex items-center gap-1 uppercase tracking-wider h-max font-sans"
          >
            See Entire Catalog ({products.length} Items)
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-0 md:gap-y-0 select-none editorial-matrix bg-white">
          {categories.slice(0, 5).map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.id}
                onClick={() => handleCategoryNavigate(category.id)}
                className="bg-white p-8 hover:bg-[#0F3B36]/5 transition-all duration-300 flex flex-col h-full group cursor-pointer text-left relative"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase font-bold text-[#F59E0B] tracking-widest font-mono">
                    0{index + 1}
                  </span>
                  <div className="w-10 h-10 bg-[#0F3B36]/5 text-[#1B5E4A] flex items-center justify-center rounded-none group-hover:bg-[#1B5E4A]/10 transition-colors">
                    <IconComponent className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                </div>
                
                <div className="space-y-3 flex-grow">
                  <h4 className="text-xl font-bold text-[#0F3B36] group-hover:text-[#1B5E4A] font-display transition-colors leading-snug">
                    {category.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="mt-8 space-y-4 pt-4 border-t border-slate-100">
                  <div className="text-[10px] text-slate-400 font-sans font-medium line-clamp-1">
                    Includes: {category.tag}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#1B5E4A] group-hover:text-[#F59E0B] transition-colors">
                    <span className="uppercase tracking-widest text-[10px]">Browse Division &rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Quick Custom inquiry card */}
          <div 
            onClick={() => setActivePage('contact')}
            className="bg-[#0F3B36] p-8 text-white flex flex-col justify-between items-start group cursor-pointer text-left relative overflow-hidden h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1B5E4A] rounded-full blur-[45px] opacity-25" />
            
            <div className="space-y-3 relative z-10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#F59E0B] block font-mono">
                SPECIFICATION MATCHING
              </span>
              <h4 className="text-2xl font-bold tracking-tight font-display text-white italic">
                Need OEM <br />Dimensions?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-xs">
                Provide our metallurgy engineers with your custom drawing or alignment dimensions, and we will formulate exact matching spare parts.
              </p>
            </div>

            <div className="flex items-center gap-1 font-bold text-[#F59E0B] text-xs uppercase tracking-widest group-hover:text-white transition-colors pt-8 relative z-10">
              <span>Send Query &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1B5E4A] text-white rounded-3xl p-10 md:p-14 text-center space-y-6 relative overflow-hidden shadow-lg border-b-6 border-[#F59E0B]">
          {/* subtle abstract rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none select-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full pointer-events-none select-none" />

          <div className="space-y-3 relative z-10 max-w-2xl mx-auto col-span-1">
            <h3 className="text-2.5xl sm:text-4xl font-extrabold tracking-tight font-display text-white leading-tight">
              Need Reliable Rice Mill Spare Parts Today?
            </h3>
            <p className="text-sm text-slate-200 font-sans font-light">
              Don’t let machine breakdowns affect your processing capacity. Get custom sizing assistance and competitive wholesale prices immediately.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className="bg-[#F59E0B] hover:bg-white hover:text-[#0F3B36] text-[#0F3B36] font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-xl transition-all duration-300 shadow-md cursor-pointer"
            >
              Request Custom Quote Callback
            </button>
          </div>
        </div>
      </section>

      {/* Zoom Modal */}
      {zoomedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
          onClick={() => setZoomedProduct(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-[#0F3B36] p-2 rounded-2xl border border-white/10 shadow-2xl flex flex-col justify-center animate-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 bg-[#F59E0B] text-[#0F3B36] p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setZoomedProduct(null);
              }}
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={zoomedProduct.imageSrc} 
              alt={zoomedProduct.name}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="p-4 text-center">
              <h4 className="text-white font-display font-bold text-lg">{zoomedProduct.name}</h4>
              <p className="text-[#F59E0B] text-xs mt-1 font-mono uppercase tracking-widest">{zoomedProduct.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
