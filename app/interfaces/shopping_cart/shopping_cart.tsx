export interface CartItem {
  id: number;
  name: string;
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
