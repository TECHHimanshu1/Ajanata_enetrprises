import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import DealersSection from './components/DealersSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import QuoteCart from './components/QuoteCart';
import { ActivePage, QuoteItem, Product } from './types';
import { PRODUCTS } from './data';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [cartItems, setCartItems] = useState<QuoteItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [quickInquiryPart, setQuickInquiryPart] = useState<string>('');

  // 1. Load quote cart from local session on initial mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('ajanta-quote-cart');
      if (stored) {
        setCartItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error fetching local session cart', e);
    }
  }, []);

  // 2. Persist quote items to local session storage when modified
  const saveCartToStorage = (updated: QuoteItem[]) => {
    setCartItems(updated);
    try {
      localStorage.setItem('ajanta-quote-cart', JSON.stringify(updated));
    } catch (e) {
      console.error('Error persisting cart data', e);
    }
  };

  // Add Item to Quotation List
  const handleAddToQuote = (product: Product, quantity: number, specs?: string) => {
    const existing = cartItems.find((item) => item.product.id === product.id);
    let updated: QuoteItem[];

    if (existing) {
      updated = cartItems.map((item) => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + quantity, customRequirement: specs || item.customRequirement }
          : item
      );
    } else {
      updated = [...cartItems, { product, quantity, customRequirement: specs }];
    }
    
    saveCartToStorage(updated);
  };

  // Remove Item from Quotation List
  const handleRemoveFromQuote = (productId: string) => {
    const updated = cartItems.filter((item) => item.product.id !== productId);
    saveCartToStorage(updated);
  };

  // Update Item Quantity inside list
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    const updated = cartItems.map((item) => 
      item.product.id === productId ? { ...item, quantity } : item
    );
    saveCartToStorage(updated);
  };

  // Reset entire active list on success
  const handleClearCart = () => {
    saveCartToStorage([]);
  };

  // Direct category clicks from landing slots
  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Quick action from product cards to fill catalog contact
  const handleQuickInquiry = (partName: string) => {
    setQuickInquiryPart(partName);
    setActivePage('contact');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] flex flex-col font-sans select-none antialiased">
      {/* Dynamic Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        cartItems={cartItems}
        setIsCartOpen={setIsCartOpen}
      />

      {/* Main Content Layout containing sections switch */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomeSection 
            setActivePage={setActivePage} 
            products={PRODUCTS}
            onSelectCategory={handleSelectCategory}
          />
        )}
        {activePage === 'about' && (
          <AboutSection />
        )}
        {activePage === 'products' && (
          <ProductsSection
            products={PRODUCTS}
            onAddToQuote={handleAddToQuote}
            cartItems={cartItems}
            onOpenQuoteList={() => setIsCartOpen(true)}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        {activePage === 'dealers' && (
          <DealersSection />
        )}
        {activePage === 'gallery' && (
          <GallerySection />
        )}
        {activePage === 'contact' && (
          <ContactSection 
            quickInquiryPartName={quickInquiryPart}
            onClearQuickInquiry={() => setQuickInquiryPart('')}
          />
        )}
      </main>

      {/* Persistent sliding B2B quotation manager sheet */}
      <QuoteCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromQuote}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Standard B2B Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
