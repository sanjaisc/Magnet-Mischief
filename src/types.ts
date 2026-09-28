export interface SampleMagnet {
  id: string;
  title: string;
  category: string;
  image: string;
  caption?: string;
  surface?: string;
}

export interface GiftingIdea {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface OrderDetails {
  orderNumber: string;
  quantity: number;
  personalizedText: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  imageFileName?: string;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  previewUrl?: string;
}
