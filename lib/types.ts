export type CategoryId = 
  | 'all' 
  | 'demolicao' 
  | 'concreto' 
  | 'elevacao' 
  | 'compactacao' 
  | 'geradores' 
  | 'bombas' 
  | 'corte' 
  | 'ferramentas' 
  | 'limpeza' 
  | 'cacamba';

export interface Equipment {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  categoryName: string;
  tagline: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
  specifications: {
    label: string;
    value: string;
  }[];
  popularUses: string[];
  inStock: boolean;
  powerType?: string;
  weight?: string;
}

export interface CityCoverage {
  id: string;
  name: string;
  state: string;
  deliveryFee: number;
  estimatedDeliveryTime: string;
  popular: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  city: string;
  avatar: string;
  rating: number;
  comment: string;
  equipmentRented: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'entrega' | 'pagamento' | 'documentos' | 'manutencao';
}

export interface WorkCombo {
  id: string;
  title: string;
  description: string;
  iconName: string;
  equipmentIds: string[];
  discountPercentage: number;
}
