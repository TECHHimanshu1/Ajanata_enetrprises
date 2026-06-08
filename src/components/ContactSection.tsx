import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  quickInquiryPartName?: string;
  onClearQuickInquiry?: () => void;
}

export default function ContactSection({ quickInquiryPartName, onClearQuickInquiry }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    mobile: '',
    email: '',
    productRequirements: quickInquiryPartName || '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required';
    if (!formData.companyName.trim()) errors.companyName = 'Company Name is required';
    
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.mobile.trim())) {
      errors.mobile = 'Provide a valid 10-15 digit phone number';
    }

    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = 'Provide a valid typical email address';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate successful form dispatch and clear form
    setIsSubmitted(true);
    setFormData({
      name: '',
      companyName: '',
      mobile: '',
      email: '',
      productRequirements: '',
      message: '',
    });
    if (onClearQuickInquiry) {
      onClearQuickInquiry();
    }
  };

  const handleWhatsAppFloatingClick = () => {
    const predefinedText = "Hello Ajanta Enterprises, I am interested in your Rice Mill Spare Parts.";
    const url = `https://wa.me/919416425166?text=${encodeURIComponent(predefinedText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="contact-section" className="space-y-16 pb-16 relative">
      
      {/* Page Header Banner */}
      <section className="bg-slate-50 py-16 border-b border-slate-200/60 select-none">
        <div className="max-w-4xl mx-auto text-center space-y-4 px-4">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F59E0B] block font-mono">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#0F3B36] font-display">
            Contact & <span className="italic font-display font-light text-[#1B5E4A]">Location</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-sans font-light border-l-2 border-[#F59E0B] pl-4 text-left">
            Reach out directly to our Haryana headquarters using the details below, or compile our secure quote form for rapid, expert technical callbacks.
          </p>
        </div>
      </section>

      {/* Main Core Columns layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* A. Location & Contact specifications cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#0F3B36] text-white p-8 rounded-none border-b-6 border-[#F59E0B] shadow-xs relative overflow-hidden select-none">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#1B5E4A] rounded-full blur-[45px] opacity-20 pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="space-y-1">
                  <span className="text-[10px] text-[#F59E0B] font-bold uppercase tracking-widest block font-mono">
                    HARYANA, INDIA FACILITY
                  </span>
                  <h4 className="text-2xl font-bold font-display uppercase tracking-wide">
                    AJANTA ENTERPRISES
                  </h4>
                  <p className="text-[11px] text-slate-350 font-sans leading-normal">
                    Quality Rice Mill Machinery Spares & Instruments since 1998.
                  </p>
                </div>

                {/* Specific listing info cards */}
                <div className="space-y-4 pt-4 border-t border-white/10 font-sans text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                    <div className="space-y-0.5 leading-normal">
                      <strong className="text-white block font-semibold text-sm">Main Office Address:</strong>
                      <span className="text-slate-300">
                        No. 1/17/2, Village Chirasmi, Ganaur,<br />
                        Sonipat, Haryana – 131001, India
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                    <div className="space-y-0.5 leading-normal">
                      <strong className="text-white block font-semibold text-sm">Call/WhatsApp Hotline:</strong>
                      <span className="text-slate-300 block">+91 94164 25166</span>
                      <span className="text-slate-300 block">+91 93500 89004</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                    <div className="space-y-0.5 leading-normal">
                      <strong className="text-white block font-semibold text-sm">Corporate Inbox:</strong>
                      <a href="mailto:ajantaenterprices9416@gmail.com" className="hover:underline text-slate-200">
                        ajantaenterprices9416@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Interactive Google map outline styled with brand shades */}
            <div className="bg-white p-5 rounded-none border border-slate-200 shadow-xs space-y-4">
              <h5 className="text-sm font-bold uppercase tracking-wider text-[#0F3B36] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1B5E4A]" /> Sonipat Regional Hub Map
              </h5>
              
              {/* Nice illustrative SVG of Sonipat / National Highway mapping coordinates */}
              <div className="w-full aspect-video bg-slate-50/70 border border-slate-200 rounded-none overflow-hidden relative flex items-center justify-center p-6 select-none">
                <svg viewBox="0 0 200 120" className="w-full h-full text-[#1B5E4A] stroke-current opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Roads drafting */}
                  <line x1="10" y1="20" x2="190" y2="100" stroke="#E2E8F0" strokeWidth="6" />
                  <line x1="30" y1="100" x2="170" y2="10" stroke="#E2E8F0" strokeWidth="4" />
                  <line x1="100" y1="10" x2="100" y2="110" stroke="#F59E0B" strokeWidth="5" className="opacity-45" /> {/* NH44 highway */}
                  
                  {/* Ganaur & Chirasmi markers */}
                  <circle cx="100" cy="55" r="5" stroke="#0F3B36" strokeWidth="2.5" fill="#F59E0B" className="animate-pulse" />
                  <text x="100" y="44" className="text-[7.5px] font-bold fill-[#0F3B36] text-center" textAnchor="middle">AJANTA ENTERPRISES HQ</text>
                  <text x="100" y="70" className="text-[5.5px] font-mono fill-slate-455 text-center" textAnchor="middle">Ganaur, Sonipat (Haryana)</text>
                  
                  <text x="150" y="24" className="text-[5px] font-bold fill-slate-400">To Panipat →</text>
                  <text x="40" y="96" className="text-[5px] font-bold fill-slate-400">← To Delhi</text>
                </svg>
              </div>
            </div>
          </div>

          {/* B. Validation Contact form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-none border border-slate-200 shadow-xs text-left">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
              SECURE B2B FORM
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[#0F3B36] font-display mb-6">
              Request callback or pricing schedule
            </h3>

            {isSubmitted ? (
              <div className="bg-emerald-50/50 border border-emerald-200/50 p-7 rounded-none text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-none flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0F3B36] font-display">Quote Query submitted!</h4>
                  <p className="text-xs text-slate-650 max-w-sm mx-auto mt-1 leading-relaxed font-sans">
                    Success! Your requirement profile has been logged on our servers. A metallurgical sales representative will contact your company phone number today. This is currently simulated.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#1B5E4A] hover:bg-[#0F3B36] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-none transition-colors cursor-pointer"
                >
                  Submit another query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9.5px] font-bold text-[#0F3B36] block mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anand Kumar"
                      className={`w-full max-w-full text-xs p-3 rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-[#1B5E4A] ${
                        formErrors.name ? 'border-red-400' : 'border-slate-200'
                      }`}
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                    {formErrors.name && (
                      <p className="text-[10px] text-red-550 mt-0.5">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-[9.5px] font-bold text-[#0F3B36] block mb-1.5 uppercase tracking-wide">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ajanta Rice Milling Ltd"
                      className={`w-full max-w-full text-xs p-3 rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-[#1B5E4A] ${
                        formErrors.companyName ? 'border-red-400' : 'border-slate-200'
                      }`}
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                    />
                    {formErrors.companyName && (
                      <p className="text-[10px] text-red-550 mt-0.5">{formErrors.companyName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9.5px] font-bold text-[#0F3B36] block mb-1.5 uppercase tracking-wide">
                      Contact Mobile Number *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. +91 94164 25166"
                      className={`w-full max-w-full text-xs p-3 rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-[#1B5E4A] ${
                        formErrors.mobile ? 'border-red-400' : 'border-slate-200'
                      }`}
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                    />
                    {formErrors.mobile && (
                      <p className="text-[10px] text-red-550 mt-0.5">{formErrors.mobile}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-[9.5px] font-bold text-[#0F3B36] block mb-1.5 uppercase tracking-wide">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. support@ajantarice.com"
                      className={`w-full max-w-full text-xs p-3 rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-[#1B5E4A] ${
                        formErrors.email ? 'border-red-400' : 'border-slate-200'
                      }`}
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    {formErrors.email && (
                      <p className="text-[10px] text-red-550 mt-0.5">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-[9.5px] font-bold text-[#0F3B36] block mb-1.5 uppercase tracking-wide">
                    Product Requirements (Spare parts needed)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 10x Alaska Rubber Rollers 14inch, 5x spring steel Whitener screens (VT10)..."
                    className="w-full max-w-full text-xs p-3 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-[#1B5E4A]"
                    value={formData.productRequirements}
                    onChange={(e) => handleInputChange('productRequirements', e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-[9.5px] font-bold text-[#0F3B36] block mb-1.5 uppercase tracking-wide">
                    Detailed Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please include sizing dimensions, compatible brand context, or urgent dispatch requests..."
                    className="w-full max-w-full text-xs p-3 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-[#1B5E4A] resize-none"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#1B5E4A] hover:bg-[#0F3B36] text-white p-3.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" /> Submit Quotation Query
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Floating Sticky WhatsApp button widget (on bottom right) */}
      <button
        id="floating-whatsapp-btn"
        onClick={handleWhatsAppFloatingClick}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] hover:scale-105 transition-all z-40 flex items-center justify-center cursor-pointer group"
        title="Chat in WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current animate-pulse text-white font-weight-black" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-bold uppercase tracking-widest pl-0 group-hover:pl-2 select-none">
          WhatsApp Sales
        </span>
      </button>
    </div>
  );
}
