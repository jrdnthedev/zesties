interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface ShoppingCart {
  id: string;
  userId: number; // Assuming a user is associated with the shopping cart
  items: CartItem[];
  createdAt: Date;
  updatedAt: Date;
}

export default ShoppingCart;
