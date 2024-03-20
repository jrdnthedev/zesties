import { Product } from "../product/product";

export interface CartItem {
  product: Product;
}

export interface ShoppingCart {
  id: number;
  userId: number; // Assuming a user is associated with the shopping cart
  items: CartItem[];
  createdAt?: Date;
  updatedAt?: Date;
}
