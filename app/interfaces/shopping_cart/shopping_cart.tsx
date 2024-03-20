import { Product } from "../product/product";

export interface CartItem {
  product: Product;
  quantity: number;
  price: number;
}

export interface ShoppingCart {
  id: number;
  userId: number; // Assuming a user is associated with the shopping cart
  items: CartItem[];
  createdAt?: Date;
  updatedAt?: Date;
}
