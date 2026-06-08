import { Target, Compass, Heart, Shield, Award, Users, MapPin, Milestone } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Uncompromising Quality',
      desc: 'We rely on high-grade metallurgy castings, specialized polymers, and strict hardening procedures for each part to ensure continuous, worry-free lifespan.'
    },
    {
      icon: Compass,
      title: 'Integrity in B2B Deals',
      desc: 'Transparent pricing matrices, direct manufacturer sourcing protocols, and zero hidden logistic charges make us a favored direct industrial partner.'
    },
    {
      icon: Shield,
      title: 'Inviolable Reliability',
      desc: 'With decades in storage and machinery components, we supply precisely matching sizing configurations, completely ruling out installation mismatches.'
    },
    {
      icon: Heart,
      title: 'Customer-Centric Feedback',
      desc: 'We operate with responsive feedback channels to resolve logistics delays and assist mills across multiple states with tailored technical dimensions.'
    },
  ];

  const milestones = [
    { year: '1998', title: 'The Launch of Ajanta', desc: 'Established in Haryana, beginning with local manual rubber roll supply structures to Sonipat regional mills.' },
    { year: '2005', title: 'Catalog Expansion', desc: 'Introduced comprehensive Paddy Husker couplings and spring steel Whitener screens (Jalli) to the assembly lines.' },
    { year: '2012', title: 'Official Dealership Integration', desc: 'Acquired official distribution and authorized dealer permissions for Alaska Rubber Roll and Garlon industrial thread.' },
    { year: '2018', title: 'Pan-India Logistic Setup', desc: 'Modernized supply chain capabilities to support rapid 48-hour freight delivery to rice mill processing hubs in distant states.' },
    { year: '2026', title: 'Modern Precision Engineering', desc: 'Incorporating digital laboratory diagnostic devices and customized OEM-exact milling rolls to match high efficiency needs.' },
  ];

  return (
    <div id="about-section" className="space-y-20 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-slate-50 py-16 border-b border-slate-200/60 select-none">
        <div className="max-w-4xl mx-auto text-center space-y-5 px-4">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F59E0B] block font-mono">
            ESTD 1998 • Haryana, India
          </span>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#0F3B36] font-display leading-[1.1]">
            The Ajanta Enterprises <span className="italic font-display font-light text-[#1B5E4A]">Story</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-sans font-light border-l-2 border-[#F59E0B] pl-4 text-left">
            Providing critical, wear-resistant machinery spare parts, specialized laboratory equipment, and seamless B2B mechanical solutions for two and a half decades.
          </p>
        </div>
      </section>

      {/* 2. Overview block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-left" id="about-overview">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-8 bg-[#F59E0B]" />
            <span className="text-xs font-mono font-bold text-[#1B5E4A] uppercase tracking-widest">
              Established 1998
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F3B36] font-display leading-tight">
            A Quarter Century of Fortifying India’s <span className="italic text-[#1B5E4A] font-light">Rice Milling</span> Infrastructure
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed font-sans border-l-2 border-[#1B5E4A] pl-4">
            Ajanta Enterprises stands as a highly dependable and trusted name in the Rice Mill Machinery Spare Parts domain. Registered and operating from our central facility in Sonipat, Haryana, we cater to state-of-the-art rice mills, offering robust metallurgical parts that withstand punishing operation stresses.
          </p>
          <p className="text-slate-650 text-sm leading-relaxed font-sans pl-4">
            Our company was founded with a singular, clear mandate: to secure reliable, highly durable spare parts that optimize extraction outputs and significantly reduce scheduled maintenance downtime. Today, we handle a massive portfolio of over 500 components, including Paddy Huskers, silky polisher rolls, elevator conveyor straps, and high-precision laboratory testing instruments.
          </p>
          <div className="bg-[#0F3B36]/5 p-5 rounded-none border-l-4 border-[#F59E0B] space-y-1.5 transition-colors hover:bg-[#0F3B36]/10">
            <span className="text-xs font-mono font-bold text-[#0F3B36] block uppercase tracking-wide">
              Official Dealer Badges:
            </span>
            <p className="text-xs text-slate-600 font-sans leading-normal">
              Proud partners and authorized B2B distributors for industry-leading brands, including <strong>Alaska Rubber Rolls</strong>, <strong>Garlon Bag Closing Threads</strong>, and <strong>Sterling Abrasives</strong>.
            </p>
          </div>
        </div>

        {/* Dynamic visual parameters card on right side */}
        <div className="lg:col-span-5 bg-[#0F3B36] text-white p-8 rounded-2xl border-b-6 border-[#F59E0B] shadow-lg relative overflow-hidden select-none">
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#1B5E4A] rounded-full blur-[40px] opacity-25" />
          
          <div className="space-y-6 relative z-10 text-left">
            <div className="flex items-center gap-2.5">
              <Milestone className="w-6 h-6 text-[#F59E0B]" />
              <span className="text-sm font-bold uppercase tracking-widest font-display">
                Enterprise Credentials
              </span>
            </div>

            <div className="space-y-4 font-sans text-xs pt-2">
              <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                <span className="text-slate-400">Founded Year</span>
                <span className="font-bold text-white">1998 (25+ Years Active)</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                <span className="text-slate-400">Headquarters</span>
                <span className="font-bold text-white">Sonipat, Haryana</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                <span className="text-slate-400">Core Specialty</span>
                <span className="font-bold text-white">Milling Spare Parts & Lab Kits</span>
              </div>
              <div className="flex justify-between items-center pb-2.5">
                <span className="text-slate-400">Compliance & QA</span>
                <span className="font-bold text-emerald-400 uppercase tracking-wider font-semibold">Strict Metrology Tolerance</span>
              </div>
            </div>

            <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-[11px] text-slate-300 leading-normal">
              "We leverage our metallurgical expertise to ensure each coupling, screen, shaft, and roll aligns to perfect specifications, avoiding early bearing failure."
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#0F3B36]/5 rounded-xl flex items-center justify-center text-[#1B5E4A]">
                <Target className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h4 className="text-xl font-bold text-[#0F3B36] font-display">
                Our Mission Statement
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                To build, manufacture, and supply state-of-the-art wear-resistant parts that enhance rice mill extraction outputs, minimize processing friction, and radically slash breakdown costs for Indian milling facilities.
              </p>
            </div>
            <div className="text-[10px] uppercase tracking-wide font-mono text-slate-405 border-t border-slate-100 pt-3 mt-4">
              Focus: Quality, Metallurgy, Speed
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#0F3B36]/5 rounded-xl flex items-center justify-center text-[#1B5E4A]">
                <Compass className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <h4 className="text-xl font-bold text-[#0F3B36] font-display">
                Our Corporate Vision
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                To stand as the absolute, peerless blueprint standard for premium rice mill spare parts in India, bridging the gap between high-precision OEM standards and direct B2B supply logistics.
              </p>
            </div>
            <div className="text-[10px] uppercase tracking-wide font-mono text-slate-405 border-t border-slate-100 pt-3 mt-4">
              Focus: Excellence, PAN India, Long Life
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E4A] block">
            The Pillars of Ajanta
          </span>
          <h3 className="text-2.5xl sm:text-3.5xl font-extrabold tracking-tight text-[#0F3B36] font-display">
            The Core Values Guiding Our Enterprise
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-xl mx-auto">
            From casting parameters to handling post-purchase replacements, we hold fast to the fundamental standards that earned us trust since 1998.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const IconComponent = v.icon;
            return (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-[#1B5E4A]/30 transition-all text-left"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1B5E4A]/5 text-[#1B5E4A] flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0F3B36] font-display">
                    {v.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Chronological Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E4A] block">
            Historic Landmarks
          </span>
          <h3 className="text-3xl font-bold tracking-tight text-[#0F3B36] font-display">
            Chronology of Growth
          </h3>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central path bar */}
          <div className="absolute left-6 md:left-1/2 top-1 bottom-1 w-0.5 bg-slate-200" />

          <div className="space-y-8 relative">
            {milestones.map((m, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-stretch gap-6 md:gap-12 relative ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year tag indicator sphere */}
                <div className="absolute left-6 md:left-1/2 -translate-x-[11px] md:-translate-x-[11px] top-4 w-5 h-5 rounded-full bg-[#0F3B36] border-4 border-white flex items-center justify-center shadow-sm z-10" />

                {/* Left block (either empty space on md/lg, or the item) */}
                <div className="md:w-1/2 pt-1 pl-12 md:pl-0 md:text-right flex flex-col md:justify-center">
                  {index % 2 === 0 ? (
                    <div className="space-y-1 md:pr-6 text-left md:text-right">
                      <span className="text-base font-black text-[#F59E0B] font-mono block">
                        {m.year}
                      </span>
                      <h4 className="text-sm font-bold text-[#0F3B36] font-display">
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-455 font-sans leading-relaxed max-w-sm md:ml-auto">
                        {m.desc}
                      </p>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Right block */}
                <div className="md:w-1/2 pl-12 md:pl-6 text-left flex flex-col justify-center">
                  {index % 2 !== 0 ? (
                    <div className="space-y-1">
                      <span className="text-base font-black text-[#F59E0B] font-mono block">
                        {m.year}
                      </span>
                      <h4 className="text-sm font-bold text-[#0F3B36] font-display">
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-455 font-sans leading-relaxed max-w-sm">
                        {m.desc}
                      </p>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
