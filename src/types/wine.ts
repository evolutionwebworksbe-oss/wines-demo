export type WineCategory = 'red' | 'white' | 'rosé' | 'sparkling';

export interface Wine {
  id: string;
  name: string;
  vintage: number;
  category: WineCategory;
  price: number;
  image: string;
  images: string[];
  description: string;
  tastingNotes: string;
  foodPairing: string;
  region: string;
  grapeVariety: string[];
  alcoholPercentage: number;
  volume: number; // in ml
  servingTemperature: string;
  inStock: boolean;
  featured: boolean;
  slug: string;
}

export interface CartItem {
  wine: Wine;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
