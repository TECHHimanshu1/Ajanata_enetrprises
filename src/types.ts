export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  specifications: string[];
  features?: string[];
  brand?: 'Alaska' | 'Garlon' | 'Sterling' | 'Buhler' | 'Satake' | 'Milltec' | 'General';
  imagePlaceholderType: 'roll' | 'coupling' | 'screen' | 'shaft' | 'feeder' | 'milling' | 'nozzle' | 'bucket' | 'magnet' | 'lab-equipment' | 'valve' | 'machine' | 'pulley' | 'ring' | 'default';
  imageSrc?: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
  customRequirement?: string;
}

export interface QuoteCartState {
  items: QuoteItem[];
}

export interface ContactInquiry {
  name: string;
  companyName: string;
  mobile: string;
  email: string;
  productRequirements: string;
  message: string;
}

export type ActivePage = 'home' | 'about' | 'products' | 'dealers' | 'contact';
