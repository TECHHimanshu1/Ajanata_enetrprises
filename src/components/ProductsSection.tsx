import { useState, useMemo } from 'react';
import { Search, Filter, RefreshCw, LayoutGrid, List, AlertCircle, ShoppingCart } from 'lucide-react';
import { Product, QuoteItem } from '../types';
import { CATEGORIES } from '../data';
import ProductCard from './ProductCard';

interface ProductsSectionProps {
  products: Product[];
  onAddToQuote: (product: Product, quantity: number, specs?: string) => void;
  cartItems: QuoteItem[];
  onOpenQuoteList: () => void;
  selectedCategory: string;
  setSelectedCategory: (categoryId: string) => void;
}

export default function ProductsSection({
  products,
  onAddToQuote,
  cartItems,
  onOpenQuoteList,
  selectedCategory,
  setSelectedCategory,
}: ProductsSectionProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc'>('name-asc');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');

  // Find all unique brands available in dataset
  const uniqueBrands = useMemo(() => {
    const brands = new Set<string>();
    products.forEach((p) => {
      if (p.brand) brands.add(p.brand);
    });
    return ['all', ...Array.from(brands)];
  }, [products]);

  // Clean resets for query strings
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSortBy('name-asc');
  };

  // Filter & Search computation pipeline
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filtering matching
        const categoryIdToNameMap: Record<string, string> = {
          'paddy-husker': 'Paddy Husker & Rubber Rolls',
          'whitener': 'Whitener Spare Parts',
          'silky': 'Silky Spare Parts',
          'elevator': 'Elevator Spare Parts',
          'laboratory': 'Laboratory Equipment',
          'additional': 'Additional Components',
        };

        const mappedCategoryName = categoryIdToNameMap[selectedCategory];
        const matchesCategory = selectedCategory === 'all' || p.category === mappedCategoryName;

        // Brand filtering matching
        const matchesBrand = selectedBrand === 'all' || p.brand === selectedBrand;

        // Search text matching
        const text = searchQuery.toLowerCase().trim();
        const matchesSearch =
          text === '' ||
          p.name.toLowerCase().includes(text) ||
          p.description.toLowerCase().includes(text) ||
          p.category.toLowerCase().includes(text) ||
          (p.subcategory && p.subcategory.toLowerCase().includes(text)) ||
          p.specifications.some((spec) => spec.toLowerCase().includes(text));

        return matchesCategory && matchesBrand && matchesSearch;
      })
      .sort((a, b) => {
        // Sorting pipeline
        if (sortBy === 'name-asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
  }, [products, selectedCategory, selectedBrand, searchQuery, sortBy]);

  const activeCategoryCountMap = useMemo(() => {
    const map: Record<string, number> = { all: products.length };
    
    const categoryNameToIdMap: Record<string, string> = {
      'Paddy Husker & Rubber Rolls': 'paddy-husker',
      'Whitener Spare Parts': 'whitener',
      'Silky Spare Parts': 'silky',
      'Elevator Spare Parts': 'elevator',
      'Laboratory Equipment': 'laboratory',
      'Additional Components': 'additional',
    };

    products.forEach((p) => {
      const catId = categoryNameToIdMap[p.category];
      if (catId) {
        map[catId] = (map[catId] || 0) + 1;
      }
    });

    return map;
  }, [products]);

  const cartProductIds = useMemo(() => {
    return new Set(cartItems.map((item) => item.product.id));
  }, [cartItems]);

  return (
    <div id="products-section" className="space-y-8 pb-16">
      {/* Search and stats count layout banner */}
      <section className="bg-slate-50 py-16 border-b border-slate-200/60 select-none">
        <div className="max-w-4xl mx-auto text-center space-y-4 px-4">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F59E0B] block font-mono">
            INDUSTRIAL CATALOG
          </span>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#0F3B36] font-display">
            High Precision <span className="italic font-display font-light text-[#1B5E4A]">Milling Spares</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-sans font-light border-l-2 border-[#F59E0B] pl-4 text-left">
            Filter through our extensive components inventory designed for continuous heavy duty milling requirements. Add items to your active Quotation List to query bulk price quotes.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* I. Vertical Filters Sidebar (Desktop) */}
          <div className="hidden lg:block space-y-6">
            {/* Category Filter Widget */}
            <div className="bg-white p-5 rounded-none border border-slate-200 shadow-xs space-y-4 text-left">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F3B36] border-b border-slate-100 pb-2 flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#F59E0B]" /> Categories
              </h4>
              <nav className="flex flex-col space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-none text-xs font-medium transition-all flex justify-between items-center cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#0F3B36] text-white font-semibold'
                        : 'text-slate-600 hover:bg-slate-550'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span 
                      className={`text-[10px] px-2 py-0.5 rounded-none font-mono ${
                        selectedCategory === cat.id ? 'bg-[#1B5E4A] text-white' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {activeCategoryCountMap[cat.id] || 0}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Brands and Dealers Selection */}
            <div className="bg-white p-5 rounded-none border border-slate-200 shadow-xs space-y-4 text-left">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F3B36] border-b border-slate-100 pb-2">
                Brands & Dealerships
              </h4>
              <div className="space-y-1.5">
                {uniqueBrands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`w-full text-left px-3 py-2 rounded-none text-xs font-medium capitalize flex items-center justify-between cursor-pointer ${
                      selectedBrand === brand
                        ? 'bg-[#1B5E4A]/10 text-[#0F3B36] font-bold border-l-4 border-[#F59E0B]'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{brand === 'all' ? 'All Brands' : brand}</span>
                    {brand !== 'all' && (
                      <span className="text-[10px] text-slate-400 font-mono">
                        {brand === 'Alaska' ? 'Dealer' : 'Partner'}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Fast Reset Buttons */}
            <button
              onClick={handleClearFilters}
              className="w-full border border-dashed border-slate-300 hover:border-[#1B5E4A] text-slate-550 hover:text-[#0F3B36] p-3 rounded-none text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Active Filters
            </button>
          </div>

          {/* II. Catalog Lists Grid (Right Main Column) */}
          <div className="lg:col-span-3 space-y-5">
            
            {/* Horizontal Control Toolbar */}
            <div className="bg-white p-4 rounded-none border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3.5 justify-between items-center">
              {/* Search input field widget */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by part name, specs (e.g. jalli, roller, bolt, 10 inch, model)..."
                  className="w-full text-xs pl-10 pr-4 py-2.5 rounded-none border border-slate-200 bg-slate-50/55 focus:bg-white focus:outline-[#1B5E4A] font-sans"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Sorting and layout config options */}
              <div className="flex gap-3 justify-end items-center w-full md:w-auto flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider font-sans whitespace-nowrap">Sort:</span>
                  <select
                    className="text-xs p-2 rounded-none border border-slate-200 focus:outline-[#1B5E4A] font-sans bg-white"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                  >
                    <option value="name-asc">Alphabetical (A - Z)</option>
                    <option value="name-desc">Alphabetical (Z - A)</option>
                  </select>
                </div>

                <div className="hidden sm:flex items-center gap-1 border border-slate-200 p-1 rounded-none">
                  <button
                    onClick={() => setLayoutMode('grid')}
                    className={`p-1.5 rounded-none transition-all cursor-pointer ${
                      layoutMode === 'grid' ? 'bg-[#0F3B36] text-white' : 'text-slate-450 hover:bg-slate-50'
                    }`}
                    title="Grid view"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setLayoutMode('list')}
                    className={`p-1.5 rounded-none transition-all cursor-pointer ${
                      layoutMode === 'list' ? 'bg-[#0F3B36] text-white' : 'text-slate-450 hover:bg-slate-50'
                    }`}
                    title="Detail list view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Category Horizontal Slider (shown only on mobile/tablet screens) */}
            <div className="lg:hidden w-full overflow-x-auto pb-2 flex gap-2 select-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs px-4 py-2 rounded-none whitespace-nowrap font-medium border transition-all h-max flex-shrink-0 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#0F3B36] text-white border-transparent font-bold'
                      : 'bg-white text-slate-650 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat.name} ({activeCategoryCountMap[cat.id] || 0})
                </button>
              ))}
            </div>

            {/* Brand filters for mobile */}
            <div className="lg:hidden flex flex-wrap gap-2 items-center select-none">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-sans pr-1">Brands:</span>
              {uniqueBrands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`text-[10px] px-3 py-1.5 rounded-none border transition-all block cursor-pointer ${
                    selectedBrand === brand
                      ? 'bg-[#1B5E4A] font-bold text-white border-transparent'
                      : 'bg-white text-slate-500 border-slate-100 hover:bg-slate-50'
                  }`}
                >
                  {brand === 'all' ? 'All Brands' : brand}
                </button>
              ))}
            </div>

            {/* Active filtering specifications chips bar summaries */}
            <div className="flex justify-between items-center text-xs text-slate-500 font-sans px-1">
              <span>Showing <strong>{filteredProducts.length}</strong> matching spare parts of {products.length} total</span>
              {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery !== '') && (
                <button
                  onClick={handleClearFilters}
                  className="text-xs font-bold text-[#1B5E4A] hover:underline"
                >
                  Clear search filters
                </button>
              )}
            </div>

            {/* Products catalog listing container */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-sm select-none">
                <AlertCircle className="w-12 h-12 text-[#F59E0B] mx-auto animate-pulse" />
                <div>
                  <h3 className="text-base font-bold text-[#0F3B36] font-display">No matching spare parts</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 leading-normal font-sans">
                    We couldn't locate components matching "{searchQuery}". Double-check dimensions, or send an inquiry with your technical drawings directly on our Contact page.
                  </p>
                </div>
                <button
                  onClick={handleClearFilters}
                  className="bg-[#1B5E4A] hover:bg-[#0F3B36] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  View All Products
                </button>
              </div>
            ) : layoutMode === 'grid' ? (
              /* GRID LAYOUT MODE */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onAddToQuote={onAddToQuote}
                    isInQuoteList={cartProductIds.has(p.id)}
                    onOpenQuoteList={onOpenQuoteList}
                  />
                ))}
              </div>
            ) : (
              /* DENSE LIST LAYOUT MODE */
              <div className="space-y-3.5">
                {filteredProducts.map((p) => {
                  const isInCart = cartProductIds.has(p.id);
                  return (
                    <div 
                      key={p.id} 
                      className="bg-white p-4.5 rounded-xl border border-slate-200/90 hover:border-[#1B5E4A]/30 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left shadow-xs"
                    >
                      <div className="space-y-1 max-w-xl">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                            AE-{p.id.toUpperCase()}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B5E4A] block">
                            {p.category}
                          </span>
                        </div>
                        <h4 className="text-base font-semibold text-[#0F3B36] font-display">
                          {p.name}
                        </h4>
                        <p className="text-xs text-slate-500 font-sans line-clamp-1">
                          {p.description}
                        </p>
                        <div className="flex flex-wrap gap-x-3 text-[10px] text-slate-450 font-sans font-medium pt-1">
                          {p.specifications.slice(0, 2).map((s, idx) => (
                            <span key={idx}>• {s}</span>
                          ))}
                        </div>
                      </div>

                      <div className="flex-shrink-0 flex items-center gap-3 w-full sm:w-auto justify-end border-t border-slate-50 pt-3 sm:pt-0 sm:border-0">
                        <button
                          onClick={() => onAddToQuote(p, 1)}
                          disabled={isInCart}
                          className={`w-full sm:w-auto h-9 px-4 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                            isInCart
                              ? 'bg-slate-150 text-[#1B5E4A]'
                              : 'bg-[#1B5E4A] hover:bg-[#0F3B36] text-white'
                          }`}
                        >
                          {isInCart ? 'Added to Quote' : 'Add to List'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
