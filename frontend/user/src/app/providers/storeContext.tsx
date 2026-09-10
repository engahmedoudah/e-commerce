import { createContext, useContext } from 'react';

// Interfaces
export interface User {
  name: string;
  email: string;
  phone: string;
  token?: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  category: string;
  subcategory: string;
  collection: string;
  sizes: string[];
  colors: string[];
  description: string;
  reviews: Review[];
}

export interface cartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Address {
  id?: string;
  title?: string;
  recipientName?: string;
  recipientPhone?: string;
  country: string;
  city: string;
  street: string;
  zipCode: string;
}

export interface Order {
  id: string;
  items: cartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  address: Address;
  paymentMethod: string;
  status: 'Pending' | 'Shipped' | 'Delivered';
  createdAt: string;
}

interface StoreContextType {
  user: User | null;
  login: (email: string, name?: string) => boolean;
  register: (name: string, email: string, phone: string) => boolean;
  logout: () => void;
  products: Product[];
  categories: string[];
  subcategories: Record<string, string[]>;
  collections: string[];
  cart: cartItem[];
  addTocart: (product: Product, quantity: number, size: string, color: string) => void;
  removeFromcart: (productId: string, size: string, color: string) => void;
  updatecartQty: (productId: string, size: string, color: string, qty: number) => void;
  clearcart: () => void;
  countries: Record<string, string[]>;
  orders: Order[];
  createOrder: (address: Address, paymentMethod: string) => Order;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  addresses: Address[];
  addAddress: (address: Address) => void;
  updateAddress: (id: string, address: Address) => void;
  deleteAddress: (id: string) => void;
  selectedAddress: Address | null;
  setSelectedAddress: (address: Address | null) => void;
  isAddressPanelOpen: boolean;
  setAddressPanelOpen: (open: boolean) => void;
}

export const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within StoreProvider');
  return context;
};
