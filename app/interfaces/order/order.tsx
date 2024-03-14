export interface Order {
  id: string;
  items: string[]; // Assuming items are represented as strings for simplicity
  totalPrice: number;
  createdAt: Date;
}
