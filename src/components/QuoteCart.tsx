import { useState, FormEvent } from 'react';
import { X, Trash2, Send, ClipboardCopy, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { QuoteItem } from '../types';

interface QuoteCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: QuoteItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onClearCart: () => void;
  activePage: string;
  setActivePage: (page: any) => void;
}

export default function QuoteCart({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onUpdateQuantity,
  onClearCart,
  setActivePage
}: QuoteCartProps) {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    mobile: '',
    email: '',
    customNote: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

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
    if (!formData.companyName.trim()) errors.companyName = 'Company name is required';
    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.mobile.trim())) {
      errors.mobile = 'Provide a valid 10-15 digit phone number';
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = 'Provide a valid typical email address';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Compile the inquiry quote details into a clean readable plain text structure.
  const generateQuoteText = () => {
    let text = `-----------------------------------------------\n`;
    text += `    AJANTA ENTERPRISES - QUOTATION REQUEST     \n`;
    text += `-----------------------------------------------\n`;
    text += `Date: ${new Date().toLocaleDateString()}\n\n`;
    text += `CLIENT DETAILS:\n`;
    text += `Name: ${formData.name}\n`;
    text += `Company: ${formData.companyName}\n`;
    text += `Mobile: ${formData.mobile}\n`;
    text += `Email: ${formData.email || 'N/A'}\n\n`;
    text += `REQUESTED INDUSTRIAL SPARE PARTS:\n`;

    cartItems.forEach((item, index) => {
      text += `${index + 1}. [${item.product.category}] ${item.product.name}\n`;
      text += `   Qty: ${item.quantity} PCS\n`;
      if (item.customRequirement) {
        text += `   Custom Details: ${item.customRequirement}\n`;
      }
      text += `\n`;
    });

    if (formData.customNote.trim()) {
      text += `ADDITIONAL REQUIREMENTS:\n${formData.customNote}\n\n`;
    }

    text += `No. 1/17/2 Village Chirasmi, Ganaur, Sonipat, Haryana\n`;
    text += `Email: ajantaenterprices9416@gmail.com\n`;
    text += `-----------------------------------------------\n`;
    return text;
  };

  // Compile specific short-form URL-safe text for opening in WhatsApp on all pages
  const generateWhatsAppURL = () => {
    let text = `Hello Ajanta Enterprises,\n\n`;
    text += `I am interested in your Rice Mill Spare Parts. Here is my quotation estimate:\n\n`;
    text += `*Client Details*:\n`;
    text += `• Company: ${formData.companyName}\n`;
    text += `• Contact: ${formData.name} (${formData.mobile})\n\n`;
    text += `*Parts Requested*:\n`;

    cartItems.forEach((item) => {
      let partLine = `• *${item.product.name}* - Qty: *${item.quantity}*`;
      if (item.customRequirement) {
        partLine += ` (_Sizing: ${item.customRequirement}_)`;
      }
      text += `${partLine}\n`;
    });

    if (formData.customNote.trim()) {
      text += `\n*Note*: ${formData.customNote}\n`;
    }

    const encodedText = encodeURIComponent(text);
    return `https://wa.me/919416425166?text=${encodedText}`;
  };

  const handleCopyText = () => {
    if (!validateForm()) return;
    const fullText = generateQuoteText();
    navigator.clipboard.writeText(fullText).then(() => {
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 2500);
    });
  };

  const handleSubmitQuote = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Trigger submission state display
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const url = generateWhatsAppURL();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="quote-drawer-container" className="fixed inset-0 z-100 flex justify-end">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      {/* sliding panel sheet */}
      <div 
        id="quote-cart-panel"
        className="relative w-full max-w-lg bg-zinc-50 h-full flex flex-col shadow-2xl z-10 animate-slide-in-right overflow-hidden"
      >
        {/* Header toolbar */}
        <div className="bg-[#0F3B36] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 100 100" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
              <path d="M 32,74 L 50,22 L 68,74" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 33,56 C 42,50 58,50 67,56" fill="none" stroke="#F59E0B" strokeWidth="7" strokeLinecap="round" />
            </svg>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider font-display">
                Required Parts Quote List
              </h2>
              <p className="text-[10px] text-slate-350">
                Estd 1998 • Ajanta Enterprises
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List Content */}
        <div className="flex-grow overflow-y-auto px-5 py-4 space-y-4">
          {isSubmitted ? (
            <div className="bg-white rounded-xl border border-emerald-100 p-6 text-center space-y-4 shadow-subtle my-2">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0F3B36] font-display">
                  Quotation Outline Compiled!
                </h3>
                <p className="text-xs text-slate-650 mt-1 font-sans">
                  We have structured your multi-part requirement. Please click the option below to immediately submit this to our sales team via WhatsApp for instant pricing, or copy the formatted outline.
                </p>
              </div>

              {/* Action buttons on submit success */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-[#1B5E4A] hover:bg-[#0F3B36] text-white p-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Send Quote via WhatsApp
                </button>
                
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="w-full bg-slate-90 text-slate-700 hover:bg-slate-105 p-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-slate-200"
                >
                  <ClipboardCopy className="w-4 h-4" />
                  {copiedSuccess ? "Copied to Clipboard!" : "Copy Formatted Plain Text"}
                </button>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-500 font-sans">
                <span>Call sales: +91 94164 25166</span>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    onClearCart();
                    onClose();
                  }}
                  className="text-[#1B5E4A] hover:underline font-semibold"
                >
                  Start New Estimate
                </button>
              </div>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-12 px-4 bg-white rounded-xl border border-slate-200/50 space-y-3.5 shadow-xs">
              <AlertCircle className="w-10 h-10 text-[#F59E0B] mx-auto opacity-75" />
              <div>
                <h3 className="text-sm font-semibold text-[#0F3B36] font-display">
                  No parts selected yet
                </h3>
                <p className="text-xs text-slate-500 font-sans max-w-xs mx-auto mt-1 leading-relaxed">
                  Browse our high-quality rice milling components or lab instruments catalog and click "Add to Quote" to draft an inquiry.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActivePage('products');
                  onClose();
                }}
                className="bg-[#1B5E4A] hover:bg-[#0F3B36] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg transition-colors"
              >
                Go to Products
              </button>
            </div>
          ) : (
            <>
              {/* Listed parts card stack */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                    Selected Items ({cartItems.length}):
                  </span>
                  <button
                    onClick={onClearCart}
                    className="text-[10px] text-red-650 hover:text-red-750 font-bold uppercase tracking-wider hover:underline"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                  {cartItems.map((item) => (
                    <div 
                      key={item.product.id} 
                      className="bg-white p-3 rounded-xl border border-slate-200 flex justify-between items-start gap-4 shadow-sm"
                    >
                      <div className="flex-grow space-y-0.5">
                        <span className="text-[9px] font-semibold text-slate-400 block font-mono">
                          AE-{item.product.id.slice(0, 4).toUpperCase()}
                        </span>
                        <h4 className="text-xs font-bold text-[#0F3B36] font-display">
                          {item.product.name}
                        </h4>
                        <span className="text-[10px] font-medium text-[#1B5E4A] block">
                          Category: {item.product.category}
                        </span>
                        {item.customRequirement && (
                          <div className="text-[9px] bg-amber-50 text-amber-700 py-0.5 px-2 rounded mt-1 font-mono leading-normal">
                            Reqs: {item.customRequirement}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-slate-100 rounded-md overflow-hidden bg-slate-50 text-[11px]">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="px-1.5 py-0.5 hover:bg-slate-200 text-slate-600 transition-colors"
                          >
                            -
                          </button>
                          <span className="px-2 font-bold text-slate-800 text-center min-w-[14px]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="px-1.5 py-0.5 hover:bg-slate-200 text-slate-600 transition-colors"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove item button */}
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="p-1 text-slate-350 hover:text-red-500 rounded hover:bg-slate-50 transition-colors"
                          title="Remove part"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirement compilation Form */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm space-y-3 pt-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block border-b border-slate-100 pb-1.5">
                  B2B Contact Information:
                </span>

                <form onSubmit={handleSubmitQuote} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[9px] font-bold text-[#0F3B36] block mb-1 uppercase tracking-wide">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full max-w-full text-xs p-2 rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-[#1B5E4A] font-sans ${
                          formErrors.name ? 'border-red-400' : 'border-slate-200'
                        }`}
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                      {formErrors.name && (
                        <p className="text-[9px] text-red-500 mt-0.5">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-[9px] font-bold text-[#0F3B36] block mb-1 uppercase tracking-wide">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sonipat Rice Mill Ltd"
                        className={`w-full max-w-full text-xs p-2 rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-[#1B5E4A] font-sans ${
                          formErrors.companyName ? 'border-red-400' : 'border-slate-200'
                        }`}
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                      />
                      {formErrors.companyName && (
                        <p className="text-[9px] text-red-500 mt-0.5">{formErrors.companyName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[9px] font-bold text-[#0F3B36] block mb-1 uppercase tracking-wide">
                        Mobile Number *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full max-w-full text-xs p-2 rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-[#1B5E4A] font-sans ${
                          formErrors.mobile ? 'border-red-400' : 'border-slate-200'
                        }`}
                        value={formData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                      />
                      {formErrors.mobile && (
                        <p className="text-[9px] text-red-500 mt-0.5">{formErrors.mobile}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-[9px] font-bold text-[#0F3B36] block mb-1 uppercase tracking-wide">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. business@gmail.com"
                        className={`w-full max-w-full text-xs p-2 rounded-lg border bg-slate-50/50 focus:bg-white focus:outline-[#1B5E4A] font-sans ${
                          formErrors.email ? 'border-red-400' : 'border-slate-200'
                        }`}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                      {formErrors.email && (
                        <p className="text-[9px] text-red-500 mt-0.5">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-bold text-[#0F3B36] block mb-1 uppercase tracking-wide">
                      Additional Requirements / Instructions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Need quick dispatch, need price quote for shipping"
                      className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-[#1B5E4A] font-sans resize-none"
                      value={formData.customNote}
                      onChange={(e) => handleInputChange('customNote', e.target.value)}
                    />
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#1B5E4A] hover:bg-[#0F3B36] text-white p-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Compile B2B Spare Parts Quote
                    </button>
                    <p className="text-[9px] text-slate-400 text-center mt-2">
                      Securing fast inquiry feedback within 12-24 hours.
                    </p>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
