import { Shield, Sparkles, Award, CheckCircle2, Bookmark, ExternalLink } from 'lucide-react';
import { BRANDS } from '../data';

export default function DealersSection() {
  const corporateTrustPoints = [
    {
      title: 'Only Authentic Machinery Spares',
      desc: 'Through our official, contracted distributor connections, we supply only original components. Zero counterfeit, zero used/refurbished stocks.',
      badge: '100% Genuine'
    },
    {
      title: 'Wholesale B2B Cargo Sourcing',
      desc: 'We facilitate bulk consignments directly from the manufacturers to your mills across India, offering substantial cost advantages.',
      badge: 'Wholesale Pricing'
    },
    {
      title: 'Technical Specification Alignment',
      desc: 'Leverage official size sheets, tolerances maps, and installation guides of partner brands to avoid custom machining errors.',
      badge: 'OEM Calibrated'
    }
  ];

  return (
    <div id="dealers-section" className="space-y-16 pb-16">
      {/* 1. Header Hero Banner */}
      <section className="bg-slate-50 py-16 border-b border-slate-200/60 select-none">
        <div className="max-w-4xl mx-auto text-center space-y-4 px-4">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F59E0B] block font-mono">
            OFFICIAL DISTRIBUTOR & DEALER NETWORK
          </span>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#0F3B36] font-display">
            Brands We Deal <span className="italic font-display font-light text-[#1B5E4A]">In</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-sans font-light border-l-2 border-[#F59E0B] pl-4 text-left">
            Ajanta Enterprises represents premium global-grade brands as authorized dealers or direct B2B partners, offering uncompromised manufacturing reliability.
          </p>
        </div>
      </section>

      {/* 2. Official Dealers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E4A] block">
            Authorized Partner Portfolio
          </span>
          <h3 className="text-2.5xl sm:text-3.5xl font-bold tracking-tight text-[#0F3B36] font-display">
            Direct Milling Solutions From Trusted Innovators
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 select-none">
          {BRANDS.map((brand, i) => (
            <div 
              key={i} 
              className="bg-white rounded-none border border-slate-200/80 shadow-xs overflow-hidden hover:border-[#1B5E4A] transition-all flex flex-col justify-between text-left h-full group"
            >
              <div className="p-8 space-y-5">
                {/* Brand Visual Logo block */}
                <div className="flex justify-between items-start">
                  <div className="bg-[#0F3B36] text-white font-display font-black text-xs px-4 py-2 rounded-none tracking-widest uppercase flex items-center gap-1.5 shadow-xs">
                    <Bookmark className="w-3.5 h-3.5 text-[#F59E0B] fill-current" />
                    <span>{brand.logoText}</span>
                  </div>
                  
                  <span className="bg-[#1B5E4A]/10 text-[#0F3B36] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-none">
                    {brand.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-[#0F3B36] font-display transition-colors group-hover:text-[#1B5E4A]">
                    {brand.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                {/* Specific features checklist for each brand */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    Core Distribution Highlights:
                  </span>
                  
                  {brand.name.includes('Alaska') && (
                    <div className="space-y-1.5 text-xs text-slate-600 font-sans">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>High temperature-resistant vulcanized rubber</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>Available in 10 inch & 14 inch sizes</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>Lowest broken grain index across India</span>
                      </div>
                    </div>
                  )}

                  {brand.name.includes('Garlon') && (
                    <div className="space-y-1.5 text-xs text-slate-600 font-sans">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>Knot-free uniform thread fiber</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>Sized in 1Kg, 2Kg industrial cone spools</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>Excellent compatibility with bag-closer machines</span>
                      </div>
                    </div>
                  )}

                  {brand.name.includes('Sterling') && (
                    <div className="space-y-1.5 text-xs text-slate-600 font-sans">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>Bonded silicate and resin silicon abrasive matrix</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>Smooth bran peeling without grain wear</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>Compatible with major whiteners (VT series)</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* brand footer certificate code */}
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-450 font-mono font-medium">
                <span>VERIFIED AE DEALERSHIP CODE: AE-${brand.logoText.toUpperCase()}-98</span>
                <span className="text-[#1B5E4A] font-bold">ACTIVE REGISTRATION</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Dealership corporate trust parameters */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E4A] block">
              Global Procurement Standards
            </span>
            <h3 className="text-2.5xl sm:text-3.5xl font-extrabold tracking-tight text-[#0F3B36] font-display">
              Unrivalled Trust Matrices
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-xl mx-auto">
              Our direct alignment with manufacturing channels bridges precision with quick logistics, securing flawless material flows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateTrustPoints.map((point, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6.5 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-left relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 bg-[#F59E0B]/5 border border-amber-300/30 text-amber-800 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                    <span>{point.badge}</span>
                  </div>

                  <h4 className="text-base font-bold text-[#0F3B36] font-display leading-tight">
                    {point.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
