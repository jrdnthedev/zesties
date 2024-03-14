import { Order } from "../order/order";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  orders: Order[]; // Array of previous orders
}
