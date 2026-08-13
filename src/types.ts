export type CategoryId = 'all' | 'demolicao' | 'concreto' | 'elevacao' | 'compactacao' | 'cacamba' | 'ferramentas';

export interface Equipment {
  id: string;
  name: string;
  category: CategoryId;
  categoryName: string;
  tagline: string;
  description: string;
  imageUrl: string;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  featured?: boolean;
  specifications: {
    label: string;
    value: string;
  }[];
  popularUses: string[];
  inStock: boolean;
  powerType?: string; // Electric, Gasoline, Manual
  weight?: string;
}

export interface QuoteItem {
  equipment: Equipment;
  quantity: number;
  period: 'daily' | 'weekly' | 'biweekly' | 'monthly';
  customDays?: number;
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
